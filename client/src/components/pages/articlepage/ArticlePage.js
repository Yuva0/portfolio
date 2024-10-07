import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './css/ArticlePage.module.css';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import ArticleHeader from '../../articlecontent/ArticleHeader';
import ArticleBody from '../../articlecontent/ArticleBody';
import getAxiosRequest from '../../../util/getAxiosRequest';
import LikeButton from '../../ui/likebutton/LikeButton';
import { Text } from 'stelios';

const ArticlePage = (props) => {
  const [post, setPost] = useState([{title:"",content:"",date:"",authors:[]}]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      const res = await getAxiosRequest(props.type+"/"+params.idTitle);
      setPost(res.data);
      setIsLoading(false);
      
    }
    fetchPost();
  },[params.idTitle,props.type]);
  if(isLoading){
    return (
      <div className={classes.articlepage}>
        <ReactSpinner/>
        </div>
    );
  }
  else{
    return (
      <div className={classes.articlepage}>
        <ArticleHeader title = {post[0].title} date={post[0].buildDate} authors={post[0].authors} category={post[0].category} coverImage={post[0].coverImage} difficultyType = {post[0].difficultyType} imageCaption = {post[0].imageCaption} imageAlt={post[0].imageAlt} videoUrl={post[0].videoUrl}/>
        <ArticleBody content = {post[0].content}/>
        <div className={classes.interactionEvents}>
          <Text color="black" className={classes.interactionEventsTitle}>Loved it? Show it!</Text>
          <div className={classes.interactionEventsContent}>
            <span className={classes.likeButton}><LikeButton contentType={props.type} likes_count = {post[0].likes_count} _id={post[0]._id}/></span>
          </div>
        </div>
        
      </div>
    );
  }
};

export default ArticlePage;