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

// Filter size / color options from products
export const filterSizeOptionsFn = (prod, opt) => {
    console.log('opt', opt)
    console.log('prod', prod)
    return prod.filter(item => opt.includes(item.value));
}

export const formatColorOptionsFn = (colors) => {
    return colors.map(color => ({ value: color, label: color }))
}

export const dataPaginationFn = (arr, pageItems, pageNo) => {
    // Calculate the start and end index for the current page
    const startIndex = (pageNo - 1) * pageItems;
    const endIndex = startIndex + pageItems;

    // Return an empty array for invalid page numbers
    if (startIndex >= arr.length || pageNo < 1) return [];

    // Return the slice of items for the current page
    return arr.slice(startIndex, endIndex);
}
