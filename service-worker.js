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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","d753294a7747a09bfadcc78f87b59d16"],["1970/01/01/nvim/index.html","e207e1abd5e7254829cf98446034d9e2"],["2021/02/18/Git学习（个人记录）/index.html","84c1c53efdea5bdda2ce546e15d7f31d"],["2021/02/18/Hexo博客搭建记录/index.html","1a60f090b0800fbbd36266302a2c63bf"],["2021/02/18/IDE配置/index.html","8c1ea5188953d22eb886b9d2c38880cf"],["2021/02/18/初识汇编/index.html","184c8c31fd541c6b77ebf857e37b0047"],["2021/02/18/链表与指针/index.html","3ab258b8170c5931349df7e50554b430"],["2021/02/22/Topic LinkedList/index.html","3bbcea2d3509b90737ba9f6d4a0bffd9"],["2021/02/25/一些设置/index.html","145d5ac7be2072757a5a72504e2f43d0"],["2021/02/26/WXY/index.html","5ef3ae718ce0e9ee44a6675e56e556f1"],["2021/02/28/大二下课程推荐-计科/index.html","c92e8f0360e81473f6099af036a43d20"],["2021/03/04/Linux-notes/index.html","376b0c14a3a87e4f4901a6f59ecc02d1"],["2021/03/08/data struct one/index.html","6e31668e011dc7e4d117a9006bed8cb9"],["2021/03/17/data struct two/index.html","69af66fadd1b48f91a3fb10a4de9351a"],["2021/03/22/STL/index.html","11633a181423c080991ba654b3cebc6d"],["2021/03/27/Battle-of-Tanks/index.html","13c025736d5798a8b897cf098a0f2a10"],["2021/05/01/MySQL/index.html","ed5cb7fa14df8a5e04052629fc948d35"],["2021/05/09/HEXO部署服务器/index.html","75f0f1dddbd98d6b24f64bc6cbb10f42"],["2021/06/04/vim/index.html","d6f6d3a314cd8261cb971b4d3380c65e"],["2021/07/13/oh-my-zsh/index.html","4b257543a60878affd034eb1115fa9e9"],["2021/07/14/HTML/index.html","584e674e5d7dacc305ccbf249137a181"],["2021/07/19/Maven/index.html","f196767a6cab40844d15fe96ab9baf3e"],["2021/07/20/随机数（C++)/index.html","d81401ee1e844834fa47c6b649eae5f9"],["2021/07/22/data_struct_01/index.html","47bd82fb918749f7ad8cc031346f710e"],["2021/07/22/滑动窗口/index.html","e4a58997bb31ae2bf189e80aecbd1714"],["2021/07/26/Tree/index.html","b8e2c23a1aea9aca70e283e0dc623309"],["2021/08/02/正则表达式/index.html","e0ad3246ed220d77ad3846f60f9cf665"],["2021/08/14/CSS/index.html","a93dc21ce6023f6de7c34fd4c3206210"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","cb42208deb7b1dd7ded9429cc161a5e3"],["2021/08/19/Windows Terminal 美化/index.html","60c799522b6e017f4dfd74329437b8ff"],["2021/08/23/EROOR/index.html","e5d53945c2b3743e4f225512e638a4c9"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","218a95d2b87ffebac8fcc868d98c9be7"],["2021/09/07/编译原理/index.html","1a6b042ad54cbd021b5e6a43b2e20f83"],["2021/09/27/网络是怎样连接的/index.html","2556f61404eb285b3acd3a7d5e4e4ca0"],["2021/09/27/通信基础/index.html","48d392094a528d974ed1516236edb771"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","6630de95cca590b701119417af51026a"],["2021/10/22/vlan配置/index.html","154f80723052cb5aa9d7df3822cfb41b"],["2021/10/31/实验三—子网划分与静态路由/index.html","0c2bb3a707ac382a2bcf75cac51426d4"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","8441fdc16868deb81ff4b3ac93201c20"],["2021/11/17/硬链接与软链接/index.html","f2b6c7a6771ba9557a04b6704c68eed2"],["2021/12/01/SQL20题/index.html","cae1ec2700bca48e1826c25333a94df7"],["2021/12/08/实验五：Wireshark抓包/index.html","51d20cb22d65ca5214b9db4f8f734eef"],["2021/12/15/CentOS7搭建FTP服务器/index.html","00c8ff10c1347562e0bf912f1e0ee78d"],["2021/12/19/CentOS7 安装相关组件/index.html","3638b4a34e6ec93582774265ac12ab2b"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","0706c06cf6a979796ce616452ef874c0"],["2021/12/27/Vue/index.html","b2c302ba768b41f914afa639c4fd2353"],["2022/01/08/ArchLinux系统安装/index.html","682dc85de72d17646f5578cad4d2aa07"],["2022/01/10/ArchLinux软件安装/index.html","ec5c03b7a1715f8a12b14f8868072684"],["2022/01/11/ArchLinux开发环境配置/index.html","b8bee6e7daa5ca35aaa6a0c222ec6697"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","50fcd3c6c3df5295c21568e9c84c7f53"],["2022/01/22/DWM/index.html","2575b30d53ade2bae7e97cfa7bf9482b"],["2022/01/26/MySQL性能优化/index.html","361d8875a645607d29ef711304118199"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","92e76727cc13b62cdca469b81022ae10"],["2022/02/27/ArchLinux安装wine/index.html","67abd30013d3a5d03d22925b5c857403"],["2022/03/01/ArchLinux安装VMware/index.html","270ee6faa3828abb4c3ff37b8330ba31"],["2022/03/01/ranger/index.html","6f289232af47f35264b9594700f01279"],["2022/03/02/ArchLinux PPPoE拨号/index.html","de4b8df63b02f786435b2e999557341f"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","675c729bf9c796a1b0dde84b54401698"],["2022/03/16/Linux文件和目录管理/index.html","f2ef31dfacc9b937be0dc8f71f7b626c"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","4f6d8c97bd8e0a2db65071e296e9f885"],["2022/03/20/Linux用户和权限管理习题/index.html","e068774bbd02e1b7682685b73b8eb1fc"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","2123b934f85c965e152230fe13d6ce3c"],["2022/04/02/ArchLinux安装MySQL8/index.html","b91fa746e3d39d4089a539d65bc19920"],["2022/04/13/Linux磁盘和文件系统/index.html","fc0cf6531638925f2189cf6cdf6250b6"],["2022/04/13/Linux软件包管理/index.html","9959f9fb0c0eb48344f4b8b2723708e1"],["2022/04/18/ArchLinux触摸板/index.html","0465dc55a6c37399e567daf96065a603"],["2022/04/25/FreaMarket/index.html","36f0c9b195865485b9320ae83e9d2097"],["2022/04/27/Linuxn命令练习/index.html","d871b5349291ef61216c50b121f22e75"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","cf559c9f2242b1d1a847a330d4707bb5"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","efe9608dbcd7254fa15060bd38c56c36"],["about/index.html","26991cdd98aa7cac2288f945c54d4ff1"],["archives/1970/01/index.html","7c8b5e43cfb1f9218d8303a595655c6f"],["archives/1970/index.html","74c4e3d877e0e3531188acf40aa28121"],["archives/2021/02/index.html","8159e7811bdbd4a9692be6592bd4bd1c"],["archives/2021/03/index.html","08d06bd11a967dbdcdc38c7be4e015fd"],["archives/2021/05/index.html","d4847edbdbf07db7635723e50cf538de"],["archives/2021/06/index.html","5b423ba0937f7d62a53dd9e87942cfe9"],["archives/2021/07/index.html","0f214356c80be3abf33e37b63dd3256b"],["archives/2021/08/index.html","b518d0590e593c2668e75a9d99877c4d"],["archives/2021/09/index.html","cb9ffd46ffc7c825710dd6a16412832b"],["archives/2021/10/index.html","150078680435864d959b1c678ec6deb2"],["archives/2021/11/index.html","04797a65474b457f555f2afbd702e5ee"],["archives/2021/12/index.html","0c5fc6ebe77bedaac3306f872a2af679"],["archives/2021/index.html","118f90b9be5776f66123203ea1a993c2"],["archives/2021/page/2/index.html","02b57826384a2a50965bd0e696ec5a9c"],["archives/2021/page/3/index.html","9d7a02f99f4f524f60213e9006b231fc"],["archives/2021/page/4/index.html","817f82af9afc73c51142201c414105c9"],["archives/2021/page/5/index.html","eb317e07b44c5ed5e604fa47d19d440f"],["archives/2022/01/index.html","c38e4c655602b4d3cd9082803177f8ae"],["archives/2022/02/index.html","bb7e9363b8b9d9bc007a60a2db45f196"],["archives/2022/03/index.html","22de70ff4e86e38ac15d9506dead890e"],["archives/2022/04/index.html","5de9583d7f683661c58f32dc3458b402"],["archives/2022/05/index.html","8cb66ac0591f7ee74af3f4d02468695b"],["archives/2022/index.html","e31c415901a03a9ecc22062cd923f353"],["archives/2022/page/2/index.html","64e47472238c5f32def73faedb614df4"],["archives/2022/page/3/index.html","0cdf40f9290465f8a7b101ff22e9caa7"],["archives/index.html","26d8fdc81223c251cf99cf2808e86734"],["archives/page/2/index.html","57e528bbe633c34764693854dff6f4c2"],["archives/page/3/index.html","0734b09a3cd959412f15e20c6ea27089"],["archives/page/4/index.html","f7401a85a9a9fa541f1984cd84f5ccf3"],["archives/page/5/index.html","f341b80cdeffec3675c63887a96675fe"],["archives/page/6/index.html","08db756de27958cbcc377f7964bb26f3"],["archives/page/7/index.html","fb7c62828e4d2ed9bb9e98c1a0c0293f"],["categories/C/C/index.html","cda6419874028ca3ca2e00939c9a57e6"],["categories/C/index.html","ce97d9b6eb9f92ed9643ada6afc922f3"],["categories/Linux/index.html","9e5194f251a548c6018c94f5e954ce66"],["categories/Oracle11g实验/index.html","27dc4bdfad58e2524e9c88bb66bb49d5"],["categories/Windows/index.html","fab623b1ee69e84a1515ca2c179ede61"],["categories/index.html","ba36923fbeda70b30f1db149f6e0e5a7"],["categories/javaSE/index.html","6f29e1a8263ecee4c97f79b87bcb428b"],["categories/tools/index.html","7784073bd80715f3b393d56bb9781a54"],["categories/wxy/index.html","ea825999b9a5a208d41578ec20b85680"],["categories/个人/index.html","9d791ca31ce0f5d8f7758b624985935f"],["categories/前端/index.html","6278d3940bc8b525e8927966bd9992be"],["categories/工具/index.html","8eba646c21dc54b4297747339d808d57"],["categories/数据结构/index.html","f61cad766615b75ac8d7a4f4453b54ee"],["categories/笔记/index.html","43b66f4da06a536fea460cb28620dcce"],["categories/笔记/page/2/index.html","91cf79937fa9fa85f40f7dfb9466bca9"],["categories/笔记/page/3/index.html","357b746e7077e5c0b260f99df70e29b1"],["categories/笔记/page/4/index.html","2ec1edb3a9c2824a4edd3a682a23945a"],["categories/算法/index.html","be068db234b0c2a6dd3671a42ffddefb"],["categories/美化/index.html","18b046613d05d2a204269855dcf2e9ee"],["categories/计算机网络/index.html","1755586062a11ad82a4ea6e7e72612c0"],["categories/计网/index.html","698887f7b71d0512f2a577e0ddc70055"],["categories/语法/index.html","fa0577973accee2861310c63f0ff096b"],["categories/软件/index.html","0ea9aa7fe2522032c90117f3de31f3e5"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","39f4c74cb41edfd62e3116476b5400ac"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","c6336a2a921c7a0b370cdfab6aa0be2a"],["page/2/index.html","a81911d0def2a480d3e45c5a054297a9"],["tags/Burp-Suite/index.html","19fc67869ef530a14298bb0f751f04d6"],["tags/C-数据结构/index.html","7a28a214f7b6ca551925d5da27738cf6"],["tags/C/index.html","9e75bb852f603910b0bf2b7c093416ce"],["tags/CSS/index.html","767c570495035a832073868f81d2614d"],["tags/Git/index.html","60328c3ba03f77e623f2bd619dbef685"],["tags/HTML/index.html","1e9936848b32c6c9a6baaa6ccd62c50f"],["tags/LeetCode/index.html","d371f73ccef61d5a83adb4fc8dc6046a"],["tags/Linux/index.html","8211828586b2326830837470f5c610a8"],["tags/Linux/page/2/index.html","0cbc8a7f51a4ca4aad07abe52d3f22ea"],["tags/Maven/index.html","184edd1e0698a7a851d5d69c12d0a035"],["tags/MySQL/index.html","ab44231a2e0cb99cff84a15439a74276"],["tags/Oracle/index.html","3fa9d8d3817ac83c8954f7fefc3661a0"],["tags/Vue/index.html","7d2f85042ada0fe42d24c7800b622b12"],["tags/Windows/index.html","461e6145d17931d42b550e01d1a6a60e"],["tags/Wireshark/index.html","1df38b7a2a2325e7f7301ce2c087a10e"],["tags/index.html","27fef64483aa094dbb79192a4921a5cd"],["tags/java/index.html","027b281955acfe4b1ced84a7c9f85a5a"],["tags/route/index.html","a34070add303ec2b36ab34c7d1cb75ad"],["tags/tree-java/index.html","6334859fb13367a9277c4c469aaeac17"],["tags/vim/index.html","e10236d6404754d23f990c677951994f"],["tags/vlan/index.html","6b83ac997691730f9ae5974b1aea6feb"],["tags/wxy/index.html","3495aefb75a80b16969436b253361fb0"],["tags/个人/index.html","90cdf34f1b896df6047124e975acfe3e"],["tags/书籍/index.html","b60125118bc09afb6278d98aa9ad6d54"],["tags/博客/index.html","de343e2f186d4de1c8ccadbc2f3f4da5"],["tags/壁纸/index.html","51bd43b9c2f2fb2a81d7dbe3f6c6d4d2"],["tags/底层/index.html","005090a85563ba8821a83d2749a55498"],["tags/数据结构/index.html","6ef2d0afa2b57c452fa4cb472e236fea"],["tags/文件/index.html","1f9927667c4237e6eb924fd8cf5810df"],["tags/服务器/index.html","948ab1f4a37efb7f925ecbfd75bb97fb"],["tags/汇编/index.html","cf5631b48cbd8d35e1a4e2f8fc1a3d06"],["tags/算法/index.html","f823c8c11b266f8f78292b03849003d7"],["tags/记录/index.html","f480c6c8db386abfaf0d3a75dbbe4fce"],["tags/软件/index.html","b350027b79df7115d36f0fff7f90facb"],["tags/通信/index.html","937c7f3b0291e58954b8ae538310d8c1"],["tags/链表/index.html","df656121f4430c585d98970826845e25"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







