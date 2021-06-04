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

var precacheConfig = [["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","68276ca3f7fac9ae9dd9e09d0e56b191"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","fc22c13e1c55e8fd2092c922d02eaaa6"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","21ae8de91be7eb31450af0fea80c3625"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","2ef797ac8514bb5f340a73fc42c385ba"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","c736ffb16caa4b4b77612d460e4f12e0"],["E:/blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","e5a12fdf8d02fc1d502cb7f7fe03fc5f"],["E:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","e54c35d699ad68ee4c32b2763659899e"],["E:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","73b62565c4a883445ffbb51efbdc57e2"],["E:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","2ecbb4f58ba1ffc903e5378ad8d05526"],["E:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","0a06d8f6099c645cd18c0323be8177ce"],["E:/blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","0137f5c12060e198660ef27af246f343"],["E:/blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","ec4927a9f33562292ab9ef1ead2868b2"],["E:/blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","304e05419717c3cea5d9988ad2db8c23"],["E:/blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","9575b3b45403d48ef4f690b6d8a94b62"],["E:/blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","a4475a875131a49c7eda5a5569be1dca"],["E:/blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","dd028e4e29d5c952412017ee72d1864f"],["E:/blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","b65c726b10a043cb5d5f9c06f79fc3b2"],["E:/blog/灰灰爱吃小云朵/public/about/index.html","37b4815fa9e6e3a48dfe4109ae7be2ba"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","787351bf2395c9b3fa6f17997badf1cd"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","ae16e20217824789f84cfbcc1b3740e7"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","ecba195f98c88a37b50fdee43b89a5bc"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","aabccbb2149a4709067e9846a7d1f947"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","f4db0276fa18236216d601997f6767ad"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","6ea0e633a52e733dc841e7fa17a9f5ea"],["E:/blog/灰灰爱吃小云朵/public/archives/index.html","253b043539603da52dcdecbc479e907f"],["E:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","f1d9be15853662a986457b592638e891"],["E:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","1a62878c57222ffaa05e398c1fafd422"],["E:/blog/灰灰爱吃小云朵/public/categories/C/index.html","007de787e628be79ffc780bf19e62850"],["E:/blog/灰灰爱吃小云朵/public/categories/Linux/index.html","44a6eb1d5e6621f49cab63dc3a26e1cf"],["E:/blog/灰灰爱吃小云朵/public/categories/index.html","4b4b109cac69129f53318cfacff8e8ef"],["E:/blog/灰灰爱吃小云朵/public/categories/vim/index.html","7cb7dd369439cc7a959dacfb78ec4ab8"],["E:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","a4568d84ca0f13985a46f2d1e586fc10"],["E:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","a796419a59db3e63e19453c6749b386d"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","5e1f0709126a5c532ffc24c981776e75"],["E:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","987c1d4c6c7c05d10408f34be3badd70"],["E:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","39a5db278774ed0c818ca021a7e95dfd"],["E:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/blog/灰灰爱吃小云朵/public/index.html","2efbdf5e54056782e020dddc63d66613"],["E:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/blog/灰灰爱吃小云朵/public/link/index.html","3039d5010205dd1c961db75f05be6676"],["E:/blog/灰灰爱吃小云朵/public/tags/C/index.html","eed1a7d08296f6d0734aab7f754c2958"],["E:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","d555b60b28b0331613ebadafbf919ecd"],["E:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","2e2772cb85db1438fde68e1b6c0e9fcd"],["E:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","71c80bd0769384b11906264987374c30"],["E:/blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","f980102ee8b58013854445e9af85e819"],["E:/blog/灰灰爱吃小云朵/public/tags/index.html","faa9e35d2aa6f7a8a18ad7e09574a116"],["E:/blog/灰灰爱吃小云朵/public/tags/java/index.html","6c71dc78e3a84368de08843cea774173"],["E:/blog/灰灰爱吃小云朵/public/tags/vim/index.html","ff4961a47e4ab427fa2e5b55e7c3312c"],["E:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","8f0bdad2681d878f2433853574b69f97"],["E:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","99ff85d24fe9b59820ef93cf3796dcd4"],["E:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","50acc0634367d89a2868b1d39e77dd98"],["E:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","1820ee9d89354d668d5153f6f37cb6aa"],["E:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","07dc059328ce5dfbb2d07bf0e461cd80"],["E:/blog/灰灰爱吃小云朵/public/tags/服务器/index.html","05c5d1456a5a18fa87e91ca91930fe27"],["E:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","df13bbdc943c8f751c86f9069d7bf069"],["E:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","389688e663c497b4a17fbc6aefdaac49"],["E:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","8a6436bc5a342ef3b2874a015accd0b4"],["E:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","affb6e5c93d978436473c26f2d91d33c"],["E:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","8452f0f727722da069f6f495bb3e2557"],["E:/blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







