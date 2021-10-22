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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","1b2cf6379031bbaf3e9c57a908618408"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","bf42d9b9b94333a6f06efef044b96bca"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","be9e1afac3aa48762a2ef2bde230734e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","4b409cd7c8681595b11bf52500c9d6df"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","2a05a5ff62d141fca1ed13b826e6a603"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","7fd22eba572e97e74c3167950e072be6"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","8c7f8ed7a615c635cfdac3ba127e0ceb"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","75e7ea92e6bf421b448c7fcbc8ac2082"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","44ae394bdaf980f7baf8db6860fc5d72"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","8df40eadc335f8c091d1c4bc5799e41a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","fbb855c9a4134e2550ffa6542f69b29a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","7e454edf9641644badf68d7e7d8754d0"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","a93cfc446e756d11f26bbf02475538be"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","c1d6fa72069315eae63287b537c3731d"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","3a01f55ea84dea3210bb11d1f072b3bc"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","094a0583a931144ffe1cdbed077c8d68"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","54390d41b85f2dd2b01b39e1c4b0ccd0"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","5693a80c3eef74cd4a9b6c986ccbacc0"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","70d749bdb41f3d8a6a16ac2b4a096c9c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","d24236902863aa7b5672b4c3d1808e82"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","69fc30ca666b789f37fd42cd06e0295e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","71a69bd224eb9032b069c10e121220df"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","e17117ec7d2dbcce7592914799efaa14"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","fd09efd039f031fe68e3c89c67759c78"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","64e8a95ab7a8062850de16b6eefc67a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","185fcb15715ab25aaa895dd2239212d9"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","2d058ac4f2d192d1dce1bee149fdcf17"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","f671c4ce95282e4a3f14d6118ce28557"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","6c151afa8ab157cb3838b234b9c3220a"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","bdb4d9f3af7e69d0516fbc3b174f7259"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","4d77a688759f3905a499bf033b46d700"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","5f6d218917e239a330495dcdbe5ffca3"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","0a12d59c169bda476fefb642112c4375"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","a5712a229147271fd4d19d88de79a4a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","969a1e83edaf1ff385b3679b0ed9022d"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","0dc905bba3badded1afecf73d94b81ae"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","7a91e354e496d5ac2b58aff52c17ff8b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","9db819f23b4bfdcee2b29af9395db9c1"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","9f457918090774bde095f4265840f4d5"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","712eca0cceafc828e4871ac3fe7b8dc8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","60a6811a8c65c3f934e064a636ab9aed"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","6a75a1d76d4c5bdfdad402b41552a110"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","5c7aac04220714391ebd97445a072f06"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","d7047a62e994a2e9b4e5b3832e6f559d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","39c40b6fc526d96b39c6ea01abd863b3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","069e929e0b6941ad191047dc05f9fb7e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","69e6ed141431e8a6bb3e9f3326fc947e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","8073b6388bbb907e20a545f8538a5a44"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","fa6f4fbe66a27a767f5d36a701374cd0"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","6e284df1d2ecbb379cadd0cac7533ce9"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","8a9997ba7f469e487c6485c981fa0dad"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","4e22ad0108900243568b43ce45e8e3b5"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","912ebf3245dd29ad14ef7a42b261928a"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","513b6ba7139c2e08e0868011241532df"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","6c0ef2f35c05e196f5d8a36a02fdcb6d"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","4f316ffb9c1d4d49cb94ab1835b8af4d"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","e0eb8e82ebd6b889ed3a3c590b32a099"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","0b1cbfc6c0149006c22a0edd7742f048"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","51f56c2ab6d13273d4859dfa4496cc57"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","7ea5468a3d441d87f4ab4ff009d8d48e"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","4fd5fc9187eb565a0db50929f430a660"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","8400d97a7a20440e86f1c8527b808036"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","b15f089b8e12a84234ebfccb0fb2c71d"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","59a93ff8f8472f19e99682cdd24c3baf"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","1ecb41554508198467165ea177c82901"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","c5e883ab9bb91c6f2065ec7dba592312"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","6d2371347a98ddb83f9740b56377c654"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","71b0cc85283365359c24918e72ab981e"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","8efa9f80f67e1142d0d98145d7adc436"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","7d33f7defd7dddab2d192de3e413cbcf"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","db385cf08b3e9681af65832ad6c91839"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","e536d310d2a231165da8b0299e8ada37"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","17723e1c5577a111eb18cc04b9140848"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","0f6890426c8bbdeeb56b48baddd7ed1e"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","27f10f9710591de3869b13161c63f47a"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","51bdc003e8449fd1e8056ff288bd1926"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","dcb09225c770f4cb6bb63a4962ab0af0"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","937b14059c3cf0be00fab50cdfe1ff6e"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","e557d8511b83416a769dc9bf9f61f877"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","a56fdd130fcf3376e8642c526ee71e5b"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","9f6fff9fbe9616b3a43b7867b0aae7f6"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","423cb7a14b4343e8b9ab42af2580d816"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","b2b5262633026962778a9ff0b9c8c59d"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","256770cde5a6d4b649765d13546c8c8a"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","a09e66230a196cad7e860914894e5c14"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","ffa0672864a7e7083b62fc85dbf78424"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","fe550ba64bd60f9e2d1e33efdf9e46c6"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","c87950c8fd1b74baffef624525bf35e5"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","899e05c6e52a233940c6e6a3ca355639"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","d52407f2344b0447898d5a2fad4dd1b8"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","650fb12e0ae342de0a2c39212f59f4e6"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","40f5a700db6bd08da896569674000ad1"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","42d902e02b5e820c3fa04dea2b4f061f"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","827ba4814c11767c269edcc2fb0fe64a"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","fa3bc7b0db16a0dc8da75d611a484346"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","1b5ec3245c16de425f647d2e234baef7"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","0fd973880e6f65733aa97cf75970c4b3"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","2b49fccd4aa936ef12441b01ad75bda8"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","32acb0c855c27f588f6d17f5e8730fc4"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","27a49c032f592541ee65d9be88db8d1c"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







