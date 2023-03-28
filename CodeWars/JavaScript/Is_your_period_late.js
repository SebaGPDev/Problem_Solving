function periodIsLate(last, today, cycleLength) {
  const differenceInMs = today.getTime() - last.getTime();
  const differenceInDays = differenceInMs / 86400000;
  return differenceInDays > cycleLength;
}
