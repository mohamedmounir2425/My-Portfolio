/*=============== SHOW SIDEBAR ===============*/

const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
    if (navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-sidebar')
        })
    }

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

/*=============== SKILLS TABS ===============*/
    const tabs = document.querySelectorAll('[data-target]');
    const tabContent = document.querySelectorAll('[data-content]')

        tabs.forEach(tab=>{
            tab.addEventListener("click",()=>{
           
                const target = document.querySelector(tab.dataset.target)
                
                tabContent.forEach((tabContents) => {
                  tabContents.addEventListener("click", () => {
                  
                  });
                  tabContents.classList.remove("skills__active");
                });

                target.classList.add('skills__active')
                
                tabs.forEach(tab => {
                    tab.classList.remove('skills__active')
                })

                tab.classList.add('skills__active')
            })
        })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l =>l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(I =>I.addEventListener('click',activeWork))

/*===== Work Popup =====*/
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('work__button')){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement)
    }
})
function togglePortfolioPopup(){
    document.querySelector('.portfolio__popup').classList.toggle('open')
}


document.querySelector('.portfolio__popup-close').addEventListener('click',()=>{togglePortfolioPopup();})

function portfolioItemDetails (portfolioItem){
    document.querySelector('.pp__thumbnail img').src =  portfolioItem.querySelector('.work__img').src;
    document.querySelector('.portfolio__popup-subtitle span').innerHTML =  portfolioItem.querySelector('.work__title').innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML =
      portfolioItem.querySelector(".portfolio__item-details").innerHTML;

}

/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll(".services__modal"),
      modelBtns = document.querySelectorAll(".services__button"),
      modalCloses = document.querySelectorAll(".services__modal-close")

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn,i)=>{
    modelBtn.addEventListener('click',()=>{
        modal(i)
    })
}) 

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*=============== SWIPER TESTIMONIAL ===============*/
 let swiper = new Swiper(".testimonials__container", {
   spaceBetween: 24,
   loop: true,
   grabCursor: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
     576: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 1,
       spaceBetween: 48,
     },
   },
 });

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll('.input');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == '') {
        parent.classList.remove('focus');
    }
}

inputs.forEach((input)=>{
    input.addEventListener('focus',focusFunc)
    input.addEventListener('blur',blurFunc)
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections = document.querySelectorAll('section[id]')
    
    window.addEventListener('scroll',navHighlighter)

    function navHighlighter() {
        
      let scrollY = document.documentElement.scrollTop;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            
          document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
      });
    }

/*=============== SHOW SCROLL UP ===============*/

/*=============== send email ===============*/

// function sendEmail(){
  var contactForm = document.getElementById('contact__content');
  var nameInput = document.getElementById('user_name');
  var emailInput = document.getElementById("user_email");
  var messageInput = document.getElementById("user_msg");
  var submitBtn = document.getElementById("submitBtn");

    const publicKey = "1GE7b8grlr_mc462u";
    const serviceID = "service_xu258ke";
    const templateID = "template_twl2cs4";

    emailjs.init(publicKey)


    contactForm.addEventListener("submit",e=> {
      e.preventDefault()
      submitBtn.innerText = "Just A Moment..."

      const inputFields = {
        name:nameInput.value,
        email: emailInput.value,
        message: messageInput.value
      }

      emailjs.send(serviceID,templateID,inputFields)
        .then(() => {
            submitBtn.innerText = "Message Sent Successfully"
            setTimeout(() => {
              submitBtn.innerText = "Send Message"
              
            },3000)
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        },(error) => {
          console.log(error)
          submitBtn.innerText = "SomeThing went wrong"
        })

    })










  //   var subject = document.getElementById("user_subject").value;
//   var body = `name: ${name} <br/> email: ${email} <br/> subject: ${subject} <br/> message: ${msg} `;

//   // Email.send({
//   //   Host: "smtp.gmail.com",
//   //   Username: "mohamed.mounir2425@gmail.com",
//   //   Password: "47E36C512879BB686059350BC8672A142F5B",
//   //   To: "mohamed.mounir2425@gmail.com",
//   //   From: document.getElementById("user_email").value,
//   //   Subject: "new contact form enquiry",
//   //   Body: "and this is the body",
//   // }).then((message) => alert(message));
//   Email.send({
//     SecureToken: "224180af-cae0-463f-bab4-c00e8d8dcadb",
//     To: "mohamed.mounir2425@gmail.com",
//     // From: document.getElementById("user_email").value,
//     From: "mmano1493@gmail.com",
//     Subject: "This is the subject",
//     Body: body,
//   }).then((message) => alert(message));
// }