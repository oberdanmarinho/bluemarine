import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";
import Button from './components/ButtonLink';

// import ButtonLink from "../components/ButtonLink";

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="BlueMarine logo" />
      </a>

      <Button as="a" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}
