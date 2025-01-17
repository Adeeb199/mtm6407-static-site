(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,4,8,9],{331:function(t,e,r){var content=r(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("2debb2ac",content,!0,{sourceMap:!1})},333:function(t,e,r){var content=r(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("a4c7a740",content,!0,{sourceMap:!1})},335:function(t,e,r){"use strict";r.r(e);r(25);var o={name:"SkillsSection",props:{skills:Array},data:function(){return{hoveredSkill:null}},methods:{startAnimation:function(t){this.hoveredSkill=t.name},resetAnimation:function(t){this.hoveredSkill=null}}},n=(r(337),r(47)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container my-5"},[e("h2",{staticClass:"text-center mb-5"},[t._v("My Skills")]),t._v(" "),e("div",{staticClass:"row text-center"},t._l(t.skills,(function(r){return e("div",{key:r.name,staticClass:"col-lg-3 col-md-4 col-sm-6 col-12 mb-4"},[e("div",{staticClass:"progress-ring",on:{mouseenter:function(e){return t.startAnimation(r)},mouseleave:function(e){return t.resetAnimation(r)}}},[e("svg",{staticClass:"circle",attrs:{viewBox:"0 0 120 120"}},[e("circle",{staticClass:"circle-background",attrs:{cx:"60",cy:"60",r:"54","stroke-width":"12"}}),t._v(" "),e("circle",{staticClass:"circle-progress",attrs:{cx:"60",cy:"60",r:"54","stroke-width":"12",stroke:"#6c8eaf"}})]),t._v(" "),e("div",{staticClass:"percentage"},[t._v(t._s(r.percent)+"%")])]),t._v(" "),e("i",{class:["mb-3",r.icon,"skill-icon"]}),t._v(" "),e("h5",{staticClass:"skill-name text-primary"},[t._v(t._s(r.name))]),t._v(" "),e("p",[t._v(t._s(r.level))])])})),0)])}),[],!1,null,"5a1d33a8",null);e.default=component.exports},336:function(t,e,r){"use strict";r.r(e);r(4),r(68),r(169);var o={name:"FeaturedProjects",props:{featuredProjects:Array}},n=(r(341),r(47)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container my-5"},[e("h2",{staticClass:"text-center mb-4"},[t._v("Featured Projects")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.featuredProjects,(function(r){return e("div",{key:r.id,staticClass:"col-lg-4 col-md-6 col-sm-12 mb-4"},[e("div",{staticClass:"project-card shadow-lg rounded overflow-hidden"},[e("img",{staticClass:"card-img-top",attrs:{src:r.image,alt:r.title}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(r.title))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(r.description))]),t._v(" "),e("a",{staticClass:"btn btn-gradient btn-block",attrs:{href:r.link}},[t._v("View Project")])])])])})),0)])}),[],!1,null,"5a5e119c",null);e.default=component.exports},337:function(t,e,r){"use strict";r(331)},338:function(t,e,r){var o=r(53)((function(i){return i[1]}));o.push([t.i,'h2[data-v-5a1d33a8]{color:#b69928;font-family:"Roboto",sans-serif;font-weight:700;text-shadow:2px 2px 4px rgba(0,0,0,.1)}.progress-ring[data-v-5a1d33a8]{border-radius:50%;box-shadow:0 4px 12px rgba(0,0,0,.1);display:inline-block;height:120px;margin:20px;position:relative;transition:transform .3s ease,box-shadow .3s ease,filter .3s ease;width:120px}.progress-ring[data-v-5a1d33a8]:hover{box-shadow:0 8px 16px rgba(0,0,0,.2);filter:brightness(1.1);transform:translateY(-10px) rotateY(15deg) rotateX(15deg)}.circle-background[data-v-5a1d33a8]{fill:none;stroke:#144361}.circle-progress[data-v-5a1d33a8]{fill:none;stroke-linecap:round;stroke:#144361;transition:stroke-dashoffset 1s ease}.percentage[data-v-5a1d33a8]{color:#fff;font-size:1.5rem;font-weight:700;left:50%;opacity:.9;position:absolute;top:50%;transform:translate(-50%,-50%);transition:opacity .3s ease,transform .3s ease}.skill-name[data-v-5a1d33a8]{color:#333;font-size:1.2rem;font-weight:600;margin-top:10px;transition:color .3s ease,transform .3s ease}.progress-ring:hover .skill-name[data-v-5a1d33a8]{color:#6c8eaf;transform:translateY(-5px)}.skill-icon[data-v-5a1d33a8]{font-size:2rem;transition:color .3s ease,transform .3s ease}.progress-ring:hover .skill-icon[data-v-5a1d33a8]{color:#fff;transform:scale(1.1)}@media (max-width:1199px){.progress-ring[data-v-5a1d33a8]{height:100px;width:100px}.skill-name[data-v-5a1d33a8]{font-size:1.1rem}}@media (max-width:991px){.progress-ring[data-v-5a1d33a8]{height:90px;width:90px}.skill-name[data-v-5a1d33a8]{font-size:1rem}.skill-icon[data-v-5a1d33a8]{font-size:1.8rem}}@media (max-width:767px){.progress-ring[data-v-5a1d33a8]{height:80px;width:80px}.skill-name[data-v-5a1d33a8]{font-size:.9rem}.skill-icon[data-v-5a1d33a8]{font-size:1.6rem}}@media (max-width:576px){.progress-ring[data-v-5a1d33a8]{height:70px;width:70px}.skill-name[data-v-5a1d33a8]{font-size:.85rem}.skill-icon[data-v-5a1d33a8]{font-size:1.4rem}}',""]),o.locals={},t.exports=o},341:function(t,e,r){"use strict";r(333)},342:function(t,e,r){var o=r(53)((function(i){return i[1]}));o.push([t.i,'.container[data-v-5a5e119c]{max-width:1200px}h2[data-v-5a5e119c]{color:#b69928;font-family:"Roboto",sans-serif;font-weight:700;text-shadow:2px 2px 4px rgba(0,0,0,.1)}.project-card[data-v-5a5e119c]{border:1px solid #ddd;transition:transform .5s ease-in-out,box-shadow .5s ease-in-out}.project-card[data-v-5a5e119c]:hover{box-shadow:0 16px 36px rgba(0,0,0,.15);transform:translateY(-12px)}.project-card img[data-v-5a5e119c]{height:200px;-o-object-fit:cover;object-fit:cover}.card-body[data-v-5a5e119c]{background-color:#144361;padding:1.5rem}.card-title[data-v-5a5e119c]{color:#f8f9fa;font-size:1.25rem;font-weight:600}.card-text[data-v-5a5e119c]{color:#d2dde0;font-size:1rem;margin-bottom:1.25rem}.btn-gradient[data-v-5a5e119c]{background:linear-gradient(45deg,#071c34,#a1ccdc);border:none;color:#fff;font-size:1.1rem;padding:.75rem;text-align:center;transition:background .3s ease,transform .3s ease}.btn-gradient[data-v-5a5e119c]:hover{background:linear-gradient(45deg,#a1ccdc,#071c34);transform:scale(1.05)}@media (max-width:1199px){.container[data-v-5a5e119c]{padding-left:1.5rem;padding-right:1.5rem}.project-card img[data-v-5a5e119c]{height:180px}.card-body[data-v-5a5e119c]{padding:1.25rem}}@media (max-width:991px){.project-card img[data-v-5a5e119c]{height:160px}.card-body[data-v-5a5e119c]{padding:1rem}.btn-gradient[data-v-5a5e119c]{font-size:1rem}}@media (max-width:767px){h2[data-v-5a5e119c]{font-size:1.75rem}.card-body[data-v-5a5e119c]{padding:1rem}.btn-gradient[data-v-5a5e119c]{font-size:1rem}.project-card img[data-v-5a5e119c]{height:150px}}@media (max-width:576px){h2[data-v-5a5e119c]{font-size:1.5rem}.project-card img[data-v-5a5e119c]{height:140px}.btn-gradient[data-v-5a5e119c]{font-size:.9rem}}',""]),o.locals={},t.exports=o},343:function(t,e,r){var content=r(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("0634e6ee",content,!0,{sourceMap:!1})},344:function(t,e,r){var content=r(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("0a24369d",content,!0,{sourceMap:!1})},345:function(t,e,r){"use strict";r(343)},346:function(t,e,r){var o=r(53)((function(i){return i[1]}));o.push([t.i,".f[data-v-5ec36f70]{color:#d2dde0!important}.hero-wrapper[data-v-5ec36f70]{align-items:center;background-color:#144361;border-radius:12px;box-shadow:0 8px 16px rgba(0,0,0,.15);display:flex;flex-wrap:wrap;margin:2rem auto;max-width:1000px;padding:2.5rem}.hero-image-container[data-v-5ec36f70]{flex-shrink:0;margin-right:10rem}.hero-image[data-v-5ec36f70]{border:4px solid #007bff;border-radius:50%;box-shadow:0 4px 8px rgba(0,0,0,.2);height:160px;-o-object-fit:cover;object-fit:cover;width:160px}.hero-content[data-v-5ec36f70]{max-width:600px}.display-6[data-v-5ec36f70]{font-size:2.8rem;font-weight:600;margin-bottom:.5rem}.lead[data-v-5ec36f70]{color:#555;font-size:1.1rem;margin-bottom:1rem}.btn-lg[data-v-5ec36f70]{padding:.6rem 1.5rem}.btn-lg[data-v-5ec36f70],.view[data-v-5ec36f70]{font-size:1rem}.view[data-v-5ec36f70]{background:linear-gradient(145deg,#abc0ce,#d3e8ec);border:none;border-radius:30px;box-shadow:0 4px 8px rgba(0,0,0,.1);color:#333;cursor:pointer;font-weight:600;padding:12px 24px;text-align:center;transition:transform .3s ease,box-shadow .3s ease,background .3s ease,color .3s ease}.view[data-v-5ec36f70]:hover{background:linear-gradient(145deg,#f4eee1,#c0ced1);box-shadow:0 12px 24px rgba(0,0,0,.15);color:#333;transform:translateY(-4px)}.view[data-v-5ec36f70]:focus{outline:none}@media (max-width:1024px){.hero-wrapper[data-v-5ec36f70]{flex-direction:column;margin:1rem;padding:1.5rem}.hero-image-container[data-v-5ec36f70]{margin-bottom:2rem;margin-right:0}.hero-image[data-v-5ec36f70]{height:120px;width:120px}.display-6[data-v-5ec36f70]{font-size:2.2rem}.lead[data-v-5ec36f70]{font-size:1rem}}@media (max-width:768px){.hero-wrapper[data-v-5ec36f70]{padding:1rem}.hero-image[data-v-5ec36f70]{height:100px;width:100px}.display-6[data-v-5ec36f70]{font-size:1.8rem}.btn-lg[data-v-5ec36f70],.lead[data-v-5ec36f70]{font-size:.9rem}}@media (max-width:480px){.hero-wrapper[data-v-5ec36f70]{padding:.8rem}.hero-image[data-v-5ec36f70]{height:90px;width:90px}.display-6[data-v-5ec36f70]{font-size:1.6rem}.lead[data-v-5ec36f70]{font-size:.85rem}.btn-lg[data-v-5ec36f70]{font-size:.9rem;padding:.5rem 1rem}}",""]),o.locals={},t.exports=o},347:function(t,e,r){"use strict";r(344)},348:function(t,e,r){var o=r(53)((function(i){return i[1]}));o.push([t.i,'.testimonials-section[data-v-6d12d6cc]{background:linear-gradient(to bottom right,#071c34,#0e2446);padding-bottom:60px;padding-top:60px}.testimonial-card[data-v-6d12d6cc]{background-color:#d2dde0;border:1px solid #ddd;border-radius:15px;overflow:hidden;transition:transform .5s ease,box-shadow .5s ease,background-color .5s ease}.testimonial-card[data-v-6d12d6cc]:before{background:linear-gradient(180deg,#fff,#2575fc);border-radius:15px 0 0 15px;content:"";height:100%;left:0;position:absolute;top:0;transition:width .5s ease;width:5px}.testimonial-card[data-v-6d12d6cc]:hover{background-color:#f7f9fc;box-shadow:0 20px 40px rgba(0,0,0,.15);transform:scale(1.03)}.testimonial-card[data-v-6d12d6cc]:hover:before{width:10px}h2[data-v-6d12d6cc]{color:#b69928;font-family:"Poppins",sans-serif;font-weight:700;text-shadow:2px 2px 4px rgba(0,0,0,.1)}.testimonial-text[data-v-6d12d6cc]{color:#444;font-family:"Georgia",serif;font-size:1.2rem;font-style:italic;line-height:1.6;text-align:center}.author-info[data-v-6d12d6cc]{align-items:center;display:flex}.avatar[data-v-6d12d6cc]{border-radius:50%;box-shadow:0 3px 6px rgba(0,0,0,.1);height:50px;-o-object-fit:cover;object-fit:cover;width:50px}.author-name[data-v-6d12d6cc]{color:#333;font-family:"Roboto",sans-serif;font-size:1.1rem}@media (max-width:1200px){.col-md-4[data-v-6d12d6cc]{flex:0 0 33.33%;max-width:33.33%}}@media (max-width:992px){.col-md-4[data-v-6d12d6cc]{flex:0 0 50%;max-width:50%}}@media (max-width:768px){.col-md-4[data-v-6d12d6cc]{flex:0 0 100%;max-width:100%}h2[data-v-6d12d6cc]{font-size:1.5rem}.testimonial-text[data-v-6d12d6cc]{font-size:1rem}.testimonial-card[data-v-6d12d6cc]{margin-bottom:20px}}',""]),o.locals={},t.exports=o},349:function(t,e,r){"use strict";r.r(e);var o={name:"HeroSection"},n=(r(345),r(47)),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"hero-wrapper"},[e("div",{staticClass:"hero-image-container"},[e("img",{staticClass:"hero-image",attrs:{src:"/mtm6407-static-site-Adeeb199/Images/Sahil.jpg",alt:"Project Image"}})]),t._v(" "),e("div",{staticClass:"hero-content"},[e("h1",{staticClass:"display-6"},[t._v("Hi, I'm Sahil")]),t._v(" "),e("p",{staticClass:"lead f"},[t._v("Discover my journey in web development and digital design.")]),t._v(" "),e("hr",{staticClass:"my-4"}),t._v(" "),e("p",[t._v("Check out my latest projects, dive into my skills, and let's connect to create something amazing together.")]),t._v(" "),e("a",{staticClass:"btn view btn-lg",attrs:{href:"/projects",role:"button"}},[t._v("Explore My Portfolio")])])])}],!1,null,"5ec36f70",null);e.default=component.exports},350:function(t,e,r){"use strict";r.r(e);var o={name:"TestimonialsSection",props:{testimonials:Array}},n=(r(347),r(47)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"testimonials-section bg-light py-5"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"text-center mb-5 text-warning"},[t._v("What Our Clients Say")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.testimonials,(function(r){return e("div",{key:r.author,staticClass:"col-md-4 mb-4"},[e("div",{staticClass:"testimonial-card shadow rounded overflow-hidden position-relative"},[e("div",{staticClass:"card-body p-4"},[e("p",{staticClass:"testimonial-text text-center"},[t._v(t._s(r.text))]),t._v(" "),e("div",{staticClass:"author-info d-flex align-items-center mt-3"},[e("img",{staticClass:"avatar mr-3",attrs:{src:r.avatar,alt:"Author Avatar"}}),t._v(" "),e("p",{staticClass:"author-name font-weight-bold mb-0"},[t._v(t._s(r.author))])])])])])})),0)])])}),[],!1,null,"6d12d6cc",null);e.default=component.exports},376:function(t,e,r){"use strict";r.r(e);var o=r(349),n=r(336),d=r(335),c=r(350),l={components:{HeroSection:o.default,FeaturedProjects:n.default,SkillsSection:d.default,TestimonialsSection:c.default},data:function(){return{featuredProjects:[{id:1,title:"Personal Portfolio Website",description:"A visually dynamic portfolio website built with Vue.js and Tailwind CSS to showcase projects and skills.",image:"/mtm6407-static-site-Adeeb199/Images/portfolio-website.jpg",link:"#"},{id:2,title:"E-commerce Dashboard",description:"An admin dashboard for managing products, orders, and analytics built with Node.js, Express, and MongoDB.",image:"/mtm6407-static-site-Adeeb199/Images/ecommerce-dashboard.jpg",link:"#"},{id:3,title:"Social Media Analytics App",description:"A mobile app for tracking and analyzing social media engagement, developed using React Native and integrated with Twitter API.",image:"/mtm6407-static-site-Adeeb199/Images/social-media-analytics.jpg",link:"#"}],skills:[{name:"HTML",level:"Expert",percent:"85"},{name:"CSS",level:"Expert",percent:"80"},{name:"JavaScript",level:"Advanced",percent:"75"},{name:"Vue.js",level:"Advanced",percent:"90"}],testimonials:[{text:"Their expertise brought my project vision to life, and their dedication was truly impressive.",author:"Emily Johnson",avatar:"https://randomuser.me/api/portraits/women/25.jpg"},{text:"The team consistently delivered high-quality work, making the entire process smooth ",author:"Michael Lee",avatar:"https://randomuser.me/api/portraits/men/30.jpg"},{text:"Incredible attention to detail! They exceeded all my expectations and were fantastic to work with.",author:"Sophia Brown",avatar:"https://randomuser.me/api/portraits/women/40.jpg"}]}}},m=r(47),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"background"},[e("HeroSection"),t._v(" "),e("FeaturedProjects",{attrs:{featuredProjects:t.featuredProjects}}),t._v(" "),e("SkillsSection",{attrs:{skills:t.skills}}),t._v(" "),e("TestimonialsSection",{attrs:{testimonials:t.testimonials}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroSection:r(349).default,FeaturedProjects:r(336).default,SkillsSection:r(335).default,TestimonialsSection:r(350).default})}}]);