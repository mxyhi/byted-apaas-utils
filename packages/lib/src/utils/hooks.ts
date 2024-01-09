const createHook = <T>(cb: (...args: any) => T) => {
  let source = cb();

  return (...args: any) => {
    if (args.length) {
      source = cb(...args);
    }
    return source;
  };
};




export { createHook };
