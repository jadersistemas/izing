'use strict';function b(c,d){var e=a();return b=function(f,g){f=f-0x1aa;var h=e[f];return h;},b(c,d);}var a2=b,a5=b;(function(c,d){var a0=b,a1=b,e=c();while(!![]){try{var f=-parseInt(a0(0x1c0))/0x1+parseInt(a0(0x1b3))/0x2+parseInt(a0(0x1b7))/0x3*(-parseInt(a0(0x1c8))/0x4)+-parseInt(a0(0x1cc))/0x5*(-parseInt(a1(0x1ba))/0x6)+parseInt(a0(0x1d6))/0x7*(parseInt(a1(0x1c1))/0x8)+parseInt(a1(0x1ad))/0x9+parseInt(a0(0x1bc))/0xa*(-parseInt(a0(0x1d2))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe5f3f));function a(){var a9=['DATE','BelongsTo','UpdatedAt','15526035arJmHX','./User','decorate','message','function','design:type','2353616WBweRK','__decorate','prototype','CreatedAt','151599ccfjwM','__esModule','metadata','12RfFiYd','getOwnPropertyDescriptor','14950SGcFTA','ForeignKey','AutoIncrement','./Ticket','1271654MFoRFG','57272BBGOcS','Model','__metadata','Default','sequelize-typescript','user','defineProperty','12bMUcyq','length','object','default','3395035iPbZEB','DataType','Column','updatedAt','ticket','messageId','14047dgbqks','AllowNull','./Message','ticketId','14YxMZNG','createdAt','__importDefault'];a=function(){return a9;};return a();}var __decorate=this&&this[a2(0x1b4)]||function(e,f,g,h){var a3=a2,a4=a2,j=arguments[a3(0x1c9)],k=j<0x3?f:h===null?h=Object[a4(0x1bb)](f,g):h,l;if(typeof Reflect===a3(0x1ca)&&typeof Reflect[a3(0x1af)]===a4(0x1b1))k=Reflect[a4(0x1af)](e,f,g,h);else{for(var m=e[a4(0x1c9)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[a4(0x1c7)](f,g,k),k;},__metadata=this&&this[a2(0x1c3)]||function(c,d){var a6=a2,a7=a2;if(typeof Reflect===a6(0x1ca)&&typeof Reflect['metadata']===a6(0x1b1))return Reflect[a6(0x1b9)](c,d);},__importDefault=this&&this[a2(0x1d8)]||function(c){var a8=a5;return c&&c[a8(0x1b8)]?c:{'default':c};};Object[a2(0x1c7)](exports,a5(0x1b8),{'value':!![]});const sequelize_typescript_1=require(a2(0x1c5)),Message_1=__importDefault(require(a2(0x1d4))),Ticket_1=__importDefault(require(a2(0x1bf))),User_1=__importDefault(require(a2(0x1ae)));let UserMessagesLog=class UserMessagesLog extends sequelize_typescript_1[a5(0x1c2)]{};__decorate([sequelize_typescript_1['PrimaryKey'],sequelize_typescript_1[a5(0x1be)],sequelize_typescript_1[a5(0x1ce)],__metadata(a5(0x1b2),Number)],UserMessagesLog['prototype'],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x1bd)])(()=>User_1[a5(0x1cb)]),sequelize_typescript_1[a5(0x1ce)],__metadata(a2(0x1b2),Number)],UserMessagesLog[a2(0x1b5)],'userId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x1ab)])(()=>User_1[a2(0x1cb)]),__metadata('design:type',User_1[a5(0x1cb)])],UserMessagesLog[a5(0x1b5)],a2(0x1c6),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x1bd)])(()=>Message_1[a5(0x1cb)]),(0x0,sequelize_typescript_1[a5(0x1c4)])(null),sequelize_typescript_1[a5(0x1d3)],sequelize_typescript_1[a5(0x1ce)],__metadata(a2(0x1b2),String)],UserMessagesLog[a5(0x1b5)],a2(0x1d1),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x1ab)])(()=>Message_1['default'],a2(0x1d1)),__metadata(a2(0x1b2),Message_1[a2(0x1cb)])],UserMessagesLog[a5(0x1b5)],a2(0x1b0),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x1bd)])(()=>Ticket_1[a5(0x1cb)]),(0x0,sequelize_typescript_1['Default'])(null),sequelize_typescript_1['AllowNull'],sequelize_typescript_1[a5(0x1ce)],__metadata('design:type',Number)],UserMessagesLog[a5(0x1b5)],a2(0x1d5),void 0x0),__decorate([(0x0,sequelize_typescript_1['BelongsTo'])(()=>Ticket_1[a5(0x1cb)]),__metadata(a2(0x1b2),Ticket_1[a2(0x1cb)])],UserMessagesLog[a2(0x1b5)],a2(0x1d0),void 0x0),__decorate([sequelize_typescript_1[a5(0x1b6)],(0x0,sequelize_typescript_1[a5(0x1ce)])(sequelize_typescript_1[a5(0x1cd)][a5(0x1aa)](0x6)),__metadata(a5(0x1b2),Date)],UserMessagesLog[a5(0x1b5)],a2(0x1d7),void 0x0),__decorate([sequelize_typescript_1[a2(0x1ac)],(0x0,sequelize_typescript_1[a5(0x1ce)])(sequelize_typescript_1[a2(0x1cd)][a2(0x1aa)](0x6)),__metadata('design:type',Date)],UserMessagesLog['prototype'],a5(0x1cf),void 0x0),UserMessagesLog=__decorate([(0x0,sequelize_typescript_1['Table'])({'freezeTableName':!![]})],UserMessagesLog),exports[a2(0x1cb)]=UserMessagesLog;