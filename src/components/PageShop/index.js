import React from 'react';
import './style.scss'

const PageShop = () => {
    return (
        <div className={'pop-product'}>
            <h4>New Products</h4>
            <h2>Popular Products</h2>
            <nav>
                <ul>
                    <li style={{color:'#C72535'}}>Recent arrival</li>
                    <li>best sellers</li>
                    <li>special offers</li>
                    <li>featured in</li>
                </ul>
            </nav>
        </div>
    );
};

export default PageShop;