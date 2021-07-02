import { render } from "@testing-library/react"
import Moviescard from '../components/Moviescard'
import {CardGroup} from 'react-bootstrap'


function Movieslist({movies,searchmovie}){

    return(
        <CardGroup className="card">

        {movies.filter(el=>el.title.includes(searchmovie)&& el.rate).map((el,i)=><Moviescard el={el}/>
        )}
       </CardGroup>
    )

}
export default Movieslist