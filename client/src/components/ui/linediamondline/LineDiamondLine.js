import classes from './css/LineDiamondLine.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from 'stelios';


const LineDiamondLine = () => {
    const _primaryColor = useTheme().theme.colorPalette.primary.accentScale[10];
    return (
        <div className={classes.lineDiamondLineWrapper} style={{color: _primaryColor}}>
            <div className={classes.line} style={{backgroundColor: _primaryColor}}></div>
            <div className={classes.design}>
                <FontAwesomeIcon className={classes.icon} icon={faDiamond}/>
                <FontAwesomeIcon className={classes.icon} icon={faDiamond}/>
                <FontAwesomeIcon className={classes.icon} icon={faDiamond}/>
            </div>
            <div className={classes.line} style={{backgroundColor: _primaryColor}}/>
        </div>
    );
};

export default LineDiamondLine;