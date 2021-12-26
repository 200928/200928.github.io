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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","3de9ffb1e07b287e7a4f991592a09f7d"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","95554b83badcd583b5ba5f9a2b236a0e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","880c93570baa813198f4eae888e11ff3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","e7d202812b396621668975adc25d8dd4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","813607a4a3ae1e37e0e9ff926f063fa3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","3de9031b18689e674bb458979ab55c7a"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","2e55ddde4726433947450f6b819af509"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","9169899b666b75aaeda0e11b3d3b1184"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","74a01a4c08a8e0ddfa831d6bced9536d"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","5734383ec2b421ed947ac9f85e0e29c7"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","5f6d4ee195938f168c1b04ce47a87898"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","64898471b813d26e1d6719485c1b1948"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","dc180ed7a95915384e3a58ff9e935d50"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","3d19ba44bc40cf1c83e7e7b57fdb9742"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","c8a4e9510f92465e7f8d19190d4e4c83"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","f74585728298e8019a23126dadd02c9c"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","7b067d84f4c3a674396cb44f6a6b7361"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","a2725ab2c7d051cec053b8318c17eff6"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","7951737c4545b27d66ee968771b3e6a2"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","14591ef96add2aefffbb8319f87fa8a8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","ab39c909917bb4407cddde65b00a4ab3"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","8ffdca4d62bfa68e11562f8c176b601d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","f1b539d19fec6db0f1513fd107b9b72c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","2e3fb32ca97b62bd585864f4c360b760"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","c624461b669a7ac6874b546cb70eaf63"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","0b94a6089db5b918975381a3afb147f3"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","54beb11723123f0b1c12e51c2420990a"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","568ab2fb7676a1a0e89c5d77e2fe7ee6"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","ed87f36c310d339768304b1d6d057e5e"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","da97dbc6875d3ec9fb4cda62b530388a"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","25baaa36a2f0c8518108c5a9377c5259"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","fd2f386732602e2b785271cf964b4aaf"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","93a2b62f3e378f05275d9747257a8d19"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","e7b22b02755a593f082178ee6caecf2a"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","96ac029ed465e56e14b84a739ef13fa8"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","bcd5787440c6179cc4edce33ec8be100"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","89f348ce5775232e10a36cf6706a0add"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","755c94f472666ab4e9458347acd2ff42"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","0861c621baf6d32f6b06f09a515f3fae"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/08/实验五：Wireshark抓包/index.html","da97a416f91228459073627db7af30dc"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/15/CentOS7搭建FTP服务器/index.html","987d6358d3ec98318e56018d2cb3628d"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/19/CentOS7 安装相关组件/index.html","431bab5254ae9a5bf0807eed9706ba67"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","368fb36177b62aa2618f4f1ee9ce5236"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","4dc91b246947d7e5c9d795ead56aff00"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","a3ca852998534c05e0a85d97d14cc45a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","07e3b19315649a4780e79d807b7f38b3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","d0d8d8ef605b60e4b0113e9f2b867fdc"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","a6e3a3730249f53b0949dc589bbbce86"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","fb21febb2d258341bd10dfb8a689914a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","6fd3aa0a5cf31ede5132cf5bd6299737"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","98b8b337323a939a2280376c29ab8045"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","f966d6939fc551ed7b8a8113f5487965"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","81132f3dd862a7f9b0762ba659e0ff42"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","036dc48bbef4c940dc5eb7f2e425f5b9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","54a0b84e5c7a52689f0c2f17b6dc913b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","1e29899bb01e5146f4bfe657ac320411"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","3dfdf283f9c1973dbce3542a64819dee"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","2cec760bd0cf70a12bfc6966b817cd88"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/5/index.html","2d9f66d2d83d9ae21ce0945c146f19a4"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","e46d590520b6baac4a3fe23a38cfbfeb"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","e12e5c1d92a623f5b4e8402f057bf1e6"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","0daccbc302dd06ec13b7e338ad2fcd48"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","13bc2806f33fd6c68092de95903f55d1"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/5/index.html","0128074522d448bdbb12020be5a1646c"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","4d118b1ecfffcced8d2dfd6912ae1c20"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","79692344b3ff7750646fa685100959a3"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","f6910e7521550d1d62d50348f89d54c4"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","29f0641fc06cb0ea7a9e1e1244521f6c"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","5337f3249ab5f967f71a01a58b6baaf7"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","b6139a57aa20107bc1eaba26c5610257"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","8cb134b0867874f400ea9b082b1f7645"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","88ae1ca77b73b0d6310bceb81ad6d9e6"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","7a2d933527bd7edde6e891e08f8fe3a3"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","44cdfef20456fe40689315b2e7fbc404"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","3e7b48a1143f3ad71bcecf6489314427"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","fb07163c503180d0b8e43cdb3d404151"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","fe4ca5f974625a34744a083c314943af"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","5c5b1438662372fa560ec0b6bff0eba8"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","2875ea0bf3706dcf8c612d311faa81e7"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","c2279e0f567525dcdb7e0edd18e9a083"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","bb70cab1b7633a7c14e683a2927670c7"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","9f3382ee48c90110ba0ce31a504233db"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","50b8f2be12980c5fcd67f7cf735219bb"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","704af26cd3addecac8c2a2ad23e97347"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","254e25c1ac4a571bc54fd4ff0b76b94d"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","78cdfd91db4e4570ce5e060f1c90169b"],["E:/Blog/灰灰爱吃小云朵/public/tags/Burp-Suite/index.html","b20ad7d9f63b9159254452d484a244c7"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","0eb94e97bd677883fa6b57630fe638a9"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","a1f20d6bda885a47c16867560d16186b"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","5c0430b6aaf8c95d7cf9228d8600b8e5"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","d63cd7109ba0d4aeaa8b4344ba132858"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","831086de009a4f9f9aa564b3136b7a42"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","1d4af591209d2a2ec507ecc4f3084cd3"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","8f85dee1ae62973759b911b3be508502"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","8afee187fbe95f7cf1dbbc0a9ff42bc3"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","5a8e55a741aa79fbd8e9e9f6cc63fe6c"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","9045d6c7ab4ecbde53c8519cbad66fdc"],["E:/Blog/灰灰爱吃小云朵/public/tags/Wireshark/index.html","ae080a2a7c68429aafb587b02e36a2c2"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","b14215c3a2b34218de81d395e666d1e0"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","7325e0666b79785e4093da515aa7af6e"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","5254b3bebc00d63a934db4c3bc526691"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","a1936de3a25e34bf0cad01e741e072a3"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","9f894903edc0253c296b23ec817f427a"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","5443ab615eaa4f00e095244e1b73e9ae"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","cd5782896a607b94003485311109677b"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","af31e604140d00191c174763e81ffd7c"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","a3567cff4299204b2b424a0c48262167"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","4c8875972312fbccfa3397e43cc2e693"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","eecf6b1f961291fbd8a4a39442827e4e"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","a1ab55e40f97abf7e52b4bf6e297c340"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","c2a12f90cf64a62aa78e0a33ef78cd1b"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","0de4b558f3a522910bdad7dceeb5637e"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","190c3ef27a32b01c25c2bad960e15946"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","6b560649c2fa7205d6be35f483edf0b7"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","04dd72022ad3945247d6155843ee8424"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","be5ce04bee12fa928914bd7eb12e5c54"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","79e47cc207fc77f70a3e262338c36b72"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","767218092cc0c8136fda2cd893c3b9fb"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","d00db700144e881f5416d22c5ee207e6"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







