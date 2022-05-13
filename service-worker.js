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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","d753294a7747a09bfadcc78f87b59d16"],["1970/01/01/nvim/index.html","e207e1abd5e7254829cf98446034d9e2"],["2021/02/18/Git学习（个人记录）/index.html","a24b186190d2395c76764821e67a601b"],["2021/02/18/Hexo博客搭建记录/index.html","1a60f090b0800fbbd36266302a2c63bf"],["2021/02/18/IDE配置/index.html","8c1ea5188953d22eb886b9d2c38880cf"],["2021/02/18/初识汇编/index.html","184c8c31fd541c6b77ebf857e37b0047"],["2021/02/18/链表与指针/index.html","3ab258b8170c5931349df7e50554b430"],["2021/02/22/Topic LinkedList/index.html","3bbcea2d3509b90737ba9f6d4a0bffd9"],["2021/02/25/一些设置/index.html","145d5ac7be2072757a5a72504e2f43d0"],["2021/02/26/WXY/index.html","5ef3ae718ce0e9ee44a6675e56e556f1"],["2021/02/28/大二下课程推荐-计科/index.html","c92e8f0360e81473f6099af036a43d20"],["2021/03/04/Linux-notes/index.html","376b0c14a3a87e4f4901a6f59ecc02d1"],["2021/03/08/data struct one/index.html","6e31668e011dc7e4d117a9006bed8cb9"],["2021/03/17/data struct two/index.html","69af66fadd1b48f91a3fb10a4de9351a"],["2021/03/22/STL/index.html","11633a181423c080991ba654b3cebc6d"],["2021/03/27/Battle-of-Tanks/index.html","13c025736d5798a8b897cf098a0f2a10"],["2021/05/01/MySQL/index.html","ed5cb7fa14df8a5e04052629fc948d35"],["2021/05/09/HEXO部署服务器/index.html","75f0f1dddbd98d6b24f64bc6cbb10f42"],["2021/06/04/vim/index.html","d6f6d3a314cd8261cb971b4d3380c65e"],["2021/07/13/oh-my-zsh/index.html","4b257543a60878affd034eb1115fa9e9"],["2021/07/14/HTML/index.html","584e674e5d7dacc305ccbf249137a181"],["2021/07/19/Maven/index.html","f196767a6cab40844d15fe96ab9baf3e"],["2021/07/20/随机数（C++)/index.html","d81401ee1e844834fa47c6b649eae5f9"],["2021/07/22/data_struct_01/index.html","47bd82fb918749f7ad8cc031346f710e"],["2021/07/22/滑动窗口/index.html","e4a58997bb31ae2bf189e80aecbd1714"],["2021/07/26/Tree/index.html","b8e2c23a1aea9aca70e283e0dc623309"],["2021/08/02/正则表达式/index.html","e0ad3246ed220d77ad3846f60f9cf665"],["2021/08/14/CSS/index.html","a93dc21ce6023f6de7c34fd4c3206210"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","cb42208deb7b1dd7ded9429cc161a5e3"],["2021/08/19/Windows Terminal 美化/index.html","60c799522b6e017f4dfd74329437b8ff"],["2021/08/23/EROOR/index.html","e5d53945c2b3743e4f225512e638a4c9"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","218a95d2b87ffebac8fcc868d98c9be7"],["2021/09/07/编译原理/index.html","1a6b042ad54cbd021b5e6a43b2e20f83"],["2021/09/27/网络是怎样连接的/index.html","2556f61404eb285b3acd3a7d5e4e4ca0"],["2021/09/27/通信基础/index.html","48d392094a528d974ed1516236edb771"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","6630de95cca590b701119417af51026a"],["2021/10/22/vlan配置/index.html","154f80723052cb5aa9d7df3822cfb41b"],["2021/10/31/实验三—子网划分与静态路由/index.html","0c2bb3a707ac382a2bcf75cac51426d4"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","8441fdc16868deb81ff4b3ac93201c20"],["2021/11/17/硬链接与软链接/index.html","f2b6c7a6771ba9557a04b6704c68eed2"],["2021/12/01/SQL20题/index.html","cae1ec2700bca48e1826c25333a94df7"],["2021/12/08/实验五：Wireshark抓包/index.html","51d20cb22d65ca5214b9db4f8f734eef"],["2021/12/15/CentOS7搭建FTP服务器/index.html","00c8ff10c1347562e0bf912f1e0ee78d"],["2021/12/19/CentOS7 安装相关组件/index.html","3638b4a34e6ec93582774265ac12ab2b"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","0706c06cf6a979796ce616452ef874c0"],["2021/12/27/Vue/index.html","b2c302ba768b41f914afa639c4fd2353"],["2022/01/08/ArchLinux系统安装/index.html","682dc85de72d17646f5578cad4d2aa07"],["2022/01/10/ArchLinux软件安装/index.html","ec5c03b7a1715f8a12b14f8868072684"],["2022/01/11/ArchLinux开发环境配置/index.html","b8bee6e7daa5ca35aaa6a0c222ec6697"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","50fcd3c6c3df5295c21568e9c84c7f53"],["2022/01/22/DWM/index.html","2575b30d53ade2bae7e97cfa7bf9482b"],["2022/01/26/MySQL性能优化/index.html","361d8875a645607d29ef711304118199"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","92e76727cc13b62cdca469b81022ae10"],["2022/02/27/ArchLinux安装wine/index.html","67abd30013d3a5d03d22925b5c857403"],["2022/03/01/ArchLinux安装VMware/index.html","270ee6faa3828abb4c3ff37b8330ba31"],["2022/03/01/ranger/index.html","6f289232af47f35264b9594700f01279"],["2022/03/02/ArchLinux PPPoE拨号/index.html","de4b8df63b02f786435b2e999557341f"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","675c729bf9c796a1b0dde84b54401698"],["2022/03/16/Linux文件和目录管理/index.html","f2ef31dfacc9b937be0dc8f71f7b626c"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","4f6d8c97bd8e0a2db65071e296e9f885"],["2022/03/20/Linux用户和权限管理习题/index.html","e068774bbd02e1b7682685b73b8eb1fc"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","2123b934f85c965e152230fe13d6ce3c"],["2022/04/02/ArchLinux安装MySQL8/index.html","b91fa746e3d39d4089a539d65bc19920"],["2022/04/13/Linux磁盘和文件系统/index.html","fc0cf6531638925f2189cf6cdf6250b6"],["2022/04/13/Linux软件包管理/index.html","9959f9fb0c0eb48344f4b8b2723708e1"],["2022/04/18/ArchLinux触摸板/index.html","0465dc55a6c37399e567daf96065a603"],["2022/04/25/FreaMarket/index.html","36f0c9b195865485b9320ae83e9d2097"],["2022/04/27/Linuxn命令练习/index.html","d871b5349291ef61216c50b121f22e75"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","cf559c9f2242b1d1a847a330d4707bb5"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","59f3b5b6357a1a3e45a8318223f6a87f"],["about/index.html","e98b576c9b122058f11ee405244a274e"],["archives/1970/01/index.html","ff141a5006c620a0d07b8368473a970a"],["archives/1970/index.html","188b0effda7deeb9069ea429489e9d4f"],["archives/2021/02/index.html","609718fe807c83adb494d2898d7708ad"],["archives/2021/03/index.html","dc05711b774d6721860db2c2483298a6"],["archives/2021/05/index.html","a119c23de743f06afc3d3001a54d91be"],["archives/2021/06/index.html","2f65985ea8ba98c1d90f8068f4b2e0d2"],["archives/2021/07/index.html","0742dae0b198520f89f6e5df36f72d5e"],["archives/2021/08/index.html","7f964c7c85035ef2b228f0d04e6bdd69"],["archives/2021/09/index.html","7ea501f935516853227756f39195c850"],["archives/2021/10/index.html","3003ee86b258ba7d2862b5d1ab4524fa"],["archives/2021/11/index.html","8ac41f410d2d85376703c1d4e10fdafc"],["archives/2021/12/index.html","66f6634acb41132e8e78ca7ab5cf8771"],["archives/2021/index.html","affe85b6e55025719efc549899bcf145"],["archives/2021/page/2/index.html","05679d38c1bbd4c29fec8445135fc3d2"],["archives/2021/page/3/index.html","1bc23331bb9810f215f086bc1245a23a"],["archives/2021/page/4/index.html","49d0f896300de0c27da3f6be04f5c4b0"],["archives/2021/page/5/index.html","0a324fa0a5c031a27b1c3bd9e256e001"],["archives/2022/01/index.html","a94abfd4803d9b8f4bfc4d6cfdeeea9c"],["archives/2022/02/index.html","a49725ef861573264c7a8699d1cbad3e"],["archives/2022/03/index.html","66f825ba020b6cbc02fa0394d3fe8149"],["archives/2022/04/index.html","12f313723a3873589777a85690f52895"],["archives/2022/05/index.html","1e7b5253bad6ffd51b01bb8f43df1740"],["archives/2022/index.html","bd801c2435e420632210cef53f36fe10"],["archives/2022/page/2/index.html","6c753dc1ddba9679e5fa8c0f3d0bd243"],["archives/2022/page/3/index.html","a88aa758a18435a1c1979e73bdc9744f"],["archives/index.html","7e1af353fb04c61c39185d6171c8ed27"],["archives/page/2/index.html","c9eb3a3b5426c3ccce6cf910e30ef56e"],["archives/page/3/index.html","f7f3a90c98351b42bc537d1c1aea6a06"],["archives/page/4/index.html","6a8d3f7483b3f7d87f98fa060d5ea9ab"],["archives/page/5/index.html","9fe5ce166daa9dcc27562f858f3dd2b4"],["archives/page/6/index.html","d100b58586553bad56bc3e60b59f45c7"],["archives/page/7/index.html","8018809248dd87629b938c0d78369d70"],["categories/C/C/index.html","d527a09eee9e95d9cba345fd6fda6b77"],["categories/C/index.html","62c8a3bbb3eeb2d864cb2b3d373f7029"],["categories/Linux/index.html","ed8ec0c6d3c8c49d043386fb6a728e5c"],["categories/Oracle11g实验/index.html","255fc39342c8c2c82f6c1d01e2894b80"],["categories/Windows/index.html","f01387d6a1c5eead547cd59e14517406"],["categories/index.html","8a595c23610973e0b8bbfcf9aa3a5347"],["categories/javaSE/index.html","ba422233d053338d298a3e846e48155d"],["categories/tools/index.html","8d3d8be64fc8cc54b287f6524c85e150"],["categories/wxy/index.html","072ce3c6a50c6f7867e1b76cc369acca"],["categories/个人/index.html","b5def48f712f57822e538cc1a3648682"],["categories/前端/index.html","bbfc988989bc9950581885de0dbb7ad8"],["categories/工具/index.html","903517202d5f1b905b3e24f778839627"],["categories/数据结构/index.html","2d24bbdc56581a7eca79c6d1f37de94c"],["categories/笔记/index.html","0a0b177bab7e6b63995f6210262b247f"],["categories/笔记/page/2/index.html","9eaf9b4314aa89abb09603da43582b13"],["categories/笔记/page/3/index.html","a110c735bd40b50f37ac86d8a53b8c39"],["categories/笔记/page/4/index.html","da6d6070b516f3dadf0e1cf4335ad86f"],["categories/算法/index.html","999bda004b5d0f61bb2de171cf8a0cbb"],["categories/美化/index.html","d58f778c7e1f93dc6fc69adc05fab4f3"],["categories/计算机网络/index.html","3850b791fca9c5e45dbd5c1927fc536f"],["categories/计网/index.html","5f4e5eee53d7f20b74158e3d0ea41077"],["categories/语法/index.html","1344f3c962fef3fc660c60562620bab1"],["categories/软件/index.html","79e411cfb348ec0e70764b477b1fad56"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","1700c3bb3a15cb4b27b02e1b2289139d"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","bb2131d7593d0410d6d869cacfa5c27e"],["page/2/index.html","ea3cdcde2c9b74f3f51fa7908515a891"],["tags/Burp-Suite/index.html","48834e81c3d8109fbfa3fc668a623968"],["tags/C-数据结构/index.html","0ed2751e4d2cd976d7e88d6930511b6a"],["tags/C/index.html","1e7acd044df3cc1bec965dea739cfd0a"],["tags/CSS/index.html","9df81ffb599dc6478095d8a76a370b8c"],["tags/Git/index.html","850ba0575e21aaa43705f35f5a5a115a"],["tags/HTML/index.html","7e177e9c374492044380a60c405bc4c6"],["tags/LeetCode/index.html","dbc8776bea15790320a4ee5f5a586cba"],["tags/Linux/index.html","afe4c57de72420d43e7345df06c386d1"],["tags/Linux/page/2/index.html","2a642a9eba414560ded6e32f115a404f"],["tags/Maven/index.html","24dc2a8a98a96bb396ee290f69d7d591"],["tags/MySQL/index.html","475002af8a40fa696ee4777b8dd71bbf"],["tags/Oracle/index.html","60e7839450c1e98914405b9e2fe88689"],["tags/Vue/index.html","af75184128bab0cb06b0876f7441932d"],["tags/Windows/index.html","fcea3ecc1bb29c648b98117ce96e46d1"],["tags/Wireshark/index.html","5409b0302e3cfd263b85a35e2baae398"],["tags/index.html","03b46b61f2a014d249b6f2c06b85ea25"],["tags/java/index.html","88a45d501aa825ff3700308d42ec7c00"],["tags/route/index.html","db32b7f652a567529f485928e9b96b87"],["tags/tree-java/index.html","80cd2a5c3a08b543f4c312c33d8df8c9"],["tags/vim/index.html","dca536737f16740dd769869fe2544e69"],["tags/vlan/index.html","b485d1fd72bb347ccc5643fc5096d474"],["tags/wxy/index.html","ba42e212a76f4933f2f4a785fc0f13a2"],["tags/个人/index.html","4cc76b747d5021aa4acdeef7d6116111"],["tags/书籍/index.html","bdd5008967ea04bfa3a6e518aec71816"],["tags/博客/index.html","1ffe031a88ae334d7590ed6dcb31ed2a"],["tags/壁纸/index.html","940c03f630ca75ace0d721c0e6eb340c"],["tags/底层/index.html","00a854ec71f69af6185b512b2783b205"],["tags/数据结构/index.html","2b413d698355af21d6a7be7593e1f07f"],["tags/文件/index.html","876d076853da770c0cf71be65a96dbb8"],["tags/服务器/index.html","de85f146085c5a785c4b19b80e211de1"],["tags/汇编/index.html","2af25832b9f1d0aed7bc7da4e6e691a2"],["tags/算法/index.html","14f3e1d87ca5dbe413fd186615e84430"],["tags/记录/index.html","fd1897a965011d020b2a8508a964a8de"],["tags/软件/index.html","16cc521cf6caeddde8dce6c3161560eb"],["tags/通信/index.html","61edbf8b1489cebd38804e57015695f1"],["tags/链表/index.html","535d082740a4255ce2d30b8339595869"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







