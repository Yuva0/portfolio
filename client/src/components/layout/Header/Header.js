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
  useUpdateTheme,
} from "stelios";
import colorTokens from "../../../tokens/color/color-tokens.json";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import {
  IconCaretDown,
  IconSettings,
  IconSun,
  IconMoon
} from "@tabler/icons-react";

const Header = (props) => {
  const colorPalette = useTheme().theme.colorPalette;
  const _background =
    colorPalette.primary.appearance === "dark" ? "#202124" : "white";
  const categoryRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [appearance, setAppearance] = useState("light");
  const updateTheme = useUpdateTheme();
  const navigate = useNavigate();

  const _toggleTheme = () => {
    updateTheme({
      appearance: appearance === "light" ? "dark" : "light",
      accents: {
        "primary": colorTokens.accent.primary,
        "black": colorTokens.accent.black
      }
    })
    setAppearance((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <HeaderUI
      color="primary"
      id="header"
      height="5rem"
      style={{
        background: _background,
        outline: "none",
        boxShadow: "0px 2px 14px rgba(0, 0, 0, .15)",
        zIndex:3
      }}
      expandable={false}
    >
      <HeaderGroup></HeaderGroup>
      <HeaderGroup></HeaderGroup>
      <HeaderGroup style={{ marginRight: "2rem", gap: "1rem" }}>
        <HeaderItem>
          <Link color="primary" onClick={() => navigate("/")}>Home</Link>
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
            style={{
              backgroundColor: _background,
              boxShadow: "0 6px 6px rgba(0, 0, 0, .1)",
            }}
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
            <MenuItem><ReactRouterLink to="/projects"><Text color="primary">Projects</Text></ReactRouterLink></MenuItem>
            <MenuItem><ReactRouterLink to="/certificates"><Text color="primary">Certificates</Text></ReactRouterLink></MenuItem>
            <MenuItem><ReactRouterLink to="/skills"><Text color="primary">Skills</Text></ReactRouterLink></MenuItem>
            {/* <MenuItem><ReactRouterLink to="/projects"><Text color="primary">Cards</Text></ReactRouterLink></MenuItem> */}
          </Menu>
        </HeaderItem>
        <HeaderItem>
          <Link  color="primary" onClick={() => navigate("/blogs")}>Blog</Link>
        </HeaderItem>
        <HeaderItem>
          <IconButton
            color="primary"
            icon={appearance === "light" ? <IconSun /> : <IconMoon />}
            alt="Sun Theme"
            size="small"
            variant="neumorph"
            onClick={_toggleTheme}
          />
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
