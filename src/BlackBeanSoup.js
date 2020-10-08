import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackBean from './assets/black-bean-soup.jpg';

const BlackBeanSoup = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={BlackBean} class="img-fluid" alt="Black Bean Soup" />
                </Col>
            </Row>
            <Row>
                <Col><h1>Black Bean Soup</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                
                <Col xs={12} md={10}>
                    <p>A good choice on a cold winter night.</p>                    
                    <h3>Serves 2</h3>
                    <ul>
                        <li>2 15 ounce cans black beans, undrained</li>     
                        <li>1 16 ounce can vegetable broth</li>     
                        <li>1/2 cup salsa</li>    
                        <li>1 tbsp chili powder</li>     
                        <li>shredded cheese (optional)</li>     
                        <li>sour cream (optional)</li>     
                        <li>chopped onion (optional)y</li>
                        <li>fresh chopped cilantro (optional)</li>     
                    </ul>
                    <h3>Directions</h3>
                    <ol type="1">
                        <li>Mash one can of black beans with potato masher or food processor.</li>
                        <li>Pour both cans of beans into medium saucepan. Add vegetable broth, salsa, and chili powder. Bring to a boil. If desired top with shredded cheese, sour cream, onion, and cilantro.</li>
                        <li>Serve hot. Makes four low-fat servings of vegetarian black bean soup.</li>
                    </ol>                    
                    <h3>Nutritional Information </h3>
                    <p>Calories: 213, Calories from Fat: 24. Total Fat: 2.7g
                    Cholesterol: 0mg, 0%
                    </p>

                </Col>
            </Row>
        </Container>
    )
}

export default BlackBeanSoup;
