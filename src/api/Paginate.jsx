import HTTPService from "./HTTPService";

export const paginate = async (fieldset, start, end) => {
  const response = await HTTPService.get(
    `/${fieldset}?_page=${start}&_limit=${end}`
  );

  return { data: response.data, count: response.headers["x-total-count"] };
};
