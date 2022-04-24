module.exports.dateTime = () => {
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  if (date < 10) {
    date = '0' + date;
  }
  if (month < 10) {
    month = '0' + month;
  }
  const completeDate = `${year}-${month}-${date}`;
  const time = new Date().toLocaleTimeString('en-GB', { hour12: false });
  const dateTime = `${completeDate} ${time}`;
  return dateTime;
};
