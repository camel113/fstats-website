/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/assets/2.0/bundle.js","437aa4170e253a8e199703c498a884fd"],["/assets/2.0/main.css","d3b5494119a670e2bb3c757d221e374f"],["/assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/assets/images/cd-top-arrow.svg","e8ffcff1b2d29a2d6209835f6254dbde"],["/assets/images/close.png","06b67b439889faaa5d061e924bfd4055"],["/assets/images/close.svg","506c846118ee3fcaf87900ba0b90f00f"],["/assets/images/footstats-auth0.png","1af32b596c440865bb01996a4030ae91"],["/assets/images/footstats.png","465eafd1bd7cfa523e67e50ae4804b5a"],["/assets/images/footstats2.png","18bdddf334adbc16c7bb7b0e23be05e2"],["/assets/images/hamburger.png","60b3b5565c14f7b615b92670c03a30bf"],["/assets/images/hamburger.svg","8659515094d85059439811bbedcbbc39"],["/assets/images/laposte.png","ecf24fe6e7df66593355588b845130e0"],["/assets/images/mastercard-logo.svg.png","36c9740a5c9988b25f5ac18cb6003324"],["/assets/images/mastercard-visa.png","f9125e8b585eb8a5e7c42c514725da78"],["/assets/images/mastercard_logo.png","367c26d9ba9b9043c9bb4b5a17ab4d2f"],["/assets/images/matchdone.png","e4bdf8730201b827660c56aba181a6aa"],["/assets/images/payment-methods.svg","1364dcaab39153a98095bb59a2b11c07"],["/assets/images/visa.svg.png","d3e0b5cf324be62b2d2156526356d6a9"],["/assets/img-temp/1400x700/img1.jpg","d2501ebb5dceeb2b853ebbd2ae8b28ec"],["/assets/img-temp/270x481/img1.jpg","d5cc116b7b15f7de6eca2d64a818635c"],["/assets/img-temp/270x481/img10.jpg","a1c5f4acdde7fb65bb32297e756cfcad"],["/assets/img-temp/270x481/img11.jpg","c1537e7e78b00287f9ff1deab4d39803"],["/assets/img-temp/270x481/img12.jpg","eabafaa4641b027fb5153dfee87ec011"],["/assets/img-temp/270x481/img2.jpg","30b52eecc7af427bfc4212295c46fc24"],["/assets/img-temp/270x481/img3.jpg","8538ef9cae8001affb099f4c2c007da7"],["/assets/img-temp/270x481/img4.jpg","4d5d745520861dcbb1e07fbff9b67b43"],["/assets/img-temp/270x481/img5.jpg","737b72fde2a2ef367fee4f007660d5f3"],["/assets/img-temp/270x481/img6.jpg","ee33e0c4182c708da766ac099764a1fe"],["/assets/img-temp/270x481/img7.jpg","83af5b5a547e8baab8bd24cf15cda3f9"],["/assets/img-temp/270x481/img8.jpg","5f5cc947f7c9af8734ee813fdb60ba29"],["/assets/img-temp/270x481/img9.jpg","e94837ebcf48d8e5b18310b84306d265"],["/assets/img-temp/800x466/img1.jpg","53a48b7241d61f14a3f28099b40d378b"],["/assets/img-temp/800x466/img2.jpg","458b9a37a89bb3cc884c9dcd4c9ec003"],["/assets/img-temp/800x466/img3.jpg","4107725d5038124e2f83846b51eb5b33"],["/assets/img-temp/800x466/img4.jpg","de1f459dad5b060ed63f748b312f19b3"],["/assets/img-temp/mockups/mockup1.png","e198a7b3681d06eb703be6a75b2fa43b"],["/assets/img-temp/mockups/mockup2.png","e7dc14ef343ff266ecad943a2248a550"],["/assets/img-temp/mockups/mockup3.png","20166a378c3b3028edd68d59eb9e8c88"],["/assets/img-temp/mockups/mockup4.png","f91e0a753ea046f26998607814f01960"],["/assets/img-temp/mockups/mockup5.png","047b7f80c9d6c72ed4e918812b17cd3c"],["/assets/img-temp/mockups/mockup6.png","a0cf4e5dd46bc7fffd1f7f90a0ff1fff"],["/assets/img/assoc-de.png","0a5a90ab61bffa759b2efc14d8371626"],["/assets/img/assoc-fr.png","e6a7ed7ffcf2afed2669e7a466f48238"],["/assets/img/facebook-de.png","dd96c255bf398bd52d5e69729fdade76"],["/assets/img/facebook-fr.png","9843786d2f265f2d4c02b832734f4373"],["/assets/img/fixtures-de.png","8e1b8f3266425cac15e0af98460015d9"],["/assets/img/fixtures-fr.png","9042c1aaa602438fbf2ebf162b93ce79"],["/assets/img/footstats50.png","ba58192a46dc7231727c583ec78ad488"],["/assets/img/logo.png","ec410299ee8db1d8cba6dfe08cf02bcb"],["/assets/img/overview-de-2x.png","942504f6a4ca4e93d2cc046d3f252d8a"],["/assets/img/overview-de.png","0fd5f7282e03c9569d1db3343547f231"],["/assets/img/overview-fr-2.png","1e2e5ebe167ab6c516a670a82a98240e"],["/assets/img/overview-fr-2x.png","4f3e9de683e9719674a97b24aa464daf"],["/assets/img/overview.png","66c0d241e01d7001edeca15354c9942b"],["/assets/img/results-de.png","95fca7dd3bb678ff01a086e0876a3c36"],["/assets/img/results-fr.png","9f09599717bf3486799ae71d162f00dd"],["/assets/img/scorers-ranking-de.png","6da04759534460c767e548950ec4ebcb"],["/assets/img/scorers-ranking-fr.png","f50b7247d1b2d6cee40f0c4e375c9d80"],["/assets/img/teams-ranking-de.png","7696f538676aca3191d7c8fd65d63ee0"],["/assets/img/teams-ranking-fr.png","6cb586a41e85db92040f3dbe984a7121"],["/assets/js/components/hs.carousel.js","83df1dbbb91b73c31a9d6c984a92b681"],["/assets/js/components/hs.cubeportfolio.js","47748487e68bd4f5edfeaf4b681ac101"],["/assets/js/components/hs.go-to.js","68887754755623834be0f49a9d65c558"],["/assets/js/components/hs.header.js","bfe66f7ed5057cd01184f0b422742fe2"],["/assets/js/components/hs.onscroll-animation.js","6443fd802b0cb4d26e231f161e3a5111"],["/assets/js/components/hs.popup.js","ff6460e1a17a26af5c42108282bd366e"],["/assets/js/components/hs.scroll-nav.js","7b4dd5999a0a3b81185958188b3d35b2"],["/assets/js/components/hs.tabs.js","9cf058f5953f1fcb22d49de59731c735"],["/assets/js/helpers/hs.hamburgers.js","d8c54cf789605eff1cb0de6cc55dba26"],["/assets/js/hs.core.js","632c2740d954c19986c0355ab7affed3"],["/assets/js/main.js","e360c6a5878db405a074c8279035cb67"],["/assets/styles/main.css","b1da96d1e24afb6fde71dc953dd5ed37"],["/assets/unify/styles.op-app.css","7f594389a83693e468f08a3ba0319835"],["/assets/vendor/animate.css","57db4a2811f951ff841fb4f77220d95b"],["/assets/vendor/appear.js","33ffd10e4a4b26c99527ab867558e4e2"],["/assets/vendor/bootstrap/bootstrap.css","c9919db426ef5de42afc3b68a64b0106"],["/assets/vendor/bootstrap/bootstrap.js","ce645263c46a2e4d5b8784eeb1915afc"],["/assets/vendor/bootstrap/bootstrap.min.css","95df726a7936892cf645a57c1ccf3b75"],["/assets/vendor/bootstrap/bootstrap.min.js","46b549bdc90920f18a911f186b9dd75c"],["/assets/vendor/bootstrap/offcanvas.css","8fc50524f6f7de3f0da759d3f0ff42d5"],["/assets/vendor/bootstrap/offcanvas.js","0c32e71e99258ea0493b10a502fda6b6"],["/assets/vendor/cubeportfolio-full/cubeportfolio/css/cubeportfolio.css","c18e10bb05d295b4111a7f6187d615dd"],["/assets/vendor/cubeportfolio-full/cubeportfolio/css/cubeportfolio.min.css","6539c09dc7f0a65fb0bc4e3922aac954"],["/assets/vendor/cubeportfolio-full/cubeportfolio/img/cbp-sprite.png","d487134fb11fb2eaa45cb26763ee0f0c"],["/assets/vendor/cubeportfolio-full/cubeportfolio/js/jquery.cubeportfolio.js","9a233ae400c458f86a80bad6ec4c0d6a"],["/assets/vendor/cubeportfolio-full/cubeportfolio/js/jquery.cubeportfolio.min.js","fe6e62f06cd5b4253f71ba15541b4ffc"],["/assets/vendor/cubeportfolio-full/documentation/css/main.css","176b3ba1c1ee22992904a4e88ba62aef"],["/assets/vendor/cubeportfolio-full/documentation/css/prettify.css","e3db17c32d740db0a2d113f9394e7a4b"],["/assets/vendor/cubeportfolio-full/documentation/css/reset.css","a8521e519f418fc3d734d0ab737e9329"],["/assets/vendor/cubeportfolio-full/documentation/index.html","750d0b095e1ab3cfdc6ffde8ba366b0b"],["/assets/vendor/cubeportfolio-full/documentation/js/main.js","1bf9b45c4cf349ce7ed6a381348ce935"],["/assets/vendor/cubeportfolio-full/documentation/js/prettify.js","c1822e61efd97e3ca45a849952526010"],["/assets/vendor/cubeportfolio-full/templates/agency/ajax-agency/loadMore.html","21474dfb8b384a1774fab3643138b7d4"],["/assets/vendor/cubeportfolio-full/templates/agency/index.html","364b66f55385d584e04274b4e1b63a9e"],["/assets/vendor/cubeportfolio-full/templates/agency/js/main.js","6fd2563a4c937de68127c1a8bce61a26"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/ajax-awesome-work/loadMore.html","731c071251bfc6a9d70c8c9a849ce8fe"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/ajax-awesome-work/project1.html","4d3c10ee8814dc76d0a7b5ccd0003872"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/ajax-awesome-work/project10.html","405ee18358958a882604bc25c3330f72"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/ajax-awesome-work/project2.html","868f43118b86be5356590fe58fc90bf2"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/ajax-awesome-work/project3.html","7f7ec9d37536f711301cb357c6a98ea3"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/ajax-awesome-work/project4.html","e2c8c66150fe599907e81d1324f7d9ba"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/ajax-awesome-work/project5.html","7ee6ac009c4bbd33a18eac575304cebe"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/ajax-awesome-work/project6.html","b8b4d1f5c7c71bb7dbbd4b5f56f558d0"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/ajax-awesome-work/project7.html","bff8bad90f96a41d61e4e6c1b3036dd8"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/ajax-awesome-work/project8.html","bdc115c31428450baab3ef2132c21373"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/ajax-awesome-work/project9.html","bebe5de7f542b23ca7fa2cd9ad2edbec"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/index.html","3a1097983a185432314361e5701f7502"],["/assets/vendor/cubeportfolio-full/templates/awesome-work/js/main.js","6142c1a634205295fd8f36b3d03f3be1"],["/assets/vendor/cubeportfolio-full/templates/blog-posts/index.html","7225995b9f5859e8cbddc67f2bb1f104"],["/assets/vendor/cubeportfolio-full/templates/blog-posts/js/main.js","7b3b7ced885eabda4aa038ee7eed17a3"],["/assets/vendor/cubeportfolio-full/templates/clients/index.html","7e445feae86835e80b7dbdecf89cc947"],["/assets/vendor/cubeportfolio-full/templates/clients/js/main.js","544bcd33116cfaee02290aa18e3e626e"],["/assets/vendor/cubeportfolio-full/templates/faq/index.html","4e0442f275fe1bbd55448a41cc5e7154"],["/assets/vendor/cubeportfolio-full/templates/faq/js/main.js","298da5ada1ec41b3ee1fd5b30c6acec7"],["/assets/vendor/cubeportfolio-full/templates/full-width/ajax-full-width/loadMore.html","2630e5f3ded2c600591308399b5b3b56"],["/assets/vendor/cubeportfolio-full/templates/full-width/index.html","1d32d45f303634e476fbed2cdab97094"],["/assets/vendor/cubeportfolio-full/templates/full-width/js/main.js","bfca2e4f156ed55912976893f8146f2e"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/loadMore.html","367e2645b819fcc0426eb23fb6c2e701"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project1.html","b296242728309f41d24dd7a3968e90b2"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project10.html","e1083e067fb776d21ca7338e9181b5a4"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project11.html","9f8dfa653f1ae079eef6ef59ab001ea1"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project12.html","5c8c61d04936a1f4bc1271cea34672b0"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project13.html","3af267c44c02da339970f795ded69e8e"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project14.html","0b609453afa4acd24c8bb86a7bae3ebc"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project15.html","64308aa3cda5193356ce8ccbfc6fce01"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project16.html","48e137b175795b8e19ee37aafa080388"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project17.html","80fd413e3ad55adb4f1d3668cb7897c9"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project18.html","38ef440623531f5985ea834ac86b320c"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project2.html","3ea6f84904d0a03db4830afdf5d9cadd"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project3.html","5264683aaaa55a781fc63c2093cbf073"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project4.html","c8b30ba68551b6e02c3e7364d2ed4821"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project5.html","b6e86de3e2ccb67b90eea3241ccd521d"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project6.html","b81ff2fb3d182665b06c3aa4b9a334a7"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project7.html","ba1b3b5736268ea0469ae2dad55e1d71"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project8.html","927a5bacdec346e30476f11ecca9125e"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/ajax-juicy-projects/project9.html","98d738bec8a6a0d27910bbda71845857"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/index.html","a1a66069c41cf1517c785d7c546944ca"],["/assets/vendor/cubeportfolio-full/templates/juicy-projects/js/main.js","cfdb456cf83f709aa2d5eb4918bfc883"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/loadMore.html","a100e0323c823f260d7dcf78a971c968"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project1.html","903687fe7b021a65333b157b6b0841ac"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project10.html","73ffbc1a350ce9f4ba0976c6834f93cd"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project11.html","c1bec3074fc7d49c5cb45615dd349801"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project12.html","801bee6506041f53cd7175fa70258ebd"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project13.html","1f6653123c50dd9010006b3b80590026"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project2.html","6358d962a0af63d158dbd3e7fa616216"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project3.html","4a77eb62c4aacd84e6f2c25580fae777"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project4.html","2dc9a5c1870a77ff90b605f9ef81e26f"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project5.html","8c7507e8b5e7bfdad3423d9085c70c20"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project6.html","b97546acaf7eb19b5b3401b3c0942b66"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project7.html","2eefb94f53e32ed40fe6853f2954414c"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project8.html","6e855be0bf8da48f038482c93347e843"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/ajax-lightbox-gallery/project9.html","4a3affa423e5fba15f3292f078afea49"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/index.html","1c3f85e69ad7336ff563f4ed0a5f3390"],["/assets/vendor/cubeportfolio-full/templates/lightbox-gallery/js/main.js","1e4c17cc75fb21fdeb44585e8446c5a3"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/loadMore.html","1de364dc9b75ee648ced9b2fa552bcff"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project1.html","9b618906c7be9c734a2dcd928a47e755"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project10.html","30a2b5ab821dac3dd54edc0e17402b02"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project11.html","2edc1f0314ed4b8b99e05a585386552d"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project12.html","f2e3a3cb5fb26bf2346c0970a413a5f8"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project13.html","6ee67383a07443f614e46ac5815a1a7d"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project14.html","cefd360ef6f358ff6844781913c79a88"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project15.html","925b9505f29cce2816ba6a54c66dd013"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project16.html","680916a8e8a4cbd7c71dff38f9ef927f"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project17.html","df814c584650d338c1af1277b1bc7e37"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project18.html","67e5c52040705f2da0df1debd0ccd157"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project2.html","ff9d304df21eaa8b6a854b1255d14163"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project3.html","dbaeace522786a1ef5640b8f05acd964"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project4.html","1609a720a403a9d1279a503c80c4fdfa"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project5.html","347d555e262b9a83039cf20d4b0bf2a6"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project6.html","016d8e7b827847973923059f04ad7ce9"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project7.html","9b1238c2d290aa9660bc25fab6cc9d56"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project8.html","be7dc6c53ffe4b8654c1e25c193ee951"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/ajax-masonry-projects/project9.html","1bd9ee4add9784f9cc9a103275922f8c"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/index.html","77c9203d259c21d637603a4261eed591"],["/assets/vendor/cubeportfolio-full/templates/masonry-projects/js/main.js","d14284ab3f1f3c4ab3d0780cf29120b9"],["/assets/vendor/cubeportfolio-full/templates/masonry/index.html","345a43d36d49831a12f53649849dc01a"],["/assets/vendor/cubeportfolio-full/templates/masonry/js/main.js","99459c2ed7865d93ae701901e20a66ed"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/ajax-meet-the-team/member1.html","9facd7263dfd6ff688e2649589ae03aa"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/ajax-meet-the-team/member10.html","34428b0b2c1b978483934564e7320421"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/ajax-meet-the-team/member11.html","67dd0b2846a9c967bc9a96eff553b6ea"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/ajax-meet-the-team/member12.html","c453a67fcf9104b5ec60ff88ceabab40"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/ajax-meet-the-team/member2.html","0270feb8c0b5a72747f558a5bffba87c"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/ajax-meet-the-team/member3.html","2490f971a6597da1dcf64ab92a3ea242"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/ajax-meet-the-team/member4.html","2f743370cc1734171dfcbd81a9363489"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/ajax-meet-the-team/member5.html","9c15c334fd1bca7d9ae0e90bdd6aa716"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/ajax-meet-the-team/member6.html","b9fa32994570559b5cb17fbb766e5dbd"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/ajax-meet-the-team/member7.html","104ed7049d1cb32d6c755c8df467139e"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/ajax-meet-the-team/member8.html","945448bc3c6f79af274b42da71c03319"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/ajax-meet-the-team/member9.html","fec507c4b6ad4f2f5c31cb1c98c24fbd"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/index.html","fef88158455c996f9c29bb0802440858"],["/assets/vendor/cubeportfolio-full/templates/meet-the-team/js/main.js","909cc4c2b5ee118b99b4a76099551f07"],["/assets/vendor/cubeportfolio-full/templates/mosaic-flat/ajax-mosaic-flat/loadMore.html","c552a1db93ca28330ea2918d9966a715"],["/assets/vendor/cubeportfolio-full/templates/mosaic-flat/index.html","d964f3e8a38ba3c9798cda6f70bceff8"],["/assets/vendor/cubeportfolio-full/templates/mosaic-flat/js/main.js","b29d87a99964f7dc21539fb2571c127c"],["/assets/vendor/cubeportfolio-full/templates/mosaic-projects/index.html","356ad4895084d892ef3f0933244d8cea"],["/assets/vendor/cubeportfolio-full/templates/mosaic-projects/js/main.js","7c0f142eb84660f99ff32a143030412b"],["/assets/vendor/cubeportfolio-full/templates/mosaic/ajax-mosaic/loadMore.html","4408feb1185a54e41b1086631174689c"],["/assets/vendor/cubeportfolio-full/templates/mosaic/index.html","7fea4d43fb81f210b3b964350d83993b"],["/assets/vendor/cubeportfolio-full/templates/mosaic/js/main.js","043d38ea0c5fa52145e5fb9208348ee4"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/loadMore.html","27699c7235ae157b90898e830ca77f86"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project1.html","f6a64dd6717d97689d41a36f8080bb3f"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project10.html","dd87ef7a274a23adf8af6da14a863d3d"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project11.html","357f7166a9ecd175e09d119a374c9d1a"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project12.html","56e7456707cbafd608992cb397f4b2e3"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project13.html","efb54ac96948f1772401bc5be5b8f971"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project14.html","14948df8c0206025b8b019b7132d3201"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project15.html","fd3d650c89a6aaf6972a8b9d942fb0a4"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project16.html","f74234316babce555a947bac8d077d39"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project17.html","e1fae5413a77c1f47331832ed9e99d4b"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project18.html","011a458caa2d7fdd6d31cf4a86de3361"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project2.html","79e5ad685d2144d9c4de758e9d835fc0"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project3.html","ce2b326ec6875433150bd25bc0459627"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project4.html","afdab119c7de8a4700cf033de0534f8e"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project5.html","20836cb98aeb93b59e849bce0d23c073"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project6.html","799b2d8c2b981e0de4e2c383f1367dc8"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project7.html","0e56d7032e9d726af11a074fc318d038"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project8.html","f4c6fb8902b69072e6646b4f780c5b7e"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/ajax-juicy-projects/project9.html","92ac762ce5f894e8b8ca71c5e76571fc"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/index.html","73d97f1097edb8e08123acd7204556e1"],["/assets/vendor/cubeportfolio-full/templates/multiple-grids/js/main.js","d50f4bf8151dcb8f2be866bd97814f76"],["/assets/vendor/cubeportfolio-full/templates/slider-projects/index.html","692ab7b0a17a1cbdbfb677c7d13d1927"],["/assets/vendor/cubeportfolio-full/templates/slider-projects/js/main.js","bdc95e1e0bd66b5f543fa621da120d76"],["/assets/vendor/cubeportfolio-full/templates/slider-team/index.html","caacbd2053495a65c619cb153578d061"],["/assets/vendor/cubeportfolio-full/templates/slider-team/js/main.js","9ad0b08e95af45e9fdea5784ccc5829a"],["/assets/vendor/cubeportfolio-full/templates/slider-testimonials/index.html","5a07f854f555af84fd1411f39a34d8a3"],["/assets/vendor/cubeportfolio-full/templates/slider-testimonials/js/main.js","adbae5e06cc360a0d7789e187c192d81"],["/assets/vendor/cubeportfolio-full/templates/slider-thumbnail/index.html","b61678eb747c3b78738aa436a1e937fa"],["/assets/vendor/cubeportfolio-full/templates/slider-thumbnail/js/main.js","cf41a1334b35fefb2c63c38329c56f84"],["/assets/vendor/cubeportfolio-full/templates/tabs/index.html","3a6d29a2c7178a7f2f80b8b6fbb76e6e"],["/assets/vendor/cubeportfolio-full/templates/tabs/js/main.js","49042e0a7a63bcad205978663dbb75d6"],["/assets/vendor/cubeportfolio-full/templates/testimonials/index.html","d9c594bf3363d003d9e537cf1bfa9d31"],["/assets/vendor/cubeportfolio-full/templates/testimonials/js/main.js","e03d031e1e46bf2a66319116a5862e16"],["/assets/vendor/dzsparallaxer/advancedscroller/bokeh/b1.png","07e21447d41e86f3d42821e503f1a6c0"],["/assets/vendor/dzsparallaxer/advancedscroller/bokeh/b2.png","5e38bfe4d60802ae357e1daf4fc9f120"],["/assets/vendor/dzsparallaxer/advancedscroller/bokeh/b3.png","45e602b68cd8aaa15a0cdfbca9df857d"],["/assets/vendor/dzsparallaxer/advancedscroller/bokeh/b4.png","d427dbc8b2e9145524e9ad559926cab2"],["/assets/vendor/dzsparallaxer/advancedscroller/img/arrow-left-black-small.png","81e82b18ce1bb36f04f9a62df8a57150"],["/assets/vendor/dzsparallaxer/advancedscroller/img/arrow-left-black.png","d380ab11fea49d973d8715eef48b65db"],["/assets/vendor/dzsparallaxer/advancedscroller/img/arrow-left-white.png","84c2c5b1672fedc14e38816f66ee8d6e"],["/assets/vendor/dzsparallaxer/advancedscroller/img/arrow-left.png","4c62ea84a1f3955a8d7706d3c200bedc"],["/assets/vendor/dzsparallaxer/advancedscroller/img/arrow-right-black-small.png","7ab06b0d96e4be95a0c3ddafec96d92f"],["/assets/vendor/dzsparallaxer/advancedscroller/img/arrow-right-black.png","47a3abc970b2175a6db3a73af5659c6a"],["/assets/vendor/dzsparallaxer/advancedscroller/img/arrow-right-white.png","17212e10799a10680d5c21e78e783328"],["/assets/vendor/dzsparallaxer/advancedscroller/img/arrow-right.png","33c94ae5cc2bc4090d9e233611b12acd"],["/assets/vendor/dzsparallaxer/advancedscroller/img/arrow-round-left.png","0e53a50695659a2a5818cfb7e71ed6da"],["/assets/vendor/dzsparallaxer/advancedscroller/img/arrow-round-right.png","8b931a2435e5c4123435bc54c4e70ce2"],["/assets/vendor/dzsparallaxer/advancedscroller/img/bullet.png","2e722fa6fa381f3a02b209b4d6d2344c"],["/assets/vendor/dzsparallaxer/advancedscroller/img/plus-image.png","db478e59f6298f757ba197fc7a3f2157"],["/assets/vendor/dzsparallaxer/advancedscroller/img/preloader.gif","875fa007e9db9bda821f76da099c9bae"],["/assets/vendor/dzsparallaxer/advancedscroller/img/shadow.png","16705ffbfa30361419a001799dbd9c08"],["/assets/vendor/dzsparallaxer/advancedscroller/img/skin-agapa-arrow-left.png","d52ee790731f2edcefc2afc8fe2e2d09"],["/assets/vendor/dzsparallaxer/advancedscroller/img/skin-agapa-arrow-right.png","4a1f5486480ced783aafb7cda2060fb0"],["/assets/vendor/dzsparallaxer/advancedscroller/plugin.css","643c2f889561559962150c33db688826"],["/assets/vendor/dzsparallaxer/advancedscroller/plugin.dev.js","e516b854db1f0c7082aeffe86b069e41"],["/assets/vendor/dzsparallaxer/advancedscroller/plugin.js","3d2ec05638016b5c5faf8920ca0bcd67"],["/assets/vendor/dzsparallaxer/dzsparallaxer.css","c9202a5d24dd3372cc99f1542373157b"],["/assets/vendor/dzsparallaxer/dzsparallaxer.dev.js","2e98037e9e668d4e42b076f179d34e7f"],["/assets/vendor/dzsparallaxer/dzsparallaxer.js","94ac37c21a2d4910047930cef7de6878"],["/assets/vendor/dzsparallaxer/dzsprx_module_parallax_features.css","710da8e72eafb6fef26de3c64e21b00a"],["/assets/vendor/dzsparallaxer/dzsprx_module_parallax_features.js","305ff398c330a227319781510ab2caf1"],["/assets/vendor/dzsparallaxer/dzsscroller/jquery.collagePlus.min.js","6f6fe9c5a65400cdd3daec0b2573fc06"],["/assets/vendor/dzsparallaxer/dzsscroller/jquery.masonry.min.js","3fd978b028f6c171edce879d058afa57"],["/assets/vendor/dzsparallaxer/dzsscroller/pat1.png","e07a86744d8a0a322c897b8f02f79088"],["/assets/vendor/dzsparallaxer/dzsscroller/pat2.png","c9a021b4fa83bbf96bfcc4baf581da5e"],["/assets/vendor/dzsparallaxer/dzsscroller/scroller.css","67ab1d9b8fed07bfcce5c70c9d2604c9"],["/assets/vendor/dzsparallaxer/dzsscroller/scroller.dev.js","5cd367fb75c2bb477a2b22ee7b82666d"],["/assets/vendor/dzsparallaxer/dzsscroller/scroller.js","4d1ab59a3565ffee79075231ba64ca29"],["/assets/vendor/dzsparallaxer/dzsscroller/scrollergallery.css","6ad2ba0c2ec9b45a9fe9be66aa30efa4"],["/assets/vendor/dzsparallaxer/dzsscroller/scrollergallery.dev.js","96eccda4e54f7aedc5986a74621134f0"],["/assets/vendor/dzsparallaxer/dzsscroller/scrollergallery.js","0c30f350fd5b88ae4b845cd979565160"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/arrowleft.png","56cfe877acf68daf22b8eeedda87feea"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/arrowright.png","498e1921131358a506c4fdebf7543dcb"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/handle.png","abff5a2fceada844f2c4c4fc0aec0ca4"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/image.png","d1260c6fde338b756d29bb8a47b05b73"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/page.png","63a2a9a3249a88fb0ce0138ec7e5b5a0"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/preloader.gif","8393c5f7e394698f751ee6a11fff3dc7"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/progress.png","5dd839e998a20965933034a6186fec52"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/progressblue.png","772ba206b679e62292bfa8bb7b3230a9"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/progressy.png","a920f6c9f5d7ab392983093f72f6db6f"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/progressyblue.png","a920f6c9f5d7ab392983093f72f6db6f"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/s3scrollerx.png","427a4078515701142225c622a785aba0"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/s3scrollery.png","8a4237351c4ac81a188aa10259bbd9f5"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/scroller1.png","c9a73c0607c86ced832492faab668c4c"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/skin_timeline_bg.png","890a535160bd1abfa5796a48c00cee2c"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/skin_timeline_handle.png","bb1d00f56158e144be5dd4e97c69c120"],["/assets/vendor/dzsparallaxer/dzsscroller/styleimg/video.png","2602a2403959131d3f817a802cebcd7c"],["/assets/vendor/fancybox/jquery.fancybox.css","80a16036b0b86477506680134eec739b"],["/assets/vendor/fancybox/jquery.fancybox.js","522fb64ab8bedac35922cd3dc96fef25"],["/assets/vendor/fancybox/jquery.fancybox.min.css","4a364acec2e122319d1236b0eed17e5c"],["/assets/vendor/fancybox/jquery.fancybox.min.js","8c2c44a8df73d92f72ee9ca8eee24f37"],["/assets/vendor/hamburgers/example.html","d5e4040be151ea698c41a6d9c4d5dda9"],["/assets/vendor/hamburgers/hamburgers.css","5c159dc6d553256b1510cad75c459fcd"],["/assets/vendor/hamburgers/hamburgers.min.css","f8073e0422b1331e58c21393078b8883"],["/assets/vendor/icon-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/assets/vendor/icon-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/assets/vendor/icon-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/assets/vendor/icon-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/assets/vendor/icon-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/assets/vendor/icon-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/assets/vendor/icon-hs/fonts/hs-icons.svg","57f2f6ad58148949e68a19c379e269ae"],["/assets/vendor/icon-hs/fonts/hs-icons.ttf","33e61ddac51fd00e173eff5eaa925779"],["/assets/vendor/icon-hs/fonts/hs-icons.woff","e74e487de7ae98fad8c246a3bd77b0fc"],["/assets/vendor/icon-hs/style.css","cbbb983429c92caabda2000c35398e8a"],["/assets/vendor/icon-line/css/simple-line-icons.css","093ca662394ed698fdb5835e425d28dd"],["/assets/vendor/icon-line/fonts/Simple-Line-Icons.eot","f33df365d6d0255b586f2920355e94d7"],["/assets/vendor/icon-line/fonts/Simple-Line-Icons.svg","2fe2efe63441d830b1acd106c1fe8734"],["/assets/vendor/icon-line/fonts/Simple-Line-Icons.ttf","d2285965fe34b05465047401b8595dd0"],["/assets/vendor/icon-line/fonts/Simple-Line-Icons.woff","78f07e2c2a535c26ef21d95e41bd7175"],["/assets/vendor/jquery-migrate/jquery-migrate-3.0.js","3a465b249cb5f68e904c94a47d3da683"],["/assets/vendor/jquery-migrate/jquery-migrate-3.0.min.js","b2d4316164f47c0c1064e7e83dd72167"],["/assets/vendor/jquery-migrate/jquery-migrate.min.js","b2d4316164f47c0c1064e7e83dd72167"],["/assets/vendor/jquery/jquery-3.2.1.js","09dd64a64ba840c31a812a3ca25eaeee"],["/assets/vendor/jquery/jquery-3.2.1.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/assets/vendor/jquery/jquery.js","56f1d01ee4bb68d1572cfd60755cf67a"],["/assets/vendor/jquery/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/assets/vendor/popper.js/index.js","d0fc5af5b376be0adf638ca8f77d5b88"],["/assets/vendor/popper.min.js","6383a57baa1479e8490a42f4184b7f0b"],["/assets/vendor/slick-carousel/index.html","e357b5ba79cabf8dd49fce44febec9ad"],["/assets/vendor/slick-carousel/slick/ajax-loader.gif","c5cd7f5300576ab4c88202b42f6ded62"],["/assets/vendor/slick-carousel/slick/fonts/slick.eot","ced611daf7709cc778da928fec876475"],["/assets/vendor/slick-carousel/slick/fonts/slick.svg","f97e3bbf73254b0112091d0192f17aec"],["/assets/vendor/slick-carousel/slick/fonts/slick.ttf","d41f55a78e6f49a5512878df1737e58a"],["/assets/vendor/slick-carousel/slick/fonts/slick.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/assets/vendor/slick-carousel/slick/slick-theme.css","f9faba678c4d6dcfdde69e5b11b37a2e"],["/assets/vendor/slick-carousel/slick/slick.css","f38b2db10e01b1572732a3191d538707"],["/assets/vendor/slick-carousel/slick/slick.js","da910267cd968a7d269efaed738025bd"],["/assets/vendor/slick-carousel/slick/slick.min.js","d5a61c749e44e47159af8a6579dda121"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







