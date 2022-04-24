/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
module.exports.participantsIndex = (object, req) => {
  const arr = [];
  let no;
  let element;
  if (object) {
    // object.foreach((element) => {
    // eslint-disable-next-line guard-for-in
    for (element in object) {
      arr.push(element);
    }
    const number = arr.indexOf(req);
    if (object.length < 1) {
      no = number + 1;
    } else {
      no = 1;
    }
  } else {
    no = 1;
  }
  return no;
};
