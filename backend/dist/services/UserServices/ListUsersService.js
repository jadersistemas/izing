'use strict';const m=b,n=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x16b;let h=e[f];return h;},b(c,d);}(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x17b))/0x1+-parseInt(k(0x16e))/0x2*(parseInt(l(0x17c))/0x3)+-parseInt(k(0x17a))/0x4*(parseInt(l(0x16c))/0x5)+-parseInt(l(0x180))/0x6*(-parseInt(l(0x176))/0x7)+-parseInt(k(0x16d))/0x8+parseInt(l(0x170))/0x9+parseInt(l(0x16b))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbeaf3));var __importDefault=this&&this[m(0x179)]||function(c){return c&&c['__esModule']?c:{'default':c};};function a(){const q=['../../models/Queue','LOWER','like','1217783uSrttS','Sequelize','ASC','__importDefault','8SgjYWY','1472070BWdWph','2952357gHSyQG','LIKE','__esModule','defineProperty','12nJFdxl','default','../../models/User','queue','profile','toLowerCase','10421550jyidoO','276095qbzDQn','9852896SWvXrP','2nkHudd','name','2205441NMpKVF','email','sequelize'];a=function(){return q;};return a();}Object[n(0x17f)](exports,n(0x17e),{'value':!![]});const sequelize_1=require(n(0x172)),Queue_1=__importDefault(require(n(0x173))),User_1=__importDefault(require(n(0x182))),ListUsersService=async({searchParam:searchParam='',pageNumber:pageNumber='1',tenantId:c})=>{const o=n,p=n,d={'tenantId':c,[sequelize_1['Op']['or']]:[{'name':sequelize_1[o(0x177)]['where'](sequelize_1[p(0x177)]['fn'](p(0x174),sequelize_1['Sequelize']['col'](o(0x16f))),p(0x17d),'%'+searchParam[p(0x185)]()+'%')},{'email':{[sequelize_1['Op'][o(0x175)]]:'%'+searchParam['toLowerCase']()+'%'}}]},e=0x28,f=e*(+pageNumber-0x1),{count:g,rows:h}=await User_1[p(0x181)]['findAndCountAll']({'where':d,'include':[{'model':Queue_1[o(0x181)],'attributes':['id',p(0x183)]}],'attributes':[o(0x16f),'id',o(0x171),p(0x184)],'limit':e,'offset':f,'distinct':!![],'order':[[p(0x16f),p(0x178)]]}),i=g>f+h['length'];return{'users':h,'count':g,'hasMore':i};};exports[n(0x181)]=ListUsersService;