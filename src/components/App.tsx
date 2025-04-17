import React, { useState } from 'react';
import * as classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import About from '@/pages/about/About';
import avatarJpg from '@/assets/avatar.jpg';
import oMark from '@/assets/o-mark.png';
import Calendar from '@/assets/calendar.svg';

// TREE SHAKING
// function TODO(a: number) {
//     console.log('TODOFUNCTION');
// }

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount((prev) => prev + 1);

    // TODO('4532');
    // if (__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>;
    // }

    // if (__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>;
    // }

    // if (__ENV__ === 'development') {
    //     // addDevtools();
    // }

    return (
        <div>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={avatarJpg} alt="" />
                <img width={100} height={100} src={oMark} alt="o" />
            </div>
            <div>
                <Calendar width={100} height={100} className={classes.icon} />
            </div>
            <Link to={'/about'}>About</Link>
            <br />
            <Link to={'/shop'}>Shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>
                <span>Increment</span>
            </button>
            <Outlet />
        </div>
    );
};
