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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","160c88991998f6f10f3660683b042948"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","b900cc03a717c3ebfebc3446ea6db434"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","ed87422d35fdf6cd445461548fceb9c0"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","072175ced065ac74bb284e5832524e96"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","8fce96460c704eb128e932ed2ede12ca"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","b12df9815391bca9d7c84cb01563488a"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","188a5d6517e6d94d7bafa0448a9efa34"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","2418223545e2b2094524ab58b963e3e8"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","638a1ba40c04948376f84840de2daea4"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","0a4eaeec3fb1dddcf4a728982959f061"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","b85a85cb709dbcebe4bc7487ddaca6ee"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","eaac8c7c97449a5e9fe21e41dc4231f5"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","eb5f61f323c020f1aa3ca66b7cee86ff"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","6543ec4765178921684415bf5abbe9de"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","9a95c7e893bc54b6b628e885ee487c02"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","f3b0d1aa91fcba90e49bfd1d120dfd2b"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","77317917bf0f44296224aa0b0fcc24c0"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","d69a9c41ef477973e4aed82c5f29def0"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","4f5713c0877f89e45b8791704fd38c0f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","8528c0b29e736290736af544a07b29b4"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","0f157d0bd32aa9efb2d972de25a9c39d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","e507771466b3c4e1ea521daf15e8b202"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","663519bfd1f5fc2988397b6a6dd25ad6"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","d27237b7a11d7afe9bf4680be98ab518"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","92022a37b4bd84297fb21e427e4044b8"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","228bbbf43e4c3f9a776f54b859adfbf5"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","d3113ba9bff883117e0c5a59b2ad5f48"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","788d240f414f4ee044cd28204fdd543a"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","7bc1ae35154adafb42e3abd469444d77"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","aad106dd1aa68dca95a5b6812d7bf350"],["E:/Blog/灰灰爱吃小云朵/public/categories/vim/index.html","470b89b29867a9ac020f9de44d46a4d5"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","e0b6d59b751d072ae0a2c22993c01c72"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","dbcbfbe7fccd061fe49a5ee5f8afc458"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","d33377a9e7c9988aafc9e0bd62818313"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","e195f328ebe880cc8203a259907a2f9b"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","dfe73041f04ea626ee8a781e96958b60"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","5625658fc4cc05104b9ab3dc38c02493"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","696151ccf464b040a1f4b9388fff701e"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","501384d9d94464b2e84656262772827d"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","e35022232b0827054f31758946b22da3"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","0020ce6fa89f219973eb5a200de96e8b"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","2af323e86964d6dabdfdff73ef875dc4"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","a60ac564aa795c811df596ab93276c2c"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","d3098c643a9598b8b37796484e28ace5"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","9d0c040d4621916953068c4605593ff2"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","9c2d3ed42e0c178956229ff31a2a69b5"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","ed9ccf89bfdb2a0903cd3ca171f8dfbd"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","ad45b454f9abcf4068cf59e1d205850f"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","b743425b02e834db420ca1a94873458d"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","27cc3743a467bf553cd1ae01fe418292"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","c8e4cbb542fe7436845350b52f34eb51"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","bcb8b8182424121a2b59c6b6682e8a83"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","96d74ee82e77c9dd6aeee148a49d096b"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","41d614f18625c59c5fee9527e74a31fc"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","d1a8d84e4313a6e1060c0665268e4150"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","7c64be590964953aabab9467f788bf8a"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","765c776368dec73352ec4d57835848c3"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







