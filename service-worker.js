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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","37c2e735382898477fb08ab3faf755ca"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","fbc6f19f48ec2b26355875cddcc1298a"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","fb028f73ff62d43cd8a1bec001cdcf3d"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","05b076827339e62413718342cd79933c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","6c37ccda9e59d834b80793dc006921f2"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","96c944d91c3c08df6d38d11afc20c8b6"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","77eb56a139ff53164b2c84c05049fcf1"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","3b1144183c1a342f1fbb38bab2eb067e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","8c2c46685ccc482a8e0ec76cd6b6e973"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","5c8e943e668136587eaa319d065ded84"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","875cfad3ecda5ab2f8619dde8979507a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","14bdce0d9e19faaad81aa0d799930bde"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","5b372c0016437ade0e4b415ac34118b4"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","4096ae598cb07bfa741f79b23eddfe0e"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","0b4b12c0c38b497e3f9a77d16104c435"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","cb1de8dce10111d95aacb822dd975a0c"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","60395b00400832b879f1b44c24948092"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","56b711a6f86e9fa2843227e3f884fbf3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","6940a7cd905a1c07d0c6a61b0ca455a9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","e073f00faa8d91d941c237ab39f5ed4c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","e740e0e6b12e8f88edf2eca6f2f39d78"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","b32e56a9f4b9bbb38084264fb9065fb6"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","f3b9fec4b119062d1b4b8941dfabb693"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","26db5c85d8a11c6d59070a38ad875264"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","08f3a8bfcaab4e6afba36645275ccee1"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","d138cc3ea89fcd75296ea62d0177f651"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","56f4ba346499ef6c6af51b6c10343551"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","56338eac4278f6689ec9a0a77138b879"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","61147e2fd1c78d0233095a7b3d2da0a5"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","370111a71fd45908675f12ec050ce44c"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","d893e730ddbf2811dd7107938b77ac34"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","fe3e07d97e9a8281155b99821ad60774"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","1f92208c187dca0f87dcc01147549099"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","b697d8994d75fbd9c7c0bfe9f4a9e85b"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","71e66914d913b5c8f8313cf1125bb4c2"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","560808ee2809b7664665bda03346d739"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","b81bea20529d32c31ee857c4fd6e6357"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","460d09fab223262d5d0ec637beac6566"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","01b4686c72f828f3bf6ccedccfe1bd46"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","7494fbe409366865be47874cc3d4b428"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","781c138e7a3aaa78126ceb2a7dfe74bf"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","8200539e6282b8e49939f5f5a493e362"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","d299cfde95bc5eb784ab241ccfb6f6f8"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","b82468fcaac6078308743e6eafbc3dcd"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","c31780d1bc08e2a65a0ef39c2c14a195"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","2c5286a2834641ad853840efd1e549b4"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","8c79389f78a3d3bac03c80052709dd4a"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","b932568a3553af586995b6cdbca2db32"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","b706268b772b85c5f775f1684f19dd72"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","cdce70197c25a8d000b810b73c14771f"],["E:/Blog/灰灰爱吃小云朵/public/tags/树/index.html","cfb85c335b0053ae2326c2b1f564b297"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","ec7886c4c0e00bbb062cc991a24d51cf"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","8748b9da99b704c393f4081eaa717af8"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","24a44e1ea59dc10e25473650e2d15764"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","e5e580509bce17b205b594ae65cb7099"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","84e71619ce93d766effad207c1228c9b"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







