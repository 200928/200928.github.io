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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","bb7134957104626c794c9b229b4a0ee2"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","bf42d9b9b94333a6f06efef044b96bca"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","688cb40f9959858663a5fafc0a43a98f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","4b409cd7c8681595b11bf52500c9d6df"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","2a05a5ff62d141fca1ed13b826e6a603"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","7fd22eba572e97e74c3167950e072be6"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","957d0a42f8906306d287dca21fa024ac"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","75e7ea92e6bf421b448c7fcbc8ac2082"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","44ae394bdaf980f7baf8db6860fc5d72"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","8df40eadc335f8c091d1c4bc5799e41a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","fbb855c9a4134e2550ffa6542f69b29a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","7e454edf9641644badf68d7e7d8754d0"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","a93cfc446e756d11f26bbf02475538be"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","c1d6fa72069315eae63287b537c3731d"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","3a01f55ea84dea3210bb11d1f072b3bc"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","593343d0608dc8eaf621b818a8fc766d"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","54390d41b85f2dd2b01b39e1c4b0ccd0"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","5693a80c3eef74cd4a9b6c986ccbacc0"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","70d749bdb41f3d8a6a16ac2b4a096c9c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","d24236902863aa7b5672b4c3d1808e82"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","69fc30ca666b789f37fd42cd06e0295e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","71a69bd224eb9032b069c10e121220df"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","e17117ec7d2dbcce7592914799efaa14"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","fd09efd039f031fe68e3c89c67759c78"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","64e8a95ab7a8062850de16b6eefc67a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","185fcb15715ab25aaa895dd2239212d9"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","2d058ac4f2d192d1dce1bee149fdcf17"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","f671c4ce95282e4a3f14d6118ce28557"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","6c151afa8ab157cb3838b234b9c3220a"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","bdb4d9f3af7e69d0516fbc3b174f7259"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","4d77a688759f3905a499bf033b46d700"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","04e62ccba66563001af73e759a81705e"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","0a12d59c169bda476fefb642112c4375"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","a5712a229147271fd4d19d88de79a4a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","9a922514f5fd0847b34fd7cd876a6e73"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","d23890c38de280fe08be19aab7d21ce3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","4d8cb16f303a59221bdf7ad4adaa5b8b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","89d519198f4e4461b6179b5005f6bceb"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","3be1de92d63319e96b9fcb5c1b485807"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","7a9e9d39fba0f91b9056cf442cce7e47"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","e541e280ca5f34ab1fb8e0ec5e5eeec3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","0ab4a0a8d858b45643faa8b72bfe88ea"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","391a8d1eca167c7b59eb22ee97f9deac"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","996c1216660d16df16fcb8b4c1ab255e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","577bf35e6108a7fc651e8322289e798c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","ce3fcbb0f4d085417c42bcbae020a714"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","ff92e71a52638b27f88ca381ff6fd940"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","a51203c19a692b1e2588b4e4561a16c7"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","134bb86c01d5cb7379de5579931c6870"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","bb6f6bffd48ada2f9e8044b796beaf37"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","648b306cfad2df55388d3dbe24f34fe8"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","2a3f49ffd870c9f98c848367ceb804a0"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","3aff775b55f9c3dc26ab38bf41f5cf88"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","6833512bfc44053828504031267ee455"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","c020de418567601d35607e732119a8a5"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","92bd90562d34917efd672bf060245ae6"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","23c5b16d09658aa68a3c5f5408954be3"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","37f3b244cfbcbd0e8b38ca5935727346"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","3422ba4ee216a4d3f129fbe1b3caed7e"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","a3cebf02a8e3b3bc97ab6beb91f79fe3"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","dd1ec0a79d01faefa0c6ece0b1e3d340"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","189e3d89d93f0b2c41f514b9b5e306ce"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","15b7bf3ce29000c4e3cef00d32300b15"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","471ac704756759bf200f56ffd8d84ef7"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","73bcecd193eb77d8ded4f80b44e43e13"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","6f6132f96a2dddd0f570f210223f38f3"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","42697417ddd30cc894178c9175e2d1f8"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","91c5bc9b2649a5f3cf5c2d8953c32290"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","1b4bdecf7d79a34f866d5c32f5f92c0b"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","fa6478d78b156bfa8fecd656ec87e0aa"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","ee0b026ba58be1106a7ab3c6b5a2e3e9"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","40cb3a743ac8f2fa4ed170799b79f28f"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","68a05127aecc08ba0aa4638b3ca1e62c"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","acb46fe4fd9628fec3eabd826e113779"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","e7d41ca5b9eccde74c661a2118b7fdf2"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","6f515f7f7c950653ca4c3f7a585ee6e7"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","1c7fd507d9e002aae6fad6210ebf43ff"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","9d2c279bc32f7a1fd279c97ce425a6a7"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","d664436ca4d01a2018de74def2393396"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","d4cc1fa976b6b32675365a21b0bb08a5"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","6091e4081234de778a2a923cdf4f3b93"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","ec704d1687863f5172c88d440f0bdeb6"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","f391faae8d1c84d622b619d0e6d1a50c"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","1b5b4ad93777dbdd92aadbb2c5ca11af"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","a41618cf3955a6e9d0cbfdfb84d4e69c"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","1712bad8754bf3b5340bbfc8ea63f1ce"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","bffe15d14dd9718ada8d006e4bdcb0a5"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","77e722f8cce5fc9189aba9fcd759ee08"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","8faf404f6cad375fcf2bd45a5704d46a"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","aac79042bc3840d66bcb2818a736cbd2"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","f0c2658139e46742ce55a3124a4f2b37"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","ee25c967af2e7582394c49f9204a68be"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","450c6b8fb85bd5a6a42bcd302e4651f3"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","5abec8626c3e91ff388405d42c1994e4"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","a66de16c3c6aeeaeb2af0569a0fa7552"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","e58baaa4c9863bfaf04a829ff4d4d501"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","7bbd827048f611791a575c2b9f58abae"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","6a1770c1e6b89ff7400d46d0706a006b"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","7839b09602c79985ce64c6ed728f2391"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","fdea2012d948fc59e59d87bfa949575c"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







