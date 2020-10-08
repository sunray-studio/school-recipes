import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChocolateChip from './assets/chocolate-chip-cookies.jpg';

const ChocolateChipCookies = () => {
    return (
    <Container fluid>
        <Row>
            <Col>
                <img src={ChocolateChip} class="img-fluid" alt="Chocolate Chip Cookies" />
            </Col>
        </Row>
        <Row>
            <Col><h1>Chocolate Chip Cookies</h1></Col>
        </Row>
        <Row>
            <Col xs={0} md={2}></Col>
            
            <Col xs={12} md={10}>
                <p>Delicious chocolate chip cookies with rice krispies.  A classic with a nice
                twist.</p>
            <h3>Serves 21</h3>
            <ul>
                <li>1 1/2 cups all-purpose flour</li>
                <li>1/2 teaspoon baking soda</li>	
                <li>1/4 teaspoon salt</li>
                <li>1/2 cup margarine or butter, softened</li>
                <li>1 cup sugar</li>
                <li>1 egg</li>
                <li>2 cups Rice Krispies</li>
                <li>1 package semi-sweet chocolate morsels</li>
            </ul>
	
            <h3>Directions</h3>

            <ol type="1">
                <li>Stir together flour, baking soda and salt. Set aside.</li>
                <li>In large electric mixer bowl, beat together margarine and sugar until 
                light and fluffy. Add egg and vanilla. Beat well. Add flour mixture, mixing 
                until combined. Stir in Kellogg's® Rice Krispies® cereal and chocolate chips. 
                Drop by level tablespoon onto baking sheets coated with cooking spray.</li>
                <li>Bake at 350 degrees F about 12 minutes or until lightly browned. Remove 
                immediately from baking sheets and cool on wire racks. Store in airtight container.</li>
            </ol>

            <h3>Cooking Notes</h3>
            <p>Prep Time: 20 mins<br/>
            Total Time: 1 hr 10 mins</p>
            </Col>
        </Row>
    </Container>
    )
}

export default ChocolateChipCookies;
