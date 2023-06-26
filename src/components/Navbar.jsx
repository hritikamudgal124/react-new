import React, { useState, memo } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { getActiveTabIndex } from "../Helpers/utils";

const Header = ({ brandName, tabData }) => {
  const location = useLocation();
  const pathname = location?.pathname;

  let defaultActiveTab = getActiveTabIndex(tabData, pathname);
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <AppBar sx={{ background: "black" }}>
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            marginTop:"1rem",
            fontFamily: "'Zeyada', cursive",
            color: "white",
            fontSize:"30px"
          }}
        >
          {brandName}
        </Typography>
        <Tabs
          sx={{ marginLeft: "auto" }}
          value={activeTab}
          onChange={(e, tabIndex) => setActiveTab(tabIndex)}
        >
          {tabData &&
            tabData.map((tab) => {
              return (
                <Tab
                  key={`tab_${tab.id}`}
                  label={tab?.label}
                  component={Link}
                  to={tab?.path}
                  sx={tab.isActive ? { color: "white" } : { display: "none" }}
                />
              );
            })}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
