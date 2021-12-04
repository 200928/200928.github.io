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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","40b229c53f20eedf1be5a5f779a6b1a1"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","a5824f78700b3fb819dd457f429d2914"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","6cbd6f70021ec1395fc285b06f1e6f62"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","01098d20ae7c657b8fbbd1b1bdd49ad4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","1b257973309f68309e05fadd3822471c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","981abbffd6039b627ce62fcc197ab6af"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","97e08110808d4d323446ad4d78a9d7a4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","7bd607ec82e60dc54e19d5f0109684ac"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","11b1aef6151ef752327debbecd64bde9"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","eb4e462e1e7313c339e7618edaa1262f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","48f9a1de6ea6c3181cec44214d8c9840"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","3f9ae6a402a687f9e86b35f3c27a2b03"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","8ef6ddc47ecc6f6690c95deed470de83"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","4f548adce279b44c0dfb6ae86c179470"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","35db907c6beeda21a98e1dca0ddfb213"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","c09cc9f65e84ce2b5de9f056ef83739b"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","40b3454394cc6c8294339ce9620d34e7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","a6d5c4f7543d259d4423db07103125d8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","2841cf0109fe6d54ac70fb393f6eefcb"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","2081f7e38fb8204b7c0d6b2456ed624c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","5f22a625ed36a213180c7c8ebeb63d7e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","652f1e237ad05b6d15bb6833e70d49d8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","57b20c973d03f9e557f2f11c177fb203"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","15e83f324681e9c7ff6194f363547b39"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","fc80a259e7f0c071b733f04188813ca8"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","008b2ee8a37af4d22a7ce8a375b94f20"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","37d9bb799efb5a13c114bd578224cecf"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","dff1f24e4c9db45bfdc0c5c50653cfd8"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","eba29a6de12583f48b83b8098ce56271"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","8145c10083d32489950320f1e7e423c4"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","2e12ff789a54945c78d6766a6507a5eb"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","4f75aa5f0dd8aaf4a85001a529beb517"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","942d562a26e95afcc68f28ac32e38529"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","790c5812c7189dab2719f4cf2cc984b5"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","ff5c7166ba458ea0d3847ce2953f1e01"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","5fe0b22c33b98cb657fb474ba8d05d72"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","e6cb57a74a6929ca1e718e9bb1660458"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","9e1eb116ee289247180ba6561aec72b4"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","aee973e4bd913a1b6229990df6b35dc8"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","32531a28ffd2bd694f1a5a4891560374"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","d55c957094feec8e940941e8f9bf7c1a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","733b3d1e9d416ce25e95307450618fdc"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","bd7df4ccafb97c29f003018a57c82bec"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","155689d336c4100553bc61be68b2e14a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","617fc3f821d4fde1a3fe5f75981f9231"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","402367d63c418985e7961985b7dab458"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","7db9727ba7dc94da7448b9a02ae63888"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","9c94cbd731783fb3e2a7e385dcba33dd"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","114cf51139dbae1c2493b3013c7ff4cd"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","d764f4565ae80fffdb27cb9e20e010bb"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","750d34f029a3990b714e777de1ca25d9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","f2c45221269a683f4a597c22bd7c2bcf"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","7124019d8e84f23e3f2fda1166eab6ae"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","55f31a443d2a0f5c25ea184d3ddcf0ad"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","eedf2726c870482fc82809a427e8774a"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","8887b3ae8f8b2b654dfa705478965ee8"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","7c88b3ddabc98e28a01e2a44c184ae81"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","290ad6548985e6851312a1c3b8c7c150"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","b9f241fd041bfcdd8fa4ad903d34b57d"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","9c30de76145ab1078cc50a59cdbff9e5"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","9050db6db31117a03c163a685715e534"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","e9ba6d05424ddc654b10623c455c2faa"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","926a4b35d748732b64415036980e50d4"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","8135c4a8d8931f0579e0ea7a13b41042"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","409bd8bb09e62f95a39679d0131d413b"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","b495866b1f828153616a715aaf7a4b75"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","6c4e219ac13d1b4fee58139adbd1097b"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","7c00ecb31e8960baaa18c8cfab34bcfc"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","d60512b1fd55d2462dd5df39eca01ee0"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","2ec0685a570aad575a9a4a1a1775485b"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","108c966612baa8e32e669219603136de"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","ba50ba6636f5852f526ab271ae9d373e"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","958786d96dea4a0e04281a12f3460712"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","8ea573692bad06b8163c0b3704b17e4e"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","8e224b0ed27684b20c88e51fdc8170cc"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","5637ea45d4f1f57f192b88b3d9a38ea0"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","76df548b64e07ac47ae67b7e6e516e49"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","3eff09142380e7368c10a1c9b5188d29"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","99f417f7095ad91c2f34f082d6fc6a08"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","17d166f153d3482484c528a549846b93"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","0b1b385fa659ea3a8cae9e74879d2cae"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","942f71d124c5e38c6e2a6728d8002484"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","bdf23cdb3c7a184bba854340d43f348a"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","2a3f5269a8d23eaf6132b6e882218111"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","da17390a85eda3fcfc1869a5216831d2"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","f766bc740b2a850b9c06e10aad6c39ab"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","30423426c4217fdd8ce813ce2a477263"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","50e3b24c032bed88fd0c7c66c751de52"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","5a22096f876c376b5b931b392d2106da"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","5a87a4721734c90a3d0b9c6a10ac05fa"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","f1e9f6182d5900f66ae02da7e46a807a"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","b281cda04f3f09b86564bf662132cbd5"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","05c2c4dc7feb8d845b66e367e984ebb6"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","67e087e01ba814ba6b4e9e85c71d4054"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","cef8fb106ce3d4d6e8738ff6df3a861e"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","eb384b12947dee908bc4e0526518c018"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","36f5f1835b4ce51a301d92a85c82fc0f"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","8fbff3644826e433af14b7598d19d71e"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","cb4446535fc3f716f6607db0c25e1f32"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","e9dcf59a039145470dc5abebf17b6994"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","534bd63bbb178feeb41cc44c6a8900cd"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","bd21f721dfbb9106a45914c5216222c4"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","f57234200136cab9af86918f652e1b2c"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","9ee66e56679bff20794828d10fcae0a4"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","73406cff6f91d08d5b0d6704de02629d"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","9c6f703d2ff5026d5573d402ab539809"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","a4a39406a5a655881c539ce3e66c2fa6"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","9da674ec2fec2096a0f2154b6d4d68a4"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","f7a21a8d04c8800fb39fbd4947577635"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","bb7850bb0de9ba3f40d97a8b53a86df1"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







