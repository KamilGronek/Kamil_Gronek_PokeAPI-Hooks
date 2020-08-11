import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <>
      <article className="card">
        <div className="card__inner">
          <div className="card__front">
            <img src={item.imageUrl} alt="" />
          </div>
          <div className="card__back">
            <header className="card_header">
              <h1>{item.name}</h1>
              <p>Nr: {item.number}</p>
            </header>

            <ul>
              <li>
                <strong>HP:</strong> {item.hp}
              </li>
              <li>
                <strong>Supertype:</strong> {item.supertype}
              </li>
              <li>
                <strong>Subtype:</strong> {item.subtype}
              </li>
              <li>
                <strong>Rarity:</strong> {item.rarity}
              </li>
              <li>
                <strong>Types:</strong> {item.types}
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default CharacterItem;
