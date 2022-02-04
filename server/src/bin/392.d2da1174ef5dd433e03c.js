"use strict";(self.webpackChunkapp_videoclub=self.webpackChunkapp_videoclub||[]).push([[392],{5392:(E,h,i)=>{i.r(h),i.d(h,{DetailMovieModule:()=>S});var p=i(8583),x=i(5566),c=i(6983),M=i(5319),b=i(4900),Z=i(4706),t=i(7716),f=i(3065),g=i(5618),l=i(2238),C=i(9075),m=i(1095);let T=(()=>{class e{constructor(n,o){this.sanitizer=n,this.data=o,this.movieTitle=this.data.title,this.urlTrailer=this.sanitizer.bypassSecurityTrustResourceUrl(this.data.urltrailer)}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.H7),t.Y36(l.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-modal-trailer"]],decls:8,vars:2,consts:[[1,"modal"],["mat-dialog-content",""],["title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"],["mat-dialog-actions",""],["mat-raised-button","","color","primary","mat-dialog-close",""]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"div",1),t._UZ(4,"iframe",2),t.qZA(),t.TgZ(5,"div",3),t.TgZ(6,"button",4),t._uU(7,"Cerrar"),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Oqu(o.movieTitle),t.xp6(2),t.Q6J("src",o.urlTrailer,t.uOi))},directives:[l.xY,l.H8,m.lW,l.ZT],styles:["iframe[_ngcontent-%COMP%]{width:200px;height:115px}@media (min-width: 600px){iframe[_ngcontent-%COMP%]{width:500px;height:315px}}"]}),e})();var O=i(8259),y=i.n(O),P=i(8109),A=i(1175),_=i(3062),w=i(7001),v=i(6627),U=i(1769),d=i(3679);const q=function(){return{updateOn:"blur"}};let F=(()=>{class e{constructor(n,o,r,s,u){this.store=n,this._apiMoviesService=o,this.router=r,this.snackBar=s,this.data=u,this.days=1,this.duration=3,this.verticalPosition="top",this.horizontalPosition="center",this.movie=this.data}ngOnInit(){}rentMovie(n,o){this._apiMoviesService.getMovie(n).subscribe(r=>{const s=r[0];s.stock>0?this.addItemToCart({id:s._id,title:s.title,image:s.posterimg,year:s.year,runtime:s.runtime,price:s.price,days:o,stock:s.stock}):(this.snackBar.openFromComponent(P.E,{data:{title:"",message:"Esta pel\xedcula ya no est\xe1 disponible"},duration:1200*this.duration,verticalPosition:this.verticalPosition,horizontalPosition:this.horizontalPosition,panelClass:"error"}),this.router.navigate(["/public/movies"]))})}addItemToCart(n){this.store.dispatch((0,A.Z5)({item:n})),y().fire({position:"top",icon:"success",title:"Pel\xedcula agregada!",showConfirmButton:!1,timer:2500})}increase(){this.days+=1}decrease(){this.days-=1}changeQty(n){this.days=Number(n)<1?1:Number(n)>=1&&Number(n)<=30?Number(n):30}MinToHours(n){const o=Math.floor(n/60),r=n%60;return o>1?o+" hrs "+r+" min":o+" hr "+r+" min"}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.yh),t.Y36(_.l),t.Y36(c.F0),t.Y36(w.ux),t.Y36(l.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-modal-rental-time"]],decls:27,vars:9,consts:[[1,"modal"],["mat-raised-button","","color","primary","mat-dialog-close","",1,"btn-close"],[1,"modal-header"],["alt","",1,"modal-image",3,"src"],[1,"modal-details"],[1,"text-detail"],["mat-dialog-content",""],[1,"counter"],["mat-raised-button","","color","primary",1,"btn-decrease",3,"disabled","click"],["type","number",1,"input-days",3,"ngModel","ngModelOptions","ngModelChange"],["mat-raised-button","","color","primary",1,"btn-increase",3,"disabled","click"],["mat-dialog-actions",""],["mat-raised-button","","color","accent","mat-dialog-close","",1,"btn-add",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t.TgZ(2,"mat-icon"),t._uU(3,"close"),t.qZA(),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"img",3),t.TgZ(6,"div",4),t.TgZ(7,"strong"),t._uU(8),t.qZA(),t.TgZ(9,"span",5),t._uU(10),t.qZA(),t.TgZ(11,"span",5),t._uU(12),t.qZA(),t.qZA(),t.qZA(),t._UZ(13,"mat-divider"),t.TgZ(14,"div",6),t.TgZ(15,"label"),t._uU(16,"Ingrese la cantidad de d\xedas: "),t.qZA(),t.TgZ(17,"div",7),t.TgZ(18,"button",8),t.NdJ("click",function(){return o.decrease()}),t._uU(19,"-"),t.qZA(),t.TgZ(20,"input",9),t.NdJ("ngModelChange",function(s){return o.changeQty(s)}),t.qZA(),t.TgZ(21,"button",10),t.NdJ("click",function(){return o.increase()}),t._uU(22,"+"),t.qZA(),t.qZA(),t.qZA(),t._UZ(23,"mat-divider"),t.TgZ(24,"div",11),t.TgZ(25,"button",12),t.NdJ("click",function(){return o.rentMovie(o.movie._id,o.days)}),t._uU(26,"Agregar"),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(5),t.s9C("src",o.movie.posterimg,t.LSH),t.xp6(3),t.Oqu(o.movie.title),t.xp6(2),t.hij("A\xf1o: ",o.movie.year,""),t.xp6(2),t.hij("Duraci\xf3n: ",o.MinToHours(o.movie.runtime),""),t.xp6(6),t.Q6J("disabled",1==o.days),t.xp6(2),t.Q6J("ngModel",o.days)("ngModelOptions",t.DdM(8,q)),t.xp6(1),t.Q6J("disabled",30==o.days))},directives:[m.lW,l.ZT,v.Hw,U.d,l.xY,d.wV,d.Fj,d.JJ,d.On,l.H8],styles:["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.modal[_ngcontent-%COMP%]{position:relative}.btn-close[_ngcontent-%COMP%]{position:absolute;top:-24px;right:-24px;min-width:24px;height:24px;padding:0;line-height:0px}.mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:20px 0}.mat-dialog-actions[_ngcontent-%COMP%]{justify-content:center}.btn-add[_ngcontent-%COMP%]{width:100%}.modal-header[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}.modal-image[_ngcontent-%COMP%]{width:50px}.modal-details[_ngcontent-%COMP%]{margin-left:10px;display:flex;flex-direction:column}.text-detail[_ngcontent-%COMP%]{font-size:13px}.counter[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.input-days[_ngcontent-%COMP%]{width:36px;height:23px;padding:0;text-align:center;border:1px solid rgb(243,233,233);border-radius:0;outline:none;box-sizing:border-box}.btn-decrease[_ngcontent-%COMP%], .btn-increase[_ngcontent-%COMP%]{min-width:23px!important;height:23px!important;font-size:12px;padding:0;border-radius:0;line-height:0}.btn-decrease[_ngcontent-%COMP%]{border-top-left-radius:5px;border-bottom-left-radius:5px}.btn-increase[_ngcontent-%COMP%]{border-top-right-radius:5px;border-bottom-right-radius:5px}@media (min-width: 600px){.mat-dialog-content[_ngcontent-%COMP%]{width:450px;flex-direction:row;justify-content:space-around}.btn-add[_ngcontent-%COMP%]{width:50%}}"]}),e})();function D(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",6),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return r.openModalRentalTime(r.movie)}),t._uU(2),t.qZA(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(2),t.hij(" $",n.movie.price," Alquilar ")}}function z(e,a){1&e&&(t.ynx(0),t.TgZ(1,"div",7),t.TgZ(2,"p"),t._uU(3,"Ya has agregado esta pel\xedcula"),t.qZA(),t.qZA(),t.BQk())}let I=(()=>{class e{constructor(n){this.dialog=n}ngOnInit(){}openModalTrailer(n){const o=new l.vA;o.disableClose=!0,o.data=n,this.dialog.open(T,o)}openModalRentalTime(n){const o=new l.vA;o.disableClose=!0,o.data=n,this.dialog.open(F,o)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-buttons-function"]],inputs:{movie:"movie",addedMovie:"addedMovie"},decls:17,vars:2,consts:[[1,"buttons-container"],[1,"text"],["mat-raised-button","",1,"btn-trailer",3,"click"],[4,"ngIf"],["mat-raised-button","","routerLink","/public/movies"],["mat-raised-button","","color","primary","routerLink","/public/cart"],["mat-raised-button","","color","accent",3,"click"],[1,"product-add"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"p",1),t._uU(2,"Renta o compra las mejores pel\xedculas."),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return o.openModalTrailer(o.movie)}),t.TgZ(4,"mat-icon"),t._uU(5,"smart_display"),t.qZA(),t._uU(6," Ver trailer "),t.qZA(),t.YNc(7,D,3,1,"ng-container",3),t.YNc(8,z,4,0,"ng-container",3),t.TgZ(9,"button",4),t.TgZ(10,"mat-icon"),t._uU(11,"add_shopping_cart"),t.qZA(),t._uU(12," Seguir comprando "),t.qZA(),t.TgZ(13,"button",5),t.TgZ(14,"mat-icon"),t._uU(15,"shopping_cart"),t.qZA(),t._uU(16," Ir al carrito "),t.qZA(),t.qZA()),2&n&&(t.xp6(7),t.Q6J("ngIf",!o.addedMovie),t.xp6(1),t.Q6J("ngIf",o.addedMovie))},directives:[m.lW,v.Hw,p.O5,c.rH],styles:[".buttons-container[_ngcontent-%COMP%]{width:100%;padding:40px;margin-bottom:20px;box-sizing:border-box;background-color:#212121;border-radius:10px}button[_ngcontent-%COMP%]{width:100%;height:50px;margin-bottom:10px}.btn-trailer[_ngcontent-%COMP%]{background-color:#c4302b;color:#fff}.text[_ngcontent-%COMP%]{color:#fff;font-size:16px;margin-bottom:15px}.product-add[_ngcontent-%COMP%]{width:100%;height:50px;margin-bottom:10px;background-color:#212121;border:2px solid #fff;border-radius:5px;display:flex;justify-content:center;align-items:center}.product-add[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin-bottom:0;color:#fff}"]}),e})();var J=i(3372);function B(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t._UZ(3,"div",4),t.TgZ(4,"div",5),t.TgZ(5,"div",6),t.TgZ(6,"div",7),t._UZ(7,"img",8),t.qZA(),t.TgZ(8,"div",9),t.TgZ(9,"h1"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA(),t.TgZ(15,"p"),t._uU(16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",10),t._UZ(18,"hr"),t.TgZ(19,"h2"),t._uU(20,"Sinopsis"),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(23,"app-buttons-function",11),t.TgZ(24,"div",12),t.TgZ(25,"p"),t._uU(26,"Director: "),t.TgZ(27,"span"),t._uU(28),t.qZA(),t.qZA(),t.TgZ(29,"p"),t._uU(30,"Actores: "),t.TgZ(31,"span"),t._uU(32),t.qZA(),t.qZA(),t.TgZ(33,"p"),t._uU(34,"Idioma: "),t.TgZ(35,"span"),t._uU(36),t.qZA(),t.qZA(),t.TgZ(37,"p"),t._uU(38,"Pa\xeds: "),t.TgZ(39,"span"),t._uU(40),t.qZA(),t.qZA(),t.TgZ(41,"p"),t._uU(42,"Premios: "),t.TgZ(43,"span"),t._uU(44),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(3),t.Jzz("background-image: linear-gradient(rgba(41, 128, 185, 0), rgb(0, 0, 0)), url(",n.movie.bannerimg,");"),t.xp6(4),t.s9C("src",n.movie.posterimg,t.LSH),t.xp6(3),t.Oqu(n.movie.title),t.xp6(2),t.Oqu(n.movie.genre),t.xp6(2),t.hij("Clasificaci\xf3n: ",n.movie.rated,""),t.xp6(2),t.lnq("Duraci\xf3n: ",n.hours," hr",n.hours>1?"s":null," ",n.mins," min"),t.xp6(6),t.Oqu(n.movie.plot),t.xp6(1),t.Q6J("movie",n.movie)("addedMovie",n.addedMovie),t.xp6(5),t.Oqu(n.movie.director),t.xp6(4),t.Oqu(n.movie.actors),t.xp6(4),t.Oqu(n.movie.language),t.xp6(4),t.hij(" ",n.movie.country,""),t.xp6(4),t.Oqu(n.movie.awards)}}function Y(e,a){1&e&&t._UZ(0,"app-loading-spinner")}const k=[{path:"",component:(()=>{class e{constructor(n){this.store=n,this.addedMovie=!1,this.hours=0,this.mins=0,this.subscription=new M.w}ngOnInit(){this.getMovie()}ngOnDestroy(){this.subscription.unsubscribe()}getMovie(){this.subscription.add(this.store.select(b.Pg).subscribe(n=>{n&&(this.movie=n,this.isMovieInCart(this.movie))}))}isMovieInCart(n){this.subscription.add(this.store.select(Z.dv).subscribe(o=>{1==o.filter(s=>s.id==n._id).length&&(this.addedMovie=!0)}))}MinToHour(n){this.hours=Math.floor(n/60),this.mins=n%60}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-detail-movie-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["ProgressSpinner",""],["fxLayout","row wrap","fxLayoutAlign.gt-xs","space-between",1,"detail-movie-container"],["fxFlex","100","fxFlex.gt-sm","59",1,"card"],[1,"image-banner"],[1,"card-content"],[1,"card-header"],[1,"poster"],[3,"src"],[1,"principal-detail-movie"],[1,"card-body"],["fxFlex","100","fxFlex.gt-xs","49","fxFlex.gt-sm","40","fxLayoutAlign","center",3,"movie","addedMovie"],["fxFlex","100","fxFlex.gt-xs","49","fxFlex.gt-sm","59",1,"extra-detail"]],template:function(n,o){if(1&n&&(t.YNc(0,B,45,18,"ng-container",0),t.YNc(1,Y,1,0,"ng-template",null,1,t.W1O)),2&n){const r=t.MAs(2);t.Q6J("ngIf",o.movie)("ngIfElse",r)}},directives:[p.O5,g.xw,g.Wh,g.yH,I,J.g],styles:["hr[_ngcontent-%COMP%]{color:#fff;height:1px;border-top-width:0px;border-right-width:0px;border-left-width:0px;margin:16px 0;opacity:25%}.spinner[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 164px);display:flex;align-items:center;justify-content:center}.detail-movie-container[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]{width:100%;background-color:#212121;border-radius:5px;margin-bottom:20px}.image-banner[_ngcontent-%COMP%]{padding:0 0 55%;background-size:100%;background-repeat:no-repeat;background-color:#181821;border-radius:5px}.card-content[_ngcontent-%COMP%]{width:100%}.card-header[_ngcontent-%COMP%]{width:100%;padding:0 10px;margin-bottom:10px}.poster[_ngcontent-%COMP%]{width:90px;height:130px;margin-top:-10px;position:relative;z-index:10;float:left}.poster[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;border-radius:7px}.principal-detail-movie[_ngcontent-%COMP%]{width:calc(100% - 110px);margin-left:110px;margin-top:-50px}.principal-detail-movie[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{color:#fff;font-size:30px;font-weight:300;margin-bottom:20px;text-transform:capitalize;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.principal-detail-movie[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:12px;margin-bottom:2px;color:#bbb}.card-body[_ngcontent-%COMP%]{padding:0 10px 15px;color:#fff}.extra-detail[_ngcontent-%COMP%]{width:100%;margin-bottom:20px;padding:10px;background-color:#212121;color:#fff;border-radius:5px}.extra-detail[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-weight:500}.extra-detail[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-weight:300;font-style:italic}@media (min-width: 600px){.image-banner[_ngcontent-%COMP%]{padding:0 0 30%}.card-header[_ngcontent-%COMP%]{margin-bottom:35px}.poster[_ngcontent-%COMP%]{width:120px;height:180px}.principal-detail-movie[_ngcontent-%COMP%]{width:calc(100% - 140px);margin-left:140px}.principal-detail-movie[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin-bottom:40px}.principal-detail-movie[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:4px}}"]}),e})()}];let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(k)],c.Bz]}),e})();var j=i(9673),N=i(4466),Q=i(5887),H=i(2718);let S=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,R,j.q,N.m,d.u5,x.o9,Q.sQ.forFeature([H.i])]]}),e})()}}]);