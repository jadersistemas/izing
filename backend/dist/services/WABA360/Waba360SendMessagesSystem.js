'use strict';const o=b,q=b;(function(c,d){const m=b,n=b,e=c();while(!![]){try{const f=parseInt(m(0x18a))/0x1*(parseInt(m(0x179))/0x2)+parseInt(n(0x1a4))/0x3*(parseInt(m(0x184))/0x4)+-parseInt(n(0x1a1))/0x5*(-parseInt(n(0x186))/0x6)+-parseInt(n(0x18b))/0x7+-parseInt(m(0x185))/0x8*(-parseInt(m(0x195))/0x9)+-parseInt(m(0x196))/0xa+-parseInt(n(0x17f))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7449e));var __importDefault=this&&this[o(0x1a0)]||function(c){const p=o;return c&&c[p(0x18c)]?c:{'default':c};};function a(){const v=['image','text','ticket','tokenAPI','body','update','__importDefault','45mKcqXp','number','sended','715413ZnmqkO','../../models/Whatsapp','timestamp','individual','ASC','createdAt','document','mediaName','logger','360','2wyVhch','../../models/Ticket','../../models/Message','quotedMsg','messages','chat','815925CTpMBN','mediaUrl','../../helpers/socketEmit','audio','waba','12RzEEFs','232NtvciJ','599040xIXfEZ','findAll','../../utils/logger','video','445285EsZTpC','4997384bXskEI','__esModule','contact','defineProperty','tenantId','wabaMediaId','./SentMessage','chat:ack','mediaType','voice','18567ASMDBW','8546800ZoiWZm','default','includes','sequelize'];a=function(){return v;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0x176;let h=e[f];return h;},b(c,d);}Object[q(0x18e)](exports,o(0x18c),{'value':!![]});const sequelize_1=require(q(0x199)),SetTicketMessagesAsRead_1=__importDefault(require('../../helpers/SetTicketMessagesAsRead')),socketEmit_1=__importDefault(require(o(0x181))),Message_1=__importDefault(require(o(0x17b))),Ticket_1=__importDefault(require(o(0x17a))),Whatsapp_1=__importDefault(require(o(0x1a5))),logger_1=require(q(0x188)),SentMessage_1=__importDefault(require(q(0x191))),buildWabaMessage360=async(c,d)=>{const r=o,s=o;let e={'timestamp':String(c[r(0x1a6)]),'recipient_type':r(0x1a7),'to':d,'type':'text'};return(c[s(0x193)]==='application'||c[r(0x193)]===r(0x1aa))&&(e={...e,'type':s(0x1aa),'document':{'id':c[s(0x190)],'caption':c[r(0x19e)]||c[r(0x176)]||''||''}}),c[s(0x193)]===r(0x19a)&&(e={...e,'type':s(0x19a),'image':{'id':c['wabaMediaId'],'caption':c[s(0x19e)]||c['mediaName']||''}}),c[s(0x193)]==='video'&&(e={...e,'type':s(0x189),'video':{'id':c[s(0x190)],'caption':c[s(0x19e)]||c['mediaName']||''}}),(c['mediaType']===r(0x182)||c[s(0x193)]===r(0x194))&&(e={...e,'type':'audio','audio':{'id':c[s(0x190)],'caption':c[r(0x19e)]||c[s(0x176)]||''}}),(c[r(0x193)]===s(0x17e)||c[r(0x193)]===s(0x19b))&&(e={...e,'text':{'body':c[r(0x19e)]}}),e;},where={'fromMe':!![],'messageId':{[sequelize_1['Op']['is']]:null},'status':'pending',[sequelize_1['Op']['or']]:[{'scheduleDate':{[sequelize_1['Op']['lte']]:new Date()}},{'scheduleDate':{[sequelize_1['Op']['is']]:null}}]},Waba360SendMessagesSystem=async c=>{const t=q,u=o,d=await Message_1[t(0x197)][t(0x187)]({'where':where,'include':['contact',{'model':Ticket_1[t(0x197)],'as':t(0x19c),'where':{'tenantId':c['tenantId'],'channel':t(0x183)},'include':[u(0x18d),{'model':Whatsapp_1[t(0x197)],'as':'whatsapp','where':{'id':c['id'],'type':u(0x183),'wabaBSP':t(0x178)}}]},{'model':Message_1[u(0x197)],'as':t(0x17c),'include':[u(0x18d)]}],'order':[[t(0x1a9),u(0x1a8)]]});for(const e of d){const {ticket:f}=e,g=String(f['contact'][t(0x1a2)]);if(!['text',t(0x17e)][u(0x198)](e['mediaType'])&&e[t(0x180)]&&!e[t(0x190)]){}const h=await buildWabaMessage360(e,g),i=await(0x0,SentMessage_1[t(0x197)])({'message':h,'apiKey':c[u(0x19d)]}),j={...e,'messageId':i[t(0x17d)][0x0]['id'],'status':'sended','ack':0x2};await Message_1[t(0x197)][u(0x19f)]({...j},{'where':{'id':e['id']}}),(0x0,socketEmit_1['default'])({'tenantId':f[u(0x18f)],'type':u(0x192),'payload':{...j['dataValues'],'mediaUrl':e['mediaUrl'],'messageId':j['messageId'],'status':u(0x1a3),'ack':0x2}}),logger_1[t(0x177)]['info']('Message\x20Update\x20ok'),await(0x0,SetTicketMessagesAsRead_1[u(0x197)])(f);}};exports[o(0x197)]=Waba360SendMessagesSystem;