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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","5601401028c2d79aedd251f7c2f77df1"],["1970/01/01/nvim/index.html","d24a4bd74d6d138ddbb98c0e53b49332"],["2021/02/18/Git学习（个人记录）/index.html","3724f4cd5a086cf327073620fdc06ea3"],["2021/02/18/Hexo博客搭建记录/index.html","486175bac5e4635b84317688642b117b"],["2021/02/18/IDE配置/index.html","2ccdc5834256bb826e747b6ed4623b30"],["2021/02/18/初识汇编/index.html","0b3f633699512e26273dbe12726f9c19"],["2021/02/18/链表与指针/index.html","13bfee38bb9c9dcee89b91814a1d4d6c"],["2021/02/22/Topic LinkedList/index.html","ac5882b1e078932a6a96e9e6385014bc"],["2021/02/25/一些设置/index.html","a2c18583de65c78c09571aa76c911b72"],["2021/02/26/WXY/index.html","8a235b6adf4284c233c28959f90d38f3"],["2021/02/28/大二下课程推荐-计科/index.html","a24e9709dfc75afddbc4684cdc64406c"],["2021/03/04/Linux-notes/index.html","6373853b198ed9192a22b10d3cfb1d55"],["2021/03/08/data struct one/index.html","7e035e926280c098f239d13ab15ab7cb"],["2021/03/17/data struct two/index.html","43b9f835e72f79fed83ae5c0b32433d7"],["2021/03/22/STL/index.html","658b7e7c9fc6ed0c8bf4ae4802d0e3fd"],["2021/03/27/Battle-of-Tanks/index.html","2406a707f6735271429fc9a0dc60cc03"],["2021/05/01/MySQL/index.html","97c4d3fddaed07b554bf8b7123978241"],["2021/05/09/HEXO部署服务器/index.html","699734c43a83f22d1636e63a5225023c"],["2021/06/04/vim/index.html","1e32402361b13137d57455bb6834a7f3"],["2021/07/13/oh-my-zsh/index.html","86c3c52ca0e66e1d3ccc71b4dbbb7f1a"],["2021/07/14/HTML/index.html","d659d2191c09311cec54fd5ff55aebbf"],["2021/07/19/Maven/index.html","6e6d659100be8e027b6dee6063d082a9"],["2021/07/20/随机数（C++)/index.html","22c86f3c00fe44841cdcc1c535c190b0"],["2021/07/22/data_struct_01/index.html","ddc8552a3588bfcb7aac98ddfebf43cc"],["2021/07/22/滑动窗口/index.html","e2ad1d417a084a0993560cbbd074cf11"],["2021/07/26/Tree/index.html","e24f457ca80cdd1e1b5b4172327983ac"],["2021/08/02/正则表达式/index.html","06731f5094ced9827f310a4e58e259bb"],["2021/08/14/CSS/index.html","e84969c59127075882075899d7f9a3fe"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","8097f4dadd9de68ca82e2b691a2375ef"],["2021/08/19/Windows Terminal 美化/index.html","55d1cdc318adeba30b433f6b1547880b"],["2021/08/23/EROOR/index.html","565a26ba62ab24bb632874676add6c53"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","9d7bc4734a1e63f8808f90438670e687"],["2021/09/07/编译原理/index.html","2b83ee5457ce7c46b8acab565778f4ee"],["2021/09/27/网络是怎样连接的/index.html","9119d2eef22d3f9bfd92ca77c1341f4f"],["2021/09/27/通信基础/index.html","26812d939590e427419b907d146db887"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","94c2bb7989b2f3d56eb697e526e992e9"],["2021/10/22/vlan配置/index.html","59d22d486cb84cb0a5f49c8288f65cbf"],["2021/10/31/实验三—子网划分与静态路由/index.html","57ed51da003f3861fe20e3ca746c7da5"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","035cbfe6e39415353c024f331eb09a92"],["2021/11/17/硬链接与软链接/index.html","e388bff060b52db96f5aaaaaf72bdcbd"],["2021/12/01/SQL20题/index.html","e05e418564bc4ef3530d14e4eadff80b"],["2021/12/08/实验五：Wireshark抓包/index.html","5540c098c3f733002a81f8e38663e2a6"],["2021/12/15/CentOS7搭建FTP服务器/index.html","aa8788c361a501b636758d09245d8dd9"],["2021/12/19/CentOS7 安装相关组件/index.html","e69b18f104d6470662a3e6de400e37f2"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","4481fd085a4b539a6eca38d1de7ae275"],["2021/12/27/Vue/index.html","60bf5781f1442ef745780071c80aa4ce"],["2022/01/08/ArchLinux系统安装/index.html","a79cb0559a42b570a3a6e25dd77b4f82"],["2022/01/10/ArchLinux软件安装/index.html","8e95c24f8dda5340d7fdb583e2276529"],["2022/01/11/ArchLinux开发环境配置/index.html","e6b3a6bef510ca86390530139f7c9ffb"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","d664c636e0da048d10655c3616104e00"],["2022/01/22/DWM/index.html","0d837edaf0d341a6c5cfdb3c032a430c"],["2022/01/26/MySQL性能优化/index.html","2e8f435622fcbb5f9a0b0192f019bf6b"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","c6875863711c093515af08445e1af80c"],["2022/02/27/ArchLinux安装wine/index.html","cddbe8dbf1a7440883297d8d652b26ec"],["2022/03/01/ArchLinux安装VMware/index.html","ba84b4d5ea0a3a31ceaa1040cb56a0ac"],["2022/03/01/ranger/index.html","c51a4d753894d9fa2d22af857b1753bc"],["2022/03/02/ArchLinux PPPoE拨号/index.html","b2f5565c2e8b4073d412aa530dbddc61"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","4e9c25a62db9a53c7d3694cabeaec05b"],["2022/03/16/Linux文件和目录管理/index.html","deeb82be0ed89470c2d6616ab15c526d"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","1b53d53d71e15f97f7a114e62c5d49c1"],["2022/03/20/Linux用户和权限管理习题/index.html","398ca4e0d3a73b33f118594b29c19e75"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","3376b13deb4ddaa28e99988bac54bde7"],["2022/04/02/ArchLinux安装MySQL8/index.html","77bf907d660e52088c9c7525004ced25"],["2022/04/13/Linux磁盘和文件系统/index.html","83b85b1bb370a1984867dc48240a230c"],["about/index.html","550f918326e832030c046cc382179354"],["archives/1970/01/index.html","9b6a651203dbaa0d5a72cf5581ff1387"],["archives/1970/index.html","fbb68f29a86d1d68c865d7e1c71d3eaa"],["archives/2021/02/index.html","f8f54634244cd784291d225e5848a627"],["archives/2021/03/index.html","0a499ac69e54c03a0d8e8927fd674939"],["archives/2021/05/index.html","6140efa209c5e44247937fcde29d073f"],["archives/2021/06/index.html","adad6159784c445e84a4e5514f00f77d"],["archives/2021/07/index.html","3c5b842a180046f47ce85b6da349add3"],["archives/2021/08/index.html","a4d7c8acf98edfdeb41e8c51b2778bc4"],["archives/2021/09/index.html","9c655ea81fb304af8c07e2afdac380bf"],["archives/2021/10/index.html","82f3e3250b3716d4b9d1dab85c3856dd"],["archives/2021/11/index.html","69d7090a610e7c07f7316dc009df24a4"],["archives/2021/12/index.html","e411617d81cc1956aefae1139e0a9fd6"],["archives/2021/index.html","f4f02ae14f577c1536e91d336a71b6cc"],["archives/2021/page/2/index.html","a2b19151e2ba2c7377d7131eff03058e"],["archives/2021/page/3/index.html","6c53c0df8001bb200fbcab1409326257"],["archives/2021/page/4/index.html","ea477fef01c5162a1ec48cf0597bb7ad"],["archives/2021/page/5/index.html","e2d5beebbe5e2def6cfaa9b0b75b5392"],["archives/2022/01/index.html","1d847cfb0597aaeeabe436925ede58ea"],["archives/2022/02/index.html","75a6ea08a2162d8081473c6863498c5d"],["archives/2022/03/index.html","315ce424c9a5f5db7a9fdf507b4bc897"],["archives/2022/04/index.html","7dec59729e8a932404106d653d0d6c3e"],["archives/2022/index.html","89b9ef7a62da1712bdb9f205950df3c5"],["archives/2022/page/2/index.html","eef547261bef827d59ab3fa10013427f"],["archives/index.html","55d018d6188e8da446ba6389918379f9"],["archives/page/2/index.html","999138c2921b11881a4bbba9d7f5fc97"],["archives/page/3/index.html","a305c8353b28c7695dcf195e6c60b3b0"],["archives/page/4/index.html","4cba1e204bbec391311af0b39e43cb7a"],["archives/page/5/index.html","9605a03aee41061ff762bebf961d9771"],["archives/page/6/index.html","2eb22d82fc096007bfa581c2c4c9ca93"],["archives/page/7/index.html","7ce5504670669c49f64161e721ac55ec"],["categories/C/C/index.html","a6ec19aed5b341e12a9966ff0f3587cb"],["categories/C/index.html","75c7242a5cb6233df356fa02994fa808"],["categories/Linux/index.html","b383a719119cff1e8c78ab48a63f949a"],["categories/Oracle11g实验/index.html","171e9d2072088b64345b8e5a309c922a"],["categories/Windows/index.html","7bc99c28012ff82e291d7068de3aff8a"],["categories/index.html","e01ee37d57aa7fa219af73a25781b37e"],["categories/javaSE/index.html","fb5c549fc9854963edb224cce7a14f41"],["categories/tools/index.html","2bfcc2c1ea74e1e4ada1c07ec641f66c"],["categories/wxy/index.html","d5423a62d181ce5bffe5ec66cbca5c64"],["categories/个人/index.html","a524e804f107a2d6405a8d21ab964fa0"],["categories/前端/index.html","674efa6ed7788e346a40183f2a22a074"],["categories/工具/index.html","6e3383d66853ea96850afa141cf26c08"],["categories/数据结构/index.html","71d53faac1219ec2e4f8cb60a39cbaf9"],["categories/笔记/index.html","4619b0d5648cf05965354881ba6a64ac"],["categories/笔记/page/2/index.html","650a1280e51375269fd692b3449a791b"],["categories/笔记/page/3/index.html","6985cdb0643be8f2f9dabfe2834d9d22"],["categories/算法/index.html","89bed2f682d4e78fe95f8cff1abdd730"],["categories/美化/index.html","343de448e0048cb64a346a10c6aa798d"],["categories/计算机网络/index.html","7dabd9430450c2047832d194c3340344"],["categories/计网/index.html","2de66385582200db72066777afea0696"],["categories/语法/index.html","6a429d95be468ed3762150d57d3b6446"],["categories/软件/index.html","7bef9d27a3d082c12553a0868fb26608"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","7a0f68cc4dd5e0eea985eed59b8520e3"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","af27fc82aa422430d75cb4d1b8530804"],["page/2/index.html","5853ae0567a1bf21ce215d0c5b458f7e"],["tags/Burp-Suite/index.html","def83b0018ff67da8fd6c7a1cf63eca9"],["tags/C-数据结构/index.html","609d4dbd7393775a8724b00fa0f84102"],["tags/C/index.html","98ac82e8a3ed6147aaefe58ad2724138"],["tags/CSS/index.html","d926fa6736828b8cae31ac678bfe6b8a"],["tags/Git/index.html","56f0b84eeed829182c828c94787d5b6f"],["tags/HTML/index.html","450ad180745c9b6496b3b516e5316b60"],["tags/LeetCode/index.html","4d1183a0cab0d415acb9a5df38f71eb9"],["tags/Linux/index.html","90a6a9674093aa912677dc446d755176"],["tags/Linux/page/2/index.html","681d17c785c258e130874a3585ec08ed"],["tags/Maven/index.html","2c0870f1d6bbe538451651d26ecb2d9a"],["tags/MySQL/index.html","ab44caa53ac1495688a15652a80c6c8a"],["tags/Oracle/index.html","7a5e06184dfb68ffac0b33690f01307e"],["tags/Vue/index.html","aeba5984f794a6101fb531888de76ac5"],["tags/Windows/index.html","b6cc11f27230f942d359f62179600e43"],["tags/Wireshark/index.html","66c0d8c12876cc8c4280d31d8f5f0ffd"],["tags/index.html","35c2d6294eea28466a5e6777ed0612e0"],["tags/java/index.html","6a7844acbed9334425d943f7ba9e944e"],["tags/route/index.html","f60396965ecc53394f5dd46c8a34f9a6"],["tags/tree-java/index.html","f6fb20c529afa627c8ce99fa8170c3ea"],["tags/vim/index.html","f946f5ab4b0b21d06ce76f91ba3e0e33"],["tags/vlan/index.html","3c14fc2df52a200cf21aaad8089aa9c9"],["tags/wxy/index.html","f75e934295d20b86822f43b9f6eb98f6"],["tags/个人/index.html","3d49ebc8c04aa23d9c0a2ea9a06ec1d6"],["tags/书籍/index.html","1b2acec69738730ba8e1c1c8da0c788d"],["tags/博客/index.html","cd0e9b97a759a6272ff64517fd062da4"],["tags/壁纸/index.html","399684828bb8c80453726b6e33715620"],["tags/底层/index.html","dbb2b3434728446582229faa1d834109"],["tags/数据结构/index.html","6ab75b1818a4507b066ab1ae9422cac4"],["tags/文件/index.html","d21a4e8ae9b7ff3a07b0bcc42b75eaf5"],["tags/服务器/index.html","39014dcea35c33cf25419fc772dfac47"],["tags/汇编/index.html","77d47d2e7fe298d3693dba18f0052328"],["tags/算法/index.html","d1f9397c0894c143812ded61ebfaea41"],["tags/记录/index.html","8365d3b83cb09841354b51ecb7c4b112"],["tags/软件/index.html","80d932931bf9ccd1f57ed0f378a99607"],["tags/通信/index.html","83278e1c14c2e304bd322891d9342fa4"],["tags/链表/index.html","60be53a5afac76f9b556a1a857f2324f"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







