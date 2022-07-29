import React from "react";

import './homePage.styles.scss';

const HomePage = () => {
    return(
        <div className="homePage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <p className="sub-title">show now</p>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <p className="subtitle">show now</p>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SNEAKERS</h1>
                        <p className="sub-title">show now</p>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WOMENS</h1>
                        <p className="sub-title">show now</p>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">MENS</h1>
                        <p className="sub-title">show now</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default HomePage;