import React from "react";
import { IconMenu } from "@tabler/icons-react";
import { Drawer, IconButton, List, ListItem, Text, Link } from "stelios";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const navigate = useNavigate();

    return (
        <>
            <IconButton color="primary" size="small" variant="neumorph" icon={<IconMenu />} alt="Settings" onClick={() => setDrawerOpen(true)}/>
            <Drawer size="small" color="primary" open={drawerOpen} onClose={() => setDrawerOpen(false)} hasCloseIcon title={<Text size="large" color="primary">Navigation</Text>} position="left">
                <div style={{display: "flex", flexDirection: "column", gap: "2rem", marginLeft: "1rem"}}>
                    <Link size="large" color="primary" onClick={() => {navigate("/"); setDrawerOpen(false)}}>Home</Link>
                    <List title={<Text size="large" color="primary">Categories</Text>}>
                        <ListItem><Link size="large" color="primary" onClick={() => {navigate("/projects"); setDrawerOpen(false)}}>Projects</Link></ListItem>
                        <ListItem><Link size="large" color="primary" onClick={() => {navigate("/certificates"); setDrawerOpen(false)}}>Certificates</Link></ListItem>
                        <ListItem><Link size="large" color="primary" onClick={() => {navigate("/skills"); setDrawerOpen(false)}}>Skills</Link></ListItem>
                    </List>
                    <Link size="large" color="primary" onClick={() => {navigate("/blogs"); setDrawerOpen(false)}}>Blogs</Link>
                </div>
            </Drawer>
        </>
    )
};

export default Navigation;