

function timeConversion(s) {
  // Extract the period (AM/PM)
  const period = s.slice(-2);
  // Extract the hour, minute, and second
  let [hour, minute, second] = s.slice(0, -2).split(':');

  // Convert hour to 24-hour format
  if (period === 'AM') {
      if (hour === '12') {
          hour = '00';  // 12AM is 00:00:00
      }
  } else {  // PM case
      if (hour !== '12') {
          hour = (parseInt(hour, 10) + 12).toString();  // Convert PM hour to 24-hour format
      }
  }

  // Ensure hour is always two digits
  if (hour.length === 1) {
      hour = '0' + hour;
  }

  // Reassemble the time in 24-hour format
  return `${hour}:${minute}:${second}`;
}