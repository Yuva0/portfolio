import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import LineDiamondLine from '../ui/linediamondline/LineDiamondLine';
import HobbySetItem from './HobbySetItem';
import getAxiosRequest from '../../util/getAxiosRequest';
import ReactPaginate from "react-paginate";
import classes from './css/HobbySet.module.css'

const PER_PAGE = 30;

const HobbySet = (props) => {
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

    let currentPageData,pageCount,reactPaginate;

    if (skills.length === 0){
        currentPageData = <p>No Skills found</p>
        reactPaginate = undefined;
    }
    else{
        pageCount = Math.ceil(skills.length / PER_PAGE);
        const offset = currentPage * PER_PAGE;
        currentPageData = skills.slice(offset, offset + PER_PAGE).map((skill) => <HobbySetItem key={skill._id} _id={skill._id} idTitle={skill.idTitle} name={skill.title} image={skill.coverImage} alt={skill.imageAlt}/>);

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
            <div className={classes.skillSetTitle}><h3><Link to={"/hobbies"}><span className={classes.arrow}>{props.title} </span></Link></h3></div>
            <div className={classes.skillSetItemWrapper}>
                {currentPageData}
            </div>
            {reactPaginate}
            <LineDiamondLine/>
        </div>
    );
};

export default HobbySet;