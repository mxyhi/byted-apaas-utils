# 飞书应用引擎工具函数

## see docs [https://mxyhi.github.io/byted-apaas-utils/](https://mxyhi.github.io/byted-apaas-utils/)

## example

```js
const { createModelServiceClass } = require("byted-apaas-utils");

class SystemUserService extends createModelServiceClass("_user") {}

const systemUserService = new SystemUserService();

systemUserService.find(...);
```

- or

```js
const { createModelService } = require("byted-apaas-utils");

const systemUserService = createModelService("_user");

systemUserService.find(...);
```
