"use strict";
exports.id = 228;
exports.ids = [228];
exports.modules = {

/***/ 644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const About = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "orido_tm_section",
        id: "about",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "orido_tm_about",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "about_in",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "left",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "box",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "year",
                                    children: "3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "experience",
                                    children: "Years of Experience"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "name",
                                    children: "SAMSU"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "right",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "element",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "svg",
                                    src: "img/svg/element.svg",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "orido_tm_main_title",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "About Me"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Software developer with 3 years of experience in corporate software applications.Expertise in React JS, Next JS, React Native, Node JS. With a passion for crafting seamless digital experiences, I am dedicated to translating innovative ideas into efficient, user-friendly software solutions. I am always excited to collaborate with fellow developers, designers, or tech enthusiasts. Whether its brainstorming innovative solutions or diving deep into tech discussions, I am here for it!"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "short",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "orido_tm_boxed_button",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "img/cv/Samsudeen_SM_Resume.pdf",
                                        download: true,
                                        children: [
                                            "Download CV",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "svg",
                                                src: "img/svg/paper.svg",
                                                alt: ""
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/components/popup/Popup.js
var Popup = __webpack_require__(780);
;// CONCATENATED MODULE: ./src/components/popup/BlogPopup.js


const BlogPopup = ({ data , open , close  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Popup/* default */.Z, {
        open: open,
        close: close,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "news_popup_informations",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "image",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "img/thumbs/4-2.jpg",
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main",
                            "data-img-url": data.img,
                            style: {
                                backgroundImage: `url(${data.img})`
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "details",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "metabox",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "c-pointer",
                                                children: data.author
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: data.date
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "title",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: data.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text",
                    children: data && data.description && data.description.map((des, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: des
                        }, i))
                })
            ]
        })
    });
};
/* harmony default export */ const popup_BlogPopup = (BlogPopup);

;// CONCATENATED MODULE: ./src/components/Blog.js



const blogData = [
    {
        title: "Diversification of digital marketing stategies",
        date: "02 June, 2022",
        author: "John Smith",
        img: "img/news/1.jpg",
        description: [
            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Orido, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    },
    {
        title: "Diversification of digital marketing stategies",
        date: "02 June, 2022",
        author: "John Smith",
        img: "img/news/2.jpg",
        description: [
            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Orido, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    },
    {
        title: "Diversification of digital marketing stategies",
        date: "02 June, 2022",
        author: "John Smith",
        img: "img/news/3.jpg",
        description: [
            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Orido, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    },
    {
        title: "Diversification of digital marketing stategies",
        date: "02 June, 2022",
        author: "John Smith",
        img: "img/news/4.jpg",
        description: [
            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Orido, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    }, 
];
const Blog = ()=>{
    const { 0: activeData , 1: setActiveData  } = (0,external_react_.useState)({});
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const onClick = (blog)=>{
        setOpen(true);
        setActiveData(blog);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(popup_BlogPopup, {
                open: open,
                close: ()=>setOpen(false),
                data: activeData
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "orido_tm_section",
                id: "blog",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "orido_tm_news",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "orido_tm_main_title",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "From my",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "blog post"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "news_list",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: blogData.map((blog, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "list_inner",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "left",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "metabox",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "c-pointer",
                                                                                    onClick: ()=>onClick(blog),
                                                                                    children: blog.author
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: blog.date
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "title",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "c-pointer",
                                                                        onClick: ()=>onClick(blog),
                                                                        children: blog.title
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "orido_tm_simple_button",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: "line_effect c-pointer",
                                                                    onClick: ()=>onClick(blog),
                                                                    children: [
                                                                        "Read More",
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            className: "svg",
                                                                            src: "img/svg/top-arrow.svg",
                                                                            alt: ""
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "right",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "img/thumbs/24-20.jpg",
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "main",
                                                                "data-img-url": blog.img,
                                                                style: {
                                                                    backgroundImage: `url(${blog.img})`
                                                                }
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "orido_tm_full_link c-pointer",
                                                                onClick: ()=>onClick(blog)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "shape",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "svg",
                                                            src: "img/svg/Intersect.svg",
                                                            alt: ""
                                                        })
                                                    })
                                                ]
                                            })
                                        }, i))
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Blog = (Blog);


/***/ }),

