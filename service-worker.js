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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","5ca1aa528035077602955eb22009b4f8"],["1970/01/01/nvim/index.html","5244cea4875ed6bb4ac68ca8b4359132"],["2021/02/18/Git学习（个人记录）/index.html","1d1d594bf4288eb164aed67082df74ca"],["2021/02/18/Hexo博客搭建记录/index.html","677c9a933ec3fc50f901fcfae3396cb4"],["2021/02/18/IDE配置/index.html","c6daa16c043351893333b464fc4f931a"],["2021/02/18/初识汇编/index.html","17f3b75d0d82038d960f103967dab7ba"],["2021/02/18/链表与指针/index.html","2f82e632851fad84a5aac47762732cbe"],["2021/02/22/Topic LinkedList/index.html","f393f214b6ddcdf5ae1455dee97c72d7"],["2021/02/25/一些设置/index.html","3671a80671e54ca5fa27e5f4574217f8"],["2021/02/26/WXY/index.html","beb9dc4b77c80a14e88f927629a27477"],["2021/02/28/大二下课程推荐-计科/index.html","6c0df188fc469e5b06cb0d7a15486d2a"],["2021/03/04/Linux-notes/index.html","90c43954b055d9756340f3f1281ab0a9"],["2021/03/08/data struct one/index.html","dfcd49530ef5efcd93de2f55bd6c17fe"],["2021/03/17/data struct two/index.html","1fdf6abcecc275c9216c8c079fd36e17"],["2021/03/22/STL/index.html","d7dffdb6eca779897be71e2a89cb6bcf"],["2021/03/27/Battle-of-Tanks/index.html","4201e783cb28895eb01df2227e2588d3"],["2021/05/01/MySQL/index.html","58aa2da7d7525375033de7267e4b9b73"],["2021/05/09/HEXO部署服务器/index.html","6fd9f7d2e0c6156d72021a75f89181b6"],["2021/06/04/vim/index.html","ba2191327c848880e94f6f2df25950cf"],["2021/07/13/oh-my-zsh/index.html","ef03424baf4a0f7f72b01b8fd0242433"],["2021/07/14/HTML/index.html","9640b6ef1132eaa3eec9f6046ba6963b"],["2021/07/19/Maven/index.html","bc126725a57ee263d6dbac1c77a8626d"],["2021/07/20/随机数（C++)/index.html","07aa44179c1183046e494388d676f0ba"],["2021/07/22/data_struct_01/index.html","00a1c44f7fc99c88dc350717516124d3"],["2021/07/22/滑动窗口/index.html","4803a6bd6b7adf9543c4b9d37698f035"],["2021/07/26/Tree/index.html","21089e17db558f51a615be7356f37029"],["2021/08/02/正则表达式/index.html","88830b8d228f7f8c677cf769b7596acc"],["2021/08/14/CSS/index.html","8fdd9d594258408635ca4439e66b6939"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","49bf96cfe29ff4f16b587ec5b16a76e1"],["2021/08/19/Windows Terminal 美化/index.html","bb3b0438bcc51437a573ee509083845b"],["2021/08/23/EROOR/index.html","241d82b3eb627812b08256e5ceb0ec19"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","0fbc2fe74c1769c9c382603c1d3613fb"],["2021/09/07/编译原理/index.html","ea0d28e8fbbb188cc4869ac37047313a"],["2021/09/27/网络是怎样连接的/index.html","789339c231feb8411b077189c3f84c67"],["2021/09/27/通信基础/index.html","1bff2ab5145dfb063454960ce6211e4e"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","0cd0ada2745cbc508e75606e6e2057b8"],["2021/10/22/vlan配置/index.html","b0b0599c5f03f61d97807d49662aa32f"],["2021/10/31/实验三—子网划分与静态路由/index.html","e9f3e6f12ac8a11269f024b0692a45cc"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","7f22bda49b260f8695dc94f07c36c821"],["2021/11/17/硬链接与软链接/index.html","0ca9fa70c2d61bfd46123b20a422868d"],["2021/12/01/SQL20题/index.html","62429b344f5822fa98614b8c1140a686"],["2021/12/08/实验五：Wireshark抓包/index.html","95d87032d3492c2b458b569ac986af06"],["2021/12/15/CentOS7搭建FTP服务器/index.html","12ffc3d1b33a59eeacf277cc3dc4728c"],["2021/12/19/CentOS7 安装相关组件/index.html","d3f2cd7004e0d5c9876bbf78c48e3943"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","409e9649478422385c071ef531c31b3b"],["2021/12/27/Vue/index.html","fbbc5860b3b496ec78b1c8f6b7452b66"],["2022/01/08/ArchLinux系统安装/index.html","23e2beb68febba4942ba3bd60a798b58"],["2022/01/10/ArchLinux软件安装/index.html","763fdaee9c695ace7a07bd65225ef0a4"],["2022/01/11/ArchLinux开发环境配置/index.html","009d3e66f29fe8e08cd358b297896645"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","a5601135a443b8b71b0e93d0d24ce035"],["2022/01/22/DWM/index.html","ec871d5d103ddda555839a0ea3b7e85c"],["2022/01/26/MySQL性能优化/index.html","95fe4ec5e6a7b3764791a300a5cefd25"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","c514e8920973e45ec6e4a2582048e5b5"],["2022/02/27/ArchLinux安装wine/index.html","654b5da3ec974a2de898cb5a3eeba1ed"],["2022/03/01/ArchLinux安装VMware/index.html","8e34ccdd2e2d93aa96ae16e79d1760d4"],["2022/03/01/ranger/index.html","93c2a19a623aa1ea85fc3530fa7dd4ea"],["2022/03/02/ArchLinux PPPoE拨号/index.html","9bdb470f230f398f86322c844b3e75e8"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","05aeb74cc4c2c093610f301cae9b5f23"],["2022/03/16/Linux文件和目录管理/index.html","958f02afbcf5c63dd0f8cfe5deb7ee47"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","2c4a8360bfb61a794755cad661072616"],["2022/03/20/Linux用户和权限管理习题/index.html","75c3cd87b0dc8be318477ba05091f3b5"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","e451d989a44579f83755ab7527bcbe29"],["2022/04/02/ArchLinux安装MySQL8/index.html","203f67244cca81e0fdcaa2bcf32aec04"],["2022/04/13/Linux磁盘和文件系统/index.html","ed1bb0540cf4dd3fe2aabd1131938c3f"],["2022/04/18/ArchLinux触摸板/index.html","ed6182d0816abaaf8faf88cd53013ec6"],["about/index.html","1e9f2ea1ef37869118e045d803bdec3e"],["archives/1970/01/index.html","dc85b8fdddaf53ef69bae3f6b69ff4d6"],["archives/1970/index.html","108035b937b3cd97dba4be4f607e8cdb"],["archives/2021/02/index.html","0defb0d08a0e1018789af7eec4ed5b0c"],["archives/2021/03/index.html","5c6bcda49be71c429808bc374019260e"],["archives/2021/05/index.html","f2f4faeff26c6aba200c61f3b31987ea"],["archives/2021/06/index.html","4149a53664830064365afec026d38100"],["archives/2021/07/index.html","7a99581ba44e722b64d79de20c9aad32"],["archives/2021/08/index.html","ec3c548c19d61cb38adabd8dfbc27be9"],["archives/2021/09/index.html","e2b1df21eada21064422d082f84ef6d4"],["archives/2021/10/index.html","358c33e88992777a5c424ce13e4e9a97"],["archives/2021/11/index.html","f45a4c4e1d2a7be7c7fc843beba95a3e"],["archives/2021/12/index.html","041fee51c9fd0f812c91633f47a92583"],["archives/2021/index.html","bd1533bdd3a35c87d939e8983f7b9da9"],["archives/2021/page/2/index.html","db4e94673abb4be79b54d5883c805967"],["archives/2021/page/3/index.html","a16ac78600d38abf99d791de3e4b7078"],["archives/2021/page/4/index.html","44529e449722374607e3f5e70b6490f8"],["archives/2021/page/5/index.html","ad0e182ff96e24e0dae08ca005b294c7"],["archives/2022/01/index.html","072a477454879fcb2d1076ca40113615"],["archives/2022/02/index.html","c4b70e1470933e96a053b5c3b94233ae"],["archives/2022/03/index.html","d2adc5c46ac7c66ae51a1d62ff2f5423"],["archives/2022/04/index.html","fdd3a7e91f940e64f670ed4375985d76"],["archives/2022/index.html","4776d7a66b8990d17df932298072b65f"],["archives/2022/page/2/index.html","828e1881d7c5256322a07036b69e7fee"],["archives/index.html","b14a782a92f9df985ea462ae89f7ab01"],["archives/page/2/index.html","06da2f5904fabdd8b5ab1b0838d22af6"],["archives/page/3/index.html","f917ae4d88e2da1771633781d1cd2198"],["archives/page/4/index.html","c986ffb3cd8e1bf3d07cf739634ad976"],["archives/page/5/index.html","e285804574f794f3693bafd29374c3ed"],["archives/page/6/index.html","b3a6d654e4416762831f9861f51447d1"],["archives/page/7/index.html","96be9221cb4b33c2796b4bffdd6e498b"],["categories/C/C/index.html","d045b5d6d65989e472b81412b123538e"],["categories/C/index.html","e822bc843d4a3ebbc70cc5195577ccf3"],["categories/Linux/index.html","a0ef69f241fc361f126e24e41265bfd8"],["categories/Oracle11g实验/index.html","6a91ced00989de97a0677b79c78c0e4d"],["categories/Windows/index.html","bd5bbcfebaeb0582ba737aafee13a43b"],["categories/index.html","095e5c908e4699b6fe7a69e5af77a7be"],["categories/javaSE/index.html","90998eecf76402ecc3de6a26fd7dc979"],["categories/tools/index.html","c7076aeaa4d475d11cd954bc05fe1942"],["categories/wxy/index.html","360da3ea6db5ee609b89224278668890"],["categories/个人/index.html","c8c1370aee26c680c0c399a11d4c31bc"],["categories/前端/index.html","48d3ab6d2629a4e60b13182cf3879767"],["categories/工具/index.html","94dfb8523e651a436d3309510f27e8c7"],["categories/数据结构/index.html","5085bf3f3c4cf03b7990daaeeb48f640"],["categories/笔记/index.html","3bd68c05267542279c59ce12482d3b5c"],["categories/笔记/page/2/index.html","4b645fde2a065e8ce0199a8a5b2f9e1d"],["categories/笔记/page/3/index.html","8e6cc1d2209e3a49b9378b5f24d625dd"],["categories/算法/index.html","ee3929401e751f2090c0a57cbb5aeb5d"],["categories/美化/index.html","bc1be8f2ab216f380fb5be4925544795"],["categories/计算机网络/index.html","a042502b15f0b3b98c77bfb9d1b67e26"],["categories/计网/index.html","d1e746b6e0df0af0849d0f496ee55322"],["categories/语法/index.html","5c35836d53e33f446d357095f274f607"],["categories/软件/index.html","20300fb2852e79e0b5044233932971d0"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","cd5267a8b8c8bc9e63864017a508a7ea"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","617ba1684ca7bf32555f610f15e4ff52"],["page/2/index.html","61fa258a16b086f2eec07b31659e98ae"],["tags/Burp-Suite/index.html","1066923495fa1fa6393aa980c20d08d2"],["tags/C-数据结构/index.html","b543c70fb7a8fe6cc2c3792f5da01f2b"],["tags/C/index.html","58976988f4b2d1bdee1a3a6375919678"],["tags/CSS/index.html","224f5c3c0418328becfd522a5d8e1425"],["tags/Git/index.html","9ba493fc236789f63b324439525eeb1a"],["tags/HTML/index.html","239a10b1e18217fac20991226a1a5e57"],["tags/LeetCode/index.html","57bf089a9a56c0a5ff8eea857aaec7fa"],["tags/Linux/index.html","867ac3e4102e48984de07a60bac59a11"],["tags/Linux/page/2/index.html","cbb9be9ca038115794b1f5eedc81449f"],["tags/Maven/index.html","b42786513561e77e5d1c98b2411adeb5"],["tags/MySQL/index.html","cf102045720175e35012e1033f5e1320"],["tags/Oracle/index.html","ef98b23af480e4ea9c27d52cf47aa2b5"],["tags/Vue/index.html","d24a9bcd0dc23515ba7a82feb0c5406b"],["tags/Windows/index.html","e580ad747b92723428ef2acc24d8a061"],["tags/Wireshark/index.html","f9a538c5c12bbdd8529b0c97689ed146"],["tags/index.html","d49c028a8798e0bc444d3f358ff4c9d4"],["tags/java/index.html","cbb6a568e0fa7767020699a5cd2df167"],["tags/route/index.html","7b5e6adcb8e3c3a96728fe1c066a6441"],["tags/tree-java/index.html","cff0fc86b0638348be50b68852d26f4f"],["tags/vim/index.html","12982e32d260e5e87fc080a74197ab64"],["tags/vlan/index.html","2687efb93034a849e47c676e687cb78b"],["tags/wxy/index.html","8f7151e13f4617eab805d9cd90a304a9"],["tags/个人/index.html","e9aa4faf823963fcd6c6cfaecca5a9b0"],["tags/书籍/index.html","273bfd8e6386e29c4dd2395cdaf94a26"],["tags/博客/index.html","6d6c019baf51635e3404a6e7017e9c7b"],["tags/壁纸/index.html","47ca8ad0bc3c98a0a818706deea8a018"],["tags/底层/index.html","ee7840636a1d9c9797008e312d4ce1a1"],["tags/数据结构/index.html","0a70764f845bffc39c1fc4610ff2c6b7"],["tags/文件/index.html","5cc149f6b13fc6949ce4a2f68bad8ded"],["tags/服务器/index.html","9fbb55a4ee9a44da25c4cc6d159b44a6"],["tags/汇编/index.html","64ca06b88cea45ea06e8a442d18274a0"],["tags/算法/index.html","9e81427e8ec5fb4c98bb056f9463e337"],["tags/记录/index.html","97683f14cbe037ae5e4ca7caf94ee12c"],["tags/软件/index.html","e7fa9bbdd1688c7d251ed020896013c2"],["tags/通信/index.html","c5c3c42e876db9851755a5e82febaeac"],["tags/链表/index.html","9bb6ff5abaf6418ea9376567294d2d35"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







