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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","d753294a7747a09bfadcc78f87b59d16"],["1970/01/01/nvim/index.html","e207e1abd5e7254829cf98446034d9e2"],["2021/02/18/Git学习（个人记录）/index.html","60e58868259a9ef165022468c8820d26"],["2021/02/18/Hexo博客搭建记录/index.html","57cb673e64e257a95de27f3f09728442"],["2021/02/18/IDE配置/index.html","6a7e598659d87480b029543e3def6c3a"],["2021/02/18/初识汇编/index.html","184c8c31fd541c6b77ebf857e37b0047"],["2021/02/18/链表与指针/index.html","efa44def0c1d19acf5385b529058c650"],["2021/02/22/Topic LinkedList/index.html","b2d5ee2fcc8f52576cbd1759623830f1"],["2021/02/25/一些设置/index.html","5e7518defb55b4a83c3317c918222b9b"],["2021/02/26/WXY/index.html","5ef3ae718ce0e9ee44a6675e56e556f1"],["2021/02/28/大二下课程推荐-计科/index.html","c92e8f0360e81473f6099af036a43d20"],["2021/03/04/Linux-notes/index.html","fe1c4cd7f637c145dc0b71ebd78b6535"],["2021/03/08/data struct one/index.html","6e31668e011dc7e4d117a9006bed8cb9"],["2021/03/17/data struct two/index.html","69af66fadd1b48f91a3fb10a4de9351a"],["2021/03/22/STL/index.html","11633a181423c080991ba654b3cebc6d"],["2021/03/27/Battle-of-Tanks/index.html","69d48b6bd0a5c145ceb31990f321e02e"],["2021/05/01/MySQL/index.html","ed5cb7fa14df8a5e04052629fc948d35"],["2021/05/09/HEXO部署服务器/index.html","2eca93635986ea2ab7a4293295a27aaf"],["2021/06/04/vim/index.html","d6f6d3a314cd8261cb971b4d3380c65e"],["2021/07/13/oh-my-zsh/index.html","ad7fd4cfef10d73d82a9863fc027589a"],["2021/07/14/HTML/index.html","584e674e5d7dacc305ccbf249137a181"],["2021/07/19/Maven/index.html","f196767a6cab40844d15fe96ab9baf3e"],["2021/07/20/随机数（C++)/index.html","d81401ee1e844834fa47c6b649eae5f9"],["2021/07/22/data_struct_01/index.html","47bd82fb918749f7ad8cc031346f710e"],["2021/07/22/滑动窗口/index.html","e4a58997bb31ae2bf189e80aecbd1714"],["2021/07/26/Tree/index.html","b8e2c23a1aea9aca70e283e0dc623309"],["2021/08/02/正则表达式/index.html","dad5f338489ea881dcd5fb6b029a0539"],["2021/08/14/CSS/index.html","a93dc21ce6023f6de7c34fd4c3206210"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","cb42208deb7b1dd7ded9429cc161a5e3"],["2021/08/19/Windows Terminal 美化/index.html","60c799522b6e017f4dfd74329437b8ff"],["2021/08/23/EROOR/index.html","e5d53945c2b3743e4f225512e638a4c9"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","218a95d2b87ffebac8fcc868d98c9be7"],["2021/09/07/编译原理/index.html","1a6b042ad54cbd021b5e6a43b2e20f83"],["2021/09/27/网络是怎样连接的/index.html","2556f61404eb285b3acd3a7d5e4e4ca0"],["2021/09/27/通信基础/index.html","48d392094a528d974ed1516236edb771"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","6630de95cca590b701119417af51026a"],["2021/10/22/vlan配置/index.html","154f80723052cb5aa9d7df3822cfb41b"],["2021/10/31/实验三—子网划分与静态路由/index.html","0c2bb3a707ac382a2bcf75cac51426d4"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","8441fdc16868deb81ff4b3ac93201c20"],["2021/11/17/硬链接与软链接/index.html","f2b6c7a6771ba9557a04b6704c68eed2"],["2021/12/01/SQL20题/index.html","cae1ec2700bca48e1826c25333a94df7"],["2021/12/08/实验五：Wireshark抓包/index.html","51d20cb22d65ca5214b9db4f8f734eef"],["2021/12/15/CentOS7搭建FTP服务器/index.html","c74246522df6ea9c26f1c74cedcc26c6"],["2021/12/19/CentOS7 安装相关组件/index.html","a50d13f591757017deb42bd3d9cc6bd1"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","0706c06cf6a979796ce616452ef874c0"],["2021/12/27/Vue/index.html","b2c302ba768b41f914afa639c4fd2353"],["2022/01/08/ArchLinux系统安装/index.html","0369376346a6a3a92f6759e6da8eaa6d"],["2022/01/10/ArchLinux软件安装/index.html","2d33447c384c8a816b1bc137b9bf3e01"],["2022/01/11/ArchLinux开发环境配置/index.html","6b6e55be079e2a27fdc89a4c7cee01cf"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","104838bc118e6d50ef61f8c761a21d00"],["2022/01/22/DWM/index.html","7f3362bddb6b4e4678c227338e833fe3"],["2022/01/26/MySQL性能优化/index.html","361d8875a645607d29ef711304118199"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","3b5ecaf7336930dddedeb1fcbf27a64d"],["2022/02/27/ArchLinux安装wine/index.html","7debef2f26c52f368e77345559ad7254"],["2022/03/01/ArchLinux安装VMware/index.html","3a3fdc12f50cd8bfff68f9a9add9fe11"],["2022/03/01/ranger/index.html","1c4213c849042407be6897e48ca2ae40"],["2022/03/02/ArchLinux PPPoE拨号/index.html","499aa38c5634ad0e693662e170b032a8"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","d9ac628415f36b55250fdb6fba2bbb65"],["2022/03/16/Linux文件和目录管理/index.html","aee4d2fc5a3cef80902d932cc40f6d0c"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","9b5b36444a5a2ab3981b127179521a77"],["2022/03/20/Linux用户和权限管理习题/index.html","59b0484112b0d2d6cb3ee1b22bc1976e"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","c3f0e4187af22996c031cb49310ba639"],["2022/04/02/ArchLinux安装MySQL8/index.html","dd734e2506608eb0b1c59f7ab8bb585f"],["2022/04/13/Linux磁盘和文件系统/index.html","bafc429bd2c11649969cd10106d6ed64"],["2022/04/13/Linux软件包管理/index.html","94a2bf8c9d0c90b2adb6f6fe7fc30987"],["2022/04/18/ArchLinux触摸板/index.html","e679936155a418508b933efd6df0e2df"],["2022/04/25/FreaMarket/index.html","36f0c9b195865485b9320ae83e9d2097"],["2022/04/27/Linuxn命令练习/index.html","c2f3a4c61629e37f59b3d692b39dc468"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","947dfa73e4385582a1dc1c9518e943a0"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","420aa980dd57d569f47893bda354ad19"],["about/index.html","314f95a4e8e82d406015b362402624e8"],["archives/1970/01/index.html","843cdbfd04414104329cc51e317fef81"],["archives/1970/index.html","7d7f4a26ec51c1a69d4203b484817c9d"],["archives/2021/02/index.html","1f88a9acec29f420bbe2c2ac303da37f"],["archives/2021/03/index.html","0b284aaa94e9f51fd2910f1565c29abc"],["archives/2021/05/index.html","35690d5708ce23b4569165998f576343"],["archives/2021/06/index.html","43510722c77f15f649bb793b9a69010a"],["archives/2021/07/index.html","efbe412f9816412b619211003c8aec79"],["archives/2021/08/index.html","bb46042e1c9e0ed41a256cfab92a99c1"],["archives/2021/09/index.html","9ec3d5886fcfb22ec9cd3ef99adbc09e"],["archives/2021/10/index.html","710994a85465d136ecc07635e74cceea"],["archives/2021/11/index.html","03b8cc74379caf4734815e74b5d2c843"],["archives/2021/12/index.html","97d8d0ccb091658f19ecb10feb3ccbc5"],["archives/2021/index.html","6ec79455dda93ffa19e582bf2e153a50"],["archives/2021/page/2/index.html","97c3a0e97c252e7f49c5d1664848fb93"],["archives/2021/page/3/index.html","78c7e6f0b25f6c9909418763b7314cfc"],["archives/2021/page/4/index.html","bfc6ed6cb7c331004a60f3d8e74c3465"],["archives/2021/page/5/index.html","96adb9d8e14c48cd5828f57a8b2d17b1"],["archives/2022/01/index.html","24736b375ffaae3ec4aae2c5d927f6bd"],["archives/2022/02/index.html","b872a6a6197c2318bff216b092d7bb51"],["archives/2022/03/index.html","6341b503745ca8b9b77b82aed4e08997"],["archives/2022/04/index.html","95791dc43c0732afb87db4b501d82308"],["archives/2022/05/index.html","b9c9b2447b821eb206b4e06e0830d2da"],["archives/2022/index.html","315e69e72cbd51c0d8ca9912cf7eb7e5"],["archives/2022/page/2/index.html","46ee5b98d8a28e0ae9be3579eb02e1bf"],["archives/2022/page/3/index.html","c3e7b80a217f4e6c6d9294b9c62a0280"],["archives/index.html","cdd80cbf9074e3f623ceeb385e0460bb"],["archives/page/2/index.html","a3e5ed8a1c0f048373e83e8320ac0d48"],["archives/page/3/index.html","73fa26b20f5b3996c4228c01895ec42f"],["archives/page/4/index.html","a5d1327a806fb16b086d9391382adbe3"],["archives/page/5/index.html","4a69768978ee014c3986896b13e5a21c"],["archives/page/6/index.html","29c68453a44a028ecc5a0f66f5500ba8"],["archives/page/7/index.html","1469e0194a01a824e8ed37aea275b7b1"],["categories/C/C/index.html","75dae4229e855a1d3cb185eaa800ed4b"],["categories/C/index.html","4e7e03e6390142204be1f0e4f9a50f85"],["categories/Linux/index.html","9da5aafd66306d56268a6530261429ff"],["categories/Oracle11g实验/index.html","fb14f837cc20d266fe32e247293db27a"],["categories/Windows/index.html","e67d9a37d62e40f8a5b0189da491954b"],["categories/index.html","e63ae029e9ff878ed2cd58daaa740b09"],["categories/javaSE/index.html","4a2d55067d315e6b63bdf61833bb7d0e"],["categories/tools/index.html","f33e8e8ac43b27d89b4f67c1149300ed"],["categories/wxy/index.html","fdaf8a1ca01907c31ec2da05f17e0632"],["categories/个人/index.html","5007a6c2799d99cd6baacd4b90cd02fe"],["categories/前端/index.html","3cfd9831012b366218176dc6bc9bb2e8"],["categories/工具/index.html","8ef09e88972ac11459f5090b117fb6b3"],["categories/数据结构/index.html","d9622ca4eeba485d15881462764c5d8a"],["categories/笔记/index.html","9df407092e1fc0784354ed63bf8764f2"],["categories/笔记/page/2/index.html","34e5751ca14688c3100848ae421cf641"],["categories/笔记/page/3/index.html","55584cb4bd7df27ef838c10a5647bf64"],["categories/笔记/page/4/index.html","261adbb8cd41f0af16e2155b727af38d"],["categories/算法/index.html","538185c881e97ff9d30fca45e278a326"],["categories/美化/index.html","bd3d605e4b94c1a8965eb16387003e62"],["categories/计算机网络/index.html","26d0483e8a7b33be1622652455ee1f1f"],["categories/计网/index.html","d7828ffc219f6cf7707016b611566b88"],["categories/语法/index.html","0b77725311418afa9735b8ab482d04ab"],["categories/软件/index.html","6012e9f0db0c173b926dd5f235596199"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","bad0f91a1278a439710452691e5b6e3b"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","5731332587bb3486035c3f5583369832"],["page/2/index.html","b96ccac5910225be7c4c69a6acdaaefb"],["tags/Burp-Suite/index.html","c1cf81d0e0f5320c25154e2aa527f4a2"],["tags/C-数据结构/index.html","94c8165ebb4ea7041a756dde721eeca0"],["tags/C/index.html","a5abeb7aa1ae837dbd4ac4839fc3b14a"],["tags/CSS/index.html","4a6e71ce7ad118db7774c54f2f39dc18"],["tags/Git/index.html","f4adcbf760efb06f639d8ba859a2d9f7"],["tags/HTML/index.html","4133843d989c7c78d35fb57d55c0b912"],["tags/LeetCode/index.html","2dc86a363c1b70238e635966e791d065"],["tags/Linux/index.html","c8d0f2b81a2b03667020ed92452b1d65"],["tags/Linux/page/2/index.html","171b386808fbc4074090483b64ed0596"],["tags/Maven/index.html","ee9504422ee9aa55ea23061bcfc4db5a"],["tags/MySQL/index.html","146a7b9435e772a8181c7ad924cb3748"],["tags/Oracle/index.html","d599c0e586b9856ef9eea3fc91b7d784"],["tags/Vue/index.html","0d78aca65f857b754207656ba42808ec"],["tags/Windows/index.html","42e1ae3ed4a716477989fb65c0e83751"],["tags/Wireshark/index.html","cd96dd6ddbd13095fccd5ef2d52f7a8d"],["tags/index.html","175bf6b162392ccf3d20249c025782b1"],["tags/java/index.html","276e922b6d256bcaeaa5f3a47fefefd3"],["tags/route/index.html","cbaa52244ecff9c26d511061b68f52ca"],["tags/tree-java/index.html","5ad3f086025b410886f34c1985b6655c"],["tags/vim/index.html","a224f28803312d23008687c5293bbeb4"],["tags/vlan/index.html","aeb3fe6d40e139e657b187f421a19721"],["tags/wxy/index.html","fce21b6cc3b094a4d27084392e6ac567"],["tags/个人/index.html","c4274699b2770acd03b6454a4eb9c531"],["tags/书籍/index.html","28178d6b75a88adbf6e6aad76901894e"],["tags/博客/index.html","41b896e1fc36b28ed7a4ebf1ac9309a6"],["tags/壁纸/index.html","3f859869c7644c44659c7c27342f1bbf"],["tags/底层/index.html","1d3a381b176d1eea3229a430df28b301"],["tags/数据结构/index.html","2c40231a1b763241fad35cb2e7e49966"],["tags/文件/index.html","d66e4f1a42985246943003394350c7e5"],["tags/服务器/index.html","a0bf181391f55c1ca29bb3e19d53d706"],["tags/汇编/index.html","1b3a563ddaf9e3ac32ef98f8ed0bb734"],["tags/算法/index.html","9cfd4f217b371124e7e75bffdadb617f"],["tags/记录/index.html","0473417af30d52d5bea545d3e39e04b9"],["tags/软件/index.html","5b6930897ce70616590c149ac1322cd1"],["tags/通信/index.html","7d1071f7107d54ce5e9e341132834457"],["tags/链表/index.html","201725baa31bae062ec27c9692511163"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







