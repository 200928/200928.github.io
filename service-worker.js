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

var precacheConfig = [["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","97e8097adfe66418cf25a1d1d681aa71"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","9539af4024360780d9e90c64f4d96c39"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","2e05302d3abdb1eea60f052f2344eabe"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","cd43ec985eadfae606dcf2881eedc555"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","d6ffb84b6d2f377395ff551e858bed31"],["E:/blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","84e568be3e1ef2d9827a3360b4ccb46a"],["E:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","5d0827e74c902f68a1cceee1bd962df0"],["E:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","4e9ce933d95f15a0caac20c24cad7ac3"],["E:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","2564f42111086313140224b3d195b917"],["E:/blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","5939e76d4e719cf7523cc95ff03ecb7b"],["E:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","8eb615535186a8cc304135517a0e068e"],["E:/blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","0e9aaa3b49e41c34d7251c894a9e2f8a"],["E:/blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","818a2fe8edfaabd7b6c973bdff18cf63"],["E:/blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","4427f383f01f3c1aead1a550155a0d49"],["E:/blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","bb26859a5c5b15217aeaac0253d5bc91"],["E:/blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","eeab62ddcec66ba0c9f5deb20fa9d95c"],["E:/blog/灰灰爱吃小云朵/public/about/index.html","3704726eb83b3696aeb3d217daa0b943"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","4fdfc15fa40bee8151ddebe90fdb73c4"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","70afe7fb28d4223fde51b5c4971ac769"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","4b2758e2c3c43f06a3478d5a71d3d32a"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","a98c3eca24cd40cd911f790e97d2d4fb"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","52370688d6e8928c4767ba9d55b24f2a"],["E:/blog/灰灰爱吃小云朵/public/archives/index.html","95df2353237ed284c21bfb64aee2efcf"],["E:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","0442a748c194a73a33ef5d0114d496ce"],["E:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","9f7545e994d5ba427750915615d87e81"],["E:/blog/灰灰爱吃小云朵/public/categories/C/index.html","486ea8ca43ec8112a3778a7e5bedbf2b"],["E:/blog/灰灰爱吃小云朵/public/categories/index.html","89af8d3f3b51716c9ca8580012e51c4f"],["E:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","1d0780c6db089dd58bd0f2e1bb11ff8c"],["E:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","a23ca805fecfaa9d72d9bab0903aa4b6"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","900c36ce161293d72a65c2f4b525e879"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","239bc7a71b5ebb0658bec7de745a9db8"],["E:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","80241de17179e2faaf3ab888bd730280"],["E:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","6951db48c3ede732402521af70124147"],["E:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/blog/灰灰爱吃小云朵/public/css/index.css","e9f1f3416b76eb2889eeae4b6803af17"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","b832207dd966a7601d74ac267bb9e80d"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["E:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["E:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/blog/灰灰爱吃小云朵/public/index.html","f764ce2b7c8ead17dc8da018fc82534f"],["E:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/blog/灰灰爱吃小云朵/public/link/index.html","b499bc098c084636b31a4f5d5b033fb1"],["E:/blog/灰灰爱吃小云朵/public/page/2/index.html","a42eb48e9848b78da1c845413b7b3075"],["E:/blog/灰灰爱吃小云朵/public/tags/C/index.html","d20e9fcaf2b9c8f3fef96a9303b2a4aa"],["E:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","55fe425d8238849b0ea609677b311a53"],["E:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","5acc55d5c3e6e7468c8036e88505fb51"],["E:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","dff0d0288764ff26bf9e229a3eb9d732"],["E:/blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","44323119dc7b3a0b483405bcb32a1962"],["E:/blog/灰灰爱吃小云朵/public/tags/index.html","771ead327c7595984e34e7a3fc465f78"],["E:/blog/灰灰爱吃小云朵/public/tags/java/index.html","728854283009a3f886a496800089bec7"],["E:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","c8679f916d6ee2e4e5f8844da02215b4"],["E:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","5bce872d429e1054edaf2cdb2f15bb3a"],["E:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","5858ba3131c3d930fb4eae08c4eb9543"],["E:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","c370c9476f33cfa8ccfbe39837e7a067"],["E:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","d8ec006bcdb0d99d3e2362ebe4351ec4"],["E:/blog/灰灰爱吃小云朵/public/tags/树/index.html","4c13490039697e1afc58adce588f31bf"],["E:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","646d6600cb6de1f6ab99f15ad199e097"],["E:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","674f59f170a55161582e69cabeb6e074"],["E:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","c650c2200fe97e63c4575e5cc5549a29"],["E:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","3daf89a2d6bffb6ecdcacc06b5a7f505"],["E:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","37744c3e511b20c49507f7cf4e40ce76"],["E:/blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







