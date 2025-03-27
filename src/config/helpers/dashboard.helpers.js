import { sumBy } from "lodash";

// Function to format a date
export const calculateDateRangeAmounts = (data, startDate, endDate) => {
    // Filter the array based on the date range
    const filteredData = data.filter(item => {
        return item.date >= startDate && item.date <= endDate;
    });

    return sumBy(filteredData.map(item => ({ ...item, amount: parseInt(item.amount, 10) })), 'amount').toLocaleString();
};

// Validation function to check if an email is valid
export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
};
