export const truncateString = (str: string, maxLength: number) => {
  // Check if the string needs to be truncated
  if (str.length > maxLength) {
    // Return the truncated string with ellipsis
    return str.slice(0, maxLength) + '...';
  } else {
    // Return the original string if no truncation is needed
    return str;
  }
};
