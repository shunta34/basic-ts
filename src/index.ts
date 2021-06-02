// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

// 03. 基本の型定義
// import { anySample, notExistSample, primitiveSample, unknownSample } from './basic'

// anySample()
// notExistSample()
// primitiveSample()
// unknownSample()

// 04. 関数の型定義
import { logMessage1, logMessage2, logMessage3, logMessage4, logMessage5, logMessage6 } from './function/basic'
import { isUserSignedIn1, isUserSignedIn2, sumProductsPrice } from './function/parameters'

logMessage1('Hello TypeScript!')
logMessage2('Hello TypeScript!')
logMessage3('Hello TypeScript!')
logMessage4('Hello TypeScript!')
logMessage5('Hello TypeScript!')
logMessage6('Hello TypeScript!')

isUserSignedIn1('ABC', 'Torahack')
isUserSignedIn1('DEF')
isUserSignedIn2('ABC', 'Torahack')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(100, 200, 300, 400, 500, 3000)
console.log('Function parameters sample 5:', sum)
