import React from "react";

import HeaderCartButton from './HeaderCartButton';
// import mealsImage from '../../assets/IMG_8457.HEIC'
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg"
          alt="Pizza and beer"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
