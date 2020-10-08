import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import KaleJ from './assets/kale-juice.jpg';

const KaleJuice = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={KaleJ} class="img-fluid" alt="Kale Juice" />
                </Col>
            </Row>
            <Row>
                <Col><h1>Kale Juice</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                
                <Col xs={12} md={10}>
                <b>Tastes like liquid Kale.</b>
                <p>Not nearly as good as buttermilk pancakes, but better for you.</p>
                    
                <h3>Serves 4</h3>
                <ul>
                    <li>3 medium carrots</li>
                    <li>1 medium big apple</li>
                    <li>2 stalks celery</li>
                    <li>3 cups of kale.</li>
                </ul>
                
                <h3>Directions</h3>
                
                <ol type="1">
                    <li>Wash apples, carrots and kale.</li>
                    <li>Cut carrots lengthwise to fit into your juicer.</li>				
                    <li>Cut apples to fit into the juicer. You can use the pple hearts as well.</li>
                    <li>Alternate pieces of kale, apples and carrot.</li>
                    <li>Separate carrot pulp and put it into a zip lock bag to use in baking.</li>
                    <li>Freeze kale pulp for homemade bouillon.</li>
                </ol>

                <h3>Cooking Notes</h3>
                <p>This amount produces four portions. You can store kale juice in a tightly closed jar for one day. Drink quickly to bypass your natural gag reflex.</p>

                </Col>
            </Row>
        </Container>
    )
}

export default KaleJuice;
