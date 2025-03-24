interface Props {
    date: Date;
    currentMonth: number;
    cellContent?: (
        date: Date,
        type: 'prev' | 'current' | 'next',
        isToday: boolean,
    ) => React.ReactNode;
}

export default function CalendarCell({ date, currentMonth, cellContent }: Props) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const today = new Date();
    const isToday =
        today.getFullYear() === year && today.getMonth() + 1 === month && today.getDate() === day;

    const type: 'prev' | 'current' | 'next' =
        month < currentMonth ? 'prev' : month > currentMonth ? 'next' : 'current';

    return (
        <div
            className={`flex aspect-[3/2] flex-col border-r border-b border-[#e5e7eb] ${type === 'current' ? 'text-[#34495e]' : 'text-[#e5e7eb]'} ${isToday ? 'bg-sky-100' : ''}`}
        >
            <div className="p-0.5 text-end text-sm">{day}</div>
            <div className="flex-1 p-0.5">
                {cellContent ? cellContent(date, type, isToday) : null}
            </div>
        </div>
    );
}
