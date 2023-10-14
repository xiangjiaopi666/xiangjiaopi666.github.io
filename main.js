/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */

$(document).ready(
	function(){
		$(".left>img").click(
			function (){
				/*公告栏最小化*/
				$(".BulletinBoard").animate({height:0});
				$(".BulletinBoard").animate({width:0});
				/*公告栏最小化*/
				var skillurl = '<img src= "img/skill/c_' + $(this).attr("id") + '.png" alt=\'\'></img>';
				$('.center_top').html(skillurl);
				var bodyurl0 = '<img src= "img/body/'+$(this).attr("id")+'/senjafuda_'+ $(this).attr("id")+'.png" alt=\'\' style="position: absolute;">';
				var bodyurl00 = '<img src= "img/skill/cname_'+$(this).attr("id")+'_def.png" alt=\'\' style="position: absolute;" onerror="this.style.display=\'none\'">';
				var bodyurl01 = '<img src= "img/body/'+$(this).attr("id")+'/sdi_'+ $(this).attr("id")+'.png" alt=\'\' style="left:70px;top:60px;position: absolute;" >';
				var bodyurl1 = '<img src= "img/body/'+$(this).attr("id")+'/b_'+ $(this).attr("id")+'_def_body.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl2 = '<img src= "img/body/'+$(this).attr("id")+'/b_'+ $(this).attr("id")+'_def_dbody.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl3 = '<img src= "img/body/'+$(this).attr("id")+'/s_'+ $(this).attr("id")+'_def_body.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl4 = '<img src= "img/body/'+$(this).attr("id")+'/s_'+ $(this).attr("id")+'_bath_body.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl5 = '<img src= "img/body/'+$(this).attr("id")+'/s_'+ $(this).attr("id")+'_pa_body.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl6 = '<img src= "img/body/'+$(this).attr("id")+'/s_'+ $(this).attr("id")+'_aw_body.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl7 = '<img src= "img/body/'+$(this).attr("id")+'/b_'+ $(this).attr("id")+'_aw_body.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl8 = '<img src= "img/body/'+$(this).attr("id")+'/b_'+ $(this).attr("id")+'_aw_dbody.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl9 = '<img src= "img/body/'+$(this).attr("id")+'/s_'+ $(this).attr("id")+'_ev_body.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl10 = '<img src= "img/body/'+$(this).attr("id")+'/s_'+ $(this).attr("id")+'_ny_body.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl11 = '<img src= "img/body/'+$(this).attr("id")+'/s_'+ $(this).attr("id")+'_ss_body.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl12 = '<img src= "img/body/'+$(this).attr("id")+'/b_'+ $(this).attr("id")+'_ss_body.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl13 = '<img src= "img/body/'+$(this).attr("id")+'/b_'+ $(this).attr("id")+'_ss_dbody.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl14 = '<img src= "img/body/'+$(this).attr("id")+'/s_'+ $(this).attr("id")+'_wa_body.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl15 = '<img src= "img/body/'+$(this).attr("id")+'/s_'+ $(this).attr("id")+'_swim_body.png" alt=\'\' onerror="this.style.display=\'none\'"/>';
				var bodyurl96 = '<img src= "img/faceall/'+$(this).attr("id")+'/y_'+ $(this).attr("id")+'_face_00.png" alt=\'\' width=\'341px\' onerror="this.style.display=\'none\'"/>';
				var bodyurl97 = '<img src= "img/faceall/'+$(this).attr("id")+'/y_'+ $(this).attr("id")+'_face_01.png" alt=\'\' width=\'341px\' onerror="this.style.display=\'none\'"/>';
				var bodyurl98 = '<img src= "img/faceall/'+$(this).attr("id")+'/y_'+ $(this).attr("id")+'_face_02.png" alt=\'\' width=\'341px\' onerror="this.style.display=\'none\'"/>';
				var bodyurl99 = '<img src= "img/body/'+$(this).attr("id")+'/y_'+ $(this).attr("id")+'_body.png" alt=\'\'>'; /*永远最后*/
				/*https://tukitama.com/tamacolle/resources/s_bic_ss_body.png*/
				var bodyurl=bodyurl0+bodyurl00+bodyurl15+bodyurl14+bodyurl01+bodyurl11+bodyurl12+bodyurl13+bodyurl10+bodyurl1+bodyurl2+bodyurl3+bodyurl4+bodyurl5+bodyurl6+bodyurl7+bodyurl8+bodyurl9+bodyurl96+bodyurl97+bodyurl98+bodyurl99;
				$('.center_down').html(bodyurl);
				var faceurl = '';
				var facebathurl = '';
				var faceaw ='';
				var faceall = '';
				for (i = 0;i <20;i++) {
					if(i<10){
						i = '0' + i
					}
					var obj1 = 'faceurl'+i;
					var obj2 = 'facebathurl'+i;
					var obj3 = 'faceaw'+i;
					obj1='<img src= "img/faceall/'+$(this).attr("id")+'/s_'+ $(this).attr("id")+'_def_face_'+i+'.png" alt=\'\' class="faceall" height=\'128px\' onerror="this.style.display=\'none\'"/>';
					/*obj2='<img src= "img/faceall/'+$(this).attr("id")+'/y_'+ $(this).attr("id")+'_face_'+i+'.png" alt=\'\' class="faceall" width=\'128px\' height=\'128px\'>';
					obj3='<img src= "img/faceall/'+$(this).attr("id")+'/s_'+ $(this).attr("id")+'_aw_face_'+i+'.png" alt=\'\' class="faceall" width=\'128px\' height=\'128px\'>';*/
					faceurl = faceurl + obj1;
					/*facebathurl = facebathurl + obj2;
					faceaw = faceaw + obj3;*/
				}
				faceall = faceurl + facebathurl+faceaw;
				$('.right_top').html(faceall);
				var audiourl = '';
				var audiotranslate='';
				var k = 0;
				for (j = 0 ; j<200;j++) {
					if ($(this).attr("id")=='awt') {
						audiotranslate=awt_translate[j];
					} else if ($(this).attr("id")=='bic'){
						audiotranslate=bic_translate[j];
					} else if ($(this).attr("id")=='a000'){
						audiotranslate=a000_translate[j];
					} else if ($(this).attr("id")=='a002'){
						audiotranslate=a002_translate[j];
					} else if ($(this).attr("id")=='a005'){
						audiotranslate=a005_translate[j];
					} else if ($(this).attr("id")=='a006'){
						audiotranslate=a006_translate[j];
					} else if ($(this).attr("id")=='s003'){
						audiotranslate=s003_translate[j];
					} else if ($(this).attr("id")=='bin'){
						audiotranslate=bin_translate[j];
					} else if ($(this).attr("id")=='bun'){
						audiotranslate=bun_translate[j];	
					} else if ($(this).attr("id")=='ckg'){
						audiotranslate=ckg_translate[j];	
					} else if ($(this).attr("id")=='ecg'){
						audiotranslate=ecg_translate[j];
					} else if ($(this).attr("id")=='har'){
						audiotranslate=har_translate[j];
					} else if ($(this).attr("id")=='hit'){
						audiotranslate=hit_translate[j];
					} else if ($(this).attr("id")=='hiz'){
						audiotranslate=hiz_translate[j];
					} else if ($(this).attr("id")=='iga'){
						audiotranslate=iga_translate[j];
					} else if ($(this).attr("id")=='ina'){
						audiotranslate=ina_translate[j];
					} else if ($(this).attr("id")=='iwm'){
						audiotranslate=iwm_translate[j];
					} else if ($(this).attr("id")=='iyo'){
						audiotranslate=iyo_translate[j];
					} else if ($(this).attr("id")=='kag'){
						audiotranslate=kag_translate[k];
					} else if ($(this).attr("id")=='kai'){
						audiotranslate=kai_translate[j];
					} else if ($(this).attr("id")=='kaw'){
						audiotranslate=kaw_translate[j];
					} else if ($(this).attr("id")=='kaz'){
						audiotranslate=kaz_translate[j];
					} else if ($(this).attr("id")=='kii'){
						audiotranslate=kii_translate[j];	
					} else if ($(this).attr("id")=='mik'){
						audiotranslate=mik_translate[j];
					} else if ($(this).attr("id")=='mus'){
						audiotranslate=mus_translate[j];
					} else if ($(this).attr("id")=='oki'){
						audiotranslate=oki_translate[j];
					} else if ($(this).attr("id")=='osu'){
						audiotranslate=osu_translate[j];
					} else if ($(this).attr("id")=='oum'){
						audiotranslate=oum_translate[j];
					} else if ($(this).attr("id")=='sag'){
						audiotranslate=sag_translate[j];
					} else if ($(this).attr("id")=='san'){
						audiotranslate=san_translate[j];
					} else if ($(this).attr("id")=='sim'){
						audiotranslate=sim_translate[j];
					} else if ($(this).attr("id")=='sin'){
						audiotranslate=sin_translate[j];
					} else if ($(this).attr("id")=='taj'){
						audiotranslate=taj_translate[j];
					} else if ($(this).attr("id")=='tnb'){
						audiotranslate=tnb_translate[j];
					} else if ($(this).attr("id")=='tos'){
						audiotranslate=tos_translate[j];
					} else if ($(this).attr("id")=='wak'){
						audiotranslate=wak_translate[j];
					} else if ($(this).attr("id")=='ymt'){
						audiotranslate=ymt_translate[j];
					} else if ($(this).attr("id")=='yzm'){
						audiotranslate=yzm_translate[j];
					}
					if (j<10) {
						j = '00' + j
					} else if (j<100){
						j = '0' +j
					} else{
						j = j
					}
					var xyz = 'audio' + j;
					xyz = '<div class="audio_father"><h3>'+j+'</h3><audio src="https://tukitama.com/tamacolle/resources/v_'+$(this).attr("id")+'_'+j+'.mp3" controls controlsList="nodownload noplaybackrate"></audio><div class="translate"><h4>'+ audiotranslate +'</h4></div></div>';
					audiourl = audiourl + xyz;
					k++;
				}
				$('.right_down').html(audiourl);
				
			}
			
		)
	}
)