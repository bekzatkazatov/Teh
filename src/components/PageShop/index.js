import React from 'react';
import './style.scss'
import List from "../../components/List/index";


const PageShop = ({products}) => {
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
            <div>
            <List products={products}/>
            </div>

        };


        </div>
    );
};

export default PageShop;