import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import classes from './css/BlogSet.module.css';
import ReactPaginate from "react-paginate";
import BlogSetItem from './BlogSetItem.js';
import getAxiosRequest from '../../util/getAxiosRequest';
import { Text, Link, useTheme } from 'stelios';
import { IconArrowRight } from '@tabler/icons-react';

const PER_PAGE = 12;

const BlogSet = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const theme = useTheme().theme;

  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const fetchBlogs = async () => {
      if (props.time === "latest") {
        let query="";
        if(params.category){
          query = query + "category=" + params.category +"&";
        }
        if(props.limit){
          query = query + "limit=" + props.limit +"&";
        }
        if(query){
          const res = await getAxiosRequest("blogs/?"+ query);
          setBlogs(res.data);
        }
        else{
          const res = await getAxiosRequest("blogs/");
          setBlogs(res.data);
        }
      }
      setIsLoading(false);
    }
    if(isMounted)
    fetchBlogs();

    return () => { isMounted = false };
    
  }, [props.time, props.type, params.category, props.limit]);
  
  let currentPageData;

  if(isLoading){
    return (<div>
      <ReactSpinner />
    </div>
    );
  }
  else if (blogs.length === 0) {
    currentPageData = <p>No Posts found</p>
  }
  else {
    currentPageData = blogs.map((post,index) => <BlogSetItem key={index} id={post._id} idTitle={post.idTitle} title={post.title} description={post.description} date={post.buildDate}
    category={post.category} isDetailed = {post.isDetailed} coverImage={post.coverImage} imageAlt={post.imageAlt} difficultyType={post.difficultyType}/>);
  }

  return (
    <div className={classes.blogSetWrapper}>
      <Link variant="hover" color="primary" onClick={() => navigate("/blogs")} style={{display: "flex", alignItems: "center", gap: "0.5rem"}}><Text size="large" color="primary">{props.title}</Text> <IconArrowRight/></Link>
      <div className={classes.blogSetCollection} style={{marginTop: "1rem"}}>
        {currentPageData}
      </div>
    </div>
  );
};

export default BlogSet;