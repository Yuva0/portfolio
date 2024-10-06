import { useState } from 'react';
import fetchDate from '../../util/fetchDate';
import firstLetterUpper from '../../util/firstLetterUpper';
import classes from './css/ProjectSetItem.module.css';
import ProjectModal from '../modals/ProjectModal';
import { Fragment } from 'react';
import { Card, Text, useTheme } from 'stelios';


const ProjectSetItem = (props) => {

  const [projectModalActive, setProjectModalActive] = useState(false);
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

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
    category = <Text size="small" color="black" style={{marginTop: "0.25rem"}} className={classes.category}>{categoryVal}</Text>
  }

  let ribbon;
  let difficulty;
  if (props.difficultyType === 3){
    ribbon = <Text preciseColor={_color} variant="span" size="small" className={classes.ribbon}>Difficult</Text>
    difficulty = <Text color="primary">Difficult</Text>
  }
  else if (props.difficultyType === 2){
    difficulty = <Text color="black">Medium</Text>
  }
  else if (props.difficultyType === 1){
    difficulty = <Text color="black">Easy</Text>
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
    <Card variant="neumorph" style={{padding: 0, border: 0, flexBasis: "30%"}} color="primary">
      <>
        <div onClick={projectClickHandler}>
        {/* <Link to={{ pathname: `/project/${props.idTitle}`, query: { title: props.title } }}> */}
          {coverImage}
          <div className={classes.content}>
            <Text variant="paragraph" size="medium" preciseColor={_color} style={{marginTop: "1rem"}}>{props.title}</Text>
            {category}
            <Text size="small" preciseColor={_color} style={{marginTop: "1rem"}}>{props.description}</Text>
            {difficulty}
            <Text size="small" preciseColor={_color} style={{marginTop: "1rem"}}>{day} {month} {year}</Text>
          </div>
          {/* </Link> */}
        </div>
        {projectModalActive && <ProjectModal idTitle={props.idTitle} onClose={closeModalHandler}/>}
      </>
    </Card>
  );
};

export default ProjectSetItem;