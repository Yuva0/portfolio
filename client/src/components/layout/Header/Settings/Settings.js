import { IconBrandGithub, IconBrandLinkedin, IconBrandStorybook, IconMoon, IconSettings, IconSun } from "@tabler/icons-react";
import { Button, Collapsible, ColorPicker, Drawer, IconButton, Text, ToggleButton, ToggleButtonGroup, useTheme, useUpdateTheme } from "stelios";
import { useState } from "react";
import React from 'react';
import styled from "styled-components";
import colors from "../../../../tokens/color/color-tokens.json";
import { useWindowSize } from "../../../../hooks/use-windowsize";

const StyledDrawerChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StyledDrawerChildrenItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Settings = () => {
    const updateTheme=useUpdateTheme();
    const windowSize = useWindowSize();
    const mobile = windowSize.width < 480;
    const colorPalette=useTheme().theme.colorPalette;
    const [primaryColor, setPrimaryColor] = useState(colors.accent.primary);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [appearance, setAppearance] = React.useState(
        colorPalette.primary.appearance
    );

    const _handlePrimaryColorChange = (color) => {
        if (!color) return;
        setPrimaryColor(color);
        updateTheme({
          appearance,
          accents: {
            primary: color,
            black: colors.accent.black
          },
        });
      };

    const _onClickRevert = () => {
        setAppearance(colors.appearance);
        setPrimaryColor(colors.accent.primary);
        updateTheme({
          appearance: colors.appearance,
          accents: {
            primary: colors.accent.primary,
          },
        });
      };
    return (
        <>
        <IconButton color="primary" size="small" variant="neumorph" icon={<IconSettings />} alt="Settings" onClick={() => setDrawerOpen(true)}/>
        <Drawer color="primary" open={drawerOpen} onClose={() => setDrawerOpen(false)} hasCloseIcon title="Settings" position="right">
        <StyledDrawerChildren>
          {mobile && (
            <div>
              <div>
                <Text color="primary">Useful Links -</Text>
              </div>
              <div style={{ margin: "0.5rem 0", display: "flex", gap: "1rem" }}>
                <IconButton
                  color="primary"
                  size="small"
                  variant="soft"
                  alt="github"
                  icon={<IconBrandGithub />}
                  onClick={() =>
                    window.open("https://yuva0.github.io/stelios/storybook")
                  }
                />
                <IconButton
                  size="small"
                  variant="soft"
                  color="primary"
                  alt="storybook"
                  icon={<IconBrandStorybook />}
                  onClick={() =>
                    window.open("https://yuva0.github.io/")
                  }
                />
                <IconButton
                  size="small"
                  variant="soft"
                  color="primary"
                  alt="linkedin"
                  icon={<IconBrandLinkedin />}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/tanuj-sengupta-872a05129/"
                    )
                  }
                />
              </div>
            </div>
          )}

          <StyledDrawerChildrenItem>
            <div style={{ marginTop: "1rem" }}>
              <ColorPicker
                variant="soft"
                label="Website Color"
                color="primary"
                width="100%"
                onChange={_handlePrimaryColorChange}
              />
            </div>
          </StyledDrawerChildrenItem>

          <StyledDrawerChildrenItem
            className="revert-button"
            style={{ marginTop: "0.5rem" }}
          >
            <Button
              variant="contained"
              color="#AD2831"
              onClick={_onClickRevert}
            >
              Revert to Default Settings
            </Button>
          </StyledDrawerChildrenItem>
        </StyledDrawerChildren>
        </Drawer>
        </>
    )
};

export default Settings;