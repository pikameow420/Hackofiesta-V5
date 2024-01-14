import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Item = ({image, name, designation}) => {
    return (
        <div className='group w-fit'>
            <div className='rounded-full border border-primary-pink hover:border-yellow-600 p-2 mt-10 hover:scale-105 transition-all pinkshadow ' >
                <img src={image} height={100} width={100} className='grayscale hover:grayscale-0 transition-all cursor-pointer rounded-full outline outline-primary-blue ' />
            </div>
            <h2 className='text-center text-xl group-hover:mt-3 transition-all'>{name}</h2>
            <h2 className='hidden group-hover:block text-center group-hover:text-yellow-500 transition-all'>{designation}</h2>
        </div>
    )
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224, marginTop:2, width: '100vw' }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Tech" {...a11yProps(0)} />
          <Tab label="CR" {...a11yProps(1)} />
          <Tab label="PR" {...a11yProps(2)} />
          <Tab label="Content" {...a11yProps(3)} />
          <Tab label="Operations" {...a11yProps(4)} />
          <Tab label="Logistics" {...a11yProps(5)} />
        </Tabs>
        <TabPanel value={value} index={0}>
            <div className='flex flex-wrap md:justify-between w-[50vw] md:w-[60vw] gap-x-5 sm:gap-x-20 md:gap-x-10 md:me-10'>
                <Item image="/Monark.png" name="Monark Jain" designation="Lead dev" />
                <Item image="/Monark.png" name="Monark Jain" designation="Lead dev" />
                <Item image="/Monark.png" name="Monark Jain" designation="Lead dev" />
                <Item image="/Monark.png" name="Monark Jain" designation="Lead dev" />
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}
