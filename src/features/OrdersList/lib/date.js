export const getDateByFilters = (nums, isFullDay) => {
  if (!nums) return null;
  const TIME_CORRECTING = isFullDay ? " 23:59:59" : "";
  const formatedDate = `${nums[4]}${nums[5]}${nums[6]}${nums[7]}/${nums[2]}${nums[3]}/${nums[0]}${nums[1]}`;
  return new Date(formatedDate + TIME_CORRECTING).toString();
};

export const getFormatedDate = (dateString) => {
  const objectDate = new Date(dateString);
  const time = [
    objectDate.getDate(),
    objectDate.getMonth() + 1,
    objectDate.getFullYear(),
    objectDate.getHours(),
    objectDate.getMinutes(),
  ].map((el) => (String(el).length === 1 ? `0${el}` : el));
  return `${time[0]}.${time[1]}.${time[2]}, ${time[3]}:${time[4]}`;
};
