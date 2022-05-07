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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","32f47554032243d7839efbfb1e08a9f3"],["1970/01/01/nvim/index.html","fd89e97798bd6a0b0d45ed5cf4fdf49e"],["2021/02/18/Git学习（个人记录）/index.html","17acefff451c6b9c17111cd257390e8e"],["2021/02/18/Hexo博客搭建记录/index.html","cdb8c4c5e2a762641aa1aee2d088dbcc"],["2021/02/18/IDE配置/index.html","101a20b768e59e945a41b3ff7854fd4e"],["2021/02/18/初识汇编/index.html","849eba36639375591801508a7097f429"],["2021/02/18/链表与指针/index.html","9bc8b3de02445d0eb4964b0fc459085c"],["2021/02/22/Topic LinkedList/index.html","66364756c1db407cc24ac7c752c5c0bd"],["2021/02/25/一些设置/index.html","c1ebb40a723ab209b548e916a4faa0e8"],["2021/02/26/WXY/index.html","77309a6455b0eb15fce5ab8bbbc92b0d"],["2021/02/28/大二下课程推荐-计科/index.html","564a18aeb1614ffa41f54e1ff0121fca"],["2021/03/04/Linux-notes/index.html","98ff8f56917140a77305e7014bca8af6"],["2021/03/08/data struct one/index.html","54ec7c4d94b6dcc616aea60bf64f650d"],["2021/03/17/data struct two/index.html","acd675ffb875ae76990990455b61a906"],["2021/03/22/STL/index.html","87bce7f1bd168ea9551a1e3fe5ddcaad"],["2021/03/27/Battle-of-Tanks/index.html","6db7da85b5155b40caa9827625c26ae7"],["2021/05/01/MySQL/index.html","384bc4c52b8eb8f5b1e8f4cbf935bcab"],["2021/05/09/HEXO部署服务器/index.html","a290017fd76c337c8e9e437244a10f26"],["2021/06/04/vim/index.html","2daa3372569afe95acfa62a3d29abc85"],["2021/07/13/oh-my-zsh/index.html","e0980ba0dda533fb794990b5f8605148"],["2021/07/14/HTML/index.html","4c316422f3e40f325a525526415ce78a"],["2021/07/19/Maven/index.html","02fd4d4f306486b3c3768fc3e47fe6a1"],["2021/07/20/随机数（C++)/index.html","a9be9c85923a89137b091da7c392b3e0"],["2021/07/22/data_struct_01/index.html","88532bc2d24eb087f558d5bf9a3c1c27"],["2021/07/22/滑动窗口/index.html","b67e6ada7f02c8ba964bb94f245a2778"],["2021/07/26/Tree/index.html","41046d8d311ddfdd16552a22c002a89b"],["2021/08/02/正则表达式/index.html","5c1a9c8d8150f7164ca30bdd947b27da"],["2021/08/14/CSS/index.html","23f0a53182f0893e078574d9913f422c"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","75ae2fa57c4cee645474472afe553f52"],["2021/08/19/Windows Terminal 美化/index.html","09933ec1b11ee7e055cc3ae8252a6ff6"],["2021/08/23/EROOR/index.html","c82c31a08b191746b98cb8d792219db0"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","1bfb5c6761bcaca491fb9736eeaaa6b1"],["2021/09/07/编译原理/index.html","9f2b453e0e5c388814f456e8a994e3c2"],["2021/09/27/网络是怎样连接的/index.html","84429fa6a7b2268ff7faf3d6d06614a6"],["2021/09/27/通信基础/index.html","79a425decf3e13ac520e9eca23e1265f"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","ee5747c9efc4184d1b09642da209c16a"],["2021/10/22/vlan配置/index.html","56dfb3950645022107067eb4a79d7e58"],["2021/10/31/实验三—子网划分与静态路由/index.html","02c3c840643fccb082e051e84197d119"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","6f6e354e4830fabc0a9ded07cdf89925"],["2021/11/17/硬链接与软链接/index.html","8e83836473c9344799206ea13178a7c4"],["2021/12/01/SQL20题/index.html","a772ccc172687c9c8ca543586afea331"],["2021/12/08/实验五：Wireshark抓包/index.html","9573432f215003e4e90f5779a5ca865b"],["2021/12/15/CentOS7搭建FTP服务器/index.html","f7c35244f803db1298bc347a24ff656d"],["2021/12/19/CentOS7 安装相关组件/index.html","442e0fccfcd98f89c2985dc910888c8c"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","0bdbb683b3fa1a923d908949f396968c"],["2021/12/27/Vue/index.html","a84cd567fa5f8f382c3a33bb5305ca18"],["2022/01/08/ArchLinux系统安装/index.html","f2429ddf606141d2a5c9bdb91d7ee1a9"],["2022/01/10/ArchLinux软件安装/index.html","bbbb72ea2225d6eca24166b73616b971"],["2022/01/11/ArchLinux开发环境配置/index.html","26af6ef67b2438f11c19a3e839b9b48d"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","15e737371abc6bb49b4ffa51952831d0"],["2022/01/22/DWM/index.html","493d69f9f05411d686df53ce073e7d66"],["2022/01/26/MySQL性能优化/index.html","00d82cfb587e8d6c015b42b0a02a12c2"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","c1e62b2f1e77835c3879fa6fa0e59c01"],["2022/02/27/ArchLinux安装wine/index.html","cc20993a18bd696bca26583f2cd1841b"],["2022/03/01/ArchLinux安装VMware/index.html","d6e7738d5373d5a2e28dc47355b1957a"],["2022/03/01/ranger/index.html","59db63628e7ff629a73fbf97a538bdaf"],["2022/03/02/ArchLinux PPPoE拨号/index.html","6d228e28b2047984582831fda43ae4f8"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","a419deb87ab758396ae96ea1d279659a"],["2022/03/16/Linux文件和目录管理/index.html","80fb13962d28ce7e315f2c9fe505a378"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","dc02f92bbfdbd3a614654c857dbaa455"],["2022/03/20/Linux用户和权限管理习题/index.html","bb0414d00ce20c4ac22e77259d5abc24"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","2b1c7e3926f30b83c22d0cc00af82932"],["2022/04/02/ArchLinux安装MySQL8/index.html","81a07e6d27c1c883bf8b54ad899b4266"],["2022/04/05/Oracle11g实验六：Oracle-安全管理/index.html","6702c28225a0cb0677262bb9667505f7"],["2022/04/13/Linux磁盘和文件系统/index.html","5960ea4446e0c2a1b6aab6345dcaf0a6"],["2022/04/18/ArchLinux触摸板/index.html","df534f21a5d243d84460ae724564c3c3"],["2022/04/25/FreaMarket/index.html","3d494fe8fa5849ea1fa88bf33505e287"],["2023/04/13/Linux软件包管理/index.html","c324bc910957ddc0198945e1ca057b53"],["2023/04/27/Linuxn命令练习/index.html","7bd1e69c7a31be79a082aced898721e4"],["about/index.html","98b793f903830ed499eb3d630dbef3b9"],["archives/1970/01/index.html","9f27e3d1d34f40143d7ff2f12f336e8e"],["archives/1970/index.html","38e54ac2aef52611179d7d22df98bbfd"],["archives/2021/02/index.html","795ea51572ed6b72cdeef33c175d1b84"],["archives/2021/03/index.html","a3e13c85be821db9f257a03ce3bd670a"],["archives/2021/05/index.html","7d529eca28cdf544021cdc7c2eef49ec"],["archives/2021/06/index.html","dbe4c37664dc195f7c16764912d292b5"],["archives/2021/07/index.html","318d0c22b1129970e3a34c72ca0d95d3"],["archives/2021/08/index.html","53bdd571eae23ec93da83f376035beaf"],["archives/2021/09/index.html","9f3b9014b6e6d44b0220a3cc84f1a16b"],["archives/2021/10/index.html","3697376647a5d98f96a7cbbdb4fafb4a"],["archives/2021/11/index.html","ceee705e07daa5b889fbc70971e7283d"],["archives/2021/12/index.html","1dac8e9f01d4e4729bdd622e7bcd5b5b"],["archives/2021/index.html","2f097fbdb81d667b1d37847dc3562b5b"],["archives/2021/page/2/index.html","fe8428535a8456b7e955aefc24e94ec2"],["archives/2021/page/3/index.html","20114501df2311acacade7843160c82e"],["archives/2021/page/4/index.html","de63aea2fdd73cb57650da5cf4f03d60"],["archives/2021/page/5/index.html","465da19cdcdc54cfcef2d2851b36cc2f"],["archives/2022/01/index.html","24124ee4c19813bd10f146369369fcaa"],["archives/2022/02/index.html","45e188322e1d3cff3a032c33b50d236f"],["archives/2022/03/index.html","72556928b95b0c4950ec363c3c54ba5d"],["archives/2022/04/index.html","1538fad1b3bbe01551566c6e8d769426"],["archives/2022/index.html","fb334551de1072f63d980553622ab720"],["archives/2022/page/2/index.html","ecdd69f02a1c45e93b4ae05c17dab483"],["archives/2022/page/3/index.html","b1ef130e325daec3b0153d736ef04fc6"],["archives/2023/04/index.html","d0a544f3bcfc13ff21e8d702485fedcd"],["archives/2023/index.html","879f76a9b98eed8ef99155d875f8d7fd"],["archives/index.html","7c0a502740cc137cc8b504ba3cdd22a4"],["archives/page/2/index.html","06b79fb91becf4931612f4c5ed747bd7"],["archives/page/3/index.html","2223953778b6ba6242a279bb6dbc1c87"],["archives/page/4/index.html","37bacd434e7c70e4219dbbc7744fd5d0"],["archives/page/5/index.html","a72a46db0f453f28d891eeec09f57bdc"],["archives/page/6/index.html","5af9b77142bce32bf048666620a76c4f"],["archives/page/7/index.html","4f869f1151571f8e40c261b3a5706175"],["categories/C/C/index.html","7a88e0561a3e5e7728e475cd3e967c41"],["categories/C/index.html","97e6c140c541f21a42266b4b09800b67"],["categories/Linux/index.html","8e6b197fbbab40dcec37fc5baa355b76"],["categories/Oracle11g实验/index.html","b588f8b86cdd8fc171fb2152128bae28"],["categories/Windows/index.html","1b7c950120e531d957c6784d02ae9d5c"],["categories/index.html","73b843cc00fdb2940f6cc747daafa119"],["categories/javaSE/index.html","c58fa933f3724bffa037af852af2507c"],["categories/tools/index.html","343ee353912047ae26ad47d0b690d800"],["categories/wxy/index.html","cdb0d503fdd85d7b29d63f1b0025cd49"],["categories/个人/index.html","6b67c20025c8387ed2201465149e7239"],["categories/前端/index.html","7433de601f94236a1547b2d3a9417164"],["categories/工具/index.html","e37f76947ad4f2bb1bd2dc7b44941bb8"],["categories/数据结构/index.html","cd35ef4624c5780ef155b3aec667cf84"],["categories/笔记/index.html","faaa654c17eff323de968ac558957446"],["categories/笔记/page/2/index.html","00905f81eb3f4f8ba8acf806e7653f85"],["categories/笔记/page/3/index.html","ac6a440e189683b12d7b00288ec7bcab"],["categories/算法/index.html","759b3447b3a905cc5fe9e2d8598d1ca2"],["categories/美化/index.html","e3bab5ea340ab2aa436285f1e4b06dee"],["categories/计算机网络/index.html","5a22896f63b86b1cc4f1aba7288cd743"],["categories/计网/index.html","46f9ea3df25547f6397a305627abbf65"],["categories/语法/index.html","9995e9ee6bc229aa0fe211f703ef0918"],["categories/软件/index.html","d7d7a732f05759d4e861b93ba9895bce"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","ce4862a3dd552229dc1df692ddeccecc"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","3fad351809a6cdcdeec70475629ed60c"],["page/2/index.html","7e368c294578c1ea8965b5a03e1257fb"],["tags/Burp-Suite/index.html","7693363986c014a4af5af1542bb3a07f"],["tags/C-数据结构/index.html","e3d0a4cfda4a4c2ddbc1543585ce17d8"],["tags/C/index.html","d6c796c0e3ed532c9a44ac75262f7764"],["tags/CSS/index.html","16b12421ae640ce82fbfb7a653903905"],["tags/Git/index.html","d4e931a76cf2c665eac6b6c86cd14be2"],["tags/HTML/index.html","530f54929c835e8b210341ec36f3a600"],["tags/LeetCode/index.html","5cf4bb05f13c57d1ae9a16adc9045208"],["tags/Linux/index.html","403c2b246951f600ce724fe7f76e63e9"],["tags/Linux/page/2/index.html","a69fb08924ecd985f3aade377cd364ec"],["tags/Maven/index.html","62ce5050bae81d4328c5be93d6e63d2b"],["tags/MySQL/index.html","164fb4cd45510f7e60f4c7699cb28917"],["tags/Oracle/index.html","1a3b76aecc01db7e9dfde7e1c751bb5d"],["tags/Vue/index.html","2637d1f69f49bf27ddf252dfb1d45dbd"],["tags/Windows/index.html","e3f0f598f783be7d2d2777aecc615e0e"],["tags/Wireshark/index.html","4ce9d5a90344672640f6b3b2cab67c07"],["tags/index.html","0b6f7c8807b90f34e8fbed3c37ff86ec"],["tags/java/index.html","4deac1ce0cf4c5270b161509aa4e52dd"],["tags/route/index.html","54f8e33850b23f38fbc9d5a9c9715b4c"],["tags/tree-java/index.html","dce6e8f194f9b4d106c8230bded00468"],["tags/vim/index.html","a43698d01d6b249df736b318ba1e700a"],["tags/vlan/index.html","eb0c8d621a9d3d4d2a664761afba0394"],["tags/wxy/index.html","a4f163a16b8d783a078316b2541d8812"],["tags/个人/index.html","863436c14c3e895a44063dce5c8dab20"],["tags/书籍/index.html","6179ea553c2b6c335dcb4267d328706f"],["tags/博客/index.html","4aa41b555e807e5e4b9b3a397c417563"],["tags/壁纸/index.html","31d96878ecb4f2ead06f73cb5e928d24"],["tags/底层/index.html","6d9425539ebc465d7e4973aa073f739f"],["tags/数据结构/index.html","75fc6b9abc03e0f295b75763e15ea91c"],["tags/文件/index.html","a58801e2602649bd4df6365bd606b432"],["tags/服务器/index.html","4fcd99cc0b14a794d79bcc327a05ddcc"],["tags/汇编/index.html","a86a9360e84e21c6b41ed3d95d7930a3"],["tags/算法/index.html","aa5911bfc12611ea03fd080a224a2c4f"],["tags/记录/index.html","d7cfeed80d678217accb58ba042a1897"],["tags/软件/index.html","0c4f4723579571a0911246687c7946b7"],["tags/通信/index.html","21bd96e97686af4e6c975f516c44336a"],["tags/链表/index.html","82ff4d930fddbd3e42321415b72cb8be"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







