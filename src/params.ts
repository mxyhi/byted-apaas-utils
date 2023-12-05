// @ts-ignore
let params: Params = null;

// @ts-ignore
export const initParams = (paramsInstance: Params) => {
  params = paramsInstance;
  return params;
};

// @ts-ignore
export const getParams = (): Params => params;
