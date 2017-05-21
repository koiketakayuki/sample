const createStore = require('ameba-mongodb-store');
const Core = require('ameba-core');
const util = require('ameba-util');

const textField = Core.textField;
const enumerationType = Core.enumerationType;
const dateField = Core.dateField;
const recordField = Core.recordField;
const createRecord = util.createRecord;

const statusType = enumerationType('status', 'aa', ['受領']);

const PaymentInformationRequest = Core.recordType('PaymentInformationRequest', 'test', [
    textField('shopId', '店舗'),
    recordField('status', 'test', statusType),
    textField('contactPerson', 'test'),
    dateField('date', 'test')
]);

const storeConfig = {
  ip: '127.0.0.1',
  port: 27017,
  db: 'ameba',
  user: 'amebaadmin',
  password: 'ameba7531',
};

const storeService = require('ameba-service')(storeConfig);

storeService.register(PaymentInformationRequest);
storeService.start(3000);
