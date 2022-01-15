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

var precacheConfig = [["2021/02/18/Git学习（个人记录）/index.html","ea95caba07c3283a7360c85ee8daac54"],["2021/02/18/Hexo博客搭建记录/index.html","b00c7bc933778dca66c426f5423adbbb"],["2021/02/18/IDE配置/index.html","d2b0f74fbf24db34e93e5bb3dd06f573"],["2021/02/18/初识汇编/index.html","d78fdc29f68988e3c121a6f547442729"],["2021/02/18/链表与指针/index.html","208af80df5f6f84b9ea0046d63fcad56"],["2021/02/22/Topic LinkedList/index.html","5c2baefd231f5fafec66b230e7c032b0"],["2021/02/25/一些设置/index.html","15ffa38d2a8500ee7cd10ad9aef1e87e"],["2021/02/26/WXY/index.html","e5bd732fd0f85a22e8700a80840a1a6c"],["2021/02/28/大二下课程推荐-计科/index.html","27e0424b9d1b5d81fdc100bcf57c40b4"],["2021/03/04/Linux-notes/index.html","76f5d92f74dd1c8cebbc699a0effcc64"],["2021/03/08/data struct one/index.html","a6f9ef5e57b820de6aa67e4aba25ab47"],["2021/03/17/data struct two/index.html","87ca587b2c3d2c37ae44df7ce9538059"],["2021/03/22/STL/index.html","9d8930d284123930f7b618d1aafaf863"],["2021/03/27/Battle-of-Tanks/index.html","b331041d6a798a62aa4205cebb61984d"],["2021/05/01/MySQL/index.html","ad77b3cc9685930bdecc6a7150f7d65a"],["2021/05/09/HEXO部署服务器/index.html","a211c92ed39cd33d4bb4f1119895bf28"],["2021/06/04/vim/index.html","1a7e8cac0c004f2370c8367e7ac31a26"],["2021/07/13/oh-my-zsh/index.html","47b68cbc200dbbaea49cebfbba98380c"],["2021/07/14/HTML/index.html","bd7b628e89f95b30bbb567f21aa6dc90"],["2021/07/19/Maven/index.html","3b8736f5817c9bc0949e38f664280336"],["2021/07/20/随机数（C++)/index.html","5bf41b708e6addf4226a47cabf0c232e"],["2021/07/22/data_struct_01/index.html","161aff7f44a705508382a3f3895ca949"],["2021/07/22/滑动窗口/index.html","0c60a6a02adabbb6a84a68e8bbd30915"],["2021/07/26/Tree/index.html","f7685141ecb932f98e1ba3f34d7552b3"],["2021/08/02/正则表达式/index.html","bd85ba48085474556d8085c0e6b33a1e"],["2021/08/14/CSS/index.html","8d98288acf079b8a608cc807be1b963e"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","5dcd49f621bfd51a5ca56ee113f272ac"],["2021/08/19/Windows Terminal 美化/index.html","f91b019c755f979c231ff77493a7184a"],["2021/08/23/EROOR/index.html","a1776b21f2b79ec75d967e8ef2a490cd"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","debf2b65f23347fdc9ca7158efa8d892"],["2021/09/07/编译原理/index.html","1ca85bc7a85f5150cc82a356467f5af5"],["2021/09/27/网络是怎样连接的/index.html","927a08e715ff38f4e42b2759fded2b57"],["2021/09/27/通信基础/index.html","e246d335c18e7c22daab10294396da83"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","0186cd25cb2ce4b898b080a11c53f0bf"],["2021/10/22/vlan配置/index.html","e8e2d5040993bcaa3bedb97eabd1a392"],["2021/10/31/实验三—子网划分与静态路由/index.html","fa2cb6ba7d1f757bb69525c1c5727bdc"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","02817403a4ef6bc0773d50a2fa1fb71a"],["2021/11/17/硬链接与软链接/index.html","c7f63f4b6b61ca5b5298031f95951596"],["2021/12/01/SQL20题/index.html","57e407c6050b6649c2e238ea03aada88"],["2021/12/08/实验五：Wireshark抓包/index.html","e81b6620ad233d182264569491e8a2c0"],["2021/12/15/CentOS7搭建FTP服务器/index.html","8617062a0ac56827b2ffcb16fb972efa"],["2021/12/19/CentOS7 安装相关组件/index.html","e46a03b2ee7f62991980ac57fe3e0271"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","5b42d8f68a0028f62a2298f017705a29"],["2021/12/27/Vue/index.html","8d5946faf9bc1c75bce1521390d3ce23"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","2892dfc263e97a0f0528e85705799a8c"],["about/index.html","d124f992416e6fc7bb9f2f8a48464fb4"],["archives/2021/02/index.html","40b545ec9dc9f4fe375d1a67b27194ff"],["archives/2021/03/index.html","63a99ffd544bc3026e2cf5536aa57bf3"],["archives/2021/05/index.html","4867c578bf4c57d3eb4ff46082a3d129"],["archives/2021/06/index.html","2a560fcb97c6cec79be3e64636a2de6d"],["archives/2021/07/index.html","65f9addd63d9d1d65e6ac29a28919ffb"],["archives/2021/08/index.html","4ed882474ac7e40c68a3d8be1a915c7b"],["archives/2021/09/index.html","6fe123fd935c939a55972e7cecfcad90"],["archives/2021/10/index.html","99f3fb71645a4b8d93d29e9957f6ea69"],["archives/2021/11/index.html","7d550e162448206baa62e185b0fc8a09"],["archives/2021/12/index.html","8e75192ad0f0effe6abc8440d366e62d"],["archives/2021/index.html","64095bd8a331f6cf58f421ff447b2abb"],["archives/2021/page/2/index.html","781ebd0bd1b4761185457e0353d92461"],["archives/2021/page/3/index.html","532fdf5f9db9a852ec780643322b6551"],["archives/2021/page/4/index.html","49c7f34ec4bd648a5a703911b5f62ceb"],["archives/2021/page/5/index.html","cc2db34accac1661551305da8a4d3382"],["archives/2022/01/index.html","b60135e3db81ba0887e01d805d1ebf38"],["archives/2022/index.html","f084611504e6d28219fcc2e7c7d6807f"],["archives/index.html","75a18e3326ea62529845f54e1e8881ac"],["archives/page/2/index.html","2a38e974304022e87f72a7c722d56a4b"],["archives/page/3/index.html","32c86aa41f04e2924462c61db4b2bd7a"],["archives/page/4/index.html","0495271e29745ebc5fda175a5d6a8de3"],["archives/page/5/index.html","0a2498d458a61f5fb84f4660095a85c7"],["categories/C/C/index.html","950ca82c14fa7fd81f2f85067f57cf4a"],["categories/C/index.html","f66c15cdcfa89437b74830245da2aefe"],["categories/Linux/index.html","e94cc3a2e6dad490620c04d7f64fd719"],["categories/Windows/index.html","344cbe2f0ec19d333994137d891af830"],["categories/index.html","cbbc9795d6a919ffd0a1c30d8b449e85"],["categories/javaSE/index.html","76abb104e4e07f718abe26688b00fbbd"],["categories/tools/index.html","0a4297620e2863350172235caa031aa3"],["categories/wxy/index.html","0f228d298023a77dcf57e1fe71b0a7d3"],["categories/个人/index.html","6c31fac57bdb5e7a8c75d46d5641ecab"],["categories/前端/index.html","4523cba156718736791f1c1e708d0348"],["categories/工具/index.html","c76513c3c8dc5e2945d83d39a28d83e8"],["categories/数据结构/index.html","39c7d333990a1dda48ebf0e17443fcde"],["categories/笔记/index.html","1788ac075df103e45204f927f81a95b0"],["categories/笔记/page/2/index.html","e71b25e2b0c70d2bdf3d845bc325d69a"],["categories/算法/index.html","d78771cebe61f52b6b695bbed84b2613"],["categories/美化/index.html","5f0889ef39d54c72f3f353c7a003829f"],["categories/计算机网络/index.html","a91727e518cc23f31e74aa0daf3864b8"],["categories/计网/index.html","0502307e9cc7a13113cbf95f5d205436"],["categories/语法/index.html","a0fcd9ac687860e034717bb7380771d8"],["categories/软件/index.html","0d2cd5467f81a5853a8fd5cfe66b1b97"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","1aaa76839dc09fbb91092dd882954a54"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","4d9dce7b634b56f6d8f1b9b35866c736"],["page/2/index.html","c122090e6bc97722359d3e7769c8f301"],["tags/Burp-Suite/index.html","f4f117053a714d7ca10a635993cfbb0d"],["tags/C-数据结构/index.html","4cd59427d15df65c092b6676ee7ea6d8"],["tags/C/index.html","85732cf840e831a5b5a9c8956d3d62b4"],["tags/CSS/index.html","91eac53ada9ef59b2619ee0f7266f3f9"],["tags/Git/index.html","9bf54632392ab022c80e5ff7fd51f7a4"],["tags/HTML/index.html","338fbbe5e674bfb05f011efab4815210"],["tags/LeetCode/index.html","4926e903bcc381c95c86a75ab3ba1dad"],["tags/Linux/index.html","0fe2bcc638180f2977bbf78b78e752c5"],["tags/Maven/index.html","acac06a8453dd16989319b0aeb1d35a4"],["tags/MySQL/index.html","eef4db591f227f2319fda3a8df094c2d"],["tags/Vue/index.html","1efb1804e50cf56788dd977bda6bc7f8"],["tags/Windows/index.html","6cf78905f67b7d27ba41d271c4589cc9"],["tags/Wireshark/index.html","d413e287bda074d1ed0fa926418d4cc9"],["tags/index.html","2fe1af6f85134cec55c1de9be9cbfbe2"],["tags/java/index.html","35fe00b1aaefcdb9317c256ca0b86ee5"],["tags/route/index.html","52c250f6efa0187e5b174504896be1b9"],["tags/tree-java/index.html","e28953a498b5c52d7ac0aeb0b177c898"],["tags/vim/index.html","7783e103489a8a9d49ea135278719197"],["tags/vlan/index.html","a395c1502e5009e0b8b8bfa58e25211c"],["tags/wxy/index.html","5f9663c3a4a82303455827b2b0f279d8"],["tags/个人/index.html","95023e215141373058bd61118b3ca779"],["tags/书籍/index.html","10f9fbe7f1906d911b7c00a0c67c864a"],["tags/博客/index.html","9a2bea5d19897d092a8230f2837f989e"],["tags/壁纸/index.html","ff5f88e42d4d4c29bd15794d7f96810e"],["tags/底层/index.html","1f471370a90da7caef148ffbbf302635"],["tags/数据结构/index.html","b5c5547e3eecbda790ad314a213b3904"],["tags/文件/index.html","726e462ccd1557a94e14ed362fd63af5"],["tags/服务器/index.html","98af18a2b9c27ac53409098d6f47b240"],["tags/汇编/index.html","08834a8cd42f76fd44eb4aae9b9dd9f0"],["tags/算法/index.html","6be72b014af60b14379d27ea5995b243"],["tags/记录/index.html","9c13cfdd4f70c744a8c018b295bba0ff"],["tags/软件/index.html","d85b2038d5bfe8b423cb21ff6fc2386b"],["tags/通信/index.html","4e36b96803a69333e37b0e897aa6849d"],["tags/链表/index.html","c671472379c204318e98bfb0ac5ab9b6"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







