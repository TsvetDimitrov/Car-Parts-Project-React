const DEMO_ECONT_API = 'https://demo.econt.com/ee/services';
const API_USERNAME = 'iasp-dev';
const API_PASSWORD = '1Asp-dev';
let EXAMPLE_BODY = {
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
    "mode": "validate"
}

async function createLabel(basket) {
    EXAMPLE_BODY.label.weight = basket[0].weight;
    EXAMPLE_BODY.label.shipmentDescription = basket[0].type;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(EXAMPLE_BODY)
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

    var test = fetch(`${DEMO_ECONT_API}/Nomenclatures/NomenclaturesService.getCountries.json`, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

    console.log(test);
}



module.exports = {
    getCountries,
    createLabel
}