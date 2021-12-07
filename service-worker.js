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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","edbf3066a772bc0eef21db46766cb532"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","6d3a2cde5a8edb53df14598c799a07e9"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","18d28661ac381c3023398bdda240c1e1"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","5fba4f4509d3669887618d506aa4bac5"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","1cd78bd3418f69b46ee0e43cf231c5d3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","05d1df28001c38b9ccbfb0e7fbd034ec"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","1b02a8e3f5d2d8527c53b582d1c0399f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","20ed86cc19017b78910b1045ea55efd2"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","bf68d220a3922689bb7f3485e0270e89"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","6e38cc084659e94a701cc48faf233666"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","09bf621bca5a988294a863477e94aff5"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","54b90e53a3dc5fd67260fe07c4b150fb"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","f862a7aea106d57e0df858b650d0795c"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","e5d7fa0ff0f6e5332e5f873afca7ac65"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","0d49648e5a5c218095c2a5ff7d36a016"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","bbd51db2909423db37f58fc3dfd3e00e"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","3b413732cc87fdb93443b3a8b317bd8a"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","3a1129b3fe3d349723213b8b97d3890c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","246ea0675a02e686a00f76694a6b45ac"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","009188f901ccaaa8ad4bb9aebb7b3500"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","3d1e1668714c144dd20177a25da39815"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","55cd50fe1b436fb3144fda18d05e748b"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","ded3e6e9e9f78bb2641779e75c63c716"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","ab203ae471d6cc8efd81f17cae5624cc"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","7fb452aba3cd340edb065dc54d82c7bd"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","30d833cdf37bf22ab6192fd4f1e32d77"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","70dcd194074e1102b75c6985bf8dcb71"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","f4408480b152651783bb94bee7ac3284"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","38cbe50ae152129958e46d1df1fa9606"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","0b03411300e1d033bd1b43a954ada238"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","7b23cae4b82689e70a38e714f17bcb19"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","1d48924c4999fb953e5ada5a3ec129eb"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","54a4166528afb79cf1d837e171e82f5e"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","32d728f39b94a13e574e8dc88da3f85c"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","377b8a49fa88fc1d50983cdccc5929ca"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","d31ea3803cb9aae863d6b7dc1ce0e466"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","3deac5b1cddfc70e121ec4e31c59b002"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","de50d3e2d72e3a689443ffd3b5ec4597"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","6ec8159065e646a76d0aeced565304d6"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","bd303051d5df365c30fba921d5060013"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","d386cfc4136fbd3865cf34cd3bcf5ed3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","c1ae115818b4e87b04d0f4b0ca3c2f1c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","06efe14bfb29b1b7fcef577488006156"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","2d690bcee2ae43deec4ba156190a6a25"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","ebe733826a3b6b5a37ec37f58aa33244"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","9ed9806a572c02bd90e59e7a73f9dcce"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","659da72d312f970e7cfb00f3a5215d9a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","44006b731ebd45ecafe47982eada9e89"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","decae15c02545d9c06bf794a80d6574e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","4e906fdc6b7764d2fa5eec36e6ebeec0"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","6c3214fb43c76064766ce41180350ab9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","245fb3236d2eff6bb9ba6776fda2a8a3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","79f665f3aa6c1ebb271074ffaaaf39b3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","8871b231e5f1ad5a20c59fdc5f4973fb"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","fa97e82b7f08d5047457818a23ae713c"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","9ef4d35ee3128a2556aa45b8425060e6"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","03be9c702ad6c4fdbf3f905087db4cc8"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","a284ed285a241a4f7a2f94c09f8ef71a"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","33577276c7b6277264ed1dee8f30fd34"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","7245c8a1f54b48b796f79aea1220b97a"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","01a9158033cf6b2f12c24652f3a3c8df"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","73469a6937aa16a29354b8686ee58725"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","4df4c7147ae6ece2886072c7ec3c64e4"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","17c6de4cc42ff727644a3bb804d8ced8"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","839c2515feb7469bc3d22c5154cd5d48"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","3df45dd1d1b105de46c06562afbc8622"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","9ff779c619f70a423c0468a4a504fe7d"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","8fdd9dcd01a0cb1a59ac4ddce1fac530"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","df577673271b9c3138666787084a333d"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","916d645ef5957819c46e774d80d5713a"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","8fa605b717311344f7252f3c2a1968e9"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","34021edc9c8e25ad4e1a8fcd7d0710d9"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","ee242b8481290d175a35ac8789573ba4"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","6449f4061fd8292a103be42306f6905f"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","b961b8425a7fe03207f48b79d2ad935b"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","590d7268461549d1ef07996c636cef28"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","67d33b12168005ec09dda608661945b8"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","f89aeb17474a23702573e03fad365728"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","da7fe6e883310d1d3ba8b723fe968355"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","37a86fef14e04e09b3a7146ab2c33fd5"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","f9063e6a6dce0d5df0ebe97da2e47c8d"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","fd5e8ed78eaf3557f44c75d760e95ae2"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","d69fed844a9a72a8135c7fffb3c07927"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","497bb15ac17c9d48b25dd6bada3cd20b"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","700bb2ce24bf72d78312b0aa76e54a9b"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","1765f8299db1c1820e7c52ac9a81be27"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","f81e5fc217153ff2b4d13815a318251d"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","132faae1f7575e7707c98f4c97a82766"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","85adbaee5b2666126694d53a629e1d7d"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","43e2de0a7f0332c80a8fb3137d857dbd"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","c605f7ed1451df8a125fa3cf4c4beb24"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","bef91b530e1c707157ad2152165d8e3b"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","de5c415b6c4e3d071e2bb3ce5d6a0396"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","0123c17a427ef96dfe6a8cd3ab9044c1"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","4bb5d9cd64ac1bd4f0a2ef40e466ef20"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","b8bf917c934cf107c67728275ec6a189"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","378a9cb6e1e0e5340f7d15dadc2990bc"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","b6b48fdeb20c8f8ad154a905d2addd84"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","a6825ac218f0c49ea2ef01bdd09523fe"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","2f1c1c5c2855f7389a3b001dd06f0763"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","2c3b9089482960fdfb36dca0e7fcb46a"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","8b42a00a7af0df78f59d6b5c7c36cede"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","12916656197e4ddc22a13171bd9361e4"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","d8314ea46dd887658bbd6b1eded230b8"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","c4ea6744afa9c88c0edfdc786be34a98"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","39789c81c71f5e4be2e120ada3edbe3b"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","8298962639648d816c04a436cff134b6"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","8dbf7949ac672acfe9d3c1eb68549904"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","abdce074e66c5088c9c37ffd5125ba83"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","560198221e98fa11a4b7be71da3c5661"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







