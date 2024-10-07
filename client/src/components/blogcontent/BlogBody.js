import ReactMarkdown from 'react-markdown'
import classes from './css/BlogBody.module.css';
import styled from 'styled-components';
import { useTheme } from 'stelios';

const StyledBlogBody = styled.div`
  & a {
    color: ${props => props.$linkColor};
  }
`;

const BlogBody = (props) => {
  const theme = useTheme().theme;
  const _primaryColor = theme.colorPalette.primary.accentScale[10];
  return (
    <StyledBlogBody className={classes.blogBody} $linkColor={_primaryColor}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      
    </StyledBlogBody>
    // Note if you need a new line - Add a newline and then &nbsp; (and two spaces)
    // 
    // &nbsp;  
    //2 spaces after &nbsp;!!
   );
};

export default BlogBody;