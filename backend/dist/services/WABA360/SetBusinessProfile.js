'use strict';function a(){const r=['671034Lpexxr','defineProperty','1202754RRZqPA','application/json','19YBsnGw','120500XkExmt','47858kdEYaK','697248CMeloW','../../utils/logger','/v1/settings/business/profile','API_URL_360','../../errors/AppError','default','1273255bvPVON','360_NOT_SET_BUSINESS:\x20','__esModule','axios','logger','33nyTnMj','error','32972tiatwx','27rnlrbe'];a=function(){return r;};return a();}const n=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x90))/0x1*(-parseInt(l(0x92))/0x2)+parseInt(l(0x9e))/0x3*(-parseInt(l(0xa0))/0x4)+-parseInt(k(0x99))/0x5+-parseInt(l(0xa4))/0x6+parseInt(k(0xa2))/0x7+parseInt(l(0x93))/0x8*(parseInt(k(0xa1))/0x9)+parseInt(k(0x91))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x43ee8));var __importDefault=this&&this['__importDefault']||function(c){const m=b;return c&&c[m(0x9b)]?c:{'default':c};};Object[n(0xa3)](exports,'__esModule',{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0x90;let h=e[f];return h;},b(c,d);}const axios_1=__importDefault(require(n(0x9c))),AppError_1=__importDefault(require(n(0x97))),logger_1=require(o(0x94)),SetBusinessProfile=async({data:c,apiKey:d})=>{const p=n,q=o,e=process['env'][p(0x96)]+p(0x95);try{return await(0x0,axios_1[q(0x98)])({'method':'post','url':e,'data':c,'headers':{'D360-API-KEY':d,'Content-Type':p(0xa5)}}),!![];}catch(f){logger_1[p(0x9d)][q(0x9f)](f);throw new AppError_1[(q(0x98))](p(0x9a)+f);}};exports['default']=SetBusinessProfile;