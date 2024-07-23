function getCurrentYear(){
    const date = new Date();
    return date.getFullYear();
}
export default function getBudgetForCurrentYear(income, gpd, capita){
   const budget = {
        ['income-${getCurrentYear()}']: income,
        ['gdp-${getCurrentYear()}']: gpd,
        ['capita-${getCurrentYear()}']: capita
    };
	 return budget;
}
