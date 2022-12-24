import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import getAxiosRequest from "../../util/getAxiosRequest";
import hii from '../../assets/images/hii_v2.png';

import classes from './css/Coverpage.module.css';

import CoverPageArticle from './CoverpageArticle';

const CoverPage = (props) => {

    const params = useParams();
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [imageDiv,setIsImageDiv] = useState(<div></div>);

    useEffect(() => {
        const fetchPosts = async() => {
            if(!params.category){
                const res = await getAxiosRequest("coverpages/?category=homepage");
                setPost(res.data);
                setIsImageDiv(<div className={classes.imageIcon}><img src={hii} alt="Hi Emoji"/></div>);
              }
              else if(params.category === "awareness"){
                const res = await getAxiosRequest("articles/?category=awareness&coverpage=true");
                setPost(res.data);
                setIsImageDiv(<div className={classes.imageIcon}><img src={hii} alt="Hi Emoji"/></div>);
              }
              else if(params.category === "thoughts"){
                const res = await getAxiosRequest("articles/?category=thoughts&coverpage=true");
                setPost(res.data);
                setIsImageDiv(<div className={classes.imageIcon}><img src={hii} alt="Hi Emoji"/></div>);
              }
              else if(params.category === "emotions"){
                const res = await getAxiosRequest("articles/?category=emotions&coverpage=true");
                setPost(res.data);
                setIsImageDiv(<div className={classes.imageIcon}><img src={hii} alt="Hi Emoji"/></div>);
              }
              else if(params.category === "mindset"){
                const res = await getAxiosRequest("articles/?category=mindset&coverpage=true");
                setPost(res.data);
                setIsImageDiv(<div className={classes.imageIcon}><img src={hii} alt="Hi Emoji"/></div>);
              }
              else if(params.category === "psychology"){
                const res = await getAxiosRequest("articles/?category=psychology&coverpage=true");
                setPost(res.data);
                setIsImageDiv(<div className={classes.imageIcon}><img src={hii} alt="Hi Emoji"/></div>);
              }
              else if(params.category === "philosophy"){
                const res = await getAxiosRequest("articles/?category=philosophy&coverpage=true");
                setPost(res.data);
                setIsImageDiv(<div className={classes.imageIcon}><img src={hii} alt="Hi Emoji"/></div>);
              }
              else if(params.category === "productivity"){
                const res = await getAxiosRequest("articles/?category=productivity&coverpage=true");
                setPost(res.data);
                setIsImageDiv(<div className={classes.imageIcon}><img src={hii} alt="Hi Emoji"/></div>);
              }
              setIsLoading(false);
        };
        fetchPosts();
    }, [params.category]);

    if(isLoading){
        return (<div>
            <ReactSpinner />
        </div>
        );
    }
    else if (post.length === 0){
        return (<div></div>);
    }
    else{
        return (
            <div className={classes.coverpage}>
                {imageDiv}
                <CoverPageArticle title={post[0].title} description={post[0].description} idTitle={post[0].idTitle}/>
            </div>
        );
    }
    
};

export default CoverPage;