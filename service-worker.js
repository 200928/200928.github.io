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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","db3b4786724adabae1f258390061848a"],["2021/02/18/Git学习（个人记录）/index.html","815b1395493eaec0edf4a84e670f2e04"],["2021/02/18/Hexo博客搭建记录/index.html","971d4cfa55b7132685cfdf30906b6d5d"],["2021/02/18/IDE配置/index.html","a46b1e32b74e4217526c395181bcbe25"],["2021/02/18/初识汇编/index.html","367bf8e4a3eefc21c7d0c9ef8d9f0320"],["2021/02/18/链表与指针/index.html","f03a1efe14e518551cc5a20e870dd371"],["2021/02/22/Topic LinkedList/index.html","aba0300f9b98b44a574f1697b4c18841"],["2021/02/25/一些设置/index.html","9eee09915c2a7c9d0fb61df5ff994b3d"],["2021/02/26/WXY/index.html","27952f0abb522b9ecfad29baa391b70f"],["2021/02/28/大二下课程推荐-计科/index.html","695bb6652acf61c12dfcd2a049bc02e6"],["2021/03/04/Linux-notes/index.html","0629f275926e208bc18d8016d9fbe727"],["2021/03/08/data struct one/index.html","5906a17c2624e9290cdbe184a7f81122"],["2021/03/17/data struct two/index.html","d571333d981c4ef5aff003469425cced"],["2021/03/22/STL/index.html","d7051682df9be611af05fe17a649e902"],["2021/03/27/Battle-of-Tanks/index.html","5ff5759fea73efb49f9f3d4139b8b096"],["2021/05/01/MySQL/index.html","ebd3bea189e8fef988bc5f5bb1ba2cbb"],["2021/05/09/HEXO部署服务器/index.html","a438f9c946fd968ef4b5ea77c6fb5123"],["2021/06/04/vim/index.html","426e5ce0a6dac2e1d9c3c993c64b5f51"],["2021/07/13/oh-my-zsh/index.html","1ac6a0c072422757c6561da333305b95"],["2021/07/14/HTML/index.html","df392f2be2d485a251ce9875aa9ce953"],["2021/07/19/Maven/index.html","d25ed98f6d4cf57d76bd943447152f4b"],["2021/07/20/随机数（C++)/index.html","d12342bff0325808cb5fd32913829687"],["2021/07/22/data_struct_01/index.html","b67181e340fe0f4fdc50b069be32bfbf"],["2021/07/22/滑动窗口/index.html","4fdd11eab210df92b158b4d6f3fe3218"],["2021/07/26/Tree/index.html","229eecd82285df054a82cf198a22dee3"],["2021/08/02/正则表达式/index.html","517b5dfb1a3ee48c9bc7697e9f4f3c59"],["2021/08/14/CSS/index.html","918c296784a12371bdf31b3190b4b669"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","b196859ebbad77ae04c9fec50dc270a8"],["2021/08/19/Windows Terminal 美化/index.html","016e72300ad463939668058c69e565b6"],["2021/08/23/EROOR/index.html","bf8a1b06f184fc5b0f22b0b5a76cc725"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","3bd715c8c3ba42ebfa297b08f33e86cb"],["2021/09/07/编译原理/index.html","9c996e22b265b886138028629901fe18"],["2021/09/27/网络是怎样连接的/index.html","c27864bc7fa01e44a8db47f7fa298c6b"],["2021/09/27/通信基础/index.html","544ce1c219318c22731025e388881366"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","533ddfb769a3536ba7e4364d05eb6443"],["2021/10/22/vlan配置/index.html","b0eb14ee8b8cd6baca5dcde570d6f3de"],["2021/10/31/实验三—子网划分与静态路由/index.html","b9ce17b9dbfbe0f0805d285df48399ff"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","8686435409db5eb1d7621c46c956f59f"],["2021/11/17/硬链接与软链接/index.html","1ae209d1715ae42054e74e91afc05815"],["2021/12/01/SQL20题/index.html","11043d3345ba96f987625037c39495d1"],["2021/12/08/实验五：Wireshark抓包/index.html","9abf56ce48747c41cd96663c8854cab3"],["2021/12/15/CentOS7搭建FTP服务器/index.html","f65a56ab1afb32c7f4e1fb3e37291108"],["2021/12/19/CentOS7 安装相关组件/index.html","e1039229df50c6a1acd4741e915cf0c8"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","e4a869a464c08df1867974c8c414e968"],["2021/12/27/Vue/index.html","b0b88858005ef0060d9708e32a7adc91"],["2022/01/08/ArchLinux系统安装/index.html","a0e69dc4775d342a52946c5efb240710"],["2022/01/10/ArchLinux软件安装/index.html","723821986e9cfa5d12f16b7b055515d4"],["2022/01/11/ArchLinux开发环境配置/index.html","48a9a149a5cec50f7ec2e71dc3d0e7a9"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","f39127fcfcf845a2c3cdc27c620988be"],["2022/01/22/DWM/index.html","3e3975a558c7cf7c47defc716ec04416"],["2022/01/26/MySQL性能优化/index.html","f00167bf415497d0b20400c45569db11"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","03eafe922d4720b3e24aca47b44fe919"],["2022/02/27/ArchLinux安装wine/index.html","bf7ff203fd8de44a80d0b7c8ceffa138"],["2022/03/01/ArchLinux安装VMware/index.html","4c31696fa5ec413c2a07a0ea5956c72c"],["2022/03/01/ranger/index.html","8e2b2d1313c6b62151fe19e3cc5ed2ed"],["2022/03/02/ArchLinux PPPoE拨号/index.html","335d807345e163a8cabaec9c7273258e"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","e63b532dc8f5924e81a9724be30bc456"],["2022/03/16/Linux文件和目录管理/index.html","c3d5da3c262d893cdaafc29c14544f30"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","65111fc26b0555d29ab415d295ca7c45"],["2022/03/20/Linux用户和权限管理习题/index.html","d2eeb3f25ab5b76ed2e411eb84900c1b"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","d1ccdfd38ad34de4bc609e4ac48de3d2"],["about/index.html","aa39edc58db4ef1e6a1932fb02a8ce0e"],["archives/1970/01/index.html","59f0eb894aac028f12b292e097b10e26"],["archives/1970/index.html","196172d1a175f074033ab8aed4aa860b"],["archives/2021/02/index.html","cffc161dc980e2c8f97a415cbc1c128c"],["archives/2021/03/index.html","73c75f8c50b241b50543f91772ffa615"],["archives/2021/05/index.html","aca33229a14aadf34f29f2a34329ebfe"],["archives/2021/06/index.html","355cea5e72f2d9e9492d6783955b268e"],["archives/2021/07/index.html","5b4ff26ee16887813e044108d261fbdb"],["archives/2021/08/index.html","677454943b155cd01fe5523404f7c1b3"],["archives/2021/09/index.html","57ac8ae76e0c4c300a4e38cef09070e6"],["archives/2021/10/index.html","9d0f581f05847e0edb66765b42e3068e"],["archives/2021/11/index.html","f6c11fb15be0d50c258675a6fb53d0f3"],["archives/2021/12/index.html","853d7f649c0694b060410d24a8231e8e"],["archives/2021/index.html","e35f21995940f865a6380a9795a69373"],["archives/2021/page/2/index.html","cd493b93950be394a9e4f5c96b10fa2e"],["archives/2021/page/3/index.html","7ccada33fde876f7a8a207b7f9a06591"],["archives/2021/page/4/index.html","b0eee50bfbeb79e25e34d46fbfeaecb8"],["archives/2021/page/5/index.html","39c079e7a362a2e8f4a1477fe2d00854"],["archives/2022/01/index.html","d4516005933a4d6114a759461cfc897e"],["archives/2022/02/index.html","e651180a37132ffdf06b8fc26b6e0a10"],["archives/2022/03/index.html","c5b9ae7097ff13ad11a9134e6ca4b9f4"],["archives/2022/index.html","54ab2713e339c5a3d2135a403c8368b7"],["archives/2022/page/2/index.html","6494da0c0e2a93199fbe07abbc9bd38b"],["archives/index.html","9067af3d0bf69015d8e0bd16b1ece546"],["archives/page/2/index.html","54ab55feead7f8db93678256268218aa"],["archives/page/3/index.html","c1ee30cb2a9ab4c45d29b9fe5392a6c5"],["archives/page/4/index.html","c0ac28aba01a140ce90afb465e577ef6"],["archives/page/5/index.html","69b6cb1e69f449f164840ea069589ee4"],["archives/page/6/index.html","9c84f8b1554fdf4654942c5ddb8d080f"],["archives/page/7/index.html","2a984e097dcb8437285d6b6508ee6418"],["categories/C/C/index.html","b3114b8f59d7d4fb447908e9b80d83e0"],["categories/C/index.html","c143f1dba2373b14ca6daae707aace3e"],["categories/Linux/index.html","041d3e89462d69626d9a773ddb70e965"],["categories/Oracle11g实验/index.html","8a3a2071e41210757e09b705000c7454"],["categories/Windows/index.html","0a8b5360742691b1d4d29ca449ea79ae"],["categories/index.html","b6985c801886d0891398fc8bb723b7c3"],["categories/javaSE/index.html","a7f683787f357f117ee68159ac592422"],["categories/tools/index.html","b6f73004fecbbb6b3f1a3a65d3384617"],["categories/wxy/index.html","451d266177c7a26539a509cd482a340a"],["categories/个人/index.html","acf8b48ca1c01890fc94c4dd89582c8b"],["categories/前端/index.html","9101186e760667f156e5f5fac3db47fb"],["categories/工具/index.html","02974ac9e69d43f4653297d059ae6d47"],["categories/数据结构/index.html","4f508282beb206704b3cebe5b4f04026"],["categories/笔记/index.html","e0483894d5ca75349645a6473a12d628"],["categories/笔记/page/2/index.html","94a1d27000516019deaab45ff8a680b0"],["categories/笔记/page/3/index.html","708831929d16bd35118f586099d9c651"],["categories/算法/index.html","57a31b1c084649fa8cbd097be62a0366"],["categories/美化/index.html","72da54aff7701e77ead3cae32dad3c5f"],["categories/计算机网络/index.html","e064f7361629d638113f989ca37eef63"],["categories/计网/index.html","51a626e537d01bfed4068935991553ed"],["categories/语法/index.html","ea8374bac4453914c648c95cb9ea8143"],["categories/软件/index.html","2b108ba38d141db466d34adff438b6c3"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","fbe837ab39e60a57ce376e851ffb8291"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","d6934b0a0d48ccf9ca0c8990c84b204f"],["page/2/index.html","8e6fb4fce7acf82e637d2ada44ea0f9e"],["tags/Burp-Suite/index.html","53c0652253388e729d1d17402b3bf0d1"],["tags/C-数据结构/index.html","19d41c11ee291eaf536f2fa705762286"],["tags/C/index.html","6544c9f6b67b140fa4bc73a3c552f7f9"],["tags/CSS/index.html","ef96e7c2ab6f191b2b4f3b9322fa89d5"],["tags/Git/index.html","fdff77e8d2c70dce4c30b8ae661a834c"],["tags/HTML/index.html","159707583edf3c6d2e7db8db7a4905fe"],["tags/LeetCode/index.html","9583cf99173a507f6fa05aa87f456d2f"],["tags/Linux/index.html","4ab43103a3df8fc7135c2ca1dfd32f35"],["tags/Linux/page/2/index.html","a93c46d4c37c8a95cccc397a7d423adc"],["tags/Maven/index.html","738a6ff37f211403755c3c288f60b085"],["tags/MySQL/index.html","eecf0ead3b226ffe2a62a638d069691a"],["tags/Oracle/index.html","6fc9ae399d9dac2aba0bb0112ddc00ed"],["tags/Vue/index.html","30b95cb6fdd3329c8a629da8b226b834"],["tags/Windows/index.html","992741321c9c57dd75e5de1464f7470c"],["tags/Wireshark/index.html","4d893a19d6f3a27dbb10a5db88c1e1c1"],["tags/index.html","5c356fcb7525cf96dfe2e83472fa819c"],["tags/java/index.html","705ac0ccbcb6bee95610abbe66b3d39a"],["tags/route/index.html","cc40873edba9c587f28f1c2772c20b86"],["tags/tree-java/index.html","586991095e2338736b4eb0ad2dcf6022"],["tags/vim/index.html","7201f50ca4f8d4719b213d5310d09de1"],["tags/vlan/index.html","1db5d6e4c57511dc8d586407f0d4e192"],["tags/wxy/index.html","29b5a0b127e95817d1698e699b15db38"],["tags/个人/index.html","93f997e79880325c82f0adbb454cf437"],["tags/书籍/index.html","bf4008128e27407a7c9e087721665261"],["tags/博客/index.html","f86f04cde38b0332769534e86df5713f"],["tags/壁纸/index.html","0a6552852f5bfd80f7bbb4e1787aac3e"],["tags/底层/index.html","8371922aec4a73b330cd65620ca93c48"],["tags/数据结构/index.html","3b6a29db72f1f46d0cf99f1d5caef1c3"],["tags/文件/index.html","f6801b0e0c5c8a70085fba5c8fdd07db"],["tags/服务器/index.html","809312728e22b0a91bc8cb16dd4ec361"],["tags/汇编/index.html","01132973e0477a17d6e32ce13c6bb8da"],["tags/算法/index.html","f2d22e43aa07f59a21fdad8d2a0822fe"],["tags/记录/index.html","b20991ec698558fcc0e7b4d6cf923ffb"],["tags/软件/index.html","bde6274d07e4d389d712562e02230cac"],["tags/通信/index.html","7141debe37e96ed692db2f3293a859e5"],["tags/链表/index.html","275866fd1cb48cf710cb42383cf2fc04"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







