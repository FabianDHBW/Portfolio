import './menu.css'

import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from 'react-router-dom'

import MonthView from '../main/MonthView'
import DayView from '../main/DayView'

const Menu = () => {

    const [dayKey, setDayKey] = useState(1);

    const [myDictionary, setMyDictionary] = useState({
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
        9: {},
        10: {},
        11: {},
        12: {},
        13: {},
        14: {},
        15: {},
        16: {},
        17: {},
        18: {},
        19: {},
        20: {},
        21: {},
        22: {},
        23: {},
        24: {},
        25: {},
        26: {},
        27: {},
        28: {}
    });


    const updateDictionary = (updatedDict) => {
        setMyDictionary(updatedDict);
    };

    const updateDayKey = (value) => {
        setDayKey(value)
    }

    return (
        <div className="view">
            <div class="bar">
                <Link to="/"><button>Monatsansicht</button></Link>
                <Link to="/Tagesansicht"><button >Tagesansicht</button></Link>
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<MonthView myDictionary={myDictionary} updateDayKey={updateDayKey} />} />
                    <Route path='/Tagesansicht' element={<DayView myDictionary={myDictionary} updateDictionary={updateDictionary} myKey={dayKey} />} />
                </Routes>
            </div>

        </div>
    )
}
export default Menu;