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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","81b6d25516fbaf9c281e446b11d0ff18"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","0c6e4a93091e0f040c7b3967d1d3cd11"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","7075c3c6929ad4d4e666799da001b1ed"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","d49ae26eb40a53d3f94b26860bff9f6a"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","e8a1d76695376ab1c27eae889f252604"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","f36ed4801a307385d635112d222a71c6"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","d65bf97e295eba122f1ccde994745853"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","45b4de047fb181e47a640b6d4c31514f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","95df2c2c09fbc29eec581f1da6d243c4"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","2993fe47ef810fa4921e8af56f3ede36"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","4391f654f349521d2e7cae2adb3e5230"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","2ed0978a442c22efda7a1b635007a0eb"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","fc029af987c5080d64aaf8a19cc08249"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","3fd43266684c03a3116332ba2c980293"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","f4be161de55638f318d5962abf13b99d"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","1afebe4fd565ac3e96f9cb1dea5d0376"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","7130e4b6ccd24a72fb99046e1b4f5ec5"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","4f0342003c7441f40367f6dbc7ba2950"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","00b43d505d95764397cdd49a8332a065"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/18/Untitled/index.html","3ff9637e63c0a2ce8e56361068ebf98f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","a3ccf834aa8e3e45c4eff16c8780fb05"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","62a84347f24dc8315501b04eec1a382c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","05bca9ad59c149d89dea14d737c1515f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","5e38544087a706872918be744b2c1ba7"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","dff0f73a028c3522b9e1489a6c7bc6c8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","08bd87e09ad2928670b9e7a163265e51"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","391c9659efa3e1d8f666125890c3ead2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","6654ad28904bc53c12e4f9ffb6793856"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","22146a173957fbaaf339665929846887"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","5f7a5160108ec4200a055f217eb88428"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","3eaf8dc66d41c12cad5ad7e4ad5b3706"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","fdd4c4fd5d3659d06523caab90adb919"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","56a619ea2eafc610937df9ba99876e72"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","8ebb0551419f349a59bef1650f26133f"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","4cdb839d918c6cded47718d1c1e2b4dc"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","b51b3e310632d139cf49c98e4878831d"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","122fd64e813dae00f95496ff05b66345"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","dd00f9415a30ef35469ccf07372a3b6b"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","3934f75fd7070f24a1f803d0ba5bcd86"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","e17cb31dcbe4326004dd647a7687caf8"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","7c95823742d1d202f595c5f995afd84e"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","28c9d770102f15a3de21ee71ca0fd788"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","f1a8c3086008702a3e6c592417850125"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","323e42fef6f3ec50fee20bda95ba90b3"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","0497e59f7644c696e5475ccce6aca124"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","21382aa824b329c622bc39a9a2f14a81"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","3aa7551b8cd432e30855bbe647bc6867"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","03214778b7285b9134f2476b4e0478fb"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","29e4db13ade1ae8f0f6bbf37fa93a50e"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","358b1b697c7b5d73e11e5cfc67e64524"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","d60ece9c792e6a88745db6dfd752001c"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","aeaf414aa8bfd5d4c2974176094d857b"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","4b3a2ca7012556b02fce257ae1b476e3"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","3678d609d78917630cb35e8784c75310"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","a2627c7cffad2fd67074f8f0cd16dab4"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","bd082603e7772a35d40a0602f1828693"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","7c521f6a258139526a3684b30eefffc7"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","7781587dc3b92f00e6ff625cfd1d903e"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","c8bf7d4534cb39ab52afdff58822f9de"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","782161f9362567fc4f30f4b52107e2d3"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","fb31834818f9b28e2c0035159eb512d2"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","7887f4f3c06183848eaae55747415abd"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","f9ef6f286c799b09834f538ff6503a2a"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","08763e57509440f1b42b8e648fa0a9fc"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","bd945fa614f3762c70b1db07ea78779c"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","e7a05d4df01c2e1059988a132d506720"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","5fb10b792160ad9bd810339942ecc46c"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







