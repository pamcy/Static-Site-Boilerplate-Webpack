export const testPolyfill = () => {
  const textWrappers = [...document.querySelectorAll('.textWrapper')];

  textWrappers.forEach((wrapper) => wrapper.innerHTML = 'Polyfill is on the way!!! ：D');
};
