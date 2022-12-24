import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import classes from './css/StarRating.module.css';

const StarRating = (props) => {
  if(!props.rating)
    return;
  
  let starRatingDiv=[],i;
  for(i=0;i<=props.rating-1;i++){
    starRatingDiv.push(<FontAwesomeIcon icon={faStar} key={i}/>);
  }
  if(props.rating-i !== 0){
    starRatingDiv.push(<FontAwesomeIcon icon={faStarHalf} key={i}/>);
  }
  

  return <div className={classes.starRatingsWrapper}>{starRatingDiv}</div>;
};

export default StarRating;