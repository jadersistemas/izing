'use strict';const o=b,q=b;(function(c,d){const m=b,n=b,e=c();while(!![]){try{const f=parseInt(m(0x194))/0x1*(-parseInt(n(0x192))/0x2)+parseInt(m(0x195))/0x3+-parseInt(m(0x1a2))/0x4+-parseInt(m(0x188))/0x5+parseInt(m(0x19b))/0x6+parseInt(n(0x1a5))/0x7+-parseInt(m(0x1a8))/0x8*(parseInt(m(0x1a7))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x41580));var __importDefault=this&&this[o(0x18e)]||function(c){const p=o;return c&&c[p(0x1a6)]?c:{'default':c};};function a(){const x=['5227668FJzzxs','8AtQZVv','default','defineProperty','../services/UserServices/AuthUserSerice','455815swUlmS','configs','../helpers/SendRefreshToken','SendRefreshToken','findByPk','username','__importDefault',':users','update','emit','46174vestEL','json','1IdxgwB','834477yuzSIT','logout','../errors/AppError','email','RefreshTokenService','body','1673556ZDTafP','name','profile','../libs/socket','status','getIO','store','484376SqVEVJ','../models/User','tenantId','3687313rZcIvQ','__esModule'];a=function(){return x;};return a();}Object[q(0x1aa)](exports,q(0x1a6),{'value':!![]}),exports['logout']=exports[o(0x190)]=exports[q(0x1a1)]=void 0x0;function b(c,d){const e=a();return b=function(f,g){f=f-0x187;let h=e[f];return h;},b(c,d);}const AppError_1=__importDefault(require(q(0x197))),AuthUserSerice_1=__importDefault(require(o(0x187))),SendRefreshToken_1=require(q(0x18a)),RefreshTokenService_1=require('../services/AuthServices/RefreshTokenService'),socket_1=require(o(0x19e)),User_1=__importDefault(require(o(0x1a3))),store=async(c,d)=>{const r=q,s=o,e=(0x0,socket_1[r(0x1a0)])(),{email:f,password:g}=c[r(0x19a)],{token:h,user:i,refreshToken:j,usuariosOnline:k}=await(0x0,AuthUserSerice_1['default'])({'email':f,'password':g});(0x0,SendRefreshToken_1[r(0x18b)])(d,j);const l={'token':h,'username':i['name'],'email':i[s(0x198)],'profile':i[s(0x19d)],'status':i['status'],'userId':i['id'],'tenantId':i[r(0x1a4)],'queues':i['queues'],'usuariosOnline':k,'configs':i[s(0x189)]};return e['emit'](l[r(0x1a4)]+r(0x18f),{'action':s(0x190),'data':{'username':l[s(0x18d)],'email':l[r(0x198)],'isOnline':!![],'lastLogin':new Date()}}),d[r(0x19f)](0xc8)['json'](l);};exports[o(0x1a1)]=store;const update=async(c,d)=>{const t=o,u=q,e=c['cookies']['jrt'];if(!e)throw new AppError_1[(t(0x1a9))]('ERR_SESSION_EXPIRED',0x191);const {newToken:f,refreshToken:g}=await(0x0,RefreshTokenService_1[u(0x199)])(e);return(0x0,SendRefreshToken_1[t(0x18b)])(d,g),d['json']({'token':f});};exports['update']=update;const logout=async(c,d)=>{const v=o,w=o,{userId:e}=c[v(0x19a)];if(!e)throw new AppError_1[(v(0x1a9))]('ERR_USER_NOT_FOUND',0x194);const f=(0x0,socket_1[w(0x1a0)])(),g=await User_1[w(0x1a9)][v(0x18c)](e);return g&&g['update']({'isOnline':![],'lastLogout':new Date()}),f[w(0x191)](g?.['tenantId']+v(0x18f),{'action':v(0x190),'data':{'username':g?.[v(0x19c)],'email':g?.['email'],'isOnline':![],'lastLogout':new Date()}}),d[w(0x193)]({'message':'USER_LOGOUT'});};exports[q(0x196)]=logout;