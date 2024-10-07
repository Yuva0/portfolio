import ReactMarkdown from 'react-markdown'
import classes from './css/ArticleBody.module.css';
import { useTheme } from 'stelios';

const ArticleBody = (props) => {
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";


  return (
    <div className={classes.articleBody} style={{color: _color}}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      
    </div>
    // Note if you need a new line - Add a newline and then &nbsp; (and two spaces)
    // 
    // &nbsp;  
    //2 spaces after &nbsp;!!
   );
};

export default ArticleBody;