(() => {
  const canvas = document.querySelector("#game"), ctx = canvas.getContext("2d");
  const W=canvas.width,H=canvas.height, overlay=document.querySelector("#overlay");
  const levelLabel=document.querySelector("#level"),scoreLabel=document.querySelector("#score");
  const title=document.querySelector("#overlay-title"),text=document.querySelector("#overlay-text"),kicker=document.querySelector("#overlay-kicker"),startBtn=document.querySelector("#start-btn");
  const levelConfig=[{score:0,interval:40,speed:2.4,gap:178},{score:5,interval:30,speed:2.8,gap:166},{score:20,interval:25,speed:3.2,gap:154},{score:40,interval:20,speed:3.6,gap:145}];
  let bird, pipes, score, level, frame, state, raf, lastTime=0, accumulator=0;
  function reset(){bird={x:95,y:260,vy:0,r:13,rotation:0};pipes=[];score=0;level=1;frame=0;accumulator=0;state="ready";updateHud();draw()}
  function currentConfig(){return levelConfig[level-1]}
  function updateHud(){levelLabel.textContent=`LEVEL ${level}`;scoreLabel.textContent=`SCORE ${score}`}
  function start(){if(state==="won"||state==="over")reset();state="playing";overlay.classList.add("hidden");lastTime=performance.now();cancelAnimationFrame(raf);raf=requestAnimationFrame(loop)}
  function flap(){if(state==="ready"){start();bird.vy=-4.8;return}if(state==="playing")bird.vy=-4.8}
  function spawnPipe(){const gap=currentConfig().gap,top=65+Math.random()*(H-gap-170);pipes.push({x:W+10,top,bottom:top+gap,passed:false})}
  function setLevel(){let next=1;levelConfig.forEach((c,i)=>{if(score>=c.score)next=i+1});if(next!==level){level=next;updateHud()}}
  function endGame(won){state=won?"won":"over";cancelAnimationFrame(raf);overlay.classList.remove("hidden");kicker.textContent=won?"MISSION COMPLETE":"GAME OVER";title.textContent=won?"Bạn đã chiến thắng!":"Ôi, va chạm rồi!";text.textContent=won?"Bạn đã đạt 50 điểm. Chúc mừng!":`Bạn đạt ${score} điểm. Thử lại để vượt qua mốc tiếp theo nhé.`;startBtn.textContent=won?"CHƠI LẠI":"THỬ LẠI"}
  function update(dt){
    const cfg=currentConfig();frame+=dt;bird.vy+=0.23*dt;bird.y+=bird.vy*dt;bird.rotation=Math.min(.7,Math.max(-.5,bird.vy*.08));
    if(frame>=cfg.interval){spawnPipe();frame=0}
    pipes.forEach(p=>{p.x-=cfg.speed*dt;if(!p.passed&&p.x+58<bird.x){p.passed=true;score++;setLevel();updateHud()}});
    pipes=pipes.filter(p=>p.x>-70);
    if(bird.y-bird.r<0||bird.y+bird.r>H){endGame(false);return}
    for(const p of pipes){const withinX=bird.x+bird.r>p.x&&bird.x-bird.r<p.x+58;if(withinX&&(bird.y-bird.r<p.top||bird.y+bird.r>p.bottom)){endGame(false);return}}
    if(score>=50)endGame(true);
  }
  function draw(){
    const sky=ctx.createLinearGradient(0,0,0,H);sky.addColorStop(0,"#b9e2e2");sky.addColorStop(1,"#e5f0d5");ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
    // distant hills
    ctx.fillStyle="#c9e1b6";ctx.beginPath();ctx.moveTo(0,450);ctx.quadraticCurveTo(100,390,205,455);ctx.quadraticCurveTo(320,380,420,445);ctx.lineTo(420,600);ctx.lineTo(0,600);ctx.fill();
    ctx.fillStyle="#9dc58a";ctx.fillRect(0,H-28,W,28);
    pipes.forEach(p=>{ctx.fillStyle="#4f9c69";ctx.fillRect(p.x,0,58,p.top);ctx.fillRect(p.x,p.bottom,58,H-p.bottom-28);ctx.fillStyle="#77bd7e";ctx.fillRect(p.x-5,p.top-17,68,17);ctx.fillRect(p.x-5,p.bottom,68,17);ctx.fillStyle="#3d8055";ctx.fillRect(p.x+8,0,7,p.top);ctx.fillRect(p.x+8,p.bottom,7,H-p.bottom-28)});
    // custom bird: golden round bird with leaf wing
    ctx.save();ctx.translate(bird.x,bird.y);ctx.rotate(bird.rotation);ctx.fillStyle="#f2b84b";ctx.beginPath();ctx.ellipse(0,0,17,13,0,0,Math.PI*2);ctx.fill();ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(8,-5,5,0,Math.PI*2);ctx.fill();ctx.fillStyle="#263b2c";ctx.beginPath();ctx.arc(10,-5,2,0,Math.PI*2);ctx.fill();ctx.fillStyle="#e77d48";ctx.beginPath();ctx.moveTo(14,1);ctx.lineTo(25,5);ctx.lineTo(14,8);ctx.fill();ctx.fillStyle="#8bbd62";ctx.beginPath();ctx.ellipse(-5,3,7,4,-.5,0,Math.PI*2);ctx.fill();ctx.restore();
    // little clouds
    ctx.fillStyle="#ffffffaa";[[70,90],[300,145],[225,55]].forEach(([x,y])=>{ctx.beginPath();ctx.arc(x,y,15,0,Math.PI*2);ctx.arc(x+16,y+3,12,0,Math.PI*2);ctx.arc(x-13,y+5,10,0,Math.PI*2);ctx.fill()});
  }
  function loop(now){if(state!=="playing")return;const delta=Math.min((now-lastTime)/16.67,2);lastTime=now;accumulator+=delta;while(accumulator>=1){update(1);accumulator--}draw();if(state==="playing")raf=requestAnimationFrame(loop)}
  function showPause(){if(state!=="playing")return;state="paused";cancelAnimationFrame(raf);overlay.classList.remove("hidden");kicker.textContent="PAUSED";title.textContent="Tạm dừng";text.textContent="Nhấn P hoặc nút bên dưới để tiếp tục.";startBtn.textContent="TIẾP TỤC"}
  function resume(){if(state!=="paused")return;state="playing";overlay.classList.add("hidden");lastTime=performance.now();raf=requestAnimationFrame(loop)}
  startBtn.addEventListener("click",()=>state==="paused"?resume():start());
  document.addEventListener("keydown",e=>{if(e.code==="ArrowDown"){e.preventDefault();if(state==="paused")return;flap()}if(e.code==="KeyP"){e.preventDefault();state==="paused"?resume():showPause()}if(e.code==="KeyR"){e.preventDefault();reset();overlay.classList.remove("hidden");kicker.textContent="READY?";title.textContent="Sẵn sàng bay?";text.textContent="Nhấn phím ↓ để chim bay lên. Né các chướng ngại vật và đạt 50 điểm để chiến thắng.";startBtn.textContent="BẮT ĐẦU CHƠI"}});
  reset();
})();