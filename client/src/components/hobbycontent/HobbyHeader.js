import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import classes from './css/HobbyHeader.module.css';
import fetchDate from '../../util/fetchDate';

const HobbyHeader = (props) => {

  let categories;
  if(props.category){
    categories = props.category.map((category,index) => {
      return (<span key={index}>
        {/* <Link to={"/category/"+category.toLowerCase()} key={index}> */}
        {category.charAt(0).toUpperCase() + category.slice(1)}
        {/* </Link> */}
        &nbsp;  &nbsp;   </span>);
    });
  }

  let authors=null;
  if(props.authors){
    authors = <span className={classes.authorWrapper}>{props.authors.length === 1 ? 'Author':'Authors'}:<span className={classes.authors}>{props.authors.map((author,index) => { return <span key={index}>{author}</span> })}</span></span>
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

  let videoOrImage;
  if(props.videoUrl && props.videoUrl!== undefined){ //Video
    videoOrImage = <div className={classes.videoWrapper}><iframe src={props.videoUrl} className={classes.iframeVideo} allowFullScreen></iframe></div>
  }
  else{ //Image
    videoOrImage = <div className={classes.imageWithCaption}><div className={`${classes.image}`}><img src={props.coverImage} alt={props.imageAlt}/></div><div className={classes.imageCaption}><ReactMarkdown>{props.imageCaption}</ReactMarkdown></div></div>
  }

  return (
    <div className={classes.skillHeader}>
      <div className={classes.navigation}><h5>{categories}</h5></div>
      <div className={classes.name}><h1>{props.title}</h1></div>
      <div className={classes.headerContent}>
        {authors}
        {difficulty}
        {date}
      </div>
      {videoOrImage}
    </div>
  );
};

export default HobbyHeader;