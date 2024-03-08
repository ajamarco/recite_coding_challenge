// Code for the MissionCard component, with no image and no filter

// set up the props for the component, even containing some unused props, that can be added later
interface MissionCardProps {
  mission_name: string;
  mission_id: string;
  manufacturers: string[];
  payload_ids: string[];
  wikipedia: string;
  website: string;
  twitter: string;
  description: string;
}

// the component itself, with the props
const MissionCard = ({
  mission_name,
  mission_id,
  manufacturers,
  payload_ids,
  wikipedia,
  website,
  twitter,
  description,
}: MissionCardProps) => {
  //render the data in a card
  return (
    <div className="mx-3 mt-6 flex flex-col rounded-lg bg-teal-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">
          {mission_name}
        </h5>
        <p className="mb-4 text-base">{description}</p>
      </div>
    </div>
  );
};

export default MissionCard;
