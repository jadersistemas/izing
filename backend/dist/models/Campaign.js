'use strict';const a2=b,a5=b;(function(c,d){const a0=b,a1=b,e=c();while(!![]){try{const f=-parseInt(a0(0x1a5))/0x1+-parseInt(a1(0x167))/0x2+-parseInt(a1(0x163))/0x3*(-parseInt(a1(0x15e))/0x4)+-parseInt(a1(0x175))/0x5*(-parseInt(a0(0x171))/0x6)+-parseInt(a0(0x180))/0x7*(parseInt(a1(0x19a))/0x8)+-parseInt(a0(0x1a4))/0x9*(parseInt(a1(0x1a3))/0xa)+parseInt(a1(0x197))/0xb*(parseInt(a1(0x16d))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xef7cf));function a(){const ae=['Column','pending','CreatedAt','processing','UpdatedAt','createdAt','start','PrimaryKey','56nSqkaq','./Tenant','design:type','cXQQl','__decorate','BelongsTo','pendentesEnvio','DataType','__metadata','Default','getOwnPropertyDescriptor','Table','user','metadata','session','design:returntype','message1','./Whatsapp','finished','Model','isArray','decorate','sequelize-typescript','6303GChjns','recebidas','delay','1710592QntDOM','wOkXs','yhPtv','./User','lidas','dataValues','prototype','updatedInstances','mediaType','2650EsohIG','20403heHLkZ','449635vMtVMa','AfterFind','__importDefault','default','campaignContacts','length','mediaUrl','92VFLWkQ','canceled','ENUM','design:paramtypes','null','227499rGsBnC','update','updatedAt','getDataValue','3805298fJOSyY','ForeignKey','function','status','./CampaignContacts','env','76116doWvfD','pendentesEntrega','scheduled','__esModule','24biXCcM','includes','object','userId','332345CgKcaw','PROXY_PORT','/public/'];a=function(){return ae;};return a();}var __decorate=this&&this[a2(0x184)]||function(e,f,g,h){const a3=a2,a4=a2;var j=arguments[a3(0x15c)],k=j<0x3?f:h===null?h=Object[a4(0x18a)](f,g):h,l;if(typeof Reflect===a3(0x173)&&typeof Reflect['decorate']===a4(0x169))k=Reflect[a4(0x195)](e,f,g,h);else{for(var m=e[a3(0x15c)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;},__metadata=this&&this[a5(0x188)]||function(c,d){const a6=a2,a7=a5;if(typeof Reflect===a6(0x173)&&typeof Reflect[a7(0x18d)]===a7(0x169))return Reflect[a6(0x18d)](c,d);},__importDefault=this&&this[a2(0x159)]||function(c){const a8=a2;return c&&c[a8(0x170)]?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0x159;let h=e[f];return h;},b(c,d);}Object['defineProperty'](exports,a5(0x170),{'value':!![]});const sequelize_typescript_1=require(a5(0x196)),CampaignContacts_1=__importDefault(require(a5(0x16b))),Tenant_1=__importDefault(require(a5(0x181))),User_1=__importDefault(require(a2(0x19d))),Whatsapp_1=__importDefault(require(a5(0x191)));let Campaign=class Campaign extends sequelize_typescript_1[a5(0x193)]{get[a5(0x15d)](){const a9=a5,aa=a5,c=this[a9(0x166)]('mediaUrl');if(c&&c!==aa(0x162)){const {BACKEND_URL:d}=process[a9(0x16c)];return d+':'+process[a9(0x16c)][a9(0x176)]+aa(0x177)+c;}return null;}static async['updatedInstances'](c){const ab=a2;if(!Array[ab(0x194)](c))return c;const d=await Promise['all'](c['map'](async e=>{const ac=ab,ad=ab;if(ac(0x19b)!==ac(0x19b)){const g=this[ac(0x166)]('mediaUrl');if(g&&g!==ad(0x162)){const {BACKEND_URL:h}=g[ac(0x16c)];return h+':'+h[ac(0x16c)][ad(0x176)]+ac(0x177)+g;}return null;}else{if(![ac(0x179),ac(0x192),ad(0x15f)][ac(0x172)](e[ac(0x16a)])){const g=+e[ac(0x19f)][ac(0x16e)],h=+e[ad(0x19f)][ac(0x186)],i=+e[ac(0x19f)][ac(0x198)],j=+e[ad(0x19f)][ac(0x19e)],k=+e[ad(0x19f)]['contactsCount'],l=g+h+i+j;if(e[ad(0x16a)]===ac(0x16f)&&k===h)return ad(0x183)!==ac(0x19c)?e:d;return k!==l&&(e['status']=ac(0x17b),await e[ad(0x164)]({'status':ac(0x17b)})),k===l&&(e[ac(0x16a)]='finished',await e[ad(0x164)]({'status':ad(0x192)})),e;}}}));return d;}};__decorate([sequelize_typescript_1[a2(0x17f)],sequelize_typescript_1['AutoIncrement'],sequelize_typescript_1[a2(0x178)],__metadata(a2(0x182),Number)],Campaign[a5(0x1a0)],'id',void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata('design:type',String)],Campaign[a5(0x1a0)],'name',void 0x0),__decorate([sequelize_typescript_1[a5(0x178)],__metadata(a5(0x182),Date)],Campaign[a2(0x1a0)],a5(0x17e),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x189)])('pending'),(0x0,sequelize_typescript_1[a2(0x178)])(sequelize_typescript_1[a2(0x187)][a2(0x160)]('pending',a5(0x16f),'processing','canceled',a2(0x192))),__metadata(a2(0x182),String)],Campaign[a5(0x1a0)],a2(0x16a),void 0x0),__decorate([sequelize_typescript_1[a5(0x178)],__metadata(a5(0x182),String)],Campaign[a2(0x1a0)],a5(0x190),void 0x0),__decorate([sequelize_typescript_1[a2(0x178)],__metadata(a5(0x182),String)],Campaign[a2(0x1a0)],'message2',void 0x0),__decorate([sequelize_typescript_1[a5(0x178)],__metadata('design:type',String)],Campaign[a5(0x1a0)],'message3',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x178)])(sequelize_typescript_1[a5(0x187)]['STRING']),__metadata(a2(0x182),String),__metadata('design:paramtypes',[])],Campaign[a5(0x1a0)],'mediaUrl',null),__decorate([sequelize_typescript_1[a5(0x178)],__metadata(a2(0x182),String)],Campaign[a5(0x1a0)],a5(0x1a2),void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>User_1['default']),sequelize_typescript_1['Column'],__metadata(a5(0x182),Number)],Campaign[a2(0x1a0)],a5(0x174),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x185)])(()=>User_1[a2(0x15a)]),__metadata(a5(0x182),User_1[a2(0x15a)])],Campaign[a2(0x1a0)],a2(0x18c),void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Whatsapp_1[a2(0x15a)]),sequelize_typescript_1[a5(0x178)],__metadata('design:type',Number)],Campaign[a5(0x1a0)],'sessionId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x185)])(()=>Whatsapp_1[a5(0x15a)]),__metadata(a2(0x182),Whatsapp_1[a5(0x15a)])],Campaign[a5(0x1a0)],a2(0x18e),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x168)])(()=>Tenant_1[a5(0x15a)]),sequelize_typescript_1[a2(0x178)],__metadata(a5(0x182),Number)],Campaign['prototype'],'tenantId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x185)])(()=>Tenant_1[a5(0x15a)]),__metadata(a2(0x182),Tenant_1['default'])],Campaign['prototype'],'tenant',void 0x0),__decorate([(0x0,sequelize_typescript_1['HasMany'])(()=>CampaignContacts_1['default']),__metadata(a2(0x182),Array)],Campaign[a2(0x1a0)],a2(0x15b),void 0x0),__decorate([sequelize_typescript_1[a2(0x17a)],__metadata(a2(0x182),Date)],Campaign[a5(0x1a0)],a5(0x17d),void 0x0),__decorate([sequelize_typescript_1[a5(0x17c)],__metadata(a5(0x182),Date)],Campaign[a2(0x1a0)],a5(0x165),void 0x0),__decorate([sequelize_typescript_1[a2(0x178)],__metadata(a5(0x182),Number)],Campaign[a5(0x1a0)],a2(0x199),void 0x0),__decorate([sequelize_typescript_1[a2(0x1a6)],__metadata(a5(0x182),Function),__metadata(a2(0x161),[Object]),__metadata(a5(0x18f),Promise)],Campaign,a2(0x1a1),null),Campaign=__decorate([sequelize_typescript_1[a5(0x18b)]],Campaign),exports[a5(0x15a)]=Campaign;