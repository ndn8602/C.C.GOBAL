let heighTop = window.scrollY;
console.log(heighTop);
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

function listener(status) {
  let scroll = scrollbar.offset.y;
  heighTop = scroll;
}
scrollbar.addListener(listener);
setInterval(() => {
  console.log(heighTop);
}, 3000);
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

console.log(document.documentElement.scrollTop || document.body.scrollTop);
$(window).scroll(() => {
  console.log(document.documentElement.scrollTop || document.body.scrollTop);
});
