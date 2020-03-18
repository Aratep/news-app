import React, {useState, useEffect} from 'react';
import {Spinner, Card, Button, Form} from 'react-bootstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as actions from '../../actions';
import history from "../../history";
import './styles.scss'

function NewsPage(props) {
    const {loading, news} = props.news;
    const [search, setSearch] = useState('');

    useEffect(() => {
        props.getNews();
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
        const searched = news && news.filter(n => n.title.toLowerCase().includes(e.target.value));
        console.log(searched)

    };

    const moreDetails = (id) => {
        props.getCurrentNews(id, news);
        history.push(`/news/${id}`)
    };

    // console.log(search)

    return (
        <section className="news-page">
            <h1>Today's top news</h1>
            <Form>
                <Form.Control
                    type="text"
                    name="search"
                    value={search}
                    placeholder="Search"
                    onChange={handleChange}
                />
            </Form>
            {loading && <Spinner animation="border"/>}
            <div className="news-page-news-block">
                {
                    news && news.map(n =>
                        <Card bg="light" style={{width: '18rem'}} key={n.id}>
                            <Card.Img variant="top" src={n.image}/>
                            <Card.Body>
                                <Card.Text>{n.title}</Card.Text>
                                <Button variant="link" onClick={() => moreDetails(n.id)}>More</Button>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </section>
    )
}

const mapStateToProps = (store) => {
    return {
        news: store.news
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getNews: actions.getNews,
        getCurrentNews: actions.getCurrentNews,
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)
