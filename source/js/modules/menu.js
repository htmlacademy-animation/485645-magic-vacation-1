export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    const menulink = menuLinks[i];

    menulink.addEventListener(`click`, async function (ev) {
      ev.preventDefault();

      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }

      document.body.setAttribute(`data-section`, menulink.getAttribute(`data-href`));

      const p1start = document.querySelector(`#p1start`);
      if (menulink.getAttribute(`data-href`) === `prizes` && !p1start.getAttribute(`data-started`)) {
        p1start.beginElement();
        p1start.setAttribute(`data-started`, `1`);
      }

      if ((menulink.getAttribute(`data-href`) === `prizes`) && (document.location.href.split(`#`)[1] === `story`)) {
        document.querySelector(`.story__background`).classList.add(`active`);
        await new Promise((resolve) => setTimeout(resolve, 500));
        document.querySelector(`.story__background`).classList.remove(`active`);
      }

      location.href = menulink.href;
    });
  }
};
