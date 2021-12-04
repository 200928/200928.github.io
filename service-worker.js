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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","edbf3066a772bc0eef21db46766cb532"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","6d3a2cde5a8edb53df14598c799a07e9"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","18d28661ac381c3023398bdda240c1e1"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","5fba4f4509d3669887618d506aa4bac5"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","1cd78bd3418f69b46ee0e43cf231c5d3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","05d1df28001c38b9ccbfb0e7fbd034ec"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","1b02a8e3f5d2d8527c53b582d1c0399f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","20ed86cc19017b78910b1045ea55efd2"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","bf68d220a3922689bb7f3485e0270e89"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","6e38cc084659e94a701cc48faf233666"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","09bf621bca5a988294a863477e94aff5"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","54b90e53a3dc5fd67260fe07c4b150fb"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","f862a7aea106d57e0df858b650d0795c"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","e5d7fa0ff0f6e5332e5f873afca7ac65"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","0d49648e5a5c218095c2a5ff7d36a016"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","bbd51db2909423db37f58fc3dfd3e00e"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","3b413732cc87fdb93443b3a8b317bd8a"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","3a1129b3fe3d349723213b8b97d3890c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","246ea0675a02e686a00f76694a6b45ac"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","009188f901ccaaa8ad4bb9aebb7b3500"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","3d1e1668714c144dd20177a25da39815"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","55cd50fe1b436fb3144fda18d05e748b"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","ded3e6e9e9f78bb2641779e75c63c716"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","ab203ae471d6cc8efd81f17cae5624cc"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","7fb452aba3cd340edb065dc54d82c7bd"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","30d833cdf37bf22ab6192fd4f1e32d77"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","70dcd194074e1102b75c6985bf8dcb71"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","f4408480b152651783bb94bee7ac3284"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","38cbe50ae152129958e46d1df1fa9606"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","0b03411300e1d033bd1b43a954ada238"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","7b23cae4b82689e70a38e714f17bcb19"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","1d48924c4999fb953e5ada5a3ec129eb"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","54a4166528afb79cf1d837e171e82f5e"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","32d728f39b94a13e574e8dc88da3f85c"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","377b8a49fa88fc1d50983cdccc5929ca"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","d31ea3803cb9aae863d6b7dc1ce0e466"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","3deac5b1cddfc70e121ec4e31c59b002"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","de50d3e2d72e3a689443ffd3b5ec4597"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","d0c9fb7739da133fdffb0da5385fd3de"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","4872be77ce2ab087a9732ade0de9e748"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","233ef76797ebe0bc634c637b5cb4d35a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","5488b9991bf924c82289c22394c0c23f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","407aa093531ab8f4df93f5de3792f531"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","fdc648b18dad29f2f2e430fc30a50104"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","912aa133caca0da9c9e87670e6cfb637"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","05a456a2b06372d82c260a1a9d345718"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","78c6597e50901fb91fca4e1a7d1b5686"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","673e83fa7e9e76eaf91ac093b539927f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","ec4e8f4b9d9a3dc56b45ba9420d89c86"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","c6833b78c6b7ec453ccaf0bee389b864"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","312c86574e16297aefc1955915a596c3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","7a279f3b0b9ef4a345cdc7d7852cd4b8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","b5ea533cebd6eaa241fdd59b82a7c53a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","83675402b3bdab790fbae097967d9c36"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","3156e9c2e774ed61a04c8936d87e632b"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","530106601229fb9b4e08bc623dcfb62f"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","21a084f967cb4a4d3d01d7196326462f"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","55f7fc95a6844999acd9efed63d9cf2c"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","c126aebcb1e8d86410d77b7c9f25fd9b"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","c938e528d865feaa7789c2f264730af1"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","0cc1e205f6a6eec57fb872c717fa4335"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","6114ffc84b580f171959321c32cc5147"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","5cd7da48fe7f7086a46190d23f56cb68"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","e6ec668d6c176c91a0d1b1a5af0a9a51"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","66515c778e3a07b947a19be4f4754c9e"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","e0c0ecb9817e88282d44bdacf778ee78"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","6366c89e444c1e505e678de310a34965"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","8aa92e6a54f0d62b925d389d091d8052"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","62c7a12ad9658bc9215b7c47db849c18"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","d3a86b232d884ae090fcf009b0c185d3"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","aa2ef044431a6a9429b8cd8a12d1d233"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","9da584ed2a6892aa6955002eec021f3a"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","c6cba97e0878e860cf86222e49ae4542"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","f96687c54c2b3aec208d7852c8bf951f"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","94659c3709ba9dd2604217e54a61d8a8"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","68be0ad54c3896fb28bda579cbca3cff"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","2501263d64b738bffd519fd59b6fcf9b"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","9e96c46e41da0038be992039be7d1708"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","0ebc336559b874b19f5280ab3869eada"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","af412ac7418d96267213c0e7b4c8fc49"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","a0006bee147d9d1a6d28623e1654e7e9"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","40883e45c33bfe8408cc19f8d6a2a5c4"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","4f810dcc793edb6018d6d6843015348b"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","a14f42753c7cdef11f6e1e33c88ebec8"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","cb56007ecc21aa072f9a014b18e61a1b"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","68a97cb5ddbdc10e79377a9903868a57"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","6fd9380776f11a2dafe3ac143952ee24"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","c634097cd953b8f3ffeb8226c9b4e1a0"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","555bdf3a6a4836a2e46f00d8b1e0144c"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","677eb28f3a8fcd7873ab3ef473d9e23a"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","83bbbce169f929cd7fdeb93b7f85fb66"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","77148c3ecfccdf37d0c4509229d2c35d"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","9a869424982bff8c98d3814691eec6e8"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","544832fc515f3dfc095dacbb47a950af"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","5fcb3c76e150cc40716046089e5d1a53"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","8fd180a2349b4b072420b4a303084a9b"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","fd53f248d5ef825d278838d2b63bccba"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","99d010b209545b6b7791a7733d648869"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","9aad87066180794427a85f4764dc44a6"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","46ebb0970ced998d129efc4859377149"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","f6bf8c88e584299b2cf48e3cf62945b1"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","6f8605b12647a40c9225acfdfc122517"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","7429535ac883bc0bced51393c7c47812"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","2d9273b05abe95f3e8ec2e0fe8971c6c"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","fadc5ef5c79686939f7b48a3f130fea3"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","045b6c20cf721f7148cc9b472ce0b06a"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","fa62e3a2a3049c8ace38666756ab26c3"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","49799e8e0a6f09de10954d4bc357fc7b"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","75e575a2a992facc8512ade17af1063b"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","d99e636a5d066aa31c12b1c6eac31a7a"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







