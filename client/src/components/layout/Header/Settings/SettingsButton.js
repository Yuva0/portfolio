import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons';

import classes from './css/SettingsButton.module.css';

import SettingsPopup from './SettingsPopup';
import useButtonHide from '../../../../hooks/use-buttonhide';

const SettingsButton = () => {

  const [displaySettings, setDisplaySettings] = useState(false);

  const buttonRef = useRef();
  const settingsRef = useRef();

  const settingsHandler = () => {
    setDisplaySettings((prevDisplaySettings) => (!prevDisplaySettings));
  };

  // Hook for hiding component whenever the user clicks anywhere else
  useButtonHide(buttonRef, settingsRef, setDisplaySettings);

  return (
    <div className={classes.settingsMain}>
      <button ref={buttonRef} className={`${!displaySettings && classes.hideSettings} ${classes.button}`} onClick={settingsHandler}>
        <span className={classes.faicon}>
          <FontAwesomeIcon icon={faCog} />
        </span>
      </button>
      <SettingsPopup ref={settingsRef} display={displaySettings}/>
    </div>
  );
};

export default SettingsButton;