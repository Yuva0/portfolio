import { useState, useRef } from "react";
import classes from './css/CategoryButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import CategoryPopup from './CategoryPopup';
import useButtonHide from "../../../../hooks/use-buttonhide";

const CategoryButton = () => {

  const [toggleCategory, setToggleCategory] = useState(false);

  const categoryRef = useRef();
  const categoryPopupRef = useRef();

  const toggleCategoryHandler = () => {
    setToggleCategory((prevToggleCategory) => (!prevToggleCategory))
  }

  // Hook for hiding component whenever the user clicks anywhere else
  useButtonHide(categoryRef, categoryPopupRef, setToggleCategory);

  return (
  <div className={classes.categoryMain}>
    <span ref={categoryRef} className={classes.categoryLink} onClick={toggleCategoryHandler}>
      <h4>Category</h4>
      <FontAwesomeIcon icon={faSortDown}/>
    </span>
    <CategoryPopup ref={categoryPopupRef} toggleCategory={toggleCategory}/>
  </div>
  );
};

export default CategoryButton;