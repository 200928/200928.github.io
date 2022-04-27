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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","c912cc8855f9d9cc3dd2ce424a071369"],["1970/01/01/nvim/index.html","38c8fe66f638dd0bd26fa67460a029ee"],["2021/02/18/Git学习（个人记录）/index.html","55be63e79c85783dde112abe181526b4"],["2021/02/18/Hexo博客搭建记录/index.html","fc0a3db9a75dba1537eb563e67c91e04"],["2021/02/18/IDE配置/index.html","083e54ac084920b63db0d611850e71cf"],["2021/02/18/初识汇编/index.html","4e5c0cf52fe93e2b7f744c2b3e29bea2"],["2021/02/18/链表与指针/index.html","b959a8a8016bbd07ac1403e946596177"],["2021/02/22/Topic LinkedList/index.html","b3955cd103dad4db1969e27343ca719e"],["2021/02/25/一些设置/index.html","24cd378259ae2734d49f38bf4ecfdd51"],["2021/02/26/WXY/index.html","55e98dc57a56c861fb6aebd0613297ee"],["2021/02/28/大二下课程推荐-计科/index.html","2d2d04fcaac506739ad820817e1667b8"],["2021/03/04/Linux-notes/index.html","cc15f98d13bbff3cde5fffa99a22da10"],["2021/03/08/data struct one/index.html","1ed41a820de8828515bac7b5c8da75c6"],["2021/03/17/data struct two/index.html","d0bd42ee69c55194c712097443f0beba"],["2021/03/22/STL/index.html","3b7538a835f9569c04ffb21004bd1930"],["2021/03/27/Battle-of-Tanks/index.html","bbe28edabcab62418aeee997b1185936"],["2021/05/01/MySQL/index.html","9e37cf8e69e74d843ba4a4b759988efa"],["2021/05/09/HEXO部署服务器/index.html","2b3284eda1355d800a6e711cbce2774d"],["2021/06/04/vim/index.html","db22aed87730056ca71e2095f7ca856c"],["2021/07/13/oh-my-zsh/index.html","ca7312043cafc29eb1a92ff45570c07c"],["2021/07/14/HTML/index.html","efaf14ad1558b59fea284c4c1d055609"],["2021/07/19/Maven/index.html","ef997d1dd8f78b41941feee65d618215"],["2021/07/20/随机数（C++)/index.html","e93b3a95f629430fe7842d9f299e937e"],["2021/07/22/data_struct_01/index.html","739971903f5e5d0ef32ba212dca37095"],["2021/07/22/滑动窗口/index.html","775982e8be8d1d8b1bb1d9252a52bc95"],["2021/07/26/Tree/index.html","c5c30909b18265e611433318b70fd3bd"],["2021/08/02/正则表达式/index.html","fb9de0068b7a86a06e3aa1dd896e8502"],["2021/08/14/CSS/index.html","cd0098cf075c9e4ce4748a01a04bcc48"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","3c53b85ec4db42887b1709ec95dae631"],["2021/08/19/Windows Terminal 美化/index.html","02d932e4dc264f7005068a5b3505ab2b"],["2021/08/23/EROOR/index.html","995f49605b539e55ea51038e4697e5c1"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","81a8092b0ac77234889bc5894f51ed23"],["2021/09/07/编译原理/index.html","3c472313ef304dca8bbab4a0f1e6ede2"],["2021/09/27/网络是怎样连接的/index.html","2670ceca7f67c19cfd623c70eeee711e"],["2021/09/27/通信基础/index.html","026579c65772698a55a980087210816f"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","74a99318ffbb3bac024b3cdec8c322b6"],["2021/10/22/vlan配置/index.html","ae9644b0183adc7d07aad8395eb0eb90"],["2021/10/31/实验三—子网划分与静态路由/index.html","d6c8d73360cfd27ca68567daa5545952"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","8cf15132557de612f846c925b68e931f"],["2021/11/17/硬链接与软链接/index.html","63955ec9fc8effcc45027a51746feec0"],["2021/12/01/SQL20题/index.html","be77a3f82283e9c7902e84d1eb2dba57"],["2021/12/08/实验五：Wireshark抓包/index.html","04ad188200a8f102bd245c2236399cec"],["2021/12/15/CentOS7搭建FTP服务器/index.html","ed309c407b4327bbf973ce0f6daa81b4"],["2021/12/19/CentOS7 安装相关组件/index.html","10d16255ff6694767cd68ff9baaa09e8"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","7b9190683129ef39f28a1e98a3fb3136"],["2021/12/27/Vue/index.html","2247d06a6be5f867f97f444e4506cc3c"],["2022/01/08/ArchLinux系统安装/index.html","0b831ad40c2c903496892576358db9e3"],["2022/01/10/ArchLinux软件安装/index.html","265373df2ea29449add4159cfcf4b43f"],["2022/01/11/ArchLinux开发环境配置/index.html","64e4c3438dc35652497666bd19fbd39c"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","5311facb15921ea85088867f99cf92b5"],["2022/01/22/DWM/index.html","9f798b93dc6cdd848c773b05ddf0cb34"],["2022/01/26/MySQL性能优化/index.html","f9c83eb48e55a3bfb2a12945b682b878"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","0d6f21e43997267fca4d52d7797ffed9"],["2022/02/27/ArchLinux安装wine/index.html","1f7f8ccf51d3e9771299167b09644f7a"],["2022/03/01/ArchLinux安装VMware/index.html","28be30bebaad7f4829d84a028205376c"],["2022/03/01/ranger/index.html","0d6aed2dbcd17ca6156f7449f17350d0"],["2022/03/02/ArchLinux PPPoE拨号/index.html","b83438d84102aed8934b3ba6f1ca996c"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","20274e13aee401813e7ca85f972ce719"],["2022/03/16/Linux文件和目录管理/index.html","07c5a87d388fcd0ad27a30296ad499ba"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","e979eb25c048b0fd5c34fdf6e30f24d7"],["2022/03/20/Linux用户和权限管理习题/index.html","712fc2ecff8c218a9e8ded2a3f2e12e3"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","33d45328aec3cec3496dc52a8ccca9f3"],["2022/04/02/ArchLinux安装MySQL8/index.html","e2948892c1ebb9f1095e5a3a178fff43"],["2022/04/13/Linux磁盘和文件系统/index.html","acb49ac043371f1f0de09aef668a6ba3"],["2022/04/18/ArchLinux触摸板/index.html","ce6c74ed55c3c944baedb0f6f38e38da"],["2023/04/13/Linux软件包管理/index.html","7cf478c2f1dc1275cfde95ca78d7130b"],["about/index.html","5ad3e3405527c828d388617b5f1d06df"],["archives/1970/01/index.html","d4f838d95a85de425b5b548303f8be15"],["archives/1970/index.html","cac3b8eba1728c567e8c79e42eb8055d"],["archives/2021/02/index.html","ed1bcc2ba40300651e1316754cf32737"],["archives/2021/03/index.html","910ea5f32f2e02bf4594871cd7bfff2b"],["archives/2021/05/index.html","b3778876e4606f082f6368fda1ecac4f"],["archives/2021/06/index.html","d3e6d3c89a453df371102d6645f35ab3"],["archives/2021/07/index.html","01c12a94c979355fb8e525454c5911d6"],["archives/2021/08/index.html","edbf6baab5fa1e81873292f43f56d923"],["archives/2021/09/index.html","40025e713b7ee69ee90738b4a59f486e"],["archives/2021/10/index.html","d466ff6a09fb4097111fd308a6c00db4"],["archives/2021/11/index.html","7b828755a4cf3fac39f449d1a3bdbb4e"],["archives/2021/12/index.html","da3a32a4fa3253e8865ad4a0ade09c37"],["archives/2021/index.html","e4dfbc1d6aff74ca90765d9a40a42fe9"],["archives/2021/page/2/index.html","02458463210d7fbc0be23d25f97757a0"],["archives/2021/page/3/index.html","1249bf5f70d1e323e4c50e230b9971be"],["archives/2021/page/4/index.html","142051005ed4c423b82b51df0fc1e3f2"],["archives/2021/page/5/index.html","bffa86eb9d55fea614f2ecfe371be813"],["archives/2022/01/index.html","c0e60d150b4a57c5e9e14d3c46cf6d2b"],["archives/2022/02/index.html","38a724f4515ae804d0c1ad74dcd8eb49"],["archives/2022/03/index.html","62c50b88737ebfa7b6af2c2c43fe512d"],["archives/2022/04/index.html","b29cce3b290fda7e5dfc1d29290bc96b"],["archives/2022/index.html","f5a14946ce281de2c521e9c2b078ce79"],["archives/2022/page/2/index.html","9302a420b3f7126df0441155f2174041"],["archives/2023/04/index.html","8ef89ee2eb3a9962f158a370e4d91871"],["archives/2023/index.html","8e21c69948a7623be30a7d834bf554d1"],["archives/index.html","60e8c2a12a49e14d2e8db3033838c260"],["archives/page/2/index.html","99827f83093a63e4034aade6e984e379"],["archives/page/3/index.html","1d36d447480e12324b8369496b1b7793"],["archives/page/4/index.html","80dc1a2334cae4b4c8d5354b256122a7"],["archives/page/5/index.html","7dda45123137a99e5621e1a752b5be78"],["archives/page/6/index.html","63175489e590c6da7541095d0ca23456"],["archives/page/7/index.html","be9eef45a0f8baec4c4420b063ee62db"],["categories/C/C/index.html","fc827a50389fcfe5815a0130b6815442"],["categories/C/index.html","925deb62fa464013dd6d6c0ea5758da1"],["categories/Linux/index.html","77540c6c76c1cf920d97bb87bc3e8402"],["categories/Oracle11g实验/index.html","6ff1df33804d6ebc169f034fc4fc3a32"],["categories/Windows/index.html","1583b6cae7d3db9b142e133ffab59acb"],["categories/index.html","c33541bfab65883aa2e7b25440965705"],["categories/javaSE/index.html","4d0c68fc039fa08631dec8c9a5852854"],["categories/tools/index.html","c9dc67bd38f5f8caf18083db29af2280"],["categories/wxy/index.html","1c42536421d8d38431cfa5beeea6f141"],["categories/个人/index.html","d05afaf3f79088ed77d073a827b19fb8"],["categories/前端/index.html","3d56fe070583e73c5f418871487fc788"],["categories/工具/index.html","b4d8055ba22bef2963d78ee389281a33"],["categories/数据结构/index.html","aabca13f11bba43fefa70800a04e0c35"],["categories/笔记/index.html","cdb1b6b39173a033fc36ea28935f6fb5"],["categories/笔记/page/2/index.html","c0b7d8b3458bc1f837878b14c75ed588"],["categories/笔记/page/3/index.html","f7cfbbd3384cae9514e4937ee2930d74"],["categories/算法/index.html","5d2882e93ad1263cca2b36ed3b85703a"],["categories/美化/index.html","ec84205616c529780ff88d88d28c3feb"],["categories/计算机网络/index.html","f00eeab11f456d7e683eb22d02f043be"],["categories/计网/index.html","f242b5050ff4dfbd362eccc37b0164ee"],["categories/语法/index.html","7365cbbc7c9f10bc979c1526c92a5a71"],["categories/软件/index.html","15cfa45c8e83a0db29be669ef05cb366"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","a067a32f2fc3b582a164a5642c2624c9"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","6d10301e481e30bce18c853ec4430ae8"],["page/2/index.html","73c516fdf81b7ac8376712be2e8b97ad"],["tags/Burp-Suite/index.html","1412af40d1bde832b2912699af92523e"],["tags/C-数据结构/index.html","785e526290d6bc8b95bb5d7e085f7780"],["tags/C/index.html","e7d383661dbc987db6cc9fd04ec5914e"],["tags/CSS/index.html","f91393b343c41692a5cc51741d66d249"],["tags/Git/index.html","91f247415af5c3d439a363c0aade65c3"],["tags/HTML/index.html","304c59026ac21aba943a927c2fe6907b"],["tags/LeetCode/index.html","caacfb2686ec425cf836843f4d3e3ebf"],["tags/Linux/index.html","b76f4aadca8817dc7b83e73a5d09de6f"],["tags/Linux/page/2/index.html","e86b8f2c87d3b30dfdd869f2c8846029"],["tags/Maven/index.html","df64cf8a10ce8562466df83d8f5ae5a0"],["tags/MySQL/index.html","bb0eeb7b0cfcc17d45d75faa7437c11f"],["tags/Oracle/index.html","d5ac95698f106ccfaf0c4123f7b6a745"],["tags/Vue/index.html","9c842c005645381561eaadd52ecc58bc"],["tags/Windows/index.html","fd0733e0f3c10a1e8ae4d86a88a25dc2"],["tags/Wireshark/index.html","c2690a30575e6b518268da4db9c3fb9a"],["tags/index.html","647dcd67c66323343d3b3b24e8f6aad6"],["tags/java/index.html","bd199d545ee114979a472d1ff6b845e1"],["tags/route/index.html","2b0c26ee821911eda5d99eff69b55ff1"],["tags/tree-java/index.html","51a950298a7691c8d775c54408d3f353"],["tags/vim/index.html","5068d743aa20b8d110d277a59e9cd46b"],["tags/vlan/index.html","1b2409172902852a211243ab7490fe30"],["tags/wxy/index.html","2d2b817b7406520c89693e1210f41786"],["tags/个人/index.html","8e14fc2a371677c962c2f7f5605d07fb"],["tags/书籍/index.html","cbdf0a559a7301956a366d20a99eaf09"],["tags/博客/index.html","f926482ba840c14a5e2b278ca8eb5f89"],["tags/壁纸/index.html","8c497a102e38962497bfa68b5e51b7c9"],["tags/底层/index.html","6b769f4faf919c9851034986a5d216e7"],["tags/数据结构/index.html","8730a9573511c0e136ab46f24254547b"],["tags/文件/index.html","9534c57ebd6307d325566fef0f345b87"],["tags/服务器/index.html","2fc7f5e9cac57c182fb5df04ddf25fef"],["tags/汇编/index.html","947e737a3276417fd248dc1c9072b4e3"],["tags/算法/index.html","69a43a7aa9facd4317b5b87b02bf7fed"],["tags/记录/index.html","3af330ed26ceb64eb8b45d80aa65a075"],["tags/软件/index.html","6c7cc3d1602cf765cc974e142338e1bb"],["tags/通信/index.html","23c8caf1c3273e37f837b16567ea9aaf"],["tags/链表/index.html","307f4e816ca8a8f95251e8f96f41831b"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







