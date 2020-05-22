// Load jQuery from NPM
import $ from 'jquery';

import testHeader from './components/header';
import { testPolyfill } from './components/footer';

window.jQuery = $;
window.$ = $;

testHeader();
testPolyfill();
