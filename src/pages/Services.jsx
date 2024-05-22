import React from 'react'
import './Services.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const Services = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className='services'>
                <div className='h1edit'>
                    <div className='hr'></div>
                    <h1>SERVICES</h1>
                </div>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="All Services" value="services" />
                                <Tab label="Personal Growth" value="cardss" />
                                <Tab label="Career Ambitions" value="cardss-1" />
                            </TabList>
                        </Box>
                        <TabPanel value="services">All Services</TabPanel>
                        <TabPanel value="cardss">Personal Growth</TabPanel>
                        <TabPanel value="cardss-1">Career Ambitions</TabPanel>
                    </TabContext>
                </Box>
                <div className="h2edit">
                    <ul>
                        <li>All Services</li>
                        <li>Personal Growth</li>
                        <li>Career Ambitions</li>
                    </ul>
                </div>
                <div className="cardss">
                    <div className="cardd-1">
                        <h3>Free Consultation</h3>
                        <p>Use this area to describe one <br /> of your services.</p>
                        <p>45 min</p>
                        <button>Book Now</button>
                    </div>
                    <div className="cardd-2">
                        <h4>Online Coaching</h4>
                        <p>Use this area to describe one <br /> of your services.</p>
                        <p>1hr <br />$70</p>
                        <button>Book Now</button>
                    </div>
                    <div className="cardd-3">
                        <h5>Self-Improvement <br /> Workshop</h5>
                        <p>Use this area to describe one <br /> of your services.</p>
                        <p>1hr <br />$90</p>
                        <button>Book Now</button>
                    </div>
                </div>
                <div className="cardss-1">
                    <div className="cardd-4">
                        <h7>Corporate Life</h7>
                        <p>Use this area to describe one <br />of your services.</p>
                        <p>1 hr <br />$70</p>
                        <button>Book Now</button>
                    </div>
                    <div className="cardd-5">
                        <h8>Career Coaching</h8>
                        <p>Use this area to describe one <br /> of your services.</p>
                        <p>1 hr <br />$80</p>
                        <button>Book Now</button>
                    </div>
                    <div className="cardd-6">
                        <h9>Group Coaching</h9>
                        <p>Use this area to describe one <br /> of your services.</p>
                        <p>1 hr <br />$90</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services

