import { useState,useEffect } from 'react';
import LineDiamondLine from '../ui/linediamondline/LineDiamondLine';
import SkillSetItem from './SkillSetItem';
import getAxiosRequest from '../../util/getAxiosRequest';
import classes from './css/SkillSet.module.css'
import { Link, Text } from 'stelios';
import { IconArrowRight } from '@tabler/icons-react';

const SkillSet = (props) => {
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
                    const res = await getAxiosRequest("skills/?"+ query);
                    setSkills(res.data);
                }
                else{
                    const res = await getAxiosRequest("skills/?"+query);
                    setSkills(res.data);
                }
            }
        }
        
        if(isMounted)
          fetchSkills();

        return () => { isMounted = false };
    },[props.category,props.limit,props.time,props.type]);

    let currentPageData = skills.map((skill,index) => <SkillSetItem key={index} _id={skill._id} idTitle={skill.idTitle} name={skill.title} image={skill.coverImage} alt={skill.imageAlt} rating={skill.rating}/>);

    if (skills.length === 0){
        currentPageData = <p>No Skills found</p>
    }

    return (
        <div className={classes.skillSetWrapper}> 
            <LineDiamondLine/>
            <Link href="/skills" color="primary" size="large" className={classes.skillSetTitle} style={{marginTop: "1rem", justifyContent: "center", alignItems: "center", display: 'flex'}}><Text size="large" color="primary">{props.title}</Text> <IconArrowRight/></Link>
            <div className={classes.skillSetItemWrapper} style={{marginTop: "2rem"}}>
                {currentPageData}
            </div>
            <LineDiamondLine/>
        </div>
    );
};

export default SkillSet;