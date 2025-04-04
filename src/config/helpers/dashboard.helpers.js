import { sumBy } from "lodash";
import { DateTime } from "luxon";

// Function to format a date
export const calculateDateRangeAmounts = (data, startDate, endDate) => {
    // Convert start & end dates to Luxon DateTime objects
    const start = DateTime.fromFormat(startDate, "dd/MM/yyyy");
    const end = DateTime.fromFormat(endDate, "dd/MM/yyyy");

    if (!start.isValid || !end.isValid) {
        throw new Error("Invalid start or end date format. Expected format: dd/MM/yyyy");
    }

    // Filter data based on the date range
    const filteredData = data.filter(item => {
        const itemDate = DateTime.fromFormat(item.date, "dd/MM/yyyy");

        // Ensure the date is valid before comparison
        return itemDate.isValid && itemDate.toMillis() >= start.toMillis() && itemDate.toMillis() <= end.toMillis();
    });

    // Convert amount to number, handle invalid amounts, and sum them
    const totalAmount = sumBy(filteredData, item => parseFloat(item.amount) || 0);

    return totalAmount.toLocaleString();
};

// Validation function to check if an email is valid
export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
};
