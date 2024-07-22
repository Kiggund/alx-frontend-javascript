export default function createIteratorObject(report){
    const departments = Object.values(report.allemployees);
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;

    return{
        next(){
            if (currentDepartmentIndex >= departments.length){
                return{ done: true };
            }
            const currentDepartment = departments[currentDepartmentIndex];
            const currentEmployee = currentDepartment[currentEmployeeIndex];
            currentEmployeeIndex++;
            if (currrentEmployeeIndex >= currentDepartment.length){
                currentDepartmentIndex++;
                currentEmployeeIndex = 0;
            }

            return { value: currentEmployee, done: false };
        },
    };
}