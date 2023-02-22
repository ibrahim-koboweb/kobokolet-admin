function splitDate(date) {
  let split = date.split("T");
  return (split = split[0]);
}
function getDayNumber(date) {
  let split = date.split("-");
  return (split = split[2]);
}
const getWordedMonth = (date) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dateArray = date.split("-");
  let newdateDateFormat = `${monthNames[dateArray[1] - 1]}`;
  return newdateDateFormat;
};
const getCompleteDate = (date) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dateArray = date.split("-");
  let newdateDateFormat = `${monthNames[dateArray[1] - 1]} ${dateArray[2]}, ${
    dateArray[0]
  }`;
  return newdateDateFormat;
};
const getCompleteNumberedDate = (date) => {
  let tempDay = date.getDate();

  let tempMonth = date.getMonth() + 1;

  let day = tempDay <= 9 ? `0${tempDay}` : tempDay;
  let month = tempMonth <= 9 ? `0${tempMonth}` : tempMonth;

  let year = date.getFullYear();
  const newDate = `${year}-${month}-${day}`;
  return newDate;
};
export {
  splitDate,
  getDayNumber,
  getWordedMonth,
  getCompleteDate,
  getCompleteNumberedDate,
};
