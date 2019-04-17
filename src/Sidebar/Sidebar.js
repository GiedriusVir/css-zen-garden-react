import React from 'react';
import './Sidebar.css';

const sidebar = () => {
    return(
        <div className="sidebar">
            <h3><a href="http://www.mezzoblue.com/zengarden/alldesigns/"
               title="View all Zen Garden designs">View all design</a></h3>
            <ul>
                <li>
                    <a className="design-name" href="http://www.csszengarden.com/221/" 
                    title="Mid Century Modern">Mid Century Modern</a> <br/>
                    by <a className="designer-name" href="http://www.andrewlohman.com/" 
                    title="Andrew Lohman">Andrew Lohman</a>
                </li>
                <li>
                    <a className="design-name" href="http://www.csszengarden.com/220/" 
                    title="Garments">Garments</a> <br/>
                    by <a className="designer-name" href="http://danmall.me/" 
                    title="Dan Mall">Dan Mall</a>
                </li>
                <li>
                    <a className="design-name" href="http://www.csszengarden.com/219/" 
                    title="Steel">Steel</a> <br/>
                    by <a className="designer-name" href="http://steffen-knoeller.de/" 
                    title="Steffen Knoeller">Steffen Knoeller</a>
                </li>
                <li>
                    <a className="design-name" href="http://www.csszengarden.com/218/" 
                    title="Apothecary">Apothecary</a> <br/>
                    by <a className="designer-name" href="https://trentwalton.com/" 
                    title="Trent Walton">Trent Walton</a>
                </li>
                <li>
                    <a className="design-name" href="http://www.csszengarden.com/217/" 
                    title="Screen Filler">Screen Filler</a> <br/>
                    by <a className="designer-name" href="https://elliotjaystocks.com/" 
                    title="Elliot Jay Stocks">Elliot Jay Stocks</a>
                </li>
                <li>
                    <a className="design-name" href="http://www.csszengarden.com/215/" 
                    title="A Robot Named Jimmy">A Robot Named Jimmy</a> <br/>
                    by <a className="designer-name" href="https://meltmedia.com/" 
                    title="meltmedia">meltmedia</a>
                </li>
            </ul>
        </div>
    )
}

export default sidebar;