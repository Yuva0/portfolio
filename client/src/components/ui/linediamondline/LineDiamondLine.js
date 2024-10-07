import classes from './css/LineDiamondLine.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from 'stelios';


const LineDiamondLine = () => {
    const _primaryBgColor = useTheme().theme.colorPalette.primary.accentScale[8];
    return (
        <div className={classes.lineDiamondLineWrapper} style={{color: _primaryBgColor}}>
            <div className={classes.line} style={{backgroundColor: _primaryBgColor}}></div>
            <div className={classes.design}>
                <FontAwesomeIcon className={classes.icon} icon={faDiamond}/>
                <FontAwesomeIcon className={classes.icon} icon={faDiamond}/>
                <FontAwesomeIcon className={classes.icon} icon={faDiamond}/>
            </div>
            <div className={classes.line} style={{backgroundColor: _primaryBgColor}}/>
        </div>
    );
};

export default LineDiamondLine;