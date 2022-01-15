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

var precacheConfig = [["2021/02/18/Git学习（个人记录）/index.html","407213e242546dc4d66e4ab970d82518"],["2021/02/18/Hexo博客搭建记录/index.html","52a7781c216bac0c104a1f63178b6f00"],["2021/02/18/IDE配置/index.html","225ac1a33ab5d28fe39978e96524b04d"],["2021/02/18/初识汇编/index.html","d78fdc29f68988e3c121a6f547442729"],["2021/02/18/链表与指针/index.html","208af80df5f6f84b9ea0046d63fcad56"],["2021/02/22/Topic LinkedList/index.html","5c2baefd231f5fafec66b230e7c032b0"],["2021/02/25/一些设置/index.html","292270980d3360cd97cb8301446d9b68"],["2021/02/26/WXY/index.html","e5bd732fd0f85a22e8700a80840a1a6c"],["2021/02/28/大二下课程推荐-计科/index.html","27e0424b9d1b5d81fdc100bcf57c40b4"],["2021/03/04/Linux-notes/index.html","ad345b96cd61bc84fd083d7d45a787f1"],["2021/03/08/data struct one/index.html","a6f9ef5e57b820de6aa67e4aba25ab47"],["2021/03/17/data struct two/index.html","87ca587b2c3d2c37ae44df7ce9538059"],["2021/03/22/STL/index.html","9d8930d284123930f7b618d1aafaf863"],["2021/03/27/Battle-of-Tanks/index.html","b331041d6a798a62aa4205cebb61984d"],["2021/05/01/MySQL/index.html","ad77b3cc9685930bdecc6a7150f7d65a"],["2021/05/09/HEXO部署服务器/index.html","4a664083d8919d46cd40392675b287c8"],["2021/06/04/vim/index.html","1a7e8cac0c004f2370c8367e7ac31a26"],["2021/07/13/oh-my-zsh/index.html","2845c855443a9394b5158475ae1240a8"],["2021/07/14/HTML/index.html","bd7b628e89f95b30bbb567f21aa6dc90"],["2021/07/19/Maven/index.html","3b8736f5817c9bc0949e38f664280336"],["2021/07/20/随机数（C++)/index.html","5bf41b708e6addf4226a47cabf0c232e"],["2021/07/22/data_struct_01/index.html","161aff7f44a705508382a3f3895ca949"],["2021/07/22/滑动窗口/index.html","0c60a6a02adabbb6a84a68e8bbd30915"],["2021/07/26/Tree/index.html","f7685141ecb932f98e1ba3f34d7552b3"],["2021/08/02/正则表达式/index.html","bd85ba48085474556d8085c0e6b33a1e"],["2021/08/14/CSS/index.html","8d98288acf079b8a608cc807be1b963e"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","5dcd49f621bfd51a5ca56ee113f272ac"],["2021/08/19/Windows Terminal 美化/index.html","f91b019c755f979c231ff77493a7184a"],["2021/08/23/EROOR/index.html","a1776b21f2b79ec75d967e8ef2a490cd"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","debf2b65f23347fdc9ca7158efa8d892"],["2021/09/07/编译原理/index.html","1ca85bc7a85f5150cc82a356467f5af5"],["2021/09/27/网络是怎样连接的/index.html","927a08e715ff38f4e42b2759fded2b57"],["2021/09/27/通信基础/index.html","e246d335c18e7c22daab10294396da83"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","0186cd25cb2ce4b898b080a11c53f0bf"],["2021/10/22/vlan配置/index.html","e8e2d5040993bcaa3bedb97eabd1a392"],["2021/10/31/实验三—子网划分与静态路由/index.html","fa2cb6ba7d1f757bb69525c1c5727bdc"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","02817403a4ef6bc0773d50a2fa1fb71a"],["2021/11/17/硬链接与软链接/index.html","c7f63f4b6b61ca5b5298031f95951596"],["2021/12/01/SQL20题/index.html","57e407c6050b6649c2e238ea03aada88"],["2021/12/08/实验五：Wireshark抓包/index.html","e81b6620ad233d182264569491e8a2c0"],["2021/12/15/CentOS7搭建FTP服务器/index.html","8617062a0ac56827b2ffcb16fb972efa"],["2021/12/19/CentOS7 安装相关组件/index.html","e46a03b2ee7f62991980ac57fe3e0271"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","5b42d8f68a0028f62a2298f017705a29"],["2021/12/27/Vue/index.html","8d5946faf9bc1c75bce1521390d3ce23"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","0487d905f04260e772fbb62f06115fa3"],["about/index.html","60ec2da11417bde2e8c832341b0de90f"],["archives/2021/02/index.html","62e8d3244c57064e514607c7495483e8"],["archives/2021/03/index.html","ee6433c922fee55d534943bc5dca3d4f"],["archives/2021/05/index.html","efb7ead460da32a1e85d6ece6b080e51"],["archives/2021/06/index.html","7cb30a14f0677838e0e0f0a91435da02"],["archives/2021/07/index.html","48f5ece3c7d6b1762510d5f662a923b9"],["archives/2021/08/index.html","969e6163bc3aea8260c257e48493d551"],["archives/2021/09/index.html","c0e39e0746648c00a6c0d303fe3200a8"],["archives/2021/10/index.html","2df61be14543444a2d802fef16ce87f5"],["archives/2021/11/index.html","2481b390f7b14bfc51132b5745a4548e"],["archives/2021/12/index.html","793a5d57dde7788fef545ac4269d24f1"],["archives/2021/index.html","4d85549d31da9f8c5afe55763708c4cf"],["archives/2021/page/2/index.html","b6028f3b291d3adfc1cae89c93cd7b12"],["archives/2021/page/3/index.html","54bbf1d043160316ad9e7e6d4d46b38d"],["archives/2021/page/4/index.html","cab8d54905fd3544b75899cbee65f417"],["archives/2021/page/5/index.html","c93dffea6b4c633dd2b0fed4129ca50d"],["archives/2022/01/index.html","4c1f6ed627231d2b34c55c0c493ef4f7"],["archives/2022/index.html","7f2b138502f98a18f340a6e43c98d1ac"],["archives/index.html","3369dbff2ef14ac6c644fde4f709aee8"],["archives/page/2/index.html","cb36d8044a385d4dbac6243618ebc517"],["archives/page/3/index.html","cc13877d0bb7922316e1bc3da56a75b2"],["archives/page/4/index.html","80f6e509d792149c1777739b919247e4"],["archives/page/5/index.html","9b72c1da07f22b06c6d7d9ec9a317f2e"],["categories/C/C/index.html","f4b9f57702110edcc90238c871f72a8c"],["categories/C/index.html","4dcb5136e7ba70e6fbd5375f1d8e681d"],["categories/Linux/index.html","c5361302bde70f2a252031a138698acb"],["categories/Windows/index.html","e6c17244e5a08eb1932e0548456f41eb"],["categories/index.html","cd9871ec2505dd8f067c7d50fdc35c98"],["categories/javaSE/index.html","4d398c7584b3f8a5204e6eb6eb815dfb"],["categories/tools/index.html","8c89ffd3204c6a9b401931b1c67fc93a"],["categories/wxy/index.html","eb043596aaec5250e72ba2e059e1b3af"],["categories/个人/index.html","86ab755566a33e98a15ee4b486748f1c"],["categories/前端/index.html","18d8ff85311bf1dee50585e3a18de516"],["categories/工具/index.html","a83f5e5a0b3ce971bf9e3fa91c9b62ca"],["categories/数据结构/index.html","86b32de47000fc49aca6d1c8d3a6c18c"],["categories/笔记/index.html","87a417ad57c2c993a5daa88f2abf08cb"],["categories/笔记/page/2/index.html","610685d57b7a515f1ad83cdfb1c848b6"],["categories/算法/index.html","7edb1382019255bc77d19d3f3a9f77c7"],["categories/美化/index.html","0c6368a2e8916866ed46bbc759ddbcb6"],["categories/计算机网络/index.html","f7b2cb5b8dc232c826d488bddf8517f3"],["categories/计网/index.html","4df3d6fe371701a2308be9f7c2d44091"],["categories/语法/index.html","11700969dc5802979f737a66aab996ac"],["categories/软件/index.html","fb2690b0059083c9732215da6d25ffb8"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","54d14be97b11227772673e7bbd37b205"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","944e579debf1518ba63956842e7175ea"],["page/2/index.html","3f6685a7a157d7fc7e49ee4f27ccd303"],["tags/Burp-Suite/index.html","d67010a11c1a5cbad8b7ae8e134f53d9"],["tags/C-数据结构/index.html","06665dbbea991c2caff5136fb7ea2e3b"],["tags/C/index.html","6c8fa4af2d5ff082b73860b7cdc672fe"],["tags/CSS/index.html","fb4c3eb8d7bb812c00c203ab2b78edca"],["tags/Git/index.html","88bda85ba820757a8dc3c480c36ee1bc"],["tags/HTML/index.html","87f5c5ca9075af3cc6d79999c91787a4"],["tags/LeetCode/index.html","74a0b513a0acc89a6d548a6b6832a955"],["tags/Linux/index.html","92efbf6ca90296e6027fdd133958af46"],["tags/Maven/index.html","8e2d15253e9719101568e2e98e1e9915"],["tags/MySQL/index.html","7a96f91f13740823bab3b050656e2ff2"],["tags/Vue/index.html","694ea078bc3baa7ba5ed9dbe6b52a6b4"],["tags/Windows/index.html","8ae8dcab54b912c23f372420dd6daead"],["tags/Wireshark/index.html","fe1f67dd414acb2c5b7ef8528d97a11d"],["tags/index.html","ca8d614920454c9d9989758ed6de5131"],["tags/java/index.html","fc924d51c3cf533aa0dc0acf5fbb35e9"],["tags/route/index.html","d9b24f9e64e5c4ba58ca39ba6854e110"],["tags/tree-java/index.html","3f3b9569aba6db75d583efb7c5ae8a73"],["tags/vim/index.html","e3426ea7c141fe0cc03e713437b13be1"],["tags/vlan/index.html","61081a7ddb30eb9f06e4f470f71f0534"],["tags/wxy/index.html","42e04c81e9fd8270cc19e538d121eb82"],["tags/个人/index.html","ce36522f2456a35a35db8d1373bc6bf5"],["tags/书籍/index.html","2ee486ca7d30210d74e912bf33ec47ea"],["tags/博客/index.html","6cd3b502e3a16e9a2d6ffa9cc378ea85"],["tags/壁纸/index.html","640ae2e44548cc229310b99dfbcd5426"],["tags/底层/index.html","4d6c8d0a8f016309a0bfbb20fce5d711"],["tags/数据结构/index.html","033cddbe04af84dcec2e4b9947d93f0e"],["tags/文件/index.html","ce16e8b3c7ade1c1dee26d82a4b8fc8f"],["tags/服务器/index.html","4007f3fe8a7934449c4dcb53097bda00"],["tags/汇编/index.html","231cf7eedce7d17aab5d3b9ba279d3c1"],["tags/算法/index.html","451e0538b968781c2d08857f6a3fce8e"],["tags/记录/index.html","dbcb02601d59f0f5a36a1a68b73e9098"],["tags/软件/index.html","5ae4e6012b8470e963aea039be224195"],["tags/通信/index.html","b553b40ea45f91efe3daff7d53d72bdc"],["tags/链表/index.html","f62af19b6bbb2a9bf47d626470b532a6"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







