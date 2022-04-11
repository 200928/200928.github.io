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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","5601401028c2d79aedd251f7c2f77df1"],["1970/01/01/nvim/index.html","d24a4bd74d6d138ddbb98c0e53b49332"],["2021/02/18/Git学习（个人记录）/index.html","867d61b49af6909bc61326256a8e2b6d"],["2021/02/18/Hexo博客搭建记录/index.html","486175bac5e4635b84317688642b117b"],["2021/02/18/IDE配置/index.html","2ccdc5834256bb826e747b6ed4623b30"],["2021/02/18/初识汇编/index.html","0b3f633699512e26273dbe12726f9c19"],["2021/02/18/链表与指针/index.html","13bfee38bb9c9dcee89b91814a1d4d6c"],["2021/02/22/Topic LinkedList/index.html","5ef718c181bd1b568dcabd8e8b018850"],["2021/02/25/一些设置/index.html","a2c18583de65c78c09571aa76c911b72"],["2021/02/26/WXY/index.html","8a235b6adf4284c233c28959f90d38f3"],["2021/02/28/大二下课程推荐-计科/index.html","a24e9709dfc75afddbc4684cdc64406c"],["2021/03/04/Linux-notes/index.html","6373853b198ed9192a22b10d3cfb1d55"],["2021/03/08/data struct one/index.html","7e035e926280c098f239d13ab15ab7cb"],["2021/03/17/data struct two/index.html","43b9f835e72f79fed83ae5c0b32433d7"],["2021/03/22/STL/index.html","658b7e7c9fc6ed0c8bf4ae4802d0e3fd"],["2021/03/27/Battle-of-Tanks/index.html","2406a707f6735271429fc9a0dc60cc03"],["2021/05/01/MySQL/index.html","97c4d3fddaed07b554bf8b7123978241"],["2021/05/09/HEXO部署服务器/index.html","699734c43a83f22d1636e63a5225023c"],["2021/06/04/vim/index.html","1e32402361b13137d57455bb6834a7f3"],["2021/07/13/oh-my-zsh/index.html","86c3c52ca0e66e1d3ccc71b4dbbb7f1a"],["2021/07/14/HTML/index.html","d659d2191c09311cec54fd5ff55aebbf"],["2021/07/19/Maven/index.html","6e6d659100be8e027b6dee6063d082a9"],["2021/07/20/随机数（C++)/index.html","22c86f3c00fe44841cdcc1c535c190b0"],["2021/07/22/data_struct_01/index.html","ddc8552a3588bfcb7aac98ddfebf43cc"],["2021/07/22/滑动窗口/index.html","e2ad1d417a084a0993560cbbd074cf11"],["2021/07/26/Tree/index.html","e24f457ca80cdd1e1b5b4172327983ac"],["2021/08/02/正则表达式/index.html","06731f5094ced9827f310a4e58e259bb"],["2021/08/14/CSS/index.html","e84969c59127075882075899d7f9a3fe"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","8097f4dadd9de68ca82e2b691a2375ef"],["2021/08/19/Windows Terminal 美化/index.html","55d1cdc318adeba30b433f6b1547880b"],["2021/08/23/EROOR/index.html","565a26ba62ab24bb632874676add6c53"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","9d7bc4734a1e63f8808f90438670e687"],["2021/09/07/编译原理/index.html","2b83ee5457ce7c46b8acab565778f4ee"],["2021/09/27/网络是怎样连接的/index.html","9119d2eef22d3f9bfd92ca77c1341f4f"],["2021/09/27/通信基础/index.html","26812d939590e427419b907d146db887"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","94c2bb7989b2f3d56eb697e526e992e9"],["2021/10/22/vlan配置/index.html","59d22d486cb84cb0a5f49c8288f65cbf"],["2021/10/31/实验三—子网划分与静态路由/index.html","57ed51da003f3861fe20e3ca746c7da5"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","035cbfe6e39415353c024f331eb09a92"],["2021/11/17/硬链接与软链接/index.html","e388bff060b52db96f5aaaaaf72bdcbd"],["2021/12/01/SQL20题/index.html","e05e418564bc4ef3530d14e4eadff80b"],["2021/12/08/实验五：Wireshark抓包/index.html","5540c098c3f733002a81f8e38663e2a6"],["2021/12/15/CentOS7搭建FTP服务器/index.html","aa8788c361a501b636758d09245d8dd9"],["2021/12/19/CentOS7 安装相关组件/index.html","e69b18f104d6470662a3e6de400e37f2"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","4481fd085a4b539a6eca38d1de7ae275"],["2021/12/27/Vue/index.html","60bf5781f1442ef745780071c80aa4ce"],["2022/01/08/ArchLinux系统安装/index.html","a79cb0559a42b570a3a6e25dd77b4f82"],["2022/01/10/ArchLinux软件安装/index.html","8e95c24f8dda5340d7fdb583e2276529"],["2022/01/11/ArchLinux开发环境配置/index.html","e6b3a6bef510ca86390530139f7c9ffb"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","d664c636e0da048d10655c3616104e00"],["2022/01/22/DWM/index.html","0d837edaf0d341a6c5cfdb3c032a430c"],["2022/01/26/MySQL性能优化/index.html","2e8f435622fcbb5f9a0b0192f019bf6b"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","c6875863711c093515af08445e1af80c"],["2022/02/27/ArchLinux安装wine/index.html","cddbe8dbf1a7440883297d8d652b26ec"],["2022/03/01/ArchLinux安装VMware/index.html","ba84b4d5ea0a3a31ceaa1040cb56a0ac"],["2022/03/01/ranger/index.html","c51a4d753894d9fa2d22af857b1753bc"],["2022/03/02/ArchLinux PPPoE拨号/index.html","b2f5565c2e8b4073d412aa530dbddc61"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","4e9c25a62db9a53c7d3694cabeaec05b"],["2022/03/16/Linux文件和目录管理/index.html","deeb82be0ed89470c2d6616ab15c526d"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","1b53d53d71e15f97f7a114e62c5d49c1"],["2022/03/20/Linux用户和权限管理习题/index.html","7e7a99fe51aedb2428f77f4c1b998d70"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","3376b13deb4ddaa28e99988bac54bde7"],["2022/04/02/ArchLinux安装MySQL8/index.html","77bf907d660e52088c9c7525004ced25"],["2022/04/13/Linux磁盘和文件系统/index.html","91433ee478a3871b181a586e10143616"],["about/index.html","6ab796a8ab49c2d98503cea28ebe8122"],["archives/1970/01/index.html","1f198c3a87da22ddf3a0d0ea83469a8c"],["archives/1970/index.html","9c40db1ff26a9df327a14eb111c11511"],["archives/2021/02/index.html","9fe706af7c4f95613f39e6a41d9a5a7c"],["archives/2021/03/index.html","cdba339e04c1852d232c77ded39a162f"],["archives/2021/05/index.html","57a2d44f06b4dd263605707211e5ae7b"],["archives/2021/06/index.html","320432098cec7d7e8845714fa46bcd0a"],["archives/2021/07/index.html","4c26cb38c24c216859dc997b661a6059"],["archives/2021/08/index.html","0217177b32ddb70413e9cdcb968d902b"],["archives/2021/09/index.html","d3a8e72af01b75448b3d446239a07f18"],["archives/2021/10/index.html","d6589187ecb17f0629675185ad052f3d"],["archives/2021/11/index.html","3025a9eb0d6278e6f1e1afc0e763d328"],["archives/2021/12/index.html","cb881bcfca0532aae69ce81935d10a27"],["archives/2021/index.html","e9fd7ac99a21f9266e10f8707a5ce750"],["archives/2021/page/2/index.html","515f17e191a69cf277540b55dfa56d9e"],["archives/2021/page/3/index.html","4ce9ceb3a8a3a336b2e80a8acc3090cb"],["archives/2021/page/4/index.html","7ba0c2b91076745d6cfbebcb95e73e6f"],["archives/2021/page/5/index.html","0bbdc91eceaa6c188bd73c77a36ea460"],["archives/2022/01/index.html","94b97a50a5689fc3a46447049ea2ec41"],["archives/2022/02/index.html","3955a9964342265c5ab9688d4ed46571"],["archives/2022/03/index.html","13d05f26ebfd3aec3c8130a5a93e07c4"],["archives/2022/04/index.html","dc5ba13cc1aa033f1bf86d1ffd3a652a"],["archives/2022/index.html","2618aabaa51405f222dba65038de8391"],["archives/2022/page/2/index.html","8b210d4f9b1e804371dbd11eed6f376b"],["archives/index.html","c3074d0b71b770b6ab45e7c6bfabf856"],["archives/page/2/index.html","915cfdb238e7aed6233e15721107d83c"],["archives/page/3/index.html","b9a60c39862d1e4f635c408fa76d739d"],["archives/page/4/index.html","4a5071a42e07055fe3fbefc3321f43b4"],["archives/page/5/index.html","a8219b6a9985bff452ac16cf860d0f8f"],["archives/page/6/index.html","b63ed1154d258bb1cb0e60f16c1e5e63"],["archives/page/7/index.html","100bbc6eb9e9c10da74b99cc15888a19"],["categories/C/C/index.html","879a56b7227cbe0564ce17df4da8518e"],["categories/C/index.html","96bee3719024e74fabf0269663f322d9"],["categories/Linux/index.html","2b5dace44af668ea520692daba09e73a"],["categories/Oracle11g实验/index.html","dd6d3129883cfcf9c3ec9fd8517047be"],["categories/Windows/index.html","07a5f141babc74385c6c028aeaee8fed"],["categories/index.html","ddc2a7cd918f09230f26f3f5c715b387"],["categories/javaSE/index.html","31033ab1446c9a2e6934c12f5d0e76cb"],["categories/tools/index.html","e251b0fd0b21f5fe406d5e4e3aa10dcd"],["categories/wxy/index.html","e5feb17de7e8d7f719cbde721658d07e"],["categories/个人/index.html","4b004f6db736f86844a4a4caea92e21b"],["categories/前端/index.html","3982fa308e742f8d902fd8315bd464af"],["categories/工具/index.html","60f8409544b6cdd95104cef17533415a"],["categories/数据结构/index.html","41f1e7d21e93dc32cbf336c81e59233c"],["categories/笔记/index.html","6ee2ac8bb30b3a3facd78f029f11965e"],["categories/笔记/page/2/index.html","c2a17db423fd406f1d02c9b9ef1eb901"],["categories/笔记/page/3/index.html","4fa02d5fafd19684e84562307795bb74"],["categories/算法/index.html","f87a4b672a068b3ff4434cd191e94540"],["categories/美化/index.html","2ec718ea52838c05df51c6c1b1631cba"],["categories/计算机网络/index.html","285d9aae2c98c979f7e3bc82bae464aa"],["categories/计网/index.html","2de3c3c3ad401b7b04a7d328e1bb486f"],["categories/语法/index.html","d2b8c53e0e9a7c3b61335461e043450d"],["categories/软件/index.html","e9df03cc869b9ea22b9f085003299acc"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","6b37bc0a105dadf707b3dca90cc60c1c"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","9aefaffacdb3bee5ff3713616a1470fe"],["page/2/index.html","01d3a90ddc8ac9433a45cf61f3f52dc8"],["tags/Burp-Suite/index.html","83cdc187dd9145fa6769b9c7d652f3df"],["tags/C-数据结构/index.html","a73c66fe172cac96fad0da6b9e551b7e"],["tags/C/index.html","ebf710867efbbd9d4d4fd5ee693d2af9"],["tags/CSS/index.html","feae59595fa7aa105dcabcef22d91837"],["tags/Git/index.html","f4c4bcda4148331372d478239f656986"],["tags/HTML/index.html","3476eb848ac70aa4ef7c4ee669ebdd1a"],["tags/LeetCode/index.html","2cec03c99bff60b15c4d5b05d9e61c9e"],["tags/Linux/index.html","bf6541b85808cf5d39a9d23d1583cf38"],["tags/Linux/page/2/index.html","517c490a518f5308b17fcf0c5ab83072"],["tags/Maven/index.html","00f20c0e94b8a483c360d6e32df16fdc"],["tags/MySQL/index.html","c96a4338ece3b2c255baef7de4209699"],["tags/Oracle/index.html","72815e94f28e4fe68f7b835682f73c12"],["tags/Vue/index.html","95ffceb3bf51155ef18fa87ab54e307e"],["tags/Windows/index.html","13116a8c218d7026c0e15fd5ac9f583b"],["tags/Wireshark/index.html","b1ba24e9293b7c694b8bbbbc63b5cd33"],["tags/index.html","bc24b5219ae028666630feba477c1a02"],["tags/java/index.html","eb4138b5909beb0bf89047aed1a0d000"],["tags/route/index.html","7374cfd8407c89212f1453cf9d79aaab"],["tags/tree-java/index.html","d0d173cf1fd90f363fd87955fd7aac53"],["tags/vim/index.html","34670bb9c33a859e005d6e3f0eff06f1"],["tags/vlan/index.html","519aea850df3622a87ba8175c6bd5028"],["tags/wxy/index.html","c653b6247d31c163d4d634068e08de1b"],["tags/个人/index.html","933fbf01bf4a68283911b2540de6a6e3"],["tags/书籍/index.html","2f7904f8619569ecb88a4107de97abf2"],["tags/博客/index.html","785c351a92ceafd3a5b3aafa29002f59"],["tags/壁纸/index.html","25f3b4f3a9c8082930c9eeca6542a2a1"],["tags/底层/index.html","f71310d0d18d4fb1838de0284de35589"],["tags/数据结构/index.html","23e1457c2e8ff86656f3a2fd0ea667d4"],["tags/文件/index.html","b3ea44e311d24ce4bd62cef50121b3c1"],["tags/服务器/index.html","d56b6de6fe5a36a3f9f3a0f46bf6642a"],["tags/汇编/index.html","43b0ac8a9d4fbdc994f946eaa73c309c"],["tags/算法/index.html","7b8e670e54f0d10ddbdec7eac9c372c2"],["tags/记录/index.html","92d2df0f15458bb01094b0c9626fa19a"],["tags/软件/index.html","8edead2e7fa76dae2abe3faafa43c992"],["tags/通信/index.html","4ccf81cf849691a4c292487de3b5b3be"],["tags/链表/index.html","6c78637b8a93c953230a8afbbc810cc5"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







