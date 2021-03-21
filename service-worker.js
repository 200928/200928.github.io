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

var precacheConfig = [["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","4a3f909a90959f9e65d74688abc52cb5"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","67156bf6f2f7b36ccf611560df3e0bce"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","6d0135ae3963aab8f095b58968604645"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","f9ed1f2c1bc7e7882f1d255a2b8333bd"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","85918bbe7ef765de908599f929b72fc3"],["E:/blog/灰灰爱吃小云朵/public/2021/02/22/LinkedList/index.html","9e7d9ebc9cd22574ddc785741013dffe"],["E:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","5f37bf4065f7091540f5a174d3ce2742"],["E:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","45b46ab7562e87f52e057c78c0cf020e"],["E:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","95837741d649639e75273ebe41d89a75"],["E:/blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","b15421ccaaa649e1ac36ee19e807051e"],["E:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","3a1bb773a37b28b7f5569eabc3cb09c3"],["E:/blog/灰灰爱吃小云朵/public/2021/03/08/Sort/index.html","2230e8671a600056a6201cc91c52248b"],["E:/blog/灰灰爱吃小云朵/public/2021/03/17/Basic improvement/index.html","f8f30f363cb144a66a5f0547b8f6c0ed"],["E:/blog/灰灰爱吃小云朵/public/about/index.html","95b4090a9e495228964a73b58afcfdbc"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","7b64de6754c686bc476cd4557bee24e9"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","ffc8f0a07ac581d0b4f719a0c87a9fba"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","657bfd78e3321f5d0aa09def2c912fb4"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","3b8b34ab75811177ff193745f8c46601"],["E:/blog/灰灰爱吃小云朵/public/archives/index.html","ba71a02e942694bb7a754ea62093ec3e"],["E:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","2a913a38d58cdd74ebc333e4c833bd66"],["E:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","010d9c32dfccdef3b541c777d0acf259"],["E:/blog/灰灰爱吃小云朵/public/categories/C/index.html","74fc51b02c78c71a74b0830d8bc65fba"],["E:/blog/灰灰爱吃小云朵/public/categories/index.html","b3017184d44af79c07fa665af5141992"],["E:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","5a5d7a385ea5de435bafc486eabe0653"],["E:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","b04ec031761830ea933549790e0b0d8b"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","dbce9bc737b999aeba4a41b2e2088be1"],["E:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","ee279f4c085fee89edff12e4833bf1a8"],["E:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","592717e196745b6bd25fb2ffabd59085"],["E:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/blog/灰灰爱吃小云朵/public/css/index.css","d17174f0fcdba9afeeab1b4154f4554c"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","b832207dd966a7601d74ac267bb9e80d"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["E:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["E:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/index.html","88af9fa656885b1ed1302da90efd373b"],["E:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/blog/灰灰爱吃小云朵/public/link/index.html","0b33602c92315a9ed9c182b73d6d2abb"],["E:/blog/灰灰爱吃小云朵/public/page/2/index.html","cf09b34b95f20ef8a7c61a493114b0cf"],["E:/blog/灰灰爱吃小云朵/public/tags/C/index.html","be365700f35defc59d9566fc5cbb5089"],["E:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","4773cab478128a54226ff73a3ec10494"],["E:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","a8f5d13edc5528c330c7ead7ad2d27bc"],["E:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","f2d61383112cd1ef02a94c0f7c54b68a"],["E:/blog/灰灰爱吃小云朵/public/tags/index.html","efc520005b04bb16de084baa0242d0af"],["E:/blog/灰灰爱吃小云朵/public/tags/java/index.html","456c377ce18c9814d21319407582f78f"],["E:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","3ce4444322d7b62ede5f35b67ec122aa"],["E:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","ab756dbc9e13e00e83c13e66932e169d"],["E:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","6713670f4d93c992ffaa417473dd93bd"],["E:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","23abeebfff5f85a8aa744fbb332ffbe9"],["E:/blog/灰灰爱吃小云朵/public/tags/排序/index.html","b571c95d1a1a7881c1c12b7527d4bc85"],["E:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","2b574c7cbf36d7601ff52134b9de925f"],["E:/blog/灰灰爱吃小云朵/public/tags/树/index.html","afc8675b4e0bd72f8ce3f5d59b8bf81e"],["E:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","4704dc58e6f6d300b6856b37b1dad57d"],["E:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","8467f05c7b1ca752ce4c636afaecb205"],["E:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","597eb916cba19ffd7ee3b4424d95e21c"],["E:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","7cb2484b8048aa5df6d502c691c30ef6"],["E:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","ff8ece689a74e35ee8023b8cd3d45eed"]];
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







