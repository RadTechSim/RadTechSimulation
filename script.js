const members = [
  {
    name: "นางสาวณัฐณิชาย์ แสงเพ็ชรรัตน์",
    role: "ผู้จัดทำโครงการ",
    image: "member1.jpg"
  },
  {
    name: "นางสาวพรลภัส สายเสมา",
    role: "ผู้จัดทำโครงการ",
    image: "member2.jpg"
  },
  {
    name: "นางสาวศรีอัปสร รัตฉวี",
    role: "ผู้จัดทำโครงการ",
    image: "member3.jpg"
  },
  {
    name: "ผู้ช่วยศาสตราจารย์ ดร.ฐิติพงศ์ แก้วเหล็ก",
    role: "อาจารย์ที่ปรึกษา",
    image: "advisor.jpg"
  }
];


let currentMember = 0;
let slideTimer = null;


/* =========================
   สร้างจุดด้านล่าง
========================= */

function renderDots() {

  const dots = document.getElementById("dots");

  if (!dots) return;

  dots.innerHTML = members.map((_, i) => `
    <span
      class="dot ${i === currentMember ? "active" : ""}"
      onclick="showMember(${i}); restartSlider()">
    </span>
  `).join("");
}


/* =========================
   แสดงข้อมูลผู้จัดทำ
========================= */

function showMember(index) {

  currentMember =
    (index + members.length) % members.length;

  const member = members[currentMember];

  const img =
    document.getElementById("memberImage");

  const name =
    document.getElementById("memberName");

  /*
     รองรับทั้ง memberRole และ memberLabel
     เผื่อ HTML ใช้ชื่อใดชื่อหนึ่ง
  */
  const role =
    document.getElementById("memberRole") ||
    document.getElementById("memberLabel");

  const number =
    document.getElementById("memberNumber");


  /* เปลี่ยนรูป */
  if (img) {
    img.src = member.image;
    img.alt = member.name;
  }


  /* เปลี่ยนชื่อ */
  if (name) {
    name.textContent = member.name;
  }


  /* เปลี่ยนตำแหน่ง */
  if (role) {
    role.textContent = member.role;
  }


  /* ถ้ามีเลขสมาชิก */
  if (number) {
    number.textContent =
      `${String(currentMember + 1).padStart(2, "0")} / ${String(members.length).padStart(2, "0")}`;
  }


  /* อัปเดตจุด */
  renderDots();
}


/* =========================
   ปุ่มก่อนหน้า / ถัดไป
========================= */

function changeMember(direction) {

  showMember(currentMember + direction);

  restartSlider();
}


/* =========================
   สไลด์อัตโนมัติทุก 5 วินาที
========================= */

function restartSlider() {

  /* ล้าง timer เก่าก่อน */
  if (slideTimer !== null) {
    clearInterval(slideTimer);
  }


  /* เริ่ม timer ใหม่ */
  slideTimer = setInterval(function () {

    showMember(currentMember + 1);

  }, 5000);
}


/* =========================
   เมนู ☰ สำหรับ iPad / มือถือ
========================= */

function toggleMenu() {

  const nav =
    document.getElementById("mainNav");

  if (!nav) return;

  nav.classList.toggle("open");
}


/* =========================
   กดเมนูแล้วปิดเมนู
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const nav =
    document.getElementById("mainNav");

  if (nav) {

    const links = nav.querySelectorAll("a");

    links.forEach(function (link) {

      link.addEventListener("click", function () {

        nav.classList.remove("open");

      });

    });

  }


  /* แสดงคนแรก */
  showMember(0);

  /* เริ่มเปลี่ยนทุก 5 วินาที */
  restartSlider();

});


/* =========================
   ปุ่มเข้าเกม
========================= */

function startGame() {

  window.open(
    "https://radtechsimulation.itch.io/radtech-simulation",
    "_blank"
  );

}
