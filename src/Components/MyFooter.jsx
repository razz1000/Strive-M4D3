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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione, ducimus consequatur dolorem placeat eius nobis, molestiae quaerat ut illo adipisci. Deleniti, perspiciatis vitae velit minus minima reiciendis labore culpa!
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus voluptatem harum, eligendi fugit iusto voluptas molestias sit dicta culpa incidunt, repellendus rerum illum quis dignissimos minima beatae ea? Debitis, laboriosam!
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cum accusamus, molestiae nobis incidunt deserunt eos? Veniam esse odit magni quaerat quibusdam! Corporis nam rem voluptatum, praesentium id reiciendis aut!
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