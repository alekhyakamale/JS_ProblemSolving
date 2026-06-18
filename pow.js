function pow(m, n){
  if(n === 1){
    return m;
  } else return m*pow(m, n-1);
}