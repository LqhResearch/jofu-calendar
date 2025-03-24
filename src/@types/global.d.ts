declare module '@jofu/calendar' {
    import React, { CSSProperties } from 'react';

    export interface JofuCalendarProps {
        startDay?: 'Mon' | 'Sun';
        weekdays?: string[];
        headerStyle?: CSSProperties;
        month?: number;
        year?: number;
        contentCells?: Map<Date, () => JSX.Element>;
        renderHeaderItem?: (day: string) => JSX.Element;
    }

    const JofuCalendar: React.FC<JofuCalendarProps>;
    export default JofuCalendar;
}
