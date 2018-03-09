/*jshint esversion:6*/
const $typedText = $('.typed-element').html();
const elem = $('.typed');
let typed = new Typed('#ok', {
	strings: [$typedText],
	typeSpeed: 20,
	onStringTyped: () => $('.typed-cursor').remove()
	// loop: true,
});

/* Smooth Scroll */
const sections=3;
for(let i=1;i<=sections;i++){
	$(`#scroll${i}`).click(()=>{
		$('html, body').animate({
        scrollTop: $(`#scrollDiv${i}`).offset().top
    }, 1000);
	});
}