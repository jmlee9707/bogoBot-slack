const calcToday = () => {
  const today = new Date();
  const year = String(today.getFullYear()).slice(2, 4);
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}.${month}.${day}`;
  return formattedDate;
};

module.exports = { calcToday };

console.log(calcToday());
