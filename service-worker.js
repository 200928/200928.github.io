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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","5601401028c2d79aedd251f7c2f77df1"],["1970/01/01/nvim/index.html","d24a4bd74d6d138ddbb98c0e53b49332"],["2021/02/18/Git学习（个人记录）/index.html","fb4cb3e887a09dad564c21f7d31be50e"],["2021/02/18/Hexo博客搭建记录/index.html","486175bac5e4635b84317688642b117b"],["2021/02/18/IDE配置/index.html","2ccdc5834256bb826e747b6ed4623b30"],["2021/02/18/初识汇编/index.html","0b3f633699512e26273dbe12726f9c19"],["2021/02/18/链表与指针/index.html","13bfee38bb9c9dcee89b91814a1d4d6c"],["2021/02/22/Topic LinkedList/index.html","ac5882b1e078932a6a96e9e6385014bc"],["2021/02/25/一些设置/index.html","a2c18583de65c78c09571aa76c911b72"],["2021/02/26/WXY/index.html","8a235b6adf4284c233c28959f90d38f3"],["2021/02/28/大二下课程推荐-计科/index.html","a24e9709dfc75afddbc4684cdc64406c"],["2021/03/04/Linux-notes/index.html","cadee8d5a0e37b9dbf8aa20dec3bf913"],["2021/03/08/data struct one/index.html","7e035e926280c098f239d13ab15ab7cb"],["2021/03/17/data struct two/index.html","43b9f835e72f79fed83ae5c0b32433d7"],["2021/03/22/STL/index.html","658b7e7c9fc6ed0c8bf4ae4802d0e3fd"],["2021/03/27/Battle-of-Tanks/index.html","2406a707f6735271429fc9a0dc60cc03"],["2021/05/01/MySQL/index.html","97c4d3fddaed07b554bf8b7123978241"],["2021/05/09/HEXO部署服务器/index.html","699734c43a83f22d1636e63a5225023c"],["2021/06/04/vim/index.html","1e32402361b13137d57455bb6834a7f3"],["2021/07/13/oh-my-zsh/index.html","15c3c42ae551d370af2f0178f8e92a3f"],["2021/07/14/HTML/index.html","d659d2191c09311cec54fd5ff55aebbf"],["2021/07/19/Maven/index.html","6e6d659100be8e027b6dee6063d082a9"],["2021/07/20/随机数（C++)/index.html","22c86f3c00fe44841cdcc1c535c190b0"],["2021/07/22/data_struct_01/index.html","ddc8552a3588bfcb7aac98ddfebf43cc"],["2021/07/22/滑动窗口/index.html","e2ad1d417a084a0993560cbbd074cf11"],["2021/07/26/Tree/index.html","e24f457ca80cdd1e1b5b4172327983ac"],["2021/08/02/正则表达式/index.html","06731f5094ced9827f310a4e58e259bb"],["2021/08/14/CSS/index.html","e84969c59127075882075899d7f9a3fe"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","8097f4dadd9de68ca82e2b691a2375ef"],["2021/08/19/Windows Terminal 美化/index.html","55d1cdc318adeba30b433f6b1547880b"],["2021/08/23/EROOR/index.html","565a26ba62ab24bb632874676add6c53"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","9d7bc4734a1e63f8808f90438670e687"],["2021/09/07/编译原理/index.html","2b83ee5457ce7c46b8acab565778f4ee"],["2021/09/27/网络是怎样连接的/index.html","9119d2eef22d3f9bfd92ca77c1341f4f"],["2021/09/27/通信基础/index.html","26812d939590e427419b907d146db887"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","94c2bb7989b2f3d56eb697e526e992e9"],["2021/10/22/vlan配置/index.html","59d22d486cb84cb0a5f49c8288f65cbf"],["2021/10/31/实验三—子网划分与静态路由/index.html","57ed51da003f3861fe20e3ca746c7da5"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","035cbfe6e39415353c024f331eb09a92"],["2021/11/17/硬链接与软链接/index.html","e388bff060b52db96f5aaaaaf72bdcbd"],["2021/12/01/SQL20题/index.html","e05e418564bc4ef3530d14e4eadff80b"],["2021/12/08/实验五：Wireshark抓包/index.html","5540c098c3f733002a81f8e38663e2a6"],["2021/12/15/CentOS7搭建FTP服务器/index.html","97f96f15fcbaf6ea62af5403b7f6961f"],["2021/12/19/CentOS7 安装相关组件/index.html","fdabb9640bf12296196fdad485a0443b"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","4481fd085a4b539a6eca38d1de7ae275"],["2021/12/27/Vue/index.html","60bf5781f1442ef745780071c80aa4ce"],["2022/01/08/ArchLinux系统安装/index.html","54d005dfdc7c8cd2d83381ccbf31b934"],["2022/01/10/ArchLinux软件安装/index.html","320ee643942cccde615ae0eb71cf16bf"],["2022/01/11/ArchLinux开发环境配置/index.html","555d319b7585180f4b65dcbfae78f538"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","5cbd9993d73672e9a02e6c2ac530cb2c"],["2022/01/22/DWM/index.html","96aeb4653d41119e9aebea9c392dd143"],["2022/01/26/MySQL性能优化/index.html","2e8f435622fcbb5f9a0b0192f019bf6b"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","c6875863711c093515af08445e1af80c"],["2022/02/27/ArchLinux安装wine/index.html","5f8f91647b5f4f5bb89bb65cc77c01bb"],["2022/03/01/ArchLinux安装VMware/index.html","24cc293b14bd2d940266cd4be0c72760"],["2022/03/01/ranger/index.html","85148f5c4d862acdff916c17407bebf6"],["2022/03/02/ArchLinux PPPoE拨号/index.html","75f11a682f09bb5595358f8df80a6482"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","4e9c25a62db9a53c7d3694cabeaec05b"],["2022/03/16/Linux文件和目录管理/index.html","91b3bf02309e9427b92ffa7a30b4815a"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","1b53d53d71e15f97f7a114e62c5d49c1"],["2022/03/20/Linux用户和权限管理习题/index.html","0fbf9e0de4555fe62e9b4fc1c24acfc9"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","3376b13deb4ddaa28e99988bac54bde7"],["2022/04/02/ArchLinux安装MySQL8/index.html","01db1c02220ea197288f356f7e69dc72"],["2022/04/13/Linux磁盘和文件系统/index.html","8717440cbc7ae18aea8183d62110abcc"],["about/index.html","586453cd56cdefa59143faee9b1d902e"],["archives/1970/01/index.html","f73bd55d704c5e91667ea5ac578e87ec"],["archives/1970/index.html","f70c48380bd0dddf57ca811c9ac9a1fb"],["archives/2021/02/index.html","bcf3c8a9c8b53101111d75a8d9df799b"],["archives/2021/03/index.html","83d3a4fb9528f0db9bae081b865c6cf4"],["archives/2021/05/index.html","5ed1fd4155ecc2841d4ec685248eddf4"],["archives/2021/06/index.html","623e57be9b532a2ae1bf76b0789d0630"],["archives/2021/07/index.html","25d3575e58cf1e3f2e7098782522f958"],["archives/2021/08/index.html","e0fc7fda62e7cc44da861e0fec13c0a9"],["archives/2021/09/index.html","207df876491daea1a3a99da7afc74a67"],["archives/2021/10/index.html","45e46ca4a9e7e1e569a8a6549b67c3ae"],["archives/2021/11/index.html","bb9c3b5a8fe019f3579908d4a031bb82"],["archives/2021/12/index.html","2dc869f7b743941da14d69b6205bc79d"],["archives/2021/index.html","46373c5a20de07359d926d58b795d055"],["archives/2021/page/2/index.html","9b10d52119677cc2ebf8bcc0d17bc428"],["archives/2021/page/3/index.html","ef4fda4db1e9c8c52f1d8bf2e4e927cb"],["archives/2021/page/4/index.html","503a037af3870680baae6ed0ea33bb44"],["archives/2021/page/5/index.html","8da364af733ad81cf98a69888ca7f9ce"],["archives/2022/01/index.html","3b7ad690c8f78b82e15c2e6711b9dd7b"],["archives/2022/02/index.html","b9f9285753de7ff9be89ec41c387301d"],["archives/2022/03/index.html","2194c0361e4161237febe9abe1717f29"],["archives/2022/04/index.html","c938fc8c3ab6ef178fa8c998ba2a6259"],["archives/2022/index.html","f5cab100b16a3c0e2d610ebda91b2dc8"],["archives/2022/page/2/index.html","86a81d426f945fbdc8ccace745fbbfec"],["archives/index.html","faf090cebc6f203ba088a2c04b4ed559"],["archives/page/2/index.html","a527d0083751b130129289e4bc9cbecc"],["archives/page/3/index.html","1da701140e656b23608a7c6a94cdf84b"],["archives/page/4/index.html","11f11a054c4c9fd317b13ee0e19f8679"],["archives/page/5/index.html","15445bc507732e630c286318e06f9a39"],["archives/page/6/index.html","8e8134f4715f179f73d6b2ccedb58af2"],["archives/page/7/index.html","4ecb9312cc112a8f4d3fbce862ef8318"],["categories/C/C/index.html","cc5afe991db1e0e361473d4323a5afce"],["categories/C/index.html","5d5ae8e9a9e01c1c46e0021ce82d0ac8"],["categories/Linux/index.html","306dde1510dfd1ac8f0942f2190edda3"],["categories/Oracle11g实验/index.html","a3ca3921d035ac61ae49a7932fd02720"],["categories/Windows/index.html","df75c8f073676a179718938ef180bfe0"],["categories/index.html","df81a96b201530aa83a56f81a51e60ad"],["categories/javaSE/index.html","3e23ba75afd7c94514aba52f81ea29d2"],["categories/tools/index.html","d210a2d7d99ad3483042fdb21624f6fe"],["categories/wxy/index.html","73c28d75e73cf27932e9402e80beb014"],["categories/个人/index.html","57ab1ab915ad94506b8e343a6572e40c"],["categories/前端/index.html","578f501593e3d121308194ea4ff28781"],["categories/工具/index.html","0f33209e00151fc51c0c12fca378ba88"],["categories/数据结构/index.html","98f007003a613613219e9f29cdc62f1c"],["categories/笔记/index.html","648482aaa3b048d1a630b98b73f21e77"],["categories/笔记/page/2/index.html","99173357a8b08a876409c33ec3d50130"],["categories/笔记/page/3/index.html","8285959ac3205564cea0a99a960c524d"],["categories/算法/index.html","c899bb80ed683dcc92f5a156410d5bdd"],["categories/美化/index.html","b3cdfa847a90f9659e671f17ae170706"],["categories/计算机网络/index.html","5090f8256598d7c7d9bc1297fa92ad4a"],["categories/计网/index.html","b72a788c0b886af2cd3feddca559418f"],["categories/语法/index.html","e0f6ed7ead34e0d3ee35a0c9828cadda"],["categories/软件/index.html","059ca6e9f2cd296d4b0a2f3ad3479652"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","3e26eb330c2f2779e7a9a9fa28b553a9"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","c52153813a99a82754ec3f11d0b498ca"],["page/2/index.html","4d2b86ac3b9b6f1500cddcc0cb03aa2a"],["tags/Burp-Suite/index.html","935f094bcd9a0189ee382108b74606df"],["tags/C-数据结构/index.html","549c2ebc20b64ab89ad538acc0fb02be"],["tags/C/index.html","ba9bbe73a15a2e8665b6adbc85aa50c3"],["tags/CSS/index.html","b48d0607310d6ddfd497130f3ad8093e"],["tags/Git/index.html","f752b7e35696b206f688d5d27c29cc12"],["tags/HTML/index.html","bf29ab92a4e1dd9a7cf5cdf571b5da17"],["tags/LeetCode/index.html","85abde54e9edd5f7a82a42f315ae816a"],["tags/Linux/index.html","6347110881d0fcb2c6fa7ff2fd641b35"],["tags/Linux/page/2/index.html","bdc5e74a1ee3d57cf85179a6a64620fe"],["tags/Maven/index.html","6265b58e0b6e94301796b79a7fc3a231"],["tags/MySQL/index.html","e7fa45e0215e40ef5683f7cc3213a694"],["tags/Oracle/index.html","48a9b44fec3d03b9382c35ba4eb5ad7b"],["tags/Vue/index.html","eef370c3f5e7e9f0260675dcf43744d7"],["tags/Windows/index.html","33e2892c6a73cb21aee9676b98818ea8"],["tags/Wireshark/index.html","fd20dae4aa7c3da2249fb2d42528e1e6"],["tags/index.html","c6220ba2e1617545ec375d0bc69dd327"],["tags/java/index.html","d71fc44ba0669fb6f4bc11e648b46c22"],["tags/route/index.html","94fd6abb278bf818f02aa36f39037ef6"],["tags/tree-java/index.html","309052b137a348956e9654368fc39781"],["tags/vim/index.html","3a203ccf5bd53a1f2bd6471db63177ca"],["tags/vlan/index.html","73655492e0e09d09fd738d5d3bf90ab6"],["tags/wxy/index.html","090b8d88b0a0ee2e885aa3a4c31f341f"],["tags/个人/index.html","c65e99e25b100d1dcf84595a05ec15b4"],["tags/书籍/index.html","4f3ba7b4ffa979dac9aa16a48ac68447"],["tags/博客/index.html","30e7c8b073df81dc0f7b0490b865db6d"],["tags/壁纸/index.html","31d46457632d9abecc3712b75d7c678f"],["tags/底层/index.html","56362d2e8868579bad2028ece55fa3a4"],["tags/数据结构/index.html","9b688ff53c9f0143ea7899c24086a9b0"],["tags/文件/index.html","43fe8ddb48c68df5a9d33ad7b81c216c"],["tags/服务器/index.html","edf499031c121f40eacb7b3d81fb2bc5"],["tags/汇编/index.html","3115ab62a048fe27ad7a2fa00c168819"],["tags/算法/index.html","b8c5da726644e49b608b503834097801"],["tags/记录/index.html","721287c2ac83d634e2ad5faf0f5906b2"],["tags/软件/index.html","c85e436b330fbf40e398c11847da0ffd"],["tags/通信/index.html","214b727866b5f2782367b0a1395468f2"],["tags/链表/index.html","93aa3f2be9e27cd6efdcf9aa177ee668"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







