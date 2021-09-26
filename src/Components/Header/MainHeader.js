import React from 'react';
import Header from './Header';
import "./header.css"

const MainHeader = () => {
    return (
        <header className="my-5">
            <Header id="header1" data="SS DEV TEAM" />
            <Header id="header2" data='4000000' />
        </header>
    );
};

export default MainHeader;