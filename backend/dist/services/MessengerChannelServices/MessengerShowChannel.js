'use strict';const m=b,o=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x94;let h=e[f];return h;},b(c,d);}(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0xab))/0x1+-parseInt(k(0x99))/0x2*(-parseInt(k(0xa7))/0x3)+parseInt(l(0xaa))/0x4+parseInt(l(0xa4))/0x5+-parseInt(k(0xa0))/0x6+-parseInt(k(0x9b))/0x7*(-parseInt(l(0x9f))/0x8)+-parseInt(k(0xa9))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x902ef));var __importDefault=this&&this[m(0x9d)]||function(c){const n=m;return c&&c[n(0xa2)]?c:{'default':c};};function a(){const r=['instagramKey','findOne','tokenAPI','140UkvNmQ','status','7cCVFMz','fbObject','__importDefault','../../models/Whatsapp','7990472ekwYLV','3464274rcSEHz','createdAt','__esModule','../../errors/AppError','28905hLNFmv','default','ERR_NO_CHANNEL_FOUND','47832DYhulY','tenantId','25229880zDJWfI','3623180omXbRE','944809iPFcjf','updatedAt','name'];a=function(){return r;};return a();}Object['defineProperty'](exports,o(0xa2),{'value':!![]});const Whatsapp_1=__importDefault(require(m(0x9e))),AppError_1=__importDefault(require(o(0xa3))),MessengerShowChannel=async({fbPageId:c})=>{const p=m,q=m,d=['id',p(0x95),p(0x9a),'type',p(0xa1),q(0x94),q(0xa8),q(0x98),'fbPageId',q(0x9c),p(0x96)],e=await Whatsapp_1[q(0xa5)][p(0x97)]({'where':{'fbPageId':c},'attributes':d});if(!e)throw new AppError_1[(p(0xa5))](p(0xa6),0x194);return e;};exports[o(0xa5)]=MessengerShowChannel;