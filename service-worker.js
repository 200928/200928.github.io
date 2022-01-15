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

var precacheConfig = [["2021/02/18/Git学习（个人记录）/index.html","ee43e18aca9a2e3262069299ea3edb30"],["2021/02/18/Hexo博客搭建记录/index.html","d49dec57afa4316c156bf0212c208d08"],["2021/02/18/IDE配置/index.html","d2b0f74fbf24db34e93e5bb3dd06f573"],["2021/02/18/初识汇编/index.html","d78fdc29f68988e3c121a6f547442729"],["2021/02/18/链表与指针/index.html","208af80df5f6f84b9ea0046d63fcad56"],["2021/02/22/Topic LinkedList/index.html","5c2baefd231f5fafec66b230e7c032b0"],["2021/02/25/一些设置/index.html","ff2233283e7951b88446e4da4f580e7d"],["2021/02/26/WXY/index.html","e5bd732fd0f85a22e8700a80840a1a6c"],["2021/02/28/大二下课程推荐-计科/index.html","27e0424b9d1b5d81fdc100bcf57c40b4"],["2021/03/04/Linux-notes/index.html","76f5d92f74dd1c8cebbc699a0effcc64"],["2021/03/08/data struct one/index.html","a6f9ef5e57b820de6aa67e4aba25ab47"],["2021/03/17/data struct two/index.html","87ca587b2c3d2c37ae44df7ce9538059"],["2021/03/22/STL/index.html","9d8930d284123930f7b618d1aafaf863"],["2021/03/27/Battle-of-Tanks/index.html","b331041d6a798a62aa4205cebb61984d"],["2021/05/01/MySQL/index.html","ad77b3cc9685930bdecc6a7150f7d65a"],["2021/05/09/HEXO部署服务器/index.html","2435a606ae64e264f42cbf385e83e6fa"],["2021/06/04/vim/index.html","1a7e8cac0c004f2370c8367e7ac31a26"],["2021/07/13/oh-my-zsh/index.html","47b68cbc200dbbaea49cebfbba98380c"],["2021/07/14/HTML/index.html","bd7b628e89f95b30bbb567f21aa6dc90"],["2021/07/19/Maven/index.html","3b8736f5817c9bc0949e38f664280336"],["2021/07/20/随机数（C++)/index.html","5bf41b708e6addf4226a47cabf0c232e"],["2021/07/22/data_struct_01/index.html","161aff7f44a705508382a3f3895ca949"],["2021/07/22/滑动窗口/index.html","0c60a6a02adabbb6a84a68e8bbd30915"],["2021/07/26/Tree/index.html","f7685141ecb932f98e1ba3f34d7552b3"],["2021/08/02/正则表达式/index.html","bd85ba48085474556d8085c0e6b33a1e"],["2021/08/14/CSS/index.html","8d98288acf079b8a608cc807be1b963e"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","5dcd49f621bfd51a5ca56ee113f272ac"],["2021/08/19/Windows Terminal 美化/index.html","f91b019c755f979c231ff77493a7184a"],["2021/08/23/EROOR/index.html","a1776b21f2b79ec75d967e8ef2a490cd"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","debf2b65f23347fdc9ca7158efa8d892"],["2021/09/07/编译原理/index.html","1ca85bc7a85f5150cc82a356467f5af5"],["2021/09/27/网络是怎样连接的/index.html","927a08e715ff38f4e42b2759fded2b57"],["2021/09/27/通信基础/index.html","e246d335c18e7c22daab10294396da83"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","0186cd25cb2ce4b898b080a11c53f0bf"],["2021/10/22/vlan配置/index.html","e8e2d5040993bcaa3bedb97eabd1a392"],["2021/10/31/实验三—子网划分与静态路由/index.html","fa2cb6ba7d1f757bb69525c1c5727bdc"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","02817403a4ef6bc0773d50a2fa1fb71a"],["2021/11/17/硬链接与软链接/index.html","c7f63f4b6b61ca5b5298031f95951596"],["2021/12/01/SQL20题/index.html","57e407c6050b6649c2e238ea03aada88"],["2021/12/08/实验五：Wireshark抓包/index.html","e81b6620ad233d182264569491e8a2c0"],["2021/12/15/CentOS7搭建FTP服务器/index.html","8617062a0ac56827b2ffcb16fb972efa"],["2021/12/19/CentOS7 安装相关组件/index.html","e46a03b2ee7f62991980ac57fe3e0271"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","5b42d8f68a0028f62a2298f017705a29"],["2021/12/27/Vue/index.html","8d5946faf9bc1c75bce1521390d3ce23"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","9b7ddd22db4e8597a362641f657ec413"],["about/index.html","a2b7ce61c79b32687a9d1f0f3de571ed"],["archives/2021/02/index.html","d6c6863d760edb01bc70a7a0a69f2681"],["archives/2021/03/index.html","87b12700e2536a2d0c0051bad07ab331"],["archives/2021/05/index.html","087ca7801d331e7e0e0c1fceced299e8"],["archives/2021/06/index.html","e98cdb739199e35bda2f962b19e73a4c"],["archives/2021/07/index.html","f9f2fcbda473e6a3d25a8a3745bbabd7"],["archives/2021/08/index.html","7227546c400b10f1388d7fd7611c70c3"],["archives/2021/09/index.html","f4afffd83668404737cbf72deb7dfb4b"],["archives/2021/10/index.html","50511bdf504259a90d64cbaec7b72393"],["archives/2021/11/index.html","37c906f83374e8f00501ccade8e98508"],["archives/2021/12/index.html","29f0b588e77e02ab2950b3be38fd2d0e"],["archives/2021/index.html","d99d8a765734985647f65da587acea54"],["archives/2021/page/2/index.html","27665848104b671e1e8d6b8a8493026b"],["archives/2021/page/3/index.html","056cb317d6534ba2dc4639b7e8a6c40f"],["archives/2021/page/4/index.html","ca7cbcfd45430218dceedc7564d872d3"],["archives/2021/page/5/index.html","22cfe2f92f4351ec9a4efb80dc4959fd"],["archives/2022/01/index.html","81e44228b45535427aa44ec090eb6c08"],["archives/2022/index.html","d554bc61c09b66e7a762a61d8ffabc63"],["archives/index.html","fbf73664d53fcbc22b307d9e1c81e66b"],["archives/page/2/index.html","2a5af12c7c2ab96b456d5b79a77b0ea7"],["archives/page/3/index.html","c86f35f0b3aa139aa4504b56d94f1a7e"],["archives/page/4/index.html","c439c55bda34840bc054fca261c590dd"],["archives/page/5/index.html","2b87e3f1698399b014c85cdc5f5ecd83"],["categories/C/C/index.html","3ce65412a2716905387bd73038d4628c"],["categories/C/index.html","d23ca4cd52de4305e5820fca038cfc28"],["categories/Linux/index.html","3ad3d527cd9626360ab933e4a41f28d8"],["categories/Windows/index.html","49dcff500d79f8b47c6d6198727674e3"],["categories/index.html","d951dab491b7df0229c44b23754d94d1"],["categories/javaSE/index.html","8f73e22f83e3d7313372167c14bf9e7b"],["categories/tools/index.html","79ea31591c1cc655088e1426ada4e919"],["categories/wxy/index.html","b9ea0ff535a25ea2068fa52b5b848d23"],["categories/个人/index.html","104d71bd23399ac90b50f522b5e5caba"],["categories/前端/index.html","58950072affcd4d00d14fd94d509d76f"],["categories/工具/index.html","4f10b3fca2218a8916408e2dc383543b"],["categories/数据结构/index.html","7b13cd689c93a928c592788b19997807"],["categories/笔记/index.html","e4a421796cae4d8039b25d7831b90d89"],["categories/笔记/page/2/index.html","1625fb2b8886e0eee8b174e40ba06ba1"],["categories/算法/index.html","b9b8b4ab5a82472d64029f2ec0beb837"],["categories/美化/index.html","15e2138ab85e3f223ceed65501b19f06"],["categories/计算机网络/index.html","53dc60ffb1ace7a9cebc03ce4184574b"],["categories/计网/index.html","06d8a59d113fe5c0418ddc7194029af9"],["categories/语法/index.html","96031f50fa50e76511d59522215bf884"],["categories/软件/index.html","6e442b61b95a84c40718f70da90f8857"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","c05148c197a3f7c12b5ebe521926de1a"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","97c8c4faeba7f565be194c81f7921ff4"],["page/2/index.html","29e456b133105855243b24b41a88e52c"],["tags/Burp-Suite/index.html","88c1bb78f2c17fcc04379f006312e01d"],["tags/C-数据结构/index.html","7066402dc750bfec7a210d0d49b7e367"],["tags/C/index.html","66f7ec99e36bc68552be187953d221c5"],["tags/CSS/index.html","f454fb77de20674e926f888f265ab47f"],["tags/Git/index.html","09a18536b78cdb2903cec24355409aa6"],["tags/HTML/index.html","8e113539eec1b7f6b97d49e73e61fc51"],["tags/LeetCode/index.html","0fe1e6f55e9e585f226270745d4d97c8"],["tags/Linux/index.html","c6fa30a7874452147e63745f2cf543f3"],["tags/Maven/index.html","802bfc2685b8d27e4c19df03aba6887d"],["tags/MySQL/index.html","4e01d14e25a6c1c76bd977ebef71bb13"],["tags/Vue/index.html","b11d43563a720d3f5e6129646f41b883"],["tags/Windows/index.html","7415d830354229a2091b17f2f2c89521"],["tags/Wireshark/index.html","b3a25bbf29d074d0ad20baef60d804a8"],["tags/index.html","6df8ae136e193a700960e8d0badde991"],["tags/java/index.html","c67a0d99dcda491360054439224c8394"],["tags/route/index.html","ee4c9ec47621e11ec6c5bf75f1d4c14c"],["tags/tree-java/index.html","e12a485e4c46d35b6570cab2e2495e6b"],["tags/vim/index.html","f7ba39baf140ef893c8bb7167721eba1"],["tags/vlan/index.html","a328888502f4f4eac1a3340f90c410d3"],["tags/wxy/index.html","5a4503ab4b99094ab5654b8da269b7f9"],["tags/个人/index.html","f7a8fee693331af09e0ff628adfac96a"],["tags/书籍/index.html","faef403695fd9c62a35b0421b77d8ba2"],["tags/博客/index.html","f3ef086dd94964108ec64deed5c311b9"],["tags/壁纸/index.html","fc66258ce3cb0fc7f6924842811e22fb"],["tags/底层/index.html","ef268ef41eb1f1e174c9b6955f252678"],["tags/数据结构/index.html","0e11811a7c9b6e84312373a6ddc80444"],["tags/文件/index.html","572452b61b784e23d7f0275f7e884607"],["tags/服务器/index.html","d3060fa9bd6913c5d4fbf6536a79aaf6"],["tags/汇编/index.html","4a97dbf4648de70433b115f8c9656a2b"],["tags/算法/index.html","16dd794dd9f6f7f474fd79bc91c75745"],["tags/记录/index.html","a41c34044d4cfb0ba99b1db2741f94ab"],["tags/软件/index.html","742058e13bb235cd2096c54b467a498f"],["tags/通信/index.html","0e2f3d9c84aedc63c328201a011f9033"],["tags/链表/index.html","cf47261ffa0b9120686f665bec28d41c"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







