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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","fd66373e6785cdfb6d06a6e98c2f15c6"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","4957d5091b0229dc196167b29a0354bc"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","2e67c33b38332ee9f39bbeaceaa85aa9"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","3532d652655487b11b8c67f76e9b25ab"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","d43d6d1cd9ba219d0e2b639139375a5d"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","39bb8f737956537a7b88e515ccbad760"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","640c94c8bb86a8b1066adabe045f3311"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","c4c5f4fd4ea7cf98be06cd4708e2395c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","416e6eb63754187c3495d78eb9bce66c"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","2eb13d1a469f8ef9f66704f4064c6afd"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","ab052cc884c5e8ae83e32acb568e1922"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","786527ee98fdc4556351c5dd88fef2bc"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","8976ece4d1c3b021fb52b5955cb26cdf"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","94b02ed23f4cb53f577ba62b0925792b"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","c1b9a917c0c045a2cc22e23d835c9a7d"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","6da720056d06dbb2e40b5efac3beaaf9"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","d36c42d942ae777bf8abb6b1dcd27f00"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","b690ce3f1f91b42ee7f073aff4bf9cc4"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","c862b638a1537582cd79e1a723643c1d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","71d86d660b78b4b1422247105430da71"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","474734bbcd798a5fca4eb645e7bbbb1c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","3a34dace8d8fa598fc629d7341490df4"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","128437700b051f7e5415fd5e44ec664d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","a7ca9e8839010d7aaf54cd90f7349c78"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","42fcbe40d4db3986fa39bc9e1fea80ff"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","3a87c1740661d4e86294916eb221ab3b"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","3adc3aa9b3cd81160cf16dcabc827f3f"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","1050ea9e38dba613fba939f3a894d528"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","5a51427c225442c4ecd13944f68175eb"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","b0913e8b7c25d37cb116f6c6a5741ece"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","bd9fade211b7b026607a1d1bbb20a008"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","232d681a8e8bde22079d6ef63c4dc8a5"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","37000b2bb8dfb2f89371ccae3f0d27de"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","1fe5446cc568c78ab1bd395d32e2845c"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","639ba4be6eb93f227af7b42728bce3a6"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","2051f288642fd338c1a13a68985e3a51"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","feffcdcde44ed42e440da293e474fbb8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","872558eeb7346de23e1595dafbfbc286"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","20ff83805586e8472a4c737a2b943156"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","21c43ec78ade8b90434386f2cdf9b069"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","9af62f59e335a17e6e5b0aa574c748d6"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","6e7aaa17639b95b7633fb1fd6514754e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","e89b322aca07a27d8ad064c97cdbfb90"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","4e9f24bd6861c77b96553554bc719185"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","db3717f0f59d098fd2963cb279742865"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","7480ac92ea4b8b0dcf7f9c776e90b429"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","47839446eec98c3782fe3bcdc633e02e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","709ca41653293bbf59f5073a29207130"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","ef19c275a7f83a377c9d21bcf1279b42"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","ef6db7caec72444db6102b8411032dca"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","04db53d2c36ecb17928d2211b37b50f7"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","db258fd774d3ea213b3af0692eb20839"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","32678b2b5dfabb64ad241d8cf82930f9"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","a9ebb109aad6aa957656535fd2e0a3d2"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","4c596d3ff81abdb816ba4798dbee844a"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","776cedca8837e11865821322d3d790d8"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","ac7d23cb916c8ce135cc0b4f7d0ccab2"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","46b0b162aa35e6ec306bd01a692d1c0d"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","63b3ff8a84ae78a67b2f294d2672e512"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","3d8b9dbd54cd80d4071b9f5bf877ff96"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","b49528305aa4a58183da0f997f06ec4d"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","2eab02ddc9c8de37b3448b382cfff0b5"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","bc531726815cd9f18e853fb877074608"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","0e22a95559878054671392b2506f0102"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","deea0c22a80c78a8a9331f9132654ebc"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","ffeef3861d28bfe5d3caefbaeeccc6cf"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","504cd0e9ed7697f4cf5009a938acc3cc"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","053bcc3378ba7368a50997833128783f"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","c1af9305bb9abd4816298c7c73423860"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","0fb8fb98195cc3e275c248d26a8a4f45"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","636d135800a60463d7bb52f2a061c83b"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","b7563c2f1538a35e1197093bd11a24e8"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","a474ee38be4435af2a3777eb662a2668"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","0ff1cfe88cf8745e44fcbc33752a5735"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","a643f8adeb9cf176d488084849858a58"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","fb11f7e764a4bde172bac91de0961fb6"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","d41e5bb877f1703a8e577a39a68d16b3"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","35ff1ffed15c32d94f11c389e83c8f5d"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","5b3ee81dbbb372afa34fd6d3da65eb3f"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","a1905162f944260790294be1940d924b"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","cd79f4229852c5f91549f3b281a35caa"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","d775625635fbc2a696da7e542d7d5921"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","9bd34cb4b14c41dab1f824734f216f7f"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","a8232b2bb5d407be58f8d9d03a8ca6d3"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","0524d262e02a58e63706a7a67f3e63cd"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","4fa0afca96f528eff0842457a9c4ed66"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","29e76c5a58be4f884804cf579f30d1d7"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","a6bc873790b83de7ba236b2d4e86e4ec"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","769ba5f2b508b329d9624739da238cf9"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","7651699e72619da9182527d58aa89c7e"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","b8ce256988d1dd9f6f11e2a7f47c2841"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","a047fa88ac3eba8c22e03cd70b96bafb"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","7a6f9b9c1727c38d36c696e3c8d63b59"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","694c6a58a50bd1152e7d6fc2776b567a"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","4482925c0d7a7d9ff6752145c962b68b"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","97d13f3134d0a9c8b4ac2eebdf230daf"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","d9c54ff184c1a1ef18900ae524931caf"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","d2d1f5fd3ab143dde359f76172b462aa"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","08614a75c3c8fe1ed5c546255a3397fe"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","5c1b823edc2579ab0906105139f99b1f"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","701959a322e4680ff6c4fb9943889746"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","806bac65972b677faddbe3fef7d984a5"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







