const { typeMap } = require('./typesMap');

function getPartTypeMapping(type) {
    return typeMap[type];
}

module.exports = {
    getPartTypeMapping
}