module.exports=function solution(D) {
  const days = {"Mon": null, "Tue": null, "Wed": null, "Thu": null, "Fri": null, "Sat": null, "Sun": null};
  const daysArray = [0, 0, 0, 0, 0, 0, 0];

  for (const key in D) {
      const day = new Date(key).getDay();
      daysArray[day] += D[key];
  }

  for (let day = 1; day < daysArray.length; day++) {
      if (daysArray[day] === 0) {
          daysArray[day] = (daysArray[day - 1] * 2) - daysArray[day - 2];
      }
      days[Object.keys(days)[day - 1]] = daysArray[day];
  }

  days["Sun"] = daysArray[0];

  return days;
}

