import Button from "./Button";
// import { Alerts } from "./Alerts";
// import { Badges } from "./Badges";
// import { Card } from "./Card";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold text-lg">Buttons</h2>
      <Button color="blue" size="small" title="Small" disabled />
      <Button color="red" size="medium" title="Medium" />
      <Button color="green" size="large" title="Large" />
      {/* <Alerts /> */}
      {/* <Badges /> */}
      {/* <Card />  */}
    </div>
  );
}

export default App;
