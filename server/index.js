const createStore = require('ameba-mongodb-store');
const Core = require('ameba-core');
const util = require('ameba-util');

const textField = Core.textField;
const enumerationField = Core.enumerationField;
const dateField = Core.dateField;
const createRecord = util.createRecord;

const PaymentInformationRequest = Core.recordType('PaymentInformationRequest', [
    textField('shopId'),
    enumerationField('status', ['受領']),
    textField('contactPerson'),
    dateField('date')
]);


const store = createStore('127.0.0.1', 27017, 'ameba', 'amebaadmin', 'password');

// for (var i = 0; i < 1000; ++i) {
//   const r = createRecord(PaymentInformationRequest, { shopId: 'test', status: '受領', contactPerson: '小池貴之', date: new Date(2017, 5, i) });
//   store.create(r);
// }

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
 
//ルーティング設定
app.post('/read/payment-information-request', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log(req.body.option);
  store.read(PaymentInformationRequest, req.body.condition, req.body.option).then(result => res.send(result));
});

app.post('/update/payment-information-request', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  store.update(PaymentInformationRequest, req.body.condition, req.body.values).then(result => res.send(result));
});
 
//以下、ルーティング情報があればここに追記していく
app.listen(3000);

console.log('Server running at http://localhost:3000/');