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

var precacheConfig = [["2021/02/18/Git学习（个人记录）/index.html","4d6f54f2241ae001d7a51641e71e50b7"],["2021/02/18/Hexo博客搭建记录/index.html","aa496ff7fe5782febe0897498f666032"],["2021/02/18/IDE配置/index.html","5180a6ee26e83b668b089815734d1b7f"],["2021/02/18/初识汇编/index.html","e63c6987dc5383ebd81d81f1302706f0"],["2021/02/18/链表与指针/index.html","d15831ca36b21adfce6ec2d8f3f47f17"],["2021/02/22/Topic LinkedList/index.html","9660c67b9ba80a8d657b0da552d33a47"],["2021/02/25/一些设置/index.html","af8b81e7d163219af9fce0378cfe315b"],["2021/02/26/WXY/index.html","3c3a8763705cf1ed9a58d5d07de7772f"],["2021/02/28/大二下课程推荐-计科/index.html","ff8ea9f8252dcb128fb68763139f5e27"],["2021/03/04/Linux-notes/index.html","7bb7666c3622da7377a66b4dc1ce35b3"],["2021/03/08/data struct one/index.html","f992728e5e7199fceeb391fe688765ac"],["2021/03/17/data struct two/index.html","8719a4980359c46609c69035d68f56d8"],["2021/03/22/STL/index.html","5b84f14ec20c47415355246df77508d8"],["2021/03/27/Battle-of-Tanks/index.html","b785b9cd3431e135d0926964da67123d"],["2021/05/01/MySQL/index.html","447a68c94d0ef68f43f4ba7966434a58"],["2021/05/09/HEXO部署服务器/index.html","964671e16893c521de682a64057e4be9"],["2021/06/04/vim/index.html","11719b086693c9605e7e9308ac8c3431"],["2021/07/13/oh-my-zsh/index.html","116543c01fcb48b3f393a829c4dc515a"],["2021/07/14/HTML/index.html","637367ebfb82accbb62401e1f7649f67"],["2021/07/19/Maven/index.html","7cf91fd9f9a80b5a6c84681cf5664dc8"],["2021/07/20/随机数（C++)/index.html","f3285d628eeabdda53acb7f8ea671113"],["2021/07/22/data_struct_01/index.html","7ed337ec978d4cad572b1b4af2c0e254"],["2021/07/22/滑动窗口/index.html","a2a311b90b65875ec5e86f88ab99220c"],["2021/07/26/Tree/index.html","874d1c371b36ed4592ad18320d691690"],["2021/08/02/正则表达式/index.html","61cb8f0bb6cfeb4d946f29c758ffd7a8"],["2021/08/14/CSS/index.html","e3891a3caf9e280a564e011d6b2da1f1"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","b7881a75c09504d5a19e8d6735c27f5f"],["2021/08/19/Windows Terminal 美化/index.html","96af6e6176fecd287f31a7ba9a2f0ecb"],["2021/08/23/EROOR/index.html","de33d8726739a7ab63c7efb8f2efded6"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","62e6bae5b347c8bc0831d833884b4e7a"],["2021/09/07/编译原理/index.html","b9f13b6c91cec1c918f535c8ae146e1d"],["2021/09/27/网络是怎样连接的/index.html","4d3a22185e6fc433ba5797ba45f4e3aa"],["2021/09/27/通信基础/index.html","f6edba6a1b3889b5f786c3ac99e8fc35"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","a7db83281df2d1c735cc9e085878d3fd"],["2021/10/22/vlan配置/index.html","31f2726899da022f475d522273869463"],["2021/10/31/实验三—子网划分与静态路由/index.html","0083164a4fb51399338de48f2ffb8838"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","87fc28b8c7cda311582fabf12229752c"],["2021/11/17/硬链接与软链接/index.html","aacde5ffabfb9a33db6e035b4934e24f"],["2021/12/01/SQL20题/index.html","9bc8402d71500e4f72f3db52ca1604d5"],["2021/12/08/实验五：Wireshark抓包/index.html","e57f3a19910d78bb0bd09d55d238a00f"],["2021/12/15/CentOS7搭建FTP服务器/index.html","0caeafaf8676d9746664a81905b4203c"],["2021/12/19/CentOS7 安装相关组件/index.html","35fc28683785972044d7104406cacdaa"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","c8276d4a29dc424f08e18e5b47fd0525"],["2021/12/27/Vue/index.html","09f6e7d607d39a4ba813dec5bf65c8d1"],["2022/01/10/ArchLinux软件安装/index.html","e4d9c4fdbab4c560452eeb4c4f71b208"],["2022/01/11/ArchLinux开发环境配置/index.html","bc7da81496f75edc3789d95d0c7ba9e6"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","3f946a5bafbe8d04804d90b8f4ae1a4a"],["2022/01/15/ArchLinux系统安装/index.html","dfe5fc422310115052beb61af6125283"],["2022/01/22/DWM/index.html","1f81e1a656b470b7d42b102d53a23377"],["2022/01/26/MySQL性能优化/index.html","8f0581b5e405ece8e8e50a7ca0d512ea"],["2022/02/27/ArchLinux安装wine/index.html","0f1deb9678455606b0ad0a718e61b97e"],["2022/03/01/ArchLinux安装VMware/index.html","a71b2d21155a826b74e0f8b4e697c118"],["2022/03/01/ranger/index.html","8ba81c4ac3e269c39f228d214eb8b1d6"],["2022/03/02/ArchLinux PPPoE拨号/index.html","8143b8a52010db655c5a049de8b8c4ce"],["about/index.html","32419891bd4faab12c20ef8b652f101c"],["archives/2021/02/index.html","04f5718731e10ab4933f4a575e589b85"],["archives/2021/03/index.html","adf4e52b722a1d523cc4769ff6325c93"],["archives/2021/05/index.html","17df89479a56fa3d60e081f94f86ef06"],["archives/2021/06/index.html","2af7ef0a419e73d0cc564f59eaf6e301"],["archives/2021/07/index.html","3c45b053853dbd22a36f39ae7ce19a6e"],["archives/2021/08/index.html","ba3e0c98eb1e9bd2a322c8d9a97e3ee5"],["archives/2021/09/index.html","a2eeccc290f32fa3d3459bebdd2fccba"],["archives/2021/10/index.html","aa3b46ddbc473faa9c3661d1185db67d"],["archives/2021/11/index.html","e3cfb56e6dc12b44c92a29d5f65563e9"],["archives/2021/12/index.html","510413416b2239bea9dc00418e4b8b54"],["archives/2021/index.html","754e042184b69ab30060767611f12388"],["archives/2021/page/2/index.html","e60a3e74dc37360f164c66c44d983549"],["archives/2021/page/3/index.html","07a0752d59f44c8dce9235f904d7fb57"],["archives/2021/page/4/index.html","74a2f93f4487d0ad7e08a8f447cc1e83"],["archives/2021/page/5/index.html","4f16ded206952e8c7b23fb85a7103662"],["archives/2022/01/index.html","64104a280fdb1accc55e0fd553471afa"],["archives/2022/02/index.html","57def71ff82bf4988aed1e67816b08f0"],["archives/2022/03/index.html","8908e21b216e14788b303e46b29a46ba"],["archives/2022/index.html","1f3059541313505310c36fa0e6f4df34"],["archives/index.html","97165728b1228e78cdfabdb2415090bb"],["archives/page/2/index.html","e68f08e483e5740c2441160845b0510e"],["archives/page/3/index.html","1c3dbe2b1fef178326496400fa77321e"],["archives/page/4/index.html","81b8952e5ce3ac701b1661aa846abe13"],["archives/page/5/index.html","f97ba905d23a0d2d2443c57ade4d5352"],["archives/page/6/index.html","a89a5d348fb384791accc25880f91f3a"],["categories/C/C/index.html","9d4fafcaf7128262bf02ed159109538b"],["categories/C/index.html","3418a6843e47b2f5f7ca5c9367170fb7"],["categories/Linux/index.html","55bc1576df1e801bf1b4278159d00fb5"],["categories/Windows/index.html","2f204c5b35ee95e9ad0adb8fc38f0df6"],["categories/index.html","26385518ea95d4b4ed60c12ef6f6d180"],["categories/javaSE/index.html","f7d6581f2b58e536417a45bbab74b03f"],["categories/tools/index.html","5291e78226c068eaed8d1fb78be05ea4"],["categories/wxy/index.html","30e3afe027c268000a7474564e15bdad"],["categories/个人/index.html","2115b01a1f0d7cfb0307baba823153d8"],["categories/前端/index.html","5df7e35833f8918bf9c83d9efd66d831"],["categories/工具/index.html","f0acff02b23c65e7421281544cd5ddc1"],["categories/数据结构/index.html","cbc91cb936a703f89f7cbd56648da011"],["categories/笔记/index.html","40b5188a1cd0157df1cef73d79c9b043"],["categories/笔记/page/2/index.html","86da7266b76833b64087aac10b7d36b9"],["categories/笔记/page/3/index.html","143ff37faee352861947ad58b9edaab8"],["categories/算法/index.html","f7a4054ada2aa7e552ae0f0785de736b"],["categories/美化/index.html","d8e22e40c0906bef10ffe3035e1c7ed3"],["categories/计算机网络/index.html","8e0724c6556ab8a9be3a99ef294f2a5e"],["categories/计网/index.html","c93a66e58cde9e3b182c53825e5c1333"],["categories/语法/index.html","b3b4014161902dbbfbf4cc3e4afc1239"],["categories/软件/index.html","2b65c054faee78cfd7ac74bc0fd2874f"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","d6c8be3e9b1e156930c9c3423b32bda2"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","490cb60b825d236be7a6d1389b27eebe"],["page/2/index.html","0a2bb593c07533d62aa19aa44ee05604"],["tags/Burp-Suite/index.html","ae121b6f73823f2836f896a411f0b327"],["tags/C-数据结构/index.html","a12fac22f4f00a8cdf3dfc2789d12fc5"],["tags/C/index.html","306a6fbc2f092802d1c714e5593015d1"],["tags/CSS/index.html","86a59f47d412ce332433190a9627753a"],["tags/Git/index.html","f1e4f5c67bd1042984232c9424a51ea2"],["tags/HTML/index.html","f8ee13d68f099d27007e45088fa0e534"],["tags/LeetCode/index.html","fa411a86145adfc5426d46c1dbf38750"],["tags/Linux/index.html","2695a021bd0d31ce8fbc6102671ee5e5"],["tags/Linux/page/2/index.html","beb43a3ed7eff20d6cb25a6c1cda3a56"],["tags/Maven/index.html","cd96163b2b8227ae089bb42c2667d20f"],["tags/MySQL/index.html","90928065a9e91a70d15fd8cf42861bd2"],["tags/Vue/index.html","ee942cce41e579652435a54e5b765871"],["tags/Windows/index.html","9ac43579cd1b4f99e07f164d1872e94d"],["tags/Wireshark/index.html","c6f7a98028f79aa42e157183b27ee566"],["tags/index.html","2d2cedbedd63d0156775c973b4f0f28c"],["tags/java/index.html","7b76202435f480cd316ca9cbc633e0c7"],["tags/route/index.html","c4df17e76864ccb0070719706b686db9"],["tags/tree-java/index.html","b984c1b83d86adb502df6779b50e2e50"],["tags/vim/index.html","3179bec3b381dbb4aadac5a5dce0357d"],["tags/vlan/index.html","52e375bfe24ea7e58a33316e0fe01121"],["tags/wxy/index.html","a2c7f197cb181f3c8f33330b494f8d5f"],["tags/个人/index.html","026f7cc0f4dac76ad62dc35e1c036ddc"],["tags/书籍/index.html","05dbc835c2559d793c78ae109793f997"],["tags/博客/index.html","45021dda158bdfb279e07b01ac95583e"],["tags/壁纸/index.html","08cafb61b2197799b34becc1616ff4bd"],["tags/底层/index.html","02aa51be0b5f35aa9283521bdbdc2894"],["tags/数据结构/index.html","6f634268bc6e243c3fc8efc740da4fcc"],["tags/文件/index.html","3207097c7d500356713b727f771170fe"],["tags/服务器/index.html","af217f6f3dd6d6af227486b754f33ce0"],["tags/汇编/index.html","3a1f47f328e3f4db7e5064befd81d6fb"],["tags/算法/index.html","92e8ea98b5c3dc51d95b4f3a9ed0b504"],["tags/记录/index.html","09764f17a3add50a0b8c9ca41a585904"],["tags/软件/index.html","4d69f4fe0d862f027a85ff3cdc20e09f"],["tags/通信/index.html","4ef5083e53e1e2ee951ba47eb5162a67"],["tags/链表/index.html","9310aae7b7ce84cb6d0bd4d58d6fdca9"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







