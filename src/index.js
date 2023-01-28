module.exports = function reverse (n) {
   const array = n.toString().split('')
   let result = []
   for (let i = array.length -1; i >= 0; i--){
    if (array[i] !== '-'){
        result.push(array[i])
    }
   }
   console.log(typeof(Number(result.join(''))))
   return Number(result.join(''))
}