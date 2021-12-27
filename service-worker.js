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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","c2a3297a5fdb53d2b14c30b6db92eef3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","25b0d71d74b93b106ce9ec735f84898b"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","1a5bf21df85d5dd4aae2e2010db30e5c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","365cf68ca4a482393fb402e0e3908faa"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","bce018620ebe35ade4940c1057f33c05"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","92058bb18da5c6a2fc045280de7b144f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","ac765ccf8b2ef3f300d0ef8cfef3b04f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","af0df04b9a0def990967cb84485a7515"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","1422ecf0b266664a95e545d67efadb2e"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","bc695bfa36b9ae5c8ef097469692e360"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","16fc5dec11d73d9294cda3ed566cb04b"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","4933a915edc9a4d05ba4fb5b01858e00"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","794192ce6c3c4d43a4e2b6f87cf077c2"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","6ac0fa85959bab10bf00b5457305c136"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","448fce5c1d4db58e294d4c6acf371e9f"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","6df42f3d5df97a9079f211798527d68b"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","081f47bd810346393a6b646d156203e7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","e4961723e3679a0d0d084c68cd21a2c8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","559547d1460ece92dc3dcbe5e33a0023"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","7822673151c9d3b3b95627449bfef091"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","f994dcfbdf775ad9fc8ad4440136ff4f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","7a037e2c8ef35ebd7cf3b3c05c33bf21"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","94f2b3c95a72505db081aa1756e454c9"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","1078696fcc32a2484705330b9fdc0ce2"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","e5d38ec8c750225e673216c8c6349313"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","41994072f8eda71296a4f77ec468b9d5"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","2503b66fa8bcad7f228f0998360cb908"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","4cf6a0d27a984f39ae7001d7c964dca6"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","c692bbbcdad21c31e1d4201c9243bd09"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","d0e05c84c1c7e48df154bee70660d464"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","e2204ff567986be90a39caaf2eeb8943"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","9db02d089b835c5112f9e0973e4ef6f9"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","277b9c64278d6c454c5e8beb174a02d9"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","386fa52a0fa190795ee415f8e1b82be0"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","e284b3e0f3055d13016ff319f7ecc57e"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","e4afef0dd12b454900e36632885c8d5b"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","9a7887c1efbf21c899e0fd1cc3e80926"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","fe0ffa0fdba6efd2f523ac9f64f35b41"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","a0af48db9c99f925a70c0a9b40ad3aa2"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/08/实验五：Wireshark抓包/index.html","703d8b29ced1e42d3c5f2e854c8201f3"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/15/CentOS7搭建FTP服务器/index.html","24d8a840b29858f0e9482696db47391f"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/19/CentOS7 安装相关组件/index.html","13c26116c8882020f24cfa82c07da0fb"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","e0598863e41cde612912abd8bb56d5a5"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","37a4060ddc54e9bb36ab6c2e48ccd9d4"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","2db23e2f6a58aecad965e8746b6cd4a0"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","670a2f517c7fe4d3f5990b0cbec367da"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","b762fe89867249e88f3ecf28644adca5"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","d4a8ff7ab1503ed07ccaa539764d261f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","866c16ea11ffd431d189a65258d0b739"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","a58732d86b464811eb00489ed91be5bc"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","89c52f46d67cc0a9fa1e81b5e90aeaa5"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","e98eb9f1081c34a6a3a94f08d014f8a8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","7daab9d8fc58dd19a0caf0ed59a41335"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","d152344d566adbcd14f9f44258a0f7f4"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","cfc2cef41b9b060a94a0ceab4e8b8536"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","9a6f7799100bd5a4ada950b493ee05ad"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","a80d77289e044b1ee7ffe169dc181dc5"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","ac4a78ce1e0b5f1084e3a49446348521"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/5/index.html","803bafb83407a178f08607b0d4ea4b8e"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","060789dc81ba1a634ed2b63566f7470d"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","4343135fae682474a2cf11f00ef60e53"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","b541dde4add8ab5912c6138cfd6b477a"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","c0cc8d6a4af1799cec6c538ddfcc9a7b"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/5/index.html","a3576751562b0a6a27c9810e9433c91a"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","d2395b8aee04e98618532d308352a099"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","3127c41877ea3cdb34cbdccd43b82b75"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","7d5dee9be8d43041547db4ba6b30e813"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","9de75c19496a83ca07db46288a7ba72f"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","8a4112357d136d6e33db4468e5cb92c4"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","f9a80a230d877dada7d257e24a4bea7b"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","05bc17f82224b06636c20b16df5e14e2"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","d3a5a7db7f2c44dc5c06f0cb18d14e7a"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","ce1b1a82e51dc6bdbf58da478508667d"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","ef5f923a4c0df31fa54f637232b6aad7"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","50c8d972de4d56d75f2092ad20e5388c"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","46b98beb3691adc38934304849626aec"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","e7419a90df381c3e8acf7369a698d5c6"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","b0d9166780ec00966700fea126872152"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","355c3e69f1b2ffab1fd4013b869c66b1"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","c84c8455eb6b685b533105b692b81774"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","9307b2e822dc10e1b1eb6c2bd8a6d025"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","3bf27f91029d2bcddf4a1132459dbd88"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","ebef777f1c59ac61a724951925b87283"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","12d02cdb255109156e9df885424a1bad"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","869275572a065d4c499dcd907b26c992"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","a16f7ffba0fe5161bf5f63d7bc2c8fbb"],["E:/Blog/灰灰爱吃小云朵/public/tags/Burp-Suite/index.html","c5fb1fccb113950ec53b0eaeab42abad"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","c17717b82bc7be01e46485d278820836"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","232fea4404ddd303d4406807e392cf5a"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","d7ac70bb1d2eaec15f7140fd31c38523"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","81dde1942134b669e7219551d82ffe83"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","0511f7b603ddb6fd7e2276dac5c95e9d"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","e554e674cf5bb21bff57b9d1f760661c"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","6d0a3e564c03f1b04cc2ad857194acb5"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","3fa649dd31493b083e0ee0dfaa897143"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","28f0e68d41d6716865ccd86cfc8e7625"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","81ef869009bd6bf9e40f352b89062b27"],["E:/Blog/灰灰爱吃小云朵/public/tags/Wireshark/index.html","6cbc05867e43a7d53717f6c3acbcda77"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","6176a2bea9ce2fc52d2fd368a577f056"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","9d5c994a134c61ff3426831820fed4b6"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","467cabf181104d35a4a128fbad85ec18"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","b81ee3248b24aed358c0a8daa71ecd00"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","15cdbcc7183541199941456740f1affd"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","38aeaaa4c73ff844713f3cb67b7b3caa"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","1e2873413103ce5c3df2cd8c4066a01b"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","18dd08141a92e756ad2d119f19f5f96c"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","4e09f359e109181ffe343798f170bc57"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","8330a909ef19316a2fa322d227876481"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","ef90b1829fb93c869d9919160361ba8c"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","ef91cf29b775d298237a4796bfcb0424"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","f5aee2bbb6acea8f07dbbb0671f1e741"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","a0c132650be0e41f01e5c78b16f74b5e"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","348430883bd716158ccca7d999131556"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","ed7b03dbc1a85db22dff00831894ab16"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","68af2b86058fee97e501b44c1d8702ef"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","2efb000f40a9ed6d5ec734402a4c568b"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","44bf5c06b4e09d785ec2d44840a62d9a"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","6ff0f7814847771bc77131e15298e364"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","8bbdc01f96e6f627157707afc54cf41f"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







