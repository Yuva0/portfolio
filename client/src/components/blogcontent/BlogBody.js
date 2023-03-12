import ReactMarkdown from 'react-markdown'
import classes from './css/BlogBody.module.css';

const BlogBody = (props) => {
  return (
    <div className={classes.blogBody}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      
    </div>
    // Note if you need a new line - Add a newline and then &nbsp; (and two spaces)
    // 
    // &nbsp;  
    //2 spaces after &nbsp;!!
   );
};

export default BlogBody;