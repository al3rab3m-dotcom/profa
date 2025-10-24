(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-index-index"], {
        "0505": function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("a2b53"),
                a = i("11eb");
            for (var o in a)["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(o);
            i("c72a");
            var r = i("828b"),
                s = Object(r["a"])(a["default"], n["b"], n["c"], !1, null, "23a72621", null, !1, n["a"], void 0);
            e["default"] = s.exports
        },
        "06b6": function(t, e, i) {
            "use strict";
            i("6a54"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, i("64aa");
            var n = {
                props: {
                    length: {
                        type: [String, Number],
                        default: uni.$u.props.swiperIndicator.length
                    },
                    current: {
                        type: [String, Number],
                        default: uni.$u.props.swiperIndicator.current
                    },
                    indicatorActiveColor: {
                        type: String,
                        default: uni.$u.props.swiperIndicator.indicatorActiveColor
                    },
                    indicatorInactiveColor: {
                        type: String,
                        default: uni.$u.props.swiperIndicator.indicatorInactiveColor
                    },
                    indicatorMode: {
                        type: String,
                        default: uni.$u.props.swiperIndicator.indicatorMode
                    }
                }
            };
            e.default = n
        },
        "081f": function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return n
            })), i.d(e, "c", (function() {
                return a
            })), i.d(e, "a", (function() {}));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return t.show ? i("v-uni-view", {
                        staticClass: "u-loading-icon",
                        class: [t.vertical && "u-loading-icon--vertical"],
                        style: [t.$u.addStyle(t.customStyle)]
                    }, [t.webviewHide ? t._e() : i("v-uni-view", {
                        ref: "ani",
                        staticClass: "u-loading-icon__spinner",
                        class: ["u-loading-icon__spinner--" + t.mode],
                        style: {
                            color: t.color,
                            width: t.$u.addUnit(t.size),
                            height: t.$u.addUnit(t.size),
                            borderTopColor: t.color,
                            borderBottomColor: t.otherBorderColor,
                            borderLeftColor: t.otherBorderColor,
                            borderRightColor: t.otherBorderColor,
                            "animation-duration": t.duration + "ms",
                            "animation-timing-function": "semicircle" === t.mode || "circle" === t.mode ? t.timingFunction : ""
                        }
                    }, ["spinner" === t.mode ? t._l(t.array12, (function(t, e) {
                        return i("v-uni-view", {
                            key: e,
                            staticClass: "u-loading-icon__dot"
                        })
                    })) : t._e()], 2), t.text ? i("v-uni-text", {
                        staticClass: "u-loading-icon__text",
                        style: {
                            fontSize: t.$u.addUnit(t.textSize),
                            color: t.textColor
                        }
                    }, [t._v(t._s(t.text))]) : t._e()], 1) : t._e()
                },
                a = []
        },
        "09b5": function(t, e, i) {
            "use strict";
            i("6a54"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getAdList = e.adClick = void 0;
            var n = uni.$u.http;
            e.getAdList = function(t) {
                return n.get("/app/adInfo/list?siteType=".concat(t))
            };
            e.adClick = function(t) {
                return n.get("/app/adInfo/click?adId=".concat(t))
            }
        },
        "11eb": function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("bba2"),
                a = i.n(n);
            for (var o in n)["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return n[t]
                }))
            }(o);
            e["default"] = a.a
        },
        "13e5": function(t, e, i) {
            var n = i("e847");
            n.__esModule && (n = n.default), "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = i("967d").default;
            a("021ae09c", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "1f4b": function(t, e, i) {
            var n = i("1f52");
            n.__esModule && (n = n.default), "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = i("967d").default;
            a("7c59dc02", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "1f52": function(t, e, i) {
            var n = i("c86c");
            e = n(!1), e.push([t.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */.home[data-v-0f883db8]{padding:calc(0px + %?150?%) %?32?% %?128?% %?32?%;position:relative;overflow-x:hidden;min-height:100vh}.home-header[data-v-0f883db8]{width:100%;height:%?150?%;padding:0 %?32?%;background-color:#0f0f0f;position:fixed;top:0;left:0;z-index:99}.home-header__left .text[data-v-0f883db8]{padding:0 %?24?%;font-size:%?40?%;font-weight:600}.home-header__icon[data-v-0f883db8]{margin-left:%?32?%}.home-banner[data-v-0f883db8]{position:relative}.home-banner__logo[data-v-0f883db8]{width:%?160?%;height:%?60?%;background:url(/static/mata-nft.png) no-repeat 50%/contain;position:absolute;left:%?30?%;top:%?10?%;z-index:1}.home-mod[data-v-0f883db8]{margin-top:%?48?%}.home-mod__item[data-v-0f883db8]{flex:0 0 calc(33.33% - %?10?%);min-height:%?172?%;border:%?2?% solid #333;border-radius:%?16?%;padding:%?24?%}.home-mod__item .label[data-v-0f883db8],\n.home-mod__item .unit[data-v-0f883db8]{color:silver;font-size:%?24?%}.home-mod__item .value[data-v-0f883db8]{font-size:%?32?%}.home-mod__item .value.small[data-v-0f883db8]{font-size:%?30?%}.home-list[data-v-0f883db8]{margin-top:%?48?%}.home-list__hd[data-v-0f883db8]{padding-bottom:%?16?%;line-height:1}.home-list__item[data-v-0f883db8]{display:flex;align-items:center;height:%?98?%}.home-list__item .coin[data-v-0f883db8]{border-radius:45px;overflow:hidden}.home-list__item .name[data-v-0f883db8]{padding:0 %?32?%;flex:0 0 45%}.home-list__item .name .sub-name[data-v-0f883db8]{color:silver;font-size:%?24?%}.home-list__item .percent[data-v-0f883db8]{flex:1;text-align:right}.tip-box__bd[data-v-0f883db8]{padding-left:0;padding-top:%?16?%}.tip-box__bd[data-v-0f883db8] .bold{color:#fff}html[lang="ar"] .tip-box__bd[data-v-0f883db8]{padding-right:0}', ""]), t.exports = e
        },
        "260e": function(t, e, i) {
            "use strict";
            var n = i("1f4b"),
                a = i.n(n);
            a.a
        },
        "28e2": function(t, e, i) {
            "use strict";
            i("6a54");
            var n = i("f5bd").default;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(i("fcf3"));
            i("5c47"), i("0506");
            var o = n(i("8981")),
                r = {
                    name: "u-swiper",
                    mixins: [uni.$u.mpMixin, uni.$u.mixin, o.default],
                    data: function() {
                        return {
                            currentIndex: 0
                        }
                    },
                    watch: {
                        current: function(t, e) {
                            t !== e && (this.currentIndex = t)
                        }
                    },
                    computed: {
                        itemStyle: function() {
                            var t = this;
                            return function(e) {
                                var i = {};
                                return t.nextMargin && t.previousMargin && (i.borderRadius = uni.$u.addUnit(t.radius), e !== t.currentIndex && (i.transform = "scale(0.92)")), i
                            }
                        }
                    },
                    methods: {
                        getItemType: function(t) {
                            return "string" === typeof t ? uni.$u.test.video(this.getSource(t)) ? "video" : "image" : "object" === (0, a.default)(t) && this.keyName ? t.type ? "image" === t.type ? "image" : "video" === t.type ? "video" : "image" : uni.$u.test.video(this.getSource(t)) ? "video" : "image" : void 0
                        },
                        getSource: function(t) {
                            return "string" === typeof t ? t : "object" === (0, a.default)(t) && this.keyName ? t[this.keyName] : (uni.$u.error("请按格式传递列表参数"), "")
                        },
                        change: function(t) {
                            var e = t.detail.current;
                            this.pauseVideo(this.currentIndex), this.currentIndex = e, this.$emit("change", t.detail)
                        },
                        pauseVideo: function(t) {
                            var e = this.getSource(this.list[t]);
                            if (uni.$u.test.video(e)) {
                                var i = uni.createVideoContext("video-".concat(t), this);
                                i.pause()
                            }
                        },
                        getPoster: function(t) {
                            return "object" === (0, a.default)(t) && t.poster ? t.poster : ""
                        },
                        clickHandler: function(t) {
                            this.$emit("click", t)
                        }
                    }
                };
            e.default = r
        },
        3674: function(t, e, i) {
            "use strict";
            var n = i("b072"),
                a = i.n(n);
            a.a
        },
        "4eb6": function(t, e, i) {
            "use strict";
            var n = i("13e5"),
                a = i.n(n);
            a.a
        },
        "747d": function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("081f"),
                a = i("b5a3");
            for (var o in a)["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(o);
            i("3674");
            var r = i("828b"),
                s = Object(r["a"])(a["default"], n["b"], n["c"], !1, null, "26861ad0", null, !1, n["a"], void 0);
            e["default"] = s.exports
        },
        8981: function(t, e, i) {
            "use strict";
            i("6a54"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, i("64aa");
            var n = {
                props: {
                    list: {
                        type: Array,
                        default: uni.$u.props.swiper.list
                    },
                    indicator: {
                        type: Boolean,
                        default: uni.$u.props.swiper.indicator
                    },
                    indicatorActiveColor: {
                        type: String,
                        default: uni.$u.props.swiper.indicatorActiveColor
                    },
                    indicatorInactiveColor: {
                        type: String,
                        default: uni.$u.props.swiper.indicatorInactiveColor
                    },
                    indicatorStyle: {
                        type: [String, Object],
                        default: uni.$u.props.swiper.indicatorStyle
                    },
                    indicatorMode: {
                        type: String,
                        default: uni.$u.props.swiper.indicatorMode
                    },
                    autoplay: {
                        type: Boolean,
                        default: uni.$u.props.swiper.autoplay
                    },
                    current: {
                        type: [String, Number],
                        default: uni.$u.props.swiper.current
                    },
                    currentItemId: {
                        type: String,
                        default: uni.$u.props.swiper.currentItemId
                    },
                    interval: {
                        type: [String, Number],
                        default: uni.$u.props.swiper.interval
                    },
                    duration: {
                        type: [String, Number],
                        default: uni.$u.props.swiper.duration
                    },
                    circular: {
                        type: Boolean,
                        default: uni.$u.props.swiper.circular
                    },
                    previousMargin: {
                        type: [String, Number],
                        default: uni.$u.props.swiper.previousMargin
                    },
                    nextMargin: {
                        type: [String, Number],
                        default: uni.$u.props.swiper.nextMargin
                    },
                    acceleration: {
                        type: Boolean,
                        default: uni.$u.props.swiper.acceleration
                    },
                    displayMultipleItems: {
                        type: Number,
                        default: uni.$u.props.swiper.displayMultipleItems
                    },
                    easingFunction: {
                        type: String,
                        default: uni.$u.props.swiper.easingFunction
                    },
                    keyName: {
                        type: String,
                        default: uni.$u.props.swiper.keyName
                    },
                    imgMode: {
                        type: String,
                        default: uni.$u.props.swiper.imgMode
                    },
                    height: {
                        type: [String, Number],
                        default: uni.$u.props.swiper.height
                    },
                    bgColor: {
                        type: String,
                        default: uni.$u.props.swiper.bgColor
                    },
                    radius: {
                        type: [String, Number],
                        default: uni.$u.props.swiper.radius
                    },
                    loading: {
                        type: Boolean,
                        default: uni.$u.props.swiper.loading
                    },
                    showTitle: {
                        type: Boolean,
                        default: uni.$u.props.swiper.showTitle
                    }
                }
            };
            e.default = n
        },
        "8c9c": function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("9645"),
                a = i("df67");
            for (var o in a)["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(o);
            i("260e");
            var r = i("828b"),
                s = Object(r["a"])(a["default"], n["b"], n["c"], !1, null, "0f883db8", null, !1, n["a"], void 0);
            e["default"] = s.exports
        },
        9645: function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return a
            })), i.d(e, "c", (function() {
                return o
            })), i.d(e, "a", (function() {
                return n
            }));
            var n = {
                    uIcon: i("2821").default,
                    uSwiper: i("dda6").default
                },
                a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("v-uni-view", {
                        staticClass: "home container"
                    }, [i("v-uni-view", {
                        staticClass: "home-header flex-center__sb"
                    }, [i("v-uni-view", {
                        staticClass: "home-header__left flex-center__center"
                    }, [i("u-icon", {
                        attrs: {
                            name: "/static/mata-logo.png",
                            size: "80rpx"
                        }
                    }), i("v-uni-text", {
                        staticClass: "text"
                    }, [t._v("ATANFT")])], 1), i("v-uni-view", {
                        staticClass: "home-header__right flex-center__center"
                    }, [i("u-icon", {
                        staticClass: "home-header__icon",
                        attrs: {
                            name: "/static/lang/" + t.lang + "@2x.png",
                            size: "48rpx",
                            height: "36rpx"
                        },
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.handleViewRoute("/language/language", 1)
                            }
                        }
                    }), i("customer-btn", {
                        ref: "customerRef",
                        staticClass: "home-header__icon"
                    }), i("u-icon", {
                        staticClass: "home-header__icon",
                        attrs: {
                            name: "/static/icon-notice.png",
                            size: "60rpx"
                        },
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.handleViewRoute("/notice/notice")
                            }
                        }
                    })], 1)], 1), t.bannerList.length ? i("v-uni-view", {
                        staticClass: "home-banner"
                    }, [i("u-swiper", {
                        attrs: {
                            bgColor: "#1a1a1a",
                            list: t.bannerList,
                            keyName: "picUrl",
                            indicator: !0,
                            indicatorMode: "dot",
                            radius: "10",
                            circular: !0,
                            height: "293rpx"
                        },
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e),
                                    function(e) {
                                        return t.handleViewAd(e, "bannerList")
                                    }.apply(void 0, arguments)
                            }
                        }
                    })], 1) : t._e(), i("v-uni-view", {
                        staticClass: "home-mod flex-center__sb"
                    }, [i("v-uni-view", {
                        staticClass: "home-mod__item",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.handleViewRoute("/wallet/wallet")
                            }
                        }
                    }, [i("v-uni-view", {
                        staticClass: "label"
                    }, [t._v(t._s(t.$t("index.wallet")))]), i("v-uni-view", {
                        staticClass: "value"
                    }, [t._v(t._s(t.useAmountFormat(t.walletInfo.usdtAmount)))]), i("v-uni-view", {
                        staticClass: "unit"
                    }, [t._v("USDT")])], 1), i("v-uni-view", {
                        staticClass: "home-mod__item",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.handleViewRoute("/moc/moc")
                            }
                        }
                    }, [i("v-uni-view", {
                        staticClass: "label"
                    }, [t._v(t._s(t.$t("moc.center")))]), i("v-uni-view", {
                        staticClass: "value"
                    }, [t._v(t._s(t.useAmountFormat(t.info.platformCoinCount)))]), i("v-uni-view", {
                        staticClass: "unit"
                    }, [t._v("MTC")])], 1), i("v-uni-view", {
                        staticClass: "home-mod__item",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.handleViewRoute("/my/order")
                            }
                        }
                    }, [i("v-uni-view", {
                        staticClass: "label"
                    }, [t._v(t._s(t.$t("index.myNft")))]), i("v-uni-view", {
                        staticClass: "value"
                    }, [t._v(t._s(t.useAmountFormat(t.orderInfo.nftCount)))]), i("v-uni-view", {
                        staticClass: "unit"
                    }, [t._v("NFT")])], 1)], 1), t.platformCoinList.length ? i("v-uni-view", {
                        staticClass: "home-list"
                    }, [i("v-uni-view", {
                        staticClass: "home-list__hd"
                    }, [t._v(t._s(t.$t("home.mocmarket")))]), t._l(t.platformCoinList, (function(e) {
                        return i("v-uni-view", {
                            key: e.name,
                            staticClass: "home-list__item",
                            on: {
                                click: function(e) {
                                    arguments[0] = e = t.$handleEvent(e), t.handleViewRoute("/moc/moc")
                                }
                            }
                        }, [i("u-icon", {
                            staticClass: "coin",
                            attrs: {
                                name: "/static/icon-mtc.png",
                                size: "60rpx"
                            }
                        }), i("v-uni-view", {
                            staticClass: "name"
                        }, [t._v(t._s(e.name)), i("v-uni-text", {
                            staticClass: "sub-name"
                        }, [t._v("/" + t._s(e.name) + " Coin")])], 1), i("v-uni-view", {
                            staticClass: "price"
                        }, [t._v("$" + t._s(t.useAmountFormat(e.amount)))]), i("v-uni-view", {
                            staticClass: "percent"
                        }, [i("v-uni-text", {
                            staticClass: "abs",
                            class: e.todayPercent > 0 ? "uni-color-success" : "uni-color-error"
                        }, [t._v(t._s(e.todayPercent) + "%")])], 1)], 1)
                    }))], 2) : t._e(), t.thirdCoinList.length ? i("v-uni-view", {
                        staticClass: "home-list"
                    }, [i("v-uni-view", {
                        staticClass: "home-list__hd"
                    }, [t._v(t._s(t.$t("home.market")))]), t._l(t.thirdCoinList, (function(e) {
                        return i("v-uni-view", {
                            key: e.name,
                            staticClass: "home-list__item"
                        }, [i("u-icon", {
                            staticClass: "coin",
                            attrs: {
                                name: "/static/coin/" + e.name + ".png",
                                size: "60rpx"
                            }
                        }), i("v-uni-view", {
                            staticClass: "name"
                        }, [t._v(t._s(e.name)), i("v-uni-text", {
                            staticClass: "sub-name"
                        }, [t._v("/" + t._s(e.subName))])], 1), i("v-uni-view", {
                            staticClass: "price"
                        }, [t._v("$" + t._s(e.price))]), i("v-uni-view", {
                            staticClass: "percent"
                        }, [i("v-uni-text", {
                            staticClass: "abs",
                            class: e.percent > 0 ? "uni-color-success" : "uni-color-error"
                        }, [t._v(t._s(e.percent) + "%")])], 1)], 1)
                    }))], 2) : t._e(), i("v-uni-view", {
                        staticClass: "home-tip tip-box"
                    }, [i("v-uni-view", {
                        staticClass: "tip-box__hd flex-center"
                    }, [i("u-icon", {
                        attrs: {
                            name: "/static/icon-tip.png",
                            size: "48rpx"
                        }
                    }), i("v-uni-text", {
                        staticClass: "tip-box__hd--text"
                    }, [t._v(t._s(t.$t("mata.title")))])], 1), i("v-uni-view", {
                        staticClass: "tip-box__bd"
                    }, [t._v(t._s(t.$t("mata.intro1")))]), i("v-uni-view", {
                        staticClass: "tip-box__bd"
                    }, [t._v(t._s(t.$t("mata.intro2")))]), i("v-uni-view", {
                        staticClass: "tip-box__bd",
                        domProps: {
                            innerHTML: t._s(t.$t("mata.intro3"))
                        }
                    }), i("v-uni-view", {
                        staticClass: "tip-box__bd",
                        domProps: {
                            innerHTML: t._s(t.$t("mata.intro4"))
                        }
                    })], 1), i("lottie-popup", {
                        ref: "lottiePopup",
                        attrs: {
                            "animation-type": 2
                        }
                    })], 1)
                },
                o = []
        },
        a2b53: function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return n
            })), i.d(e, "c", (function() {
                return a
            })), i.d(e, "a", (function() {}));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("v-uni-view", {
                        staticClass: "u-swiper-indicator"
                    }, ["line" === t.indicatorMode ? i("v-uni-view", {
                        staticClass: "u-swiper-indicator__wrapper",
                        class: ["u-swiper-indicator__wrapper--" + t.indicatorMode],
                        style: {
                            width: t.$u.addUnit(t.lineWidth * t.length),
                            backgroundColor: t.indicatorInactiveColor
                        }
                    }, [i("v-uni-view", {
                        staticClass: "u-swiper-indicator__wrapper--line__bar",
                        style: [t.lineStyle]
                    })], 1) : t._e(), "dot" === t.indicatorMode ? i("v-uni-view", {
                        staticClass: "u-swiper-indicator__wrapper"
                    }, t._l(t.length, (function(e, n) {
                        return i("v-uni-view", {
                            key: n,
                            staticClass: "u-swiper-indicator__wrapper__dot",
                            class: [n === t.current && "u-swiper-indicator__wrapper__dot--active"],
                            style: [t.dotStyle(n)]
                        })
                    })), 1) : t._e()], 1)
                },
                a = []
        },
        a2e3: function(t, e, i) {
            "use strict";
            i("6a54"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getOrderList = e.getOrderInfo = e.getOrderAmount = e.cancelContinuity = void 0;
            var n = uni.$u.http;
            e.getOrderList = function(t) {
                return n.get("/app/product/orderList", {
                    params: t
                })
            };
            e.getOrderInfo = function(t) {
                return n.get("/app/product/orderInfo?walletId=" + t)
            };
            e.getOrderAmount = function() {
                return n.get("/app/product/ingAmount")
            };
            e.cancelContinuity = function(t) {
                return n.post("/app/product/isContinuity", t)
            }
        },
        a6c1: function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return a
            })), i.d(e, "c", (function() {
                return o
            })), i.d(e, "a", (function() {
                return n
            }));
            var n = {
                    uLoadingIcon: i("747d").default,
                    uSwiperIndicator: i("0505").default
                },
                a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("v-uni-view", {
                        staticClass: "u-swiper",
                        style: {
                            backgroundColor: t.bgColor,
                            height: t.$u.addUnit(t.height),
                            borderRadius: t.$u.addUnit(t.radius)
                        }
                    }, [t.loading ? i("v-uni-view", {
                        staticClass: "u-swiper__loading"
                    }, [i("u-loading-icon", {
                        attrs: {
                            mode: "circle"
                        }
                    })], 1) : i("v-uni-swiper", {
                        staticClass: "u-swiper__wrapper",
                        style: {
                            height: t.$u.addUnit(t.height)
                        },
                        attrs: {
                            circular: t.circular,
                            interval: t.interval,
                            duration: t.duration,
                            autoplay: t.autoplay,
                            current: t.current,
                            currentItemId: t.currentItemId,
                            previousMargin: t.$u.addUnit(t.previousMargin),
                            nextMargin: t.$u.addUnit(t.nextMargin),
                            acceleration: t.acceleration,
                            displayMultipleItems: t.displayMultipleItems,
                            easingFunction: t.easingFunction
                        },
                        on: {
                            change: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.change.apply(void 0, arguments)
                            }
                        }
                    }, t._l(t.list, (function(e, n) {
                        return i("v-uni-swiper-item", {
                            key: n,
                            staticClass: "u-swiper__wrapper__item"
                        }, [i("v-uni-view", {
                            staticClass: "u-swiper__wrapper__item__wrapper",
                            style: [t.itemStyle(n)]
                        }, ["image" === t.getItemType(e) ? i("v-uni-image", {
                            staticClass: "u-swiper__wrapper__item__wrapper__image",
                            style: {
                                height: t.$u.addUnit(t.height),
                                borderRadius: t.$u.addUnit(t.radius)
                            },
                            attrs: {
                                src: t.getSource(e),
                                mode: t.imgMode
                            },
                            on: {
                                click: function(e) {
                                    arguments[0] = e = t.$handleEvent(e), t.clickHandler(n)
                                }
                            }
                        }) : t._e(), "video" === t.getItemType(e) ? i("v-uni-video", {
                            staticClass: "u-swiper__wrapper__item__wrapper__video",
                            style: {
                                height: t.$u.addUnit(t.height)
                            },
                            attrs: {
                                id: "video-" + n,
                                "enable-progress-gesture": !1,
                                src: t.getSource(e),
                                poster: t.getPoster(e),
                                title: t.showTitle && t.$u.test.object(e) && e.title ? e.title : "",
                                controls: !0
                            },
                            on: {
                                click: function(e) {
                                    arguments[0] = e = t.$handleEvent(e), t.clickHandler(n)
                                }
                            }
                        }) : t._e(), t.showTitle && t.$u.test.object(e) && e.title && t.$u.test.image(t.getSource(e)) ? i("v-uni-text", {
                            staticClass: "u-swiper__wrapper__item__wrapper__title u-line-1"
                        }, [t._v(t._s(e.title))]) : t._e()], 1)], 1)
                    })), 1), i("v-uni-view", {
                        staticClass: "u-swiper__indicator",
                        style: [t.$u.addStyle(t.indicatorStyle)]
                    }, [t._t("indicator", [t.loading || !t.indicator || t.showTitle ? t._e() : i("u-swiper-indicator", {
                        attrs: {
                            indicatorActiveColor: t.indicatorActiveColor,
                            indicatorInactiveColor: t.indicatorInactiveColor,
                            length: t.list.length,
                            current: t.currentIndex,
                            indicatorMode: t.indicatorMode
                        }
                    })])], 2)], 1)
                },
                o = []
        },
        b072: function(t, e, i) {
            var n = i("e625");
            n.__esModule && (n = n.default), "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = i("967d").default;
            a("4afc15e0", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        b5a3: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("e4d1"),
                a = i.n(n);
            for (var o in n)["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return n[t]
                }))
            }(o);
            e["default"] = a.a
        },
        bba2: function(t, e, i) {
            "use strict";
            i("6a54");
            var n = i("f5bd").default;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(i("06b6")),
                o = {
                    name: "u-swiper-indicator",
                    mixins: [uni.$u.mpMixin, uni.$u.mixin, a.default],
                    data: function() {
                        return {
                            lineWidth: 22
                        }
                    },
                    computed: {
                        lineStyle: function() {
                            var t = {};
                            return t.width = uni.$u.addUnit(this.lineWidth), t.transform = "translateX(".concat(uni.$u.addUnit(this.current * this.lineWidth), ")"), t.backgroundColor = this.indicatorActiveColor, t
                        },
                        dotStyle: function() {
                            var t = this;
                            return function(e) {
                                var i = {};
                                return i.backgroundColor = e === t.current ? t.indicatorActiveColor : t.indicatorInactiveColor, i
                            }
                        }
                    }
                };
            e.default = o
        },
        c27a: function(t, e, i) {
            var n = i("d73e");
            n.__esModule && (n = n.default), "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = i("967d").default;
            a("8068dfc8", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        c72a: function(t, e, i) {
            "use strict";
            var n = i("c27a"),
                a = i.n(n);
            a.a
        },
        d73e: function(t, e, i) {
            var n = i("c86c");
            e = n(!1), e.push([t.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */uni-view[data-v-23a72621], uni-scroll-view[data-v-23a72621], uni-swiper-item[data-v-23a72621]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-swiper-indicator__wrapper[data-v-23a72621]{display:flex;flex-direction:row}.u-swiper-indicator__wrapper--line[data-v-23a72621]{border-radius:100px;height:4px}.u-swiper-indicator__wrapper--line__bar[data-v-23a72621]{width:22px;height:4px;border-radius:100px;background-color:#fff;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-swiper-indicator__wrapper__dot[data-v-23a72621]{width:5px;height:5px;border-radius:100px;margin:0 4px}.u-swiper-indicator__wrapper__dot--active[data-v-23a72621]{width:12px}', ""]), t.exports = e
        },
        d782: function(t, e, i) {
            "use strict";
            (function(t) {
                i("6a54");
                var n = i("f5bd").default;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var a = n(i("b7c7")),
                    o = n(i("2634")),
                    r = n(i("2fdc")),
                    s = n(i("9b1b")),
                    d = i("d9c2"),
                    u = i("f0a8"),
                    c = i("2685"),
                    l = i("09b5"),
                    p = i("4c65"),
                    f = i("a2e3"),
                    v = i("8f59"),
                    m = i("b167"),
                    g = n(i("4581")),
                    _ = n(i("1f33")),
                    h = {
                        name: "Home",
                        components: {
                            customerBtn: g.default,
                            LottiePopup: _.default
                        },
                        data: function() {
                            return {
                                bannerList: [],
                                adLoading: !0,
                                bannerCurrent: 0,
                                siteType: 0,
                                info: {
                                    usdtTodayIncome: 0,
                                    platformCoinCount: 0,
                                    teamCount: 0
                                },
                                walletInfo: {
                                    usdtAmount: 0
                                },
                                orderInfo: {
                                    nftCount: 0
                                },
                                platformCoinList: [],
                                thirdCoinList: [],
                                timer: null
                            }
                        },
                        onLoad: function() {
                            this.getAd(0), this.init()
                        },
                        onShow: function() {
                            this.hasLogin && (this.handleRefreshToken(), this.getHomeWalletInfoData(), this.getWalletMtcInfo(), this.getHomeInfoData(0), this.getOrderData()), this.getHomeCoinData()
                        },
                        onHide: function() {
                            this.clear()
                        },
                        onUnload: function() {
                            this.clear()
                        },
                        computed: (0, s.default)({}, (0, v.mapGetters)(["dictList", "hasLogin", "loginTime", "tokenExpireTimeSecond", "lang", "walletId", "walletPlatformCoinId"])),
                        methods: (0, s.default)((0, s.default)((0, s.default)({}, (0, v.mapMutations)(["setRefreshToken"])), (0, v.mapActions)(["setDictListByKey", "setMtcCoinCount"])), {}, {
                            useAmountFormat: m.useAmountFormat,
                            clear: function() {
                                clearInterval(this.timer), this.timer = null
                            },
                            handleRefreshToken: function() {
                                var e = this;
                                if (uni.getStorageSync("refreshToken") && this.tokenExpireTimeSecond) {
                                    var i = (new Date).getTime() - this.loginTime,
                                        n = Math.floor(i / 1e3);
                                    n && this.tokenExpireTimeSecond - n <= 1e3 ? (0, p.refreshToken)(uni.getStorageSync("refreshToken")).then((function(t) {
                                        0 === t.code && e.setRefreshToken(t.data)
                                    })) : t.log("刷新时间还没到")
                                }
                            },
                            init: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                                this.hasLogin && (this.getHomeInfoData(t), this.walletId && this.getWalletMtcInfo())
                            },
                            getOrderData: function() {
                                var t = this;
                                return (0, r.default)((0, o.default)().mark((function e() {
                                    var i, n;
                                    return (0, o.default)().wrap((function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, (0, f.getOrderInfo)(t.walletId);
                                            case 2:
                                                i = e.sent, n = i.data, t.orderInfo = (0, s.default)({}, n);
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            getHomeInfoData: function(t) {
                                var e = this;
                                return (0, r.default)((0, o.default)().mark((function i() {
                                    var n, a;
                                    return (0, o.default)().wrap((function(i) {
                                        while (1) switch (i.prev = i.next) {
                                            case 0:
                                                return t && e.$nextTick((function() {
                                                    e.$refs.lottiePopup.loadingVisible = !0
                                                })), i.next = 3, (0, u.getHomeInfo)();
                                            case 3:
                                                n = i.sent, a = n.data, e.info = (0, s.default)((0, s.default)({}, e.info), a), t && e.$nextTick((function() {
                                                    setTimeout((function() {
                                                        e.$refs.lottiePopup.loadingVisible = !1
                                                    }), 1e3)
                                                }));
                                            case 7:
                                            case "end":
                                                return i.stop()
                                        }
                                    }), i)
                                })))()
                            },
                            getHomeCoinData: function() {
                                var t = this;
                                return (0, r.default)((0, o.default)().mark((function e() {
                                    var i, n;
                                    return (0, o.default)().wrap((function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, (0, u.getHomeCoin)();
                                            case 2:
                                                i = e.sent, n = i.data, t.platformCoinList = (0, a.default)(n.platformCoinList), t.thirdCoinList = (0, a.default)(n.thirdCoinList);
                                            case 6:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            getHomeWalletInfoData: function() {
                                var t = this;
                                return (0, r.default)((0, o.default)().mark((function e() {
                                    var i, n;
                                    return (0, o.default)().wrap((function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, (0, u.getHomeWalletInfo)(t.walletId, t.walletPlatformCoinId);
                                            case 2:
                                                i = e.sent, n = i.data, t.info.platformCoinCount = n.platformCoinCount, t.walletInfo.usdtAmount = n.usdtAmount;
                                            case 6:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            getWalletMtcInfo: function() {
                                var t = this;
                                return (0, r.default)((0, o.default)().mark((function e() {
                                    var i, n;
                                    return (0, o.default)().wrap((function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, (0, c.getWalletMtcBase)(t.walletPlatformCoinId);
                                            case 2:
                                                i = e.sent, n = i.data, t.info.platformCoinCount = n ? n.count : 0, t.setMtcCoinCount(t.info.platformCoinCount);
                                            case 6:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            handleViewRoute: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                e || this.hasLogin ? uni.navigateTo({
                                    url: "/pages".concat(t)
                                }) : uni.navigateTo({
                                    url: "/pages/login/login"
                                })
                            },
                            getDict: function() {
                                var t = this;
                                (0, d.findByKeyList)({
                                    keyList: ["AD_STATUS"]
                                }).then((function(e) {
                                    0 === e.code && t.setDictListByKey(e.data)
                                }))
                            },
                            getAd: function(t) {
                                var e = this;
                                this.siteType = t, 0 === t && (this.adLoading = !0), (0, l.getAdList)(t).then((function(i) {
                                    0 === i.code && (e.bannerList = i.data, 0 === t && (e.adLoading = !1))
                                }))
                            },
                            handleViewAd: function(t, e) {
                                if (this.hasLogin) {
                                    var i = this[e][t];
                                    1 == i.routeType ? uni.navigateTo({
                                        url: "/pages/out-link/out-link?title=" + i.name + "&link=" + encodeURIComponent(i.route)
                                    }) : i.route && uni.navigateTo({
                                        url: i.route
                                    })
                                } else uni.navigateTo({
                                    url: "/pages/login/login"
                                })
                            }
                        })
                    };
                e.default = h
            }).call(this, i("ba7c")["default"])
        },
        dda6: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("a6c1"),
                a = i("e279");
            for (var o in a)["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(o);
            i("4eb6");
            var r = i("828b"),
                s = Object(r["a"])(a["default"], n["b"], n["c"], !1, null, "d4342702", null, !1, n["a"], void 0);
            e["default"] = s.exports
        },
        df67: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("d782"),
                a = i.n(n);
            for (var o in n)["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return n[t]
                }))
            }(o);
            e["default"] = a.a
        },
        e279: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("28e2"),
                a = i.n(n);
            for (var o in n)["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return n[t]
                }))
            }(o);
            e["default"] = a.a
        },
        e4d1: function(t, e, i) {
            "use strict";
            i("6a54");
            var n = i("f5bd").default;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, i("08eb"), i("18f7");
            var a = n(i("fd4c")),
                o = {
                    name: "u-loading-icon",
                    mixins: [uni.$u.mpMixin, uni.$u.mixin, a.default],
                    data: function() {
                        return {
                            array12: Array.from({
                                length: 12
                            }),
                            aniAngel: 360,
                            webviewHide: !1,
                            loading: !1
                        }
                    },
                    computed: {
                        otherBorderColor: function() {
                            var t = uni.$u.colorGradient(this.color, "#ffffff", 100)[80];
                            return "circle" === this.mode ? this.inactiveColor ? this.inactiveColor : t : "transparent"
                        }
                    },
                    watch: {
                        show: function(t) {}
                    },
                    mounted: function() {
                        this.init()
                    },
                    methods: {
                        init: function() {
                            setTimeout((function() {}), 20)
                        },
                        addEventListenerToWebview: function() {
                            var t = this,
                                e = getCurrentPages(),
                                i = e[e.length - 1],
                                n = i.$getAppWebview();
                            n.addEventListener("hide", (function() {
                                t.webviewHide = !0
                            })), n.addEventListener("show", (function() {
                                t.webviewHide = !1
                            }))
                        }
                    }
                };
            e.default = o
        },
        e625: function(t, e, i) {
            var n = i("c86c");
            e = n(!1), e.push([t.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */uni-view[data-v-26861ad0], uni-scroll-view[data-v-26861ad0], uni-swiper-item[data-v-26861ad0]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-loading-icon[data-v-26861ad0]{flex-direction:row;align-items:center;justify-content:center;color:#c8c9cc}.u-loading-icon__text[data-v-26861ad0]{margin-left:4px;color:#606266;font-size:14px;line-height:20px}.u-loading-icon__spinner[data-v-26861ad0]{width:30px;height:30px;position:relative;box-sizing:border-box;max-width:100%;max-height:100%;-webkit-animation:u-rotate-data-v-26861ad0 1s linear infinite;animation:u-rotate-data-v-26861ad0 1s linear infinite}.u-loading-icon__spinner--semicircle[data-v-26861ad0]{border-width:2px;border-color:transparent;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-style:solid}.u-loading-icon__spinner--circle[data-v-26861ad0]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-width:2px;border-top-color:#e5e5e5;border-right-color:#e5e5e5;border-bottom-color:#e5e5e5;border-left-color:#e5e5e5;border-style:solid}.u-loading-icon--vertical[data-v-26861ad0]{flex-direction:column}[data-v-26861ad0]:host{font-size:0;line-height:1}.u-loading-icon__spinner--spinner[data-v-26861ad0]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.u-loading-icon__text[data-v-26861ad0]:empty{display:none}.u-loading-icon--vertical .u-loading-icon__text[data-v-26861ad0]{margin:6px 0 0;color:#606266}.u-loading-icon__dot[data-v-26861ad0]{position:absolute;top:0;left:0;width:100%;height:100%}.u-loading-icon__dot[data-v-26861ad0]:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes u-rotate-data-v-26861ad0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-rotate-data-v-26861ad0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}', ""]), t.exports = e
        },
        e847: function(t, e, i) {
            var n = i("c86c");
            e = n(!1), e.push([t.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */uni-view[data-v-d4342702], uni-scroll-view[data-v-d4342702], uni-swiper-item[data-v-d4342702]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-swiper[data-v-d4342702]{display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;overflow:hidden}.u-swiper__wrapper[data-v-d4342702]{flex:1}.u-swiper__wrapper__item[data-v-d4342702]{flex:1}.u-swiper__wrapper__item__wrapper[data-v-d4342702]{display:flex;flex-direction:row;position:relative;overflow:hidden;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;flex:1}.u-swiper__wrapper__item__wrapper__image[data-v-d4342702]{flex:1}.u-swiper__wrapper__item__wrapper__video[data-v-d4342702]{flex:1}.u-swiper__wrapper__item__wrapper__title[data-v-d4342702]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;right:0;font-size:%?28?%;padding:%?12?% %?24?%;color:#fff;flex:1}.u-swiper__indicator[data-v-d4342702]{position:absolute;bottom:10px}', ""]), t.exports = e
        },
        fd4c: function(t, e, i) {
            "use strict";
            i("6a54"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, i("64aa");
            var n = {
                props: {
                    show: {
                        type: Boolean,
                        default: uni.$u.props.loadingIcon.show
                    },
                    color: {
                        type: String,
                        default: uni.$u.props.loadingIcon.color
                    },
                    textColor: {
                        type: String,
                        default: uni.$u.props.loadingIcon.textColor
                    },
                    vertical: {
                        type: Boolean,
                        default: uni.$u.props.loadingIcon.vertical
                    },
                    mode: {
                        type: String,
                        default: uni.$u.props.loadingIcon.mode
                    },
                    size: {
                        type: [String, Number],
                        default: uni.$u.props.loadingIcon.size
                    },
                    textSize: {
                        type: [String, Number],
                        default: uni.$u.props.loadingIcon.textSize
                    },
                    text: {
                        type: [String, Number],
                        default: uni.$u.props.loadingIcon.text
                    },
                    timingFunction: {
                        type: String,
                        default: uni.$u.props.loadingIcon.timingFunction
                    },
                    duration: {
                        type: [String, Number],
                        default: uni.$u.props.loadingIcon.duration
                    },
                    inactiveColor: {
                        type: String,
                        default: uni.$u.props.loadingIcon.inactiveColor
                    }
                }
            };
            e.default = n
        }
    }
]);