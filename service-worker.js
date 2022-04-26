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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","5fa8776c69350d9e9279c4688cf3999c"],["1970/01/01/nvim/index.html","64bfa907a0bfcebfbb9b16e997334c16"],["2021/02/18/Git学习（个人记录）/index.html","3d498c6a53a074630451983685c6c7a0"],["2021/02/18/Hexo博客搭建记录/index.html","35071b3d5614e5e6b1b9c8293273737d"],["2021/02/18/IDE配置/index.html","1ef3a87ef4ef7672a496c94f61b349ac"],["2021/02/18/初识汇编/index.html","f120fe6cb181cedf3d8758cca59ee1e9"],["2021/02/18/链表与指针/index.html","9f8f8bdae8ad3d378f3235dfe9f1c777"],["2021/02/22/Topic LinkedList/index.html","63085d15c5b2ec607bd64ab1fea60527"],["2021/02/25/一些设置/index.html","d366fa80342c9e05deff87394a26d2d0"],["2021/02/26/WXY/index.html","24c07c4b56781257551483b03cd39c09"],["2021/02/28/大二下课程推荐-计科/index.html","0d3901841484d46ccc484c5ce9f51556"],["2021/03/04/Linux-notes/index.html","f809653bc65c64fb6dd2a41018d69e87"],["2021/03/08/data struct one/index.html","f083b6a4eac807ae9ab1b0cd7e6949a3"],["2021/03/17/data struct two/index.html","8261384347b44cb2463688b3b0afd2c2"],["2021/03/22/STL/index.html","0f11c125e6d77a1ed6a98dccfa80157b"],["2021/03/27/Battle-of-Tanks/index.html","ef1db44a3597f7bf6aeae9461049a2e9"],["2021/05/01/MySQL/index.html","2d7c5105678b7822e9c4309499ae4435"],["2021/05/09/HEXO部署服务器/index.html","b7aa593bb98bca0bdf7fb75fffc4000c"],["2021/06/04/vim/index.html","94f70845ed679336bf464620c3fcbecf"],["2021/07/13/oh-my-zsh/index.html","2c917aae41ee062cde6d00b7e538d7a8"],["2021/07/14/HTML/index.html","3df94b0ccf81768b2f67598d7fa4f62d"],["2021/07/19/Maven/index.html","8f1813236635b41706e812adaec6ff62"],["2021/07/20/随机数（C++)/index.html","d0ebd98713481c242fa3cc74e8691135"],["2021/07/22/data_struct_01/index.html","2c0d8ac30d8005f06bbbfc7c8e81128c"],["2021/07/22/滑动窗口/index.html","896232a55c5d7de928047551b9c7c533"],["2021/07/26/Tree/index.html","57db807e2895c587c82e0e2209ee9a4f"],["2021/08/02/正则表达式/index.html","500a6bce47ef81510b7b584fe44176ef"],["2021/08/14/CSS/index.html","fff7c7471f88ed35b0523a88c000cd77"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","36683750a8507b95f5f808d499892a30"],["2021/08/19/Windows Terminal 美化/index.html","473621f6bb7482a8bf60d7d1a1a3a961"],["2021/08/23/EROOR/index.html","cb17859106ba88f444ce103ef6ca4e52"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","e7d0941076f6eb9482f20f99e4a61002"],["2021/09/07/编译原理/index.html","c987047bea59055e454154328af7fdfd"],["2021/09/27/网络是怎样连接的/index.html","c0658aaeba1ff3fe8acf56ed70be0735"],["2021/09/27/通信基础/index.html","9fe74730de9338557a7161c9111bb33b"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","17e945a07eb33ce86a6afd00942f266c"],["2021/10/22/vlan配置/index.html","691d3ae0162c87e3fa219847d89d8260"],["2021/10/31/实验三—子网划分与静态路由/index.html","01a934bec38b3159416c6706af306f22"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","b6fecc47e2a133d8d2af19632df65f38"],["2021/11/17/硬链接与软链接/index.html","46cd3a4f042a834ad5b5323ea6eef955"],["2021/12/01/SQL20题/index.html","e80c467868f08cdd83cd015641869b31"],["2021/12/08/实验五：Wireshark抓包/index.html","329b21f83ea6d920a39dad57b3168f03"],["2021/12/15/CentOS7搭建FTP服务器/index.html","c0f83dd878cc48eba7449e9b49cfa8be"],["2021/12/19/CentOS7 安装相关组件/index.html","d2d1f8816a5281b9f73e5e42a65036ba"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","5fc7ff551099ef01f2e49228192fc565"],["2021/12/27/Vue/index.html","3be70f92a803c804fbac271e159adfce"],["2022/01/08/ArchLinux系统安装/index.html","bf93d3a795b3a18ec7c0fdcbeb9dc5de"],["2022/01/10/ArchLinux软件安装/index.html","accb119c9d7a982cfb2e3f0cbbd72db8"],["2022/01/11/ArchLinux开发环境配置/index.html","8a30e05fe91b5ae6eafb6aa26cf0d2fd"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","b83697bf4a2880f26d6f1c1e4a2ef454"],["2022/01/22/DWM/index.html","cbcc1c1b4a2970ffc4a6376d8cc5e4f5"],["2022/01/26/MySQL性能优化/index.html","4d65d6dcffb470b39e244b025bb62197"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","bcc38728ae8ea20615338289c835e8b1"],["2022/02/27/ArchLinux安装wine/index.html","6f0042e1472b9a64f8f319c5132fdd85"],["2022/03/01/ArchLinux安装VMware/index.html","85899c9e9378932826efc0b8191492bc"],["2022/03/01/ranger/index.html","eee2ed7a6a7032b1cc4363461b7488c1"],["2022/03/02/ArchLinux PPPoE拨号/index.html","76e94ade159d7ab54cb94fd5f837691e"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","40946add7fc1fbe6bb9ad04b65eff235"],["2022/03/16/Linux文件和目录管理/index.html","3cff26179a218efca5aabb7428e226fa"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","d7a8c24977f2bf7c7abc4fe2cef4a8be"],["2022/03/20/Linux用户和权限管理习题/index.html","976e0073bb87722383d6596a7d29c097"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","3b8df0747e8b58705ca4f59aea590bfe"],["2022/04/02/ArchLinux安装MySQL8/index.html","dcb10aa4eae5c77c76d2a7184c21434c"],["2022/04/13/Linux磁盘和文件系统/index.html","a427a59f955ac77ad6d02d14286dd57c"],["2022/04/18/ArchLinux触摸板/index.html","f10f761defcd2eb915f4372eabc68f4e"],["about/index.html","af47708bd58e2c4e4afe6a4db21d4736"],["archives/1970/01/index.html","259b13b89dd84d9763a5e5e207be3125"],["archives/1970/index.html","90b0306ef569443c077b43bf7c4d57cd"],["archives/2021/02/index.html","2b82a674d2daefb634620e228a00d545"],["archives/2021/03/index.html","faf7d80264ae807dc0ce75f66e80e2b3"],["archives/2021/05/index.html","f0cdad0d90269e33d2b2154a096fd714"],["archives/2021/06/index.html","ee3f9f4b9c2c927d4294cdf04908b557"],["archives/2021/07/index.html","ec7466dbaff325f7cff26eb68d26e8c6"],["archives/2021/08/index.html","93b413c35b3fa311cbed0273f885fe51"],["archives/2021/09/index.html","dcf9f8e56b89ef6bdca1469357b76387"],["archives/2021/10/index.html","0cf902b363df8b5d554d03efdced1528"],["archives/2021/11/index.html","b4e271e2c6b450eb711fd69d2a968167"],["archives/2021/12/index.html","3af827f0e05b1c3d25aad9f202611a5c"],["archives/2021/index.html","8afd61c5edaa69ff2753a8f09df3f19d"],["archives/2021/page/2/index.html","12777672fafdc53555211c2a6e43432c"],["archives/2021/page/3/index.html","1da41bd1b25eb4ba35b25c150f77ac1d"],["archives/2021/page/4/index.html","4e1651d11f181a9419e00e9fea5a9e75"],["archives/2021/page/5/index.html","5a08cac8705100e62e1a0c3e0b0d83c1"],["archives/2022/01/index.html","0e96b4de127f31d8af7972d2a04fb474"],["archives/2022/02/index.html","2addd7b604c7de1a3fef7c010a4e2cd5"],["archives/2022/03/index.html","07671eaa2e5e68f373905df678b08781"],["archives/2022/04/index.html","237403dfff452dd04b9dab6963e0dbeb"],["archives/2022/index.html","ba621607bad324d681538bafeaa03e1b"],["archives/2022/page/2/index.html","608b883a81e76b90360d8c5d8dbb0dd7"],["archives/index.html","03bc98a52be916ba4f3b10de29b52312"],["archives/page/2/index.html","d2dbb958d090edbc7e5c2c9d56b13bc7"],["archives/page/3/index.html","bd95299965346a5666db300d91fd8b58"],["archives/page/4/index.html","6cddc8eaedb7726e194a67dc86ac942c"],["archives/page/5/index.html","0af522fb909c067c1d38807adddd2a66"],["archives/page/6/index.html","e3fdbf7f73544a6e26a4980f93d5230b"],["archives/page/7/index.html","7701f47e707411877adc53ee56f8202e"],["categories/C/C/index.html","710ce86d0535e9d3a9801af5b0535009"],["categories/C/index.html","b3447f3ec905b67814c5edd262c189b4"],["categories/Linux/index.html","07282df76df67df7160e232c68b389bd"],["categories/Oracle11g实验/index.html","abf8c62e77efc07fd38bb15446d181ca"],["categories/Windows/index.html","024e37cc57f63968eaf762318d87e829"],["categories/index.html","9c0207d7c612080478f5d7140252eed9"],["categories/javaSE/index.html","b8fc644dc831943346b3701de8d67c39"],["categories/tools/index.html","feb4e0238cb1300c381bfd4b24193f95"],["categories/wxy/index.html","2c51894110eb9fa2eb48160b5281f418"],["categories/个人/index.html","d2a915679b1e32bd592e7941bbd259df"],["categories/前端/index.html","ab83777b93d2bcf09d9080453b6eeaa7"],["categories/工具/index.html","19d0cb73e7d7465978d5f9f2bfd6ccc8"],["categories/数据结构/index.html","cf99b0910019790cebd540b873c8e2b8"],["categories/笔记/index.html","27c12875f47c0dab82ddf0e101ffe1cb"],["categories/笔记/page/2/index.html","dff5502a9aac1c46fbd8b214fa2070b2"],["categories/笔记/page/3/index.html","1cec240e2ccf6b25ff8f7e69be988778"],["categories/算法/index.html","f5f2c3c906cfb7b2f6f904261744e674"],["categories/美化/index.html","bfcc70a5238c449c448d0d2e7ff1cb25"],["categories/计算机网络/index.html","3a8846070e2b49241982b932f779eed9"],["categories/计网/index.html","54b547286a18e0608d6caa1d870c72c6"],["categories/语法/index.html","1389350dc314b34d6521212eb0c4c678"],["categories/软件/index.html","84458917834eef8b512996de2bf5dbe2"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","b8377447d1bb64fe7b01ad2cd2fb4467"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","82ba5a28218e6bcc5d6015f14ed1a533"],["page/2/index.html","65290a30a1fe5d7e8887884f364e8772"],["tags/Burp-Suite/index.html","f91c79f278c77b1e0bbaf4d18412dbf5"],["tags/C-数据结构/index.html","88e346bc41dea317677ef8d44587a776"],["tags/C/index.html","3799316e1f08ed43d447c7620b45da45"],["tags/CSS/index.html","eaced7be67603c322959dbf8f87e3a1d"],["tags/Git/index.html","a387a4c0b7502b77cfd96967d1692046"],["tags/HTML/index.html","b1bc027e0dc57d6cc8acb708c1f90113"],["tags/LeetCode/index.html","571e6d36630c40eb332ffdbf0753009a"],["tags/Linux/index.html","c4832776dbaeae9cf044fe2c8924b64c"],["tags/Linux/page/2/index.html","f8db5870c865c2c4892953f10ce44146"],["tags/Maven/index.html","6b1ef1dc9f671409f46975d8ff76d79f"],["tags/MySQL/index.html","71e299f1285f2b25323176e92264168c"],["tags/Oracle/index.html","273f2c91c89641577e75300933f48100"],["tags/Vue/index.html","a1337e813e9df705d3fccd5bc0afff6b"],["tags/Windows/index.html","588d147035523d1bf5b577abd495e303"],["tags/Wireshark/index.html","9f48ea63c97fef872132ba30b07112bf"],["tags/index.html","9e204e1971f462c612c812893723d8fc"],["tags/java/index.html","8f2de75417763abe863d9a6b1c463de0"],["tags/route/index.html","1c41f1796b130869de3d7cdacba95a5e"],["tags/tree-java/index.html","953fd55685862105fec1cef87b3f5667"],["tags/vim/index.html","9a0a16f11786ef2a71f490241bae1b60"],["tags/vlan/index.html","c77fc7b7ac95df122d23dae0d4640172"],["tags/wxy/index.html","df310b6351ffc55a454041371be74761"],["tags/个人/index.html","516b887e9ee7c12f0d89dc6550752d20"],["tags/书籍/index.html","ecd87f8094ec2fa931277e349759ae8d"],["tags/博客/index.html","8c135f5454ba5ae7bec720da3ca5d63d"],["tags/壁纸/index.html","6e5dde6e5ee64d65609196d20f4844ab"],["tags/底层/index.html","d5f2955bc7f70dfb8ce1a22acf15e290"],["tags/数据结构/index.html","e03bf682de61600d6fb5da1c0635cee3"],["tags/文件/index.html","00d28442f376d402fb62c861ad79505b"],["tags/服务器/index.html","98f14d0721b326bb68f8117e13befc1e"],["tags/汇编/index.html","36bdd8c7a7160462cc75c5307e3f2506"],["tags/算法/index.html","81f4aa874ad0984aa06993e60dd96c55"],["tags/记录/index.html","9e7ed82191d1e756e339ecd30029ccab"],["tags/软件/index.html","e72dd9f5481dce1ce52a9ef7cb66339a"],["tags/通信/index.html","0e5b7c82481aa809239e3dbaaddfcb41"],["tags/链表/index.html","549bd77db7fbeff808a20f15c8b807d7"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







