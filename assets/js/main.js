/*=============== SHOW MENU ===============*/
const burger = document.querySelector('.nav__menu-burger')
const navbar = document.querySelector('.nav__menu')

burger.addEventListener("click", () => navbar.classList.toggle('changeMenu'));

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link').forEach(n => n.addEventListener('click', _ => navbar.classList.remove('changeMenu')));
/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
 let scrollArrow = document.getElementById('scroll-up');
 
 if(this.scrollY >= 460) scrollArrow.classList.add('show-scroll');
 else scrollArrow.classList.remove('show-scroll');
 
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW CART ===============*/


/*=============== DARK LIGHT THEME ===============*/ 

/* ============== Send Messag ====================*/
$(document).ready(function() {
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});