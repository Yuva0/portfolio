import HobbySet from '../../hobbyset/HobbySet';
import classes from './css/HobbiesPage.module.css';

const HobbiesPage = (props) => {

  return (
    <div className={classes.projectspage}>
        <HobbySet title="All Hobbies" time="latest" type="hobbies"/>
    </div>
  );
};

export default HobbiesPage;