import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';
import classes from './css/CookieOverlay.module.css';
import { useEffect, useState } from 'react';

const CookieOverlay = () => {
    const [cookieBanner,setCookieBanner] = useState(false);

    useEffect(() => {
        let isMounted = true;
        if(isMounted){
            // Check if user has previously accepted cookies
            if(localStorage.getItem('acceptCookies') === 'Yes')
                return;

            // Check if user has denied cookies
            if(sessionStorage.getItem('acceptCookies') === 'No')
                return;

            // If neither, then show Cookie Banner
            setCookieBanner(true);
        }

        return () => { isMounted = false };
    },[setCookieBanner]);
    const cookieHandler = (value) => {
        // 0 - accept, 1 - reject
        if(value === 0){
            localStorage.setItem('acceptCookies','Yes');
            // If earlier was rejected
            sessionStorage.removeItem('acceptCookies');
            // Check if user has already made changes before accepting - sessionStorage
            if(sessionStorage.getItem('theme')){
                localStorage.setItem('theme',sessionStorage.getItem('theme'))
                sessionStorage.removeItem('theme');
            }
            if(sessionStorage.getItem('align')){
                localStorage.setItem('align',sessionStorage.getItem('align'))
                sessionStorage.removeItem('align');
            }
            setCookieBanner(false);
        }
        else if(value === 1){
            // Remove all existing cookies
            localStorage.clear();
            sessionStorage.clear();
            sessionStorage.setItem('acceptCookies','No');
            setCookieBanner(false);
        }
    };
    return (
        <div className={`${cookieBanner && classes.showOverlay} ${classes.cookiesOverlayWrapper}`}>
            <h4>This website collects cookies to deliver better user experience.<a rel="noreferrer" target="_blank" href="https://www.privacypolicies.com/live/8012f3b7-c660-46d6-b1b5-cfc3cfe747ca"> <u>Learn More</u></a></h4>
            <button className={classes.acceptButton} onClick={() => cookieHandler(0)}>
                <span className={classes.faicon}>
                <FontAwesomeIcon icon={faCheck} />
                </span>
            </button>
            <button className={classes.rejectButton} onClick={() => cookieHandler(1)}>
                <span className={classes.faicon}>
                <FontAwesomeIcon icon={faTimes} />
                </span>
            </button>
        </div>
    );
};

export default CookieOverlay;