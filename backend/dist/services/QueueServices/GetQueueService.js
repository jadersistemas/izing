'use strict';const m=b,n=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0xa7))/0x1*(parseInt(l(0xae))/0x2)+-parseInt(k(0xa0))/0x3+parseInt(l(0xab))/0x4*(-parseInt(k(0xa6))/0x5)+parseInt(k(0xa9))/0x6*(-parseInt(l(0xa1))/0x7)+-parseInt(k(0xad))/0x8+-parseInt(l(0xa2))/0x9+-parseInt(k(0xa3))/0xa*(-parseInt(k(0xa4))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1d5b6));var __importDefault=this&&this[m(0xac)]||function(c){return c&&c['__esModule']?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0xa0;let h=e[f];return h;},b(c,d);}Object[m(0xa8)](exports,'__esModule',{'value':!![]});function a(){const q=['defineProperty','12858qiqVsc','default','4ycLpYL','__importDefault','299136KtKjBH','6QPKtDu','667587DHBopo','679UvEusl','1549908pzOWxo','10820NvzLNa','11110sfRvHX','ERR_NO_QUEUE_FOUND','631765uxToSS','68739byfbTm'];a=function(){return q;};return a();}const AppError_1=__importDefault(require('../../errors/AppError')),Queue_1=__importDefault(require('../../models/Queue')),GetQueueService=async c=>{const o=m,p=n,d=await Queue_1['default']['findByPk'](c);if(!d)throw new AppError_1[(o(0xaa))](p(0xa5),0x194);return d;};exports[m(0xaa)]=GetQueueService;