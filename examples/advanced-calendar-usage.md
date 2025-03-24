Import `JofuCalendar` and define custom events inside the `contentCells` property:

```tsx
import React from 'react';
import JofuCalendar from '@jofu/calendar';
import '@jofu/calendar/style';

const App: React.FC = () => {
    return (
        <JofuCalendar
            startDay="Mon"
            contentCells={
                new Map([
                    [
                        new Date(2025, 2, 8),
                        () => (
                            <div className="items-center rounded-full border border-pink-300 bg-pink-100 px-3 py-1 text-center text-xs font-medium text-pink-700">
                                🌸 Women’s Day
                            </div>
                        ),
                    ],
                    [
                        new Date(2025, 2, 10),
                        () => (
                            <div className="flex h-full items-center justify-center">
                                <div className="relative inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-4 py-1.5 text-sm font-semibold text-white">
                                    <span className="absolute inset-0 animate-pulse rounded-full bg-red-500 opacity-20"></span>
                                    <span className="relative">🔥 Special Event</span>
                                </div>
                            </div>
                        ),
                    ],
                    [
                        new Date(2025, 2, 12),
                        () => (
                            <div className="relative rounded-lg border-l-4 border-yellow-500 bg-yellow-100 p-4 text-xs">
                                <h1 className="flex items-center gap-2 font-semibold text-yellow-700">
                                    💡 Workshop
                                </h1>
                                <ul className="mt-2 list-inside list-disc space-y-1 text-yellow-900">
                                    <li>
                                        <strong>Q&A and discussions</strong>
                                    </li>
                                    <li>
                                        <strong>Networking opportunities</strong>
                                    </li>
                                </ul>
                                <span className="absolute top-2 right-2 rounded-full bg-yellow-500 px-2 py-0.5 text-xs font-semibold text-white">
                                    LIVE
                                </span>
                            </div>
                        ),
                    ],
                    [
                        new Date(2025, 2, 15),
                        () => (
                            <div className="items-center rounded-full border border-green-400 bg-green-100 px-3 py-1 text-center text-xs font-medium text-green-700">
                                🎂 Birthday
                            </div>
                        ),
                    ],
                    [
                        new Date(2025, 2, 25),
                        () => (
                            <div className="rounded-lg border-l-4 border-purple-500 bg-purple-100 p-3 text-xs">
                                <p className="flex items-center gap-2 font-medium text-purple-700">
                                    📢 Team Meeting
                                </p>
                                <ul className="mt-1 list-inside list-disc space-y-0.5 text-gray-700">
                                    <li>
                                        <strong>Project progress update</strong>
                                    </li>
                                    <li>
                                        <strong>Discuss upcoming plans</strong>
                                    </li>
                                    <li>
                                        <strong>Problem-solving</strong>
                                    </li>
                                    <li>
                                        <strong>Brainstorm new ideas</strong>
                                    </li>
                                </ul>
                            </div>
                        ),
                    ],
                    [
                        new Date(2025, 2, 31),
                        () => (
                            <div className="rounded-lg border-l-4 border-red-500 bg-red-100 p-3 text-xs">
                                <p className="flex items-center gap-2 font-medium text-red-700">
                                    📊 Monthly Review
                                </p>
                                <ul className="mt-1 list-inside list-disc space-y-0.5 text-gray-700">
                                    <li>
                                        <strong>Review key metrics</strong>
                                    </li>
                                    <li>
                                        <strong>Analyze team performance</strong>
                                    </li>
                                    <li>
                                        <strong>Identify challenges</strong>
                                    </li>
                                    <li>
                                        <strong>Set goals for next month</strong>
                                    </li>
                                </ul>
                            </div>
                        ),
                    ],
                ])
            }
        />
    );
};

export default App;
```

## Explanation

- The `contentCells` property is a `Map<Date, () => JSX.Element>`, where:
    - The **key** is a `Date` object representing the event day.
    - The **value** is a function returning JSX, defining the event UI.

![@jofu/calendar](./ui/advanced-calendar-usage.png)
