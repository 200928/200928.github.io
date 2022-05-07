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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","bcc9a0df2e564521644f8d1079291d46"],["1970/01/01/nvim/index.html","7ef1c8760f10f7c44244e52a22007ab0"],["2021/02/18/Git学习（个人记录）/index.html","9e82792852b76fad5063e0ee704e7493"],["2021/02/18/Hexo博客搭建记录/index.html","3e934ac044d175685382a1b3672907c0"],["2021/02/18/IDE配置/index.html","135fe70f38022e753705610c424e3718"],["2021/02/18/初识汇编/index.html","7b25929f31b5bae3a36ab758ba1b88a7"],["2021/02/18/链表与指针/index.html","649ee404630e74a00a1c9cbadadce650"],["2021/02/22/Topic LinkedList/index.html","b8cb61d7d4fddd27dc2393797c932ec6"],["2021/02/25/一些设置/index.html","2d87136d988e14effccbcb735f4e21a7"],["2021/02/26/WXY/index.html","9a468488a141fcab60ea0df47a58fb02"],["2021/02/28/大二下课程推荐-计科/index.html","9a5abcfd857c0dead754a0a21d136882"],["2021/03/04/Linux-notes/index.html","520834046e9f428da150b37bc135c5d0"],["2021/03/08/data struct one/index.html","20e8e14816cc488a9a2fa4932d3cea47"],["2021/03/17/data struct two/index.html","bc2e7410d46aa5e87f853166df41e073"],["2021/03/22/STL/index.html","a1da633962d876d7df66362f58c61cf1"],["2021/03/27/Battle-of-Tanks/index.html","6e61d3ad5ce9b9de95c696d64508de52"],["2021/05/01/MySQL/index.html","58d9a36f5ac09dc022e997191f14e0b1"],["2021/05/09/HEXO部署服务器/index.html","47a667ce0935040f11a52169e818743a"],["2021/06/04/vim/index.html","d82b1cbcf7abc757c5a07ba5415c5604"],["2021/07/13/oh-my-zsh/index.html","3f79a6be67a88a6874b30053b66018d5"],["2021/07/14/HTML/index.html","bb6cd288eedcfc66449551f368bad4ac"],["2021/07/19/Maven/index.html","117e96394a504b22e1d6875433896f5a"],["2021/07/20/随机数（C++)/index.html","105dec1f1363990cf9f261dc7c7f97cd"],["2021/07/22/data_struct_01/index.html","43c22f2e246f3b46bf31ffd84e82a181"],["2021/07/22/滑动窗口/index.html","a5581c685d14e9c224987ba6b5dd4858"],["2021/07/26/Tree/index.html","4c46a2dd217b4b922485dc6585d233d5"],["2021/08/02/正则表达式/index.html","2fd90558397ce315b5819079f68f3ab0"],["2021/08/14/CSS/index.html","5794bd69cb68b576b715bb2577446d57"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","d8ed48d81c70ac120042122d6accfee4"],["2021/08/19/Windows Terminal 美化/index.html","32a8f0a4dab38d64d3aeb06870da03ba"],["2021/08/23/EROOR/index.html","8793c5e1af802d57344364495a42a348"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","bb0c62d7c70e097c3100b2412c0f44be"],["2021/09/07/编译原理/index.html","2c8f8a76f909db2d3cf735e5e801e34e"],["2021/09/27/网络是怎样连接的/index.html","42a924d61bda87902610e877c6e1a456"],["2021/09/27/通信基础/index.html","4306780e0cdd70c9e454eea4e3328a80"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","05233b97104ef7f6e9e40d6f796b8659"],["2021/10/22/vlan配置/index.html","f1ca6815e41fee8a9c03bf6707b1fbb7"],["2021/10/31/实验三—子网划分与静态路由/index.html","119ee750a24b1ae41d7ff9b45981f75e"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","b0ef7bba91f518df18bb1a17fbf7c604"],["2021/11/17/硬链接与软链接/index.html","0085a2802d4b021f121cbd2726d470eb"],["2021/12/01/SQL20题/index.html","63b96930dcde97f8242c5f100863480c"],["2021/12/08/实验五：Wireshark抓包/index.html","795fd68e310f40ffafce2f4e00464792"],["2021/12/15/CentOS7搭建FTP服务器/index.html","cbbd041f889c813a9c4bdac72349af04"],["2021/12/19/CentOS7 安装相关组件/index.html","400be0f9e9d439e242d2ab8f1bbf929e"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","22dfcd7dcd00381edfed0f3d2fbf1003"],["2021/12/27/Vue/index.html","60e257747d8759d7e56177535110110a"],["2022/01/08/ArchLinux系统安装/index.html","8995d2ec016169935a0a44dc944a862a"],["2022/01/10/ArchLinux软件安装/index.html","2b72e38d3477fc673402967abf983f4f"],["2022/01/11/ArchLinux开发环境配置/index.html","3780a9aa6c60edad001f4b1ab592b591"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","86c7d932cdd43c12a21141a86196937e"],["2022/01/22/DWM/index.html","850b74d4eb78d6eca08b5039337f6bb0"],["2022/01/26/MySQL性能优化/index.html","77a230cf38ad6f1f692ce1fbbd65b6a7"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","eb659993012771a190e23a5dd927e1e5"],["2022/02/27/ArchLinux安装wine/index.html","f57d9ae84c3c6f08a8bab8e391e9f4b3"],["2022/03/01/ArchLinux安装VMware/index.html","19d9d17a0dd538718644fd9c485a4d5e"],["2022/03/01/ranger/index.html","f1ea10c70d56be56baf60aa4872d6841"],["2022/03/02/ArchLinux PPPoE拨号/index.html","5a825443631253d1f5026a9a1e5d85e1"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","d76c0b07da4d51340de091eae479880b"],["2022/03/16/Linux文件和目录管理/index.html","07b55c700499af974995ffc1893f878a"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","f925df8aed5bf6e94c3956654e6b6986"],["2022/03/20/Linux用户和权限管理习题/index.html","f8903617b4423e599e54d2ee92f3d4e2"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","8edb2194e66b6e4661c46db537274331"],["2022/04/02/ArchLinux安装MySQL8/index.html","82ae095ceb335f0f5da9d8f44b39c487"],["2022/04/13/Linux磁盘和文件系统/index.html","857b100d735d053359e50a934157280e"],["2022/04/18/ArchLinux触摸板/index.html","ca14921b1e4c8b8bef1c249bbbcaa61e"],["2022/04/25/FreaMarket/index.html","d465b29ef51152994374fb5d73d49c17"],["2022/04/27/Linuxn命令练习/index.html","ba47ca4fa59d62cae85fc3df4c4d1377"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","df2bae9e11afd0e674c22685ac9451bd"],["2023/04/13/Linux软件包管理/index.html","cafd239d82677d819f22ab3495e7f04b"],["about/index.html","b58aee1233e1df0502b70727e32c0751"],["archives/1970/01/index.html","6455de44393dc8acaf1760b9f8f72d93"],["archives/1970/index.html","179bf4ed241567e7de170d6de87e7ce3"],["archives/2021/02/index.html","cd4b9dc5074bc8ad467dd64fca9c7508"],["archives/2021/03/index.html","7afea485a0e0a724e10d4eae0ca119ba"],["archives/2021/05/index.html","a6de7ca1de59c92dba242efa3c00d96b"],["archives/2021/06/index.html","433f8305b3b539a3bc989aadf09d78ce"],["archives/2021/07/index.html","a92cca4d1c59c72a195baddf5a82c6e9"],["archives/2021/08/index.html","179cd67320b8aaed4c2f9a399c4d280c"],["archives/2021/09/index.html","9665c576b29149d0adb8473f21ea0883"],["archives/2021/10/index.html","0e4c567b43719a0c2ba12030984142e1"],["archives/2021/11/index.html","6df3ab1924c4dd52d258cdf5d561c5f6"],["archives/2021/12/index.html","1aa15cc32ab658019019d6b14c4e5983"],["archives/2021/index.html","28b38b34a8c3327167307d9b3595de70"],["archives/2021/page/2/index.html","74795a7e72e4e339c8145f2274ad5f09"],["archives/2021/page/3/index.html","1303fdaafcdf67e897041f6a9d9efe3e"],["archives/2021/page/4/index.html","7ca8a4095709acb19dea9a50ae8e27ab"],["archives/2021/page/5/index.html","a3c17bb4d793d98ce7c82978a6471c6e"],["archives/2022/01/index.html","3060d133aa79f23cc033e6e0e24da96d"],["archives/2022/02/index.html","5abfe54d474c481e4ded16fe4cd678e6"],["archives/2022/03/index.html","ede806048a3c1265438d0d4d0eac9880"],["archives/2022/04/index.html","cfd49e5470773e860e8fd20f561bba6a"],["archives/2022/05/index.html","b3f9193000d1b9b34d44813cf58852b1"],["archives/2022/index.html","8419a6aa87e7e173be21200f6caa6a03"],["archives/2022/page/2/index.html","9dd10e79e1e0bcfb5250c279da4989a1"],["archives/2022/page/3/index.html","b4b1cd847f30c4cdb485763957fb062e"],["archives/2023/04/index.html","409a693d46f747d7dd7d4f014dc9b248"],["archives/2023/index.html","bc7624f9ff7d22172e952eb4c7d5901f"],["archives/index.html","2035f5db77d3b460cf0857b5acc76662"],["archives/page/2/index.html","1d4b80fc56d4c884a197d48c9d7dcf29"],["archives/page/3/index.html","1b430db96a2dff7dcc6e12f424bd0f6d"],["archives/page/4/index.html","560ccc491932c58dae3069fc619d8a74"],["archives/page/5/index.html","a356e8b02fc904e086bbfa0423a49dcd"],["archives/page/6/index.html","0738b5e5875d3ae323df39c7bb9b50b6"],["archives/page/7/index.html","c6231db05ca9eb5b62d6d6cf5783fe6c"],["categories/C/C/index.html","7c8a87be0f151b0fefc1b6ad87eb5c57"],["categories/C/index.html","a2ebf9c10c13f8bb2d1507b402e4543b"],["categories/Linux/index.html","4e408ce06ee9eade7f2891589efc57c8"],["categories/Oracle11g实验/index.html","3e22cf8d325949573dc689688190c9d3"],["categories/Windows/index.html","9eba9e1d1ade55891fbe80cad9b8b036"],["categories/index.html","940a14cd47d2989b591209792ac790fc"],["categories/javaSE/index.html","9563b48668458f4e4b429317ce07ad06"],["categories/tools/index.html","668e8fd180727f6b6a1de5216b589ab2"],["categories/wxy/index.html","418fcb6d84076a4d85c94c7fd15d90c5"],["categories/个人/index.html","9582b09dc619feda0bf3ec804a15597d"],["categories/前端/index.html","17f7bc64775a7e65e8664a1bf405f687"],["categories/工具/index.html","aae4ea16e7255b78f73abdb76157a739"],["categories/数据结构/index.html","f689551e9f8bf4999072582f26529092"],["categories/笔记/index.html","d8d34a09e30251468774bfbe8aaf9182"],["categories/笔记/page/2/index.html","45b55a16322b359ba6304b4b4159ae28"],["categories/笔记/page/3/index.html","67a34147a34fd7f9cb1cb19a2c98cfc3"],["categories/算法/index.html","23ff32af5402321118e301df7b6285c7"],["categories/美化/index.html","57e7800e14ebc5d0d1ed902768cb5fa8"],["categories/计算机网络/index.html","0fcdc81e9308f01327733c405ae4b793"],["categories/计网/index.html","8f399c83203ac8284933104d861c2f81"],["categories/语法/index.html","d75d16513e854a2a02807bca0793699c"],["categories/软件/index.html","ef897b6e23089069ce90d1fb380c91f4"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","d2c942167345c16a857c0fd64a739a3a"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","aca0e058dfa80d8636f8a61b05c89d43"],["page/2/index.html","85708d091880b7b22a3027c2cdf2c877"],["tags/Burp-Suite/index.html","467a203f85aa9235d8f3c04298e198f3"],["tags/C-数据结构/index.html","d6cd9e7675b96e17e9d3ba20349635bc"],["tags/C/index.html","8f1c358367a72308fcef3b485af9786e"],["tags/CSS/index.html","26c44831b5f39af35c0062a76eb9bf94"],["tags/Git/index.html","ec5d3e85bfc02e36e2fcb04d9bbb20a9"],["tags/HTML/index.html","f4b66c741ec637220864e17bf03e0329"],["tags/LeetCode/index.html","caed040eb3a517211de671d308741429"],["tags/Linux/index.html","e39945ad83019d72055549d9ee936d68"],["tags/Linux/page/2/index.html","2665fef9fcaaa2a313bb21fefd03e685"],["tags/Maven/index.html","829c6121287fa0eb85fe797d9b5f20e2"],["tags/MySQL/index.html","bc8b14e419203e98577725d56244dc01"],["tags/Oracle/index.html","9159c7070021a1fe60dd80618a0c235c"],["tags/Vue/index.html","bc1196a874a510d80eaf0b59578708a7"],["tags/Windows/index.html","6577e0dd18954e1e5f0c45b2c5e54c17"],["tags/Wireshark/index.html","506471b68bf65e4f6d813339449cc794"],["tags/index.html","813dacaeed5a8ff1022a9892562c5da0"],["tags/java/index.html","e3863813841750daf91214abd018ebae"],["tags/route/index.html","6eaabcc24d6d5823857feb6bcf7e5b2a"],["tags/tree-java/index.html","2b43cbe7c2768e3d884ff67f5d0ce09f"],["tags/vim/index.html","479307ccfbfcea6a2c1faff2326eb1c3"],["tags/vlan/index.html","987ad600196a43c08ddfa2cf86cff5c4"],["tags/wxy/index.html","aaa824780c33ececcaad4fa133dba19b"],["tags/个人/index.html","8374c37c15e1cef2f817a7f3d5844508"],["tags/书籍/index.html","3edf3dfbcb9120e561a98c5743f720a4"],["tags/博客/index.html","9a22e8ad873c28f641c55d619b91a4a2"],["tags/壁纸/index.html","96753acaad6054985b968d1feda85332"],["tags/底层/index.html","5d0e990a3706a5f8fdf7cdd1f4a2386f"],["tags/数据结构/index.html","02ebc47d5a5b5f340e1ac533e56d8d46"],["tags/文件/index.html","97c15d292e1a9c0b5b6e6d94244a66f9"],["tags/服务器/index.html","ed63d85801dc68c9f4898f0de497664b"],["tags/汇编/index.html","cf9423a4e831a49399027fb2f39cebf7"],["tags/算法/index.html","eb0af88edbbd5515bf17b5e9a34b8f56"],["tags/记录/index.html","1376c5a0b56113aa52efb5c2bdf2eddf"],["tags/软件/index.html","7be1b2d6dfabe5ceb226be2968961a33"],["tags/通信/index.html","af9c8b8c9db065c3a3c7d625f304d78f"],["tags/链表/index.html","ee4b11c445d8518356fe850714158498"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







