'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x149))/0x1*(parseInt(l(0x142))/0x2)+-parseInt(k(0x158))/0x3*(parseInt(l(0x141))/0x4)+parseInt(l(0x159))/0x5*(parseInt(k(0x148))/0x6)+parseInt(k(0x150))/0x7*(-parseInt(k(0x14a))/0x8)+-parseInt(k(0x154))/0x9*(-parseInt(k(0x155))/0xa)+parseInt(l(0x14e))/0xb*(-parseInt(l(0x147))/0xc)+parseInt(l(0x151))/0xd*(parseInt(l(0x14f))/0xe);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3f1e6));function b(c,d){const e=a();return b=function(f,g){f=f-0x141;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[m(0x14d)]||function(c){const n=m;return c&&c[n(0x15a)]?c:{'default':c};};function a(){const r=['261677bocPmA','default','defineProperty','99TvAXMU','54210fPXHWG','isActive','color','141147FdlHnF','25XtrKLF','__esModule','userId','12gLFbMw','517846pPplrs','tag','update','ERR_NO_TAG_FOUND','reload','323592WySdgT','301662bqRnfj','1VEkSBP','312NjuVAH','../../errors/AppError','../../models/Tag','__importDefault','209GfVGoy','742QlkXsJ','37135clMDVh'];a=function(){return r;};return a();}Object[m(0x153)](exports,m(0x15a),{'value':!![]});const AppError_1=__importDefault(require(m(0x14b))),Tag_1=__importDefault(require(m(0x14c))),UpdateTagService=async({tagData:c,tagId:d})=>{const p=m,q=o,{tag:e,color:f,isActive:g,userId:h,tenantId:i}=c,j=await Tag_1['default']['findOne']({'where':{'id':d,'tenantId':i},'attributes':['id',p(0x143),q(0x157),q(0x156),p(0x15b)]});if(!j)throw new AppError_1[(q(0x152))](p(0x145),0x194);return await j[q(0x144)]({'tag':e,'color':f,'isActive':g,'userId':h}),await j[q(0x146)]({'attributes':['id',p(0x143),'color',p(0x156),'userId']}),j;};exports[m(0x152)]=UpdateTagService;