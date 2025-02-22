import './style.css';

export interface Props {}

export const JofuCalendar: React.FC<Props> = ({}) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="relative w-64">
                <input
                    type="date"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm transition duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
                />
            </div>
        </div>
    );
};
