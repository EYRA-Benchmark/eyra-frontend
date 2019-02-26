const formatDate = (date: Date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // debugger;
  const day = date.getDay();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return day + " " + monthNames[monthIndex] + " " + year;
};
export default formatDate;
