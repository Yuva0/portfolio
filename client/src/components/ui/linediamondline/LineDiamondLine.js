import classes from './css/LineDiamondLine.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";


const LineDiamondLine = () => {
    return (
        <div className={classes.lineDiamondLineWrapper}>
            <div className={classes.line}></div>
            <div className={classes.design}>
                <FontAwesomeIcon className={classes.icon} icon={faDiamond}/>
                <FontAwesomeIcon className={classes.icon} icon={faDiamond}/>
                <FontAwesomeIcon className={classes.icon} icon={faDiamond}/>
            </div>
            <div className={classes.line}/>
        </div>
    );
};

export default LineDiamondLine;