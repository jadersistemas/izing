'use strict';var a4=b,a7=b;function a(){var a9=['1TplzqY','149658JGWgvy','tenant','893816fbEGER','authToken','Column','userId','tenantId','UUID','urlMessageStatus','./User','Model','511832KIrUdZ','43233GNpkrk','isActive','UpdatedAt','__importDefault','default','DataType','defineProperty','1853744zWYgcm','5uedIck','ForeignKey','484659aisTof','design:type','function','prototype','104PJyVhg','179343sSxaXj','__metadata','./Whatsapp','sessionId','updatedAt','name','__esModule','DATE','metadata','PrimaryKey','object','getOwnPropertyDescriptor','length','BelongsTo','uuid','decorate','Default','30fOAEKB'];a=function(){return a9;};return a();}(function(c,d){var a0=b,a1=b,e=c();while(!![]){try{var f=-parseInt(a0(0xf1))/0x1*(parseInt(a0(0xfd))/0x2)+-parseInt(a1(0xfe))/0x3*(-parseInt(a0(0x10c))/0x4)+parseInt(a0(0x106))/0x5*(parseInt(a1(0xf2))/0x6)+-parseInt(a0(0x108))/0x7+parseInt(a0(0x105))/0x8+-parseInt(a0(0x10d))/0x9*(-parseInt(a0(0xf0))/0xa)+-parseInt(a1(0xf4))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4582f));var __decorate=this&&this['__decorate']||function(e,f,g,h){var a2=b,a3=b,j=arguments['length'],k=j<0x3?f:h===null?h=Object[a2(0xea)](f,g):h,l;if(typeof Reflect===a3(0xe9)&&typeof Reflect[a2(0xee)]===a3(0x10a))k=Reflect[a2(0xee)](e,f,g,h);else{for(var m=e[a3(0xeb)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[a3(0x104)](f,g,k),k;},__metadata=this&&this[a4(0x10e)]||function(c,d){var a5=a4,a6=a4;if(typeof Reflect===a5(0xe9)&&typeof Reflect[a6(0xe7)]===a5(0x10a))return Reflect['metadata'](c,d);},__importDefault=this&&this[a4(0x101)]||function(c){var a8=a4;return c&&c[a8(0xe5)]?c:{'default':c};};Object[a4(0x104)](exports,a4(0xe5),{'value':!![]});function b(c,d){var e=a();return b=function(f,g){f=f-0xe2;var h=e[f];return h;},b(c,d);}const sequelize_typescript_1=require('sequelize-typescript'),uuid_1=require(a4(0xed)),User_1=__importDefault(require(a4(0xfb))),Tenant_1=__importDefault(require('./Tenant')),Whatsapp_1=__importDefault(require(a4(0x10f)));class ApiConfig extends sequelize_typescript_1[a7(0xfc)]{}__decorate([sequelize_typescript_1[a4(0xe8)],(0x0,sequelize_typescript_1[a7(0xef)])(uuid_1['v4']),(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a7(0x103)][a4(0xf9)]),__metadata(a4(0x109),String)],ApiConfig[a7(0x10b)],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Whatsapp_1[a4(0x102)]),sequelize_typescript_1[a7(0xf6)],__metadata('design:type',Number)],ApiConfig[a7(0x10b)],a4(0xe2),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0xec)])(()=>Whatsapp_1[a4(0x102)]),__metadata(a4(0x109),Whatsapp_1[a4(0x102)])],ApiConfig[a4(0x10b)],'session',void 0x0),__decorate([sequelize_typescript_1[a4(0xf6)],__metadata('design:type',String)],ApiConfig[a7(0x10b)],a7(0xe4),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0xef)])(!![]),sequelize_typescript_1['Column'],__metadata(a7(0x109),Boolean)],ApiConfig[a4(0x10b)],a4(0xff),void 0x0),__decorate([sequelize_typescript_1[a7(0xf6)],__metadata(a4(0x109),String)],ApiConfig[a4(0x10b)],'token',void 0x0),__decorate([sequelize_typescript_1[a7(0xf6)],__metadata('design:type',String)],ApiConfig[a4(0x10b)],a7(0xf5),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a4(0x109),String)],ApiConfig[a4(0x10b)],'urlServiceStatus',void 0x0),__decorate([sequelize_typescript_1[a7(0xf6)],__metadata(a4(0x109),String)],ApiConfig[a4(0x10b)],a7(0xfa),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x107)])(()=>User_1[a7(0x102)]),sequelize_typescript_1[a7(0xf6)],__metadata(a7(0x109),Number)],ApiConfig[a7(0x10b)],a4(0xf7),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0xec)])(()=>User_1[a7(0x102)]),__metadata(a4(0x109),User_1[a7(0x102)])],ApiConfig[a7(0x10b)],'user',void 0x0),__decorate([sequelize_typescript_1['CreatedAt'],(0x0,sequelize_typescript_1[a4(0xf6)])(sequelize_typescript_1[a7(0x103)]['DATE'](0x6)),__metadata(a4(0x109),Date)],ApiConfig[a4(0x10b)],'createdAt',void 0x0),__decorate([sequelize_typescript_1[a7(0x100)],(0x0,sequelize_typescript_1[a7(0xf6)])(sequelize_typescript_1['DataType'][a4(0xe6)](0x6)),__metadata('design:type',Date)],ApiConfig[a4(0x10b)],a7(0xe3),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x107)])(()=>Tenant_1[a7(0x102)]),sequelize_typescript_1[a7(0xf6)],__metadata(a4(0x109),Number)],ApiConfig[a4(0x10b)],a7(0xf8),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0xec)])(()=>Tenant_1[a7(0x102)]),__metadata(a4(0x109),Tenant_1[a4(0x102)])],ApiConfig[a7(0x10b)],a4(0xf3),void 0x0),exports[a7(0x102)]=ApiConfig;