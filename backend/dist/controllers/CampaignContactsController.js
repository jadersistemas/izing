'use strict';const m=b,n=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x83))/0x1*(-parseInt(l(0x80))/0x2)+parseInt(k(0x8b))/0x3+-parseInt(k(0x7b))/0x4+parseInt(k(0x82))/0x5+parseInt(k(0x84))/0x6*(-parseInt(k(0x77))/0x7)+-parseInt(k(0x8d))/0x8*(-parseInt(k(0x8a))/0x9)+parseInt(k(0x79))/0xa*(-parseInt(k(0x8f))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9ad65));function a(){const w=['../services/CampaignContactsServices/ListCampaignContactsService','5510405wOvPTx','6HxawIE','42bRYYlK','__esModule','index','store','../services/CampaignContactsServices/CreateCampaignContactsService','defineProperty','45cuElsw','3391608eJYGNR','ERR_NO_PERMISSION','411832BDpMfn','profile','1463583hrywwt','user','../errors/AppError','remove','removeAll','json','body','__importDefault','24717mXKWBe','Campagin\x20Contacts\x20deleted','30BZZMHj','params','4090172NZEjLL','Campagin\x20Contact\x20deleted','default','status','admin','136460GCWkqe'];a=function(){return w;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0x74;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[m(0x76)]||function(c){return c&&c['__esModule']?c:{'default':c};};Object[n(0x89)](exports,m(0x85),{'value':!![]}),exports[m(0x93)]=exports[n(0x92)]=exports[m(0x86)]=exports[n(0x87)]=void 0x0;const AppError_1=__importDefault(require(m(0x91))),CreateCampaignContactsService_1=__importDefault(require(m(0x88))),ListCampaignContactsService_1=__importDefault(require(n(0x81))),DeleteCampaignContactsService_1=__importDefault(require('../services/CampaignContactsServices/DeleteCampaignContactsService')),DeleteAllCampaignContactsService_1=__importDefault(require('../services/CampaignContactsServices/DeleteAllCampaignContactsService')),store=async(c,d)=>{const o=m,p=n;if(c[o(0x90)][o(0x8e)]!==o(0x7f))throw new AppError_1[(o(0x7d))](o(0x8c),0x193);const e=[...c[o(0x75)]],{campaignId:f}=c[p(0x7a)],g=await(0x0,CreateCampaignContactsService_1[o(0x7d)])({'campaignContacts':e,'campaignId':f});return d[p(0x7e)](0xc8)[o(0x74)](g);};exports[m(0x87)]=store;const index=async(c,d)=>{const q=m,r=n,{tenantId:e}=c['user'],{campaignId:f}=c[q(0x7a)],g=await(0x0,ListCampaignContactsService_1[q(0x7d)])({'campaignId':f,'tenantId':e});return d[r(0x7e)](0xc8)[r(0x74)](g);};exports[m(0x86)]=index;const remove=async(c,d)=>{const s=n,t=m,{tenantId:e}=c[s(0x90)];if(c[s(0x90)][t(0x8e)]!=='admin')throw new AppError_1[(s(0x7d))](t(0x8c),0x193);const {campaignId:f,contactId:g}=c[s(0x7a)];return await(0x0,DeleteCampaignContactsService_1[t(0x7d)])({'campaignId':f,'contactId':g,'tenantId':e}),d[s(0x7e)](0xc8)['json']({'message':t(0x7c)});};exports[m(0x92)]=remove;const removeAll=async(c,d)=>{const u=n,v=m,{tenantId:e}=c['user'];if(c[u(0x90)][v(0x8e)]!=='admin')throw new AppError_1[(u(0x7d))]('ERR_NO_PERMISSION',0x193);const {campaignId:f}=c[u(0x7a)];return await(0x0,DeleteAllCampaignContactsService_1[v(0x7d)])({'campaignId':f,'tenantId':e}),d['status'](0xc8)['json']({'message':v(0x78)});};exports[m(0x93)]=removeAll;