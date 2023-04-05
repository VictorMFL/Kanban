import React from "react";

import styles from "./NavBarMobile.module.css";

import logo from "../../../assets/logo-branca.svg";
import { Link, NavLink } from "react-router-dom";
import BoardsSvg from "../../../assets/BoardsSvg";
import EquipeSvg from "../../../assets/EquipeSvg";
import RelatorioSvg from "../../../assets/RelatorioSvg";
import ConfigSvg from "../../../assets/ConfigSvg";

import { GrClose } from "react-icons/gr";

const NavBarMobile = ({ CloseNavBar }) => {
  const [boards, setBoards] = React.useState(false);
  const [equipe, setEquipe] = React.useState(false);
  const [relatorio, setRelatorio] = React.useState(false);
  const [config, setConfig] = React.useState(false);

  return (
    <div className={styles.NavBarMobile}>
      <section className={styles.navegacao}>
        <img src={logo} alt="logo" />
        <GrClose size={32} color="#fff" className={styles.fecharMenu} onClick={CloseNavBar} />
        <menu>
          <div>
            <Link to={"/Kanban/boards"} className={styles.icone}>
              <BoardsSvg color={boards ? "#ffffff" : "#CAB3FF"} />
            </Link>
            <NavLink
              to="/Kanban/boards"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ffffff" : "#CAB3FF",
                };
              }}
            >
              Boards
            </NavLink>
          </div>
        </menu>
      </section>
    </div>
  );
};

export default NavBarMobile;
