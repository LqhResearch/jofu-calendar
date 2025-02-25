import './style.css';

export interface JofuCalendarProps {}

export const JofuCalendar: React.FC<JofuCalendarProps> = ({}) => {
    return (
        <div className="relative w-64">
            <input
                type="date"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm transition duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
            />
        </div>
    );
};

export default JofuCalendar;
