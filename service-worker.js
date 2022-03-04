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

var precacheConfig = [["2021/02/18/Git学习（个人记录）/index.html","4b5b3ffd84f933151c3270b8e2db0c77"],["2021/02/18/Hexo博客搭建记录/index.html","53d4ecb7e14b80ce95b4763529e37250"],["2021/02/18/IDE配置/index.html","80e909bc743f591cabd697e8f10fd9bf"],["2021/02/18/初识汇编/index.html","9f6ea21c3cf5db5a950db8a78cb6bcbb"],["2021/02/18/链表与指针/index.html","8921ac970b18d05b966b6ea8576e0980"],["2021/02/22/Topic LinkedList/index.html","041af356a54fad2646701bb2687fe520"],["2021/02/25/一些设置/index.html","916a970b5f15f7463da185d7b2341793"],["2021/02/26/WXY/index.html","7d920ad2e766a7a0188c5b83ffbe5aa7"],["2021/02/28/大二下课程推荐-计科/index.html","d24a676a7b32ed2bc59d822cf915e09b"],["2021/03/04/Linux-notes/index.html","305d14ae778644ea8bc2c6050f50d579"],["2021/03/08/data struct one/index.html","b06169e359091c752397a5b611cf397b"],["2021/03/17/data struct two/index.html","04750575fab40b9e3ad4461d12fdbc72"],["2021/03/22/STL/index.html","a447c7df3d6e8abbc008a24ba7fd4066"],["2021/03/27/Battle-of-Tanks/index.html","872bc4a8e6ab5ef96331ebcab91d6ab8"],["2021/05/01/MySQL/index.html","413e64f1b947b107ba38d38120582409"],["2021/05/09/HEXO部署服务器/index.html","6fb57d7403a4db586a0862bc96ffe97b"],["2021/06/04/vim/index.html","9c3d5fb1c224a38ef4f649ec7eaba27e"],["2021/07/13/oh-my-zsh/index.html","879a7a914db4e2c35322bd329fdb0074"],["2021/07/14/HTML/index.html","62b0308d9a4d99dc6937cbea6d9883e4"],["2021/07/19/Maven/index.html","5079498b3bd5807d53e978a16ddac520"],["2021/07/20/随机数（C++)/index.html","37f993899c5b5cb1dabb34f10757c19a"],["2021/07/22/data_struct_01/index.html","228a76b514b9056d79e33dcfe675390c"],["2021/07/22/滑动窗口/index.html","03aa9f057b462805d280e3eaeb9d3747"],["2021/07/26/Tree/index.html","9e25068594a1f4174355617440609d59"],["2021/08/02/正则表达式/index.html","af30e6a054f3e6c496ea25eb2402984c"],["2021/08/14/CSS/index.html","cbc82705eb19a41ec6b82b8cc35eb3e6"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","a1d618ce2a516a7308b149a2adb9ce28"],["2021/08/19/Windows Terminal 美化/index.html","8c80cfc2554ffcfb47e3803fce2684d4"],["2021/08/23/EROOR/index.html","a92652f8d6df5768a5106cb479b2a542"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","ebd48689a36e7710ce3f10b4efef0daa"],["2021/09/07/编译原理/index.html","6110db18ef61b97cd237987b8312a397"],["2021/09/27/网络是怎样连接的/index.html","945b4cd3a42a94aa12d5aefd58c7c811"],["2021/09/27/通信基础/index.html","49d9a0c82c20baaa35f0af760925bfbd"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","21656dee5cf5418974f8fc80f22f3083"],["2021/10/22/vlan配置/index.html","637f6eefbb0f904323da18866abafc30"],["2021/10/31/实验三—子网划分与静态路由/index.html","6c337dfe77b0dbcc7ec7aee2647b9ba4"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","46f9964dde7f42fbb153e95e4438b0bf"],["2021/11/17/硬链接与软链接/index.html","c2b2d8db0a071c0d4541488455de3c35"],["2021/12/01/SQL20题/index.html","28547a5561f8f73107bd98dad96fca5e"],["2021/12/08/实验五：Wireshark抓包/index.html","ea6a567f480e1c49260a1521db34163e"],["2021/12/15/CentOS7搭建FTP服务器/index.html","cd6065d745822084b9a655bff19c3657"],["2021/12/19/CentOS7 安装相关组件/index.html","dad2eee4220f217a74dd87769ac89d6b"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","aeeddd966de15ad267b766e92ff58cb4"],["2021/12/27/Vue/index.html","c8ea24da94eaca8cd47c2608f91ce055"],["2022/01/10/ArchLinux软件安装/index.html","246819faaec81fbcef96c18dca9c56d4"],["2022/01/11/ArchLinux开发环境配置/index.html","27727f6a0dc5719bafe0989c04f7dbcf"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","d176a83b10e82ac4063f8c22b715d4cb"],["2022/01/22/DWM/index.html","afdf9519ce0ded71ca7347272717a533"],["2022/01/26/MySQL性能优化/index.html","749958eb1fb5f47ac134c741c4ca0197"],["2022/02/27/ArchLinux安装wine/index.html","8b62cc8079e522b454e706c0b08fb395"],["2022/03/01/ArchLinux安装VMware/index.html","3cb92bf6cae7bdef6a2ba0270dc4e8eb"],["2022/03/01/ranger/index.html","da5972053f01878323e476df9e9c7c2b"],["2022/03/02/ArchLinux PPPoE拨号/index.html","6714252427cd7c228c705c340f8bb3ab"],["about/index.html","8d260ad74ef0469f12e9c931fa85ff03"],["archives/2021/02/index.html","aa6fced9c1a24cd7d59b5986eb248ec8"],["archives/2021/03/index.html","5cba092dfbe0abe280b6582d8d648a29"],["archives/2021/05/index.html","fe9ed45a4b0bb6c4c46fd087130f1b89"],["archives/2021/06/index.html","c90cb6024964c0d87611ca7cc160bb63"],["archives/2021/07/index.html","32b1b239faf806b0710ed05706b12d31"],["archives/2021/08/index.html","c3e6c75e1e27c6b55694cdb0e199d0f4"],["archives/2021/09/index.html","10261624a4a09a643ed034b20d22b2d3"],["archives/2021/10/index.html","343133699c89c393a2a98cd6d0fbe719"],["archives/2021/11/index.html","c330b90e1b6c35d38c859ff2c8d03946"],["archives/2021/12/index.html","b11b0b017d2a8e9fed59ebf439b63fb8"],["archives/2021/index.html","9505af0bd39d6a494e63f9126c2b5da5"],["archives/2021/page/2/index.html","722879e8d083196ea7cc50b9a3c3021e"],["archives/2021/page/3/index.html","62d2cfdc09155ea19b3a0c45b3b83c01"],["archives/2021/page/4/index.html","9412ab1b12179c1ecec3bc70259d169e"],["archives/2021/page/5/index.html","3efe187a566b78e1e9e5098113ad0fd8"],["archives/2022/01/index.html","8d891d8760877d4d5f01f3936eff48bb"],["archives/2022/02/index.html","acadeb1920f6ffe77e4b6f38bed81303"],["archives/2022/03/index.html","83786afc9d70d761fc18ae2531fb6508"],["archives/2022/index.html","6b1680b753437846bfe1ca7f01b625a1"],["archives/index.html","f28236bcba2b8f755cde33ae62693a9e"],["archives/page/2/index.html","39b9897f547099841d2947e185be48e1"],["archives/page/3/index.html","ece08d72e012ec58184454fd348d4a5c"],["archives/page/4/index.html","cb89df6a658f3b6f09351781f651e963"],["archives/page/5/index.html","9775c4a7e6709491a6d502f28255729c"],["archives/page/6/index.html","d1dfa84746500e6c6b514920e93a5a9d"],["categories/C/C/index.html","43210bfb1186580db79eb8c9d42aa588"],["categories/C/index.html","1ab13ab3f1292d24f229e1ba36b4ea38"],["categories/Linux/index.html","fa48e78b73d85d4cd91371df91a166fe"],["categories/Windows/index.html","0f20f331778ca2c42e7e1ad56b84389c"],["categories/index.html","6b7fcf03a0a40648fe90e7d3a2306529"],["categories/javaSE/index.html","1c20fb26908996705a6e96450e62db2a"],["categories/tools/index.html","43a7adc707b6f9b2459ac3d3fa07b7ac"],["categories/wxy/index.html","e9f1f73f4016140c15c3b4c8a66203cb"],["categories/个人/index.html","bc74bf86ea181f2fecb249433acafefe"],["categories/前端/index.html","07dc3c7a93c0d5fa5ddd67b17b14ca4d"],["categories/工具/index.html","d7846215928f24813ec9e18d49ae76c1"],["categories/数据结构/index.html","94ab49d633e90d94053adab1bb682089"],["categories/笔记/index.html","0aaea66791b8c110c4ab1542193a250f"],["categories/笔记/page/2/index.html","2c98ff1086d1a4da69dd8acaee52a850"],["categories/笔记/page/3/index.html","a5bffcaf9a044a9a9934fa1777fc2598"],["categories/算法/index.html","a82d5648ce3bfd010953ba808dc5fa23"],["categories/美化/index.html","65782b48d4aa37e73bd4cd0883ceef74"],["categories/计算机网络/index.html","bbe91c67e86ca895656019f15c896337"],["categories/计网/index.html","577a5c4fdd1d0ab714573dd92b8f0716"],["categories/语法/index.html","be201c679cfc4966188dc3bc4be21c12"],["categories/软件/index.html","0fcd9841dcc78c4d7244b98f1527cf65"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","26fec1568bb947c3f0b2f9dd78d96f7b"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","882c76042fa47e81bd467e446bfc8efc"],["page/2/index.html","3b2fefa25816f7783af7df2ae1607de0"],["tags/Burp-Suite/index.html","74ece963a8b652144d814f6e3014b03b"],["tags/C-数据结构/index.html","e8446111320742f467076ec0ddf3cabb"],["tags/C/index.html","1aa4863d4d3944de278dfc54073b15fe"],["tags/CSS/index.html","7b1ac1b31413689178b7df4b5f054194"],["tags/Git/index.html","3531ed50b56c09c168916a7d49fda00f"],["tags/HTML/index.html","6ba6f6b6050a8e2510af96709bb585eb"],["tags/LeetCode/index.html","faa5d4fbe6c420dbcdaacfaba4725be8"],["tags/Linux/index.html","3bae8e5116803d5478fccb73d390c0fa"],["tags/Linux/page/2/index.html","d24e6047ec903d93c570eba95c805a64"],["tags/Maven/index.html","a95c7431870a3be9b3da3deb7a186cc8"],["tags/MySQL/index.html","900efffb3e43278bad4d07869491a704"],["tags/Vue/index.html","a1debfe3f1b8bae43b6697e650edbc90"],["tags/Windows/index.html","44d22d2562f77b89f17407a545992686"],["tags/Wireshark/index.html","7376c7b5a2c7545a4459f418993bf02f"],["tags/index.html","5659f69845cbb6eae452f62531941827"],["tags/java/index.html","a81147b744187f3f7449d57f9ff5a4a6"],["tags/route/index.html","ce44b7197a7d8284c268755ca1534029"],["tags/tree-java/index.html","db52b6fb00f3523c93e35ffe2609ce95"],["tags/vim/index.html","1752064f419cde867cde80ceaf06bf76"],["tags/vlan/index.html","09514569ab563839445dba25871e4999"],["tags/wxy/index.html","05d70eb4420d28bbeade09541677ec3b"],["tags/个人/index.html","cf92af93ad99e449d7850c1304182b57"],["tags/书籍/index.html","4fa1f1f7f2678df25d908d0c7742f528"],["tags/博客/index.html","22f925d301e40283b3d497b303db40f2"],["tags/壁纸/index.html","929a4fffa6e75f3c319084b5b0482b3c"],["tags/底层/index.html","a578de64f063b2abb27cb6d98e90f807"],["tags/数据结构/index.html","36bc87184c3218439ab91eaebd03ea0b"],["tags/文件/index.html","b7ce145f2afa86910b33479c8791e705"],["tags/服务器/index.html","e687dde6084155831f27f57d68d89328"],["tags/汇编/index.html","576d5f9fa2f80b69b7327b0ce0694cdd"],["tags/算法/index.html","84650ba237ca4f4a00287a05b8e54c96"],["tags/记录/index.html","dc81b55dc93911a6694c9b26437ed4b8"],["tags/软件/index.html","b47af243777a1280e24c8924fc5fb504"],["tags/通信/index.html","0e31bd4ffdf42c2d0cd942b8fa4920d3"],["tags/链表/index.html","3aa4bbf8cdd0b311d30c34eeec8082a2"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







