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
import { useWindowSize } from "../../../hooks/use-windowsize";
import Navigation from "./Navigation/Navigation";
import styled from "styled-components";

const Header = (props) => {
  const colorPalette = useTheme().theme.colorPalette;
  const windowSize = useWindowSize();
  const isLaptop = windowSize.width < 1200;
  const isMobile = windowSize.width < 768;
  const _background =
    colorPalette.primary.appearance === "dark" ? "#202124" : "white";
  const categoryRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [appearance, setAppearance] = useState(colorTokens.appearance);
  const updateTheme = useUpdateTheme();
  const _color = colorPalette.primary.accentScale[10];

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
        {!isMobile && <HeaderItem style={{marginLeft: "2rem"}}><Link tabIndex={0} color="primary" style={{width: "100%", height: "100%"}} to="/"><Text tabIndex={-1} variant={isLaptop ? "h3" : "h1"} color="primary" fontFamily="'Dosis', sans-serif;">Tanuj Sengupta</Text></Link></HeaderItem>}
      </HeaderGroup>
      <HeaderGroup></HeaderGroup>
      <HeaderGroup style={{ marginRight: isMobile ? "0.5rem" :"2rem", gap: "1rem" }}>
        {!isMobile && <>
          <HeaderItem>
            <Link color="primary" href="/">Home</Link>
          </HeaderItem>
          <HeaderItem>
            <CategoryLink
              tabIndex={0}
              $color={_color}
              color="primary"
              ref={categoryRef}
              onClick={() => setOpen(!open)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setOpen(!open);
                }
              }}
            >
              <Text disableColor>Category</Text>
              <IconCaretDown size="1rem" />
            </CategoryLink>
            {open && <Menu
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
              <MenuItem><Link href="/projects"><Text color="primary">Projects</Text></Link></MenuItem>
              <MenuItem><Link href="/certificates"><Text color="primary">Certificates</Text></Link></MenuItem>
              <MenuItem><Link href="/skills"><Text color="primary">Skills</Text></Link></MenuItem>
              {/* <MenuItem><ReactRouterLink to="/projects"><Text color="primary">Cards</Text></ReactRouterLink></MenuItem> */}
            </Menu>}
          </HeaderItem>
          <HeaderItem style={{marginRight: "2rem"}}>
            <Link color="primary" href="/blogs">Blog</Link>
            {/* <Link  color="primary" onClick={() => navigate("/blogs")}>Blog</Link> */}
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


const CategoryLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 1px solid ${(props) => props.$color};
    outline-offset: 2px;
    border-radius: 0.25rem;
  }
`;