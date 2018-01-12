
var nodeRsa = require('node-rsa');
var fs = require('fs');

// 私钥
var privatePem = fs.readFileSync('./rsa_private_key.pem').toString();
// 公钥
var publicPem = fs.readFileSync('./rsa_public_key.pem').toString();

// 测试文本
var text = 'test 测试文档';

var public_key = new nodeRsa(publicPem);
var private_key = new nodeRsa(privatePem);

// 统一 填充方式
public_key.setOptions({encryptionScheme: 'pkcs1'});
private_key.setOptions({encryptionScheme: 'pkcs1'});

console.log('text：', text);

// 公钥加密
var encrypted = public_key.encrypt(text, 'base64');
console.log('encrypted: ', encrypted);
// 私钥解密
var decrypted = private_key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);