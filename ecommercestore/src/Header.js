import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';

function Header() {

  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to="/">
      <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
      </Link>
     <div className='header__search'>
        <input className='header__searchInput' type="text"/>
        <SearchIcon sx={{ fontSize: 40 }} className='header__searchIcon'/>
        </div>

        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello Guest</span>
                <span className='header__optionLineTwo'>Hello Guest</span>
                </div>
            <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
                </div>
            <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
                </div>
        <Link to="/checkout">
        <div className='header__basketOption'>
          <ShoppingBasketIcon/>
          <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          {/* * the ? is called optional chaining if it can't do it, it won't freak out but instead gracefully useImperativeHandle(
            the error, */}
        </div>
        </Link>

        </div>
    </div>
  )
}

export default Header
