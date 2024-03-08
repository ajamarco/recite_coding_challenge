const Grid = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid-cols-1 sm:grid md:grid-cols-3">{children}</div>;
};

export default Grid;
