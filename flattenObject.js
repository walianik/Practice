// {
//   user_name: "Vishal",
//   user_address_primary_house: "109",
//user_address_primary_value_0: "1",
//   user_address_primary_street_main: "21",
//   user_address_primary_street_cross: "32",

// }
var user = {
  name: "Vishal",
  address: {
    primary: {
      house: "109",
      street: {
        main: "21",
        cross: "32",
      },
      value: [1, 2, 3, 4],
    },
  },
};
const previousVal = "user";
const newObj = {};
function flattenObject(object, previousValue, newObj) {
  Object.keys(object).forEach((res) => {
    if (typeof object[res] !== "object") {
      let newValue = previousValue + "_" + res;
      newObj[newValue] = object[res];
    } else {
      previousValue = previousValue + "_" + res;
      flattenObject(object[res], previousValue, newObj);
    }
  });
  return newObj;
}
console.log(flattenObject(user, previousVal, newObj));
