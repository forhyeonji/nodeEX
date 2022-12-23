const bcrypt = require('bcrypt');

const password = 'abcd1234';
// salt는 8~12 사이를 추천
const hashed = bcrypt.hashSync(password, 10);
console.log(`password: ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync('abcd1234', hashed);
console.log('compare result: ', result); // boolean 타입