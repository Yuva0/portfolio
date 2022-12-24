import classes from './css/ButtonandSymbol.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const ButtonandSymbol = (props) => {

  return (
    <button style={props.style} className={classes.button}>
      <Link to={{ pathname: props.link , query: { title: props.title } }}>
      <span className={classes.text}><h3>{props.children}</h3></span>
      <span className={classes.faicon}><FontAwesomeIcon icon={props.icon}/></span>
      </Link>
    </button>
  );
};

export default ButtonandSymbol;