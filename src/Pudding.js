import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import PuddingD from './assets/pudding.jpg';

const Pudding = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={PuddingD} class="img-fluid" alt="Pudding" />
                </Col>
            </Row>
            <Row>
                <Col><h1>Pumpkin Pudding</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                
                <Col xs={12} md={10}>
                <b>Simple & Healthy Dessert</b>
                <h3>Serves 3-4</h3>
                    <ul>
                        <li>Pumpkin: 350g</li>
                        <li>Eggs: 3</li>
                        <li>Sugar: 60g</li>
                        <li>Milk: 250cc</li>
                        <li>Whipped Cream: 50cc</li>
                    </ul>
                    
                <h3>Directions</h3>
                    <ol type="1">
                        <li>Peeled off pumpkin skin and cut the pumpkin into small pieces and use a microwave to heat them</li>
                        <li>Until the pumpkin is completely soft, crush it with a scraper.</li>
                        <li>Mix egg and sugar first. Then put the pumpkin and mix together.</li>
                        <li>Add the cooked milk and whipped cream then mix again until it's smooth.</li>
                        <li>Steam the pudding for 35 to 40 minutes then leave the pudding to cool.</li>
                    </ol>
                <h3>Cooking Notes</h3>
                <p><em>The pumpkin pudding is healthy for breakfast and snacks! You can cut it into slices when it is firm up.</em></p>
                </Col>
            </Row>
        </Container>
    )
}

export default Pudding;
