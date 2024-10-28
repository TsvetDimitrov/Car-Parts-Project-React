const USERNAME = 1996024;
const PASSWORD = 8443428332;
const BASE_URL = 'https://api.speedy.bg/v1'

let exampleRequest = {
    "userName" : `${USERNAME}`,
    "password" : `${PASSWORD}`,
    "language" : "EN",
    "service" : {
      "serviceId" : 505,
      "additionalServices" : {
        "cod" : {
          "amount" : 100.0,
          "processingType" : "CASH"
        },
        "declaredValue" : {
          "amount" : 100.0,
          "fragile" : true,
          "ignoreIfNotApplicable" : true
        },
        "obpd" : {
          "option" : "OPEN",
          "returnShipmentServiceId" : 505,
          "returnShipmentPayer" : "SENDER"
        }
      },
      "saturdayDelivery" : true,
      "autoAdjustPickupDate" : true
    },
    "content" : {
      "parcelsCount" : 1,
      "totalWeight" : 0.6,
      "contents" : "MOBILE PHONE",
      "package" : "BOX"
    },
    "payment" : {
      "courierServicePayer" : "RECIPIENT",
      "declaredValuePayer" : "RECIPIENT"
    },
    "sender" : {
      "phone1" : {
        "number" : "0888112233"
      },
      "contactName" : "IVAN PETROV",
      "email" : "ivan@petrov.bg"
    },
    "recipient" : {
      "phone1" : {
        "number" : "0899445566"
      },
      "clientName" : "VASIL GEORGIEV",
      "email" : "vasil@georgiev.bg",
      "privatePerson" : true,
      "address" : {
        "countryId" : 100,
        "siteId" : 68134,
        "streetId" : 3109,
        "streetNo" : "1A",
        "complexId" : 29,
        "blockNo" : "301", 
        "entranceNo" : "2",
        "floorNo" : "3",
        "apartmentNo" : "4"
      }
    },
    "ref1" : "ORDER 123456"
  } 


async function createShipmentRequest(basket) {
  exampleRequest.content.totalWeight = basket[0].weight;
  exampleRequest.content.contents = basket[0].type;

  const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(exampleRequest)
    };

    try {
        const result = await fetch(`${BASE_URL}/shipment`, options)
        const response = await result.json();
        return response;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    createShipmentRequest
}