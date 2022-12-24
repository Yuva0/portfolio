import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import {Link} from 'react-router-dom';
import classes from './css/ProjectSet.module.css';
import ReactPaginate from "react-paginate";
import ProjectSetItem from './ProjectSetItem.js';
import getAxiosRequest from '../../util/getAxiosRequest';

const PER_PAGE = 12;

const ProjectSet = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const fetchPosts = async () => {
      if (props.time === "latest") {
        let query="";
        if(params.category){
          query = query + "category=" + params.category +"&";
        }
        if(props.limit){
          query = query + "limit=" + props.limit +"&";
        }
        if(query){
          const res = await getAxiosRequest("projects/?"+ query);
          setPosts(res.data);
        }
        else{
          const res = await getAxiosRequest("projects/");
          setPosts(res.data);
        }
      }
      setIsLoading(false);
    }
    if(isMounted)
      fetchPosts();

    return () => { isMounted = false };
    
  }, [props.time, props.type, params.category, props.limit]);
  
  let currentPageData,pageCount,reactPaginate;

  if(isLoading){
    return (<div>
      <ReactSpinner />
    </div>
    );
  }
  else if (posts.length === 0) {
    currentPageData = <p>No Posts found</p>
    reactPaginate = undefined;
  }
  else {
    pageCount = Math.ceil(posts.length / PER_PAGE);
    const offset = currentPage * PER_PAGE;
    currentPageData = posts.slice(offset, offset + PER_PAGE).map((post,index) => <ProjectSetItem key={index} id={post._id} idTitle={post.idTitle} title={post.title} description={post.description} date={post.buildDate}
    category={post.category} isDetailed = {post.isDetailed} coverImage={post.coverImage} imageAlt={post.imageAlt} difficultyType={post.difficultyType}/>);

    if(posts.length < PER_PAGE){
      reactPaginate = undefined;
    }
    else{
      reactPaginate = <ReactPaginate previousLabel={"Previous"} nextLabel={"Next"} pageCount={pageCount} onPageChange={handlePageClick} containerClassName={classes.pagination} previousLinkClassName={classes.pagination__link}
      nextLinkClassName={classes.pagination__link} disabledClassName={classes.pagination__link__disabled} activeClassName={classes.pagination__link__active}/>
    }
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    window.scrollTo(0, 0);
  }

 

  return (
    <div className={classes.projectSetWrapper}>
      <div className={`${classes.projectSetTitle} title`}><h3><Link to={"/projects"}><span className={classes.arrow}>{props.title} </span></Link></h3></div>
      <div className={classes.projectSetCollection}>
        {currentPageData}
      </div>
      {reactPaginate}
    </div>
  );
};

export default ProjectSet;