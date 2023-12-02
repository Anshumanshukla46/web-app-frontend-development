export const getOrders = () => {
    return fetch("https://dummyjson.com/carts/1")
        .then((res) => res.json());
};

// we will be having our own api's but just to know how does it work we could use this
// USED IN DASHBOARD
export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomers = () => {
    return fetch("https://dummyjson.com/users").then((res) => res.json());
};


export const getComments = () => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
};