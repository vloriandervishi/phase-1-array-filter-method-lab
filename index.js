// Code your solution here
function findMatching(drivers, driverNames) {
  return drivers.filter(
    (check) => check.toLowerCase() === driverNames.toLowerCase()
  );
}

function fuzzyMatch(drivers, driverName) {
  return drivers.filter((driverCheck) => {
    if (driverCheck[0] === driverName[0]) {
      return true;
    }
  });
}

function matchName(drivers, driverName) {
  const fin = drivers.filter((driverCheck) =>
    driverCheck.name === driverName ? true : false
  );
  return fin;
}