/***/ 504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Contact = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "orido_tm_section",
        id: "contact",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "orido_tm_contact",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "infobox",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "video_button",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "anim_circle",
                                        src: "img/hero/1.jpg",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                            children: [
                                                `Let's`,
                                                " work together"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                `Let's`,
                                                " embark on this journey together, where your objectives become our mission, and our collaborative efforts pave the way for your business triumph."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "orido_tm_boxed_button",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "#",
                                        children: [
                                            "Say Hello ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "svg",
                                                src: "img/svg/send.svg",
                                                alt: ""
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "connect",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "left",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "name",
                                                        children: "Call:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "line_effect",
                                                            href: "tel:+917025963669",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: "+91 702-596-3669"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "name",
                                                        children: "Email:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "line_effect",
                                                            href: "mailto:chanchuthayal@gmail.com",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: "chanchuthayal@gmail.com"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "right",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "orido_tm_follow",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Follow me:"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://www.linkedin.com/in/samsudeen-sm-9b73a7183/",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "svg",
                                                                src: "img/svg/social/linkedin.svg",
                                                                alt: ""
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://github.com/shamsudeen123",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "svg",
                                                                src: "img/svg/social/github.svg",
                                                                alt: ""
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://www.instagram.com/c.h.a.n.c.h.u/",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "svg",
                                                                src: "img/svg/social/instagarm.svg",
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "element",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "svg",
                        src: "img/svg/elements.svg",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "element2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "svg",
                        src: "img/svg/element-2.svg",
                        alt: ""
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ExpertAreas)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(917);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(882);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
;// CONCATENATED MODULE: ./src/components/Counter.js



const Counter = ({ end , decimals  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
        end: end ? end : 100,
        duration: 3,
        decimals: decimals ? decimals : 0,
        children: ({ countUpRef , start  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                onChange: start,
                delayedCall: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "tonni_tm_counter",
                    "data-from": "0",
                    "data-to": end,
                    ref: countUpRef,
                    children: "count"
                })
            })
    });
};
/* harmony default export */ const components_Counter = (Counter);

;// CONCATENATED MODULE: ./src/components/ExpertAreas.js




