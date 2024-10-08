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
  IconSun,
  IconMoon,
  IconBrandGithub
} from "@tabler/icons-react";
import Settings from "./Settings/Settings";
import logo from '../../../assets/images/logo.png';
import name from '../../../assets/images/name.png';
import { useWindowSize } from "../../../hooks/use-windowsize";
import Navigation from "./Navigation/Navigation";

const Header = (props) => {
  const colorPalette = useTheme().theme.colorPalette;
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;
  const _background =
    colorPalette.primary.appearance === "dark" ? "#202124" : "white";
  const categoryRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [appearance, setAppearance] = useState(colorTokens.appearance);
  const updateTheme = useUpdateTheme();
  const navigate = useNavigate();

  const _toggleTheme = () => {
    updateTheme({
      appearance: appearance === "light" ? "dark" : "light",
      accents: {
        "primary": colorPalette.primary.main,
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
      <HeaderGroup style={{marginLeft: "1rem"}}>
        {isMobile && <Navigation/>}
        {!isMobile && <HeaderItem><ReactRouterLink style={{width: "100%", height: "100%"}} to="/"><Text variant="h2" color="primary">Tanuj Sengupta</Text></ReactRouterLink></HeaderItem>}
      </HeaderGroup>
      <HeaderGroup></HeaderGroup>
      <HeaderGroup style={{ marginRight: "2rem", gap: "1rem" }}>
        {!isMobile && <>
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
          <HeaderItem style={{marginRight: "2rem"}}>
            <Link  color="primary" onClick={() => navigate("/blogs")}>Blog</Link>
          </HeaderItem>
        </>}
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
            icon={<IconBrandGithub/>}
            alt="Sun Theme"
            size="small"
            variant="neumorph"
            onClick={() => window.open("https://github.com/yuva0")}
          />
        </HeaderItem>
        <HeaderItem>
          <Settings/>
        </HeaderItem>
      </HeaderGroup>
    </HeaderUI>
  );
};

export default Header;
