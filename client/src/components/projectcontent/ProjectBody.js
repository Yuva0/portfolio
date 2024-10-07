import ReactMarkdown from 'react-markdown'
import classes from './css/ProjectBody.module.css';
import { useTheme } from 'stelios';
import { styled } from 'styled-components';

const StyledProjectBody = styled.div`
  & a {
    color: ${props => props.$linkColor};
  }
`;

const ProjectBody = (props) => {
  const theme = useTheme().theme;
  const _color = theme.colorPalette.primary.appearance === "light" ? "black" : "white";
  const _primaryColor = theme.colorPalette.primary.accentScale[10];
  
  return (
    <StyledProjectBody className={classes.skillBody} style={{color: _color}} $linkColor={_primaryColor}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      
    </StyledProjectBody>
    // Note if you need a new line - Add a newline and then &nbsp; (and two spaces)
    // 
    // &nbsp;  
    //2 spaces after &nbsp;!!
   );
};

export default ProjectBody;