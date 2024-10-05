import { useRef, useState } from "react";
import {
  Header as HeaderUI,
  HeaderItem,
  Text,
  useTheme,
  HeaderGroup,
  Link,
  IconButton,
  Menu,
  MenuItem,
} from "stelios";
import { Link as ReactRouterLink, NavLink } from "react-router-dom";
import { IconCaretDown, IconDownload, IconSettings } from "@tabler/icons-react";
import classes from "./css/Header.module.css";
import logo from "../../../assets/images/logo.png";
import name from "../../../assets/images/name.png";
import SettingsButton from "./Settings/SettingsButton";
import NavigationButton from "./Navigation/NavigationButton";
import CategoryButton from "./Category/CategoryButton";

const Header = (props) => {
  const colorPalette = useTheme().theme.colorPalette;
  const _background =
    colorPalette.primary.appearance === "dark" ? "#202124" : "white";
  const categoryRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <HeaderUI
      color="primary"
      id="header"
      height="5rem"
      style={{
        background: _background,
        outline: "none",
        boxShadow: "0px 2px 14px rgba(0, 0, 0, .15)",
      }}
      expandable={false}
    >
      <HeaderGroup></HeaderGroup>
      <HeaderGroup></HeaderGroup>
      <HeaderGroup style={{ marginRight: "2rem", gap: "1rem" }}>
        <HeaderItem>
          <Link color="primary">Home</Link>
        </HeaderItem>
        <HeaderItem>
          <Link
            color="primary"
            ref={categoryRef}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.25rem",
            }}
            onClick={() => setOpen(!open)}
          >
            <Text disableColor>Category</Text>
            <IconCaretDown size="1rem" />
          </Link>
          <Menu
            variant="neumorph"
            open={open}
            anchorElement={categoryRef.current}
            color="primary"
            popperStyles={{
              placement: "bottom",
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 16],
                  },
                },
              ],
            }}
          >
            <MenuItem>Projects</MenuItem>
            <MenuItem>Certificates</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Hobbies</MenuItem>
          </Menu>
        </HeaderItem>
        <HeaderItem>
          <Link color="primary">Blog</Link>
        </HeaderItem>
        <HeaderItem>
          <IconButton
            color="primary"
            icon={<IconSettings />}
            alt="Settings"
            size="small"
            variant="neumorph"
          />
        </HeaderItem>
      </HeaderGroup>
    </HeaderUI>
  );
};

export default Header;
