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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","5601401028c2d79aedd251f7c2f77df1"],["1970/01/01/nvim/index.html","d24a4bd74d6d138ddbb98c0e53b49332"],["2021/02/18/Git学习（个人记录）/index.html","84cc2b2b6d3d046ec36fbb992a97dc40"],["2021/02/18/Hexo博客搭建记录/index.html","c95cb70cadee9df31ab1bf1af25d8a48"],["2021/02/18/IDE配置/index.html","667d748c131e5e3770472b2515813247"],["2021/02/18/初识汇编/index.html","0b3f633699512e26273dbe12726f9c19"],["2021/02/18/链表与指针/index.html","13bfee38bb9c9dcee89b91814a1d4d6c"],["2021/02/22/Topic LinkedList/index.html","ac5882b1e078932a6a96e9e6385014bc"],["2021/02/25/一些设置/index.html","513b930612d9236993f7a9a0d5bd8a70"],["2021/02/26/WXY/index.html","8a235b6adf4284c233c28959f90d38f3"],["2021/02/28/大二下课程推荐-计科/index.html","a24e9709dfc75afddbc4684cdc64406c"],["2021/03/04/Linux-notes/index.html","cb203634eb521854465200760b9af567"],["2021/03/08/data struct one/index.html","7e035e926280c098f239d13ab15ab7cb"],["2021/03/17/data struct two/index.html","43b9f835e72f79fed83ae5c0b32433d7"],["2021/03/22/STL/index.html","658b7e7c9fc6ed0c8bf4ae4802d0e3fd"],["2021/03/27/Battle-of-Tanks/index.html","2406a707f6735271429fc9a0dc60cc03"],["2021/05/01/MySQL/index.html","97c4d3fddaed07b554bf8b7123978241"],["2021/05/09/HEXO部署服务器/index.html","91c22038d925a4167e2158750a585011"],["2021/06/04/vim/index.html","1e32402361b13137d57455bb6834a7f3"],["2021/07/13/oh-my-zsh/index.html","dbced02e9cd9c4fc5e19447b53079e06"],["2021/07/14/HTML/index.html","d659d2191c09311cec54fd5ff55aebbf"],["2021/07/19/Maven/index.html","6e6d659100be8e027b6dee6063d082a9"],["2021/07/20/随机数（C++)/index.html","22c86f3c00fe44841cdcc1c535c190b0"],["2021/07/22/data_struct_01/index.html","ddc8552a3588bfcb7aac98ddfebf43cc"],["2021/07/22/滑动窗口/index.html","e2ad1d417a084a0993560cbbd074cf11"],["2021/07/26/Tree/index.html","e24f457ca80cdd1e1b5b4172327983ac"],["2021/08/02/正则表达式/index.html","06731f5094ced9827f310a4e58e259bb"],["2021/08/14/CSS/index.html","e84969c59127075882075899d7f9a3fe"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","8097f4dadd9de68ca82e2b691a2375ef"],["2021/08/19/Windows Terminal 美化/index.html","55d1cdc318adeba30b433f6b1547880b"],["2021/08/23/EROOR/index.html","565a26ba62ab24bb632874676add6c53"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","9d7bc4734a1e63f8808f90438670e687"],["2021/09/07/编译原理/index.html","2b83ee5457ce7c46b8acab565778f4ee"],["2021/09/27/网络是怎样连接的/index.html","9119d2eef22d3f9bfd92ca77c1341f4f"],["2021/09/27/通信基础/index.html","26812d939590e427419b907d146db887"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","94c2bb7989b2f3d56eb697e526e992e9"],["2021/10/22/vlan配置/index.html","59d22d486cb84cb0a5f49c8288f65cbf"],["2021/10/31/实验三—子网划分与静态路由/index.html","57ed51da003f3861fe20e3ca746c7da5"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","035cbfe6e39415353c024f331eb09a92"],["2021/11/17/硬链接与软链接/index.html","e388bff060b52db96f5aaaaaf72bdcbd"],["2021/12/01/SQL20题/index.html","2f82c719d73fac1ed7c8a5d23237e38d"],["2021/12/08/实验五：Wireshark抓包/index.html","5540c098c3f733002a81f8e38663e2a6"],["2021/12/15/CentOS7搭建FTP服务器/index.html","6b6e1e978205ad6add7130043b74677b"],["2021/12/19/CentOS7 安装相关组件/index.html","950718384b9f76dbf57ff35fe052c56b"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","4481fd085a4b539a6eca38d1de7ae275"],["2021/12/27/Vue/index.html","60bf5781f1442ef745780071c80aa4ce"],["2022/01/08/ArchLinux系统安装/index.html","16d915437800ad464de9822ed0d9f0ff"],["2022/01/10/ArchLinux软件安装/index.html","11a5f8acbb7afa44bc8efb0d10069974"],["2022/01/11/ArchLinux开发环境配置/index.html","b1718ed74ba53954b926a7965d8b830c"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","5865b716967aff8748b7dcdf65012aa5"],["2022/01/22/DWM/index.html","1554cb130a6c09848871f8afaf778593"],["2022/01/26/MySQL性能优化/index.html","2e8f435622fcbb5f9a0b0192f019bf6b"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","c6875863711c093515af08445e1af80c"],["2022/02/27/ArchLinux安装wine/index.html","cffdb12625881741ff1ee55e1e8eb0f4"],["2022/03/01/ArchLinux安装VMware/index.html","7dde53058b8e699efb04c64bb10a0de7"],["2022/03/01/ranger/index.html","275aad808d2dbf323dd573d49af040b6"],["2022/03/02/ArchLinux PPPoE拨号/index.html","f81985fb0edbbcdd922a613b9f8271c5"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","4e9c25a62db9a53c7d3694cabeaec05b"],["2022/03/16/Linux文件和目录管理/index.html","512680282d870fd1c574b1e3e7c8b4b4"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","1b53d53d71e15f97f7a114e62c5d49c1"],["2022/03/20/Linux用户和权限管理习题/index.html","21f8db72a5a78fb3abe78778896c4c1c"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","3376b13deb4ddaa28e99988bac54bde7"],["2022/04/02/ArchLinux安装MySQL8/index.html","2be49923dc653fd407ae97189d217d81"],["2022/04/13/Linux磁盘和文件系统/index.html","029d185a5fa5b06dc7b5010d96ce3753"],["about/index.html","b764c70f7781ca093cd6120247bca69d"],["archives/1970/01/index.html","650c3f67eaa4ed0e85c3cb7854be0885"],["archives/1970/index.html","c7f4a184bc9ac58ec4f0045ff36840cf"],["archives/2021/02/index.html","149ef2fd163e8509ef745590d0a6c303"],["archives/2021/03/index.html","64e4e2479b377b3b921509d39a110fb3"],["archives/2021/05/index.html","122c1cd076bb415315eed982ec02086a"],["archives/2021/06/index.html","bc492c6a61b93c7440ab79604b099149"],["archives/2021/07/index.html","de5668dc803c33152adf4c5bed425fa6"],["archives/2021/08/index.html","d8c0a66e5b38d19a474356026dd2a0ae"],["archives/2021/09/index.html","924e96442670f0a310ffedf80e32279f"],["archives/2021/10/index.html","e9140ad4edbe2c230e14f1543fed8b72"],["archives/2021/11/index.html","637bf2fa5aa7f775042d6a0854a57a46"],["archives/2021/12/index.html","3def2a188085c777c6d798323493a685"],["archives/2021/index.html","a398190c9fce05a08fdf78eb9bbefc6c"],["archives/2021/page/2/index.html","bf57d2c74ca0ffdd8cbadfeac8796394"],["archives/2021/page/3/index.html","f51c2e51c978c1d8aa445ad048fdbbbf"],["archives/2021/page/4/index.html","9220c288254c54bf79e613131b4d9b35"],["archives/2021/page/5/index.html","2ab64d71f1e96cdd27eff9883e485070"],["archives/2022/01/index.html","ddad01a380283ec41251c0638f1c7434"],["archives/2022/02/index.html","cfd46a3dd35d4b2548f4734583b4603d"],["archives/2022/03/index.html","9ac3d67b088ff9a97d65ccb9ff1f4947"],["archives/2022/04/index.html","f727829e40cb7af3ac0afa6e636c580f"],["archives/2022/index.html","61ce6f12b8dc5b170d3e2aac446cb772"],["archives/2022/page/2/index.html","e10ffe1963eb06e1ac0b6ffebf742a8f"],["archives/index.html","fdcd3d87381f8df790d331d70e6df812"],["archives/page/2/index.html","5fc0d5617576d88235c55ea4a8f83683"],["archives/page/3/index.html","2b9373afd521e69fab253da307677388"],["archives/page/4/index.html","9ea2a5877832c5e0255516ca7da3d20e"],["archives/page/5/index.html","9ee5e5a2fdc39c628c8af03071877262"],["archives/page/6/index.html","b87f87c8fdae100b6a2895ceadd21592"],["archives/page/7/index.html","938490d07f4f8248f4eeeaf1b0d40f3b"],["categories/C/C/index.html","143804800dd832edf00640f6f277fcd7"],["categories/C/index.html","3da6cb7aa83957dbe51fb41da2fb9d54"],["categories/Linux/index.html","dac09d9030360fc019856aca10ad3cd0"],["categories/Oracle11g实验/index.html","6e63ca900708c26520d9edbf10fd8833"],["categories/Windows/index.html","6ca3a546165da5ffd4acca9e7748e919"],["categories/index.html","4faffa6f0d72318d9fbc60c360884e72"],["categories/javaSE/index.html","8b73351c6b196c95a227715295115003"],["categories/tools/index.html","e330c6f75f963599856d19a81a7670c6"],["categories/wxy/index.html","5a886164123c5cf26f77730592eaa25a"],["categories/个人/index.html","be5bdd8f52a53a9a83d8eae5610139b6"],["categories/前端/index.html","d8a04ac52bcba08703241dc5bd751533"],["categories/工具/index.html","df3c69c11067f4b005aea4d2e92b4916"],["categories/数据结构/index.html","9eafd7b340efe255a866b1618b6807ed"],["categories/笔记/index.html","13b669b8ec8566756659fb249c390866"],["categories/笔记/page/2/index.html","3d54367b8f230d4c42f1cdfa0bddb2a6"],["categories/笔记/page/3/index.html","93177ced2a99312445f49b8fdf0fd3b0"],["categories/算法/index.html","82dcc879d47918d185c2eb078eb06c12"],["categories/美化/index.html","216506754743270b9a0228704e3b13de"],["categories/计算机网络/index.html","fca844e1f58567edc4cde241ba3175fa"],["categories/计网/index.html","248df7be04c71631828b8af609c2146a"],["categories/语法/index.html","31cc7589f8187f292b3a43d2f2c9e921"],["categories/软件/index.html","590baf6d148ddee982aec63ad93f8c96"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","3d770960b849326ca3d4bea738c2fe21"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","13bd34e89ec64a69b561553c8ebcd348"],["page/2/index.html","f8b45ca040dfe0b42c34234cfe3ad239"],["tags/Burp-Suite/index.html","d04e0268be1a4c0f3a7294978846698c"],["tags/C-数据结构/index.html","20d85f48c85d246ab0e9fe4a15b1b8dc"],["tags/C/index.html","0c4ab709cc52be5f519e61ee8636a070"],["tags/CSS/index.html","4eb767477123240255bf22126fae4c15"],["tags/Git/index.html","170815e46be33013f1983126d021406e"],["tags/HTML/index.html","50acf6623f46a178482a9514bdfd172a"],["tags/LeetCode/index.html","dcfc0e2f43df69dda21a110f48e9f140"],["tags/Linux/index.html","4b29ddcc58380f6471c183b5029a0125"],["tags/Linux/page/2/index.html","e0f3aacc1ed0e3dfd2bdb5f3203c2294"],["tags/Maven/index.html","24695e290dc718e996c0d8b83be5af99"],["tags/MySQL/index.html","e1fcbfa9088a2dfb691329c87d6638b6"],["tags/Oracle/index.html","9578b58a8800249377aa1f189f34ab9f"],["tags/Vue/index.html","fe26754169b1cdee0a547dc695a71254"],["tags/Windows/index.html","4ca1557e818bca3989957a5e2384cfb7"],["tags/Wireshark/index.html","29782fef4ad3780d96c66fcef313a751"],["tags/index.html","0bc2bb50b159b2c7e84c5880089f788d"],["tags/java/index.html","ae7383794a0d2fe2e05dc409d5602357"],["tags/route/index.html","9e0b6b689b55f3359d9336048481181b"],["tags/tree-java/index.html","7c86fbef9ee26e2144c5b6bc704aafd4"],["tags/vim/index.html","9f92f4563d5877fadc11bab93bee66f4"],["tags/vlan/index.html","14c4382fc6ab5d2033f618b0bb0e161b"],["tags/wxy/index.html","ecaa869f4fd5f83f9844732cd3bc061f"],["tags/个人/index.html","df1fcbf2b653391f3b25c2900b7e066b"],["tags/书籍/index.html","79ea955fae63e5620cc78b587b4415fa"],["tags/博客/index.html","fa2a2f79ef3359d912a0070dca7f7193"],["tags/壁纸/index.html","8153ebcf0372aff11eefd49c74161943"],["tags/底层/index.html","a3a1be781165842445ff6f1f7b2dea99"],["tags/数据结构/index.html","bc3e6f207328debe29335d67469c8340"],["tags/文件/index.html","f6d1fccf6a692be69d1fb64927f13681"],["tags/服务器/index.html","561e3900778ad71ec7e4b61a58aa07fc"],["tags/汇编/index.html","646d30480861ac7816693af5eaa7b18d"],["tags/算法/index.html","7ee49c6d3af22cf4fd91b90692a30392"],["tags/记录/index.html","58ef3ac96c69228acd6045a40f553248"],["tags/软件/index.html","0118f5c74515eacb73b6433dad378a3d"],["tags/通信/index.html","3a834eacf005b445e5d5b2906824e352"],["tags/链表/index.html","6a85b95512098af7f07f80a73fdb22f0"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







