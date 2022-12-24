import React, { useEffect, useState } from 'react';

import classes from './css/SettingsPopup.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';

const SettingsPopup = (props, ref) => {

  const [theme, setTheme] = useState(0);
  const [align, setAlign] = useState(0);

  useEffect(() => {
    let isMounted = true;
    if(isMounted){
      const localTheme = localStorage.getItem('theme');
      const localAlign = localStorage.getItem('align');
      if(localTheme === '1' || localTheme === '2' || localTheme === '3')
        setThemeHandler(parseInt(localTheme));
      if(localAlign === '1' || localAlign === '2' || localAlign === '3')
        setAlignHandler(parseInt(localAlign));
    }

    return () => { isMounted = false };
  },[]);

  const setThemeHandler = (themeID) => {
    if(theme === themeID)
      return;
    if(localStorage.getItem('acceptCookies') === 'Yes')
      localStorage.setItem('theme',themeID);
    else if(sessionStorage.getItem('acceptCookies') !== 'No')
      sessionStorage.setItem('theme',themeID);
    setTheme(themeID);
    if(themeID === 0){
      document.querySelector(':root').style.setProperty('--backgroundColorTheme','white');
      document.querySelector(':root').style.setProperty('--colorTheme',"black");
      document.querySelector(':root').style.setProperty('--accentTheme',"#6c757d");
      document.querySelector(':root').style.setProperty('--overlayTheme',"#e9ecef");
      document.querySelector(':root').style.setProperty('--timelineTheme',"#F5F5F5");
    }
    else if(themeID === 1){
      document.querySelector(':root').style.setProperty('--backgroundColorTheme','#FFFBDD');
      document.querySelector(':root').style.setProperty('--colorTheme',"black");
      document.querySelector(':root').style.setProperty('--accentTheme',"#6c757d");
      document.querySelector(':root').style.setProperty('--overlayTheme',"#ffe6a7");
      document.querySelector(':root').style.setProperty('--timelineTheme',"#FFE7AD");
    }
    else if(themeID === 2){
      document.querySelector(':root').style.setProperty('--backgroundColorTheme','#202124');
      document.querySelector(':root').style.setProperty('--colorTheme','white');
      document.querySelector(':root').style.setProperty('--accentTheme',"#bfc0c0");
      document.querySelector(':root').style.setProperty('--overlayTheme',"#6c757d");
      document.querySelector(':root').style.setProperty('--timelineTheme',"#3A3B41");
    }
  }

  const setAlignHandler = (alignID) => {
    if(align === alignID)
      return;
    if(localStorage.getItem('acceptCookies') === 'Yes')
      localStorage.setItem('align',alignID);
    else if(sessionStorage.getItem('acceptCookies') !== 'No')
      sessionStorage.setItem('align',alignID);
    setAlign(alignID);
    if(alignID === 0){
      document.querySelector(':root').style.setProperty('--textAlign','left');
    }
    else if(alignID === 1){
      document.querySelector(':root').style.setProperty('--textAlign','justify');
    }
    else if(alignID === 2){
      document.querySelector(':root').style.setProperty('--textAlign','center');
    }

  }

  return (
    <div ref={ref} className={`${props.display && classes.showPopup} ${classes.popup}`}>
      <div className={classes.popupItem}>
        <div className={classes.popupItemTitle}><h4>Theme :</h4></div>
        <ul className={classes.popupItemVal}>
          <li className={`${classes.theme} ${classes.white}`}><button onClick={() => setThemeHandler(0)} className={classes.themeButton}><FontAwesomeIcon className={`${!(theme === 0) && classes.themeButtonUnselected}`} icon={faCheck}/></button></li>
          <li className={`${classes.theme} ${classes.ochre}`}><button onClick={() => setThemeHandler(1)} className={classes.themeButton}><FontAwesomeIcon className={`${!(theme === 1) && classes.themeButtonUnselected}`} icon={faCheck}/></button></li>
          <li className={`${classes.theme} ${classes.black}`}><button onClick={() => setThemeHandler(2)} className={classes.themeButton}><FontAwesomeIcon style={{color: "white"}} className={`${!(theme === 2) && classes.themeButtonUnselected}`} icon={faCheck}/></button></li>
        </ul>
      </div>
      <div className={classes.popupItem}>
        <div className={classes.popupItemTitle}><h4>Text-Align:</h4></div>
        <ul className={classes.popupItemVal}>
          <li className={`${classes.align} ${classes.left}`}><FontAwesomeIcon onClick={() => setAlignHandler(0)} className={`${classes.alignIcon} ${(align === 0) && classes.alignSelected}`} icon={faAlignLeft}/></li>
          <li className={`${classes.align} ${classes.justify}`}><FontAwesomeIcon onClick={() => setAlignHandler(1)} className={`${classes.alignIcon} ${(align === 1) && classes.alignSelected}`} icon={faAlignJustify}/></li>
          <li className={`${classes.align} ${classes.right}`}><FontAwesomeIcon onClick={() => setAlignHandler(2)} className={`${classes.alignIcon} ${(align === 2) && classes.alignSelected}`} icon={faAlignCenter}/></li>
        </ul>
      </div>
    </div>
  );
};

const forwardSettings = React.forwardRef(SettingsPopup);

export default forwardSettings;