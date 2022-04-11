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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","c114b37caeaeb7d6cc333b1b6578e38e"],["1970/01/01/nvim/index.html","ea39fc8f5ed8917f6d99f9fadd20cb0d"],["2021/02/18/Git学习（个人记录）/index.html","44b4c027633ed02d1423e4dcfcc026b8"],["2021/02/18/Hexo博客搭建记录/index.html","af1f22230f9eb7dc99c96441fc0a44b9"],["2021/02/18/IDE配置/index.html","e95bb3edc27e3edd4e02007139a6d283"],["2021/02/18/初识汇编/index.html","3d89d65acfeaece3c9e13656ef4dc3a6"],["2021/02/18/链表与指针/index.html","d0e8faf0d53b042140a23583ac3c4105"],["2021/02/22/Topic LinkedList/index.html","58906ae664be0f67e3ef158b7c4ebd72"],["2021/02/25/一些设置/index.html","64f139e3e3bf84587ce20ffc6d05c61d"],["2021/02/26/WXY/index.html","3b3938fa77783765e4a5cd1c876fe6d7"],["2021/02/28/大二下课程推荐-计科/index.html","ab710f6adadca7b16e32b2b111f1a0b8"],["2021/03/04/Linux-notes/index.html","208ae6f1ed979c5498e6612f4c66b514"],["2021/03/08/data struct one/index.html","53e999990f5085b62f514f6f23503aa6"],["2021/03/17/data struct two/index.html","21b2313722ac5132249dd55648beb352"],["2021/03/22/STL/index.html","b9406c1047d4b9f2280f6fc5a31245f1"],["2021/03/27/Battle-of-Tanks/index.html","5395b14fcd3cf0ad2a9027921302c5a2"],["2021/05/01/MySQL/index.html","e7b04a3369b7d7e4449a7158b3387c5c"],["2021/05/09/HEXO部署服务器/index.html","ca363fe1be07da5de293dbce1de2fec3"],["2021/06/04/vim/index.html","2c73ef2c8304a373b3ffe1d56c1c264f"],["2021/07/13/oh-my-zsh/index.html","d07ab371e111a3c74e0fbc5a68dacda8"],["2021/07/14/HTML/index.html","0748e52c43a2dd32b0fd87f83209693a"],["2021/07/19/Maven/index.html","ccb8d06a1984e755286b450531091461"],["2021/07/20/随机数（C++)/index.html","234dea47bb5e0b3c2ba2ba21c93273e6"],["2021/07/22/data_struct_01/index.html","8e926bb042a8baccaf34920f0b3550e1"],["2021/07/22/滑动窗口/index.html","f6b05eeb658838968cde9aba17cf32fc"],["2021/07/26/Tree/index.html","1a8002d71c9a67ef118f105cb84543e1"],["2021/08/02/正则表达式/index.html","0b81e859fc0e80d5071f8628d29ad28c"],["2021/08/14/CSS/index.html","0bc78ec4ce3a257d8c6ea561561a5cc9"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","f3879eb213908d9fa4ad1d9e554b13f0"],["2021/08/19/Windows Terminal 美化/index.html","7ff63706e50edbbbe0303717cad10847"],["2021/08/23/EROOR/index.html","e4ca8b9b50a7333b78490fe0c7c0c511"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","b620ba68e2a440f8175d4026af891de6"],["2021/09/07/编译原理/index.html","1475e16b23e867542f8d4dd9945cc43b"],["2021/09/27/网络是怎样连接的/index.html","791a68de4dbb2ab3e338452aaddec6f5"],["2021/09/27/通信基础/index.html","9678abb9974a8acdcd4ccad385750a3e"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","7179ea28b0cad18cc4c170a2001ba91d"],["2021/10/22/vlan配置/index.html","cb9f961a1c8b364899fcba7e0523cc52"],["2021/10/31/实验三—子网划分与静态路由/index.html","9c416531b1c333706510206f022e832a"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","4fcc60f7bd6c410a8e66f2b2b4dd0b01"],["2021/11/17/硬链接与软链接/index.html","92f865ec00f1684da39a1c589fe71ec4"],["2021/12/01/SQL20题/index.html","262ced48cc402150527c1937ca8d9bdd"],["2021/12/08/实验五：Wireshark抓包/index.html","6d9f39d37303de7357f86c188324caca"],["2021/12/15/CentOS7搭建FTP服务器/index.html","310359430bde46b554fbccadf5f5cb0d"],["2021/12/19/CentOS7 安装相关组件/index.html","6d38ed04e7f66f58b55bcab35572723e"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","c30d436c295fc64117eeb6f7bd415b58"],["2021/12/27/Vue/index.html","f4303f679f5934b2aec646045a70eac1"],["2022/01/08/ArchLinux系统安装/index.html","77b2f5a2b82d8e157f51127ab0f7e545"],["2022/01/10/ArchLinux软件安装/index.html","c731228901655893d1bf7b6e9f99b530"],["2022/01/11/ArchLinux开发环境配置/index.html","532b7880590047bd5c7a54764209a96b"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","1298041b42035ca37a01411b0c02129d"],["2022/01/22/DWM/index.html","a9f2b307c5df0b29b500fd06ed619bfc"],["2022/01/26/MySQL性能优化/index.html","cc1f1dbd924a9053a5a8ebe4ef4a84e2"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","c1c5ed1c81d0cb11126b92e3d4224bd9"],["2022/02/27/ArchLinux安装wine/index.html","82b6f945063b318faa3c73b28ec30109"],["2022/03/01/ArchLinux安装VMware/index.html","3c449acb40000eede2d6c44fe8dba047"],["2022/03/01/ranger/index.html","2b4f2074af67cce40121e44c5ea8f7fc"],["2022/03/02/ArchLinux PPPoE拨号/index.html","7eb0cfa9713ac5ce33fdf9d43abac191"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","293efb1c425c79196c5ea86e0805fdda"],["2022/03/16/Linux文件和目录管理/index.html","594b2f5df6445f56bbd70c06eb769393"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","ed2616384b9be09074ecc3f8f34f8a4b"],["2022/03/20/Linux用户和权限管理习题/index.html","46e36efca7970849c6262490ef543469"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","dc721e4a635c2279c3504fb8ea178cbb"],["2022/04/02/ArchLinux安装MySQL8/index.html","322e92ef141a513145c249ee1c8cf64b"],["2022/04/13/Linux磁盘和文件系统/index.html","2e8c7eca5a11c2b50bcc9e9bdee4bb14"],["about/index.html","72a5489296fec0b2a5a16abfe24995af"],["archives/1970/01/index.html","73af766ce5d3ec666d4e74f0c65655d7"],["archives/1970/index.html","366bf845688dff170dbd4e92fd5df0e6"],["archives/2021/02/index.html","15d18036ccadd15b08da7010ab0c717e"],["archives/2021/03/index.html","8015abc66df439f5f79969947ddf52a0"],["archives/2021/05/index.html","0f811358aa15f10bce59b8e7adbcf018"],["archives/2021/06/index.html","f43b78aeec83664b76ecf3186cea8d0d"],["archives/2021/07/index.html","5b47e965ea9c35e9bef15284bb97eb7a"],["archives/2021/08/index.html","05de12c6660074b5f2f2c9c7364cf72f"],["archives/2021/09/index.html","6893689b8c66cd8cea43f64fe0c4903a"],["archives/2021/10/index.html","98958a2754fe8803261b20226141dd9b"],["archives/2021/11/index.html","13c07f849a8f0728fbc49afa7d6a0723"],["archives/2021/12/index.html","6dd95c6ad4235e77aeb7c74c7e47d771"],["archives/2021/index.html","5c72caafb3cbec29ed38610dd0c1c556"],["archives/2021/page/2/index.html","f98c2440bdf9a1a42049ca0489ee101e"],["archives/2021/page/3/index.html","2444ab8d8c7066d6c4420fad59821b4f"],["archives/2021/page/4/index.html","6c172aa027be6040d0ad09b62bc480e9"],["archives/2021/page/5/index.html","b13ea2c0daf4542fe72e10774d48f7fe"],["archives/2022/01/index.html","37950c518b8424b71129aaae8be9cad4"],["archives/2022/02/index.html","18f91697cd982df6ff68cd31d4ae71d0"],["archives/2022/03/index.html","1126b50c41bef6ba0a20342b54053e62"],["archives/2022/04/index.html","5e40eb897ad02fcfad376471adbcbc57"],["archives/2022/index.html","88ae6163cb11284408259d879db0782b"],["archives/2022/page/2/index.html","49bc54752fb56d77a5185706053b8f70"],["archives/index.html","126a8a203e8d37ce185d35261cbc466a"],["archives/page/2/index.html","b05de19f406d659581a9785471465108"],["archives/page/3/index.html","efbab9f0fba0ee2d5a47c39c9be59029"],["archives/page/4/index.html","933745c83ebddc27daaf36b748361f75"],["archives/page/5/index.html","3276ce3c988b5f2f78629a4a5feded43"],["archives/page/6/index.html","710844421fcf4334f1d5c804c0998201"],["archives/page/7/index.html","591a572f7d1af0b368fc8a5fc63f9c08"],["categories/C/C/index.html","4b2932f1286e55ace5eebb81ff3a5bb8"],["categories/C/index.html","512ec67fa7a8d585b7959e2eec92a231"],["categories/Linux/index.html","fcc5d700177d4f95c1dee610ef9c8104"],["categories/Oracle11g实验/index.html","be9ad62335533d5e9756ee1402dc7eac"],["categories/Windows/index.html","3bf528f9a7e9d05c81a8cac5ddf0b0d4"],["categories/index.html","c5c4afd0a0f8b08fb83eb72fcdd2cb34"],["categories/javaSE/index.html","87330aae16c567c67f16546b18fc248a"],["categories/tools/index.html","5843804abdf2247b33c59dc6d7ef2458"],["categories/wxy/index.html","6f7c0473bfdeabfd8d376f48ce186439"],["categories/个人/index.html","83c3f3f9fee9917adee7dfaf2a28c25b"],["categories/前端/index.html","115b493c3b8f7d0fc3b584556c07846d"],["categories/工具/index.html","2cd246ce1b82be63395209834c320fd2"],["categories/数据结构/index.html","dd9aff726dab3e3c55a02a14616bf652"],["categories/笔记/index.html","3035f75e184d1ee5aba14221122ce7b7"],["categories/笔记/page/2/index.html","ed657684671a0234846b976822c18814"],["categories/笔记/page/3/index.html","2e47eb4624a2fa5cd39e6227798fed68"],["categories/算法/index.html","6b2e2719c4ff3cc03eb22da4a49ed080"],["categories/美化/index.html","b8db20e392e850c3ad36b9eeeff25da1"],["categories/计算机网络/index.html","5354af27d710161f53023f4c040e9ad0"],["categories/计网/index.html","701e4c0d005abb0abc10d82c82c1206b"],["categories/语法/index.html","f7a08926e32aeba369250c8abc834447"],["categories/软件/index.html","18c3a26bee01088f9c28f67b2cab51ab"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","3a1883b23c54fc41ffb908b7b2e45550"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","3e95a137c49cfcb6efbdfb0864f4530e"],["page/2/index.html","019d6521a29752c1e78a7b48e7adede7"],["tags/Burp-Suite/index.html","1dbd2cb1eb439cc770acc318d6248f4f"],["tags/C-数据结构/index.html","c8b739eaaaa69272ca6d2bbecf76e498"],["tags/C/index.html","3bbc9483b71508cabdb72cc6c5015f7e"],["tags/CSS/index.html","658e08c0f571edbeb293d4289a2e83d8"],["tags/Git/index.html","d0b8f80c54f01fd10270fbdcb9a4705b"],["tags/HTML/index.html","1f110264b6a9a3ce0b59e02df57df929"],["tags/LeetCode/index.html","5998a2100a89951dd01e0c70f9f46487"],["tags/Linux/index.html","2cf187f37aa5aa38781f890e17105431"],["tags/Linux/page/2/index.html","0f8692d95142b6f1d88690bd37dadae5"],["tags/Maven/index.html","cc6b49cfe12cdbf5339c65e499a74e0e"],["tags/MySQL/index.html","3c97eee62c349ced3bf1ed32d9165ad7"],["tags/Oracle/index.html","956a51564d34c3874a00627135627027"],["tags/Vue/index.html","a7b51443b68149b1c5fc20657008e26a"],["tags/Windows/index.html","b29f8518121a52b15f0230d87fa51750"],["tags/Wireshark/index.html","62c08d86df3b8ca6919304855b2a49dd"],["tags/index.html","4cfb202d4a2739b955db53e90a0cf273"],["tags/java/index.html","396c69ea7c4bbe416aff4539a3b2d857"],["tags/route/index.html","93153e937198e70587470c715ed53a17"],["tags/tree-java/index.html","20188d356e090f1811dd53aec9140fb3"],["tags/vim/index.html","646a71be8c7762270fb803c83e2f9843"],["tags/vlan/index.html","98e7cd2c0be853073b36536eef283ebb"],["tags/wxy/index.html","9b367ff180d22334c647ff711339eb18"],["tags/个人/index.html","5c4a63c3f4467facb905a5ee752f2a25"],["tags/书籍/index.html","ffedeeb1126542959d97b74fa1d15de6"],["tags/博客/index.html","4f698d7257aed2f5b23d88b7ea241e59"],["tags/壁纸/index.html","ec2238c40f7ee033c7e4c0b89f4dd84c"],["tags/底层/index.html","909e740b0e7a0a3d0aa70c889880fd38"],["tags/数据结构/index.html","f314ef157f6aa8170364ffeeed4def78"],["tags/文件/index.html","24194b1999b431a55f340669c744a01e"],["tags/服务器/index.html","7ec7f08c4f0a7bf991aa700e864f6430"],["tags/汇编/index.html","5fb953aee8d5e8ef8f99ac1c9526e1a6"],["tags/算法/index.html","8c5ada183c92dc5634aefe37ce2be98e"],["tags/记录/index.html","97073db1db9364565ccebe6e00883b13"],["tags/软件/index.html","2467ec767b4298a67e2d81031e0b631c"],["tags/通信/index.html","ea8e017ac38979d47fc720860d6e48da"],["tags/链表/index.html","2c395729a07e8198df688edd9ea16684"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







