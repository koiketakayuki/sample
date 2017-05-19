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

const storeConfig = {
  ip: '127.0.0.1',
  port: 27017,
  db: 'ameba',
  user: 'amebaadmin',
  password: 'password',
};

const storeService = require('ameba-service')(storeConfig);

storeService.register(PaymentInformationRequest);
storeService.start(3000);
