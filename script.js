/* ==========================
LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 800);

});

/* ==========================
STICKY NAVBAR
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,8,22,.95)";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(10,15,30,.5)";

        header.style.boxShadow = "none";

    }

});

/* ==========================
SCROLL PROGRESS
========================== */

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});

/* ==========================
FAQ
========================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
/* ==========================
SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================
COUNTER ANIMATION
========================== */

const counters=document.querySelectorAll(".stat-box h2");

const runCounter=(counter)=>{

    const text=counter.innerText.replace("+","");

    const target=parseInt(text);

    let count=0;

    const speed=Math.max(20,Math.floor(target/80));

    const update=()=>{

        count+=speed;

        if(count<target){

            counter.innerText=count+"+";

            requestAnimationFrame(update);

        }else{

            counter.innerText=target+"+";

        }

    }

    update();

}

const counterObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            runCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

});

counters.forEach(counter=>counterObserver.observe(counter));

/* ==========================
SCROLL REVEAL
========================== */

const revealElements=document.querySelectorAll(

".feature-card,.course-card,.blog-card,.testimonial-card,.stat-box,.faq-item"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all .8s ease";

revealObserver.observe(el);

});

/* ==========================
THEME BUTTON (Demo)
========================== */

const themeBtn=document.querySelector(".theme-btn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

});
/* ==========================
MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* ==========================
BACK TO TOP BUTTON
========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
right:25px;
bottom:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#3B82F6;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 10px 25px rgba(0,0,0,.3);
transition:.3s;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================
ACTIVE NAVIGATION
========================== */

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;
        const height=section.offsetHeight;

        if(window.scrollY>=top){

            current=section.getAttribute("class");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ==========================
CONSOLE MESSAGE
========================== */

console.log("🚀 Sandy Tech Academy Loaded Successfully!");
