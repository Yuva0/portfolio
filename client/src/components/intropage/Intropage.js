import ButtonandSymbol from '../ui/ButtonAndSymbol/ButtonandSymbol';
import classes from './css/Intropage.module.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../../assets/images/profile.jpg';
import profileImage_mobile from '../../assets/images/profile_mobile.jpg';

const Intropage = () => {

    return (
        <div className={classes.introPageWrapper}>
            <div className={classes.imageWrapperMobile}><img alt="profileImage" src={profileImage_mobile}/></div>
            <div className={classes.contentWrapper}>
                <div><h2>Hi!! I Am</h2></div>
                <div className={classes.nameWrapper}><h1>Tanuj Sengupta</h1></div>
                <div className={classes.roleWrapper}>
                    <div><h4><u>Developer</u></h4></div>
                    <div><h4><u>Designer</u></h4></div>
                    <div><h4><u>Tester</u></h4></div>
                </div>
                <div>
                <h5 className={classes.summaryWrapper}>
                    <p>I am a Full Stack Developer with 3 years of experience who loves to create websites.</p>
                
                    <p className={classes.secondParagraphWrapper}>My skills range from UI/UX designing, having proficiency in frontend and backend languages, creating custom APIs, handling databases etc. Maintaining proper test cases, and having clear and concise documentation are also some of my key strengths.</p>
                </h5></div>
                {/* <div className={classes.buttonWrapper}><ButtonandSymbol style={{ backgroundColor: "#FFBE52", fontFamily: "var(--titleFont)"}} icon={faChevronRight}><h5>Read More</h5></ButtonandSymbol></div> */}
            </div>
            <div  className={classes.imageWrapper}><img alt="profileImage" src={profileImage}/></div>
        </div>
    );
};

export default Intropage;