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


/* =========================================
   แสดงจุดด้านล่าง
========================================= */

function renderDots() {

  const dots = document.getElementById("dots");

  if (!dots) return;

  dots.innerHTML = "";

  members.forEach((member, index) => {

    const dot = document.createElement("span");

    dot.className =
      index === currentMember
        ? "dot active"
        : "dot";

    dot.addEventListener("click", function () {

      showMember(index);
      restartSlider();

    });

    dots.appendChild(dot);

  });
}


/* =========================================
   แสดงข้อมูลสมาชิก
========================================= */

function showMember(index) {

  currentMember =
    (index + members.length) % members.length;

  const member = members[currentMember];


  const img =
    document.getElementById("memberImage");

  const name =
    document.getElementById("memberName");

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


  /* เปลี่ยนเลข */

  if (number) {

    number.textContent =
      `${String(currentMember + 1).padStart(2, "0")} / ${String(members.length).padStart(2, "0")}`;

  }


  /* เปลี่ยนจุด */

  renderDots();


  /* เช็กใน Console ว่ากำลังเปลี่ยนจริง */

  console.log(
    "เปลี่ยนเป็นคนที่:",
    currentMember + 1,
    member.name
  );

}


/* =========================================
   ปุ่มซ้าย / ขวา
========================================= */

function changeMember(direction) {

  showMember(currentMember + direction);

  restartSlider();

}


/* =========================================
   เปลี่ยนอัตโนมัติทุก 5 วินาที
========================================= */

function restartSlider() {

  clearInterval(slideTimer);

  slideTimer = setInterval(function () {

    currentMember++;

    if (currentMember >= members.length) {
      currentMember = 0;
    }

    showMember(currentMember);

  }, 2000);
}
/* =========================================
   เมนู ☰
========================================= */

function toggleMenu() {

  const nav =
    document.getElementById("mainNav");

  if (!nav) return;

  nav.classList.toggle("open");

}


/* =========================================
   เมื่อหน้าเว็บโหลดเสร็จ
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    console.log("RADTECH SIMULATION loaded");


    /* แสดงสมาชิกคนแรก */

    showMember(0);


    /* เริ่ม Auto Slide */

    restartSlider();


    /* ปิดเมนูเมื่อกดเมนู */

    const nav =
      document.getElementById("mainNav");

    if (nav) {

      const links =
        nav.querySelectorAll("a");

      links.forEach(function (link) {

        link.addEventListener(
          "click",
          function () {

            nav.classList.remove("open");

          }
        );

      });

    }

  }
);


/* =========================================
   ปุ่มเข้าเกม
========================================= */

function startGame() {

  window.open(
    "https://radtechsimulation.itch.io/radtech-simulation",
    "_blank"
  );

}
