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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","7567a7520c6ec4923eadf1f42f8756fe"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","4a339374ed66291b3720dac2f0939c52"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","64730a0aa0029117c057d60d1f4114a0"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","64ba241bb10cbed4b69c4c856ec35db3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","26c1199ced14f886cf159320f6c8937a"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","114a237329f5f6ddc7b155b2e0f3a8f7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","99c1f7a59f7c0593528df4f89ca49a5f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","e8eb197f0481b6fd8b951e93e81c13b1"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","f9da2ae8b5df95678cc1c0aefa66ef40"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","f2f651f28502a17cb8160a4631931d06"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","21ab7b972d0f06078cfa2a6c53b7a914"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","e92e8307a75e6848f6e96f5ff96bc626"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","a3b4420778dde45b78d565ff12e19ff2"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","8748598f07833b2704252dca46d44385"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","983a92b842ceb26d5999b9876f73833c"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","e6927e11cce49419a8f341347c28fa03"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","f0ed7606093c937343f0b5bbbad1df57"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","6accc66078685de7681314b22822fcbc"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","9601bcf51186ebb7cf8346a405e424b9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","cdb359f1dc94a6c63723660dfa07a946"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","b0f9909ec301e69d788733ad53ed464f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","d91c7b9ce5acad56012a520b83141265"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","48bbb5ef242e6d254ffbee75f6a8b48d"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","a13b2a6632c77dbff257fc4f452fd743"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","2baec5f2e8927e3894195087a732523a"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","5cc8d94e1a189df57ed464b274391275"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","82bb97d1f8a09f60d745b7237a5c7cb7"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","221070a0e227a07401a0cd567256f60d"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","17bd0f65443ba7db7f12b8fb4562daab"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","7a8b6148538c16081abeb17dd819d72f"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","0c80a073e2dc660ffbd550de68fda898"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","f22dd62cbb198e8a059b775d48c485ad"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","e8f9dbaa370fdac347f3f82e5e3dc4f4"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","907feb66d6754c4b906b2dc5cae4ad98"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","b832207dd966a7601d74ac267bb9e80d"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","ba16a60bceaf03e9543271cb870e56a7"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","49100929515be731ad6b66bb43d5c3ef"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","c83c8ffca88af9dc53d4af81712fec4b"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","5a3cf63babe856960d686f818b2f2020"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","7391d029f473a5a346cd7c2f62ce4ddb"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","7373498b7c1911e761b00a3797604434"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","db5618b6b0a157575f6ba11f8817ec06"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","dd975bef71f40ae6fb8d7632bb346aba"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","a2b4385593e1d43958ea58f70b6a8e4d"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","77fbde0f922ebf3997fcd4b1a0c0c588"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","122d3dc5260ea974a1ba09059f4713e0"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","1d616b8cdc829f91dc12b3318f0ac589"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","7c636ffe0adad6b8e74645e16ea87f85"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","2a3156a17418702020ab76d1ebed6561"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","afc926e3606b4f0a151eef24df1e7bc5"],["E:/Blog/灰灰爱吃小云朵/public/tags/树/index.html","b6dfd9815759ce275114e1faa06029f7"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","f8608a8cb2705daf915df9690875edf5"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","4b7c2987ce6550424970432d0f6685b0"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","244ef5ded5411683d1842a2e02a47124"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","92ea5cc1de80b0db29ea03f41ea8eed6"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","db0620b5b36a54f2a377f24e01035bc6"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







