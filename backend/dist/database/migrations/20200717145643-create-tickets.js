'use strict';const u=b,v=b;(function(c,d){const s=b,t=b,e=c();while(!![]){try{const f=parseInt(s(0x139))/0x1+-parseInt(t(0x13a))/0x2+parseInt(t(0x145))/0x3*(parseInt(t(0x140))/0x4)+parseInt(t(0x13b))/0x5*(-parseInt(t(0x13c))/0x6)+-parseInt(s(0x14b))/0x7+-parseInt(s(0x14d))/0x8*(-parseInt(t(0x147))/0x9)+-parseInt(s(0x142))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x395ad));function a(){const A=['169326oqCPuA','5OlNOhJ','2527902qXMOYy','pending','exports','Contacts','1522856cZUFPE','CASCADE','1813520TzOCUz','INTEGER','dropTable','3WYOmdg','createTable','153dmtyPX','DATE','DataTypes','Users','1445605lJXgsO','STRING','207304JCwRhx','Tickets','__esModule','307537iShkuw'];a=function(){return A;};return a();}Object['defineProperty'](exports,u(0x138),{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0x138;let h=e[f];return h;},b(c,d);}const sequelize_1=require('sequelize');module[u(0x13e)]={'up':c=>{const w=u,x=u;return c[w(0x146)](w(0x14e),{'id':{'type':sequelize_1[w(0x149)][x(0x143)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'status':{'type':sequelize_1[x(0x149)][w(0x14c)],'defaultValue':w(0x13d),'allowNull':![]},'lastMessage':{'type':sequelize_1[w(0x149)]['STRING']},'contactId':{'type':sequelize_1[x(0x149)][x(0x143)],'references':{'model':x(0x13f),'key':'id'},'onUpdate':'CASCADE','onDelete':x(0x141)},'userId':{'type':sequelize_1[w(0x149)][x(0x143)],'references':{'model':x(0x14a),'key':'id'},'onUpdate':'CASCADE','onDelete':'SET\x20NULL'},'createdAt':{'type':sequelize_1['DataTypes'][x(0x148)](0x6),'allowNull':![]},'updatedAt':{'type':sequelize_1[w(0x149)]['DATE'](0x6),'allowNull':![]}});},'down':c=>{const y=u,z=u;return c[y(0x144)](y(0x14e));}};