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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","93ba746598b0bbfbcd075af637f6e6d7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","8eb5b8fe78091e3fb1033de97255af29"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","f5b4a0e3c8d3955653f81212e0a41915"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","f5cb65d0d2584dc64577d8768f0f5d3c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","5f4762df9b326f5a9428656e1ebef121"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","2b2a41f368aafd076c9b0e387c6640f0"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","9d0d70599dc0ba1e493547e115a77b45"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","e4b1dd0dba69bcfff43f2a828db2e44c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","3bedcd01f41b55279684e99a5d35e971"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","58671f3b01e3277bdb4f1fd79a55c398"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","e376c243694b9319ed17f26d2717dd0d"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","593c86bcb9429ab9eaf67dc0426870eb"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","2f4974ff98e74fce5e1598300df305b2"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","c928c1c451630e3ab0b6d718b11e9d6a"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","2c2fba6022eebc29185966a4803ef726"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","2a7a8ca35539131f795c38aa6fd52d01"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","acd0d32b51dd1162ef317a8d72f33711"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","0e324cbed3a05376f0be4a6e39e9f5ec"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","3a258cc18cffe15bbfa94f9515b0002a"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","e2b4c5c58bb6b31f412279708b40c030"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","119a0800ec7f414ab19d8a78e6625013"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","b7dbcc41fc85494ffa0252053c55ed03"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","a0d9d4428c0988a0d40a5377f1fd00ca"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","2f6f862f93f1dea8cce138b2ab010646"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","cada7a50debbd83108c3557db672314f"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","4efd5ead552f4bc1a159a9a59134df05"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","882abee1ec65e9eed0b8064b47f16a92"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","9ab24420d1eef670e1f5c0fa9fbf9b8d"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","fa46eef11108b8bb18d5ec85d8434f16"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","e97ee552b45b0631f7483ca9ef8869ee"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","b81f67f9ac20cc02dc5e0a10f30f83e6"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","b0e9b7dad6d8cbc63132215e0b63a432"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","874366d745433bed3265006d6b5b5c99"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","86274955cf354610c485c8609567295f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","7a7d9c002c122616196c9742619f2e7b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","489aea1439e2c3d4a33eba29058eb5a3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","53c4411f1a5b23a616cf703250f475b9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","d6380df055b26704c490945b838bab73"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","0fbb2df090463107e020720b17a434df"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","2cff3bcf204e7c9fd32eeeadaf5f8c67"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","47bde445a9db5d86330468f0445f0cf8"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","0959a7b6f69feb4cbc02d7a7a7f5ecc2"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","b058bc485ed97a5302a8e8ce40b185c3"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","b27a5db5f9b11bc4bf21f62ffbd831c2"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","e7c50777e898a16805f697060411b549"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","e0b7fb465a39c549d3c333e943def132"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","c0bd273e0111ba32d8de149f272594da"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","cc1fe920b0cd72a0555f5c17f3172bf4"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","44157d94ef1d4e783413e91560cd88b5"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","7bf51175715569a02eab5bebaf79bace"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","d31538156321630c715b07c149a47a94"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","39d521337198960db288313ff05511b8"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","d53bbc339965646c2018c2ced87c7df3"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","159b9795f8b8cc693c150ff3d3b74e25"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","2e7c9826e0252390947e5223a2ea9d5d"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","e6a02f260075b6db0486bec6a015b17c"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","5bec5e82cd56aa6e1fc99b6956d66ec9"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","463feaf066af913015812c0d0fe488cc"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","bc64b9fb5195b6e79ea40077748a23f4"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","9c19c452a7ba106ff0fab50702b4e988"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","8df558d572dbf09fcb3faf8b9420ffe6"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","e8a011ab15eb67067e33728d00e831a6"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","0153850b9815143442e4192a1f99d388"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","93dca82850e11edb27b8bc4031c120bd"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","65107152757fe1ed8f8748179dd3f595"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","d2230a69293ae24da0a8591294357771"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","f3a7f711776397bf39701475b04da0bd"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","b6a74ebf2a57864f911c6d0b4106a28a"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","dc97ca9424f5ac7bc214bf5f3fb9c1fa"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","eafd81ef50a6b50b00d8012853aa5838"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","e0aa7b068bfc6d8b543d09e1b70fda78"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","b22ebe5f938a8228ad43f4cfc63b8f36"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","9ad4c8eb6cf2387210c100e60409cd72"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","18414e4cfce3c4c086421e4fd614b47a"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","cc313ea15bc609b8c0689f696b603182"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","e07309af00e9327cc9803ca3b69d6b26"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","c90ee959c9bf57828dce05047bc3c7b4"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","fa3325636b140f30bb06dadf94194a68"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","1b868605b920364a4b187293d451ea46"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","edc234908d234f9a8e99902a2f644f05"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","25ed47b604315e087da5871acfce6a8a"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","9bcab7d76b4eba003939a9ae5d936224"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







