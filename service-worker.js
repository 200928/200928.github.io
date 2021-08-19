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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","3060cece95a2a30bd11b2dd0bfd62957"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","296863e068b9ad258e5b32b7af069acb"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","13ba435b430988386f5065dfef842f12"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","31cf323d217c8b5ae055db5e4e25ff24"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","41f6396218569b6d53056286b2f19418"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","d28a4ced517ab65b8a634afe4e25aee3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","377ca71ac4dec0b58ab6c5cd4c4500f7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","a4dbe63eaba2c061739da232bdb373d1"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","868ff3787d5ec0d44e9bce7fec9e8720"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","c82150f62e3cde96c71738ac020f59e0"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","3787c3039264b7f8e14618aa90d8f512"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","595c8319a4735a826cf952efea9a10c7"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","67a40209f6fc3890fc0090624c8e03c3"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","fd35bdb586977a3161052bb2fd74e14a"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","52aafddd569a601ff99377cdb7fbc0b9"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","3eba055d68814695273cf2e814b991ae"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","155488890b2cd24fb8ad0351a6cbccb7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","1d378239bd8458c0bfa5fd4af19efb9e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","b1ce1225b3db41c9eda9204edf6a29e3"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","6e51f8bb192266ccdccaf991eb4f316f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","e57116a1036b5971ae54715e3c8c6672"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","c7bb892637e518ccf1bd70f0c2222a81"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","c8148684594ba6b52b1694d3253a0347"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","21e9a46de254f8110611a0b79eeeda4c"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","5c798f1d04514aabc0fa9260dea4e40f"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","f58a602609a1b0bf5c57b698a30abb72"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","1a05f4f9c21448734cfc9cb5b8cea7e3"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","496f25344345d762f9b0034df210ecc8"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","3bbb21b8a054eb5aa5a5be9cdec81ba3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","d3772030281925e9c46f6a5310a52096"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","aa8a811fd09bd76f38dc5954e39c2354"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","272fd0df648f2ced290a34c3f5f58b03"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","29379c1d43b53ac879f0be3c9db1dab9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","44fad42428e503625d3259fe7080969a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","519efe6ba9a8d2041974071f57208ced"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","00771ab2a45ac8a95642f174c1bb4040"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","cce7be76add1c1d47149717ff4a0264c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","67be4e1a862e2cb50f96292c70b14090"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","bff3caf1e985d6991e3243a5d6351de8"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","de22deacdfa21e39f8811fee4920c950"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","21590dde8c1a0a45918f466ef800efa8"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","ad68506531568c2c1895ed938329e850"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","6dc6986af93b37ef55b0b25ad01cb8f7"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","f279df0db60d627cfa7793965fa90c40"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","b78edfd79079fdc7607fcaa60eed8f43"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","d3bd4f82ca46727a1e176fd2179fda1a"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","8585aac6ed8970fd052b480c9712584f"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","930dbc797d813d8cfe9fa43758792ae1"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","628b485fdbf3bdf067129c9773d10006"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","dd28fd35896c860d4f8e362fbea9cb28"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","fa51887302f1b304d349093c22cd08c5"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","03b3049b84c73a4f39362e04e7a0275a"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","c05684a7778c100454a2838fa375cc9d"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","dc1893eff0fff11ab06cb730144b67a3"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","2632194b45b1f65536dd2d2c347e0633"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","583a77d8776c806e41d7c5d6468ef6a7"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","7a37a2ea4fbb7537f7b2f11792e432d7"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","826e6545d04ea0809fb56850446358ba"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","f3873e80cb6686345f94141499ea958d"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","c75cbbb92b456a9b80764ab9be5eb7d1"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","3b4ac1a54b0c8e19cf2ef54cc2ee8219"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","c562d30c9d22c310f1e7070484d34a6c"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","f1720e9e3118958b41f5a32e2aba6876"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","ef5447f07d2f2e66f2f7158e50248649"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","7ae94b4867ae9ce2d87f5e1860aa9924"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","b7506f5b2e96e43fdf6169919fa8abf8"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","6b6d105e007dc98740add075fdaf3b74"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","1fabc6c7e6239e6e92862883dbe98c4b"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","e6eae50e3a7af267184c80ba660e9670"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","d89be48d0ebcb7b037f8817f4c7164ce"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","bea84fc413dc13c737d5f6ce42762dc9"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","99438d6536575baaded3df6b623ce142"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","8c55b64ebc81bac2f0ab34c34ffe8b7f"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","70a3696e717dfd687409790c7822fe40"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","aef267bfd243a1745edf3e2cd096b914"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","69fb7813f105d5d28fc519b12d00035e"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","89bafd91c76e46d0fb1a97034d66720c"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","e108601a02d5870498fc815485a39dc8"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","8b9cb75f377dfc3d9096a7e2aaffd43e"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","79bc4f1a993eedc59fab623176cf8adb"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","6cb43c2cb4dbb00e6301bc44cf2bfca1"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","433c720d5893279c1cc79f7f3842c5ad"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







