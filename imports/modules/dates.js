import moment from 'moment';
import 'moment-timezone';

export const currentTimezone = () => moment.tz.guess();

export const timeago = (timestamp, timezone) =>
    (!timezone ? moment(timestamp).fromNow() : moment(timestamp).tz(timezone).fromNow());

export const hoursMinutes = (timestamp, timezone) =>
    (!timezone ? moment(timestamp).format('hh:mm A') :
        moment(timestamp).tz(timezone).format('hh:mm A'));
export const localize = (timestamp, timezone) => moment(timestamp).tz(timezone).format();

export const monthDayYear = (timestamp, timezone) =>
    (!timezone ? moment(timestamp).format('MMMM Do, YYYY') :
        moment(timestamp).tz(timezone).format('MMMM Do, YYYY'));

export const monthDayYearAtTime = (timestamp, timezone) =>
    (!timezone ? moment(timestamp).format('MMMM Do, YYYY [at] hh:mm a') :
        moment(timestamp).tz(timezone).format('MMMM Do, YYYY [at] hh:mm a'));
export const epochToISOString = (epoch) => {
    const date = epoch ? epoch.toString() : '';
    const seconds = date.length === 13 ? date / 1000 : date;
    return seconds ? moment.unix(seconds).format() : '';
};
export const daysInFuture = days => moment.utc().add(days, 'days').format();

export const daysInPast = days => moment.utc().subtract(days, 'days').format();

export const hasPassed = timestamp => (moment().isAfter(timestamp) ? 'Yes' : 'No');
