export const useFormatDateTime = (dateString: string) => {
  const date = new Date(dateString);

  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const year = date.getUTCFullYear();

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  const formattedDate = `${month}/${day}/${year}`;
  const formattedTime = `${hours}:${minutes}`;

  return { formattedDate, formattedTime };
};
