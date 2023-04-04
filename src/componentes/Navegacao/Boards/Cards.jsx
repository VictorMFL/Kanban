import React from "react";
import styles from "./Cards.module.css";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

import iconAfazer from "../../../assets/afazer.svg";
import iconFazendo from "../../../assets/fazendo.svg";
import iconFeito from "../../../assets/feito.svg";

const Cards = ({
  id,
  title,
  description,
  hastag,
  afazer,
  fazendo,
  feito,
  card,
  setCard,
}) => {
  const [virarCard, setVirarCard] = React.useState(false);

  function virar() {
    setVirarCard(!virarCard);
  }

  function RemoverCard(event) {
    const num = Number(event.target.id);
    const idDoObjetoASerRemovido = num;
    console.log(idDoObjetoASerRemovido);
    setCard((card) => card.filter((obj) => obj.id !== idDoObjetoASerRemovido));
  }

  function moverParaAfazer(event) {
    setCard((card) =>
      card.map((cards) => {
        if (cards.id === Number(event.target.id)) {
          return { ...cards, afazer: true, fazendo: false, feito: false };
        } else {
          return cards;
        }
      })
    );
  }

  function moverParaFazendo(event) {
    setCard((card) =>
      card.map((cards) => {
        if (cards.id === Number(event.target.id)) {
          return { ...cards, afazer: false, fazendo: true, feito: false };
        } else {
          return cards;
        }
      })
    );
  }

  function moverParaFeito(event) {
    setCard((card) =>
      card.map((cards) => {
        if (cards.id === Number(event.target.id)) {
          return { ...cards, afazer: false, fazendo: false, feito: true };
        } else {
          return cards;
        }
      })
    );
  }

  React.useEffect(() => {
    console.log(card);
  }, [moverParaFazendo]);

  return (
    <div className={virarCard ? styles.atrasCard : styles.areaCard} id={id} >
      {virarCard ? (
        <>
          <menu className={styles.menu}>
            <span className={styles.detalhes} onClick={virar}>
              <HiOutlineArrowLeft size={24} />
            </span>
            <div className={styles.iconeExcluir}>
              <MdDelete
                size={24}
                color="#ff0000"
                title="Excluir"
                onClick={RemoverCard}
                id={id}
                
              />
              </div>
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
                    id={id}
                    onClick={moverParaFazendo}
                  />

                  <img
                    src={iconFeito}
                    alt="icone para colocar o card na coluna Feito"
                    title="Mover para Feito"
                    id={id}
                    onClick={moverParaFeito}
                  />
                </>
              ) : fazendo === true ? (
                <>
                  <img
                    src={iconAfazer}
                    alt="icone para colocar o card na coluna A fazer"
                    title="Mover para A fazer"
                    id={id}
                    onClick={moverParaAfazer}
                  />

                  <img
                    src={iconFeito}
                    alt="icone para colocar o card na coluna Feito"
                    title="Mover para Feito"
                    id={id}
                    onClick={moverParaFeito}
                  />
                </>
              ) : feito === true ? (
                <>
                  <img
                    src={iconAfazer}
                    alt="icone para colocar o card na coluna A fazer"
                    title="Mover para A fazer"
                    id={id}
                    onClick={moverParaAfazer}
                  />

                  <img
                    src={iconFazendo}
                    alt="icone para colocar o card na coluna Fazendo"
                    title="Mover para Fazendo"
                    id={id}
                    onClick={moverParaFazendo}
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

      <div className={styles.card}>
        <p className={styles.title}>
          {title}
        </p>
        <p className={styles.description}>
          {description}
        </p>
        {hastag === "" ? null : (
          <span className={styles.hastag}>
            {hastag}
          </span>
        )}
      </div>
    </div>
  );
};

export default Cards;
