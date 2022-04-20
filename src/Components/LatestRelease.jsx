import { Component } from "react";
import books from "../data/fantasy.json"
import {Container, Row, Col, Card, Button, Badge} from 'react-bootstrap'


const styles = {
    images: {    
    objectFit: "cover",
    height: "600px",
    marginRight: "auto",
    marginTop: "0",
    paddingTop: "0",
    cursor: "pointer",
    },
    card: {
        height: "850px",
        width: "400px"
    },
    buttonAndCategory: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginTop: "auto"
    },
        cardBody: {
        display: "flex",
        flexDirection: "column",
        flex: "1"
    },
    price: {
        fontFamily: "monospace",
    },
    priceAsin: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline"
    }

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
                     <div style={styles.priceAsin}>
                     <p>ASIN: {book.asin}</p>
                     <Badge pill variant="secondary">
                      {book.category.toUpperCase()}
                    </Badge>{' '}   

                     </div>
                     <div style={styles.buttonAndCategory}>
                      <Button variant="success">BUY NOW</Button>
                      

                    <p style={styles.price}>Only: ${book.price}</p>
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