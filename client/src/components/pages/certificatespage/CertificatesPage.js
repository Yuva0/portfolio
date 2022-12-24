import CertificateSet from '../../certificateset/CertificateSet';
import classes from './css/CertificatesPage.module.css';

const CertificatesPage = (props) => {
  return (
    <div className={classes.certificatespage}>
        <CertificateSet title="All Certificates" time="latest" type="certificate"/>
    </div>
  );
};

export default CertificatesPage;