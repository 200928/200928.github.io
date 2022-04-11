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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","05a1f4fe5b10640460becdbeb1f4e533"],["1970/01/01/nvim/index.html","ced82c04daa58aeb406fafbd89fe3424"],["2021/02/18/Git学习（个人记录）/index.html","1a262098ce2683b2a799fef8da3eeef7"],["2021/02/18/Hexo博客搭建记录/index.html","8767348b3b34058b61d4dcb303f72347"],["2021/02/18/IDE配置/index.html","2a8610c589e62af6abab6a0a93de03f4"],["2021/02/18/初识汇编/index.html","da1906c9779683c4cbaf3f4924ee885b"],["2021/02/18/链表与指针/index.html","a9ea8cad783c9f2488a43d002dabf14c"],["2021/02/22/Topic LinkedList/index.html","439c5d766afc085e4e0f6bcafdfcecfd"],["2021/02/25/一些设置/index.html","2c9e035395e039e5422eef0a0f5ddee4"],["2021/02/26/WXY/index.html","80b60f6774a2174f778b0d8f704e74e4"],["2021/02/28/大二下课程推荐-计科/index.html","8c67848c2bba31c761761dadbc3c056e"],["2021/03/04/Linux-notes/index.html","0e2dd5647641d2a5e81e16aa960b6f5f"],["2021/03/08/data struct one/index.html","fb08ae8f408f43514cca78305080ec77"],["2021/03/17/data struct two/index.html","665d88abbb74b9660fd9b762bba4d5ad"],["2021/03/22/STL/index.html","1981604bda6daf33bd5e614ef1c80015"],["2021/03/27/Battle-of-Tanks/index.html","9e8d729098daad27154abdc1aefa5b27"],["2021/05/01/MySQL/index.html","44c009cec17a4563de08969636b27b8a"],["2021/05/09/HEXO部署服务器/index.html","3e5d4577d4c4dc9f7ba4e0a51ab34ed5"],["2021/06/04/vim/index.html","cef43ded5259a723a29896a2caf3e956"],["2021/07/13/oh-my-zsh/index.html","bbe9f82836d28bbb0957dbca902f0279"],["2021/07/14/HTML/index.html","8fe43e71584d22fc6cb99c8e3555bbd6"],["2021/07/19/Maven/index.html","ec093e6094845b8596cce862d2823772"],["2021/07/20/随机数（C++)/index.html","6fe1727e55f91403d76481d76d298c74"],["2021/07/22/data_struct_01/index.html","231868f3ad802f31a29a65fcbf963767"],["2021/07/22/滑动窗口/index.html","329b02f4aae549f4e850705a37a41214"],["2021/07/26/Tree/index.html","06cb0f81a4559f44f01b5c81aa4bbd0a"],["2021/08/02/正则表达式/index.html","71272a574b86237d60a5b8a3211b3a16"],["2021/08/14/CSS/index.html","ed83fbeec7a8c750bbf2801957eaf906"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","e83efd1313f3b6b9bced91afa16a7db1"],["2021/08/19/Windows Terminal 美化/index.html","db69483930546743c536a1640e2edd5e"],["2021/08/23/EROOR/index.html","0116cad12ba2147ecaef8cae7df2d89f"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","9f5c722bdad8eebc792d66584bf80bc1"],["2021/09/07/编译原理/index.html","47d20113cabf955a912f2c33ec498537"],["2021/09/27/网络是怎样连接的/index.html","22a27c2c04d7136cb6335e5e53f561da"],["2021/09/27/通信基础/index.html","93bb8ee690292b0a69b280f370aef483"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","dd698f0fcad899f48893d41913738df1"],["2021/10/22/vlan配置/index.html","f14fe1f7335d661b508117fe21965b44"],["2021/10/31/实验三—子网划分与静态路由/index.html","843ecd49a45cf52065f8150e8f01fdd4"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","0926caa4b9b002d8b0d6150b00dd269b"],["2021/11/17/硬链接与软链接/index.html","84aac9dedf564b6285f425968c1f783d"],["2021/12/01/SQL20题/index.html","22074ac457684d60033010f3786abec5"],["2021/12/08/实验五：Wireshark抓包/index.html","7d1087945786ff29adb9c8033121e1ad"],["2021/12/15/CentOS7搭建FTP服务器/index.html","6c0cb4cdee274867e16eeff353a14493"],["2021/12/19/CentOS7 安装相关组件/index.html","30adc69866dd4560bf7b365736c0f7d8"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","d4e5f74290749be5e906bf1d94c90efb"],["2021/12/27/Vue/index.html","a37816a7131bdfd9efee25732587eb95"],["2022/01/08/ArchLinux系统安装/index.html","9228315f28c85d54f39a076f31f1fdcc"],["2022/01/10/ArchLinux软件安装/index.html","15262708267cf91ae8327cf0e53ccf11"],["2022/01/11/ArchLinux开发环境配置/index.html","fa7895b161b4e4324b4c47667ba434ea"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","f6a841d3bce34a027e2954dec9288055"],["2022/01/22/DWM/index.html","24b083b790f380c9c65321dd545240f3"],["2022/01/26/MySQL性能优化/index.html","02ff8f8eb9038e4eddbb2f8552b0caae"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","ff33324770722fb7c9d7077ac324babb"],["2022/02/27/ArchLinux安装wine/index.html","bbf9af73b4b46466fd9bf5722ff55173"],["2022/03/01/ArchLinux安装VMware/index.html","4b2057e7ee9d2cc46de827ef6b9ec9be"],["2022/03/01/ranger/index.html","9ba45600505703b6a15f2a42988787e3"],["2022/03/02/ArchLinux PPPoE拨号/index.html","7911a6c6c6d1abf4666de5fa5dc9e41b"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","bad60957032d8e7c7a2cfc9dc7581e0b"],["2022/03/16/Linux文件和目录管理/index.html","fc1d76e984d3aca4ffc496b1e5071890"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","dc57ee4fb5b220d1f984f085d38053c4"],["2022/03/20/Linux用户和权限管理习题/index.html","87f3d394a4d054cbef8df5ef8d0768f6"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","ef4797d2c9f4c585a800603cedc38cf8"],["2022/04/02/ArchLinux安装MySQL8/index.html","1c40e1aec564012de9b9409a0af55ca7"],["about/index.html","381697eba5a42c5acb0b90fd6c082791"],["archives/1970/01/index.html","e8942132c6beddf2f017d61f9d5ad463"],["archives/1970/index.html","c8907b12d144a7ea185096a2cb4f2793"],["archives/2021/02/index.html","2dee6601766334a1c3bd35d9a33e450d"],["archives/2021/03/index.html","658135c0062d56edadb8f084fdf7ddd9"],["archives/2021/05/index.html","09cdb996a4bb44c3675ba409551ba73a"],["archives/2021/06/index.html","73c261431e6b9a77f910edb879c37622"],["archives/2021/07/index.html","d26da5e48304bc9ec71389db3545b59f"],["archives/2021/08/index.html","0c22fec0df9e1ed3d31cb424fc8655e6"],["archives/2021/09/index.html","1bcfa26b2f871046c5aaa79a91ae8797"],["archives/2021/10/index.html","bfcff03cbd4518a6dd8489d186bcc1b6"],["archives/2021/11/index.html","945d139eaa299d62f1729c09d6bd6843"],["archives/2021/12/index.html","1a62159480f84d667f69ca202764f4ba"],["archives/2021/index.html","61029f8b91d57a0392603e8947cf450c"],["archives/2021/page/2/index.html","3830f4360b1661d167f5927bba4c3dbb"],["archives/2021/page/3/index.html","fe77b6911194576890324234dfdca60b"],["archives/2021/page/4/index.html","5cd802bff8433ca6a71d610859f6982b"],["archives/2021/page/5/index.html","d4c83ddd554afa1f8e4d97208918fed8"],["archives/2022/01/index.html","e08b5bbc9f88277cdeee5569538bba82"],["archives/2022/02/index.html","aad658765ad76f5117a2eaa455ff6311"],["archives/2022/03/index.html","f2dbe7c4e0b8cb62f8a8c31c287ad471"],["archives/2022/04/index.html","061edc05f938c090e9633782e7c29e15"],["archives/2022/index.html","db399a27b89dcc6850d0256d05a8bf65"],["archives/2022/page/2/index.html","f19641ce8939d9d26eeaf7d06868e212"],["archives/index.html","d2d2b0bf532087f198a3616b52c01e2f"],["archives/page/2/index.html","1ddc3ef32e5702f549fa87fa614a834b"],["archives/page/3/index.html","6093de51db03cd2079b632361a3d6a85"],["archives/page/4/index.html","a54eb0b5b41dee7e97e1417f4dad934c"],["archives/page/5/index.html","11ba9abce26a6ef5cd0df0724efd261a"],["archives/page/6/index.html","4f282ce66e6e707870edaaecf450d1b6"],["archives/page/7/index.html","19f2fd2c52eaa4b10bc3e79dd733fdd5"],["categories/C/C/index.html","4af25123e4ec158117977036ad13cbfd"],["categories/C/index.html","c599ca81253f32266fc5858cf00f9740"],["categories/Linux/index.html","efeba64034271d021eafeb06f629dc19"],["categories/Oracle11g实验/index.html","13de76dc298b56b5e03c651135e555be"],["categories/Windows/index.html","c17ddc8ecbedd007d1ac8a8067819c7b"],["categories/index.html","d15aa088081fc11b973733b7907a4e29"],["categories/javaSE/index.html","e685d8e184d1547a5eaf5d72f76cd4b7"],["categories/tools/index.html","f842e284ccf40005dbdf61ebf95a9738"],["categories/wxy/index.html","dd1044f40f59b61a2687c932be305b6b"],["categories/个人/index.html","659a77c1ef9b90ae24153e056a787ab7"],["categories/前端/index.html","0d149691f098a95924ef2328f8c35c8c"],["categories/工具/index.html","aba68759c8a522eaa10399790e2a55b7"],["categories/数据结构/index.html","e71a43c08aba083c325561e7d7ebbf2a"],["categories/笔记/index.html","570a28523139d2bf2e0c147f2ea15c09"],["categories/笔记/page/2/index.html","3b4ed316eaa4bc8e08ea19b683fcb521"],["categories/笔记/page/3/index.html","0eb529ea8106d5fbcc244c4d74cd8cb2"],["categories/算法/index.html","5bf26127c5702235e90249d1a2a0b81a"],["categories/美化/index.html","ba4452b8fedbb374a6a725c324a1360f"],["categories/计算机网络/index.html","14be7140f40b8dbe5da0a7e6f702daab"],["categories/计网/index.html","bb2baf7ccf88f8ddb9a890785412cad6"],["categories/语法/index.html","c61801499a29d641987e73c8e0a6eb99"],["categories/软件/index.html","3c86847ef18ab95b90a99ffe6c6a9960"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","634a46f4e3e1666aceff69d2ab985a62"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","e33798c88e5637761ce8c1ffc2f8b11a"],["page/2/index.html","8197cb1a7d20668763eb45a2355e0630"],["tags/Burp-Suite/index.html","69c9729ffc9165c78df2b940dacfd1f6"],["tags/C-数据结构/index.html","2aaaf5e7768d3e0d9579a3f63cc33091"],["tags/C/index.html","a70de9250dd1d0b6f4e9b91015fc04b8"],["tags/CSS/index.html","ff32f07881ef57adbfcb793c7bfdf736"],["tags/Git/index.html","c01160623a1c18f21f1de1559af55cc2"],["tags/HTML/index.html","8de08699594e5b0c7bba924d59c3617e"],["tags/LeetCode/index.html","8011f489e6822cab3adf60d69dc9d2be"],["tags/Linux/index.html","0e32d8889e28235b5e4f88a522db65a7"],["tags/Linux/page/2/index.html","2ea1edb7cec385978b00c32cad418517"],["tags/Maven/index.html","f1a159db95c5d7fd3abd3c87e1799fcd"],["tags/MySQL/index.html","116ac0551fb53db65a88c59f7e2d2d88"],["tags/Oracle/index.html","1877f35a86fe9f51319ab58df489d664"],["tags/Vue/index.html","e4e99eea2ba998bf1df00d2ba1a491ef"],["tags/Windows/index.html","497762186cbbf44ebd223cf7f0a2afc3"],["tags/Wireshark/index.html","38b44448ef96045fac66885f58e97a86"],["tags/index.html","964a1ed5802f6040635313144e957e11"],["tags/java/index.html","54fd70390acd24ce9674481be5c21ccb"],["tags/route/index.html","1e14f7c1268471cd6c9587b31904b6fc"],["tags/tree-java/index.html","31321d56b3906e003669f978c161b854"],["tags/vim/index.html","cca686578d3d6cc74279132edf54d2da"],["tags/vlan/index.html","27d6cbab49dcb9dd6b9dabbd20f93423"],["tags/wxy/index.html","b1d79bf2a18ab216f661de767a3ae686"],["tags/个人/index.html","2d4cc7f96b37f7558ac2516279890e07"],["tags/书籍/index.html","e21bc6433350ffc644491b5b8d5e63ca"],["tags/博客/index.html","ab85ea29722490dfd0325d85af04ff1f"],["tags/壁纸/index.html","48d1a0c62a03954565a495d07b4394b1"],["tags/底层/index.html","08a7d603a651a1d899cae35154c5aafb"],["tags/数据结构/index.html","399b94cfff2feb5e23ba458ac99088d2"],["tags/文件/index.html","7143ef4d4fcd26aa391d8cfece4a9afb"],["tags/服务器/index.html","66c1b2bf7337d3f947b683bbb5a3549d"],["tags/汇编/index.html","984a06073b39b4bfdac0af6005cfb898"],["tags/算法/index.html","24c9ddc34b172d67a95951be432c93fd"],["tags/记录/index.html","226d1f6e8b089214a26e90a4dce9aef8"],["tags/软件/index.html","d6322eb9bd1e63b2d4e0f942ba7e0c19"],["tags/通信/index.html","3aab417d01d324cbb3dcc6831fc75cd8"],["tags/链表/index.html","cbb943cb24019da417d3db1ddfd5003f"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







