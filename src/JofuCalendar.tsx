import { useState, useMemo, useEffect, CSSProperties } from 'react';
import CalendarHeader from './components/CalendarHeader';
import CalendarTable from './components/CalendarTable';
import './style.css';

export interface Props {
    // Cấu hình hiển thị
    startDay?: 'Mon' | 'Sun';
    weekdays?: string[];
    headerStyle?: CSSProperties;

    // Dữ liệu tháng/năm
    month?: number;
    year?: number;

    // Tùy chỉnh nội dung
    contentCells?: Map<Date, () => JSX.Element>;
    renderHeaderItem?: (day: string) => JSX.Element;
}

export default function JofuCalendar({
    // Cấu hình hiển thị
    startDay = 'Sun',
    weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    headerStyle,

    // Dữ liệu tháng/năm
    month,
    year,

    // Tùy chỉnh nội dung
    contentCells = new Map(),
    renderHeaderItem,
}: Props) {
    const currentDate = useMemo(() => new Date(), []);
    const [curMonth, setCurMonth] = useState(month ?? currentDate.getMonth() + 1);
    const [curYear, setCurYear] = useState(year ?? currentDate.getFullYear());

    useEffect(() => {
        if (month !== undefined) setCurMonth(month);
        if (year !== undefined) setCurYear(year);
    }, [month, year]);

    const memoizedContentCells = useMemo(() => contentCells, [contentCells]);

    const onMonthChange = (newMonth: number, newYear: number) => {
        setCurMonth(newMonth);
        setCurYear(newYear);
    };

    return (
        <section className="jofu-calendar">
            <CalendarHeader
                startDay={startDay}
                weekdays={weekdays}
                month={curMonth}
                year={curYear}
                onChange={onMonthChange}
                renderHeaderItem={renderHeaderItem}
                headerStyle={headerStyle}
            />

            <CalendarTable
                startDay={startDay}
                month={curMonth}
                year={curYear}
                contentCells={memoizedContentCells}
            />
        </section>
    );
}
