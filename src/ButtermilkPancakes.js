import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pancakes from './assets/pancakes.jpg';

const ButtermilkPancakes = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={Pancakes} class="img-fluid" alt="Buttermilk Pancakes" />
                </Col>
            </Row>
            <Row>
                <Col><h1>Buttermilk Pancakes</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                <Col xs={12} md={10}>
                <p>Fluffy with crispy, buttery edges... They are so good they need nothing more than a slick of butter over the top.</p>
			    <h3>Serves 2</h3>
			<ul>
				<li>1 cup Flour</li>
				<li>1 tsp. Baking Powder</li>
				<li>Pinch of Salt</li>
				<li>1 egg</li>
				<li>1 Tbsp Butter melted and cooled</li>
				<li>Butter for frying</li>
				<li>Maple Syrup gently warmed</li>
			</ul>
			
			<h3> Directions</h3>
            <ol type="1">
                <li>In a large bowl mix the flour, baking powder and salt. In a separate bowl mix the buttermilk, egg, melted butter and maple syrup or honey. Add the wet ingredients to the dry mix with a couple of swift strokes. Don't over mix.</li>
                <li>Get your griddle hot. You'll know it's ready if a drop of water skitters across the surface. Drop a small lump of batter onto the griddle. Use it to grease the griddle as it melts. Drop the batter on the griddle. Use it to grease the griddle as it melts. Drop the batter on the griddle by fat table spoons. Make sure there's enough room between the pancakes to get a spatula in to flip them.</li>
                <li>The edges will crisp up quickly. Don't let the pan get too hot. Bubbles will form on the surface of the batter and pop. As soon as the bubbles stop popping, the cakes are ready to flip. Flip and brown the bottom side.</li>
                <li>Serve immediately with more butter and warm maple syrup.</li>
            </ol>

			<h3>Cooking Notes</h3>
			
			<p>These pancakes can be varied endlessly. Try adding slices of banana or blueberries to the batter. You can also replace a third of the flour with corn meal for a wonderful, homey variation. A handful of chocolate chips added to the batter will tempt even the most finicky eater!</p>

                </Col>
            </Row>
        </Container>
    )
}

export default ButtermilkPancakes;
