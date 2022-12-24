import { Fragment, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

import classes from './css/NavigationButton.module.css';
import NavigationPopup from "./NavigationPopup";
import useButtonHide from "../../../../hooks/use-buttonhide";

const NavigationButton = () => {

  const [toggleNavigation, setToggleNavigation] = useState(false);

  const navRef = useRef();
  const navBtnRef = useRef();

  const toggleNavigationHandler = (toggleNavigationValue) => {
    if(toggleNavigationValue === false || toggleNavigationValue === true){
      setToggleNavigation(() => (toggleNavigationValue));
    }
    else{
      setToggleNavigation((prevToggleNavigation) => (!prevToggleNavigation));
    }
  }


  // Hook for hiding component whenever the user clicks anywhere else
  useButtonHide(navBtnRef, navRef, setToggleNavigation);

  return (
    <Fragment>
      <button ref={navBtnRef} className={`${!toggleNavigation && classes.hideNav} ${classes.button}`} onClick={toggleNavigationHandler}>
        <span className={classes.faicon}><FontAwesomeIcon icon={faBars} />
        </span>
      </button>
      <NavigationPopup ref={navRef} toggleNavigation={toggleNavigation} toggleNavigationHandler={toggleNavigationHandler}/>
    </Fragment>
  );
};

export default NavigationButton;