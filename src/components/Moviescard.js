import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
 function Moviescard(props){
     return(
  <div className="movie">
  <Card>
    <Card.Img variant="top" src={props.el.posterURL} className="img" alt="ph"/>
    <Card.Body>
      
      <Card.Title>{props.el.title}</Card.Title>
      <Card.Text>
        {props.el.description}
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{props.el.rating}</small>
    </Card.Footer>
  </Card>
  </div>

     )
 }
 export default Moviescard