const counts = [
    {
        name: "Framework Used",
        value: 6
    },
    {
        name: "Packages Used",
        value: 40
    },
    {
        name: "Corporate Projects",
        value: 7
    },
    {
        name: "Own Projects",
        value: 4
    }, 
];
const skills = [
    {
        name: "React JS",
        value: "",
        icon: "img/svg/reactjs.svg"
    },
    {
        name: "Next JS",
        value: "",
        icon: "img/svg/nextjs.svg"
    },
    {
        name: "React Native",
        value: "",
        icon: "img/svg/reactnative.svg"
    },
    {
        name: "Node JS",
        value: "",
        icon: "img/svg/nodejs.svg"
    },
    {
        name: "Express JS",
        value: "",
        icon: "img/svg/express.svg"
    },
    {
        name: "My SQL",
        value: "",
        icon: "img/svg/mysql.svg"
    }
];
const experiences = [
    {
        company: "Apps Team Technologies",
        designation: "Senior Software Developer",
        time: "2022 - 2023"
    },
    {
        company: "Emproto Technologies",
        designation: "Software Developer",
        time: "2021 - 2022"
    }, 
];
const educations = [
    {
        institution: "JSpider Bangalore",
        certificate: "Java full stack development",
        time: "2020 - 2021"
    },
    {
        institution: "Sree Devi College",
        certificate: "Bachelor of Computer Application",
        time: "2016 - 2019"
    },
    {
        institution: "Dhakeerath EMS",
        certificate: "PUC",
        time: "2014 - 2016"
    },
    {
        institution: "KS Abdullah EMS",
        certificate: "SSC",
        time: "2002 - 2014"
    }, 
];
const ExpertAreas = ()=>{
    const { 0: activeTab , 1: setActiveTab  } = (0,external_react_.useState)(1);
    const activeContentTab = (value)=>activeTab == value ? "current" : "";
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* filter_hashtag */.u7)();
    }, [
        activeTab
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "orido_tm_section",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "orido_tm_informations",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "informations_inner",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "orido_tm_main_title",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        "My expert",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        "areas"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "With a deep understanding of React.js, I specialize in crafting dynamic and interactive user interfaces. Proficient in leveraging Reacts component-based architecture and state management for seamless front-end development."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "As a Next.js enthusiast, I harness the power of server-side rendering and static site generation to create blazing-fast, SEO-friendly web applications. Skilled in optimizing performance and building scalable projects using Next.js."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "I excel in developing cross-platform mobile applications using React Native, ensuring a native-like experience across iOS and Android platforms. Well-versed in creating efficient, visually appealing mobile solutions."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "With Node.js, I wield the ability to build robust, scalable back-end solutions. Leveraging its asynchronous nature, I design and implement APIs, handle data, and ensure seamless communication between the front and back end."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "right",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "filter",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: `c-pointer ${activeContentTab(1)}`,
                                                                onClick: ()=>setActiveTab(1),
                                                                "data-tab": "tab_1",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Skills"
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "svg",
                                                                        src: "img/svg/top-arrow.svg",
                                                                        alt: ""
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: `c-pointer ${activeContentTab(2)}`,
                                                                onClick: ()=>setActiveTab(2),
                                                                "data-tab": "tab_2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Experience"
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "svg",
                                                                        src: "img/svg/top-arrow.svg",
                                                                        alt: ""
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: `c-pointer ${activeContentTab(3)}`,
                                                                onClick: ()=>setActiveTab(3),
                                                                "data-tab": "tab_3",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Education"
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "svg",
                                                                        src: "img/svg/top-arrow.svg",
                                                                        alt: ""
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "ccc"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    id: "tab_1",
                                                    className: `wrapper ${activeContentTab(1)}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "skillbox",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                            children: skills.map((skill, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "list_inner",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "icon",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "in",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        className: "svg",
                                                                                        src: skill.icon,
                                                                                        alt: ""
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: "name",
                                                                                children: skill.name
                                                                            })
                                                                        ]
                                                                    })
                                                                }, i))
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    id: "tab_2",
                                                    className: `wrapper ${activeContentTab(2)}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "timelinebox",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                            children: experiences.map((experience, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "list_inner",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "time",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "year",
                                                                                        children: experience.time
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "company",
                                                                                        children: experience.company
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "job",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: experience.designation
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }, i))
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    id: "tab_3",
                                                    className: `wrapper ${activeContentTab(3)}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "timelinebox",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                            children: educations.map((education, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "list_inner",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "time",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "year",
                                                                                        children: education.time
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "company",
                                                                                        children: education.institution
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "job",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: education.certificate
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }, i))
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "orido_tm_section",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "orido_tm_counter",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "counter_list",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: counts.map((count, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "list_inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Counter, {
                                                        end: count.value
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "title",
                                                    children: count.name
                                                })
                                            ]
                                        })
                                    }, i))
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_ExpertAreas = (ExpertAreas);


/***/ }),

/***/ 943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Feedback = ({ dark  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "orido_tm_section",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "orido_tm_testimonials",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "orido_tm_main_title",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    "Award Winning and",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Achiements"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "testimonials_in",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `img/hero/welcome.jpg`,
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "\u201CReceived Lime Light Award from Bibin John CEO of Apps Team Technologies. This journey has been a collaborative masterpiece of code, innovation and team work. From late-night debugging  session to aha moments of breakthrough, every line of code tells a story of resilience and creativity.\u201D"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "details",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "name",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "LIME LIGHT AWARD"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "job",
                                                children: "Apps Team Technologies"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feedback);


/***/ }),

/***/ 791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Home = ({ dark  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "orido_tm_hero orido_tm_section",
        id: "home",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "content",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "details",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "short margin-top-120",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                            children: [
                                                "Samsudeen SM ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "svg",
                                                    src: "img/svg/hi.svg",
                                                    alt: ""
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "job",
                                            children: "Software Developer"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Welcome to my portfolio, I am a software Developer based in India. I specialize in crafting cutting-edge solutions through code, transforming ideas into robust, user-centric software. With a passion for technology and a drive for excellence, I bring to life intuitive applications that solve real-world problems. Explore my portfolio to witness the seamless fusion of creativity and technical expertise, exemplifying my commitment to delivering high-quality, impactful software solutions. Join me on a journey through a collection of projects that showcase my dedication to building tomorrows technology today."
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "buttons",
                                    style: {
                                        marhinTop: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "orido_tm_boxed_button",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "anchor",
                                                href: "#contact",
                                                children: [
                                                    "Say Hello",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "svg",
                                                        src: "img/svg/send.svg",
                                                        alt: ""
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "orido_tm_simple_button",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "line_effect anchor",
                                                href: "#portfolio",
                                                children: [
                                                    "My Works",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "svg",
                                                        src: "img/svg/top-arrow.svg",
                                                        alt: ""
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "orido_tm_follow",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Follow me:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://www.linkedin.com/in/samsudeen-sm-9b73a7183/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "svg",
                                                src: "img/svg/social/linkedin.svg",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://github.com/shamsudeen123",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "svg",
                                                src: "img/svg/social/github.svg",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://www.instagram.com/c.h.a.n.c.h.u/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "svg",
                                                src: "img/svg/social/instagarm.svg",
                                                alt: ""
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "avatar large-screen-visible",
                style: {
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 50
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "img",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: `img/hero/${dark ? 2 : 1}.jpg`,
                        alt: "",
                        style: {
                            height: "80vh"
                        }
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(917);
// EXTERNAL MODULE: ./src/components/popup/Popup.js
var Popup = __webpack_require__(780);
;// CONCATENATED MODULE: ./src/components/popup/ServicePopup.js


const ServicePopup = ({ data , open , close  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Popup/* default */.Z, {
        open: open,
        close: close,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "service_popup_informations",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "image",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "img/thumbs/4-2.jpg",
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main",
                            "data-img-url": data.img,
                            style: {
                                backgroundImage: `url(${data.img})`
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "main_title",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: data.name
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "descriptions",
                    children: data && data.description && data.description.map((des, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: des
                        }, i))
                })
            ]
        })
    });
};
/* harmony default export */ const popup_ServicePopup = (ServicePopup);

;// CONCATENATED MODULE: ./src/components/Services.js




const serviceData = [
    {
        name: "UI/UX Design",
        img: "img/service/1.jpg",
        description: [
            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Orido, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    },
    {
        name: "User Research",
        img: "img/service/2.jpg",
        description: [
            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Orido, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    },
    {
        name: "UI Animation",
        img: "img/service/3.jpg",
        description: [
            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Orido, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    },
    {
        name: "Product Design",
        img: "img/service/4.jpg",
        description: [
            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Orido, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    }, 
];
const Services = ()=>{
    const { 0: current , 1: setCurrent  } = (0,external_react_.useState)(0);
    const { 0: activeData , 1: setActiveData  } = (0,external_react_.useState)({});
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* Servicehashtag */.Hd)();
    }, [
        current
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ServicePopup, {
                open: open,
                close: ()=>setOpen(false),
                data: activeData
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "orido_tm_section",
                id: "service",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "orido_tm_service",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "orido_tm_main_title",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "Services",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "I Provide"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "service_list",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: serviceData.map((service, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: current == i ? "current" : "",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "left",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "number",
                                                                    children: `0${i + 1}`
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "title",
                                                                    children: service.name
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "right",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "text",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        children: [
                                                                            service.description[0].substring(0, 105),
                                                                            "..."
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "arrow",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "svg",
                                                                        src: "img/svg/top-arrow.svg",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "orido_tm_full_link c-pointer",
                                                            onClick: ()=>{
                                                                setActiveData(service);
                                                                setOpen(true);
                                                                setCurrent(i);
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "popup_service_image",
                                                            src: "img/service/1.jpg",
                                                            alt: ""
                                                        })
                                                    ]
                                                })
                                            }, i))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ccc"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Services = (Services);


/***/ }),

/***/ 780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(332);


const Popup = ({ open , close , children  })=>{
    let domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(()=>{
        close();
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `orido_tm_modalbox ${open ? "opened" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "box_inner",
            ref: domNode,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "close",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "c-pointer",
                        onClick: ()=>close(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "icon-cancel"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "description_wrap",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


/***/ }),

