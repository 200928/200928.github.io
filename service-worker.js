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

var precacheConfig = [["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","7b0818945e5299470827ecd853b31e63"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","220a8226d89dc8baae798533ec036b92"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","b50cc03ccad014bc17a67ee9c7e6eb18"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","7fea43e390753e62daac41994a930be0"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","a512d634c6e2c658f4dcea726982b424"],["E:/blog/灰灰爱吃小云朵/public/2021/02/22/LinkedList/index.html","3a918711c8b5b7912268109584f08b3f"],["E:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","d14e11603017a87c86b0ce280beedb9c"],["E:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","8b8fc1fe6cd0e93a6d6c4a6e0f3b50fb"],["E:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","4cf1acdb4060feaffb0d436d22d8bfaa"],["E:/blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","4dcc3fd3c0985ddc69d08f56bf9adebd"],["E:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","634896f6e20780d11efc39d13d35dee4"],["E:/blog/灰灰爱吃小云朵/public/2021/03/08/Sort/index.html","1f8c3d3884c10ed40b735d5cbd32c19a"],["E:/blog/灰灰爱吃小云朵/public/2021/03/17/Basic improvement/index.html","62db39711777640b58e5d3e7faa9d2a2"],["E:/blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","0e0654b2b5a8e7c49e26875de46b3907"],["E:/blog/灰灰爱吃小云朵/public/about/index.html","4c6e1317f2cc9bb47687bda5416693ff"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","e4f6f9baec90b3f7f5573f8feffb87e5"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","e3aa233b3736a7d72ca0635009ec6cc5"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","eb88943839ad2a7198d0a7d149a60ff2"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","1cc564834be6bd190d36e86f045da940"],["E:/blog/灰灰爱吃小云朵/public/archives/index.html","d55a49bff11418cc386467640b51fd60"],["E:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","aca8d369216c86d66a43c28319073c7e"],["E:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","d14e84719dd59850f9f16b5b3abbe900"],["E:/blog/灰灰爱吃小云朵/public/categories/C/index.html","0f4b0ada0a5e97a79c8ec92b1be35b80"],["E:/blog/灰灰爱吃小云朵/public/categories/index.html","ca40ad63da2c764aa5b4899db0cb30b1"],["E:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","3f3b3b8ed863fb388647712bb653671c"],["E:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","727fb514abbd3cd85ea3340d2d6ab583"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","bf98f026f5a72e458e7a094add7779ba"],["E:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","adc5871dcf83d26d3f5a27c6d35ebb77"],["E:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","6f6ee67c05ed1cac5d0b453b503b7e7b"],["E:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/blog/灰灰爱吃小云朵/public/css/index.css","d17174f0fcdba9afeeab1b4154f4554c"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","b832207dd966a7601d74ac267bb9e80d"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["E:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["E:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/index.html","e64695c9a8f2c2af699a653f90257c87"],["E:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/blog/灰灰爱吃小云朵/public/link/index.html","a8639e17ec066f478cc35c9135fc5bbb"],["E:/blog/灰灰爱吃小云朵/public/page/2/index.html","daf4135d6e8364371ed1ac3169145d31"],["E:/blog/灰灰爱吃小云朵/public/tags/C/index.html","0231fc09877b0c6a5960ecd50b044cd6"],["E:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","51530a41b790bcf21f03ab25633dae3d"],["E:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","3d9f6535f2e48aef3c85fd8b0c470bc9"],["E:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","5413b65c7ff247ca5ae4f936795888c5"],["E:/blog/灰灰爱吃小云朵/public/tags/index.html","1423ca814bd815265e0239b16006fc20"],["E:/blog/灰灰爱吃小云朵/public/tags/java/index.html","9409c6b42902bb8475c7034e99b8acaa"],["E:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","6f80229a28da8f15c372ee2c67fb910b"],["E:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","a5ae883c528bc2874d118e2d47403828"],["E:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","4f69f16749ae0ca316acdc84e252cc09"],["E:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","96fe65bde5cb7f36d1b523c4fd0724fb"],["E:/blog/灰灰爱吃小云朵/public/tags/排序/index.html","f029337a2517dbc400cf1ccf35216400"],["E:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","81b77dc171f876a81353430919e20b3e"],["E:/blog/灰灰爱吃小云朵/public/tags/树/index.html","3ba889a72341afbd5ffc134eafee012a"],["E:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","988e85b4380cfb80f699705cd9d438db"],["E:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","ed48c5cb2321863863884aacdfd76e0b"],["E:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","650d4b7d08549838e8ccbc8dc535e6a4"],["E:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","48bd24d2ea7bd781e9819c7c14dffbb8"],["E:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","4187c59cc131e820c3c1382712f0a9a8"]];
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







