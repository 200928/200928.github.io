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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","db10caa5d42171e2733e6c5f5df21b24"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","9589a4df4c381791aff5b0859079e8c2"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","29c0cc627056ed01c2feb33ab73ea42c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","55f9d2c3df9eade6c744c2b14a96e24a"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","754054e96bef057ea326e7c41f90d150"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","dcfab4f1969a71859a47b3b9b8eee6cc"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","b8d365422444e4fcc008dd6d092978a5"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","6b5068e6283bdccafcead9dd0972234f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","d0979fac2a19ac32dcbc639118be14ef"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","afdd7edea287e63bc8910e8926128f1c"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","83d4ce0dafbc02c850846c94d462e7bc"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","a95edf7d20c8d3176a2929cff416c075"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","953a00c7291710d331a3da1aba031648"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","cd888617e819f4aa2161081ffa26f4d4"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","7150b40762ec037b336f4f54bb09ddcc"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","f364de1e4d69a993b6a30881e42bddd6"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","a51590690541e4bd954459a44759e088"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","c19364757a4646b402bd796f58ed6407"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/v2rayN搭建/index.html","8dc0e8bfafe2f014f259154b266c278c"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","17a2282645dcc07fb4f1045fc43dbdfe"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","e5236fe2ec6df5f724ff5934b9e31f75"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","52e2aefd811eac7aab1f309b272305cc"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","6376b06d8c9360a2d273dc034ac6db11"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","814947399f91d9829b36d85d1c12deb7"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","3ec292cec2041ce81a31f4dc7ef49016"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","84fff87077b2cc524fb1ed2cefcf3893"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","09cd35445f2352587d28ec3987f235c4"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","a8c07c1295882d64b6323ab10c98bc93"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","da0643304968daedc79c539723b0b2e2"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","e21f002eb1aca74039e707f7eaf214be"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","673fc9032bc1e1a5ac8e213454d856d3"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","6036bc367233aad17ed30d1424be3ec4"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","fa147f155b54d7d4f03dcec1883ac4f3"],["E:/Blog/灰灰爱吃小云朵/public/categories/vim/index.html","6127b5b9e8754c1232d47f2deda49a5b"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","78da1d80456eb59133726212ff462a31"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","2f6411519b3c5b8462bd29a56c68e51e"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","729406abdd76a89a8ba0115ee1fe5ada"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","709a219416cb301bd2f3d1eaae7ea2c1"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","f6252322d265234335c85eb1eb972d14"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","6e0d73ff7135ad8a785d8324ce5fdeb8"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","b3a9ee035b64040ccefa8332aa44414d"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","4abd2869689b6f34c71fdacc52c8730c"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","a137575014bba172572ab2f974675072"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","37873bf03ec3e40b8cd92fbccb454f03"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","b58c4574fbd7ecccae8773efe2e2b0e8"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","2cd4f69887161523a56eef54650fb5cb"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","36db4a61f61e99a796a457164cf46eeb"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","6d343a3f7d1766267f6d84661bca1921"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","5a3e5847daf6bf380db0d549da6445ea"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","1bb875a14194c23172b7281c00ad8b0e"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","8b6bb05d9ae8d0c679c6fb20a6fd848c"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","611cbb02bbfd12cf21fcaedad053709f"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","253370ae5d02b8f481752436d3f80623"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","8a6987ab433759dbb7c3ca3d4c67d0a0"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","840a798394906028ba0810ea1f1d66a9"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","65ef065575d18d10d19e14098c48b02c"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","cb22c041af6329e45899e668a981ccbf"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","e86c45a6176c33d75da4dc0ac76f15a8"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","87fbdb87b343d01ef175156933aa7b55"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","2ba46278adf5899f971436088c423b7f"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","986deb88bee65c076ecd3ab1b944e659"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







