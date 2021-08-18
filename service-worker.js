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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","bceca5a66eb46668e6c08745a59ef9c2"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","d5735c865cfab112d9a829513f8fa6e8"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","b5dabdea417e3d9d88a365828e985697"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","fd0579f064e130f992bb5fb9baf90ac5"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","fa9f37f8e79e37f64b89cebd287b435b"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","bad9eef6c8844c28cd7c9ee08c366e2e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","93ea5a208ae8159dd564655e12fe414d"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","e42fbfd334e2b9abf84b3f48ede3b4b5"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","65e0d06563c43944bccc853b61f70f92"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","f0b5c03dee044ff6645f7514f5f6a996"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","b7176c04ecac11db85e2cde40f1085fa"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","9ea654f9f828328c2e0216dfbc707089"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","316a784b7f96b229ef0c591eac8f50db"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","8ad74ed07f22293373ff9e568d9e171b"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","4ac0be994ee967db3fb30858b1092be8"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","3b7c3d308abe1de4ee6bfc57a53c70a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","9f6d05e06a3b6683fc56322d7fffada6"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","7e4f5e6d2e791f6db603706b3da7888d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","e49e6452e9e126a9eb238ffab46f9405"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","f635beaa15baae637fc29e9c74ed4217"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","5159174238e1f1ef0d31315c518277f9"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","7f2ba13003f915bbef1a16d8f6aa4082"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","ddb54d418bd03e94e08369f2942ac121"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","c412d56f63c4623f1325be7da3298336"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","4ab576daa495a18edb0a7061b592ef7d"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","7a9bb8c77d6c2b030ecd8a894228c494"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","22c0f31a995081d01049ab897f55df58"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","a52c6ecfecfe813af513847446a8d5c4"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","0695929ab15e674cdbf1f67c4019ec55"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","e1f047d473753bafe973b118e2a70050"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","fe0c9c1dfc8b0ad800e6e2b92f21e82f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","027f3ba371978aa5da9b384d5561ce1c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","2f28eabfa605384b0d9959d96bd5a884"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","7a41bf4d0ee16ab837ead1dc50f71d28"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","820e71f3f4382632ca3bf2653b70608f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","5fc1ddc692dc65c498425a7197394d95"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","39e73009b4b7f379fadc446312387731"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","d8afffe020c292b7ad9e2f8e58c83e50"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","1207b5fa05f92237d2c6c1642f2e5681"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","62435393ca7af17f2add70b3e20f5453"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","61dd4249dbfca0c823b3cbb1140eb909"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","b36a74702ec65b6b9bbc91326caca197"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","334f3847b753fa22e6896aa51fb59de6"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","05548aac706be7bd8cb95e84a5ca0e41"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","91b788c29dc635128c67f4ca14dda7ee"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","c9f0e2d623207530af023b53d784d35f"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","f9110eb2a3bbd8d60f1a6748cbac4a42"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","600c9696ea4628e49d19f44d623d8706"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","3badd2e375800bf1ee74a5882796df86"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","99c06e9efa221c0a774cf94482ba9bfb"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","31ec713a441bd817f72258377b2f073f"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","59ad2215509c6cb86a4744f38d58b6b8"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","6b6ad944615eab9e7adbab0a3a5b32e8"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","beed208a9b98f9b4f875028c8d56a7e8"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","09bd07a6cb1b02612c6c45ff05c18b2e"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","6211bcd67d9830de3963a3eb692e9a9a"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","3292834586fa8e51bdca7146f89f9b17"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","910c740d696eb3f1c75ee5a8091412c5"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","5a78dca66a799ed03b2273310901b755"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","5dbf419f3fb307464dac8dc900adaa36"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","69830a86f652d388709b6f1df48f9f43"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","6ce5e8c10e32c59d99f09dcf7cbc342b"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","a1fd6073251e88bf4e5ee2545b969665"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","6064bd722716a8b65c5c85e772369e33"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","851c52a005214580bbd0dfabc6401366"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","5fb695e168669620ddff66a97e6fc35c"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","d7c1030930fcff84d0be958ff3e479b9"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","b0ec72c2df6198440d48f50ac20dc67d"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","0f658e898ef72e8eb2f91e40fab3ece8"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","76154089a901de1c958d3c561065794d"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","0858f6c4a0c05de20d75df94bc9b5986"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","4230a6319c64b0e9c3809b52bed4c5e0"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","3915c6efdcc717048985092819a133ca"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","65a227d256e9ddecdabab14e566c0064"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","8c6444d2497775009317bc658db11601"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","6490aab16ce6a557312c10d409685d7f"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","daf1403667ba0c6027ef1333df8cee34"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","652739d5d5678882b9193c9475afe62b"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","7cfe69272f308082bb09d761310dcc79"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







