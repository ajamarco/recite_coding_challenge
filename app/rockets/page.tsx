//server side rendered component, which renders a client side rendered Rocket component
import Rocket from "../components/Rockets";

const Rockets = () => {
  return (
    <div>
      <Rocket />
    </div>
  );
};

export default Rockets;
