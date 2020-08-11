import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./ui/Header";
import InputSearchName from "./ui/InputSearchName";
import InputSearchHp from "./ui/InputSearchHp";
import CharacterGrid from "./components/CharacterGrid";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [queryName, setQuery] = useState("");
  const [queryHp, setQueryHp] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.pokemontcg.io/v1/cards?name=${queryName}&hp=${queryHp}`
      );
      setItems(result.data["cards"]);
      setIsLoading(false);
    };
    fetchItems();
  }, [queryName, queryHp]);

  return (
    <div className="App">
      <main className="catalog">
        <div className="catalog__heading">
          <Header />
          <InputSearchName getQuery={(q) => setQuery(q)} />

          <InputSearchHp getQueryHp={(qH) => setQueryHp(qH)} />
        </div>
        <CharacterGrid items={items} isLoading={isLoading} />
      </main>
    </div>
  );
  // }
};

export default App;
