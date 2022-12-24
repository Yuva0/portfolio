import {useEffect} from 'react';

// Hook for hiding component whenever the user clicks anywhere else
const useButtonHide = (buttonRef, buttonComponentRef, setDisplay) => {

  useEffect(() => {
    const settingsEffect = (event) => {
      if (!buttonComponentRef.current.contains(event.target) && !buttonRef.current.contains(event.target)){
        setDisplay(false);
      }
    };

    document.addEventListener("mousedown", settingsEffect);

    return () => {
      document.removeEventListener("mousedown", settingsEffect)
    };
  });

};

export default useButtonHide;