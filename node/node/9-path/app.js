const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep); // 경로 구분자
console.log(path.delimiter); // 환경 변수 구분자


// basename
console.log(path.basename(__filename));         // app.js
console.log(path.basename(__filename,'.js'));   // app

// dirname
console.log(path.dirname(__filename));          // 디렉토리 이름만 가져올 때

// extension
console.log(path.extname(__filename));          // 확장자 이름만 가져올 때

// parse
const parsed = path.parse(__filename);          // 하나하나 분리된 이름
console.log(parsed);

parsed.root
parsed.name

// parse object 에 있는 것을 string 형태로 변환
const str = path.format(parsed);
console.log(str);

// isAbsolute (절대경로:true, 상대경로:false)
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize (경로에서 조금 에러가 있으면 알아서 고쳐주는 아이)
console.log(path.normalize('./folder/////sub')); // 'folder/sub'

// join
// console.log(__dirname + '/' + 'image'); -> 윈도우에서는 이상하게 될 것임
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image')); // 위에 보다 더 간편한 방법, 운영체제 별로 잘 동작함
