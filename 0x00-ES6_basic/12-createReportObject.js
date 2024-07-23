export default function createReortObject(employeesList){
    const allEmployees = {...employeesList };
    const getNumberOfDepartments = () => {
        return Object.keys(allEmployees).length;
    };
    return{
        allEmployees,
        getNumberOfDepartments,
    };
}