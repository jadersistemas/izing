'use strict';function a(){var S=['prototype','Router','/group','26954560CjPsqx','update','create','store','default','express','__setModuleDefault','4259oHvDgv','/group/:groupId','remove','2045325cxauDR','delete','/group/user/:userId/:groupId','5519876kQmzUL','post','27261xICPsa','3376tnGLbT','4349317sKkNnS','558wpFUJE','7556154EjBHuF','../middleware/isAuth','3YtyLYo','defineProperty','listUserGroups','../controllers/GroupController','/group/user','get','put','hasOwnProperty','listUserbyGroup','__esModule','index'];a=function(){return S;};return a();}var K=b,L=b;(function(c,d){var G=b,H=b,e=c();while(!![]){try{var f=-parseInt(G(0xc3))/0x1*(-parseInt(H(0xce))/0x2)+-parseInt(G(0xd1))/0x3*(-parseInt(H(0xc9))/0x4)+parseInt(G(0xc6))/0x5+-parseInt(H(0xcf))/0x6+parseInt(G(0xcd))/0x7+-parseInt(H(0xcc))/0x8*(-parseInt(H(0xcb))/0x9)+-parseInt(G(0xbc))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe11c1));function b(c,d){var e=a();return b=function(f,g){f=f-0xb5;var h=e[f];return h;},b(c,d);}var __createBinding=this&&this['__createBinding']||(Object['create']?function(c,d,e,f){var I=b,J=b;if(f===undefined)f=e;var g=Object['getOwnPropertyDescriptor'](d,e);(!g||(I(0xd6)in g?!d['__esModule']:g['writable']||g['configurable']))&&(g={'enumerable':!![],'get':function(){return d[e];}}),Object[J(0xd2)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this[K(0xc2)]||(Object[L(0xbe)]?function(c,d){var M=L,N=L;Object[M(0xd2)](c,N(0xc0),{'enumerable':!![],'value':d});}:function(c,d){var O=K;c[O(0xc0)]=d;}),__importStar=this&&this['__importStar']||function(c){var P=L,Q=L;if(c&&c[P(0xb7)])return c;var d={};if(c!=null){for(var e in c)if(e!=='default'&&Object[P(0xb9)][Q(0xb5)]['call'](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this['__importDefault']||function(c){var R=K;return c&&c[R(0xb7)]?c:{'default':c};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require(K(0xc1))),isAuth_1=__importDefault(require(K(0xd0))),GroupController=__importStar(require(K(0xd4))),groupRoutes=express_1[K(0xc0)][L(0xba)]();groupRoutes[K(0xca)](L(0xd5),isAuth_1['default'],GroupController['storeUser']),groupRoutes['post'](K(0xbb),isAuth_1['default'],GroupController[L(0xbf)]),groupRoutes['get'](K(0xbb),isAuth_1[L(0xc0)],GroupController[K(0xb8)]),groupRoutes[K(0xd6)]('/group/:groupId',isAuth_1['default'],GroupController[K(0xb6)]),groupRoutes[L(0xd6)](K(0xd5),isAuth_1['default'],GroupController[K(0xd3)]),groupRoutes[L(0xd7)]('/group/:groupId',isAuth_1['default'],GroupController[L(0xbd)]),groupRoutes[L(0xc7)](L(0xc4),isAuth_1[L(0xc0)],GroupController[K(0xc5)]),groupRoutes[L(0xc7)](K(0xc8),isAuth_1[K(0xc0)],GroupController['removeUser']),exports[L(0xc0)]=groupRoutes;