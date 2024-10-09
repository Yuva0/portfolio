import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import classes from './css/ProjectSet.module.css';
import ProjectSetItem from './ProjectSetItem.js';
import getAxiosRequest from '../../util/getAxiosRequest';
import { Text, Link, Select } from 'stelios';
import { IconArrowRight } from '@tabler/icons-react';

const ProjectSet = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

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
  
  let currentPageData = posts.map((post,index) => <ProjectSetItem key={index} id={post._id} idTitle={post.idTitle} title={post.title} description={post.description} date={post.buildDate}
  category={post.category} isDetailed = {post.isDetailed} coverImage={post.coverImage} imageAlt={post.imageAlt} difficultyType={post.difficultyType}/>);

  if(isLoading){
    return (<div>
      <ReactSpinner />
    </div>
    );
  }
  else if (posts.length === 0) {
    currentPageData = <Text variant='span' color="primary">No Projects found</Text>
  }

  return (
    <div>
      <Link variant="hover" color="primary" onClick={() => navigate("/projects")} style={{display: "flex", alignItems: "center", gap: "0.5rem"}}><Text size="large" color="primary">{props.title}</Text> <IconArrowRight/></Link>
        <div style={{display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "wrap", columnGap: "2rem", marginTop: "1rem"}}>
          <Select placeholder='' size="small" color="black" variant="outlined" label="FrontEnd" options={[{title: "React", value: "react"}, {title: "Typescript", value: "typescript"}]}/>
          <Select placeholder='' size="small" color="black" variant="outlined" label="BackEnd" options={[{title: "Node", value: "node"}, {title: "Express", value: "express"}]}/>
        </div>
        <div className={classes.projectSetCollection} style={{marginTop: "1rem"}}>
          {currentPageData}
        </div>
    </div>
  );
};

export default ProjectSet;