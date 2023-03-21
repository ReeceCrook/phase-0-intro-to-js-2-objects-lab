const employee = {
    name: 'bob',
    streetAddress: ''
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const copyOfEmployee = {...employee};
    copyOfEmployee[key] = value;
    return copyOfEmployee

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key){
   const newEmployee = ['bob']
   return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key]
   return employee
}