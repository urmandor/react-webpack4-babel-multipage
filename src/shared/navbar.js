import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/">Main Page</a></li>
                    <li><a href="/secondPage.html">Second Page</a></li>
                </ul>
            </div>
        );
    }
}