import ReactMarkdown from 'react-markdown'
import classes from './css/CertificateBody.module.css';
import { useTheme } from 'stelios';
import { styled } from 'styled-components';

const StyledCertificateBody = styled.div`
  font-family: 'Varela Round', sans-serif;
  & a {
    color: ${props => props.$linkColor};
  }
`;

const CertificateBody = (props) => {
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
  const _primaryColor = useTheme().theme.colorPalette.primary.accentScale[10];
  return (
    <StyledCertificateBody className={classes.skillBody} style={{color: _color}} $linkColor={_primaryColor}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      
    </StyledCertificateBody>
    // Note if you need a new line - Add a newline and then &nbsp; (and two spaces)
    // 
    // &nbsp;  
    //2 spaces after &nbsp;!!
   );
};

export default CertificateBody;