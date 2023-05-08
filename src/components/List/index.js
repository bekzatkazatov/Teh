import React, {useState} from 'react';
import ButtonAction from "../ButtonAction";
import {useDispatch, useSelector} from "react-redux";
import {AddProduct} from "../../Redux/action/action";
import './style.scss'
import Add from "../Starlogo/Add";


const List = ({products}) => {
    const cards = useSelector(state => state.cards)
    const dispatch = useDispatch()
    const handleAdd =(product)=>{
        if(cards.find(item => item.id === product.id)){
            return
        }
        dispatch(AddProduct(product))
    }
    return (
        <div className={'container'}>
            <div className="productList">
                {
                    products.map(product =>{

                        return <div key={product.id} className="productList-wrapper ">

                            <div className="productList-box" >
                                <p className={"productList-box__discount"}>Get up to {product.discount}% off Today Only!</p>
                                <img className={'productList-box__img'} src={product.imageUrl} alt=""/>
                                <div className="productList-box__action">
                                    <ButtonAction handleAdd={() => handleAdd(product)} products={product} />
                                </div>
                                <div className="productList-box__description">
                                    <h3>{product.productName}</h3>
                                    <h4>{product.price}c</h4>
                                    <h4 style={{textAlign:"unset",display:'flex', alignItems:'center',justifyContent:'space-between'}}><Add/>{product.rate}</h4>
                                </div>

                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    );
};

export default List;