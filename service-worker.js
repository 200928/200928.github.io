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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","48c6d1a0d01ff11d0b044ff81bb450c4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","aee7356931485a76888bd4d2b5fe9ab7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDEA配置/index.html","b476f0a86fb80158b45265da5e7b8d72"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","55890dea665e80b8334b11055211fa6f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","7de61a566b1d5cef7b9e7d8babcaf99e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","e7efc3aec5684c2c192805293e4072bf"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","64919037367f1dca33d71fceb811c699"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","12dd0e61f3269a885fa2524a55cadc94"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","92b88c34a182c34ec5ad8f15f7da12ad"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/03/Tree/index.html","f839780d77441aae32372fde560fe3a5"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","cf2cc43f2008a711f0a2b07fef7e014a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","ff339a17ab9e94f8651fa616b88f02c6"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","861555c8b113c8eaf882a986af8d6d1f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","3d46c22769d85266d884e5ffd9bf6b87"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","32aee04f58d53110ccb3fc77d1a4e17d"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","6737a2ed7de5ce16c1caa6254c8f3190"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","ec0850c8a75e0dbdb42da735f4417ad7"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","cb126630bf618f81366b5ac448b4af4d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","8f31dff842478ee7bd6777182edd3a1f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","85317b869eed386a4559915549bc58ac"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","70002e55020f6071e082af26cb01846a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","a943ca3371a099c3c713bc8c0e3a0c30"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","e2d8dca57c667f8f7146c25d4b2aadcb"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","46fc8dff7fcaef7f70841a3014c40d30"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","261088e8e47ac8457f9a0fa9e20f5977"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","7cad121f0fa117c10179038bcfab79bf"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","80ccbf1ac6318169ff90360e5bff9441"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","88540365479482248913d1b3d0ad0fc0"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","66b974e15a03dce8228e097344e7f7c9"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","382d2777ce603c31f3b52f9c0457eb3b"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","4a5f24c96b9de59006f78b54af647fa3"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","41e2099b4463d560953bc1f401599b16"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","04fc705b13012e223d2dcb28306d13c4"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","d17174f0fcdba9afeeab1b4154f4554c"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","b832207dd966a7601d74ac267bb9e80d"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","f784f1cf4d814fdc296096dfa7fa3b78"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","99bbef77fac43ae1b9b7869aa7258754"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","02c14a2e059d507c6de752e7f3aa90d3"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","461bf15cd20bc3c15c9d1821ed3aaa1b"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","9216c2a35f0a3a9d204d6f18f8c24c10"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","983b7b09b0a1e8e69bae17cf9fc8d701"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","c4b4498f66765974c963d663dc349e86"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","80ec878781d3076171554529cd28ad90"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","217a0617da1a5d6d768fd8ca0b0bc921"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","de99f18d103a36c9fec1f70123ed040b"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","efca8df224a7a8b81588902ded392141"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","011bdc99fd64fdea117f196129c6ef33"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","2cdb2b12ee3960df5fa1b70dc5755762"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","4b03005517fb41a0ad0fb698c73e0a9f"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","1324abec23f3470ffbbc042c1cfecc4f"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","fe7c69a6a4dc2bc225e24b2452e60e0c"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","2a4fd34db087cdd87622a9e9db082bd8"],["E:/Blog/灰灰爱吃小云朵/public/tags/树/index.html","2809d11d2b1aa5d40ccde908bace0636"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","86fde384795b239e3f7db11fd969cfc1"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","9139be6e9e40c68e7b2061dbe89f01e6"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","d1817bd779552397bd7108744a57c3ba"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","e5f6cdadf3861d70573ea4751b4f96f1"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","520a905ecfbdff8b04c952e613824ce7"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







