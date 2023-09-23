import { requier } from "./variables.js";
const url = () => {
    let category = "";
    if(requier.category !== "") {
        category = `&category=${requier.category}`;
    }
    let url = `https://data-project-3.vercel.app/api/products?q=${requier.q}&_sort=${requier.s}&_order=${requier.order}&_page=${requier.page}&_limit=6${category}`;
    return url;
}
export default url;