'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x18f))/0x1*(parseInt(l(0x1a4))/0x2)+-parseInt(l(0x191))/0x3*(-parseInt(l(0x19f))/0x4)+-parseInt(l(0x188))/0x5*(parseInt(k(0x18c))/0x6)+parseInt(l(0x1a8))/0x7+parseInt(l(0x19c))/0x8*(-parseInt(k(0x194))/0x9)+parseInt(k(0x199))/0xa*(-parseInt(l(0x189))/0xb)+-parseInt(k(0x187))/0xc*(-parseInt(k(0x184))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x30da4));function a(){const t=['all','DirectTicketsToWallets','defineProperty','86mQmvJI','rejectCalls','botTicketActive','log','766941cihRgX','13PGjfBi','callRejectMessage','NotViewTicketsQueueUndefined','10147836xUawxF','5tFroVo','3852739STBneg','error','userDisableSignature','1947318ZdADqJ','userCreation','spyticket','1502cNwXfw','__esModule','39YMpAUZ','Configuração\x20com\x20a\x20chave\x20','\x20já\x20existe\x20para\x20o\x20tenantId\x20','3529287YiQagN','ignoreGroupMsg','findOne','NotViewAssignedTickets','Erro\x20ao\x20criar\x20configuração:','10FkSGLI','default','__importDefault','8selXwA','Erro\x20ao\x20criar\x20configurações\x20padrão:','disabled','115820XpWsEr','userContactWallet'];a=function(){return t;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0x184;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[m(0x19b)]||function(c){const n=m;return c&&c[n(0x190)]?c:{'default':c};};Object[m(0x1a3)](exports,'__esModule',{'value':!![]});const Setting_1=__importDefault(require('../../models/Setting')),createSetting=async(c,d,e)=>{const p=m,q=o,f=await Setting_1[p(0x19a)][p(0x196)]({'where':{'tenantId':Number(c),'key':d}});if(f)return console[q(0x1a7)](p(0x192)+d+p(0x193)+c+'.'),f;try{const g=await Setting_1[q(0x19a)]['create']({'key':d,'value':e,'createdAt':new Date(),'updatedAt':new Date(),'tenantId':Number(c)});return g;}catch(h){console['error'](q(0x198),h);throw h;}},CreateDefaultSettings=async c=>{const r=o,s=o,d=[createSetting(c,r(0x18d),'disabled'),createSetting(c,s(0x186),'disabled'),createSetting(c,'NotViewTicketsChatBot',s(0x19e)),createSetting(c,r(0x197),s(0x19e)),createSetting(c,s(0x1a2),s(0x19e)),createSetting(c,r(0x1a6),s(0x19e)),createSetting(c,r(0x1a5),r(0x19e)),createSetting(c,s(0x185),'As\x20chamadas\x20de\x20voz\x20e\x20vídeo\x20estão\x20desabilitas\x20para\x20esse\x20WhatsApp,\x20favor\x20enviar\x20uma\x20mensagem\x20de\x20texto'),createSetting(c,s(0x18b),'enabled'),createSetting(c,r(0x195),r(0x19e)),createSetting(c,s(0x1a0),'disabled'),createSetting(c,'sendGreetingAccepted','enabled'),createSetting(c,s(0x18e),r(0x19e))];try{const e=await Promise[r(0x1a1)](d);return e;}catch(f){console[r(0x18a)](r(0x19d),f);throw f;}};exports[o(0x19a)]=CreateDefaultSettings;