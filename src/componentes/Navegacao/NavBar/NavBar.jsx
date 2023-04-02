import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../../assets/logo-branca.svg"
import { Link, NavLink } from "react-router-dom";
import BoardsSvg from "../../../assets/BoardsSvg";
import EquipeSvg from "../../../assets/EquipeSvg";
import RelatorioSvg from "../../../assets/RelatorioSvg";
import ConfigSvg from "../../../assets/ConfigSvg";

const NavBar = () => {
  const [boards, setBoards] = React.useState(false);
  const [equipe, setEquipe] = React.useState(false);
  const [relatorio, setRelatorio] = React.useState(false);
  const [config, setConfig] = React.useState(false);
  return (
    <div className='containerNav'>
      <section className={styles.navegacao}>
        <img src={logo} alt="logo" />
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

          <div>
            <Link to={"/Kanban/equipes"} className={styles.icone}>
              <EquipeSvg color={equipe ? "#ffffff" : "#CAB3FF"} />
            </Link>
            <NavLink
              to="/Kanban/equipes"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ffffff" : "#CAB3FF",
                };
              }}
            >
              Equipes
            </NavLink>
          </div>

          <div>
            <Link to={"/Kanban/relatorios"} className={styles.icone}>
              <RelatorioSvg color={relatorio ? "#ffffff" : "#CAB3FF"} />
            </Link>
            <NavLink
              to="/Kanban/relatorios"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ffffff" : "#CAB3FF",
                };
              }}
            >
              Relatórios
            </NavLink>
          </div>

          <div>
            <Link to={"/Kanban/ajustes"} className={styles.icone}>
              <ConfigSvg color={config ? "#ffffff" : "#CAB3FF"} />
            </Link>
            <NavLink
              to="/Kanban/ajustes"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ffffff" : "#CAB3FF",
                };
              }}
            >
              Ajustes
            </NavLink>
          </div>
        </menu>
      </section>
    </div>
  );
};

export default NavBar;
