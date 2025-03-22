import React from 'react';
import { defaultConfig } from '../config/default';
import { Config } from '../all.interface';
import { CalendarCell } from './CalendarCell';

interface Props {
    year: number;
    month: number;
    config: Config;
}

export const CalendarTable: React.FC<Props> = ({ year, month, config }) => {
    const { weekStart = 0 } = { ...defaultConfig, ...config };

    const daysInMonth = new Date(year, month, 0).getDate();
    const daysInPrev = new Date(year, month - 1, 0).getDate();
    const firstDay = (new Date(year, month - 1, 1).getDay() - weekStart + 7) % 7;
    const totalDays = firstDay + daysInMonth;
    const rows = Math.ceil(totalDays / 7);

    const dates = Array.from({ length: rows * 7 }, (_, i) => {
        const day = i - firstDay + 1;
        const m = day <= 0 ? month - 1 : day > daysInMonth ? month + 1 : month;
        const y = m === 0 ? year - 1 : m === 13 ? year + 1 : year;
        const d = day <= 0 ? daysInPrev + day : day > daysInMonth ? day - daysInMonth : day;

        return new Date(y, m - 1, d);
    });

    return (
        <div className="text-center font-semibold">
            <div className="grid grid-cols-7 text-gray-600">
                {dates.map((date, i) => (
                    <CalendarCell key={i} date={date} currentMonth={month} config={config} />
                ))}
            </div>
        </div>
    );
};
