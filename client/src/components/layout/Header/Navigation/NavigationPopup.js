import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './css/NavigationPopup.module.css';

import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const NavigationPopup = (props, ref) => {
  
  const [toggleCategoryList, setToggleCategoryList] = useState(false);

  const categoryListHandler = () => {
    setToggleCategoryList((prevToggleCategoryList) => (!prevToggleCategoryList));
  }

  const hideNavigation = () => {
    props.toggleNavigationHandler(false);
  }

  const hideNavigationHome = () => {
    setToggleCategoryList(() => false);
    props.toggleNavigationHandler(false);
  }

  return (
    <ul ref={ref} className={`${props.toggleNavigation && classes.showPopup} ${classes.popup}`}>
      <li className={classes.popupItem}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/" onClick={hideNavigationHome}><h4>Home</h4></NavLink></li>
      <li className={`${classes.popupItem}`} onClick = {categoryListHandler}>
        <span className={classes.categoryItem}><h4>Category</h4>
        <FontAwesomeIcon icon={faSortDown}/>
        </span>
        <ul className={`${classes.categoryList} ${toggleCategoryList && classes.showCategoryList}`}>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/projects" onClick={hideNavigation}><h4>Projects</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/certificates" onClick={hideNavigation}><h4>Certificates</h4></NavLink></li>
          <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/skills" onClick={hideNavigation}><h4>Skills</h4></NavLink></li>
        </ul>
      </li>
      {/* <li className={classes.popupItem}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/stories"><h4>Stories</h4></NavLink></li> */}
    </ul>
  );
};

const forwardNavigation = React.forwardRef(NavigationPopup);

export default forwardNavigation;