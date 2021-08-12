export const transformToRelativeTime = (value: Date) => {
  const passedTime = new Date(new Date().getTime() - value.getTime());

  if (passedTime.getUTCFullYear() - 1970) {
    return passedTime.getUTCFullYear() > 1
      ? `${passedTime.getUTCFullYear()} years ago`
      : `${passedTime.getUTCFullYear()} year ago`;
  }
  if (passedTime.getUTCMonth()) {
    return passedTime.getUTCMonth() > 1
      ? `${passedTime.getUTCMonth()} months ago`
      : `${passedTime.getUTCMonth()} month ago`;
  }
  if (passedTime.getUTCDate() - 1) {
    return passedTime.getUTCDate() - 1 > 1
      ? `${passedTime.getUTCDate() - 1} days ago`
      : `${passedTime.getUTCDate() - 1} day ago`;
  }
  if (passedTime.getUTCHours()) {
    return `${passedTime.getUTCHours()} hours ago`;
  }

  if (passedTime.getMinutes() >= 5) return `${passedTime.getMinutes()} minutes ago`;
  if (passedTime.getMinutes() < 1) return 'just now';
  if (passedTime.getMinutes() < 5) return 'few minutes ago';
};
