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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","edb2ca39802b81c9725fc9e07bdef5a2"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","58aac196d7f633ba130ce754cea30dff"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","74882896a4eec23b5731d18c4ae3f965"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","75e846ff4b8212cc6d91e010ffe47e46"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","e8a162f29fc26596330008d2bdc96500"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","4a0e689c8774e491b1fc269a03d99ec9"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","c89499e7743638e5083f362809627cab"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","1a39d53cc6b60da69727e207dd6367f6"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","c164b691c46d90b40f87c692997ddd47"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","9c507aac2395d69a2894539ee838cf4e"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","41a41531120647774b0e26c5654854b5"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","fb2adc94c16378e2827bdd7df53ddf72"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","1578eee03bd6e4077b6f16b625098f31"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","d0ace901fd5c949da6289fcb5c417e9d"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","fe098f0225703d5a20b8c3bbcb291e56"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","9500e4e9e6261cffed15b0b0d66fb428"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","18510d7839a8555b095b09820a9d56a9"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","91550123355d3ba219779baba2a1c0dd"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","c3afe0711a359f1503986727c08a589e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","372d084c8104200db9f96f51b785bb34"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","259adfe0874456a7e0610ce0c980afc3"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","84d8d84ec2e4d7921ade8a4701d5db5d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","f6d0984954010010a0da2ebfb385dcd7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","b0e029ad36deb66ef375bcdf7fc7775e"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","b267aa2bf213f1d7731810ebc8300575"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","1307dfc46c44fb60197c045dfaadd35e"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","e4ce7da1ab9c4e0bea6bb0208f436749"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","1e3f05a9d65fb993e12660edb017b3ac"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","f2558b602185540720de16a2eee1b6fe"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","52a0fe47edcc2f2ca2f3b37aa38e24ea"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","97065f3d29065002dea2b139dea07424"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","14f7e8038b76e838426f5172b43d1327"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","e4f1192f2f00172e5745c826f9f4f5ba"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","c3b4532e1c8337518f2c65ecc434dba4"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","e2181c97acc21e2dbc5a801ebe205dd7"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","09c9caeda2129ca8d7de3521d6263a61"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","700932afea4d4f333050b717981d2adf"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","fee5c04f4763bb7f115e7714979c7fa6"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","574bd091154046af38981e6d43b1ed0a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","ecfacfd04bc2e1e701137c2c3ef7f24a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","d8557ffdfbaa6eda40d8f8c9a70813f9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","4548ed3bd524d316f208db2c54d1395c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","b8111a26e449c524b3b9884de329b250"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","aade415476de6d5914b2e04a1be29f3f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","20a93fba90d879a9d3a1df7122406347"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","2426e24905cc4ea841b9e985114650cf"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","85f06d0c9548c10c01fb01f28bae5e55"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","398a21a7b824255bda44bdca36492c31"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","733526f82c9b24ef8cde27d4c0dc49d7"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","7b279706f45d5c8a4a104a1cd6d5cd20"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","7b335d202c52452d0c45b164150c913e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","4f12c379dac32dc1a0008fa5820a35d1"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","733706f04a36ae2f19e6f2eb4676e238"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","7f69104fe8c72625db45fbefabe57bdb"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","a7e7f6fa36da9a3ca9040bda17a063e1"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","166aa73a783bb3055ddda633f8b28f06"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","ec377d8fceea73f54d487e554f781d8e"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","d5d3b9ac78557759560eeddb76c677cf"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","a9d92b8e7c7f49aca3813f7f54ecfe6e"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","a9e871a9d69d70455d462d21f45e7805"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","a3df0c7826c83a999e2dc0a47873efd9"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","6590b73def4932c7201387581b856c0d"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","162f943ab1fba091d148a3d64b699586"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","c38a28025c33759c5f2b8476c402d541"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","6dcee4a80ca758e8503a5629d9d22b88"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","5bb7156484dbe4fbd751ff11a3bf09b2"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","57e877bc3b42bd38de17e3c6dc009f5a"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","cf2fa5fdc0122f405b13c6bbe7b24bdc"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","fbea5bf262cbdd1e6a3cb63f0f1d7908"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","d89d158cad455d62b7e4731bb6ed8bf6"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","e3c83dea7cbb31ce04f738a9f6311c71"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","d50539c5056cd018908c2505699078ae"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","b6dc6b58c7431fa14bf73b44913c49b7"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","39e6cd2515e0c91bcae224962cff99e2"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","5f84a59db3fba338bb0f2c97de98ac7d"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","db6c45d744a408af715b1858d3cc2612"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","784fd65ebf056408ba138953fdaa58fc"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","d34344a8e56f4c3e73a9f504ccefe9e8"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","ab68ff7de94479ddcd6dc3dfbf12522f"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","48a0703bd0f95ba043596288e48c12b3"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","04ac2781dd9419fef3ecf8ed7ce2a030"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","bdc993c2aacfed68261d88245e57a4a7"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","0be606627a3cce280e1368be1a2dc359"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","b3b2e797b5e9d172cf7d5f70cf32f7d6"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","6cc6e69f12081122ad6cb19a39cd4633"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","e0dd10b5f592be7fe70defaf3ccf0281"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","47e581dcc84e96639efce4319825c0f7"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","7f9a685bfbb10e4974047df48d77effe"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","5206ec9613969833d42df111f00e67d4"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","1520aacd59cb9b31bf12a9539e8646e7"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","bafa0ade84cee02ddb9466f5505b00ba"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","1b42cc62c02801cc5f791b58b0331c09"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","2b3457adce8ff24d301cdc45ec3b9697"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","43e651a780838aa56b2e2048596cc6c9"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","54e8f41118f567db4e09b377e1fa21d5"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","6aa3d8ca465f18db47c62f667bcb5852"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","39a9b1dfa599ded5588f041f202de3f9"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","b9d9759330e8f89dfe3afca192da4790"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","3bdc416647f68ad9269b594b7c3e8f2a"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","f8d245aa42f82db867a1724ab7fe8491"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","365fa873657a717a3d17799b0fbb5310"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","264588fb61b949e1563a910134e16898"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","e5a3d79950f4234ce2db9109316aacb5"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","5b16945001f5337ef23a0bb0d4651f4a"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","45ff73c059920940c4c688c425e4b381"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","739688b836f198deb0c6c94e414e36bf"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","d37e662928a1a079fa8af0ad8717958c"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","a856d988e92ce26c654e890edbda6ed0"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







