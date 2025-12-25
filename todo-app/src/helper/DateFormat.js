function formatDate(date) {
  if (!date) return "";

  const targetDate = new Date(date);
  const today = new Date();

  // 1. Extract the Time (Hour and Minute only)
  const timeString = targetDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // 2. Setup for Date comparison (stripping time)
  const todayCopy = new Date(today);
  const targetCopy = new Date(targetDate);
  todayCopy.setHours(0, 0, 0, 0);
  targetCopy.setHours(0, 0, 0, 0);

  const diffTime = todayCopy - targetCopy;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // 3. Return combined Relative Date + extracted Time
  if (diffDays === 0) return `Today at ${timeString}`;
  if (diffDays === 1) return `Yesterday at ${timeString}`;
  if (diffDays < 7 && diffDays > 0)
    return `${diffDays} days ago at ${timeString}`;

  // For dates older than a week
  const dateString = targetDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return `${dateString} at ${timeString}`;
}

export default formatDate;
