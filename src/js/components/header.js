import $ from 'jquery';

const testHeader = () => {
  console.log('i am in header');
  console.log(new Date());
  console.log($('h2'));
};


export default testHeader;
