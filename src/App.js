import logo from './logo.svg';
import './App.css';

const singers =[
                {name:'Dr Mahfuz', Song:'Ay buke ay'},
                {name:'Imran', Song:'Ay chad ay'},
                {name:'Arijit', Song:'Ay ghure ay'},
                {name:'Eva Rahman', Song:'Ay chole ay'},
                {name:'Agun', Song:'Ay ghure ay'},
  ]

function App() {
  const nayoks =['Ananta Jalil', 'Rubel', 'BappaRaz', 'Riaz', 'Jasim','Alamgir', 'Anowar']
  return (
    <div className="App">
      {
       /*  nayoks.map(nayok => <li>{nayok}</li>) */
      }
      {
        singers.map(singer => <Person name={singer.name} ></Person>)
      }
      {
        /* nayoks.map(nayok => <Person name={nayok}></Person>) */
      }
      {/* <Person name={nayoks[0]} Heroine='Borsha'></Person>
      <Person name={nayoks[2]} Heroine='Moushomi'></Person>
      <Person name={nayoks[3]} Heroine='Sabnur'></Person>
      <Person name={nayoks[1]} Heroine='Purnimaaa'></Person> */}
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
       <p>{props.Heroine}</p>
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
