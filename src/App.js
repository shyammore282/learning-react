import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import BtnModule from "./button.module.css"; // module file import
import { Col, Container, Row, Card, Button } from "react-bootstrap"; // use for componet it is required
import { useState } from "react";

function App() {
  let [count, setCount] = useState(1); // state hooks it is provide dynamic data on web page

  let displayAlert = () => {
    // it is arrow function
    setCount(count + 1);
  };

  let addNum = (a, b) => {
    console.log(a + b);
  };

  let [pshow, setpshow] = useState(false); // state managrment

  let [pass, setpass] = useState(false);
  let [MenuStatus, setMenuStatus] = useState(false); // for menu icon

  return (
    <div className="App">
      {/*code for menu hide and show  */}
      <button className="micon" onClick={() => setMenuStatus(!MenuStatus)}>
        {MenuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${MenuStatus ? "activeMenu" : ""}`}>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>course</li>
          <li>galary</li>
        </ul>
      </div>
      {/*  <Header email="skumarmoure@gmail.com"/> {/* it is props which provides data to parent to child */}
      <Footer />
      <div>
        <h1 className="text-warning">hello world</h1>
      </div>
      {count}
      <Container fluid>
        {" "}
        {/* it is react-bootstrap componet in component first later must be capital */}
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">Our Courses</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="3">
              welcom to coll
            </Col>
            <Col lg="3" md="3">
              welcom{" "}
            </Col>
            <Col lg="3" md="3">
              welcom to coll
            </Col>
            <Col lg="3" md="3">
              welcom to coll
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Row>
      </Container>
      <Button onClick={displayAlert}>submit</Button>
      <Button onClick={() => addNum(20, 45)}>addNum</Button>
      <Button
        variant="primary"
        onClick={() => {
          setpshow(!pshow);
        }}
      >
        {" "}
        {/* using tarnary oprator */}
        {pshow ? "Hide" : "show"}
      </Button>
      {pshow ? <p>welcome to react app</p> : ""}
      <Button className={BtnModule.error}>Danger</Button>{" "}
      {/*calling of module.css methode */}
      <Button className={BtnModule.warning}>BTn</Button>{" "}
      {/*calling of module.css methode */}
      <input type={pass ? "text" : "password"} />{" "}
      <button
        onClick={() => {
          setpass(!pass);
        }}
      >
        {pass ? "Hide" : "show"}
      </button>
      {/*it is show amd hide the password */}
    </div>
  );
}

export default App;

function ProductItem() {
  // it is fundamental function
  return (
    <div className="col-lg-2 mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
