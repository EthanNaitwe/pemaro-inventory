import { groupBy, sumBy } from "lodash";

export const tax = [2, 3, 4, 5];
export const discount = [5, 10, 15, 20];
export const clothSizes = [
    { value: "S", label: "Small" },
    { value: "M", label: "Medium" },
    { value: "L", label: "Large" },
    { value: "XL", label: "Extra Large" },
    { value: "2XL", label: "Extra Extra Large" },
];

export const paymentOptions = [
    { value: "cash", label: "CASH" },
    { value: "airtel-mobile-money", label: "AIRTEL MONEY" },
    { value: "mtn-mobile-money", label: "MTN MOBILE MONEY" },
    { value: "visa-card", label: "VISA CARD" },
    { value: "glovo", label: "GLOVO" },
];

export const salesCategories = [
    { value: "all-items", label: "ALL ITEMS" },
    { value: "foods", label: "FOODS" },
    { value: "beverages", label: "BEVERAGES" },
    { value: "break-fast", label: "BREAK FAST" },
    { value: "special-dishes", label: "SPECIAL DISHES" },
    { value: "bites", label: "BITES" },
    { value: "others", label: "OTHERS" },
];

// Function to get a menu item by key
export const getSizeLabel = (key) => {
    return clothSizes.find((item) => item.value === key).label;
};

// Filter size / color options from products
export const filterSizeOptionsFn = (prod, opt) => {
    return prod.filter(item => opt.includes(item.value));
};

export const formatColorOptionsFn = (colors) => {
    return colors.map(color => ({ value: color, label: color }));
};

export const dataPaginationFn = (arr, pageItems, pageNo) => {
    // Calculate the start and end index for the current page
    const startIndex = (pageNo - 1) * pageItems;
    const endIndex = startIndex + pageItems;

    // Return an empty array for invalid page numbers
    if (startIndex >= arr.length || pageNo < 1) return [];

    // Return the slice of items for the current page
    return arr.slice(startIndex, endIndex);
};

export const sumSalesSubTotal = (sales, clicks) => {
    const _sum = Object.keys(clicks).map((item) => {
        return sales.find(prod => prod.id === item).minimum_price * clicks[item] || 0;
    }).reduce((acc, curr) => acc + curr, 0);
    return _sum;
};

export const groupProductVariants = (variants) => {
    const grouped = groupBy(variants, (item) => `${item.size}-${item.color}`); // Group by size and color

    const result = [];

    for (const key in grouped) {
        const element = grouped[key];
        result.push({
            size: element[0].size,
            color: element[0].color,
            quantity: sumBy(element, 'quantity')
        });
    }

    return result;
};

export const expenseCategories = ["Employee Benefits", "Entertainment", "Office Expenses & Postage", "Other Expenses"];
export const dateRangeOptions = [
    { value: "all", label: "All" },
    { value: "today", label: "Today" },
    { value: "yesterday", label: "Yesterday" },
    // { value: "last-7-days", label: "Last 7 Days" },
    // { value: "last-30-days", label: "Last 30 Days" },
    // { value: "this-month", label: "This Month" },
    // { value: "last-month", label: "Last Month" },
];

export const clickZeroFilter = (data) => {
    return Object.fromEntries(
        Object.entries(data).filter(([, value]) => value !== 0)
    );
};
