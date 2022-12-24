import { Fragment, useState } from 'react';
import HobbyModal from '../modals/HobbyModal';
import classes from './css/HobbySetItem.module.css';


const HobbySetItem = (props) => {

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
            </div>
            {skillModalActive && <HobbyModal idTitle={props.idTitle} onClose={closeModalHandler}/>}
        </Fragment>
    );
};

export default HobbySetItem;