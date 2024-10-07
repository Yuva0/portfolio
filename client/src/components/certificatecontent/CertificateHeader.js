import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import classes from './css/CertificateHeader.module.css';
import fetchDate from '../../util/fetchDate';
import { Text, useTheme } from 'stelios';

const CertificateHeader = (props) => {
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

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
    videoOrImage = <div className={classes.videoWrapper} style={{marginTop: "1rem"}}><iframe title="Video" src={props.videoUrl} className={classes.iframeVideo} allowFullScreen></iframe></div>
  }
  else{ //Image
    videoOrImage = <div className={classes.imageWithCaption} style={{marginTop: "1rem"}}><div className={`${classes.image}`}><img src={props.coverImage} alt={props.imageAlt}/></div><div className={classes.imageCaption}><ReactMarkdown>{props.imageCaption}</ReactMarkdown></div></div>
  }
  return (
    <div className={classes.skillHeader}>
      <Text preciseColor={_color} className={classes.navigation}>{categories}</Text>
      <Text variant="h2" preciseColor={_color} className={classes.name} style={{marginTop: "1rem"}}>{props.title}</Text>
      <Text preciseColor={_color} className={classes.headerContent} style={{marginTop: "1rem"}}>
        {difficulty}
        {date}
      </Text>
      {videoOrImage}
    </div>
  );
};

export default CertificateHeader;