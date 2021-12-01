function leapYear(begin, end) {
  for (var year = begin; year <= end; year++) {
    if (year % 4 == 0) {
      console.log(year);
    }
  }
}

leapYear(2000, 2020);
