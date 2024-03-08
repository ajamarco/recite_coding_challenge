interface FilterProps {
  showActive: boolean;
  onFilterChange: (showAll: boolean) => void;
  obj: string;
}

const FilterShip: React.FC<FilterProps> = ({
  showActive,
  onFilterChange,
  obj,
}) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(e.target.value === "onlyActive");
  };
  return (
    <form>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="all"
            checked={!showActive}
            onChange={handleFilterChange}
          />
          Show All {obj}
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="onlyActive"
            checked={showActive}
            onChange={handleFilterChange}
          />
          Show Only Active {obj}
        </label>
      </div>
    </form>
  );
};

export default FilterShip;
