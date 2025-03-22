import React from 'react';
import { defaultConfig, weekdays } from '../config/default';
import { Config } from '../all.interface';

interface Props {
    year: number;
    month: number;
    config: Config;
}

export const CalendarHeader: React.FC<Props> = ({ year, month, config }) => {
    const { language, weekStart } = { ...defaultConfig, ...config };

    let weekday = [...weekdays[language || 'en']];
    weekday = [...weekday.slice(weekStart), ...weekday.slice(0, weekStart)];

    return (
        <div className="text-center font-semibold">
            <div className="p-3 text-center text-xl">
                Tháng {month} / {year}
            </div>

            <div className="grid border-collapse grid-cols-7 text-gray-600">
                {weekday.map((day) => (
                    <div key={day} className="p-0.5">
                        <div
                            className={`flex cursor-pointer items-center justify-center rounded-sm bg-[#1677ff] p-3 text-white`}
                        >
                            {day}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
