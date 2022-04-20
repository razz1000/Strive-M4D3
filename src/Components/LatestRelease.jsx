import { Component } from "react";
import books from "../data/fantasy.json"
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import "../stylesheet.css"

const styles = {
    images: {
    
    objectFit: "cover",
    height: "600px",
    marginRight: "auto",
    marginTop: "0",
    paddingTop: "0"
    },
    card: {
        height: "800px",
        width: "400px"
    },
    buttonAndCategory: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
        cardBody: {
        display: "flex",
        flexDirection: "column",
        rowGap: "40px"
    },

}


class LatestRelease extends Component {
    render () {
        return (
            <Container fluid>
            <Row>
                {books.map((book) => (
                  <Col>
                  <Card style={styles.card}>
                    <Card.Img variant="top" src={book.img} className="card-images" style={styles.images} />
                    <Card.Body style={styles.cardBody}>
                    <div>
                    
                      <Card.Title>{book.title}</Card.Title>
                      
                     </div>
                     <div style={styles.buttonAndCategory}>
                      <Button variant="success">BUY NOW</Button>
                      <Card.Text>
                        {book.category.toUpperCase()}
                          </Card.Text>
                      </div>
                    
                    </Card.Body>
                  </Card>
                  </Col>
                ))}
              <Col className="col-4">

                  
              </Col>
            </Row>
          </Container>
        


        )
    }
}

export default LatestRelease 