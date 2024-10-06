import { useState,Fragment } from 'react';
import classes from './css/CertificateSetItem.module.css';
import CertificateModal from '../modals/CertificateModal';
import { Capsule, Text, useTheme } from 'stelios';

const CertificateSetItem = (props) => {
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

  let category;
  if (props.category) {
    let categoryInner="";
    for(let i=0;i<props.category.length-1;i++){
      categoryInner = categoryInner + props.category[i].charAt(0).toUpperCase() + props.category[i].slice(1) + ", ";
    }
    let categoryVal = categoryInner+props.category[props.category.length-1].charAt(0).toUpperCase() + props.category[props.category.length-1].slice(1);
    category = <Text preciseColor={_color} variant="span" size="small">{categoryVal}</Text>
  }

  const [projectModalActive, setProjectModalActive] = useState(false);

  const certificateClickHandler = () => {
    setProjectModalActive(() => true);
    document.getElementsByTagName("body")[0].classList.add("hideOverflow");
  };

  const closeModalHandler = () => {
    setProjectModalActive(() => false);
    document.getElementsByTagName("body")[0].classList.remove("hideOverflow");
  }

  return (
    <>
      <Capsule color="primary" variant="neumorph" height='100px' image={props.coverImage} imageAlt={props.imageAlt} title={<Text color="primary" size="medium">{props.title}</Text>} description={category} onClick={certificateClickHandler} style={{flexBasis: "48%"}} className={classes.certificateSetItemWrapper}/>
      {projectModalActive && <CertificateModal idTitle={props.idTitle} onClose={closeModalHandler}/>}
    </>
  );
};

export default CertificateSetItem;