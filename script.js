const members = [
  {name:"นางสาวณัฐณิชาย์ แสงเพ็ชรรัตน์", role:"ผู้จัดทำโครงการ", label:"ผู้จัดทำ", image:"assets/member1.jpg"},
  {name:"นางสาวพรลภัส สายเสมา", role:"ผู้จัดทำโครงการ", label:"ผู้จัดทำ", image:"assets/member2.jpg"},
  {name:"นางสาวศรีอัปสร รัตฉวี", role:"ผู้จัดทำโครงการ", label:"ผู้จัดทำ", image:"assets/member3.jpg"},
  {name:"ผู้ช่วยศาสตราจารย์ ดร.ฐิติพงศ์ แก้วเหล็ก", role:"อาจารย์ที่ปรึกษา", label:"อาจารย์ที่ปรึกษา", image:"assets/advisor.jpg"}
];

let currentMember=0;
let slideTimer;

function renderDots(){
  document.getElementById("dots").innerHTML=members.map((_,i)=>
    `<span class="dot ${i===currentMember?"active":""}" onclick="showMember(${i})"></span>`
  ).join("");
}

function showMember(index){
  currentMember=(index+members.length)%members.length;
  const m=members[currentMember];
  const img=document.getElementById("memberImage");
  img.src=m.image;
  img.alt=m.name;
  document.getElementById("memberName").textContent=m.name;
  document.getElementById("memberRole").textContent=m.role;
  document.getElementById("memberLabel").textContent=m.label;
  document.getElementById("memberNumber").textContent=
    `${String(currentMember+1).padStart(2,"0")} / ${String(members.length).padStart(2,"0")}`;
  renderDots();
}

function changeMember(direction){
  showMember(currentMember+direction);
  restartSlider();
}

function restartSlider(){
  clearInterval(slideTimer);
  slideTimer=setInterval(()=>showMember(currentMember+1),5000);
}

function toggleMenu(){
  document.getElementById("mainNav").classList.toggle("open");
}

function startGame(){
  window.open("https://radtechsimulation.itch.io/radtech-simulation", "_blank", "noopener,noreferrer");
}

showMember(0);
restartSlider();
