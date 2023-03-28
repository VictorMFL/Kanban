import React from "react";

import styles from "./Boards.module.css";

import NavBar from "../NavBar/NavBar";
import lupa from "../../../assets/pesquisa.svg";

const Boards = () => {
  const [value, setValue] = React.useState("");

  return (
    <main className="containerNav">
      <NavBar />
      <section className={styles.boards}>
        <h1>Meu Kanban</h1>

        <div className={styles.pesquisa}>
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

          <div  className={styles.areaInput}>
            <img src={lupa} alt="Icone de uma Lupa" />
            <input
              type="text"
              placeholder="cards"
              className={styles.input}
            />
          </div>
        </div>
        {value}
      </section>
    </main>
  );
};

export default Boards;
