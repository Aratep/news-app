import React from 'react';
import {Container, Row} from 'react-bootstrap'

import AppRoutes from "./routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './App.scss';

function App() {
    return (
        <React.Fragment>
            <Container fluid>

                <Row>
                    <Header/>
                </Row>
                <Row>
                    <AppRoutes/>
                </Row>
                {/*<Row>*/}
                {/*    <Footer/>*/}
                {/*</Row>*/}
            </Container>
        </React.Fragment>
    );
}

export default App;
