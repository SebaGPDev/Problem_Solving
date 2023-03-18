function User() {
    this.rank = -8;
    this.progress = 0;
    this.H = 100;
    this.HI = 8;
  }
  
  User.prototype.incProgress = function(r) {
    if (r == 0 || r > this.HI || r < -this.HI) throw new RangeError("rank input out of range");
    if (this.rank == this.HI) return;
  
    var d = (r > 0 && this.rank < 0) || (r < 0 && this.rank > 0) ? Math.abs(this.rank) + Math.abs(r) : r - this.rank;
    if (r > 0 && this.rank < 0) d--;
    if (r < 0 && this.rank > 0) d = -d;
    if (d > 0) {
      this.progress += (r == 1 && this.rank == -1) ? 10 : (10 * d * d);
    } else {
      this.progress += d == 0 ? 3 : 1;
    }
  
    if (this.progress > this.H && this.rank < this.HI) {
      this.rank += Math.floor(this.progress / this.H);
      if (this.rank == 0) this.rank++;
      this.progress %= this.H;
    }
    if (this.rank == this.HI) this.progress = 0;
  
    console.log("current rank = " + this.rank + "; progress = " + this.progress);
    return d;
  };