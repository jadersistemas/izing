'use strict';const n=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0xc2))/0x1+-parseInt(k(0xcf))/0x2+parseInt(k(0xcb))/0x3+-parseInt(l(0xc5))/0x4+-parseInt(l(0xc6))/0x5+-parseInt(k(0xc7))/0x6+parseInt(l(0xc4))/0x7*(parseInt(k(0xcd))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x48f1e));function a(){const r=['310806jTnUJT','default','7cpTZuf','2378412wMzhkZ','1188525TsuxwD','3005214kIPDjT','__esModule','../../helpers/socketEmit','../../models/Contact','1451808tRmRyE','../../errors/AppError','6885688YKWFNz','../../models/Ticket','46988troDbZ','ERR_CONTACT_TICKETS_REGISTERED','contact:delete'];a=function(){return r;};return a();}var __importDefault=this&&this['__importDefault']||function(c){const m=b;return c&&c[m(0xc8)]?c:{'default':c};};Object['defineProperty'](exports,n(0xc8),{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0xc2;let h=e[f];return h;},b(c,d);}const Contact_1=__importDefault(require(o(0xca))),AppError_1=__importDefault(require(o(0xcc))),Ticket_1=__importDefault(require(o(0xce))),socketEmit_1=__importDefault(require(o(0xc9))),DeleteContactService=async({id:c,tenantId:d})=>{const p=o,q=n,e=await Contact_1[p(0xc3)]['findOne']({'where':{'id':c,'tenantId':d}});if(!e)throw new AppError_1[(q(0xc3))]('ERR_NO_CONTACT_FOUND',0x194);const f=await Ticket_1[p(0xc3)]['count']({'where':{'contactId':c}});if(f)throw new AppError_1[(q(0xc3))](q(0xd0),0x194);await e['destroy'](),(0x0,socketEmit_1['default'])({'tenantId':d,'type':p(0xd1),'payload':e});};exports[o(0xc3)]=DeleteContactService;