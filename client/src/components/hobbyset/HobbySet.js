import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import LineDiamondLine from '../ui/linediamondline/LineDiamondLine';
import HobbySetItem from './HobbySetItem';
import getAxiosRequest from '../../util/getAxiosRequest';
import classes from './css/HobbySet.module.css'

const HobbySet = (props) => {
    const [skills, setSkills] = useState([]);
    
    useEffect(() => {
        let isMounted = true;
        const fetchSkills = async () => {
            if (props.time === "latest") {
                let query="";
                if(props.category){
                    query = query + "category=" + props.category +"&";
                }
                if(props.limit){
                    query = query + "limit=" + props.limit +"&";
                }
                if(query){
                    const res = await getAxiosRequest("hobbies/?"+ query);
                    setSkills(res.data);
                }
                else{
                    const res = await getAxiosRequest("hobbies/");
                    setSkills(res.data);
                }
            }
        }
        
        if(isMounted)
          fetchSkills();

        return () => { isMounted = false };
    },[props.category,props.limit,props.time,props.type]);

    let currentPageData = skills.map((skill) => <HobbySetItem key={skill._id} _id={skill._id} idTitle={skill.idTitle} name={skill.title} image={skill.coverImage} alt={skill.imageAlt}/>);

    return (
        <div className={classes.skillSetWrapper}> 
            <LineDiamondLine/>
            <div className={classes.skillSetTitle}><h3><Link to={"/hobbies"}><span className={classes.arrow}>{props.title} </span></Link></h3></div>
            <div className={classes.skillSetItemWrapper}>
                {currentPageData}
            </div>
            <LineDiamondLine/>
        </div>
    );
};

export default HobbySet;