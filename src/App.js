import logo from './logo.svg';
import './App.css';

const number =1234565;
const singer = {Name:'Famous Dr. Mahfuz', Job:"We all know"}
const actor = {Name:'Hero Alam', Job:'Comedian'}

const singerStyle ={
  color:'purple',
  backgroundColor: 'white' ,
  borderRadius:10
}
//   
const sumStyle ={
  color:'red' ,
  backgroundColor:'green' ,
  borderRadius:10
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Dude,React!How Are You?</h3>
        </div>
        <div className="music">
          <p style={sumStyle}>Sum:{45651+number}</p>
          <p style={singerStyle}>Name: {singer.Job} {singer.Name}</p>
          <p style={{color:'blue', backgroundColor:'yellow' , borderRadius:10}}>Name:{actor.Job} {actor.Name}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
