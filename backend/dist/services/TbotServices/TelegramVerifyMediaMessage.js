'use strict';const w=b,y=b;(function(c,d){const u=b,v=b,e=c();while(!![]){try{const f=-parseInt(u(0x19b))/0x1+-parseInt(u(0x199))/0x2*(-parseInt(v(0x191))/0x3)+parseInt(u(0x1b4))/0x4*(parseInt(u(0x19d))/0x5)+parseInt(u(0x1a9))/0x6*(parseInt(u(0x19c))/0x7)+parseInt(u(0x18d))/0x8+parseInt(v(0x19f))/0x9*(-parseInt(u(0x186))/0xa)+parseInt(u(0x195))/0xb*(-parseInt(u(0x180))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa9a20));var __importDefault=this&&this[w(0x187)]||function(c){const x=w;return c&&c[x(0x17d)]?c:{'default':c};};Object[w(0x1af)](exports,y(0x17d),{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0x178;let h=e[f];return h;},b(c,d);}const path_1=require(w(0x1b1)),util_1=require(w(0x1a0)),fs_1=require('fs'),axios_1=__importDefault(require('axios')),CreateMessageService_1=__importDefault(require(w(0x17c))),logger_1=require('../../utils/logger'),getQuotedForMessageId_1=__importDefault(require(w(0x18c))),writeFileAsync=(0x0,util_1[w(0x190)])(fs_1[y(0x19a)]),getMediaInfo=c=>{const z=y,A=w,d=c[z(0x181)]?z(0x181):c[A(0x1a5)]?'video':c[A(0x196)]?z(0x196):c['voice']?'voice':c[z(0x19e)]&&!c[z(0x19e)][A(0x182)]?z(0x19e):'document',e=c[d],[f,g,h,i,j,k,l]=[d,e['mime_type']?e['mime_type']:'',![],null,e[z(0x192)]?e['file_id']:e[e['length']-0x1][z(0x192)],c[z(0x1a1)]?c[A(0x1a1)]:'',d=='voice'];switch(d){case z(0x181):return{'type':f,'mimeType':A(0x198),'SAD':h,'fileName':i,'fileId':j,'caption':k,'SAV':l};break;case'video':return{'type':f,'mimeType':g,'SAD':h,'fileName':i,'fileId':j,'caption':k,'SAV':l};break;case'audio':return{'type':f,'mimeType':g,'SAD':h,'fileName':i,'fileId':j,'caption':k,'SAV':l};break;case A(0x189):return{'type':f,'mimeType':g,'SAD':h,'fileName':i,'fileId':j,'caption':k,'SAV':l};break;case A(0x19e):return{'type':f,'mimeType':z(0x1a3),'SAD':h,'fileName':i,'fileId':j,'caption':k,'SAV':l,'SAS':!![]};break;default:return{'type':f,'mimeType':g,'SAD':!![],'fileName':e[z(0x1ad)]?e[z(0x1ad)]:null,'fileId':j,'caption':k,'SAV':l};break;}},downloadFile=async(c,d)=>{const B=y,C=w,e=await(0x0,axios_1[B(0x18b)])({'url':c[C(0x179)](),'method':B(0x1a8),'responseType':B(0x183)});await new Promise((f,g)=>{const D=C,E=C;e[D(0x1ab)]['pipe']((0x0,fs_1[E(0x188)])(d))['on'](D(0x17f),async()=>f(!![]))['on']('error',h=>{const F=E;console['error'](F(0x1a7),h),g(new Error(h));});});},VerifyMediaMessage=async(c,d,e,f)=>{const G=y,H=y;let g,h={};g=c?.[G(0x1aa)],h=c?.[G(0x1b5)];!g&&h&&(g=h?.[H(0x1ae)]);const i=await getMediaInfo(g),j=await c[H(0x18e)][G(0x178)](i[H(0x1b2)]);if(!j){logger_1[G(0x184)][H(0x17a)](H(0x193)+g[G(0x1b3)]);return;}const k=i['mimeType'][G(0x18a)]('/')[0x1]['split'](';')[0x0],l=j[H(0x192)]+'_'+new Date()[H(0x17e)]()+'.'+k,m=(0x0,path_1[H(0x1a6)])(__dirname,'..','..','..',H(0x185),l),n=await c[H(0x18e)][H(0x18f)](i['fileId']);await downloadFile(n,m);let o;if(g?.[G(0x1a4)]?.[G(0x1b3)]){if(H(0x194)!=='tjJEd'){const r=await(0x0,getQuotedForMessageId_1[G(0x18b)])(g[G(0x1a4)]['message_id'],e[H(0x1a2)]);o=r?.['id']||undefined;}else return g&&h[H(0x17d)]?i:{'default':j};}const p={'messageId':String(g?.[G(0x1b3)]),'ticketId':e['id'],'contactId':d?undefined:f['id'],'body':g[G(0x1b0)]||g[G(0x1a1)]||l,'fromMe':d,'read':d,'mediaUrl':l,'mediaType':i['mimeType']['split']('/')[0x0],'quotedMsgId':o,'timestamp':+g[H(0x1ac)]*0x3e8,'status':d?G(0x17b):G(0x197)};await e[H(0x1b5)]({'lastMessage':g[G(0x1b0)]||g['caption']||l,'lastMessageAt':new Date()[G(0x17e)](),'answered':d||![]});const q=await(0x0,CreateMessageService_1[G(0x18b)])({'messageData':p,'tenantId':e[H(0x1a2)]});return q;};function a(){const I=['../../helpers/getQuotedForMessageId','10408920uFGBbi','telegram','getFileLink','promisify','9IiPFVF','file_id','ERR_DOWNLOAD_MEDIA::\x20ID:\x20','lYwXg','8155268hNItpf','audio','received','image/png','344170cZEHBX','writeFile','1257625UVWfHG','497ZuzxhV','75XtrIiA','sticker','2439cLYpjS','util','caption','tenantId','image/webp','reply_to_message','video','join','ERROR\x20DONWLOAD','GET','53892KWSxiw','message','data','date','file_name','edited_message','defineProperty','text','path','fileId','message_id','211304lBpcyV','update','getFile','toString','error','sended','../MessageServices/CreateMessageService','__esModule','getTime','finish','12jCgofk','photo','is_animated','stream','logger','public','20430pkCDlj','__importDefault','createWriteStream','voice','split','default'];a=function(){return I;};return a();}exports[y(0x18b)]=VerifyMediaMessage;