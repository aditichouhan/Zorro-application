gsap.registerPlugin(ScrollTrigger);




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.2,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

gsap.to(".image", {
  x: -600,
  duration: 15,
  repeat: -1,
});

gsap.to(".logox1", {
  x: -1000,
  duration: 18,
  repeat: -1,
});

gsap.to(".logox2", {
  x: -1000,
  duration: 22,
  repeat: -1,
});
gsap.to(".logox3", {
  x: -1000,
  duration: 16,
  repeat: -1,
});




gsap.to('.award',{
    scrollTrigger:{
        // scroller:'#main',
        trigger:'.page6right',
        pin:'.award',
        pinSpacing:false,
        // markers:true,
        start:"top 10%",
        end:"bottom 50%",

    }
})


gsap.from('#slide1',{
    scrollTrigger:{
        // scroller:'#main',
        trigger:'#slide4',
        pin:'#slide1',
        pinSpacing:false,
        scrub:true,
        // markers:true,
        start:"-300% 10%",
        end:"top 10%",
    }
});
gsap.from('#slide2',{
  scrollTrigger:{
      // scroller:'#main',
      trigger:'#slide4',
      pin:'#slide2',
      pinSpacing:false,
      scrub:true,
      // markers:true,
      start:"-200% 16%",
      end:"top 16%",
  }
});
gsap.from('#slide3',{
  scrollTrigger:{
      // scroller:'#main',
      trigger:'#slide4',
      pin:'#slide3',
      pinSpacing:false,
      scrub:true,
      // markers:true,
      start:"-100% 22%",
      end:"top 22%",
}});


// gsap.from('#slide4',{
//   y:0,
//   scrollTrigger:{
//       // scroller:'#main',
//       trigger:'.swiperup',
//       // pin:'#slide4',
//       // pinSpacing:false,
//       scrub:true,
//       markers:true,
//       start:"top 28%",
//       end:"top 28%",
//   }
// });