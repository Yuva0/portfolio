import SkillSet from '../../skillset/SkillSet';
import classes from './css/SkillsPage.module.css';

const SkillsPage = (props) => {
  return (
    <div className={classes.skillspage}>
        <SkillSet title="All Skills" time="latest" type="skill"/>
    </div>
  );
};

export default SkillsPage;