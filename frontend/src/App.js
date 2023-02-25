import './App.css';
import ButtonLogin from './components/button/ButtonLogin';
import InputForm from './components/input/InputForm';
import Links from './components/links/Links';

import imagemTelaLogin from './assets/imagemTelaLogin.png'

function App() {
  return (
    <div className="App">
      <h1>Faça o login</h1>
      <InputForm type={'email'} placeholder="E-mail"/>
      <InputForm type={'password'} placeholder="Senha"/>
      <ButtonLogin />
      <Links mensagem={'Esqueceu a sua '} msgLink='senha?' link={'https://github.com/Joao-Darwin'}/>
      <Links mensagem={'Não tem uma conta? '} msgLink='Criar' link={'https://github.com/Joao-Darwin'}/>
      <img src={imagemTelaLogin} className='imgTelaLogin'></img>
    </div>
  );
}

export default App;
