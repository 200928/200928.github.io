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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","48c6d1a0d01ff11d0b044ff81bb450c4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","aee7356931485a76888bd4d2b5fe9ab7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","b476f0a86fb80158b45265da5e7b8d72"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","55890dea665e80b8334b11055211fa6f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","7de61a566b1d5cef7b9e7d8babcaf99e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","e7efc3aec5684c2c192805293e4072bf"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","64919037367f1dca33d71fceb811c699"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","12dd0e61f3269a885fa2524a55cadc94"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","92b88c34a182c34ec5ad8f15f7da12ad"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","f839780d77441aae32372fde560fe3a5"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","cf2cc43f2008a711f0a2b07fef7e014a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","ff339a17ab9e94f8651fa616b88f02c6"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","861555c8b113c8eaf882a986af8d6d1f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","3d46c22769d85266d884e5ffd9bf6b87"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","32aee04f58d53110ccb3fc77d1a4e17d"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","6737a2ed7de5ce16c1caa6254c8f3190"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","aef0dca977c2e1f9e9ac0a5fdcd6d5fa"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","a2e5491f0cb95edff3ca42855ca275dd"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","f794ca4b7ef3bc07bf4bb3912370bec6"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","d45d58b8446d63e54ed64567b71d85f6"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","877751582a5e520af701fa6a381d7bbb"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","eed0b68770e9937fac6fafaef1dc0d79"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","75035e4c78bc91c3ec7008d410933520"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","2207e4447e53daefd58e49cb1bd4d373"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","bb00c5e59f6d1e09385b8e01e060247b"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","132633df4d98365c819bd4fed633abd3"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","6f67b8b8fc59617d4d4f5effa22a003d"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","6bf61629b6a876aa8ecb157656a55c38"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","dfdb953dfb84ba588544b7dcd02dde2e"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","0eafb1e457dcfeb46ae63140cd015d87"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","a8c578570050b54d7f6282334eab4a95"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","ed7cf97ebe346c38402001dc35462701"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","4f3319d0ae459654255c8d04bf634f67"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","d17174f0fcdba9afeeab1b4154f4554c"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","b832207dd966a7601d74ac267bb9e80d"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","f9492ce8b870acfa353cf707f768e604"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","722776878a6bdf765bdf7bf1cbf8f8fa"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","0b15cd4f14dc498e61817ae98794da0a"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","9d178bbcd6403dbec9e86e7fa3eb36b6"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","cc0994386db6aa27eafec6357fbbdaaf"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","c33db9cc950aeaacdc1b54fab8fcac94"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","6cdff9f03b16bdb1eaba2debaaf564eb"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","a5c924bee097c7af81920e934e402a89"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","18066ce19ba987dc9ca2c1eac9ba8ab1"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","3292b7d8b076991bb9e3428a790285b1"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","72bb6c0dea95322fd229764d2e7f544c"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","6f86ca4dbec1e1c8f6d4ae8d09f0dfbc"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","b92b483804830f24a010a68bf6343915"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","36651ec8f435e05f260d0dbb1b5c43a9"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","50b141ee2adcb24704228e8cb7009206"],["E:/Blog/灰灰爱吃小云朵/public/tags/树/index.html","199e9483034818d0a8463c52a5e62992"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","c6872a82bd3233ec8c04b1270478aae5"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","bc80779fd43b1b279ebbb8158cbe548c"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","16c90ac2467ae7848d8316a8ffd58418"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","0e3a2b20575b7e74a3645e4456fadf97"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","02594df4893041e9af6310d1ec1f0e7b"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







