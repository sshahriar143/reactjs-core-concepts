import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <Person name='Ananta Jalil' Heroine='Borsha'></Person>
      <Person name='Rubel' Heroine='Moushomi'></Person>
      <Person name='Bapparaz' Heroine='Sabnur'></Person>
      <Person name='Riaz' Heroine='Purnimaaa'></Person>
      <p>Bio Of Mr.Ajay......</p>
      <Friend phone='01774402393' name='Shahriar'></Friend>
      <Friend phone='01942646143' name='Shimul'></Friend>
    </div>
  );
}
function Person(props){
  console.log(props);
  return (
    <div className='person'>
       <h1>{props.name}</h1>
       <p>Heroine:{props.Heroine}</p>
    </div>
  )
  } 

  function Friend(props){
    return (
      <div className='container'>
        <h1>{props.name}</h1>
        <p>Phone:{props.phone}</p>
      </div>
    )
  }

export default App;
