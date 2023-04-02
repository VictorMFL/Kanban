import React from "react";

import styles from "./Boards.module.css";

import NavBar from "../NavBar/NavBar";
import iconPesquisa from "../../../assets/pesquisa.svg";

import FormCard from "./FormCard";
import Cards from "./Cards";

const Boards = () => {
  const [value, setValue] = React.useState("");
  const [pesquisa, setPequisa] = React.useState("");
  const [criarCard, setCriarCard] = React.useState(false);
  const [card, setCard] = React.useState([
    {
      title: "Exemplo de Título",
      description: "Exemplo de Descrição",
      hastag: "#Exemplo",
      afazer: true,
      fazendo: false,
      feito: false,
    },
  ]);

  console.log(card);

  function handleChange({ target }) {
    setPequisa(target.value);
  }

  function criarCards() {
    setCriarCard(!criarCard);
  }

  return (
    <main className="containerNav">
      <NavBar />
      <section className={styles.boards}>
        <h1 className={styles.title}>Meu Kanban</h1>

        <menu className={styles.pesquisa}>
          <select
            value={value}
            onChange={({ target }) => setValue(target.value)}
          >
            <div className={styles.contraste}></div>
            <option disabled value="">
              Filtrar
            </option>
            <option value="feitos">Feitos</option>
            <option value="fazendo">Fazendo</option>
            <option value="a-fazer">A fazer</option>
          </select>

          <div className={styles.areaInput}>
            <label htmlFor="pesquisa">
              <img src={iconPesquisa} alt="Icone de uma Lupa" />
            </label>
            <input
              type="text"
              placeholder="cards"
              id="pesquisa"
              value={pesquisa}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </menu>

        <section className={styles.gridCards}>
          <div>
            <h3 className={styles.afazer}>A fazer</h3>
            {card.map((item, index) => {
              if(item.afazer === true) {
                return <Cards
                key={index}
                title={item.title}
                description={item.description}
                hastag={item.hastag}
              />
              }
            })}
          </div>

          <div>
            <h3 className={styles.fazendo}>Fazendo</h3>
            <div className={styles.card}>
              {card.map((item, index) => {
              if(item.fazendo === true) {
                return <Cards
                key={index}
                title={item.title}
                description={item.description}
                hastag={item.hastag}
              />
              }
            })}
            </div>
          </div>

          <div>
            <h3 className={styles.feito}>Feito</h3>
            <div className={styles.card}>
              {card.map((item, index) => {
              if(item.feito === true) {
                return <Cards
                key={index}
                title={item.title}
                description={item.description}
                hastag={item.hastag}
              />
              }
            })}
            </div>
          </div>
        </section>

        <button
          className={styles.criarCard}
          title="Criar card"
          onClick={criarCards}
        >
          +
        </button>
        {criarCard ? (
          <FormCard fecharForm={setCriarCard} setCard={setCard} card={card} />
        ) : (
          ""
        )}
      </section>
    </main>
  );
};

export default Boards;
