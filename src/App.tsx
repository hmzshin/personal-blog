import "./App.css";
import { languages } from "./data";

function App() {
  const infoKeys = Object.keys(languages["english"].profile.basicInfo);
  return <div> {infoKeys[0]}</div>;
}

export default App;
