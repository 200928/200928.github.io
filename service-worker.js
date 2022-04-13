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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","5601401028c2d79aedd251f7c2f77df1"],["1970/01/01/nvim/index.html","d24a4bd74d6d138ddbb98c0e53b49332"],["2021/02/18/Git学习（个人记录）/index.html","d6f472d0fd3623402c58c5098c41e9ee"],["2021/02/18/Hexo博客搭建记录/index.html","486175bac5e4635b84317688642b117b"],["2021/02/18/IDE配置/index.html","2ccdc5834256bb826e747b6ed4623b30"],["2021/02/18/初识汇编/index.html","0b3f633699512e26273dbe12726f9c19"],["2021/02/18/链表与指针/index.html","13bfee38bb9c9dcee89b91814a1d4d6c"],["2021/02/22/Topic LinkedList/index.html","ac5882b1e078932a6a96e9e6385014bc"],["2021/02/25/一些设置/index.html","a2c18583de65c78c09571aa76c911b72"],["2021/02/26/WXY/index.html","8a235b6adf4284c233c28959f90d38f3"],["2021/02/28/大二下课程推荐-计科/index.html","a24e9709dfc75afddbc4684cdc64406c"],["2021/03/04/Linux-notes/index.html","6373853b198ed9192a22b10d3cfb1d55"],["2021/03/08/data struct one/index.html","7e035e926280c098f239d13ab15ab7cb"],["2021/03/17/data struct two/index.html","43b9f835e72f79fed83ae5c0b32433d7"],["2021/03/22/STL/index.html","658b7e7c9fc6ed0c8bf4ae4802d0e3fd"],["2021/03/27/Battle-of-Tanks/index.html","2406a707f6735271429fc9a0dc60cc03"],["2021/05/01/MySQL/index.html","97c4d3fddaed07b554bf8b7123978241"],["2021/05/09/HEXO部署服务器/index.html","699734c43a83f22d1636e63a5225023c"],["2021/06/04/vim/index.html","1e32402361b13137d57455bb6834a7f3"],["2021/07/13/oh-my-zsh/index.html","86c3c52ca0e66e1d3ccc71b4dbbb7f1a"],["2021/07/14/HTML/index.html","d659d2191c09311cec54fd5ff55aebbf"],["2021/07/19/Maven/index.html","6e6d659100be8e027b6dee6063d082a9"],["2021/07/20/随机数（C++)/index.html","22c86f3c00fe44841cdcc1c535c190b0"],["2021/07/22/data_struct_01/index.html","ddc8552a3588bfcb7aac98ddfebf43cc"],["2021/07/22/滑动窗口/index.html","e2ad1d417a084a0993560cbbd074cf11"],["2021/07/26/Tree/index.html","e24f457ca80cdd1e1b5b4172327983ac"],["2021/08/02/正则表达式/index.html","06731f5094ced9827f310a4e58e259bb"],["2021/08/14/CSS/index.html","e84969c59127075882075899d7f9a3fe"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","8097f4dadd9de68ca82e2b691a2375ef"],["2021/08/19/Windows Terminal 美化/index.html","55d1cdc318adeba30b433f6b1547880b"],["2021/08/23/EROOR/index.html","565a26ba62ab24bb632874676add6c53"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","9d7bc4734a1e63f8808f90438670e687"],["2021/09/07/编译原理/index.html","2b83ee5457ce7c46b8acab565778f4ee"],["2021/09/27/网络是怎样连接的/index.html","9119d2eef22d3f9bfd92ca77c1341f4f"],["2021/09/27/通信基础/index.html","26812d939590e427419b907d146db887"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","94c2bb7989b2f3d56eb697e526e992e9"],["2021/10/22/vlan配置/index.html","59d22d486cb84cb0a5f49c8288f65cbf"],["2021/10/31/实验三—子网划分与静态路由/index.html","57ed51da003f3861fe20e3ca746c7da5"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","035cbfe6e39415353c024f331eb09a92"],["2021/11/17/硬链接与软链接/index.html","e388bff060b52db96f5aaaaaf72bdcbd"],["2021/12/01/SQL20题/index.html","2f82c719d73fac1ed7c8a5d23237e38d"],["2021/12/08/实验五：Wireshark抓包/index.html","5540c098c3f733002a81f8e38663e2a6"],["2021/12/15/CentOS7搭建FTP服务器/index.html","aa8788c361a501b636758d09245d8dd9"],["2021/12/19/CentOS7 安装相关组件/index.html","e69b18f104d6470662a3e6de400e37f2"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","4481fd085a4b539a6eca38d1de7ae275"],["2021/12/27/Vue/index.html","60bf5781f1442ef745780071c80aa4ce"],["2022/01/08/ArchLinux系统安装/index.html","52271c08c0bfb22af3950b5cae3dab41"],["2022/01/10/ArchLinux软件安装/index.html","70358853e211c8d14a9342b89a36da34"],["2022/01/11/ArchLinux开发环境配置/index.html","5395b9b15f217823925af2d4fe1aef36"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","5cbd9993d73672e9a02e6c2ac530cb2c"],["2022/01/22/DWM/index.html","47c1fa85e7b23a5c76495f0cdea3cea4"],["2022/01/26/MySQL性能优化/index.html","2e8f435622fcbb5f9a0b0192f019bf6b"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","c6875863711c093515af08445e1af80c"],["2022/02/27/ArchLinux安装wine/index.html","7c978105bb9dccdf7a26c9441a107645"],["2022/03/01/ArchLinux安装VMware/index.html","f150e113a8e04ac17ec947b5ab350de4"],["2022/03/01/ranger/index.html","8ec99c39a67f2f7c1b0104bcef46f87c"],["2022/03/02/ArchLinux PPPoE拨号/index.html","75f11a682f09bb5595358f8df80a6482"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","4e9c25a62db9a53c7d3694cabeaec05b"],["2022/03/16/Linux文件和目录管理/index.html","51005d75796039712fb15872601e3d55"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","1b53d53d71e15f97f7a114e62c5d49c1"],["2022/03/20/Linux用户和权限管理习题/index.html","96a5040de40e3a329fe223875d2c59c4"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","3376b13deb4ddaa28e99988bac54bde7"],["2022/04/02/ArchLinux安装MySQL8/index.html","77bf907d660e52088c9c7525004ced25"],["2022/04/13/Linux磁盘和文件系统/index.html","dfd128eb89777f751de5a513f294d4cc"],["about/index.html","8f934f96b75126febc64c51ff537c539"],["archives/1970/01/index.html","27e104e141727d80df8b9f5bb67ecb50"],["archives/1970/index.html","6671e8d14ff545f57d6cbff3a07ca79d"],["archives/2021/02/index.html","3046abebe46ed0c6bff42e635f82f13c"],["archives/2021/03/index.html","0c550ca7349eb2ebb7fc6c602750fdd3"],["archives/2021/05/index.html","0eaf6ee62d2292d3681c539a91aa1e0e"],["archives/2021/06/index.html","b2af130b26c5a319f44b31141d59bbf5"],["archives/2021/07/index.html","a6f90b1f3db8ce9f234680e5025956ff"],["archives/2021/08/index.html","34568a872963a5e932232e928f3d7732"],["archives/2021/09/index.html","08c6d474b51c789722230101b5ecb441"],["archives/2021/10/index.html","93b11fc58452dfe0d3ff0d8fd9f8fee1"],["archives/2021/11/index.html","2239bb0017510b4dfa6942a3d0298345"],["archives/2021/12/index.html","e8e5c28d12d9a366a0fc9a3c515585f3"],["archives/2021/index.html","ae5bc08fbe881d162897bd8fea34cf11"],["archives/2021/page/2/index.html","a15cd873cfe2e725c971213a325e979c"],["archives/2021/page/3/index.html","85e8fcc807865aad526d033f4583d40c"],["archives/2021/page/4/index.html","93ad64915f45c830e2ed644d5605c0f1"],["archives/2021/page/5/index.html","e8460af8fda4e21ef297104d50b87a89"],["archives/2022/01/index.html","67a98ab4b8e48599f37e090884bc7b6a"],["archives/2022/02/index.html","994dd734e7c08778cecd564be101c2da"],["archives/2022/03/index.html","623dad55afa9fef1fb6f64f2002926ce"],["archives/2022/04/index.html","6bc8f3bf7b10686eddfb5e8e6d675a01"],["archives/2022/index.html","450acfb9233a96bcd909c0cd5491ba24"],["archives/2022/page/2/index.html","58392316e4169f94729e40bcb5935bdb"],["archives/index.html","b6a3f8fc389dfd19279116334698f9ec"],["archives/page/2/index.html","f932118bf6998566c7e0f798cff0e441"],["archives/page/3/index.html","ca23b0b97fa4278b32e2d9dbd4eb0a44"],["archives/page/4/index.html","6d1ef5adc4fe35f957bf85dbcb0fa8ae"],["archives/page/5/index.html","71339a32c994f2ea77365ddc8b368903"],["archives/page/6/index.html","40372441505ba23e1f15f8ae4bb2ee7b"],["archives/page/7/index.html","fc1f579091647c78977e5f0ff9f36294"],["categories/C/C/index.html","e3d0fc5ecb21168eb7975290c09485c9"],["categories/C/index.html","fa3cf7cadff95d2a8ffc6dee96313401"],["categories/Linux/index.html","b233b406328fa6e23c7a138e4efb8909"],["categories/Oracle11g实验/index.html","e9eec61426bf5dd928887cf2ba5ef4a5"],["categories/Windows/index.html","fc22a4d8aa1fb05189ae7bcf0c79a835"],["categories/index.html","19e549226a2cbac9d796f75c0d9053c2"],["categories/javaSE/index.html","3c377b44caa26258759c12c894d45ae7"],["categories/tools/index.html","55074376491c864ea44c60699f8717e1"],["categories/wxy/index.html","f66f0b862ed4eda09f219f9e263680df"],["categories/个人/index.html","056518d6f50f847ff30f873f8e95fbd8"],["categories/前端/index.html","c9a1fa5b2b10ad14ab2599ca838f5e04"],["categories/工具/index.html","8db8fa035df0ffafeef9c2babec887eb"],["categories/数据结构/index.html","1ae0e1610dfe3a226db1fbea267e92d7"],["categories/笔记/index.html","690875032fc33d82bd64cb112f1dc04a"],["categories/笔记/page/2/index.html","cc585673a21d5c461c8a8e53891cf9b6"],["categories/笔记/page/3/index.html","96e806819d82d775f71038de2a321f98"],["categories/算法/index.html","652cf7905bf50edda5148bb350ce8a71"],["categories/美化/index.html","6e2aa1bb05667c50507c2a5c9d343102"],["categories/计算机网络/index.html","664d79f6385caae7eea73e0018321a3b"],["categories/计网/index.html","0999c4b90ddf823cfe64b390006b82cb"],["categories/语法/index.html","78846870b44c39278273878f3e7ecb90"],["categories/软件/index.html","36b722d64f22f82bb7875df2693bbb76"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","c0aa42565f743c9a761c0d7f08bc5be8"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","76b90908db7e74e5b46652bcb61605ca"],["page/2/index.html","e563d5c86b145be6f77696ffe7f41848"],["tags/Burp-Suite/index.html","99cd38522e38de4527c8bcd809554b6d"],["tags/C-数据结构/index.html","f72433abc9db48d2c5c91234188d2e3d"],["tags/C/index.html","755acf542fd7896bafeea2da352f54d1"],["tags/CSS/index.html","d52f16a6b3585e30cef787be12022834"],["tags/Git/index.html","c4d0ba8aeeea2db67559d69eabb21642"],["tags/HTML/index.html","8ff147b2783fe80a7737b7199414d829"],["tags/LeetCode/index.html","8a08fe73e6a0444f56b1b3ecc9ae59cb"],["tags/Linux/index.html","ed24e58c6d99a3f5c56ee1a59ac729bd"],["tags/Linux/page/2/index.html","1e8a19fc393d1d4a90528885a98bd6bf"],["tags/Maven/index.html","34d8801fa1a091068736ba2388e0d531"],["tags/MySQL/index.html","7419a2e2347a9106df039045f6e8c6c3"],["tags/Oracle/index.html","934e5f82cb23d2b5f93e9d40b156fc89"],["tags/Vue/index.html","c11113204c1acfb8659a6ca1c0256b66"],["tags/Windows/index.html","f9e8f88ad646799a1846932064a66afd"],["tags/Wireshark/index.html","7d46efa4b1165aaec1b537f1f829af28"],["tags/index.html","035cab5ea7a6124d3314bcbf2b8fc25f"],["tags/java/index.html","4ef092e1d5dfe1b355d6b365e77c8b24"],["tags/route/index.html","33b0a183917579d21b9a5195393c2429"],["tags/tree-java/index.html","cbed78ca1293fdf5652710876d68dc64"],["tags/vim/index.html","82d72fecec578fe7da55d3a4957f2788"],["tags/vlan/index.html","33562adaac04c6320a6fe9e499d86fb2"],["tags/wxy/index.html","c7b7a2499102bc6d313fc0bbc94ae4d5"],["tags/个人/index.html","3b1db4f42ccafe58b5a93991291fd67e"],["tags/书籍/index.html","a01f008274c28e4a68fb1ea835d31c7e"],["tags/博客/index.html","71e573d170d1b60d4100aa74de16b13e"],["tags/壁纸/index.html","8523ab2a97971a7560f4479e6415fa64"],["tags/底层/index.html","ec83a32cf163b14d5f35f5b13a89eee8"],["tags/数据结构/index.html","e0b302330131b30ffa9a32ea3993efba"],["tags/文件/index.html","f6ae908b64d87a6b93a6f20a8c7f7552"],["tags/服务器/index.html","0ebc2a91f7e70186fddb499623db81ba"],["tags/汇编/index.html","655276e3c9adfbaa0269d62055974773"],["tags/算法/index.html","bba57da0aa55c035826d1581b2f77e2c"],["tags/记录/index.html","53ee6a0f802522a9faeef76191984404"],["tags/软件/index.html","2a608c539fac6743bd0dd0d5afab94e7"],["tags/通信/index.html","ef01821a44ac1b9ca42ccc8f4495bbdd"],["tags/链表/index.html","62b8fb3da3f78908bf0fd7062ab86a5a"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







