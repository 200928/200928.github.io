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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","d53e2019daeae769002f9989d4da357a"],["1970/01/01/nvim/index.html","1d153847dffb16ed950b91a7790b2bf5"],["2021/02/18/Git学习（个人记录）/index.html","9759e861fe4ef38086e72d28ecf89b0f"],["2021/02/18/Hexo博客搭建记录/index.html","198da0c1840b1fa0956c4ec8a4301c1f"],["2021/02/18/IDE配置/index.html","540e51da6abf4ca6d97b66048a1c184e"],["2021/02/18/初识汇编/index.html","d096c22708740c7d8d544a168ca61202"],["2021/02/18/链表与指针/index.html","76f956beae92be75d7677097d9ab8218"],["2021/02/22/Topic LinkedList/index.html","39ac241e3aee06e64a258e262b2223ab"],["2021/02/25/一些设置/index.html","a27c2b184762b13181d1f7c0ae114067"],["2021/02/26/WXY/index.html","796f3ea993b2df384627aaade32749bf"],["2021/02/28/大二下课程推荐-计科/index.html","691f3cc4f1f9bd5f60dfa6bcec9ab0fb"],["2021/03/04/Linux-notes/index.html","bd2067ad2951eb276d032093308e7e68"],["2021/03/08/data struct one/index.html","234f7d2a9f345bf3ec740dc9f0c45fe5"],["2021/03/17/data struct two/index.html","523d7db2517b11c4799188ebec94c2c3"],["2021/03/22/STL/index.html","2c93c4fd31827d5fbaa792c0fb5c5c44"],["2021/03/27/Battle-of-Tanks/index.html","06ae5599a900cb117b737ba151a4fd78"],["2021/05/01/MySQL/index.html","34de9712952fce7de2d2a7bdbabaa60e"],["2021/05/09/HEXO部署服务器/index.html","f910b5aa4942ebada950878f05ddc94e"],["2021/06/04/vim/index.html","0e1a1c1ffc406da4654d9142231bdc90"],["2021/07/13/oh-my-zsh/index.html","a821a84d6705eef3d333f97c74ef4c12"],["2021/07/14/HTML/index.html","566f6bf8a8a146b2ad693b05362a322a"],["2021/07/19/Maven/index.html","86c2fa69cb14b7f8104efafd79f9855d"],["2021/07/20/随机数（C++)/index.html","ecbf2e4eb7c9201219ee21e271444c6c"],["2021/07/22/data_struct_01/index.html","6a8c4fe8425386f5149a3f3550545283"],["2021/07/22/滑动窗口/index.html","33f6f0ea5e6ea2e218e2ad7c7114a4b4"],["2021/07/26/Tree/index.html","80da93e748e704c9d3a155dda3a3534a"],["2021/08/02/正则表达式/index.html","0765c307a31cdba35142b0e8705dad7d"],["2021/08/14/CSS/index.html","3ae85e16fd790f38ca5168a59c7e91e2"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","7672260f544b4569f8755448dbe507d7"],["2021/08/19/Windows Terminal 美化/index.html","e8c9df55b11464684f96a847391fd2f6"],["2021/08/23/EROOR/index.html","55615f0dc92279f6fd862bc6bda66fd5"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","d28855030408e8c327afdbf65fec88c2"],["2021/09/07/编译原理/index.html","2c2ae03147eec3e61b2954c669124f39"],["2021/09/27/网络是怎样连接的/index.html","da7fd3389db973192cf3d195b55bd486"],["2021/09/27/通信基础/index.html","6d3d757f9817235d5951f6bdfb72b4a3"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","bc34ffa0198fe0eec6761130c7002e0a"],["2021/10/22/vlan配置/index.html","18740a63554b6b80d47b6561904a409f"],["2021/10/31/实验三—子网划分与静态路由/index.html","5170e5b9db7b4b459651a576ef92f817"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","64af69c7089f0887f9e4599ee007b55b"],["2021/11/17/硬链接与软链接/index.html","e47094a998774408e1951b53d9925db6"],["2021/12/01/SQL20题/index.html","78249da40cafd141efe0328f9a1a77ee"],["2021/12/08/实验五：Wireshark抓包/index.html","00756cff58c7ee4f3bd4a4ef2ecf4b20"],["2021/12/15/CentOS7搭建FTP服务器/index.html","4d4629f49ca57e0478a694aec54dc888"],["2021/12/19/CentOS7 安装相关组件/index.html","d0a2549d1eba83a5832d7c8a10508e05"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","5d23668851fc0afcf5753f8c2d222be6"],["2021/12/27/Vue/index.html","db02b232e5cc1fff9fdc99771e6367f5"],["2022/01/08/ArchLinux系统安装/index.html","e9a182b916035be2fea6f7b52dcda2d6"],["2022/01/10/ArchLinux软件安装/index.html","a1e634feb9a6641b8417966187952db3"],["2022/01/11/ArchLinux开发环境配置/index.html","4e12fc53eea8ad6a521872685273924f"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","a1b9e60f35aee22e87a997e820e8aff7"],["2022/01/22/DWM/index.html","7e7823c6a4f75b3450f3b0bdc5754960"],["2022/01/26/MySQL性能优化/index.html","0c9f1cc2dc88ea933a45deaf0cb0dea9"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","a9741986261149c9780efd24dd01c7ae"],["2022/02/27/ArchLinux安装wine/index.html","a69d3fc1d85af1d0c858d685dfa03fd3"],["2022/03/01/ArchLinux安装VMware/index.html","1e47b626c4de37a625c8776aa8401c1b"],["2022/03/01/ranger/index.html","392ddcd41a987787e882ae01d866c88c"],["2022/03/02/ArchLinux PPPoE拨号/index.html","9549cf599c6388d0d2a844309bfe42d7"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","25dec045eb0d4cda8a1331702a7aec92"],["2022/03/16/Linux文件和目录管理/index.html","0172a505c26a0937e92efba788129fe7"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","402815846eb7045657bff7993295b204"],["2022/03/20/Linux用户和权限管理习题/index.html","cc33e062d8735be6fad060d7ccafcddd"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","acee2c81aa457c8771cd5378788242da"],["2022/04/02/ArchLinux安装MySQL8/index.html","6a59425f891067ba6d8d3ec2f311fb15"],["2022/04/13/Linux磁盘和文件系统/index.html","bd7414c5863e0d04477d2dc0e78d40c6"],["2022/04/13/Linux软件包管理/index.html","15629e2072f27fbc9571d019da1c0b75"],["2022/04/18/ArchLinux触摸板/index.html","3d9f1ee6e20d32ab468790959a0faf71"],["2022/04/25/FreaMarket/index.html","e860bfe958e60c3d85dee8ed4c60c8e8"],["2022/04/27/Linuxn命令练习/index.html","b7414c619ae5a016dc79197f6e6572e6"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","931c98ec902c20813aaa146ebddb9cca"],["about/index.html","2ce607f3e797ce4058018c90c7bb3fa5"],["archives/1970/01/index.html","bf45cb622ebadd580be108b715a2e70b"],["archives/1970/index.html","06893ca25c1011de9b1e94147cf49f65"],["archives/2021/02/index.html","46af41a6bd8c5fd6d303bf63d399040c"],["archives/2021/03/index.html","249d593e518e92d60da3fb9e843286b3"],["archives/2021/05/index.html","f7f6470ed98b6dade193f35bd3adbbbc"],["archives/2021/06/index.html","34b59a50a5355c503b57ac59e40864bf"],["archives/2021/07/index.html","41cc62d0416e7d223cb898ff200f2fca"],["archives/2021/08/index.html","766ec91f5f2ec5fccf38e10421abb732"],["archives/2021/09/index.html","1aaafb5b1dc060f79edbe5b93c472aeb"],["archives/2021/10/index.html","3902fa4e8c7f66ceceae524d0295cc3d"],["archives/2021/11/index.html","4966cf87cf8cdefc938fb6f457e2dd68"],["archives/2021/12/index.html","6b3225ea8ca4457857e6f93283808212"],["archives/2021/index.html","e41cdb55475b0c5d72820212f3de323b"],["archives/2021/page/2/index.html","e445603d38b13b8ee6e138afdf1d7580"],["archives/2021/page/3/index.html","13157428732812a07b808f112a5588ee"],["archives/2021/page/4/index.html","6f448b27b7220ae18bd838bb7165073d"],["archives/2021/page/5/index.html","ba885c86daf95c283115be678d2787e9"],["archives/2022/01/index.html","76dd2bd0b9bee7740c0743b8a10449a3"],["archives/2022/02/index.html","c64d8eb023bf22c4475a55c209f31851"],["archives/2022/03/index.html","9df9d38c580696e9105ed0bfb45599db"],["archives/2022/04/index.html","d55f5e3680825b4c5755fc93eaa8d7dc"],["archives/2022/05/index.html","424febaa4a31881d15891b2354d2d232"],["archives/2022/index.html","ee610959a8474f0473cff93ead3ec49e"],["archives/2022/page/2/index.html","d458f41560dcf5ac9ad42623c800e730"],["archives/2022/page/3/index.html","a4e7c452f1d9009b9cc084a29aa30c64"],["archives/index.html","b7abcb69f8850263bac666e09dde9f0d"],["archives/page/2/index.html","271a2d265347a1f19a2d32fd769b22bd"],["archives/page/3/index.html","94b91aa78fea9829d3b61d9acc1975ed"],["archives/page/4/index.html","0338d93db79db819477c99f47a467321"],["archives/page/5/index.html","e76a42004385567ea42c123d40537383"],["archives/page/6/index.html","985a3ff11ba405a7217b01bee0c7b354"],["archives/page/7/index.html","e7500a629afe24f39dc81eee009f881f"],["categories/C/C/index.html","18474cb5fb67fd8f50a0df32ea05ab70"],["categories/C/index.html","67d1712f2dd11156d3acc0aaab098854"],["categories/Linux/index.html","68f28bcab71b67934270bc03f03186e4"],["categories/Oracle11g实验/index.html","df51740c6ee5d348b8c8069dfa9879e5"],["categories/Windows/index.html","048c383f6a2a1928a981afe919b98454"],["categories/index.html","d48bf38f6b5cf236ef6337c13574678b"],["categories/javaSE/index.html","03318e92c78ea6b37ac5f9e34572d14c"],["categories/tools/index.html","f00ca2b582432d150c51542d7b1a59c0"],["categories/wxy/index.html","d794eaded6fd200c607be252976fd7d8"],["categories/个人/index.html","a149d0e13ceb256e5463b41de216dbab"],["categories/前端/index.html","009338a2ea29d933cc23499318da5214"],["categories/工具/index.html","9b7fa2e16244bff5d5a243a1af049242"],["categories/数据结构/index.html","9324e69baea3b7eaf6ca2d4e4f7ab408"],["categories/笔记/index.html","009c244804215c9f1b4ed7ea1f00c9fc"],["categories/笔记/page/2/index.html","3cd7fddb920608cceade2609a51456d3"],["categories/笔记/page/3/index.html","5c3e7de2c4e1be94c54c851e05efcb33"],["categories/算法/index.html","cd01183dba1700c65d908a61867c281f"],["categories/美化/index.html","d53c1aa1bbf35a9495a91be2fffd3d16"],["categories/计算机网络/index.html","c9a3a95ba4800eb44eb7b119aa738848"],["categories/计网/index.html","2309ee12167e46d2abba3be5d24f9aee"],["categories/语法/index.html","f2af739ac62422a334c00d9f9383a086"],["categories/软件/index.html","3fcc676ec7954f6d7ab2bc3da0e62715"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","c7a4e3fa4b8031898fa5260de67fc5a5"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","f6dd55dfed17708fcbf3ac5b93760963"],["page/2/index.html","dddcc5e9376ec2f65c7e82c3c3d2d10f"],["tags/Burp-Suite/index.html","a82174f70f802fa4ebbad43e2d415861"],["tags/C-数据结构/index.html","aa2522d5b3742ba1a97382dcc1e8d130"],["tags/C/index.html","8a3fed3893d0c44db746c9cc30928201"],["tags/CSS/index.html","0b3257669cda1736ec41059279f2660d"],["tags/Git/index.html","6659b14d0c0bf6cf1df1550b6b334f95"],["tags/HTML/index.html","488b9d790d0f877ca79104425fd41e33"],["tags/LeetCode/index.html","fb8f511202224240b9d40d1433bc3e2e"],["tags/Linux/index.html","8b342aa817510e68b09e2608a5863907"],["tags/Linux/page/2/index.html","61f4c2cf3d594d48628ccf01e81c7bb6"],["tags/Maven/index.html","58a6c7b6972ef6f253c8665f9a4c8b49"],["tags/MySQL/index.html","6c1a63960ddb0cc64461a38b3e19f76e"],["tags/Oracle/index.html","148048ed32da89f2716a5f5ade6526b4"],["tags/Vue/index.html","76ffa3dc7daf2acb86e469eb220d47b9"],["tags/Windows/index.html","650e5df9c1af9cca527d59b5042f72f2"],["tags/Wireshark/index.html","d56331edec7481154ed1ec0daa9da6b4"],["tags/index.html","94be3b06271ee3e1b6152b6adaaf07e6"],["tags/java/index.html","c551bf8796c882ce4e37eb90032ef8a8"],["tags/route/index.html","35bc3eb8091c1a1a4c0682539e40c417"],["tags/tree-java/index.html","62ab2ee035e460cd95d437ea27be5ae0"],["tags/vim/index.html","0fe4af89caf80e2af6bb8798e1c2b8da"],["tags/vlan/index.html","7a8a0f75c318ee8ad6a64194f695a178"],["tags/wxy/index.html","59057a35c55d600700e58bcc06f406e4"],["tags/个人/index.html","d81b310cf976f07595eabe2f15a3892a"],["tags/书籍/index.html","e76a39336bea48a8185b24f9ae7dc152"],["tags/博客/index.html","53aa7d8a59919fff88dae71e6773de2b"],["tags/壁纸/index.html","a0249459bf8d756ef9e08cd3c45e4132"],["tags/底层/index.html","d35d911b40057ffcdc8c48b1803651ab"],["tags/数据结构/index.html","2004973aa477626af54c840397dcbcb9"],["tags/文件/index.html","22b351bd76039b14b475f3aa74cf8a9d"],["tags/服务器/index.html","104d1a9c8b14b35c16d715f1bb971697"],["tags/汇编/index.html","cf9d4e003a3b33676a8f1c5c9be0c298"],["tags/算法/index.html","8482fc32dd704d8fa78e617bd79de4a0"],["tags/记录/index.html","251cd58a0609681fc215d1c9b79b30b9"],["tags/软件/index.html","75fd37010d937c78f12b29f085e9d5d0"],["tags/通信/index.html","349cfa165398806c41498e87b0e701bb"],["tags/链表/index.html","42015fe29fe0d7f3c8092d5cb39c9ee1"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







