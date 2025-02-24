import dayjs, { Dayjs } from "dayjs";

export const getTime = (): Dayjs => {
    return dayjs();
};

export const calculateTimeTakenUntilNow = (startTime: Dayjs) => {
    const currentTime = getTime();
    return currentTime.diff(startTime, 'second');
};
