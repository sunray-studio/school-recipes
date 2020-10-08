import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import LemonP from './assets/lemon-pie.jpg';

const LemonPie = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={LemonP} class="img-fluid" alt="Lemon Pie" />
                </Col>
            </Row>
            <Row>
                <Col><h1>Lemon Pie</h1></Col>
            </Row>
            <Row>
                <Col xs={0} md={2}></Col>
                
                <Col xs={12} md={10}>
                <p>A friend has come up with a simple recipe for a quick and easy family dessert.  
                It is rich and creamy with just the right amount of lemony tang to satisfy any sweet tooth.</p>
                    <p>Prep Time:     10 minutes.<br />
                    Cooking Time:  20 minutes.</p>

                <h3>Serves 8</h3>
                <ul>
                    <li>1 can Eagle Brand condensed milk (or equivalent)</li>
                    <li>4 egg yolks</li>
                    <li>1/2 cup of Real Lemon juice</li>
                    <li>1 medium sized graham cracker crust pie shell</li>
                    <li>1 cup of Cool Whip (or equivalnt whipped topping)</li>
                </ul>
			
			<h3>Directions</h3>

                <ol type="1">
                    <li>Preheat your oven to 350 degrees.</li>
                    <li>In a large bowl, stir the can of condensed milk, egg yolks and lemon juice until well mixed and has a smooth consistency.</li>
                    <li>Remove the plastic film from the premade graham cracker crust pie shell and make sure that it is not cracked and the inside is smooth.  Carefully pour in the pie filling ensuring that the filling is level all the way around the shell.</li>
                    <li>Place the prepared pie into the oven.  Make sure that you place the pie in the center of the baking rack to ensure that the pie cooks evenly.</li>
                    <li>Cook pie for about 20 minutes or until the edges of the pie crust are golden brown.  Remove from oven and place on a cooling rack for 20 to 30 minutes or until pie is completely cooled.</li>
                    <li>Once pie is cooled, you can top the pie with one cup of Cool Whip or your favorite whipped topping.</li>
                </ol>

			<h3>Cooking Notes</h3>
                <p>Be sure that egg yolks are completely free from the egg whites or it will ruin the consistency of the pie.  For a more tangy lemon flavor add 1/4 to 1/2 cup more lemon juice.  Pie should be chilled for best flavor.  You could also leave the whipped topping off of the whole pie after baking and just apply a dollop to a single slice.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default LemonPie;
