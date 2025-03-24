import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { CSSProperties } from 'react';

interface Props {
    startDay: 'Mon' | 'Sun';
    weekdays: string[];
    headerStyle?: CSSProperties;
    year: number;
    month: number;
    onChange: (month: number, year: number) => void;
    renderHeaderItem?: (day: string) => JSX.Element;
}

export default function CalendarHeader({
    startDay,
    weekdays,
    headerStyle,
    year,
    month,
    onChange,
    renderHeaderItem,
}: Props) {
    const startIndex = weekdays.findIndex((day) => day.startsWith(startDay));
    const sortedWeekDays = [...weekdays.slice(startIndex), ...weekdays.slice(0, startIndex)];

    const handlePrevMonth = () => {
        const newMonth = month === 1 ? 12 : month - 1;
        const newYear = month === 1 ? year - 1 : year;
        onChange(newMonth, newYear);
    };

    const handleNextMonth = () => {
        const newMonth = month === 12 ? 1 : month + 1;
        const newYear = month === 12 ? year + 1 : year;
        onChange(newMonth, newYear);
    };

    return (
        <div>
            <div className="mb-3 flex items-center justify-between text-lg">
                <button
                    onClick={handlePrevMonth}
                    className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <HiChevronLeft size={20} />
                </button>
                <div className="font-semibold">
                    Month {month}/{year}
                </div>
                <button
                    onClick={handleNextMonth}
                    className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <HiChevronRight size={20} />
                </button>
            </div>

            <div className="grid grid-cols-7 bg-sky-500 text-white" style={headerStyle}>
                {sortedWeekDays.map((day, index) => (
                    <div key={index} className="p-1 text-center font-semibold">
                        {renderHeaderItem ? renderHeaderItem(day) : day}
                    </div>
                ))}
            </div>
        </div>
    );
}
