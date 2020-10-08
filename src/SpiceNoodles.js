import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bavarian from './assets/bavarian-style-pasta.jpg';

const SpiceNoodles = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={Bavarian} class="img-fluid" alt="Bavarian Style Pasta" />
                </Col>
            </Row>
            <Row>
                <Col><h1>Bavarian Style Pasta</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                
                <Col xs={12} md={10}>
                    <p>Losely based on a recipe I found several years ago in either a Betty Crocker or Cambell's Kitchen Soup Cook Book.</p>
                    
                    <h3>Serves 4-6</h3>
                        <ul>
                            <li>2 Tbsp Extra Virgin Olive Oil.</li>
                            <li>1 Tbsp Grill Master's Steak Seasoning.</li>
                            <li>1 Medium-to-Large Vidalia Onion, cut into thin strips.</li>
                            <li>1 clove Garlic, diced</li>
                            <li>1 lb Smoked Polish Kielbasa, sliced on the diagonal.</li>
                            <li>1 lb Green Beans</li>
                            <li>1 Red Bell Pepper, cut into thin strips.</li>
                            <li>1 Yellow Bell Pepper, cut into thin strips.</li>
                            <li>1 lb Barilla Penne Pasta (454g).</li>
                            <li>1 can Cambell's Cream of Celery Soup (305g | 10&frac34; oz).</li>
                            <li>Skim Milk (305g | 10&frac34; oz) I re-use the soup can.</li>
                        </ul>
                    
                    <h3>Directions</h3>
                        <ol type="1">
                            <li>Bring a large pot of water to boil. Approxiamtely 4-6 quarts of water. Add salt to taste (optional).</li>
                            <li>In a large skillet, heat Extra Virgin Olive Oil and saut&eacute; onions, garlic, and steak seasoning for approximately 5-minutes.</li>
                            <li>Add Smoked Kielbasa and continue to saut&eacute; for 5 to 10 additional minutes.</li> 
                            <li>Be sure to brown the meat before adding the Cream of Celery Soup, Bell Peppers and Green Beans.</li> 
                            <li>After adding the Cream of Celery Soup, Bell Peppers, and Green Beans, cook for 10-minutes on meduim-high heat.</li> 
                            <li>Add Skim Milk while stirring occassionally.</li>
                            <li>Meanwhile, cook pasta according to package directions. Drain and toss with sauce.</li>
                            <li>Reduce heat to medium-low and for an additional 10-minutes.</li>
                            <li>Serve immediately with favorite salad and fruit.</li>
                        </ol>
                    
                    <h3>Cooking Notes</h3>
                        <p>For a healthier meal, use the 98% fat free Cambell's Cream of Celery Soup. Also you can substitute water for skim milk if you do not like a cream style suace.</p> 
                        <p>Alternatively, for a richer, cream style sauce, use 2% or whole milk. My prefernce is to use skim milk with this meal as it creates a light style sauce.</p>
                        <p>Another idea to add flavor, separate the Vidalia Onion in half and saut&eacute; one-half of the onion and steak seasoning in the Extra Virgin Olive Oil.</p>  
                        <p>Add the remaining onion with the Smoked Kielbasa, Bell Peppers, Green Beans and Cream of Celery Soup. You can use any variety of pasta noodle with this dish. In the past, I have used Farfalle (bow tie style pasta) in place of Penne pasta.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default SpiceNoodles;
