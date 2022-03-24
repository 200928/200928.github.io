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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","b0e50fcad930794b80ee581cd53f38b4"],["2021/02/18/Git学习（个人记录）/index.html","179d6db93a603933196f4e5c21b3e010"],["2021/02/18/Hexo博客搭建记录/index.html","a8a8f3a1343b31cd100fc056edfa6840"],["2021/02/18/IDE配置/index.html","a32364d238ef5c8eee289baef15462ec"],["2021/02/18/初识汇编/index.html","34dc0b16320c290b35f46a58f4bd3c4e"],["2021/02/18/链表与指针/index.html","e7b0d2a84000f0f84d292d24605df987"],["2021/02/22/Topic LinkedList/index.html","7c5b29f33e8866aa66777e656e15de52"],["2021/02/25/一些设置/index.html","3732eaf549235583e445a46c2d0f8037"],["2021/02/26/WXY/index.html","b8936822e6010c30b437de0b7cf73166"],["2021/02/28/大二下课程推荐-计科/index.html","dd7a52e67e22bae814de213115dbef87"],["2021/03/04/Linux-notes/index.html","d6d40caefa4f5236a5b338a80b2fff0d"],["2021/03/08/data struct one/index.html","65210fd137957deb8ec4d274a10cf7da"],["2021/03/17/data struct two/index.html","d6dd5bcb2866b43f1397a1a8beb5f5c5"],["2021/03/22/STL/index.html","a1f1674b6e897e2ab81c242f32799e54"],["2021/03/27/Battle-of-Tanks/index.html","760844bee1c347f9c95c1ba160694742"],["2021/05/01/MySQL/index.html","18db9afae5aed9a6aff22b3880247bf0"],["2021/05/09/HEXO部署服务器/index.html","1c39003fe9c85f1ea410b8736ca5550d"],["2021/06/04/vim/index.html","9a5aec6198deb1783840c01a7d71eddb"],["2021/07/13/oh-my-zsh/index.html","533582b1f58367aed6d85ce8f261c51f"],["2021/07/14/HTML/index.html","3c83ea4b5ae7a9c718d1135c87d2a061"],["2021/07/19/Maven/index.html","4fae6b52220e99afb7ad86eaf2ecb747"],["2021/07/20/随机数（C++)/index.html","8e9cc6461d46f9df7093a20ee5993e4f"],["2021/07/22/data_struct_01/index.html","8079104c33cea26355f1525d7dabe677"],["2021/07/22/滑动窗口/index.html","96b62848b3ef1ebf4c790bf5c0081738"],["2021/07/26/Tree/index.html","379f6adde21a2d9dec28479878ef0a72"],["2021/08/02/正则表达式/index.html","ed4e633f7b2e23deda34768d07721df2"],["2021/08/14/CSS/index.html","12fd2e89b51160c6e5c908c3d33abf1e"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","692d0ae2e23823bfc396e78c2fca2af5"],["2021/08/19/Windows Terminal 美化/index.html","d8c274c6c660c931ae95e8b0e08a6338"],["2021/08/23/EROOR/index.html","aabd2eef528dc10bc15b0a7424275b81"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","2e7a5ae3348e3ff77f35bcd6c15686d8"],["2021/09/07/编译原理/index.html","76be854af3349ea7830eafa6fca6894d"],["2021/09/27/网络是怎样连接的/index.html","679f6afb43b09b91bc5f4ea5bd03cc42"],["2021/09/27/通信基础/index.html","d26e7ba331f5793baf5ab45a8d328d1e"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","06227b04dd8f36f0a9f03f8e72a346ba"],["2021/10/22/vlan配置/index.html","fe7f470c0d72e6787a7f4ae6fba7ab14"],["2021/10/31/实验三—子网划分与静态路由/index.html","2985409a153093cff017d0a77c9fa900"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","80a69c77def63b6486fb6fcdfed1bed3"],["2021/11/17/硬链接与软链接/index.html","ec9af81761cda6e130a59cb1d43998f0"],["2021/12/01/SQL20题/index.html","9aed99b47a8c7909eeff7416fd672b85"],["2021/12/08/实验五：Wireshark抓包/index.html","257663e3dd08692e36ca032eef15924c"],["2021/12/15/CentOS7搭建FTP服务器/index.html","6d12d57842aecefd555a8980ae5ccfb5"],["2021/12/19/CentOS7 安装相关组件/index.html","64fede907dd28220c98e103fb95f066d"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","b94254027d3dd9ca1023458440619aed"],["2021/12/27/Vue/index.html","4650fb39c3ad1c1c51b60da0873e7905"],["2022/01/08/ArchLinux系统安装/index.html","545602d8d76b3910b8227f44ef7f817d"],["2022/01/10/ArchLinux软件安装/index.html","6b9b108d3145821e0f26cf500cb45e88"],["2022/01/11/ArchLinux开发环境配置/index.html","dfcd3c96f253d4d679deb3da57573efa"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","02aa03ae9d83bc658e2fb3fdc587a9ad"],["2022/01/22/DWM/index.html","e1758b9a167d2376bdf380150ba7bf75"],["2022/01/26/MySQL性能优化/index.html","6760f8f477f59bff25448e17aa8b67ed"],["2022/02/27/ArchLinux安装wine/index.html","37fa8fdb86267ae47d08e010d764006f"],["2022/03/01/ArchLinux安装VMware/index.html","da2fdcee13532ace543cc08b57277c77"],["2022/03/01/ranger/index.html","d0b9716950e490013f4ac1941c8f64dd"],["2022/03/02/ArchLinux PPPoE拨号/index.html","7a766e5b438de651d3e9d703df02e0e3"],["2022/03/16/Linux文件和目录管理/index.html","31e8715a6197a27479dd36de927d9312"],["about/index.html","5e30087efd770b98cb7456e86c4fc0a9"],["archives/1970/01/index.html","afb642c572e870cf11bcc267869e0c4c"],["archives/1970/index.html","6071fe70243c6c5407e4d59cb85af01d"],["archives/2021/02/index.html","3c45285aa10cc322dc79e1c80d72b8d5"],["archives/2021/03/index.html","700b850da3e87b2319fefef1324a240b"],["archives/2021/05/index.html","a792800de2a99bd7098d7728a8e15bfe"],["archives/2021/06/index.html","94ba32541677076d743a50260c02c3fd"],["archives/2021/07/index.html","3ab020e438f470b89469018c9f00da05"],["archives/2021/08/index.html","5612b87c60f76068469f8c2340c96d3a"],["archives/2021/09/index.html","1ee536fa555a349a2bd20f11e7e07772"],["archives/2021/10/index.html","e06e536cb2fed0bef05e4f0c3f7a5e6a"],["archives/2021/11/index.html","4b8c095b5f8bc4ac0fbc7a574b82925d"],["archives/2021/12/index.html","93b2ba86c1ef9fc4872bf591fdee74a0"],["archives/2021/index.html","96d2152867ebfe184e931df5d357e0e2"],["archives/2021/page/2/index.html","26938797dd5a2b717d154510a99237f2"],["archives/2021/page/3/index.html","a72a2ce94c2237f8e4a954bf35537aef"],["archives/2021/page/4/index.html","d5e18d7587632aa0651f36d9f5a66e4b"],["archives/2021/page/5/index.html","6e992874633d279fb11ad9dc564863f2"],["archives/2022/01/index.html","d556338a25867cea21f971cb0a026ed9"],["archives/2022/02/index.html","f028350109cbad5aef5e47370b92fa62"],["archives/2022/03/index.html","ee860bb32a2517a697ed415b13bdd34a"],["archives/2022/index.html","71c185f7b8804d5bf55a5be7d4a66fff"],["archives/2022/page/2/index.html","a71937f900af71df1e3067ade278a4d5"],["archives/index.html","363e553d9c5cdad3502542b936638bb7"],["archives/page/2/index.html","898886b94714bf0e5e9d01f964847aed"],["archives/page/3/index.html","770c5cef48a4e2e86ea6e030c4486928"],["archives/page/4/index.html","52258a213129a2b73828d3adf937be25"],["archives/page/5/index.html","78fcdd7d06b8d5c829fad183ac798611"],["archives/page/6/index.html","e5b863370c1b84944757720218ae5a9d"],["categories/C/C/index.html","d883f54f478fa330d6a31a097777e60b"],["categories/C/index.html","502fe0f2fa397a226f3e40368c3f7b90"],["categories/Linux/index.html","b2d681ef05b0e4b0125b7588973dcfc5"],["categories/Windows/index.html","d75c189fbaa453b77577703bc120061b"],["categories/index.html","a607c820d860645238ef870fe90ebec2"],["categories/javaSE/index.html","e878cff747b742f855e8f65c7ca1c3b6"],["categories/tools/index.html","ddf296ba967c575e60b34f8ae3878a37"],["categories/wxy/index.html","7dcd974ee66d15267d8436c52483bc7c"],["categories/个人/index.html","a3d7c1b904aefb93a28013ed1d882727"],["categories/前端/index.html","057a9a25d14e81ae07f0406110e7ed3d"],["categories/工具/index.html","fc4186ec1f7c5c4cc12eb1ce196f76e1"],["categories/数据结构/index.html","d2e3d938e2dea59c4069d7b8a401f5b7"],["categories/笔记/index.html","6fcbe16c10ea800241123d68633a88fc"],["categories/笔记/page/2/index.html","c386c241ee108c978f3d425bec1d3912"],["categories/笔记/page/3/index.html","9a2103bfc7c953f897449c6466a70d3c"],["categories/算法/index.html","4a853625120332f3d1fac69c847b41e4"],["categories/美化/index.html","c740f2ede074b525fe3b7ea9c64bad74"],["categories/计算机网络/index.html","f56c579363db9ad368a3023316892b66"],["categories/计网/index.html","57e91a5841d92dfb0f12cad3d5a91e72"],["categories/语法/index.html","91b2a1acb39b9ea5afbab5139c62d952"],["categories/软件/index.html","2b96f97aedf32265e2f78d217db35858"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","68e11e1f55e8397692b382535d93efa3"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","12b648f0e95321ba54d07580759397ac"],["page/2/index.html","82d6595624f33532938e6dacc89b4f73"],["tags/Burp-Suite/index.html","4910a312d864d50baf7de0090de5bea6"],["tags/C-数据结构/index.html","c33e000f821757aa820223d2532e356c"],["tags/C/index.html","34ec35a6c0f587f5fdd1655ad3c4ad09"],["tags/CSS/index.html","a1b1140dff649d93ea22e0370c213d7f"],["tags/Git/index.html","e30e36f8ef042e514f72488047d4601a"],["tags/HTML/index.html","75642e94c3416373662d8cd1bacc9299"],["tags/LeetCode/index.html","9cc473370fc939382904047fbfbfae79"],["tags/Linux/index.html","d01af4bbc97bd8041ad7a162a846efa9"],["tags/Linux/page/2/index.html","bd0bbd262754a459e6ae7d455f366bfc"],["tags/Maven/index.html","8fc4f5d49687fb7ac67e077785b87c6a"],["tags/MySQL/index.html","6831ddf54e31dafb7535d5696dcc380e"],["tags/Vue/index.html","6d27a90ad3101db797a0be6cdf0cc883"],["tags/Windows/index.html","223beade52ac0bfbe5767bab83e599ab"],["tags/Wireshark/index.html","43e45cc3f0807a6e4d6fe5a877a5bb5a"],["tags/index.html","dc42d814419e592fca0266534b2bef89"],["tags/java/index.html","098609e55128c44e6233381ad11edca2"],["tags/route/index.html","317d2b6bc86e5f8ee8c9e248a4007477"],["tags/tree-java/index.html","669b6e1bb00465a485b1270282bb940a"],["tags/vim/index.html","92417730daed0f9692323b1624a6a362"],["tags/vlan/index.html","bcb916661a25391a2426d255797da21a"],["tags/wxy/index.html","1769b16a553e66a4e851603677f9bafd"],["tags/个人/index.html","ed3a7fd7cc0979a83d6da67178241074"],["tags/书籍/index.html","a1de2be022b684d6b3f7e5f2b39c5d8a"],["tags/博客/index.html","80b31c34abeaa756e3a71e13ca9e4cfe"],["tags/壁纸/index.html","f48ab18cddf3b945acd4a398c8ec7430"],["tags/底层/index.html","51bc607382d1f9b0847b3f0fed21ef99"],["tags/数据结构/index.html","2e58f3b32bdc17c9097257ec3f6aa893"],["tags/文件/index.html","a7e022c9e0bb743e922d182f381acd88"],["tags/服务器/index.html","f04cda068a4350dd0be20e3acd0176dd"],["tags/汇编/index.html","3f1e63e4fc5b10c46f804256b4d3a085"],["tags/算法/index.html","521ceb47e14d199bd5271bc86864fa82"],["tags/记录/index.html","3d3b0eac5801943cf94d9300da9b0e62"],["tags/软件/index.html","e4c2a45c20a8855cfb59ac806b38faa4"],["tags/通信/index.html","da7a27f5d62a37acf03a951f62e2e6c2"],["tags/链表/index.html","33b41c2e785c1ac5b12141afe5b1ef43"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







