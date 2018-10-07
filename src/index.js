// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {
    return property;
}

const createNotEnumerableProperty = (property) => {
    return Symbol(property);
}

const createProtoMagicObject = () => {
    let obj = new Function;
    obj.__proto__ = obj.prototype;
    return obj;
};

let value = 0;
const incrementor = () => {
    value += 1;
    return incrementor;
};
incrementor.toString = () => value;

const asyncIncrementor = () => {
    return new Promise((resolve) => resolve(asyncIncrementor.value += 1));
}
asyncIncrementor.value = 1;

const createIncrementer = function () {};

const returnBackInSecond = (param) =>  new Promise((resolve) => {
    setTimeout(() => {
        resolve(param);
    }, 1000);
});

const getDeepPropertiesCount = () => {};

const createSerializedObject = () => null;

const sortByProto = (array) =>  {
    return array.sort((a, b) => a.__proto__ == b ? 1 : 0);
}


exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;