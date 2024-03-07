//server side rendered component, which renders a client side rendered Mission component
import Mission from "../components/Missions";

const Missions = () => {
  return (
    <div>
      <Mission />
    </div>
  );
};

export default Missions;
