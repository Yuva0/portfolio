import { Fragment, useState } from 'react';
import SkillModal from '../modals/SkillModal';
import classes from './css/SkillSetItem.module.css';
import StarRating from '../ui/StarRating/StarRating';

const SkillSetItem = (props) => {

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
            <div className={classes.skillSetItemWrapper} onClick={skillClickHandler}>
                <img src={props.image} alt={props.alt}/>
                <div className={classes.skillDescription}>{props.name}</div>
                <div className={classes.starRating}><StarRating rating={props.rating}/></div>
            </div>
            {skillModalActive && <SkillModal idTitle={props.idTitle} onClose={closeModalHandler}/>}
        </Fragment>
    );
};

export default SkillSetItem;