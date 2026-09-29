import { gsap } from "gsap";

const initSlider = () => {
  const ul = document.querySelector<HTMLUListElement>("ul.mx-2");
  if (!ul) return;
  
  const listItems = ul.querySelectorAll<HTMLLIElement>("li.flex");
  if (listItems.length === 0) return;

  ul.style.display = "grid";

  const tl = gsap.timeline({ repeat: -1 });

  listItems.forEach((li) => {
    li.style.gridArea = "1 / 1";
    gsap.set(li, { opacity: 0 });

    const leftEl = li.children[0];
    const rightEl = li.children[1];

    if (!leftEl || !rightEl) return;

    tl.set(li, { opacity: 1 })
      .fromTo(
        leftEl,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(
        rightEl,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "<"
      )
      .to(
        [leftEl, rightEl],
        {
          opacity: 0,
          duration: 0.2,
          ease: "power2.inOut",
        },
        "+=5"
      )
      .set(li, { opacity: 0 });
  });
};

document.addEventListener("DOMContentLoaded", initSlider);