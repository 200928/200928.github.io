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

var precacheConfig = [["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","49cabf7b1259d543e1f9b3449e84f830"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","8a26dd4a6fb0d2b3685c39e8a6345a1b"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","7c24e06e61c6719ffef6773b975c1822"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","a3859353e93c11e28c69e618b100a399"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","e4d4ed079887929024ade17a7e59e46d"],["E:/blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","bed2e1bf49f36f9ffdc1f8b4ef5e16b3"],["E:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","5039cf611c35990fe88412e454e90819"],["E:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","35d777a812f7595d788fdf9fd1d0c4e2"],["E:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","1eb264026d90d8eab47a9e377ba2ca9b"],["E:/blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","5c8e943e668136587eaa319d065ded84"],["E:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","5d4b86703ec1d17096295f17d13674bb"],["E:/blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","d6a505abaf1986092ce49d979f4070fa"],["E:/blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","4172d2ca91d0b1cc71a2c177bf8bb953"],["E:/blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","c1b00b0db471a54c95ddc4fa7c7444e4"],["E:/blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","aa7ee4a39b68763d4a8470ceeecdb53d"],["E:/blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","0c08199fd0090dbccdbbba382aa7eeb4"],["E:/blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","e176ec39c8e0316c65cfe5eef3d295b5"],["E:/blog/灰灰爱吃小云朵/public/about/index.html","3b6fd4d45a3f9b1dd7332f1ba7cf7196"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","cd8e7b17b59e98e290e187fa4cc8795c"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","976f56aa8b60e13472aa9bcd066f4317"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","865fa2ea9fa68cb55ea55ac58d766295"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","c019040e7b812dac235b7b3c691d6a8b"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","8aa5dcd0905f5f8ff4afae9bfe24cfae"],["E:/blog/灰灰爱吃小云朵/public/archives/index.html","afde1c9d9cf96a6b21fa99bd5cabb4ee"],["E:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","a9d30848570a6b30d4d20e1f5016f97e"],["E:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","a13fb67f05dde0dfb936a00708694cd6"],["E:/blog/灰灰爱吃小云朵/public/categories/C/index.html","af0115fbe09980d208c1faa0c2b19550"],["E:/blog/灰灰爱吃小云朵/public/categories/Linux/index.html","1f419e021d0f501c3194b23d3aaaede6"],["E:/blog/灰灰爱吃小云朵/public/categories/index.html","a8ac40cd287548f806a65518ad444f3e"],["E:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","4889c24873bc39fe76fe8f7f3deda3a7"],["E:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","2c962a5956e7dd4d184f06149c80e7e4"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","b101b47c089b0883f710dfd1654be63e"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","f63872f7aa504a8bfa8f588c3fd4020d"],["E:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","0de9e4f1c90b2db6897f0e881a525706"],["E:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","1d4d54cd549b4d76c0dc3ae7af423b2f"],["E:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/blog/灰灰爱吃小云朵/public/index.html","8592168f1b27655da46928df67727470"],["E:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/blog/灰灰爱吃小云朵/public/link/index.html","36c5a7057c2f4f2d6358a720bfb03d9b"],["E:/blog/灰灰爱吃小云朵/public/tags/C/index.html","e22892612e8e4968428bf59514bac4b9"],["E:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","2ab5ff8d4642d30ee7ac31cdb1d87ebe"],["E:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","2e42962867e2e6d05f1b57f058f8237b"],["E:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","705e834157bd880553bf974072c61bae"],["E:/blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","755b3bdc31d54aacaed45e8a2d9e502d"],["E:/blog/灰灰爱吃小云朵/public/tags/index.html","28e6a664ec33ed71cf8b91770d565db9"],["E:/blog/灰灰爱吃小云朵/public/tags/java/index.html","7104a6eb7f7505c2866ced6c8d600446"],["E:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","24dff7689c3d66af26f3e1cb6da1c146"],["E:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","29327929a8273f211b5af61a9917c08d"],["E:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","92c344b2fc910bb1f6e78975367b9de8"],["E:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","8bf6354bd4fb9c4b71c07c89940d3ec9"],["E:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","5855cc0eb8d331cce6abbb55c7e10201"],["E:/blog/灰灰爱吃小云朵/public/tags/服务器/index.html","29e2eca870bb142e173647c7bcc04751"],["E:/blog/灰灰爱吃小云朵/public/tags/树/index.html","f3630b23e400441459749c6f92fb175f"],["E:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","f341079fb0661066d3d54427293154dc"],["E:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","0c286ade14bc9fbe7bdc1466561b5fab"],["E:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","ad4ba0e52c81d9ce0c9e6470b88eff96"],["E:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","6adb856f37721926d653660749d9612a"],["E:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","5f28b030f66972268bc0142fe5f2464b"],["E:/blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







