import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import classes from './css/Header.module.css';
import logo from '../../../assets/images/logo.png';
import name from '../../../assets/images/name.png';
import SettingsButton from './Settings/SettingsButton';
import NavigationButton from './Navigation/NavigationButton';
import CategoryButton from './Category/CategoryButton';


const Header = (props) => {
  const [hideShowIcon, setHideShowIcon] = useState(faAngleUp);
  const [hideHeader, setHideHeader] = useState(false)


  function hideShowHeader(){
    if(hideShowIcon === faAngleUp){
      setHideShowIcon(faAngleDown);
    }
    else{
      setHideShowIcon(faAngleUp);
    }
    setHideHeader((toggleHeader) => !toggleHeader);
  };

  return (
    <div id="header" className={`${classes.header} ${hideHeader && classes.hideHeader}`}>
      <div className={classes.headerItems}>
        <ul className={classes.leftItems}>
          <li className={classes.itemImage}><Link to="/"><img src={logo} alt="logo" /></Link></li>
          <li className={`${classes.itemImage} ${classes.itemName}`}><Link to="/"><img src={name} alt="name" /></Link></li>
        </ul>
        <ul className={classes.rightItems}>
          <li><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : `${classes.menuItems}`)} exact="true" to="/"><h4>Home</h4></NavLink></li>
          <li className={classes.menuItems}><CategoryButton/></li>
          {/* <li><NavLink className={({ isActive }) => (isActive ? `${classes.activeMenuItem}` : `${classes.menuItems}`)} exact="true" to="/stories"><h4>Stories</h4></NavLink></li> */}
          <li className={classes.navigationButton}><NavigationButton/></li>
          <li><SettingsButton/></li>
        </ul>
      </div>
      <div className={classes.hideShowBtn} onClick={hideShowHeader}><FontAwesomeIcon style={{transform:"scale(2,1)"}} icon={hideShowIcon} /></div>
    </div>
  );
};

export default Header;
