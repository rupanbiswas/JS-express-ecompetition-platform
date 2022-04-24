module.exports.dateFormater = (currentDateTime) => {
  let date = currentDateTime.getDate();
  let month = currentDateTime.getMonth() + 1;
  const year = currentDateTime.getFullYear();
  if (date < 10) {
    date = '0' + date;
  }
  if (month < 10) {
    month = '0' + month;
  }
  const completeDate = `${year}-${month}-${date}`;
  return completeDate;
};
