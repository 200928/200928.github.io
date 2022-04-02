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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","1318c42007aee5616a661a4d181ef268"],["2021/02/18/Git学习（个人记录）/index.html","0fe9b710894b63233e563842478b06ce"],["2021/02/18/Hexo博客搭建记录/index.html","3e509928ed6f2b7410da0f83d3898ca7"],["2021/02/18/IDE配置/index.html","e8f6265fe60193a90a0ea6b3c12e63ac"],["2021/02/18/初识汇编/index.html","649e000cdd7f58ef9890ca4e872e61c3"],["2021/02/18/链表与指针/index.html","f307b5fd7e8aa94d5867bb8696734b88"],["2021/02/22/Topic LinkedList/index.html","9052c44d7f19df972e8c5d0f459b3025"],["2021/02/25/一些设置/index.html","f5a14c99f40cff6c4958a7f026f50f0e"],["2021/02/26/WXY/index.html","63602b4d10d75e5cc0f7fa17cd55f32b"],["2021/02/28/大二下课程推荐-计科/index.html","bb3b012db8bcf2f6fe43e23408643f00"],["2021/03/04/Linux-notes/index.html","ba13daebab1a79eb90cbf6181e80e8a0"],["2021/03/08/data struct one/index.html","8ad9f248330da90f64799ca48216adb1"],["2021/03/17/data struct two/index.html","5ebde5476c6c34410b91aa1bc8400adc"],["2021/03/22/STL/index.html","ac4dcdb872f2b3db2b4099776503d6b7"],["2021/03/27/Battle-of-Tanks/index.html","3224d46d9fed020ec1dd22172359f6d5"],["2021/05/01/MySQL/index.html","71b8b273cc116d141c7b3e73d4f5c3a0"],["2021/05/09/HEXO部署服务器/index.html","d4c56129a2a5c20998a55c68dd612c71"],["2021/06/04/vim/index.html","36673fa87883a8ad5f06e1b6c9f5af8b"],["2021/07/13/oh-my-zsh/index.html","ac5125668dc2d9ab5e8267aa86d8ddff"],["2021/07/14/HTML/index.html","e528379bfb9f624bdfc7a676a454a154"],["2021/07/19/Maven/index.html","a432419d71ef25bc4a68cd745982e3e6"],["2021/07/20/随机数（C++)/index.html","c2012e05462da6324c6675eba3eb7f45"],["2021/07/22/data_struct_01/index.html","8c1f90d05f97bd04d6b2b5f208679917"],["2021/07/22/滑动窗口/index.html","ba42394ef1c4232ae5c904b89ccbcec2"],["2021/07/26/Tree/index.html","ba6fb8dd993bcddd845d26e8af539d61"],["2021/08/02/正则表达式/index.html","9f4b56d73b2afa58dff09d9e83b6b444"],["2021/08/14/CSS/index.html","e5a6fb5fc7ef639212adb8be70dc8512"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","1fe378c3cce491fc8699e6b820a30098"],["2021/08/19/Windows Terminal 美化/index.html","4ead94a3a64bd207dfa8ded52b57dc2e"],["2021/08/23/EROOR/index.html","d8b886143f307bef52174edee4e721a5"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","1655cf0840858f27fddb294cfbac5933"],["2021/09/07/编译原理/index.html","d39058b21da901248ac8f3eb8246b547"],["2021/09/27/网络是怎样连接的/index.html","495f6eacef9467d607000fa9d448a77f"],["2021/09/27/通信基础/index.html","6a9564c9695395df2c634e87143435fa"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","8dc0167372862953c21ea3ba4c0dd070"],["2021/10/22/vlan配置/index.html","cc7fa04d64126a84c5e04d76c5cc0072"],["2021/10/31/实验三—子网划分与静态路由/index.html","8cbd082b1e0ad414b10fca28f4e9a1fc"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","cd1580a8b61d8ffc6e8845d2b5017b0d"],["2021/11/17/硬链接与软链接/index.html","5b454233ca9b110eb7f1c7e981153377"],["2021/12/01/SQL20题/index.html","fdc641154607ef4feaacda270c1f97f3"],["2021/12/08/实验五：Wireshark抓包/index.html","684f07786a8592765b802a990e13ee2f"],["2021/12/15/CentOS7搭建FTP服务器/index.html","3e5e961f53817a83c69f799385bceb5b"],["2021/12/19/CentOS7 安装相关组件/index.html","357329a0474f930ba3f5a656bc464891"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","5524f58218328750f8eb308381c92971"],["2021/12/27/Vue/index.html","306a2b9b23eaf3dc360803eea3f336b5"],["2022/01/08/ArchLinux系统安装/index.html","14733decb0b9f5a0791acdd52c29f67e"],["2022/01/10/ArchLinux软件安装/index.html","730a58314162094e602bcb6bdfe6be3d"],["2022/01/11/ArchLinux开发环境配置/index.html","77bc7058f534f3940cb4cabd12643166"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","d95c6164b08c6f56c173545b0169edaf"],["2022/01/22/DWM/index.html","249db2596902fd786acbd77f2f833ad7"],["2022/01/26/MySQL性能优化/index.html","a3a17bee25424647e9db97959401091b"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","22cde8f3d75fd5996412281a82b62dd3"],["2022/02/27/ArchLinux安装wine/index.html","b7e5d983e1f28c4166bfbf2ac48c3e8c"],["2022/03/01/ArchLinux安装VMware/index.html","b5e15b0474739df2fb1179e5f08f09ae"],["2022/03/01/ranger/index.html","9ca2dee3005b46e121827ab5eca3c0e6"],["2022/03/02/ArchLinux PPPoE拨号/index.html","880f12060c6fed6603066a0321c57137"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","a784a7a5f87d1bbf1c61dc1025494141"],["2022/03/16/Linux文件和目录管理/index.html","de258ca57c5ef8a99f73428b00b3108d"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","ed653747a5993e004222d316a426beaa"],["2022/03/20/Linux用户和权限管理习题/index.html","2b58314e3207dd0545cff943b6085ae4"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","34f9b157d724d532f86acc13a1df37aa"],["2022/04/02/ArchLinux安装MySQL8/index.html","c9dda26d6e564677cf9cdaf8c25bbb39"],["about/index.html","31399facf1d20531444fda025482ccb1"],["archives/1970/01/index.html","1662bb104b9ac82d2b86e699603de7a0"],["archives/1970/index.html","2360bdd9f5bb2b3d30acc836ed08f113"],["archives/2021/02/index.html","1ca41acb94b8597b3990f280d580a203"],["archives/2021/03/index.html","1fc923dbcb6abf83e74709abada91d53"],["archives/2021/05/index.html","abc22a8f848a1ed8e6b46e3a5d364333"],["archives/2021/06/index.html","3d6dae2da7cabf9ea47d1e693a681bcd"],["archives/2021/07/index.html","dc8b798b8420440ea67d5a484d221502"],["archives/2021/08/index.html","e301db35dd68268a525f562215322b6c"],["archives/2021/09/index.html","400894bd4f6d15be58460d379331d504"],["archives/2021/10/index.html","75f30d94306f2892daab1ec9dbf50af2"],["archives/2021/11/index.html","f01d32138c22c9d65e4e1f9331c8389e"],["archives/2021/12/index.html","2a332a2d71bef4afb341c4612609ba44"],["archives/2021/index.html","adf4a4ee8e27236d7f69234f8bd86bd8"],["archives/2021/page/2/index.html","b5993393606b76094a7e91aab09c49ab"],["archives/2021/page/3/index.html","fb5caf20d506b022ed9da1f3b9adeb0b"],["archives/2021/page/4/index.html","6e518f8ae0da7e656cedc27be17210e8"],["archives/2021/page/5/index.html","3f6ff73e900c23453590df8c0fd608d8"],["archives/2022/01/index.html","c1070d7773d70cd3ee87d735f9dea3d5"],["archives/2022/02/index.html","71c5ed200ec597d5e9e6ffd5237878e4"],["archives/2022/03/index.html","7c13145f51037a5fb8bf380765f40afe"],["archives/2022/04/index.html","3c675aa6b11256f6ee369cc601d5322d"],["archives/2022/index.html","31d77de34b8534e464a2aee0f42cb90e"],["archives/2022/page/2/index.html","45b9e1384ae92c25f192002294b538ac"],["archives/index.html","96270e929e2912529028def001ef94ac"],["archives/page/2/index.html","2d4bc0a531e55997186f31746f087b3a"],["archives/page/3/index.html","64be91509f4fd5c88cd563392557130d"],["archives/page/4/index.html","ae49c2964bdf5bbc095361a27a97ac8a"],["archives/page/5/index.html","45d09595912c8649ebd316545bb21a50"],["archives/page/6/index.html","8461051fc4555d6784f6cb5eea433b1d"],["archives/page/7/index.html","1ee593f0223e5b1527f02bd67a41f2be"],["categories/C/C/index.html","623c088e745d34945d1c7612ac35a9da"],["categories/C/index.html","5a26a1d03d33ec6f6c3649c6be76bdcb"],["categories/Linux/index.html","b362fe2ee217761d2df7f786649a00c2"],["categories/Oracle11g实验/index.html","b36bd2068ffb183195f8cacd7f7463cb"],["categories/Windows/index.html","f9e0a1bea9de790cfe2135c8217875ae"],["categories/index.html","88235987f70635974403636f1dfe87a6"],["categories/javaSE/index.html","89237d0d68d8b80fb7d4a0be08ef8d45"],["categories/tools/index.html","aa16a45d9f7b830b450d2ab7d336719a"],["categories/wxy/index.html","1adcc5d7075fc8368a054d5e343e4ddb"],["categories/个人/index.html","a08f3fc34ef502b04751b19eaaa00fb1"],["categories/前端/index.html","c8274c8592f02cebb57686a4f54bff03"],["categories/工具/index.html","fe8590b263de87f6244b9ddf731e6d4e"],["categories/数据结构/index.html","c8ff2f10b2222bde6bc65aafcc219341"],["categories/笔记/index.html","657d3056de78b06fc51865bce6274a23"],["categories/笔记/page/2/index.html","858ed556573663cd71881940f25eea11"],["categories/笔记/page/3/index.html","90c5ff1235996542dd007640c91c7f69"],["categories/算法/index.html","4ec25d748c166ca6e65f4476654063d7"],["categories/美化/index.html","f3bf6772a119bacb55fa040028b7c258"],["categories/计算机网络/index.html","1b55e58ee91ec7b7aa059ea91d6524c4"],["categories/计网/index.html","5c4ddaca2e328fb2f1a8077ef2790468"],["categories/语法/index.html","17418982550c5c936b961c5deaad91d2"],["categories/软件/index.html","4ee78b05be717528649b5050c3d23d5e"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","1a7d4b54aabadb1ed582508704d6cb4a"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","3884bd079bec20db6231744a5c29ad37"],["page/2/index.html","14895ba9cb96cec9b04bef8531879d97"],["tags/Burp-Suite/index.html","09cdd5f2dd7d5fbf82c105fe3775262e"],["tags/C-数据结构/index.html","a193abd54df2c933cf60e14552688eaa"],["tags/C/index.html","c262662d9edb9db25aee657f412d472d"],["tags/CSS/index.html","4d40276fd60760da2c76e71f86e0ce08"],["tags/Git/index.html","764669c993ed7dc60eae3d1d37a23d1d"],["tags/HTML/index.html","2c25594f24e388559fc736498ebfdd82"],["tags/LeetCode/index.html","fe68f2d049583b2d4b817a8658e2f1b9"],["tags/Linux/index.html","0ee49fafceebb9d6c6418af5f9473ca4"],["tags/Linux/page/2/index.html","a4498bab16a528944c88657dd749c541"],["tags/Maven/index.html","9c96c633ceb044f0e5a1d3ade32e4372"],["tags/MySQL/index.html","2cb4b2b69efc4a1850bfb7572d500644"],["tags/Oracle/index.html","84a7a309378d0166d0008c43e041ca6f"],["tags/Vue/index.html","64f888093b0802062234444fcff3a4c0"],["tags/Windows/index.html","95f48e55229862a1c9a499f0ac90c53c"],["tags/Wireshark/index.html","855828b27a501d61dd98847356b1a2d2"],["tags/index.html","9c82e585328641394565668ecdf23e17"],["tags/java/index.html","1b9afb6a82b2260a281f49be1a88823d"],["tags/route/index.html","16563fa643dd21f9bd4e11275b9054bf"],["tags/tree-java/index.html","30b98af17c4c2a68546da5184ff78afd"],["tags/vim/index.html","fe75e23651625d3af95fe5ebb228f6cc"],["tags/vlan/index.html","e2437792cdd76fdb8c722f608ffecdc8"],["tags/wxy/index.html","581c28e9aa81311faf7d94cf0648aac6"],["tags/个人/index.html","7768d29aa3968bec45ae5980b39fba02"],["tags/书籍/index.html","92e63c28ad68f5988ab668e13d31f9e9"],["tags/博客/index.html","a312656cf23317b1426c0f3b158cc224"],["tags/壁纸/index.html","0436d73c5ff5b04a0960596caa6aafc4"],["tags/底层/index.html","72d52e8b0500049603fc9b16a961d3c9"],["tags/数据结构/index.html","77eade58f23620e5b27173feb253caf8"],["tags/文件/index.html","61e3d18c0ebab1eb0f56f26149baee7b"],["tags/服务器/index.html","50697173a967950f711fbac41bfbc6cc"],["tags/汇编/index.html","7e6bb8a0d570f6c3198bd42176d6dd7d"],["tags/算法/index.html","4ad52dd0e79a94ef633e11c579cb0d69"],["tags/记录/index.html","79357e2d34ae1564b8d6d29aae10f5ce"],["tags/软件/index.html","7ffd0a52a547e5261af9c8aea8fbaf5e"],["tags/通信/index.html","92c7b447212d262fcb430aeff189bcec"],["tags/链表/index.html","7b7b32fb4ddc9cd85e0c7b4a55f8701b"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







