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
    category = <div className={classes.category}><h6>{categoryVal}</h6></div>
    // category = <div className={classes.category}><h5>{props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h5></div>;
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

  // let difficulty;
  // if (props.difficultyType === 3){
  //   difficulty = <div className={classes.difficultyGold}><h6>Difficult</h6></div>
  // }
  // else if (props.difficultyType === 2){
  //   difficulty = <div className={classes.difficulty}><h6>Medium</h6></div>
  // }
  // else if (props.difficultyType === 1){
  //   difficulty = <div className={classes.difficulty}><h6>Easy</h6></div>
  // }

  // return (
  //   <div className={classes.certificateSetItemWrapper}>
  //     <Link to={{ pathname: `/certificate/${props.idTitle}`, query: { title: props.title } } }>
     
  //     <div className={classes.content}>
  //       <div className={classes.title}><h5>{props.title}</h5></div>
  //       {/* <div className={classes.date}><h5>{day} {month} {year}</h5></div> */}
  //       {category}
  //       {/* <div className={classes.description}><h4>{props.description}</h4></div> */}
  //       {/* {difficulty} */}
  //     </div>
  //     <div className={classes.image}>
  //       <img src={props.coverImage} alt={props.imageAlt} />
  //       {/* {ribbon} */}
  //     </div>
  //     </Link>
  //   </div>
  // );

  return (
    <>
      <Capsule color="primary" variant="neumorph" image={props.coverImage} imageAlt={props.imageAlt} title={<Text color="primary" size="small">{props.title}</Text>} description={<Text preciseColor={_color} variant="span" fontSize='0.75rem'>{category}</Text>} onClick={certificateClickHandler} style={{flexBasis: "48%"}}/>
      {projectModalActive && <CertificateModal idTitle={props.idTitle} onClose={closeModalHandler}/>}
    </>
  );
};

export default CertificateSetItem;