import { Component } from "react";
import {Card, CardGroup} from 'react-bootstrap'



class MyFooter extends Component {
    render() {
        return (

    <CardGroup>

  <Card>
    <Card.Body>
      <Card.Title>About us</Card.Title>
      <a href="#">About us</a><br></br>
      <a href="#">Something more</a>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>The company</Card.Title>
      <a href="#">About us</a><br></br>
      <a href="#">Something more</a>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Why we do what we do</Card.Title>
      <a href="#">About us</a><br></br>
      <a href="#">Something more</a>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
</CardGroup>

        )
    }
}

export default MyFooter