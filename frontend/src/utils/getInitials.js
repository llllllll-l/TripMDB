export const getInitials = (name) => {
  const names = name.split(" ");
  return names
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
};
