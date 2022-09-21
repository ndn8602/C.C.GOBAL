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
