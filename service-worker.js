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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","eb7538ee13e9bf7cf68702383511df8a"],["1970/01/01/nvim/index.html","ab74cc15b2b61ea9b28ebed893e95b66"],["2021/02/18/Git学习（个人记录）/index.html","e176f4eb5ded86880bad47135cc627b8"],["2021/02/18/Hexo博客搭建记录/index.html","f460cb7faf2d000eea4a5a919e27b488"],["2021/02/18/IDE配置/index.html","8b8c1928301616978977628c2d02a401"],["2021/02/18/初识汇编/index.html","024b2b3095296b23aa1ad5f4b46635fa"],["2021/02/18/链表与指针/index.html","d23c3f243a4776c115acca6ab96d6ab6"],["2021/02/22/Topic LinkedList/index.html","1d269afe227664bfc9e41a67889f5d91"],["2021/02/25/一些设置/index.html","90e63a4c06075c0330bbf25174741fc3"],["2021/02/26/WXY/index.html","63c066395d8c097a5449db788d77a56f"],["2021/02/28/大二下课程推荐-计科/index.html","f54faa4a2b6aa3a973cbd193f8e3744a"],["2021/03/04/Linux-notes/index.html","ffef4110006186c002056567c5ef260a"],["2021/03/08/data struct one/index.html","6882699b4965116b7c02217eedda9f9f"],["2021/03/17/data struct two/index.html","2be6bc6b892c9b5312d3bde4ecc730db"],["2021/03/22/STL/index.html","6685072f7c3f6803f7fead9c0c76a955"],["2021/03/27/Battle-of-Tanks/index.html","24ec21e33f710fbc7d01dab164d1111b"],["2021/05/01/MySQL/index.html","adcc14ee9f0521373fb018787cca7d1e"],["2021/05/09/HEXO部署服务器/index.html","0debde051010e1e3d576515a24f4d9b9"],["2021/06/04/vim/index.html","ed0ec5b59a4d7f8ab9e4e75067177740"],["2021/07/13/oh-my-zsh/index.html","55fe45c8b0fbaa953ab24b3421f78a59"],["2021/07/14/HTML/index.html","ca555ac5fb493031cf13fbb34f935c42"],["2021/07/19/Maven/index.html","f65c037816774b85dc359fd5cf63193d"],["2021/07/20/随机数（C++)/index.html","04cae600d475f4ae0a68de102e0cb0cf"],["2021/07/22/data_struct_01/index.html","b5ad2af452637a334f3892cb9f7f3456"],["2021/07/22/滑动窗口/index.html","5f74f3b661228ba69277479cc3367104"],["2021/07/26/Tree/index.html","b788f981cf9d08c7ae5b0148dcf33cfc"],["2021/08/02/正则表达式/index.html","27e3d7ca5a0989467ff3a90ce0f42054"],["2021/08/14/CSS/index.html","eca5d788cd6b7a26ee984cffb5c8b1b5"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","cd9bd3e7f8d49569881fae178b8df665"],["2021/08/19/Windows Terminal 美化/index.html","b211821b663bbb64dabd3aa39c1b0dc4"],["2021/08/23/EROOR/index.html","f2a753f2239c2423da3cdc9b9896b8e7"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","7ca2201d38f0a6de3b7f45d5a779a7d6"],["2021/09/07/编译原理/index.html","c1ebf370bbcf7c6edb26ad96da45cfe5"],["2021/09/27/网络是怎样连接的/index.html","daf3d8a1756e739ba72598a912697d28"],["2021/09/27/通信基础/index.html","d5d95f14f7a6f2e04c3a6db953f7cbf9"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","b9718f2a8b534cbf38157a58d560ad78"],["2021/10/22/vlan配置/index.html","135755dfaf11590cab1e2842059131e8"],["2021/10/31/实验三—子网划分与静态路由/index.html","d286e71075a60a815d0b0146f06d8796"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","920a27aade8d0cd7b8f2a4a48c5ec942"],["2021/11/17/硬链接与软链接/index.html","a73f7a689427f74ed080a6214f3a67aa"],["2021/12/01/SQL20题/index.html","3b8f7ff46ea5eb8ebde45ff49e0e446a"],["2021/12/08/实验五：Wireshark抓包/index.html","87dde93f57041a49d38b0c23acd26162"],["2021/12/15/CentOS7搭建FTP服务器/index.html","639bd75600d0757bf172273a871dc57f"],["2021/12/19/CentOS7 安装相关组件/index.html","09b2e7f8de805d62a1010dd77c4c5f43"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","65d9f98b4be81ac989fd5cdda1668601"],["2021/12/27/Vue/index.html","72c7e02b330b2ab2c82647a7818198d3"],["2022/01/08/ArchLinux系统安装/index.html","8517dc79d614b7c6c4d7815dea33060c"],["2022/01/10/ArchLinux软件安装/index.html","450f738faa96b622c735e9631f183328"],["2022/01/11/ArchLinux开发环境配置/index.html","9466f0220b379a3ddb338123c0a47eb9"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","51a7a01d3e9e13c7282b5c85c66ec9c8"],["2022/01/22/DWM/index.html","734f54048583a6fac80232d05cd952a9"],["2022/01/26/MySQL性能优化/index.html","e15bae45f08a8e9e6a2e3a3a8caf44ce"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","31ce6eaca2fe837457a5ca69431a1590"],["2022/02/27/ArchLinux安装wine/index.html","e802a8ebfbb48644797edb6d7fd0595c"],["2022/03/01/ArchLinux安装VMware/index.html","52ce3be335d800b5658da707925da502"],["2022/03/01/ranger/index.html","6ca384bd5057c208668ae315a3d44b6a"],["2022/03/02/ArchLinux PPPoE拨号/index.html","cafeb88ffde2fe5d0c6e107100c819d7"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","a206ed66702b5818a6c4d8f52bc2dc19"],["2022/03/16/Linux文件和目录管理/index.html","ed51c618348c5db8eac0c6bc08a2d09b"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","d89dc4340f2fdf3c8feed149b5f0c685"],["2022/03/20/Linux用户和权限管理习题/index.html","8a295a7491f7384b266dd77072219a01"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","40b09371f156c095b65ccbe9e1d2e376"],["2022/04/02/ArchLinux安装MySQL8/index.html","dc99336e61a0c523d3bd491a03aeb792"],["2022/04/04/Oracle11g实验五：Oracle-备份与恢复/index.html","248e37b0ac0398d51e58efe605760ae7"],["2022/04/13/Linux磁盘和文件系统/index.html","4fa078144e96dea247bd28d81ccd5f28"],["2022/04/13/Linux软件包管理/index.html","280a7ecbf5233dc27db11832bcb0d071"],["2022/04/18/ArchLinux触摸板/index.html","80dcb5ec9dc06519423250fefc765d9d"],["2022/04/25/FreaMarket/index.html","0b5ac04df50c1a5e12eeeef9796db477"],["2022/04/27/Linuxn命令练习/index.html","351457db72c99c1e3bf2f511c546751e"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","9eef6d056606ff12bdb5cbae8de6b80c"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","a8bc764dd90e67fe2fd0f1639759c20e"],["2022/05/20/Linux进程和服务管理/index.html","e663d74335336ce817b10810a34a0053"],["2022/05/21/JavaScript原型/index.html","fdf3bfbb955bda229860b8c7ab6333e8"],["2022/05/21/SMB/index.html","e05cf469fef97980f6e955271a24245a"],["about/index.html","2f3ee8dccca7af11fd36ad05a14923fc"],["archives/1970/01/index.html","473a86101a96f525c43a0aa5121d9023"],["archives/1970/index.html","8cdc91015f1bf8a2f8ac56edaa83b2a2"],["archives/2021/02/index.html","8a3d2407ea753ba0ff691566d6672d4d"],["archives/2021/03/index.html","e7e1b0c7c4c4b853c8c475ffdde9ac50"],["archives/2021/05/index.html","ec7e3ca3b1b1ed8abc9d2abc4691da74"],["archives/2021/06/index.html","9382e3a4628ea92f187d0e924882af2d"],["archives/2021/07/index.html","135151fb1ca3cac965cfbf8eb0efe058"],["archives/2021/08/index.html","4ccf98c8c6ac8278917a02af8bafe0b3"],["archives/2021/09/index.html","97c9cff5930ed066d9a949b8e0dd25c8"],["archives/2021/10/index.html","4f228e0cfd9071568e2a84061d6e24a8"],["archives/2021/11/index.html","7fc603501c6ff6b44fcdca49b6536495"],["archives/2021/12/index.html","b66b172de62437f43a4ab0d642705e17"],["archives/2021/index.html","32d4004bedce910c45c7a097e1180954"],["archives/2021/page/2/index.html","ee59d56ada399b04d9c5fdf1dd631ccc"],["archives/2021/page/3/index.html","da2e007d5040ade377108d51db00647e"],["archives/2021/page/4/index.html","34bdc9a486d31802c65d568a75cfc172"],["archives/2021/page/5/index.html","afba10532f3dff9208b0cdd4d0a05efc"],["archives/2022/01/index.html","e768dd0aa6afda0556e6a3686b4d88f6"],["archives/2022/02/index.html","5147edd32bf58311f604ffeca1b4f8e7"],["archives/2022/03/index.html","a3450492e48be6d69c8cad4b61a5734b"],["archives/2022/04/index.html","0b0a4fc9103a527c9c2f612b6c77177e"],["archives/2022/05/index.html","1cc39323aa09a639ed33582f43774364"],["archives/2022/index.html","eea99937b5bc57059935f91b3cca3ced"],["archives/2022/page/2/index.html","0cf7398ec6d51fa660d8fde501057d60"],["archives/2022/page/3/index.html","d622bbe2400ad8a172650b46fb81efa0"],["archives/index.html","1da398b2233e05312da784e26b57829e"],["archives/page/2/index.html","b5c0543b654492acadd30bfa1ce41e65"],["archives/page/3/index.html","6a53ebb126e8ab0c568507ffe8fc4c08"],["archives/page/4/index.html","25c377077d0c2d8ab2071a665cd68a4f"],["archives/page/5/index.html","07c8d756d627a977d036fb3a869ced16"],["archives/page/6/index.html","596170dccd3e819d56b64df54e4a0a1e"],["archives/page/7/index.html","56a3245663f46ecbae1dee7d0440ae13"],["archives/page/8/index.html","59aee8e0287f446c404090fe9d771c4a"],["categories/C/C/index.html","7e64adfd0f30e54a2fc919b7d1ce4afc"],["categories/C/index.html","9c39ef84422f4a54f459e4fe8b7cec93"],["categories/Linux/index.html","2bd4476845c5d2a4499e1d2bd3070770"],["categories/Oracle11g实验/index.html","d06011a7886fc610ff31c7cd9955c423"],["categories/Windows/index.html","0b3b8fd0c9ab2fb442e365dd5dad42fa"],["categories/index.html","60968bd9a93852bcd8d2192f4f122f5b"],["categories/javaSE/index.html","a16fefdce174827ed24c2ff1425a1c1a"],["categories/tools/index.html","46e50d3fe8538a9ba446a24c9084a496"],["categories/wxy/index.html","c3e7a8d8e4e78f0d5b9c17e84afefe85"],["categories/个人/index.html","b78e5849a60a21de45400ac5862b85e8"],["categories/前端/index.html","bc51b19edccda8e7da18e41a091bdac3"],["categories/工具/index.html","968a4b653c18b28c30f032b3fc5b4da0"],["categories/数据结构/index.html","c75bba8aafb628f15542eb9f763b1a09"],["categories/笔记/index.html","9335557f20392d2b6d28012b78e9bf5f"],["categories/笔记/page/2/index.html","b004686217cf6081c62ebf6ab8d4e319"],["categories/笔记/page/3/index.html","5dc24765466bed6239c01a95b6d22b3a"],["categories/笔记/page/4/index.html","9cccf8adcd67df6df457ae5eea71b896"],["categories/算法/index.html","1ab3c3927baa9b761c86ff4748c8ebea"],["categories/美化/index.html","64fe7992b3d9652cacc78248304f2ae1"],["categories/计算机网络/index.html","67f51f8dfc7dc0a46e5f4c0c5456455e"],["categories/计网/index.html","d1274c85441094d14df5cdb5d940c09a"],["categories/语法/index.html","4ee61e43d0ec7abab2d81833a78af73a"],["categories/软件/index.html","c2927b1c4059739ec1bde39eb39fc108"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","c172ca99fba79b0ea8937c05c763b8e1"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","0235984f1438c37557bacfe6349046e9"],["page/2/index.html","6440397565cdd51957303a94179ffbe4"],["page/3/index.html","7cdec6abb75afe14f707b54b27730e9f"],["tags/ArchLinux/index.html","af930748b104eb76f91ae6c61cd73f8d"],["tags/Burp-Suite/index.html","35b8ec1ac33ae260b95696f6d34d349c"],["tags/C-数据结构/index.html","1acc56730fabc1f45222174a500a8038"],["tags/C/index.html","b36f38289ded89716f19591b403d2a4a"],["tags/CSS/index.html","4159043fbbe3e4310d52e1c026c99707"],["tags/Git/index.html","e315c0e3b15df11a071a9e575500c326"],["tags/HTML/index.html","946c5af550efda45a7630169a180c315"],["tags/JavaScript/index.html","107716e02bff70bdc400566a21fe09a9"],["tags/LeetCode/index.html","4e8654df9bdc8d5e53ba725b0c53194f"],["tags/Linux/index.html","b7513567861563216665064523865ff6"],["tags/Linux/page/2/index.html","31e4815e8f9464c5a48c99b3ad030778"],["tags/Linux/page/3/index.html","773e0887a3563a71d2cad58a8df5817c"],["tags/Maven/index.html","c567372098271f02bd1305bb336b34ff"],["tags/MySQL/index.html","830ed593bdd1e60de0cef7e732dd87fc"],["tags/Oracle/index.html","4032642ba656130f59f89bda564186ec"],["tags/Vue/index.html","a9b3e211289b97562a61e276dc91fb1a"],["tags/Windows/index.html","d0560dfc8c533bb19c82d059ebf7ed42"],["tags/Wireshark/index.html","fcd2d83272c0364d7f2af622790f0829"],["tags/index.html","e4db3eaa52fb62662daf1bfa1da1d70a"],["tags/java/index.html","9d8835bd59fe46bc92398b2e055326f5"],["tags/route/index.html","e093288eabba8b114072bcb6e90a946a"],["tags/tree-java/index.html","b880c9e240d647858f3f85e3fb840210"],["tags/vim/index.html","99b0e4ccd2e4245cd92368193be6c249"],["tags/vlan/index.html","1198854cce2206545835ad478391266b"],["tags/wxy/index.html","776bbab5a5ab2dc2ab0564c3f04e55db"],["tags/个人/index.html","c9cfbf296e6e0097f66cb5eefaadb65d"],["tags/书籍/index.html","294b749f2c1fee537fbd754dd23e0ba2"],["tags/博客/index.html","3ef05133e6319f96bf03a2467573f8c2"],["tags/壁纸/index.html","f60a92217d7817cfbc43b7a121868100"],["tags/底层/index.html","816fef45ba7817c7bfb6282ff118ec7e"],["tags/数据结构/index.html","53fabf90c6a7b5bcf56ee25642c01632"],["tags/文件/index.html","6263f1382fd47e61d02923dc1caa1d94"],["tags/服务器/index.html","27d678b2b451688d49c6a7b9c57f59fa"],["tags/汇编/index.html","47bbe10b49b370776d52778f3f7c1859"],["tags/算法/index.html","b5a38133b7cfb255d2c6f1ad43767fb2"],["tags/记录/index.html","d7b9d306a1674f35f3e9868477a4b5eb"],["tags/软件/index.html","870f95a9cf48603c214c9e5053ecbeed"],["tags/通信/index.html","15ee321bb28493180deb522c54f5f9c2"],["tags/链表/index.html","b4645ec156754dea89de02aca3093593"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







