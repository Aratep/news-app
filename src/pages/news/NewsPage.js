import React, {useState, useEffect} from 'react';
import {Spinner, Card, Button, Form} from 'react-bootstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as actions from '../../actions';
import history from "../../history";
import './styles.scss'

function NewsPage(props) {
    const {loading, news} = props.news;
    const [word, setWord] = useState('');
    const [filteredNews, setFilteredNews] = useState(news);

    useEffect(() => {
        props.getNews();
        document.title = "News Page";
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setFilteredNews(news)
        // props.setUpdated(news)
    }, [news]);

    const handleChange = value => {
        setWord(value);

        if (value !== '') {
            setFilteredNews(news.filter(n => n.title.toLowerCase().includes(value)))
        } else {
            setFilteredNews(news)
        }
    };

    const moreDetails = (id) => {
        props.getCurrentNews(id, news);
        history.push(`/news/${id}`)
    };

    const getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span> {parts.map((part, i) =>
            <span
                key={i}
                className={part.toLowerCase() === highlight.toLowerCase() ? 'highlighted' : ''}
            >
            {part}
            </span>)
        } </span>;
    };

    return (
        <section className="news-page">
            <h3>Today's top news</h3>
            <Form onSubmit={e => e.preventDefault()}>
                <Form.Control
                    type="text"
                    name="search"
                    value={word}
                    placeholder="Search"
                    onChange={e => handleChange(e.target.value)}
                />
            </Form>
            {loading && <Spinner animation="border"/>}
            {
                filteredNews.length > 0 ?
                    <h5>There are {filteredNews.length} result(s)</h5> :
                    <h5>No results found</h5>
            }

            <div className="news-page-news-block">
                {
                    filteredNews && filteredNews.map(n =>
                        <Card bg="light" style={{width: '18rem'}} key={n.id}>
                            <Card.Img variant="top" src={n.image}/>
                            <Card.Body>
                                <Card.Text>{getHighlightedText(n.title, word)}</Card.Text>
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
        news: store.news,
        value: store.news.value,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getNews: actions.getNews,
        getCurrentNews: actions.getCurrentNews,
    }, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)
