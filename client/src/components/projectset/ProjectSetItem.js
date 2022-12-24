import { useState } from 'react';
import fetchDate from '../../util/fetchDate';
import firstLetterUpper from '../../util/firstLetterUpper';
import classes from './css/ProjectSetItem.module.css';
import ProjectModal from '../modals/ProjectModal';
import { Fragment } from 'react';


const ProjectSetItem = (props) => {

  const [projectModalActive, setProjectModalActive] = useState(false);

  const projectClickHandler = () => {
    setProjectModalActive(() => true);
    document.getElementsByTagName("body")[0].classList.add("hideOverflow");
  };

  const closeModalHandler = () => {
    setProjectModalActive(() => false);
    document.getElementsByTagName("body")[0].classList.remove("hideOverflow");
  }
  
  const [day,month,year] = fetchDate(props.date);

  let category;
  if (props.category) {
    let categoryInner="";
    for(let i=0;i<props.category.length-1;i++){
      categoryInner = categoryInner + firstLetterUpper(props.category[i]) + ", ";
    }
    let categoryVal = categoryInner+firstLetterUpper(props.category[props.category.length-1]);
    category = <div className={classes.category}><h6>{categoryVal}</h6></div>
  }

  let ribbon;
  let difficulty;
  if (props.difficultyType === 3){
    ribbon = <span className={classes.ribbon}><h6>Difficult</h6></span>
    difficulty = <div className={classes.difficultyGold}><h6>Difficult</h6></div>
  }
  else if (props.difficultyType === 2){
    difficulty = <div className={classes.difficulty}><h6>Medium</h6></div>
  }
  else if (props.difficultyType === 1){
    difficulty = <div className={classes.difficulty}><h6>Easy</h6></div>
  }
  let coverImage;
  if(props.coverImage){
    coverImage = <div className={classes.image}><img src={props.coverImage} alt={props.imageAlt} />{ribbon}</div>
  }

  // return (
  //   <div className={classes.articleSetItemWrapper}>
  //     <Link to={{ pathname: `/project/${props.idTitle}`, query: { title: props.title } }}>
  //     {coverImage}
  //     <div className={classes.content}>
  //       <div className={classes.title}><h3>{props.title}</h3></div>
  //       {category}
  //       <div className={classes.description}><h5>{props.description}</h5></div>
  //       {difficulty}
  //       <div className={classes.date}><h6>{day} {month} {year}</h6></div>
  //     </div>
  //     </Link>
  //   </div>
  //   );
  return (
    <Fragment>
        <div className={classes.projectSetItemWrapper} onClick={projectClickHandler}>
        {/* <Link to={{ pathname: `/project/${props.idTitle}`, query: { title: props.title } }}> */}
          {coverImage}
          <div className={classes.content}>
            <div className={classes.title}><h3>{props.title}</h3></div>
            {category}
            <div className={classes.description}><h5>{props.description}</h5></div>
            {difficulty}
            <div className={classes.date}><h6>{day} {month} {year}</h6></div>
          </div>
          {/* </Link> */}
        </div>
        {projectModalActive && <ProjectModal idTitle={props.idTitle} onClose={closeModalHandler}/>}
    </Fragment>
  );
};

export default ProjectSetItem;