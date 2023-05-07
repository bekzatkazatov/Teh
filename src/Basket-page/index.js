import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './style.scss'
import {DeleteProduct} from "../Redux/action/action";


const BasketPage = () => {
    const cards = useSelector(state => state.cards)
    const dispatch = useDispatch()

    const [basketItems, setBasketItems] = useState(cards.map(card => ({...card, count: 1,
    })));
    const inCrease = (id) => {
        const newItems = basketItems.map(item => item.id === id ? {...item, count: item.count + 1} : item)
        setBasketItems(newItems)
    }
    const deCrease = (id) => {
        const newItems = basketItems.map(item => item.id === id ? {...item, count: item.count - 1} : item)
        setBasketItems(newItems)
    }
    const deleteItem = (id) => {
        const newItems = basketItems.filter(item => item.id !== id)
        setBasketItems(newItems)
        dispatch(DeleteProduct(id))
    }
    return (
        <div>
            {
                basketItems.map(card => (
                    <div key={card.id} className={'container'}>
                        <div className={'productbox'}>
                            <img className={'productbox-img'} src={card.imageUrl} alt=""/>
                            <h3>{card.productName}</h3>

                            <div style={{display:"flex",gap:'30px'}}>
                                <h4>{card.price}c</h4>
                                <button disabled={card.count === 0} onClick={() => deCrease(card.id)}>-</button>
                                <h3>{card.count}</h3>
                                <button disabled={card.amount === card.count} onClick={() => inCrease(card.id)}>+</button>
                                <button onClick={() => deleteItem(card.id)}>x</button>
                                <h3>{card.count * card.price}c</h3>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default BasketPage;