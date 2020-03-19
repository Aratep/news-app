import React from 'react';
import {Container, Row} from 'react-bootstrap'

import AppRoutes from "./routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './App.scss';

function App() {
    return (
        <Container fluid>
            <Row><Header/></Row>
            <Row><AppRoutes/></Row>
            <Row><Footer/></Row>
        </Container>
    );
}

export default App;
