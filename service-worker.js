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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","5d83a34b4e6a133abb5a44d78c7f9677"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","338591776fd5ee21384489c0c6476b5a"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","7ba109584157527458c6a7fd80836525"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","b2185f38d97b39cc74bf6929f7ac8491"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","848b2de7c9e950656f3bbc185bbbf6a1"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/LeetCode_LinkedList/index.html","1e901bc0cf689f1ce9df456f9bebfac1"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","0dc1d149580b511afd258da0be37abf4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","3053cdb2de5501ebf0be111bfb90c49b"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","e8f5e6f65bab8e27032fd68ea2d55e4b"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","b6aa0eba75a8a9ebe41b5c6807a0830d"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","5ecf4eab836dd162464d9becc538c504"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","458cba9f9c2270ea6862cf2316602494"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","14c3749370725f21cf1900cb1980dc89"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","db9c6a0569ee38579ae0a87ac4770054"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","79aec10080c45b86b201f91c736c1c57"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","68cc2c7f224a0016bf15d261ce231bd3"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","02f3a312c699dbfd037475373a764009"],["E:/Blog/灰灰爱吃小云朵/public/categories/LeetCode/index.html","1786b2eecbe29a395638efbff102e21e"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","4af9097b2380c6405820ba2a5d498fc6"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","5ece902f30e284752bb1a4d224723f98"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","97319538ecc2ac170622c28142e35062"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","d8c63348d5798cdbd3aa4913ab8bfca2"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","85f9a0d5eb350197d68e8fb6a1cc270e"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","7470b7de424cb0437d239186ec54c3a0"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","ed9e46274f1c59c701dff25af1632cb5"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","060d07c50d2c9fd9eafe68a36dfc4845"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","b832207dd966a7601d74ac267bb9e80d"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading1.gif","2b03451fd8e1882905ee4cbc30131263"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","07cf1452ea43d105cd4b73884e0c2c7c"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/index.html","88c9d20b2bb96ab86def34d71e57e59a"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","20493d54f94c69975c5c044ba6773c82"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","17d6fd5bc70780808a6e5821ba1c6581"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","e8b1d668be14d84f40dbd975ef5971e3"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","963d6358101fa88e18829eee3ee9d205"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","ae5da47797cdf96e77bd7f87da7b0015"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","2f1c4311323b653278d0f3ec23c4cf02"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","ccb71bbe8039660dc1191348dfa67170"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","b1a15f51455dedb9c3d6f1dd74eaacd7"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","cef36bfe17b55e523128cfe6ce043e22"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","a65a8805405c647615cc22c8409bc041"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","ccff74bb39cb90040d1b54019cf42746"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","0b4bc33c3a1a36cc849774b0d2dab440"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","8a598a0bd255436abf89e7cb4782253d"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","5f4d1eab99fb907ab8319452d2b7a6db"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","07392936a9cda819e30cbf1ff45ed8ee"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
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







