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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","8b9f7eadeb8cd29710ca9522157b955a"],["1970/01/01/nvim/index.html","8cac52efdfd4c2cd973cf8d41cc61272"],["2021/02/18/Git学习（个人记录）/index.html","e689e9925d11849b3bf161bdeeb45034"],["2021/02/18/Hexo博客搭建记录/index.html","90bc16d69ae8210df574931023ce6302"],["2021/02/18/IDE配置/index.html","87fd605abd715f17a28726d8d9f77b8f"],["2021/02/18/初识汇编/index.html","06d90d89a89d27737511332ed14592eb"],["2021/02/18/链表与指针/index.html","eb9200030a8029b4cff5566fef87420b"],["2021/02/22/Topic LinkedList/index.html","df36de5f85f0ace12b8480dd3563b358"],["2021/02/25/一些设置/index.html","fe74986f0496acc7a8088505c9deea75"],["2021/02/26/WXY/index.html","d127fa423cfbfbee8747c9f5514bd943"],["2021/02/28/大二下课程推荐-计科/index.html","75467fc6dbdf616c8d725b01884e4598"],["2021/03/04/Linux-notes/index.html","e40cd9368d6032ba9854e04fcc68f70a"],["2021/03/08/data struct one/index.html","4eb6e36c89922f7985c5e4e2beee839b"],["2021/03/17/data struct two/index.html","1e671e40041cfb6d426c208442afcc8f"],["2021/03/22/STL/index.html","f4e736791007b697c42f1389af59f089"],["2021/03/27/Battle-of-Tanks/index.html","eb33217aa3983c50d4371df2fe433954"],["2021/05/01/MySQL/index.html","c8bc345226b75c0557818487a03f81fb"],["2021/05/09/HEXO部署服务器/index.html","5c3f3ce632ca53206372f908ea8427ef"],["2021/06/04/vim/index.html","3aac2721b3815a19efa55246f1885842"],["2021/07/13/oh-my-zsh/index.html","98befc07988fb88b5208df2886e4111b"],["2021/07/14/HTML/index.html","87acb0c0a9fc9d3431e09f74d3d67343"],["2021/07/19/Maven/index.html","aaffce150f6f41038037e0b229258bdf"],["2021/07/20/随机数（C++)/index.html","9af19dac2cdd4cb79f9b9794ca49be82"],["2021/07/22/data_struct_01/index.html","d488047befd36f1b231767037f30f378"],["2021/07/22/滑动窗口/index.html","c2bf517dddc4a2ae29eb2a878a1b976b"],["2021/07/26/Tree/index.html","e0a80705bf48ab9d938a33fafcb03664"],["2021/08/02/正则表达式/index.html","f46d1efb2d088be32a989d28ac34ec78"],["2021/08/14/CSS/index.html","35879f841052a82c87ae242675e42cce"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","a2ca363f6d7b748aea6814d20da07ae4"],["2021/08/19/Windows Terminal 美化/index.html","00f1f6d671431bce7f29c45c501733fa"],["2021/08/23/EROOR/index.html","094889b97677d3c8a752fd797a738ee3"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","6167e3665b2940b79e7e93ae54fa5c66"],["2021/09/07/编译原理/index.html","8594e295705afbe9360f39bb5bd7f0e4"],["2021/09/27/网络是怎样连接的/index.html","cb74dd9a8ce127f1cea67a17718e5027"],["2021/09/27/通信基础/index.html","9c0413a8534c90fc82a32fc416c14a63"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","c7ddd51ae35c1a67726ffb4ea29e24bf"],["2021/10/22/vlan配置/index.html","0106c798049ea69546f3f5a5e7887832"],["2021/10/31/实验三—子网划分与静态路由/index.html","dbca0574df018bdd296f05f3149b1065"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","1343bf93bd7ae1f216575e61c1db9ce1"],["2021/11/17/硬链接与软链接/index.html","6226e3173e2226a0bfd7048e9401e256"],["2021/12/01/SQL20题/index.html","0c2482b56af817514b14d1df5e314abc"],["2021/12/08/实验五：Wireshark抓包/index.html","bad2487e442c69c3edae9bd74668861b"],["2021/12/15/CentOS7搭建FTP服务器/index.html","28d945b77710ff0953a8b2acfc06805f"],["2021/12/19/CentOS7 安装相关组件/index.html","87ed7c209d548bb34fa85c7ff6278f3d"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","49f08e20b7187d613c24886b4147b44e"],["2021/12/27/Vue/index.html","7b2889c39297d38cbf45ac420c680e78"],["2022/01/08/ArchLinux系统安装/index.html","f63d3a382dfd975efd810ba30a0571a5"],["2022/01/10/ArchLinux软件安装/index.html","4cccb185e93894b9967d4daae1127365"],["2022/01/11/ArchLinux开发环境配置/index.html","bd13c2f69ab5aaac5754d8ec8971b5df"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","a7c3d8bbc872539b7c8ac7abbd5185ec"],["2022/01/22/DWM/index.html","9d9cd6833baf95adccbd22ab9b84b0fe"],["2022/01/26/MySQL性能优化/index.html","2b9e4bbf5451bb16706e6d2ce2b517b0"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","49b1042a1198bcdfe90fb77a20f4f7ed"],["2022/02/27/ArchLinux安装wine/index.html","5da8c105f8761f2b333fbfd495a9a407"],["2022/03/01/ArchLinux安装VMware/index.html","efcf1e9906c77b5dd2959e3718a11f3d"],["2022/03/01/ranger/index.html","7509577dc2bcce7532596bc9ea219a2d"],["2022/03/02/ArchLinux PPPoE拨号/index.html","5c540af0de8411f789ec0917dcf227d2"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","22bac97f05bb01a645c89f120992e7e8"],["2022/03/16/Linux文件和目录管理/index.html","14c7d71ec9b9729e7035558b98b010a4"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","d145a080e9242c5641bb36d2090be467"],["2022/03/20/Linux用户和权限管理习题/index.html","b5ebb1cf84ee848cd457d408517ae696"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","756185fe47f1683330082a706dc38e40"],["2022/04/02/ArchLinux安装MySQL8/index.html","f7f01da2d809fbd71fc10a40e9b773db"],["2022/04/04/Oracle11g实验五：Oracle-备份与恢复/index.html","041536ce1a3d39e207849b7fbef060b2"],["2022/04/13/Linux磁盘和文件系统/index.html","77c36dd7bb630c97093c45fdbfb678d0"],["2022/04/13/Linux软件包管理/index.html","fadca37cd552248127cfa2669f613cd3"],["2022/04/18/ArchLinux触摸板/index.html","b682a5ec0b5fc0dbd828bfa175e1b83a"],["2022/04/25/FreaMarket/index.html","0700933934f394d783a9e303ebefd242"],["2022/04/27/Linuxn命令练习/index.html","51e8a616c8a380c21ef8914be35ae4d6"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","72aa8474b0326ac2e7e637a725ed304f"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","118bbaab803311d5f560b59de8cc774f"],["about/index.html","5ee74c9e122f36ed0091513419bd5de5"],["archives/1970/01/index.html","00521e80cd5ebc025c8b1c999ed956e6"],["archives/1970/index.html","1343e7dfd2f4dc735186585128c65d07"],["archives/2021/02/index.html","2d0cdaca7b68247ce7b46741da7b76b5"],["archives/2021/03/index.html","7073bf8d582208903d74676f51cbeb99"],["archives/2021/05/index.html","dd36089d67c9af0a9028176f58edab7c"],["archives/2021/06/index.html","447007a625cd89121ae342d167f8053e"],["archives/2021/07/index.html","76e8957b24b9c0dcc39263da6af9ca4e"],["archives/2021/08/index.html","214edcff8ef3aa2b8fcde0e0e2dd9167"],["archives/2021/09/index.html","8f9700a1738dcf5544455e7e9e97fca4"],["archives/2021/10/index.html","d7db371c44827b142182f76ac34f6067"],["archives/2021/11/index.html","bec64a4b4d54a9de37138feeb6fbd112"],["archives/2021/12/index.html","899810a69429b8e8df65535eb1788cfc"],["archives/2021/index.html","d4c9e51c938d00278cb28c0ff670c75c"],["archives/2021/page/2/index.html","4961da63d725f195a0e6188c0eabe57f"],["archives/2021/page/3/index.html","5c1cb90dc53f45d1458fa8cf6249ceb0"],["archives/2021/page/4/index.html","c2101607f809bf79e681a02792c926ab"],["archives/2021/page/5/index.html","e29981937ece51e8e8b5f9e4eff1c606"],["archives/2022/01/index.html","b11ee85364792225da8d0c4f425c453d"],["archives/2022/02/index.html","34c02c29c6674e55ef7125ac0d5798a8"],["archives/2022/03/index.html","e4c3f03eb1e923c24fd7e7743d8a52c9"],["archives/2022/04/index.html","ee9f935af27fabc671b8de58b379eaef"],["archives/2022/05/index.html","0bbbc1d413a2b951d2d3d8f74b23282c"],["archives/2022/index.html","db8b97c44346049a14c4fdf118517306"],["archives/2022/page/2/index.html","e67300f45d04a51e97ac7fb475b105c2"],["archives/2022/page/3/index.html","7016fe665a6c1d34e7f7d4964fbfbcb4"],["archives/index.html","1a4355b95ed522f9582ebea29bb1388a"],["archives/page/2/index.html","726dad01e98caf008b12afb72aa239c3"],["archives/page/3/index.html","ed29577f523914f2286cfd1ab444b2a9"],["archives/page/4/index.html","1b82b237789ef0806b0c6f9d92f2bee0"],["archives/page/5/index.html","6c012cff7fb42660ecd522fb905e51a9"],["archives/page/6/index.html","934ba2edccc7831217884fbd6f349f04"],["archives/page/7/index.html","67f1edb567d8032e7b45c05933c60b2e"],["archives/page/8/index.html","b53bb168ff370547bb437f9ec34363f0"],["categories/C/C/index.html","a4a92e842f455ff71778a5264f20c8c6"],["categories/C/index.html","f5497629f41d5ab32841e289a2d23331"],["categories/Linux/index.html","c382b734374576852b35db1e4135bf15"],["categories/Oracle11g实验/index.html","cdd37fb97e7b8732d5e4014b7817d284"],["categories/Windows/index.html","24bb94d1cedbc193ed4e5924fedb89eb"],["categories/index.html","aed5b50f776cbaf7fcb06dbdad088367"],["categories/javaSE/index.html","27b08ee6a6de23309a6f6f8425b6e189"],["categories/tools/index.html","2b3edd4a76d995731f74cce821777fa4"],["categories/wxy/index.html","15d46a4bf40185af4dc8980de717514d"],["categories/个人/index.html","fdd830a436c45ce00c84ed08a34d4953"],["categories/前端/index.html","d61d86e0e1da56aa1014466003b7f803"],["categories/工具/index.html","2625b65b52837644cb02e0d3eb628de0"],["categories/数据结构/index.html","b2e821d6f16adfd2dc8b3c85e5eb310b"],["categories/笔记/index.html","c0a83110fa3a9518f8d163ea9a16e8ba"],["categories/笔记/page/2/index.html","52792f362876ef6690f2d0a0773de900"],["categories/笔记/page/3/index.html","69f6bb808b1ee77299e6d719f0d21b2c"],["categories/笔记/page/4/index.html","31aa891f64321bb7662b8615a456db08"],["categories/算法/index.html","85b2add6007d9c17acbccff006626bd0"],["categories/美化/index.html","505e455f486d41e74fc49c039ab94946"],["categories/计算机网络/index.html","c4d490608ff9176f9b92a6e5843da236"],["categories/计网/index.html","71ee5fbe7b8f9bb8f8f8b1d36717ebba"],["categories/语法/index.html","392237e5153b760c41b8cbb8bbce5766"],["categories/软件/index.html","c3dd745473d57bcbe75c47c9416a2a11"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","ea2fb517c7501366e4f23c5fedf00ad9"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","09cab3142f55604c1805aa00ab652627"],["page/2/index.html","0c71ffadf2bfdb8c11fccc7b29bc2f44"],["tags/Burp-Suite/index.html","6b1aae33c3f3099ceff38fa7f1facf89"],["tags/C-数据结构/index.html","5c5cf0cb9d62d6ee24fa7182529cd007"],["tags/C/index.html","977a82c8113b8d7cebf7fafbb1065dcc"],["tags/CSS/index.html","7b41104a49b9d235714c0917e5b15680"],["tags/Git/index.html","977b6d9c44f0fdc762837ba682b5344b"],["tags/HTML/index.html","a1743c77cd0160b822516e64062aef45"],["tags/LeetCode/index.html","7c008a155417f04b62d7cd3515b180b4"],["tags/Linux/index.html","2be2400bd06f2268110d4baaed60d002"],["tags/Linux/page/2/index.html","2050e6059fca9a1a13f39fdb2b633bb4"],["tags/Maven/index.html","ce514d6f6c90e51777cb74cd77d8ad62"],["tags/MySQL/index.html","3fe91e7abf16fe722006495f03a316be"],["tags/Oracle/index.html","dcc06f2fcb7abc9ee52305ddf96e8dcb"],["tags/Vue/index.html","bb54b67beb6e52eb45b1c0be3d2beabb"],["tags/Windows/index.html","6beea4068162d1ec6dcae00123f3ab83"],["tags/Wireshark/index.html","540a28ee70fd4deb8014ea6043c90c2e"],["tags/index.html","9f3d0dd6e98c34641d853b0e3786263a"],["tags/java/index.html","d84242d8d57934e7949e8f235cb5c9f7"],["tags/route/index.html","9586746df11f9afe2cbbb6af6518894c"],["tags/tree-java/index.html","187b3c563c3ce2f63d1ea05d48391d33"],["tags/vim/index.html","77461a7a63a99116fdc6164dea4b8d46"],["tags/vlan/index.html","dd57194261e9467bfcf9175a6e43ee99"],["tags/wxy/index.html","9f71a2679384be5995f67317a3e5b00f"],["tags/个人/index.html","b3fcc7cd3315375e1ee1310538b866db"],["tags/书籍/index.html","b3b084476c48a8a8038c0df7345ef2d9"],["tags/博客/index.html","f55337542b8e6c89d4cf2411398cc2ca"],["tags/壁纸/index.html","24e14e8d3176d93e5f6e3ed36d467872"],["tags/底层/index.html","33fec44ace31708644a36a00546f1afb"],["tags/数据结构/index.html","00679d77b4b981dae29126e3ece25095"],["tags/文件/index.html","6f260043dfb00f4772214a46d8179403"],["tags/服务器/index.html","eb05eff620511b02aa96abed26dc426e"],["tags/汇编/index.html","bc470bdcb367ea60c9916be04a1ce8b8"],["tags/算法/index.html","b7e3e1abcc384f27f2611cd45c1ed846"],["tags/记录/index.html","f5e41e997556e917855adabc3e69505f"],["tags/软件/index.html","420a3759d346c33e3ba91977b913788f"],["tags/通信/index.html","5b3387c31df6e1068996d6bea9b00f17"],["tags/链表/index.html","9ba85336e61b3e5ed20d890ae8629549"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







