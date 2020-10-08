import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import SockItToMe from './assets/sock-it-to-me-cake.jpg';

const SockItToMeCake = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={SockItToMe} class="img-fluid" alt="Sock It To Me Cake" />
                </Col>
            </Row>
            <Row>
                <Col><h1>Sock It To Me Cake</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                
                <Col xs={12} md={10}>
                <p>This cake has adorned the dessert trays and tables for every family gathering since I could remember.</p>
                <h5>Prep Time: 10 minutes</h5>
                <h5>Inactive Prep Time: 30 minutes</h5>
                <h5>Cook Time: 30 minutes</h5>
                <h3>Serves 8</h3>
                                        
                <b>Ingredients</b>
                    <ul>
                        <li>Butter for greasing the pan</li>
                    </ul>
                    
                <b>Filling</b>
                    <ul>
                        <li>1-1/4 Cup Chopped Pecans</li>
                        <li>3 Tbsp Brown Sugar</li>
                        <li>2-1/2 Tsp Ground Cinnamon</li>
                    </ul>
                    
                <b>Glaze</b>
                    <ul>
                        <li>1-1/2 Cups Confectioner's Sugar</li>
                        <li>2 Tbsp Lemon Juice</li>
                        <li>2 Tbsp Milk</li>
                    </ul>
                
                <b>Cake</b>
                    <ul>
                        <li>1 Package of Golden Cake Mix</li>
                        <li>1 Cup of Sour Cream</li>
                        <li>1/3 Cup Vegetable Oil</li>
                        <li>1/4 Cup Sugar</li>
                        <li>2 Tbsp All-Purpose Flour</li>
                        <li>4 Large eggs</li>
                    </ul>
                                    
                <h3>Directions</h3>
                    <ol type="1">
                        <li>Preheat the oven to 375&deg;F.</li> 
                        <li>Grease a 13 by 9-inch pan.</li>
                        <li>For the filling: In a medium bowl, stir together the pecans, brown sugar
                        and cinnamon until nicely combined and the pecans are fully coated.</li>
                        <li>For the glaze: In a second medium bowl, whisk together the
                        confectioners' sugar, lemon juice and milk until
                        all the sugar is fully incorporated and there are no lumps.</li> 
                        <li>Set the glaze to the side.</li>
                        <li>For the cake: Into a large bowl, add the cake mix, sour cream, vegetable
                        oil, sugar, 1/4 cup water, flour and eggs.</li> 
                        <li>Using an electric mixer, beat the ingredients until fully combined, about 4 minutes.</li>
                        <li>Pour about half of the batter into the prepared pan. Spread the pecan filling on top and
                        swirl into the batter. Pour the next half of the batter over and spread to make an even layer.</li>
                    </ol>           
                <h3>Cooking Notes</h3>
                    <p>Bake until a toothpick inserted in the center comes out clean, about 30
                    minutes. Remove from the oven, place on a cooling rack and let
                    cool in the pan for 30 minutes. Then invert the cake onto a plate or
                    platter, and let cool completely.</p>
                    <p>Whisk the glaze a bit to make sure it's still smooth and then drizzle all over the
                    cake. Let the glaze set a bit and serve!</p>

                </Col>
            </Row>
        </Container>
    )
}

export default SockItToMeCake;
