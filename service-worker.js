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

var precacheConfig = [["2021/02/18/Git学习（个人记录）/index.html","0d23a280787ec3408d2e64e1bfe4c740"],["2021/02/18/Hexo博客搭建记录/index.html","3ae8ee9b987addb039ca0c3fe2ccb04e"],["2021/02/18/IDE配置/index.html","5180a6ee26e83b668b089815734d1b7f"],["2021/02/18/初识汇编/index.html","e63c6987dc5383ebd81d81f1302706f0"],["2021/02/18/链表与指针/index.html","d15831ca36b21adfce6ec2d8f3f47f17"],["2021/02/22/Topic LinkedList/index.html","9660c67b9ba80a8d657b0da552d33a47"],["2021/02/25/一些设置/index.html","80d4cfe7d03de13a767d4374f1a56681"],["2021/02/26/WXY/index.html","3c3a8763705cf1ed9a58d5d07de7772f"],["2021/02/28/大二下课程推荐-计科/index.html","ff8ea9f8252dcb128fb68763139f5e27"],["2021/03/04/Linux-notes/index.html","b63df0d97db4cbf75f17c7c04dc6582e"],["2021/03/08/data struct one/index.html","f992728e5e7199fceeb391fe688765ac"],["2021/03/17/data struct two/index.html","8719a4980359c46609c69035d68f56d8"],["2021/03/22/STL/index.html","5b84f14ec20c47415355246df77508d8"],["2021/03/27/Battle-of-Tanks/index.html","b785b9cd3431e135d0926964da67123d"],["2021/05/01/MySQL/index.html","447a68c94d0ef68f43f4ba7966434a58"],["2021/05/09/HEXO部署服务器/index.html","a3b9842c3cca82687b5235b4963e5723"],["2021/06/04/vim/index.html","11719b086693c9605e7e9308ac8c3431"],["2021/07/13/oh-my-zsh/index.html","00db43c16ae410169fbf46aceeb1aedf"],["2021/07/14/HTML/index.html","637367ebfb82accbb62401e1f7649f67"],["2021/07/19/Maven/index.html","7cf91fd9f9a80b5a6c84681cf5664dc8"],["2021/07/20/随机数（C++)/index.html","f3285d628eeabdda53acb7f8ea671113"],["2021/07/22/data_struct_01/index.html","7ed337ec978d4cad572b1b4af2c0e254"],["2021/07/22/滑动窗口/index.html","a2a311b90b65875ec5e86f88ab99220c"],["2021/07/26/Tree/index.html","874d1c371b36ed4592ad18320d691690"],["2021/08/02/正则表达式/index.html","61cb8f0bb6cfeb4d946f29c758ffd7a8"],["2021/08/14/CSS/index.html","e3891a3caf9e280a564e011d6b2da1f1"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","b7881a75c09504d5a19e8d6735c27f5f"],["2021/08/19/Windows Terminal 美化/index.html","96af6e6176fecd287f31a7ba9a2f0ecb"],["2021/08/23/EROOR/index.html","de33d8726739a7ab63c7efb8f2efded6"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","62e6bae5b347c8bc0831d833884b4e7a"],["2021/09/07/编译原理/index.html","b9f13b6c91cec1c918f535c8ae146e1d"],["2021/09/27/网络是怎样连接的/index.html","4d3a22185e6fc433ba5797ba45f4e3aa"],["2021/09/27/通信基础/index.html","f6edba6a1b3889b5f786c3ac99e8fc35"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","a7db83281df2d1c735cc9e085878d3fd"],["2021/10/22/vlan配置/index.html","31f2726899da022f475d522273869463"],["2021/10/31/实验三—子网划分与静态路由/index.html","0083164a4fb51399338de48f2ffb8838"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","87fc28b8c7cda311582fabf12229752c"],["2021/11/17/硬链接与软链接/index.html","aacde5ffabfb9a33db6e035b4934e24f"],["2021/12/01/SQL20题/index.html","9bc8402d71500e4f72f3db52ca1604d5"],["2021/12/08/实验五：Wireshark抓包/index.html","e57f3a19910d78bb0bd09d55d238a00f"],["2021/12/15/CentOS7搭建FTP服务器/index.html","265a39f2f8a486fd054339bac832232c"],["2021/12/19/CentOS7 安装相关组件/index.html","5898e777bb4466dde11d7b44add83c51"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","c8276d4a29dc424f08e18e5b47fd0525"],["2021/12/27/Vue/index.html","09f6e7d607d39a4ba813dec5bf65c8d1"],["2022/01/08/ArchLinux系统安装/index.html","987af9f8424e32759927692398e04327"],["2022/01/10/ArchLinux软件安装/index.html","ecb4d3386777f0cf0ebe2b72257a62dc"],["2022/01/11/ArchLinux开发环境配置/index.html","690988171c30311b48485e0913ab7d36"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","ddc19e4c19ae38aec58ce3b4a01ca946"],["2022/01/22/DWM/index.html","19f2e94fbd790efe12406884c28d6158"],["2022/01/26/MySQL性能优化/index.html","8f0581b5e405ece8e8e50a7ca0d512ea"],["2022/02/27/ArchLinux安装wine/index.html","7f9b7a0176af25b63bdf770a768a7c37"],["2022/03/01/ArchLinux安装VMware/index.html","2815abf417427d1c3872010784c1e577"],["2022/03/01/ranger/index.html","c57f1eb6eb26e68b0f670aa733e05e6d"],["2022/03/02/ArchLinux PPPoE拨号/index.html","2eab7df1dbaab0e2d7595b65b466765a"],["about/index.html","0072013036a11983bf1bfcc04c1cb400"],["archives/2021/02/index.html","76d3a51a77ec7fff47c0973c0c5711a4"],["archives/2021/03/index.html","6c127f7f10366833fbf762e42674f86e"],["archives/2021/05/index.html","9a4362cc7528f2f3d63de7b546caed11"],["archives/2021/06/index.html","074e33cb7f178567c77190d08940c594"],["archives/2021/07/index.html","ee6d89637e6603920d420b7bc2b87f08"],["archives/2021/08/index.html","d77b2f9cc28948b0ab76685283659b14"],["archives/2021/09/index.html","74dab6d348c77426c1422880986d603b"],["archives/2021/10/index.html","cf3da309c7edb0c85fc8da240dc7d3c7"],["archives/2021/11/index.html","45bee46b1183505db08dd2c1013dc2b7"],["archives/2021/12/index.html","1c3dc3cbe59a306f0cfe8e9a457f28a8"],["archives/2021/index.html","56853f7091853ab67bef7fb26b97685b"],["archives/2021/page/2/index.html","ea33ef0b72db51e0ce3bd1b309115e81"],["archives/2021/page/3/index.html","34dee9160114328a1589a91e3155a108"],["archives/2021/page/4/index.html","e41440c32a2735d383c8db84e91f87ed"],["archives/2021/page/5/index.html","7188e22509897c212dbb00a8a6ba5017"],["archives/2022/01/index.html","c09ccaa40b4b304d640a8bb9541e0499"],["archives/2022/02/index.html","ba4e7b4342b2391f68a40edfaa88bca9"],["archives/2022/03/index.html","c369a8eadbca829a84380d650908ed47"],["archives/2022/index.html","a05059410927c77f2560eeb2207e95fc"],["archives/index.html","7bf68d74fe695c97f33cf73fdc825150"],["archives/page/2/index.html","179467a778a925624259b7917a342bb0"],["archives/page/3/index.html","9bed8e80e17bc4c8148b24bc5ec3568b"],["archives/page/4/index.html","ae95502bdb49b92681ba8b161aed7e9b"],["archives/page/5/index.html","0011a4f65c6110251d29d5ed5130327e"],["archives/page/6/index.html","e6b867d2fffd97e05d904d260caa8670"],["categories/C/C/index.html","0c7daeb2163ec063220208c91ef729ab"],["categories/C/index.html","d840252768c6dba53765606d04c44b44"],["categories/Linux/index.html","98347765ed5a672253502fc28d2dab60"],["categories/Windows/index.html","4087cab160659f0fbfb8d0653c6d844e"],["categories/index.html","73dd3f57e52650e44e327b5d1747779c"],["categories/javaSE/index.html","9b17b2a9f50b3f8434071353098cca34"],["categories/tools/index.html","578bee53338a014cf53a20b09d1ec337"],["categories/wxy/index.html","4a290c903cb41eb0d3719cdb13ca03b5"],["categories/个人/index.html","2ca87de575878c3deb153a9f6b41c041"],["categories/前端/index.html","e8c254e8be776fd2bf09f0706282091e"],["categories/工具/index.html","e75852273085752f7459607c62815126"],["categories/数据结构/index.html","6b1fc20c5292c83c5a3f903b224c772c"],["categories/笔记/index.html","3b279e43ae12de2db95e39920bdd36c3"],["categories/笔记/page/2/index.html","2bb30f6749e190944fbbc19e8575e5b0"],["categories/笔记/page/3/index.html","e8bb1c86f51acf64228a0a866212bb52"],["categories/算法/index.html","78690a6c6fd1a08e59ddb00ba326b138"],["categories/美化/index.html","367bd2835f0e42c5bb67160bb922bc92"],["categories/计算机网络/index.html","7144dd6622deb8e87b8db35ac1cbbda6"],["categories/计网/index.html","aad3c381b2b8669cfe369ad08319ea3a"],["categories/语法/index.html","b52270c94ca4384e0ef9486fdcabf27b"],["categories/软件/index.html","b5046845c40480c62889c5131116cc19"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","b16fd5388eb8c0be6c7627784beacd30"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","dbda15ac3c246f4d9abd75158d22039a"],["page/2/index.html","aea09ed3af252bcb01d8ee0e07fc2e32"],["tags/Burp-Suite/index.html","8a0d5f8c00335c2a19c1bfccf2edb7f4"],["tags/C-数据结构/index.html","1b597fe50f36b9215d61c2c6b31f054d"],["tags/C/index.html","5c4115286b1b3bf59aa65ed99e7703d2"],["tags/CSS/index.html","08d1ce8361fe7dcba1c0bc485a9459b3"],["tags/Git/index.html","918a4c1f32670600906c94b1e6a69458"],["tags/HTML/index.html","ec8a1cd06a3d2e3218fcacff3eae68f5"],["tags/LeetCode/index.html","c08ad28d9c9af66e91eb9fca46c8fc17"],["tags/Linux/index.html","ac8ec674c7d9a51e8f983bf349794a9d"],["tags/Linux/page/2/index.html","4e77345f693f0070c4c027cff48b12d3"],["tags/Maven/index.html","cf554460514cf48a30710346751c9b90"],["tags/MySQL/index.html","612ea6b1dfaf05a8fa96d6958eaa1f2b"],["tags/Vue/index.html","169c06f18565ef2fa7ab2a162ed913c4"],["tags/Windows/index.html","7da5527a7157e906c4a57a80adfc7199"],["tags/Wireshark/index.html","3193a3bc73097692894faa3daf3f9740"],["tags/index.html","c03216298964e434ecf418416f456497"],["tags/java/index.html","7258e424b38db44b94aac9fb3ff2b333"],["tags/route/index.html","eff308a3fcfa570e322d9faa5a9c7d3b"],["tags/tree-java/index.html","9192c5c363ad8f0810300f270836d674"],["tags/vim/index.html","924c7f337ec7025f3f832f9a21d7aafa"],["tags/vlan/index.html","87f5ec43fdfc9faf1c615d4e3f8f3a46"],["tags/wxy/index.html","56387498feed484f1664b0ae107df695"],["tags/个人/index.html","f091443b29e6e2f84e565a8dd815500c"],["tags/书籍/index.html","7935aefa28a7b200e1d457b47f04e368"],["tags/博客/index.html","25065cd7d09656dab7a7cb5adab965f6"],["tags/壁纸/index.html","33164a6c5a8a3d0c0f07dc12481499d8"],["tags/底层/index.html","d694c4598e73b78d2d562a53ba25bf5d"],["tags/数据结构/index.html","8cb5227ee5bea9e3e2d2b1f1a824d5ff"],["tags/文件/index.html","88e2f492c962000e8ed3b2ea88092dc7"],["tags/服务器/index.html","65663b461e8954f0e23e8febf1ecd7e7"],["tags/汇编/index.html","9a3acc323511b3e3051f8c3944e469a6"],["tags/算法/index.html","337bbc9fb29f9b75ca10ce403a04ed3f"],["tags/记录/index.html","f40d7afb1510bc1447d3e57037f14dae"],["tags/软件/index.html","e31b0f96d9156626e26cb3a17907b034"],["tags/通信/index.html","d5cc86448c93b139b7e3403e12a5e53c"],["tags/链表/index.html","70ea9e5275c65a46921b42ecade439c4"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







