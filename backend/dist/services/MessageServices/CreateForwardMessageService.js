'use strict';const o=b,q=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x128;let h=e[f];return h;},b(c,d);}(function(c,d){const m=b,n=b,e=c();while(!![]){try{const f=-parseInt(m(0x148))/0x1+-parseInt(n(0x131))/0x2+parseInt(n(0x140))/0x3*(parseInt(m(0x133))/0x4)+-parseInt(n(0x138))/0x5+parseInt(n(0x13b))/0x6*(parseInt(n(0x12e))/0x7)+-parseInt(m(0x141))/0x8*(-parseInt(m(0x145))/0x9)+parseInt(m(0x12a))/0xa*(parseInt(m(0x14b))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5d0a4));function a(){const t=['55tFvgSl','quotedMsg','body','findByPk','441030wWwuiw','../../helpers/socketEmit','isGroup','../../models/Ticket','7eqIotq','sequelize','../TicketServices/ShowTicketService','251956MMemHF','contact','1907816XknouG','mediaType','ERR_CREATING_MESSAGE_SYSTEM','mediaName','create','3638595jtksMg','findOne','open','3816300boANcu','../../utils/queueValidation','pending','getTime','chat:create','3YyDIrk','120uxtnQi','__esModule','chat','update','139743GJQBnx','defineProperty','default','331635nZdZRz','__importDefault','ticket'];a=function(){return t;};return a();}var __importDefault=this&&this[o(0x149)]||function(c){const p=o;return c&&c[p(0x142)]?c:{'default':c};};Object[o(0x146)](exports,'__esModule',{'value':!![]});const sequelize_1=require(o(0x12f)),socketEmit_1=__importDefault(require(q(0x12b))),Message_1=__importDefault(require('../../models/Message')),Ticket_1=__importDefault(require(q(0x12d))),ShowTicketService_1=__importDefault(require(q(0x130))),queueValidation_1=__importDefault(require(o(0x13c))),CreateForwardMessageService=async({userId:c,tenantId:d,message:e,contact:f,ticketIdOrigin:g})=>{const r=q,s=o,h=await(0x0,ShowTicketService_1['default'])({'id':g,'tenantId':d});let i;i=await Ticket_1[r(0x147)][r(0x139)]({'where':{'status':{[sequelize_1['Op']['or']]:[r(0x13a),s(0x13d)]},'tenantId':d,'contactId':f['id']}});!i&&(i=await Ticket_1[s(0x147)]['create']({'contactId':f['id'],'status':r(0x13a),'isGroup':f[r(0x12c)],'userId':c,'tenantId':d,'unreadMessages':0x0,'whatsappId':h['whatsappId'],'lastMessage':e['body'],'lastMessageAt':new Date()[r(0x13e)](),'answered':!![]}));const j={'body':e['body'],'contactId':f['id'],'fromMe':!![],'read':!![],'mediaType':e?.[r(0x134)],'mediaUrl':e?.[r(0x136)],'mediaName':e?.[r(0x136)],'timestamp':new Date()['getTime'](),'userId':c,'scheduleDate':null,'sendType':r(0x143),'status':s(0x13d),'ticketId':i['id'],'tenantId':d},k=await Message_1[r(0x147)][r(0x137)](j),l=await Message_1[s(0x147)][r(0x129)](k['id'],{'include':[{'model':Ticket_1[s(0x147)],'as':s(0x14a),'where':{'tenantId':d},'include':[r(0x132)]},{'model':Message_1[s(0x147)],'as':s(0x14c),'include':['contact']}]});if(!l)throw new Error(r(0x135));await i[s(0x144)]({'lastMessage':l[r(0x128)],'lastMessageAt':new Date()[s(0x13e)](),'answered':!![]}),await(0x0,queueValidation_1[s(0x147)])(i['whatsappId'],i['tenantId'],[l]),(0x0,socketEmit_1['default'])({'tenantId':d,'type':s(0x13f),'payload':l});};exports[o(0x147)]=CreateForwardMessageService;