var report = {
    sum: 0,
    count: 0,
    add: function() {
      var args = Array.prototype.slice.call(arguments);
      args.forEach(function(entry) {
        this.sum += entry;
        ++this.count;
      }, this);
    },
    average: function() {
      return this.sum / this.count;
    },
  };
  report.add(60, 85, 95);
  console.log(report.sum, report.count, report.average()); // 240 3 80

Array.prototype.forEach(callback[, thisArg])
Array.prototype.map(callback[, thisArg])
Array.prototype.filter(callback[, thisArg])
Array.prototype.some(callback[, thisArg])
Array.prototype.every(callback[, thisArg])
Array.prototype.find(callback[, thisArg])
Array.prototype.findIndex(callback[, thisArg])
Array.prototype.flatMap(callback[, thisArg])
Array.prototype.from(arrayLike[, callback[, thisArg]])
Set.prototype.forEach(callback[, thisArg])
Map.prototype.forEach(callback[, thisArg])