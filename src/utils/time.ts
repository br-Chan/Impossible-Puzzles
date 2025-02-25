import dayjs, { Dayjs } from "dayjs";
import humanizeDuration from "humanize-duration";

export const getTime = (): Dayjs => {
    return dayjs();
};

export const calculateDurationUntilNow = (startTime: Dayjs) => {
    const currentTime = getTime();
    const millisecondsTaken = currentTime.diff(startTime);

    return humanizeDuration(millisecondsTaken, {
        units: ["h", "m", "s"],
        round: true,
        conjunction: " and ",
        serialComma: false
    });
};
