import HTTP from "./HTTPService";

export default function search(searchProduct) {
  return HTTP.get(`/products?q=${searchProduct}`);
}
