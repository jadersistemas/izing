'use strict';const s=b,t=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x92;let h=e[f];return h;},b(c,d);}function a(){const w=['defineProperty','12079566xoMudp','CASCADE','Users','RESTRICT','8zTxjUL','4HwaObX','6267790LuiaeM','1670804UZXqyA','78DdMGkz','Tickets','439861HHWNcs','38654MnTfRZ','__esModule','DataTypes','INTEGER','21667000KnhjrO','DATE','2916000xOhJkk'];a=function(){return w;};return a();}(function(c,d){const q=b,r=b,e=c();while(!![]){try{const f=-parseInt(q(0x9c))/0x1*(-parseInt(r(0x97))/0x2)+-parseInt(r(0xa3))/0x3+parseInt(r(0x99))/0x4+parseInt(r(0x98))/0x5+parseInt(q(0x9a))/0x6*(-parseInt(r(0x9d))/0x7)+parseInt(r(0x96))/0x8*(parseInt(q(0x92))/0x9)+-parseInt(r(0xa1))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa6aad));Object[s(0xa4)](exports,t(0x9e),{'value':!![]});const sequelize_1=require('sequelize');module['exports']={'up':c=>{const u=t,v=s;return c['createTable']('UserMessagesLog',{'id':{'type':sequelize_1[u(0x9f)][v(0xa0)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'messageId':{'type':sequelize_1[v(0x9f)]['STRING'],'allowNull':!![],'defaultValue':null},'userId':{'type':sequelize_1[u(0x9f)][v(0xa0)],'references':{'model':u(0x94),'key':'id'},'onUpdate':'CASCADE','onDelete':u(0x95)},'ticketId':{'type':sequelize_1['DataTypes']['INTEGER'],'references':{'model':v(0x9b),'key':'id'},'onUpdate':v(0x93),'onDelete':'SET\x20NULL','allowNull':!![]},'createdAt':{'type':sequelize_1['DataTypes']['DATE'](0x6),'allowNull':![]},'updatedAt':{'type':sequelize_1[v(0x9f)][v(0xa2)](0x6),'allowNull':![]}});},'down':c=>{return c['dropTable']('UserMessagesLog');}};