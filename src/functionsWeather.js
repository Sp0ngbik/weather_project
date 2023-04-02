export const currentData = (timeZone, dt) => {
  const date = new Date((dt + timeZone) * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours() - 2;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const formattedDateTime = `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}, ${dayOfWeek}`;
  return formattedDateTime;
};
