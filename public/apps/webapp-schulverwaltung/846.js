"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[846],{1846:(Ue,y,r)=>{r.r(y),r.d(y,{MyProfileModule:()=>ze});var Z=r(6482),d=r(3519),f=r(1135),v=r(3900),h=r(4782),e=r(4650),M=r(9024);let m=(()=>{class n{constructor(t){this.profileService=t,this.reset$=new f.X(void 0),this.profile$=this.reset$.pipe((0,v.w)(()=>this.profileService.getMyProfile()),(0,h.d)(1)),this.loading$=this.profileService.loading$}reset(){this.reset$.next()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(M.J))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),b=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["erz-my-profile"]],features:[e._Bn([m])],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"router-outlet")},dependencies:[d.lC],changeDetection:0}),n})();var a=r(6895),_=r(6238),u=r(1104),P=r(2925),C=r(6342),A=r(6264),T=r(7612),z=r(4158),c=r(6188);let w=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["erz-my-profile-entry"]],inputs:{label:"label",value:"value"},decls:6,vars:4,consts:[[1,"row"],[1,"col-md-6"]],template:function(t,i){1&t&&(e.TgZ(0,"dl",0)(1,"dt",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"dd",1),e._uU(5),e.qZA()()),2&t&&(e.xp6(2),e.Oqu(e.lcZ(3,2,i.label)),e.xp6(3),e.Oqu(i.value))},dependencies:[c.X$],styles:["dl[_ngcontent-%COMP%]{padding:0 1rem}dt[_ngcontent-%COMP%]{font-weight:400;color:#00000080}"],changeDetection:0}),n})();var S=r(4707),L=r(9841),g=r(4004),U=r(6401),J=r(7871);function N(n,o){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("(",t.student.Gender,")")}}function I(n,o){if(1&n&&(e.TgZ(0,"a",10)(1,"i",11),e._uU(2,"description"),e.qZA()()),2&n){const t=e.oxw().erzLet;e.Q6J("href",t,e.LSH)}}function Y(n,o){if(1&n&&(e.ynx(0),e.YNc(1,I,3,1,"a",9),e.BQk()),2&n){const t=o.erzLet;e.xp6(1),e.Q6J("ngIf",t)}}function Q(n,o){if(1&n&&(e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"erz-avatar",4),e.TgZ(3,"div",5),e._uU(4),e.YNc(5,N,2,1,"span",6),e.TgZ(6,"div",7),e._uU(7),e.ALo(8,"date"),e.qZA()()(),e.YNc(9,Y,2,1,"ng-container",8),e.ALo(10,"async"),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("studentId",t.student.Id),e.xp6(2),e.lnq(" ",t.student.LastName," ",t.student.FirstName," ",t.student.MiddleName," "),e.xp6(1),e.Q6J("ngIf",t.student.Gender),e.xp6(2),e.Oqu(e.xi3(8,7,t.student.Birthdate,"dd.MM.yyyy")),e.xp6(2),e.Q6J("erzLet",e.lcZ(10,10,t.reportUrl$))}}function $(n,o){if(1&n&&(e.TgZ(0,"div",12),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.student.Email)}}let O=(()=>{class n{constructor(t){this.reportsService=t,this.studentId$=new S.t(1),this.reportUrl$=(0,L.a)([this.reportsService.personMasterDataAvailability$,this.studentId$]).pipe((0,g.U)(([i,l])=>i&&l?this.reportsService.getPersonMasterDataUrl(l):null))}ngOnChanges(t){t.student&&this.studentId$.next(t.student.currentValue?.Id||null)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(U.F))},n.\u0275cmp=e.Xpm({type:n,selectors:[["erz-my-profile-header"]],inputs:{student:"student"},features:[e.TTD],decls:2,vars:2,consts:[["class","avatar-person",4,"ngIf"],["class","email",4,"ngIf"],[1,"avatar-person"],[1,"d-flex"],[1,"me-3","avatar","large",3,"studentId"],[1,"person"],[4,"ngIf"],[1,"birthdate"],[4,"erzLet"],["class","report btn btn-primary btn-icon me-2","target","_blank",3,"href",4,"ngIf"],["target","_blank",1,"report","btn","btn-primary","btn-icon","me-2",3,"href"],[1,"material-icons"],[1,"email"]],template:function(t,i){1&t&&(e.YNc(0,Q,11,12,"div",0),e.YNc(1,$,2,1,"div",1)),2&t&&(e.Q6J("ngIf",i.student),e.xp6(1),e.Q6J("ngIf",i.student))},dependencies:[a.O5,u.e,J.A,a.Ov,a.uU],styles:[".avatar-person[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-left:1rem}.person[_ngcontent-%COMP%]{align-self:center}.email[_ngcontent-%COMP%]{padding:1rem 0 0 1rem}.report[_ngcontent-%COMP%]{align-self:flex-start;line-height:1}"],changeDetection:0}),n})(),E=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["erz-my-profile-address"]],inputs:{address:"address"},decls:2,vars:1,template:function(t,i){1&t&&(e.TgZ(0,"address"),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu(i.address))},styles:["[_nghost-%COMP%]{padding:1rem}address[_ngcontent-%COMP%]{white-space:pre-wrap}"],changeDetection:0}),n})();function F(n,o){if(1&n&&e._UZ(0,"erz-my-profile-entry",22),2&n){const t=e.oxw(3).erzLet;e.s9C("value",t.profile.student.SocialSecurityNumber)}}function q(n,o){if(1&n&&e._UZ(0,"erz-my-profile-entry",23),2&n){const t=e.oxw(3).erzLet;e.s9C("value",t.profile.student.HomeTown||t.profile.student.Nationality)}}function j(n,o){if(1&n&&e._UZ(0,"erz-my-profile-entry",24),2&n){const t=e.oxw(3).erzLet;e.s9C("value",t.profile.student.NativeLanguage)}}function G(n,o){if(1&n&&e._UZ(0,"erz-my-profile-entry",25),2&n){const t=e.oxw(3).erzLet;e.s9C("value",t.profile.stayPermitValue)}}function H(n,o){if(1&n&&(e._UZ(0,"erz-my-profile-entry",26),e.ALo(1,"date")),2&n){const t=e.oxw(3).erzLet;e.s9C("value",e.xi3(1,1,t.profile.student.StayPermitExpiry,"mediumDate"))}}function B(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"erz-student-dossier-entry-header",27),e.NdJ("click",function(){e.CHM(t),e.oxw();const l=e.MAs(8);return e.KtG(l.toggle("student-address"))}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&n&&(e.Q6J("opened",o.opened),e.xp6(1),e.hij(" ",e.lcZ(2,2,"shared.profile.student-address")," "))}function X(n,o){if(1&n&&(e.TgZ(0,"div",28)(1,"a",29)(2,"i",30),e._uU(3,"edit"),e.qZA()(),e._UZ(4,"erz-student-dossier-address",31),e.qZA()),2&n){const t=e.oxw(3).erzLet;e.xp6(4),e.Q6J("student",t.profile.student)}}function k(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"erz-student-dossier-entry-header",27),e.NdJ("click",function(){e.CHM(t),e.oxw(2);const l=e.MAs(8);return e.KtG(l.toggle("correspondence-address"))}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&n&&(e.Q6J("opened",o.opened),e.xp6(1),e.hij(" ",e.lcZ(2,2,"shared.profile.correspondence-address")," "))}function D(n,o){if(1&n&&e._UZ(0,"erz-my-profile-address",33),2&n){const t=e.oxw(4).erzLet;e.Q6J("address",t.profile.student.CorrespondenceAddress)}}function K(n,o){1&n&&(e.TgZ(0,"ngb-panel",32),e.YNc(1,k,3,4,"ng-template",16),e.YNc(2,D,1,1,"ng-template",17),e.qZA())}function R(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"erz-student-dossier-entry-header",27),e.NdJ("click",function(){e.CHM(t),e.oxw(2);const l=e.MAs(8);return e.KtG(l.toggle("billing-address"))}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&n&&(e.Q6J("opened",o.opened),e.xp6(1),e.hij(" ",e.lcZ(2,2,"shared.profile.billing-address")," "))}function V(n,o){if(1&n&&e._UZ(0,"erz-my-profile-address",33),2&n){const t=e.oxw(4).erzLet;e.Q6J("address",t.profile.student.BillingAddress)}}function W(n,o){1&n&&(e.TgZ(0,"ngb-panel",34),e.YNc(1,R,3,4,"ng-template",16),e.YNc(2,V,1,1,"ng-template",17),e.qZA())}function ee(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"erz-student-dossier-entry-header",27),e.NdJ("click",function(){e.CHM(t),e.oxw(2);const l=e.MAs(8);return e.KtG(l.toggle("legal-representatives"))}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&n&&(e.Q6J("opened",o.opened),e.xp6(1),e.hij(" ",e.lcZ(2,2,"shared.profile.legal-representation")," "))}function ne(n,o){1&n&&e._UZ(0,"erz-student-dossier-legal-representative",37),2&n&&e.Q6J("person",o.$implicit)}function te(n,o){if(1&n&&e.YNc(0,ne,1,1,"erz-student-dossier-legal-representative",36),2&n){const t=e.oxw(4).erzLet;e.Q6J("ngForOf",t.profile.legalRepresentativePersons)}}function oe(n,o){1&n&&(e.TgZ(0,"ngb-panel",35),e.YNc(1,ee,3,4,"ng-template",16),e.YNc(2,te,1,1,"ng-template",17),e.qZA())}function ie(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw(2).index;e.xp6(1),e.Oqu(t+1)}}function re(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"erz-student-dossier-entry-header",27),e.NdJ("click",function(){e.CHM(t);const l=e.oxw().index;e.oxw();const p=e.MAs(8);return e.KtG(p.toggle("apprenticeship-company-"+l))}),e._uU(1),e.ALo(2,"translate"),e.YNc(3,ie,2,1,"ng-container",39),e.qZA()}if(2&n){const t=o.opened,i=e.oxw(4).erzLet;e.Q6J("opened",t),e.xp6(1),e.hij(" ",e.lcZ(2,3,"shared.profile.apprenticeship-company")," "),e.xp6(2),e.Q6J("ngIf",i.profile.apprenticeshipCompanies.length>1)}}function le(n,o){if(1&n&&e._UZ(0,"erz-student-dossier-apprenticeship-company",40),2&n){const t=e.oxw().$implicit;e.Q6J("company",t)}}function ae(n,o){1&n&&(e.TgZ(0,"ngb-panel",38),e.YNc(1,re,4,5,"ng-template",16),e.YNc(2,le,1,1,"ng-template",17),e.qZA()),2&n&&e.Q6J("id","apprenticeship-company-"+o.index)}function se(n,o){if(1&n&&(e.TgZ(0,"div",7)(1,"div",8),e.YNc(2,F,1,1,"erz-my-profile-entry",9),e.YNc(3,q,1,1,"erz-my-profile-entry",10),e.YNc(4,j,1,1,"erz-my-profile-entry",11),e.YNc(5,G,1,1,"erz-my-profile-entry",12),e.YNc(6,H,2,4,"erz-my-profile-entry",13),e.qZA(),e.TgZ(7,"ngb-accordion",null,14)(9,"ngb-panel",15),e.YNc(10,B,3,4,"ng-template",16),e.YNc(11,X,5,1,"ng-template",17),e.qZA(),e.YNc(12,K,3,0,"ngb-panel",18),e.YNc(13,W,3,0,"ngb-panel",19),e.YNc(14,oe,3,0,"ngb-panel",20),e.YNc(15,ae,3,1,"ngb-panel",21),e.qZA()()),2&n){const t=e.oxw(2).erzLet;e.xp6(2),e.Q6J("ngIf",t.profile.student.SocialSecurityNumber),e.xp6(1),e.Q6J("ngIf",t.profile.student.HomeTown||t.profile.student.Nationality),e.xp6(1),e.Q6J("ngIf",t.profile.student.NativeLanguage),e.xp6(1),e.Q6J("ngIf",t.profile.stayPermitValue),e.xp6(1),e.Q6J("ngIf",t.profile.student.StayPermitExpiry),e.xp6(6),e.Q6J("ngIf",t.profile.student.CorrespondenceAddress),e.xp6(1),e.Q6J("ngIf",t.profile.student.BillingAddress),e.xp6(1),e.Q6J("ngIf",t.profile.legalRepresentativePersons.length>0),e.xp6(1),e.Q6J("ngForOf",t.profile.apprenticeshipCompanies)}}function pe(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"shared.profile.no-profile")))}function de(n,o){if(1&n&&(e.ynx(0),e._UZ(1,"erz-my-profile-header",4),e.YNc(2,se,16,9,"div",5),e.YNc(3,pe,3,3,"ng-template",null,6,e.W1O),e.BQk()),2&n){const t=e.MAs(4),i=e.oxw().erzLet;e.xp6(1),e.Q6J("student",i.profile&&i.profile.student),e.xp6(1),e.Q6J("ngIf",i.profile)("ngIfElse",t)}}function _e(n,o){1&n&&e._UZ(0,"erz-spinner")}function ce(n,o){if(1&n&&(e.TgZ(0,"div",1),e.YNc(1,de,5,3,"ng-container",2),e.ALo(2,"async"),e.YNc(3,_e,1,0,"ng-template",null,3,e.W1O),e.qZA()),2&n){const t=e.MAs(4),i=e.oxw();e.xp6(1),e.Q6J("ngIf",!1===e.lcZ(2,2,i.profileService.loading$))("ngIfElse",t)}}const fe=function(n){return{profile:n}};let me=(()=>{class n{constructor(t){this.profileService=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["erz-my-profile-show"]],decls:2,vars:5,consts:[["class","erz-container erz-container-limited erz-container-padding-y erz-container-padding-x-responsive",4,"erzLet"],[1,"erz-container","erz-container-limited","erz-container-padding-y","erz-container-padding-x-responsive"],[4,"ngIf","ngIfElse"],["loading",""],[3,"student"],["class","profile-content",4,"ngIf","ngIfElse"],["noProfile",""],[1,"profile-content"],[1,"profile-entries","pt-3"],["label","my-profile.show.social-security-number",3,"value",4,"ngIf"],["label","my-profile.show.hometown-nationality",3,"value",4,"ngIf"],["label","my-profile.show.native-language",3,"value",4,"ngIf"],["label","my-profile.show.stay-permit",3,"value",4,"ngIf"],["label","my-profile.show.stay-permit-expiry",3,"value",4,"ngIf"],["acc","ngbAccordion"],["id","student-address"],["ngbPanelHeader",""],["ngbPanelContent",""],["id","correspondence-address",4,"ngIf"],["id","billing-address",4,"ngIf"],["id","legal-representatives",4,"ngIf"],[3,"id",4,"ngFor","ngForOf"],["label","my-profile.show.social-security-number",3,"value"],["label","my-profile.show.hometown-nationality",3,"value"],["label","my-profile.show.native-language",3,"value"],["label","my-profile.show.stay-permit",3,"value"],["label","my-profile.show.stay-permit-expiry",3,"value"],[3,"opened","click"],[1,"clearfix"],["routerLink","edit","aria-label","edit",1,"btn","btn-primary","btn-icon","float-end","me-2"],[1,"material-icons"],["emailProperty","Email2",1,"profile-entry",3,"student"],["id","correspondence-address"],[1,"profile-entry",3,"address"],["id","billing-address"],["id","legal-representatives"],["class","profile-entry",3,"person",4,"ngFor","ngForOf"],[1,"profile-entry",3,"person"],[3,"id"],[4,"ngIf"],[1,"profile-entry",3,"company"]],template:function(t,i){1&t&&(e.YNc(0,ce,5,4,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("erzLet",e.VKq(3,fe,e.lcZ(1,1,i.profileService.profile$)))},dependencies:[a.sg,a.O5,d.yS,_.gY,_.Gk,_.gW,_.k9,u.e,P.O,C.H,A.k,T.O,z.g,w,O,E,a.Ov,a.uU,c.X$],styles:[".profile-content[_ngcontent-%COMP%]{padding-top:1rem}.profile-entry[_ngcontent-%COMP%]{display:block;padding:0 1rem}.profile-entries[_ngcontent-%COMP%]:not(:empty){border-top:1px solid rgb(222,222,222)}"],changeDetection:0}),n})();var s=r(4006),x=r(5698),ue=r(8746),ge=r(2103),ye=r(1443),ve=r(5644);function he(n,o){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=e.oxw(2).erzLet;e.xp6(1),e.hij(" ",t.student.AddressLine2," ")}}function xe(n,o){if(1&n&&(e.TgZ(0,"div",21),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,"global.validation-errors."+t.error,t.params)," ")}}function Ze(n,o){if(1&n&&(e.TgZ(0,"div",22),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,"global.validation-errors."+t.error,t.params)," ")}}function Me(n,o){1&n&&(e.TgZ(0,"div",23)(1,"span",24),e._uU(2,"Loading..."),e.qZA()())}function be(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"form",3),e.NdJ("ngSubmit",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.onSubmit())}),e.TgZ(1,"div",4)(2,"p"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"address",5)(6,"div"),e._uU(7),e.qZA(),e.YNc(8,he,2,1,"div",6),e.TgZ(9,"div"),e._uU(10),e.qZA()()(),e.YNc(11,xe,3,4,"div",7),e.ALo(12,"async"),e.TgZ(13,"div",4)(14,"label",8),e._uU(15),e.ALo(16,"translate"),e.qZA(),e._UZ(17,"input",9),e.qZA(),e.TgZ(18,"div",4)(19,"label",10),e._uU(20),e.ALo(21,"translate"),e.qZA(),e._UZ(22,"input",11),e.TgZ(23,"small",12),e._uU(24),e.ALo(25,"translate"),e.qZA()(),e.TgZ(26,"div",4)(27,"label",13),e._uU(28),e.ALo(29,"translate"),e.qZA(),e._UZ(30,"input",14),e.ALo(31,"async"),e.YNc(32,Ze,3,4,"div",15),e.ALo(33,"async"),e.TgZ(34,"small",16),e._uU(35),e.ALo(36,"translate"),e.qZA()(),e.TgZ(37,"div",17)(38,"button",18),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.cancel())}),e.ALo(39,"async"),e._uU(40),e.ALo(41,"translate"),e.qZA(),e.TgZ(42,"button",19),e.ALo(43,"async"),e._uU(44),e.ALo(45,"translate"),e.YNc(46,Me,3,0,"div",20),e.ALo(47,"async"),e.qZA()()()}if(2&n){const t=e.oxw().erzLet,i=e.oxw();e.Q6J("formGroup",t.formGroup),e.xp6(3),e.Oqu(e.lcZ(4,20,"my-profile.edit.address-changes-remark")),e.xp6(4),e.Oqu(t.student.AddressLine1),e.xp6(1),e.Q6J("ngIf",t.student.AddressLine2),e.xp6(2),e.AsE("",t.student.Zip||""," ",t.student.Location,""),e.xp6(1),e.Q6J("ngForOf",e.lcZ(12,22,i.formErrors$)),e.xp6(4),e.hij(" ",e.lcZ(16,24,"my-profile.edit.fields.phone-private")," "),e.xp6(5),e.hij(" ",e.lcZ(21,26,"my-profile.edit.fields.phone-mobile")," "),e.xp6(4),e.Oqu(e.lcZ(25,28,"my-profile.edit.fields.phone-mobile-hint")),e.xp6(4),e.hij(" ",e.lcZ(29,30,"my-profile.edit.fields.email2")," "),e.xp6(2),e.ekj("is-invalid",e.lcZ(31,32,i.email2Errors$).length>0),e.xp6(2),e.Q6J("ngForOf",e.lcZ(33,34,i.email2Errors$)),e.xp6(3),e.Oqu(e.lcZ(36,36,"my-profile.edit.fields.email2-hint")),e.xp6(3),e.Q6J("disabled",e.lcZ(39,38,i.saving$)),e.xp6(2),e.hij(" ",e.lcZ(41,40,"my-profile.edit.cancel")," "),e.xp6(2),e.Q6J("disabled",e.lcZ(43,42,i.saving$)),e.xp6(2),e.hij(" ",e.lcZ(45,44,"my-profile.edit.save")," "),e.xp6(2),e.Q6J("ngIf",e.lcZ(47,46,i.saving$))}}function Pe(n,o){if(1&n&&(e.TgZ(0,"div",1),e.YNc(1,be,48,48,"form",2),e.qZA()),2&n){const t=o.erzLet;e.xp6(1),e.Q6J("ngIf",t.formGroup)}}const Ce=function(n,o){return{formGroup:n,student:o}},Ae=[{path:"",component:b,children:[{path:"",component:me},{path:"edit",component:(()=>{class n{constructor(t,i,l,p,we,Se){this.fb=t,this.router=i,this.toastService=l,this.translate=p,this.profileService=we,this.personsService=Se,this.student$=this.profileService.profile$.pipe((0,g.U)(({student:Le})=>Le)),this.formGroup$=this.student$.pipe((0,g.U)(this.createFormGroup.bind(this)),(0,h.d)(1)),this.saving$=new f.X(!1),this.submitted$=new f.X(!1),this.email2Errors$=(0,ge.Z6)(this.formGroup$,this.submitted$,"email2")}cancel(){this.navigateBack()}onSubmit(){this.submitted$.next(!0),this.formGroup$.pipe((0,x.q)(1)).subscribe(t=>{if(t.valid){const{phonePrivate:i,phoneMobile:l,email2:p}=t.value;this.save(i?.trim()||null,l?.trim()||null,p||null)}})}createFormGroup(t){return this.fb.group({phonePrivate:[t.PhonePrivate],phoneMobile:[t.PhoneMobile],email2:[t.Email2,s.kI.email]})}save(t,i,l){this.saving$.next(!0),this.student$.pipe((0,x.q)(1),(0,v.w)(p=>this.personsService.update(p.Id,t,i,l)),(0,ue.x)(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}onSaveSuccess(){this.profileService.reset(),this.toastService.success(this.translate.instant("my-profile.edit.save-success")),this.navigateBack()}navigateBack(){this.router.navigate(["/my-profile"])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.QS),e.Y36(d.F0),e.Y36(ye.k),e.Y36(c.sK),e.Y36(m),e.Y36(ve.J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["erz-my-profile-edit"]],decls:3,vars:8,consts:[["class","erz-container erz-container-limited erz-container-padding-y",4,"erzLet"],[1,"erz-container","erz-container-limited","erz-container-padding-y"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"text-muted"],[4,"ngIf"],["class","alert alert-danger",4,"ngFor","ngForOf"],["id","my-profile-phone-private",1,"form-label"],["id","my-profile-phone-private","formControlName","phonePrivate","type","tel",1,"form-control"],["id","my-profile-phone-mobile",1,"form-label"],["id","my-profile-phone-mobile","formControlName","phoneMobile","type","tel","aria-describedby","my-profile-phone-mobile-hint",1,"form-control"],["id","my-profile-phone-mobile-hint",1,"form-text"],["id","my-profile-email2",1,"form-label"],["id","my-profile-email2","formControlName","email2","type","email","aria-describedby","my-profile-email2-hint",1,"form-control"],["class","invalid-feedback",4,"ngFor","ngForOf"],["id","my-profile-email2-hint",1,"form-text"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-outline-secondary",3,"disabled","click"],["type","submit",1,"btn","btn-primary","ms-2",3,"disabled"],["class","spinner-border spinner-border-sm align-middle","role","status",4,"ngIf"],[1,"alert","alert-danger"],[1,"invalid-feedback"],["role","status",1,"spinner-border","spinner-border-sm","align-middle"],[1,"visually-hidden"]],template:function(t,i){1&t&&(e.YNc(0,Pe,2,1,"div",0),e.ALo(1,"async"),e.ALo(2,"async")),2&t&&e.Q6J("erzLet",e.WLB(5,Ce,e.lcZ(1,1,i.formGroup$),e.lcZ(2,3,i.student$)))},dependencies:[a.sg,a.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,u.e,a.Ov,c.X$],changeDetection:0}),n})()}]}];let Te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(Ae),d.Bz]}),n})(),ze=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[Z.m,Te]}),n})()}}]);