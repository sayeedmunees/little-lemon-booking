export async function fetchAvailableTimes(date) {
  // Sample logic: weekdays vs weekends
  const weekday = ['17:00','18:00','19:00','20:00','21:00'];
  const weekend = ['16:00','17:30','19:00','20:30'];
  const day = new Date(date).getDay();
  return (day === 0 || day === 6) ? weekend : weekday;
}
