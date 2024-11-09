const DEMO_ECONT_API = 'https://demo.econt.com/ee/services';
const API_USERNAME = 'iasp-dev';
const API_PASSWORD = '1Asp-dev';
let example_body = {
    "label": {
        "senderClient": {
            "name": "Иван Иванов",
            "phones": ["0888888888"]
        },
        "senderAddress": {
            "city": {
                "country": {
                    "code3": "BGR"
                },
                "name": "Русе",
                "postCode": "7012"
            },
            "street": "Алея Младост",
            "num": "7"
        },
        "receiverClient": {
            "name": "Димитър Димитров",
            "phones": ["0876543210"]
        },
        "receiverAddress": {
            "city": {
                "country": {
                    "code3": "BGR"
                },
                "name": "Русе",
                "postCode": "7010"
            },
            "street": "Муткурова",
            "num": "84",
            "other": "бл. 5, вх. А, ет. 6"
        },
        "packCount": 1,
        "shipmentType": "PACK",
        "weight": 5,
        "shipmentDescription": "обувки"
    },
    "mode": "calculate"
}

let example_body_multiple = {
    "labels": [
        {
            "senderClient": {
                "name": "Петър Петров",
                "phones": ["0888888888"]
            },
            "senderAddress": {
                "city": {
                    "country": {
                        "code3": "BGR"
                    },
                    "name": "Сливен",
                    "postCode": "8811"
                },
                "street": "Граф Игнатиев",
                "num": "1"
            },
            "senderOfficeCode": "8800",

            "receiverClient": {
                "name": "Димитър Димитров",
                "phones": ["0876543210"]
            },
            "receiverAddress": {
                "city": {
                    "country": {
                        "code3": "BGR"
                    },
                    "name": "Русе",
                    "postCode": "7012"
                },
                "street": "Муткурова",
                "num": "84",
                "other": "бл. 5, вх. А, ет. 6"
            },
            "receiverOfficeCode": "7029",

            "packCount": "1",
            "shipmentType": "PACK",
            "weight": "2",
            "sizeUnder60cm": "1",
            "shipmentDescription": "маратонки"
        },

        {
            "senderClient": {
                "name": "Георги Георгиев",
                "phones": ["0777777777"]
            },
            "senderAddress": {
                "city": {
                    "country": {
                        "code3": "BGR"
                    },
                    "name": "София",
                    "postCode": "1000"
                },
                "street": "Цариградско шосе",
                "num": "166"
            },
            "receiverClient": {
                "name": "Богдан Богданов",
                "phones": ["0878787878"]
            },
            "receiverAddress": {
                "city": {
                    "country": {
                        "code3": "BGR"
                    },
                    "name": "Русе",
                    "postCode": "7012"
                },
                "street": "Славянска",
                "num": "16",
                "other": "бл. 1, вх. 1, ет. 1"
            },
            "packCount": "1",
            "shipmentType": "PACK",
            "weight": "5",
            "sizeUnder60cm": "1",
            "shipmentDescription": "дънки"
        }
    ],
    "runAsyncAndEmailResultTo": "",
    "mode": "validate"
}

async function createLabel(basket) {
    example_body.label.weight = basket[0].weight;
    example_body.label.shipmentDescription = basket[0].type;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(example_body)
    };


    try {
        const result = await fetch(`https://demo.econt.com/ee/services/Shipments/LabelService.createLabel.json`, options)
        const response = await result.json();
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function createLabels(basket) {
    // EXAMPLE_BODY.label.weight = basket[0].weight;
    // EXAMPLE_BODY.label.shipmentDescription = basket[0].type;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(example_body_multiple)
    };


    try {
        const result = await fetch(`https://demo.econt.com/ee/services/Shipments/LabelService.createLabel.json`, options)
        const response = await result.json();
        return response;
    } catch (error) {
        console.error(error);
    }
}

function getCountries() {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    var responseData;
    fetch(`https://demo.econt.com/ee/services/Nomenclatures/NomenclaturesService.getCountries.json`, options)
        .then(response => console.log(response))
        .then(data => { responseData = data })
        .catch(error => console.error(error));

    console.log(responseData);
}



module.exports = {
    getCountries,
    createLabel
}