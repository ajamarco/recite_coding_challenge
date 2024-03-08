import React from "react";

interface CardProps {
  objId: string;
  name: string;
  image: string;
  active: boolean;
}

const ImageCard = ({ objId, name, image, active }: CardProps) => {
  return (
    <div key={objId}>
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
        <img
          className="rounded-t-lg"
          src={image}
          alt={image}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">{name}</h5>
          <p className="mb-4 text-base">
            Is ship active: {active ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
