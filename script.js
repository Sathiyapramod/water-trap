function maxProfit(time) {
  //input as time units
  if (time == 0) return null;
  let earnings = 0;
  let combo = [];

  for (let t = 0; t <= time / 5; t++) {
    for (let p = 0; p <= time / 4; p++) {
      for (let c = 0; c <= time / 10; c++) {
        earnings = parseInt(t * 1500) + parseInt(p * 1500) + parseInt(c * 3000);
        if ((t != p && t != c) || (p != c && p != t) || (c != p && c != t)) {
          combo.push([earnings, { t, p, c }]);
        }
      }
    }
  }
  combo.sort((a, b) => b[0] - a[0]);
  return combo[0];
}
console.log(maxProfit(7));
console.log(maxProfit(8));
console.log(maxProfit(13));
