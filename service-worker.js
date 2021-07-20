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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","cb44a311a496b2c82f77f99947505914"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","c2b474155f1557c289d2002cfd1d8150"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","912e6800237d66476ef44a6fbd662d2b"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","b7a818983bfc421ce7bd059ee2798567"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","2b1c74415cf1bc7830977ddfca5a0df8"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","f1efe422ae17e84af0b82a5f41ce4277"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","57a90a4cae4d105dfd11eb52328a70f9"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","9a453a6f16374c29217663e78817c296"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","30a9eb023a673e9a8552a0d8d06de69c"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","4b3779ab12e0924da25072412f39f0b0"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","9feeaa37b039299c21632040bd6f67c9"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","86cd90f132f83d11771ab5e033831501"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","14971e4f963939564d271e10cbe29972"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","191eea667875f58b826faf2770357a43"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","bf6e97353a60f56ff2b3d458376bcd09"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","270b98cc2741e7c855901945d34b9123"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","b41c47febb9873f64751d6a137071f4a"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","65a4cb2678bb03f54c3271988ade858f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","36e8147417db9bae7f554c68c157e691"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/18/Untitled/index.html","ff5e997197d2fbef6f969fe12a3ad8f7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","726bff1dca53124a7a3aad36987b2be2"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","f961ab072ce8eed209cb48768952497e"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","4e7f7c815940b1c5ddcf4fa2216c8c46"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","952e6c2ff3575c6934a932b2111117f0"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","0c4102ed24e36f93864a07bc7748af8b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","e111525b1b11a383bb71449d58f8f99f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","f4130e99b854431a4e6d5a558a01b7d4"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","7027c1b048ff72c9d8bc7fd3de65aba8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","8f064ae85af3d967c18f3603482f2c77"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","ba7cf1c6101806453cb5858d5d55a304"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","dce00c6a6043802729699a68f8b2976e"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","68087e7d4786c74927d4eab8b08ad735"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","09e30ff626aef4b379f27deb690b2027"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","191a4dd4a43ef102f73a4d7914742e20"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","68232d534ae8edb7c2c3368b73b9728d"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","ea326feb03b574ce7d6fc33cce5b95ec"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","854b2861ff4baf35a5876bf0451d2534"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","556b7914a9501accefa9a6c0926a1fc6"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","eae4cc5dcde77b5c300b7f5a67f33df6"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","f717d16d0f90335709a657a10d085cc6"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","c6eb21069abceff3dff9ff8aa6ce4166"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","48a3346a0ef1973fa7bec6ff73c652e7"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","1f98a487b2d152460175b1e1848b688f"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","33ad0a9479dbdd47cd016662582a3286"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","0125b41ed6f3632c0d62db745f65f309"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","1fad6db25e0ed1d9efc63ba05926f22c"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","cad97814a435543fce500354015e8464"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","e4168b4d21f96f3097a3f5dc6f11449f"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","edb2295d2b4f85403854d2aef5f19fcb"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","e17e22bbf4ca292bd9e3d7185f3361ee"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","9b4cd7dea04b5bc57606006fd9683560"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","5e5ec7584d2c87f3e78532fa7d0bb62f"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","a6a8c3aeb6ea07d626131bf4d2c97425"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","751fed54ec534943859d62f2184eb383"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","13f7084eedddb2327a6312d6900255f3"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","01afe5d317fe03dd62d6441d8581bec6"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","9d5e15e339ac6859d92321f3a4a57750"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","ede9f47cba367588efa1d87047de5244"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","238b11d9676f6962ff4b5c6b74a0fc4c"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","1579714d5c31fe1dfc1ebac1704772bd"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","5186859c648501a2438b1cc8fcaf7ed4"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","9f714a5d7211a3ef2e555e46311a60fa"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","17fc70324dada7c25a1caafa94b24feb"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","127ea8d790b854371be0a35a8c2bd332"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","4ac00a53b34316248cc0a5efb83b33df"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","7c99171c8e4b03b8d0d32111e1066030"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","3d9ea2be2c1b5b7ea167c9a5db27a60d"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","03d5e1c9e1e9b1124a46a932fc5a228d"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







