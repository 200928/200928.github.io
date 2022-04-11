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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","05a1f4fe5b10640460becdbeb1f4e533"],["1970/01/01/nvim/index.html","ced82c04daa58aeb406fafbd89fe3424"],["2021/02/18/Git学习（个人记录）/index.html","9a533d1f70eee9b6d5d878201093a368"],["2021/02/18/Hexo博客搭建记录/index.html","735eebb34518158c7a0999e145d1c3a6"],["2021/02/18/IDE配置/index.html","2a8610c589e62af6abab6a0a93de03f4"],["2021/02/18/初识汇编/index.html","da1906c9779683c4cbaf3f4924ee885b"],["2021/02/18/链表与指针/index.html","a9ea8cad783c9f2488a43d002dabf14c"],["2021/02/22/Topic LinkedList/index.html","439c5d766afc085e4e0f6bcafdfcecfd"],["2021/02/25/一些设置/index.html","b70e1592d80a620968c11781d1b8ebbc"],["2021/02/26/WXY/index.html","80b60f6774a2174f778b0d8f704e74e4"],["2021/02/28/大二下课程推荐-计科/index.html","8c67848c2bba31c761761dadbc3c056e"],["2021/03/04/Linux-notes/index.html","8c7d11b10167bda270b18c30a5440c72"],["2021/03/08/data struct one/index.html","fb08ae8f408f43514cca78305080ec77"],["2021/03/17/data struct two/index.html","665d88abbb74b9660fd9b762bba4d5ad"],["2021/03/22/STL/index.html","f0cc859e5dd30005b009341ea3fcbaf1"],["2021/03/27/Battle-of-Tanks/index.html","9e8d729098daad27154abdc1aefa5b27"],["2021/05/01/MySQL/index.html","44c009cec17a4563de08969636b27b8a"],["2021/05/09/HEXO部署服务器/index.html","baa2717e02a6b5d69d03d0c281c534e8"],["2021/06/04/vim/index.html","cef43ded5259a723a29896a2caf3e956"],["2021/07/13/oh-my-zsh/index.html","fdaf9db2409e63e6d0a8b97426db5b2b"],["2021/07/14/HTML/index.html","8fe43e71584d22fc6cb99c8e3555bbd6"],["2021/07/19/Maven/index.html","ec093e6094845b8596cce862d2823772"],["2021/07/20/随机数（C++)/index.html","6fe1727e55f91403d76481d76d298c74"],["2021/07/22/data_struct_01/index.html","231868f3ad802f31a29a65fcbf963767"],["2021/07/22/滑动窗口/index.html","329b02f4aae549f4e850705a37a41214"],["2021/07/26/Tree/index.html","06cb0f81a4559f44f01b5c81aa4bbd0a"],["2021/08/02/正则表达式/index.html","71272a574b86237d60a5b8a3211b3a16"],["2021/08/14/CSS/index.html","ed83fbeec7a8c750bbf2801957eaf906"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","e83efd1313f3b6b9bced91afa16a7db1"],["2021/08/19/Windows Terminal 美化/index.html","db69483930546743c536a1640e2edd5e"],["2021/08/23/EROOR/index.html","0116cad12ba2147ecaef8cae7df2d89f"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","9f5c722bdad8eebc792d66584bf80bc1"],["2021/09/07/编译原理/index.html","47d20113cabf955a912f2c33ec498537"],["2021/09/27/网络是怎样连接的/index.html","22a27c2c04d7136cb6335e5e53f561da"],["2021/09/27/通信基础/index.html","93bb8ee690292b0a69b280f370aef483"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","dd698f0fcad899f48893d41913738df1"],["2021/10/22/vlan配置/index.html","f14fe1f7335d661b508117fe21965b44"],["2021/10/31/实验三—子网划分与静态路由/index.html","843ecd49a45cf52065f8150e8f01fdd4"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","0926caa4b9b002d8b0d6150b00dd269b"],["2021/11/17/硬链接与软链接/index.html","84aac9dedf564b6285f425968c1f783d"],["2021/12/01/SQL20题/index.html","7b30b793e7b711d17d41c41f8b0e648b"],["2021/12/08/实验五：Wireshark抓包/index.html","7d1087945786ff29adb9c8033121e1ad"],["2021/12/15/CentOS7搭建FTP服务器/index.html","0b35e2c06cf1d835f3afc64427077339"],["2021/12/19/CentOS7 安装相关组件/index.html","204360d1445509462aff33529e1986cf"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","d4e5f74290749be5e906bf1d94c90efb"],["2021/12/27/Vue/index.html","a37816a7131bdfd9efee25732587eb95"],["2022/01/08/ArchLinux系统安装/index.html","739fbdc92d2446696378ce72df26d4df"],["2022/01/10/ArchLinux软件安装/index.html","899dbc7880d0ea05eadcdb5e79254dee"],["2022/01/11/ArchLinux开发环境配置/index.html","e87aac911df4c887f2383bd56e3d534d"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","430b0c7ba6738a37349fe7b02084b231"],["2022/01/22/DWM/index.html","9e905b4bc5cea12440ac552c37cda3dd"],["2022/01/26/MySQL性能优化/index.html","02ff8f8eb9038e4eddbb2f8552b0caae"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","ff33324770722fb7c9d7077ac324babb"],["2022/02/27/ArchLinux安装wine/index.html","4252487a31a9aa60d96ca40d76eed9a6"],["2022/03/01/ArchLinux安装VMware/index.html","8c0dfba13e8f9b00d5e0b7436826ac64"],["2022/03/01/ranger/index.html","eb3500285207754c2fab361c18acdd72"],["2022/03/02/ArchLinux PPPoE拨号/index.html","9fd51858413d620d0cace1f0dc0aae39"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","bad60957032d8e7c7a2cfc9dc7581e0b"],["2022/03/16/Linux文件和目录管理/index.html","76aee7fcd580344c72db80346064d2f1"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","dc57ee4fb5b220d1f984f085d38053c4"],["2022/03/20/Linux用户和权限管理习题/index.html","9699b49a2e11a3777c97a68a9577e2df"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","ef4797d2c9f4c585a800603cedc38cf8"],["2022/04/02/ArchLinux安装MySQL8/index.html","eb796853f5c205b5d98856d01b199b79"],["about/index.html","9a2901978335c9ea5641b2fcb85cc768"],["archives/1970/01/index.html","5289996957e9b38adc238717ef7c091c"],["archives/1970/index.html","f979831bd83b8302b541e3fa9f03146d"],["archives/2021/02/index.html","71077ce4fa568c270d3ee163ac9338ed"],["archives/2021/03/index.html","647e4693c5d8dac8117c4a7f4b9aa9d9"],["archives/2021/05/index.html","b4b8d4fb22c9ec3cbb6cea27958ea847"],["archives/2021/06/index.html","9ef2af110474ff9ee888b25e572931c1"],["archives/2021/07/index.html","be71aceb2bdd01ad7851612ed683ad5a"],["archives/2021/08/index.html","6c9eef1158190764be6a8d252acafd4b"],["archives/2021/09/index.html","f8ce62b3581f0871fff94ade67a9fc8c"],["archives/2021/10/index.html","7b43211f57dfa1eb24a2696b38d632e7"],["archives/2021/11/index.html","18775f4362efd72e7199eef705ec5103"],["archives/2021/12/index.html","ec44182f0b012a53e0e19dd7be7a4c0c"],["archives/2021/index.html","3e8083aaac4e4cdcc5a803f2ecd035a3"],["archives/2021/page/2/index.html","1fec8b22580b903c9be9443e2528fd6e"],["archives/2021/page/3/index.html","7e1bae74786afe7b47bce9aadffe01d7"],["archives/2021/page/4/index.html","f9cc3dcdf67d7a24151577dec6d56d84"],["archives/2021/page/5/index.html","b8284061f5a9cc9709544c4ac2cb9f73"],["archives/2022/01/index.html","3df791444ff76edb0fd612ac02285516"],["archives/2022/02/index.html","fd5652385df59b7dfa9d9c787bdef32e"],["archives/2022/03/index.html","bf94f2317ad53082a5b7bfbd9ff2ebcf"],["archives/2022/04/index.html","c02d6f21662fa7bff5017044f2a67adf"],["archives/2022/index.html","fecfe61576321ced4dd5f0ef3e87ddec"],["archives/2022/page/2/index.html","d9986e2acfa3fc7dfb8919ae4abf3025"],["archives/index.html","f587d9195e1c041892dd7bf9014ca35b"],["archives/page/2/index.html","c8dd8d36392f3c27a9fa206a133faf0f"],["archives/page/3/index.html","7899e3ff729fd8ecb0bc68446a25ca2c"],["archives/page/4/index.html","8237db817f7db056982757c151c1916f"],["archives/page/5/index.html","5a4743042f043b8dc7fbfcf056ee05c5"],["archives/page/6/index.html","cec340a07c2560e9f66857340e585a03"],["archives/page/7/index.html","9f653f7deff6e2793d4f7ff7bc032ee0"],["categories/C/C/index.html","1db0fe492f00148e1db55a1e5a6ba01d"],["categories/C/index.html","095aae6c383bf9791222ac73a4cb2bec"],["categories/Linux/index.html","6538546ec6d33559d8e185525693abc0"],["categories/Oracle11g实验/index.html","0ef6c082253d40e64ae624739323deb2"],["categories/Windows/index.html","6d0e8871baf7745b9f11c0d64b8ffb89"],["categories/index.html","ccb2137cd4038c3d4e4659c31f7d8218"],["categories/javaSE/index.html","70b9253973bb5bab8ed272c0d26bb620"],["categories/tools/index.html","545dcd51b888ca660509ce287a7bbae7"],["categories/wxy/index.html","d98807284a8e964501118e4f26653ff6"],["categories/个人/index.html","357ce25e2990ef57c01000f91b3ff9f8"],["categories/前端/index.html","e7fd70540c5cf111974ce94bfe0fb202"],["categories/工具/index.html","fbc4558927a8b570334bee33604d3f08"],["categories/数据结构/index.html","d0bd188f7af8a84bc8de75935d7299a3"],["categories/笔记/index.html","243a183ba5b292c6a42d5b4e1a901e44"],["categories/笔记/page/2/index.html","a871d4698ba74f7b9bcc61c726a1c022"],["categories/笔记/page/3/index.html","93ac5f85f20ccdbe4d4c245d0934b48e"],["categories/算法/index.html","5216c88ad6877b74065dbf81834c079d"],["categories/美化/index.html","4a244b9cb8381c66274446c713e7f88f"],["categories/计算机网络/index.html","f11dcb9bc16ecb1aa2705a4c66f3f688"],["categories/计网/index.html","71fca42152c350b6a9c1c56e6b023026"],["categories/语法/index.html","8c74600683173afcda5fbbec87200d9c"],["categories/软件/index.html","9807c58ba9d3901c542ed575fd2dc9bf"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","84edaed83e551fd7dbfa625ce60d119c"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","e8ffd22fa8be0ba24124432c994ac484"],["page/2/index.html","6dedc5bbe96f88e5593e9bc6a024d7e9"],["tags/Burp-Suite/index.html","3051972ba00afe4a49c0f03fe41849d0"],["tags/C-数据结构/index.html","e904d0da12334f7d3a14d0aece789880"],["tags/C/index.html","195e30a7678739cd088cb8f4ca489758"],["tags/CSS/index.html","5249efa5014005c3c89cd8afcbe993e1"],["tags/Git/index.html","248c320c18613db4fd893bc8df00c2f3"],["tags/HTML/index.html","b603face276ffa46da33f0f555b9f34b"],["tags/LeetCode/index.html","bd97d8c498d105dbe33cc91c0d7e6d38"],["tags/Linux/index.html","49e7d07bb32272b73347026c27f58f2d"],["tags/Linux/page/2/index.html","20257b133f41200da040790c5e4027e9"],["tags/Maven/index.html","7ace51825fc0fc165e2246516b58b5f8"],["tags/MySQL/index.html","cbdd27025bc5977e157b82582e15ce99"],["tags/Oracle/index.html","4794b33b540103c8e0509a318291af8e"],["tags/Vue/index.html","6b6740e316d08908b92c9ca55f4d76d3"],["tags/Windows/index.html","130221581b2b02cd68f57d0ff040e402"],["tags/Wireshark/index.html","84cc95e8a278a7d8f8201d74bcbd8438"],["tags/index.html","c0651f1bde4a363e80522ad2263c7a66"],["tags/java/index.html","5258bc549321674468eb15a6727ccf87"],["tags/route/index.html","0507ee8b2aea998c187b5de0984da3ec"],["tags/tree-java/index.html","a39870bf5cc43833376a62e2a4dd6cb5"],["tags/vim/index.html","cac6b322906bed115a691b5506259cff"],["tags/vlan/index.html","55a8d10157f39ebee8aa1990abb7f587"],["tags/wxy/index.html","50ad79a0b67422d381076b40fabf5d46"],["tags/个人/index.html","905596aa6569e568f0013aeb2cd2a7af"],["tags/书籍/index.html","d978275dd6d6c99486f6eb5bf79a6cde"],["tags/博客/index.html","f70ee9e1d602fccf037792dafacfa2f3"],["tags/壁纸/index.html","2455ba4849aa0129450ea5cd59e69878"],["tags/底层/index.html","ddb7317da9fed8c930d15cbc40f5823d"],["tags/数据结构/index.html","026cbf680693fb109c757eb97a24808c"],["tags/文件/index.html","e77d9d63f1f40cc04a9f1b1170ab8ae3"],["tags/服务器/index.html","da9a2bee735d3c86cb2ea92490266d65"],["tags/汇编/index.html","9bb86280f4b9ab26838b77fdb2332f21"],["tags/算法/index.html","2285f2a0f1d8a223089860b80f1f806b"],["tags/记录/index.html","c1c65e83ae395550900d8578e4d4c33d"],["tags/软件/index.html","f7cee0abc3d45271a9f7a42749e11b92"],["tags/通信/index.html","c0b47b756eff7fa2314fad0caa1eacc9"],["tags/链表/index.html","00d966a40aa53670d5e3b5deeba43e56"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







