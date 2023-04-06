import React from "react";

import styles from "./Boards.module.css";

import NavBar from "../NavBar/NavBar";
import iconPesquisa from "../../../assets/pesquisa.svg";

import FormCard from "./FormCard";
import Cards from "./Cards";

import { MdMenu } from "react-icons/md";
import NavBarMobile from "../NavBar/NavBarMobile";

const Boards = () => {
  const [navBarMobile, setNavBarMobile] = React.useState(false)
  const [valueFiltro, setValueFiltro] = React.useState("");
  const [pesquisa, setPequisa] = React.useState("");
  const [criarCard, setCriarCard] = React.useState(false);
  const [card, setCard] = React.useState([
    {
      id: Math.floor(Math.random() * 10000),
      title: "Exemplo de Título",
      description: "Exemplo de Descrição",
      hastag: "#Exemplo",
      afazer: true,
      fazendo: false,
      feito: false,
    },
  ]);

  function handleChange({ target }) {
    setPequisa(target.value);
  }

  function criarCards() {
    setCriarCard(!criarCard);
  }

  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function limparPesquisa() {
    setPequisa("");
    inputRef.current.value = "";
  }

  const filteredData = card.filter((item) => {
    return item.title.toLowerCase().includes(pesquisa.toLowerCase());
  });

  const ActiveNavBar = () => {
    setNavBarMobile(!navBarMobile)
  }

  return (
    <main className="containerNav">
      <NavBar />
      {navBarMobile && <NavBarMobile CloseNavBar={ActiveNavBar} /> }
      <section className={styles.boards}>
        <h1 className={styles.title}>Meu Kanban</h1>
        <nav className={styles.menuNavegacaoMobile}>
          <MdMenu size={32} onClick={ActiveNavBar} />
        </nav>

        <menu className={styles.pesquisa}>
          <select
            value={valueFiltro}
            onChange={({ target }) => setValueFiltro(target.value)}
          >
            <option disabled value="">
              Filtrar
            </option>
            <option value="a-fazer">A fazer</option>
            <option value="fazendo">Fazendo</option>
            <option value="feitos">Feitos</option>
            <option value="todos">Todos</option>
          </select>

          <form className={styles.areaInput} onSubmit={handleSubmit}>
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
              ref={inputRef}
              autoComplete="off"
            />
            {pesquisa != "" &&
              filteredData.map((item) => {
                return (
                  <div key={item.id} className={styles.resultadoPesquisa}>
                    <a href={`#${item.id}`} onClick={limparPesquisa}>
                      {item.title}
                    </a>
                  </div>
                );
              })}
          </form>
        </menu>

        {valueFiltro === "" || valueFiltro === "todos" ? (
          <section className={styles.gridCards}>
            <div>
              <h3 className={styles.afazer}>A fazer</h3>
              {card.map((item) => {
                if (item.afazer === true) {
                  item.fazendo = false;
                  item.feito = false;
                  return (
                    <Cards
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      hastag={item.hastag}
                      afazer={item.afazer}
                      fazendo={item.fazendo}
                      feito={item.feito}
                      card={card}
                      setCard={setCard}
                    />
                  );
                }
              })}
            </div>

            <div>
              <h3 className={styles.fazendo}>Fazendo</h3>
              <div className={styles.card}>
                {card.map((item) => {
                  if (item.fazendo === true) {
                    item.afazer = false;
                    item.feito = false;
                    return (
                      <Cards
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        hastag={item.hastag}
                        afazer={item.afazer}
                        fazendo={item.fazendo}
                        feito={item.feito}
                        card={card}
                        setCard={setCard}
                      />
                    );
                  }
                })}
              </div>
            </div>

            <div>
              <h3 className={styles.feito}>Feito</h3>
              <div className={styles.card}>
                {card.map((item) => {
                  if (item.feito === true) {
                    item.afazer = false;
                    item.fazendo = false;
                    return (
                      <Cards
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        hastag={item.hastag}
                        afazer={item.afazer}
                        fazendo={item.fazendo}
                        feito={item.feito}
                        card={card}
                        setCard={setCard}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </section>
        ) : null}

        {valueFiltro === "a-fazer" ? (
          <div>
            <h3 className={styles.afazer}>A fazer</h3>
            <div className={styles.tabelaAfazeres}>
              {card.map((item) => {
                if (item.afazer === true) {
                  item.fazendo = false;
                  item.feito = false;
                  return (
                    <Cards
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      hastag={item.hastag}
                      afazer={item.afazer}
                      fazendo={item.fazendo}
                      feito={item.feito}
                      card={card}
                      setCard={setCard}
                    />
                  );
                }
              })}
            </div>
          </div>
        ) : null}

        {valueFiltro === "fazendo" ? (
          <div>
            <h3 className={styles.fazendo}>Fazendo</h3>
            <div className={styles.card}>
              <div className={styles.tabelaAfazeres}>
                {card.map((item) => {
                  if (item.fazendo === true) {
                    item.afazer = false;
                    item.feito = false;
                    return (
                      <Cards
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        hastag={item.hastag}
                        afazer={item.afazer}
                        fazendo={item.fazendo}
                        feito={item.feito}
                        card={card}
                        setCard={setCard}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        ) : null}

        {valueFiltro === "feitos" ? (
          <div>
            <h3 className={styles.feito}>Feito</h3>
            <div className={styles.card}>
              <div className={styles.tabelaAfazeres}>
                {card.map((item) => {
                  if (item.feito === true) {
                    item.afazer = false;
                    item.fazendo = false;
                    return (
                      <Cards
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        hastag={item.hastag}
                        afazer={item.afazer}
                        fazendo={item.fazendo}
                        feito={item.feito}
                        card={card}
                        setCard={setCard}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        ) : null}

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
