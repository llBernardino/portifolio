import React from 'react';
import {
  Content,
} from './style.ts';
import Container from '../../../layout/Container/index.tsx';
import Box from '@mui/material/Box';
import { useTranslation } from "react-i18next";
import "./i18n.js";

export const Buttons = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
  return (
    <Container>
        <Content>
            <Box  className="justify-content-center justify-content-lg-start"  sx={{ display: 'flex', width:"100%", gap:'19px', marginTop:4, position:'relative', padding:'0px 10px',}}>
            <button  className="button w-100" type="button"  style={{ maxWidth: '145px', borderRadius: '5px',}} onClick={()=> changeLanguage('en')} >English</button>
            <button className="button w-100" type="button"  style={{ maxWidth: '145px', borderRadius: '5px',}}  onClick={()=> changeLanguage('pt')} >Portuguese</button>
            </Box>
        </Content>
    </Container>
  );
};
