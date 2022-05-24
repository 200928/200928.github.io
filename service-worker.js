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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","14d49b5f686ce88879d975d0e0733350"],["1970/01/01/nvim/index.html","0205578a3f99dd635810d21b27e21830"],["2021/02/18/Git学习（个人记录）/index.html","769a9797de9f7f1b5575aeb8ed0ffe95"],["2021/02/18/Hexo博客搭建记录/index.html","4b06a8c89cf0a469734b7bcac540533e"],["2021/02/18/IDE配置/index.html","94ee1c6cc971761cd85c4ef96ff50410"],["2021/02/18/初识汇编/index.html","7bc4286e44436bd00851ec61f549cb3d"],["2021/02/18/链表与指针/index.html","cfe979ae74cd470bca566a6d2a48a37f"],["2021/02/22/Topic LinkedList/index.html","f1183e9e2b45c3757d1d841948a9ec16"],["2021/02/25/一些设置/index.html","70c7e211220320b75a7df142ce18cc0f"],["2021/02/26/WXY/index.html","9be8e4ee996c97af094d197d9d6cf826"],["2021/02/28/大二下课程推荐-计科/index.html","cbe17201ce99421a759fadd0e0138f28"],["2021/03/04/Linux-notes/index.html","eeef73d56b2646d40d501598443db5d5"],["2021/03/08/data struct one/index.html","75a3c3ea25b65fbf875488b437e6c972"],["2021/03/17/data struct two/index.html","a0eac420b3c62f7ca9ca00e4bc8f309e"],["2021/03/22/STL/index.html","bf3c3773dd6a7a7366b861defee8f531"],["2021/03/27/Battle-of-Tanks/index.html","30bbc6e2ab359b9f4760f6dab29d6d7d"],["2021/05/01/MySQL/index.html","9337cf17e5e3f172c8cc26b17900d839"],["2021/05/09/HEXO部署服务器/index.html","4b927fa3c80e408a58f19ba42f55715f"],["2021/06/04/vim/index.html","3c1a028b9def59fdae94bbcff78eb11a"],["2021/07/13/oh-my-zsh/index.html","020088bbd0eb77c9e9299647f9a5bb8c"],["2021/07/14/HTML/index.html","c5f6837a828e8b400049773a55b3d206"],["2021/07/19/Maven/index.html","bf980eefe081ae2295fdfcce9cd7b4c9"],["2021/07/20/随机数（C++)/index.html","32bc8a1680186667e1f03be7b034fa33"],["2021/07/22/data_struct_01/index.html","dbcf692299e1e867b20d922916bbf237"],["2021/07/22/滑动窗口/index.html","b71b07fbb7f870f307532938b0aba0d7"],["2021/07/26/Tree/index.html","6ac60cd5a150630c778be27fb7e14fbc"],["2021/08/02/正则表达式/index.html","2cffa9af23f509538c5dac160a72298c"],["2021/08/14/CSS/index.html","4ed86817d56546008e1e3bfa1a1120a5"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","b56b2bc342db3ddc1ac47aa5e956a942"],["2021/08/19/Windows Terminal 美化/index.html","e03916e5df77ac8464f684bb80cd9d85"],["2021/08/23/EROOR/index.html","54fab243a4467a811e70665f40aeea6a"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","a744fbb5da289784e5887c3d1393a486"],["2021/09/07/编译原理/index.html","45cbb88f6e17aa7e8e8e9ca309d1a312"],["2021/09/27/网络是怎样连接的/index.html","1a15504c67273853a4450d8401a4de85"],["2021/09/27/通信基础/index.html","5a01a0213dd406d9485991c8c9e5082a"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","1981fdc0c921b095ed69f05a7fbfe889"],["2021/10/22/vlan配置/index.html","0a90c74fab4a81ed19198d1123f0be55"],["2021/10/31/实验三—子网划分与静态路由/index.html","8493c2d95583e7cad2b09bbce7ebfa97"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","cbf08176468093106e714d0d754269fe"],["2021/11/17/硬链接与软链接/index.html","765ff80db34abdc99893a3eb713ec70b"],["2021/12/01/SQL20题/index.html","10d31dab4ac5b293eab40d0388ed0bc0"],["2021/12/08/实验五：Wireshark抓包/index.html","c8314b749b494752d396ed8c11772e3a"],["2021/12/15/CentOS7搭建FTP服务器/index.html","d3f6a01396b3d8dd1a50a44c68cf5f71"],["2021/12/19/CentOS7 安装相关组件/index.html","d49ceff9d6d8f818c5199cb91990e10d"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","f342eaec41ff30c5830056a8e94f4fb3"],["2021/12/27/Vue/index.html","4afd0d3848d37f95d9961da2139991b9"],["2022/01/08/ArchLinux系统安装/index.html","b10804eae86903a96c2f7a6ff564d974"],["2022/01/10/ArchLinux软件安装/index.html","3afde4bc63e3ca5a0ae7cbf3e2a24e47"],["2022/01/11/ArchLinux开发环境配置/index.html","28f0e4b6a42dd851a7c78ab74681465f"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","c5b356280ad4120145f4303cec5329ac"],["2022/01/22/DWM/index.html","4771679de9cb0c01c3c918b4cb08591d"],["2022/01/26/MySQL性能优化/index.html","d8dffd9f56f0f2dbfaf6b155c627570a"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","472db8b1ec0acb9df3275432e8cb0901"],["2022/02/27/ArchLinux安装wine/index.html","90f5973a5c5f6e64ab1ac35e57612fc3"],["2022/03/01/ArchLinux安装VMware/index.html","f23ca05fea538608b6737fabe1e845d0"],["2022/03/01/ranger/index.html","e46cf95f18448e7e287c121027427923"],["2022/03/02/ArchLinux PPPoE拨号/index.html","8e7c96ee837dc1a58602484cef15110f"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","d5d2190a2194557b6b745f9f981c1432"],["2022/03/16/Linux文件和目录管理/index.html","03f713a2934c91ba906f847820bc24b9"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","19f6c8b33f6d67e399969a515abacc59"],["2022/03/20/Linux用户和权限管理习题/index.html","a365745ca41ebafd63f0f42e75708978"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","7950b147adb272ee35aa315a351124e2"],["2022/04/02/ArchLinux安装MySQL8/index.html","30926a671a8290f05a46485f5de508bc"],["2022/04/04/Oracle11g实验五：Oracle-备份与恢复/index.html","4a9df5488d5c9672226253af5263752f"],["2022/04/13/Linux磁盘和文件系统/index.html","a3c7b5efe0e2b75a4b59f873d12e3dd3"],["2022/04/13/Linux软件包管理/index.html","e85d40eeb5302d3426ddf199b2f2f227"],["2022/04/18/ArchLinux触摸板/index.html","06257a5d66fe26967f24875d01cb5a75"],["2022/04/25/FreaMarket/index.html","c6895a6946b01cfb31a7a391ed7601ce"],["2022/04/27/Linuxn命令练习/index.html","4b2845b0835daed2cdc3362ab8a32486"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","bc6e7c38772b9c15dd4d6c5127b7ea33"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","b014f3d50557b9501f253015a13d3a7a"],["2022/05/20/Linux进程和服务管理/index.html","a0a15eb882740ba988ee0b3e39a2db9c"],["2022/05/21/JavaScript原型/index.html","f257ee24aa3738d08c64db328dcd27e8"],["2022/05/21/SMB/index.html","eaf39cf8e5327442ee38a2e121a6ffd8"],["about/index.html","710e5dc41e38b390576427ccf83631e6"],["archives/1970/01/index.html","eca81b7750ec7238ba5685c2c0a5c43a"],["archives/1970/index.html","3adb5e87b16a2732001e11fb314e07d3"],["archives/2021/02/index.html","19a785f853424170bdedb094fafd337f"],["archives/2021/03/index.html","52ec98e41f319998cf3b279c8494d40b"],["archives/2021/05/index.html","6468e9bbb9676c14afe38c74a951db3f"],["archives/2021/06/index.html","0fa1893da70cd8fd4958aee415881e22"],["archives/2021/07/index.html","7f7b515fe4cce0efc3a27d3d8782e856"],["archives/2021/08/index.html","769fe6a33e770db59d79fbcca262cfd2"],["archives/2021/09/index.html","bf186c676f00ad74c18e72ec1c4b0317"],["archives/2021/10/index.html","4537396e1a49c30adfefdcbeae17c65c"],["archives/2021/11/index.html","7a854298bcfb89091270a4b770f01567"],["archives/2021/12/index.html","5076a166783d20c43acf1343b0ed1eba"],["archives/2021/index.html","65f4fdbee5edcc4abfbe517794adae34"],["archives/2021/page/2/index.html","794c1c7434606498d477ae7054bfdcf0"],["archives/2021/page/3/index.html","13d21a94830b9f8b3c3c40a321bc65b0"],["archives/2021/page/4/index.html","9bb01ab10743704d18910b9642532a9c"],["archives/2021/page/5/index.html","dbe5bc90bd561cd97c9afd7132f281ee"],["archives/2022/01/index.html","aedea33d1afa9baf94a48d74cc9532cb"],["archives/2022/02/index.html","9e4ca3275ed98107fd9029f5dacf1381"],["archives/2022/03/index.html","464623b5e56cf68ef8e7755a3b035751"],["archives/2022/04/index.html","97d2049243028bfac6a094e19e15e75a"],["archives/2022/05/index.html","cd005a11cc8dcd8b943a08f3e05571c2"],["archives/2022/index.html","05858366983d8a2e82cb4613fac7bbf2"],["archives/2022/page/2/index.html","279f2aa1d8a52817003ffc428c1b08e1"],["archives/2022/page/3/index.html","637abc83268dc03ef9cb007c96fb2476"],["archives/index.html","1a4535e1f35b55e6da7900a3688041e4"],["archives/page/2/index.html","a0d60047a4921a87b85f65caf67c6ece"],["archives/page/3/index.html","4812fe6b31b87445b16b98360cc54541"],["archives/page/4/index.html","8e759c970862022b27ef17764c82ff7c"],["archives/page/5/index.html","d1177a1bec7f3501270706e0b8acf007"],["archives/page/6/index.html","bf9fe4d83732f76e6e52cc53209eba6d"],["archives/page/7/index.html","ce25d236503602b5b4a418cbab096a00"],["archives/page/8/index.html","1bc58283d9529be164edee421a2fc604"],["categories/C/C/index.html","13bfc970e0bc2fced9e3bd8bf576a7ea"],["categories/C/index.html","b11c737b2cadb77b9e2955399eb0845d"],["categories/Linux/index.html","5ddfd4bc7400ca55065589b20d55fe42"],["categories/Oracle11g实验/index.html","9490863ba3bf68ba2c3058f33f2c3b0d"],["categories/Windows/index.html","02ccb8ea7eec57fbae57f26798aa90d4"],["categories/index.html","577d903be8945f2fce0e7e9ec379a130"],["categories/javaSE/index.html","7e9a92cbccb267c54a2f6e995556bbb4"],["categories/tools/index.html","8e2707e6f4be89a0a949777f97e01e0f"],["categories/wxy/index.html","445090c984c68bf0d7697500ff744d92"],["categories/个人/index.html","4e6c5330d40c4c5d619a347685ebd970"],["categories/前端/index.html","93bb19617e0c2693d8884cf82c6cbfb5"],["categories/工具/index.html","02324939dc7994497a601e6fa3b64b0d"],["categories/数据结构/index.html","03490e1fa3239cd6dec4668380be97d8"],["categories/笔记/index.html","400cbe92e2a0b0e3f2727685f5ea4dc4"],["categories/笔记/page/2/index.html","6e4ae62bb58d5a431cd7a308c9614131"],["categories/笔记/page/3/index.html","89a68a62dbb01f6c8a23ffaa299efe2f"],["categories/笔记/page/4/index.html","694ad4aaf411c83e52fb45924a9bf635"],["categories/算法/index.html","27efd90a9d33cec3063c3c145957c637"],["categories/美化/index.html","3fd5117ffd0c2e968f268bcfd50b22d6"],["categories/计算机网络/index.html","a0e87a138bce6b950e5e1cfe339a2ca5"],["categories/计网/index.html","0285e6866a64794451bfc1975226245e"],["categories/语法/index.html","e3d98b64d0095d2d9ea2ff5b0a463055"],["categories/软件/index.html","2ef0aac5159ca6c2002e13443098a413"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","72944ba348bb6428b9a6e257ad060038"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","fb657c510267d032a000ec0427eb07a8"],["page/2/index.html","d1e3f2a7927cf9f0aeea43ffdaad788a"],["page/3/index.html","824833d64cf58be72f86ff2595158c4c"],["tags/ArchLinux/index.html","908bbfa29de7b63e655ad3ea7d43e979"],["tags/Burp-Suite/index.html","9d77f5fe5b4829d9fe3078280f9a4a74"],["tags/C-数据结构/index.html","f953279535351dcaca19d4dd5b646247"],["tags/C/index.html","049c91ec53c267c595d983806167587f"],["tags/CSS/index.html","aeb9240f17613e334d554918961697f2"],["tags/Git/index.html","85a36a99aceb4574122f0080d089b1d8"],["tags/HTML/index.html","c3dfd1b3d9471fb770fe43715b6ce6dd"],["tags/JavaScript/index.html","80a14c10f313948c4d72b52151a5301a"],["tags/LeetCode/index.html","c47f6d074b91fd4deb4e90d3758b6597"],["tags/Linux/index.html","e38e363a8ffcb074ee7b33eed63ff9f0"],["tags/Linux/page/2/index.html","cc3a297861ebcacb48ddcddef3b032f2"],["tags/Linux/page/3/index.html","2970c3303ea42b3d10ff080d2fd4dc81"],["tags/Maven/index.html","1ba25d946eabed353af00a09cb848347"],["tags/MySQL/index.html","9391ab1e680e66d9a18a9510933d1795"],["tags/Oracle/index.html","d4874549cf9c77514087cb53f7ce5c67"],["tags/Vue/index.html","5e830f9fb9c626f24c88af5e48bd534f"],["tags/Windows/index.html","7986a7edf7ff348fd82fdd5a51e2cc8f"],["tags/Wireshark/index.html","04ff33d8e20e2597b59aedea66994906"],["tags/index.html","b8a0fdae0bca3eb5eed45d80b605956a"],["tags/java/index.html","c02b73d9af3ecccafdf426f1d8173e58"],["tags/route/index.html","34f235b215efa12d78030897894688ab"],["tags/tree-java/index.html","a6198aabb9a642f2166dcc7e7b1caac2"],["tags/vim/index.html","28cf8a8f55642172560a696d2916f42c"],["tags/vlan/index.html","fbea131e3dc9b28762e62bef8a4bb3e5"],["tags/wxy/index.html","a301a8bdd6e157f4b4e3a02a8d826206"],["tags/个人/index.html","54247b51bd36211898ff151a51800fb8"],["tags/书籍/index.html","ee493789c8e4201a683ad7e7cf590a36"],["tags/博客/index.html","1ddbd6a07e60e830f6d592343bc5e4c7"],["tags/壁纸/index.html","07e6709459936891a1ed1364ec1a264c"],["tags/底层/index.html","4668bf933e35bffe9b0afc72bf4ba430"],["tags/数据结构/index.html","b38272021d1f7c67e5ed7bf951c97727"],["tags/文件/index.html","651938c53c84bb09ac328bd8fdb931b0"],["tags/服务器/index.html","181fcbd5a3886520185d4608abdb96bc"],["tags/汇编/index.html","900d10ba1c92238e8013087c10f4c9ff"],["tags/算法/index.html","d1f87c4830bf850ce45f56a8a9b5d5b9"],["tags/记录/index.html","29f12e0089766ff6f5314674e44118ad"],["tags/软件/index.html","6833c8b5f7876d181c4591c86b69e40b"],["tags/通信/index.html","e057a66f4cfbfe8fc1b1048bf585bbd4"],["tags/链表/index.html","e5526b1e0e3738e3113eec41b2b5aeda"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







