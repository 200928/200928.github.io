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

var precacheConfig = [["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","22e43bc6e192d1d4af447c526540f7ca"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","52ffc57ef9bc0b385d3c9588f9df27c0"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","06a4c655068db3ca363b8c24f83e97ff"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","55cc5ba6ade03b60dc4194fbb6eddafc"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","e8621ce10811be31d5649f280c126e74"],["E:/blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","6f7926399f52246418f1882bec8e174b"],["E:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","62239995702647b54a9e6d43ca4d91df"],["E:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","b8f07343bfd554d679c0189e45ca265e"],["E:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","4b45ca60d1ebf977b0e4a3962cb8764b"],["E:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","edc9de88ee8ee9ba70be6ff63139bc83"],["E:/blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","e95c6e244f103e1591164ce71a9fa982"],["E:/blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","d76ba9fe8e76eeaab0c821e04211811a"],["E:/blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","6834d060f441746a5ea8a8653e617bf6"],["E:/blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","be0de42c3cac8ace58b89144d69fd828"],["E:/blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","85e78cd552f01888730b422c04ffea78"],["E:/blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","68bd09e80b8b6b17dfe3757c38618dae"],["E:/blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","ef30db07db0bb426f0f0d9d9d92911c5"],["E:/blog/灰灰爱吃小云朵/public/2021/07/13/on-my-zsh/index.html","5ad92fabe8636ca645b1ec9232e44837"],["E:/blog/灰灰爱吃小云朵/public/about/index.html","5cac0f6fa23b739cc9a0bb35b8ea8b48"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","8ed213c319c22122a6be55773c69c3b5"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","3e467b07fbd6ef47e075146a1484541a"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","79d2fea35ffe2060a82328fd0414857a"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","5bae1b1ff5fdfc6945f1761e73f3b40c"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","5669389f1f5816885f1b450dcdfd48e3"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","6baec80eb4b740e728a8c8e742f6c5da"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","e26065bb5f76a54e1e5a64d44bea0090"],["E:/blog/灰灰爱吃小云朵/public/archives/index.html","030372b13dd6334c77c1056703a7eb3c"],["E:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","b950e330f36ef80be915713286daeb14"],["E:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","ff91e0b465e38933e866384692f54ca5"],["E:/blog/灰灰爱吃小云朵/public/categories/C/index.html","87b92fdd907fd84c1c0b0299a96b8940"],["E:/blog/灰灰爱吃小云朵/public/categories/Linux/index.html","abc54315ee754c272c867d3dd8fa1b8f"],["E:/blog/灰灰爱吃小云朵/public/categories/index.html","e00bff6df358dbc8f953b57eac13e79f"],["E:/blog/灰灰爱吃小云朵/public/categories/vim/index.html","f136f80577f5eeb8d5d3860bcef5582e"],["E:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","8386166658deca50b7f299cc29fb87c7"],["E:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","40ce27181c6c1d1a5159b4b18a7e8344"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","692c1b3b2d4dc4ed4eeeb60d35a07852"],["E:/blog/灰灰爱吃小云朵/public/categories/美化/index.html","57db1d1cf2de4840f5f30fb7f97ee71a"],["E:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","74f2aebfc61b6524ebbd8f9f60cf6ebf"],["E:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","eb87d9bb07903fa42a08add0a81f6269"],["E:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/blog/灰灰爱吃小云朵/public/index.html","40d0fa911ada91163112aba98c2a1803"],["E:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/blog/灰灰爱吃小云朵/public/link/index.html","4d6a6d977cabb006b0deda6b77f5a944"],["E:/blog/灰灰爱吃小云朵/public/tags/C/index.html","2b174bdd0562b254bb027350add9f3c6"],["E:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","39b5fa3dd6c90ef2f4e71a6c85198f49"],["E:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","4cc87299c83336ec5daacdd7a31f31f0"],["E:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","34bf22586bff8a4f95d6f8c7c480c91f"],["E:/blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","1a6e39ebe92b63fe958c131f233dc9a3"],["E:/blog/灰灰爱吃小云朵/public/tags/index.html","6b3e39b591ed251950b74484ad875d19"],["E:/blog/灰灰爱吃小云朵/public/tags/java/index.html","3400e801728ad0a83bbeb8d060695111"],["E:/blog/灰灰爱吃小云朵/public/tags/vim/index.html","39fcc5d3f2be734cecca676c2108afe5"],["E:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","9b2a75a846ffee1a1066fb5e99fe92b2"],["E:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","6844bc838f569695ebc39d249d0b99d9"],["E:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","ab7a240276557ab031ec2af53fe3d0f5"],["E:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","5b3117e6a182afe4a278b9127fd483ea"],["E:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","c73c7f5d235d3a7071cb34f28f407dd5"],["E:/blog/灰灰爱吃小云朵/public/tags/服务器/index.html","2ecad6a08483ed9bdbe5cfdfc569975e"],["E:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","fb8354d48c8b726496c47dbb95b24216"],["E:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","bfbe3209158d0a7cf2fb41cb04efee86"],["E:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","766ddca048b0529edac92f86b2cf45e8"],["E:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","d628403a0301aa900a671befd94ba649"],["E:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","0d6f84e820b651a1917da4664fd62d29"],["E:/blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







