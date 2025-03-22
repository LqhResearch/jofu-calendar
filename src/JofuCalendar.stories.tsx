import { JofuCalendar } from './JofuCalendar';

export default {
    title: '@jofu/calendar',
    component: JofuCalendar,
};

export const Default = () => <JofuCalendar config={{ weekStart: 1, language: 'vi' }} />;
