import { Text, useTheme } from 'stelios';
import classes from './css/MottoContent.module.css';
 

const MottoContent = (props) => {
    const colorPalette = useTheme().theme.colorPalette;
    const _color = colorPalette.primary.appearance === "light" ? "black" : "white";
    return (
        <div className={classes.mottoContentWrapper}> 
            <Text color="primary" variant="h3" fontFamily='"Alegreya", serif;'>My Motto</Text>
            <Text preciseColor={_color} variant="paragraph" size="large" className={classes.mottoContentBody}><i>“{props.quote}”</i></Text>
            <Text preciseColor={_color} variant="paragraph" style={{marginTop: "2rem"}}>{props.author}</Text>
        </div>
    );
};

export default MottoContent;