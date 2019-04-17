import React from 'react';
import './Article.css';

const article = (props) => {
    return(
        <div className="article">
            <h3>{props.pavadinimas}</h3>
            <p>{props.tekstas}</p>
        </div>
    )
}

export default article;