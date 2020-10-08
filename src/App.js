import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';


import Home from './Home';
import Measurements from './Measurements';
import ButtermilkPancakes from './ButtermilkPancakes';
import Frittata from './Frittata';
import GermanPancakes from './GermanPancakes';
import Pizza from './Pizza';
import JalapeñoPepperBars from './JalapeñoPepperBars';
import ChocolateChipCookies from './ChocolateChipCookies';
import LemonPie from './LemonPie';
import MonsterCookies from './MonsterCookies';
import Pudding from './Pudding';
import SockItToMeCake from './SockItToMeCake';
import BlackBeanSoup from './BlackBeanSoup';
import BonelessBuffaloWings from './BonelessBuffaloWings';
import KaleJuice from './KaleJuice';
import ShrimpPasta from './ShrimpPasta';
import SpiceNoodles from './SpiceNoodles';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/ButtermilkPancakes' component={ButtermilkPancakes} />
      <Route exact path='/Frittata' component={Frittata} />
      <Route exact path='/GermanPancakes' component={GermanPancakes} />
      <Route exact path='/JalapeñoPepperBars' component={JalapeñoPepperBars} />
      <Route exact path='/Pizza' component={Pizza} />
      <Route exact path='/ChocolateChipCookies' component={ChocolateChipCookies} />
      <Route exact path='/LemonPie' component={LemonPie} />
      <Route exact path='/MonsterCookies' component={MonsterCookies} />
      <Route exact path='/Pudding' component={Pudding} />
      <Route exact path='/SockItToMeCake' component={SockItToMeCake} />
      <Route exact path='/SpiceNoodles' component={SpiceNoodles} />
      <Route exact path='/BlackBeanSoup' component={BlackBeanSoup} />
      <Route exact path='/BonelessBuffaloWings' component={BonelessBuffaloWings} />
      <Route exact path='/KaleJuice' component={KaleJuice} />
      <Route exact path='/ShrimpPasta' component={ShrimpPasta} />
      <Route exact path='/Measurements' component={Measurements} />
    </Switch>
  </main>
)

const Header = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand href="/">School Recipes</Navbar.Brand>
    <Navbar.Toggle aria-controls="collapse, navbarNavDropdown" data-target="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
          <NavDropdown title="Baked Goods" id="collapsible-nav-dropdown">
            <Link className="dropdown-item" to="/ButtermilkPancakes">Buttermilk Pancakes</Link>
            <Link className="dropdown-item" to="/Frittata">Frittata</Link>
            <Link className="dropdown-item" to="/GermanPancakes">German Pancakes</Link>
            <Link className="dropdown-item" to="/JalapeñoPepperBars">Jalapeño Pepper Bars</Link>
            <Link className="dropdown-item" to="/Pizza">Pizza</Link>
          </NavDropdown>
          <NavDropdown title="Savories" id="collaspible-nav-dropdown">
            <Link className="dropdown-item" to="/SpiceNoodles">Bavarian Style Pasta</Link>
            <Link className="dropdown-item" to="/BonelessBuffaloWings">Boneless Buffalo Wings</Link>
            <Link className="dropdown-item" to="/BlackBeanSoup">Black Bean Soup</Link>
            <Link className="dropdown-item" to="/ShrimpPasta">Shrimp Pasta</Link>
            <Link className="dropdown-item" to="/KaleJuice">Kale Juice</Link>
          </NavDropdown>
          <NavDropdown title="Desserts" id="collaspible-nav-dropdown">
            <Link className="dropdown-item" to="/ChocolateChipCookies">Chocolate Chip Cookies</Link>
            <Link className="dropdown-item" to="/LemonPie">Lemon Pie</Link>
            <Link className="dropdown-item" to="/MonsterCookies">Monster Cookies</Link>
            <Link className="dropdown-item" to="/SockItToMeCake">Sock It To Me Cake</Link>
            <Link className="dropdown-item" to="/Pudding">Pumpkin Pudding</Link>
          </NavDropdown>
          <Nav className="mr-auto">
            <Nav.Link href="/Measurements">Table Of Measurements</Nav.Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;
