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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","5fa8776c69350d9e9279c4688cf3999c"],["1970/01/01/nvim/index.html","64bfa907a0bfcebfbb9b16e997334c16"],["2021/02/18/Git学习（个人记录）/index.html","d89b5e7c4278278a4592c9a7f78d6f28"],["2021/02/18/Hexo博客搭建记录/index.html","917667d98eb05ebc49da2334b07d9461"],["2021/02/18/IDE配置/index.html","f456e91b4e1a8d768336c43de19647b9"],["2021/02/18/初识汇编/index.html","f120fe6cb181cedf3d8758cca59ee1e9"],["2021/02/18/链表与指针/index.html","9f8f8bdae8ad3d378f3235dfe9f1c777"],["2021/02/22/Topic LinkedList/index.html","5fb427706182b7acb0303bb1fe05d2b4"],["2021/02/25/一些设置/index.html","8742dd78e86e008a7926a9f58c92fbd1"],["2021/02/26/WXY/index.html","24c07c4b56781257551483b03cd39c09"],["2021/02/28/大二下课程推荐-计科/index.html","0d3901841484d46ccc484c5ce9f51556"],["2021/03/04/Linux-notes/index.html","cdc949481fe72bca19705d6c6ae4a574"],["2021/03/08/data struct one/index.html","f083b6a4eac807ae9ab1b0cd7e6949a3"],["2021/03/17/data struct two/index.html","8261384347b44cb2463688b3b0afd2c2"],["2021/03/22/STL/index.html","0f11c125e6d77a1ed6a98dccfa80157b"],["2021/03/27/Battle-of-Tanks/index.html","ef1db44a3597f7bf6aeae9461049a2e9"],["2021/05/01/MySQL/index.html","2d7c5105678b7822e9c4309499ae4435"],["2021/05/09/HEXO部署服务器/index.html","06f3270b17adcaf3b01156e8bcf65fd0"],["2021/06/04/vim/index.html","94f70845ed679336bf464620c3fcbecf"],["2021/07/13/oh-my-zsh/index.html","22d709b310e6ba2d8eb315345c586bb0"],["2021/07/14/HTML/index.html","3df94b0ccf81768b2f67598d7fa4f62d"],["2021/07/19/Maven/index.html","8f1813236635b41706e812adaec6ff62"],["2021/07/20/随机数（C++)/index.html","d0ebd98713481c242fa3cc74e8691135"],["2021/07/22/data_struct_01/index.html","2c0d8ac30d8005f06bbbfc7c8e81128c"],["2021/07/22/滑动窗口/index.html","896232a55c5d7de928047551b9c7c533"],["2021/07/26/Tree/index.html","57db807e2895c587c82e0e2209ee9a4f"],["2021/08/02/正则表达式/index.html","500a6bce47ef81510b7b584fe44176ef"],["2021/08/14/CSS/index.html","fff7c7471f88ed35b0523a88c000cd77"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","36683750a8507b95f5f808d499892a30"],["2021/08/19/Windows Terminal 美化/index.html","473621f6bb7482a8bf60d7d1a1a3a961"],["2021/08/23/EROOR/index.html","cb17859106ba88f444ce103ef6ca4e52"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","e7d0941076f6eb9482f20f99e4a61002"],["2021/09/07/编译原理/index.html","c987047bea59055e454154328af7fdfd"],["2021/09/27/网络是怎样连接的/index.html","c0658aaeba1ff3fe8acf56ed70be0735"],["2021/09/27/通信基础/index.html","9fe74730de9338557a7161c9111bb33b"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","17e945a07eb33ce86a6afd00942f266c"],["2021/10/22/vlan配置/index.html","691d3ae0162c87e3fa219847d89d8260"],["2021/10/31/实验三—子网划分与静态路由/index.html","01a934bec38b3159416c6706af306f22"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","b6fecc47e2a133d8d2af19632df65f38"],["2021/11/17/硬链接与软链接/index.html","46cd3a4f042a834ad5b5323ea6eef955"],["2021/12/01/SQL20题/index.html","e80c467868f08cdd83cd015641869b31"],["2021/12/08/实验五：Wireshark抓包/index.html","329b21f83ea6d920a39dad57b3168f03"],["2021/12/15/CentOS7搭建FTP服务器/index.html","e3c2a40972c1ffb167b1d40bba961caa"],["2021/12/19/CentOS7 安装相关组件/index.html","a942f225c3ae723034fe22c44643cb63"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","5fc7ff551099ef01f2e49228192fc565"],["2021/12/27/Vue/index.html","3be70f92a803c804fbac271e159adfce"],["2022/01/08/ArchLinux系统安装/index.html","792b925c98b607a38f6003c918f75567"],["2022/01/10/ArchLinux软件安装/index.html","829096a4619c69d53d150071f5bacae4"],["2022/01/11/ArchLinux开发环境配置/index.html","2338e5a832216bf5f02f3f7ffa508aba"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","66596b24df5ce7f2eb707d3aef3192a7"],["2022/01/22/DWM/index.html","c9bd93c56cb984e671302156be908ca7"],["2022/01/26/MySQL性能优化/index.html","4d65d6dcffb470b39e244b025bb62197"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","6d5f32e616613992dfca8d7f0bc2572c"],["2022/02/27/ArchLinux安装wine/index.html","74a04c28474752094d0c9e8c95d94569"],["2022/03/01/ArchLinux安装VMware/index.html","85ff5ccbdafe310350c928e07ee5c296"],["2022/03/01/ranger/index.html","6284c1cffa6427ba2b25aaaf168585e5"],["2022/03/02/ArchLinux PPPoE拨号/index.html","9a79a4becadec4dd90ea4d7f3b34a5f8"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","40946add7fc1fbe6bb9ad04b65eff235"],["2022/03/16/Linux文件和目录管理/index.html","93c51301343614051379861b34eeb72d"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","d7a8c24977f2bf7c7abc4fe2cef4a8be"],["2022/03/20/Linux用户和权限管理习题/index.html","314cba89d92cb80035813bf644924382"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","e0d2595e3675c2a7eedf0bf9bb95d1c8"],["2022/04/02/ArchLinux安装MySQL8/index.html","9ad3f83c4cb38f5112fed38318842bf2"],["2022/04/13/Linux磁盘和文件系统/index.html","5b8bf6bccc410884e2c44438eea9f6a3"],["2022/04/18/ArchLinux触摸板/index.html","b77dd286d7f46041dd244a1339f2c934"],["about/index.html","7d66e15ee89008c13eef5f4310329c68"],["archives/1970/01/index.html","896edd7163a7ca25dd0c7509c68c04d9"],["archives/1970/index.html","221724da208088fd868c1859a35b21c2"],["archives/2021/02/index.html","b497f061ba53a194d8c3cb4602f9b694"],["archives/2021/03/index.html","af22627e79d7c2e05b477aaec8d09aa5"],["archives/2021/05/index.html","969999bc38756183f0e20e1595671c49"],["archives/2021/06/index.html","05e1a145182bdfe9cfeabf2c288110c6"],["archives/2021/07/index.html","c42afb95a7e7c34e9a7d1c659c764595"],["archives/2021/08/index.html","c8ee1376c75d6b3f30882e597f82d190"],["archives/2021/09/index.html","c8eb771567e0a9efcbfaf0fc239dd671"],["archives/2021/10/index.html","ac4682359535f563cbeb408ac2d9635e"],["archives/2021/11/index.html","e09444473374cfd7eaddff85862d78c4"],["archives/2021/12/index.html","5cbcb4b35a1d4c478572185f03175a2e"],["archives/2021/index.html","07227b52a798b95d30716e71bc11947a"],["archives/2021/page/2/index.html","002bd69f53240786e099474f6eba2308"],["archives/2021/page/3/index.html","c03bf03625fd60388d04423be2c9ebae"],["archives/2021/page/4/index.html","911b03ab216cff7ab0c76287ce8584d0"],["archives/2021/page/5/index.html","ed6b86556f66a8bf430ff1f26401b852"],["archives/2022/01/index.html","8c1f9dac26122caba2a9a5d2db89fd6f"],["archives/2022/02/index.html","110599e7aea5d76cf42def3d69de42c2"],["archives/2022/03/index.html","27d6aee5fadb1f10452be6ed562feb63"],["archives/2022/04/index.html","355f4c9a3f1a52466092bfd7c7a78d0f"],["archives/2022/index.html","4a75c28c7477fe691c17612e5e88365c"],["archives/2022/page/2/index.html","1c461dfa2a9bf4824ad8e23ecc69ba30"],["archives/index.html","c8109f93cbabe860677df557b057d385"],["archives/page/2/index.html","e9457ef2c6bb26ae55cafad5150ba2e8"],["archives/page/3/index.html","3e02e1b83511eceb767360c2414d38ce"],["archives/page/4/index.html","78aba34c7ca107627e1257afbab69e34"],["archives/page/5/index.html","c11b0b1b3ee20d63655664c3daac17b2"],["archives/page/6/index.html","3362a5de9aa525e55472bca64c8b16d3"],["archives/page/7/index.html","f09184593f6ea0aa6ae2750f9965c189"],["categories/C/C/index.html","0417cb3808b195d1a67cde5ddeb829fc"],["categories/C/index.html","844c46b44e49847e4571113a00b8ab2e"],["categories/Linux/index.html","65efb1e72fc3fe487810fa466ee5bf7c"],["categories/Oracle11g实验/index.html","fd3a1e6c3f7c264893eea3b2eb92f61a"],["categories/Windows/index.html","9e0980bec0037a792cf484383e0beb97"],["categories/index.html","7a05dd19129fe7fb678bdc794ad745f5"],["categories/javaSE/index.html","589470f847f306c6ca76f15d2a434926"],["categories/tools/index.html","9a5e60a48d15b387be8e66971bf23089"],["categories/wxy/index.html","650f00db5b32e03532137e907c16aa04"],["categories/个人/index.html","899794109e5147e4c671ae5e5cd53107"],["categories/前端/index.html","247e31f39324e3af9e0e22190f700f2e"],["categories/工具/index.html","9ec35f47a063edf1cc44fc35b607d991"],["categories/数据结构/index.html","ddcbf432c481b61d7f7fed69c565b2e9"],["categories/笔记/index.html","9965fe0a6c89a7d15a0fcade08e9c107"],["categories/笔记/page/2/index.html","b33ffe5345d021bcf51e6ad113f028ca"],["categories/笔记/page/3/index.html","29a5d81d3f9d5c4058b0632324721e9a"],["categories/算法/index.html","8c21538c531095e4f17ba8399e9d16a6"],["categories/美化/index.html","7d0cadfffc32b82a918c03841d899705"],["categories/计算机网络/index.html","f70427a7ba2f33503abf5699e07c65a5"],["categories/计网/index.html","05659e2006e1fd93f5b802b9c0655a47"],["categories/语法/index.html","61e138a3e6903d9ac8286604fb97ca0b"],["categories/软件/index.html","8ec52f95ddb92c901329a3c05ba15b46"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","779c8f5704b0f34a93e30b376ea40a4c"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","4892ebd2c584e5413a59b55b5951e938"],["page/2/index.html","8a0d1c89f206b2f96e2255d50fb92b24"],["tags/Burp-Suite/index.html","2305b4c7806ebecebae2e0a6e3381676"],["tags/C-数据结构/index.html","57409edf78a0738a15f71f3b1c84dc87"],["tags/C/index.html","c1b22d7b743e607f6c6c1fa8a83f5525"],["tags/CSS/index.html","124045e1e1518c8fc1b43a9be722aa70"],["tags/Git/index.html","1cfd07556e4ee5a7ecc42e0c86acb8f5"],["tags/HTML/index.html","f6e5a4f3d378ecd86f91d8924cf7271b"],["tags/LeetCode/index.html","aed6d4d4ccbb9926d9c1aa1c7e17eff4"],["tags/Linux/index.html","2bade746187fa44b2b6aeecebadf7eb2"],["tags/Linux/page/2/index.html","2bb1c465fc554be191cb18f714950306"],["tags/Maven/index.html","059b85a2583d137698a9859ee9c0edfc"],["tags/MySQL/index.html","ab43c43f79d110600849118e78add783"],["tags/Oracle/index.html","6531b08c6bbf8a15cfbf8b4e6dc9539e"],["tags/Vue/index.html","8c3e6a6b86e0238788bcfd4d9bbf89f1"],["tags/Windows/index.html","259111dcb0f7bb0897f293ddeb4fcff3"],["tags/Wireshark/index.html","0ed2e145d0c942edabfbc9dc537feb60"],["tags/index.html","14e0075fc717fdaffd777a92b013154e"],["tags/java/index.html","41c0e083b81cb8a144a04e7bf1be169d"],["tags/route/index.html","a894ad25b6077dd79e3a46f9d00ea472"],["tags/tree-java/index.html","43bde140d963dc47e608154b15b54d90"],["tags/vim/index.html","8ad281bcb9ec75f5d28e13e45b33f026"],["tags/vlan/index.html","063625496ced8fb87eaf0bdff8fce0ed"],["tags/wxy/index.html","992452519fd4b0de0142d35e0c3f714c"],["tags/个人/index.html","ab6018f75ffce9a3b7054ef12b30b398"],["tags/书籍/index.html","5af8008bc99d4a7232075ee2fa0b2ee8"],["tags/博客/index.html","884fe4fbe8ffb8d574f01aba3c3a14bd"],["tags/壁纸/index.html","97fd03679a552cc44cb7f0626d5dd2ae"],["tags/底层/index.html","f64d12395509395d89e2b2548f154f9e"],["tags/数据结构/index.html","06e68de51d2b600eabc5e212a022eaed"],["tags/文件/index.html","efa05cee9049258294f54b19abe5042a"],["tags/服务器/index.html","77d8509a31c8127dc2dec02d3b41677e"],["tags/汇编/index.html","1b3fd34fb4ac5dd0b00c2d132eb6e039"],["tags/算法/index.html","ea90c4c3027e45b60800fa60a67a2a48"],["tags/记录/index.html","a9cc007035a984c12965deceb0edb73e"],["tags/软件/index.html","a014078ad98856ef09b006c12a30da66"],["tags/通信/index.html","a6cfdfa72c8ebbea08446fe6ed13d567"],["tags/链表/index.html","6d1de7a6bd57f34b2203ea5e644247b7"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







