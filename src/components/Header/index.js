import React from 'react';
import logo from '../assets/Group 165.png';
import './style.scss'


const Header = () => {
    return (
       <div className= {'container'}>
           <div className={'infoLogo'}>
               <div>
                   <img src={logo}  alt=""/>
               </div>

               <nav>
                   <ul className={'infoLogo-nav'}>
                       <li>Home</li>
                       <li>About</li>
                       <li>Product</li>
                       <li>Blog</li>
                       <li>Shop</li>
                       <li>Contact US</li>
                   </ul>
               </nav>
               <div className={'infoLogo-search'}>
                   <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z" stroke="#030D15" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M17 17L13.1333 13.1334" stroke="#030D15" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>


                   <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <circle cx="17.5" cy="17.5" r="17.5" fill="#F4F9FC"/>
                       <path d="M17.455 18.0121C12.6476 18.0121 10 20.2864 10 24.4161C10 24.7386 10.2614 25 10.5839 25H24.326C24.6486 25 24.91 24.7386 24.91 24.4161C24.91 20.2866 22.2624 18.0121 17.455 18.0121ZM11.1891 23.8321C11.4188 20.7444 13.5239 19.1801 17.455 19.1801C21.3861 19.1801 23.4912 20.7444 23.7211 23.8321H11.1891Z" fill="#030D15"/>
                       <path d="M17.455 9C15.2467 9 13.5815 10.6987 13.5815 12.9512C13.5815 15.2696 15.3192 17.1555 17.455 17.1555C19.5909 17.1555 21.3285 15.2696 21.3285 12.9513C21.3285 10.6987 19.6633 9 17.455 9ZM17.455 15.9878C15.963 15.9878 14.7494 14.6257 14.7494 12.9513C14.7494 11.3385 15.8873 10.1679 17.455 10.1679C18.9976 10.1679 20.1606 11.3644 20.1606 12.9513C20.1606 14.6257 18.947 15.9878 17.455 15.9878Z" fill="#030D15"/>
                   </svg>

               </div>

           </div>

       </div>
    );
};

export default Header;