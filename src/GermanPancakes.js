import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Germancakes from './assets/german-pancakes.jpg';

const GermanPancakes = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={Germancakes} class="img-fluid" alt="German Buttermilk Pancakes" />
                </Col>
            </Row>
            <Row>
                <Col><h1>German Pancakes</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                
                <Col xs={12} md={10}>
                    <p>This is a great alternative to my favorite buttermilk pancakes.</p>
                    <ul>
                        <li>3 eggs</li>
                        <li>1/2 cup milk</li>
                        <li>1/2 cup flour</li>
                        <li>Pinch of Salt</li>
                        <li>1 tablespoon butter, melted</li>
                        <li>1 lemon</li>
                        <li>1 tablespoon powdered sugar</li>
                    </ul>
                
                    <h3>Directions</h3>
                    
                    <ol type="1">
                        <li>In a blender, add the eggs, milk, flour, salt and blend until smooth.</li>
                        <li>Pour the butter into your pie dish, and add the butter.</li>
                        <li>Bake, uncovered for 15-20 minutes at 400 degrees F.</li>
                        <li>Serve immediately with more butter lemon juice, and powdered sugar.</li>
                    </ol>

                    <h3>Cooking Notes</h3>
                    <p>These pancakes are also great with a variety of fruit, which can be baked in with the batter or added after. Enjoy!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default GermanPancakes;
