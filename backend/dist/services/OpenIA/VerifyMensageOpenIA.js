'use strict';const n=b,o=b;(function(c,d){const l=b,m=b,e=c();while(!![]){try{const f=parseInt(l(0xec))/0x1+parseInt(m(0xf0))/0x2+parseInt(m(0xe4))/0x3+parseInt(m(0xf9))/0x4+parseInt(m(0xdf))/0x5*(parseInt(l(0xe0))/0x6)+parseInt(m(0xed))/0x7+-parseInt(l(0xe8))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6f350));var __importDefault=this&&this[n(0xf8)]||function(c){return c&&c['__esModule']?c:{'default':c};};Object[o(0xf2)](exports,o(0xe1),{'value':!![]});function a(){const r=['message','173880ppmueI','6039264hrPQrc','pending','whatsappId','85864ncGmyZ','../../restClients/openIARestClient','defineProperty','fromMe','../MessageServices/CreateMessageSystemService','findByPk','number','typeMessage','__importDefault','1076140iYyYIh','status','sendType','Transfer','bot','../../models/Whatsapp','tenantId','parse','queue_transf','90yUhjmo','214680Hdnrft','__esModule','name','../../models/Contact','1027368VsEKTz','default','isGroup','body','15036728kJKCNp','../TicketServices/UpdateQueueIATicket','sendMessageToIA'];a=function(){return r;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0xdc;let h=e[f];return h;},b(c,d);}const Contact_1=__importDefault(require(o(0xe3))),openIARestClient_1=require(n(0xf1)),CreateMessageSystemService_1=__importDefault(require(o(0xf4))),Whatsapp_1=__importDefault(require(n(0xfe))),UpdateQueueIATicket_1=__importDefault(require(n(0xe9))),VerifyMensageOpenIA=async(c,d,e,f)=>{const p=n,q=o;if(e[p(0xfa)]===q(0xee)&&!d[q(0xf3)]&&!e[q(0xe6)]&&!e['answered']&&e['is_chat_ia'])try{const g=await Contact_1[q(0xe5)][q(0xf5)](e['contactId']),h=await Whatsapp_1['default'][q(0xf5)](e[q(0xef)]);let i=await(0x0,openIARestClient_1[q(0xea)])({'message':{'id':c['id'],'contact_name':g[p(0xe2)],'ticket_id':e['id'],'body':d[q(0xe7)],'sender_number':h[q(0xf6)],'receiver_number':g[q(0xf6)]}});i=JSON[p(0xdd)](i);const j={'body':i[p(0xeb)]['answer'],'fromMe':!![],'read':!![],'sendType':q(0xfd)};await(0x0,CreateMessageSystemService_1[p(0xe5)])({'msg':j,'tenantId':e[q(0xdc)],'ticket':e,'sendType':j[p(0xfb)],'status':'pending'}),i['message'][q(0xf7)]==p(0xfc)&&await(0x0,UpdateQueueIATicket_1[p(0xe5)])(h[q(0xde)],e);}catch(k){console['log'](k);}};exports[n(0xe5)]=VerifyMensageOpenIA;