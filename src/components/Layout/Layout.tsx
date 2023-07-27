import React from 'react';
import {Outlet} from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';

export const Layout = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};
