import React from 'react'
import img from './assets/img.jpg'
import logo from './assets/logo.png'
import FormLogin from './componentes/FormLogin'

const App = () => {
  return (
    <div className='container'>
      <section>
        <div className='logo'>
          <img src={logo} alt='logo da empresa Vertigo' />
          <h1>Vertigo</h1>
        </div>
        <FormLogin />
      </section>

      <img src={img} alt='imagem de contraste' />
    </div>
  )
}

export default App
