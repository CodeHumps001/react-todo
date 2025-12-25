function formatDate(date) {
  const today = new Date();
  const targetDate = new Date(date);

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const diffTime = today - targetDate;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;

  return targetDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
export default formatDate;
