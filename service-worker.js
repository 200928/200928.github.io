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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","6606ba543a1fb05da2e965886ef49d5a"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","ea03e0d3ec766f0a5005c9588e007bda"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","146bf0ccf57d6fc0eecb385b34c278a4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","071928beaee5af00fa57f049ebb078a0"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","5271dfc15f8decad3f31de2acd5c73d3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","7e49e40d4e475739812f206c7ac18f43"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","5bae8f485e95345d64ac594fe8ee0d5c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","d244f52bb4b9cab1a4b9d0c586b2d5bb"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","48896a6ce8a2bd7b7d0bd43074c3b387"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","abc50aa37752f38c30f69655eb3988a3"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","280de3d459051ccf01361bb5b17fc80b"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","c77ad710ce56c7601e032da37adf526a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","8e0a32d515bee055986c526889654cbe"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","7fa428bb3a007b3f5c2c2a5b5194f603"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","47cb9ded997ecb698d8a54477ad6bcf5"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","b09dbe2fd84cd4425dae7497b68a1674"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","0137935c888fe351c25f6f0c4c97991b"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","6ad0b38e3361eb48df1093295c4581fe"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","389c63af662401841fd58247e75f930d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","461f857e5295d4a5ba33ac8083ce9725"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","44f63dee5c435ddd80c6fc0f6ca38791"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","e187c928b93fd4c400587b68ac169f65"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","2182cdc07b79cac3744f938b54a97d66"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","8087276691eba8f5b8a32fb2832cc303"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","b8b28bcbe44dccfe623ce9a4ab0cb701"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","c75cb98f1be0da630ca0db9e729c6e1c"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","36fc6ddb5a6c5092b0aec9ed49759fdf"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","6d7d01ed1c01567e580ad4d924656d4e"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","3b147d5ab58f17004e72cf49397579df"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","f7c8168647f6a50a231427aa7e188e5d"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","3a498493a7a6cb59ae9cb7732fd365ec"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","f45bd56e786ad1fb8deedf80a3eb0639"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","af651a3a2a9838c95b15378e682e88f8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","03020d421eeeb071976305bae623fd4a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","4286d11d21e422fec8e0c13a3dfafe2f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","3eea6b9d469a8a17917588e01ae35ca2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","1f7ab53e2fe93641af7358065558f571"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","ef3a54538a5b59ab6ea51d43fadf430a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","e39ea62a736c0fee2698f6dc04d7641f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","8715b25b39a7ac0192cd7c1f5f86b22d"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","ecade669d4e98a278d52bc980a5ef4c5"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","5ca99b0f66ac511cff4ff992ea0c1fe7"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","63fa115c220d4cb8db0ddba15d0b0005"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","bcba26003de327b4e54f0175c381b5b7"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","cabd5a14d675e02e1dcbac353bfe268b"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","ec8f1be9a946a9c25a13f52495c55d47"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","eec127387acd10c488b89a5e80259bb1"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","56a7764fccc62ba506609101c5331e01"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","64c07b8362c5590015231cf90381dbd8"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","2757f75d9d465e506249d8aed756dfdf"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","d3f7e0687d716ba9756ee9086292fbd0"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","3bc2c044616703cc4e780d3932a05739"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","3ffa6db0107486d99e5fe07455f85e19"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","b5dfa58a6e3c63b26ce55c1e1b2e9a3e"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","c4b82892145da2134f70e24d04c9442b"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","add9c5dfdea83cac76d6b356b9c11292"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","9b8eb13a97792fd53d9bfc81bd322bb0"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","38d1907b276785b3edd2e4657412595c"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","2eec8da077b775ce4151d202b29d78e6"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","55774c50d9fe74154c587c7af149cc1b"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","a180b56f1b790a8183056c5df2fdeadb"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","7f44d955b3b2f8e0eab451fe51b7a9ed"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","35956140a5c0ae64e5c18908a3ec44f8"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","37b50583eb8dae2fd4c41d98daf60021"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","27f503828e5102f4de68b88a981542ce"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","fcae51f78835f7cb39a23094081c32ed"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","d2ac126d4c656a88ba49b4c09457532d"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","8255fb574fdb6021845ad465ea21ff27"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","5c4c438add2245e294e72201df92fe41"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","29d3e2095d0379dcfaf621423860a987"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","25c793164378c0535cbc14b87e562ba5"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","ccfdae2e3dd35707955558d32272f9a4"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","028d651aceb63cc415b420e7e7902dc9"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","1034937517965cc2a887ded7ea4d8b09"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","2e51eeaaf848af3b20ed6b733aca8f71"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","0bff140c6879b6f1489651ba3810861a"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","5333de727ce308edf4b251745339e610"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","d7ada240ae64c5f4eb6c799c9a8a8e45"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","445bd6a22311cdb91ea8b066eef13a9b"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","2cb728e0fe2669de7fb2f84d4776b10f"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","fcfd7a9cccf37b8b7abf0f5e86d4869d"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","42e22d44eee17ae1b95c1e2d73100c54"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","5dc28149b73eb295ec09fc9870dd05a1"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","6cc05a9cb49bc80cc3f6679bb8b1f837"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







