import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Monster from './assets/monster-cookies.jpg';

const MonsterCookies = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={Monster} class="img-fluid" alt="Monster Cookies" />
                </Col>
            </Row>
            <Row>
                <Col><h1>Monster Cookies</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                
                <Col xs={12} md={10}>

                <b>Recipe from parents of my classmates from elementary school.</b>
                <p>My mother makes these for my sisters and I when we visit home, mostly for holidays. Works great for holiday parties and large get togethers.</p>
                    
                <h3>Yields 80-90 cookies</h3>
                    <ul>
                        <li>12 eggs</li>
                        <li>2lbs brown sugar</li>
                        <li>4 cups white sugar</li>
                        <li>1 TBSP light corn syrup</li>
                        <li>8 tsp baking soda</li>
                        <li>1 lb. butter or margerine</li>
                        <li>18 cups oatmeal</li>
                        <li>1 (12 oz) package chocolate chips</li>
                        <li>1 lb. M&amp;M candies</li>
                    </ul>
                    
                <h3>Directions</h3>
                    <ol type="1">
                        <li>Mix in very large pan. Drop by ice cream scoop and flatten slightly. Put about 6 to a cookie sheet</li>
                        <li>Bake at 350&deg;F for 12 minutes. Do not over bake.</li>
                        <li>Allow to stand for a few minutes before removing from cookie sheet.</li>
                    </ol> 

                <h3>Cooking Notes</h3>

                    <p>Recipe <u>DOES NOT</u> call for flour.</p>

                </Col>
            </Row>
        </Container>
    )
}

export default MonsterCookies;
