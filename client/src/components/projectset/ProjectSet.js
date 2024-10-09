import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import colors from "../../tokens/color/color-tokens.json"
import classes from './css/ProjectSet.module.css';
import ProjectSetItem from './ProjectSetItem.js';
import getAxiosRequest from '../../util/getAxiosRequest';
import { Text, Link, Select, useTheme } from 'stelios';
import { IconArrowRight } from '@tabler/icons-react';

const ProjectSet = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  const colorPalette = useTheme().theme.colorPalette;
  const appearance = colorPalette.primary.appearance;
  const [filteredFrontEnd, setFilteredFrontEnd] = useState("");

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
        if(filteredFrontEnd){
          query = query + "category=" + filteredFrontEnd + "&";
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
    
  }, [props.time, props.type, params.category, props.limit, filteredFrontEnd]);
  
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

  const _handleFrontEndFilter = (e, item) => {
    setFilteredFrontEnd(item.value);
  }

  return (
    <div>
      <Link variant="hover" color="primary" onClick={() => navigate("/projects")} style={{display: "flex", alignItems: "center", gap: "0.5rem"}}><Text size="large" color="primary">{props.title}</Text> <IconArrowRight/></Link>
        <Text color='black' size="large" style={{marginTop: "1rem"}}>Filters:</Text>
        <div style={{display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "wrap", columnGap: "2rem", marginTop: "0.25rem"}} >
          <Select placeholder='' size="small" color="black" variant="soft" label="FrontEnd" options={[{title: "React", value: "react"}, {title: "Typescript", value: "typescript"}, {title: "Javascript", value: "javascript"}]} menuProps={{style: {zIndex: 10000, backgroundColor: appearance === "light" ? "white" : "#202124" }}} onClick={_handleFrontEndFilter}/>
          {/* <Select placeholder='' size="small" color="black" variant="outlined" label="BackEnd" options={[{title: "Node", value: "node"}, {title: "Express", value: "express"}]} menuProps={{style: {zIndex: 10000, backgroundColor: appearance === "light" ? "white" : "#202124" }}}/> */}
        </div>
        <div className={classes.projectSetCollection} style={{marginTop: "1rem"}}>
          {currentPageData}
        </div>
    </div>
  );
};

export default ProjectSet;