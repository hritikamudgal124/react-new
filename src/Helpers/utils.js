export const getActiveTabIndex = (array, pathname) => {
    if (array && array.length > 0) {
        return array.findIndex(obj => obj.path === pathname);
    }
    return 0;
}   