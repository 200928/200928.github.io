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

var precacheConfig = [["e:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","55e7a710da45a462497ec78006312cbc"],["e:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","c2d2e56aece3eb7d05db17c3900cd818"],["e:/blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","2157924e3df3965c621d78fbed1b574b"],["e:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","5014734f56af38e78b4813014a95f025"],["e:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","0f451251019c3f8c5a82d060a28b09a8"],["e:/blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","ae798cf2d605ce65fe9ab358150a3c3f"],["e:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","363de95a8c8421acb970750d4ddb5a6f"],["e:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","5cad6c3a34369ce6fda4daa5745c310d"],["e:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","89321f5e8d2614cc01c59d58f2bf796a"],["e:/blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","af9678cabbbc9a8bf66909550e49f64f"],["e:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","4a396426205cd8558b085f4603531e69"],["e:/blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","8147b402c24a06f2787d85af8f714412"],["e:/blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","7b503ca7603d4b213e519bd141a6b17e"],["e:/blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","cbc29eacf8247a200bf91b21b2f10420"],["e:/blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","8308315b7b3ec73d9753e7e381bc30cc"],["e:/blog/灰灰爱吃小云朵/public/about/index.html","dee27f1068f4aea9a285dcd849bd4be0"],["e:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","eea0135427c1400157449fc9fc60e592"],["e:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","8561d1397af477535d0a4a791840b12d"],["e:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","9ff1895a39882a06f3004f33405da8c2"],["e:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","60ca8d075937481f19f79e505063e07d"],["e:/blog/灰灰爱吃小云朵/public/archives/index.html","2a28b63f9cebca7a638380e23056b2a3"],["e:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","45e971a414fbc471306b4c7f22cfefb1"],["e:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","3e4302bc476426842966e326b0d2bf5d"],["e:/blog/灰灰爱吃小云朵/public/categories/C/index.html","cdf0e2936d98321b4e55c24fe63b03bd"],["e:/blog/灰灰爱吃小云朵/public/categories/index.html","5b5506f7aa6c54438fd641ba24e5dbac"],["e:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","91d5e0b7b0644278984feb781dcc44ad"],["e:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","0c40c3f985bce154ed70bb56355c2592"],["e:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","7dd57758e5b19d396c8f2eb8b5dca4ad"],["e:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","53ad66514edb586c238f222d56247137"],["e:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","5ff0124b3a8299f170b12c3b1962bf82"],["e:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["e:/blog/灰灰爱吃小云朵/public/css/index.css","d17174f0fcdba9afeeab1b4154f4554c"],["e:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","b832207dd966a7601d74ac267bb9e80d"],["e:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["e:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["e:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["e:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["e:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["e:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["e:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["e:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["e:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["e:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["e:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["e:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["e:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["e:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["e:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["e:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["e:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["e:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["e:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["e:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["e:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["e:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["e:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["e:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["e:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["e:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["e:/blog/灰灰爱吃小云朵/public/img/背景.jpg","3562a2f868c10ed197c86eaa76013cda"],["e:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["e:/blog/灰灰爱吃小云朵/public/index.html","8f4947efd1fb72485dc842c11ac1970c"],["e:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["e:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["e:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["e:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["e:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["e:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["e:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["e:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["e:/blog/灰灰爱吃小云朵/public/link/index.html","d78858958212cbe0a7b62321276481d8"],["e:/blog/灰灰爱吃小云朵/public/page/2/index.html","0ee54e1e73dd7e73273fc72abd6d479b"],["e:/blog/灰灰爱吃小云朵/public/tags/C/index.html","644e6524c8595a73a4aeab46d1e554ca"],["e:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","829c3ba25be4b6ba4509c44972fa3e1a"],["e:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","c3d43a1d87423248acc8e1d4fd8ddfe8"],["e:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","5115cebcabe6f708e202217492276e04"],["e:/blog/灰灰爱吃小云朵/public/tags/index.html","659040ea102396c4c74c886215fae360"],["e:/blog/灰灰爱吃小云朵/public/tags/java/index.html","e451974c10cc88e7683a73dc903f6f3d"],["e:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","0c8dd412b1fe7f52d77bd577433ea9d0"],["e:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","ce4094118accc2bd61e375257a8fb76b"],["e:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","71d5f3789b4c019d04852dc1fac4a6fe"],["e:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","9189c5ec597579f4f5391ddf8847d4ad"],["e:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","9ad8e1e7006a959ad13eb5f05807bcbb"],["e:/blog/灰灰爱吃小云朵/public/tags/树/index.html","85e8f78158bc86666677bd38856afe99"],["e:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","7c50f057f98fedf6a09a3320f3864e3c"],["e:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","3c06153fda30c119b84aad02724026bd"],["e:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","ac3b48c6e68524a7e4bf2729f4fc6094"],["e:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","22fe3046da558f11cd708440ecaac470"],["e:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","0796b93080a15d6325071920b3485b5b"],["e:/blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["e:/blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







