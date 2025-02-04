import { Fragment, useState } from 'react';
import SkillModal from '../modals/SkillModal';
import classes from './css/SkillSetItem.module.css';
import StarRating from '../ui/StarRating/StarRating';
import { Card, Text, useTheme } from 'stelios';

const SkillSetItem = (props) => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

    const [skillModalActive, setSkillModalActive] = useState(false);
    const skillClickHandler = () => {
      setSkillModalActive(() => true);
      document.getElementsByTagName("body")[0].classList.add("hideOverflow");
    }

    const closeModalHandler = () => {
      setSkillModalActive(() => false);
      document.getElementsByTagName("body")[0].classList.remove("hideOverflow");
    }

    return (
        <Fragment>
            <Card color="primary" className={classes.skillSetItemWrapper} onClick={skillClickHandler} variant="neumorph" style={{padding: 0, borderRadius: "16px"}}>
                <>
                    <img src={props.image} alt={props.alt} style={{background: "white"}}/>
                    <Text style={{marginTop:"0.5rem", marginBottom: "0.5rem"}} size="small" preciseColor={_color} className={classes.skillDescription}>{props.name}</Text>
                    <div className={classes.starRating}><StarRating rating={props.rating}/></div>
                </>
            </Card>
            {skillModalActive && <SkillModal idTitle={props.idTitle} onClose={closeModalHandler}/>}
        </Fragment>
    );
};

export default SkillSetItem;