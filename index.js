// Write your solution in this file!

const employee = {name:"James Kadenge", streetAdress:"40409 Muhuru-Bay"};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {...obj,
        [key]:value,
    };
}
const employee2=updateEmployeeWithKeyAndValue(
    employee,
    "Ombiju",
    "40409 Senye"
);

console.log(employee);
console.log(employee2);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value;
    return obj;
}
const employee3= destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "jakamser");
 console.log(employee);
    console.log(employee3);

function deleteFromEmployeeByKey(obj, key){
    return {...delete obj.key

    };
}

const employee4= deleteFromEmployeeByKey(employee,"name");
console.log(employee);
console.log(employee4);

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, "name");

console.log(employee);
console.log(employee.name);