import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jalapeño from './assets/jalapeño-pepper-bars.jpg';

const JalapeñoPepperBars = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={Jalapeño} class="img-fluid" alt="Jalapeño Pepper Bars" />
                </Col>
            </Row>
            <Row>
                <Col><h1>Jalapeño Pepper Bars</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                <Col xs={12} md={10}>
                    <p>Recipe gifted by my coworker Teri.</p>
                    
                    <h3>Serves 4&ndash;8</h3>
                        <ul>
                            <li>5 eggs</li>
                            <li>5 tablespoons milk</li>
                            <li>3 tablespoons flour</li>
                            <li>2 cups of shredded Monterey Jack cheese</li>
                            <li>2 cup of shredded Cheddar cheese</li>
                            <li>8&ndash;10 ounces of jalapeño peppers (canned or fresh), drained/rinsed and chopped</li>
                        </ul>
                    
                    <h3>Directions</h3>
                        <ol type="1">
                            <li>Preheat the oven to 350&deg;F.</li> 
                            <li>Mix eggs, milk and flour.</li>
                            <li>Fold in cheese and peppers.</li> 
                            <li>Grease the bottom of a 9" &#215; 13" pan.</li> 
                            <li>Pour mixture into pan.</li> 
                            <li>Bake for 30&ndash;40 minutes.</li> 
                            <li>Slice into squares.</li>
                        </ol>

                    <h3>Cooking Notes</h3>
                    <p>These are great for parties and events. Enjoy!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default JalapeñoPepperBars;
