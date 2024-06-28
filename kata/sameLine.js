// DESCRIPTION:
// Given some points (cartesian coordinates), return true if all of them lie on a line. Treat both an empty set and a single point as a line.

// onLine([[1,2], [7, 4], [22, 9]]);                 // returns true
// onLine([[1,2], [-3, -14], [22, 9]]);              // returns false

function onLine(points) {
  var lhs, rhs;   
  var isLinear = true;
  
  for(i=0; i<points.length-2;i++)
  {
      lhs = (points[i+1][1] - points[i][1])*(points[i+2][0] - points[i][0]);
      rhs = (points[i+2][1] - points[i][1])*(points[i+1][0] - points[i][0]);
      if(lhs != rhs)
      {
      isLinear = false;
      break;
      }
  
  }
  
  return isLinear;
}