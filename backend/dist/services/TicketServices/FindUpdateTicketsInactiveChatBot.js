'use strict';const n=b,o=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x136;let h=e[f];return h;},b(c,d);}(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x14a))/0x1*(-parseInt(k(0x13c))/0x2)+-parseInt(l(0x139))/0x3+parseInt(l(0x138))/0x4+-parseInt(l(0x149))/0x5*(-parseInt(k(0x140))/0x6)+-parseInt(k(0x142))/0x7+parseInt(k(0x13b))/0x8*(parseInt(k(0x136))/0x9)+parseInt(l(0x14b))/0xa*(-parseInt(k(0x13e))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x47e2f));var __importDefault=this&&this['__importDefault']||function(c){const m=b;return c&&c[m(0x13a)]?c:{'default':c};};function a(){const t=['query','sequelize','SELECT','72wSfLiR','../../models/Ticket','580764koRnal','1356513LESbqv','__esModule','580136zgYgIu','2fBvfDb','destiny','11eNiyAI','QueryTypes','2172mPZCby','update','725088quXYzw','map','ticket:update','userId','type_action','defineProperty','tenantId','7370XNhLsN','123742CRbqRz','2849710zXpuJL','default'];a=function(){return t;};return a();}Object[n(0x147)](exports,n(0x13a),{'value':!![]});const sequelize_1=require(o(0x14e)),Ticket_1=__importDefault(require(n(0x137))),socketEmit_1=__importDefault(require('../../helpers/socketEmit')),FindUpdateTicketsInactiveChatBot=async()=>{const p=o,q=n,c='\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20t.id,\x0a\x20\x20\x20\x20--t.\x22contactId\x22,\x0a\x20\x20\x20\x20--t.\x22lastInteractionBot\x22,\x0a\x20\x20\x20\x20--t.status,\x0a\x20\x20\x20\x20--config->\x27configurations\x27,\x0a\x20\x20\x20\x20--concat(config->\x27configurations\x27->\x27notResponseMessage\x27->\x27time\x27,\x20\x27\x20MINUTES\x27)::interval\x20as\x20time_action,\x0a\x20\x20\x20\x20config->\x27configurations\x27->\x27notResponseMessage\x27->\x27type\x27\x20as\x20type_action,\x0a\x20\x20\x20\x20config->\x27configurations\x27->\x27notResponseMessage\x27->\x27destiny\x27\x20as\x20destiny\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20inner\x20join\x20\x22ChatFlow\x22\x20cf\x20on\x20t.\x22tenantId\x22\x20=\x20cf.\x22tenantId\x22\x20and\x20cf.id\x20=\x20t.\x22chatFlowId\x22\x0a\x20\x20\x20\x20inner\x20join\x20\x22Settings\x22\x20s\x20on\x20s.\x22tenantId\x22\x20=\x20cf.\x22tenantId\x22\x20and\x20s.\x22key\x22\x20=\x20\x27botTicketActive\x27\x0a\x20\x20\x20\x20cross\x20join\x20lateral\x20json_array_elements(cf.flow->\x27nodeList\x27)\x20as\x20config\x0a\x20\x20\x20\x20where\x20t.\x22chatFlowId\x22::text\x20=\x20s.value\x0a\x20\x20\x20\x20and\x20t.status\x20=\x20\x27pending\x27\x0a\x20\x20\x20\x20and\x20config->>\x27type\x27\x20=\x20\x27configurations\x27\x0a\x20\x20\x20\x20and\x20t.\x22lastInteractionBot\x22\x20<\x20CURRENT_TIMESTAMP\x20-\x20concat(config->\x27configurations\x27->\x27notResponseMessage\x27->\x27time\x27,\x20\x27\x20MINUTES\x27)::interval\x0a\x20\x20\x20\x20and\x20(t.\x22queueId\x22\x20is\x20null\x20and\x20t.\x22userId\x22\x20is\x20null)\x0a\x20\x20',d=await Ticket_1[p(0x14c)][q(0x14e)]?.[q(0x14d)](c,{'type':sequelize_1[q(0x13f)][p(0x14f)]});Promise['all'](d[p(0x143)](async e=>{const r=p,s=q;if(!e[r(0x13d)])return;const f=await Ticket_1[s(0x14c)]['findByPk'](e['id']);if(f){const g={'chatFlowId':null,'stepChatFlow':null,'botRetries':0x0,'lastInteractionBot':new Date()};e[r(0x146)]==0x1&&(g['queueId']=e[s(0x13d)]),e['type_action']==0x2&&(g[r(0x145)]=e[r(0x13d)]),await f[r(0x141)](g),(0x0,socketEmit_1[r(0x14c)])({'tenantId':f[s(0x148)],'type':s(0x144),'payload':f});}}));};exports[o(0x14c)]=FindUpdateTicketsInactiveChatBot;