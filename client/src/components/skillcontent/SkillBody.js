import ReactMarkdown from 'react-markdown'
import classes from './css/SkillBody.module.css';
import { styled } from 'styled-components';
import { useTheme } from 'stelios';

const StyledSkillBody = styled.div`
  & a {
    color: ${props => props.$linkColor};
  }
`;

const SkillBody = (props) => {
  const theme = useTheme().theme;
  // const _color = theme.colorPalette.primary.appearance === "light" ? "black" : "white";
  const _primaryColor = theme.colorPalette.primary.accentScale[10];
  return (
    <StyledSkillBody className={classes.skillBody} $linkColor={_primaryColor}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      
    </StyledSkillBody>
    // Note if you need a new line - Add a newline and then &nbsp; (and two spaces)
    // 
    // &nbsp;  
    //2 spaces after &nbsp;!!
   );
};

export default SkillBody;