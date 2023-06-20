function triangular(int) {
  if( int < 1 ){
    return 0;
  } else {
    return doTriangle(int);
  }
  
}

function doTriangle(nth){
  let result = 1;
  let i = 1;
  while (i < nth) {
      result = i + (result+1);
      i++;
  }

  return result;
}

module.exports = triangular;
