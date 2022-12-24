import ReactMarkdown from 'react-markdown'
import classes from './css/CertificateBody.module.css';

const CertificateBody = (props) => {
  return (
    <div className={classes.skillBody}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      
    </div>
    // Note if you need a new line - Add a newline and then &nbsp; (and two spaces)
    // 
    // &nbsp;  
    //2 spaces after &nbsp;!!
   );
};

export default CertificateBody;