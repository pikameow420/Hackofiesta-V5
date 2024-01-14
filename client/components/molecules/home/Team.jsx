import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import VerticalTabs from "@/components/atoms/Tabs";
import { myFont } from "../common/AnimatedTitle";

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
    {
        name:"Shivam Patil",
        image:""
    },
    {
        name:"Mohammed Asim",
        image:""
    },
    {
        name:"Monark Jain",
        image:""
    },
    {
        name:"Ankit Yadav",
        image:""
    },
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
    <div className="w-screen  items-center justify-center verticalTabs pt-32">
      <div className={`md:text-8xl ${myFont.className} sm:text-6xl text-5xl pt-6 pb-6 acc_style text-center `}>
        Teams
      </div>
      <VerticalTabs />
    </div>
  );
}
