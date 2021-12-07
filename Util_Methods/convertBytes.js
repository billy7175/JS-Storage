function bytesToSize (bytes) {
  if (bytes === 0) return '0 B';

  var k = 1024;
  var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  var i = Math.floor(Math.log(bytes) / Math.log(k))
  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
}

console.log(bytesToSize(1000000000000))
console.log(bytesToSize(123787892346723)) // 호출 
