import React from 'react';
import './Sidebar.css';

const sidebar = () => {
    return(
        <div className="sidebar container">
            <a href="http://www.mezzoblue.com/zengarden/alldesigns/"
               title="View all Zen Garden designs">View all design</a>
            <ul>
                <li><a className="design-name" href="http://www.csszengarden.com/221/">Mid Century Modern</a> by 
                <a className="designer-name" href="http://www.andrewlohman.com/">Andrew Lohman</a></li>
                <li><a className="design-name" href="http://www.csszengarden.com/220/">Garments</a> by 
                <a className="designer-name" href="http://danmall.me/">Dan Mall</a></li>
                <li><a className="design-name" href="http://www.csszengarden.com/219/">Steel</a> by 
                <a className="designer-name" href="http://steffen-knoeller.de/">Steffen Knoeller</a></li>
                <li><a className="design-name" href="http://www.csszengarden.com/218/">Apothecary</a> by 
                <a className="designer-name" href="https://trentwalton.com/">Trent Walton</a></li>
                <li><a className="design-name" href="http://www.csszengarden.com/217/">Screen Filler</a> by 
                <a className="designer-name" href="https://elliotjaystocks.com/">Elliot Jay Stocks</a></li>
                <li><a className="design-name" href="http://www.csszengarden.com/215/">A Robot Named Jimmy</a> by 
                <a className="designer-name" href="https://meltmedia.com/">meltmedia</a></li>
            </ul>
        </div>
    )
}

export default sidebar;