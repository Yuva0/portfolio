import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import classes from './css/SkillHeader.module.css';
import { Text, useTheme } from 'stelios';

const SkillHeader = (props) => {
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

  let categories;
  if(props.category){
    categories = props.category.map((category,index) => {
      return (<span key={index}><Link style={{color: _color}} to={"/category/"+category.toLowerCase()} key={index}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Link>&nbsp;  &nbsp;   </span>);
    });
    
  }

  return (
    <div className={classes.skillHeader}>
      <Text preciseColor={_color} className={classes.navigation}>{categories}</Text>
      <Text variant="h2" preciseColor={_color} className={classes.name} style={{marginTop: "1rem"}}>{props.title}</Text>
      <div className={classes.imageWithCaption}>
        <div className={classes.image}><img src={props.coverImage} alt={props.imageAlt}/></div>
        <div className={classes.imageCaption}><ReactMarkdown>{props.imageCaption}</ReactMarkdown></div>
      </div>
    </div>
  );
};

export default SkillHeader;