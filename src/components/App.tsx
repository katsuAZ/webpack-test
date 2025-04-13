import React, { useState } from 'react';
import * as classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import About from '@/pages/about/About';
import avatarJpg from '@/assets/avatar.jpg';
import oMark from '@/assets/o-mark.png';
import Calendar from '@/assets/calendar.svg';

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount((prev) => prev + 1);
    return (
        <div>
            <div>
                <img width={100} height={100} src={avatarJpg} alt='' />
                <img width={100} height={100} src={oMark} alt='o' />
            </div>
            <div>
                <Calendar width={100} height={100} className={classes.icon} />
            </div>
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>
                <span>Ещкере</span>
            </button>
            <Outlet />
        </div>
    );
};
