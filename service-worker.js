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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","0ec785dc16cf6751815c02f0f2c0f043"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","269814528f72e8976159db977040895f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","4b22fe54ca62b35308aebda0b24357cb"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","c9f341eec667ce9debc648fce60893da"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","0987762d0c9d1aba823cc7b619b1d4cf"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","01750bad29cc613265405badc43667e2"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","607008fbbe9f482f46feffd531fe763a"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","0ea0e3c8a2f60ddebaf61908e0710eea"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","1c4b2bbce91459a0f14985cb346b28f0"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","660a5dde48fe89ca7d6138f0ed4f93a0"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","dee2dea12adbe4847b2217dcca6f15b5"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","c37414cff3119af06fd0ea108cf996da"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","900fd014c156d2d2bf9da16b6bebf4ff"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","ff8589e08dd839679a45f7e36b59bb01"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","93fe85372c61baa47af862bba712a312"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","b2746e3f5a8a8a694860bdcb48ed72ad"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","69bb81f83e397d59768ada1bce50a7b3"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","aff9212975d1a54b20741b94792fdfb6"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","601bb3215fa32aac39595e0da325f2f1"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","482ac614a3b34ab4d3aa61792bc36df1"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","fecf24ad3877cb1a13fe3244a0ff5355"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","f5521a5624959d21ae686f45cbcd8b93"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","cadaadf407e6d80e5949a15128d98c6d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","e703311a7d2fd3b43f500a82a347cdcf"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","306c928496ccd5aa13bcad0617a0c605"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","25bfb215cf4eb702474005c1854d0d8c"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","818122afe179438f49e063038cc3fdb5"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","b117047cc8272701c3bce0bcc4ce16bb"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","b5a6d957d9d306c1779d6dddec6e9284"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","70eed01310df754db2f59a3714df47fc"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","fe0d36a1eba6ba8a5715188987e19001"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","d63893258bd05063990c216d30452405"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","664b81e369a96b7d30cc192f6099db1a"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","dadfa97c0e2a600435eb28adb7b6da3f"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","5229423791dc63b4c3425552e5076a73"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","f53538744d7e22b7edc6c294bab227d6"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","f7a35dfaf9c58b12b585151716a02356"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","55c64493eceb3cc72cac06615e9dc652"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","2e613ce74e922b2f94b8ae68d5fa214b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","a5e7462d369d951cead182dc0d9c62f2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","c2c7c4892756bf5727f42e4f674250dc"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","10e82f25be7ce214d8182e9cafc0863c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","feccb6a2acb6e96610d43f49800493ba"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","ef4cfe6db3c5599ffa7a1b93ad115c07"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","a8ef5d34c0063b1750e792b2c18d9c01"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","10f031ffe25c1b3e86fedaccc7e90fc3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","7ee7271d82fc74ac4f5ec7f1c7ba8344"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","7930094ee688753c1fbafaa53d8b5415"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","c1819867975483701f053c2060ac45eb"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","fda22e1d3878d378b6638d62e78fc2de"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","eb54fefdd62bdb69ab8d44971d18f50f"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","c9dfb0e6bc2eef19c6f35da5e4fa8671"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","77216fde408c4542312395f47e181140"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","20b798e5cb66095e02162f353b990caf"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","973ba4c0068b7d1025643593bcbe0199"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","57944d414b63b3be3e52335dfef9b3a0"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","f1944e617755030bb7166acd82ea1840"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","ce8ec60501755a939557142bd491ac23"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","ab9c81bd5d47648283f56ff726268672"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","d83e4b403836e6aa60fecb0ce3fa060d"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","c15e93db244d02c3acd7eee10ee9852d"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","722e4c859b6f4a345b28202ebe4ed71b"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","ac9b46ea724a128005d39294c54d6383"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","21996825cd501676d8b5e48d003c48f3"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","89eba126092d7d9278bac2f6231ff7bf"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","694e928005b23dcd93bc055c0608e17a"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","1edf7199f4f5b001e675ae7ac92a8d09"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","6b69b7e73eb0c854575e0374752c5b9d"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","e7d07037fd4162a70b5f03aaef7db05b"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","a02b77892c1abe4016a7663f1c55e819"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","629791558b8bfcacbb7232dfcbe8c6a6"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","87a7c2c5370537504928c0237946acdd"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","221bb225de284f1ebcedb17e311b8abb"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","de3b96e43ea7eed793868342588218a0"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","42de4f40a5314e14c57aa11441a4c760"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","f46e5c2891f5fd31cf04e32fd9e3acfd"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","c22bc2fe0c38bca4c46ef2525bfeb4a9"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","f15f6cb6e00b77cd19cbe8b0d5a47f7e"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","60906229e607ee117d38fa51d9d83c46"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","8eead60dc0fb1779867f4a409f8cf6a9"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","0786e82d9c2e0caebc9dbd52972d37fb"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","cd6f02e87b760dcc1beff89e1888bb7b"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","285b374c8c9420c0ad4ca898847abc9a"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","9bd43837ac3432d5aa2af2532ed48046"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","80489a171f633edc2ff1d5de162df689"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","c16d53e6fa07897b577d8cb90c4b6722"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","c29ddb3ee3f7d9c1902cbde457f45d0c"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","9a92b113c1d8b4d443fa48438bd50743"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","0e9f180ed327dd00ed92bf753d958ee1"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","888fda793b31f947c19b4c89bfe2d1b9"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","025592bafb8b5825cb023fec740bb6a7"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","6591654bd808903f0238784e4fefe1f7"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","5822baeb2bd42930bc56c56c73574bcf"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","5778f7400833e5597e31502ca33cc771"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","df92a18523b5638669946ab7fb5df12e"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","8a9a823705499038b224a2025b5d12e5"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","3115afd7be6f59bd22c5f85c570a4859"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







