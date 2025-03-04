export const tax = [2, 3, 4, 5];
export const discount = [5, 10, 15, 20];
export const clothSizes = [
    { value: "S", label: "Small" },
    { value: "M", label: "Medium" },
    { value: "L", label: "Large" },
    { value: "XL", label: "Extra Large" },
    { value: "2XL", label: "Extra Extra Large" },
];

// Function to get a menu item by key
export const getSizeLabel = (key) => {
    return clothSizes.find((item) => item.value === key).label;
};
