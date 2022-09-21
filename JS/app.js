var Scrollbar = window.Scrollbar;
options = {
  damping: 0.1,
};
let scrollbar = Scrollbar.init(
  document.querySelector("#my-scrollbar"),
  options
);

scrollbar.setPosition(0, 0);
scrollbar.track.xAxis.element.remove();
//scroll animattion
function listener(status) {
  let scroll = scrollbar.offset.y;
  console.log(scroll);
  if (scroll >= 300) {
    $(".navigation").addClass("hide");
    $(".navigation").removeClass("d-none");
  } else {
    $(".navigation").removeClass("hide");
    $(".navigation").addClass("d-none");
  }
}
scrollbar.addListener(listener);
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
