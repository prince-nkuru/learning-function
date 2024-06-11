var rotateMatrix = arr => {
  var rotated = [];
  var length = arr[0].length;
  for (var i = length - 1; i >= 0; i--) {
      var sub = [];
      for (var j = 0; j < arr.length; j++) {
          sub.push(arr[j][i]);
      }
      rotated.push(sub);
  }
  return rotated;
}