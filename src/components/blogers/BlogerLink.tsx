import React from 'react';
import { Tabs, Tab, Box, Typography, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import BlogerCard from './BlogerCard';
import { useSearchParams } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3,display:'flex', flexWrap:'wrap',gap:'20px' }}>
          <BlogerCard />
          <BlogerCard />
          <BlogerCard />
          <BlogerCard />
          <BlogerCard />
          <BlogerCard />
          <BlogerCard />
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function BlogerLink() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [value, setValue] = useState(tabParam ? parseInt(tabParam) : 0);

  useEffect(() => {
    const tab = tabParam ? parseInt(tabParam) : 0;
    setValue(tab);
  }, [tabParam]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      setSearchParams({});
    } else {
      setSearchParams({ tab: newValue.toString() });
    }
  };

  return (
    <Container sx={{ bgcolor: '#EEF4FC', p: 3 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile>
        <Tab label="Новые заявки 8" {...a11yProps(0)} />
        <Tab label="Ждут депозит" {...a11yProps(1)} />
        <Tab label="Депозит отправлен 7" {...a11yProps(2)} />
        <Tab label="Получили депозит 2" {...a11yProps(3)} />
        <Tab label="Оформили заказ 22" {...a11yProps(4)} />
        <Tab label="Выполняют задание 9" {...a11yProps(5)} />
        <Tab label="Сдали отчёт 35" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Содержимое для "Новые заявки 8"
      </TabPanel>
      <TabPanel value={value} index={1}>
        Содержимое для "Ждут депозит"
      </TabPanel>
      <TabPanel value={value} index={2}>
        Содержимое для "Депозит отправлен 7"
      </TabPanel>
      <TabPanel value={value} index={3}>
        Содержимое для "Получили депозит 2"
      </TabPanel>
      <TabPanel value={value} index={4}>
        Содержимое для "Оформили заказ 22"
      </TabPanel>
      <TabPanel value={value} index={5}>
        Содержимое для "Выполняют задание 9"
      </TabPanel>
      <TabPanel value={value} index={6}>
        Содержимое для "Сдали отчёт 35"
      </TabPanel>
    </Container>
  );
}
