import HTTP from "./HTTP";

export default function setProductPerPage(numberData) {
  return HTTP.get(`/products?_start=0&_end=${numberData}`);
}
