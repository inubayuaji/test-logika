function nearestFibonacci(arr) {
  var num = 0;
  var nearest = 0;

  for (var i = 0; i < arr.length; i++) {
    num += arr[i];
  }

  if (num == 0) {
    nearest = 0;
  }

  var first = 0;
  var second = 1;
  var third = first + second;

  while (third <= num) {
    first = second;
    second = third;
    third = first + second;
  }

  if (third - num <= second - num) {
    nearest = second;
  } else {
    nearest = third;
  }

  return nearest - num;
}

console.log(nearestFibonacci([15, 1, 3]));
