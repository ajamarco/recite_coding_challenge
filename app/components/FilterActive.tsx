//component to filter items - can be reused for several components that have active or inactive
//this component will show a radio button to filter items to show only active or all items

//setting up the props for the component
interface FilterProps {
  showActive: boolean;
  onFilterChange: (showAll: boolean) => void;
  obj: string;
}

const FilterActive: React.FC<FilterProps> = ({
  showActive,
  onFilterChange,
  obj,
}) => {
  //function to handle the change of the radio button
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

export default FilterActive;
