// Load jQuery from NPM
import $ from 'jquery';

import testHeader from './components/header';
import { testFooter, testPolyfill } from './components/footer';

window.jQuery = $;
window.$ = $;

testHeader();
testFooter();
testPolyfill();
