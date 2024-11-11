const DEMO_ECONT_API = 'https://demo.econt.com/ee/services';
const API_USERNAME = 'iasp-dev';
const API_PASSWORD = '1Asp-dev';
let example_body = {
    "label": {
        "senderClient": {
            "name": "Tsvetomir Dimitrov",
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
        const result = await fetch(`${DEMO_ECONT_API}/Shipments/LabelService.createLabel.json`, options)
        const response = await result.json();
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function createLabels(basket) {
    let body = {
        labels: [],
        runAsyncAndEmailResultTo: "",
        mode: "validate"
    }
    for (let i = 0; i < basket.length; i++) {
        let dataObj = {
            senderClient: {
                name: "Tsvetomir Dimitrov",
                phones: ["0888888888"]
            },
            senderAddress: {
                city: {
                    country: {
                        code3: "BGR"
                    },
                    name: "Sofia",
                    postCode: "1000"
                },
                street: "Balgarska morava",
                num: "15"
            },
            senderOfficeCode: "1000",
            receiverClient: {
                name: "Димитър Димитров",
                phones: ["0876543210"]
            },
            receiverAddress: {
                city: {
                    country: {
                        code3: "BGR"
                    },
                    name: "Русе",
                    postCode: "7012"
                },
                street: "Муткурова",
                num: "84",
                other: "бл. 5, вх. А, ет. 6"
            },
            receiverOfficeCode: "7029",
            packCount: "1",
            shipmentType: "PACK",
            weight: basket[i].weight,
            sizeUnder60cm: "0",
            shipmentDescription: basket[i].type
        }

        body.labels.push(dataObj);
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    try {
        const result = await fetch(`${DEMO_ECONT_API}/Shipments/LabelService.createLabels.json`, options)
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
    createLabel,
    createLabels
}