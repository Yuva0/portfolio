import ReactMarkdown from 'react-markdown'
import classes from './css/ArticleBody.module.css';
import { useTheme } from 'stelios';
import styled from 'styled-components';

const StyledArticleBody = styled.div`
  font-family: 'Varela Round', sans-serif;
  & a {
    color: ${props => props.color};
  }
`;

const ArticleBody = (props) => {
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
  const _primaryColor = useTheme().theme.colorPalette.primary.accentScale[10];

  return (
    <StyledArticleBody className={classes.articleBody} style={{color: _color, fontFamily: "'Varela Round', sans-serif", marginTop: "2rem"}} color={_primaryColor}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      
    </StyledArticleBody>
    // Note if you need a new line - Add a newline and then &nbsp; (and two spaces)
    // 
    // &nbsp;  
    //2 spaces after &nbsp;!!
   );
};

export default ArticleBody;