//server side rendered component, which renders a client side rendered Mission component
import Ship from "../components/Ships";

const Ships = () => {
  return (
    <div>
      <Ship />
    </div>
  );
};

export default Ships;
