function openTab(tabId, btn){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  btn.classList.add("active");
}

function askAI(){
  const crop = document.getElementById("crop").value;
  const q = document.getElementById("question").value;
  const answers = {
    water:`${crop} 目前水分 62%，濕度 68%。建議少量補水 30 秒，並觀察 2 小時後濕度變化。`,
    light:`目前光照 420 lux，若種植葉菜可維持，若為冰花建議增加補光並避免中午高溫直曬。`,
    weather:`Open Data 顯示未來可能有午後降雨，建議降低灌溉頻率，保持通風避免葉面潮濕。`,
    harvest:`依目前環境與生長密度推估，葉菜約 7 至 10 天可採收，冰花需視葉片厚度與光照調整。`,
    disease:`若葉片出現黃斑，請先檢查水分、根部通氣與光照，必要時拍照上傳讓 AI 做影像判讀。`
  };
  document.getElementById("answer").textContent = answers[q];
}

function refreshCamera(){
  const msgs = [
    "AI 分析完成：葉色正常，無明顯缺水，建議維持目前灌溉設定。",
    "AI 分析完成：上層植株較密，建議修剪部分葉片，增加通風。",
    "AI 分析完成：光照略高，建議下午啟動遮光或調整設備位置。",
    "AI 分析完成：作物狀態良好，可持續記錄並準備下次採收。"
  ];
  document.getElementById("cameraMsg").textContent = msgs[Math.floor(Math.random()*msgs.length)];
}

function toggleDevice(btn){
  if(btn.classList.contains("on")){
    btn.classList.remove("on");
    btn.textContent = btn.textContent.replace("開啟", "關閉");
  }else{
    btn.classList.add("on");
    btn.textContent = btn.textContent.replace("關閉", "開啟");
  }
}

setInterval(() => {
  const temp = (25 + Math.random()*3).toFixed(1);
  const hum = Math.floor(62 + Math.random()*10);
  const lux = Math.floor(380 + Math.random()*90);
  const soil = Math.floor(58 + Math.random()*10);
  const t = document.getElementById("temp");
  if(!t) return;
  document.getElementById("temp").textContent = temp + "°C";
  document.getElementById("hum").textContent = hum + "%";
  document.getElementById("lux").textContent = lux + " lux";
  document.getElementById("soil").textContent = soil + "%";
}, 2800);