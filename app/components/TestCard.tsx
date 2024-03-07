//TODO: remove this file when production

const TestCard = ({ text }: { text: string }) => {
  return (
    <div className="mx-3 mt-6 flex flex-col rounded-lg bg-teal-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
        <p className="mb-4 text-base">{text}</p>
      </div>
    </div>
  );
};

export default TestCard;
