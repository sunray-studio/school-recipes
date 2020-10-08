import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShrimpP from './assets/shrimp-pasta.jpg';

const ShrimpPasta = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={ShrimpP} class="img-fluid" alt="Shrimp Pasta" />
                </Col>
            </Row>
            <Row>
                <Col><h1>Shrimp Pasta</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                
                <Col xs={12} md={10}>
                    <b>A healthier version of shrimp and pasta in a heavy cream sauce.</b>
                    <p>Heavy cream is so tasty when using it in cooking. It gives a rich, flavorful and 
                    decadent taste. The only problem is the high content of fat and cholesterol. A great 
                    substitution is Coconut Milk. Although high in calories, it has no cholesterol and has 
                    lots of fiber.</p>

                    <h3>Serves 4</h3>
                    <ul>
                        <li>1 can of Coconut Milk</li>
                        <li>1/2 a pound Row Shrimp, pilled and deveined</li>
                        <li>2 tbs olive oil</li>
                        <li>1/2 Finley Chopped Onion</li>
                        <li>1 tbs Chopped Fresh Ginger</li>
                        <li>2 Garlic Cloves</li>
                        <li>1/2 a Lemon</li>
                        <li>Salt & Pepper</li>
                        <li>1-2 tbs <i>“A taste of Thai”</i> Yellow or Red Curry Paste. Find it in the Ethnic 
                        section of your supermarket or <a href="http://www.atasteofthai.com/">
                        click to find where to buy.</a></li>
                        <li>2 tbs Chopped Parsley</li>
                        <li>1 pound Pasta of your liking</li>
                    </ul>
                    
                    <h3>Directions</h3>
                    
                    <ol type="1">
                        <li>Cook the pasta as instructed on package and keep about 1/2 a cup of the pasta’s 
                        water for later.</li>
                        <li>In a large skillet, heat olive oil and add chopped onion. Cook until the onion is 
                        transparent. Add garlic and ginger and cook another 30 seconds. Add coconut milk and mix 
                        well. Add curry and mix until combined. Add a touch of lemon salt and pepper. Cook for 
                        about 3 minutes. If the sauce gets too thick, you can add some of the reserved 
                        pasta water.</li>
                        <li>To the coconut milk sauce, add row shrimp and cook until the shrimps are pink all over. 
                        This should take about 3-5 minutes. Turn off  heat and add chopped parsley.</li>
                        <li>If the skillet is large enough, add the cooked pasta and stir until combined. This 
                        could be also done in the serving bowl itself. Serve on a family size plate or individual 
                        plates. <strong>Enjoy!</strong></li>
                    </ol>
                    
                    <h3>Cooking Notes</h3>
                    
                    <p>If you like heat with your food, you can add a pinch of chili flakes, chili powder 
                    or any kind of hot ingredient you like.</p>

                </Col>
            </Row>
        </Container>
    )
}

export default ShrimpPasta;
