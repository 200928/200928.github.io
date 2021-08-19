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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","17af41227dec735e96f9aa92e6f6d45b"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","296863e068b9ad258e5b32b7af069acb"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","13ba435b430988386f5065dfef842f12"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","31cf323d217c8b5ae055db5e4e25ff24"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","41f6396218569b6d53056286b2f19418"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","d28a4ced517ab65b8a634afe4e25aee3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","377ca71ac4dec0b58ab6c5cd4c4500f7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","a4dbe63eaba2c061739da232bdb373d1"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","868ff3787d5ec0d44e9bce7fec9e8720"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","c82150f62e3cde96c71738ac020f59e0"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","3787c3039264b7f8e14618aa90d8f512"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","595c8319a4735a826cf952efea9a10c7"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","7a027ec610c8de2bd0c6d462b0dcbe20"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","fd35bdb586977a3161052bb2fd74e14a"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","52aafddd569a601ff99377cdb7fbc0b9"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","3eba055d68814695273cf2e814b991ae"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","155488890b2cd24fb8ad0351a6cbccb7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","1d378239bd8458c0bfa5fd4af19efb9e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","b1ce1225b3db41c9eda9204edf6a29e3"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","6e51f8bb192266ccdccaf991eb4f316f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","e57116a1036b5971ae54715e3c8c6672"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","c7bb892637e518ccf1bd70f0c2222a81"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","c8148684594ba6b52b1694d3253a0347"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","21e9a46de254f8110611a0b79eeeda4c"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","5c798f1d04514aabc0fa9260dea4e40f"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","f58a602609a1b0bf5c57b698a30abb72"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","1a05f4f9c21448734cfc9cb5b8cea7e3"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","496f25344345d762f9b0034df210ecc8"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","f848b12013db4f21d49c090421ee6315"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","406dd0aba3fa79bc5d0c60bd6574e957"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","249f08edec4640a83c5f72a018e6d918"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","5248bbc4daa8b8bdcbd95319ea6ba41c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","c6f2b89afef72f1f50c31725d904b6d8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","3621ae109696e93ce3630c03fbda23ae"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","b203556ea6eaebc70205c1abe5773861"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","a25f321eb4d0b2c7d991f4d6516876f1"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","c1e5be9df23b01750d3720d8517d459c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","f924e60d725a9c67016fc2ce19c57636"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","d702555d7b87e5ba13033b1c28c01a82"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","05b27ac98a76f164c089fd9d64260200"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","674ac3abfa2557a4c46f2d3081b9c5eb"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","0afb941cb8c2d763230a2e3f5bce7284"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","25ffdabbc806f67415b7e91bad2208e9"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","f8dae562cb332f4fdfb3d2dba8407ae6"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","a4868fa916e62d2825d72653416d000e"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","47366256e00b81aede04e784129c8de6"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","e0c4289f225ce961e337a8fa80b8e8c7"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","23f4f8e2ad6095fb31b5f1483d80e08d"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","a1e8093ee9d4469a5869bbf6f5410317"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","b1b248a8027d545bd407cb83c89764ba"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","03555aad18a1ca931d4d3d304dc15b85"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","17530e739de233badb482d7c1960e6c2"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","aad6eff805b4e372427e91509a15134f"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","7f198eddf4f8915c2715750e23b96a70"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","fabf70dd8f1c3d112c9c9a8b5cb176f9"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","f75997579cecbace42ed5c7e84ba6054"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","3853eb1860c5899fe9749dfbd1a0da5d"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","c3e3caf65561d0297f9c9b4c7dd793e0"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","002e9854725ecfc32fbcb59ff425e118"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","1845c063eb0f6c740deb39d2fc036833"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","3da1247a0c1f074db6d43d14ef0a7b05"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","f47ea0bc76ff4577dc95b76f22f9b8b9"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","fd8a720a09add4248af45c340086e9d4"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","cf4e6e2aa929d98f22ed8a5452d9bfe5"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","fd8a23da11d9f2deb0fd4191405d4afb"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","020d924154a595d88c2f0c9dd3a9eba6"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","95c674854cf2192e3c6548908b50f879"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","ecca887883749a4fb1eb2969988ece92"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","d38e89e33da8d71bb0da5aa928b2684e"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","ff5de02331fc5aa21206070c00e1b070"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","af1d26629b46353cbd01ed0171894435"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","2060568a60a74c26198dd7e0d3c5d50f"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","4bebc1299afd7b28e8520ac42126cbc6"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","58bef302715b9c30625182660f832886"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","14a26a1a452f05ab1b6ca6af703db775"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","84889909563c3ef515d26885fa1695e2"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","cc52de2ce5e98030b73386bd992ec3a8"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","4419f336e72be563f33d17c399b9a7ce"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","46b25cb2c4c2b964ce7ac40d5ed14be7"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","2c4df2a710fcca76a21eaa954ee67c95"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","049c4e4cab4ffc9b88ecaafedd5107eb"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","be8bbbb6f2b5f52ae497589ba9384058"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







