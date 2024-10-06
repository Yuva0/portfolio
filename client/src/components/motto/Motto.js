import classes from './css/Motto.module.css';
import MottoContent from './MottoContent';
import getAxiosRequest from '../../util/getAxiosRequest';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import { useState, useEffect } from 'react';
import LineDiamondLine from '../ui/linediamondline/LineDiamondLine';
import { useTheme } from 'stelios';

const Motto = () => {
    const [motto, setMotto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const colorPalette = useTheme().theme.colorPalette;

    useEffect(() => {
        let isMounted = true
        const fetchMotto = async() => {
            const res = await getAxiosRequest("motto/");
            setMotto(res.data);
            setIsLoading(false);
        }
        if(isMounted){ 
            fetchMotto();
        }

        return () => { isMounted = false };
    }, []);

    if(isLoading){
        return (<div>
            <ReactSpinner/>
          </div>
        );
    }
    else if(motto.length === 0){
        return (<div></div>);
    }
    else{
        return (
            <div className={classes.mottoWrapper}> 
                <LineDiamondLine/>
                <MottoContent quote = {motto[0].motto} author = {motto[0].author}/> 
                <LineDiamondLine/>
            </div>
        );
    }
};

export default Motto;