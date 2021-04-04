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

var precacheConfig = [["e:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","cdfa063580e2cfbf2ec3f5093d2db96e"],["e:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","c8a992190665da61ac62eae7c53ac7f8"],["e:/blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","dad1f36d6efc0a3fc25655abb11371ea"],["e:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","d86397db68759d6085fe990af9458613"],["e:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","a316ddb42dd5508c4b1c417278de74a2"],["e:/blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","3b2808f99a96e69d6642887918317ca7"],["e:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","519375ff1acb498d2b6be6a21f194ecc"],["e:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","09f9111bdc907bffc60b2b7e7e14d588"],["e:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","f5a834970a50e578699f1bd6902ba2f5"],["e:/blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","597ade3d56b6e754375367dc0ebebf5d"],["e:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","fe998e411c6278392b48add5d308ce3c"],["e:/blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","36ae0a984416d83088cb3d6716dc4c87"],["e:/blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","6d34cfc205a668448cb6c5bf585b5703"],["e:/blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","168dceb2bf5f7dffeaceea486a5a2a4d"],["e:/blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","ab860413a804bf7201e5463adde07937"],["e:/blog/灰灰爱吃小云朵/public/about/index.html","15b13fd85a3c24a5cdc56dbe70cbc42e"],["e:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","674989842920a30d96bf3b270e3e3c61"],["e:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","59173ae73a46d881d59f29ee88671f70"],["e:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","25e42ecd6db71b1797b727849bb490d0"],["e:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","c1cc1bee9ee84728f54d01ed3762fda6"],["e:/blog/灰灰爱吃小云朵/public/archives/index.html","6acefaffe4481765a0146a6a25417983"],["e:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","1a9d7eee6f39f493323eab99a3ea12a4"],["e:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","3acb2685cb7ce50bfa517d53a85036e3"],["e:/blog/灰灰爱吃小云朵/public/categories/C/index.html","fdebbb45703c8c3cc9d50c942e4bfe74"],["e:/blog/灰灰爱吃小云朵/public/categories/index.html","d4284002be5f0a826f2e9d0bd257f51d"],["e:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","24af34c9cf76a8329484832d0c7836f5"],["e:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","603b79b27447e2d353024669e86f853d"],["e:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","2cda74d7f4f4dcd7543b7abcaa55c3ab"],["e:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","34600515ba8ed6b437696efb2bca395a"],["e:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","dfc2aebb83a3d2e7fb5a8a1964f60f9d"],["e:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["e:/blog/灰灰爱吃小云朵/public/css/index.css","d17174f0fcdba9afeeab1b4154f4554c"],["e:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","b832207dd966a7601d74ac267bb9e80d"],["e:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["e:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["e:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["e:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["e:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["e:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["e:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["e:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["e:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["e:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["e:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["e:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["e:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["e:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["e:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["e:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["e:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["e:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["e:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["e:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["e:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["e:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["e:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["e:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["e:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["e:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["e:/blog/灰灰爱吃小云朵/public/img/背景.jpg","3562a2f868c10ed197c86eaa76013cda"],["e:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["e:/blog/灰灰爱吃小云朵/public/index.html","1f2a31d07e420567dcb8683e836c6ebc"],["e:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["e:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["e:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["e:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["e:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["e:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["e:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["e:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["e:/blog/灰灰爱吃小云朵/public/link/index.html","5b6f18e7ec22b08f5e5a798cd5b2fbc4"],["e:/blog/灰灰爱吃小云朵/public/page/2/index.html","5eb8b28c9e88854993c52e5ac6b1e14c"],["e:/blog/灰灰爱吃小云朵/public/tags/C/index.html","c9fac2d806c182a9822ba84b8d0449c9"],["e:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","444b038fc0a6befec596ebcccce344de"],["e:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","419a8bb38910c2e1fe3b3590f3a76d9f"],["e:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","661a2917074ac34e70cc69ae0ec15859"],["e:/blog/灰灰爱吃小云朵/public/tags/index.html","f8528cc2a47af74aba82258151318acb"],["e:/blog/灰灰爱吃小云朵/public/tags/java/index.html","f7c5b8e85a98404e7ed270eac0ab8c62"],["e:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","7b858670b3ff5df15bb1556a880c8b70"],["e:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","d530abaef7423b488215fe8323991a14"],["e:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","613bbd5a49c5195034c927cc3cdf17d8"],["e:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","f2df5078224dac10461bd455840a6494"],["e:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","f8c3ffb7346ea625c1a4d4da7dd60db0"],["e:/blog/灰灰爱吃小云朵/public/tags/树/index.html","1e180c54cafbfd93b87ddf31f1854921"],["e:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","b584893b41d5a9c6a18cd2c332ec66dd"],["e:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","2f9d4f21199de748ef916f39c3915224"],["e:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","e841e2fe4dd1f1bd67e7331103515b28"],["e:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","74694395e84b2ec95223f29761256c1e"],["e:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","534be65149911b40ec1adabce8355334"]];
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







