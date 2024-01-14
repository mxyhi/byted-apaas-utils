
declare type ExtraCtx = import('@byted-apaas/server-common-node/context/IContext').IGfCtx
declare type CoreCtx = import('@byted-apaas/server-sdk-node/context/context').IContext<ExtraCtx, import('./data').metadataMap, import('./local_data').cloudFunctionNames, import('./data').globalVariablesMap, >
declare type CommonCtx = Omit<ExtraCtx, 'objectApiName'>
// declare type Logger = import('@byted-apaas/server-common-node/utils/logger').ILogger
declare type FlowCommon = import('@byted-apaas/server-common-node/context/workflow/workflow').WorkflowCommon
declare type FlowExtra = import('@byted-apaas/server-common-node/context/workflow/workflow').WorkflowExtra
declare type Context = CoreCtx & CommonCtx
// @ts-ignore
import('@byted-apaas/server-sdk-node/global/global')
declare namespace application {
// @ts-ignore
declare const data: import('@byted-apaas/server-sdk-node/context/db/db').IDBGetter<{}, import('./data').metadataMap, >
// @ts-ignore
declare const metadata: import('@byted-apaas/server-sdk-node/context/metadata/metadata').IMetaData<import('./data').metadataMap, >
// @ts-ignore
declare const globalVar: import('@byted-apaas/server-sdk-node/global/application/globalVar/globalVar').GlobalVar<import('./data').globalVariablesMap, >
}
// @ts-ignore
import('@byted-apaas/baas-sdk-node/global/global')
declare namespace baas {
// @ts-ignore
declare const tasks: import('@byted-apaas/baas-sdk-node/global/tasks').Tasks<import('./local_data').cloudFunctionNames, >
// @ts-ignore
declare const oss: import('@byted-apaas/server-common-node/kunlun/oss/oss').Oss
}
// @ts-ignore
declare const faas: import('@byted-apaas/faas-sdk-node/global/faas/ifaas').IFaaS<import('./local_data').cloudFunctionNames, >


application.data