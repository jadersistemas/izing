'use strict';const u=b,v=b;(function(c,d){const s=b,t=b,e=c();while(!![]){try{const f=-parseInt(s(0x1f6))/0x1+-parseInt(s(0x1e9))/0x2+parseInt(t(0x1f7))/0x3+parseInt(s(0x1ef))/0x4+parseInt(t(0x1f8))/0x5*(parseInt(t(0x1f3))/0x6)+parseInt(s(0x1ed))/0x7+-parseInt(t(0x1f2))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3e85f));function b(c,d){const e=a();return b=function(f,g){f=f-0x1e7;let h=e[f];return h;},b(c,d);}Object[u(0x1fa)](exports,'__esModule',{'value':!![]});const sequelize_1=require('sequelize');function a(){const y=['FastReply','3056788nfvPaR','exports','1383668aGLTYm','Users','INTEGER','2354456QWShpJ','12AaxiUy','createTable','DataTypes','366511OBdAnx','706347vmIbVC','323210RFLPbM','CASCADE','defineProperty','DATE','STRING','460842VoHQGI','SET\x20NULL','TEXT'];a=function(){return y;};return a();}module[u(0x1ee)]={'up':c=>{const w=u,x=v;return c[w(0x1f4)](w(0x1ec),{'id':{'type':sequelize_1['DataTypes'][w(0x1f1)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'key':{'type':sequelize_1[x(0x1f5)][w(0x1e8)],'allowNull':![]},'message':{'type':sequelize_1[w(0x1f5)][w(0x1eb)],'allowNull':![]},'userId':{'type':sequelize_1[x(0x1f5)][w(0x1f1)],'references':{'model':w(0x1f0),'key':'id'},'onUpdate':x(0x1f9),'onDelete':x(0x1ea)},'tenantId':{'type':sequelize_1[w(0x1f5)][x(0x1f1)],'references':{'model':'Tenants','key':'id'},'onUpdate':w(0x1f9),'onDelete':w(0x1f9),'allowNull':![],'defaultValue':0x1},'createdAt':{'type':sequelize_1['DataTypes'][w(0x1e7)](0x6),'allowNull':![]},'updatedAt':{'type':sequelize_1[x(0x1f5)]['DATE'](0x6),'allowNull':![]}});},'down':c=>{return c['dropTable']('FastReply');}};