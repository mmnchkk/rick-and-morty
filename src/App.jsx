import Input from "./components/Input/input";
import CharacterCard from "./components/card/CharacterCard";
import { characters } from "./components/data/data";
import "./style/app.css";

function App() {
  return (
    <div className="app">
      <Input></Input>
      <div className="app-wrap">
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
