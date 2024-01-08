// import { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/img/burger-thursday.png';
export const Banner = () => {
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col XS={12} md={6} xl={7}>
              <span className="tagline">Welcome to our Restorant</span>
              <h1>{`excellent food, `}<span className="wrap"> The best restorant in Town  </span></h1>
              <p>visit us</p>
              <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle /></button>
            </Col>
            <Col>
              <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    )
}
