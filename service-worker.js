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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","51a442f2d95a444c11c0fad10f00639f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","c2b474155f1557c289d2002cfd1d8150"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","912e6800237d66476ef44a6fbd662d2b"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","b7a818983bfc421ce7bd059ee2798567"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","2b1c74415cf1bc7830977ddfca5a0df8"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","f1efe422ae17e84af0b82a5f41ce4277"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","57a90a4cae4d105dfd11eb52328a70f9"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","9a453a6f16374c29217663e78817c296"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","30a9eb023a673e9a8552a0d8d06de69c"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","4b3779ab12e0924da25072412f39f0b0"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","9feeaa37b039299c21632040bd6f67c9"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","86cd90f132f83d11771ab5e033831501"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","14971e4f963939564d271e10cbe29972"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","191eea667875f58b826faf2770357a43"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","bf6e97353a60f56ff2b3d458376bcd09"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","270b98cc2741e7c855901945d34b9123"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","b41c47febb9873f64751d6a137071f4a"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","65a4cb2678bb03f54c3271988ade858f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","36e8147417db9bae7f554c68c157e691"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/18/Untitled/index.html","ff5e997197d2fbef6f969fe12a3ad8f7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","726bff1dca53124a7a3aad36987b2be2"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","0d2c3501f040ef4ac01a80c66125d30e"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","52a2859c4191a8fc08f13de219b6b43e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","4e947cbe1629dee2f9956e52391ec35b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","73a95f417059438d15873e128ea27801"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","6cbb24cd29f8c17833517052cae4298b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","d961ec5a755850240eff30cca0e06284"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","f10fa4222b0025030596683f436c63b5"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","c4550e58f6c4a71c6c41e4648905f46b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","2d8528023d1bd059847509b0a1f5add4"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","63d8b3b75d058aa879a4024b739637c5"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","f95629e01298cf9c5ee3941d9c6c5e79"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","b8e2dad1cd1e6f1a90b74ff684d910de"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","77424a3c311f0f53ad1358b4d6957218"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","7fa5bf26d9ec44433ec51958cd26f5b3"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","2ef14a9769fa4353fb8c9837bc2778d8"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","adfabb292b34b5558187de3b997bd84b"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","9be188dfafd41d794499e8b1e023170e"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","892a6a144762f52776cf4ae4ba88a0d2"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","0281fd8a75d52420d0bd4909958bce7d"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","82e958bcc9e5e07a952da3fce7e7d6d1"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","1bd4552920968fb7b36a639fb3259394"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","f05f0c4b7088ea90411d2703ac11e511"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","30f788693c4a5a7365658e0a1d570bc9"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","e54a77e473d5cf52d9b5462cacb0c2f9"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","701101fc23b34408de2b36046ac307f6"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","cb581cb4c47f76e07db0f43de35d9843"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","4533bf608b739698ff0c38cc7ac39bd9"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","28655aa15b52f17247d6bf495413c4e9"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","f4d6e4c29c351c34a04b0c31a4d5e4a3"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","62ca89894ea4cf8199a9ed06b8904022"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","f5573e1460b246bfaddd7ea587ab4ce1"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","5cc1e853f377705807168e9e434b86de"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","d6b8809356185d665c7bbc2d2ba2fae5"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","6593d9e2b2231b969ef9f99433587b17"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","c93291835c0fcb5746d9dcf376b08ee1"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","a9fe97599774f7732ac8aa493d7cb78f"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","6a25838d781f9c469c7f08357c6c6707"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","8fbab96e5fdb0f8936e70ac443b599e8"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","0f3b417eb8371b8089ace5f1f4c2212f"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","0cc6d766c76afbd80123595e558dee41"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","5b255cab03a92c1b8cb22c91cb8c6f1e"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","5214ac04d636356554c9a71a692e770e"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","645d9aff87440bf55ff744b9254cbb48"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","51e5ade20f0c8ffc61d66a7e0fdaa006"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","5eacf439475ec14ed772cae3a2f453d4"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","b5099f08d072dc70c5fe6278b2e4b98f"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","6e9997763c8a0719fc2e5feefc5ce7f2"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







