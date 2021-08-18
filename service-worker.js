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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","5c702bcf880d23d8744e4a438eb1f221"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","2c0d80886590ff79c4092d3dc8589174"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","8d90a196503e20d44900fe18b89c7b31"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","50c55b49ddddd32c5b04b0b7adfcb9c9"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","d3f095c416d496140c040055d3b91dd8"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","32c78398fa438dc934d7f30002491c45"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","ad6636e864428c6a095b8f7df8e4fd25"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","2fb1cda558b2fcee46f1e70373d1e357"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","45e718769b96041c813926f57b0c85ca"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","f43da780c7d5dfb29b4521f33ab2306f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","b6f8cca6107881a9f5f323e1e5c1c1fe"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","657af0e803ec7b27a77a7ab7b6ddcf99"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","9a5b038d639be55e6739f2407383c390"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","cb42edbca1b2f6d0ed02893d43f93a58"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","2f1d049a2c56d4400669611340b9f566"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","369283f81688d279ce8116038dec98aa"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","954750e507c351f9e852b5d77d85b092"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","9c3a4751ff8b742cd7f25fb2d107c2ad"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","e5eb34e247a770b5f2d5e149cfbfc1ee"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","d43b3f9736ef188007d73c0d67d60a64"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","ad7f4610c00a68ad4c448b511ada8849"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/21/data_struct_01/index.html","5623a1dab64118eaf8709f3864fb391b"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","07546a539855b9a2e2fe223f5beb8485"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","e2eabe4ccd1de42716e011930e5dc42b"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","9d666d76c1c48b46c3fe7a3cf7756b0c"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","57e7344e4cd0ff2c7c7fe5544a3c2271"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","ccf59f09310a40c39c641972ef411b8b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","1eb6237221bcb0c7e0c19e5b49d81cef"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","299ba8d4e4208dc4b66d07c70a8eb555"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","9e68c8bf17347101ce1a6096977adc4a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","1f0473792391447a28033960c0f17dc8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","d3cfb2a7a5a68f33855a4c861cb9ec78"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","b5cf8205670a685dbcf68c978b55dfcd"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","a07c23cfe1cc33dd1bff6a415bc40a10"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","d974c4eb88de78cf1be14c4bcfcc4af8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","de4dbe22fef03a29534f72848bb4bc35"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","d162e3bc2df034d5b35d7dc77d1b36ff"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","e438a99659bee7c40e0affa41fbd9a84"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","4ac005b56c4170c7937b6af82ed1bdf4"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","73a0cf2ea703a0fdf882d03defad4044"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","6760320dc1759107c173bf85ec934e2f"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","827adba8b43c84e0ca6beda72fcfde9e"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","66f103c368c5c1c9ccb5a9b38e4c79ae"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","ff027c70d27344981873f08f0421a61f"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","fe2f2ce487f7386498838f90f1e9a1e2"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","d99c933247f72cc746f87be203be0a37"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","79b8968decf9416627d07b6819245bff"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","3b3b80e68895d795fe899d5715076370"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","00ef50d5ede9b203abef33fb3af62518"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","a0a3371c5a7742e4ad37d851818fe45c"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","f1852c125c62c2babc699ef258818291"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","804ea04347e91a23f7eba7909b6d2298"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","146634bf598cb06b45ccd4692af4b35e"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","f1afadd4d1d05ffa5623806385bf5775"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","c1d7b0f5dab7035d250140aa748c19a8"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","6202119b2167dc3a8ab40c72d5cc6046"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","bde7b22954ee01b0e663d7fd76b6921b"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","36fb89696c105efbecab395365251909"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","4b22846c0887a54077f70770177450d3"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","bcaf1756edaca257f5aed17ef3ab8c64"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","b35cab7e5cb7685a90377125298c8b0a"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","e1200be23f40851872a8c1bd9b81f593"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","415b1602c5933d26ae91cc04df58dc3f"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","2936ace0c08551a4fe31d10376931cad"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","2554359846ce3a4f02f68de23c3cb7e7"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","df0ab2603270081b5e61f649cffb0c7e"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","44e47a0c857e256bc7d448f929bf96a2"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","5e1baaa222430f44cdcbe6027a61cd5d"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","1c5cdf46fcc94d83b75983fcca15d82f"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","49d669be971b01a14df1302d2de55a7d"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","a9eadfdef194d5bbe002df704efe1a66"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","649d3fdc66903cf4e3533e1dc7580c9b"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","c3b915fce49c00efb709c105db9fb400"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","f23e48e34d67e21fbe430ba50952c848"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","b788ce4ca29a11132831019e67c17bfd"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","c39b6ee316e7125c2f04a45f9181cf4f"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","961535d5c34c032ded9c1968f006adbd"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","3d363a1194eb7c5b1e15cc758d287b1c"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","93f8d32bb94c8c07bcbdb1f6981d6bc3"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







