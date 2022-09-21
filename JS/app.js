var Scrollbar = window.Scrollbar;
options = {
  damping: 0.1,
};
let scrollbar = Scrollbar.init(
  document.querySelector("#my-scrollbar"),
  options
);
const header = $(".header").offset().top;
const content = $(".content").offset().top;
const contact = $(".contact").offset().top;

scrollbar.setPosition(0, 0);
scrollbar.track.xAxis.element.remove();
function headerTop() {
  scrollbar.scrollTo(0, header-100, 1000);
  console.log("header");
}
function contentTop() {
  scrollbar.scrollTo(0, content-100, 1000);
  console.log("content");
}
function contactTop() {
  scrollbar.scrollTo(0, contact-100, 1000);
  console.log("contact");
}
//scroll animattion
function listener(status) {
  let scroll = scrollbar.offset.y;
  console.log(scroll);

  if (scroll >= 300) {
    $(".navigation").removeClass("d-none");
  } else {
    $(".navigation").addClass("d-none");
  }
}
scrollbar.addListener(listener);
$(".navbar-toggler").click(() => {
  if ($("#navbarNav").hasClass("show")) {
    $(".navbar").css("background-color", "transparent ");
    console.log("ok");
    console.log($("#navbarNav").hasClass("show"));
  } else {
    $(".navbar").css("background-color", "#44463d");
    $(".navbar").css("z-index", "9999");
    console.log("not ok");
    console.log($("#navbarNav").hasClass("show"));
  }
});

//Handle offset Scroll
AOS.init({
  delay: 500,
});
[].forEach.call(document.querySelectorAll("[data-aos]"), (el) => {
  scrollbar.addListener(() => {
    if (scrollbar.isVisible(el)) {
      el.classList.add("aos-animate");
    }
  });
});
