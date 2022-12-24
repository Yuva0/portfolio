import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import classes from './css/SkillHeader.module.css';

const SkillHeader = (props) => {

  let categories;
  if(props.category){
    categories = props.category.map((category,index) => {
      return (<span key={index}><Link to={"/category/"+category.toLowerCase()} key={index}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Link>&nbsp;  &nbsp;   </span>);
    });
    
  }

  return (
    <div className={classes.skillHeader}>
      <div className={classes.navigation}><h5>{categories}</h5></div>
      <div className={classes.name}><h1>{props.title}</h1></div>
      <div className={classes.imageWithCaption}>
        <div className={classes.image}><img src={props.coverImage} alt={props.imageAlt}/></div>
        <div className={classes.imageCaption}><ReactMarkdown>{props.imageCaption}</ReactMarkdown></div>
      </div>
    </div>
  );
};

export default SkillHeader;