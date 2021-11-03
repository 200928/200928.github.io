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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","8919c5029b2a1af8a3908e9197de22cd"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","46400919d978e2fbe4c3133efc646f79"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","567a5b77c7905366d8d0b5f92696c08c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","dd67a6a4e96f77222ac1a8f60aa67d22"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","9031ac7558c96191fd2188b9db1fb03c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","0c469863228b0dfa0990994850057339"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","6e37a6a5e8c5af9cbe3214598fc37be7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","4174e62c64bea209a69137bce35cf2fc"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","6239bdea6ee7920d8b64fab60f00268f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","7bcf770aab3d5a991d581225812e9a6e"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","885e1c1ad735a3b3fa6905d014d7b987"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","87066d6b7b81e9690f5185fce30ee043"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","6d2ac82abe8dadae092f1d7d38ff5a85"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","178274d335f2391ff5ef9a4cb98ff707"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","fb2551cd5989fd59389d28200b3f51f4"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","0362c85c486f10f6b35f73dd9c64a878"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","dcc879facffcca466fdff77c801566dd"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","01eb517ed92a1d2315ba6dc73d6fe381"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","4ce1aa9a8c60b666bb8284959bbbd68f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","117d8d547b718a3f74d4d5d98057ecd8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","1c46c966bb3d53896109c99768f74e48"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","84d035950fb39c2b2fbecb1a36281b1d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","88dfc26039dedd3ef3390dcd0abba878"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","eb4de1d8085991d7bd46522a6df130ce"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","43391955361a770bafd4c2dc7f185f55"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","64bceecb5e88b84e90d6a8410df41043"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","327f115c229a2968d2e15adf55641a19"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","6131e4f9b19856cbdc476dc00f2fa935"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","508c37da3a5c5e36780c9f336be7c452"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","5e7ab99f7264a44906f450847e3628fa"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","2908d2a3745f257cbabeb7d68bf026cd"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","6b90c0d4de268259480704a963f99faf"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","d5afbd43a7707791af4338421a3f145d"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","29ff2ea8af3d0c7664774a7a6cb8a26d"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","b570221a333f205f56d9a57be056cb71"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","c5132232d36f75d467a47b34739f6875"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","118d9d44aaad61e775085757e96fe067"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","ea020b54f430146b3c6ad833e31bfd5f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","f6acebad7e8285d9f775ffd4fc4a3bc3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","346c15f37fb6b51bd27805fa9c5b0b5b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","f488bf72bae9d9ed1d8494997454d02d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","fb003f08fd6e4de8a53a20853ffe880c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","a4386e6b6bd2d32cca839ce278606e6e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","faa63268fa260c33cc684293cb48b18a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","10da59af642782e61f3ccfd7d5ee7454"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","a98b7a9af6b59b8deb5399a0fccb5544"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","b43aa86c6cbb200d6f1eca6e5b63fab5"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","31083fc772ce9ac448d687999c1de966"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","63d6108cc04d52b94e925c2e250a7003"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","7fe543a23c3bc8462400ac1f0b673ddb"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","b1a852d62d0b207b79ea8835d7aba553"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","02b2f343625e6f899f72c20a1b09f5f6"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","1ccf9e2fb2dce393385625ba3519910e"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","fc6c8446a2cfdd7fee215d20612dc898"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","e2d13c03a9206e09d5b7b42616b64341"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","24a8f520d5e07a2fd092ededcc15029d"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","6b9d6c2d72d0860894d576f525e36c16"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","fb1d36481017b8208e504a55d31906ec"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","f33c65522112539c75e0f40e5108591b"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","dde7afeb2cafe1ebde6cc276ecffcba2"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","71642fd97209f51f8e73c58a3d83ebb2"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","37e97b9768188a5f8a7387cba2516e81"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","f01f540bb64eac2f6238011090fe6adc"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","0e226e42a49adc8d48034781022442dc"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","cf244446a85f951c50c1f04dd9582814"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","e5cf34957d59e77b93b06251dc2ef90e"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","24a5e5f815ba0f0cf5977c38fad1a559"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","a86736cbc3fbdae512a3874bcf51bec8"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","2c2083aeeeae7d524ed795fb5d6e7f89"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","2b34ceb9fe6f21127f9422ef7e75c661"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","afbe619e9274c07f72daefd7ae9829a8"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","51cd27cbff8d977f8f80608b7b4984ac"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","258b21ab3a78bdeca898c01090701456"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","b45c61dd25a6da7e0fd776259a6fb161"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","fce23c560790d0a910fcd2c341faa722"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","63bcda2a97cd558d3910c2e225b4a856"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","71b2b1cf4eb0a44d596a863df629acee"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","8bbc2a3df183f5168e523af94d5c3346"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","1b18f38ce847d6aba74a8d8b667e3200"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","5db291028ea011ac3a32ac071a8c9d72"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","d1f9895fbe7773ae100e68690c9043f7"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","58fcf529a7a2de8fb34c72bfff0bcefb"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","6299b28a6111e59df4ebff455912b4dd"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","6620c0cde935b439aae290816861a237"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","daf78144aa132cab699bce6abc54b2b6"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","174ba5e619bf098a8b3e8dd5e2cdfc6e"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","1f7978447133df0e288a000c5b31129f"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","c2fb31953f52d85d7e15d050659ec93d"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","423dd7f4dbd6d28f7a1dc9541e88829e"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","4a7f3e531951e2c3695ba30bcbe82791"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","93f9fae7735eca105bf2e03e8b8ceeb3"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","f57c3ed8edf910241a48852f90d8c9dc"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","f3106210f4db307e0f0b8e797962783b"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","fc33eb354abd7df77f4f9cd915f23d1f"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","5942abc3b7a45b41818f5c2a159abfc8"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","4b455d566f12996b8a2e5a4f30a8c0cd"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","ca3242e1d7ad0995a896c90c6e05d1cd"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","8b48db4836448e06b37fd472fd8a8342"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","6575a1d13b6037780adc7cbeb62e9f95"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","bb26b1baf9665f90f1e20e68eab70cdb"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","f3d81e78530b0d535f46929cac4120c5"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","7008f9712de29f536b0c5615f6e44133"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







