import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FrittataDish from './assets/frittata.jpg';

const Frittata = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={FrittataDish} class="img-fluid" alt="Frittata" />
                </Col>
            </Row>
            <Row>
                <Col><h1>Frittata</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                <Col xs={12} md={10}>
				<p>This is a quick and easy, no-nonsense recipe that makes a terrific frittata in hardly any time at all.</p>
				<h3>Serves 4 &nbsp; | &nbsp; Prep Time: 5 min. &nbsp; | &nbsp; Cook Time: 20 min.</h3>
				<ul>
					<li>2 teaspoons olive oil</li>
    				<li>1 small onion, thinly sliced</li>
    				<li>1/2 teaspoon salt</li>
    				<li>1 pound asparagus, tough ends snapped off, spears cut diagonally into 1-inch lengths</li>
    				<li>4 large eggs, lightly beaten</li>
    				<li>1 cup shredded Gruyere or Swiss cheese</li>
				</ul>
				
				<h3>Directions</h3>
				<ol type="1">
                    <li>Heat olive oil into a 10-inch oven-proof frying pan over medium high heat.</li> 
                    <li>Add onions and salt and cook, stirring occasionally, until onions are softened, about 3 minutes. </li>
                    <li>Add asparagus, reduce heat to medium-low, and cook, covered, until the asparagus are barely tender, 6 to 8 minutes. </li>
                    <li>Pour in eggs and cook until almost set, but still runny on top, about 2 minutes. While cooking, pre-heat oven broiler.</li>
                    <li>Sprinkle cheese over eggs and put in oven to broil until cheese is melted and browned, about 3 to 4 minutes.</li>
                    <li>Remove from oven with oven mitts and slide frittata onto a serving plate. Cut into wedges.</li>
                </ol>
                </Col>
            </Row>
        </Container>
    )
}

export default Frittata;

