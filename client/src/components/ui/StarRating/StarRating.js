import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "stelios";

const StarRating = (props) => {
  const theme = useTheme().theme;
  const _primaryBgColor = theme.colorPalette.primary.accentScale[8]
  if(!props.rating)
    return;
  
  let starRatingDiv=[],i;
  for(i=0;i<=props.rating-1;i++){
    starRatingDiv.push(<FontAwesomeIcon color={_primaryBgColor} icon={faStar} key={i}/>);
  }
  if(props.rating-i !== 0){
    starRatingDiv.push(<FontAwesomeIcon color={_primaryBgColor} icon={faStarHalf} key={i}/>);
  }
  

  return <div>{starRatingDiv}</div>;
};

export default StarRating;