import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PizzaPie from './assets/pizza.jpg';

const Pizza = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={PizzaPie} class="img-fluid" alt="Pizza" />
                </Col>
            </Row>
            <Row>
                <Col><h1>Pizza</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                
                <Col xs={12} md={10}>
                    <b>Makes 2 pizzas</b>
                    <h3>Ingredients</h3>
                        <ul>
                            <li>1 16-ounce ball purchased fresh pizza dough</li>
                            <li>2/3 cup finely grated Piave or Parmesan cheese</li>
                            <li>2 1/4 teaspoons finely chopped fresh rosemary, divided</li>
                            <li>1/2 teaspoon dried crushed red pepper</li>
                            <li>Coarse kosher salt</li>
                            <li>1 1/2 tablespoons olive oil, divided</li>
                            <li>2 1/2 hot Italian sausages, casings removed</li>
                            <li>1 small red onion, thinly sliced</li>
                            <li>7 ounces fresh wild mushrooms (such as stemmed shiitake, oyster, and chanterelle), thickly sliced</li>
                            <li>1 3/4 cups coarsely grated whole-milk mozzarella cheese (about 7 ounces), divided</li>
                            <li>Chopped fresh parsley (optional)</li>
                        </ul>
                    <h3>Directions</h3>
                        <ol type="1">
                        <li>Position 1 rack in top third and 1 rack in bottom third of oven and preheat to 450°F. Lightly flour 2 baking sheets.</li> 
                        <li>Place dough on work surface; let stand until room temperature, about 20 minutes. Divide dough in half.</li>  
                        <li>Press and stretch each piece out on lightly floured surface to 5-inch round. Sprinkle each with 1/3 cup Piave cheese, 3/4 teaspoon rosemary, and 1/4 teaspoon crushed red pepper; sprinkle with coarse salt.</li>  
                        <li>Roll each piece of dough out to 10-inch round, pressing in seasonings. Transfer dough rounds to prepared baking sheets.</li> 
                        <li>Heat 1 tablespoon oil in large nonstick skillet over medium-high heat. Add sausage. Sauté until brown, breaking into 1/2-inch pieces with back of spoon, about 5 minutes. Using slotted spoon, transfer sausage to bowl.</li>  
                        <li>Add onion to skillet. Sauté until crisp-tender, about 2 minutes; transfer to plate. Add remaining 1/2 tablespoon oil to skillet. Add mushrooms and remaining 3/4 teaspoon rosemary; sprinkle with salt and pepper.</li>  
                        <li>Sauté until brown, about 5 minutes. Leaving 1/2-inch plain border, top each dough round with 3/4 cup mozzarella, then onion, sausage, and mushrooms.</li> 
                        <li>Bake until crust bottoms are crisp and brown, reversing sheets after 10 minutes, about 20 minutes total.</li>  
                        <li>Using large spatula, transfer pizzas to work surface. Sprinkle each with 2 tablespoons mozzarella, then parsley, if desired.</li> 
                    </ol>
                    <h3>Kitchen Tip</h3>
                    <p>Pizza-wheel cutters can drag toppings, so use a large chef's knife to cut pizzas into wedges.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Pizza;
