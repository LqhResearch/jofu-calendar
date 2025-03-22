import React from 'react';
import { defaultConfig } from './config/default';
import { CalendarHeader } from './components/CalendarHeader';
import { Config } from './all.interface';
import { CalendarTable } from './components/CalendarTable';
import './style.css';

export interface Props {
    year?: number;
    month?: number;
    config?: Config;
}

export const JofuCalendar: React.FC<Props> = ({ year, month, config }) => {
    const today = new Date();
    const currentMonth = month ?? today.getMonth() + 1;
    const currentYear = year ?? today.getFullYear();

    const userConfig: Config = { ...defaultConfig, ...config };

    return (
        <div className="bg-white">
            <CalendarHeader month={currentMonth} year={currentYear} config={userConfig} />
            <CalendarTable month={currentMonth} year={currentYear} config={userConfig} />
        </div>
    );
};

export default JofuCalendar;
