import React from 'react';
import { Config } from '../all.interface';

interface Props {
    date: Date;
    currentMonth: number;
    config: Config;
}

export const CalendarCell: React.FC<Props> = ({ date, currentMonth, config }) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const isCurrentMonth = month === currentMonth;
    const textColor = isCurrentMonth ? 'text-black' : 'text-gray-400';

    return (
        <div className="p-0.5">
            <div
                className={`p-3 ${textColor} flex aspect-[2/1] cursor-pointer items-center justify-center rounded-sm bg-gray-50 hover:bg-[#F5F5F5]`}
            >
                {day}
            </div>
        </div>
    );
};
