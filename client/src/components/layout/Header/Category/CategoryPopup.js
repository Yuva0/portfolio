import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './css/CategoryPopup.module.css';

const CategoryPopup = (props, ref) => {
  return (
    <ul ref={ref} className={`${props.toggleCategory && classes.showPopup} ${classes.popup}`}>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/projects"><h4>Projects</h4></NavLink></li>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/certificates"><h4>Certificates</h4></NavLink></li>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/skills"><h4>Skills</h4></NavLink></li>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/hobbies"><h4>Hobbies</h4></NavLink></li>
      {/* <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/mindset"><h4>Mindset</h4></NavLink></li>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/philosophy"><h4>Philosophy</h4></NavLink></li>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/psychology"><h4>Psychology</h4></NavLink></li>
      <li className={classes.popupItemCategory}><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : '')} exact="true" to="/category/productivity"><h4>Productivity</h4></NavLink></li> */}
    </ul>
  );
};

const forwardNavigation = React.forwardRef(CategoryPopup);

export default forwardNavigation;