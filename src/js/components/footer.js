import $ from 'jquery';


export const testFooter = function () {
  $('.text').css('color', 'salmon');
  console.log('i am in footer now');
};

export const testPolyfill = () => {
  const textWrappers = [...document.querySelectorAll('.textWrapper')];

  textWrappers.forEach((wrapper) => wrapper.innerHTML = 'I think polyfill is successed!!! ：D');
};
