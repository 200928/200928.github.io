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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","5601401028c2d79aedd251f7c2f77df1"],["1970/01/01/nvim/index.html","d24a4bd74d6d138ddbb98c0e53b49332"],["2021/02/18/Git学习（个人记录）/index.html","dc5c4783577a2e1dda8119b2d976b94d"],["2021/02/18/Hexo博客搭建记录/index.html","486175bac5e4635b84317688642b117b"],["2021/02/18/IDE配置/index.html","2ccdc5834256bb826e747b6ed4623b30"],["2021/02/18/初识汇编/index.html","0b3f633699512e26273dbe12726f9c19"],["2021/02/18/链表与指针/index.html","13bfee38bb9c9dcee89b91814a1d4d6c"],["2021/02/22/Topic LinkedList/index.html","ac5882b1e078932a6a96e9e6385014bc"],["2021/02/25/一些设置/index.html","a2c18583de65c78c09571aa76c911b72"],["2021/02/26/WXY/index.html","8a235b6adf4284c233c28959f90d38f3"],["2021/02/28/大二下课程推荐-计科/index.html","a24e9709dfc75afddbc4684cdc64406c"],["2021/03/04/Linux-notes/index.html","6373853b198ed9192a22b10d3cfb1d55"],["2021/03/08/data struct one/index.html","7e035e926280c098f239d13ab15ab7cb"],["2021/03/17/data struct two/index.html","43b9f835e72f79fed83ae5c0b32433d7"],["2021/03/22/STL/index.html","658b7e7c9fc6ed0c8bf4ae4802d0e3fd"],["2021/03/27/Battle-of-Tanks/index.html","2406a707f6735271429fc9a0dc60cc03"],["2021/05/01/MySQL/index.html","97c4d3fddaed07b554bf8b7123978241"],["2021/05/09/HEXO部署服务器/index.html","699734c43a83f22d1636e63a5225023c"],["2021/06/04/vim/index.html","1e32402361b13137d57455bb6834a7f3"],["2021/07/13/oh-my-zsh/index.html","86c3c52ca0e66e1d3ccc71b4dbbb7f1a"],["2021/07/14/HTML/index.html","d659d2191c09311cec54fd5ff55aebbf"],["2021/07/19/Maven/index.html","6e6d659100be8e027b6dee6063d082a9"],["2021/07/20/随机数（C++)/index.html","22c86f3c00fe44841cdcc1c535c190b0"],["2021/07/22/data_struct_01/index.html","ddc8552a3588bfcb7aac98ddfebf43cc"],["2021/07/22/滑动窗口/index.html","e2ad1d417a084a0993560cbbd074cf11"],["2021/07/26/Tree/index.html","e24f457ca80cdd1e1b5b4172327983ac"],["2021/08/02/正则表达式/index.html","06731f5094ced9827f310a4e58e259bb"],["2021/08/14/CSS/index.html","e84969c59127075882075899d7f9a3fe"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","8097f4dadd9de68ca82e2b691a2375ef"],["2021/08/19/Windows Terminal 美化/index.html","55d1cdc318adeba30b433f6b1547880b"],["2021/08/23/EROOR/index.html","565a26ba62ab24bb632874676add6c53"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","9d7bc4734a1e63f8808f90438670e687"],["2021/09/07/编译原理/index.html","2b83ee5457ce7c46b8acab565778f4ee"],["2021/09/27/网络是怎样连接的/index.html","9119d2eef22d3f9bfd92ca77c1341f4f"],["2021/09/27/通信基础/index.html","26812d939590e427419b907d146db887"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","94c2bb7989b2f3d56eb697e526e992e9"],["2021/10/22/vlan配置/index.html","59d22d486cb84cb0a5f49c8288f65cbf"],["2021/10/31/实验三—子网划分与静态路由/index.html","57ed51da003f3861fe20e3ca746c7da5"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","035cbfe6e39415353c024f331eb09a92"],["2021/11/17/硬链接与软链接/index.html","e388bff060b52db96f5aaaaaf72bdcbd"],["2021/12/01/SQL20题/index.html","e05e418564bc4ef3530d14e4eadff80b"],["2021/12/08/实验五：Wireshark抓包/index.html","5540c098c3f733002a81f8e38663e2a6"],["2021/12/15/CentOS7搭建FTP服务器/index.html","aa8788c361a501b636758d09245d8dd9"],["2021/12/19/CentOS7 安装相关组件/index.html","e69b18f104d6470662a3e6de400e37f2"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","4481fd085a4b539a6eca38d1de7ae275"],["2021/12/27/Vue/index.html","60bf5781f1442ef745780071c80aa4ce"],["2022/01/08/ArchLinux系统安装/index.html","074de2bdc015a8e85729cbafc96ff1e2"],["2022/01/10/ArchLinux软件安装/index.html","a91fb2032a9e6a47aa572618d7336a96"],["2022/01/11/ArchLinux开发环境配置/index.html","efbec93546e5f30ad6b341b0e3ae7426"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","626855b351d20348296f2b5f0858e4ba"],["2022/01/22/DWM/index.html","ac86a0338132b5968fdd992b59aaa853"],["2022/01/26/MySQL性能优化/index.html","2e8f435622fcbb5f9a0b0192f019bf6b"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","9589f75bc382f5d2f2b0d797273b4be6"],["2022/02/27/ArchLinux安装wine/index.html","dcaa51923deeb489cab9c6d91b1da2af"],["2022/03/01/ArchLinux安装VMware/index.html","f150e113a8e04ac17ec947b5ab350de4"],["2022/03/01/ranger/index.html","92d10b1cc6419fa049a59ba554fee32b"],["2022/03/02/ArchLinux PPPoE拨号/index.html","f7d4ca36cdd9a0d9eb98aa1ce2844778"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","4e9c25a62db9a53c7d3694cabeaec05b"],["2022/03/16/Linux文件和目录管理/index.html","15470b8fc2fd795a0b1d3573ab13f6d5"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","1b53d53d71e15f97f7a114e62c5d49c1"],["2022/03/20/Linux用户和权限管理习题/index.html","dafbb4b02130cc4be4675f4af129a169"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","94e6a9e68d06bb7a028b3688b7c07a43"],["2022/04/02/ArchLinux安装MySQL8/index.html","77bf907d660e52088c9c7525004ced25"],["2022/04/13/Linux磁盘和文件系统/index.html","8f5211920f6f1826030cb644d8b10aab"],["about/index.html","16ad4f9de095318b7dfa8ac34b2d39af"],["archives/1970/01/index.html","855a3629ca57b4d81e5f7a0a343f01cc"],["archives/1970/index.html","0e87f0e16ef59d86018364a6cf1b8a14"],["archives/2021/02/index.html","fdf96db4f6aad90fa2613ec2387901de"],["archives/2021/03/index.html","62bd4f5607030a204433689aad8f8358"],["archives/2021/05/index.html","9610dad39a96c2e67a90864f360c1847"],["archives/2021/06/index.html","137aaf1d99ad77d064cbc3e74a3d233a"],["archives/2021/07/index.html","bfff3ba44dc0f9e227105563c550795b"],["archives/2021/08/index.html","47be7c92ff98351696fc7eaa37cca4d1"],["archives/2021/09/index.html","72fdbb86001f6393609b205608545803"],["archives/2021/10/index.html","409b09241809b2e967c82bf7181ab2ce"],["archives/2021/11/index.html","97993d1730385aa86bd5fe0b11f73fc7"],["archives/2021/12/index.html","e60ba59f871b00af5fce3d4e0075a7e5"],["archives/2021/index.html","c2e534789aa22c6f2238023b4e8a70ab"],["archives/2021/page/2/index.html","9149c974579f0cb37b21630b97348c5a"],["archives/2021/page/3/index.html","9c66079b6a916a416ae9c5bb70acd0a1"],["archives/2021/page/4/index.html","fcf8d6dd012df19b709d9b283a015885"],["archives/2021/page/5/index.html","8322fa3eba17610a24bf417d0e1e5aab"],["archives/2022/01/index.html","e3285dbda84cea3a99ee06fe4750a44e"],["archives/2022/02/index.html","3883170537636de92ed22932b405d16c"],["archives/2022/03/index.html","af0696e0ae0343c02b831f9b6a696c13"],["archives/2022/04/index.html","fee94ffe976ee4acee1996ed7d869177"],["archives/2022/index.html","be8068e1e50881414ce700ff41043f39"],["archives/2022/page/2/index.html","afdf59b5afd5e4b6d932905784286c07"],["archives/index.html","6c425546603c7900a5cf2797581004b6"],["archives/page/2/index.html","f877c7ba1a22dd141abc4c7f3fbc2341"],["archives/page/3/index.html","d1feb5ba021dc05004bcd48e3659715c"],["archives/page/4/index.html","6c044b0a62cbb7620ab9f6f91a05c350"],["archives/page/5/index.html","4e584e68e75a6cfc691f80edbb65af9d"],["archives/page/6/index.html","6f5e671150a03290bc54a87f24ab511a"],["archives/page/7/index.html","a8c7e272a751d910cc678c7c9edc0239"],["categories/C/C/index.html","ad085634d0c2394ce2ea408173014884"],["categories/C/index.html","cffcca9121e0b4bd006fab944a2aeed2"],["categories/Linux/index.html","d2f6d7f6c677e19738a5e2e9a4d0ad9b"],["categories/Oracle11g实验/index.html","eb43817d1436d169defd153ac41ba9e8"],["categories/Windows/index.html","c67e909c33ccb3cfdea9d03416d1f4d6"],["categories/index.html","a29ea62c1525ed025a6d5bb76190e249"],["categories/javaSE/index.html","6e0c732cae104b8f606acf667cff5443"],["categories/tools/index.html","0146254307afd2bc8c863156d8f0212e"],["categories/wxy/index.html","ba791f534bdd64d46ec86cfe342ed8bb"],["categories/个人/index.html","63cf53184190443b22816e7771216397"],["categories/前端/index.html","8c799a1ae31cc6efa59d30c71361323b"],["categories/工具/index.html","dafbd7296360833e3be563564912bfd4"],["categories/数据结构/index.html","192bf23712c029a823788d46b5e19fd3"],["categories/笔记/index.html","42178af7407ce8a8fd4e4df398224b8f"],["categories/笔记/page/2/index.html","8cfa39e0d9b6ceb454cc2b5751a24bd8"],["categories/笔记/page/3/index.html","8cfa38dc7208f16d0c1796e5fe9691a8"],["categories/算法/index.html","356249bbd6558476fd6070a889fc0f00"],["categories/美化/index.html","75e4073f12b3ffaeeae5fd42e24eb777"],["categories/计算机网络/index.html","1b5779bb2bf79cf058a1e344bed57cf2"],["categories/计网/index.html","23284bfb81fd072ff4d768a744a6c19f"],["categories/语法/index.html","9411efb9d0ea63446408acf6e819620a"],["categories/软件/index.html","0b589bbce79534ee76170d34f205699e"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","de97e9440975dc56f456b01d1d89df2c"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","be3384dbd549819d2b671e4a22b3f753"],["page/2/index.html","cef93e00e6dfcc6f75f255d064346484"],["tags/Burp-Suite/index.html","7fb4584cd16d864c1e05e1b611262835"],["tags/C-数据结构/index.html","5ce7829311e99100c17c072691f98688"],["tags/C/index.html","cc4e74a35bb6bdde034be7415de3cfee"],["tags/CSS/index.html","5eb8c171b0080713842446b350b140f0"],["tags/Git/index.html","47d92263f4a1e55fa91dc1fb72e58257"],["tags/HTML/index.html","8cc3a526168c6096cf2e0b61d57942e2"],["tags/LeetCode/index.html","54e5e80eb025f98836c9d317f0c05736"],["tags/Linux/index.html","ab9021ad1f869d839d881e8fa900aff6"],["tags/Linux/page/2/index.html","7626300f969d6e488c4be04b3f696a79"],["tags/Maven/index.html","92dbec3e0526f4f12b9cb4ef0850de38"],["tags/MySQL/index.html","58253aebc1b6674f1dccb276afc1c68a"],["tags/Oracle/index.html","d64251d44983802edd13b3fbdad827a8"],["tags/Vue/index.html","c88c662c5a1dac89a5ac20e82253024c"],["tags/Windows/index.html","25c20520f8c2ac85d62579f1f401915a"],["tags/Wireshark/index.html","931f1db2d08003560f1fa53a4b63591c"],["tags/index.html","df17c030fe0a3fc5919a9cacf556ef19"],["tags/java/index.html","3762b3c6adbd2e0e63fd68335a03266b"],["tags/route/index.html","77e405745f5b2891abb4623c147895ae"],["tags/tree-java/index.html","7820247e52bfc0d152b43cfcc32afd43"],["tags/vim/index.html","42531ac77a2c692d692dbc04ea1bed58"],["tags/vlan/index.html","b1fb7d24d2580ad932365d132e5ed364"],["tags/wxy/index.html","4513bd59364fdd2ca82ff265cfe6f1e0"],["tags/个人/index.html","72a8191fba34dac17cf17cf009b135d2"],["tags/书籍/index.html","8146e432bb7ec13bc803da32b12a58b3"],["tags/博客/index.html","84680750f5071629d0f98af3cfa43a5d"],["tags/壁纸/index.html","e6f0e78ba8c1d47feec592489bc51abc"],["tags/底层/index.html","58bafa8a3ef853d018531860ea05f5be"],["tags/数据结构/index.html","d2466d213ef38aa0d55aa6d5d946acfb"],["tags/文件/index.html","6ecf60d0a94dedaae1d14a1e9b487b09"],["tags/服务器/index.html","ab1c05d1444bdeff798be6f0fb80baef"],["tags/汇编/index.html","4ddb2f2324daf2289636bdf301dfe272"],["tags/算法/index.html","d1b83ca2cbd82a95473b52026cacc613"],["tags/记录/index.html","7911544e6a97b17f0e4f12ddcf337cff"],["tags/软件/index.html","901a6089ab7899064db0c2e34837f69c"],["tags/通信/index.html","26f1b9f2ec4f787f5a6e30a7e4c5b809"],["tags/链表/index.html","bf2862995f02c20831c6c3939b6f869c"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







