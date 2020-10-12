import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Carousel1 from './assets/carousel-1.jpg';
import Carousel2 from './assets/carousel-2.jpg';
import Carousel3 from './assets/carousel-3.jpg';
import Joanna from './assets/joanna-cartwright.jpg';
import Brian from './assets/brian-withers.jpg';

const Home = () => {
    return (
      <Container fluid>
        <Row>
          <Col>
              <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Carousel1}
                  alt="Kid with pancake"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Carousel2}
                  alt="Dining with family and friends"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Carousel3}
                  alt="Eating with the office bunch"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 class={"display-3"}>Family Style Grub</h1>
            <p>We collected our favorite recipes from the Cooking Crew of West Elementary.
              Many of these meals can be cooked and served in less than an hour. With everything that goes on in a typical day—long work hours, after-school sports and activities—it's completely understandable that cooking dinner is the last thing you want to do or have to think hard about when you get home. These easy dinner recipes include all of your favorite dishes like chicken dinner recipes, ground beef recipes, and vegetarian dinner ideas that will keep meals interesting, yet easy. And because you'll need to satisfy your whole family, we've also included family-friendly dinner ideas that will satisfy even the pickiest little ones. If you're worried about the nutritional value of some of these dishes, don't be. We've made sure to add some healthy dinner recipes for those who want a more nutritious meal.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
            <Card>
              <Card.Img variant="top" src={Joanna} />
              <Card.Body>
                <Card.Title>Joanna Cartwright</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" href="/BonelessBuffaloWings">Favorite Recipe</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Brian} />
              <Card.Body>
                <Card.Title>Brian Withers</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" href="/ButtermilkPancakes">Favorite Recipe</Button>
              </Card.Body>
            </Card>
          </CardDeck>
          </Col>
        </Row>
    </Container>
)
}

export default Home;
