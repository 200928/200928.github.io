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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","5f62e8a92019b815b2eb0927894386ff"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","e62b7cd0562dc50ae389eed5e245dec7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","f65ba9f6a932977fd8750ca4cd8127de"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","a3859353e93c11e28c69e618b100a399"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","e4d4ed079887929024ade17a7e59e46d"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","bed2e1bf49f36f9ffdc1f8b4ef5e16b3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","154f3fd73b0ff02f17868d72b14b4bb2"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","35d777a812f7595d788fdf9fd1d0c4e2"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","1eb264026d90d8eab47a9e377ba2ca9b"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","5c8e943e668136587eaa319d065ded84"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","d8d030712187e4357c749b0f472e1997"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","d6a505abaf1986092ce49d979f4070fa"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","4172d2ca91d0b1cc71a2c177bf8bb953"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","c1b00b0db471a54c95ddc4fa7c7444e4"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","aa7ee4a39b68763d4a8470ceeecdb53d"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","0c08199fd0090dbccdbbba382aa7eeb4"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","fff3c345c5774e2d9241c5ba51f21320"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","20629c79f4a0f2a43628c2601d267dbe"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","2c4c70f4ab571c5b0878ae9c214cad5a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","29efaa09456601da48042d1da26ed7ed"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","bf4006696720ba60195b63148d52d9d8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","475f4095e85866b3dfe43ac9b8fe1b9d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","6a53e43d2149a96f416f733a3840d3fe"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","3a1da44de50dbb7afe53c6e0d9335020"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","96e2dba1463af2c7ee8c547e1cf32d6b"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","4bea8c363931cb18cf3fa81376a440b6"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","ef4295fb3ed2dac94720133e6a9a380b"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","fb5f1da4a9ac3e8723c72acad8b2be7f"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","99e9a82448c7d6322e1cd1db2b46c9bb"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","39a78bf0238be619dbda93899d2b02e2"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","95b04cf4f33dae286bb8b77c4156f786"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","06f87cbfba0863b514e71d962a3fabaf"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","dbe5bc74eaab9d9fb95bd37fb0f4aa1f"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","9fe61d540818d81c4053802028625651"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","f5b2a4e2aa97e404c52d110463d7585d"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","907cd2442d3f7788742c54ced14ccb06"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","2bfc58e92110215b823ef58f51b74b69"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","9500736310970f691bbd00e959444a8c"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","0590682539b7feb1fa4bb8cb690352ad"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","506f6e09b61d2775e4a014878eac83e4"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","cb9f9bf689f21ac536f9ea0c16313935"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","1266b065f44b1f962803596eaeb32c82"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","6103eaa1157205dd0edd41cdf48360ed"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","628338b845ae39d022c06a195ffe966d"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","b9a66b35bbf8b499c049efa9a3ea9f7e"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","52b68cd11a1564b731a76020280c622a"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","6dd7682c9ea73593d106ccfbd51598a0"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","c6a0ede15f1e5d3de7f8e3b9c62ea4ca"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","9e8f4b5490131f056f54322a58d74a18"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","ddc04a81313d12d25e3fd38b0d7eba3d"],["E:/Blog/灰灰爱吃小云朵/public/tags/树/index.html","d00f4c5fe4cf7c48cfd901739905c47c"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","78313805e4893b6fae0ab1c56baea30a"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","cd2d8ab38d576bee1f6e13e86446b1fc"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","22ad55d156e17d2b2e88128b70357b66"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","ac0dda10c1a95106fc6504fdba3659c6"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","0f94d2f3aa0edbffec6ff2b78a5f7908"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







