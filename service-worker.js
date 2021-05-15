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

var precacheConfig = [["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","192bb52fd6fa76af2141dda5c7265750"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","4c2456bc31bd7bb22bec758222b6e35d"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","00883a1e3050389985ef28b095ab197d"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","a3859353e93c11e28c69e618b100a399"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","e4d4ed079887929024ade17a7e59e46d"],["E:/blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","bed2e1bf49f36f9ffdc1f8b4ef5e16b3"],["E:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","99e9f2761034638eb569b07176d81f5f"],["E:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","35d777a812f7595d788fdf9fd1d0c4e2"],["E:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","1eb264026d90d8eab47a9e377ba2ca9b"],["E:/blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","5c8e943e668136587eaa319d065ded84"],["E:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","d9f1096e6fd9fc6e57eeb77ca4c4afa0"],["E:/blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","d6a505abaf1986092ce49d979f4070fa"],["E:/blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","4172d2ca91d0b1cc71a2c177bf8bb953"],["E:/blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","c1b00b0db471a54c95ddc4fa7c7444e4"],["E:/blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","aa7ee4a39b68763d4a8470ceeecdb53d"],["E:/blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","0c08199fd0090dbccdbbba382aa7eeb4"],["E:/blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","fff3c345c5774e2d9241c5ba51f21320"],["E:/blog/灰灰爱吃小云朵/public/about/index.html","fbd81e3f737491373532f0d716a65fe3"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","6577bcb16d38d16400f1cb99de09c821"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","dd9be2840d293e930caf7882ecabb05c"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","274f096d9d657d20ec90b9b8d7da49ec"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","96af99fa486cba9b417abb667709138f"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","d87c9234502f8a725ad27fb9b00cb56b"],["E:/blog/灰灰爱吃小云朵/public/archives/index.html","69880e72149331347e27e4ec1f5056d0"],["E:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","489f82c55d9d4cb6d9f4a9390f5f3c16"],["E:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","1197ba4c845efa2a98dc8fc5e2aa019d"],["E:/blog/灰灰爱吃小云朵/public/categories/C/index.html","32905748d1789a54dc81c39b4d65ed7e"],["E:/blog/灰灰爱吃小云朵/public/categories/Linux/index.html","01a163f11508b8ecb8851b22f5ce5d31"],["E:/blog/灰灰爱吃小云朵/public/categories/index.html","2dc7eb9f1ecebb87b297d672f9143ed1"],["E:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","f3d2ffe3dd093fa6adca5b66a59f607a"],["E:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","cbada375fe2084046c031136bca4008d"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","8f7be074284cb08740aa0a596eea063b"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","5c7e36fc1f33350ba37b45a9e87d638b"],["E:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","084a0cc0bd88f462c9e9b19936a84a94"],["E:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","b15560a21f5db8aa9776bcc3b5be17fd"],["E:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/blog/灰灰爱吃小云朵/public/index.html","2c2859cb41e9f8da84059d7fee4a0c9d"],["E:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/blog/灰灰爱吃小云朵/public/link/index.html","704f5e7c34b072134df3dc9b0a569848"],["E:/blog/灰灰爱吃小云朵/public/tags/C/index.html","a59abda55701a8297b681d3e02242350"],["E:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","3407eb8d87836286462073b9bddbfe97"],["E:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","35e77426d97661133b57805af7135280"],["E:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","9ef417dec33976558e0af8f32c0f8ceb"],["E:/blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","3cc3d20bf8e0d0f35dfde72b20de0686"],["E:/blog/灰灰爱吃小云朵/public/tags/index.html","7498fd4a2d363567894a89f5a10d2679"],["E:/blog/灰灰爱吃小云朵/public/tags/java/index.html","450c2808c4659b2839662194dda3c1ff"],["E:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","907f3224c0eeda9f21d8b62eb0703eb0"],["E:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","78b84a557f2e6e72099dcd4f86fc3524"],["E:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","4d3d89a9da991d4d606bbfde29efab2f"],["E:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","2a8fe07dbfd4170b6edf19fbc778ae06"],["E:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","6b2a26169be17501a8372fc475ecb941"],["E:/blog/灰灰爱吃小云朵/public/tags/服务器/index.html","94322b2e40b2b1b86ce6552769a7467b"],["E:/blog/灰灰爱吃小云朵/public/tags/树/index.html","c0772d15ffc29b9d0f433f8195071f0e"],["E:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","78b8a38e976ca3efd5e581776edfcd0c"],["E:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","848869c2bc8283941426c8b9846e108a"],["E:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","1e37a96b676fa228c8b0b2ecbc81b514"],["E:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","03f259b63d715b6410ca1d04a610722c"],["E:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","be61f841f756366069e88610bbf74380"],["E:/blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







