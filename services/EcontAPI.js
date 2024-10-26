// import axios from 'axios';
const axios = require('axios');

const demoEcontAPI = 'https://demo.econt.com/ee/services';
const APIusername = 'iasp-dev';
const APIpassword = '1Asp-dev';
const testBody = {
    "label": {
        "shipmentNumber": null,
        "storageOfficeName": null,
        "storagePersonName": null,
        "createdTime": 1729968263000,
        "sendTime": null,
        "deliveryTime": null,
        "shipmentType": "pack",
        "packCount": 1,
        "shipmentDescription": "обувки",
        "weight": 5,
        "senderDeliveryType": null,
        "senderClient": null,
        "senderAgent": null,
        "senderOfficeCode": null,
        "senderAddress": null,
        "receiverDeliveryType": null,
        "receiverClient": null,
        "receiverAgent": null,
        "receiverOfficeCode": null,
        "receiverAddress": null,
        "cdCollectedAmount": 0,
        "cdCollectedCurrency": "",
        "cdCollectedTime": null,
        "cdPaidAmount": 0,
        "cdPaidCurrency": "",
        "cdPaidTime": null,
        "totalPrice": 11.96,
        "currency": "BGN",
        "discountPercent": 0,
        "discountAmount": -0,
        "discountDescription": "",
        "senderDueAmount": 11.96,
        "receiverDueAmount": 0,
        "otherDueAmount": 0,
        "deliveryAttemptCount": 0,
        "previousShipmentNumber": "",
        "services": [
            {
                "type": "C",
                "description": "Куриерска услуга - градски куриер до 5 кг",
                "count": 1,
                "paymentSide": "SENDER",
                "price": 11.96,
                "currency": "BGN"
            }
        ],
        "lastProcessedInstruction": null,
        "nextShipments": [],
        "trackingEvents": [],
        "pdfURL": "",
        "expectedDeliveryDate": 1730066400000,
        "returnShipmentURL": null,
        "rejectOriginalParcelPaySide": null,
        "rejectReturnParcelPaySide": null,
        "shipmentEdition": {
            "shipmentNum": 0,
            "editionNum": 0,
            "editionType": "",
            "editionError": "",
            "price": "",
            "currency": ""
        },
        "previousShipment": null,
        "warnings": "",
        "shortDeliveryStatus": null,
        "shortDeliveryStatusEn": null
    },
    "blockingPaymentURL": null,
    "courierRequestID": null,
    "payAfterAcceptIgnored": null
}

function createLabel() {
    axios.post('https://demo.econt.com/ee/services/Shipments/LabelService.createLabel.json', JSON.stringify(testBody))
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

async function getCountries() {
    try {
        const URL = `${demoEcontAPI}/Nomenclatures/NomenclaturesService.getCountries.json`;
        var data;
        const response = await axios.get(URL, {
            auth: {
                username: "iasp-dev",
                password: "1Asp-dev"
            }
        }).then(function (response) {
            console.log('SUCCESS ', response);
            data = response;
        }).catch(function (error) {
            console.log('ERRRROOORRRR ', error);
        });

        return {data: data};
    } catch (error) {
        const message = typeof error === 'string' ? error : error.message;
        return { error: message };
    }
}



module.exports = {
    getCountries,
    createLabel
}