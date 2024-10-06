import * as React from 'react';
import ButtonandSymbol from '../ui/ButtonAndSymbol/ButtonandSymbol';
import classes from './css/Intropage.module.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../../assets/images/profile.jpg';
import { Avatar, Text } from 'stelios';

const Intropage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem"}}>
            <Avatar size="large" type="image" src={profileImage} alt="Profile Image"/>
            <Text variant="paragraph" color="black" fontSize='2rem' fontFamily='"Alegreya", serif;' style={{marginTop: "1rem"}}>Tanuj Sengupta</Text>
            <Text variant='paragraph' color='black' fontSize='1rem' style={{marginTop: "0rem"}}>FrontEnd Developer</Text>
            <Text variant='paragraph' color='black' size='large' style={{marginTop: "0rem"}}>Building responsive, accessible, and highly customizable UI libraries</Text>
        </div>
    );
};

export default Intropage;