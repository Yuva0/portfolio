import * as React from "react";
import ButtonandSymbol from "../ui/ButtonAndSymbol/ButtonandSymbol";
import classes from "./css/Intropage.module.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../../assets/images/profile.jpg";
import { Avatar, Button, Card, Text } from "stelios";
import colors from "../../tokens/color/color-tokens.json";

const Intropage = () => {
  return (
    <Card
      variant="neumorph"
      color="primary"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.75rem",
        width: "100%",
      }}
    >
      <>
        <div style={{ flex: "1 1 70%", padding: "1rem 0" }}>
          <Text
            variant="paragraph"
            color="primary"
            fontSize="1.25rem"
            size="small"
          >
            FrontEnd Developer
          </Text>
          <Text
            variant="paragraph"
            color="black"
            size="small"
            style={{ marginTop: "1rem", textAlign: "justify" }}
          >
            Specializing in the development of scalable and customizable design
            systems. Responsive and accessible UIs are created to balance both
            functionality and design. Systems like Stelios have been developed,
            focusing on flexibility, theming, and consistency across
            applications, with an emphasis on high-quality, thoroughly tested
            code.
          </Text>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem", gap: "4rem"}}>
            <Button variant="neumorph" color="primary" style={{backgroundColor: colors.accent.primary, color: "white", border:0}}>View Resume</Button>
            <Button variant="neumorph" color="primary">LinkedIn Profile</Button>
          </div>
        </div>
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
            variant="paragraph"
            color="primary"
            fontSize="1.25rem"
            fontFamily='"Alegreya", serif;'
            style={{ marginTop: "1rem" }}
          >
            Tanuj Sengupta
          </Text>
        </div>
      </>
    </Card>
  );
};

export default Intropage;
