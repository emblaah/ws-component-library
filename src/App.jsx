import Button from "./Button";
import Alerts from "./Alerts";
import Badges from "./Badges";
import Card from "./Card";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-semibold text-lg">Buttons</h2>
      <Button color="blue" size="small" title="Small" disabled />
      <Button color="red" size="medium" title="Medium" />
      <Button color="green" size="large" title="Large" />

      <h2 className="font-semibold text-lg">Alerts</h2>

      <Alerts title="Error Alert" color="red" icon="error" />
      <Alerts title="Info Alert" color="blue" icon="info" />
      <Alerts title="Check Alert" color="green" icon="check" />

      <h2 className="font-semibold text-lg">Badges</h2>

      <Badges title="3 days ago" size="medium" color="red" icon="clock" />
      <Badges title="2 minutes ago" size="medium" color="green" icon="check" />

      <Card
        imgSrc={"https://placehold.co/400"}
        imgAlt={"placeholder image"}
        href={"https://placehold.co/"}>
        <h2 className="text-2xl px-2 pt-2">Noteworthy technology acquisitions 2021</h2>
        <p className="px-3 pb-2">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
}

export default App;
