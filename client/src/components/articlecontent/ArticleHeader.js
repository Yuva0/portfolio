import ReactMarkdown from 'react-markdown'
import fetchDate from '../../util/fetchDate';
import classes from './css/ArticleHeader.module.css';
import { Text, useTheme } from 'stelios';
import styled from 'styled-components';

const ArticleHeader = (props) => {
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
  const theme = useTheme().theme;
  const _primaryColor = theme.colorPalette.primary.accentScale[10];

  let categories;
  if(props.category){
    categories = props.category.map((category,index) => {
      return (<span key={index}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
        &nbsp;  &nbsp;   </span>);
    });
  }

  let authors=null;
  if(props.authors){
    authors = <span className={classes.authorWrapper}>{props.authors.map((author,index) => { return <span key={index}>{author}</span> })}</span>
  }

  let difficulty;
  if (props.difficultyType === 3){
    difficulty = <span>Difficult</span>
  }
  else if (props.difficultyType === 2){
    difficulty = <span>Medium</span>
  }
  else if (props.difficultyType === 1){
    difficulty = <span>Easy</span>
  }

  let date = null;
  if(props.date){
    const [day,month,year] = fetchDate(props.date);
    date = <span>{day} {month} {year}</span>
  }

  let videoOrImage,imageToHalf=true;
  if(props.videoUrl && props.videoUrl!== undefined){ //Video
    videoOrImage = <div className={classes.videoWrapper}><iframe title="Video" src={props.videoUrl} className={classes.iframeVideo} allowFullScreen></iframe></div>
  }
  else{ //Image
    if(window.innerWidth < 1000){
      imageToHalf = false;
    }
    else{
      imageToHalf = true;
    }
    videoOrImage = <div className={classes.imageWithCaption}><div className={`${classes.image} ${imageToHalf && classes.imageToHalf}`}><img src={props.coverImage} alt={props.imageAlt}/></div><Text className={classes.imageCaption} color="black"><ReactMarkdown>{props.imageCaption}</ReactMarkdown></Text></div>
    
  }

  return (
    <div className={classes.articleHeader}>
      <Text variant="span" color="black">{categories}</Text>
      <Text preciseColor={_color} variant="h1" style={{marginTop: "1rem"}}>{props.title}</Text>
      <Text preciseColor={_color} variant="span" style={{marginTop: "1rem", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "1rem"}}>
        {authors}
        {difficulty}
        {date}
      </Text>
      {videoOrImage}
    </div>
  );
};

export default ArticleHeader;