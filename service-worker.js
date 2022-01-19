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

var precacheConfig = [["2021/02/18/Git学习（个人记录）/index.html","df03981668e6861f14054963eb670fea"],["2021/02/18/Hexo博客搭建记录/index.html","158db3a9c0e54563121a0e7f6921746a"],["2021/02/18/IDE配置/index.html","36954c16d00d3fe9613a43d3c03ad415"],["2021/02/18/初识汇编/index.html","9893509e31ccf7ea1dae5d235c4a0f25"],["2021/02/18/链表与指针/index.html","fa72559d941210ad224029d91153b276"],["2021/02/22/Topic LinkedList/index.html","f93c5e5c85733c6bc0c6f4b8e1895476"],["2021/02/25/一些设置/index.html","19a7acdf82af7ce10a36b979ab33a9ac"],["2021/02/26/WXY/index.html","e9d5735fa155957f7888fc3aac183179"],["2021/02/28/大二下课程推荐-计科/index.html","020475775ef912e04f63b7ba54547316"],["2021/03/04/Linux-notes/index.html","c1aeb84f8f5285e6b257fec1ee845981"],["2021/03/08/data struct one/index.html","f86ac45366ce7162ec1525248ca33981"],["2021/03/17/data struct two/index.html","93cc3d2cc2af3056c85ffc4c723baf88"],["2021/03/22/STL/index.html","20f8e9f407f2dbbfbaab0f01894d05d4"],["2021/03/27/Battle-of-Tanks/index.html","dac7f5611022d38ca9118b2b9b505458"],["2021/05/01/MySQL/index.html","09860149fcc584f861f91974d54745e1"],["2021/05/09/HEXO部署服务器/index.html","7512da19fd69c8e1c2bed4e810f04e96"],["2021/06/04/vim/index.html","a625b3dd2c9129b0dbd2914ac276a5c6"],["2021/07/13/oh-my-zsh/index.html","065bdb4337665086a778f913144db39c"],["2021/07/14/HTML/index.html","8bd1051e42947c30ee5d5138bf85b8fa"],["2021/07/19/Maven/index.html","eb1d93e048591ac229a355b15f1be573"],["2021/07/20/随机数（C++)/index.html","17de31d1afe4a39c54c61a2d9f3630e5"],["2021/07/22/data_struct_01/index.html","39c6c783e89a09621dabacb704b30387"],["2021/07/22/滑动窗口/index.html","a400e13fb947bd4a5e7be18cc180efa0"],["2021/07/26/Tree/index.html","8ef76d9478997b4228b2052cf56f57e8"],["2021/08/02/正则表达式/index.html","794d7e8606844d9033759a8a4d95db1e"],["2021/08/14/CSS/index.html","4d87c4b06c5c94d2ae0fe85deac2cb64"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","570b038509b496b0c9d2dd7671e489d2"],["2021/08/19/Windows Terminal 美化/index.html","a76d51904c79aa62e841e988d9607b64"],["2021/08/23/EROOR/index.html","5c2c2d0ca66c19b39e12d4fe60a7d1a2"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","3cfcc41c32b3f1c622560e391a89e3be"],["2021/09/07/编译原理/index.html","da732a2d2cef5a9ffa82ca77a89c507e"],["2021/09/27/网络是怎样连接的/index.html","7e354c163ba114e524401e03a4514157"],["2021/09/27/通信基础/index.html","4bd91697ba8d3b49fe790a95ff1a6c0c"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","ebb7b38346743d2ac268b5a449233e3c"],["2021/10/22/vlan配置/index.html","39868586a29d3eca6bc2866d825ae3b7"],["2021/10/31/实验三—子网划分与静态路由/index.html","d7e644e23180bf1fc7660c75acbcb265"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","5ca394ec0e2b548d5ed075de8335c207"],["2021/11/17/硬链接与软链接/index.html","0672a39e7ee4e2bb4466038c6a5d4366"],["2021/12/01/SQL20题/index.html","ca6e3b5e499ba3200c9a6e2daa15ea90"],["2021/12/08/实验五：Wireshark抓包/index.html","7337514453bdd5ffb2b24b7e0467ec6c"],["2021/12/15/CentOS7搭建FTP服务器/index.html","e170628ccfd3eedf0b968a8df44ccb6a"],["2021/12/19/CentOS7 安装相关组件/index.html","c9bd7965f8f625d84dfbe0496d32be1b"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","9361178a5373a97d379e9cf9c8e7936e"],["2021/12/27/Vue/index.html","ceae8986ff6529f551eb21f5080e871e"],["2022/01/10/ArchLinux软件安装/index.html","99291a47a34ca2cea4f72599890a4dd7"],["2022/01/11/ArchLinux开发环境配置/index.html","a063d508fac14561846d0fd40667274e"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","f70ef1e75761d065b68bf3a97b498a29"],["about/index.html","c39721e2a6f09b3cf63eeb33904c909a"],["archives/2021/02/index.html","e8e010f4641117927a3e7db028c8470b"],["archives/2021/03/index.html","62b41f27ea243cdc8ea00a8765d118cd"],["archives/2021/05/index.html","f87b8ceb1f34c62a919efdb4205c2c01"],["archives/2021/06/index.html","d9ba53f2b9b8c48de5af28e558df96f4"],["archives/2021/07/index.html","3762a9562e434dd087f91afe8a60b28f"],["archives/2021/08/index.html","8765e827ff22e1f2b0629ab946faa55c"],["archives/2021/09/index.html","4892e07f67e28d7f8a98629658c480d6"],["archives/2021/10/index.html","964db627c6474085db807c45783a1479"],["archives/2021/11/index.html","27af54435294cec3b49dccbe4070a1e6"],["archives/2021/12/index.html","eb8a7ea539a563022a4f3e34c0cb9769"],["archives/2021/index.html","dca53e0aee91709e30c2a4137fadef5b"],["archives/2021/page/2/index.html","85c08293a81be77253ed9816b4081af1"],["archives/2021/page/3/index.html","d0153a645dd6e40f037b466eeab62b1a"],["archives/2021/page/4/index.html","e4592367d264c31f87f83191f84c79a6"],["archives/2021/page/5/index.html","2d77d3f1a967b1c8409ab1ab71dd5f66"],["archives/2022/01/index.html","aa6aae7cafd83ba2c6c9f7b0eab9ad69"],["archives/2022/index.html","c81ed3aa3a92bd5ef1da2302a8a4b833"],["archives/index.html","f3d650c10375b16f2c455d46f7d84be1"],["archives/page/2/index.html","931ee5b6f81ae6a442efe4b8f2b8dbad"],["archives/page/3/index.html","e116f237c6423492baaae23746139111"],["archives/page/4/index.html","0ba95ca055c3eef44591fb46eb6d62ff"],["archives/page/5/index.html","04c330de4f07d79c59fa5cba7d34e767"],["categories/C/C/index.html","d8aa8afc04027b0b8c9692a4f27d53e9"],["categories/C/index.html","a45ac414f32b3f79ec3428f368476815"],["categories/Linux/index.html","c23417c50866e55165add9a64e9a2bc4"],["categories/Windows/index.html","6153fc993e83a3b6cfa42b0ef277ecb8"],["categories/index.html","3855b791d1d32ca5c5face7d40e92345"],["categories/javaSE/index.html","abc73e75c04c746cf7dbf797cb1a0291"],["categories/tools/index.html","3b48d3f5b156ecc4bb947a652b38e325"],["categories/wxy/index.html","51b5929dc3b720250b09423f2c000cb2"],["categories/个人/index.html","a2f024f7ec28c5ca327088fe1fa934b4"],["categories/前端/index.html","2a19969c2e3c575cb11a3c845f6ccbce"],["categories/工具/index.html","bae7f513c3b16cd19032abda8ab460e0"],["categories/数据结构/index.html","499cf3554c6ab8093ac93ca160f586f4"],["categories/笔记/index.html","76a7d5b7f8f142b13fb1d5485dc1b1c0"],["categories/笔记/page/2/index.html","facd9bae3922c7dfea98408736c98e23"],["categories/算法/index.html","15b00b76a072faece1ef5ecaa05ae969"],["categories/美化/index.html","3d6670c04cf4cdfa4ca6f33cd03dbcf0"],["categories/计算机网络/index.html","51ce06a71051fe525d68653cdd3b4451"],["categories/计网/index.html","8c7a92f8d8e780041b30b15dd17f6bcc"],["categories/语法/index.html","fe861f0df27708141beb0a16172bd05f"],["categories/软件/index.html","2abbdf2d495259ea9587f17ca5d48dfe"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","4c6c8a734fa1fc726b814345e3f5f8b7"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","707382e4b2441cd3d245a858966d63c2"],["page/2/index.html","c0edaca49a7280b9b5a39755fe0c5a3d"],["tags/Burp-Suite/index.html","c81df5a3181ae38018078705239aaf1b"],["tags/C-数据结构/index.html","7feacf4f420d7f6f58dac865aa28cd2f"],["tags/C/index.html","4ae25d3512a0279f4230283921713e59"],["tags/CSS/index.html","37445e5344edfb58b5e624e427a46fd4"],["tags/Git/index.html","d8043fc9bef0424e9f36aa734f5599c2"],["tags/HTML/index.html","18e4385f55cdbb3ac02dd9e4139fe98b"],["tags/LeetCode/index.html","92e485c3ed9d0eaa539347cbbdc0f483"],["tags/Linux/index.html","64579319af43129d16ef0c57f7d09526"],["tags/Maven/index.html","90f7c200c7ca3ebc25f587772e6c76ef"],["tags/MySQL/index.html","7e148333c9c34221258b8aef921a6b6b"],["tags/Vue/index.html","60b0c7c4e076a6cac189224ae8891073"],["tags/Windows/index.html","7d448bdb2c542549d834583d6d98f7ab"],["tags/Wireshark/index.html","386801b283c1d73a05f3c167ad9a4f65"],["tags/index.html","e0ab82d8154ec61d1945d9c2220f7c1f"],["tags/java/index.html","861688910a2a04799201dffcadcdfb55"],["tags/route/index.html","14c29a7302a392d7e32819cba1becb4f"],["tags/tree-java/index.html","0121f2a698e128ef736e667a39a47685"],["tags/vim/index.html","882a5fe579945e55696fac839d18cb3f"],["tags/vlan/index.html","9dbfa3e3f1718e98d97190416e7d560f"],["tags/wxy/index.html","ab8aa7824a211d674191c62ed9033e71"],["tags/个人/index.html","10d0d61e0e92a7cabfa2a717229d26e1"],["tags/书籍/index.html","22eea36adcf028e03286b76b03bff182"],["tags/博客/index.html","f78fbeccb9bd3f2d19278d834c7befdc"],["tags/壁纸/index.html","f0abcf23b72b873fdc04e370b919e3ec"],["tags/底层/index.html","f1bb8b4339a403bab35738941025ca53"],["tags/数据结构/index.html","bbadd36de09327c5e9a8162a70f9d661"],["tags/文件/index.html","0bebaea191624a8ec3ed0552596e5bcd"],["tags/服务器/index.html","b777f55202151dc364a9b8eac90fa371"],["tags/汇编/index.html","a90146776708ec9d0674647b594fbf67"],["tags/算法/index.html","4d2baf316a3225dc3ca4e0102bb9303f"],["tags/记录/index.html","fd151d7a40e39341efb311e86bdb7679"],["tags/软件/index.html","c5328b4822f9981cdcd4f28fc5812470"],["tags/通信/index.html","fe29cae86e5808e11e4e439b71489706"],["tags/链表/index.html","076050140d4c28180335721eb134a1d7"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







