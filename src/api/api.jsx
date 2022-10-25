import HTTPService from "../services/HTTPService";

export const getProductData = async () => {
  const response = await HTTPService.get("/products");
  return response.data;
};

export const paginateData = async (fieldset, start, end) => {
  const response = await HTTPService.get(
    `/${fieldset}?_page=${start}&_limit=${end}`
  );
  return response.data;
};

export const serachProduct = async (fieldset, searchFor, start, end) => {
  const response = await HTTPService.get(
    `/${fieldset}?q=${searchFor}&_page=${start}&_limit=${end}`
  );
  return response.data;
};

export const newProduct = async () => {
  const response = await HTTPService.get("/newProductImage");
  return response.data;
};

export const filterData = async (fieldset, filterBy, filter) => {
  const response = await HTTPService.get(`${fieldset}?${filterBy}=${filter}`);
  return response.data;
};

export const updateData = async (fieldset, id, object) => {
  const response = await HTTPService.put(`${fieldset}/${id}`, object);
  return response.data;
};
