import React from 'react'
import mealsimage from '../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
      <React.Fragment>
          <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
          </header>
          <div className={classes['main-image']}>
            <img src={mealsimage} alt="meal dinning table." />
          </div>
      </React.Fragment>
  )
}

export default Header