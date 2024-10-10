import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './css/ProjectSet.module.css';
import ProjectSetItem from './ProjectSetItem.js';
import getAxiosRequest from '../../util/getAxiosRequest';
import { Text, Link, Select, useTheme, Loader } from 'stelios';
import { IconArrowRight } from '@tabler/icons-react';

const ProjectList = ({ posts }) => {
  if (posts.length === 0) {
    return <Text variant='span' color="primary">No Projects found</Text>;
  }

  return (
    <div className={classes.projectSetCollection}>
      {posts.map((post, index) => (
        <ProjectSetItem
          key={index}
          id={post._id}
          idTitle={post.idTitle}
          title={post.title}
          description={post.description}
          date={post.buildDate}
          category={post.category}
          isDetailed={post.isDetailed}
          coverImage={post.coverImage}
          imageAlt={post.imageAlt}
          difficultyType={post.difficultyType}
        />
      ))}
    </div>
  );
};

const ProjectSet = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  const colorPalette = useTheme().theme.colorPalette;
  const appearance = colorPalette.primary.appearance;
  const [filteredFrontEnd, setFilteredFrontEnd] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      let query = "";
      if (params.category) {
        query += "category=" + params.category + "&";
      }
      if (props.limit) {
        query += "limit=" + props.limit + "&";
      }
      if (filteredFrontEnd) {
        query += "category=" + filteredFrontEnd + "&";
      }

      try {
        const [res] = await Promise.all([
          getAxiosRequest("projects/?" + query),
          new Promise(resolve => setTimeout(resolve, 300))
        ]);

        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setPosts([]);
      }

      setIsLoading(false);
    };

    fetchPosts();
  }, [params.category, props.limit, filteredFrontEnd]);

  const _handleFrontEndFilter = (e, item) => {
    setFilteredFrontEnd(item.value);
  }

  return (
    <div>
      <Link variant="hover" color="primary" onClick={() => navigate("/projects")} style={{display: "flex", alignItems: "center", gap: "0.5rem"}}>
        <Text size="large" color="primary">{props.title}</Text> <IconArrowRight/>
      </Link>
      <Text color='black' size="large" style={{marginTop: "1rem"}}>Filters:</Text>
      <div style={{display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "wrap", columnGap: "2rem", marginTop: "0.25rem"}} >
        <Select
          placeholder=''
          size="small"
          color="black"
          variant="outlined"
          label="FrontEnd"
          options={[{title: "React", value: "react"}, {title: "Typescript", value: "typescript"}, {title: "Javascript", value: "javascript"}]}
          menuProps={{style: {zIndex: 10000, backgroundColor: appearance === "light" ? "white" : "#202124" }}}
          onClick={_handleFrontEndFilter}
        />
      </div>
      <div style={{marginTop: "1rem"}}>
        {isLoading ? (
          <LoadingProjectList limit={props.limit}/>
        ) : (
          <ProjectList posts={posts} />
        )}
      </div>
    </div>
  );
};

export default ProjectSet;

const LoadingProjectList = ({limit}) => {
  if (!limit) {
    limit = 9;
  }

  return (
    <div className={classes.loadingSetCollection}>
      {Array.from({ length: limit }).map((_, index) => (
          <Loader key={index} color="primary" style={{padding: 0, border: 0, flexBasis: "30%", height: "510px"}} className={classes.projectSetItemWrapper} />
      ))}
    </div>
  )
}