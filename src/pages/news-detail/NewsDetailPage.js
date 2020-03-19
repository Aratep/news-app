import React, {useEffect} from 'react';
import {Spinner, Card} from 'react-bootstrap';
import {connect} from 'react-redux'

import './styles.scss'

function NewsDetailPage(props) {
    const {currentNews} = props.currentNews;

    useEffect(() => {
        document.title = "Single News Page";
    }, []);


    const goBack = () => {
        props.history.goBack()
    };

    console.log(currentNews);

    return (
        <section className="news-detail-page">
            <div className="go-back-link" onClick={goBack}>Go Back</div>
            {!currentNews && <Spinner animation="border"/>}
            <Card bg="light">
                <Card.Img variant="top" src={currentNews.image}/>
                <Card.Body>
                    <Card.Title>{currentNews.title}</Card.Title>
                    <Card.Text>{currentNews.description}</Card.Text>
                </Card.Body>
            </Card>
        </section>
    )
}

const mapStateToProps = (store) => {
    return {
        currentNews: store.currentNews
    }
};

export default connect(mapStateToProps, null)(NewsDetailPage)
