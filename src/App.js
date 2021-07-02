
import './App.css';
import Movieslist from './components/Movieslist.js';
import  AddMovie from './AddMovie'
import {useState} from 'react'
import Nav from './components/Nav'



function App() {
  const [movies,setMovie] = useState([
    {id:0,title:'aa',description:'jdhfcjdhc', posterURL:'https://i.egycdn.com/pic/RHNhSUNlY21IY21tdk5FbWJtRUVjbW12TkVtYnZjbUVtdm1J.jpg', rating:5},
    {id:1,title:'bb',description:'jdhfcjdhc', posterURL:'https://i.egycdn.com/pic/RHNhSUNlY21IY21tbXZtYm1wbUVjd2ZOdm1wdmFtcEk.jpg', rating:4},
    {id:2,title:'kk',description:'jdhfcjdhc', posterURL:'https://i.egycdn.com/pic/WmFwZndlY21idmNtbW1qbWp2Y0VjdmNQdk5FYW1tbXpQ.jpg', rating:4},
    {id:3,title:'bb',description:'jdhfcjdhc', posterURL:'https://i.egycdn.com/pic/WmFwZndlY21ZWW1tVGp2TnVjdk5ZSXhsbW12TnY.jpg', rating:2},
    {id:4,title:'vv',description:'jdhfcjdhc', posterURL:'https://i.egycdn.com/pic/WmFwZndlY21ZRW12dk5tbVRiRWNtSVBtbW1qY3RjYWN3.jpg', rating:1},
    {id:5,title:'jj',description:'jdhfcjdhc', posterURL:'https://i.egycdn.com/pic/WmFwZndlY21ZcFl2bXZtYkVjUHh2Y21qdndLeG1q.jpg', rating:2},
    {id:6,title:'oo',description:'jdhfcjdhc', posterURL:'https://i.egycdn.com/pic/WmFwZndlY21IY21UVGJ2TkVFY1BtYnZOdm1qbGNOSQ.jpg', rating:3},
    {id:7,title:'Interstellar',description:' est un film de science-fiction ', posterURL:'https://i.egycdn.com/pic/WmFwZndlY21ibXBqbXZtYkVjUG1Zdm1tYW1FeG1i.jpg', rating:5}
])
const [searchmovie, setSearchmovie] = useState("");
 const HandleAdd=(newmovie)=>{setMovie([...movies,newmovie])}
 
 const[rate,setrate]=useState(0)
  return (
    <div>
      
    <Nav setSearchmovie={setSearchmovie} setrate={setrate}/>
    < AddMovie HandleAdd={HandleAdd}/> 
    
    <Movieslist    movies={movies} searchmovie={searchmovie} rate={rate} /> 
    
    <h1>Hello</h1>
   
   </div>
  );
}

      


export default App
