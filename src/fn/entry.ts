import { FN_SERVICE_SYMBOL } from '../enums';
import { FnService } from '../services';
import { getFnName } from '../utils';

const createEntry =
  <T extends FnService>(mainConstructor: new () => T) =>
  async (params: Params, context: Context, logger: Logger) => {
    const apiName = getFnName(logger.tags);
    logger.log(
      `${new Date()} 函数: [${apiName}] 开始执行================================>`
    );
    logger.log('params:', params);

    const instance = new mainConstructor();

    injectInstanceService(instance, itemInstance => {
      const item = itemInstance as any;
      item._params = params;
      item._context = context;
      item._logger = logger;
      item._apiName = apiName;
    });

    const result = await instance.run();

    logger.log('result', result);
    logger.log(
      `${new Date()} 函数: [${apiName}] 结束执行<================================`
    );

    /**
     * @type {typeof ReturnType<instance['run']>}
     */
    return result;
  };

const injectInstanceService = <T extends FnService>(
  instance: T,
  cb: (itemInstance: T) => void
) => {
  const filterInstanceList = filterInstance(instance);
  for (let i = 0; i < filterInstanceList.length; i++) {
    const itemInstance = filterInstanceList[i];
    cb(itemInstance);
  }
};

const filterInstance = <T extends FnService>(
  instance: T,
  filterCb: (instance: T) => boolean = instance =>
    Reflect.has(instance, FN_SERVICE_SYMBOL)
) => {
  const sourcesSet = new Set<T>();

  if (!instance || !(typeof instance === 'object')) {
    throw new Error('instance is required');
  }

  const nodeList: T[] = [];
  nodeList.push(instance);
  while (nodeList.length > 0) {
    const currentNode = nodeList.pop();
    if (!currentNode) break;

    const isContinue = filterCb(currentNode);
    Reflect.has(currentNode, FN_SERVICE_SYMBOL);
    if (!isContinue) {
      continue;
    }
    sourcesSet.add(currentNode);
    const values = Object.values(currentNode);

    for (let i = values.length - 1; i >= 0; i--) {
      const obj = values[i];

      if (!obj || !(typeof obj === 'object')) {
        continue;
      }
      nodeList.push(obj as T);
    }
  }

  return Array.from(sourcesSet);
};

export { createEntry };
