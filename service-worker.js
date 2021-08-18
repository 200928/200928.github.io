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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","2345373e09ac9085b64cd3197c199a3c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","d5735c865cfab112d9a829513f8fa6e8"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","b5dabdea417e3d9d88a365828e985697"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","fd0579f064e130f992bb5fb9baf90ac5"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","fa9f37f8e79e37f64b89cebd287b435b"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","bad9eef6c8844c28cd7c9ee08c366e2e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","93ea5a208ae8159dd564655e12fe414d"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","e42fbfd334e2b9abf84b3f48ede3b4b5"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","65e0d06563c43944bccc853b61f70f92"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","f0b5c03dee044ff6645f7514f5f6a996"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","b7176c04ecac11db85e2cde40f1085fa"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","9ea654f9f828328c2e0216dfbc707089"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","95df257699f929c5e9de8fd060770185"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","8ad74ed07f22293373ff9e568d9e171b"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","4ac0be994ee967db3fb30858b1092be8"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","3b7c3d308abe1de4ee6bfc57a53c70a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","9f6d05e06a3b6683fc56322d7fffada6"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","7e4f5e6d2e791f6db603706b3da7888d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","e49e6452e9e126a9eb238ffab46f9405"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","f635beaa15baae637fc29e9c74ed4217"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","5159174238e1f1ef0d31315c518277f9"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","7f2ba13003f915bbef1a16d8f6aa4082"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","ddb54d418bd03e94e08369f2942ac121"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","c412d56f63c4623f1325be7da3298336"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","4ab576daa495a18edb0a7061b592ef7d"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","d96b455a9f77ea3f524b70359dffd99a"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","8e4bfda8bc30294c1b1e53470c5b6b46"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","45d772d865acbacb62d6d2831ddc75d1"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","f1ffbe379a3165632471be50094db7ce"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","8c7c2fce751b2e3b0461e69ba70b97fe"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","e04ad031b5f66737a28146a68c1af629"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","609fc24fc0689e0707686478c12b884b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","c9b41626546c98bc03b4f6e173c58ea3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","4d3f5129c66fc474c2e1d9abb25f22c0"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","a8711764cdd750b4e65f56d5257891d9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","a988c0295c53c573648b14f2881c66a7"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","ec6c325f2193a8241fe7539036786821"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","7fbc69d420a56e86fc607e66a5bc09bf"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","1fe8e1436021514b4040ce0c1c98643a"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","ae3fe194733861cc87ae6c0d16249e3a"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","c1907f0199944628b1ca1e691622364a"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","1c84c6ba4449991e81a3f9c92b5cf9cd"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","b40d0e1cc0565be07257f7f0d693905e"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","6d562d6be4abf1e2b1e0b6689cf48a80"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","c2a29c0b8d1aaada5221aa20e4d4e218"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","5cb11cef8406cee9ebdc3d4ce278c4a1"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","a1eb5643a1771f24599e33fd50d20abd"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","277567b1bebc7d67345522a3141a2653"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","3cce7c3fa64de493e922c79c21a74f1a"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","171cfbb49bba8d918bfe6e080c6b3fcf"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","8cdaefe297056005e748b535fb15bb03"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","e99e3588862613fd7d7a7cd810b723b1"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","531e7cd26544cdfdf180ef60cdfc7e70"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","15cd2df61397e4a15642067faf615021"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","6a97ae30916891a2891b444e68f008d7"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","342f1322ff09d57567d116ba8a9a69b6"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","579efefe4f5a7d15cedbe31d06625789"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","96a036dffc9dff30293e080c8a1994e2"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","d1435db1286e491596a7827baab36df3"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","801db2955d82865987fede61919eed8d"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","d699d80f6f00c0409dd5460b5882dcf2"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","01edd9d3c805f1b6300db22db08f15e9"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","a345ccd486b9eb8ca1eb78c9e63a203a"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","e85f12d1679059d860c5e7e1f91abf95"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","b4e3bec3c691f6745203e90b4ce7b820"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","304f91f57cf63e060f05b0ba28bd3450"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","5ae8462c674b564c2e513fe4c8eb2baf"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","7071869e26b6c42eefe745e27060ba3c"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","1d0c94ce2fd3b8b67e89ad42af8805f6"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","ce0bbf366b1477ed93b67dbaa7dd328d"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","4dc2d67480b70ca0351478e68fc50504"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","4e974b7ad22d63d6f94c3c4b93ce894c"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","742692c552996349435d00598bc7f1ee"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","3f1f8378f88bd6aff193ee74e5efd242"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","8702f42bf9ad92b939583cfe74a75cae"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","6479e461b10d2e37260bb985d23e17d5"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","dbf797a1135be63a93aad79587cfd425"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","fc268b2271b3e91e2271fba9267bee28"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","a82e8ef0933f23da8c9cf4b5c4caddef"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







