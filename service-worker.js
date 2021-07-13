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

var precacheConfig = [["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","ec7d682d40f9654fa75379a7348a0de9"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","a91aea3873fb94a23069f45d8a9042f6"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","92616fc7155982867badd58dcb8456a5"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","00249d366b5a5b3c4c604e822d7233f3"],["E:/blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","7186f861e4e72b4a2e9dbb8ff00d090f"],["E:/blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","b883fa2984771bc33091436bab8114af"],["E:/blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","0a872ed10b6698e9f55b29bfb97b14ab"],["E:/blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","240eb790f345b7c320379ba6df34fb80"],["E:/blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","812a7d864bf37a0829138689e4fd7eba"],["E:/blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","ead39addcf80e413990ebcfb418b9f72"],["E:/blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","ce0c22457fc21602f65a62c155dd450c"],["E:/blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","0da42085073419367e02a69752ba5297"],["E:/blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","2802a9759dd6f5076d4dead722d09f90"],["E:/blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","a368b6529099861e1bfdd46464536233"],["E:/blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","0ce4a7f29c4639fc2e0d2e6be51e01df"],["E:/blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","ed9cb7979678d68f0bc0e6d7d9ccb250"],["E:/blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","4beaec5343b913151cafb1d143de9097"],["E:/blog/灰灰爱吃小云朵/public/2021/07/13/on-my-zsh/index.html","2d193ff77177c494e0bfabb64cf9f7b3"],["E:/blog/灰灰爱吃小云朵/public/about/index.html","e00f079aa418fd4797bc55ba9ed7c371"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","62c7d89153a2ef3cc6c507f49054d794"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","c4ad67480d60ba8746cbbba6fc76ccf6"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","0639a8b02da42e5a556635c9f1446a55"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","09f4320b7666e670559400c858185a43"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","b208aff321e2b5a9669f82c85afaccfa"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/index.html","00ff7fb7977cd58bcc9d0d103d9891a9"],["E:/blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","a414220db629d6a04c31a73ddbf835f5"],["E:/blog/灰灰爱吃小云朵/public/archives/index.html","7d7def1cf0779d2b19173f65c56f5747"],["E:/blog/灰灰爱吃小云朵/public/archives/page/2/index.html","c12a333a6ee57a9867fc0b4d48478bb4"],["E:/blog/灰灰爱吃小云朵/public/categories/C/C/index.html","551ef82ec19e4d79962e8219f83c2df8"],["E:/blog/灰灰爱吃小云朵/public/categories/C/index.html","dd459c0afed06e955d3cfcc923074578"],["E:/blog/灰灰爱吃小云朵/public/categories/Linux/index.html","3b974dd2301097285238e4de5b0a7081"],["E:/blog/灰灰爱吃小云朵/public/categories/index.html","d0213c34fd260ea7648ca580504e0587"],["E:/blog/灰灰爱吃小云朵/public/categories/vim/index.html","eb6a5fac5c86e1bad8dfa3ef77ec95f5"],["E:/blog/灰灰爱吃小云朵/public/categories/wxy/index.html","288c677f9987f22feda8a4d2d68bcd6b"],["E:/blog/灰灰爱吃小云朵/public/categories/个人/index.html","2388a1d14511234721fb6676ef8f172b"],["E:/blog/灰灰爱吃小云朵/public/categories/笔记/index.html","d114f425368d517be65c020403dfb9d5"],["E:/blog/灰灰爱吃小云朵/public/categories/美化/index.html","10d522fa608ec31bebde5667786d6625"],["E:/blog/灰灰爱吃小云朵/public/categories/语法/index.html","c52f5563367b250468a59b4afa1fe994"],["E:/blog/灰灰爱吃小云朵/public/categories/软件/index.html","24a3b5cce3ffeff15285e1e0a59a1bef"],["E:/blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/blog/灰灰爱吃小云朵/public/index.html","cb273a80207b6cb614bfaebb51769c93"],["E:/blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/blog/灰灰爱吃小云朵/public/link/index.html","235bdaa4e0b29e46cc9229cb498b0e56"],["E:/blog/灰灰爱吃小云朵/public/tags/C/index.html","39eb039c14a2a829646649a7e69a4046"],["E:/blog/灰灰爱吃小云朵/public/tags/Git/index.html","502dd7f6456ed92fa1451dc1aaa02822"],["E:/blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","4b8f8a4ac0874ba65761ca3ad5e47d11"],["E:/blog/灰灰爱吃小云朵/public/tags/Linux/index.html","936bbfd2e67ec02d2570415f3454849f"],["E:/blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","e0d76d006dde52019e919f4428a0f53b"],["E:/blog/灰灰爱吃小云朵/public/tags/index.html","24a20da932d6dce27960b8d46f4f2a47"],["E:/blog/灰灰爱吃小云朵/public/tags/java/index.html","8d4185c1908f55c68b1e196b441308dc"],["E:/blog/灰灰爱吃小云朵/public/tags/vim/index.html","88a29beaac6c3ec57ee8828608c80bd2"],["E:/blog/灰灰爱吃小云朵/public/tags/wxy/index.html","b499031d20226e6b2afa4667c0bd6441"],["E:/blog/灰灰爱吃小云朵/public/tags/个人/index.html","71020e692779b7c4a28611ea2c69d1c3"],["E:/blog/灰灰爱吃小云朵/public/tags/博客/index.html","fd45d145305333837edab169f8e1a1b0"],["E:/blog/灰灰爱吃小云朵/public/tags/底层/index.html","3a255c934306028c828497637aed3f70"],["E:/blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","61966486f9ec4be334690ab2b9e5949d"],["E:/blog/灰灰爱吃小云朵/public/tags/服务器/index.html","2274a126d593bb03115b393c8ba44bc5"],["E:/blog/灰灰爱吃小云朵/public/tags/汇编/index.html","981e07869b38720e289d226024406c94"],["E:/blog/灰灰爱吃小云朵/public/tags/算法/index.html","03edc559dc6096450d67e3b8ae1413fe"],["E:/blog/灰灰爱吃小云朵/public/tags/记录/index.html","e38566bd7a67c794f276a4289e20e1cf"],["E:/blog/灰灰爱吃小云朵/public/tags/软件/index.html","28d8506536ffd43446d5b8a8a664f589"],["E:/blog/灰灰爱吃小云朵/public/tags/链表/index.html","0877a39f9e1d5c15d9f0cb74f843cdfd"],["E:/blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







