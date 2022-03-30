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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","01d76a5c181776c1bfd338b5d318ca22"],["2021/02/18/Git学习（个人记录）/index.html","12c2a9341e6cdf457fa0dcbbb74f802a"],["2021/02/18/Hexo博客搭建记录/index.html","826d61584b8a8df33ecda564ead71775"],["2021/02/18/IDE配置/index.html","6e7cb1b40197af2bbf1723fd731cbf12"],["2021/02/18/初识汇编/index.html","90ab164618a02614c697a8f1acaea8e1"],["2021/02/18/链表与指针/index.html","70cd5efb3e27e3e1b32a0001c850f106"],["2021/02/22/Topic LinkedList/index.html","632c4ee0eea9372e96e214117ae5bc42"],["2021/02/25/一些设置/index.html","13db890ec90fa1cbf278d39b8fe279da"],["2021/02/26/WXY/index.html","396ea7d2e552985c74182a89f20e9ddb"],["2021/02/28/大二下课程推荐-计科/index.html","7e312be8dfeaf1ea0745be8b67bcb071"],["2021/03/04/Linux-notes/index.html","d870f15bf473377484cf76e6420389a2"],["2021/03/08/data struct one/index.html","2dc035954ec15d462013f3a93219e190"],["2021/03/17/data struct two/index.html","7f367eef427c76b10e2a97532def1bc9"],["2021/03/22/STL/index.html","bbf20a30a693ab57ae2d2bf2be5f4d9f"],["2021/03/27/Battle-of-Tanks/index.html","1a3b129fe43b227c265740253e682c34"],["2021/05/01/MySQL/index.html","5410aa66e480e85be2bfcb2b8c17fc69"],["2021/05/09/HEXO部署服务器/index.html","b974fc0bf5fe05406d2e18a75c65ba39"],["2021/06/04/vim/index.html","f8eed2538c7eb23618b721629c9a4168"],["2021/07/13/oh-my-zsh/index.html","5276b6423dd67dfa68035645076ea0d9"],["2021/07/14/HTML/index.html","cc809ad1b61662ca48633c40604b94f4"],["2021/07/19/Maven/index.html","e91539900329b4502930a4f58e62d4f0"],["2021/07/20/随机数（C++)/index.html","c5e620717569cc2d7fb9b121102e2fc6"],["2021/07/22/data_struct_01/index.html","7f7fd518357b04d453bcf3695daa5295"],["2021/07/22/滑动窗口/index.html","67d50a91ef9e75e6e129b8bf81b22a09"],["2021/07/26/Tree/index.html","eec82fc90402c3a927d894a603a834b3"],["2021/08/02/正则表达式/index.html","c45145bea791ab95f0a7fec695ce5a7a"],["2021/08/14/CSS/index.html","09007b713fa775f4192c98d5c87052da"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","2b24ac24ff50b134a752d8a9f0bad30b"],["2021/08/19/Windows Terminal 美化/index.html","ba6f524034386971961e4295effe3a5b"],["2021/08/23/EROOR/index.html","83b9256628a1c6e1cedec913c2a40499"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","be0e3099620bb9c1a3a41e586cbb8bf0"],["2021/09/07/编译原理/index.html","eb074031b8c92f92a9660728ac062259"],["2021/09/27/网络是怎样连接的/index.html","5ebe543660e6077d710a2fe6d3d37b40"],["2021/09/27/通信基础/index.html","8f16c90a0c1b937199125d83e470d1f1"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","24c0c3dcaf91f1a08a335a1e36e8b470"],["2021/10/22/vlan配置/index.html","89378918cbf7975fc91109c76ff99604"],["2021/10/31/实验三—子网划分与静态路由/index.html","ce1ad71c6f572ec2a3d847528f531e0c"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","5aa56e6499788bf7d82bd1718b92fa50"],["2021/11/17/硬链接与软链接/index.html","ab05f1bcc9a081ea6878cb2c950926da"],["2021/12/01/SQL20题/index.html","f2fb45c3f3fc30b8a89cc7f64f08c003"],["2021/12/08/实验五：Wireshark抓包/index.html","21846c9ce83acb4e05469c0b8d205700"],["2021/12/15/CentOS7搭建FTP服务器/index.html","5b78ff6e0f767c608faae8370f774efc"],["2021/12/19/CentOS7 安装相关组件/index.html","8b004fcdc25a14aeba895520cfccc186"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","0bac1dd3655112d16be6ca0ff3e6601a"],["2021/12/27/Vue/index.html","b78532a4125e782f7409deb698f350fc"],["2022/01/08/ArchLinux系统安装/index.html","41be6f95b54ad308bf31dbbbbb67a829"],["2022/01/10/ArchLinux软件安装/index.html","06de71185d2c9845871282f583077cde"],["2022/01/11/ArchLinux开发环境配置/index.html","3b5a3cab5e3273ba742503a6114a4b3b"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","277ff2cf98dbe6f9b31579da3d9036a0"],["2022/01/22/DWM/index.html","7bc2277d6dc37d33dae75d64274e2b7f"],["2022/01/26/MySQL性能优化/index.html","3060c2e67aff28355efe1ead0fdeeb00"],["2022/02/27/ArchLinux安装wine/index.html","241eb19ac60f2929f6286d5365f64916"],["2022/03/01/ArchLinux安装VMware/index.html","7782843a1bf08e2f2e32535c2c5b2314"],["2022/03/01/ranger/index.html","664701f976e6939dd8423a66a1531eeb"],["2022/03/02/ArchLinux PPPoE拨号/index.html","5282b83280c2b6baddda31651f7c0ac0"],["2022/03/16/Linux文件和目录管理/index.html","1c8965ae77c82dc75b4180d1289db7dd"],["about/index.html","12d7da6a64d577350e0f91223b717ba1"],["archives/1970/01/index.html","a8f074cff513f6947dac67534e108b22"],["archives/1970/index.html","1155163847b3d05945606efe0369361e"],["archives/2021/02/index.html","e320f53b92215a19871f3ab7d284bc07"],["archives/2021/03/index.html","a6c598234777f038dc785e057da19b04"],["archives/2021/05/index.html","a8728f1df107af7c9ab2bc6c12dbb08a"],["archives/2021/06/index.html","163c22223fc7b2a3468c1dbb3a6e727b"],["archives/2021/07/index.html","7660e9474f5d814433a45f5415251821"],["archives/2021/08/index.html","49518c3043a4220025e700e2fa48d7e3"],["archives/2021/09/index.html","a436bf0e7f0ecc009851cd0c3745ac46"],["archives/2021/10/index.html","ff90a623f35b4805904cc2782daa519f"],["archives/2021/11/index.html","0fc0c4d4d47b7008aae5deb577f65a5d"],["archives/2021/12/index.html","a52a8eae52bf1b7c97a8cdc15264c5b8"],["archives/2021/index.html","2ccfb153d5b35c9fee2bf54552bf9951"],["archives/2021/page/2/index.html","bf259cb925a50b53da4a945ddcb1987b"],["archives/2021/page/3/index.html","b91433b867a185eadb1c3dc48f2ea929"],["archives/2021/page/4/index.html","5530a547d676f7f2d5d27729be8dcf85"],["archives/2021/page/5/index.html","8d369bc401f139c7a21a99322bef8804"],["archives/2022/01/index.html","398281c21e6e5e84e6b2477beaba71be"],["archives/2022/02/index.html","ec020f654249dd0a9ed58836e20e9010"],["archives/2022/03/index.html","a2260cd1006e6a034722ec20cedaae02"],["archives/2022/index.html","e157e4636d8c29376575d2e13a4781fc"],["archives/2022/page/2/index.html","e13863bcdec6aa21b72ac6d418e463b4"],["archives/index.html","5aefe382527ed39be3439b931bdedeab"],["archives/page/2/index.html","462028adb57b907769ecbb2b65783cbc"],["archives/page/3/index.html","cdce07d00cef5fa9978de92a35041ba9"],["archives/page/4/index.html","5e6be43b8f2055a4eab7275573e7e6ff"],["archives/page/5/index.html","06aae2bd2f3bc7bd4b2d09ea85230af7"],["archives/page/6/index.html","9c17f0c4b40d5e057e6efbe1788c90ed"],["categories/C/C/index.html","a7c4f1b5f0c6869c826f5431c777796a"],["categories/C/index.html","883b9e1766db0ec54b9dbf1c4016e23a"],["categories/Linux/index.html","2b4231c3c9586e15cafdd4c837a2e7b6"],["categories/Windows/index.html","9fe9378e0009dafd724bdcabae5da3e0"],["categories/index.html","33acaf30240e4247565474d5aa948559"],["categories/javaSE/index.html","aee123d9290861c0a93f50d0054748b0"],["categories/tools/index.html","9a935a4a576b60ebd38e826308c580ed"],["categories/wxy/index.html","d0d43ba4e79ff4b2e2663a1b886df662"],["categories/个人/index.html","7967b150bd5954ff89073fdb2b121ad1"],["categories/前端/index.html","6a8f74616d14f6f239e1d1d1e1c81de2"],["categories/工具/index.html","8c9f8aaf4c9988fdeb790ba5b6ac4887"],["categories/数据结构/index.html","b9b98397544167a42ef88aca6c2e33f3"],["categories/笔记/index.html","f4df0b8c8e83eee26bc216652d52a60b"],["categories/笔记/page/2/index.html","cf27644f4a1c005ec9abd815dd37539c"],["categories/笔记/page/3/index.html","16b32465bcee00b365f65b4943d43172"],["categories/算法/index.html","77a44527e57e8a820496af8a9eabbbd0"],["categories/美化/index.html","28c4b0155c8b3a53932ef5d2c1e79cab"],["categories/计算机网络/index.html","8faf4fef2dd92b75a60b46bfef567e18"],["categories/计网/index.html","2c6e9b8e4b05075a71173c709d8ec11b"],["categories/语法/index.html","1b4e52065cd45ad7fa6d54376aa363ea"],["categories/软件/index.html","7565601d5e60f4ba4b421501ef3c662c"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","c55243088a0ac89050060d7707bb5024"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","2614e2c07b8b190dc55d0b55d868a17d"],["page/2/index.html","1c4fc2d050fdf8192e143049ca1f33ab"],["tags/Burp-Suite/index.html","b5c426d7cb8b4f6a34c2fda20e8acdea"],["tags/C-数据结构/index.html","03c8ff25a6427f214db470c330dd48df"],["tags/C/index.html","c691c83662e400d9126825bc09fe1ab6"],["tags/CSS/index.html","7e77fa82a4607e8cfddef377511d7213"],["tags/Git/index.html","52cdaecf58b1d6a54c96711f200cc71f"],["tags/HTML/index.html","68f6b5fda0481189a0e2cd88b5fb0ad6"],["tags/LeetCode/index.html","7e6b8f8107e4f7fa15b36e2289f2a93c"],["tags/Linux/index.html","365b01d55e7b7606244db16077abf9db"],["tags/Linux/page/2/index.html","9c2ddc96d9d4eae853d01e46ac68eb8a"],["tags/Maven/index.html","c17ecc4819cfc59c31507a8752f06f96"],["tags/MySQL/index.html","f9678ef5852e1eb594b348eb891a2c2f"],["tags/Vue/index.html","8f20807ae8decc75db6ee24fdd0b4799"],["tags/Windows/index.html","9908e13034ed40c7d24880891da06a93"],["tags/Wireshark/index.html","ae36e3cd8d43be90462a0fd2e86a0642"],["tags/index.html","936426e007b15ffe301a2211b895de7c"],["tags/java/index.html","28982476f4fd0d0323845bda57e953ac"],["tags/route/index.html","95d30dd8ad0184c45d95ac70892eafad"],["tags/tree-java/index.html","75e13e49959dfe87576999c7ea85fa8b"],["tags/vim/index.html","bff1352f7d0b2fbb8c8404910c03af27"],["tags/vlan/index.html","00fd0d09cb83651da3afa0a21f2645a7"],["tags/wxy/index.html","8b475ec7dade29b990429e6ca04987f3"],["tags/个人/index.html","0a6c363742b2e8a0571756ed1ccb74cc"],["tags/书籍/index.html","090cf7067e6f99627ea75f228dd99a68"],["tags/博客/index.html","000ce1e976592463b951134b593246bb"],["tags/壁纸/index.html","bf750829238d870ce6162018e125aa75"],["tags/底层/index.html","b4ef074b3bca235dbe8e4efd291d9c62"],["tags/数据结构/index.html","31d3a14d523f708f21c7c230769fa5c3"],["tags/文件/index.html","8b2068fcae14fa5b22d77218db8d0eb6"],["tags/服务器/index.html","f377eabfb1660417438ed244917349c6"],["tags/汇编/index.html","9cdfbd9293655aaec25238ad1a1556d8"],["tags/算法/index.html","aeab44d700d0ee6c8860cb67668bd170"],["tags/记录/index.html","a46e39812777070c2e591197b4707cba"],["tags/软件/index.html","a485d7c757773f5343eb0aad0f7a97c1"],["tags/通信/index.html","b50879b05f6fd0867804fe7cbbdf76cc"],["tags/链表/index.html","a214734f606ea57cbb74e55879ae3984"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







