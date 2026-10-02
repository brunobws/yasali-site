"use client";

/* eslint-disable react-hooks/set-state-in-effect -- URL query parameters hydrate the interactive filter state. */

import { useEffect, useMemo, useState } from "react";
import { products } from "../lib/catalog";
import { CatalogEmptyState } from "./CatalogEmptyState";
import { CatalogFilters } from "./CatalogFilters";
import { ProductGrid } from "./ProductGrid";
import { absoluteUrl } from "../lib/site";

const whatsappUrl = "https://wa.me/5515981744696?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Yasali%20e%20gostaria%20de%20conhecer%20os%20perfumes.";

export function CatalogExperience() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("Todos");
  const [usageFilter, setUsageFilter] = useState("Todos");
  const [familyFilter, setFamilyFilter] = useState("Todas");
  const [giftOnly, setGiftOnly] = useState(false);
  const [sortOption, setSortOption] = useState("relevance");
  const [filtersReady, setFiltersReady] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gender = params.get("perfil");
    const usage = params.get("momento");
    const family = params.get("familia");
    const sort = params.get("ordenar");
    setSearchTerm(params.get("q") ?? "");
    setGenderFilter(["Masculino", "Feminino", "Unissex"].includes(gender ?? "") ? gender as string : "Todos");
    setUsageFilter(["Dia", "Noite", "Dia e noite"].includes(usage ?? "") ? usage as string : "Todos");
    setFamilyFilter(family && products.some((product) => product.family === family) ? family : "Todas");
    setGiftOnly(params.get("presente") === "true");
    setSortOption(["relevance", "price-asc", "price-desc", "name"].includes(sort ?? "") ? sort as string : "relevance");
    setFiltersReady(true);
  }, []);

  useEffect(() => {
    if (!filtersReady) return;
    const params = new URLSearchParams();
    if (searchTerm.trim()) params.set("q", searchTerm.trim());
    if (genderFilter !== "Todos") params.set("perfil", genderFilter);
    if (usageFilter !== "Todos") params.set("momento", usageFilter);
    if (familyFilter !== "Todas") params.set("familia", familyFilter);
    if (giftOnly) params.set("presente", "true");
    if (sortOption !== "relevance") params.set("ordenar", sortOption);
    const query = params.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}`);
  }, [familyFilter, filtersReady, genderFilter, giftOnly, searchTerm, sortOption, usageFilter]);

  const familyOptions = useMemo(() => Array.from(new Set(products.map((product) => product.family))).sort(), []);
  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase("pt-BR");
    const matches = products.filter((product) => {
      const searchableText = [product.name, product.brand, product.family, product.description, product.notes.join(" "), product.usage].join(" ").toLocaleLowerCase("pt-BR");
      return (!normalizedSearch || searchableText.includes(normalizedSearch)) &&
        (genderFilter === "Todos" || product.gender === genderFilter) &&
        (usageFilter === "Todos" || product.usage === usageFilter) &&
        (familyFilter === "Todas" || product.family === familyFilter) &&
        (!giftOnly || product.giftable);
    });
    const priceValue = (price: string) => price === "Sob consulta" ? Number.POSITIVE_INFINITY : Number.parseFloat(price.replace(/[^\d,]/g, "").replace(".", "").replace(",", "."));
    if (sortOption === "price-asc") return [...matches].sort((a, b) => priceValue(a.price) - priceValue(b.price));
    if (sortOption === "price-desc") return [...matches].sort((a, b) => priceValue(b.price) - priceValue(a.price));
    if (sortOption === "name") return [...matches].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    return matches;
  }, [familyFilter, genderFilter, giftOnly, searchTerm, sortOption, usageFilter]);

  const hasActiveFilters = Boolean(searchTerm || genderFilter !== "Todos" || usageFilter !== "Todos" || familyFilter !== "Todas" || giftOnly || sortOption !== "relevance");
  const catalogStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catálogo de perfumes Yasali",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: absoluteUrl(`/produto/${product.slug}/`),
    })),
  };
  const clearFilters = () => {
    setSearchTerm(""); setGenderFilter("Todos"); setUsageFilter("Todos"); setFamilyFilter("Todas"); setGiftOnly(false); setSortOption("relevance");
  };

  return (
    <section className="catalog-page" aria-labelledby="catalog-page-title">
      <div className="container">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogStructuredData) }} />
        <div className="catalog-page-intro">
          <p className="eyebrow">Catálogo Yasali</p>
          <h1 id="catalog-page-title">Escolha seu próximo perfume.</h1>
          <p>Veja as opções da Yasali e filtre por perfil, momento, família olfativa ou presente.</p>
          <div className="catalog-intro-meta" aria-label="Diferenciais do catálogo">
            <span>{products.length} fragrâncias</span>
            <span>Filtros por momento</span>
            <span>Ajuda pelo WhatsApp</span>
          </div>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Não sabe por onde começar? Fale com a Yasali</a>
        </div>
        <CatalogFilters searchTerm={searchTerm} genderFilter={genderFilter} usageFilter={usageFilter} familyFilter={familyFilter} giftOnly={giftOnly} sortOption={sortOption} familyOptions={familyOptions} hasActiveFilters={hasActiveFilters} onSearchChange={setSearchTerm} onGenderChange={setGenderFilter} onUsageChange={setUsageFilter} onFamilyChange={setFamilyFilter} onGiftChange={setGiftOnly} onSortChange={setSortOption} onClear={clearFilters} />
        <p className="catalog-result-count" aria-live="polite">{filteredProducts.length} {filteredProducts.length === 1 ? "perfume encontrado" : "perfumes encontrados"}</p>
        <ProductGrid products={filteredProducts} />
        {filteredProducts.length === 0 && <CatalogEmptyState onClear={clearFilters} />}
      </div>
    </section>
  );
}
