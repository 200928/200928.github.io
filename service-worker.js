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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","f2fedc0e501d5d1ab3a2233562d98f61"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","a5824f78700b3fb819dd457f429d2914"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","6cbd6f70021ec1395fc285b06f1e6f62"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","01098d20ae7c657b8fbbd1b1bdd49ad4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","1b257973309f68309e05fadd3822471c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","981abbffd6039b627ce62fcc197ab6af"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","97e08110808d4d323446ad4d78a9d7a4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","7bd607ec82e60dc54e19d5f0109684ac"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","11b1aef6151ef752327debbecd64bde9"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","eb4e462e1e7313c339e7618edaa1262f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","48f9a1de6ea6c3181cec44214d8c9840"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","3f9ae6a402a687f9e86b35f3c27a2b03"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","8ef6ddc47ecc6f6690c95deed470de83"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","4f548adce279b44c0dfb6ae86c179470"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","35db907c6beeda21a98e1dca0ddfb213"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","c09cc9f65e84ce2b5de9f056ef83739b"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","40b3454394cc6c8294339ce9620d34e7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","a6d5c4f7543d259d4423db07103125d8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","2841cf0109fe6d54ac70fb393f6eefcb"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","2081f7e38fb8204b7c0d6b2456ed624c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","5f22a625ed36a213180c7c8ebeb63d7e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","652f1e237ad05b6d15bb6833e70d49d8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","57b20c973d03f9e557f2f11c177fb203"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","15e83f324681e9c7ff6194f363547b39"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","fc80a259e7f0c071b733f04188813ca8"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","008b2ee8a37af4d22a7ce8a375b94f20"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","37d9bb799efb5a13c114bd578224cecf"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","dff1f24e4c9db45bfdc0c5c50653cfd8"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","eba29a6de12583f48b83b8098ce56271"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","8145c10083d32489950320f1e7e423c4"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","2e12ff789a54945c78d6766a6507a5eb"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","4f75aa5f0dd8aaf4a85001a529beb517"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","942d562a26e95afcc68f28ac32e38529"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","790c5812c7189dab2719f4cf2cc984b5"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","ff5c7166ba458ea0d3847ce2953f1e01"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","5fe0b22c33b98cb657fb474ba8d05d72"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","e6cb57a74a6929ca1e718e9bb1660458"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","9e1eb116ee289247180ba6561aec72b4"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","e4d5a6825c0c9315ce71fb4bb3328ed6"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","6c0c85fcc6eb242b440c10d8ec80b3c2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","20525d57841fe55e690d5dcc48ce7cb5"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","8492b9c18ae8d2fb2ff294cd278e19ba"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","f060d23229f1e15db0690b332779988d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","d0011e169b2fe19dd7238866832c79ae"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","fbb9905f652c979b109bb0823e3ff4c2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","88d46c43f052ea8a655eb57bcb3e4930"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","bcc0fe7fb21bf7fe0c70f1b0e9bd0dbe"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","27ab6577fa3e9eecec47b86b6b97ae25"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","866ac3c4790aae060c8bbbdb13746ac2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","0a10df204fec500ad39a3ad7b2b44d1f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","70503f4614f953236f121f408431ac0c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","3a988ac7be8a7bd897a08db39046010c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","d569dba66fb71c77b74df1e916849c33"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","4f7bbfccbf699d3ad58f442a8fe0c2dd"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","3f2e8405902b0d6c73fb73a90a3e09f5"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","0def787ee049b51b6fe483847fbde5ba"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","13533537f3b23ea2a635842687e96705"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","dee08cd754badadd8e3b2ad412eadfcb"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","7448659ffc1cdab4948256085b787d28"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","a8f077c68186f52d37950640648688bb"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","3b59999c9eb9884b1c61cea67a4250e6"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","351f838e2f78a9d947eef9831b1b839a"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","c967da3e6a1f9359e76baf2814dc6752"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","9ce2771e26ab647b14b66f513ce41d83"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","41c9b0dfb14d3e00e0e87733adb877ad"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","f8cf6f93511887e0ed3b4594231c863e"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","ae342d2448df20b55d33a7b3e99203e5"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","f1f5f497065797284d52e925a4aa0d56"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","a57b731e73df62ad97105375610464cb"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","c495e2da8ff2e16f5f69b9df6b86fe30"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","e442d496f14c87cb13f26e43ac875eaf"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","3b5eebc7dd4abc4de86b02fcd5cc22b4"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","ee9571623f1097eef81749e8dc1b8f6b"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","d6a78ff0272fa58ad552e1dfca69a1f1"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","425aa8b485544f4a59bb6d799ff4838f"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","fb94f9da21ee5151f4ed706174b75205"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","bc840d515a8e38eb4740a20ca9e95b02"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","af683f4e6b456b84a3c389d5352657da"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","b04defea700ea3f222a598fa19c473d3"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","3af00848141cfbf223c99961481f357c"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","c823af18196a0a787815b97875a5528e"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","95a22e88bd6c1c90cfec29a6ba9e0226"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","41560a19c3a975dae27f682c5f38a11e"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","f3dcdfa1403bb8fa1fde6c27c93ee737"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","d2cc7bb6fe2482e94ecc01f24a6f66da"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","62e43c664ed3b16ffe0d7059bf6d5d2a"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","ffaab567419989bdaf15de3ad83bf668"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","49ef21e0e94e1140c2486efe64340d70"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","b7a19c9f9b1eb1ecb1adb1a6362dfc9b"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","b4cedaad2564a7bfe9a380147a7dfce2"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","8aa5a3567fdfb2f9a580f5d0ac80a7f9"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","a59830b50f029d921cc08c596a42afb2"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","2bc59f426a5d7132ef076f455235060d"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","e87aeff405c2356e1ba0a6d01c305d2e"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","8f9e2f507f356337cd30f5a784c0cb20"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","9150f5b19a118c878639099e86eccd79"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","3529b5e197b2c7b0afbfb87af648b681"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","6310434959f8e9fde37abd2b370e215d"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","14ce3e38f2fd3707b0a8cc2496d780f8"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","dedad734a612f33b5ce34766544530f0"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","9985e4a821e4135d5e5f54447d9f4c0b"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","8f5a027be93248f247e8dbb2102dd8ee"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","41cf77bda6c9db1520f38ff3818bfc6f"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","d6172c2e253246c55a07935b04155169"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","930211a721cf5daa8ec8f07bd476ad37"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","0700a556f82ab0b756432b16f016465b"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","6401277120e8e8b6fa355db5f457a226"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","ff3618e8250dcfac79d59b7744f1d132"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","126e5f9eb06cb6381b4e3099547f5bc6"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","61e71e5d53b898d8f20abc94f7f24b0f"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







