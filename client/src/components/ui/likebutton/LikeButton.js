import { Fragment, useState } from 'react';
import classes from './css/LikeButton.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const LikeButton = (props) => {
    const [likedArticle, setLikedArticle] = useState(false);

    const [likesCount,setLikesCount] = useState(props.likes_count);

    const likedArticleHandler = async(type) => {
        setLikedArticle(() => (type));
        if(type === true){
            // const axiosInstance = axios.create({
            //     baseURL:process.env.REACT_APP_API_URL
            // });
            const axiosInstance = axios.create({
                baseURL:"http://localhost:5000/api/"
            })
            axiosInstance.post(props.contentType+"/"+props._id+"/like",{type:"like"});
            setLikesCount((likesCount) => (likesCount+1));
        }
        else{
            const axiosInstance = axios.create({
                baseURL:"http://localhost:5000/api/"
            });

            axiosInstance.post(props.contentType+"/"+props._id+"/like",{type:"unlike"});
            setLikesCount((likesCount) => (likesCount-1));
        }
    };

    return (
        <Fragment>
            <div className={`${classes.heart}`} onClick={()=>likedArticleHandler(!likedArticle)} >
                {!likedArticle ? 
                    <span className={classes.notLiked}>
                        <FontAwesomeIcon icon={faHeart}/>
                    </span> :
                    <span className={classes.liked}>
                        <FontAwesomeIcon icon={faSHeart}/>
                    </span>
                }
            </div>

            
            <div className={classes.likeCount}><h6>{likesCount}</h6></div>
        </Fragment>
    );
};

export default LikeButton;