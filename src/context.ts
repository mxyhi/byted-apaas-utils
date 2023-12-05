// @ts-ignore
let context: Context = null;

// @ts-ignore
export const initContext = (contextInstance: Context) => {
  context = contextInstance;
  return context;
};

// @ts-ignore
export const getContext = (): Context => context;
