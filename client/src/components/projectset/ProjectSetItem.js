import { useState } from 'react';
import fetchDate from '../../util/fetchDate';
import firstLetterUpper from '../../util/firstLetterUpper';
import classes from './css/ProjectSetItem.module.css';
import ProjectModal from '../modals/ProjectModal';
import { Fragment } from 'react';
import { Card, Text, useTheme } from 'stelios';
import styled from 'styled-components';

const StyledRibbon = styled(Text)`
  background-color: ${props => props.primaryBgColor};

  &::before{
    background-color: ${props => props.primaryBgColor};
  }

  &::after{
    background-color: ${props => props._rimaryBgColor};
  }
`;

const ProjectSetItem = (props) => {
  const [projectModalActive, setProjectModalActive] = useState(false);
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
  const _primaryBgColor = useTheme().theme.colorPalette.primary.accentScale[8];

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

  let difficulty;
  if (props.difficultyType === 3){
    difficulty = <Text color="primary" style={{marginTop: "0.5rem"}}>Difficult</Text>
  }
  else if (props.difficultyType === 2){
    difficulty = <Text color="black" style={{marginTop: "0.5rem"}}>Medium</Text>
  }
  else if (props.difficultyType === 1){
    difficulty = <Text color="black" style={{marginTop: "0.5rem"}}>Easy</Text>
  }
  let coverImage;
  if(props.coverImage){
    coverImage = <div className={classes.image}><img src={props.coverImage} alt={props.imageAlt} /></div>
  }

  return (
    <>
    <Card clickable variant="neumorph" style={{padding: 0, border: 0, flexBasis: "30%"}} color="primary" className={classes.projectSetItemWrapper} onClick={projectClickHandler}>
        <div className={classes.projectSetItem}>
          {coverImage}
          <div className={classes.content}>
            <Text variant="paragraph" size="medium" preciseColor={_color} style={{marginTop: "1rem"}}>{props.title}</Text>
            {category}
            <Text size="small" preciseColor={_color} style={{marginTop: "1rem"}} className={classes.description}>{props.description}</Text>
            {difficulty}
            <Text size="small" preciseColor={_color} style={{marginTop: "0.5rem"}} className={classes.date}>{day} {month} {year}</Text>
          </div>
        </div>
    </Card>
        {projectModalActive && <ProjectModal idTitle={props.idTitle} onClose={closeModalHandler}/>}
    </>
  );
};

export default ProjectSetItem;