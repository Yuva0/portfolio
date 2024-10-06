import { Fragment, useState } from 'react';
import fetchDate from '../../util/fetchDate';
import firstLetterUpper from '../../util/firstLetterUpper';
import classes from './css/BlogSetItem.module.css';
import { Link } from 'react-router-dom';
import { Card, Text, useTheme } from 'stelios';
// import ProjectModal from '../modals/ProjectModal';
// import { Fragment } from 'react';


const BlogSetItem = (props) => {
//   const [projectModalActive, setProjectModalActive] = useState(false);

//   const projectClickHandler = () => {
//     setProjectModalActive(() => true);
//     document.getElementsByTagName("body")[0].classList.add("hideOverflow");
//   };

//   const closeModalHandler = () => {
//     setProjectModalActive(() => false);
//     document.getElementsByTagName("body")[0].classList.remove("hideOverflow");
//   }
  const [day,month,year] = fetchDate(props.date);
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

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
    coverImage = <div className={classes.image}><img src={props.coverImage} alt={props.imageAlt} />{ribbon}</div>
  }

  return (
    <Card variant="neumorph" style={{padding: 0, border: 0, flexBasis: "30%"}} color="primary" className={classes.blogSetItemWrapper}>
      <>
      <Link  to={{ pathname: `/blog/${props.idTitle}`, query: { title: props.title } }} style={{flex: "1 1 0"}}>
      {coverImage}
      <div className={classes.content}>
        <Text variant="paragraph" size="medium" preciseColor={_color} style={{marginTop: "0.5rem"}}>{props.title}</Text>
        {category}
        <Text size="small" preciseColor={_color} style={{marginTop: "1rem"}}>{props.description}</Text>
        {difficulty}
        <Text size="small" preciseColor={_color} style={{marginTop: "0.5rem"}}>{day} {month} {year}</Text>
      </div>
      </Link>
      </>
    </Card>
    );
};

export default BlogSetItem;