'use strict';const I=b,L=b;function a(){const X=['remove','params','ERR_NO_PERMISSION','getOwnPropertyDescriptor','4436SjsmLb','user','object','8yDlFhH','create','defineProperty','default','Auto\x20reply\x20deleted','status','466MGbFia','53892GDAgPZ','writable','6746706ezgTWe','configurable','message','__esModule','update','store','body','575yuXIIo','../services/AutoReplyServices/StepsReplyActionServices/UpdateStepsReplyActionService','json','required','shape','profile','3063993ivGfMO','prototype','call','12173030DMuzzB','894530HEiZfl','number','4999311SmNhcN','validate','admin'];a=function(){return X;};return a();}(function(c,d){const G=b,H=b,e=c();while(!![]){try{const f=-parseInt(G(0x117))/0x1*(-parseInt(H(0x120))/0x2)+parseInt(H(0x130))/0x3+-parseInt(G(0x121))/0x4*(parseInt(H(0x12a))/0x5)+parseInt(G(0x123))/0x6+-parseInt(H(0x10e))/0x7+parseInt(G(0x11a))/0x8*(parseInt(G(0x110))/0x9)+-parseInt(H(0x10d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcd2a9));var __createBinding=this&&this['__createBinding']||(Object[I(0x11b)]?function(c,d,e,f){const J=I,K=I;if(f===undefined)f=e;var g=Object[J(0x116)](d,e);(!g||('get'in g?!d[K(0x126)]:g[K(0x122)]||g[K(0x124)]))&&(g={'enumerable':!![],'get':function(){return d[e];}}),Object['defineProperty'](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[I(0x11b)]?function(c,d){const M=L;Object[M(0x11c)](c,'default',{'enumerable':!![],'value':d});}:function(c,d){const N=L;c[N(0x11d)]=d;}),__importStar=this&&this['__importStar']||function(c){const O=I,P=L;if(c&&c[O(0x126)])return c;var d={};if(c!=null){for(var e in c)if(e!==O(0x11d)&&Object[P(0x131)]['hasOwnProperty'][O(0x132)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this['__importDefault']||function(c){const Q=L;return c&&c[Q(0x126)]?c:{'default':c};};Object[L(0x11c)](exports,L(0x126),{'value':!![]}),exports[I(0x113)]=exports['update']=exports['store']=void 0x0;function b(c,d){const e=a();return b=function(f,g){f=f-0x10d;let h=e[f];return h;},b(c,d);}const Yup=__importStar(require('yup')),AppError_1=__importDefault(require('../errors/AppError')),CreateStepsReplyActionService_1=__importDefault(require('../services/AutoReplyServices/StepsReplyActionServices/CreateStepsReplyActionService')),DeleteStepsReplyActionService_1=__importDefault(require('../services/AutoReplyServices/StepsReplyActionServices/DeleteStepsReplyActionService')),UpdateStepsReplyActionService_1=__importDefault(require(I(0x12b))),store=async(c,d)=>{const R=I,S=I;if(c['user'][R(0x12f)]!==R(0x112))throw new AppError_1[(S(0x11d))]('ERR_NO_PERMISSION',0x193);const e={...c[R(0x129)],'userId':c['user']['id']},f=Yup['object']()[S(0x12e)]({'stepReplyId':Yup[R(0x10f)]()[S(0x12d)](),'words':Yup[R(0x10f)]()[S(0x12d)](),'action':Yup['number']()['required'](),'userId':Yup[S(0x10f)]()['required']()});try{await f['validate'](e);}catch(h){throw new AppError_1[(S(0x11d))](h[R(0x125)]);}const g=await(0x0,CreateStepsReplyActionService_1[S(0x11d)])(e);return d[S(0x11f)](0xc8)[S(0x12c)](g);};exports[I(0x128)]=store;const update=async(c,d)=>{const T=L,U=I;if(c[T(0x118)]['profile']!==U(0x112))throw new AppError_1[(T(0x11d))]('ERR_NO_PERMISSION',0x193);const e={...c['body'],'userId':c[T(0x118)]['id']},f=Yup[T(0x119)]()[T(0x12e)]({'stepReplyId':Yup[U(0x10f)]()['required'](),'words':Yup[T(0x10f)]()[T(0x12d)](),'action':Yup['number']()['required'](),'userId':Yup[T(0x10f)]()[T(0x12d)]()});try{await f[T(0x111)](e);}catch(i){throw new AppError_1[(U(0x11d))](i[U(0x125)]);}const {stepsReplyActionId:g}=c[U(0x114)],h=await(0x0,UpdateStepsReplyActionService_1['default'])({'stepsReplyActionData':e,'stepsReplyActionId':g});return d[U(0x11f)](0xc8)['json'](h);};exports[L(0x127)]=update;const remove=async(c,d)=>{const V=L,W=L;if(c['user'][V(0x12f)]!==V(0x112)){if('GUqsm'!=='GUqsm'){if(k===l)m=n;o[p]=q[r];}else throw new AppError_1['default'](W(0x115),0x193);}const {stepsReplyActionId:e}=c['params'];return await(0x0,DeleteStepsReplyActionService_1[W(0x11d)])(e),d[W(0x11f)](0xc8)[V(0x12c)]({'message':W(0x11e)});};exports[I(0x113)]=remove;