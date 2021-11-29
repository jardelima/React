import React from 'react';

const Header = () => {
    const { pathname } = window.location;
    
    console.log(pathname)

    return (
        <header>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/produtos">Produtos</a></li>
            </ul>
        </header>
    )
}

export default Header;
