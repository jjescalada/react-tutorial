import React from 'react';
import NewsItem from "./news_list_item";

const NewsList = (props) => {

    const items = props.news.map((item) => {
        return(
            <NewsItem item={item}/>
        );
    });

    return (
        <div>{items}</div>
    )
};

export default NewsList;