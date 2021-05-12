let str = ['i', 'love', 'programming'];

function joinStrings(str,symbol) {
  a = str.toString();
  if (symbol===undefined){
  	return a;
  }
  return a.replace(/[',']/g, symbol);
}
console.log(joinStrings(str));