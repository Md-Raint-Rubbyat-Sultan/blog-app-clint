import {} from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <main>
            <Header></Header>
            <Outlet></Outlet>
        </main>
    );
};

export default Main;