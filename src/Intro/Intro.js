import React from 'react';
import './Intro.css';

const intro = () => {
    return(
        <div className="intro">
            <h1>CSS Zen Test</h1>
            <div className="summary">
                <p>A demonstration of what can be accomplished 
                    through <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" title="CSS MDN">CSS</a>-based design.</p>
                <p>Everything was written 
                    using <a href="https://reactjs.org/" title="React">React.js</a>, icons was used 
                    from <a href="https://fontawesome.com/" title="Font Awesome">Font Awesome</a>.</p>
            </div>
            {/* anchor-icon list */}
            <div className="intro-icons">
                <a href="/Intro/Intro.js"><i className="fas fa-terminal"></i><span>HTML File</span></a>
                <a href="/Intro/Intro.css"><i className="fas fa-paint-roller"></i><span>CSS File</span></a>
            </div>
        </div>
    )
}

export default intro;