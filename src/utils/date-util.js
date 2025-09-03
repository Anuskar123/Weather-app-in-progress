// Function to format date or time from timestamp
function getFormattedDate(value, type, inMS) {
  // Return original value if no type specified
  if (!type) return value;

  // Convert to milliseconds if not already
  if (!inMS) {
    value = value * 1000;
  }

  // Create date object
  const date = Date.now(value);

  let options;

  // Options for date formatting
  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  // Options for time formatting
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  // Format and return the date/time
  return new Intl.DateTimeFormat("en-us", options).format(date);
}
// Export the function
export { getFormattedDate };
