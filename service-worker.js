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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","ce844539e53de9b57ddc6cc7f4ee4f89"],["1970/01/01/nvim/index.html","b75c59e8b18e57f92d8cdafae9c896ac"],["2021/02/18/Git学习（个人记录）/index.html","db907280db86a419d508e6718af02b70"],["2021/02/18/Hexo博客搭建记录/index.html","95bc932e44a2ebacdab2a25f7682d5f2"],["2021/02/18/IDE配置/index.html","14e8212c31b39e26df92ebd9bb58aa9b"],["2021/02/18/初识汇编/index.html","53a284aab04bc0132a592c5d4ff48ce1"],["2021/02/18/链表与指针/index.html","1283ab640857c0ee10cfb2983925c90e"],["2021/02/22/Topic LinkedList/index.html","7850fd3d57507717556ed5882c0288e9"],["2021/02/25/一些设置/index.html","b0cc5d1b6c01289c85970ccccf0bc363"],["2021/02/26/WXY/index.html","ba8f0646f868b03d88eddc3679236d69"],["2021/02/28/大二下课程推荐-计科/index.html","eb3cb4aa515b1245b51255779a8c4701"],["2021/03/04/Linux-notes/index.html","56ee1f529451360f397944a916a20b09"],["2021/03/08/data struct one/index.html","575ed4af93e4252f2b6234121748eeee"],["2021/03/17/data struct two/index.html","a92362ccb3f25812ef1123300833c6a1"],["2021/03/22/STL/index.html","1db96252aea09977db348e509d935c32"],["2021/03/27/Battle-of-Tanks/index.html","c432b31b82db83460d8daa7fcafd8726"],["2021/05/01/MySQL/index.html","46394b2f3864d5b0c13cb7bb7f854451"],["2021/05/09/HEXO部署服务器/index.html","68efd3eb74950926f60f19ffd009469e"],["2021/06/04/vim/index.html","5cddfa0bff41ab69ba5ea2aba1406e74"],["2021/07/13/oh-my-zsh/index.html","3938fd63d7b2d8ca7094715488be9a0b"],["2021/07/14/HTML/index.html","506aa6083a987ab33b11652df1e089a1"],["2021/07/19/Maven/index.html","097cc516814f619cf8807534e5a97853"],["2021/07/20/随机数（C++)/index.html","1c9561e584e9c2d343c81304243ca066"],["2021/07/22/data_struct_01/index.html","101d6ed88964edb34aee73c19f0615cb"],["2021/07/22/滑动窗口/index.html","f04f4931f44d9f636a2b1a44572cd766"],["2021/07/26/Tree/index.html","a5b35ee217be5dc6034c660e86a6ee65"],["2021/08/02/正则表达式/index.html","eaafe271602a076b354bb2203d722380"],["2021/08/14/CSS/index.html","1b4f6d03690bf3181153fc7f01702e85"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","63ca03ff3807e1c062c7d24888f687a0"],["2021/08/19/Windows Terminal 美化/index.html","c1f29a0fee1515331e60bada032ecee9"],["2021/08/23/EROOR/index.html","a6a00b83c44bbf63276dc603918b3250"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","1e0eb76e6cd9fb6a4439e080e9ec47a2"],["2021/09/07/编译原理/index.html","67cf86d7e532de81882671ae38d8b3ac"],["2021/09/27/网络是怎样连接的/index.html","0fcbcf41d5d8f9afb7378e4b620610ed"],["2021/09/27/通信基础/index.html","ada1c3a2d3f04e49a04ec0c41fa1ac60"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","7a1bacfef1eb925654fe962de2ff47a8"],["2021/10/22/vlan配置/index.html","d1a96d2866a2a9f586ba1235e70e709d"],["2021/10/31/实验三—子网划分与静态路由/index.html","c9b32da06b6d26db9cb93627591e8763"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","17d0edc7351beec38aa3ac6ff3eb284e"],["2021/11/17/硬链接与软链接/index.html","e69cb2f399b83649c363a135e390febb"],["2021/12/01/SQL20题/index.html","e0aed8d2592c67dd75cc64bb2b4a5a1f"],["2021/12/08/实验五：Wireshark抓包/index.html","174b07bdae432e5711ae8e3616f9ad20"],["2021/12/15/CentOS7搭建FTP服务器/index.html","f9e23d11d17860a8a6fb4eb56de7a86a"],["2021/12/19/CentOS7 安装相关组件/index.html","4054f032dd4552bce32bb9d913ddc09c"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","ab419059316f4ad2d409509440fd6f11"],["2021/12/27/Vue/index.html","5973359e572fab2f97c9a7dcb5919c70"],["2022/01/08/ArchLinux系统安装/index.html","11edbba0591685523e3243163939b79f"],["2022/01/10/ArchLinux软件安装/index.html","a02277ae741fc213e4ccb52c118c399d"],["2022/01/11/ArchLinux开发环境配置/index.html","595488a2596cba9cd55983b66cf7c073"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","68a502133648a0b8fa86176a6ca806d9"],["2022/01/22/DWM/index.html","04e9d51e31ea67bbcd6281f35592f1e9"],["2022/01/26/MySQL性能优化/index.html","a8541a3546a6d68f1100d2f06bf8fef9"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","25e37605ef2f027a06ce72105210db80"],["2022/02/27/ArchLinux安装wine/index.html","22781ecc0ffaf6559b8874e300d121e7"],["2022/03/01/ArchLinux安装VMware/index.html","0f98753335d96a0da3c39a4e8444ce1a"],["2022/03/01/ranger/index.html","5f84b5682cae36ca0d8734ba33da315e"],["2022/03/02/ArchLinux PPPoE拨号/index.html","d6d94fbf4352b3c1f2210d9874b7b088"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","45bdf02341cdd9090e7068eabe6a3850"],["2022/03/16/Linux文件和目录管理/index.html","d7f3c29cf843fa34f5d1c23d78a7f5f4"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","b40d61327c82db7d40c0f5cf88fc7bfa"],["2022/03/20/Linux用户和权限管理习题/index.html","837ecbe04c9e7c99a1c6e803662583b6"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","165aef7d2663a9c5e71cdfe523b0c7fd"],["2022/04/02/ArchLinux安装MySQL8/index.html","d5a1eebcfb520146fe6c3637c84af1a0"],["2022/04/13/Linux磁盘和文件系统/index.html","81eef9fd7320c67c0a2c14554bc04641"],["2022/04/13/Linux软件包管理/index.html","597575062ef74ca168a0b38d69c15a47"],["2022/04/18/ArchLinux触摸板/index.html","a530fc59264019e0cc5fce4ae3c8f606"],["2022/04/25/FreaMarket/index.html","beec56a2098c59dd5fe6c41223b7db3e"],["2022/04/27/Linuxn命令练习/index.html","58488c9b2d17baa0f63cc223b00729af"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","3134a9a75932c73688c036f85c998c04"],["about/index.html","c0d7ddd1fad664de4a221c0fa836c548"],["archives/1970/01/index.html","b5ae6cf7ef08cdc9380ccc8084c4a15f"],["archives/1970/index.html","40d3de5803d69e4eaf1b8fa64e123f8e"],["archives/2021/02/index.html","37150230797b80e577bde7e142aa6537"],["archives/2021/03/index.html","d2fddce083140e8d793b23ea612c99f4"],["archives/2021/05/index.html","e8ac3984024758df608410fc23135eae"],["archives/2021/06/index.html","1c47755202edce4f3c310b9659d777f0"],["archives/2021/07/index.html","15114552ddb2e0d20a8617fc3165b0e0"],["archives/2021/08/index.html","a5c2bd4954cb1624e8b6ac48929ed39b"],["archives/2021/09/index.html","f82b8ba962d9021533402442718cd573"],["archives/2021/10/index.html","46a1a8cb5197ce2910b63c8d3db2bfc3"],["archives/2021/11/index.html","3572f18434a163de81e1517fc8d7eab8"],["archives/2021/12/index.html","6d7040468f6e1318ca9ec5212fd7d8a7"],["archives/2021/index.html","44e192e33611bd588f3ea68c1ae7378d"],["archives/2021/page/2/index.html","5fb23d36b081daae7290f3028e3509cb"],["archives/2021/page/3/index.html","119aff92eb69b6041112a563541d89b5"],["archives/2021/page/4/index.html","7318c21ff255a35c8729073e0a5e4436"],["archives/2021/page/5/index.html","befb30f54a37317301bc68642a1fe6e7"],["archives/2022/01/index.html","2469ed10ecfa2df09c191220e9e12303"],["archives/2022/02/index.html","2b18e7b694fe4de9927e926ad3f44dc9"],["archives/2022/03/index.html","def1f1501bebd0fd81aa3e8677494d3c"],["archives/2022/04/index.html","7a1bd0dea3f33727e7e96b16114afe03"],["archives/2022/05/index.html","82fd3c66452b4a8aa6b07cb011ebae43"],["archives/2022/index.html","b1989c02342f5dc7a086b0120399e386"],["archives/2022/page/2/index.html","421d23bbcb1183f7634d55aec739aee9"],["archives/2022/page/3/index.html","a46809858f154c708cabc98fcf4bf60b"],["archives/index.html","5cc29eaa0508d639fb1eeccaa2bbc45d"],["archives/page/2/index.html","a594c2e45d1e41381fdcb001c79cafae"],["archives/page/3/index.html","00fc28385ad603fe9b053d435d627b33"],["archives/page/4/index.html","94ae7eccb4862dda4f27922d511593c5"],["archives/page/5/index.html","cda2f3874687371797cc7bf9e8d4cb87"],["archives/page/6/index.html","c0020f764ecefbf53740b05ab15c1b0c"],["archives/page/7/index.html","152c6364ddaf287e97893cdbcf8f4c5e"],["categories/C/C/index.html","17f7df053595cad65a6ca314fa80abc6"],["categories/C/index.html","61c5d7310add2acdebf3785ffdd50458"],["categories/Linux/index.html","398ff4f0e2df212f29ece0f4a44f9f56"],["categories/Oracle11g实验/index.html","4e893a29356e8745b54d705b9a846a2e"],["categories/Windows/index.html","616913d11aae1e382fcf4e3768e1bb01"],["categories/index.html","98a3b5877ad35fa5ee553d62393140de"],["categories/javaSE/index.html","c0caff9901e53fc293f47683e30e6da4"],["categories/tools/index.html","c534129e66e9a0acef706115b4b12ce9"],["categories/wxy/index.html","561e075d10105d5ca399b0fad180f82d"],["categories/个人/index.html","a435ff3a343f31bf98a7deed7470c842"],["categories/前端/index.html","56dbe25d1f3f245b5065967f68ff520e"],["categories/工具/index.html","a146551a7792bef70d83aab080840987"],["categories/数据结构/index.html","cbfc9251d506facbc34dfeb015a26d47"],["categories/笔记/index.html","9c7b23a595fa5f4de7f577ae811de446"],["categories/笔记/page/2/index.html","611295e0311ff85317d7672ad588aa8f"],["categories/笔记/page/3/index.html","c1e56f6da3c8bd6693f9d40df8469c83"],["categories/算法/index.html","f5fcd5732ff36e6b68d1f1cbd94e4a08"],["categories/美化/index.html","949c1e05ded41d142408771a26a8800f"],["categories/计算机网络/index.html","513ce0504dab776c154f3fa89d5dd113"],["categories/计网/index.html","2f4cbcaefe8452f009942614ef90c52a"],["categories/语法/index.html","240a0d71828bc76460229c7386ee0345"],["categories/软件/index.html","4eb1de4de80dca308dd088b61dc0df96"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","76ff079bd440f8f872ebd872257a0821"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","c5e788422a20f72015c708782f0f9c8b"],["page/2/index.html","2c36d5fee934399ff740ebb9a6fd03b6"],["tags/Burp-Suite/index.html","98e5e5ae71c20938665791de38d9a2f3"],["tags/C-数据结构/index.html","990a2b921958c09d67db5e763550c5dc"],["tags/C/index.html","692dbbc143522b2e1e7e482c8a0c827f"],["tags/CSS/index.html","6a2e2f561961de9877955940f596d2fd"],["tags/Git/index.html","1164b4a61113bae7063d1bc20f90c233"],["tags/HTML/index.html","e1441b3aa162feeb700f371fba5b013e"],["tags/LeetCode/index.html","adad1573d9dcc3f78f73ddf884978eda"],["tags/Linux/index.html","14ebf24f79c250730dd27633f04d80ca"],["tags/Linux/page/2/index.html","158d57cbfbc3fdb71b36f4a1446af61b"],["tags/Maven/index.html","fa1a9d082e509c5c5b92775706b0274b"],["tags/MySQL/index.html","73edf1f4762d9658e5ad19a4bc72612a"],["tags/Oracle/index.html","7e31601451504d3133a5d983337caadd"],["tags/Vue/index.html","b59aabc5718c24c58c9fa638c42877d3"],["tags/Windows/index.html","1e78c60f8538a6c8104b9fc5106dfd04"],["tags/Wireshark/index.html","21adb729d76337be4deb3b50e63df111"],["tags/index.html","6295eea5d249adf3b72428555a39cc0d"],["tags/java/index.html","1f6a2b055ef8b46e1c3170a726f5e724"],["tags/route/index.html","767aa58da581bf0ee426efc1a64ab45c"],["tags/tree-java/index.html","9471b4fe0589f7ed85b9820c1924ab4a"],["tags/vim/index.html","67df69b8c4f8515f0b68d92e4a57d5b1"],["tags/vlan/index.html","e66772632db4baec71ab3869787dc112"],["tags/wxy/index.html","2f8fc5a0fc105523723c4dcb64245a42"],["tags/个人/index.html","bc525d248773a7dca0de7a66cd619114"],["tags/书籍/index.html","cd8c90f07051576ffde910e8d49399fd"],["tags/博客/index.html","393bbaefd8d524a897c9030741fe3aec"],["tags/壁纸/index.html","05529e22d12b691eff70890a0c3f346b"],["tags/底层/index.html","27218c94cb3df34ef26122a6add31d12"],["tags/数据结构/index.html","e24ed7034d76ac53a057ac6a2ba72f80"],["tags/文件/index.html","7baf9418ee2a4560ef17bc35d570c9da"],["tags/服务器/index.html","52c9bb944c1bf593c8ae94d1da1fe9ff"],["tags/汇编/index.html","1f3b71c38f3b1b262ec2bb5ee1e0d0a6"],["tags/算法/index.html","bab577a8e465eaed83b646e8ac930214"],["tags/记录/index.html","d4427acf53d8963d63009ac2a15feaf0"],["tags/软件/index.html","8895a61cfa9adb9e7cc60e35027aa07c"],["tags/通信/index.html","f66366130591ad64757136fe9488dc61"],["tags/链表/index.html","fd21c15c6711f41b3c174e94ee514314"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







