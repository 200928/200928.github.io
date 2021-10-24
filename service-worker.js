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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","b68d1d74885eedc1e1245ca632eda90c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","bf42d9b9b94333a6f06efef044b96bca"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","be9e1afac3aa48762a2ef2bde230734e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","4b409cd7c8681595b11bf52500c9d6df"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","2a05a5ff62d141fca1ed13b826e6a603"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","7fd22eba572e97e74c3167950e072be6"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","8c7f8ed7a615c635cfdac3ba127e0ceb"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","75e7ea92e6bf421b448c7fcbc8ac2082"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","44ae394bdaf980f7baf8db6860fc5d72"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","8df40eadc335f8c091d1c4bc5799e41a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","fbb855c9a4134e2550ffa6542f69b29a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","7e454edf9641644badf68d7e7d8754d0"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","a93cfc446e756d11f26bbf02475538be"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","c1d6fa72069315eae63287b537c3731d"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","3a01f55ea84dea3210bb11d1f072b3bc"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","094a0583a931144ffe1cdbed077c8d68"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","54390d41b85f2dd2b01b39e1c4b0ccd0"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","5693a80c3eef74cd4a9b6c986ccbacc0"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","70d749bdb41f3d8a6a16ac2b4a096c9c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","d24236902863aa7b5672b4c3d1808e82"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","69fc30ca666b789f37fd42cd06e0295e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","71a69bd224eb9032b069c10e121220df"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","e17117ec7d2dbcce7592914799efaa14"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","fd09efd039f031fe68e3c89c67759c78"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","64e8a95ab7a8062850de16b6eefc67a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","185fcb15715ab25aaa895dd2239212d9"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","2d058ac4f2d192d1dce1bee149fdcf17"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","f671c4ce95282e4a3f14d6118ce28557"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","6c151afa8ab157cb3838b234b9c3220a"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","bdb4d9f3af7e69d0516fbc3b174f7259"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","4d77a688759f3905a499bf033b46d700"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","04e62ccba66563001af73e759a81705e"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","0a12d59c169bda476fefb642112c4375"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","a5712a229147271fd4d19d88de79a4a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","934f9435a1f749c8676cd9cbb61de35e"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","3090f5475e6c5e173631bda23e5cdfff"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","885f34c96672193412dca8affa561cae"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","301938245c07a92dbadd55f131666123"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","8917d5cb92432ec01794ac34f3401c89"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","8742239a00c1df2a90fc44efc6207bfc"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","6b4a4a780735d4e69a6ca7dfcbf0d993"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","72e1d07b47e2233b41e95a1db3c00d79"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","8dab1668b4730c6d4e9da8a42b626cb9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","741a3ff05c88dec98d285ae1ab4c6b4b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","48227df0dadbdb5dc698b80d81b18e39"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","39480b96c56aef87d87628d2f792272c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","b96fd48240f5b6b6c49f8925db561414"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","5cf4a1db4cf6c3f844903c2c5e7b05f6"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","6857ead8660606df244a821511cb49fb"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","d444565d09ac1fc8473c2a02efdbcd09"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","406c5e04d83ce799278ef7bc678fcbf9"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","e273147292dfabb210a31ec5fa71a200"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","77033a4ad791a87e8ef3e27600ec0511"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","6d0e73c583df249a378cd76920753859"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","876f4b8262e75e5398706c9a15628ec1"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","080f85e5ffd2a4dabe55e92935e4896e"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","b220e843c514cdfcc99e0ebcba42c5ac"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","430ab0c4fe8243210f21d10ee9904ad4"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","66221ce6bc2fe77461836b939c65970d"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","781279ad7c6f8942f1c3d2133f73531c"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","dbebc4ef50e02c545e92daf0541533ce"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","9e6cff8138db320306cef8f693f805e1"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","593b21949976850b4ca5cea835a41054"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","11d92494c079c19779879fe3e473d719"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","839506131ff50aa44f7c8dce5035e188"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","853e569b5188bdf66be1469a33fd8a7d"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","d9e8e75b9c325c05546cc3cffa21992f"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","d49a03f3bb72c67c46e741dc33fd354f"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","d53098a5ff1ef827a354430bd08518b0"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","f63c2347792200844352daba7cea37ba"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","1f7901908a87f1859ad34c57b38946ee"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","674118fb1c82b2619d2c2b754b1120f1"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","199c061b785964f7c9125d47a3a5bc0d"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","31551c0d8852c9d16203903b184b7a2d"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","6b417cb9e9b2cc58f706afd449bcb894"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","1f976e73536721f16bf53e781c5f0819"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","50ddaf0a8d88f260671772ca2c15dcc3"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","f579752800bc86ef3ac6ea94d0f11b15"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","d00079ce748b365bcd01d63bcb411d3c"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","6a4141e04007f8a2dc4157ea32a463a0"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","ed4d75b99e1a25152760ba14cfa176af"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","c477c4afe5fa948de7a48b96ad9132a0"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","4b29e4d44755e4a9fdd25cb2ba194994"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","3f9af9877f1c7c15f2393d50274d5c0c"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","33167b95ecfe1e09bbfdc9245b8bbbfe"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","df9061b7f9d8afd8784da2d55b26eb55"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","966f94234bdf564884e5768c36bab645"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","4f6eab8531bad00d4397acdbbcb796fe"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","05bff768cecf81533f8df783d075cced"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","d695ec2c18a1e025d5c341b1df8fdccf"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","9b5653a73206cf4548526a2a617de259"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","3927e86008b134afe821e2ed4d99d410"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","729a506441052370cf026690aac6b3af"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","e1b634c9a19cfef6c66eee857c6428c7"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","7641b028672b727d46c401bb20a70fdc"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","cb5870d3a01d2d8ca7a85668df31494e"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","c50b97558dc7630b597565b464271692"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","d89c5f84815ecf602c201789551bd752"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","ded2927c79ee27623e77e93b08f0d5a7"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","289706d67afcf1faf5a2c88f59afedc8"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







