import React  from 'react';
import './toolbar.css';

const toolbar = props =>
(
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>

            </div>
            <div className="toolbar_logo"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li> <a href="#"> home</a></li>
                    <li><a href="#"> about</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export  default toolbar ;