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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","ed52f7b1c9b6f8dcabfe5eb4d99d189c"],["1970/01/01/nvim/index.html","7ff5bf554716ae99a4bd36103df969df"],["2021/02/18/Git学习（个人记录）/index.html","62ed6a7aad4ba85f333d1b77be33246a"],["2021/02/18/Hexo博客搭建记录/index.html","cf2853dc2e3e6c7e2c369278f43d1de0"],["2021/02/18/IDE配置/index.html","8baace280b2f3b0805bfd2f3e66f61d5"],["2021/02/18/初识汇编/index.html","4f0ddbf973fec06b02e992e60c9fd939"],["2021/02/18/链表与指针/index.html","659300695b33d350819718dc9ae56736"],["2021/02/22/Topic LinkedList/index.html","39178072b04aeac56e5980de152c17f3"],["2021/02/25/一些设置/index.html","9fae8f66ae17b760a597f206bac83bc1"],["2021/02/26/WXY/index.html","df29854a0bab272d2cc09c40652877bb"],["2021/02/28/大二下课程推荐-计科/index.html","8956a5258e4295239648933a56b56094"],["2021/03/04/Linux-notes/index.html","a77ecc101d96e5cba31f5334f7184b2a"],["2021/03/08/data struct one/index.html","b929b5ecd111d478c7ad081f5d878bf9"],["2021/03/17/data struct two/index.html","c599b75e3414883ec95ea8f25d01a7c7"],["2021/03/22/STL/index.html","6fd3589597fa3ec94647298b9193692e"],["2021/03/27/Battle-of-Tanks/index.html","e7e9a50499e024523dcf9859da0aee2f"],["2021/05/01/MySQL/index.html","2bc04108beb7de93b9b700c54f5f9509"],["2021/05/09/HEXO部署服务器/index.html","453e98e9cd660eb72e7c96cc4fc7142f"],["2021/06/04/vim/index.html","dfc5180913d8a04b228d099bd022882a"],["2021/07/13/oh-my-zsh/index.html","a6cb227958d6837b413766ec643735bf"],["2021/07/14/HTML/index.html","2af887354743ba9ab66b8683144378af"],["2021/07/19/Maven/index.html","13392191f2f620a8046257142d2884f0"],["2021/07/20/随机数（C++)/index.html","d41ddfc16b69e479a00189bdccdfbaba"],["2021/07/22/data_struct_01/index.html","f9412650b404bbfffd431e185ed97237"],["2021/07/22/滑动窗口/index.html","498b49b63b6392c5d10689e320e2a5a5"],["2021/07/26/Tree/index.html","ff2783ac4553d313a887030969ca2754"],["2021/08/02/正则表达式/index.html","934662979e8ba2b998c0b3cde94fbc55"],["2021/08/14/CSS/index.html","f96e09ede2ad19fbe3fd6ee11beeb93e"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","68b49bff83576d58376d40fc8caeb0ba"],["2021/08/19/Windows Terminal 美化/index.html","83f71c537c8ffd7b6eb8678322b57b23"],["2021/08/23/EROOR/index.html","4274184723b37be3a7c344f0378f6c12"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","f4075938b2dd6823ec7bea9959e8eb6d"],["2021/09/07/编译原理/index.html","913a94704c76ba0d838ec1b6a40a3f0b"],["2021/09/27/网络是怎样连接的/index.html","25cc14d5c0ddfeda59c67380ec492f17"],["2021/09/27/通信基础/index.html","1e1f244d45e0bb8427cf7526eb9aab13"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","22fcde0ce6d774ae7deb8343674493d8"],["2021/10/22/vlan配置/index.html","9c8cbf0e4f6efadfc2b2232d61834926"],["2021/10/31/实验三—子网划分与静态路由/index.html","834ca4f9e5e587769ca2cc98fe0363bb"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","79c38a284a38f7a08973fcb34c1b41af"],["2021/11/17/硬链接与软链接/index.html","d7a785605b6753a6dcbe6d9180662560"],["2021/12/01/SQL20题/index.html","b0607841dcc8230ca3244e1524a53990"],["2021/12/08/实验五：Wireshark抓包/index.html","8bd65624c666f3d5ff52cf1ec5ddfba2"],["2021/12/15/CentOS7搭建FTP服务器/index.html","61011df9f551da552543587309d32b59"],["2021/12/19/CentOS7 安装相关组件/index.html","fce4f3bdcbd5410b942360a8399b9f04"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","e36c68b83aa8cca48a4e7f0eff744d87"],["2021/12/27/Vue/index.html","77fab9a8c9c201c6d7f14b21e4027a7a"],["2022/01/08/ArchLinux系统安装/index.html","88e87f230871266057c5438b3534fa0c"],["2022/01/10/ArchLinux软件安装/index.html","4791f1fa3d4744f54168e1ace632b05b"],["2022/01/11/ArchLinux开发环境配置/index.html","c5a979034d6d990a953805b9a1bf7660"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","a08e64b3fd54ef0fc41747cb03910f3f"],["2022/01/22/DWM/index.html","2e0e3a4f4e4ec2fbce58f24a5cee9a6d"],["2022/01/26/MySQL性能优化/index.html","1850f121f828f9ec0853038d0959c322"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","b1be3b634bbc9ba9bf17463caf514480"],["2022/02/27/ArchLinux安装wine/index.html","15cb563590809334d7a7bed1fc107d3e"],["2022/03/01/ArchLinux安装VMware/index.html","59d09de835f67a3925b0ca8f3ae1f943"],["2022/03/01/ranger/index.html","f5518c69afda5cb3dcccaf07643de691"],["2022/03/02/ArchLinux PPPoE拨号/index.html","5f17e709b390863ab0ca0a3c0c5b59cc"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","47cea91a9bf6a50068f7be2fad9e33f4"],["2022/03/16/Linux文件和目录管理/index.html","1c0a13cdb5b2bd27339e3c115f0bc6ef"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","e67daef16e2020dea979b71f62db71bd"],["2022/03/20/Linux用户和权限管理习题/index.html","1967d286a1d16d8b37c0c5b2ad47e37f"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","7f792f43cadaa98ffb62f0c8d57defee"],["2022/04/02/ArchLinux安装MySQL8/index.html","d0c258fedc9ffe228bc3a5fc7c3fb2e5"],["2022/04/13/Linux磁盘和文件系统/index.html","4b0abc44adca97db99a7333f14c050e8"],["about/index.html","f01b92aaa0b170e26916b7092aa2807d"],["archives/1970/01/index.html","6abbd9b9586af46a2fd9aef50cf76ff0"],["archives/1970/index.html","6c0cc607af0b9a4ceb5c86c9554771a5"],["archives/2021/02/index.html","bf6e2e08e7a6339fa9450268902a777a"],["archives/2021/03/index.html","1f4455daa87005f735bd7765ae8441bf"],["archives/2021/05/index.html","9b263be62181545d11bb5facacf4fad7"],["archives/2021/06/index.html","73552d97edb2b0ffa2dc62e5784012d5"],["archives/2021/07/index.html","45b3db92b9931105ed4d4ad47de6c99c"],["archives/2021/08/index.html","60d47f99ea0dc1e29dc4599358ff5fd1"],["archives/2021/09/index.html","41f99e3064bb478a27fe5f1d9a5922b9"],["archives/2021/10/index.html","166b52c5bc8e9d08feba47ac7c21022d"],["archives/2021/11/index.html","d95c88f21d75f501981b40e97f9f513e"],["archives/2021/12/index.html","0f784dfe0c0ebd48785b87f9c1dc30ab"],["archives/2021/index.html","ecf601e166c60f397ceb4dd221da2363"],["archives/2021/page/2/index.html","5fd97d02a0025dfa6cf2f40c62260139"],["archives/2021/page/3/index.html","2ad81c7b851e38d96b09bec7b45f38b1"],["archives/2021/page/4/index.html","420c1add5d0ade03ecfa5fb479011a93"],["archives/2021/page/5/index.html","9d4e3ca2d1842e5755d336db189496bd"],["archives/2022/01/index.html","8b371694524ff9bd08746bb917896664"],["archives/2022/02/index.html","781e1c1635f32645aa3b1bc65c09e549"],["archives/2022/03/index.html","d37a104647198f6e8fec31f93c0c11da"],["archives/2022/04/index.html","5074b660f486e3ef81eee7f567bc92cb"],["archives/2022/index.html","babde19bea8758838b2d976c97695ba8"],["archives/2022/page/2/index.html","aba2aa0d20d1aaa7eb3c6542e5be8097"],["archives/index.html","a8e23af58d510f7c84a9dd60e5f158c9"],["archives/page/2/index.html","60281e9b0c9fb04698b0fb7e92e17bf5"],["archives/page/3/index.html","1e50f8c60642565dc0ab817ce6e9c10c"],["archives/page/4/index.html","dc8023569810cbc7291c767a00851713"],["archives/page/5/index.html","6c9f62be0c54f3272d1e443bc4a721f3"],["archives/page/6/index.html","659dc472c03a69f34727bbb9af909df7"],["archives/page/7/index.html","849eefa6e092df5e88a1c3063a587d36"],["categories/C/C/index.html","4d5f2c7b4a2010d4f2a2575692cc9971"],["categories/C/index.html","4f5ede710a7969d3e1aafa2d388ecf71"],["categories/Linux/index.html","2f11ffb15596efb3a7aa82e8721e86c9"],["categories/Oracle11g实验/index.html","1da14f7b9ea53dfa559123be8c7d02ff"],["categories/Windows/index.html","05b28ce9d5943fa4306064d7db1e07c5"],["categories/index.html","76040622b627ef99aa7ec963f495da1e"],["categories/javaSE/index.html","3affa71cf0ce95dfb5a7bc78a7978de3"],["categories/tools/index.html","7a5e9b77f55065f861a17284099b03b8"],["categories/wxy/index.html","7fd7586870bd9efb8df050a28d97cbc3"],["categories/个人/index.html","e067939ba7188add502ba29d2d7b103e"],["categories/前端/index.html","d106c88a9f253f8e191513a862ca1e7a"],["categories/工具/index.html","4bcd6b318bc1b04cfa47fd78216c173c"],["categories/数据结构/index.html","9920da88e88e9c16e1cf68174e6ab6c4"],["categories/笔记/index.html","5a2c1ac3ddf4f955aee8f446254767ce"],["categories/笔记/page/2/index.html","ae71e657d47b99040daff145b44db2d1"],["categories/笔记/page/3/index.html","7d3c6aaacc2cc8820daf3f6a158665fd"],["categories/算法/index.html","f634c7b8b8afce2f54cd3b8c2ee671c7"],["categories/美化/index.html","7cc8fe11edd4e2490edba6dd538b6266"],["categories/计算机网络/index.html","a2860312353638ba30d6fb242e79e76c"],["categories/计网/index.html","8e8d9445ffe99abe8f771205df4c2c5b"],["categories/语法/index.html","5a7125a59d31a1b4b2017d33a94844c9"],["categories/软件/index.html","136f994e6874351d5418208cc662a42f"],["categories/��/index.html","2e00892c225522bf0cf6ab2ee0f13ecf"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","07d3021aec241137f368368b33caf679"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","64c5b47d44a3b4d360c1d5385f1aebd4"],["page/2/index.html","90608e5c84f4fa416185763c2bb615ea"],["tags/Burp-Suite/index.html","e18b018dcf7c76872390e64329c96151"],["tags/C-数据结构/index.html","d66da528ab749ea20d1591e47dafdc41"],["tags/C/index.html","9bbaaea0415bd73bb755ee86c2a723aa"],["tags/CSS/index.html","290d411692108bef4de088594939dfa9"],["tags/Git/index.html","1e65d24b108abdb4850fb80f618d04ed"],["tags/HTML/index.html","34d510a1a5c4d51a788513367672231f"],["tags/LeetCode/index.html","37c89fab6b8fb1db3d23b471952acbf3"],["tags/Linux/index.html","db829f1a881df574691a6d898f031a13"],["tags/Linux/page/2/index.html","fbaa31c1882d7021d0e97c152fe6001b"],["tags/Maven/index.html","03e983622cc568cc90d20140d0668e75"],["tags/MySQL/index.html","414c923ccb8cd53a589bb257c620faab"],["tags/Oracle/index.html","b18a9bb8224f08311e4fb96866dafc75"],["tags/Vue/index.html","8ac3dd693cce6f9bab23520389cb557c"],["tags/Windows/index.html","9b407066b224f1026e17228adff94b2f"],["tags/Wireshark/index.html","664b0f85e0c70907ae7292f8c5bf6ac2"],["tags/index.html","8b529e474010d90e087c926f72e47614"],["tags/java/index.html","eea4732b20382ca7c9e39c3f767365c8"],["tags/route/index.html","9019c5a359d6d5f7c8039d425efc9f8d"],["tags/tree-java/index.html","1672641e0f2ff4eeec107f8ef17bb427"],["tags/vim/index.html","6056d12adbfeb849cb38cd550b0465d8"],["tags/vlan/index.html","2fb83ace6289f8fe3fc60971f741af2c"],["tags/wxy/index.html","9c8f6946134579a49625772ed7537216"],["tags/个人/index.html","8e5cbb020f5e68f0c45dddcb46efe0a1"],["tags/书籍/index.html","23606917eae94ba8beb8b2347fd5c0d1"],["tags/博客/index.html","b62054694827accb87c4b9f3d9822c9d"],["tags/壁纸/index.html","e9a4bff5ba3b7dd74b8f6cadbce13f17"],["tags/底层/index.html","7f1d7da15c8f3decc67d1063dbac42d6"],["tags/数据结构/index.html","72fb9bb1da6a4b648bf1a67a37c9de08"],["tags/文件/index.html","dd694507b967e6ba0815681afaa69e9e"],["tags/服务器/index.html","08b0b2c8eb5e54089b2fdc5cfb2a4598"],["tags/汇编/index.html","79698107e6c570c49fdc8112bc4c5f33"],["tags/算法/index.html","0f534f60684966b018ab6f4550aaee5d"],["tags/记录/index.html","7aac21d94deffa8929719c6bb743661d"],["tags/软件/index.html","379a34ac6887b0896de3bab5d8b1b210"],["tags/通信/index.html","ebc010afe8b3b90c0ffa95e386b2cc28"],["tags/链表/index.html","5e3dc40a63d697e0fb160099087a6037"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







