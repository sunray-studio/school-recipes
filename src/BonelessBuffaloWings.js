import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuffaloWings from './assets/buffalo-wings.jpg';

const BonelessBuffaloWings = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={BuffaloWings} class="img-fluid" alt="Boneless Buffalo Wings" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Boneless Buffalo Wings</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                
                <Col xs={12} md={10}>
				<p>It's so good, I am sure you will enjoy them. It is a little time consuming but worth every second.</p>

				<h3>Serves 2</h3>
				<ul>
					<li>1 cup all-purpose flour</li>
					<li>2 teaspoons salt</li>
					<li>1/2 teaspoon black pepper</li>
					<li>1/4 teaspoon cayenne pepper</li>
					<li>1/4 teaspoon paprika</li>
					<li>1 egg</li>
					<li>1 cup milk</li>
					<li>2 chicken breast fillets</li>
					<li>4-6 cups vegetable oil</li>
					<li>1/4 cup hot sauce (Crystal or Frank's Louisiana)</li>
					<li>1 tablespoon margarine</li>
				</ul>

				<h3>Directions</h3>
				
                <ol type="1">
					<li>Combine flour, salt, peppers and paprika in a medium bowl.</li>
					<li>In another small bowl, whisk together egg and milk.</li>
					<li>Slice each chicken breast into 6 pieces.</li>
					<li>Preheat 4-6 cups of vegetable oil in a deep fryer to 375 degrees.</li>
					<li>One or two at a time, dip each piece of chicken into the egg mixture, then into the breading blend; then repeat the process so that each piece of chicken is double-coated.</li>
					<li>When all chicken pieces have been breaded, arrange them on a plate and chill for 15 minutes.</li>
					<li>When the chicken is done resting, drop each piece into the hot oil and fry for 5-6 minutes or until each piece is browned.</li>	
					<li>As chicken fries, combine the hot sauce and margarine in a small bowl.</li>	
					<li>Microwave sauce for 20-30 seconds or just until the margarine is melted, then stir to combine.</li>	
					<li>You can also use a small saucepan for this step.</li>
					<li>Just combine the hot sauce and margarine in the saucepan over low heat and stir until margarine is melted and ingredients are blended.</li>
					<li>When chicken pieces are done frying, remove them to a plate lined with a couple paper towels.</li>
					<li>Place the chicken pieces into a covered container such as a large jar with a lid.</li>
					<li>Pour the sauce over the chicken in the container, cover, and then shake gently until each piece of chicken is coated with sauce.</li>
					<li>Pour the chicken onto a plate and serve the dish with bleu cheese dressing and sliced celery on the side.</li>
                </ol>
				<h3>Cooking Notes</h3>
				
				<p>Optionally, serve wings with dipping sauces such as ranch and/or bleu cheese dressing, and celery sticks.</p>

                </Col>
            </Row>
        </Container>
    )
}

export default BonelessBuffaloWings;
