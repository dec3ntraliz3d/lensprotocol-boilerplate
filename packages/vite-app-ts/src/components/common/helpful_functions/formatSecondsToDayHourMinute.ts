export const formatSecondsToDayHourMinute = (milliSeconds: number): string => {
  const MILLI_SECONDS_IN_DAY = 60 * 60 * 24 * 1000;
  const MILLI_SECONDS_IN_HOUR = 60 * 60 * 1000;
  const MILLI_SECONDS_IN_MINUTE = 60 * 1000;

  // This will give me number days
  const days = Math.floor(milliSeconds / MILLI_SECONDS_IN_DAY);
  const hours = Math.floor((milliSeconds % MILLI_SECONDS_IN_DAY) / MILLI_SECONDS_IN_HOUR);
  const minutes = Math.floor(((milliSeconds % MILLI_SECONDS_IN_DAY) % MILLI_SECONDS_IN_HOUR) / MILLI_SECONDS_IN_MINUTE);

  return `${days != 0 ? days + 'd' : ''} ${hours != 0 ? hours + 'h' : ''} ${minutes != 0 ? minutes + 'm' : ''}`;
};
