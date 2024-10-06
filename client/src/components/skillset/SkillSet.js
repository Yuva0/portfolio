import { useState,useEffect } from 'react';
import {Link as ReactLink} from 'react-router-dom';
import LineDiamondLine from '../ui/linediamondline/LineDiamondLine';
import SkillSetItem from './SkillSetItem';
import getAxiosRequest from '../../util/getAxiosRequest';
import ReactPaginate from "react-paginate";
import classes from './css/SkillSet.module.css'
import { Link, Text } from 'stelios';
import { IconArrowRight } from '@tabler/icons-react';

const PER_PAGE = 30;

const SkillSet = (props) => {
    const [skills, setSkills] = useState([]);
    
    const [currentPage, setCurrentPage] = useState(0);

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

    let currentPageData,pageCount,reactPaginate;

    if (skills.length === 0){
        currentPageData = <p>No Skills found</p>
        reactPaginate = undefined;
    }
    else{
        pageCount = Math.ceil(skills.length / PER_PAGE);
        const offset = currentPage * PER_PAGE;
        currentPageData = skills.slice(offset, offset + PER_PAGE).map((skill) => <SkillSetItem key={skill._id} _id={skill._id} idTitle={skill.idTitle} name={skill.title} image={skill.coverImage} alt={skill.imageAlt} rating={skill.rating}/>);

        if(skills.length < PER_PAGE){
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
        <div className={classes.skillSetWrapper}> 
            <LineDiamondLine/>
            <Link color="primary" size="large" className={classes.skillSetTitle} style={{marginTop: "1rem", justifyContent: "center", alignItems: "center", display: 'flex'}}><Text size="large" color="primary">{props.title}</Text> <IconArrowRight/></Link>
            <div className={classes.skillSetItemWrapper} style={{marginTop: "2rem"}}>
                {currentPageData}
            </div>
            {reactPaginate}
            <LineDiamondLine/>
        </div>
    );
};

export default SkillSet;