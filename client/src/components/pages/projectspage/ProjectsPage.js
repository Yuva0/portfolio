import ProjectSet from '../../projectset/ProjectSet';
import classes from './css/ProjectsPage.module.css';

const ProjectsPage = (props) => {

  return (
    <div className={classes.projectspage}>
        <ProjectSet title="All Projects" time="latest" type="project"/>
    </div>
  );
};

export default ProjectsPage;