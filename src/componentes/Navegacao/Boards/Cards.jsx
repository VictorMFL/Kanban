import React from "react";
import styles from "./Cards.module.css";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

import iconAfazer from "../../../assets/afazer.svg";
import iconFazendo from "../../../assets/fazendo.svg";
import iconFeito from "../../../assets/feito.svg";

const Cards = ({ id, title, description, hastag, afazer, fazendo, feito }) => {
  const [virarCard, setVirarCard] = React.useState(false);

  function virar() {
    setVirarCard(!virarCard);
  }

  function dados (event) {
    console.log(event.target)
  }

  function excluirCard(event) {
    console.log(event.target.id)
  }

  return (
    <div className={virarCard ? styles.atrasCard : styles.areaCard}>
      {virarCard ? (
        <>
          <menu className={styles.menu}>
            <span className={styles.detalhes} onClick={virar}>
              <HiOutlineArrowLeft size={24} />
            </span>
            <p>
              <MdDelete size={24} color="#ff0000" title="Excluir" />
            </p>
          </menu>
          <section className={styles.mover}>
            <h4>Mover para</h4>

            <div className={styles.movimentarCard}>
              {afazer === true ? (
                <>
                  <img
                    src={iconFazendo}
                    alt="icone para colocar o card na coluna Fazendo"
                    title="Mover para Fazendo"
                    onClick={dados}
                  />

                  <img
                    src={iconFeito}
                    alt="icone para colocar o card na coluna Feito"
                    title="Mover para Feito"
                  />
                </>
              ) : fazendo === true ? (
                <>
                  <img
                    src={iconAfazer}
                    alt="icone para colocar o card na coluna A fazer"
                    title="Mover para A fazer"
                  />

                  <img
                    src={iconFeito}
                    alt="icone para colocar o card na coluna Feito"
                    title="Mover para Feito"
                  />
                </>
              ) : feito === true ? (
                <>
                  <img
                    src={iconAfazer}
                    alt="icone para colocar o card na coluna A fazer"
                    title="Mover para A fazer"
                  />

                  <img
                    src={iconFazendo}
                    alt="icone para colocar o card na coluna Fazendo"
                    title="Mover para Fazendo"
                  />
                </>
              ) : null}
            </div>
          </section>
        </>
      ) : null}

      {virarCard ? null : (
        <span className={styles.detalhes} onClick={virar}>
          Detalhes
        </span>
      )}

      <div className={styles.card} onClick={excluirCard} id={id}>
        <p className={styles.title} id={id}>
          {title}
        </p>
        <p className={styles.description} id={id}>
          {description}
        </p>
        {hastag === "" ? null : (
          <span className={styles.hastag} id={id}>
            {hastag}
          </span>
        )}
      </div>
    </div>
  );
};

export default Cards;
