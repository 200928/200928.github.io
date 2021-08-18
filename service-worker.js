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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","7b3409186524155561ff9acf09cc9c14"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","a28655f09037755ba8f75c847f4dd08c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","d97697f7057cd53ea3be99b667980d09"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","a229496f0f255522223ae5bee2e1c69d"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","e7703de806dba183df5ba74e70ad546e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","ad9e7f1d845b90aa69f5f36b25fdf31f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","2d35643cad37ab24bfaf5cf521315bfa"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","9c80ee8200fcd253f9f718b8b9b809a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","70da8904585ca57a78bba142952d9cb5"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","bb5287bce8b4d9c0e7b08d10102616fc"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","48e885a2ea1076552a83fbccd3f5d1c9"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","21b3db3a57c373e0bf9ee95cc26abb08"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","18d265c834086e21de6d84ac022469fe"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","f2c4badcb7cd80c179c6b78bcf8f35e1"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","f6bcc8773b82a3351f2a9e3afea60f99"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","d0024d9c626d5473bfee6b11345ed11d"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","9d805f511d86794a12429b2adc527c31"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","fa187bbdce43ca39c2c4b526e8093e6a"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","dc366703420a6bd7fddab7c289e3a428"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","9eae00cbe4f349c6531c831f022aa50b"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","fc9da0f650289f57c465185a4971250d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","67422b27bf3f820d7564a1d1e1ba7ab1"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","d1fadf40bf7ee4eeca510fff78bffff4"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","f4c4bd645d3498047fc168392d616a97"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","d6d213f8c8161a38fb093dff02c262ea"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","fa849713056d05ce9771f5c137f615a1"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","0d59eb52fe929ee906c78d31afaee2d6"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","7fc01a402b5af221cd4a7e3b64a15055"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","ee6246e8c7d7430801bee4b8766c6102"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","bd5a136552b5fba2aec06a73b3efed31"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","1d066b6064f896484dbadd4ea170f8bf"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","fda93f53b3008185116eda2fb3ecec3d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","64682cae669441f41589afe22ea3c322"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","ec378ea4d899017a24219c004f940141"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","aae95cafd74845762b68ec3d4aea4897"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","8ee0a6ed451ce56b912a0751fc4ba686"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","551ac0137373d3bf7d7e20f77a04e2c5"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","bb6006ec0e4a49730ed8942f4dfc6957"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","d6f3634968a7a8b93b86721f4d0693a5"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","d5d7ab163aa1c9564e13d99b1c480813"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","668a2299bfe2b5167302869b34fd8725"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","927e58500fef73c3de9e63f9f78efbea"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","85d2047ee6272c981344ef9945ef685a"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","5fdb60392fd49f362232b1589241e01d"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","07561cae26375d3cd742f95d7ee43f6c"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","c646ded693a5f9237cd10178fe847489"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","af89b879dc4c94786673afafb1730a2f"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","4fb4dd7a4c958903aa925ff34e70ce5e"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","794a145ea8a66c6737b53a23edf762f1"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","b93f98026e30b72f514ea759ffaf97c6"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","3a2b05a854fd2313b7a1fbd43da403a8"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","08058be22e3cd014d43e3ffece3c4419"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","bb3f14fa1190dcebaa91e73f815a1363"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","aa0985242ace0d2b03c8a8bec03dd43a"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","fe83c4c65ec9e86c02ce61355c072c42"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","0b784b22bd7efbcddff23bbbcda8e190"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","3be75ef6f6f15bd02fe91c88d79979ef"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","fde28f5acd201da7b7fbc1c026a17c6c"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","50985efd97b454ecf4a659be99ae92a1"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","82d46471c7bb564a1442a665388e28d9"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","4ae6d1f9c3107c97108ee520bf8e65cf"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","6fe76536786f52ba4a72654401e43dbd"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","d0e4ab8c0cf3ef3b0e8790e6ca38fc5f"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","a37bb0643e124e4750ea505f0253b92e"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","250bef352b4247c688683a2b28ea20fd"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","4633185f17b400da2fb24a20628a477b"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","66de75081bc5c0314e1ee276bf5633e6"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","96e045493cedd15ba785be7739139970"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","918311d2290c75daa1407d0fb3e6beb7"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","63b339f9fef86555c4fb7d8dcbe2dfba"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","17476caca23c3fde987b388e349cee71"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","c43bc909b0b1de4e902a68ae8a8ff17c"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","47abef989fc74808a0b4d4a306c55863"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","4d99237ed3d7e6e85d74b2cd27f83073"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","c7bf88361493d865a3b45ade65f75e21"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","fb1f658a3eadc997708186fc47be65d5"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","b629f4210da91b73b43eba1293b88563"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","c7e8ec664dfca06643c8c2b3b2c7e617"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","25d077d4fa21f930fd11015dac4949c8"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","cc765a18706a4b057d0a2aa357471ff2"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







