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

var precacheConfig = [["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","df6da3d7af02d88c724f027e24f8a37e"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","edea882bd759d212b6b2497273c9bb89"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","c335f8bdd553ec563fbce38a05386c88"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","8f53b8398a366d6903af7459235fba93"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","e4965e0e36ba63bd9f89c5e3e4aee1b8"],["E:/blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","9a4fce31eb8545a8e7c1e1e73ad49cc5"],["E:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","87d699c54c10a6a250baf073341e041d"],["E:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","c6d24987dab3fef79841261862f3ca72"],["E:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","ce0c993b02c07d1c395da799d337d0a0"],["E:/blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","4868ae4939da777a02580d6fd4eab4e6"],["E:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","c072d5e12622c6235b9146361a29c5e5"],["E:/blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","f6d19fbbead0665d52b6cd79d683f588"],["E:/blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","a9dabc55ca19cc3ad6c598dd4b01d9f4"],["E:/blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","9e891e9a0154ceb925c3faad0614d19f"],["E:/blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","42ab3877718ca23c99cee106c29b0d3e"],["E:/blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","135761171ac67a5b77c705e28727b980"],["E:/blog/灰灰爱吃小云朵/public/about/index.html","4a80cf7009f07d1413be7ed30eb8d415"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","cbcf11fca478391b640d000566945204"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","4010578646c7125ea3b65211b984bc49"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","d949dfa66f88999ea0ed00955a2aa014"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","c8ba78f59d63d3b2bdcac163896e0863"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","ee770ddc2dde4f926f5a03b74717f4a0"],["E:/blog/灰灰爱吃小云朵/public/archives/index.html","099dee91fe0baef7000a91c18571b712"],["E:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","f9472257234afa00c0d62d24881dcfd9"],["E:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","f81f05dcdbcc2e132cefae9d4e84b3e5"],["E:/blog/灰灰爱吃小云朵/public/categories/C/index.html","fe6efc94d83350e8698adcac471644aa"],["E:/blog/灰灰爱吃小云朵/public/categories/index.html","ebdea2499174ed057908bc7e36cf39c6"],["E:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","bf9e26fb52fcece1b3b4db08edcec6b2"],["E:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","d7d49389dd0164f5d27ed3576533020e"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","f2e8bef7ba9cf3fbb4fc2b793830823a"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","4ed4e5dca570c185c8c0eb5ff0162de6"],["E:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","6319093b02d2768b6593cdd8045a4c88"],["E:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","088258cd01494e5ba380035c715b6ed0"],["E:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/blog/灰灰爱吃小云朵/public/css/index.css","e9f1f3416b76eb2889eeae4b6803af17"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","b832207dd966a7601d74ac267bb9e80d"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["E:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["E:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/blog/灰灰爱吃小云朵/public/index.html","02af313deabc17be6a66a7a4b8d838c0"],["E:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/blog/灰灰爱吃小云朵/public/link/index.html","497da3a575b4b67936df36bd9e15830e"],["E:/blog/灰灰爱吃小云朵/public/page/2/index.html","349f99d1a156edb7dc38df6dc366bb72"],["E:/blog/灰灰爱吃小云朵/public/tags/C/index.html","f6f0ff60c5285b08bdefd4394fa9a619"],["E:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","670c124e2275958088f38747ce68ca11"],["E:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","9d97132c521b80b194eb19a99707561c"],["E:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","5824fa671bfbdf026fdc4dcb2b7cb535"],["E:/blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","be6e307f8dbbf6c1a99eeaa97f4984fd"],["E:/blog/灰灰爱吃小云朵/public/tags/index.html","320c9522cd3acf22d9088f3e7bb1d435"],["E:/blog/灰灰爱吃小云朵/public/tags/java/index.html","3d15b63e0d54c5d0f28f0315e0676fbd"],["E:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","8b195c99d0ca33b6c646fc14d6b08cce"],["E:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","dac237c59fc19992cf9b6e65b8d54a21"],["E:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","09b692f8467e4ae70e8ee2222693fb74"],["E:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","856c2b8e3a028cfcbad5c3926724a288"],["E:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","219d75da03b2bcf4d35179ca0a2a6aa3"],["E:/blog/灰灰爱吃小云朵/public/tags/树/index.html","d1504d1f0376fffbd208eaf1f79dd431"],["E:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","87072f32d75dbfaedae3db8a551a827b"],["E:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","3c91900f54c4234cf43a3dc469e43580"],["E:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","2db36eed718f38a4f02f7a415e8002fc"],["E:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","eeb2d2b644dc096c5c73cc66277321a7"],["E:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","8ed64f01d37c912a6b9c12fc8d630c67"],["E:/blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







