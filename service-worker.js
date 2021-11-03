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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","62a49562c3c0324b4e6ec55116307c0b"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","46400919d978e2fbe4c3133efc646f79"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","567a5b77c7905366d8d0b5f92696c08c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","dd67a6a4e96f77222ac1a8f60aa67d22"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","9031ac7558c96191fd2188b9db1fb03c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","0c469863228b0dfa0990994850057339"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","6e37a6a5e8c5af9cbe3214598fc37be7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","4174e62c64bea209a69137bce35cf2fc"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","6239bdea6ee7920d8b64fab60f00268f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","7bcf770aab3d5a991d581225812e9a6e"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","885e1c1ad735a3b3fa6905d014d7b987"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","87066d6b7b81e9690f5185fce30ee043"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","6d2ac82abe8dadae092f1d7d38ff5a85"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","178274d335f2391ff5ef9a4cb98ff707"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","fb2551cd5989fd59389d28200b3f51f4"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","0362c85c486f10f6b35f73dd9c64a878"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","dcc879facffcca466fdff77c801566dd"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","01eb517ed92a1d2315ba6dc73d6fe381"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","4ce1aa9a8c60b666bb8284959bbbd68f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","117d8d547b718a3f74d4d5d98057ecd8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","1c46c966bb3d53896109c99768f74e48"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","84d035950fb39c2b2fbecb1a36281b1d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","88dfc26039dedd3ef3390dcd0abba878"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","eb4de1d8085991d7bd46522a6df130ce"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","43391955361a770bafd4c2dc7f185f55"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","64bceecb5e88b84e90d6a8410df41043"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","327f115c229a2968d2e15adf55641a19"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","6131e4f9b19856cbdc476dc00f2fa935"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","508c37da3a5c5e36780c9f336be7c452"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","5e7ab99f7264a44906f450847e3628fa"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","2908d2a3745f257cbabeb7d68bf026cd"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","6b90c0d4de268259480704a963f99faf"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","d5afbd43a7707791af4338421a3f145d"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","29ff2ea8af3d0c7664774a7a6cb8a26d"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","b570221a333f205f56d9a57be056cb71"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","1e0870cce67719df15dd1fccf6a4de41"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","8ab63324ecdc80e7adfb8837ef70c955"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","98930d3382279f584c81aaec89daafab"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","04dbb738e3454942d0237a97f2996cad"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","37a03bc073f71445a405cb45f2ab4c97"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","794c9a623a6bb823192ccd8ec3497970"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","37a12a2c149fa574a2938db5e4831529"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","b32f1051087212c6c403825c33b3ffe5"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","da2e86dba23721699e318df21a7b215b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","a847296482f9d641f7505ed3d957fbc9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","bc4fca19b44792acaab20b7aa954e1cb"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","a60992798362b0960bcd545870b14cac"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","29ecc2f3e8b3c5b83693ec53526f407a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","aeb8208ad920125ad77346a5b1c39e43"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","f976d348d179b0f0a1370da7e52515ea"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","1e27c5c9559cbf75236fa0f7e9c1a38c"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","c5157d0368eb0be85c35835ef311baea"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","60cdc6340b316f0ab6a3e31bd66aed96"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","34fd359746cf1b1ad4caf1a7c79a0a3f"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","1364785e9ca7aedb893d7f67052e7e5a"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","0cfc72e4cf5299df92f66c07603ff577"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","97c2b1b6ab1cb9d67a3078948b54124c"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","29556b921b0d6044a06a22663b1d8770"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","0bf628f61ae868bbec7987de246f7362"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","135042fe432f5ff45b13443fa5dee6e1"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","1d2434ee875975ffd99b0a20c15f7fcc"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","fe0fe829c848a1c545ec766736d373d5"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","79fffaee6289a4e1746f49cfc3754614"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","97d6d3502c243046016b4b590ab0b5f8"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","f74c9e0d7a69c6babeba6a54ac4c9327"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","224197e2e757a37b423173f256a2ba5d"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","1f650bdcc820d07c5111e61df1ae754e"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","0c915a4337461f3314462de43361466d"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","b2ff1e1cd56768c67f461a54de90ee53"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","b5f97c629bf88253e73a5f74e3d3ace8"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","5226299181f89c69c4a52aa3697c5f2d"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","aeb001cf620edd9a8d5ff20ec67f24f4"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","b2e1b6c5024baa81c7c1bab5c31174b9"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","53689c315e3d2437c061203096a4f166"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","5b17a8043cca628a6e166ff0c3e18c59"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","567ebef6b688c05f3c4f49ba9e3f9910"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","f0c8c9246c20fb9b52cb7b27754a406f"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","d39c23338d88ac0262014679ba53d24d"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","6c1c9d9a240022b6139555f43ac954ab"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","04a87fe2aa80552df9785bd909aa67be"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","0f252fba496469c36843533422e6e7e0"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","d93a976c3f1808d92bfb2b71a49ad57e"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","7734a52b7e9a98457b8bca424559dce8"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","e3e47854fb07c469f144f77ed40a408b"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","8202ef0f1c4d5970236207b202995eba"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","fc8a5b6ad5edf395c12ce5e32d6e4d95"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","f454fdb648283ed7d74efe8571708fbb"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","8a77e1dd03bb66c7b2accc6d8fcdc10e"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","0ba37cf3f7355c636ffbeefc7340069e"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","06f8ab144af6788c3683c936bddbdef4"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","d15348223c5bb1bdaec6786022e80a67"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","7846fdef68d9b8776b028127a12aaebf"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","33b2938dcbc04ecc036b12330ec63cd6"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","73d40e5aee807f677284f9c0855ee736"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","89b6297e3f26ed614ce0b4e8405da454"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","da5d1d2d2ba3cbbf0dec5cf2d302c0df"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","e13bb9a8078f5ab394744dfb8dcb5d94"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","1808a5b4598b97982df8ebdc7f48003e"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","679b77b5f9d8bf3e4c27b0019ee31180"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","782ba01e97419d3801e9e2a3052596fa"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","4bf6e8773e31f8cfca9d0e396c1a4d73"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","e61d4d214afc49254a7e6f5c303427ec"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







