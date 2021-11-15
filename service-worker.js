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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","1bf545a99e20f26046ca3a4220dfe22d"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","5fe39ae0803722a1a25c4901ccb3a172"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","439877a08b9ec6ad3bb86df904f6a108"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","3217cd4b89c09d6eb0922acf9778fbab"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","d0dcc07199479f1b625c5c6fcda92ab6"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","e4518c08d58f73902a59a6e1cea53bd7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","385fdd2b58cd4bc0a194e29807c527da"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","f987fad8bc2013428d480357aea89378"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","d9bd15eb7701c54d2ba7b02aab0fcd17"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","e9c2d830fe71bef9c3b4541e390b329a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","cc7f2265ed7e73f912a2a5172e019f9f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","0470ba8dca43d4dc0d7139c64597f6c3"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","0a7eba3190dea8fd2b328cfff013a428"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","989dd1dc27d00a6a2cfc221f7bc007ed"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","a69dde7eca646ebed22add800f67ae30"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","92341e3f0820d17efdd8f964d74b93c0"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","8e99dc4108cbb645f503820353690472"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","1f0d25a64ddf9696e65919c7cc6f6fcd"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","d8b8ddd0b787529f12a192e375d03d2b"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","3ebb02962ce29365ae354da3f876905e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","3c21b68227e41a4ca3a43365f0295f08"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","f32bb2122e229960e27f09a6fc3ba5c3"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","8621cd9baec3910ef8e35c1ac87f7c9b"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","217b1b188ea8dabf6722c0d5b0c0f529"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","0355855799b9f208965c2f37ed15f0b9"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","e3b3f33d8f047a4c12d520d1a19205cc"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","03f6ba644683a31017f9eb67ad89d5a9"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","62d7761e8593005c9ad7040766d5a6d7"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","1c478e339965c6d86ddc827509654f14"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","c266f555f1eadc5abf09cbf61552302c"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","b8f01f723a0628d6f869ac39f5c6cc37"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","f58cb0d90e451d61e8415f5aba09fb92"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","288f0be1c6f5dabd35779248cbdaf834"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","c3b8b29c73253c6a7e7ea101ab0f484f"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/实验二：vlan配置/index.html","9036a758ad5e219f34d5ea0d5a6dac3c"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三：子网划分与静态路由/index.html","f0dce0352ef454e147173bfe71c68012"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","1259f768bc979f0149bb260380412b21"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","1750e3e6e73e4eb1042c3b0dd5891068"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","04c216baed7aa6eb06d6d4472698dfbb"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","ee52fe1c2a8d4a7aefab3a6f72ae226e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","e37ac88f7e678cc3cb2f4e08a86e549f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","32109441575cd52d3b97d50f4b810a81"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","060112316ae85d8d11df4bdde0ec4b76"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","dc134e7cf88ad854e6657b3c018445e4"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","844f8116c3a0f90b8afa6895dd0fd935"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","215500750622d97ba2efd126b39fe928"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","0d4a6da3f8aec14515839e3334539bd2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","431b1c6b9f6a8533e80ac8bd9e4ee076"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","3e85064e2abca4c75fe99171b72853ed"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","ee84bf5f8544ebbd2a5b9d9e0940b352"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","3fbb2d33992a3e87c3756a233770c5fc"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","f866d3f67650abb65d4ee25684a5f800"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","011ecf8a1f96bb4352b11871ef169eeb"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","614cad88579827583e67e94e9a3c2f6f"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","b40fc779a7949464c55ce60875cb9703"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","3d067f0f24baadbe88f4fec4e61bdbc3"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","80b8e59865dab0fb1488f977936e1155"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","6b4b86308cc11efb6aef062e51108da3"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","06b7d3513a58a6aef028317c03cc468d"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","65d97580e2fe23057179b2fb2fde8851"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","4accbd63ccabe761f62497a24677a47d"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","4ae2453060482dc429e8337fb292d9f2"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","3d06c5bc0af84567f9e4f4eae1e072b1"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","ef7004d1de0d22714a8db7498aea683a"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","37102d433a3c994c28d5d4ef56c293b1"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","09a9aea0238403ff079949827dd08072"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","ab9b2ed156cf4f6dedf685ff478ce484"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","853a2bc149085cc350a54b671a224616"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","3269d45176e0890d561e3e9f57393d53"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","e8f39344d0c2e5e4ddbc1a2a668657d6"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","951d7834fde9e56e5edcdcab3e3b7556"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","bf80f1677fc0c7dfd0d5bb4d9ad75b81"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","eea6c32a7f5b78c2f65852f5e90fbb17"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","61e9186ace47b9d8e6309df108ed0edc"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","a31dcfee8aef75266108354e376560eb"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","cbd82077db37e917c579eb338dfeb50e"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","6edff6ec6e13dae7333ab9c3954250b3"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","f6d2f6d727a378f62034eac0f57e7eda"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","016a8d19e9b0f176f8438f84be89f885"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","7199af1e65795f2e0ee7be9261065885"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","01ed5ee0535f1c1570f37317204dea9b"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","88203df3a45c41ac0a02d4747f407b0b"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","bac64d1eb6737ea1b4c3db0d7211b17e"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","8d52dcb390480d5385e9b7a3a771a935"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","fcda393607f1fc029017df75e21ede64"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","776ba18d0a710412048c2a7495f41580"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","e25e416227df20f56dd33217b0d5fc70"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","f5a15db6c45bc7e0733c787a76ad8999"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","7fbf009fd067b41f8bba2b6b029e6f2b"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","445d243e0ca689faf130d1289d790ed7"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","4e394562768a32e7a63fb549ef227975"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","2a3b56e7a3a39b33b363c31bbdf8922f"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","2d4bf7534cb6716d4eb2fb4db4e44321"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","278c577f966bdb3f90279210dd4009c8"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","f078a52c43de2ba7c38e6fb2717a9d5b"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","74da4f86a56079b4a2339aa3a3adae98"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","57964b49fe96c7ea0ad3b978dc6a0b37"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","5e3ff05a84bef7d7daaec037c6393889"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","c0b81aac095889c1e3cc223548abe975"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","82d9dfd8abca57b0772857e56a9ec283"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","f65bc42e070821ce61994c75a3370983"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","ae60c8fdf2c7b8f4f5bdd29b9a2341cf"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","0d8a9c2e65c221dfefff663a45a8c064"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","1b418509d48f8b4fe065ddb990f32f5d"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","2603b68790c8b660352ac1735f820ec5"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







