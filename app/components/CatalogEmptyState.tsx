interface CatalogEmptyStateProps {
  onClear: () => void;
}

export function CatalogEmptyState({ onClear }: CatalogEmptyStateProps) {
  return (
    <div className="catalog-empty">
      <h3>Nenhum perfume combina com esses filtros.</h3>
      <p>Tente outra família, ocasião ou nota — ou limpe os filtros para ver todo o catálogo.</p>
      <button className="button button-primary" type="button" onClick={onClear}>Ver todo o catálogo</button>
    </div>
  );
}
