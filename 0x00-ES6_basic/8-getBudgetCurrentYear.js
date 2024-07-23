function getCurrentYear(){
    const date = new Date();
    return date.getFullYear();
}
export default function getBudgetForCurrentYear(income, gpd, capita){
    return{
        ['income-${getCurrentYear()}']:
        income,
        ['gdp-${getCurrentYear()}']: 
        gpd,
        ['capita-${getCurrentYear()}']:
        capita,
    };
}