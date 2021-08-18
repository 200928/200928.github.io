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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","9356fa144cf697a07db537dc2de46357"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","5ec3f9957a67b0eea8cf37011b77c459"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","c854f081cb1ac76fd12323d7b5749f6e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","d9ba1fbceea2f04f2d4fa6e0b1a1a1c7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","e936313a8d499edb6af111f45be0784b"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","97927f539d2dfb8952dc469a04c57c0c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","97f0ff1caf5b2df64e1414ecc4ef63c7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","c94b0c4e28db3d9eee0732e62c3ba64f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","6b1515f0442524541d49b5fcd68ece39"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","acfd903b659e178c967bd73604578b68"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","e9e35db6c4f141371e49c0f3ce73c7d3"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","560584e350dde7762557200ac91e0c1d"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","172ec1886bdebb295d054172450c3ff1"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","177dc1095743913f9023ba5198e6c43a"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","18fb61ddd29168fef257f1feb5f805c1"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","d7574ba508055a883ae51fd9eb835252"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","7b1d2280b7c1dabc91cdd3705b3c3d37"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","e5ce615fe5bc6b9d0f25a531c7b0b1ce"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","d8c9d09454d14db08af5f81525c291af"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","16c143a0d9dee30302533c6f667cd608"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","fa173b15e748374a9ab5445007b82de8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","039663164c07f90c77e11c145cc48a51"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","a62321564ef1ea97b48c3acc82e5a9d4"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","c692bd38fab95cf14f4981d87707203c"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","d15ba63556e33c6fe70f5cb12c3c0987"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","6dec75d93ef97465f5889e2e2f58e1dd"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","006d45001eaf3aedb401798f958b3b4e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","e94c078965473e6d494f6e1663d64cce"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","bed4924ef2c862145f8a87c1d604b05d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","5c12098dec3520ad2cd41a1f618f10d7"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","a0df8b75728ca81157a1f89962cd01c5"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","edac6a8954206894694217026d5f2a23"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","48d3e026f5e20a760f8713fcfca0f81b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","d8f56239f9ee081f97b96133a4ccc0a4"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","11996550fd9f2646ab066d21adda58b3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","b3043b87426ed0da22662479c409455d"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","cde9463b67c5c27cbef6395944e19557"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","9c927cef575d022c6300965349655e33"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","39ef7409e8d9e812dd403bf4998e2557"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","fe64228cda4fa466936b7f47211435c6"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","0ec7747a5031251b5338c2122f24bd18"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","2705b21c6783f4710cce59c0b59baa5e"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","cac97a00b62aab5610f6230f6c5bbe2e"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","758b39d51e571c065a48feab127adc6b"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","61fade9070008df436cf8917ed55ffa7"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","c133901fe061c92bab0ce442419af199"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","875c8d3ba29b971ab5884a45f23a88d1"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","58d4195e6cf9e56a802d1c854d1574f5"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","fa4ad915878b2e882d2cdcc5b3aaf3b9"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","dfe91e5021f28d80073f614edeaf30ab"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","7dedb9c19b0c40071a8739cac141790e"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","bcf0e53167cba13948f3399a5d82440f"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","dea4dc5808d26a082e1204ff66f22ca2"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","c5eff868888efc44be80d45dc7eb5d22"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","aa4e32aafccafb08b5b0fe87bfdb896e"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","691915a9774e0043c2045c8a94ca52f2"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","302634f197dba64cc48a434466f8c3fe"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","1cfd598b9a488cc0e1514f3a8fd3feaa"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","bbb7a4fcb635b25aea5165869d630ad6"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","2b4c67765dc449e006be1a0de90ab32c"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","78acd596aa6434b1f03e606cd142e8f0"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","2695bb54b0a85ff7d0ae2d7629798c3d"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","65f1c6246e528fd496cc1421c99780cb"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","8017aa20974853a600d655cfa4880da9"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","837383625a54e4e374c3e3ec7f0426e8"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","d47b8fd5c5bf7659da077a81312603f2"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","7103532fa109bd17b39addaa554b1b69"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","d7c568d093c424fcb967b0f56d8c08ab"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","327db7d90291af0b4d37cb7175ed7f7a"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","f682383a905d4350fa7982b62bd994be"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","21ef71dc6faa857dbf8852703b6cb07e"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","855470092e9f10c82b7c830440534914"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","1734a60bee4b5e204298bbd0cca211c4"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","30888db3b0acb1cf612a14abd8c7350c"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","7b819249b8ffbb2e1c7e728816a5c836"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","2f0d839061797e452b629f1ceac4dc5b"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","c27ffd9cf5b461003b46346aa8be803c"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","b9338725dca7a1381b8dacd597d4341a"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","66a7e4b01658297dcdfb0dd9886bd0fc"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







