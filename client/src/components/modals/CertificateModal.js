import { Fragment,useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import getAxiosRequest from '../../util/getAxiosRequest';
import CertificateHeader from '../certificatecontent/CertificateHeader';
import CertificateBody from '../certificatecontent/CertificateBody';
import LikeButton from '../ui/likebutton/LikeButton';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import classes from './css/ProjectModal.module.css';
import { Link } from 'react-router-dom';
import { Text, useTheme } from 'stelios';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlay = (props) => {
    const theme = useTheme().theme;
    const _backgroundColor = theme.colorPalette.primary.appearance === "light" ? "white" : "#202124";

    return (
        <div className={classes.modal} style={{display: "flex", background: [_backgroundColor]}}>
            <div className={classes.modalWithScroll}>
                <div className={classes.modalContent}>{props.children}</div>
            </div>
        </div>
    );
}

const portalElement = document.getElementById('modal');

const CertificateModal = (props) => {
    const [skill, setSkill] = useState([{title:"",content:"",idTitle:""}]);
    const [isLoading, setIsLoading] = useState(true);
    const _primaryColor = useTheme().theme.colorPalette.primary.accentScale[10];
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

    useEffect(() => {
        let isMounted = true;
        const fetchSkill = async () => {
            const res = await getAxiosRequest("certificates/"+props.idTitle);
            setSkill(res.data);
            setIsLoading(false);
        }
            
        if(isMounted)
            fetchSkill();

        return () => { isMounted = false };
    },[props.idTitle]);

    const navigationToArticleHandler = () =>{
        document.getElementsByTagName("body")[0].classList.remove("hideOverflow");
    }

    let content;

    if(isLoading){
        content = <ReactSpinner/>
    }
    else{
        content = <Fragment>
                    <CertificateHeader title={skill[0].title} coverImage={skill[0].coverImage} imageCaption = {skill[0].imageCaption} difficultyType={skill[0].difficultyType} imageAlt={skill[0].imageAlt} category={skill[0].category} videoUrl={skill[0].videoUrl} authors={skill[0].authors} date={skill[0].buildDate}/>
                    <CertificateBody content={skill[0].content}/>
                    {/* <div className={classes.interactionEvents}>
                        <Text size="small" color="black" className={classes.interactionEventsTitle}>Loved it? Show it!</Text>
                        <div className={classes.interactionEventsContent}>
                            <span className={classes.likeButton}><LikeButton contentType="certificates" likes_count = {skill[0].likes_count} _id={skill[0]._id}/></span>
                        </div>
                    </div> */}
                </Fragment>;
    }
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(
            <ModalOverlay>
                <div className={classes.closeModal} style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                <Text variant="span" className={classes.articleMode}><Link style={{color: _primaryColor}} to={"/certificate/"+skill[0].idTitle} onClick={navigationToArticleHandler}>Switch to article mode</Link></Text>
                    <span><FontAwesomeIcon color={_color} icon={faTimes} onClick={props.onClose}/></span>
                </div>
                {content}
            </ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default CertificateModal;