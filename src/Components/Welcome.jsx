import { Component } from "react";
import {Jumbotron, Button} from 'react-bootstrap'





class Welcome extends Component {
    render () {
        return (

            <Jumbotron>
                    <h1>StriveBooks</h1>
                    <p>
                        Find just the book for you in a matter of seconds.💨
                    </p>
                    <p>
                        <Button variant="primary">Shop now</Button>
                    </p>
           </Jumbotron>

        )
    }
}

export default Welcome 