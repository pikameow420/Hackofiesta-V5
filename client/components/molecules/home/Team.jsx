import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [fontSize,setFontSize] = useState("24px")
  const [TechTeam, _] = useState([
    "Shivam Patil",
    "Mohammed Asim",
    "Monark Jain",
    "Ankit Yadav",
  ]);
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

//   useEffect(()=>{
//     if(window.innerWidth<700){
//         setFontSize("12px")
//     }
//   },[])

  return (
    <div className="w-screen h-[80vh] flex items-center justify-center">
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
            flexWrap:"wrap"
          }}
        >
        <div className="w-screen flex flex-wrap justify-center">
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
                display: "flex",
                flex:"wrap",
                maxWidth:"100vw",
                position:"static"
              }}
          >
            {/* <div className="w-screen flex justify-center flex-wrap"> */}
            <Tab
              label="Tech"
              {...a11yProps(0)}
              sx={{ color: "white", fontSize: fontSize }}
            />
            <Tab
              label="CR"
              {...a11yProps(1)}
              sx={{ color: "white", fontSize: fontSize }}
            />
            <Tab
              label="PR"
              {...a11yProps(2)}
              sx={{ color: "white", fontSize: fontSize }}
            />
            <Tab
              label="Content"
              {...a11yProps(3)}
              sx={{ color: "white", fontSize: fontSize }}
            />
            <Tab
              label="Operations"
              {...a11yProps(4)}
              sx={{ color: "white", fontSize: fontSize }}
            />
            <Tab
              label="Logistics"
              {...a11yProps(5)}
              sx={{ color: "white", fontSize: fontSize }}
            />
            {/* </div> */}
            
          </Tabs>
        </div>
          
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="flex w-screen justify-center sm:justify-around items-center flex-wrap">
            {TechTeam.map((name) => {
              return (
                <div className=" flex justify-center items-center py-5">
                  <div className=" w-44 h-60 justify-center card flex flex-col items-center">
                    <div className="w-40 h-40 flex items-center justify-center bg-yellow-300 rounded-full bg_gradient">
                      <img
                        //   src={link}
                        className="w-[9.5rem] h-[9.5rem] object-cover rounded-full img_bg"
                      ></img>
                    </div>
                    <div className="w-full flex justify-center text-xl text-white  font-semibold">
                      {name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Four 
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          Item Five
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          Item Six
        </CustomTabPanel>
      </Box>
    </div>
  );
}
