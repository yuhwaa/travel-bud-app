export const currencyFormatter = new Intl.NumberFormat(
    //current users locale
    undefined, 
    {
    currency: "usd",
    style: "currency",
    //no showing decimal (.00) unless theres actual value
    minimumFractionDigits: 0 
})