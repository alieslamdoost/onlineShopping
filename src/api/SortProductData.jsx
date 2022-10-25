import HTTPService from "./HTTPSer";

export default function SortData(sortProduct) {
  return HTTPService.get(`/products?_sort=${sortProduct}&_order=asc`);
}
