const $=id=>document.getElementById(id);
function show(id,bad,label,p,why){
  const o=$(id);o.style.display='block';
  o.innerHTML='<b class="'+(bad?'bad':'ok')+'">'+label+'</b><div class="bar"><i style="width:'+Math.round(p*100)+'%"></i></div>'+
  '<div class="note">Estimated risk score: '+Math.round(p*100)+'%</div><div class="note">'+why+'</div>';
}
function pd(){
  const pr=$('d_pr').value,sv=$('d_sv').value,du=+$('d_du').value,sp=+$('d_sp').value,dp=+$('d_dp').value,sb=+$('d_sb').value,db=+$('d_db').value,f=[];let s=.08;
  const rate=(sp+dp)/Math.max(du,.001);
  if(rate>2000){s+=.3;f.push('very high packet rate');}
  if(sp>0&&dp===0){s+=.25;f.push('no response packets');}
  if(sb/Math.max(db,1)>20){s+=.2;f.push('highly asymmetric byte flow');}
  if(pr==='icmp'&&sp>100){s+=.2;f.push('ICMP flood pattern');}
  if(sv.startsWith('ssh')&&sp>200){s+=.2;f.push('repeated SSH attempts');}
  s=Math.min(s,.97);
  show('d_o',s>=.5,s>=.5?'Malicious Traffic':'Normal Traffic',s,f.length?'Signals: '+f.join('; ')+'.':'Traffic looks consistent with normal behaviour.');
}
