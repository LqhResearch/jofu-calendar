import { useMemo } from 'react';
import CalendarCell from './CalendarCell';

interface Props {
    startDay?: 'Mon' | 'Sun';
    year: number;
    month: number;
    contentCells?: Map<Date, () => JSX.Element>;
}

export default function CalendarTable({ startDay, year, month, contentCells = new Map() }: Props) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    const prevMonthDays = new Date(year, month - 1, 0).getDate();

    const emptyCells =
        startDay === 'Mon' ? (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1) : firstDayOfMonth;
    const totalCells = 42;
    const nextMonthDays = totalCells - (emptyCells + daysInMonth);

    const calendarDays = useMemo(() => {
        const days: Date[] = [];

        for (let i = emptyCells; i > 0; i--) {
            days.push(new Date(year, month - 2, prevMonthDays - i + 1));
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month - 1, i));
        }

        for (let i = 1; i <= nextMonthDays; i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    }, [emptyCells, daysInMonth, prevMonthDays, nextMonthDays, month, year]);

    return (
        <div className="grid grid-cols-7 border border-[#e5e7eb]">
            {calendarDays.map((date, index) => {
                const renderCell = Array.from(contentCells.keys()).find(
                    (d) =>
                        d.getFullYear() === date.getFullYear() &&
                        d.getMonth() === date.getMonth() &&
                        d.getDate() === date.getDate(),
                );

                const cellContent = renderCell ? contentCells.get(renderCell) : undefined;

                return (
                    <CalendarCell
                        key={index}
                        date={date}
                        currentMonth={month}
                        cellContent={cellContent}
                    />
                );
            })}
        </div>
    );
}
