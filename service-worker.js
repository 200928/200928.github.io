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

var precacheConfig = [["2021/02/18/Git学习（个人记录）/index.html","175d81d32ba05058c67b4da5e38ce6c9"],["2021/02/18/Hexo博客搭建记录/index.html","2ff8b973423fdc99e669bf4dd598d2cb"],["2021/02/18/IDE配置/index.html","2a57d2fa479e7973a0542d75f3664482"],["2021/02/18/初识汇编/index.html","54b5b613397c05d002c988d8186f4564"],["2021/02/18/链表与指针/index.html","42784cae7cd23bb46d68d5a4cd9dec17"],["2021/02/22/Topic LinkedList/index.html","756535703115522fe8a8d883c7cfde3f"],["2021/02/25/一些设置/index.html","29d850231a474611fdb62ccc14251947"],["2021/02/26/WXY/index.html","8b54f2a3e559136ca255eafd78f1d705"],["2021/02/28/大二下课程推荐-计科/index.html","0a67e57267a8f4dbe566079620800906"],["2021/03/04/Linux-notes/index.html","342aa078aece87a6fc1fb6e7b90b9bd5"],["2021/03/08/data struct one/index.html","4b56f8d102898295e53e60a4311094b1"],["2021/03/17/data struct two/index.html","4c691da4540506d57f58b669f97c344f"],["2021/03/22/STL/index.html","167d615d6f2c2bffdbee1cad7da9ddaf"],["2021/03/27/Battle-of-Tanks/index.html","0d9a7764d7be1065801dbace4a7e3520"],["2021/05/01/MySQL/index.html","a1ad3a421a617e7c889e5e30dcd48296"],["2021/05/09/HEXO部署服务器/index.html","6aedda8bc2f290884a9d1d6e8b883317"],["2021/06/04/vim/index.html","bdbfe6e80c9f87def5f7bef542e0e93d"],["2021/07/13/oh-my-zsh/index.html","9e7fdc93f51ea8b004e0ca9c75fc5675"],["2021/07/14/HTML/index.html","e7aa08d92fc75f9e92b3cb94d80ab07b"],["2021/07/19/Maven/index.html","90bb5c4eeefd8567d9dc1c5e438e7665"],["2021/07/20/随机数（C++)/index.html","db56eeb3bec4705deb4c9de6eb8a6ab0"],["2021/07/22/data_struct_01/index.html","5de786a47b350536df225ce752b3c9ce"],["2021/07/22/滑动窗口/index.html","b8c0bcdb98e1f40966ff37d99cdd81fb"],["2021/07/26/Tree/index.html","85e7dbbae400a52201cddbfaa1bd18c5"],["2021/08/02/正则表达式/index.html","7e0e6f86481088f43506c63d8e89809a"],["2021/08/14/CSS/index.html","d62e5adac549cbc630056e1ca7bd053c"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","1f09f1e171aa39f76709a9c0562eb627"],["2021/08/19/Windows Terminal 美化/index.html","e28abd4adfd08843887cb0bf44243753"],["2021/08/23/EROOR/index.html","8c30852b9f23722629380463ca2faa64"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","06e0296cf5cac24e83b79e0f85f6cccd"],["2021/09/07/编译原理/index.html","b8a8deed57981e625e6a1dd658fea6bc"],["2021/09/27/网络是怎样连接的/index.html","7097f988fe0c289eeb4393b3a6bfa1b6"],["2021/09/27/通信基础/index.html","5ca8c10a95002dc852d1c3bca559c8fe"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","e66b62fec4da343a836f4706d8097fc4"],["2021/10/22/vlan配置/index.html","a333a9fb4ddd190c8dd116f9ed3adfb1"],["2021/10/31/实验三—子网划分与静态路由/index.html","5cb7ef1eee7b701eea7af0056af9fa1f"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","c2d5b5cdfab406371a4a044a6f277682"],["2021/11/17/硬链接与软链接/index.html","bf4ef48efd909843d676f974fae4766b"],["2021/12/01/SQL20题/index.html","f91977844f216017df5f8bdef7d63b77"],["2021/12/08/实验五：Wireshark抓包/index.html","a6508fe38e237a5b18633e414c397f60"],["2021/12/15/CentOS7搭建FTP服务器/index.html","3e97137467e4b546f3b9d1f37d8f331d"],["2021/12/19/CentOS7 安装相关组件/index.html","9ca060e7f867bff173a74b54f88e0d2d"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","776a3e8cf58d5e5ce643a9bed884a8e3"],["2021/12/27/Vue/index.html","a939f31ef803e4ba61d49e4fb35dc48a"],["2022/01/08/ArchLinux系统安装/index.html","5a59c3783c3f64b3c9c495e7b51ea91c"],["2022/01/10/ArchLinux软件安装/index.html","61e87dd16d03291a488d1428732f47b0"],["2022/01/11/ArchLinux开发环境配置/index.html","b3b1abda44e9620aaae02e82c660b6d3"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","a7dabcd6d349ade9dfdac797838950f2"],["2022/01/22/DWM/index.html","2e2f024b6717dd0e0c07c0f9df30accc"],["2022/01/26/MySQL性能优化/index.html","d65e67645a7f274967412b07a7d0b2d8"],["2022/02/27/ArchLinux安装wine/index.html","420affe36b40e51dc23ea83f7b0cc0a1"],["2022/03/01/ArchLinux安装VMware/index.html","05cae17afc0aab68b4554ea008d5875b"],["2022/03/01/ranger/index.html","e48af575654e21f003d6e5df8bb219c4"],["2022/03/02/ArchLinux PPPoE拨号/index.html","b5f9716103217aa72b4f2f62db663435"],["2022/03/16/Linux文件和目录管理/index.html","6dc48db8314a68467fadf334cf653d29"],["about/index.html","2255b25bb984323cc629395eceebad2c"],["archives/2021/02/index.html","06ce9409507c8e34138149208a9dfd91"],["archives/2021/03/index.html","ad32bc0dfcd2b91f6dc86ab3e1cde807"],["archives/2021/05/index.html","7632a61f0ebfb71de4f1da7bf706b953"],["archives/2021/06/index.html","cfffc3877987a6c5b0a36a9efb0fed10"],["archives/2021/07/index.html","ade1f9316d7cc4fdc420f36a08c3dfee"],["archives/2021/08/index.html","1b8de74ae1608deb800542d7bff0504e"],["archives/2021/09/index.html","dce054c7c6b2c199bbb5aa2740610f0a"],["archives/2021/10/index.html","00008cd922f981e2ea6aff8f5f2c78e6"],["archives/2021/11/index.html","dcb53108301524ea20637c7b1662f343"],["archives/2021/12/index.html","fb052153757f17c89d7317fa284bdf29"],["archives/2021/index.html","a83f0fde7d0dc2e64e886ee051d11e50"],["archives/2021/page/2/index.html","c50535198d8b8606a4a3f2447798b7bb"],["archives/2021/page/3/index.html","48745b8f470b5625a4dad9ef3d5d7cd1"],["archives/2021/page/4/index.html","8a507b09ad437b0f16127ef5bcbdfbe1"],["archives/2021/page/5/index.html","aef3cd302c8a13ef456928524d4fb959"],["archives/2022/01/index.html","97d9888b3d50be3f60210710ac6ab848"],["archives/2022/02/index.html","7d7b479ab12948bbbf3b70424de290fd"],["archives/2022/03/index.html","4f55a66e1325648322b87633fdd3245b"],["archives/2022/index.html","6e6a447c1e96c769ec5604e016cd38a2"],["archives/2022/page/2/index.html","06e86a2b0760acec3fc373a9d46d5ea3"],["archives/index.html","e22beacb2a3fa6fa14757e0607e96312"],["archives/page/2/index.html","2272d5e3aaac105b202c49f200fbdcb2"],["archives/page/3/index.html","ef2ceb3936c4a8848342c76513bb536e"],["archives/page/4/index.html","ea4f5b0df0e7eaf44e5802df8dfd4b70"],["archives/page/5/index.html","ff05e485a13e49cd9b5d2cabaa793601"],["archives/page/6/index.html","55b3c9fca2fc9a86b0eeef73bbb9cd9e"],["categories/C/C/index.html","75fb04d3fc13995c4562418c29a984ec"],["categories/C/index.html","e4ed862dc65c9e88cd957f132fbcf7f8"],["categories/Linux/index.html","b8802e869e16544cf74b168edf349747"],["categories/Windows/index.html","b0f4ebb6a866d6157b92ca4c65c12dc6"],["categories/index.html","8a3c2afffd274f57cc3d6b073b8ddc31"],["categories/javaSE/index.html","11ec7bb163d0d76d5d7a833f38f709d5"],["categories/tools/index.html","0f94a517c9fb284e6a31a8c1d76605c6"],["categories/wxy/index.html","7bb663455a74689518c67c06e82513b8"],["categories/个人/index.html","86989f925cb7a0b880487e46de050b10"],["categories/前端/index.html","be06e82bf6cc368f5ad669b539fcbb61"],["categories/工具/index.html","2d9a734de3e31ad44702ee4dd74025db"],["categories/数据结构/index.html","ea98b25f03f919550357ca89138730a6"],["categories/笔记/index.html","02051a13ec9c649bebd9037b9ac89b39"],["categories/笔记/page/2/index.html","2b3aa2a4651118003bd0b5be4b2fb9da"],["categories/笔记/page/3/index.html","d8bd64a3b59bd1483fdca6b363fbd76a"],["categories/算法/index.html","6dd0039c3f0bc8128f15e1f4bb03d290"],["categories/美化/index.html","4e0425ee04658b34d422a8ebe6477689"],["categories/计算机网络/index.html","a91b5184620bd8ff375d51d61f24bc6e"],["categories/计网/index.html","57e249e01767dcdb13fd498505ebb7d8"],["categories/语法/index.html","a12934860f706d715a722035d2f116f8"],["categories/软件/index.html","84ef092f4ec50ec5431f048160a9c2fe"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","dd0b3b89802917bfb1cc0652cd141534"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","13fad34d2003d707b8118a85ad30645b"],["page/2/index.html","7edc1b0b720b852c77993294af924a34"],["tags/Burp-Suite/index.html","8f4f46528afa8d2b6d7d7e61999825bf"],["tags/C-数据结构/index.html","fe97868c3918dd885d2d53fac4d2868e"],["tags/C/index.html","f2f6578cc1cb0ca7c9187dd8fe3af11f"],["tags/CSS/index.html","c6240f4d113e4ec2df3cc2cc1f7860d2"],["tags/Git/index.html","22ebfe99da017c2d135f01a3a99ae6c9"],["tags/HTML/index.html","451bd06346624ec2d9bcc4b700064349"],["tags/LeetCode/index.html","380e6a46908e4134fd08a6695bfd64ed"],["tags/Linux/index.html","4835e7858a2e1e77f68181fe0cf8ea6b"],["tags/Linux/page/2/index.html","2fa5d0accd090533df23f410dd274f0c"],["tags/Maven/index.html","df5f48406a7bf79488fee529d433d6c1"],["tags/MySQL/index.html","05ce3fed6792747575fb8fff262ef7f4"],["tags/Vue/index.html","f0509bb532088f6f773cd3559fcb6759"],["tags/Windows/index.html","7a89994f5a12b420e40061c6db6ed4b7"],["tags/Wireshark/index.html","8be41bc5ede5c1fc8e27436c4501a061"],["tags/index.html","ca7a35315c09b1e86e1d4b25f54c8ac5"],["tags/java/index.html","62226a3c2aed22d2078b9643c5bdd1a5"],["tags/route/index.html","e997f1bc2c6fe0caf7293a0ad92d1950"],["tags/tree-java/index.html","b37f210c658b16314476e0f18a1ebe68"],["tags/vim/index.html","1dc031da8d9b94168b3511f9d6b1073f"],["tags/vlan/index.html","b5681c3f3b1cf600043809c8bb4fe5ad"],["tags/wxy/index.html","5903f410b72c73d37efeb68910624654"],["tags/个人/index.html","33cff4164640f284739d560e8c3b8739"],["tags/书籍/index.html","32232e03ab3ac2e614562fa7515f288a"],["tags/博客/index.html","475c12948c0c696370aa9b57f58a3a51"],["tags/壁纸/index.html","2d06c7e225adc01d8059c08d2e0a7257"],["tags/底层/index.html","29facd8b4ed92d3a931431afe31bc344"],["tags/数据结构/index.html","0ba7b33131d30c4ffbacc00c67e7cbcd"],["tags/文件/index.html","a1b66eafd9659401c9b3f6b53acdec0d"],["tags/服务器/index.html","3ce98b01144e5900b9f9fc5a7d77f414"],["tags/汇编/index.html","c42b9201c4563ec3cb11b796d3879f04"],["tags/算法/index.html","51e8cf6bca37e37b59c6a7c121cd8553"],["tags/记录/index.html","9405df048685dee287b50c3b5eba6d78"],["tags/软件/index.html","7d32194cd84e0c9495a4c1829864bbd6"],["tags/通信/index.html","66f00028ec6a2e84349ec15a768ddda6"],["tags/链表/index.html","cf16f57799af58c42ec5ee869c33ae4b"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







