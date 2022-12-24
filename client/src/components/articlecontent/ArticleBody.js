import ReactMarkdown from 'react-markdown'
import classes from './css/ArticleBody.module.css';

const ArticleBody = (props) => {


  return (
    <div className={classes.articleBody}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      
    </div>
    // Note if you need a new line - Add a newline and then &nbsp; (and two spaces)
    // 
    // &nbsp;  
    //2 spaces after &nbsp;!!
   );
};

export default ArticleBody;