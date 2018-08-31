import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><a href="/">Main Page</a></li>
                        <li><a href="/secondPage.html">Second Page</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}