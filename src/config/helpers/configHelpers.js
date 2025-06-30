
export const appDomain = [
    { appName: "warnda", domain: "Nile Suite POS", primaryColor: "#01aba6", baseUrl: import.meta.env.VITE_API_BASE_URL_WARNDA },
    { appName: "blackleaf", domain: "Nile Suite POS", primaryColor: "#FF9F43", baseUrl: import.meta.env.VITE_API_BASE_URL_BLACKLEAF },
    { appName: "dine&wine", domain: "Nile Suite POS", primaryColor: "#FF9F43", baseUrl: import.meta.env.VITE_API_BASE_URL },
];

export const findAppDomain = (name) => {
    const found = appDomain.find((item) => item.appName === name);
    return found ? found.domain : "Nile Suite POS";
}
export const findPrimaryColor = (name) => {
    const found = appDomain.find((item) => item.appName === name);
    return found ? found.primaryColor : "#FF9F43";
};
export const findBaseUrl = (name) => {
    const found = appDomain.find((item) => item.appName === name);
    return import.meta.env.VITE_API_BASE_URL;
};
