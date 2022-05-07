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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","ce844539e53de9b57ddc6cc7f4ee4f89"],["1970/01/01/nvim/index.html","b75c59e8b18e57f92d8cdafae9c896ac"],["2021/02/18/Git学习（个人记录）/index.html","32dfafe6b920a19833ec971d65541e59"],["2021/02/18/Hexo博客搭建记录/index.html","8d139a58c230ad3041dfa3c90977853d"],["2021/02/18/IDE配置/index.html","f7ab78cbb1fcad072c6cbf663df24709"],["2021/02/18/初识汇编/index.html","53a284aab04bc0132a592c5d4ff48ce1"],["2021/02/18/链表与指针/index.html","1283ab640857c0ee10cfb2983925c90e"],["2021/02/22/Topic LinkedList/index.html","7850fd3d57507717556ed5882c0288e9"],["2021/02/25/一些设置/index.html","e795165064d8ed1c0fddc895524128f6"],["2021/02/26/WXY/index.html","ba8f0646f868b03d88eddc3679236d69"],["2021/02/28/大二下课程推荐-计科/index.html","eb3cb4aa515b1245b51255779a8c4701"],["2021/03/04/Linux-notes/index.html","2c0f6930dfe2fcc1c7cd8d0a3814ad46"],["2021/03/08/data struct one/index.html","575ed4af93e4252f2b6234121748eeee"],["2021/03/17/data struct two/index.html","a92362ccb3f25812ef1123300833c6a1"],["2021/03/22/STL/index.html","1db96252aea09977db348e509d935c32"],["2021/03/27/Battle-of-Tanks/index.html","c432b31b82db83460d8daa7fcafd8726"],["2021/05/01/MySQL/index.html","46394b2f3864d5b0c13cb7bb7f854451"],["2021/05/09/HEXO部署服务器/index.html","cf036bc2553931c486ffd8e71fc6bd27"],["2021/06/04/vim/index.html","5cddfa0bff41ab69ba5ea2aba1406e74"],["2021/07/13/oh-my-zsh/index.html","071008a82b39b52f3dee03aa0e417c09"],["2021/07/14/HTML/index.html","506aa6083a987ab33b11652df1e089a1"],["2021/07/19/Maven/index.html","097cc516814f619cf8807534e5a97853"],["2021/07/20/随机数（C++)/index.html","1c9561e584e9c2d343c81304243ca066"],["2021/07/22/data_struct_01/index.html","101d6ed88964edb34aee73c19f0615cb"],["2021/07/22/滑动窗口/index.html","f04f4931f44d9f636a2b1a44572cd766"],["2021/07/26/Tree/index.html","a5b35ee217be5dc6034c660e86a6ee65"],["2021/08/02/正则表达式/index.html","eaafe271602a076b354bb2203d722380"],["2021/08/14/CSS/index.html","1b4f6d03690bf3181153fc7f01702e85"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","63ca03ff3807e1c062c7d24888f687a0"],["2021/08/19/Windows Terminal 美化/index.html","c1f29a0fee1515331e60bada032ecee9"],["2021/08/23/EROOR/index.html","a6a00b83c44bbf63276dc603918b3250"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","1e0eb76e6cd9fb6a4439e080e9ec47a2"],["2021/09/07/编译原理/index.html","67cf86d7e532de81882671ae38d8b3ac"],["2021/09/27/网络是怎样连接的/index.html","0fcbcf41d5d8f9afb7378e4b620610ed"],["2021/09/27/通信基础/index.html","ada1c3a2d3f04e49a04ec0c41fa1ac60"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","7a1bacfef1eb925654fe962de2ff47a8"],["2021/10/22/vlan配置/index.html","d1a96d2866a2a9f586ba1235e70e709d"],["2021/10/31/实验三—子网划分与静态路由/index.html","c9b32da06b6d26db9cb93627591e8763"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","17d0edc7351beec38aa3ac6ff3eb284e"],["2021/11/17/硬链接与软链接/index.html","e69cb2f399b83649c363a135e390febb"],["2021/12/01/SQL20题/index.html","e0aed8d2592c67dd75cc64bb2b4a5a1f"],["2021/12/08/实验五：Wireshark抓包/index.html","174b07bdae432e5711ae8e3616f9ad20"],["2021/12/15/CentOS7搭建FTP服务器/index.html","3e065af056849c601576a956807db366"],["2021/12/19/CentOS7 安装相关组件/index.html","b2b720b1a21636a915b6e12dd372c8e7"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","ab419059316f4ad2d409509440fd6f11"],["2021/12/27/Vue/index.html","5973359e572fab2f97c9a7dcb5919c70"],["2022/01/08/ArchLinux系统安装/index.html","942e73bd29f8a63fa2de4a83a2dd6e77"],["2022/01/10/ArchLinux软件安装/index.html","57505de43752e8cedd04f12155071ccf"],["2022/01/11/ArchLinux开发环境配置/index.html","4c45018a9d0b77329e8b2226026f8718"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","8d45f32a71c7aa87156b58d38426523d"],["2022/01/22/DWM/index.html","bdfa2bbd73e410b3cf8707798e9c1729"],["2022/01/26/MySQL性能优化/index.html","a8541a3546a6d68f1100d2f06bf8fef9"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","25e37605ef2f027a06ce72105210db80"],["2022/02/27/ArchLinux安装wine/index.html","c4e8a450be81c9796360b7dd74c786ff"],["2022/03/01/ArchLinux安装VMware/index.html","156b9cf2a9b6fbc4665c5d2fa14fc4c5"],["2022/03/01/ranger/index.html","1805505c7c5d000c02fdf8149a1c34a1"],["2022/03/02/ArchLinux PPPoE拨号/index.html","bfa05f039533f41059a227db32d78fe5"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","e15d541b69e0c41bd66c81696c56476e"],["2022/03/16/Linux文件和目录管理/index.html","282a547b045eab9c08271cf060ff888d"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","b40d61327c82db7d40c0f5cf88fc7bfa"],["2022/03/20/Linux用户和权限管理习题/index.html","e25e2a56a5d93fc7de1b900b04163969"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","4e5cadbffdf7b2697408493b42ad9f6c"],["2022/04/02/ArchLinux安装MySQL8/index.html","35de4425e8ea2c82c0c9c7593feea713"],["2022/04/13/Linux磁盘和文件系统/index.html","74e7154937303559e92d458c8a321f57"],["2022/04/13/Linux软件包管理/index.html","afc2507770c61a6d221175eb8a283798"],["2022/04/18/ArchLinux触摸板/index.html","2751e543ceda462770c87b3d80080b3c"],["2022/04/25/FreaMarket/index.html","beec56a2098c59dd5fe6c41223b7db3e"],["2022/04/27/Linuxn命令练习/index.html","779f4b08f50e5f90f26ecf574e4f791a"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","3ee035e94bb18dd3505b6d89f253e27b"],["about/index.html","d2b160deceeb6ea40ddc61e330adbc70"],["archives/1970/01/index.html","ce08656c4b8d0165311f0f9b9fe9dd6b"],["archives/1970/index.html","77d1ad10150e3ff1b0d8da065cca96e3"],["archives/2021/02/index.html","b0689240914f5dfa3cb09055dc0d31c1"],["archives/2021/03/index.html","6af4d3a16e1aab1df0de2df24d518539"],["archives/2021/05/index.html","2ef603f9570e6364e55488b083714c10"],["archives/2021/06/index.html","8a2ecfa9bf10de46255fe7e521a6badb"],["archives/2021/07/index.html","23dadbbca25aa7077776d61c435792be"],["archives/2021/08/index.html","9b9bc056a62ee76dbb0bb643023ebdc4"],["archives/2021/09/index.html","03afc74665178cbe62ed31ac5be53749"],["archives/2021/10/index.html","4682a67cce6eebeb73d3e926e6d298fe"],["archives/2021/11/index.html","1325e2c4a1537e8ad8451a653b555263"],["archives/2021/12/index.html","23b12ebf057a4b7f7537ae295e029ffb"],["archives/2021/index.html","3a9f962c60a5dd6feff8b8ec73571a66"],["archives/2021/page/2/index.html","2936ff75c5fcb4a9d93ba4562fe7d831"],["archives/2021/page/3/index.html","b926fa4f1c11fe8169f25b1cf3b417d8"],["archives/2021/page/4/index.html","7fea977e7bef267988040cb77024dcdc"],["archives/2021/page/5/index.html","cc95f24e2e2bcfe7a7990da6e83c6861"],["archives/2022/01/index.html","defeb55fd82da4a4c659bbb8fdd492a1"],["archives/2022/02/index.html","7a15902e2e36ae81862294acc028feb7"],["archives/2022/03/index.html","f1b698f89f76e3741c2144d8cd485fe2"],["archives/2022/04/index.html","647bd43eee3455477392b4e5d2dc1b67"],["archives/2022/05/index.html","ac03851e0e30715b0e8cc6c53bd8cd49"],["archives/2022/index.html","c12417222999d4ea956487603af097da"],["archives/2022/page/2/index.html","6923b2c05c33c8d1104185fc5ee115ed"],["archives/2022/page/3/index.html","6a50010aae4f3fd4b86cfb76d20155c6"],["archives/index.html","f0504e3ec5eca468fdd41f59dd9bf13a"],["archives/page/2/index.html","df6be6a963371b969b7d8d010d551e74"],["archives/page/3/index.html","aadffe01c10939b2a839a2e060c074c2"],["archives/page/4/index.html","6939c00e0fa1fc3a879788698d07f4e0"],["archives/page/5/index.html","961965a9bbeaceb00a357b9ecff1fb47"],["archives/page/6/index.html","06f9d362104f232597dffbf50f703cbc"],["archives/page/7/index.html","0798ec4391e9b784fa49d2e3a67175d3"],["categories/C/C/index.html","e58b3bf74fff62c524af9816aabb6c87"],["categories/C/index.html","7757afc1f95dd0e9e6e7febd39766de2"],["categories/Linux/index.html","d3d824413103d14633e4bbec0ddb0742"],["categories/Oracle11g实验/index.html","337bb6c27551db8897e5ac92a7971dda"],["categories/Windows/index.html","589a19bdbca0b0dfed7c6215d6490188"],["categories/index.html","3142e26d51acd17f068574a40970594d"],["categories/javaSE/index.html","d2027894d65e0276761ff36425e21d97"],["categories/tools/index.html","5021e14305c092e4e197e76d13e43646"],["categories/wxy/index.html","0082a1915a492e533e0ffd851fe6f2e6"],["categories/个人/index.html","ad74d631621866b7ddf7a9c83760f281"],["categories/前端/index.html","b3158c441792e67c57b63833660a2b7e"],["categories/工具/index.html","e1392526ead2490e31f0804023ab14a4"],["categories/数据结构/index.html","0f829b30aafdcf83ee1ea643f3c8c21e"],["categories/笔记/index.html","c8a2b7b9ff4f5a5abc9177bf38ff0322"],["categories/笔记/page/2/index.html","fe750a56550fc7ac31f481fa36f4526d"],["categories/笔记/page/3/index.html","cd7cc91ecc49bd2898411118a64f76c7"],["categories/算法/index.html","1ad9af4c9a6d4c690b77cb097e08a248"],["categories/美化/index.html","3c1663370b2d43378e5ac0111fc24c9f"],["categories/计算机网络/index.html","45b53b274866036ddb3da7bd26efd426"],["categories/计网/index.html","3e05021075f3c78ff6971e95fd9098bf"],["categories/语法/index.html","0c1f39a5f8c8a0e0240c5135e1ec74a5"],["categories/软件/index.html","128d84e53c2f9f2278e22a20113f9d8e"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","1f32a684beee5572f132eba3e1fd4133"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","c449324f29caee9aa58b17cd0466918f"],["page/2/index.html","775329173cad6572f6f6f0c45179e344"],["tags/Burp-Suite/index.html","0931dcbaa4d7e954d026fd867aaf3d39"],["tags/C-数据结构/index.html","8aa9fbcc9d3841ad2ac15ca9aedf52ad"],["tags/C/index.html","7ad9282ffaec70420bcb924d6a13a984"],["tags/CSS/index.html","d5a48bd373e2d5a952a0e9b5ac39aa52"],["tags/Git/index.html","822e1a593cc9cbf2e88c9bf91fcd23a3"],["tags/HTML/index.html","4fecc28c75263a2eef0b584beb0085fc"],["tags/LeetCode/index.html","628c06c9f687abc7db5ad1670379f28d"],["tags/Linux/index.html","f21c2160f130e36563a1e85d1e827491"],["tags/Linux/page/2/index.html","acd05515e25fc17ba81fea16535db4d0"],["tags/Maven/index.html","c89c2cb73c6fd764442b569181a9fc26"],["tags/MySQL/index.html","c100f2e920272d9c78eaba43e81e6452"],["tags/Oracle/index.html","57544dfee7150f4b90e57cb50707960e"],["tags/Vue/index.html","4bf7e9424a961444398768dbe7f667b7"],["tags/Windows/index.html","816773e30176720d0e3e7673e6ea88c0"],["tags/Wireshark/index.html","c675ef2d3dbacdecf17a02bb41f2b6c6"],["tags/index.html","54cb22d3b6088dc974caa971a9a828dd"],["tags/java/index.html","b3eb051e031c761c651ec412b6ad8048"],["tags/route/index.html","a78871d33bb92ce54125532aa9638d18"],["tags/tree-java/index.html","79e436471d0cb8a0f49f216cb21990e6"],["tags/vim/index.html","64fc2952b9010ca72b150a1b09dd49ad"],["tags/vlan/index.html","2fe28e39c2d47734b446d23f19e72251"],["tags/wxy/index.html","e0f81cb2e1746366c7a84c14e00412ef"],["tags/个人/index.html","b51522afc79221c177615d38c7673705"],["tags/书籍/index.html","e2db8180971fd479558bfe4040105349"],["tags/博客/index.html","9d467ac747ad80585f0b9c93c0288718"],["tags/壁纸/index.html","9514ac2203217192f299dbef3cb8bf68"],["tags/底层/index.html","40edf527dfa0b4e806d414d52f25a6eb"],["tags/数据结构/index.html","56343f5252d0fac89652aaa2d92e157f"],["tags/文件/index.html","52863a7467a15b4414d9d9f6693608c8"],["tags/服务器/index.html","d49aaa771ecbc6ef4de3afc251576f92"],["tags/汇编/index.html","f9737ff993f7bcd34ecb39305edd0db2"],["tags/算法/index.html","00076793653e73e3a611ced85d3da8f6"],["tags/记录/index.html","1e23325fcc6dc48a13b5753fb705897e"],["tags/软件/index.html","6f658981be0dfde3124adb8905003eb2"],["tags/通信/index.html","3d0f34208f843ba6f17b166f5fa64f9a"],["tags/链表/index.html","e6a0d624ba6d3eab60ff6038f2123c78"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







