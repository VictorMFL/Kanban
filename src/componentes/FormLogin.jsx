import React from "react";
import styles from "./FormLogin.module.css";
import Eye from "../assets/eye.png"
import EyeOff from "../assets/eye-off.png"
import { Link, useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [email, setEmail] = React.useState('')
  const [senha, setSenha] = React.useState('')
  const [error, setError] = React.useState(null)
  const [olho, setOlho] = React.useState(false)

  function validateEmail(value) {
    if(value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value)) {
      setError('Digite um e-mail válido')
      return false
    } else {
      setError(null)
      return true
    }
  }

  function handleBlur ({target}) {
    validateEmail(target.value)
  }

  function handleChange({target}) {
    if(error) validateEmail(target.value)
    setEmail(target.value)
  }

  function handlePasswrd({target}) {
    setSenha(target.value)
  }

  function handleClick() {
    setOlho(!olho)
  }

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    window.localStorage.setItem('Email', email)
    window.localStorage.setItem('Senha', senha)
    navigate('/Kanban/home')
  }

  return (
    <section className={styles.formulario}>
      <h1>Acesse a plataforma</h1>
      <p>
        Faça login ou registre-se para começar a construir seus projetos ainda
        hoje.
      </p>

      <form className={styles.form} method="POST" onSubmit={handleSubmit} >
        <label htmlFor="iemail">E-mail</label>
        <input
          type="email"
          name="email"
          id="iemail"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          style={error && {border: '1px solid #ed3a5a'}}
        />
        {error && <p className={styles.error} >{error}</p>}

        <div className={styles.senha}>
          <label htmlFor="ipassword">Senha</label>
          <Link className={styles.esqueceuSenha} to={'/Kanban/esqueceu-senha'} >Esqueceu a senha?</Link>
        </div>
        <div className={styles.password}>
          <input
            type={olho ? 'text' : "password"}
            name="password"
            id="ipassword"
            placeholder="Digite sua senha"
            required
            onChange={handlePasswrd}
            value={senha}
          />
          
          <div className={styles.olho} onClick={handleClick} >
            <img src={olho ? Eye : EyeOff} alt='Icone Olho para Vizualizar senha' />
          </div>
        </div>

        <button>Entrar</button>
      </form>

      <p className={styles.inscrevaSe}>
        Ainda não tem uma conta? <Link to={'/Kanban/inscreva-se'} >Inscreva-se</Link>
      </p>
    </section>
  );
};

export default FormLogin;
