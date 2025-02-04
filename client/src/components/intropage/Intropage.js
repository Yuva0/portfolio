import * as React from "react";
import profileImage from "../../assets/images/profile.jpg";
import { Avatar, Button, Card, Link, List, ListItem, Text, useTheme } from "stelios";
import colors from "../../tokens/color/color-tokens.json";
import Resume from "./resume";

const Intropage = () => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
    const _primaryBgColor = useTheme().theme.colorPalette.primary.accentScale[8]
    const _primaryColor = useTheme().theme.colorPalette.primary.accentContrast;
    const [showResume, setShowResume] = React.useState(false);

    const onCloseModalHandler = () => {
        setShowResume(false);
    }

    return (
        <>
        <Card
        animate="fade-in"
        variant="neumorph"
        color="primary"
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.75rem",
            width: "100%",
            flexWrap: "wrap"
        }}
        >
        <>
            <div
                style={{
                    flex: "1 1 30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                <Avatar
                    size="xlarge"
                    type="image"
                    src={profileImage}
                    alt="Profile Image"
                />
                <Text
                    variant="h4"
                    color="primary"
                    size="large"
                    fontFamily='"Alegreya", serif;'
                    style={{ marginTop: "1rem", textAlign: "center" }}
                >
                    Tanuj Sengupta
                </Text>
                </div>
            <div style={{ flex: "1 1 65%", padding: "1rem 0" }}>

            <List color="primary" title={<Text color="primary" size="large">Full Stack Developer</Text>} style={{gap: "0.25rem"}}>
                <ListItem><Text preciseColor={_color} size="medium">Having five years of experience in building robust, scalable, and intuitive web applications</Text></ListItem>
                <ListItem><Text preciseColor={_color} size="medium" style={{marginTop: "0.5rem"}}>Created multiple websites with focus on functionality, performance and user experience.</Text></ListItem>
                <ListItem><Text preciseColor={_color} size="medium" style={{marginTop: "0.5rem", lineHeight: "1.5rem"}}>Worked on both front-end technologies like TypeScript and React, as well as back-end technologies such as NodeJS, SpringBoot and Express.js for building scalable and efficient applications.</Text></ListItem>
            </List>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem", columnGap: "2rem", rowGap: "1rem", flexWrap: "wrap"}}>
                <Button variant="neumorph" color="primary" onClick={() => {setShowResume(true)}} style={{backgroundColor: _primaryBgColor, color: _primaryColor , border:0}}>View Resume</Button>
                <Button variant="neumorph" color="primary" onClick={() => {window.open("https://www.linkedin.com/in/tanuj-sengupta-872a05129/")}}>LinkedIn Profile</Button>
            </div>
            </div>
        </>
        </Card>
        {showResume && (<Resume onClose={onCloseModalHandler}/>)}
        </>
    );
};

export default Intropage;
