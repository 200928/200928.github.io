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

var precacheConfig = [["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","4fbea9dfd7fdfec8855cfaf8d1e71f26"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","dadfb99679ef6df50c64615e9fcdf917"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","3b40760b07106cfdfdc2df657f9a9847"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","3419c810f136d16238f07a98d6ec4502"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","48b0172150873139d66a9062a33ec27d"],["E:/blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","af24a89071733d6d7e1b01767a530ecb"],["E:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","2db9577b5f8b3ee7fe78f33a3838a6ee"],["E:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","0169c4c7623d09b4207e3af3ea5c5cfc"],["E:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","a4b216b5ff31f03d2d90287d53f403e1"],["E:/blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","a52f76d899312ce2e69bf2046e9fe7d6"],["E:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","c42255a4442fc53f440cdc2d56660ddb"],["E:/blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","5241789ec2731135cd3c56f729f114d6"],["E:/blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","7261b49265c653a8478865a518705828"],["E:/blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","1fe62d2ce537523655b54934faddfb37"],["E:/blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","ef779fb2547fe38c077d331245b603ab"],["E:/blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","768b5836ad2455039142f9f47f629e94"],["E:/blog/灰灰爱吃小云朵/public/about/index.html","1496ae485a12447466ea7919d1412f53"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","e7ae73560b84e1b70088d4eb51677ec9"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","8ad856bd7a4c44c77c86ec8f57dbf912"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","8e3bc3a8d633b69ab56978aafd19f0e5"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","dc7c13cdfda38cdb4afe34495932de5c"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","8baf228a09ba644208bbdca11113f2fb"],["E:/blog/灰灰爱吃小云朵/public/archives/index.html","1900ce179379b791f329262818a08ab7"],["E:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","c3a1e9dfeee36d16c4fbd11651227a8b"],["E:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","bb7ea29a02608512342d9d99672f1ff1"],["E:/blog/灰灰爱吃小云朵/public/categories/C/index.html","e716bef8c70612def629c623f7a4e4f2"],["E:/blog/灰灰爱吃小云朵/public/categories/index.html","80ef9857160c20a9cf2f117546f07bc5"],["E:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","f29b7ca538d24617e3633236cb007e45"],["E:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","9efa2ae8b6fcd84f679b74d6dc0b4156"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","763421986a05e285f73e0e655bb1d6cb"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","22897fc4cf5553243594c850dee25854"],["E:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","99c610560098f4a21cd07af8f2db2694"],["E:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","0dce154c16d3379ecf376190f2756a62"],["E:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/blog/灰灰爱吃小云朵/public/css/index.css","e9f1f3416b76eb2889eeae4b6803af17"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["E:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["E:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/blog/灰灰爱吃小云朵/public/index.html","d5909d0001ab479031980ac0857fe23c"],["E:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/blog/灰灰爱吃小云朵/public/link/index.html","f4bea1e1015f0e01b4c3383003fef7cc"],["E:/blog/灰灰爱吃小云朵/public/tags/C/index.html","b829cc06cac7ad47e3c0fd70f0c1b9d5"],["E:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","1d43865c78c2d2b146ff546da95fc360"],["E:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","4f2c6f71f0d7c7debba8db9cb3a02722"],["E:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","28dff5d9ead9225c513c3b0d66aeb3d0"],["E:/blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","b7fb8df3c5daed9cdb7f39aa6a079a0a"],["E:/blog/灰灰爱吃小云朵/public/tags/index.html","3b0c2e5f9b600c496709ef7f54d9736c"],["E:/blog/灰灰爱吃小云朵/public/tags/java/index.html","c7d75d7157a49dd710bc181e5445a2b5"],["E:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","ece05ba722f69a4f7cef7424c22039fd"],["E:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","6f2917ad78b26002737be122288a4196"],["E:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","1f326a0d163882d943a5572867c36120"],["E:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","3979ced3eecd449cdbbf926e538ae1ad"],["E:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","4f11c336a84065319e9f030a2a767bb2"],["E:/blog/灰灰爱吃小云朵/public/tags/树/index.html","a5327a728058a34228bdd49aab8c1be1"],["E:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","13d93c6261cee7fd820c3332bd4f73a5"],["E:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","ce6de541e9e800c504cc9e018a6227f0"],["E:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","50ac275ed7ec337ac849377012aa2a92"],["E:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","6e349ab940e571d520137b8ee7dfd150"],["E:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","aa62b00e39e69c5ff4fa8910fbab1e81"],["E:/blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







