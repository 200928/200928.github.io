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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","a09ecb2baba7e9f2bb4e22f1f89078da"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","a5824f78700b3fb819dd457f429d2914"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","6cbd6f70021ec1395fc285b06f1e6f62"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","01098d20ae7c657b8fbbd1b1bdd49ad4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","1b257973309f68309e05fadd3822471c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","981abbffd6039b627ce62fcc197ab6af"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","97e08110808d4d323446ad4d78a9d7a4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","7bd607ec82e60dc54e19d5f0109684ac"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","11b1aef6151ef752327debbecd64bde9"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","eb4e462e1e7313c339e7618edaa1262f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","48f9a1de6ea6c3181cec44214d8c9840"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","3f9ae6a402a687f9e86b35f3c27a2b03"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","8ef6ddc47ecc6f6690c95deed470de83"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","4f548adce279b44c0dfb6ae86c179470"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","8351b03ab57b7c964969016790fb6f7b"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","c09cc9f65e84ce2b5de9f056ef83739b"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","40b3454394cc6c8294339ce9620d34e7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","a6d5c4f7543d259d4423db07103125d8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","2841cf0109fe6d54ac70fb393f6eefcb"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","2081f7e38fb8204b7c0d6b2456ed624c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","5f22a625ed36a213180c7c8ebeb63d7e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","652f1e237ad05b6d15bb6833e70d49d8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","57b20c973d03f9e557f2f11c177fb203"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","15e83f324681e9c7ff6194f363547b39"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","fc80a259e7f0c071b733f04188813ca8"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","008b2ee8a37af4d22a7ce8a375b94f20"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","37d9bb799efb5a13c114bd578224cecf"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","dff1f24e4c9db45bfdc0c5c50653cfd8"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","eba29a6de12583f48b83b8098ce56271"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","8145c10083d32489950320f1e7e423c4"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","2e12ff789a54945c78d6766a6507a5eb"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","4f75aa5f0dd8aaf4a85001a529beb517"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","942d562a26e95afcc68f28ac32e38529"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","790c5812c7189dab2719f4cf2cc984b5"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","ff5c7166ba458ea0d3847ce2953f1e01"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","5fe0b22c33b98cb657fb474ba8d05d72"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","e6cb57a74a6929ca1e718e9bb1660458"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","9e1eb116ee289247180ba6561aec72b4"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","3f873eed3fca6ef71582557996c2bace"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","88383c0c16d73a0416ff0ecccca158a2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","01a19a42f0534bb052ffa976fee5fa38"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","7808ed21cf8c59e695e84ee45ff2c3f4"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","a7cbe4ef4f6c554f0c3bdf3c9f5f3282"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","c7c66d3d74af3fc9d2226c68c7f8863a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","e7a154ece64f066a2108485e222d95e9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","ac3607d988eaf19d2434600128e5a05b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","e1f29715b19d8ba83a6a3775c6e0da7d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","c3f82fe3add0b66078c137d440b75285"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","6dee324f274fe285325daa8bb28a810e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","c52be70ae1f1e5580b44c06354356fee"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","a0746ee6f0f43642dc8345835be1267c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","6706ed7d6029835990f42722f60b6ea2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","67c80fd7b7484e27f835c89d04467978"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","847d3cb63fe96b2a3419f99bac67a7c0"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","8dddc46495c1bd7d36e44685d0bd7a95"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","3e89adf761f66162ad1739f34595968b"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","9d66bdd886f9ca8cd567fd5d6f833a15"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","923adeddaebb7a8ecbc9a25fd588b228"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","1f4f412cfb6a88e31635eb6686a47a6e"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","2b2c21a59c79f5401658ffb405c7ad41"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","287abb37c415a5c10e123eaa376c7762"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","47a1d8fda14f940aa4502b34dfa45c61"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","053899d41ea3ecf01f93678a5d574c3b"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","5acb84d01711069d8ed8666bc74c75c1"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","0e73268c93a66cce91bff37509fb82e6"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","baf81399c877fa448d5ab874721f250d"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","1db1096ff1a5207d92ffba86f846c2a7"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","2d3b1ba6c99c7f634c199fab9e242cc0"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","c499af2cb3900f7e3fd7ce70117a47dd"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","54bfdcad80ba98dce21da4b82866126d"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","413a4a7b4d4ebcc7a2d0cddf4a61c453"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","76d59d3abd139f80586589c71e296229"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","e223196151fce358af43c11432ff5315"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","4d86966bf766661c94448a7c7ead4e19"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","d32ca550534e812c50c80ceef6e0c4b9"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","3784642673b4ab0a634a60cedbaa37f8"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","da0458f38a7408f3c29bd895d3351bd1"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","14e530df7d6d44af14c18de498dccbca"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","63632908059f2b07ed030134a0d6ec34"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","e44781a5b2b8d434497ea26d08f00164"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","4417880b83d9c1e1eccc08fb8dba65b9"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","887163f991c090a05efd6690f290f552"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","25801722a52c063d1902882d651bca25"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","9d0d22e764ba163dd049610a94ec30ba"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","f617d9da6b189d82cb5043be47e1dee1"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","634b4b2af989fdbfb8092eaf6d7e091e"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","2494a047397a25d430d3d0a427d09bd6"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","3e9132a5ce01b41e241519e4a826c102"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","28737f6005e46c1ab31c081178d74376"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","eb4f9d12346d216cb709c5b27f67b26e"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","0205a1573a4da38a3901d16ee9842d56"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","7e8bb69902287944e3a4e92e1ba4029f"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","d5d4be877abe715dd5ac3a50ff7a5189"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","f6d356f094367fd905a09d4540670b86"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","c9e4337026835d69e099edc2b9bfa772"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","2bafc6ba45c89b4f9b3da870811b1fd7"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","e5849e45b8fb5297c46a4dce65758b40"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","f0cdea5b431c0c4b2aac6ce7c8b58dbc"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","a5d3eeb72dbbdd6db48e01446b8e336b"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","5bdceaa497182b0bedc6dfcd7ba43cd3"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","271f80318f8ccb786fe178b583b56f64"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","f0dd4b307c329474b79b9f432eaf11e5"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","0c112487e4bdf758eee68154abb7831c"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","cac02b4d0014d562438040a130ada6d5"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","253f231a13081e4af84e97dc1827ae61"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","8b9dac35987cb8791372707fd23f057e"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","fe7ca0f20711613c587aff5b07a2ee38"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","5a433584a95e49698ccf678e5515c52e"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","5c791888c5ee21bb6d27a60dfcb99c21"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","c1ef91cddfeccafc8b2e635086acf412"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







