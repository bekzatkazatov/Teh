import React, {useState} from 'react';
import {useSelector} from "react-redux";
import './style.scss'


const BasketPage = () => {
    const cards = useSelector(state => state.cards)
    const [basketItems, setBasketItems] = useState(cards.map(card => ({...card, count: 1})));
    const inCrease = (id) => {
        const newItems = basketItems.map(item => item.id === id ? {...item, count: item.count + 1} : item)
        setBasketItems(newItems)
    }
    const deCrease = (id) => {
        const newItems = basketItems.map(item => item.id === id ? {...item, count: item.count - 1} : item)
        setBasketItems(newItems)
    }
    return (
        <div>
            {
                basketItems.map(card => (
                   <div className={'container'}>
                       <div className={'productbox'}>
                           <img className={'productbox-img'} src={card.imageUrl} alt=""/>
                           <h3>{card.productName}</h3>
                           <h4>{card.price}</h4>


                               <button disabled={card.amount === card.count} onClick={() => inCrease(card.id)}>+</button>
                               <h3>{card.count}</h3>
                               <button disabled={card.count === 0} onClick={() => deCrease(card.id)}>-</button>

                       </div>
                   </div>
                ))
            }
        </div>
    );
};

export default BasketPage;