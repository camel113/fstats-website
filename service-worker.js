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

var precacheConfig = [["/acgf/2eme-ligue-teams.html","31706cebce46e65fdeac5fbffb5e4a8b"],["/acgf/2eme-ligue.html","b5fdf1a0e266bb63e054d60d7b991c67"],["/acgf/3eme-ligue-teams.html","e49ffc550c3057c5f5844b6894b0bd02"],["/acgf/3eme-ligue.html","2844cab83d3642e609c5c67e7565bdf4"],["/acgf/4eme-ligue-teams.html","791dd59e22719bf442293a3f895fe5fa"],["/acgf/4eme-ligue.html","b78924a7b2fa420867b32ce13fbe4166"],["/acgf/5eme-ligue-teams.html","8f690b77809e2de4e637d61dde05a582"],["/acgf/5eme-ligue.html","c0119023a09400c6ca789c4aa7a7d2ff"],["/acvf/2eme-ligue-teams.html","761d51d6bb5c3f6b11be3ce9a8746c41"],["/acvf/2eme-ligue.html","3ec7ecdfd4c28d141cdc0e259c26d9b4"],["/acvf/3eme-ligue-feminine-teams.html","2acd0ae63556f1a7a7b677ce01bb38df"],["/acvf/3eme-ligue-feminine.html","dfbf3cffb518556a474781d11031203c"],["/acvf/3eme-ligue-teams.html","54bfdc93e109862b7264f01d524d30ab"],["/acvf/3eme-ligue.html","4da276f43a74687a3e49ceb97a5f5fa8"],["/acvf/4eme-ligue-teams.html","117a78b81ceaff0d952fe2a3315e5238"],["/acvf/4eme-ligue.html","9b267245f33c6c170a6dbbfda0e962cb"],["/acvf/5eme-ligue-teams.html","b1d709756d8f9d08bef7a2764be3b501"],["/acvf/5eme-ligue.html","f35dc5c516fb6877c8855723ae0dc21b"],["/aff/2eme-ligue-teams.html","c7c6e6b445f168b8aa224ebae6acbfe4"],["/aff/2eme-ligue.html","e59a699f2a0dd5e2f3577207e07088d6"],["/aff/3eme-ligue-feminine-teams.html","465171c555c9bb31bf3c664e44bc178d"],["/aff/3eme-ligue-feminine.html","74d6f61b17edcf4ed50c41998786fe97"],["/aff/3eme-ligue-teams.html","91add92c5a11bc57e4b897c993c0acdc"],["/aff/3eme-ligue.html","710fce660f3740a0a83a694855bf6fef"],["/aff/4eme-ligue-teams.html","710f69d5f23ae1745652b65677b0a160"],["/aff/4eme-ligue.html","4d32056442c7e574cbfd72c751457f89"],["/aff/5eme-ligue-teams.html","760b078720635b6b49087a06377aa0d1"],["/aff/5eme-ligue.html","7d20f0f857faa4671598203cb3300b20"],["/anf/2eme-ligue-teams.html","603a691d8c286088734907e35edee3ce"],["/anf/2eme-ligue.html","45423549562f06c48567364d988568d6"],["/anf/3eme-ligue-teams.html","f78033982133ca5d68e740cabc6a93db"],["/anf/3eme-ligue.html","b2415b043f9a7e35bbf0c0dd9dac1f66"],["/anf/4eme-ligue-teams.html","e773939e392a873c12d2c4f8c18bd5ab"],["/anf/4eme-ligue.html","843d34b4da89bfcfac7f2d70ecba0978"],["/anf/5eme-ligue-teams.html","3058dc90903ea3bcf8fe9e3fd962a618"],["/anf/5eme-ligue.html","fe725933fdd95e46f6d7803e6cab8680"],["/assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/assets/images/cd-top-arrow.svg","e8ffcff1b2d29a2d6209835f6254dbde"],["/assets/images/close.svg","506c846118ee3fcaf87900ba0b90f00f"],["/assets/images/footstats.png","465eafd1bd7cfa523e67e50ae4804b5a"],["/assets/images/footstats2.png","18bdddf334adbc16c7bb7b0e23be05e2"],["/assets/images/hamburger.svg","8659515094d85059439811bbedcbbc39"],["/assets/images/matchdone.png","e4bdf8730201b827660c56aba181a6aa"],["/assets/js/main.js","696dde437b4cf4f1ae6fffddc359b234"],["/assets/styles/font-awesome.css","a3ba7e01001dc4a03755067ef4d62eae"],["/assets/styles/images.css","b4f0b15e1ac728d4cb45404621b10d6b"],["/assets/styles/main.css","13b4e94f401e1ea7133a5f6a411a2d13"],["/assets/vendors/bootstrap.min.css","7e923ad223e9f33e54d22e50cf2bcce5"],["/assets/vendors/bootstrap.min.js","0827a0bdcd9a917990eee461a77dd33e"],["/assets/vendors/jquery.smoothState.min.js","da7419cdd5142a1ab884750290bdd3b6"],["/assets/vendors/tether.min.js","1c4a5999a2b43cdd3aaa88a04f24c961"],["/avf/2eme-ligue-teams.html","c7ac4f823183d2a7a8d49d156d1f3556"],["/avf/2eme-ligue.html","4fb2a37872e727f6c547100c88d53f7c"],["/avf/3eme-ligue-teams.html","42bc1db77dc31207a50fceae03a35ab4"],["/avf/3eme-ligue.html","5e8dae6ea75a1e69f905698b08e192df"],["/avf/4eme-ligue-teams.html","5ddcb8ae809f3bdc5e31d47c2fd53f01"],["/avf/4eme-ligue.html","8b23f2a7e41b86ae2751ba477e97735c"],["/avf/5eme-ligue-teams.html","59296aa3293ecc7369b7cbaa27a6e7f2"],["/avf/5eme-ligue.html","c99cb73b94451f74c9de47688b616b97"]];
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







