//TODO: remove this file when production
import TestCard from "./TestCard";

const TestGrid = () => {
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
      <TestCard text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
      <TestCard text="This is a longer card with supporting text below as a natural lead-indsfsdfsdfasdfasdfasdfasdfasdfasdfasdfadsdf to additional content. This content is a little bit longer." />
      <TestCard text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
      <TestCard text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
      <TestCard text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
    </div>
  );
};

export default TestGrid;
