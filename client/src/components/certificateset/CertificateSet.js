import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import classes from './css/CertificateSet.module.css';
import CertificateSetItem from './CertificateSetItem.js';
import getAxiosRequest from '../../util/getAxiosRequest';
import { Text, useTheme, Link } from 'stelios';
import { IconArrowRight } from '@tabler/icons-react';

const CertificateSet = (props) => {
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
    
  useEffect(() => {
    const fetchCertificate = async () => {
      if (props.time === "latest") {
        let query="";
        if(params.category){
          query = query + "category=" + params.category +"&";
        }
        if(props.limit){
          query = query + "limit=" + props.limit +"&";
        }
        if(query){
          const res = await getAxiosRequest("certificates/?"+ query);
          setCertificates(res.data);
        }
        else{
          const res = await getAxiosRequest("certificates/");
          setCertificates(res.data);
        }
        setIsLoading(false);
      }
    }

    fetchCertificate();
  }, [props.time, props.type, params.category, props.limit]);
  
  let currentPageData = certificates.map((certificate,index) => <CertificateSetItem key={certificate._id} id={certificate._id} idTitle={certificate.idTitle} title={certificate.title} description={certificate.description} date={certificate.createdAt}
    category={certificate.category} isDetailed = {certificate.isDetailed} coverImage={certificate.coverImage} imageAlt={certificate.imageAlt} duration={certificate.duration} difficultyType={certificate.difficultyType}/>);

  if(isLoading){
    return (<div>
      <ReactSpinner />
    </div>
    );
  }
  else if (certificates.length === 0) {
    currentPageData = <p>No Certificates found</p>
  }

  return (
    <div className={classes.certificateSetWrapper}>
      <Link variant="hover" color="primary" onClick={() => navigate("/projects")} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem"}}><Text size="large" color="primary">{props.title}</Text> <IconArrowRight/></Link>
      <div className={classes.certificateSetCollection} style={{marginTop: "1rem"}}>
        {currentPageData}
      </div>
    </div>
  );
};

export default CertificateSet;