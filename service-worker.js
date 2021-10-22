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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","69699cea1e7e8f453d5fa5ec9d29bfc6"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","bf42d9b9b94333a6f06efef044b96bca"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","be9e1afac3aa48762a2ef2bde230734e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","4b409cd7c8681595b11bf52500c9d6df"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","2a05a5ff62d141fca1ed13b826e6a603"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","7fd22eba572e97e74c3167950e072be6"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","8c7f8ed7a615c635cfdac3ba127e0ceb"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","75e7ea92e6bf421b448c7fcbc8ac2082"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","44ae394bdaf980f7baf8db6860fc5d72"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","8df40eadc335f8c091d1c4bc5799e41a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","fbb855c9a4134e2550ffa6542f69b29a"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","7e454edf9641644badf68d7e7d8754d0"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","a93cfc446e756d11f26bbf02475538be"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","c1d6fa72069315eae63287b537c3731d"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","3a01f55ea84dea3210bb11d1f072b3bc"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","094a0583a931144ffe1cdbed077c8d68"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","54390d41b85f2dd2b01b39e1c4b0ccd0"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","5693a80c3eef74cd4a9b6c986ccbacc0"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","70d749bdb41f3d8a6a16ac2b4a096c9c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","d24236902863aa7b5672b4c3d1808e82"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","69fc30ca666b789f37fd42cd06e0295e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","71a69bd224eb9032b069c10e121220df"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","e17117ec7d2dbcce7592914799efaa14"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","fd09efd039f031fe68e3c89c67759c78"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","64e8a95ab7a8062850de16b6eefc67a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","185fcb15715ab25aaa895dd2239212d9"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","2d058ac4f2d192d1dce1bee149fdcf17"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","f671c4ce95282e4a3f14d6118ce28557"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","6c151afa8ab157cb3838b234b9c3220a"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","bdb4d9f3af7e69d0516fbc3b174f7259"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","4d77a688759f3905a499bf033b46d700"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","5f6d218917e239a330495dcdbe5ffca3"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","0a12d59c169bda476fefb642112c4375"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","a5712a229147271fd4d19d88de79a4a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","1598e5ffb5573a68c394f54b8d272f8b"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","2759e1d5dd85269c06ec22be6b134e4c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","c642426707e7b06ac96563c3f8e72221"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","d8d1b18477e452a822966e46e4229996"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","8c69f1698d98d6bb4831a3b4cbbeca25"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","d5cba19abdcb759f50b074ea3671119c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","784d9345b2256bd2f945a4d76ffda0ad"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","11e28046bfdf6cff4f8e309b2c1ef072"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","437ffc28997e4105f1fdf70f960f32fa"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","3e9b3a653624d6d142128b3df393b86c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","240a26063b8c51baa3d2ab3f752bd6cc"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","e2495a7dc6983f6e6475b38d9c85d169"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","6384a290d649d68fecea7234dca99354"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","6b5f6d9de0bbecb9c7bb76c416417bcf"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","e09a4f0e84cc5859ff25cc6955d8f40b"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","50f4c0c814def35bdd9103c97fa191ab"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","edea3c7045ecde031e7d4c0322d0a6ec"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","68a6722e6cf56b898da55f9c31b2d567"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","c2f2d18550aeed8b418f52f9b94ab1b9"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","486a8e0a2e39db9c1b183b4dd7757778"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","48bdd40b844fd87c1924061ca3806e73"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","b0f8f59e03b15c5499603a3bbe84a7dd"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","451535883f927452aa3fe641b27f5f24"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","402c6a8be82672db6fa9f489d7b0d5b2"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","b9159db29919f07c231f31373c102f70"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","b49d1d2a62d47ea6271e9abfe5b3416e"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","94eec8ac03b8bf2b5bc5dd1065f0b324"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","e138699589b1f34687e4d879582ed38a"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","0b503edd049636a0d3fdcf3f3f692ab8"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","fac85bd4b1ceb801125c995ac8554ee0"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","50f67833f23a73a86bd9b28aacf10718"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","ff45a624042a2b8532ec2a4676f0dbed"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","ca1f1947a1dd0a06a7e01990074e5676"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","66e1f2a376a24be3fb63ec46f7ab6b9d"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","7fc818e2b9bbda6d02e79251b062b2f0"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","5754b0c6a7b3b41064e875f7a6ba6a58"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","2bc516242b94923a119ca2bf88538ab9"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","1c59ad54774fcdcdaef7e5fcfbed7d6b"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","d78f7d6b617ce4734e614d28fe6b7fe5"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","5f30261b39e8ad6fd4f7eaad67a14e10"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","fc4d4aa1fb7c9db5fec6e20bd0ba23b3"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","b5590b57abce6271f401a277a5d030f6"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","567590c9d7dd7c3ed9405ee07e7e9139"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","4c3f264bd3924d002f4e9617d03975ae"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","3a0d1ec201b49aec03904a6c0c4a8d03"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","0a95f00572177e0063b159d7dd4d5317"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","be3ef5a03bbc85633299a8a2759dc572"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","0990a4ff12343852d6697fee30a26f27"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","43621899a6eceacfdd997439f9f54dcc"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","840dd218aa8e31d674eef3d678f0d307"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","e8a76c0c3232808b215b9cd93a801ac4"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","4cc8e039fa6ceb3e1b7d1f71b5566349"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","c12c4510211a1d70eb7af9cc59392c88"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","d22461a3cc09ffc41d78986841d6b7bf"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","3fa37916689f4fbfa4cf0e1a48ca679d"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","40a2c564ec38cecf41e586ec4bbc0c9e"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","f2e3a7c405f53adfa3bd58cf7b679cd4"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","033c01cbb1e055541acbffeb35489e48"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","21f527c132ffa35663b524a571c0d8c5"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","a2859e0fee36cc8fd095bca4cd9fc103"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","ebd7019cdd628c02e29094a4ec656665"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","7188da2a2882b630240b511cb3caf6de"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","91802e425ab7f6b007ce63c3204375b8"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","19811c56ca7c976d6f796cb5c28376f3"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","0ec85c95ca5e54d064669cdae70d093b"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","4c03c95320454c44f6d4fb4bd54ab1c6"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







