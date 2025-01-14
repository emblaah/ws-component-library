import Button from "./Button";
import Alerts from "./Alerts";
// import { Badges } from "./Badges";
// import { Card } from "./Card";
import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div>
      <h2 className="font-semibold text-lg">Buttons</h2>
      <Button color="blue" size="small" title="Small" disabled />
      <Button color="red" size="medium" title="Medium" />
      <Button color="green" size="large" title="Large" />

      <h2 className="font-semibold text-lg">Alerts</h2>

      <Alerts title="Error Alert" color="red" icon="error" />
      <Alerts title="Info Alert" color="blue" icon="info" />
      <Alerts title="Check Alert" color="green" icon="check" />

      {/* <Badges /> */}
      {/* <Card />  */}
    </div>
  );
}

export default App;
