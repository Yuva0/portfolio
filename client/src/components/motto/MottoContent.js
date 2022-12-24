import classes from './css/MottoContent.module.css';
 

const MottoContent = (props) => {
    return (
        <div className={classes.mottoContentWrapper}> 
            <div className={classes.mottoContentTitle}><h4>My Motto</h4></div>
            <div className={classes.mottoContentBody}><h2><i>“{props.quote}”</i></h2></div>
            <div className={classes.mottoContentAuthor}><h4>{props.author}</h4></div>
        </div>
    );
};

export default MottoContent;