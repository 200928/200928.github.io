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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","ce844539e53de9b57ddc6cc7f4ee4f89"],["1970/01/01/nvim/index.html","b75c59e8b18e57f92d8cdafae9c896ac"],["2021/02/18/Git学习（个人记录）/index.html","266cc363872a4080b3b1579993699918"],["2021/02/18/Hexo博客搭建记录/index.html","8d139a58c230ad3041dfa3c90977853d"],["2021/02/18/IDE配置/index.html","f7ab78cbb1fcad072c6cbf663df24709"],["2021/02/18/初识汇编/index.html","53a284aab04bc0132a592c5d4ff48ce1"],["2021/02/18/链表与指针/index.html","1283ab640857c0ee10cfb2983925c90e"],["2021/02/22/Topic LinkedList/index.html","7850fd3d57507717556ed5882c0288e9"],["2021/02/25/一些设置/index.html","e795165064d8ed1c0fddc895524128f6"],["2021/02/26/WXY/index.html","ba8f0646f868b03d88eddc3679236d69"],["2021/02/28/大二下课程推荐-计科/index.html","eb3cb4aa515b1245b51255779a8c4701"],["2021/03/04/Linux-notes/index.html","2c0f6930dfe2fcc1c7cd8d0a3814ad46"],["2021/03/08/data struct one/index.html","575ed4af93e4252f2b6234121748eeee"],["2021/03/17/data struct two/index.html","a92362ccb3f25812ef1123300833c6a1"],["2021/03/22/STL/index.html","1db96252aea09977db348e509d935c32"],["2021/03/27/Battle-of-Tanks/index.html","c432b31b82db83460d8daa7fcafd8726"],["2021/05/01/MySQL/index.html","46394b2f3864d5b0c13cb7bb7f854451"],["2021/05/09/HEXO部署服务器/index.html","cf036bc2553931c486ffd8e71fc6bd27"],["2021/06/04/vim/index.html","5cddfa0bff41ab69ba5ea2aba1406e74"],["2021/07/13/oh-my-zsh/index.html","071008a82b39b52f3dee03aa0e417c09"],["2021/07/14/HTML/index.html","506aa6083a987ab33b11652df1e089a1"],["2021/07/19/Maven/index.html","097cc516814f619cf8807534e5a97853"],["2021/07/20/随机数（C++)/index.html","1c9561e584e9c2d343c81304243ca066"],["2021/07/22/data_struct_01/index.html","101d6ed88964edb34aee73c19f0615cb"],["2021/07/22/滑动窗口/index.html","f04f4931f44d9f636a2b1a44572cd766"],["2021/07/26/Tree/index.html","a5b35ee217be5dc6034c660e86a6ee65"],["2021/08/02/正则表达式/index.html","eaafe271602a076b354bb2203d722380"],["2021/08/14/CSS/index.html","1b4f6d03690bf3181153fc7f01702e85"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","63ca03ff3807e1c062c7d24888f687a0"],["2021/08/19/Windows Terminal 美化/index.html","c1f29a0fee1515331e60bada032ecee9"],["2021/08/23/EROOR/index.html","a6a00b83c44bbf63276dc603918b3250"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","1e0eb76e6cd9fb6a4439e080e9ec47a2"],["2021/09/07/编译原理/index.html","67cf86d7e532de81882671ae38d8b3ac"],["2021/09/27/网络是怎样连接的/index.html","0fcbcf41d5d8f9afb7378e4b620610ed"],["2021/09/27/通信基础/index.html","ada1c3a2d3f04e49a04ec0c41fa1ac60"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","7a1bacfef1eb925654fe962de2ff47a8"],["2021/10/22/vlan配置/index.html","d1a96d2866a2a9f586ba1235e70e709d"],["2021/10/31/实验三—子网划分与静态路由/index.html","c9b32da06b6d26db9cb93627591e8763"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","17d0edc7351beec38aa3ac6ff3eb284e"],["2021/11/17/硬链接与软链接/index.html","e69cb2f399b83649c363a135e390febb"],["2021/12/01/SQL20题/index.html","e0aed8d2592c67dd75cc64bb2b4a5a1f"],["2021/12/08/实验五：Wireshark抓包/index.html","174b07bdae432e5711ae8e3616f9ad20"],["2021/12/15/CentOS7搭建FTP服务器/index.html","3e065af056849c601576a956807db366"],["2021/12/19/CentOS7 安装相关组件/index.html","b2b720b1a21636a915b6e12dd372c8e7"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","ab419059316f4ad2d409509440fd6f11"],["2021/12/27/Vue/index.html","5973359e572fab2f97c9a7dcb5919c70"],["2022/01/08/ArchLinux系统安装/index.html","89d6d78a076cb523c96ca04a3f068bb5"],["2022/01/10/ArchLinux软件安装/index.html","c49e5ca52be15695a3036529b60a5dcc"],["2022/01/11/ArchLinux开发环境配置/index.html","e7c5eea937bd0dfef8b03c827f981a6f"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","8d33c68057027a9da7f84d07f1de0c17"],["2022/01/22/DWM/index.html","b580b82602f25c7bdc2eae3b64401f61"],["2022/01/26/MySQL性能优化/index.html","a8541a3546a6d68f1100d2f06bf8fef9"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","8bd417033165e5c61b5a93547261cdcb"],["2022/02/27/ArchLinux安装wine/index.html","c4e8a450be81c9796360b7dd74c786ff"],["2022/03/01/ArchLinux安装VMware/index.html","13f64b0caa8fe3bb50c2159a97389702"],["2022/03/01/ranger/index.html","81d356086929bc6646733443f52306fc"],["2022/03/02/ArchLinux PPPoE拨号/index.html","3ef6eab376f407cc57dc4aefb64e7796"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","e15d541b69e0c41bd66c81696c56476e"],["2022/03/16/Linux文件和目录管理/index.html","5bee927a9f3149ebb02b344f209a0b7f"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","b40d61327c82db7d40c0f5cf88fc7bfa"],["2022/03/20/Linux用户和权限管理习题/index.html","68861bb0b1ca7597fa7be8088e4d49b8"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","5f1e1127d3ebf1075537dbad5f1ef011"],["2022/04/02/ArchLinux安装MySQL8/index.html","0d85b2c4bc1ebe26577e295c5f74fc6b"],["2022/04/13/Linux磁盘和文件系统/index.html","2b9e1785818cffbdcb8e7b3def1767ee"],["2022/04/13/Linux软件包管理/index.html","ac1ac4e634f77db2b062d6af4d731713"],["2022/04/18/ArchLinux触摸板/index.html","ae30640a7eec7947af6a077dc7e37eeb"],["2022/04/25/FreaMarket/index.html","beec56a2098c59dd5fe6c41223b7db3e"],["2022/04/27/Linuxn命令练习/index.html","60809d39e192d6539c4bc9fc5bbdf822"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","7b2877650218548c7e5af26ee50353f0"],["about/index.html","190d1b0d86cf04ec875beff014947b56"],["archives/1970/01/index.html","6910fe82e7c10e321900a815b51cac7b"],["archives/1970/index.html","ef5ed5c7124d362dfd939364ef8e9fef"],["archives/2021/02/index.html","fa45601cc1227c6ff332d085d0452e55"],["archives/2021/03/index.html","919bbd513885fda1dfcc434b560e739e"],["archives/2021/05/index.html","bafe348078617212acb44a4df209df93"],["archives/2021/06/index.html","a2bec08bb24ba5121d1ee7ff4e75c2c4"],["archives/2021/07/index.html","2204a01c15c40fa8cb6c9eaa53c3fefb"],["archives/2021/08/index.html","071a3133f81f22e0178cd0bd072bc801"],["archives/2021/09/index.html","0d03d2e4a73312d0d0e98f8bdd14a031"],["archives/2021/10/index.html","9480a0c50cbab132b2bd873cca719299"],["archives/2021/11/index.html","0c04578c84d6aff364c344b5f100da8f"],["archives/2021/12/index.html","3f88e555f2b8cea930251c92f52be5d7"],["archives/2021/index.html","c4b38846b082c569e031fea8ea67f53c"],["archives/2021/page/2/index.html","ac1740d75bf01591eed383a967402d21"],["archives/2021/page/3/index.html","eb315cebf590a6b09b04d2726033632f"],["archives/2021/page/4/index.html","92c2677c97ba3dc210f1af74415b7020"],["archives/2021/page/5/index.html","2a163d087b7bc11e42d01eeb11e5c1d9"],["archives/2022/01/index.html","0c3360879f841c9cfb6212b9913ad9a9"],["archives/2022/02/index.html","c0b1c9647eed985f37f514d92a6c6a26"],["archives/2022/03/index.html","a5b07a4072c387ac4c091c4b113d6590"],["archives/2022/04/index.html","9e3a2e72d16b37fe7cd08fb59d30951a"],["archives/2022/05/index.html","7d81df258613601e6152ef2572dd7c37"],["archives/2022/index.html","2fa83807bfb48c071c4632d7d6bf3225"],["archives/2022/page/2/index.html","c96e1ba0be06d93d04309416f51caaa8"],["archives/2022/page/3/index.html","a03f900f6c7bb50fb4b17ced048edd6b"],["archives/index.html","0efb38f0265015079a057a9cbdd298a6"],["archives/page/2/index.html","23b3b37f170e71e25ad2b7a64e3510f7"],["archives/page/3/index.html","59925a86bca03f3d0d411e1a8a90c882"],["archives/page/4/index.html","f4f6d1afad14f458432959f5bd781e3a"],["archives/page/5/index.html","132a3d186a3113e444cfbf9b9601a42a"],["archives/page/6/index.html","eab7d1aa4f0b7ffd13d8dce4467aaa28"],["archives/page/7/index.html","2285abb972a424b27c813899f65dc5df"],["categories/C/C/index.html","684b1225faf972e137e8cc3da522e782"],["categories/C/index.html","ffd6974db3c5e9542effe039b452dada"],["categories/Linux/index.html","bdb9ae2cbe816124a860703488207de1"],["categories/Oracle11g实验/index.html","6bd53d401741bcf7a3a5acb437d703d7"],["categories/Windows/index.html","2fdb02f8567b7f58c90e64214503d8ee"],["categories/index.html","6e87d64dbc3ca98e62dcd6f9a855020b"],["categories/javaSE/index.html","2ada9d34ce2381b448df1460bf917fff"],["categories/tools/index.html","61b8e5f4637c2a0e2d07e29f7396bcf6"],["categories/wxy/index.html","939b2679d3c81631c087c5db34917d8f"],["categories/个人/index.html","6b41091cadd64fbecf0bde032717a5bf"],["categories/前端/index.html","1a842f5a8e2acea438d777a22fc3c13d"],["categories/工具/index.html","1f7f8ca580ab6085e70d3bf1be76293e"],["categories/数据结构/index.html","026deceb263a81267695c751eb47cbc3"],["categories/笔记/index.html","0e4ebe6705c1a7e928025e68f4c83744"],["categories/笔记/page/2/index.html","a8e923a0244fd0e7152ec90a0c6140b7"],["categories/笔记/page/3/index.html","dae1553682fda0de3426ce872703cdea"],["categories/算法/index.html","6997c0e9d01a95f45272cc8335f95b68"],["categories/美化/index.html","e150c8ce7d913a2527f38496f88a0f3c"],["categories/计算机网络/index.html","8ed2d9ac098c45c3c7b166428cd7195b"],["categories/计网/index.html","e5836c492475b9931e2473b7dec14b11"],["categories/语法/index.html","0299e6bf4fd6d2bfed4b4d3096212858"],["categories/软件/index.html","28a4fe005707d105a7d7e1c09b82f449"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","f584cc9303fcd317b9b6301ec4312302"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","c959e3ca1a488befa5cd6c6e09b25292"],["page/2/index.html","1f504255cf568aec113e4a9b742c3b11"],["tags/Burp-Suite/index.html","72b2492a38256c68f73cffe84095c5da"],["tags/C-数据结构/index.html","f262e40e9ec6dae3c61206ee5ef3a5b2"],["tags/C/index.html","9c75b5370ec829a773148fc00be1a78d"],["tags/CSS/index.html","1cda35ff07f722109d2fabde06067d97"],["tags/Git/index.html","d148c16edd13407c54f2b055c3b1e7c8"],["tags/HTML/index.html","69ff6752d99a635b287f9550a0ffa2a1"],["tags/LeetCode/index.html","468085dda8338e045c02d231e304c4d6"],["tags/Linux/index.html","ee43d7b4a39f4da9dbbc94edb770ce5d"],["tags/Linux/page/2/index.html","38b322c29c94a548bfba2039a8034f27"],["tags/Maven/index.html","d17037eff595b521d3b27df876754d05"],["tags/MySQL/index.html","134e6a5b36a2dca361243e5192c01a14"],["tags/Oracle/index.html","5699d1466d11519382095840df04bed5"],["tags/Vue/index.html","7518c945da0afb7760639a704dead921"],["tags/Windows/index.html","0eb74bb26e46721f0273ca299648e27c"],["tags/Wireshark/index.html","2dfeb2d8b0ae5f91654b827c53fdcff6"],["tags/index.html","fd4663dc2dde500346414432949fd033"],["tags/java/index.html","b2d6028d18b2d906fb55cd48b8ed60dd"],["tags/route/index.html","7f1db06a09588925c7be2eed020d69d1"],["tags/tree-java/index.html","0ee6f67172a92ca4b80f9336d05889be"],["tags/vim/index.html","ee736f1069dd066d700eaa128d51e4de"],["tags/vlan/index.html","ab93ab47f253f4610508cfeb54087b87"],["tags/wxy/index.html","023ec4c697b9506b722b20b59f647d73"],["tags/个人/index.html","9ed8587e6f00dac3e05602822a9cabaf"],["tags/书籍/index.html","db03b01e462b25ee7127a84b26c21c03"],["tags/博客/index.html","9870e70c9c678b6dced37ef1dc6cf4c9"],["tags/壁纸/index.html","256ff9a998bd9c5f6773b182d83f4c68"],["tags/底层/index.html","99f31d22efc00b3f99d2fcfe12227569"],["tags/数据结构/index.html","cc12787fc1123e9277262f9a1b9d799e"],["tags/文件/index.html","f847ed74d62a3e42a0868028d6972dc8"],["tags/服务器/index.html","089989c87b10bb86fec6d3c80bfe1730"],["tags/汇编/index.html","e1703b0600defacb332f5e89435d1ad2"],["tags/算法/index.html","27ad4a52a036737a2c89a6096d1ecdac"],["tags/记录/index.html","48b31a2ec5d614973fe66211d7dae35e"],["tags/软件/index.html","7bb18885c59e22e16d4b0bea7bfe9867"],["tags/通信/index.html","b237b8ef5f5d24dd714abbd39e65aae9"],["tags/链表/index.html","737745d14c03ead0a5bd476485aaf0d9"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







