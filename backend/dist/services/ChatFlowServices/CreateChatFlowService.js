'use strict';const o=b,p=b;(function(c,d){const l=b,m=b,e=c();while(!![]){try{const f=parseInt(l(0x11d))/0x1+-parseInt(m(0x12a))/0x2+parseInt(l(0x12b))/0x3+parseInt(m(0x127))/0x4+-parseInt(m(0x118))/0x5+-parseInt(m(0x115))/0x6*(-parseInt(l(0x122))/0x7)+-parseInt(m(0x116))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcd2b5));function b(c,d){const e=a();return b=function(f,g){f=f-0x114;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this['__importDefault']||function(c){const n=b;return c&&c[n(0x125)]?c:{'default':c};};Object[o(0x11a)](exports,o(0x125),{'value':!![]});const util_1=require(o(0x11f)),path_1=require('path'),fs_1=require('fs'),ChatFlow_1=__importDefault(require(p(0x128))),writeFileAsync=(0x0,util_1['promisify'])(fs_1[p(0x117)]),CreateChatFlowService=async({flow:c,userId:d,tenantId:e,name:f,isActive:g})=>{const q=o,r=o;for await(const i of c[q(0x126)]){if(i[q(0x11b)]==='node')for await(const j of i[r(0x11c)]){if(j[q(0x11b)]==='MediaField'&&j['data']['media']){const k=new Date()['getTime']()+'-'+j['data'][q(0x123)];await writeFileAsync((0x0,path_1[r(0x119)])(__dirname,'..','..','..',q(0x12d),k),j[r(0x120)]['media'][q(0x124)](q(0x12c))[0x1],r(0x12c)),delete j['data'][q(0x121)],j['data'][q(0x114)]=j[q(0x120)][r(0x123)],j[r(0x120)][r(0x11e)]=k;}}}const h=await ChatFlow_1['default'][q(0x129)]({'flow':c,'userId':d,'tenantId':e,'name':f,'isActive':g});return h;};function a(){const s=['data','media','376124eNtzPf','name','split','__esModule','nodeList','5615372NYJlJN','../../models/ChatFlow','create','2136736dMdkgd','3873678rmeJwc','base64','public','fileName','24cniZJe','159920pruaax','writeFile','5462400aZensR','join','defineProperty','type','interactions','111214YsDXRZ','mediaUrl','util'];a=function(){return s;};return a();}exports['default']=CreateChatFlowService;