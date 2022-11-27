const axiosMethods = { post: "POST", get: "GET", put: "PUT", delete: "DELETE" };

export const getConfig = {
  method: axiosMethods.get,
  crossdomain: true,
  withCredentials: true,
};

export const postConfig = {
  method: axiosMethods.post,
  crossdomain: true,
  withCredentials: true,
};

export const onGlobalSuccess = (response: any) => {
  return response.data.item;
};

export const onGlobalError = (response: any) => {
  return response.errors;
};
