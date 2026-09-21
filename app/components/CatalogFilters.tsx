import type { ChangeEvent } from "react";

interface CatalogFiltersProps {
  searchTerm: string;
  genderFilter: string;
  usageFilter: string;
  familyFilter: string;
  giftOnly: boolean;
  sortOption: string;
  familyOptions: string[];
  hasActiveFilters: boolean;
  onSearchChange: (value: string) => void;
  onGenderChange: (value: string) => void;
  onUsageChange: (value: string) => void;
  onFamilyChange: (value: string) => void;
  onGiftChange: (value: boolean) => void;
  onSortChange: (value: string) => void;
  onClear: () => void;
}

export function CatalogFilters({
  searchTerm,
  genderFilter,
  usageFilter,
  familyFilter,
  giftOnly,
  sortOption,
  familyOptions,
  hasActiveFilters,
  onSearchChange,
  onGenderChange,
  onUsageChange,
  onFamilyChange,
  onGiftChange,
  onSortChange,
  onClear,
}: CatalogFiltersProps) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => onSearchChange(event.target.value);
  const handleGender = (event: ChangeEvent<HTMLSelectElement>) => onGenderChange(event.target.value);
  const handleUsage = (event: ChangeEvent<HTMLSelectElement>) => onUsageChange(event.target.value);
  const handleFamily = (event: ChangeEvent<HTMLSelectElement>) => onFamilyChange(event.target.value);
  const handleGift = (event: ChangeEvent<HTMLInputElement>) => onGiftChange(event.target.checked);
  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => onSortChange(event.target.value);

  return (
    <div className="catalog-filters" aria-label="Filtros do catálogo">
      <div className="catalog-search-field">
        <label htmlFor="catalog-search">O que você procura?</label>
        <input id="catalog-search" type="search" value={searchTerm} onChange={handleSearch} placeholder="Ex.: baunilha, floral, Khamrah..." />
      </div>
      <label>
        Perfil
        <select value={genderFilter} onChange={handleGender}>
          <option>Todos</option>
          <option>Masculino</option>
          <option>Feminino</option>
          <option>Unissex</option>
        </select>
      </label>
      <label>
        Momento
        <select value={usageFilter} onChange={handleUsage}>
          <option>Todos</option>
          <option>Dia</option>
          <option>Noite</option>
          <option>Dia e noite</option>
        </select>
      </label>
      <label>
        Família olfativa
        <select value={familyFilter} onChange={handleFamily}>
          <option>Todas</option>
          {familyOptions.map((family) => <option key={family}>{family}</option>)}
        </select>
      </label>
      <label>
        Ordenar por
        <select value={sortOption} onChange={handleSort}>
          <option value="relevance">Relevância</option>
          <option value="price-asc">Menor preço</option>
          <option value="price-desc">Maior preço</option>
          <option value="name">Nome (A–Z)</option>
        </select>
      </label>
      <label className="catalog-gift-filter">
        <input type="checkbox" checked={giftOnly} onChange={handleGift} />
        <span>Ideal para presente</span>
      </label>
      {hasActiveFilters && <button className="catalog-clear" type="button" onClick={onClear}>Limpar filtros</button>}
    </div>
  );
}
