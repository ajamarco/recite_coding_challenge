import React from "react";

interface ShipCardProps {
  ship_id: string;
  ship_name: string;
  image: string;
  active: boolean;
}

const ShipCard = ({ ship }: { ship: ShipCardProps }) => {
  return (
    <div key={ship.ship_id}>
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
        <img
          className="rounded-t-lg"
          src={ship.image}
          alt={ship.ship_name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            {ship.ship_name}
          </h5>
          <p className="mb-4 text-base">
            Is ship active: {ship.active ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShipCard;