/***/ 421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CopyRight = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "orido_tm_section",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "orido_tm_copyright",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "copyright_inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "img/logo/logo.png",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "copy",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "\xa9 ",
                                    new Date().getFullYear(),
                                    " by",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://themeforest.net/user/codeefly",
                                        target: "_blank",
                                        children: "Samsudeen SM."
                                    }),
                                    " ",
                                    "All Rights Reserved"
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyRight);


/***/ }),

/***/ 591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Header = ({ dark  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "orido_tm_header",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "header_in",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "logo",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `img/logo/${dark ? "light" : "logo"}.png`,
                            alt: ""
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "menu",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "anchor_nav",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "current",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#home",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#about",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#portfolio",
                                        children: "Portfolio"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#contact",
                                        children: "Contact"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "ccc"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "button",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://www.linkedin.com/in/samsudeen-sm-9b73a7183/",
                        target: "_blank",
                        children: "Linked In"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const MobileMenu = ()=>{
    const { 0: toggle , 1: setToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "orido_tm_mobile_menu",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mobile_menu_inner",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mobile_in",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "img/logo/logo.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "trigger",
                            onClick: ()=>setToggle(!toggle),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `hamburger hamburger--slider ${toggle ? "is-active" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "hamburger-box",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hamburger-inner"
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dropdown",
                style: {
                    display: toggle ? "block" : "none"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "dropdown_inner",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "anchor_nav",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "current",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#home",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#service",
                                    children: "Service"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#portfolio",
                                    children: "Portfolio"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#blog",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);


/***/ }),

/***/ 464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(917);



const ProgressBar = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_2__/* .scrollTop */ .SM);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "progressbar",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text",
                    style: {
                        bottom: "150.75px"
                    },
                    children: "To Top"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "line"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);


/***/ })

};
;