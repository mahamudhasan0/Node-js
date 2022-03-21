const app = require('./app')
const arr = [2,4,5,9,6,4]
// console.log(app.z())
let result = arr.filter((item)=>{
    return item>4
})
console.log(result);