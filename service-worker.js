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

var precacheConfig = [["2021/02/18/Git学习（个人记录）/index.html","a79e5e30001a26a383f2f41dd1293671"],["2021/02/18/Hexo博客搭建记录/index.html","a7b914e190c391f4392bab2dacdf4ac5"],["2021/02/18/IDE配置/index.html","5581fbd969a438b2769729ec943a9c92"],["2021/02/18/初识汇编/index.html","38bc99fad57e86be82a84ff3144cd817"],["2021/02/18/链表与指针/index.html","10c712fdc4e3d46b6d18f3d887880301"],["2021/02/22/Topic LinkedList/index.html","781c731438309a38dbe0ca19a5da3139"],["2021/02/25/一些设置/index.html","ee398dda7dcd2a92a0caced2c9140956"],["2021/02/26/WXY/index.html","71c33e7c496cb7b19c648d4946afb318"],["2021/02/28/大二下课程推荐-计科/index.html","c8ae629357377ac7a9859b55f374e1c9"],["2021/03/04/Linux-notes/index.html","e95e29d8dbdd425e4202b9db8615f04e"],["2021/03/08/data struct one/index.html","fd215bbe9d9614fc3efe9c17d045a911"],["2021/03/17/data struct two/index.html","0e55cb6def90e4991763a70ede5a8416"],["2021/03/22/STL/index.html","db3087473fb93637bc28cac9fbac10a0"],["2021/03/27/Battle-of-Tanks/index.html","f411009f435450fca8e3039ee6914a0c"],["2021/05/01/MySQL/index.html","9b0ef491bc663b161f1fb21d4518974b"],["2021/05/09/HEXO部署服务器/index.html","a0810f7bd79b978d3466d8d74fcceca0"],["2021/06/04/vim/index.html","0e7e2b1d50b31da222ace340c9b5b183"],["2021/07/13/oh-my-zsh/index.html","2b329b2729725946c213bcc1650678b4"],["2021/07/14/HTML/index.html","90c71f19364c96c95aff8d1545375a0b"],["2021/07/19/Maven/index.html","9a3bb7e3bcc4099cd97ee5f04df281c1"],["2021/07/20/随机数（C++)/index.html","e57db9a4749ac99bceb56db170ddb875"],["2021/07/22/data_struct_01/index.html","62f0ff67a1eb1f6deb3f0e2927bf2be4"],["2021/07/22/滑动窗口/index.html","71946424aa659e69ca9ee6d0e3f4baeb"],["2021/07/26/Tree/index.html","4decdffa5f8ac9c34c157e42214fd0d4"],["2021/08/02/正则表达式/index.html","a97c699eb45e2f88a4269d4ec9ac1660"],["2021/08/14/CSS/index.html","553eec4d2ca83792b3faa9e02ce80500"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","58f90268e405db49f6ef4b5fb06a2dff"],["2021/08/19/Windows Terminal 美化/index.html","d2e1841b74ec5e1ced95809a92f2bcf3"],["2021/08/23/EROOR/index.html","0f4a72361d9bf37ae24f9f386be74f8d"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","13b755713a4c506fb42d708ca81a643a"],["2021/09/07/编译原理/index.html","d3cca9aadc78c77e66146c55eecf00df"],["2021/09/27/网络是怎样连接的/index.html","bf9167f9d1d9d5d9c858b7dc387829d1"],["2021/09/27/通信基础/index.html","89332fcf6c1344fc4f2d196356e3e637"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","e943e58ea63eafc7ac600e5269193667"],["2021/10/22/vlan配置/index.html","02d3a4d0c8c0d00edcf1c67357375c15"],["2021/10/31/实验三—子网划分与静态路由/index.html","9f5df66ad4b29b550588cdcaca0d00c6"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","16ab2d47ac99ab0e0b11bde60e5439ee"],["2021/11/17/硬链接与软链接/index.html","7b78f7a032c4eca4072b6be3a297e2ee"],["2021/12/01/SQL20题/index.html","356e9f6cc99b00d21f28ad53ab8a15b5"],["2021/12/08/实验五：Wireshark抓包/index.html","5365a1116be7e81f02171445f9f69f13"],["2021/12/15/CentOS7搭建FTP服务器/index.html","fca1e9a8d97f38a1f4128054d9460da5"],["2021/12/19/CentOS7 安装相关组件/index.html","d61242ad32b601c428331c4297bea520"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","af1c6bb9d6e40a66f285466b7eb603fb"],["2021/12/27/Vue/index.html","398d775a90b589101b0d3ea3e3e26842"],["2022/01/08/ArchLinux系统安装/index.html","9086e393708f77b12e837f50373108f3"],["2022/01/10/ArchLinux软件安装/index.html","7384eb889e8cf9d8626f15f94770e377"],["2022/01/11/ArchLinux开发环境配置/index.html","d0a00c9085d301f9154c63bc91e29e70"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","6a837c1d78497173fdbf834003548577"],["2022/01/22/DWM/index.html","2a423bdf22c23e69e29199d798586397"],["2022/01/26/MySQL性能优化/index.html","a921aec6082e6dfd11f0f02df5292bc2"],["2022/02/27/ArchLinux安装wine/index.html","eea0a942c78d9fd48a5ab92dee6782e1"],["2022/03/01/ArchLinux安装VMware/index.html","a2743363c41c4a16ee4748e45ce912a7"],["2022/03/01/ranger/index.html","02496d7b2f2fcc870b336ed9fdaa3c26"],["2022/03/02/ArchLinux PPPoE拨号/index.html","0cb4a0b50ade44264abbf543f95151b4"],["2022/03/16/Linux文件和目录管理/index.html","65ba14bc400462418f9044090e861a80"],["about/index.html","420ad4327c56f20203a947a1432a576c"],["archives/2021/02/index.html","66a22bfc432b95751c65a5ae4d505ebd"],["archives/2021/03/index.html","23458e9ccc7ad082653e30cd8f92d167"],["archives/2021/05/index.html","4bb29e814966f4f6c790dab8bf1ac78c"],["archives/2021/06/index.html","df65eb8dd8ec0d2432d68a92316ea5fc"],["archives/2021/07/index.html","0413191eaf426192cd170a3ba1bb985c"],["archives/2021/08/index.html","dea1db102248976a40173bf3b376da4b"],["archives/2021/09/index.html","ba462594a931db8cf2ea5b09150e713f"],["archives/2021/10/index.html","a75e1b785660d660ece66ab3bfdf8d94"],["archives/2021/11/index.html","a2d901cae1fbe631646086536d7b2cfc"],["archives/2021/12/index.html","2c0e3b8e10cc9895f4183252c5491b75"],["archives/2021/index.html","d2a5635e60b0589bc0663f131fedfe5a"],["archives/2021/page/2/index.html","38e18aa8d80321d1cd42254fe70e518c"],["archives/2021/page/3/index.html","bce4da4e0524bbb189b645785abe861d"],["archives/2021/page/4/index.html","6eb50800341cff761a0bef6aae4967f9"],["archives/2021/page/5/index.html","067a873b834b90daf5609dad9451feb6"],["archives/2022/01/index.html","b04aa7b2f071495e21ac7e274cf0b5c3"],["archives/2022/02/index.html","f09c4247b97c9da497d87f26eb1751a7"],["archives/2022/03/index.html","3192d79b2b973e05185fd60c32d05fea"],["archives/2022/index.html","d90cc1de645203c879e75d3cb05c592f"],["archives/2022/page/2/index.html","14e0737fe0763c3722707914aba99f1d"],["archives/index.html","96a442994d3f1d0275d2cb514266b7c3"],["archives/page/2/index.html","303ee47b7dd4e2a06254b53970222533"],["archives/page/3/index.html","972d475b22f453c40723690b2702b7f0"],["archives/page/4/index.html","5cea09857ba5ea81fea0d3cac7ca81a9"],["archives/page/5/index.html","ac8c4e047311366d3aee54b982c78413"],["archives/page/6/index.html","3db7b423976669e2fd39fbfc7384dbfb"],["categories/C/C/index.html","fc0c213f702df80f124a2a1f4c65942a"],["categories/C/index.html","c4880f97098c3e4e09f647a97ae47463"],["categories/Linux/index.html","3047efdb6ec01bb54a8ad21b53ddad2a"],["categories/Windows/index.html","bdd3e4804afed1f2c73ea00d292414ca"],["categories/index.html","e456d72fb77d12f140ce2134cdf4a96d"],["categories/javaSE/index.html","42395e9710b868635de492e2c3fd5740"],["categories/tools/index.html","e287b39b72f56d5265a0a3c0ef4a3497"],["categories/wxy/index.html","a4b9915a972cddfbc940b734d3b9a4c9"],["categories/个人/index.html","5c026429b17da3bbe3b0653f36b074e5"],["categories/前端/index.html","6c9c6cdab1dac936616488ff5d06228e"],["categories/工具/index.html","b5982a0dc673e371454d38a2d75f1d32"],["categories/数据结构/index.html","89fc125391474c75a9cc97d528c71c71"],["categories/笔记/index.html","25063d6102077c0c1722973518fb6461"],["categories/笔记/page/2/index.html","6a848dc24faf9e5c3c34548b914cafcf"],["categories/笔记/page/3/index.html","9f2ef3358ffc41012eea73ad579d5f59"],["categories/算法/index.html","5419e117483a363985efc9fdfbc10d44"],["categories/美化/index.html","b9f19b673364491dfab5b14098e1db4e"],["categories/计算机网络/index.html","16b3ba1558d69940e6747dd47c673845"],["categories/计网/index.html","8f05bd142ccb6c81c995d423fc0237a2"],["categories/语法/index.html","cb2cd0c3a8fa109e75baadfeb7819539"],["categories/软件/index.html","991fe2e1ee734088dc2d7677cfe97cdb"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","0d27dac845ab4d9fe20eddb511637655"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","96e049e6c825e90e7b07c62a42d67046"],["page/2/index.html","3886416acef249f97d6330bb1393d219"],["tags/Burp-Suite/index.html","ff8a5908ef9b1ada8f8616acbcbbae7a"],["tags/C-数据结构/index.html","bbc9c3a686fd24e87df5f2b64fba20fb"],["tags/C/index.html","36611bd55aacf1ea9c3939539ab7b5aa"],["tags/CSS/index.html","e5efc9976ddbdfc2b9fbe7bfba7e6dcb"],["tags/Git/index.html","2eca9ac0eb75b4f1b618fa116f17423d"],["tags/HTML/index.html","f32ee1220bf42d098a8f2d5844820c7a"],["tags/LeetCode/index.html","2da09a015af27b194dfdae99add69c17"],["tags/Linux/index.html","41ca90cdae67436a1b91e8778ade7ede"],["tags/Linux/page/2/index.html","33eaa34118e7124518dce3dbf58fa5b8"],["tags/Maven/index.html","aa44d4c739ff8215deb67e55d5e4d858"],["tags/MySQL/index.html","66223d7c084f6cb19424961a19a694ec"],["tags/Vue/index.html","e9d7a9662ae13b4cf87a2921566a34d0"],["tags/Windows/index.html","c893c39cd54be1c2bd94d04f6cb75342"],["tags/Wireshark/index.html","1c6a60edb79663a4bed843c06ea436e2"],["tags/index.html","2f763f55b18a75ffec4e23e87be1e0d9"],["tags/java/index.html","8db9f9efa31d13a34a907d89812b3e98"],["tags/route/index.html","7aa48e6deeb1dc18c0786a0ce8c764c5"],["tags/tree-java/index.html","aaafe99900c4826861335a561005a709"],["tags/vim/index.html","3eadacb722b6afaa5d15b83983e7f4b3"],["tags/vlan/index.html","7402a712f62ffacc6ee31429c315a9d2"],["tags/wxy/index.html","6ebaf2cf5ddfc3906935563e89eaaacb"],["tags/个人/index.html","3aa39ed8f106805cee6193f842a592b2"],["tags/书籍/index.html","9d60055bbf46d9d3fcf4cac87a0b2d34"],["tags/博客/index.html","223a23880f7488eaafb4a3aa465cc34b"],["tags/壁纸/index.html","de0237398b07e7002dfe7cada4b47955"],["tags/底层/index.html","1673a0d99274d4b43a233ed8836e0f8f"],["tags/数据结构/index.html","c731a98e3872de7474ff3fe0ecb6d870"],["tags/文件/index.html","7e7c05f4cc23a1887f7040fe594af197"],["tags/服务器/index.html","8ff3a5a447fc7503dd4c68e7b4898e88"],["tags/汇编/index.html","4b18815018be739c3ce5881be40a1eca"],["tags/算法/index.html","174728f61ab8597080b6c98bf66ba2f3"],["tags/记录/index.html","e9e13904ed72107434a4c03920e12399"],["tags/软件/index.html","bc5f15c05d0eb431d3325bf2f08fbd92"],["tags/通信/index.html","e7b819abb9504e7af79ac2d959785649"],["tags/链表/index.html","4129f597261a36506019e6cf5563eac4"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







