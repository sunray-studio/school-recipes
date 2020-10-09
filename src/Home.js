import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Carousel1 from './assets/carousel-1.jpg';
import Carousel2 from './assets/carousel-2.jpg';
import Carousel3 from './assets/carousel-3.jpg';

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
    </Container>
)
}

export default Home;
