(function(e) {
    function a(a) {
        for (var n, r, s = a[0], d = a[1], l = a[2], u = 0, m = []; u < s.length; u++) r = s[u], Object.prototype.hasOwnProperty.call(i, r) && i[r] && m.push(i[r][0]), i[r] = 0;
        for (n in d) Object.prototype.hasOwnProperty.call(d, n) && (e[n] = d[n]);
        c && c(a);
        while (m.length) m.shift()();
        return o.push.apply(o, l || []), t()
    }

    function t() {
        for (var e, a = 0; a < o.length; a++) {
            for (var t = o[a], n = !0, s = 1; s < t.length; s++) {
                var d = t[s];
                0 !== i[d] && (n = !1)
            }
            n && (o.splice(a--, 1), e = r(r.s = t[0]))
        }
        return e
    }
    var n = {},
        i = {
            index: 0
        },
        o = [];

    function r(a) {
        if (n[a]) return n[a].exports;
        var t = n[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(t.exports, t, t.exports, r), t.l = !0, t.exports
    }
    r.e = function(e) {
        var a = [],
            t = i[e];
        if (0 !== t)
            if (t) a.push(t[2]);
            else {
                var n = new Promise((function(a, n) {
                    t = i[e] = [a, n]
                }));
                a.push(t[2] = n);
                var o, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, r.nc && s.setAttribute("nonce", r.nc), s.src = function(e) {
                    return r.p + "static/js/" + ({
                        "pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade~pages-wallet-r~b6ec6dbe": "pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade~pages-wallet-r~b6ec6dbe",
                        "pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade": "pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade",
                        "pages-index-index~pages-my-my": "pages-index-index~pages-my-my",
                        "pages-index-index": "pages-index-index",
                        "pages-my-my": "pages-my-my",
                        "pages-trade-trade": "pages-trade-trade",
                        "pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782": "pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782",
                        "pages-activity-activity": "pages-activity-activity",
                        "pages-moc-moc": "pages-moc-moc",
                        "pages-my-download~pages-my-invite~pages-wallet-recharge~pages-wallet-withdraw": "pages-my-download~pages-my-invite~pages-wallet-recharge~pages-wallet-withdraw",
                        "pages-wallet-recharge": "pages-wallet-recharge",
                        "pages-my-order~pages-wallet-wallet": "pages-my-order~pages-wallet-wallet",
                        "pages-wallet-transaction~pages-wallet-wallet": "pages-wallet-transaction~pages-wallet-wallet",
                        "pages-wallet-wallet": "pages-wallet-wallet",
                        "pages-wallet-transaction": "pages-wallet-transaction",
                        "pages-language-language": "pages-language-language",
                        "pages-my-download": "pages-my-download",
                        "pages-my-invite": "pages-my-invite",
                        "pages-wallet-withdraw": "pages-wallet-withdraw",
                        "pages-my-order": "pages-my-order",
                        "pages-my-security": "pages-my-security",
                        "pages-my-team": "pages-my-team",
                        "pages-notice-notice": "pages-notice-notice",
                        "pages-team-member~pages-team-staking": "pages-team-member~pages-team-staking",
                        "pages-team-member": "pages-team-member",
                        "pages-team-staking": "pages-team-staking",
                        "pages-team-product": "pages-team-product",
                        "pages-login-forget": "pages-login-forget",
                        "pages-login-login": "pages-login-login",
                        "pages-login-register": "pages-login-register",
                        "pages-my-about": "pages-my-about",
                        "pages-out-link-out-link": "pages-out-link-out-link"
                    }[e] || e) + "." + {
                        "pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade~pages-wallet-r~b6ec6dbe": "7c0bda42",
                        "pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade": "6dc5a1a3",
                        "pages-index-index~pages-my-my": "510599f3",
                        "pages-index-index": "666c88cb",
                        "pages-my-my": "9f368d44",
                        "pages-trade-trade": "906cefe0",
                        "pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782": "0b1c5a26",
                        "pages-activity-activity": "9f6b183a",
                        "pages-moc-moc": "21316a22",
                        "pages-my-download~pages-my-invite~pages-wallet-recharge~pages-wallet-withdraw": "20ea4073",
                        "pages-wallet-recharge": "2b05a585",
                        "pages-my-order~pages-wallet-wallet": "323d0da8",
                        "pages-wallet-transaction~pages-wallet-wallet": "e3b7d962",
                        "pages-wallet-wallet": "b1225aed",
                        "pages-wallet-transaction": "4e1ff0b6",
                        "pages-language-language": "58ce995d",
                        "pages-my-download": "642a5988",
                        "pages-my-invite": "a4482f6b",
                        "pages-wallet-withdraw": "b48c250f",
                        "pages-my-order": "263068ba",
                        "pages-my-security": "c24efcf1",
                        "pages-my-team": "da5f4aca",
                        "pages-notice-notice": "6b662ab4",
                        "pages-team-member~pages-team-staking": "efe71d59",
                        "pages-team-member": "9d706a6a",
                        "pages-team-staking": "c84509b5",
                        "pages-team-product": "2f6c620f",
                        "pages-login-forget": "272a1eae",
                        "pages-login-login": "498b39a7",
                        "pages-login-register": "b86d0a6e",
                        "pages-my-about": "aa536033",
                        "pages-out-link-out-link": "4e8d3b60"
                    }[e] + ".js"
                }(e);
                var d = new Error;
                o = function(a) {
                    s.onerror = s.onload = null, clearTimeout(l);
                    var t = i[e];
                    if (0 !== t) {
                        if (t) {
                            var n = a && ("load" === a.type ? "missing" : a.type),
                                o = a && a.target && a.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")", d.name = "ChunkLoadError", d.type = n, d.request = o, t[1](d)
                        }
                        i[e] = void 0
                    }
                };
                var l = setTimeout((function() {
                    o({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = o, document.head.appendChild(s)
            }
        return Promise.all(a)
    }, r.m = e, r.c = n, r.d = function(e, a, t) {
        r.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: t
        })
    }, r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, a) {
        if (1 & a && (e = r(e)), 8 & a) return e;
        if (4 & a && "object" === typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (r.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & a && "string" != typeof e)
            for (var n in e) r.d(t, n, function(a) {
                return e[a]
            }.bind(null, n));
        return t
    }, r.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return r.d(a, "a", a), a
    }, r.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, r.p = "/", r.oe = function(e) {
        throw console.error(e), e
    };
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        d = s.push.bind(s);
    s.push = a, s = s.slice();
    for (var l = 0; l < s.length; l++) a(s[l]);
    var c = d;
    o.push([0, "chunk-vendors"]), t()
})({
    0: function(e, a, t) {
        e.exports = t("e464")
    },
    "0188": function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("9b1b"));
        t("5c47"), t("8f71"), t("bf0f");
        var o = n(t("1a32")),
            r = n(t("1ef5")),
            s = n(t("e2fc")),
            d = n(t("244e")),
            l = n(t("3b6f")),
            c = n(t("0768c")),
            u = n(t("7f24")),
            m = n(t("5ca8")),
            p = n(t("4da6")),
            g = n(t("0298")),
            f = n(t("8c69")),
            h = n(t("782b")),
            y = n(t("8e78")),
            v = n(t("7ad7")),
            T = (0, i.default)((0, i.default)({
                route: d.default,
                date: p.default.timeFormat,
                colorGradient: l.default.colorGradient,
                hexToRgb: l.default.hexToRgb,
                rgbToHex: l.default.rgbToHex,
                colorToRgba: l.default.colorToRgba,
                test: c.default,
                type: ["primary", "success", "error", "warning", "info"],
                http: new s.default,
                config: g.default,
                zIndex: h.default,
                debounce: u.default,
                throttle: m.default,
                mixin: o.default,
                mpMixin: r.default,
                props: f.default
            }, p.default), {}, {
                color: y.default,
                platform: v.default
            });
        uni.$u = T;
        var b = {
            install: function(e) {
                e.filter("timeFormat", (function(e, a) {
                    return uni.$u.timeFormat(e, a)
                })), e.filter("date", (function(e, a) {
                    return uni.$u.timeFormat(e, a)
                })), e.filter("timeFrom", (function(e, a) {
                    return uni.$u.timeFrom(e, a)
                })), e.prototype.$u = T, e.mixin(o.default)
            }
        };
        a.default = b
    },
    "01cf": function(e, a, t) {
        "use strict";
        var n = t("fa07"),
            i = t.n(n);
        i.a
    },
    "0298": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var n = {
            v: "2.0.36",
            version: "2.0.36",
            type: ["primary", "success", "info", "error", "warning"],
            color: {
                "u-primary": "#2979ff",
                "u-warning": "#ff9900",
                "u-success": "#19be6b",
                "u-error": "#fa3534",
                "u-info": "#909399",
                "u-main-color": "#303133",
                "u-content-color": "#606266",
                "u-tips-color": "#909399",
                "u-light-color": "#c0c4cc"
            },
            unit: "px"
        };
        a.default = n
    },
    "04d5": function(e, a, t) {
        "use strict";

        function n() {
            this.handlers = []
        }
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0, t("aa9c"), t("bf0f"), t("2797"), n.prototype.use = function(e, a) {
            return this.handlers.push({
                fulfilled: e,
                rejected: a
            }), this.handlers.length - 1
        }, n.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }, n.prototype.forEach = function(e) {
            this.handlers.forEach((function(a) {
                null !== a && e(a)
            }))
        };
        var i = n;
        a.default = i
    },
    "0540": function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"Domov","index.trade":"Trgovina","index.my":"Moj","userAuth.email":"E-pošta","userAuth.password":"Geslo","userAuth.forgetPassword":"Pozabljeno geslo?","userAuth.forget":"Pozabiti","userAuth.reset":"Ponastavi","userAuth.changePassword":"Spremeni geslo","userAuth.newPassword":"Novo geslo","userAuth.confirmPassword":"Potrdi geslo","userAuth.loginTitle":"Prijava v vaš račun","userAuth.signin":"Prijava","userAuth.signup":"Registracija","userAuth.noAccount":"Nimate računa?","userAuth.haveAccount":"Že imate račun?","userAuth.fundPassword":"Geslo sklada","userAuth.verificationCode":"Koda za preverjanje","userAuth.referralCode":"Referenčna koda","userAuth.send":"Pošlji","userAuth.resend":"Ponovno pošlji","userAuth.exipires":"poteče v <span class=\'time uni-text-color\'>10</span> minutah.","userAuth.logging":"prijava","message.email":"Prosimo, vnesite svoj e-poštni naslov","message.password":"Prosimo, vnesite svoje geslo","message.newPassword":"Prosimo, vnesite novo geslo","message.fundPassword":"Prosimo, vnesite geslo sklada","message.confirmPassword":"Prosimo, potrdite svoje geslo","message.confirmPasswordError":"Napaka pri potrditvi gesla","message.imgCode":"Prosimo, vnesite kodo za sliko","message.verificationCode":"Prosimo, vnesite kodo za preverjanje","message.bnbAddress":"Prosimo, vnesite svoj BNB naslov denarnice","message.trxAddress":"Prosimo, vnesite svoj TRX naslov denarnice","message.logout":"Ste prepričani, da želite izstopiti?","message.qty":"Prosimo, vnesite količino ","message.mocNum":"Prosimo, vnesite število kovancev MTC","message.buySuccess":"Čestitamo, uspešen nakup!","message.success":"Uspešno","message.copySuccess":"Kopiranje uspešno","message.amount":"Prosimo, vnesite znesek","todayearn":"Današnji dobiček","totalwarn":"Skupni dobiček","mymoc":"Moj Mtc","myteam":"Moja ekipa","people":"Ljudje","tips":"Nasveti","tip":"Nasvet","all":"Vse","amount":"Znesek","record":"Zapis","address":"Naslov","exchange":"Izmenjava","qty":"Količina","buy":"Kupi","buyNow":"Kupi zdaj","balance":"Stanje","account":"Račun","accountBalance":"Stanje računa","digitalToken":"Digitalni žeton","convert":"Pretvori","confirm":"Potrdi","error":"Napaka","ok":"V redu","home.mocmarket":"Trendi trga MTC","home.market":"Glavni trendi","home.tip":"Trgujte s kriptovalutami z racionalnim pristopom, upravljajte tveganja z raznolikostjo naložb, pred nakupom izvedite temeljito raziskavo, razmislite o dolgoročnem vlaganju, previdno trgujte s varnimi platformami in bodite vedno na tekočem z trendi na trgu za obveščene odločitve.","trade.solo1":"Doseganje nizkega tveganja","trade.solo2":"dobitki preko","trade.solo3":"NFT stakinga.","trade.lowRisk":"Nizko tveganje","trade.shortTerm":"Kratkoročno","trade.highStable":"Visoko stabilni donosi","trade.dailyYield":"Dnevni donos","trade.investPeriod":"Obdobje vlaganja","trade.buy":"Nakup","trade.autoReinvestment":"Samodejna reinvesticija","trade.autoReinvestmentTip":"Samodejna reinvesticija: Pomaga vam hitro reciklirati sredstva, da lahko zaslužite več dobička","language.title":"Jezik","my.order":"Moje staking rudarjenje","my.team":"Moja ekipa","my.invite":"Povabite prijatelja","my.security":"Nastavitve varnosti","my.download":"Prenesi aplikacijo","my.about":"O nas","my.appVersion":"Različica aplikacije","my.logout":"Odjava","customer.service":"Podpora strankam","customer.group":"Skupina","customer.person":"Oseba","customer.tip":"Ne morem odpreti aplikacije {appName}. Prepričajte se, da je aplikacija {appName} nameščena.","wallet.title":"Moja denarnica","wallet.nftRelease":"Sprostitev NFT-jev","wallet.nftReleaseTip":"Ste prepričani, da želite sprostiti NFT-je?","wallet.releaseSuccess":"Uspešno sproščanje","wallet.mocRelease":"Sprostitev MTC","wallet.history":"Zgodovina transakcij","wallet.all":"Vse","fundType":"Vrste transakcij","recharge":"Polnjenje","rechargeProfit":"Povračilo pologa","withdraw":"Umik","commission":"Provizije za zaslužek","gift":"Darila platforme","inviteProfit":"Povračilo sklicevanja","staking":"Staking","stakingProfit":"Zaslužki s stakingom","unstaking":"Menjava NFT","purchaseMtc":"Nakup kovanca MTC","moc2Usdt":"MTC v USDT","usdt2Mtc":"USDT v MTC","recharge.tip":"Prosimo, napolnite USDT preko omrežja {walletType}. Po oddaji počakajte potrpežljivo in preverite, ali je transakcija prispela v 1-2 minutah.","withdraw.address":"{withdrawalType} naslov denarnice za umik","withdraw.tip":"Minimalni znesek za umik: <span class=\'uni-text-color\'>{min} USDT</span>, s <span class=\'uni-text-color\'>{fee}%</span> provizijo na transakcijo.","withdraw.amount":"Znesek USDT","withdraw.submit":"Umik","security.login":"Prijava","security.fund":"Sklad","security.setting":"Nastavitve","security.tip":"Koda za preverjanje bo poslana na vaš e-poštni naslov <span class=\'uni-text-color\'>{account}</span>","invite.title":"【Skeniraj in registriraj】","invite.code":"Koda za vabilo","invite.copyCode":"Kopiraj kodo","invite.copyLink":"Kopiraj povezavo","invite.tip":"Povabite prijatelje, da opravijo prvo polog, platforma vam bo dala <span>{inviteProfit}%</span> zneska pologa in <span>{levelProfit}%</span> njihovih prihodnjih zaslužkov.","download.title":"【Skeniraj in prenesi】","download.android":"Android aplikacija","team.totalCommissions":"Skupna provizija","team.todayCommissions":"Današnja provizija","team.totalEarn":"Skupni zaslužek ekipe","team.nft":"Staking ekipe","team.member":"Člani ekipe","team.staking":"NFT, ki jih je dokončala ekipa","team.product":"Številka rudarjenja ekipe","team.referralCode":"Referenčna koda","team.detail":"Poglej podrobnosti","team.myEarnings":"Moji zaslužki","order.count":"Skupno število NFT","order.stakedNft":"Staking znesek","order.unStakedNft":"Zaključen staking znesek","order.expectedEarnings":"Pričakovani zaslužki","order.releasedEarnings":"Sproščeni zaslužki","order.expected":"Pričakovano","order.investPeriod":"Obdobje naložbe","order.mining":"Rudarjenje","order.completed":"Dokončano","order.earnings":"Dobiček","order.autoReinvestment":"Samodejna reinvesticija","moc.center":"MTC center","moc.myMtc":"Moji MTC","moc.num":"Število kovancev MTC","moc.currentPrice":"Trenutna cena Mtc","moc.discountPrice":"Mtc Znižana Cena","moc.price":"Cena","moc.available":"Na voljo","moc.rule":"Pravilo","moc.rule1":"Za vsak zastavljen NFT boste prejeli kovance MTC v višini {productPercent}% zaslužka.","moc.rule2":"Za zaslužek na kovancih Mtc jih najprej zastavite. Po zastavljanju jih ni mogoče zamenjati, dokler jih ne umaknete.","moc.rule3":"Kovance MTC je mogoče zamenjati za USDT glede na trenutno tržno vrednost kovancev Mtc.","moc.staking":"staking","moc.unstaking":"unStaking","moc.stakingProfit":"Zaslužki s stakingom MTC","moc.activity":"{percent}% Off MTC","moc.activity.holdings":"Imetja","moc.activity.buy":"Kupi MTC","moc.activity.ended":"Dogodek MTC je končan","moc.activity.subscription":"Potrdilo o naročilu poteka, bodite potrpežljivi.","moc.activity.progress":"Potrdilo o naročilu poteka, bodite potrpežljivi.","moc.activity.rule1":"Obdobje promocije: {start} - {end}","moc.activity.rule2":"Vsi kovanci MTC v tem dogodku so na voljo za naročilo s {percent}% popusta.","moc.activity.rule3":"Koliko zastavljenih NFT-jev je potrebnih za naročilo MTC žetonov v ekvivalentni vrednosti v USDT","moc.activity.rule4":"Število kovancev MTC je omejeno, kdor prej pride, prej melje; dogodek se bo končal, ko bo naročilo zaključeno.","moc.activity.noHoldings":"Brez imetja","notice.title":"Moje obvestilo","trans.notCredited":"Ni pripisano?","trans.hash":"{walletType} transakcijski hash","trans.hashSuccess":"{walletType} poizvedba transakcije uspešna","trans.hashError":"Vnesite {walletType} transakcijski hash","message.amountMinimum":"Minimalni znesek dviga: {min} USDT","message.loging":"Prijava","message.withdrawSucces":"Zahteva za dvig uspešno poslana.","withdrawFee":"Dvig zavrnjen","message.cancelContinuity":"Ali ste prepričani, da želite preklicati neprekinjenost?","withdrawTime":"Ure za dvig so od {start} do {end} vsak dan (UTC).","Token create error":"Napaka pri ustvarjanju žetona","Sending too frequently, please try again later":"Pošiljanje preveč pogosto, poskusite znova pozneje","Sys error, not email can send":"Sistemska napaka, ni mogoče poslati e-pošte","Sys error, email send error":"Sistemska napaka, napaka pri pošiljanju e-pošte","Error request":"Napaka zahteve","You can\'t login":"Ne morete se prijaviti","Please input the email":"Prosim vnesite e-pošto","Unsupported email suffix":"Nepodprt končni del e-pošte","Email is exist":"E-pošta že obstaja","Email is not exist":"E-pošta ne obstaja","Not the correct email address":"Ni pravilen e-poštni naslov","Payment password must be greater than or equal to 6 digits":"Plačilno geslo mora biti večje ali enako 6 števkam","Password must be greater than or equal to 6 digits":"Geslo mora biti večje ali enako 6 števkam","Please input the password":"Prosim vnesite geslo","Please input the Payment password":"Prosim vnesite plačilno geslo","The original password is incorrect":"Izvirno geslo ni pravilno","Please input the verification code":"Prosim vnesite potrditveno kodo","The verification code is incorrect or has expired. Please obtain it again":"Potrditvena koda je napačna ali je potekla. Prosim pridobite jo ponovno","The verification code is incorrect":"Potrditvena koda je napačna","Account or password error":"Napaka računa ali gesla","Payment password error":"Napaka plačilnega gesla","Please input start time":"Prosim vnesite začetni čas","Please input end time":"Prosim vnesite končni čas","Please verify account":"Prosim preverite račun","Product not exist":"Izdelek ne obstaja","Product Suspend sales":"Prodaja izdelka je prekinjena","Insufficient balance":"Nezadostno stanje","Balance too little":"Stanje je prenizko","Product income":"Dohodek izdelka","Buy product":"Staking NFT","Buy platform coin":"Kupi kovanec MTC","recharge back":"Vrnitev pologa","error add":"Napaka pri dodajanju","coin exchange amount":"Znesek menjave kovancev MTC","coin interest":"Obresti kovancev MTC","coin is staking please cancel staking":"Kovanec MTC je v stakingu, prosim prekličite staking","Platform change":"Sprememba platforme","withdraw refuse":"Zavrnitev umika","Not meeting the minimum withdrawal amount":"Ne izpolnjuje minimalnega zneska za umik","Not yet due for withdrawal time":"Še ni čas za umik","Please verify email":"Prosim potrdite e-pošto","Activity amount must greater in progress product total amount":"Znesek dejavnosti mora biti večji od trenutnega zneska za stavo","Insufficient quantity":"Žetoni MTC so razprodani","Activity not exist":"Aktivnost popusta ne obstaja","Buy activity":"Kupi kovanec MTC z popustom","Not Start":"Aktivnost popusta še ni začela","Is over":"Aktivnost popusta je končana","Create address error":"Napaka pri ustvarjanju naslova","Not a correct address":"Ni pravilen naslov","Processed":"Obdelano","Out wallet password is empty":"Geslo za izhodno denarnico je prazno","Trans error please check wallet":"Napaka transakcije, prosim preverite denarnico","Please input trans hash":"Prosim vnesite hash transakcije","Please input coin type":"Prosim izberite vrsto omrežja","Not Find Trans":"Transakcija ni najdena","Transaction processed":"Transakcija obdelana","Transaction does not belong to you":"Transakcija vam ne pripada","Transaction does not USDT":"Transakcija ni USDT","Channel":"Kanal","Consultation":"Posvetovanje","Consult":"Posvetovati se","Group":"Skupina","nonWithdrawAmount":"Znesek, ki ga ni mogoče dvigniti","checkIn":"Prijava","checkInTip":"Današnja prijava je bila uspešna!","Today Has Sign In":"Danes že prijavljeno","todayChecked":"Danes že prijavljeno","registerGift":"Darilo ob registraciji","dailyCheckIn":"Dnevna prijava","withdraw.addressSetting":"Nastavi naslov {withdrawalType}","trade.open":"Odprto","trade.noOpen":"Zaprto","trade.noOpen.message":"Izdelek ni na voljo","NFT Staking Mining":"NFT staking rudarjenje","days":"Dni","hours":"Ur","minutes":"Minut","index.wallet":"Denarnica","index.mtcCenter":"MTC Center","index.myNft":"Moj NFT","mata.title":"Uvod v ATANFT","mata.intro1":"ATANFT rudarjenje temelji na zasebnem ekosistemu Manta Network in je zasnovano kot sistem spodbud za žetone, ki se osredotoča na \'lastništvo zasebnih NFT in prispevek k ekosistemu\'. Glavni cilj je spodbujanje uporabnikov k sodelovanju v obtoku, uporabi in gradnji ekosistema ATANFT preko rudarjenja ter povečanje aktivnosti sistema zasebnih sredstev Manta. Udeleženci pridobijo žetone MTC ali ekskluzivne zasebne NFT nagrade s stakingom in interakcijami.","mata.intro2":"Model rudarjenja temelji na \'lastnostih zasebnosti + ekosistemskih interakcijah\' in je razdeljen na dve glavni vrsti:","mata.intro3":"<text class=\'bold\'>Staking rudarjenje</text>: Uporabniki položijo svoje ATANFT (vključno z običajnimi digitalnimi zbirkami, SBT potrdili o identiteti itd.) v določeno pametno pogodbo. Dobiček se izračuna glede na redkost ATANFT (npr. genesis edicija, omejena edicija), čas lastništva in zapis zasebnih interakcij. Na primer, staking \'zasebnega identitetnega ATANFT\' prinaša osnovni letni donos, medtem ko aktivacija funkcije \'transakcije s dokazilom brez znanja\' (npr. zasebni prenos preko MantaPay) poveča nagrado za dodatnih 10%-20%. Dobiček se izplačuje dnevno v žetonih MTC.","mata.intro4":"<text class=\'bold\'>Ekosistemsko interaktivno rudarjenje</text>: Spodbuja uporabnike, da uporabljajo ATANFT v ekosistemu Manta za dokončanje določenih nalog, kot so integracija ATANFT v blockchain igre (kot lik ali predmet), uporaba ATANFT kot LP zavarovanja v DeFi modulih, kot je MantaSwap, ali povabilo novih uporabnikov k ustvarjanju njihovega prvega ATANFT. Vsaka naloga prinaša določene točke. Ko točke dosežejo prag, jih je mogoče zamenjati za \'spominsko izdajo ATANFT\' z višjim donosom stakinga ali neposredno zamenjati za žetone MTC. Težje naloge (npr. čezverižni prenos zasebnih NFT) odklenejo omejene ekskluzivne pravice.","token.rule1":"Uporabniki morajo položiti kupljene ATANFT v določeno pametno pogodbo. Dobiček se izračuna glede na redkost ATANFT. Rudarska nagrada se izplačuje v žetonih MTC in se samodejno knjiži na uporabniški račun vsaki dve uri.","token.rule2":"Žeton MTC je mogoče zamenjati za USDT po tržni ceni.","trade.pay":"Znesek plačila","trade.pay.tip":"Vsak ATANFT stane {amount} USDT. Nakup mora biti v celih večkratnikih {amount} USDT (npr. {amount1} USDT, {amount2} USDT).","trade.intro":"Crazy Monkey NFT s svojo edinstveno zasnovo in omejenimi izdajami predstavlja presenetljiv potencialni naložbeni predmet.","investPeriod":"Obdobje stakinga","order.cumulativeIncome":"Kumulativni dohodek","order.amount":"Znesek","order.num":"Količina","agencyRebate":"Agencijski popust","order.doing":"V teku","order.history":"Zgodovina","registerTime":"Čas registracije","stakingBackProfit":"Referenčni popust","exchange.fee":"Provizija","trade.sale":"Na prodaj","trade.sold":"Razprodano","trade.sold.message":"Danes razprodano","order.staked":"Vloženo za {day} dni","order.completed.time":"Čas zaključka","order.completed.time1":"Čas zapadlosti: {time}","team.totalRecharge":"Skupno polnjenje","trade.numWarning":"Nezadostna količina NFT","Insufficient NFT quantity":"Nezadostna količina NFT","token.buy":"Kupi","token.sell":"Prodaj","token.noOpen":"Trenutno ni otvoreno","token.transaction":"Transakcija","wallet.withdraw.tip":"Najmanjši dvig: <span class=\'uni-text-color\'>{min} USDT</span>, zaračuna se provizija <span class=\'uni-text-color\'>{fee}%</span> na transakcijo.","wallet.withdraw.tipTwo":"Čas prispetja: dvig bo nakazan v vašo denarnico v <span class=\'uni-text-color\'>{time}</span> urah.","wallet.withdraw.tipOne":"Čas dviga: sistemski čas od <span class=\'uni-text-color\'>{start}</span> do <span class=\'uni-text-color\'>{end}</span>.","star.user":"Igralec zvezda"}')
    },
    "066c": function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"Início","index.trade":"Comércio","index.my":"Meu","userAuth.email":"Email","userAuth.password":"Senha","userAuth.forgetPassword":"Esqueceu a Senha?","userAuth.forget":"Esquecer","userAuth.reset":"Redefinir","userAuth.changePassword":"Alterar senha","userAuth.newPassword":"Nova senha","userAuth.confirmPassword":"Confirmar senha","userAuth.loginTitle":"Entre na sua conta","userAuth.signin":"Entrar","userAuth.signup":"Inscrever-se","userAuth.noAccount":"Não tem uma conta?","userAuth.haveAccount":"Já tem uma conta?","userAuth.fundPassword":"Senha de fundos","userAuth.verificationCode":"Código de verificação","userAuth.referralCode":"Código de referência","userAuth.send":"Enviar","userAuth.resend":"Reenviar","userAuth.exipires":"expira em <span class=\'time uni-text-color\'>10</span> minutos.","userAuth.logging":"entrando","message.email":"Por favor, insira seu email","message.password":"Por favor, insira sua senha","message.newPassword":"Por favor, insira sua nova senha","message.fundPassword":"Por favor, insira sua senha de fundos","message.confirmPassword":"Por favor, confirme sua senha","message.confirmPasswordError":"Erro na confirmação da senha","message.imgCode":"Por favor, insira o código de verificação da imagem","message.verificationCode":"Por favor, insira o código de verificação","message.bnbAddress":"Por favor, insira o endereço da sua carteira BNB","message.trxAddress":"Por favor, insira o endereço da sua carteira TRX","message.logout":"Tem certeza de que deseja sair?","message.qty":"Por favor, insira a quantidade","message.mocNum":"Por favor, insira o número de moedas MTC","message.buySuccess":"Parabéns, compra realizada com sucesso!","message.success":"Sucesso","message.copySuccess":"Cópia bem-sucedida","message.amount":"Por favor, insira o valor","todayearn":"Ganhos de hoje","totalwarn":"Ganhos totais","mymoc":"Meu Mtc","myteam":"Meu Time","people":"Pessoas","tips":"Dicas","tip":"Dica","all":"Tudo","amount":"Quantidade","record":"Registro","address":"Endereço","exchange":"Trocar","qty":"QTD","buy":"Comprar","buyNow":"Compre agora","balance":"Saldo","account":"Conta","accountBalance":"Saldo da Conta","digitalToken":"Token Digital","convert":"Converter","confirm":"Confirmar","error":"Erro","ok":"Ok","home.mocmarket":"Tendências do Mercado MTC","home.market":"Tendências Principais","home.tip":"Negocie criptomoedas com uma mentalidade racional, gerencie riscos diversificando investimentos, conduza pesquisas aprofundadas antes de comprar, considere manter a longo prazo, negocie com cautela em plataformas seguras e fique atualizado com as tendências do mercado para decisões informadas.","trade.solo1":"Alcançando lucros de","trade.solo2":"baixo risco através","trade.solo3":"do staking de NFT.","trade.lowRisk":"Baixo Risco","trade.shortTerm":"Curto Prazo","trade.highStable":"Retornos Estáveis Altos","trade.dailyYield":"Rendimento Diário","trade.investPeriod":"Período de Investimento","trade.buy":"Comprar","trade.autoReinvestment":"Reinvestimento Automático","trade.autoReinvestmentTip":"Reinvestimento Automático: Ajuda você a reciclar fundos rapidamente para ganhar mais lucro","language.title":"Idioma","my.order":"Minha Mineração de Staking","my.team":"Meu Time","my.invite":"Convidar Amigo","my.security":"Configurações de Segurança","my.download":"Baixar APP","my.about":"Sobre Nós","my.appVersion":"Versão do App","my.logout":"Sair","customer.service":"Atendimento ao Cliente","customer.group":"Grupo","customer.person":"Pessoa","customer.tip":"Não é possível abrir o aplicativo {appName}. Certifique-se de que {appName} esteja instalado.","wallet.title":"Minha Carteira","wallet.nftRelease":"Liberação de NFT","wallet.nftReleaseTip":"Você tem certeza de que deseja liberar os NFTs?","wallet.releaseSuccess":"Liberação bem-sucedida","wallet.mocRelease":"Liberação de MTC","wallet.history":"Histórico de Transações","wallet.all":"Tudo","fundType":"Tipos de Transações","recharge":"Recarregar","rechargeProfit":"Rebates de Depósito","withdraw":"Retirada","commission":"Ganhos de Comissão","gift":"Presentes da Plataforma","inviteProfit":"Rebates de Indicação","staking":"Staking","stakingProfit":"Ganhos de Staking","unstaking":"Troca de NFT","purchaseMtc":"Comprar moeda MTC","moc2Usdt":"MTC para USDT","usdt2Mtc":"USDT para MTC","recharge.tip":"Por favor, recarregue USDT usando a rede {walletType}. Após o envio, espere pacientemente e verifique se a transação chegou dentro de 1-2 minutos.","withdraw.address":"Endereço de retirada da carteira {withdrawalType}","withdraw.tip":"Quantidade mínima de retirada: <span class=\'uni-text-color\'>{min} USDT</span>, com uma taxa de <span class=\'uni-text-color\'>{fee}%</span> por transação.","withdraw.amount":"Quantidade de USDT","withdraw.submit":"Retirar","security.login":"Login","security.fund":"Fundo","security.setting":"Configuração","security.tip":"O código de verificação será enviado para o seu email <span class=\'uni-text-color\'>{account}</span>","invite.title":"【 Escanear e Registrar】","invite.code":"Código de Convite","invite.copyCode":"Copiar Código","invite.copyLink":"Copiar Link","invite.tip":"Convide amigos para fazer o primeiro depósito, a plataforma lhe dará <span>{inviteProfit}%</span> do valor do depósito e <span>{levelProfit}%</span> dos ganhos futuros.","download.title":"【 Escanear e Baixar 】","download.android":"APP Android","team.totalCommissions":"Comissão Total","team.todayCommissions":"Comissão de Hoje","team.performance":"Desempenho da Equipe","team.nft":"Staking em equipe","team.member":"Membros do Time","team.staking":"NFTs Completados pela Equipe","team.product":"Número de Mineração do Time","team.referralCode":"Código de Referência","team.detail":"Ver Detalhes","team.myEarnings":"Meus Ganhos","order.count":"Total de NFTs","order.stakedNft":"Valor em staking","order.unStakedNft":"Valor de staking concluído","order.expectedEarnings":"Ganhos Esperados","order.releasedEarnings":"Ganhos Liberados","order.expected":"Esperado","order.investPeriod":"Período de Investimento","order.mining":"Mineração","order.completed":"Concluído","order.earnings":"Ganhos","order.autoReinvestment":"Reinvestimento Automático","moc.center":"Centro MTC","moc.myMtc":"Meu MTC","moc.num":"Número de Moedas MTC","moc.currentPrice":"Preço Atual MTC","moc.discountPrice":"Preço com Desconto Mtc","moc.price":"Preço","moc.available":"Disponível","moc.rule":"Regra","moc.rule1":"Para cada NFT staked, você receberá moedas MTC equivalentes a {productPercent}% dos ganhos.","moc.rule2":"Para ganhar juros sobre as moedas MTC, primeiro faça o staking delas. Após o staking, elas não podem ser trocadas até que você as retire.","moc.rule3":"As moedas MTC podem ser trocadas por USDT com base no valor de mercado em tempo real das moedas MTC.","moc.staking":"staking","moc.unstaking":"unStaking","moc.stakingProfit":"Ganhos de Staking MTC","moc.activity":"{percent}% Desconto MTC","moc.activity.holdings":"Posições","moc.activity.buy":"Comprar MTC","moc.activity.ended":"O evento MTC terminou","moc.activity.subscription":"Confirmação de inscrição em andamento, por favor, aguarde pacientemente.","moc.activity.progress":"Confirmação de inscrição em andamento, por favor, aguarde pacientemente.","moc.activity.rule1":"Período da Promoção: {start} - {end}","moc.activity.rule2":"Todas as moedas MTC neste evento estão disponíveis para inscrição com {percent}% de desconto.","moc.activity.rule3":"Quantos NFTs staked são necessários para se inscrever em tokens MTC de valor equivalente em USDT","moc.activity.rule4":"O número de moedas MTC é limitado, primeiro a chegar, primeiro a ser atendido; o evento terminará assim que a inscrição for concluída.","moc.activity.noHoldings":"Sem posses","notice.title":"Meu Aviso","trans.notCredited":"Não creditado?","trans.hash":"Hash de Transação {walletType}","trans.hashSuccess":"Consulta de transação {walletType} bem-sucedida","trans.hashError":"Por favor, insira o hash da transação {walletType}","message.amountMinimum":"Valor mínimo de retirada: {min} USDT","message.loging":"Entrando","message.withdrawSucces":"Pedido de retirada enviado com sucesso.","withdrawFee":"Retirada recusada","message.cancelContinuity":"Tem certeza de que deseja cancelar a continuidade?","withdrawTime":"O horário de retirada é das {start} às {end} diariamente (UTC).","Token create error":"Erro ao criar o token","Sending too frequently, please try again later":"Envio muito frequente, por favor tente novamente mais tarde","Sys error, not email can send":"Erro de sistema, não é possível enviar o e-mail","Sys error, email send error":"Erro de sistema, erro ao enviar o e-mail","Error request":"Erro na requisição","You can\'t login":"Você não pode fazer login","Please input the email":"Por favor, insira o e-mail","Unsupported email suffix":"Sufixo de e-mail não suportado","Email is exist":"O e-mail já existe","Email is not exist":"O e-mail não existe","Not the correct email address":"Não é o endereço de e-mail correto","Payment password must be greater than or equal to 6 digits":"A senha de pagamento deve ter no mínimo 6 dígitos","Password must be greater than or equal to 6 digits":"A senha deve ter no mínimo 6 dígitos","Please input the password":"Por favor, insira a senha","Please input the Payment password":"Por favor, insira a senha de pagamento","The original password is incorrect":"A senha original está incorreta","Please input the verification code":"Por favor, insira o código de verificação","The verification code is incorrect or has expired. Please obtain it again":"O código de verificação está incorreto ou expirou. Por favor, obtenha-o novamente","The verification code is incorrect":"O código de verificação está incorreto","Account or password error":"Erro de conta ou senha","Payment password error":"Erro de senha de pagamento","Please input start time":"Por favor, insira a hora de início","Please input end time":"Por favor, insira a hora de término","Please verify account":"Por favor, verifique a conta","Product not exist":"O produto não existe","Product Suspend sales":"Venda do produto suspensa","Insufficient balance":"Saldo insuficiente","Balance too little":"Saldo muito baixo","Product income":"Rendimento do produto","Buy product":"Comprar produto","Buy platform coin":"Comprar moeda MTC","recharge back":"Reembolso de recarga","error add":"Erro ao adicionar","coin exchange amount":"Quantidade de troca de moeda MTC","coin interest":"Juros da moeda MTC","coin is staking please cancel staking":"A moeda MTC está em staking, por favor cancele o staking","Platform change":"Mudança de plataforma","withdraw refuse":"Recusar saque","Not meeting the minimum withdrawal amount":"Não atende ao valor mínimo de saque","Not yet due for withdrawal time":"Ainda não é hora de sacar","Please verify email":"Por favor, verifique o e-mail","Activity amount must greater in progress product total amount":"O montante da atividade deve ser maior que o montante total apostado atualmente","Insufficient quantity":"Os tokens MTC estão esgotados","Activity not exist":"A atividade de desconto não existe","Buy activity":"Comprar moedas MTC com desconto","Not Start":"A atividade de desconto ainda não começou","Is over":"A atividade de desconto acabou","Create address error":"Erro ao criar endereço","Not a correct address":"Não é um endereço correto","Processed":"Processado","Out wallet password is empty":"A senha da carteira externa está vazia","Trans error please check wallet":"Erro de transação, por favor verifique a carteira","Please input trans hash":"Por favor, insira o hash da transação","Please input coin type":"Por favor, selecione o tipo de rede","Not Find Trans":"Transação não encontrada","Transaction processed":"Transação processada","Transaction does not belong to you":"A transação não pertence a você","Transaction does not USDT":"A transação não é em USDT","Channel":"Canal","Consultation":"Consulta","Consult":"Consultar","Group":"Grupo","nonWithdrawAmount":"Quantia não retirável","checkIn":"Check-in","checkInTip":"Check-in de hoje realizado com sucesso!","Today Has Sign In":"Já fez check-in hoje","todayChecked":"Já fez check-in hoje","registerGift":"Presente de registro","dailyCheckIn":"Check-in diário","withdraw.addressSetting":"Definir endereço {withdrawalType}","trade.open":"Aberto","trade.noOpen":"Fechado","trade.noOpen.message":"Produto não aberto","NFT Staking Mining":"Mineração de NFT em staking","days":"Dias","hours":"Horas","minutes":"Minutos","index.wallet":"Carteira","index.mtcCenter":"Centro MTC","index.myNft":"Meu NFT","mata.title":"Introdução ao ATANFT","mata.intro1":"O mineração de ATANFT é baseado no ecossistema privado da Manta Network e foi projetado como um sistema de incentivo com tokens, focado na \'posse de NFT privado e contribuição ao ecossistema\'. O objetivo principal é, por meio da mineração, guiar os usuários a participar da circulação, aplicação e construção do ecossistema ATANFT, aumentando a atividade do sistema de ativos privados da Manta. Os participantes obtêm tokens MTC ou recompensas NFT privadas exclusivas por meio de staking e interações.","mata.intro2":"O modelo de mineração se concentra em \'Privacidade + Interação do Ecossistema\' e é dividido em dois tipos principais:","mata.intro3":"<text class=\'bold\'>Mineração por Staking</text>: Os usuários depositam seus ATANFTs (incluindo colecionáveis digitais comuns, certificados de identidade SBT, etc.) em um contrato inteligente designado. Os lucros são calculados com base na raridade do ATANFT (como edições genesis ou limitadas), no tempo de posse e no histórico de interações privadas. Por exemplo, fazer staking de um \'NFT de identidade privada\' gera um rendimento anual básico, e se a função \'transações com prova de conhecimento zero\' estiver ativada (como transferências privadas via MantaPay), a taxa de recompensa aumenta em 10% a 20%. Os ganhos são distribuídos diariamente em tokens MTC.","mata.intro4":"<text class=\'bold\'>Mineração por Interação do Ecossistema</text>: Incentiva os usuários a usar os ATANFTs no ecossistema Manta para completar tarefas específicas, como integrar ATANFTs em jogos blockchain (como personagens ou itens), usar ATANFTs como garantia LP em módulos DeFi como MantaSwap ou convidar novos usuários a criar seu primeiro ATANFT. Cada tarefa concede pontos que, ao atingir o limite, podem ser trocados por um \'ATANFT comemorativo de mineração\' com maior rendimento ou diretamente por tokens MTC. Tarefas de alta dificuldade (como transferências de NFT privados entre cadeias) desbloqueiam direitos exclusivos e limitados.","token.rule1":"Os usuários devem depositar os ATANFTs comprados em um contrato inteligente designado. Os lucros são calculados com base na raridade do ATANFT. As recompensas de mineração são liquidadas em tokens MTC e creditadas automaticamente na conta do usuário a cada duas horas.","token.rule2":"Os tokens MTC podem ser trocados por USDT de acordo com o preço de mercado.","trade.pay":"Valor do pagamento","trade.pay.tip":"Cada ATANFT custa {amount} USDT. A compra deve ser em múltiplos inteiros de {amount} USDT (como {amount1} USDT, {amount2} USDT).","trade.intro":"Crazy Monkey NFT, com seu design exclusivo e edição limitada, é um ativo de grande potencial e uma surpresa em cada coleção.","investPeriod":"Período de staking","order.cumulativeIncome":"Rendimento acumulado","order.amount":"Valor","order.num":"Quantidade","agencyRebate":"Rebate da agência","order.doing":"Em andamento","order.history":"Histórico","registerTime":"Hora de registro","stakingBackProfit":"Recompensa de referência","exchange.fee":"Taxa","trade.sale":"À venda","trade.sold":"Esgotado","trade.sold.message":"Esgotado hoje","order.staked":"Em staking por {day} dias","order.completed.time":"Hora de término","order.completed.time1":"Hora de vencimento: {time}","team.totalRecharge":"Recarga total","trade.numWarning":"Quantidade de NFT insuficiente","Insufficient NFT quantity":"Quantidade de NFT insuficiente","token.buy":"Comprar","token.sell":"Vender","token.noOpen":"Ainda não aberto","token.transaction":"Transação","wallet.withdraw.tip":"Retirada mínima: <span class=\'uni-text-color\'>{min} USDT</span>, será cobrada uma taxa de <span class=\'uni-text-color\'>{fee}%</span> por transação.","wallet.withdraw.tipTwo":"Tempo de chegada: a retirada será creditada na sua carteira em até <span class=\'uni-text-color\'>{time}</span> horas.","wallet.withdraw.tipOne":"Horário de retirada: horário do sistema de <span class=\'uni-text-color\'>{start}</span> a <span class=\'uni-text-color\'>{end}</span>.","star.user":"Jogador estrela"}')
    },
    "0683": function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("e01a"));
        a.default = function(e) {
            return (0, i.default)(e)
        }
    },
    "06d5": function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("8e78")),
            o = {
                navbar: {
                    safeAreaInsetTop: !0,
                    placeholder: !1,
                    fixed: !0,
                    border: !1,
                    leftIcon: "arrow-left",
                    leftText: "",
                    rightText: "",
                    rightIcon: "",
                    title: "",
                    bgColor: "#ffffff",
                    titleWidth: "400rpx",
                    height: "44px",
                    leftIconSize: 20,
                    leftIconColor: i.default.mainColor,
                    autoBack: !1,
                    titleStyle: ""
                }
            };
        a.default = o
    },
    "0725": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            lineProgress: {
                activeColor: "#19be6b",
                inactiveColor: "#ececec",
                percentage: 0,
                showText: !0,
                height: 12
            }
        }
    },
    "0768c": function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("fcf3"));

        function o(e) {
            return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(e)
        }

        function r(e) {
            switch ((0, i.default)(e)) {
                case "undefined":
                    return !0;
                case "string":
                    if (0 == e.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length) return !0;
                    break;
                case "boolean":
                    if (!e) return !0;
                    break;
                case "number":
                    if (0 === e || isNaN(e)) return !0;
                    break;
                case "object":
                    if (null === e || 0 === e.length) return !0;
                    for (var a in e) return !1;
                    return !0
            }
            return !1
        }

        function s(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }

        function d(e) {
            return "function" === typeof e
        }
        t("5c47"), t("0506"), t("c9b5"), t("bf0f"), t("ab80"), t("5ef2"), t("a1c1"), t("23f4"), t("7d2f"), t("9c4e");
        var l = {
            email: function(e) {
                return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(e)
            },
            mobile: function(e) {
                return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(e)
            },
            url: function(e) {
                return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(e)
            },
            date: function(e) {
                return !!e && (o(e) && (e = +e), !/Invalid|NaN/.test(new Date(e).toString()))
            },
            dateISO: function(e) {
                return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: o,
            digits: function(e) {
                return /^\d+$/.test(e)
            },
            idCard: function(e) {
                return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e)
            },
            carNo: function(e) {
                return 7 === e.length ? /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/.test(e) : 8 === e.length && /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/.test(e)
            },
            amount: function(e) {
                return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(e)
            },
            chinese: function(e) {
                return /^[\u4e00-\u9fa5]+$/gi.test(e)
            },
            letter: function(e) {
                return /^[a-zA-Z]*$/.test(e)
            },
            enOrNum: function(e) {
                return /^[0-9a-zA-Z]*$/g.test(e)
            },
            contains: function(e, a) {
                return e.indexOf(a) >= 0
            },
            range: function(e, a) {
                return e >= a[0] && e <= a[1]
            },
            rangeLength: function(e, a) {
                return e.length >= a[0] && e.length <= a[1]
            },
            empty: r,
            isEmpty: r,
            jsonString: function(e) {
                if ("string" === typeof e) try {
                    var a = JSON.parse(e);
                    return !("object" !== (0, i.default)(a) || !a)
                } catch (t) {
                    return !1
                }
                return !1
            },
            landline: function(e) {
                return /^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(e)
            },
            object: s,
            array: function(e) {
                return "function" === typeof Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
            },
            code: function(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
                return new RegExp("^\\d{".concat(a, "}$")).test(e)
            },
            func: d,
            promise: function(e) {
                return s(e) && d(e.then) && d(e.catch)
            },
            video: function(e) {
                return /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i.test(e)
            },
            image: function(e) {
                var a = e.split("?")[0];
                return /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i.test(a)
            },
            regExp: function(e) {
                return e && "[object RegExp]" === Object.prototype.toString.call(e)
            },
            string: function(e) {
                return "string" === typeof e
            }
        };
        a.default = l
    },
    "081d": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            indexList: {
                inactiveColor: "#606266",
                activeColor: "#5677fc",
                indexList: function() {
                    return []
                },
                sticky: !0,
                customNavHeight: 0
            }
        }
    },
    "0d31": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            slider: {
                value: 0,
                blockSize: 18,
                min: 0,
                max: 100,
                step: 1,
                activeColor: "#2979ff",
                inactiveColor: "#c0c4cc",
                blockColor: "#ffffff",
                showValue: !1,
                disabled: !1,
                blockStyle: function() {}
            }
        }
    },
    "0ed9": function(e, a, t) {
        "use strict";
        (function(e) {
            var n = t("f5bd").default;
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var i = n(t("fcf3"));
            t("c1a3"), t("bf0f"), t("18f7"), t("de6c"), t("f3f7"), t("23f4"), t("7d2f"), t("5c47"), t("9c4e"), t("ab80"), t("7a76"), t("c9b5"), t("926e"), t("5ef2"), t("aa9c"), t("2797"), t("9a2c"), t("01a2"), t("6a54"), t("7f48");
            var o = function() {
                    function a(e, a) {
                        return null != a && e instanceof a
                    }
                    var t, n, o;
                    try {
                        t = Map
                    } catch (l) {
                        t = function() {}
                    }
                    try {
                        n = Set
                    } catch (l) {
                        n = function() {}
                    }
                    try {
                        o = Promise
                    } catch (l) {
                        o = function() {}
                    }

                    function r(s, l, c, u, m) {
                        "object" === (0, i.default)(l) && (c = l.depth, u = l.prototype, m = l.includeNonEnumerable, l = l.circular);
                        var p = [],
                            g = [],
                            f = "undefined" != typeof e;
                        return "undefined" == typeof l && (l = !0), "undefined" == typeof c && (c = 1 / 0),
                            function s(c, h) {
                                if (null === c) return null;
                                if (0 === h) return c;
                                var y, v;
                                if ("object" != (0, i.default)(c)) return c;
                                if (a(c, t)) y = new t;
                                else if (a(c, n)) y = new n;
                                else if (a(c, o)) y = new o((function(e, a) {
                                    c.then((function(a) {
                                        e(s(a, h - 1))
                                    }), (function(e) {
                                        a(s(e, h - 1))
                                    }))
                                }));
                                else if (r.__isArray(c)) y = [];
                                else if (r.__isRegExp(c)) y = new RegExp(c.source, d(c)), c.lastIndex && (y.lastIndex = c.lastIndex);
                                else if (r.__isDate(c)) y = new Date(c.getTime());
                                else {
                                    if (f && e.isBuffer(c)) return e.from ? y = e.from(c) : (y = new e(c.length), c.copy(y)), y;
                                    a(c, Error) ? y = Object.create(c) : "undefined" == typeof u ? (v = Object.getPrototypeOf(c), y = Object.create(v)) : (y = Object.create(u), v = u)
                                }
                                if (l) {
                                    var T = p.indexOf(c);
                                    if (-1 != T) return g[T];
                                    p.push(c), g.push(y)
                                }
                                for (var b in a(c, t) && c.forEach((function(e, a) {
                                        var t = s(a, h - 1),
                                            n = s(e, h - 1);
                                        y.set(t, n)
                                    })), a(c, n) && c.forEach((function(e) {
                                        var a = s(e, h - 1);
                                        y.add(a)
                                    })), c) {
                                    var w = Object.getOwnPropertyDescriptor(c, b);
                                    w && (y[b] = s(c[b], h - 1));
                                    try {
                                        var k = Object.getOwnPropertyDescriptor(c, b);
                                        if ("undefined" === k.set) continue;
                                        y[b] = s(c[b], h - 1)
                                    } catch (M) {
                                        if (M instanceof TypeError) continue;
                                        if (M instanceof ReferenceError) continue
                                    }
                                }
                                if (Object.getOwnPropertySymbols) {
                                    var A = Object.getOwnPropertySymbols(c);
                                    for (b = 0; b < A.length; b++) {
                                        var P = A[b],
                                            C = Object.getOwnPropertyDescriptor(c, P);
                                        (!C || C.enumerable || m) && (y[P] = s(c[P], h - 1), Object.defineProperty(y, P, C))
                                    }
                                }
                                if (m) {
                                    var S = Object.getOwnPropertyNames(c);
                                    for (b = 0; b < S.length; b++) {
                                        var x = S[b];
                                        C = Object.getOwnPropertyDescriptor(c, x);
                                        C && C.enumerable || (y[x] = s(c[x], h - 1), Object.defineProperty(y, x, C))
                                    }
                                }
                                return y
                            }(s, c)
                    }

                    function s(e) {
                        return Object.prototype.toString.call(e)
                    }

                    function d(e) {
                        var a = "";
                        return e.global && (a += "g"), e.ignoreCase && (a += "i"), e.multiline && (a += "m"), a
                    }
                    return r.clonePrototype = function(e) {
                        if (null === e) return null;
                        var a = function() {};
                        return a.prototype = e, new a
                    }, r.__objToStr = s, r.__isDate = function(e) {
                        return "object" === (0, i.default)(e) && "[object Date]" === s(e)
                    }, r.__isArray = function(e) {
                        return "object" === (0, i.default)(e) && "[object Array]" === s(e)
                    }, r.__isRegExp = function(e) {
                        return "object" === (0, i.default)(e) && "[object RegExp]" === s(e)
                    }, r.__getRegExpFlags = d, r
                }(),
                r = o;
            a.default = r
        }).call(this, t("12e3").Buffer)
    },
    "0ef0": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            numberKeyboard: {
                mode: "number",
                dotDisabled: !1,
                random: !1
            }
        }
    },
    1074: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            swipeAction: {
                autoClose: !0
            }
        }
    },
    "1099c": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            overlay: {
                show: !1,
                zIndex: 10070,
                duration: 300,
                opacity: .5
            }
        }
    },
    "11a4": function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("9b1b"));
        t("bf0f"), t("2797");
        var o = t("47d6"),
            r = function(e, a, t) {
                var n = {};
                return e.forEach((function(e) {
                    (0, o.isUndefined)(t[e]) ? (0, o.isUndefined)(a[e]) || (n[e] = a[e]) : n[e] = t[e]
                })), n
            };
        a.default = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                t = a.method || e.method || "GET",
                n = {
                    baseURL: e.baseURL || "",
                    method: t,
                    url: a.url || "",
                    params: a.params || {},
                    custom: (0, i.default)((0, i.default)({}, e.custom || {}), a.custom || {}),
                    header: (0, o.deepMerge)(e.header || {}, a.header || {})
                },
                s = ["getTask", "validateStatus"];
            if (n = (0, i.default)((0, i.default)({}, n), r(s, e, a)), "DOWNLOAD" === t)(0, o.isUndefined)(a.timeout) ? (0, o.isUndefined)(e.timeout) || (n.timeout = e.timeout) : n.timeout = a.timeout;
            else if ("UPLOAD" === t) {
                delete n.header["content-type"], delete n.header["Content-Type"];
                var d = ["files", "file", "filePath", "name", "timeout", "formData"];
                d.forEach((function(e) {
                    (0, o.isUndefined)(a[e]) || (n[e] = a[e])
                })), (0, o.isUndefined)(n.timeout) && !(0, o.isUndefined)(e.timeout) && (n.timeout = e.timeout)
            } else {
                var l = ["data", "timeout", "dataType", "responseType", "withCredentials"];
                n = (0, i.default)((0, i.default)({}, n), r(l, e, a))
            }
            return n
        }
    },
    "12dc": function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"Главная","index.trade":"Торговля","index.my":"Мое","userAuth.email":"Электронная почта","userAuth.password":"Пароль","userAuth.forgetPassword":"Забыли пароль?","userAuth.forget":"Забыть","userAuth.reset":"Сбросить","userAuth.changePassword":"Изменить пароль","userAuth.newPassword":"Новый пароль","userAuth.confirmPassword":"Подтвердите пароль","userAuth.loginTitle":"Войти в свой аккаунт","userAuth.signin":"Войти","userAuth.signup":"Зарегистрироваться","userAuth.noAccount":"Нет аккаунта?","userAuth.haveAccount":"Уже есть аккаунт?","userAuth.fundPassword":"Пароль для средств","userAuth.verificationCode":"Код подтверждения","userAuth.referralCode":"Реферальный код","userAuth.send":"Отправить","userAuth.resend":"Повторно отправить","userAuth.exipires":"истекает через <span class=\'time uni-text-color\'>10</span> минут.","userAuth.logging":"вход","message.email":"Пожалуйста, введите свою электронную почту","message.password":"Пожалуйста, введите свой пароль","message.newPassword":"Пожалуйста, введите новый пароль","message.fundPassword":"Пожалуйста, введите пароль для средств","message.confirmPassword":"Пожалуйста, подтвердите свой пароль","message.confirmPasswordError":"Ошибка подтверждения пароля","message.imgCode":"Пожалуйста, введите код подтверждения с изображения","message.verificationCode":"Пожалуйста, введите код подтверждения","message.bnbAddress":"Пожалуйста, введите адрес вашего кошелька BNB","message.trxAddress":"Пожалуйста, введите адрес вашего кошелька TRX","message.logout":"Вы уверены, что хотите выйти?","message.qty":"Пожалуйста, введите количество","message.mocNum":"Пожалуйста, введите количество монет MTC","message.buySuccess":"Поздравляем, успешная покупка!","message.success":"Успешно","message.copySuccess":"Копирование успешно","message.amount":"Пожалуйста, введите сумму","todayearn":"Доход за сегодня","totalwarn":"Общий заработок","mymoc":"Мой Mtc","myteam":"Моя команда","people":"Люди","tips":"Советы","tip":"Совет","all":"Все","amount":"Сумма","record":"Запись","address":"Адрес","exchange":"Обмен","qty":"Количество","buy":"Купить","buyNow":"Купить сейчас","balance":"Баланс","account":"Аккаунт","accountBalance":"Баланс аккаунта","digitalToken":"Цифровой токен","convert":"Конвертировать","confirm":"Подтвердить","error":"Ошибка","ok":"ОК","home.mocmarket":"Тенденции рынка MTC","home.market":"Основные тенденции","home.tip":"Торгуйте криптовалютой с рациональным подходом, управляйте рисками через диверсификацию инвестиций, тщательно исследуйте перед покупкой, рассматривайте долгосрочные вложения, торгуйте осторожно на надежных платформах и следите за рыночными тенденциями для принятия обоснованных решений.","trade.solo1":"Достижение","trade.solo2":"низкорисковых","trade.solo3":"прибылей через стейкинг NFT.","trade.lowRisk":"Низкий риск","trade.shortTerm":"Краткосрочные","trade.highStable":"Высокая стабильная доходность","trade.dailyYield":"Ежедневная доходность","trade.investPeriod":"Период инвестирования","trade.buy":"Купить","trade.autoReinvestment":"Автоматическое реинвестирование","trade.autoReinvestmentTip":"Автоматическое реинвестирование: помогает быстро реинвестировать средства для получения большей прибыли","language.title":"Язык","my.order":"Мой стейкинг майнинг","my.team":"Моя команда","my.invite":"Пригласить друга","my.security":"Настройки безопасности","my.download":"Скачать приложение","my.about":"О нас","my.appVersion":"Версия приложения","my.logout":"Выйти","customer.service":"Служба поддержки","customer.group":"Группа","customer.person":"Человек","customer.tip":"Не удается открыть приложение {appName}. Убедитесь, что {appName} установлено.","wallet.title":"Мой кошелек","wallet.nftRelease":"Выпуск NFT","wallet.nftReleaseTip":"Вы уверены, что хотите выпустить NFT?","wallet.releaseSuccess":"Выпуск успешно","wallet.mocRelease":"Выпуск MTC","wallet.history":"История транзакций","wallet.all":"Все","fundType":"Типы транзакций","recharge":"Пополнение","rechargeProfit":"Скидка на депозит","withdraw":"Вывод","commission":"Доходы от комиссии","gift":"Подарки платформы","inviteProfit":"Реферальная скидка","staking":"Стейкинг","stakingProfit":"Доходы от стейкинга","unstaking":"Обмен NFT","purchaseMtc":"Купить Токены MTC","moc2Usdt":"MTC в USDT","usdt2Mtc":"USDT в MTC","recharge.tip":"Пожалуйста, пополните USDT, используя сеть {walletType}. После отправки подождите немного и проверьте, поступила ли транзакция в течение 1-2 минут.","withdraw.address":"Адрес кошелька для вывода {withdrawalType}","withdraw.tip":"Минимальная сумма вывода: <span class=\'uni-text-color\'>{min} USDT</span>, комиссия <span class=\'uni-text-color\'>{fee}%</span> за транзакцию.","withdraw.amount":"Сумма USDT","withdraw.submit":"Вывести","security.login":"Вход","security.fund":"Фонд","security.setting":"Настройка","security.tip":"Код подтверждения будет отправлен на вашу электронную почту <span class=\'uni-text-color\'>{account}</span>","invite.title":"【Сканировать и зарегистрироваться】","invite.code":"Реферальный код","invite.copyCode":"Скопировать код","invite.copyLink":"Скопировать ссылку","invite.tip":"Пригласите друзей сделать первый депозит, платформа даст вам <span>{inviteProfit}%</span> от суммы депозита и <span>{levelProfit}%</span> от их будущих доходов.","download.title":"【Сканировать и скачать】","download.android":"Приложение для Android","team.totalCommissions":"Общая комиссия","team.todayCommissions":"Комиссия за сегодня","team.performance":"Производительность команды","team.nft":"Командный стейкинг","team.member":"Члены команды","team.staking":"NFT, Завершенные Командой","team.product":"Номер командного майнинга","team.referralCode":"Реферальный код","team.detail":"Посмотреть подробности","team.myEarnings":"Мои доходы","order.count":"Общее количество NFT","order.stakedNft":"Сумма в стейкинге","order.unStakedNft":"Завершённый стейкинг","order.expectedEarnings":"Ожидаемый доход","order.releasedEarnings":"Освобожденный доход","order.expected":"Ожидается","order.investPeriod":"Период инвестирования","order.mining":"Майнинг","order.completed":"Завершено","order.earnings":"Доходы","order.autoReinvestment":"Автоматическое реинвестирование","moc.center":"Центр MTC","moc.myMtc":"Мои MTC","moc.num":"Количество монет MTC","moc.currentPrice":"Цена MTC","moc.discountPrice":"Сниженная цена Mtc","moc.price":"Цена","moc.available":"Доступно","moc.rule":"Правило","moc.rule1":"За каждое застейканное NFT вы получите Токены MTC, эквивалентные {productPercent}% от доходов.","moc.rule2":"Чтобы зарабатывать проценты на MTC-монетах, сначала застейкайте их. После стейкинга они не могут быть обменены, пока вы их не разстейкаете.","moc.rule3":"Токены MTC могут быть обменены на USDT на основе реальной рыночной стоимости MTC-монет.","moc.staking":"Стейкинг","moc.unstaking":"Разблокировка стейкинга","moc.stakingProfit":"Доходы от MTC Staking","moc.activity":"{percent}% скидка на MTC","moc.activity.holdings":"Держания","moc.activity.buy":"Купить MTC","moc.activity.ended":"Событие MTC завершено","moc.activity.subscription":"Подтверждение подписки в процессе, пожалуйста, подождите.","moc.activity.progress":"Подтверждение подписки в процессе, пожалуйста, подождите.","moc.activity.rule1":"Период акции: {start} - {end}","moc.activity.rule2":"Все Токены MTC в этом событии доступны по {percent}% скидке.","moc.activity.rule3":"Сколько застейканных NFT необходимо для подписки на MTC-токены, эквивалентные USDT","moc.activity.rule4":"Количество MTC-монет ограничено, действует принцип \'первый пришел - первый обслужен\'; событие закончится, как только подписка будет завершена.","moc.activity.noHoldings":"Нет активов","notice.title":"Мои уведомления","trans.notCredited":"Не зачислено?","trans.hash":"Хэш транзакции {walletType}","trans.hashSuccess":"Запрос транзакции {walletType} успешен","trans.hashError":"Введите хэш транзакции {walletType}","message.amountMinimum":"Минимальная сумма вывода: {min} USDT","message.loging":"Вход","message.withdrawSucces":"Запрос на вывод успешно отправлен.","withdrawFee":"Отказ в выводе","message.cancelContinuity":"Вы уверены, что хотите отменить непрерывность?","withdrawTime":"Время вывода средств ежедневно с {start} до {end} (UTC).","Token create error":"Ошибка создания токена","Sending too frequently, please try again later":"Отправка слишком часто, пожалуйста, попробуйте позже","Sys error, not email can send":"Системная ошибка, невозможно отправить электронное письмо","Sys error, email send error":"Системная ошибка, ошибка отправки электронной почты","Error request":"Ошибка запроса","You can\'t login":"Вы не можете войти","Please input the email":"Введите адрес электронной почты","Unsupported email suffix":"Неподдерживаемый суффикс электронной почты","Email is exist":"Этот адрес электронной почты уже существует","Email is not exist":"Такой адрес электронной почты не существует","Not the correct email address":"Неверный адрес электронной почты","Payment password must be greater than or equal to 6 digits":"Пароль для оплаты должен быть не менее 6 символов","Password must be greater than or equal to 6 digits":"Пароль должен быть не менее 6 символов","Please input the password":"Введите пароль","Please input the Payment password":"Введите пароль для оплаты","The original password is incorrect":"Неверный исходный пароль","Please input the verification code":"Введите код подтверждения","The verification code is incorrect or has expired. Please obtain it again":"Неверный или просроченный код подтверждения. Получите его снова","The verification code is incorrect":"Неверный код подтверждения","Account or password error":"Ошибка учетной записи или пароля","Payment password error":"Ошибка пароля для оплаты","Please input start time":"Введите начальное время","Please input end time":"Введите конечное время","Please verify account":"Пожалуйста, подтвердите учетную запись","Product not exist":"Продукт не существует","Product Suspend sales":"Продажи продукта приостановлены","Insufficient balance":"Недостаточный баланс","Balance too little":"Слишком маленький баланс","Product income":"Доход от продукта","Buy product":"Покупка продукта","Buy platform coin":"Покупка Токены MTC","recharge back":"Возврат перезарядки","error add":"ошибка добавления","coin exchange amount":"Объем обмена Токены MTC","coin interest":"Процентная ставка Токены MTC","coin is staking please cancel staking":"Монета MTC находится в стейкинге, пожалуйста, отмените стейкинг","Platform change":"Изменение платформы","withdraw refuse":"отказ в выводе","Not meeting the minimum withdrawal amount":"Не достигнут минимальный размер вывода","Not yet due for withdrawal time":"Еще не наступил время для вывода","Please verify email":"Пожалуйста, подтвердите адрес электронной почты","Activity amount must greater in progress product total amount":"Сумма активности должна быть больше текущей общей суммы продукта","Insufficient quantity":"Токены MTC распроданы","Activity not exist":"Активность скидки не существует","Buy activity":"Покупка скидочных монет MTC","Not Start":"Активность скидки еще не началась","Is over":"Активность скидки завершена","Create address error":"Ошибка создания адреса","Not a correct address":"Неверный адрес","Processed":"Обработано","Out wallet password is empty":"Пароль внешнего кошелька пуст","Trans error please check wallet":"Ошибка трансфера, проверьте кошелек","Please input trans hash":"Введите хеш трансфера","Please input coin type":"Выберите тип сети","Not Find Trans":"Трансфер не найден","Transaction processed":"Транзакция обработана","Transaction does not belong to you":"Транзакция не принадлежит вам","Transaction does not USDT":"Транзакция не в USDT","Channel":"Канал","Consultation":"Консультация","Consult":"Консультироваться","Group":"Группа","nonWithdrawAmount":"Невыводимая сумма","checkIn":"Отметка","checkInTip":"Сегодняшняя отметка выполнена успешно!","Today Has Sign In":"Сегодня уже отмечено","todayChecked":"Сегодня уже отмечено","registerGift":"Подарок за регистрацию","dailyCheckIn":"Ежедневная отметка","withdraw.addressSetting":"Указать адрес {withdrawalType}","trade.open":"Открыто","trade.noOpen":"Закрыто","trade.noOpen.message":"Продукт не открыт","NFT Staking Mining":"NFT стейкинг-майнинг","days":"Дней","hours":"Часы","minutes":"Минуты","index.wallet":"Кошелёк","index.mtcCenter":"Центр MTC","index.myNft":"Мой NFT","mata.title":"Введение в ATANFT","mata.intro1":"Майнинг ATANFT основан на приватной экосистеме Manta Network и разработан как система поощрения на основе токенов, ориентированная на \'владение приватными NFT и вклад в экосистему\'. Основная цель — с помощью майнинга стимулировать пользователей участвовать в обороте, применении и развитии экосистемы ATANFT, повышая активность системы приватных активов Manta. Участники получают токены MTC или эксклюзивные приватные NFT-награды через стейкинг и взаимодействия.","mata.intro2":"Модель майнинга сосредоточена на \'Приватность + Взаимодействие с экосистемой\' и делится на два основных типа:","mata.intro3":"<text class=\'bold\'>Майнинг через стейкинг</text>: Пользователи размещают свои ATANFT (включая обычные цифровые коллекционные предметы, SBT-сертификаты и т.д.) в определённый смарт-контракт. Доход рассчитывается на основе редкости ATANFT (например, genesis или ограниченные серии), времени удержания и истории приватных взаимодействий. Например, стейкинг \'приватного идентификационного ATANFT\' обеспечивает базовый годовой доход, а при включении функции \'транзакций с нулевым разглашением\' (например, через MantaPay) коэффициент награды увеличивается на 10%-20%. Доход выплачивается ежедневно в токенах MTC.","mata.intro4":"<text class=\'bold\'>Майнинг через взаимодействие с экосистемой</text>: Стимулирует пользователей использовать ATANFT в экосистеме Manta для выполнения определённых задач, например, интеграция ATANFT в блокчейн-игры (как персонаж или предмет), использование ATANFT как залога LP в DeFi-модулях, таких как MantaSwap, или приглашение новых пользователей для создания их первого ATANFT. Разные задачи приносят очки, которые при достижении порога можно обменять на \'памятный ATANFT для майнинга\' с повышенным доходом или напрямую на токены MTC. Задачи высокой сложности (например, кроссчейн-передача приватных NFT) открывают ограниченные эксклюзивные права.","token.rule1":"Пользователи должны разместить приобретённые ATANFT в определённом смарт-контракте. Доход рассчитывается на основе редкости ATANFT. Награды за майнинг выплачиваются в токенах MTC и автоматически зачисляются на аккаунт пользователя каждые два часа.","token.rule2":"Токены MTC можно обменять на USDT по рыночному курсу.","trade.pay":"Сумма платежа","trade.pay.tip":"Каждый ATANFT стоит {amount} USDT. Покупка должна быть кратной {amount} USDT (например, {amount1} USDT, {amount2} USDT).","trade.intro":"Crazy Monkey NFT с уникальным дизайном и ограниченной серией — это актив с большим потенциалом и сюрпризами в каждой коллекции.","investPeriod":"Период стейкинга","order.cumulativeIncome":"Совокупный доход","order.amount":"Сумма","order.num":"Количество","agencyRebate":"Агентская скидка","order.doing":"В процессе","order.history":"История","registerTime":"Время регистрации","stakingBackProfit":"Награда за рекомендации","exchange.fee":"Комиссия","trade.sale":"В продаже","trade.sold":"Продано","trade.sold.message":"Сегодня распродано","order.staked":"Застейкано на {day} дней","order.completed.time":"Время окончания","order.completed.time1":"Время истечения: {time}","team.totalRecharge":"Общая зарядка","trade.numWarning":"Недостаточное количество NFT","Insufficient NFT quantity":"Недостаточное количество NFT","token.buy":"Купить","token.sell":"Продать","token.noOpen":"Ещё не открыто","token.transaction":"Транзакция","wallet.withdraw.tip":"Минимальная сумма вывода: <span class=\'uni-text-color\'>{min} USDT</span>, комиссия за транзакцию <span class=\'uni-text-color\'>{fee}%</span>.","wallet.withdraw.tipTwo":"Время зачисления: вывод будет зачислен на ваш кошелек в течение <span class=\'uni-text-color\'>{time}</span> часов.","wallet.withdraw.tipOne":"Время вывода: системное время с <span class=\'uni-text-color\'>{start}</span> до <span class=\'uni-text-color\'>{end}</span>.","star.user":"Звёздный игрок"}')
    },
    1583: function(e, a, t) {
        var n = {
            "./ar.json": "e3b8",
            "./de.json": "5565",
            "./en.json": "536a",
            "./es.json": "4f38",
            "./fr.json": "9f63",
            "./it.json": "d9cc",
            "./ja.json": "2ed8",
            "./kr.json": "c6be",
            "./ms.json": "ebf7",
            "./pt.json": "066c",
            "./ru.json": "12dc",
            "./sl.json": "0540",
            "./zh_hant.json": "fb2d"
        };

        function i(e) {
            var a = o(e);
            return t(a)
        }

        function o(e) {
            if (!t.o(n, e)) {
                var a = new Error("Cannot find module '" + e + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            return n[e]
        }
        i.keys = function() {
            return Object.keys(n)
        }, i.resolve = o, e.exports = i, i.id = "1583"
    },
    "15ae": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            rowNotice: {
                text: "",
                icon: "volume",
                mode: "",
                color: "#f9ae3d",
                bgColor: "#fdf6ec",
                fontSize: 14,
                speed: 80
            }
        }
    },
    "18a5": function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("9b8e")),
            o = n(t("8f59"));
        i.default.use(o.default);
        var r = new o.default.Store({
                state: {
                    hasLogin: uni.getStorageSync("hasLogin") || !1,
                    token: uni.getStorageSync("token") || "",
                    refreshToken: uni.getStorageSync("refreshToken") || "",
                    timerSwitch: !0,
                    dictList: uni.getStorageSync("dictList") || [],
                    account: uni.getStorageSync("account") || "abcdefghi@gmail.com",
                    avatar: uni.getStorageSync("avatar") || 0,
                    loginTime: uni.getStorageSync("loginTime") || 0,
                    tokenExpireTimeSecond: uni.getStorageSync("tokenExpireTimeSecond") || 0,
                    lang: uni.getStorageSync("lang") || "en",
                    userInfo: uni.getStorageSync("userInfo") || null,
                    walletInfo: uni.getStorageSync("walletInfo") || null,
                    walletId: uni.getStorageSync("walletId") || "",
                    walletPlatformCoinId: uni.getStorageSync("walletPlatformCoinId") || "",
                    langList: uni.getStorageSync("langList") || [],
                    langInfo: uni.getStorageSync("langInfo") || null,
                    ruleInfo: uni.getStorageSync("ruleInfo") || null,
                    mocCoinCount: uni.getStorageSync("mocCoinCount") || 0
                },
                mutations: {
                    login: function(e, a) {
                        e.hasLogin = !0, e.account = a.account, e.userInfo = a, e.token = a.token, e.refreshToken = a.refreshToken, e.tokenExpireTimeSecond = a.tokenExpireTimeSecond, e.walletId = a.walletId, e.walletPlatformCoinId = a.walletPlatformCoinId, e.loginTime = a.loginTime, uni.setStorageSync("hasLogin", !0), uni.setStorageSync("userInfo", a), uni.setStorageSync("account", a.account), uni.setStorageSync("token", a.token), uni.setStorageSync("refreshToken", a.refreshToken), uni.setStorageSync("tokenExpireTimeSecond", a.tokenExpireTimeSecond), uni.setStorageSync("walletId", a.walletId), uni.setStorageSync("walletPlatformCoinId", a.walletPlatformCoinId), uni.setStorageSync("loginTime", (new Date).getTime()), uni.$u.http.setConfig((function(e) {
                            return e.header.token = a.token, e
                        }))
                    },
                    logout: function(e) {
                        e.hasLogin = !1, e.userInfo = {}, uni.clearStorage(), uni.setStorage({
                            key: "hasLogin",
                            data: e.hasLogin
                        })
                    },
                    setRefreshToken: function(e, a) {
                        e.hasLogin = !0, uni.setStorageSync("hasLogin", !0), uni.setStorageSync("token", a.token), uni.setStorageSync("refreshToken", a.refreshToken), uni.setStorageSync("tokenExpireTimeSecond", a.tokenExpireTimeSecond), uni.setStorageSync("loginTime", (new Date).getTime()), uni.$u.http.setConfig((function(e) {
                            return e.header.token = a.token, e
                        }))
                    },
                    SET_TIMER_SWITCH: function(e, a) {
                        e.timerSwitch = a
                    },
                    SET_DICT_LIST_BY_KEY: function(e, a) {
                        e.dictList = a
                    },
                    SET_ACCOUNT: function(e, a) {
                        e.account = a
                    },
                    SET_AVATAR: function(e, a) {
                        e.avatar = a
                    },
                    SET_LANG: function(e, a) {
                        e.lang = a
                    },
                    SET_LANG_LIST: function(e, a) {
                        e.langList = a
                    },
                    SET_LANG_INFO: function(e, a) {
                        e.langInfo = a
                    },
                    SET_WALLET_INFO: function(e, a) {
                        e.walletInfo = a
                    },
                    SET_RULE_INFO: function(e, a) {
                        e.ruleInfo = a
                    },
                    SET_MTC_COIN_COUNT: function(e, a) {
                        e.mocCoinCount = a
                    },
                    SET_USER_INFO: function(e, a) {
                        e.userInfo = a
                    }
                },
                actions: {
                    setTimerSwitch: function(e, a) {
                        var t = e.commit;
                        t("SET_TIMER_SWITCH", a)
                    },
                    setDictListByKey: function(e, a) {
                        var t = e.commit;
                        t("SET_DICT_LIST_BY_KEY", a), uni.setStorage({
                            key: "dictList",
                            data: a
                        })
                    },
                    setAccount: function(e, a) {
                        var t = e.commit;
                        t("SET_ACCOUNT", a), uni.setStorageSync("account", a)
                    },
                    setAvatar: function(e, a) {
                        var t = e.commit;
                        t("SET_AVATAR", a), uni.setStorageSync("avatar", a)
                    },
                    setLang: function(e, a) {
                        var t = e.commit;
                        t("SET_LANG", a), uni.setStorageSync("lang", a)
                    },
                    setLangList: function(e, a) {
                        var t = e.commit;
                        t("SET_LANG_LIST", a), uni.setStorageSync("langList", a)
                    },
                    setLangInfo: function(e, a) {
                        var t = e.commit;
                        t("SET_LANG_INFO", a), uni.setStorageSync("langInfo", a), uni.setLocale(a.language)
                    },
                    setWalletInfo: function(e, a) {
                        var t = e.commit;
                        t("SET_WALLET_INFO", a), uni.setStorageSync("walletInfo", a)
                    },
                    setRuleInfo: function(e, a) {
                        var t = e.commit;
                        t("SET_RULE_INFO", a), uni.setStorageSync("ruleInfo", a)
                    },
                    setUserInfo: function(e, a) {
                        var t = e.commit;
                        t("SET_USER_INFO", a), uni.setStorageSync("userInfo", a)
                    },
                    setMtcCoinCount: function(e, a) {
                        var t = e.commit;
                        t("SET_MTC_COIN_COUNT", a), uni.setStorageSync("mocCoinCount", a)
                    }
                },
                getters: {
                    timerSwitch: function(e) {
                        return e.timerSwitch
                    },
                    hasLogin: function(e) {
                        return e.hasLogin
                    },
                    account: function(e) {
                        return e.account
                    },
                    userInfo: function(e) {
                        return e.userInfo
                    },
                    token: function(e) {
                        return e.token
                    },
                    dictList: function(e) {
                        return e.dictList
                    },
                    avatar: function(e) {
                        return e.avatar
                    },
                    loginTime: function(e) {
                        return e.loginTime
                    },
                    tokenExpireTimeSecond: function(e) {
                        return e.tokenExpireTimeSecond
                    },
                    lang: function(e) {
                        return e.lang
                    },
                    langList: function(e) {
                        return e.langList
                    },
                    langInfo: function(e) {
                        return e.langInfo
                    },
                    ruleInfo: function(e) {
                        return e.ruleInfo
                    },
                    walletInfo: function(e) {
                        return e.walletInfo
                    },
                    walletId: function(e) {
                        return e.walletId
                    },
                    walletPlatformCoinId: function(e) {
                        return e.walletPlatformCoinId
                    },
                    mocCoinCount: function(e) {
                        return e.mocCoinCount
                    }
                }
            }),
            s = r;
        a.default = s
    },
    "1a32": function(e, a, t) {
        t("fd3c"), t("dc8a"), t("bf0f"), t("5c47"), t("5ef2"), t("aa9c"), t("0506"), t("dd2b"), e.exports = {
            props: {
                customStyle: {
                    type: [Object, String],
                    default: function() {
                        return {}
                    }
                },
                customClass: {
                    type: String,
                    default: ""
                },
                url: {
                    type: String,
                    default: ""
                },
                linkType: {
                    type: String,
                    default: "navigateTo"
                }
            },
            data: function() {
                return {}
            },
            onLoad: function() {
                this.$u.getRect = this.$uGetRect
            },
            created: function() {
                this.$u.getRect = this.$uGetRect
            },
            computed: {
                $u: function() {
                    return uni.$u.deepMerge(uni.$u, {
                        props: void 0,
                        http: void 0,
                        mixin: void 0
                    })
                },
                bem: function() {
                    return function(e, a, t) {
                        var n = this,
                            i = "u-".concat(e, "--"),
                            o = {};
                        return a && a.map((function(e) {
                            o[i + n[e]] = !0
                        })), t && t.map((function(e) {
                            n[e] ? o[i + e] = n[e] : delete o[i + e]
                        })), Object.keys(o)
                    }
                }
            },
            methods: {
                openPage: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "url",
                        a = this[e];
                    a && uni[this.linkType]({
                        url: a
                    })
                },
                $uGetRect: function(e, a) {
                    var t = this;
                    return new Promise((function(n) {
                        uni.createSelectorQuery().in(t)[a ? "selectAll" : "select"](e).boundingClientRect((function(e) {
                            a && Array.isArray(e) && e.length && n(e), !a && e && n(e)
                        })).exec()
                    }))
                },
                getParentData: function() {
                    var e = this,
                        a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    this.parent || (this.parent = {}), this.parent = uni.$u.$parent.call(this, a), this.parent.children && -1 === this.parent.children.indexOf(this) && this.parent.children.push(this), this.parent && this.parentData && Object.keys(this.parentData).map((function(a) {
                        e.parentData[a] = e.parent[a]
                    }))
                },
                preventEvent: function(e) {
                    e && "function" === typeof e.stopPropagation && e.stopPropagation()
                },
                noop: function(e) {
                    this.preventEvent(e)
                }
            },
            onReachBottom: function() {
                uni.$emit("uOnReachBottom")
            },
            beforeDestroy: function() {
                var e = this;
                if (this.parent && uni.$u.test.array(this.parent.children)) {
                    var a = this.parent.children;
                    a.map((function(t, n) {
                        t === e && a.splice(n, 1)
                    }))
                }
            }
        }
    },
    "1a7b": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            countTo: {
                startVal: 0,
                endVal: 0,
                duration: 2e3,
                autoplay: !0,
                decimals: 0,
                useEasing: !0,
                decimal: ".",
                color: "#606266",
                fontSize: 22,
                bold: !1,
                separator: ""
            }
        }
    },
    "1ef5": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {}
    },
    "1f4e": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            cellGroup: {
                title: "",
                border: !0,
                customStyle: {}
            }
        }
    },
    "240f": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            avatar: {
                src: "",
                shape: "circle",
                size: 40,
                mode: "scaleToFill",
                text: "",
                bgColor: "#c0c4cc",
                color: "#ffffff",
                fontSize: 18,
                icon: "",
                mpAvatar: !1,
                randomBgColor: !1,
                defaultUrl: "",
                colorIndex: "",
                name: ""
            }
        }
    },
    "244e": function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0, t("5c47"), t("0506"), t("bf0f");
        var i = n(t("2634")),
            o = n(t("2fdc")),
            r = n(t("80b1")),
            s = n(t("efe5")),
            d = function() {
                function e() {
                    (0, r.default)(this, e), this.config = {
                        type: "navigateTo",
                        url: "",
                        delta: 1,
                        params: {},
                        animationType: "pop-in",
                        animationDuration: 300,
                        intercept: !1
                    }, this.route = this.route.bind(this)
                }
                return (0, s.default)(e, [{
                    key: "addRootPath",
                    value: function(e) {
                        return "/" === e[0] ? e : "/".concat(e)
                    }
                }, {
                    key: "mixinParam",
                    value: function(e, a) {
                        e = e && this.addRootPath(e);
                        var t = "";
                        return /.*\/.*\?.*=.*/.test(e) ? (t = uni.$u.queryParams(a, !1), e + "&".concat(t)) : (t = uni.$u.queryParams(a), e + t)
                    }
                }, {
                    key: "route",
                    value: function() {
                        var e = (0, o.default)((0, i.default)().mark((function e() {
                            var a, t, n, o, r = arguments;
                            return (0, i.default)().wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = r.length > 0 && void 0 !== r[0] ? r[0] : {}, t = r.length > 1 && void 0 !== r[1] ? r[1] : {}, n = {}, "string" === typeof a ? (n.url = this.mixinParam(a, t), n.type = "navigateTo") : (n = uni.$u.deepMerge(this.config, a), n.url = this.mixinParam(a.url, a.params)), n.url !== uni.$u.page()) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        if (t.intercept && (this.config.intercept = t.intercept), n.params = t, n = uni.$u.deepMerge(this.config, n), "function" !== typeof uni.$u.routeIntercept) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 12, new Promise((function(e, a) {
                                            uni.$u.routeIntercept(n, e)
                                        }));
                                    case 12:
                                        o = e.sent, o && this.openPage(n), e.next = 17;
                                        break;
                                    case 16:
                                        this.openPage(n);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "openPage",
                    value: function(e) {
                        var a = e.url,
                            t = (e.type, e.delta),
                            n = e.animationType,
                            i = e.animationDuration;
                        "navigateTo" != e.type && "to" != e.type || uni.navigateTo({
                            url: a,
                            animationType: n,
                            animationDuration: i
                        }), "redirectTo" != e.type && "redirect" != e.type || uni.redirectTo({
                            url: a
                        }), "switchTab" != e.type && "tab" != e.type || uni.switchTab({
                            url: a
                        }), "reLaunch" != e.type && "launch" != e.type || uni.reLaunch({
                            url: a
                        }), "navigateBack" != e.type && "back" != e.type || uni.navigateBack({
                            delta: t
                        })
                    }
                }]), e
            }(),
            l = (new d).route;
        a.default = l
    },
    "24b3": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            search: {
                shape: "round",
                bgColor: "#f2f2f2",
                placeholder: "请输入关键字",
                clearabled: !0,
                focus: !1,
                showAction: !0,
                actionStyle: function() {
                    return {}
                },
                actionText: "搜索",
                inputAlign: "left",
                inputStyle: function() {
                    return {}
                },
                disabled: !1,
                borderColor: "transparent",
                searchIconColor: "#909399",
                searchIconSize: 22,
                color: "#606266",
                placeholderColor: "#909399",
                searchIcon: "search",
                margin: "0",
                animation: !1,
                value: "",
                maxlength: "-1",
                height: 32,
                label: null
            }
        }
    },
    2599: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0, t("e062"), t("64aa");
        var n = {
            numberBox: {
                name: "",
                value: 0,
                min: 1,
                max: Number.MAX_SAFE_INTEGER,
                step: 1,
                integer: !1,
                disabled: !1,
                disabledInput: !1,
                asyncChange: !1,
                inputWidth: 35,
                showMinus: !0,
                showPlus: !0,
                decimalLength: null,
                longPress: !0,
                color: "#323233",
                buttonSize: 30,
                bgColor: "#EBECEE",
                cursorSpacing: 100,
                disableMinus: !1,
                disablePlus: !1,
                iconStyle: ""
            }
        };
        a.default = n
    },
    "265f": function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("536a")),
            o = n(t("2ed8")),
            r = n(t("9f63")),
            s = n(t("5565")),
            d = n(t("12dc")),
            l = n(t("fb2d")),
            c = n(t("c6be")),
            u = n(t("e3b8")),
            m = n(t("0540")),
            p = n(t("4f38")),
            g = n(t("ebf7")),
            f = n(t("d9cc")),
            h = n(t("066c")),
            y = {
                en: i.default,
                ja: o.default,
                fr: r.default,
                de: s.default,
                ru: d.default,
                tw: l.default,
                hk: l.default,
                kr: c.default,
                ar: u.default,
                sl: m.default,
                es: p.default,
                ms: g.default,
                it: f.default,
                pt: h.default,
                br: h.default
            };
        a.default = y
    },
    "2b71": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            transition: {
                show: !1,
                mode: "fade",
                duration: "300",
                timingFunction: "ease-out"
            }
        }
    },
    "2bc8": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            scrollList: {
                indicatorWidth: 50,
                indicatorBarWidth: 20,
                indicator: !0,
                indicatorColor: "#f2f2f2",
                indicatorActiveColor: "#3c9cff",
                indicatorStyle: ""
            }
        }
    },
    "2e4a": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            skeleton: {
                loading: !0,
                animate: !0,
                rows: 0,
                rowsWidth: "100%",
                rowsHeight: 18,
                title: !0,
                titleWidth: "50%",
                titleHeight: 18,
                avatar: !1,
                avatarSize: 32,
                avatarShape: "circle"
            }
        }
    },
    "2ed8": function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"ホーム","index.trade":"取引","index.my":"マイ","userAuth.email":"メール","userAuth.password":"パスワード","userAuth.forgetPassword":"パスワードをお忘れですか？","userAuth.forget":"忘れる","userAuth.reset":"リセット","userAuth.changePassword":"パスワードを変更","userAuth.newPassword":"新しいパスワード","userAuth.confirmPassword":"パスワードを確認","userAuth.loginTitle":"アカウントにサインイン","userAuth.signin":"サインイン","userAuth.signup":"サインアップ","userAuth.noAccount":"アカウントを持っていませんか？","userAuth.haveAccount":"すでにアカウントをお持ちですか？","userAuth.fundPassword":"資金パスワード","userAuth.verificationCode":"確認コード","userAuth.referralCode":"紹介コード","userAuth.send":"送信","userAuth.resend":"再送する","userAuth.exipires":"有効期限は<span class=\'time uni-text-color\'>10</span>分です。","userAuth.logging":"ログイン中","message.email":"メールアドレスを入力してください","message.password":"パスワードを入力してください","message.newPassword":"新しいパスワードを入力してください","message.fundPassword":"資金パスワードを入力してください","message.confirmPassword":"パスワードを確認してください","message.confirmPasswordError":"パスワードの確認エラー","message.imgCode":"画像確認コードを入力してください","message.verificationCode":"確認コードを入力してください","message.bnbAddress":"BNBウォレットアドレスを入力してください","message.trxAddress":"TRXウォレットアドレスを入力してください","message.logout":"本当に終了しますか？","message.qty":"数量を入力してください","message.mocNum":"MTCコインの数を入力してください","message.buySuccess":"おめでとうございます、購入成功！","message.success":"成功","message.copySuccess":"コピー成功","message.amount":"金額を入力してください","todayearn":"今日の収益","totalwarn":"総収益","mymoc":"私のMTC","myteam":"私のチーム","people":"人々","tips":"ヒント","tip":"ヒント","all":"全て","amount":"金額","record":"記録","address":"住所","exchange":"交換","qty":"数量","buy":"購入","buyNow":"今すぐ購入","balance":"残高","account":"アカウント","accountBalance":"アカウント残高","digitalToken":"デジタルトークン","convert":"変換","confirm":"確認","error":"エラー","ok":"OK","home.mocmarket":"MTC市場動向","home.market":"主流の動向","home.tip":"合理的な心構えで暗号通貨を取引し、投資を分散させてリスクを管理し、購入前に徹底的な調査を行い、長期保有を検討し、安全なプラットフォームで慎重に取引し、市場の動向を把握して情報に基づいた意思決定を行ってください。","trade.solo1":"低リスク","trade.solo2":"利益を達成する","trade.solo3":"NFTステーキング。","trade.lowRisk":"低リスク","trade.shortTerm":"短期","trade.highStable":"高安定リターン","trade.dailyYield":"日次利回り","trade.investPeriod":"投資期間","trade.buy":"購入","trade.autoReinvestment":"自動再投資","trade.autoReinvestmentTip":"自動再投資: 資金を迅速に再投入し、より多くの利益を得るための支援。","language.title":"言語","my.order":"私のステーキングマイニング","my.team":"私のチーム","my.invite":"友達を招待","my.security":"セキュリティ設定","my.download":"アプリをダウンロード","my.about":"私たちについて","my.appVersion":"アプリバージョン","my.logout":"ログアウト","customer.service":"カスタマーサービス","customer.group":"グループ","customer.person":"人物","customer.tip":"{appName}アプリを開くことができません。{appName}がインストールされていることを確認してください。","wallet.title":"私のウォレット","wallet.nftRelease":"NFTリリース","wallet.nftReleaseTip":"NFTをリリースしてもよろしいですか？","wallet.releaseSuccess":"リリース成功","wallet.mocRelease":"MTCリリース","wallet.history":"取引履歴","wallet.all":"すべて","fundType":"取引の種類","recharge":"リチャージ","rechargeProfit":"入金リベート","withdraw":"引き出し","commission":"コミッション収益","gift":"プラットフォームのギフト","inviteProfit":"紹介リベート","staking":"ステーキング","stakingProfit":"ステーキング収益","unstaking":"NFT交換","purchaseMtc":"MTCコインを購入","moc2Usdt":"MTCからUSDTへ","usdt2Mtc":"USDTからMTCへ","recharge.tip":"{walletType}ネットワークを使用してUSDTをリチャージしてください。送信後、取引が到着したかどうかを確認するまで1〜2分間お待ちください。","withdraw.address":"{withdrawalType}ウォレットの引き出しアドレス","withdraw.tip":"最低引き出し金額: <span class=\'uni-text-color\'>{min} USDT</span>、取引ごとに<span class=\'uni-text-color\'>{fee}%</span>の手数料。","withdraw.amount":"USDT金額","withdraw.submit":"引き出し","security.login":"ログイン","security.fund":"資金","security.setting":"設定","security.tip":"確認コードがメール<span class=\'uni-text-color\'>{account}</span>に送信されます","invite.title":"【スキャンして登録】","invite.code":"紹介コード","invite.copyCode":"コードをコピー","invite.copyLink":"リンクをコピー","invite.tip":"友達を招待して最初の入金を行うと、プラットフォームは入金額の<span>{inviteProfit}%</span>と将来の収益の<span>{levelProfit}%</span>を提供します。","download.title":"【スキャンしてダウンロード】","download.android":"Androidアプリ","team.totalCommissions":"総コミッション","team.todayCommissions":"今日のコミッション","team.performance":"チームのパフォーマンス","team.nft":"チームステーキング","team.member":"チームメンバー","team.staking":"チームによって完了したNFT","team.product":"チームのマイニング数","team.referralCode":"紹介コード","team.detail":"詳細を見る","team.myEarnings":"私の収益","order.count":"総NFT","order.stakedNft":"ステーキング金額","order.unStakedNft":"終了したステーキング金額","order.expectedEarnings":"予想収益","order.releasedEarnings":"リリースされた収益","order.expected":"予想","order.investPeriod":"投資期間","order.mining":"マイニング","order.completed":"完了","order.earnings":"収益","order.autoReinvestment":"自動再投資","moc.center":"MTCセンター","moc.myMtc":"私のMTC","moc.num":"MTCコインの数","moc.currentPrice":"MTCの価格","moc.discountPrice":"Mtc 割引価格","moc.price":"価格","moc.available":"利用可能","moc.rule":"ルール","moc.rule1":"各NFTをステーキングすると、収益の{productPercent}%に相当するMTCコインを受け取ります。","moc.rule2":"MTCコインの利息を得るためには、まずステーキングする必要があります。ステーキング後、アンステーキングするまで交換できません。","moc.rule3":"MTCコインは、MTCコインのリアルタイム市場価値に基づいてUSDTに交換できます。","moc.staking":"ステーキング","moc.unstaking":"アンステーキング","moc.stakingProfit":"MTCステーキングの収益","moc.activity":"{percent}%オフMTC","moc.activity.holdings":"保有","moc.activity.buy":"MTCを購入","moc.activity.ended":"MTCイベントは終了しました","moc.activity.subscription":"サブスクリプション確認中、しばらくお待ちください。","moc.activity.progress":"サブスクリプション確認中、しばらくお待ちください。","moc.activity.rule1":"プロモーション期間: {start} - {end}","moc.activity.rule2":"このイベントのすべてのMTCコインは、{percent}%オフでサブスクリプションが可能です。","moc.activity.rule3":"USDTと同等の価値のMTCトークンをサブスクライブするには、いくつのNFTをステーキングする必要がありますか","moc.activity.rule4":"MTCコインの数には限りがあり、先着順です。サブスクリプションが完了するとイベントは終了します。","moc.activity.noHoldings":"保有なし","notice.title":"マイ通知","trans.notCredited":"未入金？","trans.hash":"{walletType} トランザクションハッシュ","trans.hashSuccess":"{walletType} トランザクションクエリ成功","trans.hashError":"{walletType} トランザクションハッシュを入力してください","message.amountMinimum":"最低引き出し額：{min} USDT","message.loging":"ログイン中","message.withdrawSucces":"出金申請が正常に送信されました。","withdrawFee":"出金拒否","message.cancelContinuity":"継続をキャンセルしてもよろしいですか？","withdrawTime":"出金時間は毎日{start}から{end}までです（UTC）。","Token create error":"トークンの作成エラー","Sending too frequently, please try again later":"送信が頻繁すぎます。後でもう一度お試しください。","Sys error, not email can send":"システムエラー、メールを送信できません","Sys error, email send error":"システムエラー、メール送信エラー","Error request":"エラーのリクエスト","You can\'t login":"ログインできません","Please input the email":"メールアドレスを入力してください","Unsupported email suffix":"サポートされていないメールのサフィックス","Email is exist":"そのメールアドレスは既に存在します","Email is not exist":"そのメールアドレスは存在しません","Not the correct email address":"正しいメールアドレスではありません","Payment password must be greater than or equal to 6 digits":"支払いパスワードは6桁以上でなければなりません","Password must be greater than or equal to 6 digits":"パスワードは6桁以上でなければなりません","Please input the password":"パスワードを入力してください","Please input the Payment password":"支払いパスワードを入力してください","The original password is incorrect":"元のパスワードが間違っています","Please input the verification code":"確認コードを入力してください","The verification code is incorrect or has expired. Please obtain it again":"確認コードが間違っているか、期限切れです。再度取得してください","The verification code is incorrect":"確認コードが間違っています","Account or password error":"アカウントまたはパスワードエラー","Payment password error":"支払いパスワードエラー","Please input start time":"開始時間を入力してください","Please input end time":"終了時間を入力してください","Please verify account":"アカウントを確認してください","Product not exist":"製品が存在しません","Product Suspend sales":"製品の販売が一時停止されました","Insufficient balance":"残高が不十分です","Balance too little":"残高が少なすぎます","Product income":"製品収益","Buy product":"製品を購入する","Buy platform coin":"MTCコインを購入する","recharge back":"再充電の返金","error add":"エラーの追加","coin exchange amount":"MTCコインの交換額","coin interest":"MTCコインの利子","coin is staking please cancel staking":"MTCコインがステーキング中です。ステーキングをキャンセルしてください","Platform change":"プラットフォームの変更","withdraw refuse":"引き出し拒否","Not meeting the minimum withdrawal amount":"最低引き出し金額に達していません","Not yet due for withdrawal time":"まだ引き出し可能な時間ではありません","Please verify email":"メールを確認してください","Activity amount must greater in progress product total amount":"活動金額は現在の製品総額よりも多くなければなりません","Insufficient quantity":"MTCトークンは売り切れました","Activity not exist":"割引活動は存在しません","Buy activity":"割引されたMTCコインを購入する","Not Start":"割引活動はまだ開始されていません","Is over":"割引活動は終了しました","Create address error":"アドレスの作成エラー","Not a correct address":"正しいアドレスではありません","Processed":"処理されました","Out wallet password is empty":"外部ウォレットのパスワードが空です","Trans error please check wallet":"トランスエラー、ウォレットを確認してください","Please input trans hash":"トランスハッシュを入力してください","Please input coin type":"ネットワークタイプを選択してください","Not Find Trans":"トランスが見つかりません","Transaction processed":"トランザクションが処理されました","Transaction does not belong to you":"このトランザクションはあなたのものではありません","Transaction does not USDT":"このトランザクションはUSDTではありません","Channel":"チャンネル","Consultation":"相談","Consult":"相談する","Group":"グループ","nonWithdrawAmount":"引き出し不可額","withdraw.addressSetting":"{withdrawalType} の出金アドレスを設定してください","checkIn":"サインイン","checkInTip":"本日のサインインが成功しました！","Today Has Sign In":"本日は既にサインイン済み","todayChecked":"本日は既にサインイン済み","registerGift":"登録ギフト","dailyCheckIn":"毎日サインイン","trade.open":"開放中","trade.noOpen":"未開放","trade.noOpen.message":"製品未公開","NFT Staking Mining":"NFTステーキングマイニング","days":"日","hours":"時","minutes":"分","index.wallet":"ウォレット","index.mtcCenter":"MTCセンター","index.myNft":"マイNFT","mata.title":"ATANFT概要","mata.intro1":"ATANFTマイニングは、Manta Networkのプライバシーエコシステムに基づき、『プライバシー型NFTの保有とエコシステム貢献』を中心に設計されたトークンインセンティブシステムです。マイニングを通じて、ユーザーがATANFTの流通、アプリケーション、エコシステム構築に参加することを促し、Mantaプライバシー資産システムの活性化を強化することを目的としています。参加者は主にステーキングやインタラクションを通じて、MTCトークンや専用プライバシーNFT報酬を獲得します。","mata.intro2":"マイニングモデルは『プライバシー特性＋エコシステム連動』を特徴とし、主に2種類に分かれます：","mata.intro3":"<text class=\'bold\'>ステーキングマイニング</text>：ユーザーが保有するATANFT（一般的なデジタルコレクションやSBT認証証明など）を指定されたスマートコントラクトにステーキングします。ATANFTの希少度（ジェネシス、限定版など）、保有期間、プライバシー取引記録に基づいて利益を計算します。たとえば、『プライバシーID型ATANFT』をステーキングすると基本年利が得られ、さらに『ゼロ知識証明取引』（MantaPayを利用したプライバシー送金）を有効にすると、10%-20%の追加ボーナスが付与されます。利益は毎日MTCトークンで配布されます。","mata.intro4":"<text class=\'bold\'>エコシステムインタラクションマイニング</text>：Mantaエコシステム内でATANFTを使用して特定のタスクを達成することを奨励します。例：ATANFTをブロックチェーンゲームに統合してキャラクターやアイテムとして利用、MantaSwapなどのDeFiモジュールでLP担保として使用、新規ユーザーを招待して初めてのATANFTをミントさせるなど。タスクごとにポイントが付与され、一定のポイントに達すると、より高いステーキング利益を持つ『記念ATANFT』やMTCトークンと交換可能です。クロスチェーンのプライバシーNFT取引など高難度タスクを完了すると、限定特典がアンロックされます。","token.rule1":"ユーザーは購入したATANFTを指定スマートコントラクトにステーキングします。利益はATANFTの希少性に基づき計算され、2時間ごとに自動でアカウントに記入されます。","token.rule2":"MTCトークンは市場価格でUSDTに交換可能です。","trade.pay":"支払金額","trade.pay.tip":"各ATANFTの価格は{amount} USDTです。購入金額は{amount} USDTの整数倍である必要があります（例：{amount1} USDT、{amount2} USDT）。","trade.intro":"Crazy Monkey NFTは、独自のデザインと限定特性により、コレクションごとに驚きと価値を提供します。","investPeriod":"ステーキング期間","order.cumulativeIncome":"累計収益","order.amount":"金額","order.num":"数量","agencyRebate":"代理リベート","order.doing":"進行中","order.history":"履歴","registerTime":"登録時間","stakingBackProfit":"推薦リベート","exchange.fee":"手数料","trade.sale":"販売中","trade.sold":"売り切れ","trade.sold.message":"本日分は売り切れました","order.staked":"{day}日間ステーキング済み","order.completed.time":"終了時間","order.completed.time1":"満期時間：{time}","team.totalRecharge":"累計チャージ","trade.numWarning":"NFT数量が不足しています","Insufficient NFT quantity":"NFT数量が不足しています","token.buy":"購入","token.sell":"販売","token.noOpen":"まだ開かれていません","token.transaction":"取引","wallet.withdraw.tip":"最低出金額：<span class=\'uni-text-color\'>{min} USDT</span>、各取引には<span class=\'uni-text-color\'>{fee}%</span>の手数料がかかります。","wallet.withdraw.tipTwo":"入金時間：出金は<span class=\'uni-text-color\'>{time}</span>時間以内にウォレットに反映されます。","wallet.withdraw.tipOne":"出金時間：システム時間<span class=\'uni-text-color\'>{start}</span>〜<span class=\'uni-text-color\'>{end}</span>。","star.user":"スター プレイヤー"}')
    },
    "34c2": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            collapseItem: {
                title: "",
                value: "",
                label: "",
                disabled: !1,
                isLink: !0,
                clickable: !0,
                border: !0,
                align: "left",
                name: "",
                icon: "",
                duration: 300
            }
        }
    },
    "38e3": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            row: {
                gutter: 0,
                justify: "start",
                align: "center"
            }
        }
    },
    "3b6f": function(e, a, t) {
        "use strict";

        function n(e) {
            var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                t = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            if (e = String(e).toLowerCase(), e && t.test(e)) {
                if (4 === e.length) {
                    for (var n = "#", i = 1; i < 4; i += 1) n += e.slice(i, i + 1).concat(e.slice(i, i + 1));
                    e = n
                }
                for (var o = [], r = 1; r < 7; r += 2) o.push(parseInt("0x".concat(e.slice(r, r + 2))));
                return a ? "rgb(".concat(o[0], ",").concat(o[1], ",").concat(o[2], ")") : o
            }
            if (/^(rgb|RGB)/.test(e)) {
                var s = e.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
                return s.map((function(e) {
                    return Number(e)
                }))
            }
            return e
        }

        function i(e) {
            var a = e;
            if (/^(rgb|RGB)/.test(a)) {
                for (var t = a.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), n = "#", i = 0; i < t.length; i++) {
                    var o = Number(t[i]).toString(16);
                    o = 1 == String(o).length ? "".concat(0, o) : o, "0" === o && (o += o), n += o
                }
                return 7 !== n.length && (n = a), n
            }
            if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(a)) return a;
            var r = a.replace(/#/, "").split("");
            if (6 === r.length) return a;
            if (3 === r.length) {
                for (var s = "#", d = 0; d < r.length; d += 1) s += r[d] + r[d];
                return s
            }
        }
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0, t("c223"), t("aa9c"), t("5c47"), t("0506"), t("f7a5"), t("e966"), t("a1c1"), t("fd3c"), t("64aa"), t("c9b5"), t("bf0f"), t("ab80");
        var o = {
            colorGradient: function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "rgb(0, 0, 0)", a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rgb(255, 255, 255)", t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, o = n(e, !1), r = o[0], s = o[1], d = o[2], l = n(a, !1), c = l[0], u = l[1], m = l[2], p = (c - r) / t, g = (u - s) / t, f = (m - d) / t, h = [], y = 0; y < t; y++) {
                    var v = i("rgb(".concat(Math.round(p * y + r), ",").concat(Math.round(g * y + s), ",").concat(Math.round(f * y + d), ")"));
                    0 === y && (v = i(e)), y === t - 1 && (v = i(a)), h.push(v)
                }
                return h
            },
            hexToRgb: n,
            rgbToHex: i,
            colorToRgba: function(e, a) {
                e = i(e);
                var t = String(e).toLowerCase();
                if (t && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)) {
                    if (4 === t.length) {
                        for (var n = "#", o = 1; o < 4; o += 1) n += t.slice(o, o + 1).concat(t.slice(o, o + 1));
                        t = n
                    }
                    for (var r = [], s = 1; s < 7; s += 2) r.push(parseInt("0x".concat(t.slice(s, s + 2))));
                    return "rgba(".concat(r.join(","), ",").concat(a, ")")
                }
                return t
            }
        };
        a.default = o
    },
    "3cd6": function(e, a, t) {
        t("bf0f"), e.exports = function(e) {
            uni.$u.http.setConfig((function(e) {
                return e.baseURL = "/", e
            })), uni.$u.http.interceptors.request.use((function(e) {
                return e.data = e.data || {}, e.header.token = uni.getStorageSync("token") || "", uni.getSystemInfo({
                    success: function(a) {
                        e.header.os = a.osName, e.header.appVersion = a.appVersion, e.header.clientType = 1, e.custom.catch = 1
                    }
                }), e
            }), (function(e) {
                return Promise.reject(e)
            })), uni.$u.http.interceptors.response.use((function(a) {
                var t, n = a.data,
                    i = null === (t = a.config) || void 0 === t ? void 0 : t.custom;
                if (0 !== n.code) {
                    if (uni.$u.toast(e.$t(n.msg)), 401 === n.code) {
                        try {
                            uni.removeStorageSync("hasLogin"), uni.removeStorageSync("token"), e.$store.state.hasLogin = !1, uni.clearStorageSync()
                        } catch (o) {}
                        uni.redirectTo({
                            url: "/pages/login/login"
                        })
                    }
                    return null !== i && void 0 !== i && i.catch ? Promise.reject(n) : new Promise((function() {}))
                }
                return n
            }), (function(e) {
                return Promise.reject(e)
            }))
        }
    },
    "3f3a": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            tooltip: {
                text: "",
                copyText: "",
                size: 14,
                color: "#606266",
                bgColor: "transparent",
                direction: "top",
                zIndex: 10071,
                showCopy: !0,
                buttons: function() {
                    return []
                },
                overlay: !0,
                showToast: !0
            }
        }
    },
    "43ad": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            button: {
                hairline: !1,
                type: "info",
                size: "normal",
                shape: "square",
                plain: !1,
                disabled: !1,
                loading: !1,
                loadingText: "",
                loadingMode: "spinner",
                loadingSize: 15,
                openType: "",
                formType: "",
                appParameter: "",
                hoverStopPropagation: !0,
                lang: "en",
                sessionFrom: "",
                sendMessageTitle: "",
                sendMessagePath: "",
                sendMessageImg: "",
                showMessageCard: !1,
                dataName: "",
                throttleTime: 0,
                hoverStartTime: 0,
                hoverStayTime: 200,
                text: "",
                icon: "",
                iconColor: "",
                color: ""
            }
        }
    },
    4445: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            actionSheet: {
                show: !1,
                title: "",
                description: "",
                actions: function() {
                    return []
                },
                index: "",
                cancelText: "",
                closeOnClickAction: !0,
                safeAreaInsetBottom: !0,
                openType: "",
                closeOnClickOverlay: !0,
                round: 0
            }
        }
    },
    "47d6": function(e, a, t) {
        "use strict";
        t("6a54"), t("2797");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.deepMerge = function e() {
            var a = {};

            function t(t, n) {
                "object" === (0, i.default)(a[n]) && "object" === (0, i.default)(t) ? a[n] = e(a[n], t): "object" === (0, i.default)(t) ? a[n] = e({}, t) : a[n] = t
            }
            for (var n = 0, o = arguments.length; n < o; n++) s(arguments[n], t);
            return a
        }, a.forEach = s, a.isArray = r, a.isBoolean = function(e) {
            return "boolean" === typeof e
        }, a.isDate = function(e) {
            return "[object Date]" === o.call(e)
        }, a.isObject = function(e) {
            return null !== e && "object" === (0, i.default)(e)
        }, a.isPlainObject = function(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }, a.isURLSearchParams = function(e) {
            return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
        }, a.isUndefined = function(e) {
            return "undefined" === typeof e
        };
        var i = n(t("fcf3"));
        t("bf0f"), t("18f7"), t("de6c"), t("2425");
        var o = Object.prototype.toString;

        function r(e) {
            return "[object Array]" === o.call(e)
        }

        function s(e, a) {
            if (null !== e && "undefined" !== typeof e)
                if ("object" !== (0, i.default)(e) && (e = [e]), r(e))
                    for (var t = 0, n = e.length; t < n; t++) a.call(null, e[t], t, e);
                else
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && a.call(null, e[o], o, e)
        }
    },
    4843: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0, t("e062"), t("64aa");
        var n = {
            calendar: {
                title: "日期选择",
                showTitle: !0,
                showSubtitle: !0,
                mode: "single",
                startText: "开始",
                endText: "结束",
                customList: function() {
                    return []
                },
                color: "#3c9cff",
                minDate: 0,
                maxDate: 0,
                defaultDate: null,
                maxCount: Number.MAX_SAFE_INTEGER,
                rowHeight: 56,
                formatter: null,
                showLunar: !1,
                showMark: !0,
                confirmText: "确定",
                confirmDisabledText: "确定",
                show: !1,
                closeOnClickOverlay: !1,
                readonly: !1,
                showConfirm: !0,
                maxRange: Number.MAX_SAFE_INTEGER,
                rangePrompt: "",
                showRangePrompt: !0,
                allowSameDay: !1,
                round: 0,
                monthNum: 3
            }
        };
        a.default = n
    },
    4937: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            noNetwork: {
                tips: "哎呀，网络信号丢失",
                zIndex: "",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABLKADAAQAAAABAAABLAAAAADYYILnAABAAElEQVR4Ae29CZhkV3kefNeq6m2W7tn3nl0aCbHIAgmQPGB+sLCNzSID9g9PYrAf57d/+4+DiW0cy8QBJ06c2In/PLFDHJ78+MGCGNsYgyxwIwktwEijAc1ohtmnZ+2Z7p5eq6vu9r/vuXWrq25VdVV1V3dXVX9Hmj73nv285963vvOd75yraeIEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQaD8E9PbrkvRopSMwMBBYRs+5O/yJS68cPnzYXel4tFP/jXbqjPRFEAiCQNe6Bw/6gdFn9Oy9Q90LLG2DgBBW2wyldIQIPPPCte2a5q3jtR+4ff/4wuBuXotrDwSEsNpjHKUXQODppy+udYJMEUEZgbd94DvnNwlA7YGAEFZ7jOOK78Xp06eTTkq7sxwQhmXuf/754VXl4iSstRAQwmqt8ZLWlkHg0UcD49qYfUjXfLtMtOZ7npExJu4iqZWLl7DWQUAIq3XGSlpaAYHD77q8xwuCOSUoXw8Sl0eMux977DGzQjES3AIICGG1wCBJEysj8PXnz230XXdr5RQFMYbRvWnv6w8UhMhliyGwYghr4Pjg3oEXL34ey9zyC9tiD2ml5h47dr1LN7S6CMjz/A3PvHh1Z6UyJby5EVgRhKUe7Kz/JU0LfvrJo5f+Y3MPibSuFgQGBgasYSd9l6GDsup0WS/T/9RTp9fXmU2SNwECdQ92E7S57iaMeJnPQLK6ixkDLfjlb7546RfrLkQyNBcC3dsP6oHWMd9G+V3JgwPHh7rnm1/yLQ8CbU9Y33zp0j+nZFUMb/DHmB7+SHGY3LUKAk8cObtD00xlHDrfNge+Z2ozU3c9dvx4Yr5lSL6lR6CtCWvg6OAPw9z538ZhhZRl6XrwhW8du1KX/iNejtwvPQIDR8+vSRqJ/obU7GupjdNdh2gW0ZDypJBFR6BtB2rg2OVtuub9JcmpHIpBoK1xfffLzx4f7C0XL2HNiYDp6bs9z23Ypn1fC1Y/9PCFDc3ZW2lVHIG2JKzTp4Ok7nv/G6Q054MIvda+bNb74pEgKGtwGAdL7pcfAa8vOKEZ2kyjWuLr7uDh+/qvN6o8KWdxEWhLwroyeek/g4zuqwU6kNrhyZcu/UktaSXN8iNwuL9/RuvVXtJ9PbPQ1vhmcP6t9+47u9ByJP/SIdB2hDVw9MJHQFYfrQdCph84evFX68kjaZcPAZJWwjMXRFpJ2zr91tfuvrh8vZCa54NA2xGWrunvmg8QWCJ/N4ir7fCYDxatkOeBB7an501agXbygVdvv9IK/ZQ2FiPQdi9osGbH+zRNf7y4m9Xu9Me7N9nv0HXdr5ZS4psHgXpJC9P/wDRTx0Vn1TxjWG9LGrbaUm/Fi5meSvcrkxf/Cg/ow9XqAUk91v3qHT97r6471dJKfHMi8Oyzgx1Z03t1YAQVT2MwgsC3u+yXHzi0faQ5eyGtqgWBtpOw2Ol9+/TM+sTOn8L08MtzgQCy+tOHXr3jA0JWc6HU/HF5Scssr4jXcYqfP6V/T8iq+ceyWgvbUsKKOn38eJAYyl56TAuCEr2WYei//9Crd/5GlFb81kdASVopSFrerKRlaoZj9HR+700H10+0fg+lB21NWBxe2lhNHsUpDZr27mi4dV379R9+za4/iO7Fbx8ECknLCPTsTDJ17O33bJpqnx6u7J60PWFxeAcCbMV56dJfQKf1bkMLfuGh1+76zMoe9vbuPUnLsb2DtmOe5HSxvXsrvWtLBEhaTx29+Ma27Jx0ShAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQaEsEVoQdVluO3BJ06ptHL34b1XRjp4Ch6Rq24+kmjG4Nwwg+9uA9u/73EjRBqhAEihAoe3xwUQq5WTYEzp0b3ZnV/Ncf6O/9AvY9wlh/6dy3X7ncN512Zw9BVLXjuAP4np44vnQtkZoEgVkEhLBmsWiKqwsXpjbPBOn3gRfenwnc+7GBe+zsjclvonFDS9nA9Iy/u3x9+vAP3735VPk4CRUEFhcBIazFxbfm0k9fHD7k+v4nQFaPQIrx8Gmyx/GJ0J/t7ez7mw0b9MmaC2pQQgh0/ZSm4g5TwueWWtqLt0HuVy4CQljLPPYnB0depTn+b3t+8B4t0AdBUv93h2H9xc6da0aXs2m+r1WQsLRnl7NdUvfKRkAIa5nG//r1oGtsZvjTgev/kqYHF/TA+AXoqv4npJemOEiQU1Eo2l+G0movBK1UBBPU7s9E1+ILAkuNgKwSLjXiqO/khVtvARH8dxDBRkMzPrF/V+9/BlG5y9CUqlXinHv9mRPXtvuus88L9H3JPv2zD2yXExCqAicJBIFWRwAvv3Xqwq0/Pnn+lv/K+ZvfPH3p9p5W75O0fxaBp793ce3AwIDMWmYhafiVgNtwSMsXeHp4eNXJC8Nf0PAdRCiuf/XgrnWUqsqotcvnl9DmRkCdweX4b9N7+m/ih+mbMraLM14yJVwcXItKpT1VRve+ArC3Qqn+3gM7132jKEGZm6tXg86J7OhDfuA/iHwPUpfUZSfu2L59tXxEoQxeyxkEgjKeOnLxHb4RqC+NY5H3+2953d4XlrNN7Vq3ENYij+yZwbG9jpt9GkBPQ5H9zgP9607OVeWp87cOQtn9zwJf+xDMNFfj+jryPqXpxj8c2Nn7P+SXey70lidu4IXzb0DNB4tr9751+HV7zxSHyd1CERDCWiiCc+QPjUCnsaqmZ62O5IN7N/VUNP48ee7mAZDTf4Tt049iUG4Guv4ZfNLos9UIbo7qJWoJEHjy+bP7fNsoOcnW0A0/aacef8PdG28sQTNWTBVCWIs01OfPj66BpfqTmq732UnjgT1bei+Vq4pTv7HM8Ceg2/o1qLQug7T+FaaM3IqTLZdewpoHgYEjV9fphvOj+OShWa5V+CxvZtpzv/LwG/aNl4uXsPoRwI+4uEYjAJ2GmdG8L0FK2mYa+tsrkdXZy+P7x2ZuHdW14P+BLdank9q6Qwd3rf+ckFWjR6Tx5Q2cP58K9Jm3VCIr1ogt48lO237r3//96YofeG18y9q7RFklXITxPXV+5DchKb3ZDMy37Nu5tuxG4R9cHH6b42QfAzlds+3EPXu2rfrBIjRFilwkBIIR7SHoJDurFU89ZOd680Gke6JaWomvjoBIWNUxqivFD87fej0e0n8Fwvr0/t1rnyqX+QfnRz7g+8FX8Rv8vL3auF/IqhxKzR2WCPxXqKeq3krDTdj2ierpJEUtCIgOqxaUakwzNBR0D09yiqePHOjveyOkpxLr9VMXb73V97S/h3nDXx7Y2fdPkAYbncW1IgIDxy5vM7LZt/hgrnLtxyaBrJNxv/72N+6tuNhSLp+EVUZACKsyNnXHvHL+1qcgNf2KbSXu2bt9dcmS9qlzo/fARgcmCtpzB3b1/Vg5QiuslLowENyDWDn8cSjl98PgdBviu03N+rl9/WufLEwr18uDwLdevLTF1YK3xnVZ2HI1bUxrT7z5zTuXdRP78qCyeLUKYTUI25OXbm4JPO00TBj+6I7+db8ZL3ZwMOiYdG4dA1lN9HWte2iuI2NAVPapC8O/CGPR34Ip/AZIbIMo7yX8G9QMbcS09P+2b1vf5XgdrXaPfiYns9oeLLEd8D1/B7Dp0E1jGP042pXQj7RKf546cmGzp+tv1TRf6YQD35/QO3seP3xow5IfC9QqmM23naJ0ny9ysXwgq98BWc0kVhv/Nhalbqe8kd/Fr8MOSEr3zEVWrwyO3I29hl+E9LUHGf+nAXI6sGPdd8uV2YphIKnE5IyL6bLxk7cn3bdkHHefrpvJAExMZ1uBZmqeNzXtfzUzk/m/ens7LjV7Px+8d9e1579/44l0duZtge+Np5zEEw8c2pBu9na3YvtEwmrAqNE8IZvNHsep5//yjl3r/0O8yFOXbv0QCO05gP0JGIL+fjw+uj91YeRh/Dp/PtCDM7Zpfmjvjt6Xo7hW9ycmJjaYduf7Hdf/8HTGfa3rG9rYxLSWnsloPg7fijZV8oFM2Ja2a9t6EJd7bCztvHP7us4rrdD/r3/7ct9I99jEI4cOiQ3dIg2YEFYDgOUJDFj1e8TqX7cT4kImXuQr5279A4DeBEX8ayvprU4N3rovcALot/TH13T0fXDTJn0qXk4r3k9OTm4y7a6PzjjORzOOvn1kbEqbnEprPhRzwAKzwFLHk05hv6Yd6N+o3R6beG50aPSdr3qV6IJKkVp5ITIlXOCYn4Yexr0w/DO6YXymHFlR0e5r7tsM3fxgJbI6fW1ivTeT+SsYmr54cFff+5Cu5X+hb94Merp6/J/PusGvTE6724eGJ7RpSFOkKPCUZvBPBccoHBet3Rwe13rX9tw/PjXzZ5hKvr8SfhWKkeA2REAIa4GD6p0feRdWBnvxjv2PckVhVfBf4A29uG/X2i+Ui2eYn8n8NryuDr3jPfWSFV5k44UT137eshIP2K7/64cObbheqZ6lCp+Ydt8TBO7vTM5od1+/NR4SFVhoLpKKt410lnE8LTMzo3V2dLznxLkhYgQ9obiVjEDln7mVjEodfYcpw+MAsftg/7qSDbAnb97sCSb0Yei2fqOcbovVqKNnNO8HmAE9Cv3Wp+uoWjt27HpXNqH9WTKR+kBHKqEFbvo5y3N/avfu4g23R45f3WGa1k9ZicTd0zPTf/f6O7f8dT311Jp2fHzmgJlI/N70jPPe4bEZ6Kg4qw0lqlrLiNKBiLWerpTW25PUbkPXZViW62ecHz+4d8PXojTirzwEyhq8rTwYFtRjvpX/rlwJ+iSXugPbMuyKBOHo3geRJtuT7PujcmVUCuPJlhnL/9NUqvMD2eyM5sxMaIlE4n7XML907tyNjcxHQjty4sZv66Z1xEok/xNW5n4uZSf+8sT5m++vVO58wkEu5sR09pd9w/rWyET2vReujiqygrSopn/zKZN5qMeirotKeTyolm7p/+X06Wvr51ue5Gt9BISwFjiGsLl6N6SrvylXDNTK70D4mX071pwtF88w6Jd/DG/1E1u26NOV0pQL71y3/8PJVOcHMzPTWkcCH2YGOaTTaS2RTN6f1fQvvvDK1bdnbO2JZCr1SeRfn05Pa1PTU0gXJBKW+ecnzlxvCGndhFQ1NRP8bcY1/vjS9bF1V26MwHwsVKiXa3etYVw1TNhYJ3TDjQCO42jJVMcez7J+t9YyJF37ISCEtahjGjxkGDr2DJZ31D8h5vUQJL5RPkXlUMM07u3qSGidICvkzzuSlmlZb0olrK9hD9v9JCrPC196JoPMAolFg6CV+PPj54YeyWecx8Vk2v1Q0rSfhFT18LnBmzBRyNalp5qrSuq7kiAsh4SFa7oZ9M0wzI+cPHOjZPo9V1kS1z4ICGEt4lhiCvZrSa2jol7qzPXJPk6nIGbVbWfUvcr7hO9MP97ZVXpggOu6ajplYStj7l1XvbRMXbPAbp6HzSSBlkraNknrvfVCcPt2sHYi7f3pTDb47KUbYxuvKqkKpYBXKBnV869c3WgbDEixAck0FGFFfEzJzbIsO9C1TyrcymWWsLZGIHoW2rqTzdo5dXyykz0NC8l779i5vu4zwM+eHVntGP5jqVTq/6AkVc5NZ3wNH2lVxNWZNIukMSjiNd9z0+CHp5DXAdX4SAg203w8GB5IATtODHzdK8C15kEjhXvNS9rWA11dnfcMDY9prscss48RySakrOLWqODCoIKAgkuVgsS0urtD60haeV1YYVbbtjUn6/74HXvW/11huFy3PwKzT1r797Upe3jq4sib9u9Y+wxe+vh7W1N7jx49v6ZzbffnQD4/Cj1Pfjx54XiBls6GVuTUc9mQsOIO9mPQFdkIRlz4fy5JLm2ZMOqTcJaXIqpcqnixVe+rdbZ3dbc2OT0D0wZIibHSksmklslknvx+//q3PiKnXcTQae/b+LPQ3r1t0969cOL6G7o6E09qgZegdMJBpVQ1DbKCpyUt6oPKz/4NEJalCAuZFIuEVBJd+jgLh4rvAiFqUVGkhJZMWFp3Z0obGSu/d5gSnWmavuO6h+/cvYHSobgVgoAYjrb4QPMUiGtj1/79jBMkLBwiTlMASlYzTkhWCJyTrGAyMOFkst/BoYMmuIIyGJYcMXMMdNwHPhYN1qWS1t6ZLGaKZL8yzFXTr15BooLLMugHMBRNKgW+It8y9TEcJGt4rvcRFCCEVQbFdg0Swmrxkb0+cf2XOzq73kgdFieEXF2jdEUJKQH6SVWQrNjtZDKlpTPp38U58iUbthk/Ph7sN6zg/xudSGvD4xkq6otcnnjyF0XRRTflkyC0IIJE1JG0QbqGNpMNp5xFhRTcZDNoj66988SFm5vv3LX+WkGUXLYxAuXnCW3c4XbqGs9hwjv+a9lsuN+ahOJSCoLjNDAFvVUll0p1aNPp6adTweSflEszPO48oFn+4yOTmR+6enOshKyYhzWpf/jDuuf6x2aV/qNRaPG/1d0gUXWCA0uu7GhMmkqmerEc8KOVU0lMuyFQ+Ylut562YX9Sncmf7Ojo3BDZWbGLtMkiUVXSWTFNuMqWuYG530f7+/tnGFboxsfdd9mm8XdDo9O7rg6NFq0CFqZr5DWlK9qV0fZqGvZchSuPlevB2VmG/hOV4yWm3RAQwmrhEcW64qu4ykfJho52Vp3J8quBYQooqWDKADftBd6HD+5efyoKj/zR8ew/hWXY56/cnFh7a3RCTTGjuMX0SVB9qzu1qfQM+jO3dBW1g6uVSHv/qVNX10Vh4rc3AkJYLTy+WA/8ou9kJjo7bOh+DLVFZ64TEbCyBktxI5PJZj56R//Gx+NdH5vM4vuI+p8NXh9LjU1iw3EZhXc8TyPuuV9wDaaCfBjTM06N0hVWQmHBDzvSDZ5tvqYR7ZAymh8BIazmH6OKLbzv0KZvJEz3ZzEFnEolaEtV2XEaCLKadrIz//TQnk1/EU85NuH8th8Yf4j9gMZUOrNkZEVZCnsbtTU9KW18GqcKFyjh420sd2+j33pg3F8uTsLaDwEhrBYf04O7N/2t7/o/C2FoGnsIy/YGlvAwSfCvZzLOe+8oR1ZT3u/5uvHJC9dGtJlMrfqjslXVHwjpat2aLi2rjFFLjUSrFUjlO0juddXSSXx7ICCE1QbjiHO0/hofbPgwpnDTOR2V6hWNQqGUx34890noet5yaO+Gko3Y45PO7/uB/lvnrwxrWdha1absbgxo1FWtwplXqYSJY5Nn5lU3bLHQmGA/yko0plVSSjMjIITVzKNTR9sO7dv8RSeb/T9BWmMkKv4D+YzBXuljV7yxd+zfte6VeHGKrHTz4+cv38JWmyUmKzSGG5z7VndoE7kz3uPtq+Welvhwm39weVjOyaoFsBZPI4TV4gNY2Pw79mz8KyebeRIH+VEZTaX0sf27+v794TKmCxNTzr/2NOPj5wZBVjjdYSklq6jN69dyKuhqmWztivYob+RTSkPbe/xMdlMUJn77IiCE1W5jq+s4dYEO6mzsYAmvi/+CrH7LDYxPcBq4HGTFVcG1ULLT5orS1ULIkoSFI2cMHKG8obiXcteOCAhhtdmo6gaOh4EWWlkyYU9gvHswXfgV19d/7+LVkSWfBrItJJhObL/p7elQR8fUZnEV70XxPc01sM+xrzhU7toRgZIHuh07uZL6xA3LBaYB+Ar8rBsfz34YX1j+D5eu317QNGy2xPquSE4mDuXb2IujY2AgytNE67RiKFshzuwCR5s9ZSMlsK0QEMJqq+GkBKOF5yFzRoidK5BoFCeMjM/8mG+a//Xy0Li55KYLBRiTrGjwOQ1br4VMBQuKVJeQKVPxMLlvPwSEsNpsTEECmBLSgbHUpwD1YGwse59l2p+9fmuig4fiNZIowrqq/6Xeqm9Vh9JbjcOKvqFtACX7gV8kTVZvkaRoRQSEsFpx1OZoM2iKxxuHLtDcsZlgLzYZfv7m7XSv+r7fIm234XSP/8o5ktWqzqSyZr89PoXPYDTYkZvziw0NLluKayoEyq4iNVULpTF1IaDjHHZmoAW4aep9geN8fiLt998cGYdtVp7K6iqzXGJFUCAi7jdkuapsBJKcPBwgyP8YRyV7B04Q3dDbpY3jg6gupoMNla5U41BbUN9n0sr1ScKaHwEhrOYfo7paCAW0WiWknihhW/0Tabf/6tDtxpIVSIhGnz1dSXUkDL8fSHKi4/lWPId9Kp3Vxqegp8J/m9f14D6DQ/nmb281FwgkZ1Dj7bnSSFx7ICCE1R7jmO8FJJr8jCvjeNrIxFjDJBpKVaSlXhwDw384MyucBoLAGEfHI5ptO6n1YAq4FjorH9IWjUOnFlF3pj62aui3whbI33ZGQAir/UY3XCVEvzgdw/8NcSyGUhSlpVWQrFg2p39xp0JYLyIohaXxdZ2FGofG6yi85/QS32F0Asu8URgu1+2JgCjd22xcsVElPC85169Gaa1YTkRWJKpSqooBiQQzONvq9sRULKKxtzzAEJw1api2EFZjoW3K0oSwmnJY5tcoSD09HanEDztubnfO/IopyUWC6sUmZUpW5aSqkgwgK04DxxaZrFivacCaIdAuH9zaM1rSDgloOwSEsNpoSMenvU93dXb+EE5taFivKElRqd67qrNmsqIF+yjMF/i56MV2JqadYKxXMDXM6+4Wu04pf/kQEMJaPuwbWvPticwj4Il/NnTrdl7JrqaDC5wTUle1GmdWWVCw1+JotjA6PgnThsIdQrXknF8arkJi/+R355dbcrUaArU9ha3WqxXW3tHR9C5dN//T9eEJ3aGdUwP7T0V7F86Mr0VW4mF6o2NTS/ilaB2HDmb8wA2+08AuS1FNjIAQVhMPTi1NgwRkGKbxRxMz3uaJSRzVUkumOtLwo6Zc7aOkVdEhynN9NQ1cyuNqeEqD67mX9TXGyxXbJhFthYAQVosP58S0909czfqJqzdGODVqaG/IUbCWr2p0yukfp4FUtDfeir1yl8IPUGjPHFy/fqJyKolpJwSEsFp4NEfT6Z3YBvOp8MvMc0hAi9hHNQ1cBrJil5TUZxhfXsTuSdFNhoAQVpMNSD3NMTzzU1PZYAM/ProYkg3UV5rHT8lXmA7SwnwEq4FLLVkRI04HM+n0LdvzvlEPZpK2tREQwmrR8ZucCd7hePr7rw2N5PfxLUZXON1zHKz4kb0KnIttP6Njk8tyaimbwXPrsW/yq3v3bhoqaJZctjkCQlgtOMCYCnU4GedTI+NpQ32XbxH7QOmKG5nzdIWZJz8HNkKygqI9TmSL2JSiovGVn0A39c8WBcpN2yMghNWCQ4zPc0HRbr6GEs6chJFnmfl3knZO4/hmII1B6fiFG9br0s6qAeXPp2WUrhzHeXH/jr6n5pNf8rQuAkJYLTZ2kK7Wul7w6zeGx9DyUsZovOodOizosTg1TM9k1Wogpa7lIisOF+w48E/7E5B1Y/cgtdizsBKbK6c1tNioT6X9n3MDcyePOo7OoJqrC6S0+ZIYV+GSOHxvc18PJCxXG4ed13I727axqTp9yk9rX1jutkj9S4+ASFhLj/m8axwdDdbgELxfGsLpoZyqVXPVU1QugVJUV0dC27p+FaaBWWxknq6ceAljTNMiAf/BoUMbJpewWqmqSRAQCatJBqKWZpgJ731Zx9pJM4aK0hXe5vlKVFEbKFlxs3PvqpSSqpbzKztRm+gnEkktnU6/2GFMfa4wXK5XDgJCWC0y1iAR6/Z49iOjY7C5qkG6mk+3SFQGlEP8FFdnygrNFqBsn1OxP5+K5pGHbcBhqhT8fqu/v39mHkVIljZAQAirRQYx7Wj3Zj3tddQjVVJ4l50CMjHe8mqOTJCCvmoTyIrENXx7Uinbm4Gs2PZUqkObnp76i0N7N36tWl8kvn0RaGnCGhgILKPn3B3+xKVXDh8+nPseX3sOlpt13+P4uonv71WeDqLr1ampFB8S1JrulNaHc9rTMxltcpofOeWns0rTLkeIZUHRnpm5YibMf7kc9UudzYNAyyrd8ZLpWvfgQT8w+oyevXeo++bBtaEtQd9s1/ffRsV3I6eDJCp+nourgH04UZQnhIYfWm1o8xdUGCU8/E/bil89sH3dlQUVJplbHoGWJaxnXri2HTvd1nEEcCBS3z++MLi75UejQgcmJjL92ax/gNJPo6QekhVXAbdvXI3D+XQ1Bcxiu02zTAEjKFIdHTQS/S8Hd2/4YhQm/spFoCUJ6+mnL651gkwRQRmBt33gO+c3teNQYin/oG6aKX5rcKEukqqoWN+Ij5vy81v8UATDG0WGC21jlJ96K6wKPpWd8H8jChN/ZSPQcoR1+vTppJPS7iw3bIZl7n/++eFV5eJaOczX9Z2YvM1LPxWpocBHKv8qHHdMqSphGUqqahaThfj40ITBcbLnsDj6oXvu2bS4n96JVy73TYtASxHWo48GxrUx+5Cu+XY5RH3PMzLGxF0ktXLxrRoGNVPPfNtOolIrgElLGYH2wbZqcipdIFVFlDbfGhqfj9bskCaHHS/7gTt3r73Y+BqkxFZFoKUI6/C7Lu/Bl1jmlKB8PUhcHjHufuyxx/g5lbZw+BL7bX4EoiZqyS0T0uM0j1+82QSl+ua+bhxj7GjD2LicwWkLzaarigbKsmDJ7gcTmezMBw/t3ixntUfAiK8QaBmzhq8/f26j77pbaxo3w+jetPf1B5D2RE3pmzyR4/nH+Mti4Wx1dUrCHO0lSVGqskFUnakkpn6mhu086jgYHkWTW3Wbo4Tli6L5gqYHE47vfeDufVv+YflaIjU3KwItIWEdO3a9Szc0ElDNDqcLbHjmxas7a87QxAnX9ljfxcr+Mzs29ykpi1O8iJjoR/cm5o7dnUl89LRLW93dyWmVIip+Kp7pmlWqIvQ8Mga9Gslm3Efu3LX+K008HNK0ZUSgplnGMrZPGxgYsIKeXa/TA61jPu0w0+7xBx/cd3M+eZspD0wbDgWm+RXP13cODY/jWGKuGAb48jG+agNpilbqlKZoWDqDY2AyjtNUlupzYZlKpXgaxIVMNv0zd+/d+uxcaSVuZSPQ/IT13TN34QRvZW81n6HSDdMLUqmjh9tgd//Fi8OHEl3JL3Z2dh3MzGA7XU664llVWRz/QhLjNYmsmaWp/DjCjqIDdlaZTOZZ1/A+fGj7hjP5OLkQBMog0NSE9cSRszuswNhdpt31BRnazM3U9IuPHDrUuG+419eChqU+cvzqjp7u5P9KJpMPpqc51Zv9QntLkFQBEqZluVCw/7nhaP9i376+8YIouRQEyiLQtIQ1cPT8GjOw7vE8tyFtxBrb2MBXdh579FF99g0vC0nzB548ebNHT2l/aFmJj1BPBYyav9EFLaQ+jdPAVNL8/pZ13a8qiJLLOhAAjvrTRy/d0enbF+69d0tzHFhWR/vnk7Rple6mp+9uFFkRGF8LVj/08IUN8wGp2fIcPLh+4sCu9R+F3ucj0MLf4vaVVnChqYWmdaQS2jpY2vd0djh86Vqh7c3Yxm8dudTPxaW0lrn7yJEjZW0Tm7HdC2lT0xKW1xecgHE3FDWNcb7uDh6+r/96Y0prjlIO7ur7TOD5b3ayzt9ylY0Gl83qKFXZsCXrXdOlrV3djf2LBr556JOshLDmMWhPPXV6vav5O5jVxYLUhNl3iIbV8yiqpbI0bQcP85C2Xu0l3dczC0XUN4Pzb71339mFltOM+Q/0rzu5f2fvu1zH+QDOt3uZ0pbVRMRFouJK5qqeTkhVqyBdtdUmhGV5JI4cudrpd5kHiyp3tTU/8s6r+4rC2vCmaQmLWJO0Ep65INJK2tbpt75298U2HLuiLh3oX/95L+0/kHUyvwTieiUJHVEimVzy1UKeWMqv2pCoKEVFRNXT1aHawnBx80eAZj7TwcxdAc5Gi5fiaNnNT37nCk4xaV/X1IRF2B94YHt63qQVaCcfePX2K+07fMU9U7qtHev+xE/7r3cc70O+6w1gxuV0dHZiusgvJS/O7IskRXLs6KCxqj+B26t9a3uUREWi4plbQlTFYzXvu+7tB3EIUGel/L6e3TNw5NS8zYAqldss4YvzBC9C7559drAja3qvDoyg6pwCP+KBZaVOPPjazS1vMLpQKE9fuPnawDB+EqehPwzWuAuSl8LPg90WVxhJJPWQCUmPBAWTBEz1TFUGpqO3wYYvIPgr2az35a2b1/50V6f1e1NTlVcvEzB0xRekj67usu5FmS2/crvQcaol/zeeObfTSOj91dIq28PxiaOHDx9quy8LtQxhcZBqIS0Dhkl2l/3yA4e2j1Qb2JUUD1Iyz1waOQib0vsxKXsAFvH3wMB0JySwtZC+DBPTN5BOCEnhrI1BuKe9l6tIzsVCiD6E0DOabrwI2elZ09aP7N3aNxjheXvK+a1OENa0EFYEyYL9rz072Ju03ZpNQKj7Xd899cKhNrA9LASvZTY/s9GcHoK0XsrakLS8UklLxyl+/rj+/Qfu2367sJNyTS7SuZfneO7ffweBGScu3NwAqWgrTvTc5jjBZmw87tMCfRXYKQWOgula4OiBOQUZ7DZuhrAGdQXxV0zPuCaGnkv3VPGHOpPw7+QPR62OM5HhdNddGOeX2kmCbSnC4mDlSStVTFr4eLljdHV+702vWz9R66Cu5HS5h5hmHvz3QiOxwJTRo2BGgY06dm7OVhewYGAY6s75oD+ZDs4JPY9JyqSCQ7ABqftd5VFM3/j2Ja4mtsWpJQSq6ZXu5UZTKeJnsHpohiYPRqBn04nkS2+CQWW59BK2dAjwS0Y4IHDz2ERWG8Gnwm7iK9W3sFmbvrqGPzw6gW8eTmvTM07XmTPX28KYd7EQ3rjnvv1QFHbPt3zT9DcMPHd+13zzN1s+/hC2rKOo7NjeQdsxT5LEWrYjbdLw05eHtwWe9jl0542u62HZHZIVpalY/yIlP5X3MHYddLLZfy4fmYiBhNuB509vw+rG3tKY+kOwGHLi7W/cS91jS7v4s9TSnZHGLx8CICH9lXNDX+zpWfXuycnaBV2e3e567nAm4973qv0bzy1fD5qr5oEB7KXt0u7B3Loh7yhWVfypbOalh9+wr6U3mbfklLC5Hi1pDRE4ef7Wj+EEiZ+amqpvJT2bzWjJRLIPR3n9riA5i4DZg720DSIrlsrvHXSZ9p7ZGlrzSgirNcetqVp9/vz5FJTqj6JRejTdq6eBMzNpHP9s//QrF4bvrydfO6f1JrCX1mvcXlo98Kembjotr3wXwmrnp36J+pYNeh5JdqRem83O77gxkpxtW3bgOZ/g1HKJmt3U1Rw+3D+zrc89aunagnWzpq6PdxujLz388L4F78tdbtCEsJZ7BFq8/sHBoMPX/I9hyrGgnuDUUZzrnnz7yQu3HlxQQW2Ued++fZmJ1e5LoPB5k5ZpWCPXz+08du+99zrtAI0QVjuM4jL2YcIZeh+2+9wF49MFtYJSlgmHE0g/JlLWLJQPg7RmhtyXsJ18eja0tivsXhj6xy9ve/mRR5TRcG2ZmjyViN9NPkDN3Dz1FW5z9XM4i+s1ME1YcFNpUIrVLHzJzHnwjl0bn1twgW1UwPHjxxPXpztejR0HFTc+F3YXRwxdfdM9W08D0zrs4wtLaM5rkbCac1xaolWOvurhZIPIih0OdVm2haNTfqUlAFjCRnJP4HBn+iUqz6tVa2nGpTe/etsP2o2s2G8hrGqjL/FlEQC5GHghfplSUSMdvwaEA/9+4vjpa3c2stx2KIsfUek2dr+EuXNF2xEjSJx98w/tbFt7NiGsdniSl6EPp84O3W/Z1oPzXRms1GRKWdCJdeCIlJ+vlGYlh997r+70+EPH8NHJEtLCauCph+7bmj81ox1xEsJqx1Fdij4Zxi9AT2KSYBrtslgxhOD2gWOyz7AstFzx6zFHj1mGobYUYAgC9cHge3ddK5uhjQKFsNpoMJeqK6+8cm0X6noXiWUxHA8WxAdWNyQM45HFKL8dyiRpueM7jllmMGpnjO+1w9fNaxmXxiogaqlR0jQdAkeOBPjczrnOiQ6jw88ESSOA6KT7iQzOHEvavu1pZsLQg4QPP/DdZG9Xx/vWrOr+mfR03SvtNffdxleAQIgvTzjBT0w409Mpu2faufZy+vDhw5WPMa25dEnYqggIYbXqyNXY7i/jCyvdfmaVb5hdVsLp9LJGp43j1/1A7/RdvdMwPRzEboRnLVHe9vEvL3eXBOB4ZMta22H+TiqV2LJQ26u5u6Bju44Z3J7O/Lvp6cwPmBanOwQ4uNHRTWMK21bSvh1Mm642nTWCtKkH07rnTE72aOO0XZq7bIltVQSEsFp15HLthg5J/+aJE12m3tVjOPYq1/dW4cTjHnwMYhXOce8xDd3y/PJW6OpMdsTRVy4iK/rKMR/jwvz825VIHFzT3fkx13UW/dnhRy3GJyeeHEs7n1XNibUPFvY6vtGDw5vV9w0Vofn81qGhZfDhi3HX8SfQ/3HPMse9CWcCX0gel2OIFJIt+2fRH7qWRaYJG85NxldGzV4tGayFSLQ24+q9ULyu9gJfMU5ELTn6wUISTl03NHz1KzyiJLqmX657OLLdSJgoXTO7cBxyN172blier4YCvBsFdSNXV2dC35tKJrbzfPfFdjwvC/qs9MSMxxNRsSqmT6LhUDQHE+jUBE7UnATXTuLsrRn01K2l/x6+qItiR3TNG8V59KNB0DGSfNXGUXwJY2Gm+osNhpSvEBDCasIHgVLTt75/aQ0MnXpBNb2QgNYEntfr4wu/nBYpKQLtxtdwAh0SBX3VDe7nM/Ha5vf1Fb/CURS2bCTAWWuxR229qRsbQQQbUed61LfW14JVKKsTJ5sk8WUcHbtlNANyTOhgcmAGKH7p3m1FWpqtuZCu+LByVdKHVMjpKEQrBwIW9tnpXOIH+QTDSH/D9f0bmCLewDn1I4HmwtAypPDZ/oe9oXKf/aMPsWxSs/RR13FHrURiZE1gDR86tKHEdCDMKX+XCwEhrOVCvqBeHNaW6ui11/mWDtLQ1kEiWodXE4rwYgepAPssTPCMOjIdAk94TZ8pMZjch8HjDorGFUTUAwlkh64be0A9/ZCatiDZWtOyE7ClQmIdJICJFYhA+TRV4Fo5/QIHiUvrTEbkVRCxiJfsSBbfYk87OTExXxdazY5yUgiRKfpHQ1YSkONmAZY+gV4NIeVFfCXoLNA5h/Plb5LzWAyzF+IVXdNnvO/6GcsyhjC1vmWZ7s2pO3fdOqzriy9asnJxZREoerDLppDAhiIAEtCfO3F5rW0a6z1PX4/nf53nG5RqqrpieSnULEVh8cx4E7ugH78H8tG9eP/24oVezY+pkpA8b/abhPF8le75BqdsXUtaFeaTlTI2IByEoU1l8oq1mkokcZHElIRoWmpejMMCMyCvQXyy7JjjuUcgOl4tLCzCMpTHgFpcgkViX/dH/ax2Szf8m2Yqc/MN+1r7BM/C/rfCtRDWEozSkbMjq7NTY5t13dqE6dhG3wsSqlp+C9DDi0ifLrqmT1f6BgUaPjiHN0lJAGAfvpWcI4XjiHIMF6ocO/EjmMa9HeelQ1LT1PRpoce/sJwOTCQtc+kfGQp6Uxl+9JWtmL+jNEaJ0gKBgbsygR58B4sHfwV5aliVWg3vCHv6ymHcdG868IzrVsK6pnd71+/dsmXxbD3m3/W2ybn0T1/bQFe5I8euX+9ybuqbXMPbDA7ZCKV4uMOecyz+9OfmWvj9x9zEw6JW+JuOX298WhE6qtwLEV3TL1tb/AWj7sqwfqaro/sdmcyM+vBp2XzzDEzaBiQsNH+e+eeTjQ+ohwqnG0BYhfVzNYKrkOmpyauYYH8KvD8G6RPBszrC6Jq+ystl0ghzXEZjR5+O4+iZwTh+eG7Yqa5rq/3hGzzTSkXKn4YgIITVABjBP+ZzP7i8ydasrZCetuCHvIvFRs92SEdlpnCYE2LOQi12OA7RNf1yjrphHIyE9yOXPnfNMDg70DpdTf8DWDKs5rRvMVwChAWrUgh21HzllD0NrigqlxKVC7bKQuOOWeGiuI7OTkhb6T8C/Xw3xkel9cXxj6eIxiY3Hhx3X9dHsWJwDaa3l1+zd9Mt/F4tUk/ijWnP+/DBb8++LWqvnh0c7NDGta0pO7kl6zpb8AJzEUr91kYEFdeBRCt69Nm4+AsSl6jwjVGckY6VwPwUpLhLURx9xliWvxFHi/w+zB0SWCnLsVpxnoXesSI2ngp4zmRJXPgf/0IleGH51R6uwjeX5MR76qtITh7+8N9Cp4GF7Sm8Zl1s35pVXVomm/5c1vG+Wm284njHJeJq44/FjixUAld8w7uijW6+xo3MhW2S6+oIVHumqpewglJ87+LFtcFUcqur+1vxwPcZJqYPMOyhXw6GKI4+4/GwQpjCBhe+6XDIpFb06PM+np5hhS5eXzw9bLJ2pBLGv4Fe36BU4kA6IQGw8MUY6MJywVeqDs54Z69zrWdY7jI3G1ZtUiSV6zzDI3IqLLew/wu9jspl+yywrA1pEed5QceXPT3jBb/DLrA5ua5UHZ/4eMTbFx+fwvE3DJO8fANrjlctL7giJhRx9MrfR89R+VgJ1Y6currONuwd0FNsxwtV02mPlWGLy1TxlPHf6Hh8PH9xesvw9yRM+5PIRT2ZIgVKKZxWUY/PT8aTFPji0i3m4Ed1hDWV/7uY9bNGtiGqAyorJRWSqCgdkrQiR5KddrwPlsq8xfhG6efvx8dvtiQczDdmmPaldDBxSVYeZ3GJXxUMWzxq5d4fPz7Ym7X1HTAL2A7NqtJHEQ3qtCPjw3LoxB/v+OMZ5VVzR5aHWRuErYA+y4uu6fM+Xl9J/lh7bFvbY+vmv0bWos9tsXAWSLIiaSnyApHxJz6SbFSFuXTw8i86r5vVRW1m+6IHmUREAuI0lcREP5q2ztWPrO9/YK54xsXHI56+cePvj3qBfimZNS+J5FWMcrjptThsRd4dPX9+DcwEd5iQphwozfkCwJKaLv9ewHYKeicfSudwShcnJDBBOD3MTwGRO0cqLIj73jQTaejDBYaPHTBgJ/i5+HyYijd95sFhRzkzB7yL2IrCtGwezj9nOQVTUlfPwiicifnu5J0qHHd8mXHIG6ZD7JQqIk9kJK6QwAokMWRUhMaSeJ0vcfaiXNhs7PyuwpYV51Vh+EM/Pu2M9GckpyiOuZm2Wvtom+Y4me8xPbvIIujzPu6Wbvyt1ejL3U7Sv/v754ZHsORwaX3KGdwiJhO5pzY+Mivk/urVq52jTnIXlEc78LKu8qAMx/G8kHhyOicosz0ovM3IrIDKb15HSvDoOoqv+hMLYCOWI8ash0vmufryZVcqLz4u8fym3ov1xT/EVp4UDUTn4/iS0xW+sZTMojASmLqGp64iH4FRXJQ2TKj+lv7JVRTVxwQkm9APyaboGnGMzSVR6VR87ipsVT645ovOzi5tamb6zzB1/nqzjz+s9YetwLioZW5C8jq08K9+1IxS8yQsfF6ap1WL2BK8VOaJc6NbPcPrx7wJ++hmHQUPvOaQgMJ3ETtVlERDP0wVsQ19uPgcLQyt/Dc+p4jlL6k/1xa2qVyh5ApEzEoErm/DsPOTXV3de6anq36roFyRdYWVbVSshHJEMt98saIXfIu9koplYZL6m/hUz7kS/Jt0/PE8+Jj6X/Y6k+fv2tA1BKIvB/OC8WnGAmp5dpqx3XW36fjgYK/upXbhFd+BrRlqn16MfkrspkoC4hnirYjbUVWzs4rHx8uL3cerjwt0TA4RcBcsuX8Rn97q54okVsCKJJ9YkSvy1gJR4aOtnAr6OJP+L13d+BKBKMEzHhAfgDh6yzD+vqHjTDDvYpAxLqwEfVdbE9bpIEi6V27tdLP+LnzPrWS/XrRTnz5d4e79+LNY7r4kP+Z7Jv7z1LyPL0B4Tb+ci9cXLy+eJ54e8Rw//rqqcUR+HOrgYVprJbBl5E2w63oI64J7k8mUDZLGhmAXs19ucVkxP8gKQu4ptCxbMy2TW3KAGI4u1P207ztH3CDx/7bL+Cdse8h1Zy5ev7Dp8uHD7blJuy0J69TV8XW6l92Dl3cbLG6g98idbhDgdANcY1ZY9o2N4mpNr96GRf1Da3Wui0RW69F1bWslvp81LD2xDTOGu9DhQzBc7AcYfYlkAqo6A6ozqHNBYJTESGitTGShsp0qQSxT4AcoPJQw0LBlEPhBFakHDjoLvY+XgVIyg7WK77tG8n9pvpHXBbXL+OMBd7FN6KLu+uf27esbX9RHdIkLbxvCGhgYsDb3v2a7obt7YHakpKmYiqgE2ioqJbzIOszXcSov/DAzRRNehyJKvPx4+igv/ZLKEaCkoZxUFMYXE1I8f7Xyq/UHp9CkAlfbCF3NdlhS7IQguA0N2wiJYy1ktC5IISb1Okr5jSYruy2SGlYkIkKLSC3yy/WrUWGzSnjaTUX/QEhYQuNewLCdwBFKRkpOuAfr4sBnwwfDg6B0MHagORhBHNqHw5WxTwYav6lAt/42MBLfrYZXHO9w3Ftr/B0Hp0pY+tkD29ddAz5ln8NGjddSlNPyhHV8aKjbzAS7Dd3egRcvgRHJWyrHASw9Pyp+vlSxEluH0jWAGQF9VVZMpxHVRZ/xSKQU4PR5Xy0+/sLQZCFS9DN/XKtSeh5WrL2x+sMyZv+W67+vwz5eC7oDx12rm9pakNg639B68XL3Qh+2Bm94DySxHhg0daBHSQhiCbyyyMS9SDi8RhEHyYP1qD9qak0S4VGn5VYrSTRKEkKHWYYiHuQmCYb/YKYLqS+3H5LYckxJmz6qhSYJ5yNgzgtuclESpncBfN8Fj3lgJdCSGpHcGECoxrouMoHjzO+4evLLMB1VKxJV8Wyj8Q80Ix043jnTu32hlTdkh08Yn7UWcnio9Qs3pzZm0lN7LCOxIdIZxbuQ1+lAVFFxJB7aMeUIiPkiPRPjo2v6dPF4FVjHnxi/oQK0Az/bymf5uI7ayGLj6eM63nrbF5VNXzV7nv3HViQL3JAEaSV1z0iBNJIgJBCYkSKJYbdjEiSHw7a0BI5s6QBBbINUswMUsQ6E11UojZGccA9dcZDBdQY+TgyFTgkiEKYyIBvstAQzIRk8cBJ+A2j4gZFDFWAqjAp3V5IhQYYwwUJ57ByS0QINzMYK8FyrRxt3KNbXb2qG/UVNT5wDyCt6/A0boGbdqzPA4tD21SPquWihPy1FWHjQzYs3xnZkM95ePIZd8RccBx1xez/UPowp46I4+uVcLD9/8Plq0Gfy6Jp+uez5uqPyY+UtNN5DuVQc06drpv4bIDXsjtsMpdkOSC79QK4Xog3PzwF4IBNCBiIhpBSpoE8jioqWaM2KCRuOqwLXgIQItKIe0lCYD/lZjoqgGIo0+J++SsmMKA8eqQ21qHuUh2PfzQHN6vgG6vVK8GfmQhcbr3Yff+AEi3rtdCtNF8u/eIWD2ATXx4Mg0XH1Vr/hm7sDQw8PvyvTrriKWocEE0C6oM/kJRJHrAykgj6WGlq+JUifu6YfS6pu4/UVa6AgQcXKi78ApekhcWFBwMstEkTX9MvVHw+Lt2ex+4+Pg62CxgsHEwZbAdgWIJfA+ICkfDRYtyAwWWB7Ay8F8VT/KB0bOJ4Gx/CQfUKSwZGrJJs8iZHYgB0zMB+zk8hopQ8hEcEog2ERASIBAOL5fIrVIKLxXKtzKPZLgZUckvGf+/nH5HsK0+Uz3316zeAjj3D23Lwu90w0ZwNpiZ72UnvwfO/AXIFnXfLBxLOsHn6yiLqmr3oQ04LHX9hq6TFHI6txrlYWkHj98UT1lh8vryR/rIKq6aO204drdP8hRWF3itmLUw42QnW1CSTSA2IAIXkWOBYKLWw8wjVqNkEaFqjFwLQNJhWI4ZiFoiq6QX0SbsEo6HMoWVFCYprwjw6FP65BXCSoXJwiOwpnFK9A6yiWkQhRDwA9XAfpwLS/AqnqSKP7jwapquiznXFXMn6x8Yg/X/HySvLHKqiaPlZfvf0H6BloAM/v3tpzHkJwUx59Uxb4GE5Lfnt2ZGS16SX3+F5mq4llfegtwnaSR6J5EC8hPUV6IDaS6aDnoZ5DpYe6AtdgOr4pyhXLNPH0KKCo/DDP7N+S+mI6qHzbQr7AbdgW+iylWn0l5cf6E29ftfSN6L9lGl04x30tOtMHklmLhxpClW9BL4S1T+i2uNPRp+0FflD0AN9A9LHnmHGBBfJCE3QL9ALiguoJqiu+64gDzWGIIAlhzhaSDsMV/yjJi3BxyY9khP9BXBSzEMY/AFORGMmM1yyKZfmm+ZKuJf4uMHV1THEj+o+S864E7zYd/8Dliqp2MamvPbt9uw4dY/M4DnXTuMuXx/scK9iHLcbryzfKwvOJBSGNPl10Tb8WV0xYyMFymDdXXv46Kq+ueChJQI4WlSUqf8StOf5CNdXqr9afxe8/Gm6AoLAqGKyCGLSG350ACFzKM2FvaeOseEhFOsjItdQ2S6wYYmkOdl2+CfLBvmpIV55vYY2Qn6uAxAWC40zbhxSmWArcQj0TSIiSU37mx0kgVesgLereOSz8E5EWJa6Qzyh1hZEcO7xY4Ct9WLfNvwa+5xA2h6uGP6vMPxMsZ8WNf0Gf+cOCw9usq51a5+kNG9Sn1IjJsjoO0LI7EpVra/vxhPdFs7JyjYriohlbTAKGxO1C6oJEljseOLqmTxfPX66OucJK66OUNzuDjK7p05UIbGwX25I/vrj4BYrnD0uZ/Rtvfzz9fPsPIkgkbL0DZNMFRVEHFEY2ZCBTcwMLdfCsCCVN4SwpE9YG+ARNgD24IDHYSYB1yNCYDkLRFoC8oOUG40AKQx5IYyAmlQ6SF7dDoSof0hbJiApzqLs43aPc5UG+AvVQ/4T7nGQFQiJ5kdbAkmgH2Sz0FaWB4gLrad22v4nmuvPt/yzCc1+V4t0e4z93r8PYwDCvNANxLSthkai0jmCf5+jq6y6Y4SkjTfoKprgWufj9Dg3AozBmiK7pl3H8WDH3u0YfLY6u6c/HVS2vSvsxoygyTF2q/qNenEyjJ5NJPYGPRidME1M1/JYqwyoNq32Ihu4J0z5M+WA2DoqwEI9wfmEaEhQJzPNsKNOh0jJwrfRVJqbnNOrC6IGwQFzgHiKrpCuq2kE+FizrMXWE7IWCEKemg7hSiimOQchNIC3EchqpHlBO95TshQThkwF5TL9k+Mm/MZLGzVo3AlQdLzagDle1vCYd/wU9/5Z5ZcyZPnNow/J8ZHZZCGtsbKw3rdn7nIzTx42o0WfP1cPKuYJ6XPFs5q7p8zmKx5v8cdcxDeMPOR1fj+gh4X10TV/dukiC+nJPeLy8eH1hrtm/UVvpKxcrP2oL/dlcs1eQ9PCeo73wGcp+R2Xyvlp74vH19B9EkoA2CYKUlcQqJCQj6vkoyBjh/IurcJiy4Zxy2FMptRBO7sK3kClR0UYUZAX+wMqfC1ICiYHMYBsKSQsSFKaAUEqZLoiK00ASFsgpN0UEUWE6yOkiiArE6NmUb91OWwAAEuNJREFUszCNxA0c/uBoF04W86YOarWQAYjGmHBBEIkUiXEqib025hNmInWknv6zKo77Sh3/RvcfSx5Xl4O4yr5Y7NxiuEEQFT4uvs8yrF5VvosX28LLS185vsiRHkc9YPiJtrCbJIzHyx3gJdfpl80flZWPR6qIxJghus7xjSqj4E9UNn2VvN76Csqq6XIR+48OYEeGlcAaXhLfQwxNQcgQEI9IErOOxBUuCuDLz9Arm5iyOTaYy7Jty8hAb2VCm43ZmwnwQTbgFpAWyA4SGEKhaMdgYNpngKAcpeMCAfFjYGE4yAqco3RZ0LorUqOkxVkf6AgzvFBPFbISSsOUD+WRrWijpcwbmI4Gomj4yxAIv4bPVU+q9sfxk/EP36UlfP49N3vNWr/m9CZdX/zzjDDofAoW3XHVr9NPHdB8p2+uORl/mjFLUktMbBTtkSJbpLCRxYyD5OpJps/4+DJuvq5IIgoLqfi3pLzcRuloM7QSzKImsBSWG80LVKkxkSvOkFHaCjL5QvrPN9rwvaSVtEg2ICmQCNRQkGjwnlOpNktMxdds+GxcRFrIyCmhTQMEUJjl4qwtzPbAOVC8o0DUZroGiMmBpEUfRBZ4DvRUJC4/1GOpij1ML9XU0PJdFxIZGsOpJkkOQ0YdFh5CPodKl0WfRqQkVUhTIEf1iN4GkdJU4Rx/xsJfHkpfMv4cd+IAUJb1+YdkfSU7NXp6+/bti7qquKiEdfVq0Gl2TO2DonYzAcUTCv0slCB8FuGia/q8j7iAPl30aNIPHVKq55w+00MvjFLo05WmV8H5P9XLzydVF/H0xbGl9UGfjm226B98po2u6fO+0f3H9M7SbT1h+FoS00ybSmm+5/RZHxzbwWvVHtSvNuLRR4BKl0vPtHRhWh1SESUsNBkH0qjvNiAx4MA1JDBc4yBmTPmwJArJCFM+dA1SE5XsmFIqRTzKUrZYkMio78IUkauFoW6Mcbin1GWrOR8nqOEUEUQFmuK3ZdEw6NFg92s9j3XLp0CIsAuS8VdPkcKhCZ9/KAc81x/c3NdzFjy6KHZc0YPNh7VhDg9jYnh4co9n2dvx1nLalys7Rimx2xLGigfEJBQ0Xr149FkBVb04BQiTlPAFbTiDxRGKM1pJf5AgarPKG0sQu413N07hkCANO5m0fSebtCwziW5DqMISHTRMJCDF23inYbmsauNCHq+Vn1ta5dErzKN8psP/RiIXVpAegKJQ30Y06AQSEXdAIpdL0wbTNsLpoSIeCwRJHZYBpTusIFAIlPC0iqL5AxoCcmLPQkkLdITRCc0dSFqQD1A51g4pLOXmhZCwDMO2BpH9q6ZtDoU4oKQIy5yEynFnv+mzw+0+/q3Sf5yT4aYs89zq1alLIK7wYeQANcCpgW5AOaqIARzxcudrXrMTz+cuFAxBI1Rw06eLKz3xsnDikt+Mmr9mWBlXrbySeJAlTt8MXJImXHRNv0zx2GpWZ3r0KKqzXHlRHH26+fQf+mkbg56ADjppUuihMJl7BEhGtmnj+4Phj1lEUAzjaQcgJkzcqPPmlI/yjdJV8Trf/+hbeYyP0uMS0zSVF8SEaSELxkhR6a7IC1IVHkNMBWEkCljxYQ7YXgWKrDCHw2ohJDDKSkr5Tst3TANBp7DdgkTFKSOpxYMtV2i3hXQoJjwbBo3L4oibAajdXmSbCl01PEvi6x3PetMvwfi3cv+xHpPRk8GZvo6Oq5y5FvZlvtfqQZ5v5igfH7iRdHqrn/H24McyEb6ejCUxkCwqEATi8JDNKtWRIxI6wrLj+aOyQgIqLT/KTZ+OLYnCFGHE60PdSgzIgVmcfrbt5evjYkB97VeNyv8plx/UYoChElhYgB7KtD3PAUWRpejIVNzNAjNzyDuYRqnrMF5dIx4CkTrlAJQRps2FhZIX5lqYwfFLOygTBeSmkUhDEgNvIC7MR5ML6JhozoCpn+858G1utbH4j7BRT0Z9VlZzbTyOKJCKeCjkqYbkFBJh+DXCPVcKuXKIFURlm8WBoZSFOBCYmk6i33ioT+Kw1CegEMspcFfe+M8+rRySNum/YUwm9I7TPT04NWOBDg/nwtz16xMbEp3mPswIOuI6G7wBSlynz1pQWZEIP0smIcEEWN3QsfJDn+nj9FFSPh73wilgdE2f+eOumo4pPqWI2kI/LKu4RVXLq7H/kJopRUFhnkj4joNT9KC/BlZgAIVD1I+cwASVUBgCIsF1KEQxJLpGPKHGP5LYrAs5ikREnmJ61KF4K5cG1+REVS6HC1JauGroYYcOrLWUEp6MSF0UpoZgK5hV2dgEzeNLYbMBnRQZEUPnOwGMT6GOp57Kg/0WTCMYjnsQHpDmlJFTR5IcNt/alvV1PdF5NsKcLSpGG03L6QcjnWDpeIXqgFYb//A9wGi1+fMPDeqY7nae6uvT530KKp+JebkhHJyX6Fqz33X83tCgRr1d6gXBH+XnFtEwDmEVMBfAtbK7UvHxVTb1gGLQokbFVBZMDtUJHmT+dsPxmqSRU2nkrxkWxhfbOfEVwLov4sIaonSRr1qZy6vy8xliPbn+qPjYHxSm6mJwdB357DfaVtJ/BMLeW0/ayVQSR6TA5AB7h8kwmFeRrFBUSFYkJk7GsM+F5SuiCQmFBEriCskHYcxfEM9ozBjBS/yaKD//rBzndjD3BHswAcmqwFdhOWGugCw5owwpEt9sxMlVGWQEK4GlcAOi1XAcL6eLICfdcMFmNDnH7xdO/YTCHTkxM2B6EiSPbuXmHrZO5eJy4Iu6lfo2Gu8orFfA+PM9UMjnHpBIx9v+/Q9Wm8nMfcMTE1d7u7vP4Ec6fzy1wqOGP3xI63JHjgT2/rsy/boTbMP0pe78dVUWS5wjK0VUjIqNN3kA62ZYeIcfxofXDFNFUZBTT4W6m71mWBlXrb4yWSoEYWh0jVIUdJEmzA6o18mRDN7dCplCEkK8IiP4WRAU9OO8j5wimZB3SAhKYlJEphLkJCaSEP7PEdxsfVG5UWFxP6qPPngTlvBED6IWLN8dTPmg8ocFPPRXWBdlFWqqCEmLlhAgLRtKdLaAkpQNfRUM6DUQGOUiTimNEaT7FvRVw/F6K91XG4/mHf9KPaovvJ36jzfSS1mpc6mUdhnvhZL4a0GjZsKBKK+n0+kt0AHvztCAsIzjeeAeUKVPF1l101cBWCICxcGmcPalUeHRnyguIsJYej79fFnpKxdjrKhu+spVK69Ke+OW6SXlh7Xk/8b7D5umJKY6nUiQAEmp5ZKoD5Ay8kTFzcAsJIrL+ZREYCWAaU4ubXRNP8wfpuSuGubHMwCJhSuGPCiYJIMw5GV6xkfY0Wd+WoPiBAlEhvnzNluw3SKZYTkQHIQ5J1RQDg7Lw/QQGUIdFp4wcC9KgQ/7KkxjucEHROVmc3ZaCFfEjMxUvlPvBZ0WhT1Q1zG06hQKyGPA9qEh4bPRJuO/0p//WvoPyXpa77BPr9L1mn64QiJRT0vlP3jg1oyn0/th1dnN6VOkQyh8wVRuPpLUH9GHi+sckD4vLaj43NSHLwfv8cKjbGxdgc97JUpFpIRbpovKYHTUltkpHYkyEqNYf1gWfZU+Vn+JiMZERS4qKyTAMv1hmwoItLT/aL6OL9cn8A4mknhDkR5CUuh43ExhAXjnIQVxRQ9UwnU1JM73meHISINzlY/1Ir3jwNQBtui5IpU3K2mFZbEUEhgJiHlZhkqI8rws7hPFxBHlZ5romu1CGRSv2HyQEQiLPkwefJcSk2o0mU+F8Z46KswbKd8qvRUWiq7BsuoYlF/q+Jd839p4/KNnFHhw+Fbc819r/y3dHO7qsk9D2lLPBvEq59SLXC6CYSCq1OTk5F48g+FxLyQSvvyzhFK8taaYL1ACiYdkkSOg/HVO4irmAySLlR8+yHy5wnaWysTF7YmnRxdyecMXFDcxx3KjNCUEGUtb2r4Iixwh5qebxEG58v2Hkh0ERqlLp5kClNLkngLSyF8XExrZi089SYbFm9DRg1FCbEKyoxQE8sqFkTOgTwrDVIPCP/k8qpRcGrxMEXmxnpwjUeXbhjpgA2bBNsp0HPQWOiwNOnddw5YcNIdSFyzTlUKehEbrLDxDNn7osjCXPw5FO22qgPfKHn/pf8XxxxetvSvYlX8BxBVKCdGDmPPDhz0W+Oijjxof//jHt+Hh2oko/qKqFx4l0BJQmQIwS3RNn/fxZXqGFbq4nQzimI9tKFs+S1S1KJ9XoQkEfUQwtKg98fSzefMMwmx5F28/IqK2RLjM2b54/gX0H0v6+IiDZSVgHJogfYWNzDMUpCtsUkKg4pKIUJAsnNTlkjNWzfBCPMOhi8JAiCSqPBmyMFVQ1OdctQwLywNZ5cPCpDl80D6IhjzBASQF0sUeREpSJCyE4ceSpJXbEO2612AHepaTSRn/YrtEAD3n8xV/ntv4+S96nyGRO9gccQZmEPiBK3bRi5kPHcG+v2T32n2+53bxNY8oQyWIB0SR9OmqxMeTh5lm/8azx8srEbCQNSqTpUTX+eagwCiPqiWeQAXO/olHV2tPaYUFjWCxsQJjt7MV564K6iOB2Xj1adNGa3PqDMFl4XwSSnAQCUIibqFPlwtTwbiOkoSR+JvLx3KYv9BXaSrlLyifSegQBNMFTAWhiIeFArRZnoX+8Y2EzKhbnuNlYO9wFpZXkwoH5Kmj/6qOFTz+0n8+Y4Y/2pVIcJqY35+YJ6wjEN33ZzL9kPY3hWjx6Sv+RcByLIQAZZYQJSn2C944FRF/QkvjQ31XZDcV04GVPOGl+WdJEhVGbaNPV3d7Va7ZP83U/1ACgzTjkg4gjUFvHhGWkrPAPnnBLNeFSEKKfAbzOu9yBAUdVj6cZURpZuU3XOUILioD93x2IEnxxFGc9c6M+M93cHSNZVzHquBQDeMn4x898wQ2us7pgGvAbyU8/z5e5EupVEqtJirCgp4KHxVI7sbrQIYKHyKF3+yvIvEEX8FsQNk9qXwgBpgQwNo7p9OKrukzfdzF08+WTmYrV35YF+tU8bEpYImInGtLVH+8PkzZ8iQcVpjrawXCLOHH5uo/9JmWjbXHJMQcNhVW8bOklbsumnJw7Q+cgtVK2mJxAUNNKKncp54KHuzAwnjCE01B1UIHA1A80ik/IkdIfTj6mE8MXh2sSKZhdHUd+IcDykwFLj4eMv7Fv+il75c8/xEmeHaojD+jZ4LgbsPVVvO5iutg4oSAFCCiAqVp/jrUKRU8mzVexsube05ff3tiD0Q1wkP/ojrYgeiaftiheHsjLKL4GrudTxYvb0H9h94bpzeAwCD4cAqJf5SmlBjFH5D8ChVC1Q8KyIkrjtgbE64y4lqtINJHel5Hq4q4ZdsYzsWBWaU+rkFWtFzQbiNNnWciNbT/qD4+Hitq/FdE/3mWzmvQU+W4hZZPenQuRHRNfylcvfVjpUqz0Tj6dNE1/fm4euufTx1z5am3/hr6z6lj9A9ElneKwPJ3IYEVEpqKys0YFeUhoDBP4TV/+bjVIkfqKuu8/ixC/+tqR73111V4DYnrrb+G8a+h1tkk9dY/m7MxV7XUzwdP3ApBgCYG6Co+L6/+kcB4X0g0ERFFzwXjojBc5q8ZhqOKtWEoROmLEwSWBIHowVySyqSS5kIABEYhisRFEov8SgRWGD6K9OMgq8IwBIkTBBYXASGsxcW3pUoHgfF5iIiLPv9x+03kuLxMqaqsUj1KJL4gsFgICGEtFrJtUG6OwDhtJHHhqLOl+dBAG0AnXRAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBIGVhMD/D0fV/fpMMM+gAAAAAElFTkSuQmCC"
            }
        }
    },
    "4ba3": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            checkbox: {
                name: "",
                shape: "",
                size: "",
                checkbox: !1,
                disabled: "",
                activeColor: "",
                inactiveColor: "",
                iconSize: "",
                iconColor: "",
                label: "",
                labelSize: "",
                labelColor: "",
                labelDisabled: ""
            }
        }
    },
    "4da6": function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("5de6")),
            o = n(t("fcf3"));
        t("64aa"), t("5c47"), t("0506"), t("e966"), t("bf0f"), t("a1c1"), t("c223"), t("18f7"), t("d0af"), t("de6c"), t("23f4"), t("7d2f"), t("9c4e"), t("ab80"), t("c1a3"), t("08eb"), t("f3f7"), t("fd3c"), t("926e"), t("0829"), t("f7a5"), t("4100"), t("795c"), t("7a76"), t("c9b5"), t("0c26"), t("4626"), t("5ac7"), t("5ef2"), t("aa9c"), t("2797");
        var r = n(t("0768c")),
            s = t("a15e");

        function d(e) {
            var a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new WeakMap;
            if (null === e || "object" !== (0, o.default)(e)) return e;
            if (t.has(e)) return t.get(e);
            if (e instanceof Date) a = new Date(e.getTime());
            else if (e instanceof RegExp) a = new RegExp(e);
            else if (e instanceof Map) a = new Map(Array.from(e, (function(e) {
                var a = (0, i.default)(e, 2),
                    n = a[0],
                    o = a[1];
                return [n, d(o, t)]
            })));
            else if (e instanceof Set) a = new Set(Array.from(e, (function(e) {
                return d(e, t)
            })));
            else if (Array.isArray(e)) a = e.map((function(e) {
                return d(e, t)
            }));
            else if ("[object Object]" === Object.prototype.toString.call(e)) {
                a = Object.create(Object.getPrototypeOf(e)), t.set(e, a);
                for (var n = 0, r = Object.entries(e); n < r.length; n++) {
                    var s = (0, i.default)(r[n], 2),
                        l = s[0],
                        c = s[1];
                    a[l] = d(c, t)
                }
            } else a = Object.assign({}, e);
            return t.set(e, a), a
        }

        function l() {
            var e, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-mm-dd";
            e = a ? /^\d{10}$/.test(null === a || void 0 === a ? void 0 : a.toString().trim()) ? new Date(1e3 * a) : "string" === typeof a && /^\d+$/.test(a.trim()) ? new Date(Number(a)) : "string" === typeof a && a.includes("-") && !a.includes("T") ? new Date(a.replace(/-/g, "/")) : new Date(a) : new Date;
            var n = {
                y: e.getFullYear().toString(),
                m: (e.getMonth() + 1).toString().padStart(2, "0"),
                d: e.getDate().toString().padStart(2, "0"),
                h: e.getHours().toString().padStart(2, "0"),
                M: e.getMinutes().toString().padStart(2, "0"),
                s: e.getSeconds().toString().padStart(2, "0")
            };
            for (var o in n) {
                var r = new RegExp("".concat(o, "+")).exec(t) || [],
                    s = (0, i.default)(r, 1),
                    d = s[0];
                if (d) {
                    var l = "y" === o && 2 === d.length ? 2 : 0;
                    t = t.replace(d, n[o].slice(l))
                }
            }
            return t
        }

        function c(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "both";
            return e = String(e), "both" == a ? e.replace(/^\s+|\s+$/g, "") : "left" == a ? e.replace(/^\s*/, "") : "right" == a ? e.replace(/(\s*$)/g, "") : "all" == a ? e.replace(/\s+/g, "") : e
        }
        String.prototype.padStart || (String.prototype.padStart = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
            if ("[object String]" !== Object.prototype.toString.call(a)) throw new TypeError("fillString must be String");
            var t = this;
            if (t.length >= e) return String(t);
            var n = e - t.length,
                i = Math.ceil(n / a.length);
            while (i >>= 1) a += a, 1 === i && (a += a);
            return a.slice(0, n) + t
        });
        var u = {
            range: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return Math.max(e, Math.min(a, Number(t)))
            },
            getPx: function(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return r.default.number(e) ? a ? "".concat(e, "px") : Number(e) : /(rpx|upx)$/.test(e) ? a ? "".concat(uni.upx2px(parseInt(e)), "px") : Number(uni.upx2px(parseInt(e))) : a ? "".concat(parseInt(e), "px") : parseInt(e)
            },
            sleep: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
                return new Promise((function(a) {
                    setTimeout((function() {
                        a()
                    }), e)
                }))
            },
            os: function() {
                return uni.getSystemInfoSync().platform.toLowerCase()
            },
            sys: function() {
                return uni.getSystemInfoSync()
            },
            random: function(e, a) {
                if (e >= 0 && a > 0 && a >= e) {
                    var t = a - e + 1;
                    return Math.floor(Math.random() * t + e)
                }
                return 0
            },
            guid: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
                    a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                    i = [];
                if (t = t || n.length, e)
                    for (var o = 0; o < e; o++) i[o] = n[0 | Math.random() * t];
                else {
                    var r;
                    i[8] = i[13] = i[18] = i[23] = "-", i[14] = "4";
                    for (var s = 0; s < 36; s++) i[s] || (r = 0 | 16 * Math.random(), i[s] = n[19 == s ? 3 & r | 8 : r])
                }
                return a ? (i.shift(), "u".concat(i.join(""))) : i.join("")
            },
            $parent: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                    a = this.$parent;
                while (a) {
                    if (!a.$options || a.$options.name === e) return a;
                    a = a.$parent
                }
                return !1
            },
            addStyle: function(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "object";
                if (r.default.empty(e) || "object" === (0, o.default)(e) && "object" === a || "string" === a && "string" === typeof e) return e;
                if ("object" === a) {
                    e = c(e);
                    for (var t = e.split(";"), n = {}, i = 0; i < t.length; i++)
                        if (t[i]) {
                            var s = t[i].split(":");
                            n[c(s[0])] = c(s[1])
                        }
                    return n
                }
                var d = "";
                for (var l in e) {
                    var u = l.replace(/([A-Z])/g, "-$1").toLowerCase();
                    d += "".concat(u, ":").concat(e[l], ";")
                }
                return c(d)
            },
            addUnit: function() {
                var e, a, t, n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto",
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (e = null === (a = uni) || void 0 === a || null === (t = a.$u) || void 0 === t || null === (n = t.config) || void 0 === n ? void 0 : n.unit) && void 0 !== e ? e : "px";
                return i = String(i), r.default.number(i) ? "".concat(i).concat(o) : i
            },
            deepClone: d,
            deepMerge: function e() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (a = d(a), "object" !== (0, o.default)(a) || null === a || "object" !== (0, o.default)(t) || null === t) return a;
                var n = Array.isArray(a) ? a.slice() : Object.assign({}, a);
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        var r = t[i],
                            s = n[i];
                        r instanceof Date ? n[i] = new Date(r) : r instanceof RegExp ? n[i] = new RegExp(r) : r instanceof Map ? n[i] = new Map(r) : r instanceof Set ? n[i] = new Set(r) : "object" === (0, o.default)(r) && null !== r ? n[i] = e(s, r) : n[i] = r
                    }
                return n
            },
            error: function(e) {
                0
            },
            randomArray: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.sort((function() {
                    return Math.random() - .5
                }))
            },
            timeFormat: l,
            timeFrom: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-mm-dd";
                null == e && (e = Number(new Date)), e = parseInt(e), 10 == e.toString().length && (e *= 1e3);
                var t = (new Date).getTime() - e;
                t = parseInt(t / 1e3);
                var n = "";
                switch (!0) {
                    case t < 300:
                        n = "刚刚";
                        break;
                    case t >= 300 && t < 3600:
                        n = "".concat(parseInt(t / 60), "分钟前");
                        break;
                    case t >= 3600 && t < 86400:
                        n = "".concat(parseInt(t / 3600), "小时前");
                        break;
                    case t >= 86400 && t < 2592e3:
                        n = "".concat(parseInt(t / 86400), "天前");
                        break;
                    default:
                        n = !1 === a ? t >= 2592e3 && t < 31536e3 ? "".concat(parseInt(t / 2592e3), "个月前") : "".concat(parseInt(t / 31536e3), "年前") : l(e, a)
                }
                return n
            },
            trim: c,
            queryParams: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "brackets",
                    n = a ? "?" : "",
                    i = []; - 1 == ["indices", "brackets", "repeat", "comma"].indexOf(t) && (t = "brackets");
                var o = function(a) {
                    var n = e[a];
                    if (["", void 0, null].indexOf(n) >= 0) return "continue";
                    if (n.constructor === Array) switch (t) {
                        case "indices":
                            for (var o = 0; o < n.length; o++) i.push("".concat(a, "[").concat(o, "]=").concat(n[o]));
                            break;
                        case "brackets":
                            n.forEach((function(e) {
                                i.push("".concat(a, "[]=").concat(e))
                            }));
                            break;
                        case "repeat":
                            n.forEach((function(e) {
                                i.push("".concat(a, "=").concat(e))
                            }));
                            break;
                        case "comma":
                            var r = "";
                            n.forEach((function(e) {
                                r += (r ? "," : "") + e
                            })), i.push("".concat(a, "=").concat(r));
                            break;
                        default:
                            n.forEach((function(e) {
                                i.push("".concat(a, "[]=").concat(e))
                            }))
                    } else i.push("".concat(a, "=").concat(n))
                };
                for (var r in e) o(r);
                return i.length ? n + i.join("&") : ""
            },
            toast: function(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3;
                uni.showToast({
                    title: String(e),
                    icon: "none",
                    duration: a
                })
            },
            type2icon: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "success",
                    a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; - 1 == ["primary", "info", "error", "warning", "success"].indexOf(e) && (e = "success");
                var t = "";
                switch (e) {
                    case "primary":
                        t = "info-circle";
                        break;
                    case "info":
                        t = "info-circle";
                        break;
                    case "error":
                        t = "close-circle";
                        break;
                    case "warning":
                        t = "error-circle";
                        break;
                    case "success":
                        t = "checkmark-circle";
                        break;
                    default:
                        t = "checkmark-circle"
                }
                return a && (t += "-fill"), t
            },
            priceFormat: function(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".",
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ",";
                e = "".concat(e).replace(/[^0-9+-Ee.]/g, "");
                var i = isFinite(+e) ? +e : 0,
                    o = isFinite(+a) ? Math.abs(a) : 0,
                    r = "undefined" === typeof n ? "," : n,
                    d = "undefined" === typeof t ? "." : t,
                    l = "";
                l = (o ? (0, s.round)(i, o) + "" : "".concat(Math.round(i))).split(".");
                var c = /(-?\d+)(\d{3})/;
                while (c.test(l[0])) l[0] = l[0].replace(c, "$1".concat(r, "$2"));
                return (l[1] || "").length < o && (l[1] = l[1] || "", l[1] += new Array(o - l[1].length + 1).join("0")), l.join(d)
            },
            getDuration: function(e) {
                var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    t = parseInt(e);
                return a ? /s$/.test(e) ? e : "".concat(e, e > 30 ? "ms" : "s") : /ms$/.test(e) ? t : /s$/.test(e) ? t > 30 ? t : 1e3 * t : t
            },
            padZero: function(e) {
                return "00".concat(e).slice(-2)
            },
            formValidate: function(e, a) {
                var t = uni.$u.$parent.call(e, "u-form-item"),
                    n = uni.$u.$parent.call(e, "u-form");
                t && n && n.validateField(t.prop, (function() {}), a)
            },
            getProperty: function(e, a) {
                if (e) {
                    if ("string" !== typeof a || "" === a) return "";
                    if (-1 !== a.indexOf(".")) {
                        for (var t = a.split("."), n = e[t[0]] || {}, i = 1; i < t.length; i++) n && (n = n[t[i]]);
                        return n
                    }
                    return e[a]
                }
            },
            setProperty: function(e, a, t) {
                if (e) {
                    if ("string" !== typeof a || "" === a);
                    else if (-1 !== a.indexOf(".")) {
                        var n = a.split(".");
                        (function e(a, t, n) {
                            if (1 !== t.length)
                                while (t.length > 1) {
                                    var i = t[0];
                                    a[i] && "object" === (0, o.default)(a[i]) || (a[i] = {});
                                    t.shift();
                                    e(a[i], t, n)
                                } else a[t[0]] = n
                        })(e, n, t)
                    } else e[a] = t
                }
            },
            page: function() {
                var e, a, t = getCurrentPages();
                return "/".concat(null !== (e = null === (a = t[t.length - 1]) || void 0 === a ? void 0 : a.route) && void 0 !== e ? e : "")
            },
            pages: function() {
                var e = getCurrentPages();
                return e
            },
            getHistoryPage: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    a = getCurrentPages(),
                    t = a.length;
                return a[t - 1 + e]
            },
            setConfig: function(e) {
                var a = e.props,
                    t = void 0 === a ? {} : a,
                    n = e.config,
                    i = void 0 === n ? {} : n,
                    o = e.color,
                    r = void 0 === o ? {} : o,
                    s = e.zIndex,
                    d = void 0 === s ? {} : s,
                    l = uni.$u.deepMerge;
                uni.$u.config = l(uni.$u.config, i), uni.$u.props = l(uni.$u.props, t), uni.$u.color = l(uni.$u.color, r), uni.$u.zIndex = l(uni.$u.zIndex, d)
            }
        };
        a.default = u
    },
    "4f38": function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"Inicio","index.trade":"Comercio","index.my":"Mi","userAuth.email":"Correo electrónico","userAuth.password":"Contraseña","userAuth.forgetPassword":"¿Olvidaste tu contraseña?","userAuth.forget":"Olvidar","userAuth.reset":"Restablecer","userAuth.changePassword":"Cambiar contraseña","userAuth.newPassword":"Nueva contraseña","userAuth.confirmPassword":"Confirmar contraseña","userAuth.loginTitle":"Iniciar sesión en tu cuenta","userAuth.signin":"Iniciar sesión","userAuth.signup":"Registrarse","userAuth.noAccount":"¿No tienes una cuenta?","userAuth.haveAccount":"¿Ya tienes una cuenta?","userAuth.fundPassword":"Contraseña de fondos","userAuth.verificationCode":"Código de verificación","userAuth.referralCode":"Código de referencia","userAuth.send":"Enviar","userAuth.resend":"Reenviar","userAuth.exipires":"expira en <span class=\'time uni-text-color\'>10</span> minutos.","userAuth.logging":"iniciando sesión","message.email":"Por favor ingresa tu correo electrónico","message.password":"Por favor ingresa tu contraseña","message.newPassword":"Por favor ingresa tu nueva contraseña","message.fundPassword":"Por favor ingresa tu contraseña de fondos","message.confirmPassword":"Por favor confirma tu contraseña","message.confirmPasswordError":"Error de confirmación de contraseña","message.imgCode":"Por favor ingresa el código de verificación de imagen","message.verificationCode":"Por favor ingresa el código de verificación","message.bnbAddress":"Por favor ingresa tu dirección de billetera BNB","message.trxAddress":"Por favor ingresa tu dirección de billetera TRX","message.logout":"¿Estás seguro de que quieres salir?","message.qty":"Por favor ingresa la cantidad","message.mocNum":"Por favor ingresa la cantidad de tokens de MTC","message.buySuccess":"¡Felicitaciones, compra exitosa!","message.success":"Éxito","message.copySuccess":"Copiado exitosamente","message.amount":"Por favor ingrese la cantidad","todayearn":"Ganancia de hoy","totalwarn":"Ganancia total","mymoc":"Mi MTC","myteam":"Mi equipo","people":"Personas","tips":"Consejos","tip":"Consejo","all":"Todo","amount":"Cantidad","record":"Registro","address":"Dirección","exchange":"Intercambio","qty":"Cantidad","buy":"Comprar","buyNow":"Comprar ahora","balance":"Saldo","account":"Cuenta","accountBalance":"Saldo de cuenta","digitalToken":"Token digital","convert":"Convertir","confirm":"Confirmar","error":"Error","ok":"Aceptar","home.mocmarket":"Tendencias del mercado MTC","home.market":"Tendencias principales","home.tip":"Opera criptomonedas con una mentalidad racional, gestiona riesgos diversificando inversiones, realiza una investigación exhaustiva antes de comprar, considera la retención a largo plazo, opera con cautela en plataformas seguras y mantente actualizado con las tendencias del mercado para tomar decisiones informadas.","trade.solo1":"Lograr baja","trade.solo2":"rentabilidad a través de","trade.solo3":"staking de NFT.","trade.lowRisk":"Bajo riesgo","trade.shortTerm":"Corto plazo","trade.highStable":"Altos rendimientos estables","trade.dailyYield":"Rendimiento diario","trade.investPeriod":"Período de inversión","trade.buy":"Comprar","trade.autoReinvestment":"Reinversión automática","trade.autoReinvestmentTip":"Reinversión automática: Te ayuda a reciclar rápidamente fondos para obtener más beneficios","language.title":"Idioma","my.order":"Mi minería de staking","my.team":"Mi equipo","my.invite":"Invitar amigo","my.security":"Configuración de seguridad","my.download":"Descargar aplicación","my.about":"Acerca de nosotros","my.appVersion":"Versión de la aplicación","my.logout":"Cerrar sesión","customer.service":"Servicio al cliente","customer.group":"Grupo","customer.person":"Persona","customer.tip":"No se puede abrir la aplicación {appName}. Asegúrese de que {appName} esté instalada.","wallet.title":"Mi billetera","wallet.nftRelease":"Liberación de NFT","wallet.nftReleaseTip":"¿Estás seguro de liberar los NFT?","wallet.releaseSuccess":"Liberación exitosa","wallet.mocRelease":"Liberación de MTC","wallet.history":"Historial de transacciones","wallet.all":"Todo","fundType":"Tipos de transacciones","recharge":"Recargar","rechargeProfit":"Reembolso de depósito","withdraw":"Retirar","commission":"Ganancias por comisión","gift":"Regalos de la plataforma","inviteProfit":"Reembolso por referencia","staking":"Staking","stakingProfit":"Ganancias de staking","unstaking":"Intercambio de NFT","purchaseMtc":"Comprar tokens de MTC","moc2Usdt":"MTC a USDT","usdt2Mtc":"USDT a MTC","recharge.tip":"Por favor, recarga USDT usando la red {walletType}. Después de enviar, espera pacientemente y verifica si la transacción llega en 1-2 minutos.","withdraw.address":"Dirección de retiro de billetera {withdrawalType}","withdraw.tip":"Cantidad mínima de retiro: <span class=\'uni-text-color\'>{min} USDT</span>, con una tarifa del <span class=\'uni-text-color\'>{fee}%</span> por transacción.","withdraw.amount":"Cantidad de USDT","withdraw.submit":"Retirar","security.login":"Inicio de sesión","security.fund":"Fondo","security.setting":"Configuración","security.tip":"Se enviará un código de verificación a tu correo electrónico <span class=\'uni-text-color\'>{account}</span>","invite.title":"【 Escanea y registra 】","invite.code":"Código de invitación","invite.copyCode":"Copiar código","invite.copyLink":"Copiar enlace","invite.tip":"Invita a tus amigos a realizar su primer depósito, la plataforma te dará <span>{inviteProfit}%</span> del monto del depósito y <span>{levelProfit}%</span> de sus ganancias futuras.","download.title":"【 Escanea y descarga 】","download.android":"Aplicación Android","team.totalCommissions":"Comisión total","team.todayCommissions":"Comisión de hoy","team.performance":"Rendimiento del Equipo","team.nft":"Staking en equipo","team.member":"Miembros del equipo","team.staking":"NFTs Completados por el Equipo","team.product":"Número de minería del equipo","team.referralCode":"Código de referencia","team.detail":"Ver detalles","team.myEarnings":"Mis ganancias","order.count":"Total de NFT","order.stakedNft":"Monto en staking","order.unStakedNft":"Monto de staking finalizado","order.expectedEarnings":"Ganancias esperadas","order.releasedEarnings":"Ganancias liberadas","order.expected":"Esperado","order.investPeriod":"Período de inversión","order.mining":"Minería","order.completed":"Completado","order.earnings":"Ganancias","order.autoReinvestment":"Reinversión automática","moc.center":"Centro MTC","moc.myMtc":"Mi MTC","moc.num":"Número de tokens de MTC","moc.currentPrice":"Precio actual de MTC","moc.discountPrice":"Precio Descontado Mtc","moc.price":"Precio","moc.available":"Disponible","moc.rule":"Regla","moc.rule1":"Por cada NFT apostado, recibirás tokens de MTC equivalentes al {productPercent}% de las ganancias.","moc.rule2":"Para obtener intereses en las tokens de MTC, primero debes apostarlas. Después de apostarlas, no se pueden intercambiar hasta que las desapes.","moc.rule3":"Las tokens de MTC se pueden intercambiar por USDT según el valor de mercado en tiempo real de las tokens de MTC.","moc.staking":"staking","moc.unstaking":"unStaking","moc.stakingProfit":"Ganancias de staking MTC","moc.activity":"{percent}% de descuento en MTC","moc.activity.holdings":"Tenencias","moc.activity.buy":"Comprar MTC","moc.activity.ended":"El evento MTC ha finalizado","moc.activity.subscription":"Confirmación de suscripción en progreso, por favor espera pacientemente.","moc.activity.progress":"Confirmación de suscripción en progreso, por favor espera pacientemente.","moc.activity.rule1":"Período de promoción: {start} - {end}","moc.activity.rule2":"Todos los MTC en este evento están disponibles para suscripción con un {percent}% de descuento.","moc.activity.rule3":"Se necesita la cantidad de NFTs apostados para suscribir tokens moc de valor equivalente en USDT.","moc.activity.rule4":"La cantidad de tokens de MTC es limitada, por orden de llegada; el evento finalizará una vez completada la suscripción.","moc.activity.noHoldings":"Sin tenencias","notice.title":"Mis Notificaciones","trans.notCredited":"¿No acreditado?","trans.hash":"Hash de transacción de {walletType}","trans.hashSuccess":"Consulta de transacción de {walletType} exitosa","trans.hashError":"Por favor, ingrese el hash de la transacción de {walletType}","message.amountMinimum":"Monto mínimo de retiro: {min} USDT","message.loging":"Iniciando sesión","message.withdrawSucces":"Solicitud de retiro enviada con éxito.","withdrawFee":"Retiro rechazado","message.cancelContinuity":"¿Está seguro de que desea cancelar la continuidad?","withdrawTime":"El horario de retiro es de {start} a {end} diariamente (UTC).","Token create error":"Error al crear el token","Sending too frequently, please try again later":"Envío demasiado frecuente, por favor intente nuevamente más tarde","Sys error, not email can send":"Error del sistema, no se puede enviar el correo electrónico","Sys error, email send error":"Error del sistema, error al enviar el correo electrónico","Error request":"Error en la solicitud","You can\'t login":"No puedes iniciar sesión","Please input the email":"Por favor ingrese el correo electrónico","Unsupported email suffix":"Sufijo de correo electrónico no soportado","Email is exist":"El correo electrónico ya existe","Email is not exist":"El correo electrónico no existe","Not the correct email address":"No es la dirección de correo electrónico correcta","Payment password must be greater than or equal to 6 digits":"La contraseña de pago debe tener al menos 6 dígitos","Password must be greater than or equal to 6 digits":"La contraseña debe tener al menos 6 dígitos","Please input the password":"Por favor ingrese la contraseña","Please input the Payment password":"Por favor ingrese la contraseña de pago","The original password is incorrect":"La contraseña original es incorrecta","Please input the verification code":"Por favor ingrese el código de verificación","The verification code is incorrect or has expired. Please obtain it again":"El código de verificación es incorrecto o ha caducado. Por favor obténgalo nuevamente","The verification code is incorrect":"El código de verificación es incorrecto","Account or password error":"Error de cuenta o contraseña","Payment password error":"Error de contraseña de pago","Please input start time":"Por favor ingrese la hora de inicio","Please input end time":"Por favor ingrese la hora de finalización","Please verify account":"Por favor verifique la cuenta","Product not exist":"El producto no existe","Product Suspend sales":"Venta del producto suspendida","Insufficient balance":"Saldo insuficiente","Balance too little":"Saldo demasiado bajo","Product income":"Ingreso del producto","Buy product":"Comprar producto","Buy platform coin":"Comprar tokens de MTC","recharge back":"Reembolso de recarga","error add":"Error al agregar","coin exchange amount":"Cantidad de intercambio de tokens de MTC","coin interest":"Intereses de tokens de MTC","coin is staking please cancel staking":"La tokens de MTC está en staking, por favor cancele el staking","Platform change":"Cambio de plataforma","withdraw refuse":"Rechazar retiro","Not meeting the minimum withdrawal amount":"No cumple con el monto mínimo de retiro","Not yet due for withdrawal time":"Aún no es el momento de retiro","Please verify email":"Por favor verifique el correo electrónico","Activity amount must greater in progress product total amount":"La cantidad de actividad debe ser mayor que la cantidad total actual apostada","Insufficient quantity":" Los tokens de MTC están agotados","Activity not exist":"La actividad de descuento no existe","Buy activity":"Comprar tokens de MTC con descuento","Not Start":"La actividad de descuento no ha comenzado","Is over":"La actividad de descuento ha finalizado","Create address error":"Error al crear la dirección","Not a correct address":"No es una dirección correcta","Processed":"Procesado","Out wallet password is empty":"La contraseña de la billetera externa está vacía","Trans error please check wallet":"Error de transacción, por favor revise la billetera","Please input trans hash":"Por favor ingrese el hash de la transacción","Please input coin type":"Por favor seleccione el tipo de red","Not Find Trans":"Transacción no encontrada","Transaction processed":"Transacción procesada","Transaction does not belong to you":"La transacción no le pertenece","Transaction does not USDT":"La transacción no es en USDT","Channel":"Canal","Consultation":"Consulta","Consult":"Consultar","Group":"Grupo","nonWithdrawAmount":"Cantidad no retirable","checkIn":"Registro","checkInTip":"¡Registro de hoy exitoso!","Today Has Sign In":"Ya registrado hoy","todayChecked":"Ya registrado hoy","registerGift":"Regalo de registro","dailyCheckIn":"Registro diario","withdraw.addressSetting":"Configurar dirección {withdrawalType}","trade.open":"Abierto","trade.noOpen":"Cerrado","trade.noOpen.message":"Producto no abierto","NFT Staking Mining":"Minería de NFT en staking","days":"Días","hours":"Horas","minutes":"Minutos","index.wallet":"Billetera","index.mtcCenter":"Centro MTC","index.myNft":"Mi NFT","mata.title":"Introducción a ATANFT","mata.intro1":"El minado de ATANFT se basa en el ecosistema privado de Manta Network y está diseñado como un sistema de incentivos con tokens, centrado en la \'propiedad de NFT privados y la contribución al ecosistema\'. El objetivo principal es guiar a los usuarios para que participen en la circulación, aplicación y construcción del ecosistema ATANFT a través del minado, aumentando así la actividad del sistema de activos privados de Manta. Los participantes obtienen tokens MTC o recompensas exclusivas en NFT privados mediante staking e interacciones.","mata.intro2":"El modelo de minado se centra en \'Privacidad + Interacción del Ecosistema\' y se divide en dos tipos principales:","mata.intro3":"<text class=\'bold\'>Minado por Staking</text>: Los usuarios depositan sus ATANFT (incluyendo colecciones digitales comunes, credenciales SBT, etc.) en un contrato inteligente designado. Las ganancias se calculan según la rareza del ATANFT (como edición génesis o limitada), el tiempo de tenencia y el historial de interacciones privadas. Por ejemplo, hacer staking de un \'ATANFT de identidad privada\' genera un rendimiento anual básico. Si se activa la función de \'transacciones de prueba de conocimiento cero\' (como transferencias privadas a través de MantaPay), el coeficiente de recompensa aumenta entre un 10% y un 20%. Las ganancias se distribuyen diariamente en tokens MTC.","mata.intro4":"<text class=\'bold\'>Minado por Interacción con el Ecosistema</text>: Motiva a los usuarios a usar ATANFT en el ecosistema Manta para completar tareas específicas, como integrar ATANFT en juegos blockchain (como personajes u objetos), usar ATANFT como colateral LP en módulos DeFi como MantaSwap, o invitar a nuevos usuarios a acuñar su primer ATANFT. Cada tarea otorga puntos que, al alcanzar un umbral, pueden canjearse por un \'ATANFT conmemorativo de minado\' con mayor rendimiento o directamente por tokens MTC. Las tareas de alta dificultad (como transferencias de NFT privados entre cadenas) desbloquean derechos exclusivos y limitados.","token.rule1":"Los usuarios deben depositar los ATANFT comprados en un contrato inteligente designado. Las ganancias se calculan según la rareza del ATANFT. Las recompensas de minado se liquidan en tokens MTC y se acreditan automáticamente a la cuenta del usuario cada dos horas.","token.rule2":"Los tokens MTC pueden intercambiarse por USDT al precio de mercado.","trade.pay":"Monto de pago","trade.pay.tip":"Cada ATANFT cuesta {amount} USDT. La compra debe ser en múltiplos enteros de {amount} USDT (por ejemplo, {amount1} USDT, {amount2} USDT).","trade.intro":"Crazy Monkey NFT, con su diseño único y edición limitada, es un activo potencialmente valioso en cada colección.","investPeriod":"Período de staking","order.cumulativeIncome":"Ingresos acumulados","order.amount":"Monto","order.num":"Cantidad","agencyRebate":"Reembolso de agencia","order.doing":"En curso","order.history":"Historial","registerTime":"Hora de registro","stakingBackProfit":"Reembolso por referencia","exchange.fee":"Tarifa","trade.sale":"En venta","trade.sold":"Agotado","trade.sold.message":"Agotado hoy","order.staked":"Staqueado durante {day} días","order.completed.time":"Hora de finalización","order.completed.time1":"Hora de vencimiento: {time}","team.totalRecharge":"Recarga total","trade.numWarning":"Cantidad de NFT insuficiente","Insufficient NFT quantity":"Cantidad de NFT insuficiente","token.buy":"Comprar","token.sell":"Vender","token.noOpen":"Aún no abierto","token.transaction":"Transacción","wallet.withdraw.tip":"Retiro mínimo: <span class=\'uni-text-color\'>{min} USDT</span>, se cobra una tarifa del <span class=\'uni-text-color\'>{fee}%</span> por transacción.","wallet.withdraw.tipTwo":"Tiempo de llegada: el retiro se acreditará en su billetera dentro de las <span class=\'uni-text-color\'>{time}</span> horas.","wallet.withdraw.tipOne":"Hora de retiro: de <span class=\'uni-text-color\'>{start}</span> a <span class=\'uni-text-color\'>{end}</span> (hora del sistema).","star.user":"Jugador estrella"}')
    },
    "4fcf": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            tabs: {
                duration: 300,
                list: function() {
                    return []
                },
                lineColor: "#3c9cff",
                activeStyle: function() {
                    return {
                        color: "#303133"
                    }
                },
                inactiveStyle: function() {
                    return {
                        color: "#606266"
                    }
                },
                lineWidth: 20,
                lineHeight: 3,
                lineBgSize: "cover",
                itemStyle: function() {
                    return {
                        height: "44px"
                    }
                },
                scrollable: !0,
                current: 0,
                keyName: "name"
            }
        }
    },
    "516f": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            tabbar: {
                value: null,
                safeAreaInsetBottom: !0,
                border: !0,
                zIndex: 1,
                activeColor: "#1989fa",
                inactiveColor: "#7d7e80",
                fixed: !0,
                placeholder: !0
            }
        }
    },
    "536a": function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"Home","index.trade":"trade","index.my":"my","userAuth.email":"Email","userAuth.password":"Password","userAuth.forgetPassword":"Forget Password?","userAuth.forget":"Forget","userAuth.reset":"Reset","userAuth.changePassword":"Change password","userAuth.newPassword":"New password","userAuth.confirmPassword":"Confirm password","userAuth.loginTitle":"Sign in to your account","userAuth.signin":"Sign in","userAuth.signup":"Sign up","userAuth.noAccount":"Don’t have an account?","userAuth.haveAccount":"Already have an account？","userAuth.fundPassword":"Fund password","userAuth.verificationCode":"Verification code","userAuth.referralCode":"Referral code","userAuth.send":"Send","userAuth.resend":"Resend","userAuth.exipires":"exipires in <span class=\'time uni-text-color\'>10</span> minus.","userAuth.logging":"logging in","message.email":"Please enter your email","message.password":"Please enter your password","message.newPassword":"Please enter your new password","message.fundPassword":"Please enter your fund password","message.confirmPassword":"Please enter confirm your password","message.confirmPasswordError":"Password confirmation error","message.imgCode":"Please enter image verification code","message.verificationCode":"Please enter verification code","message.bnbAddress":"Please enter your BNB wallet address","message.trxAddress":"Please enter your TRX wallet address","message.logout":"Are you sure want to exit?","message.qty":"Please enter qty ","message.mocNum":"Please enter the number of MTC tokens","message.buySuccess":"Congratulations, successful purchase！","message.success":"Successful","message.copySuccess":"Copy Successful","message.amount":"Please enter the amount","todayearn":"Today\'s Earn","totalwarn":"Total Earn","mymoc":"My Mtc","myteam":"My Team","people":"People","tips":"Tips","tip":"Tip","all":"All","amount":"Amount","record":"Record","address":"Address","exchange":"Exchange","qty":"QTY","buy":"Buy","buyNow":"Buy Now","balance":"Balance","account":"Account","accountBalance":"Account Balance","digitalToken":"Digital token","convert":"Convert","confirm":"Confirm","error":"Error","ok":"Ok","home.mocmarket":"MTC Market Trends","home.market":"Mainstream Trends","home.tip":"Trade cryptocurrencies with a rational mindset, manage risks by diversifying investments, conduct thorough research before buying, consider long-term holding, trade cautiously with secure platforms, and stay updated with market trends for informed decisions.","trade.solo1":"Achieving low-risk","trade.solo2":"profits through","trade.solo3":"NFT staking.","trade.lowRisk":"Low Risk","trade.shortTerm":"Short Term","trade.highStable":"High Stable Returns","trade.dailyYield":"Daily Yield","trade.investPeriod":"Invest Period","trade.buy":"Buy","trade.autoReinvestment":"Auto Reinvestment","trade.autoReinvestmentTip":"Auto Reinvestment: It helps you quickly recycle funds tohelp you earn more profit","language.title":"Language","my.order":"My Staking Mining","my.team":"My Team","my.invite":"Invite Friend","my.security":"Security Setting","my.download":"Download APP","my.about":"About Us","my.appVersion":"App Version","my.logout":"Log Out","customer.service":"Customer service","customer.group":"Group","customer.person":"Person","customer.tip":"Unable to open the {appName} app. Please ensure that the {appName} is installed.","wallet.title":"My Wallet","wallet.nftRelease":"NFT Release","wallet.nftReleaseTip":"Are you sure releasing the NFTs?","wallet.releaseSuccess":"Release Successful","wallet.mocRelease":"MTC Release","wallet.history":"Transaction History","wallet.all":"All","fundType":"Types of Transactions","recharge":"Recharge","rechargeProfit":"Deposit Rebate","withdraw":"Withdrawal","commission":"Commission earnings","gift":"Platform gifts","inviteProfit":"Referral rebate","staking":"Staking","stakingProfit":"Staking earnings","unstaking":"NFT Exchange","purchaseMtc":"Purchase MTC tokens","moc2Usdt":"MTC to USDT","usdt2Mtc":"USDT to MTC","recharge.tip":"Please recharge USDT using the {walletType} network. After submission, kindly wait patiently and check whether the transaction has arrived within 1-2 minutes.","withdraw.address":"{withdrawalType} wallet withdrawal address","withdraw.tip":"Minimum withdrawal amount: <span class=\'uni-text-color\'>{min} USDT</span>, with a <span class=\'uni-text-color\'>{fee}%</span> fee per transaction.","withdraw.amount":"USDT Amount","withdraw.submit":"Withdraw","security.login":"Login","security.fund":"Fund","security.setting":"Setting","security.tip":"Verification code will be sent to your email <span class=\'uni-text-color\'>{account}</span>","invite.title":"【 Scan and Register】","invite.code":"Invite code","invite.copyCode":"Copy Code","invite.copyLink":"Copy Link","invite.tip":"Invite friends to make their first deposit,platform will give you <span>{inviteProfit}%</span> of the deposit amount and <span>{levelProfit}%</span> of their future earnings.","download.title":"【 Scan and Download 】","download.android":"Android APP","team.totalCommissions":"Total Commission","team.todayCommissions":"Today\'s Commission","team.performance":"Team Performance","team.nft":"Team Staking","team.member":"Team Members","team.staking":"NFTs Completed by the Team","team.product":"Team Mining Number","team.referralCode":"Referral Code","team.detail":"View Detail","team.myEarnings":"My Earnings","order.count":"Total NFT","order.stakedNft":"Staked Amount","order.unStakedNft":"Completed Staked Amount","order.expectedEarnings":"Expected Earnings","order.releasedEarnings":"Released Earnings","order.expected":"Expected","order.investPeriod":"Invest Period","order.mining":"Mining","order.completed":"Completed","order.earnings":"Earnings","order.autoReinvestment":"Auto Reinvestment","moc.center":"MTC Center","moc.myMtc":"My MTC","moc.num":"Number of MTC tokens","moc.currentPrice":"Mtc Price","moc.discountPrice":"Mtc Discounted Price","moc.price":"Price","moc.available":"vailable","moc.rule":"Rule","moc.rule1":"For each NFT staked, you will receive MTC tokens equivalent to {productPercent}% of the earnings.","moc.rule2":"To earn interest on Mtc tokens, please first stake them. After staking, they cannot be exchanged until you unstake them.","moc.rule3":"Mtc tokens can be exchanged for USDT based on the real-time market value of Mtc tokens.","moc.staking":"staking","moc.unstaking":"unStaking","moc.stakingProfit":"MTC Staking earnings","moc.activity":"{percent}% Off MTC","moc.activity.holdings":"Holdings","moc.activity.buy":"Buy MTC","moc.activity.ended":"MTC event has ended","moc.activity.subscription":"Subscription confirmation in progress, please wait patiently.","moc.activity.progress":"Subscription confirmation in progress, please wait patiently.","moc.activity.rule1":"Promotion Period: {start} - {end}","moc.activity.rule2":"All MTC tokens in this event are available for subscription at {percent}% off.","moc.activity.rule3":"How many staked NFTs are needed to subscribe to moc tokens of equivalent value in USDT","moc.activity.rule4":"The number of MTC tokens is limited, first come, first served; the event will end once the subscription is completed.","moc.activity.noHoldings":"No Holdings","notice.title":"My Notice","trans.notCredited":"Not credited？","trans.hash":"{walletType} Transaction Hash","trans.hashSuccess":"{walletType} transaction query successful","trans.hashError":"Please enter {walletType} transaction hash","message.amountMinimum":"Minimum withdrawal amount: {min} USDT","message.loging":"Loging","message.withdrawSucces":"Withdrawal request submitted successfully.","withdrawFee":"Withdrawal Refuse","message.cancelContinuity":"Are you sure want to cancel continuity?","withdrawTime":"Withdrawal hours are from {start} to {end} daily（UTC）.","Token create error":"Token create error","Sending too frequently, please try again later":"Sending too frequently, please try again later","Sys error, not email can send":"Sys error, not email can send","Sys error, email send error":"Sys error, email send error","Error request":"Error request","You can\'t login":"You can\'t login","Please input the email":"Please input the email","Unsupported email suffix":"Unsupported email suffix","Email is exist":"Email is exist","Email is not exist":"Email is not exist","Not the correct email address":"Not the correct email address","Payment password must be greater than or equal to 6 digits":"Payment password must be greater than or equal to 6 digits","Password must be greater than or equal to 6 digits":"Password must be greater than or equal to 6 digits","Please input the password":"Please input the password","Please input the Payment password":"Please input the Payment password","The original password is incorrect":"The original password is incorrect","Please input the verification code":"Please input the verification code","The verification code is incorrect or has expired. Please obtain it again":"The verification code is incorrect or has expired. Please obtain it again","The verification code is incorrect":"The verification code is incorrect","Account or password error":"Account or password error","Payment password error":"Payment password error","Please input start time":"Please input start time","Please input end time":"Please input end time","Please verify account":"Please verify account","Product not exist":"Product not exist","Product Suspend sales":"Product Suspend sales","Insufficient balance":"Insufficient balance","Balance too little":"Insufficient balance","Product income":"Product income","Buy product":"Staking NFT","Buy platform coin":"Buy MTC tokens","recharge back":"Recharge rebate","error add":"error add","coin exchange amount":"MTC tokens exchange amount","coin interest":"Mtc tokens interest","coin is staking please cancel staking":"MTC tokens is staking please cancel staking","Platform change":"Platform change","withdraw refuse":"withdraw refuse","Not meeting the minimum withdrawal amount":"Not meeting the minimum withdrawal amount","Not yet due for withdrawal time":"Not yet due for withdrawal time","Please verify email":"Please verify email","Activity amount must greater in progress product total amount":"The purchase amount must be greater than the current pledged amount held.","Insufficient quantity":"MTC tokens sold out","Activity not exist":"Discount activity does not exist","Buy activity":"Purchase discounted MTC tokens.","Not Start":"Discount activity not start","Is over":"Discount activity is over","Create address error":"Create address error","Not a correct address":"Not a correct address","Processed":"Processed","Out wallet password is empty":"Out wallet password is empty","Trans error please check wallet":"Trans error please check wallet","Please input trans hash":"Please input trans hash","Please input coin type":"Please select network type","Not Find Trans":"Not Find Trans","Transaction processed":"Transaction processed","Transaction does not belong to you":"Transaction does not belong to you","Transaction does not USDT":"Transaction does not USDT","Channel":"Channel","Consultation":"Consultation","Consult":"Consult","Group":"Group","nonWithdrawAmount":"Non-withdrawable amount","checkIn":"Check-in","checkInTip":"Today\'s check-in was successful!","Today Has Sign In":"Already checked in today","todayChecked":"Already checked in today","registerGift":"Registration Gift","dailyCheckIn":"Daily Check-in","withdraw.addressSetting":"Please set the {withdrawalType} withdrawal address","trade.open":"Open","trade.noOpen":"Closed","trade.noOpen.message":"Product not open","NFT Staking Mining":"NFT Staking Mining","days":"Days","hours":"Hours","minutes":"Mins","index.wallet":"Wallet","index.mtcCenter":"MTC Center","index.myNft":"My NFT","mata.title":"ATANFT Intro","mata.intro1":"ATANFT mining is based on the Manta Network privacy ecosystem, designed around \'privacy NFT ownership and ecosystem contribution\'. Its core goal is to encourage users to participate in ATANFT circulation, application, and ecosystem building through mining, while enhancing the activity of the Manta privacy asset system. Participants mainly earn MTC tokens or exclusive privacy NFTs through staking and interactions.","mata.intro2":"The mining model features \'privacy attributes + ecosystem interaction\' and is divided into two main types:","mata.intro3":"<text class=\'bold\'>Staking Mining</text>: Users stake their ATANFTs (including regular digital collectibles, SBT identity certificates, etc.) into designated smart contracts. Earnings are calculated based on ATANFT rarity (e.g., genesis, limited editions), holding duration, and privacy interaction records. For example, staking a \'privacy identity ATANFT\' grants a base annual return, and enabling \'zero-knowledge proof transactions\' (e.g., using MantaPay for private transfers) increases the reward coefficient by 10%-20%. Earnings are distributed daily in MTC tokens.","mata.intro4":"<text class=\'bold\'>Ecosystem Interaction Mining</text>: Encourages users to complete specific tasks in the Manta ecosystem using ATANFTs, such as integrating them into blockchain games as characters or items, using them as LP collateral in DeFi modules like MantaSwap, or inviting new users to mint their first ATANFT. Different tasks earn points, which can be exchanged for a \'commemorative mining ATANFT\' with higher staking returns or directly for MTC tokens. Completing high-difficulty tasks, such as cross-chain privacy NFT transfers, unlocks exclusive limited rewards.","token.rule1":"Users stake purchased ATANFTs into designated smart contracts. Earnings are calculated based on ATANFT rarity and automatically credited to the user\'s account every two hours.","token.rule2":"MTC tokens can be exchanged for USDT at market value.","trade.pay":"Payment Amount","trade.pay.tip":"Each ATANFT costs {amount} USDT. Purchase amount must be a multiple of {amount} USDT (e.g., {amount1} USDT, {amount2} USDT).","trade.intro":"Crazy Monkey NFT combines unique design and limited editions, making every collection a surprising and valuable digital asset.","investPeriod":"Staking Period","order.cumulativeIncome":"Cumulative Earnings","order.amount":"Amount","order.num":"Quantity","agencyRebate":"Agency Rebate","order.doing":"In Progress","order.history":"History","registerTime":"Registration Time","stakingBackProfit":"Referral Rebate","exchange.fee":"Fee","trade.sale":"On Sale","trade.sold":"Sold Out","trade.sold.message":"Sold Out Today","order.staked":"Staked for {day} days","order.completed.time":"Completion Time","order.completed.time1":"Maturity Time: {time}","team.totalRecharge":"Total Recharge","trade.numWarning":"Insufficient NFT quantity","Insufficient NFT quantity":"Insufficient NFT quantity","token.buy":"Buy","token.sell":"Sell","token.noOpen":"Not open yet","token.transaction":"Transaction","wallet.withdraw.tip":"Minimum withdrawal: <span class=\'uni-text-color\'>{min} USDT</span>, a fee of <span class=\'uni-text-color\'>{fee}%</span> is charged per transaction.","wallet.withdraw.tipTwo":"Arrival time: the withdrawal will be credited to your wallet within <span class=\'uni-text-color\'>{time}</span> hours.","wallet.withdraw.tipOne":"Withdrawal time: system time from <span class=\'uni-text-color\'>{start}</span> to <span class=\'uni-text-color\'>{end}</span>.","star.user":"Star Player"}')
    },
    "555a": function(e, a, t) {
        "use strict";
        t.r(a);
        var n = t("edb8"),
            i = t.n(n);
        for (var o in n)["default"].indexOf(o) < 0 && function(e) {
            t.d(a, e, (function() {
                return n[e]
            }))
        }(o);
        a["default"] = i.a
    },
    5565: function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"Startseite","index.trade":"Handel","index.my":"Mein","userAuth.email":"E-Mail","userAuth.password":"Passwort","userAuth.forgetPassword":"Passwort vergessen?","userAuth.forget":"Vergessen","userAuth.reset":"Zurücksetzen","userAuth.changePassword":"Passwort ändern","userAuth.newPassword":"Neues Passwort","userAuth.confirmPassword":"Passwort bestätigen","userAuth.loginTitle":"Melden Sie sich bei Ihrem Konto an","userAuth.signin":"Anmelden","userAuth.signup":"Registrieren","userAuth.noAccount":"Kein Konto?","userAuth.haveAccount":"Haben Sie schon ein Konto?","userAuth.fundPassword":"Fonds-Passwort","userAuth.verificationCode":"Bestätigungscode","userAuth.referralCode":"Empfehlungscode","userAuth.send":"Senden","userAuth.resend":"Erneut senden","userAuth.exipires":"läuft ab in <span class=\'time uni-text-color\'>10</span> Minuten.","userAuth.logging":"Einloggen","message.email":"Bitte geben Sie Ihre E-Mail ein","message.password":"Bitte geben Sie Ihr Passwort ein","message.newPassword":"Bitte geben Sie Ihr neues Passwort ein","message.fundPassword":"Bitte geben Sie Ihr Fonds-Passwort ein","message.confirmPassword":"Bitte bestätigen Sie Ihr Passwort","message.confirmPasswordError":"Fehler bei der Passwortbestätigung","message.imgCode":"Bitte geben Sie den Bildbestätigungscode ein","message.verificationCode":"Bitte geben Sie den Bestätigungscode ein","message.bnbAddress":"Bitte geben Sie Ihre BNB-Wallet-Adresse ein","message.trxAddress":"Bitte geben Sie Ihre TRX-Wallet-Adresse ein","message.logout":"Sind Sie sicher, dass Sie sich abmelden möchten?","message.qty":"Bitte geben Sie die Menge ein","message.mocNum":"Bitte geben Sie die Anzahl der MTC-Token ein","message.buySuccess":"Herzlichen Glückwunsch, erfolgreicher Kauf!","message.success":"Erfolgreich","message.copySuccess":"Kopieren erfolgreich","message.amount":"Bitte geben Sie den Betrag ein","todayearn":"Heutiger Verdienst","totalwarn":"Gesamtverdienst","mymoc":"Mein Mtc","myteam":"Mein Team","people":"Personen","tips":"Tipps","tip":"Tipp","all":"Alle","amount":"Betrag","record":"Aufzeichnen","address":"Adresse","exchange":"Austauschen","qty":"Menge","buy":"Kaufen","buyNow":"Jetzt kaufen","balance":"Saldo","account":"Konto","accountBalance":"Kontostand","digitalToken":"Digitales Token","convert":"Konvertieren","confirm":"Bestätigen","error":"Fehler","ok":"OK","home.mocmarket":"MTC-Markttrends","home.market":"Haupttrends","home.tip":"Handeln Sie Kryptowährungen mit einer rationalen Einstellung, verwalten Sie Risiken durch Diversifizierung der Investitionen, führen Sie gründliche Recherchen vor dem Kauf durch, denken Sie an langfristiges Halten, handeln Sie vorsichtig mit sicheren Plattformen und bleiben Sie über Markttrends informiert, um fundierte Entscheidungen zu treffen.","trade.solo1":"Erzielung von","trade.solo2":"risikoarmen","trade.solo3":"Gewinnen durch NFT-Staking.","trade.lowRisk":"Niedriges Risiko","trade.shortTerm":"Kurzfristig","trade.highStable":"Hohe stabile Renditen","trade.dailyYield":"Tägliche Rendite","trade.investPeriod":"Investitionsperiode","trade.buy":"Kaufen","trade.autoReinvestment":"Automatische Reinvestition","trade.autoReinvestmentTip":"Automatische Reinvestition: Es hilft Ihnen, schnell Gelder zu recyceln, um mehr Gewinn zu erzielen","language.title":"Sprache","my.order":"Mein Staking Mining","my.team":"Mein Team","my.invite":"Freund einladen","my.security":"Sicherheitseinstellung","my.download":"App herunterladen","my.about":"Über uns","my.appVersion":"App-Version","my.logout":"Abmelden","customer.service":"Kundendienst","customer.group":"Gruppe","customer.person":"Person","customer.tip":"Die {appName}-App kann nicht geöffnet werden. Bitte stellen Sie sicher, dass {appName} installiert ist.","wallet.title":"Meine Wallet","wallet.nftRelease":"NFT-Freigabe","wallet.nftReleaseTip":"Sind Sie sicher, dass Sie die NFTs freigeben möchten?","wallet.releaseSuccess":"Freigabe erfolgreich","wallet.mocRelease":"MTC-Freigabe","wallet.history":"Transaktionsverlauf","wallet.all":"Alle","fundType":"Transaktionstypen","recharge":"Aufladen","rechargeProfit":"Einzahlungsrabatt","withdraw":"Abheben","commission":"Provisionseinnahmen","gift":"Plattformgeschenke","inviteProfit":"Empfehlungsrabatt","staking":"Staking","stakingProfit":"Staking-Einnahmen","unstaking":"NFT-Tausch","purchaseMtc":"MTC-Token kaufen","moc2Usdt":"MTC zu USDT","usdt2Mtc":"USDT zu MTC","recharge.tip":"Bitte laden Sie USDT über das {walletType}-Netzwerk auf. Nach der Einreichung warten Sie bitte geduldig und überprüfen Sie, ob die Transaktion innerhalb von 1-2 Minuten eingegangen ist.","withdraw.address":"{withdrawalType}-Wallet-Abhebungsadresse","withdraw.tip":"Mindestabhebungsbetrag: <span class=\'uni-text-color\'>{min} USDT</span>, mit einer Gebühr von <span class=\'uni-text-color\'>{fee}%</span> pro Transaktion.","withdraw.amount":"USDT-Betrag","withdraw.submit":"Abheben","security.login":"Anmeldung","security.fund":"Fonds","security.setting":"Einstellung","security.tip":"Der Bestätigungscode wird an Ihre E-Mail <span class=\'uni-text-color\'>{account}</span> gesendet","invite.title":"【Scannen und registrieren】","invite.code":"Empfehlungscode","invite.copyCode":"Code kopieren","invite.copyLink":"Link kopieren","invite.tip":"Laden Sie Freunde ein, ihre erste Einzahlung zu tätigen, die Plattform gibt Ihnen <span>{inviteProfit}%</span> des Einzahlungsbetrags und <span>{levelProfit}%</span> ihrer zukünftigen Einnahmen.","download.title":"【Scannen und herunterladen】","download.android":"Android-App","team.totalCommissions":"Gesamtprovision","team.todayCommissions":"Heutige Provision","team.performance":"Teamleistung","team.nft":"Team-Staking","team.member":"Teammitglieder","team.staking":"Von dem Team Abgeschlossene NFTs","team.product":"Team-Mining-Nummer","team.referralCode":"Empfehlungscode","team.detail":"Detail anzeigen","team.myEarnings":"Meine Einnahmen","order.count":"Gesamt-NFT","order.stakedNft":"Gestakter Betrag","order.unStakedNft":"Beendeter Staking-Betrag","order.expectedEarnings":"Erwartete Einnahmen","order.releasedEarnings":"Freigegebene Einnahmen","order.expected":"Erwartet","order.investPeriod":"Investitionsperiode","order.mining":"Mining","order.completed":"Abgeschlossen","order.earnings":"Einnahmen","order.autoReinvestment":"Automatische Reinvestition","moc.center":"MTC-Zentrum","moc.myMtc":"Mein MTC","moc.num":"Anzahl der MTC-Token","moc.currentPrice":"MTC-Preis","moc.discountPrice":"Mtc Rabattierter Preis","moc.price":"Preis","moc.available":"Verfügbar","moc.rule":"Regel","moc.rule1":"Für jedes gestakte NFT erhalten Sie MTC-Token in Höhe von {productPercent}% der Einnahmen.","moc.rule2":"Um Zinsen auf MTC-Token zu verdienen, staken Sie sie bitte zuerst. Nach dem Staken können sie erst wieder ausgetauscht werden, wenn Sie sie unstaken.","moc.rule3":"MTC-Token können basierend auf dem Echtzeit-Marktwert der MTC-Token gegen USDT eingetauscht werden.","moc.staking":"staking","moc.unstaking":"unStaking","moc.stakingProfit":"MTC Staking-Einnahmen","moc.activity":"{percent}% Rabatt auf MTC","moc.activity.holdings":"Bestände","moc.activity.buy":"MTC kaufen","moc.activity.ended":"MTC-Ereignis ist beendet","moc.activity.subscription":"Abonnementbestätigung läuft, bitte warten Sie geduldig.","moc.activity.progress":"Abonnementbestätigung läuft, bitte warten Sie geduldig.","moc.activity.rule1":"Aktionszeitraum: {start} - {end}","moc.activity.rule2":"Alle MTC-Token in diesem Ereignis sind mit {percent}% Rabatt erhältlich.","moc.activity.rule3":"Wie viele gestakte NFTs sind erforderlich, um MTC-Token im Wert von USDT zu abonnieren","moc.activity.rule4":"Die Anzahl der MTC-Token ist begrenzt, wer zuerst kommt, mahlt zuerst; das Ereignis endet, sobald das Abonnement abgeschlossen ist.","moc.activity.noHoldings":"Keine Bestände","notice.title":"Meine Benachrichtigungen","trans.notCredited":"Nicht gutgeschrieben?","trans.hash":"{walletType} Transaktions-Hash","trans.hashSuccess":"{walletType} Transaktionsabfrage erfolgreich","trans.hashError":"Bitte geben Sie den {walletType} Transaktions-Hash ein","message.amountMinimum":"Mindestabhebungsbetrag: {min} USDT","message.loging":"Anmeldung","message.withdrawSucces":"Auszahlungsantrag erfolgreich eingereicht.","withdrawFee":"Abhebung abgelehnt","message.cancelContinuity":"Sind Sie sicher, dass Sie die Kontinuität abbrechen möchten?","withdrawTime":"Die Abhebungszeiten sind täglich von {start} bis {end} (UTC).","Token create error":"Fehler beim Erstellen des Tokens","Sending too frequently, please try again later":"Zu häufiges Senden, bitte versuchen Sie es später erneut","Sys error, not email can send":"Systemfehler, keine E-Mails können gesendet werden","Sys error, email send error":"Systemfehler, Fehler beim Senden der E-Mail","Error request":"Fehlerhafte Anfrage","You can\'t login":"Sie können sich nicht einloggen","Please input the email":"Bitte geben Sie die E-Mail-Adresse ein","Unsupported email suffix":"Nicht unterstütztes E-Mail-Suffix","Email is exist":"E-Mail existiert bereits","Email is not exist":"E-Mail existiert nicht","Not the correct email address":"Keine korrekte E-Mail-Adresse","Payment password must be greater than or equal to 6 digits":"Das Zahlungspasswort muss aus mindestens 6 Ziffern bestehen","Password must be greater than or equal to 6 digits":"Das Passwort muss aus mindestens 6 Ziffern bestehen","Please input the password":"Bitte geben Sie das Passwort ein","Please input the Payment password":"Bitte geben Sie das Zahlungspasswort ein","The original password is incorrect":"Das ursprüngliche Passwort ist falsch","Please input the verification code":"Bitte geben Sie den Verifizierungscode ein","The verification code is incorrect or has expired. Please obtain it again":"Der Verifizierungscode ist falsch oder abgelaufen. Bitte holen Sie ihn erneut ein","The verification code is incorrect":"Der Verifizierungscode ist falsch","Account or password error":"Konto- oder Passwortfehler","Payment password error":"Zahlungspasswortfehler","Please input start time":"Bitte geben Sie die Startzeit ein","Please input end time":"Bitte geben Sie die Endzeit ein","Please verify account":"Bitte überprüfen Sie das Konto","Product not exist":"Produkt existiert nicht","Product Suspend sales":"Produktverkauf ausgesetzt","Insufficient balance":"Unzureichendes Guthaben","Balance too little":"Guthaben zu niedrig","Product income":"Produkteinnahmen","Buy product":"Produkt kaufen","Buy platform coin":"MTC-Token kaufen","recharge back":"Auflade-Rabatt","error add":"Fehler beim Hinzufügen","coin exchange amount":"MTC-Token Austauschmenge","coin interest":"MTC-Token Zinsen","coin is staking please cancel staking":"MTC-Token ist im Staking, bitte Staking abbrechen","Platform change":"Plattformwechsel","withdraw refuse":"Abhebung verweigern","Not meeting the minimum withdrawal amount":"Nicht erreichen des Mindestauszahlungsbetrags","Not yet due for withdrawal time":"Noch nicht fällige Auszahlungszeit","Please verify email":"Bitte E-Mail verifizieren","Activity amount must greater in progress product total amount":"Die Aktivitätsmenge muss größer als die aktuelle gesamte festgelegte Menge sein","Insufficient quantity":"MTC-Token sind ausverkauft","Activity not exist":"Aktivität existiert nicht","Buy activity":"Rabattierte MTC-Token kaufen","Not Start":"Rabatt-Aktivität hat noch nicht begonnen","Is over":"Rabatt-Aktivität ist vorbei","Create address error":"Fehler beim Erstellen der Adresse","Not a correct address":"Keine korrekte Adresse","Processed":"Verarbeitet","Out wallet password is empty":"Passwort der externen Geldbörse ist leer","Trans error please check wallet":"Transaktionsfehler, bitte überprüfen Sie die Geldbörse","Please input trans hash":"Bitte geben Sie den Transaktionshash ein","Please input coin type":"Bitte wählen Sie den Netzwerktyp aus","Not Find Trans":"Transaktion nicht gefunden","Transaction processed":"Transaktion verarbeitet","Transaction does not belong to you":"Die Transaktion gehört nicht Ihnen","Transaction does not USDT":"Die Transaktion ist nicht in USDT","Channel":"Kanal","Consultation":"Beratung","Consult":"Konsultieren","Group":"Gruppe","nonWithdrawAmount":"Nicht abhebbarer Betrag","checkIn":"Einchecken","checkInTip":"Heutiges Einchecken erfolgreich!","Today Has Sign In":"Heute bereits eingecheckt","todayChecked":"Heute bereits eingecheckt","registerGift":"Registrierungsgeschenk","dailyCheckIn":"Tägliches Einchecken","withdraw.addressSetting":"{withdrawalType}-Adresse festlegen","trade.open":"Geöffnet","trade.noOpen":"Geschlossen","trade.noOpen.message":"Produkt nicht geöffnet","NFT Staking Mining":"NFT-Staking-Mining","days":"Tage","hours":"Stunden","minutes":"Minuten","index.wallet":"Wallet","index.mtcCenter":"MTC-Zentrum","index.myNft":"Mein NFT","mata.title":"ATANFT Einführung","mata.intro1":"ATANFT Mining basiert auf dem privaten Ökosystem von Manta Network und ist als tokenbasiertes Anreizsystem konzipiert, das sich auf \'privates NFT-Besitz und Ökosystembeiträge\' konzentriert. Das Hauptziel besteht darin, Benutzer durch Mining zur Teilnahme am Umlauf, der Nutzung und dem Aufbau des ATANFT-Ökosystems zu motivieren und gleichzeitig die Aktivität des privaten Manta-Asset-Systems zu steigern. Teilnehmer erhalten MTC-Token oder exklusive private NFT-Belohnungen durch Staking und Interaktionen.","mata.intro2":"Das Mining-Modell konzentriert sich auf \'Privatsphäre + Ökosystem-Interaktionen\' und ist in zwei Haupttypen unterteilt:","mata.intro3":"<text class=\'bold\'>Staking-Mining</text>: Benutzer setzen ihre ATANFT (einschließlich normaler digitaler Sammlerstücke, SBT-Identitätsnachweise usw.) in einen bestimmten Smart Contract ein. Die Rendite wird basierend auf der Seltenheit des ATANFT (z. B. Genesis-Edition, limitierte Edition), der Haltedauer und den privaten Interaktionsdaten berechnet. Zum Beispiel bringt das Staking eines \'privaten Identitäts-ATANFT\' eine Basisjahresrendite, und wenn die Funktion \'Zero-Knowledge-Proof-Transaktionen\' aktiviert ist (z. B. private Übertragungen über MantaPay), erhöht sich der Belohnungsfaktor um 10 % bis 20 %. Die Gewinne werden täglich in MTC-Token ausgeschüttet.","mata.intro4":"<text class=\'bold\'>Ökosystem-Interaktions-Mining</text>: Benutzer werden ermutigt, ATANFTs im Manta-Ökosystem für bestimmte Aufgaben einzusetzen, z. B. Integration von ATANFTs in Blockchain-Spiele (als Charakter oder Gegenstand), Verwendung von ATANFTs als LP-Sicherheit in DeFi-Modulen wie MantaSwap oder Einladung neuer Benutzer, ihren ersten ATANFT zu prägen. Jede Aufgabe bringt Punkte. Wenn ein Schwellenwert erreicht wird, können die Punkte gegen einen \'Mining-Gedenk-ATANFT\' mit höherer Staking-Rendite oder direkt gegen MTC-Token eingetauscht werden. Schwierige Aufgaben (z. B. Cross-Chain-Transfers von privaten NFTs) schalten exklusive limitierte Rechte frei.","token.rule1":"Benutzer müssen die gekauften ATANFTs in einen bestimmten Smart Contract einzahlen. Die Rendite wird basierend auf der Seltenheit des ATANFT berechnet. Mining-Belohnungen werden in MTC-Token ausgezahlt und alle zwei Stunden automatisch dem Benutzerkonto gutgeschrieben.","token.rule2":"MTC-Token können zum Marktpreis gegen USDT getauscht werden.","trade.pay":"Zahlungsbetrag","trade.pay.tip":"Jeder ATANFT kostet {amount} USDT. Der Kauf muss ein ganzzahliges Vielfaches von {amount} USDT sein (z. B. {amount1} USDT, {amount2} USDT).","trade.intro":"Crazy Monkey NFT mit einzigartigem Design und limitierter Auflage ist bei jeder Sammlung ein überraschend wertvolles Asset.","investPeriod":"Staking-Zeitraum","order.cumulativeIncome":"Kumuliertes Einkommen","order.amount":"Betrag","order.num":"Menge","agencyRebate":"Agenturrabatt","order.doing":"Laufend","order.history":"Verlauf","registerTime":"Registrierungszeit","stakingBackProfit":"Empfehlungsrabatt","exchange.fee":"Gebühr","trade.sale":"Im Verkauf","trade.sold":"Ausverkauft","trade.sold.message":"Heute ausverkauft","order.staked":"{day} Tage gestakt","order.completed.time":"Endzeit","order.completed.time1":"Fälligkeitszeit: {time}","team.totalRecharge":"Gesamtaufladung","trade.numWarning":"Unzureichende NFT-Menge","Insufficient NFT quantity":"Unzureichende NFT-Menge","token.buy":"Kaufen","token.sell":"Verkaufen","token.noOpen":"Noch nicht geöffnet","token.transaction":"Transaktion","wallet.withdraw.tip":"Mindestabhebung: <span class=\'uni-text-color\'>{min} USDT</span>, eine Gebühr von <span class=\'uni-text-color\'>{fee}%</span> pro Transaktion wird erhoben.","wallet.withdraw.tipTwo":"Ankunftszeit: Die Auszahlung wird innerhalb von <span class=\'uni-text-color\'>{time}</span> Stunden auf Ihre Wallet gutgeschrieben.","wallet.withdraw.tipOne":"Auszahlungszeit: Systemzeit von <span class=\'uni-text-color\'>{start}</span> bis <span class=\'uni-text-color\'>{end}</span>.","star.user":"Star-Spieler"}')
    },
    5697: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            album: {
                urls: function() {
                    return []
                },
                keyName: "",
                singleSize: 180,
                multipleSize: 70,
                space: 6,
                singleMode: "scaleToFill",
                multipleMode: "aspectFill",
                maxCount: 9,
                previewFullImage: !0,
                rowCount: 3,
                showMore: !0
            }
        }
    },
    "5a03": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = function(e, a) {
            return a ? "".concat(e.replace(/\/+$/, ""), "/").concat(a.replace(/^\/+/, "")) : e
        }, t("c223"), t("5c47"), t("a1c1")
    },
    "5a6a": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            noticeBar: {
                text: function() {
                    return []
                },
                direction: "row",
                step: !1,
                icon: "volume",
                mode: "",
                color: "#f9ae3d",
                bgColor: "#fdf6ec",
                speed: 80,
                fontSize: 14,
                duration: 2e3,
                disableTouch: !0,
                url: "",
                linkType: "navigateTo"
            }
        }
    },
    "5b71": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            code: {
                seconds: 60,
                startText: "获取验证码",
                changeText: "X秒重新获取",
                endText: "重新获取",
                keepRunning: !1,
                uniqueKey: ""
            }
        }
    },
    "5ca8": function(e, a, t) {
        "use strict";
        var n;
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            t ? n || (n = !0, "function" === typeof e && e(), setTimeout((function() {
                n = !1
            }), a)) : n || (n = !0, setTimeout((function() {
                n = !1, "function" === typeof e && e()
            }), a))
        };
        a.default = i
    },
    "5f4c": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = function(e, a, t) {
            var n = t.config.validateStatus,
                i = t.statusCode;
            !i || n && !n(i) ? a(t) : e(t)
        }
    },
    "605e": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            textarea: {
                value: "",
                placeholder: "",
                placeholderClass: "textarea-placeholder",
                placeholderStyle: "color: #c0c4cc",
                height: 70,
                confirmType: "done",
                disabled: !1,
                count: !1,
                focus: !1,
                autoHeight: !1,
                fixed: !1,
                cursorSpacing: 0,
                cursor: "",
                showConfirmBar: !0,
                selectionStart: -1,
                selectionEnd: -1,
                adjustPosition: !0,
                disableDefaultPadding: !1,
                holdKeyboard: !1,
                maxlength: 140,
                border: "surround",
                formatter: null
            }
        }
    },
    6259: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            radio: {
                name: "",
                shape: "",
                disabled: "",
                labelDisabled: "",
                activeColor: "",
                inactiveColor: "",
                iconSize: "",
                labelSize: "",
                label: "",
                labelColor: "",
                size: "",
                iconColor: "",
                placement: ""
            }
        }
    },
    "626e": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            list: {
                showScrollbar: !1,
                lowerThreshold: 50,
                upperThreshold: 0,
                scrollTop: 0,
                offsetAccuracy: 10,
                enableFlex: !1,
                pagingEnabled: !1,
                scrollable: !0,
                scrollIntoView: "",
                scrollWithAnimation: !1,
                enableBackToTop: !1,
                height: 0,
                width: 0,
                preLoadScreen: 1
            }
        }
    },
    "661f": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            readMore: {
                showHeight: 400,
                toggle: !1,
                closeText: "展开阅读全文",
                openText: "收起",
                color: "#2979ff",
                fontSize: 14,
                textIndent: "2em",
                name: ""
            }
        }
    },
    "671d": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            gridItem: {
                name: null,
                bgColor: "transparent"
            }
        }
    },
    "6bf7": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            loadmore: {
                status: "loadmore",
                bgColor: "transparent",
                icon: !0,
                fontSize: 14,
                iconSize: 17,
                color: "#606266",
                loadingIcon: "spinner",
                loadmoreText: "加载更多",
                loadingText: "正在加载...",
                nomoreText: "没有更多了",
                isDot: !1,
                iconColor: "#b7b7b7",
                marginTop: 10,
                marginBottom: 10,
                height: "auto",
                line: !1,
                lineColor: "#E6E8EB",
                dashed: !1
            }
        }
    },
    "6dbb": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            toolbar: {
                show: !0,
                cancelText: "取消",
                confirmText: "确认",
                cancelColor: "#909193",
                confirmColor: "#3c9cff",
                title: ""
            }
        }
    },
    7115: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            line: {
                color: "#d6d7d9",
                length: "100%",
                direction: "row",
                hairline: !0,
                margin: 0,
                dashed: !1
            }
        }
    },
    "72fd": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            image: {
                src: "",
                mode: "aspectFill",
                width: "300",
                height: "225",
                shape: "square",
                radius: 0,
                lazyLoad: !0,
                showMenuByLongpress: !0,
                loadingIcon: "photo",
                errorIcon: "error-circle",
                showLoading: !0,
                showError: !0,
                fade: !0,
                webp: !1,
                duration: 500,
                bgColor: "#f3f4f6"
            }
        }
    },
    "75e8": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            section: {
                title: "",
                subTitle: "更多",
                right: !0,
                fontSize: 15,
                bold: !0,
                color: "#303133",
                subColor: "#909399",
                showLine: !0,
                lineColor: "",
                arrow: !0
            }
        }
    },
    "782b": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            toast: 10090,
            noNetwork: 10080,
            popup: 10075,
            mask: 10070,
            navbar: 980,
            topTips: 975,
            sticky: 970,
            indexListSticky: 965
        }
    },
    7832: function(e, a, t) {
        "use strict";
        (function(e) {
            t("6a54");
            var n = t("f5bd").default;
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0, t("bf0f"), t("2797"), t("3efd"), t("aa9c");
            var i = n(t("9b1b")),
                o = n(t("80b1")),
                r = n(t("efe5")),
                s = n(t("0683")),
                d = n(t("04d5")),
                l = n(t("11a4")),
                c = n(t("9ccf")),
                u = t("47d6"),
                m = n(t("0ed9")),
                p = function() {
                    function a() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (0, o.default)(this, a), (0, u.isPlainObject)(t) || (t = {}, e.warn("设置全局参数必须接收一个Object")), this.config = (0, m.default)((0, i.default)((0, i.default)({}, c.default), t)), this.interceptors = {
                            request: new d.default,
                            response: new d.default
                        }
                    }
                    return (0, r.default)(a, [{
                        key: "setConfig",
                        value: function(e) {
                            this.config = e(this.config)
                        }
                    }, {
                        key: "middleware",
                        value: function(e) {
                            e = (0, l.default)(this.config, e);
                            var a = [s.default, void 0],
                                t = Promise.resolve(e);
                            this.interceptors.request.forEach((function(e) {
                                a.unshift(e.fulfilled, e.rejected)
                            })), this.interceptors.response.forEach((function(e) {
                                a.push(e.fulfilled, e.rejected)
                            }));
                            while (a.length) t = t.then(a.shift(), a.shift());
                            return t
                        }
                    }, {
                        key: "request",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return this.middleware(e)
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return this.middleware((0, i.default)({
                                url: e,
                                method: "GET"
                            }, a))
                        }
                    }, {
                        key: "post",
                        value: function(e, a) {
                            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return this.middleware((0, i.default)({
                                url: e,
                                data: a,
                                method: "POST"
                            }, t))
                        }
                    }, {
                        key: "put",
                        value: function(e, a) {
                            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return this.middleware((0, i.default)({
                                url: e,
                                data: a,
                                method: "PUT"
                            }, t))
                        }
                    }, {
                        key: "delete",
                        value: function(e, a) {
                            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return this.middleware((0, i.default)({
                                url: e,
                                data: a,
                                method: "DELETE"
                            }, t))
                        }
                    }, {
                        key: "connect",
                        value: function(e, a) {
                            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return this.middleware((0, i.default)({
                                url: e,
                                data: a,
                                method: "CONNECT"
                            }, t))
                        }
                    }, {
                        key: "head",
                        value: function(e, a) {
                            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return this.middleware((0, i.default)({
                                url: e,
                                data: a,
                                method: "HEAD"
                            }, t))
                        }
                    }, {
                        key: "options",
                        value: function(e, a) {
                            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return this.middleware((0, i.default)({
                                url: e,
                                data: a,
                                method: "OPTIONS"
                            }, t))
                        }
                    }, {
                        key: "trace",
                        value: function(e, a) {
                            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return this.middleware((0, i.default)({
                                url: e,
                                data: a,
                                method: "TRACE"
                            }, t))
                        }
                    }, {
                        key: "upload",
                        value: function(e) {
                            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return a.url = e, a.method = "UPLOAD", this.middleware(a)
                        }
                    }, {
                        key: "download",
                        value: function(e) {
                            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return a.url = e, a.method = "DOWNLOAD", this.middleware(a)
                        }
                    }]), a
                }();
            a.default = p
        }).call(this, t("ba7c")["default"])
    },
    "7ad7": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = "h5"
    },
    "7f24": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var n = null;
        var i = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null !== n && clearTimeout(n), t) {
                var i = !n;
                n = setTimeout((function() {
                    n = null
                }), a), i && "function" === typeof e && e()
            } else n = setTimeout((function() {
                "function" === typeof e && e()
            }), a)
        };
        a.default = i
    },
    8244: function(e, a, t) {
        var n = t("bdbb").default;
        t("bf0f"), uni.addInterceptor({
            returnValue: function(e) {
                return !e || "object" !== n(e) && "function" !== typeof e || "function" !== typeof e.then ? e : new Promise((function(a, t) {
                    e.then((function(e) {
                        return e[0] ? t(e[0]) : a(e[1])
                    }))
                }))
            }
        })
    },
    "824a": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            col: {
                span: 12,
                offset: 0,
                justify: "start",
                align: "stretch",
                textAlign: "left"
            }
        }
    },
    8402: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            modal: {
                show: !1,
                title: "",
                content: "",
                confirmText: "确认",
                cancelText: "取消",
                showConfirmButton: !0,
                showCancelButton: !1,
                confirmColor: "#2979ff",
                cancelColor: "#606266",
                buttonReverse: !1,
                zoom: !0,
                asyncClose: !1,
                closeOnClickOverlay: !1,
                negativeTop: 0,
                width: "650rpx",
                confirmButtonShape: ""
            }
        }
    },
    8950: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = function(e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
        }, t("5c47"), t("0506")
    },
    "8aac": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            subsection: {
                list: [],
                current: 0,
                activeColor: "#3c9cff",
                inactiveColor: "#303133",
                mode: "button",
                fontSize: 12,
                bold: !0,
                bgColor: "#eeeeef",
                keyName: "name"
            }
        }
    },
    "8c69": function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("9b1b")),
            o = n(t("0298")),
            r = n(t("4445")),
            s = n(t("5697")),
            d = n(t("a75f")),
            l = n(t("240f")),
            c = n(t("f5b0")),
            u = n(t("8f8e")),
            m = n(t("ab54")),
            p = n(t("43ad")),
            g = n(t("4843")),
            f = n(t("e7c3")),
            h = n(t("b0dd")),
            y = n(t("1f4e")),
            v = n(t("4ba3")),
            T = n(t("992e")),
            b = n(t("bc9e")),
            w = n(t("5b71")),
            k = n(t("eb4f")),
            A = n(t("824a")),
            P = n(t("fbef")),
            C = n(t("34c2")),
            S = n(t("d897")),
            x = n(t("af7b")),
            M = n(t("1a7b")),
            N = n(t("8dc9")),
            j = n(t("e8cb")),
            F = n(t("d7ec")),
            E = n(t("c7ae")),
            B = n(t("e017")),
            z = n(t("d9c4")),
            I = n(t("cebd")),
            _ = n(t("671d")),
            D = n(t("d808")),
            O = n(t("72fd")),
            R = n(t("bb1b")),
            U = n(t("081d")),
            q = n(t("8f8c")),
            L = n(t("bcc8")),
            Q = n(t("7115")),
            H = n(t("0725")),
            V = n(t("c13d")),
            G = n(t("626e")),
            W = n(t("c31d")),
            K = n(t("93f5")),
            J = n(t("a2b5")),
            Y = n(t("6bf7")),
            X = n(t("8402")),
            Z = n(t("06d5")),
            $ = n(t("4937")),
            ee = n(t("5a6a")),
            ae = n(t("df88")),
            te = n(t("2599")),
            ne = n(t("0ef0")),
            ie = n(t("1099c")),
            oe = n(t("91ee")),
            re = n(t("d677")),
            se = n(t("e950")),
            de = n(t("6259")),
            le = n(t("d929")),
            ce = n(t("e1e7")),
            ue = n(t("661f")),
            me = n(t("38e3")),
            pe = n(t("15ae")),
            ge = n(t("2bc8")),
            fe = n(t("24b3")),
            he = n(t("75e8")),
            ye = n(t("2e4a")),
            ve = n(t("0d31")),
            Te = n(t("b5ba")),
            be = n(t("8f6e")),
            we = n(t("9ec4")),
            ke = n(t("ebc3")),
            Ae = n(t("8aac")),
            Pe = n(t("1074")),
            Ce = n(t("df58")),
            Se = n(t("9933")),
            xe = n(t("a5ca")),
            Me = n(t("c145")),
            Ne = n(t("516f")),
            je = n(t("c1ae")),
            Fe = n(t("4fcf")),
            Ee = n(t("db99")),
            Be = n(t("bc4e")),
            ze = n(t("605e")),
            Ie = n(t("b3c0")),
            _e = n(t("6dbb")),
            De = n(t("3f3a")),
            Oe = n(t("2b71")),
            Re = n(t("fb49")),
            Ue = (o.default.color, (0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)({}, r.default), s.default), d.default), l.default), c.default), u.default), m.default), p.default), g.default), f.default), h.default), y.default), v.default), T.default), b.default), w.default), k.default), A.default), P.default), C.default), S.default), x.default), M.default), N.default), j.default), F.default), E.default), B.default), z.default), I.default), _.default), D.default), O.default), R.default), U.default), q.default), L.default), Q.default), H.default), V.default), G.default), W.default), K.default), J.default), Y.default), X.default), Z.default), $.default), ee.default), ae.default), te.default), ne.default), ie.default), oe.default), re.default), se.default), de.default), le.default), ce.default), ue.default), me.default), pe.default), ge.default), fe.default), he.default), ye.default), ve.default), Te.default), be.default), we.default), ke.default), Ae.default), Pe.default), Ce.default), Se.default), xe.default), Me.default), Ne.default), je.default), Fe.default), Ee.default), Be.default), ze.default), Ie.default), _e.default), De.default), Oe.default), Re.default));
        a.default = Ue
    },
    "8d34": function(e, a, t) {
        "use strict";
        t.r(a);
        var n = t("fbfa"),
            i = t("555a");
        for (var o in i)["default"].indexOf(o) < 0 && function(e) {
            t.d(a, e, (function() {
                return i[e]
            }))
        }(o);
        t("01cf");
        var r = t("828b"),
            s = Object(r["a"])(i["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], void 0);
        a["default"] = s.exports
    },
    "8dc9": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var n = {
            datetimePicker: {
                show: !1,
                showToolbar: !0,
                value: "",
                title: "",
                mode: "datetime",
                maxDate: new Date((new Date).getFullYear() + 10, 0, 1).getTime(),
                minDate: new Date((new Date).getFullYear() - 10, 0, 1).getTime(),
                minHour: 0,
                maxHour: 23,
                minMinute: 0,
                maxMinute: 59,
                filter: null,
                formatter: null,
                loading: !1,
                itemHeight: 44,
                cancelText: "取消",
                confirmText: "确认",
                cancelColor: "#909193",
                confirmColor: "#3c9cff",
                visibleItemCount: 5,
                closeOnClickOverlay: !1,
                defaultIndex: function() {
                    return []
                }
            }
        };
        a.default = n
    },
    "8e78": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var n = {
            primary: "#3c9cff",
            info: "#909399",
            default: "#909399",
            warning: "#f9ae3d",
            error: "#f56c6c",
            success: "#5ac725",
            mainColor: "#303133",
            contentColor: "#606266",
            tipsColor: "#909399",
            lightColor: "#c0c4cc",
            borderColor: "#e4e7ed"
        };
        a.default = n
    },
    "8f6e": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            steps: {
                direction: "row",
                current: 0,
                activeColor: "#3c9cff",
                inactiveColor: "#969799",
                activeIcon: "",
                inactiveIcon: "",
                dot: !1
            }
        }
    },
    "8f8c": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            input: {
                value: "",
                type: "text",
                fixed: !1,
                disabled: !1,
                disabledColor: "#f5f7fa",
                clearable: !1,
                password: !1,
                maxlength: -1,
                placeholder: null,
                placeholderClass: "input-placeholder",
                placeholderStyle: "color: #c0c4cc",
                showWordLimit: !1,
                confirmType: "done",
                confirmHold: !1,
                holdKeyboard: !1,
                focus: !1,
                autoBlur: !1,
                disableDefaultPadding: !1,
                cursor: -1,
                cursorSpacing: 30,
                selectionStart: -1,
                selectionEnd: -1,
                adjustPosition: !0,
                inputAlign: "left",
                fontSize: "15px",
                color: "#303133",
                prefixIcon: "",
                prefixIconStyle: "",
                suffixIcon: "",
                suffixIconStyle: "",
                border: "surround",
                readonly: !1,
                shape: "square",
                formatter: null
            }
        }
    },
    "8f8e": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            backtop: {
                mode: "circle",
                icon: "arrow-upward",
                text: "",
                duration: 100,
                scrollTop: 0,
                top: 400,
                bottom: 100,
                right: 20,
                zIndex: 9,
                iconStyle: function() {
                    return {
                        color: "#909399",
                        fontSize: "19px"
                    }
                }
            }
        }
    },
    "91ee": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            parse: {
                copyLink: !0,
                errorImg: "",
                lazyLoad: !1,
                loadingImg: "",
                pauseVideo: !0,
                previewImg: !0,
                setTitle: !0,
                showImgMenu: !0
            }
        }
    },
    "93f5": function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("0298")),
            o = i.default.color,
            r = {
                loadingIcon: {
                    show: !0,
                    color: o["u-tips-color"],
                    textColor: o["u-tips-color"],
                    vertical: !1,
                    mode: "spinner",
                    size: 24,
                    textSize: 15,
                    text: "",
                    timingFunction: "ease-in-out",
                    duration: 1200,
                    inactiveColor: ""
                }
            };
        a.default = r
    },
    "992e": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            checkboxGroup: {
                name: "",
                value: function() {
                    return []
                },
                shape: "square",
                disabled: !1,
                activeColor: "#2979ff",
                inactiveColor: "#c8c9cc",
                size: 18,
                placement: "row",
                labelSize: 14,
                labelColor: "#303133",
                labelDisabled: !1,
                iconColor: "#ffffff",
                iconSize: 12,
                iconPlacement: "left",
                borderBottom: !1
            }
        }
    },
    9933: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            swiper: {
                list: function() {
                    return []
                },
                indicator: !1,
                indicatorActiveColor: "#FFFFFF",
                indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
                indicatorStyle: "",
                indicatorMode: "line",
                autoplay: !0,
                current: 0,
                currentItemId: "",
                interval: 3e3,
                duration: 300,
                circular: !1,
                previousMargin: 0,
                nextMargin: 0,
                acceleration: !1,
                displayMultipleItems: 1,
                easingFunction: "default",
                keyName: "url",
                imgMode: "aspectFill",
                height: 130,
                bgColor: "#f3f4f6",
                radius: 4,
                loading: !1,
                showTitle: !1
            }
        }
    },
    "9ccf": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            baseURL: "",
            header: {},
            method: "GET",
            dataType: "json",
            responseType: "text",
            custom: {},
            timeout: 6e4,
            withCredentials: !1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            }
        }
    },
    "9ec4": function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            stepsItem: {
                title: "",
                desc: "",
                iconSize: 17,
                error: !1
            }
        }
    },
    "9f63": function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"Accueil","index.trade":"Commerce","index.my":"Mon","userAuth.email":"E-mail","userAuth.password":"Mot de passe","userAuth.forgetPassword":"Mot de passe oublié ?","userAuth.forget":"Oublier","userAuth.reset":"Réinitialiser","userAuth.changePassword":"Changer le mot de passe","userAuth.newPassword":"Nouveau mot de passe","userAuth.confirmPassword":"Confirmer le mot de passe","userAuth.loginTitle":"Connectez-vous à votre compte","userAuth.signin":"Se connecter","userAuth.signup":"S\'inscrire","userAuth.noAccount":"Pas de compte ?","userAuth.haveAccount":"Vous avez déjà un compte ?","userAuth.fundPassword":"Mot de passe des fonds","userAuth.verificationCode":"Code de vérification","userAuth.referralCode":"Code de parrainage","userAuth.send":"Envoyer","userAuth.resend":"Renvoyer","userAuth.exipires":"Expire dans <span class=\'time uni-text-color\'>10</span> minutes.","userAuth.logging":"connexion","message.email":"Veuillez entrer votre e-mail","message.password":"Veuillez entrer votre mot de passe","message.newPassword":"Veuillez entrer votre nouveau mot de passe","message.fundPassword":"Veuillez entrer votre mot de passe des fonds","message.confirmPassword":"Veuillez confirmer votre mot de passe","message.confirmPasswordError":"Erreur de confirmation du mot de passe","message.imgCode":"Veuillez entrer le code de vérification d\'image","message.verificationCode":"Veuillez entrer le code de vérification","message.bnbAddress":"Veuillez entrer votre adresse de portefeuille BNB","message.trxAddress":"Veuillez entrer votre adresse de portefeuille TRX","message.logout":"Êtes-vous sûr de vouloir quitter ?","message.qty":"Veuillez entrer la quantité","message.mocNum":"Veuillez entrer le nombre de jetons MTC","message.buySuccess":"Félicitations, achat réussi !","message.success":"Réussi","message.copySuccess":"Copie réussie","message.amount":"Veuillez entrer le montant","todayearn":"Gain du jour","totalwarn":"Gain total","mymoc":"Mon Mtc","myteam":"Mon équipe","people":"Personnes","tips":"Conseils","tip":"Conseil","all":"Tout","amount":"Montant","record":"Enregistrer","address":"Adresse","exchange":"Échanger","qty":"Qté","buy":"Acheter","buyNow":"Acheter maintenant","balance":"Solde","account":"Compte","accountBalance":"Solde du compte","digitalToken":"Jeton numérique","convert":"Convertir","confirm":"Confirmer","error":"Erreur","ok":"OK","home.mocmarket":"Tendances du marché MTC","home.market":"Tendances principales","home.tip":"Échangez des cryptomonnaies avec un état d\'esprit rationnel, gérez les risques en diversifiant les investissements, effectuez des recherches approfondies avant d\'acheter, envisagez de conserver à long terme, échangez prudemment avec des plateformes sécurisées et restez informé des tendances du marché pour prendre des décisions éclairées.","trade.solo1":"Réalisant des","trade.solo2":"profits à faible risque","trade.solo3":"via le staking NFT.","trade.lowRisk":"Faible risque","trade.shortTerm":"Court terme","trade.highStable":"Rendements élevés et stables","trade.dailyYield":"Rendement quotidien","trade.investPeriod":"Période d\'investissement","trade.buy":"Acheter","trade.autoReinvestment":"Réinvestissement automatique","trade.autoReinvestmentTip":"Réinvestissement automatique : Il vous aide à recycler rapidement les fonds pour vous permettre de gagner plus de profit","language.title":"Langue","my.order":"Mon mining de staking","my.team":"Mon équipe","my.invite":"Inviter un ami","my.security":"Paramètre de sécurité","my.download":"Télécharger l\'application","my.about":"À propos de nous","my.appVersion":"Version de l\'application","my.logout":"Se déconnecter","customer.service":"Service client","customer.group":"Groupe","customer.person":"Personne","customer.tip":"Impossible d\'ouvrir l\'application {appName}. Veuillez vous assurer que {appName} est installée.","wallet.title":"Mon portefeuille","wallet.nftRelease":"Libération NFT","wallet.nftReleaseTip":"Êtes-vous sûr de libérer les NFTs ?","wallet.releaseSuccess":"Libération réussie","wallet.mocRelease":"Libération MTC","wallet.history":"Historique des transactions","wallet.all":"Tout","fundType":"Types de transactions","recharge":"Recharge","rechargeProfit":"Rebate de dépôt","withdraw":"Retrait","commission":"Gains de commission","gift":"Cadeaux de la plateforme","inviteProfit":"Rebate de parrainage","staking":"Staking","stakingProfit":"Gains de staking","unstaking":"Échange de NFT","purchaseMtc":"Acheter des jetons MTC","moc2Usdt":"MTC à USDT","usdt2Mtc":"USDT à MTC","recharge.tip":"Veuillez recharger USDT en utilisant le réseau {walletType}. Après soumission, veuillez patienter et vérifier si la transaction est arrivée dans les 1 à 2 minutes.","withdraw.address":"Adresse de retrait du portefeuille {withdrawalType}","withdraw.tip":"Montant de retrait minimum : <span class=\'uni-text-color\'>{min} USDT</span>, avec des frais de <span class=\'uni-text-color\'>{fee}%</span> par transaction.","withdraw.amount":"Montant USDT","withdraw.submit":"Retirer","security.login":"Connexion","security.fund":"Fonds","security.setting":"Paramètre","security.tip":"Le code de vérification sera envoyé à votre e-mail <span class=\'uni-text-color\'>{account}</span>","invite.title":"【Scanner et s\'inscrire】","invite.code":"Code de parrainage","invite.copyCode":"Copier le code","invite.copyLink":"Copier le lien","invite.tip":"Invitez des amis à faire leur premier dépôt, la plateforme vous offrira <span>{inviteProfit}%</span> du montant du dépôt et <span>{levelProfit}%</span> de leurs futurs gains.","download.title":"【Scanner et télécharger】","download.android":"Application Android","team.totalCommissions":"Commission totale","team.todayCommissions":"Commission du jour","team.performance":"Performance de l\'Équipe","team.nft":"Staking d\'équipe","team.member":"Membres de l\'équipe","team.staking":"NFTs Complétés par l\'Équipe","team.product":"Nombre de mining de l\'équipe","team.referralCode":"Code de parrainage","team.detail":"Voir les détails","team.myEarnings":"Mes gains","order.count":"Total NFT","order.stakedNft":"Montant staké","order.unStakedNft":"Montant du staking terminé","order.expectedEarnings":"Gains attendus","order.releasedEarnings":"Gains libérés","order.expected":"Attendu","order.investPeriod":"Période d\'investissement","order.mining":"Mining","order.completed":"Complété","order.earnings":"Gains","order.autoReinvestment":"Réinvestissement automatique","moc.center":"Centre MTC","moc.myMtc":"Mon MTC","moc.num":"Nombre de jetons MTC","moc.currentPrice":"Prix du MTC","moc.discountPrice":"Prix Réduit Mtc","moc.price":"Prix","moc.available":"Disponible","moc.rule":"Règle","moc.rule1":"Pour chaque NFT staké, vous recevrez des jetons MTC équivalentes à {productPercent}% des gains.","moc.rule2":"Pour gagner des intérêts sur les jetons MTC, veuillez d\'abord les staker. Après le staking, elles ne peuvent pas être échangées jusqu\'à ce que vous les unstakez.","moc.rule3":"Les jetons MTC peuvent être échangées contre des USDT en fonction de la valeur marchande en temps réel des jetons MTC.","moc.staking":"staking","moc.unstaking":"unStaking","moc.stakingProfit":"Gains de staking MTC","moc.activity":"{percent}% de réduction sur MTC","moc.activity.holdings":"Participations","moc.activity.buy":"Acheter MTC","moc.activity.ended":"L\'événement MTC est terminé","moc.activity.subscription":"Confirmation d\'abonnement en cours, veuillez patienter.","moc.activity.progress":"Confirmation d\'abonnement en cours, veuillez patienter.","moc.activity.rule1":"Période de promotion : {start} - {end}","moc.activity.rule2":"Toutes les jetons MTC de cet événement sont disponibles pour abonnement à {percent}% de réduction.","moc.activity.rule3":"Combien de NFT stakés sont nécessaires pour souscrire à des jetons MTC d\'une valeur équivalente en USDT","moc.activity.rule4":"Le nombre de jetons MTC est limité, premier arrivé, premier servi ; l\'événement se terminera une fois la souscription complétée.","moc.activity.noHoldings":"Aucune détention","notice.title":"Mes notifications","trans.notCredited":"Pas crédité?","trans.hash":"Hash de transaction {walletType}","trans.hashSuccess":"Requête de transaction {walletType} réussie","trans.hashError":"Veuillez entrer le hash de transaction {walletType}","message.amountMinimum":"Montant minimum de retrait: {min} USDT","message.loging":"Connexion en cours","message.withdrawSucces":"Demande de retrait soumise avec succès.","withdrawFee":"Retrait refusé","message.cancelContinuity":"Êtes-vous sûr de vouloir annuler la continuité ?","withdrawTime":"Les heures de retrait sont de {start} à {end} quotidiennement (UTC).","Token create error":"Erreur de création de jeton","Sending too frequently, please try again later":"Envoi trop fréquent, veuillez réessayer plus tard","Sys error, not email can send":"Erreur système, impossible d\'envoyer l\'e-mail","Sys error, email send error":"Erreur système, erreur d\'envoi de l\'e-mail","Error request":"Erreur de demande","You can\'t login":"Vous ne pouvez pas vous connecter","Please input the email":"Veuillez saisir l\'adresse e-mail","Unsupported email suffix":"Suffixe d\'e-mail non pris en charge","Email is exist":"L\'e-mail existe déjà","Email is not exist":"L\'e-mail n\'existe pas","Not the correct email address":"Ce n\'est pas l\'adresse e-mail correcte","Payment password must be greater than or equal to 6 digits":"Le mot de passe de paiement doit comporter au moins 6 chiffres","Password must be greater than or equal to 6 digits":"Le mot de passe doit comporter au moins 6 chiffres","Please input the password":"Veuillez saisir le mot de passe","Please input the Payment password":"Veuillez saisir le mot de passe de paiement","The original password is incorrect":"Le mot de passe original est incorrect","Please input the verification code":"Veuillez saisir le code de vérification","The verification code is incorrect or has expired. Please obtain it again":"Le code de vérification est incorrect ou a expiré. Veuillez l\'obtenir à nouveau","The verification code is incorrect":"Le code de vérification est incorrect","Account or password error":"Erreur de compte ou de mot de passe","Payment password error":"Erreur de mot de passe de paiement","Please input start time":"Veuillez saisir l\'heure de début","Please input end time":"Veuillez saisir l\'heure de fin","Please verify account":"Veuillez vérifier le compte","Product not exist":"Le produit n\'existe pas","Product Suspend sales":"Vente du produit suspendue","Insufficient balance":"Solde insuffisant","Balance too little":"Solde trop faible","Product income":"Revenu du produit","Buy product":"Achat de produit","Buy platform coin":"Achat de pièce MTC","recharge back":"Remboursement de recharge","error add":"Erreur d\'ajout","coin exchange amount":"Montant d\'échange de pièce MTC","coin interest":"Intérêt de pièce MTC","coin is staking please cancel staking":"La pièce MTC est en staking, veuillez annuler le staking","Platform change":"Changement de plateforme","withdraw refuse":"Refus de retrait","Not meeting the minimum withdrawal amount":"Ne répond pas au montant minimum de retrait","Not yet due for withdrawal time":"Pas encore le moment pour le retrait","Please verify email":"Veuillez vérifier l\'e-mail","Activity amount must greater in progress product total amount":"Le montant de l\'activité doit être supérieur au montant total actuellement misé","Insufficient quantity":"Les jetons MTC sont épuisés","Activity not exist":"L\'activité de réduction n\'existe pas","Buy activity":"Achat de jetons MTC en promotion","Not Start":"L\'activité de réduction n\'a pas encore commencé","Is over":"L\'activité de réduction est terminée","Create address error":"Erreur de création d\'adresse","Not a correct address":"Adresse incorrecte","Processed":"Traitée","Out wallet password is empty":"Le mot de passe du portefeuille externe est vide","Trans error please check wallet":"Erreur de transaction, veuillez vérifier le portefeuille","Please input trans hash":"Veuillez saisir le hash de transaction","Please input coin type":"Veuillez sélectionner le type de réseau","Not Find Trans":"Transaction introuvable","Transaction processed":"Transaction traitée","Transaction does not belong to you":"La transaction ne vous appartient pas","Transaction does not USDT":"La transaction n\'est pas en USDT","Channel":"Chaîne","Consultation":"Consultation","Consult":"Consulter","Group":"Groupe","nonWithdrawAmount":"Montant non retirable","checkIn":"Enregistrement","checkInTip":"Enregistrement réussi aujourd\'hui !","Today Has Sign In":"Déjà enregistré aujourd\'hui","todayChecked":"Déjà enregistré aujourd\'hui","registerGift":"Cadeau d\'inscription","dailyCheckIn":"Enregistrement quotidien","withdraw.addressSetting":"Définir l\'adresse {withdrawalType}","trade.open":"Ouvert","trade.noOpen":"Fermé","trade.noOpen.message":"Produit non ouvert","NFT Staking Mining":"Minage de NFT en staking","days":"Jours","hours":"Heures","minutes":"Minutes","index.wallet":"Portefeuille","index.mtcCenter":"Centre MTC","index.myNft":"Mon NFT","mata.title":"Présentation de ATANFT","mata.intro1":"Le minage ATANFT repose sur l\'écosystème privé de Manta Network et est conçu comme un système d\'incitation basé sur les jetons, axé sur la \'possession d\'un NFT privé et la contribution à l\'écosystème\'. L\'objectif principal est d\'encourager les utilisateurs à participer à la circulation, à l\'application et à la construction de l\'écosystème ATANFT par le minage, tout en renforçant l\'activité du système d\'actifs privés de Manta. Les participants obtiennent des jetons MTC ou des récompenses NFT privées exclusives par le staking et les interactions.","mata.intro2":"Le modèle de minage se concentre sur \'la confidentialité + l\'interaction avec l\'écosystème\' et se divise en deux principaux types :","mata.intro3":"<text class=\'bold\'>Minage par Staking</text> : Les utilisateurs déposent leurs ATANFT (y compris les collections numériques ordinaires, les certificats d\'identité SBT, etc.) dans un contrat intelligent désigné. Le rendement est calculé en fonction de la rareté du ATANFT (comme les éditions genesis ou limitées), de la durée de détention et de l\'historique des interactions privées. Par exemple, le staking d\'un \'NFT d\'identité privée\' offre un rendement annuel de base, et si la fonction \'transaction par preuve à connaissance nulle\' est activée (comme les transferts privés via MantaPay), un bonus supplémentaire de 10 % à 20 % est appliqué. Les gains sont distribués quotidiennement en jetons MTC.","mata.intro4":"<text class=\'bold\'>Minage par Interaction Écosystémique</text> : Encourage les utilisateurs à utiliser les ATANFT dans l\'écosystème Manta pour accomplir des tâches spécifiques, comme intégrer un ATANFT dans un jeu blockchain (en tant que personnage ou objet), utiliser un ATANFT comme garantie LP dans des modules DeFi comme MantaSwap, ou inviter de nouveaux utilisateurs à créer leur premier ATANFT. Chaque tâche rapporte des points. Une fois le seuil atteint, les points peuvent être échangés contre un \'NFT souvenir de minage\' avec un rendement plus élevé ou directement contre des jetons MTC. Les tâches plus complexes (comme le transfert de NFT privé inter-chaînes) débloquent des privilèges exclusifs limités.","token.rule1":"Les utilisateurs doivent déposer les ATANFT achetés dans un contrat intelligent désigné. Le rendement est calculé en fonction de la rareté du ATANFT. Les récompenses de minage sont distribuées en jetons MTC et créditées automatiquement sur le compte de l\'utilisateur toutes les deux heures.","token.rule2":"Les jetons MTC peuvent être échangés contre des USDT au prix du marché.","trade.pay":"Montant du paiement","trade.pay.tip":"Chaque ATANFT coûte {amount} USDT. L\'achat doit être un multiple entier de {amount} USDT (par exemple {amount1} USDT, {amount2} USDT).","trade.intro":"Crazy Monkey NFT, avec son design unique et ses éditions limitées, est un actif à fort potentiel et une surprise à chaque collection.","investPeriod":"Période de staking","order.cumulativeIncome":"Revenus cumulés","order.amount":"Montant","order.num":"Quantité","agencyRebate":"Remise d\'agence","order.doing":"En cours","order.history":"Historique","registerTime":"Date d\'inscription","stakingBackProfit":"Remise de parrainage","exchange.fee":"Frais","trade.sale":"En vente","trade.sold":"Épuisé","trade.sold.message":"Épuisé aujourd\'hui","order.staked":"Staké pendant {day} jours","order.completed.time":"Heure de fin","order.completed.time1":"Heure d\'échéance : {time}","team.totalRecharge":"Recharge totale","trade.numWarning":"Quantité de NFT insuffisante","Insufficient NFT quantity":"Quantité de NFT insuffisante","token.buy":"Acheter","token.sell":"Vendre","token.noOpen":"Pas encore ouvert","token.transaction":"Transaction","wallet.withdraw.tip":"Retrait minimum : <span class=\'uni-text-color\'>{min} USDT</span>, des frais de <span class=\'uni-text-color\'>{fee}%</span> sont appliqués par transaction.","wallet.withdraw.tipTwo":"Délai d’arrivée : le retrait sera crédité sur votre portefeuille dans les <span class=\'uni-text-color\'>{time}</span> heures.","wallet.withdraw.tipOne":"Heure de retrait : de <span class=\'uni-text-color\'>{start}</span> à <span class=\'uni-text-color\'>{end}</span> (heure système).","star.user":"Joueur étoile"}')
    },
    a15e: function(e, a, t) {
        "use strict";
        (function(e) {
            t("6a54");
            var n = t("f5bd").default;
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0, a.divide = g, a.enableBoundaryChecking = h, a.minus = p, a.plus = m, a.round = f, a.times = u;
            var i = n(t("9591"));
            t("e838"), t("64aa"), t("5c47"), t("dfcf"), t("c9b5"), t("bf0f"), t("ab80"), t("5ef2"), t("a1c1"), t("e062"), t("4259"), t("f7a5"), t("2797");
            var o = !0;

            function r(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15;
                return +parseFloat(Number(e).toPrecision(a))
            }

            function s(e) {
                var a = e.toString().split(/[eE]/),
                    t = (a[0].split(".")[1] || "").length - +(a[1] || 0);
                return t > 0 ? t : 0
            }

            function d(e) {
                if (-1 === e.toString().indexOf("e")) return Number(e.toString().replace(".", ""));
                var a = s(e);
                return a > 0 ? r(Number(e) * Math.pow(10, a)) : Number(e)
            }

            function l(a) {
                o && (a > Number.MAX_SAFE_INTEGER || a < Number.MIN_SAFE_INTEGER) && e.warn("".concat(a, " 超出了精度限制，结果可能不正确"))
            }

            function c(e, a) {
                var t = (0, i.default)(e),
                    n = t[0],
                    o = t[1],
                    r = t.slice(2),
                    s = a(n, o);
                return r.forEach((function(e) {
                    s = a(s, e)
                })), s
            }

            function u() {
                for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                if (a.length > 2) return c(a, u);
                var n = a[0],
                    i = a[1],
                    o = d(n),
                    r = d(i),
                    m = s(n) + s(i),
                    p = o * r;
                return l(p), p / Math.pow(10, m)
            }

            function m() {
                for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                if (a.length > 2) return c(a, m);
                var n = a[0],
                    i = a[1],
                    o = Math.pow(10, Math.max(s(n), s(i)));
                return (u(n, o) + u(i, o)) / o
            }

            function p() {
                for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                if (a.length > 2) return c(a, p);
                var n = a[0],
                    i = a[1],
                    o = Math.pow(10, Math.max(s(n), s(i)));
                return (u(n, o) - u(i, o)) / o
            }

            function g() {
                for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                if (a.length > 2) return c(a, g);
                var n = a[0],
                    i = a[1],
                    o = d(n),
                    m = d(i);
                return l(o), l(m), u(o / m, r(Math.pow(10, s(i) - s(n))))
            }

            function f(e, a) {
                var t = Math.pow(10, a),
                    n = g(Math.round(Math.abs(u(e, t))), t);
                return e < 0 && 0 !== n && (n = u(n, -1)), n
            }

            function h() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                o = e
            }
            var y = {
                times: u,
                plus: m,
                minus: p,
                divide: g,
                round: f,
                enableBoundaryChecking: h
            };
            a.default = y
        }).call(this, t("ba7c")["default"])
    },
    a2b5: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            loadingPage: {
                loadingText: "正在加载",
                image: "",
                loadingMode: "circle",
                loading: !1,
                bgColor: "#ffffff",
                color: "#C8C8C8",
                fontSize: 19,
                iconSize: 28,
                loadingColor: "#C8C8C8"
            }
        }
    },
    a5ca: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            swiperIndicator: {
                length: 0,
                current: 0,
                indicatorActiveColor: "",
                indicatorInactiveColor: "",
                indicatorMode: "line"
            }
        }
    },
    a75f: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            alert: {
                title: "",
                type: "warning",
                description: "",
                closable: !1,
                showIcon: !1,
                effect: "light",
                center: !1,
                fontSize: 14
            }
        }
    },
    ab54: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            badge: {
                isDot: !1,
                value: "",
                show: !0,
                max: 999,
                type: "error",
                showZero: !1,
                bgColor: null,
                color: null,
                shape: "circle",
                numberType: "overflow",
                offset: function() {
                    return []
                },
                inverted: !1,
                absolute: !1
            }
        }
    },
    af7b: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            countDown: {
                time: 0,
                format: "HH:mm:ss",
                autoStart: !0,
                millisecond: !1
            }
        }
    },
    b0dd: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            cell: {
                customClass: "",
                title: "",
                label: "",
                value: "",
                icon: "",
                disabled: !1,
                border: !0,
                center: !1,
                url: "",
                linkType: "navigateTo",
                clickable: !1,
                isLink: !1,
                required: !1,
                arrowDirection: "",
                iconStyle: {},
                rightIconStyle: {},
                rightIcon: "arrow-right",
                titleStyle: {},
                size: "",
                stop: !0,
                name: ""
            }
        }
    },
    b167: function(e, a, t) {
        "use strict";

        function n(e) {
            return Math.floor(1e4 * e) / 1e4
        }

        function i(e) {
            var a = e.replace(/^0+/, "");
            return "" === a ? "0" : a
        }
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.capitalizeFirstLetter = void 0, a.setLangAttribute = function(e) {
            document.querySelector("html").setAttribute("lang", e)
        }, a.shortText = void 0, a.shortenEmail = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
                n = e.indexOf("@");
            if (n > 0) {
                e.slice(0, n);
                var i = e.slice(n);
                if (e.length > a) {
                    var o = e.slice(0, t) + "**" + i;
                    return o
                }
                return e
            }
            return e
        }, a.useAmountFormat = void 0, a.useFormatAmount = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                t = "".concat(e).includes(".");
            if (t) {
                var n = "".concat(e).split("."),
                    o = n[1].length;
                if (o <= a) {
                    var r = "".concat(n[1]).concat("0".repeat(a - o)),
                        s = "".concat(n[0]).concat(r.slice(0, a));
                    return i(s)
                }
                return i("".concat(n[0]).concat(n[1].slice(0, a)))
            }
            return "".concat(e).concat("0".repeat(a))
        }, t("5c47"), t("a1c1"), t("4626"), t("5ac7"), t("c223"), t("a578"), t("f7a5"), t("e838"), t("5ef2");
        a.useAmountFormat = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            if (e <= 0 && t) return 0;
            var i = "".concat(Math.abs(e)),
                o = "".concat(i).includes(".");
            if (o) {
                var r = "".concat(e).split("."),
                    s = r[1].length,
                    d = r[0].length + s,
                    l = r[0] + r[1],
                    c = a + s;
                if (d <= c) {
                    var u = "0.".concat("0".repeat(c - d)).concat(l);
                    return +u > 0 ? parseFloat(n(+u)) : 0
                }
                var m = "".concat(l.slice(0, d - c), ".").concat(i.slice(d - c));
                return +m > 0 ? parseFloat(n(+m)) : 0
            }
            var p = i.length;
            if (p <= a) {
                var g = "0.".concat("0".repeat(a - p)).concat(i);
                return +g > 0 ? parseFloat(n(+g)) : 0
            }
            var f = "".concat(i.slice(0, p - a), ".").concat(i.slice(p - a));
            return +f > 0 ? parseFloat(n(+f)) : 0
        };
        a.capitalizeFirstLetter = function(e) {
            return e.replace(/^\w/, (function(e) {
                return e.toUpperCase()
            }))
        };
        a.shortText = function(e) {
            var a = e + "";
            if (a.length < 5) return a;
            var t = a.slice(0, 2),
                n = a.slice(-2);
            return "".concat(t, "***").concat(n)
        }
    },
    b267: function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = function(e, a) {
            if (e && !(0, i.default)(a)) return (0, o.default)(e, a);
            return a
        };
        var i = n(t("8950")),
            o = n(t("5a03"))
    },
    b3c0: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            toast: {
                zIndex: 10090,
                loading: !1,
                text: "",
                icon: "",
                type: "",
                loadingMode: "",
                show: "",
                overlay: !1,
                position: "center",
                params: function() {},
                duration: 2e3,
                isTab: !1,
                url: "",
                callback: null,
                back: !1
            }
        }
    },
    b46c: function(e, a, t) {
        var n = t("c86c");
        a = n(!1), a.push([e.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */\n/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */.u-line-1{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button::after{border:none}.u-hover-class{opacity:.7}.u-primary-light{color:#ecf5ff}.u-warning-light{color:#fdf6ec}.u-success-light{color:#f5fff0}.u-error-light{color:#fef0f0}.u-info-light{color:#f4f4f5}.u-primary-light-bg{background-color:#ecf5ff}.u-warning-light-bg{background-color:#fdf6ec}.u-success-light-bg{background-color:#f5fff0}.u-error-light-bg{background-color:#fef0f0}.u-info-light-bg{background-color:#f4f4f5}.u-primary-dark{color:#398ade}.u-warning-dark{color:#f1a532}.u-success-dark{color:#53c21d}.u-error-dark{color:#e45656}.u-info-dark{color:#767a82}.u-primary-dark-bg{background-color:#398ade}.u-warning-dark-bg{background-color:#f1a532}.u-success-dark-bg{background-color:#53c21d}.u-error-dark-bg{background-color:#e45656}.u-info-dark-bg{background-color:#767a82}.u-primary-disabled{color:#9acafc}.u-warning-disabled{color:#f9d39b}.u-success-disabled{color:#a9e08f}.u-error-disabled{color:#f7b2b2}.u-info-disabled{color:#c4c6c9}.u-primary{color:#3c9cff}.u-warning{color:#f9ae3d}.u-success{color:#5ac725}.u-error{color:#f56c6c}.u-info{color:#909399}.u-primary-bg{background-color:#3c9cff}.u-warning-bg{background-color:#f9ae3d}.u-success-bg{background-color:#5ac725}.u-error-bg{background-color:#f56c6c}.u-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909193}.u-light-color{color:#c0c4cc}.u-safe-area-inset-top{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}\n/*通用 */html[lang="ar"]{direction:rtl}html[lang="ar"] body{font-family:Amiri,Scheherazade,Noto Naskh Arabic,Droid Arabic Naskh,Arial,Tahoma,Times New Roman,serif;font-size:%?32?%}body{background-color:#0f0f0f;font-size:%?28?%;font-family:Open Sans}uni-view{line-height:1.5;box-sizing:border-box;color:#fff}uni-progress,\nuni-checkbox-group{width:100%}uni-form{width:100%}uni-page-body{height:100%}\n/* 隐藏页面切换的 loading 动画 */uni-page-loading, .uni-page-loading{display:none!important}uni-input{display:block;font-size:%?28?%;line-height:%?70?%;height:%?70?%;min-height:%?70?%;overflow:hidden}.flex, .uni-flex{display:flex}.uni-flex-item{flex:1}.uni-row{flex-direction:row}.uni-column{flex-direction:column}.uni-column-end{display:flex;flex-direction:column;align-items:flex-end}.uni-flex-wrap{display:flex;flex-wrap:wrap}.flex-center__sb{display:flex;justify-content:space-between;align-items:center}.flex-center__sa{display:flex;justify-content:space-around;align-items:center}.flex-center__center{display:flex;justify-content:center;align-items:center}.justify-content__sb{display:flex;justify-content:space-between}.flex_center__end{display:flex;align-items:center;justify-content:flex-end}.align-items__center, .flex-center{display:flex;align-items:center}.flex-direction__column{flex-direction:column}\n/* 文本色 */.uni-red, .uni-color-error{color:#ff4267!important}.uni-warning, .uni-color-warning{color:#e69c66}.uni-green, .uni-text-primary, .uni-color-success{color:#baed5b!important}.uni-color-primary{color:#8479f3}.uni-placeholder, .uni-color-grey{color:#bbb!important}.uni-text-color{color:#fff}.uni-link{color:#576b95;font-size:%?26?%}.uni-center{text-align:center}.uni-font-weight{font-weight:700}.uni-inline-item{display:flex;flex-direction:row;align-items:center}.uni-inline-item uni-text{margin-right:%?20?%}.uni-inline-item uni-text:last-child{margin-right:%?0?%;margin-left:%?20?%}\n/* 文本溢出隐藏 */.uni-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.uni-break{word-break:break-all}\n/* 背景色 */.uni-bg-red, .uni-bg-error{background:#ff4267!important;color:#fff}.uni-bg-green{background:#baed5b!important;color:#fff}.uni-bg-blue, .uni-bg-primary{background:#8479f3!important;color:#fff}.uni-bg-white{background:#fff!important;color:#64b36a}.uni-blue{color:#3c9cff}.uni-text-grey{color:#999}.uni-color-second{color:silver}.uni-page{padding:%?20?% %?40?% %?160?%}.uni-primary-btn{height:%?88?%;background:#4166d8;box-shadow:%?0?% %?10?% %?10?% %?0?% rgba(22,80,226,.3);border-radius:%?12?%;color:#fff;font-size:%?36?%}.uni-default-btn{height:%?88?%;background:#fff;box-shadow:%?0?% %?10?% %?10?% %?0?% rgba(22,80,226,.16);border-radius:%?12?%;color:#4166d8;font-size:%?36?%;border:%?2?% solid #4166d8}.uni-card{background-color:#fff;font-weight:500;box-shadow:%?0?% %?4?% %?20?% %?2?% hsla(0,0%,60%,.2);border-radius:%?8?%;padding:%?30?% %?40?%}\n/* 表单 */.uni-form-item{display:flex;width:100%;padding:%?10?% 0}.uni-form-item .title{padding:%?10?% %?25?%;font-size:%?28?%;color:#999}.uni-label{width:%?210?%;word-wrap:break-word;word-break:break-all;text-indent:%?20?%}.uni-label-font{font-size:%?34?%;font-weight:500;color:rgba(0,0,0,.8)}.uni-input{background:#f8f8f8;width:%?382?%;height:%?80?%;border-radius:%?4?%;padding:0 %?22?%;font-weight:400;font-size:%?30?%}uni-radio-group, uni-checkbox-group{width:100%}uni-radio-group uni-label, uni-checkbox-group uni-label{padding-right:%?20?%}.uni-form-item .with-fun{display:flex;flex-wrap:nowrap;background:#fff}.uni-form-item .with-fun .uni-icon{width:40px;height:%?80?%;line-height:%?80?%;flex-shrink:0}.uni-input-placeholder, .uni-input-input:placeholder{color:hsla(0,0%,100%,.4)}.navbar-fixed{position:fixed!important;width:100%;left:0;top:44px;z-index:996}uni-button{margin:0}\n/* footer */.footer{width:100%;text-align:center;position:fixed;bottom:0;left:0;background-color:#fff;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);z-index:999}.footer-absolute{position:absolute}.footer-relative{position:relative}.footer-inner{background-color:#fff;width:100%;height:%?100?%;line-height:%?100?%;font-size:%?40?%;display:flex;align-items:center;justify-content:center}.online-color{color:#4166d8}.offline-color{color:#999}.normal-color{font-size:%?24?%;color:silver}uni-input:-webkit-autofill{-webkit-box-shadow:0 0 0 0 transparent inset!important}uni-input:-internal-autofill-previewed,\nuni-input:-internal-autofill-selected{background-color:initial!important;background-image:none;-webkit-text-fill-color:transparent!important}uni-input:-internal-autofill-selected{background-color:initial!important}uni-modal .uni-modal{background-color:#21232b;border-radius:%?16?%;color:#fff}uni-modal .uni-modal .uni-modal__bd{word-break:break-word}uni-modal .uni-modal__btn:after, uni-modal .uni-modal__ft:after{border-color:#666}uni-modal .uni-modal__btn:active{background-color:initial}uni-toast .uni-simple-toast__text{background-color:#1a1a1a}.bold{font-weight:700}.u-line-progress__line{transition:none!important}.container{padding:calc(0px + %?32?%) %?32?% %?32?% %?32?%}uni-modal{z-index:99999}.tab-item{min-width:%?140?%;height:%?84?%;line-height:%?84?%;background-color:#1a1a1a;border-radius:%?50?%;text-align:center;padding:0 %?24?%;margin-right:%?24?%;margin-bottom:%?24?%}.tab-item.active{background-color:#0067f4}.login{padding:%?100?% %?48?% %?48?%;height:100vh}.login-back{width:%?64?%;height:%?64?%}.login-logo{display:flex;align-items:center}.login-logo .logo{width:%?70?%;height:%?70?%}.login-logo .title{font-size:%?36?%;padding:0 %?20?%;font-weight:700}.login-title{font-size:%?64?%;font-weight:700;line-height:%?75?%;padding-top:%?64?%}.login-form{padding-top:%?64?%}.login-footer{display:flex;justify-content:center;align-items:center;height:%?270?%;width:100%;font-size:%?24?%;flex:0 0 %?270?%}.login-footer .text{margin:0 %?12?%}.form-item{width:100%;height:%?92?%;background-color:#292929;border-radius:%?46?%;position:relative;margin-bottom:%?32?%;padding:0 %?28?%}.form-item .icon-eye{position:absolute;right:%?28?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.form-item:last-child{margin-bottom:0}.form-item__half{flex:1}.form-item__address{word-break:break-word}.form-item__placeholder{color:grey}.form-item + .verification{min-width:%?160?%;height:%?92?%;line-height:%?92?%;text-align:center;border-radius:%?46?%;background-color:#292929;margin-left:%?24?%;overflow:hidden}.form-forget{text-align:right;font-size:%?24?%}.form-tip{padding:%?48?% 0;text-align:center;color:hsla(0,0%,100%,.6)}.form-tip span{color:#fff}.form-submit{margin-top:%?64?%}.form-submit .btn{height:%?92?%;line-height:%?92?%;background-color:#0067f4;box-shadow:%?0?% %?0?% %?0?% %?2?% #2f1fcc;border-radius:%?46?%;font-size:%?32?%;color:#fff}.tip-box{background:#1a1a1a;border-radius:%?16?%;padding:%?24?%;margin-top:%?64?%}.tip-box__hd--text{padding:0 %?16?%;font-size:%?28?%;font-weight:500}.tip-box__bd, .tip-box__item{color:silver;font-size:%?24?%;line-height:%?32?%;padding-left:%?64?%;padding-top:%?24?%}.tip-box__item{position:relative}.tip-box__item::before{content:"";width:%?10?%;height:%?10?%;border-radius:50%;background-color:silver;position:absolute;left:%?40?%;top:%?34?%}.wallet-opt{margin-top:%?32?%}.wallet-opt .opt-item{width:%?190?%;padding:%?20?% 0;text-align:center}.wallet-opt .opt-item__icon{justify-content:center}.wallet-opt .opt-item__title{font-size:%?24?%;padding-top:%?6?%}.popup-box{width:100%;padding:0 %?48?% %?80?%;color:silver}.popup-box__hd{height:%?128?%;font-size:%?40?%;font-weight:600}.popup-box__hd .close-box{width:%?48?%;height:%?48?%;background-color:#373940;border-radius:50%}.popup-box__bd{padding-top:%?48?%}.popup-box .number-step{width:100%;height:%?102?%;background-color:#1a1a1a;border-radius:%?56?%}.popup-box .number-step__box{height:100%;padding:0 %?6?%}.popup-box .number-step__minus, .popup-box .number-step__plus{width:%?90?%;height:%?90?%;background-color:#0f0f0f;border-radius:%?45?%}.popup-box .number-step__input{flex:1;text-align:center;font-size:%?40?%;font-weight:600}.popup-box__tip{padding-top:%?48?%;color:silver}.popup-box__tip .val{color:#fff;padding:0 %?12?%}.popup-box__ft{height:%?92?%;line-height:%?92?%;text-align:center;background-color:#3f2ee5;box-shadow:%?0?% %?0?% %?0?% %?2?% #2f1fcc;border-radius:%?46?%;margin-top:%?80?%}.popup-box .checkbox-label{position:relative}.popup-box .checkbox-label__box{position:absolute;left:0;top:0;z-index:1;opacity:0}.popup-box .checkbox-label__tip{padding:0 %?12?%;color:silver}.popup-box .checkbox-label__tip.active{color:#fff}.record-icon{margin-left:%?18?%}.wallet-card{width:100%;padding:%?32?%;background-color:#0067f4;border-radius:%?16?%;margin-top:%?24?%}.wallet-card__bd{align-items:flex-end;flex-wrap:wrap;padding-top:%?20?%}.wallet-card__bd .amount{font-size:%?56?%;font-weight:600;line-height:1}.wallet-card__bd .unit{margin-left:%?16?%}.wallet-tab{margin-top:%?80?%}.wallet-tab__item{min-width:%?170?%}.unit{font-size:%?24?%;color:silver}.empty-box{margin-top:%?100?%}html[lang="ar"] .u-icon__icon, html[lang="ar"] .wallet-fund .more, html[lang="ar"] .record-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}html[lang="ar"] .home-header__icon{margin-left:0;margin-right:%?32?%}html[lang="ar"] .home-list__item .percent{text-align:left}html[lang="ar"] .trade-list__item .info-buy{right:auto;left:0}html[lang="ar"] .team-invite__label{text-align:left;padding-left:%?32?%}html[lang="ar"] .form-item + .verification{margin-left:0;margin-right:%?24?%}html[lang="ar"] .form-item .icon-eye, html[lang="ar"] .form-item .unit, html[lang="ar"] .exchage-box .form-item .unit{right:auto;left:%?28?%}html[lang="ar"] .tab-item{margin-right:0;margin-left:%?24?%}html[lang="ar"] .security-tab .tab-item{margin-left:0}html[lang="ar"] .wallet-center__bottom .value{margin-right:0;margin-left:%?20?%}html[lang="ar"] .wallet-fund .more{margin-top:0}html[lang="ar"] .fund-item__content{margin-left:0;margin-right:%?32?%}html[lang="ar"] .fund-item .content-amount{text-align:left}html[lang="ar"] .record-icon{margin-left:0;margin-right:%?18?%}html[lang="ar"] .tip-box__bd, html[lang="ar"] .tip-box__item{padding-right:%?64?%;padding-left:0}html[lang="ar"] .tip-box__item::before{left:auto;right:%?40?%}', ""]), e.exports = a
    },
    b5ba: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            statusBar: {
                bgColor: "transparent"
            }
        }
    },
    bb1b: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            indexAnchor: {
                text: "",
                color: "#606266",
                size: 14,
                bgColor: "#dedede",
                height: 32
            }
        }
    },
    bc4e: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            text: {
                type: "",
                show: !0,
                text: "",
                prefixIcon: "",
                suffixIcon: "",
                mode: "",
                href: "",
                format: "",
                call: !1,
                openType: "",
                bold: !1,
                block: !1,
                lines: "",
                color: "#303133",
                size: 15,
                iconStyle: function() {
                    return {
                        fontSize: "15px"
                    }
                },
                decoration: "none",
                margin: 0,
                lineHeight: "",
                align: "left",
                wordWrap: "normal"
            }
        }
    },
    bc9e: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            circleProgress: {
                percentage: 30
            }
        }
    },
    bcc8: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            keyboard: {
                mode: "number",
                dotDisabled: !1,
                tooltip: !0,
                showTips: !0,
                tips: "",
                showCancel: !0,
                showConfirm: !0,
                random: !1,
                safeAreaInsetBottom: !0,
                closeOnClickOverlay: !0,
                show: !1,
                overlay: !0,
                zIndex: 10075,
                cancelText: "取消",
                confirmText: "确定",
                autoChange: !1
            }
        }
    },
    c13d: function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("0298")),
            o = i.default.color,
            r = {
                link: {
                    color: o["u-primary"],
                    fontSize: 15,
                    underLine: !1,
                    href: "",
                    mpTips: "链接已复制，请在浏览器打开",
                    lineColor: "",
                    text: ""
                }
            };
        a.default = r
    },
    c145: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            switch: {
                loading: !1,
                disabled: !1,
                size: 25,
                activeColor: "#2979ff",
                inactiveColor: "#ffffff",
                value: !1,
                activeValue: !0,
                inactiveValue: !1,
                asyncChange: !1,
                space: 0
            }
        }
    },
    c1ae: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            tabbarItem: {
                name: null,
                icon: "",
                badge: null,
                dot: !1,
                text: "",
                badgeStyle: "top: 6px;right:2px;"
            }
        }
    },
    c31d: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            listItem: {
                anchor: ""
            }
        }
    },
    c6be: function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"홈","index.trade":"거래","index.my":"나의","userAuth.email":"이메일","userAuth.password":"비밀번호","userAuth.forgetPassword":"비밀번호를 잊으셨나요?","userAuth.forget":"잊어버리다","userAuth.reset":"재설정","userAuth.changePassword":"비밀번호 변경","userAuth.newPassword":"새 비밀번호","userAuth.confirmPassword":"비밀번호 확인","userAuth.loginTitle":"계정으로 로그인","userAuth.signin":"로그인","userAuth.signup":"가입하기","userAuth.noAccount":"계정이 없으신가요?","userAuth.haveAccount":"이미 계정이 있으신가요?","userAuth.fundPassword":"자금 비밀번호","userAuth.verificationCode":"인증 코드","userAuth.referralCode":"추천 코드","userAuth.send":"전송","userAuth.resend":"재전송","userAuth.exipires":"<span class=\'time uni-text-color\'>10</span> 분 후 만료됩니다.","userAuth.logging":"로그인 중","message.email":"이메일을 입력하세요","message.password":"비밀번호를 입력하세요","message.newPassword":"새 비밀번호를 입력하세요","message.fundPassword":"자금 비밀번호를 입력하세요","message.confirmPassword":"비밀번호를 확인하세요","message.confirmPasswordError":"비밀번호 확인 오류","message.imgCode":"이미지 인증 코드를 입력하세요","message.verificationCode":"인증 코드를 입력하세요","message.bnbAddress":"BNB 지갑 주소를 입력하세요","message.trxAddress":"TRX 지갑 주소를 입력하세요","message.logout":"정말 로그아웃 하시겠습니까?","message.qty":"수량을 입력하세요","message.mocNum":"MTC 코인 수량을 입력하세요","message.buySuccess":"축하합니다, 구매가 성공했습니다!","message.success":"성공","message.copySuccess":"복사 성공","message.amount":"금액을 입력하세요","todayearn":"오늘 수익","totalwarn":"총 수익","mymoc":"내 MTC","myteam":"내 팀","people":"사람들","tips":"팁","tip":"팁","all":"전체","amount":"금액","record":"기록","address":"주소","exchange":"교환","qty":"수량","buy":"구매","buyNow":"지금 구매","balance":"잔액","account":"계정","accountBalance":"계정 잔액","digitalToken":"디지털 토큰","convert":"변환","confirm":"확인","error":"오류","ok":"확인","home.mocmarket":"MTC 시장 동향","home.market":"주요 동향","home.tip":"암호화폐 거래 시 합리적인 마음가짐으로 관리하고, 투자를 다각화하여 리스크를 관리하십시오. 구매 전 철저한 연구를 하고, 장기 보유를 고려하십시오. 안전한 플랫폼에서 신중하게 거래하고, 시장 동향을 파악하여 정보에 기반한 결정을 내리십시오.","trade.solo1":"NFT 스테이킹을 통한","trade.solo2":"저위험 수익을 달성합니다.","trade.solo3":"프로핏.","trade.lowRisk":"저위험","trade.shortTerm":"단기","trade.highStable":"높은 안정성","trade.dailyYield":"일일 수익률","trade.investPeriod":"투자 기간","trade.buy":"구매","trade.autoReinvestment":"자동 재투자","trade.autoReinvestmentTip":"자동 재투자: 빠르게 자금을 재활용하여 더 많은 이윤을 올리도록 돕습니다.","language.title":"언어","my.order":"내 스테이킹 마이닝","my.team":"내 팀","my.invite":"친구 초대","my.security":"보안 설정","my.download":"앱 다운로드","my.about":"회사 소개","my.appVersion":"앱 버전","my.logout":"로그아웃","customer.service":"고객 서비스","customer.group":"그룹","customer.person":"개인","customer.tip":"{appName} 앱을 열 수 없습니다. {appName}이 설치되어 있는지 확인하세요.","wallet.title":"내 지갑","wallet.nftRelease":"NFT 출시","wallet.nftReleaseTip":"NFT를 출시하시겠습니까?","wallet.releaseSuccess":"출시 성공","wallet.mocRelease":"MTC 출시","wallet.history":"거래 내역","wallet.all":"전체","fundType":"거래 유형","recharge":"충전","rechargeProfit":"입금 환급","withdraw":"출금","commission":"수수료 수익","gift":"플랫폼 선물","inviteProfit":"추천 수수료","staking":"스테이킹","stakingProfit":"스테이킹 수익","unstaking":"NFT 교환","purchaseMtc":"MTC 코인 구매","moc2Usdt":"MTC에서 USDT로","usdt2Mtc":"USDT에서 MTC로","recharge.tip":"{walletType} 네트워크를 통해 USDT를 충전하십시오. 제출 후 잠시 기다려 주시고, 거래가 1-2분 이내에 도착했는지 확인하십시오.","withdraw.address":"{withdrawalType} 지갑 출금 주소","withdraw.tip":"최소 출금 금액: <span class=\'uni-text-color\'>{min} USDT</span>, 거래 당 수수료는 <span class=\'uni-text-color\'>{fee}%</span>입니다.","withdraw.amount":"USDT 금액","withdraw.submit":"출금","security.login":"로그인","security.fund":"자금","security.setting":"설정","security.tip":"인증 코드가 <span class=\'uni-text-color\'>{account}</span> 이메일로 발송됩니다.","invite.title":"【 스캔 및 등록 】","invite.code":"초대 코드","invite.copyCode":"코드 복사","invite.copyLink":"링크 복사","invite.tip":"친구를 초대하여 첫 입금을 유도하면, 플랫폼에서는 입금 금액의 <span>{inviteProfit}%</span> 및 그 이후 수익의 <span>{levelProfit}%</span>을 제공합니다.","download.title":"【 Scan and Download 】","download.android":"Android 앱","team.totalCommissions":"총 수수료","team.todayCommissions":"오늘의 수수료","team.performance":"팀 성과","team.nft":"팀 스테이킹","team.member":"팀 멤버","team.staking":"팀이 완료한 NFT","team.product":"팀 마이닝 번호","team.referralCode":"추천 코드","team.detail":"세부 정보 보기","team.myEarnings":"내 수익","order.count":"총 NFT","order.stakedNft":"스테이킹 금액","order.unStakedNft":"종료된 스테이킹 금액","order.expectedEarnings":"예상 수익","order.releasedEarnings":"출시된 수익","order.expected":"예상","order.investPeriod":"투자 기간","order.mining":"마이닝","order.completed":"완료됨","order.earnings":"수익","order.autoReinvestment":"자동 재투자","moc.center":"MTC 센터","moc.myMtc":"내 MTC","moc.num":"MTC 코인 수량","moc.currentPrice":"MTC 가격","moc.discountPrice":"Mtc 할인 가격","moc.price":"가격","moc.available":"사용 가능","moc.rule":"규칙","moc.rule1":"스테이크된 각 NFT 당 MTC 코인을 수령하며 수익의 {productPercent}%에 해당하는 MTC 코인을 받게 됩니다.","moc.rule2":"MTC 코인을 이자로 받으려면 먼저 스테이크해야 합니다. 스테이킹 후에는 언스테이크할 때까지 교환할 수 없습니다.","moc.rule3":"MTC 코인은 MTC 코인의 실시간 시장 가치를 기준으로 USDT로 교환할 수 있습니다.","moc.staking":"스테이킹","moc.unstaking":"언스테이킹","moc.stakingProfit":"MTC 스테이킹 수익","moc.activity":"{percent}% 할인된 MTC","moc.activity.holdings":"보유량","moc.activity.buy":"MTC 구매","moc.activity.ended":"MTC 이벤트 종료","moc.activity.subscription":"구독 확인 진행 중입니다. 잠시만 기다려 주세요.","moc.activity.progress":"구독 확인 진행 중입니다. 잠시만 기다려 주세요.","moc.activity.rule1":"프로모션 기간: {start} - {end}","moc.activity.rule2":"이번 이벤트의 모든 MTC 코인은 {percent}% 할인된 가격에 구독 가능합니다.","moc.activity.rule3":"스테이크된 NFT 수량을 기준으로 MTC 토큰을 구독할 수 있습니다. 구독하는 MTC 코인의 USDT 동등 가치는 최초 경매될 예정입니다.","moc.activity.rule4":"MTC 코인의 수량은 한정적입니다. 선착순으로 이벤트에 참여하시기 바랍니다. 구독이 완료되면 이벤트가 종료됩니다.","moc.activity.noHoldings":"보유 없음","notice.title":"내 공지사항","trans.notCredited":"입금되지 않았습니까?","trans.hash":"{walletType} 거래 해시","trans.hashSuccess":"{walletType} 거래 조회 성공","trans.hashError":"{walletType} 거래 해시를 입력하세요","message.amountMinimum":"최소 출금 금액: {min} USDT","message.loging":"로그인 중","message.withdrawSucces":"출금 요청이 성공적으로 제출되었습니다.","withdrawFee":"출금 거부","message.cancelContinuity":"연속성을 취소하시겠습니까?","withdrawTime":"출금 시간은 매일 {start}에서 {end}까지입니다 (UTC).","Token create error":"토큰 생성 오류","Sending too frequently, please try again later":"너무 자주 전송하였습니다. 잠시 후 다시 시도해 주세요.","Sys error, not email can send":"시스템 오류, 이메일을 보낼 수 없습니다","Sys error, email send error":"시스템 오류, 이메일 전송 오류","Error request":"잘못된 요청","You can\'t login":"로그인할 수 없습니다","Please input the email":"이메일을 입력하세요","Unsupported email suffix":"지원되지 않는 이메일 접미사","Email is exist":"해당 이메일이 이미 존재합니다","Email is not exist":"해당 이메일이 존재하지 않습니다","Not the correct email address":"올바른 이메일 주소가 아닙니다","Payment password must be greater than or equal to 6 digits":"결제 비밀번호는 6자 이상이어야 합니다","Password must be greater than or equal to 6 digits":"비밀번호는 6자 이상이어야 합니다","Please input the password":"비밀번호를 입력하세요","Please input the Payment password":"결제 비밀번호를 입력하세요","The original password is incorrect":"원래 비밀번호가 잘못되었습니다","Please input the verification code":"확인 코드를 입력하세요","The verification code is incorrect or has expired. Please obtain it again":"확인 코드가 잘못되었거나 만료되었습니다. 다시 가져오세요","The verification code is incorrect":"확인 코드가 잘못되었습니다","Account or password error":"계정 또는 비밀번호 오류","Payment password error":"결제 비밀번호 오류","Please input start time":"시작 시간을 입력하세요","Please input end time":"종료 시간을 입력하세요","Please verify account":"계정을 확인하세요","Product not exist":"제품이 존재하지 않습니다","Product Suspend sales":"제품 판매 중지","Insufficient balance":"잔액이 부족합니다","Balance too little":"잔액이 너무 적습니다","Product income":"제품 수익","Buy product":"제품 구매","Buy platform coin":"MTC 코인 구매","recharge back":"충전 환불","error add":"오류 추가","coin exchange amount":"MTC 코인 교환 금액","coin interest":"MTC 코인 이자","coin is staking please cancel staking":"MTC 코인이 스테이킹 중입니다. 스테이킹을 취소하세요","Platform change":"플랫폼 변경","withdraw refuse":"인출 거부","Not meeting the minimum withdrawal amount":"최소 인출 금액을 충족하지 않음","Not yet due for withdrawal time":"아직 인출 가능한 시간이 아님","Please verify email":"이메일을 확인하세요","Activity amount must greater in progress product total amount":"활동 금액은 현재 진행 중인 제품 총 금액보다 커야 합니다","Insufficient quantity":"MTC 토큰이 매진되었습니다","Activity not exist":"할인 활동이 존재하지 않습니다","Buy activity":"할인된 MTC 코인 구매","Not Start":"할인 활동이 아직 시작되지 않음","Is over":"할인 활동이 종료되었습니다","Create address error":"주소 생성 오류","Not a correct address":"올바른 주소가 아닙니다","Processed":"처리됨","Out wallet password is empty":"외부 지갑 비밀번호가 비어 있습니다","Trans error please check wallet":"트랜스 에러, 지갑을 확인하세요","Please input trans hash":"트랜스 해시를 입력하세요","Please input coin type":"네트워크 유형을 선택하세요","Not Find Trans":"트랜스를 찾을 수 없음","Transaction processed":"거래가 처리되었습니다","Transaction does not belong to you":"해당 거래는 당신의 것이 아닙니다","Transaction does not USDT":"해당 거래는 USDT가 아닙니다","Channel":"채널","Consultation":"상담","Consult":"상담하다","Group":"그룹","nonWithdrawAmount":"출금 불가능 금액","checkIn":"출석","checkInTip":"오늘 출석이 완료되었습니다!","Today Has Sign In":"오늘 이미 출석 완료","todayChecked":"오늘 이미 출석 완료","registerGift":"회원가입 선물","dailyCheckIn":"매일 출석","withdraw.addressSetting":"{withdrawalType} 출금 주소를 설정해주세요","trade.open":"오픈됨","trade.noOpen":"미오픈","trade.noOpen.message":"상품 미오픈","NFT Staking Mining":"NFT 스테이킹 마이닝","days":"일","hours":"시","minutes":"분","index.wallet":"지갑","index.mtcCenter":"MTC센터","index.myNft":"내 NFT","mata.title":"ATANFT 소개","mata.intro1":"ATANFT 채굴은 Manta Network의 프라이버시 생태계를 기반으로, \'프라이버시 NFT 보유 및 생태계 기여\'를 중심으로 설계된 토큰 보상 시스템입니다. 채굴을 통해 사용자가 ATANFT의 유통, 활용 및 생태계 구축에 참여하도록 유도하고, Manta 프라이버시 자산 시스템의 활성화를 강화하는 것을 목표로 합니다. 참여자는 주로 스테이킹 및 상호작용을 통해 MTC 토큰 또는 전용 프라이버시 NFT 보상을 획득합니다.","mata.intro2":"채굴 모델은 \'프라이버시 속성 + 생태계 연동\'을 핵심으로 하며, 두 가지 주요 유형으로 나뉩니다:","mata.intro3":"<text class=\'bold\'>스테이킹 채굴</text>: 사용자가 보유한 ATANFT(일반 디지털 수집품, SBT 신원 증명 등)를 지정된 스마트 계약에 스테이킹합니다. ATANFT의 희소성(예: 제네시스, 한정판), 보유 기간, 프라이버시 거래 기록에 따라 수익을 계산합니다. 예를 들어, \'프라이버시 신원 ATANFT\'를 스테이킹하면 기본 연간 수익을 얻을 수 있으며, \'영지식 증명 거래\'(MantaPay를 통한 프라이버시 전송)를 활성화하면 보너스 계수가 10%-20% 증가합니다. 수익은 매일 MTC 토큰으로 지급됩니다.","mata.intro4":"<text class=\'bold\'>생태계 상호작용 채굴</text>: 사용자가 Manta 생태계에서 ATANFT를 사용해 특정 미션을 완료하도록 장려합니다. 예: ATANFT를 블록체인 게임의 캐릭터 또는 아이템으로 통합, MantaSwap 같은 DeFi 모듈에서 LP 담보로 활용, 신규 사용자가 첫 번째 ATANFT를 민트하도록 초대 등. 미션에 따라 포인트가 부여되며, 일정 포인트에 도달하면 높은 스테이킹 수익을 제공하는 \'기념 ATANFT\' 또는 MTC 토큰으로 교환할 수 있습니다. 크로스체인 프라이버시 NFT 전송과 같은 고난도 미션 완료 시 한정 보상을 해제할 수 있습니다.","token.rule1":"사용자는 구매한 ATANFT를 지정된 스마트 계약에 스테이킹합니다. 수익은 ATANFT의 희소성에 따라 계산되며, 2시간마다 자동으로 계정에 적립됩니다.","token.rule2":"MTC 토큰은 시장 가격에 따라 USDT로 교환할 수 있습니다.","trade.pay":"결제 금액","trade.pay.tip":"각 ATANFT 가격은 {amount} USDT입니다. 구매 금액은 {amount} USDT의 정수 배여야 합니다 (예: {amount1} USDT, {amount2} USDT).","trade.intro":"Crazy Monkey NFT는 독창적인 디자인과 한정판 특성으로 매번 수집할 때마다 놀라운 가치를 제공합니다.","investPeriod":"스테이킹 기간","order.cumulativeIncome":"누적 수익","order.amount":"금액","order.num":"수량","agencyRebate":"대리점 리베이트","order.doing":"진행 중","order.history":"기록","registerTime":"등록 시간","stakingBackProfit":"추천 리베이트","exchange.fee":"수수료","trade.sale":"판매 중","trade.sold":"품절","trade.sold.message":"오늘 판매 완료","order.staked":"{day}일 동안 스테이킹됨","order.completed.time":"종료 시간","order.completed.time1":"만기 시간: {time}","team.totalRecharge":"누적 충전","trade.numWarning":"NFT 수량이 부족합니다","Insufficient NFT quantity":"NFT 수량이 부족합니다","token.buy":"구매","token.sell":"판매","token.noOpen":"아직 열리지 않았습니다","token.transaction":"거래","wallet.withdraw.tip":"최소 출금액: <span class=\'uni-text-color\'>{min} USDT</span>, 거래당 <span class=\'uni-text-color\'>{fee}%</span>의 수수료가 부과됩니다.","wallet.withdraw.tipTwo":"입금 시간: 출금은 <span class=\'uni-text-color\'>{time}</span>시간 이내에 지갑에 입금됩니다.","wallet.withdraw.tipOne":"출금 시간: 시스템 시간 <span class=\'uni-text-color\'>{start}</span> ~ <span class=\'uni-text-color\'>{end}</span>.","star.user":"스타 플레이어"}')
    },
    c7ae: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            form: {
                model: function() {
                    return {}
                },
                rules: function() {
                    return {}
                },
                errorType: "message",
                borderBottom: !0,
                labelPosition: "left",
                labelWidth: 45,
                labelAlign: "left",
                labelStyle: function() {
                    return {}
                }
            }
        }
    },
    cebd: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            grid: {
                col: 3,
                border: !1,
                align: "left"
            }
        }
    },
    d677: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            picker: {
                show: !1,
                showToolbar: !0,
                title: "",
                columns: function() {
                    return []
                },
                loading: !1,
                itemHeight: 44,
                cancelText: "取消",
                confirmText: "确定",
                cancelColor: "#909193",
                confirmColor: "#3c9cff",
                visibleItemCount: 5,
                keyName: "text",
                closeOnClickOverlay: !1,
                defaultIndex: function() {
                    return []
                },
                immediateChange: !1
            }
        }
    },
    d7ec: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            empty: {
                icon: "",
                text: "",
                textColor: "#c0c4cc",
                textSize: 14,
                iconColor: "#c0c4cc",
                iconSize: 90,
                mode: "data",
                width: 160,
                height: 160,
                show: !0,
                marginTop: 0
            }
        }
    },
    d808: function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("0298")),
            o = i.default.color,
            r = {
                icon: {
                    name: "",
                    color: o["u-content-color"],
                    size: "16px",
                    bold: !1,
                    index: "",
                    hoverClass: "",
                    customPrefix: "uicon",
                    label: "",
                    labelPos: "right",
                    labelSize: "15px",
                    labelColor: o["u-content-color"],
                    space: "3px",
                    imgMode: "",
                    width: "",
                    height: "",
                    top: 0,
                    stop: !1
                }
            };
        a.default = r
    },
    d897: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            columnNotice: {
                text: "",
                icon: "volume",
                mode: "",
                color: "#f9ae3d",
                bgColor: "#fdf6ec",
                fontSize: 14,
                speed: 80,
                step: !1,
                duration: 1500,
                disableTouch: !0
            }
        }
    },
    d929: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            radioGroup: {
                value: "",
                disabled: !1,
                shape: "circle",
                activeColor: "#2979ff",
                inactiveColor: "#c8c9cc",
                name: "",
                size: 18,
                placement: "row",
                label: "",
                labelColor: "#303133",
                labelSize: 14,
                labelDisabled: !1,
                iconColor: "#ffffff",
                iconSize: 12,
                borderBottom: !1,
                iconPlacement: "left"
            }
        }
    },
    d9c4: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            gap: {
                bgColor: "transparent",
                height: 20,
                marginTop: 0,
                marginBottom: 0,
                customStyle: {}
            }
        }
    },
    d9cc: function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"Home","index.trade":"Commercio","index.my":"Il Mio","userAuth.email":"Email","userAuth.password":"Password","userAuth.forgetPassword":"Password dimenticata?","userAuth.forget":"Dimentica","userAuth.reset":"Reset","userAuth.changePassword":"Cambia password","userAuth.newPassword":"Nuova password","userAuth.confirmPassword":"Conferma password","userAuth.loginTitle":"Accedi al tuo account","userAuth.signin":"Accedi","userAuth.signup":"Registrati","userAuth.noAccount":"Non hai un account?","userAuth.haveAccount":"Hai già un account?","userAuth.fundPassword":"Password del fondo","userAuth.verificationCode":"Codice di verifica","userAuth.referralCode":"Codice di riferimento","userAuth.send":"Invia","userAuth.resend":"Mengirim Ulang","userAuth.exipires":"scade in <span class=\'time uni-text-color\'>10</span> minuti.","userAuth.logging":"accesso in corso","message.email":"Inserisci la tua email","message.password":"Inserisci la tua password","message.newPassword":"Inserisci la tua nuova password","message.fundPassword":"Inserisci la tua password di fondo","message.confirmPassword":"Conferma la tua password","message.confirmPasswordError":"Errore di conferma della password","message.imgCode":"Inserisci il codice di verifica dell\'immagine","message.verificationCode":"Inserisci il codice di verifica","message.bnbAddress":"Inserisci il tuo indirizzo del portafoglio BNB","message.trxAddress":"Inserisci il tuo indirizzo del portafoglio TRX","message.logout":"Sei sicuro di voler uscire?","message.qty":"Inserisci la quantità","message.mocNum":"Inserisci il numero di token MTC","message.buySuccess":"Congratulazioni, acquisto riuscito!","message.success":"Successo","message.copySuccess":"Copia riuscita","message.amount":"Per favore inserisci l\'importo","todayearn":"Guadagni di oggi","totalwarn":"Guadagni totali","mymoc":"Il mio MTC","myteam":"Il mio team","people":"Persone","tips":"Consigli","tip":"Suggerimento","all":"Tutto","amount":"Importo","record":"Registro","address":"Indirizzo","exchange":"Scambio","qty":"QTY","buy":"Acquista","buyNow":"Acquista ora","balance":"Bilancio","account":"Account","accountBalance":"Saldo dell\'account","digitalToken":"Token digitale","convert":"Converti","confirm":"Conferma","error":"Errore","ok":"OK","home.mocmarket":"Tendenze del mercato MTC","home.market":"Tendenze principali","home.tip":"Scambia criptovalute con una mentalità razionale, gestisci i rischi diversificando gli investimenti, effettua ricerche approfondite prima di acquistare, considera il mantenimento a lungo termine, commercia con cautela su piattaforme sicure e rimani aggiornato sulle tendenze di mercato per decisioni informate.","trade.solo1":"Raggiungere a basso rischio","trade.solo2":"profitti attraverso","trade.solo3":"staking NFT.","trade.lowRisk":"Basso Rischio","trade.shortTerm":"Breve Termine","trade.highStable":"Rendimenti Stabili Elevati","trade.dailyYield":"Rendimento Giornaliero","trade.investPeriod":"Periodo di Investimento","trade.buy":"Acquista","trade.autoReinvestment":"Rinvestimento Automatico","trade.autoReinvestmentTip":"Rinvestimento Automatico: ti aiuta a riciclare rapidamente i fondi per guadagnare più profitto","language.title":"Lingua","my.order":"Il mio Staking Mining","my.team":"Il mio team","my.invite":"Invita un amico","my.security":"Impostazioni di sicurezza","my.download":"Scarica l\'app","my.about":"Informazioni su di noi","my.appVersion":"Versione dell\'app","my.logout":"Esci","customer.service":"Servizio clienti","customer.group":"Gruppo","customer.person":"Persona","customer.tip":"Impossibile aprire l\'app {appName}. Assicurati che {appName} sia installata.","wallet.title":"Il Mio Portafoglio","wallet.nftRelease":"Rilascio NFT","wallet.nftReleaseTip":"Sei sicuro di voler rilasciare gli NFT?","wallet.releaseSuccess":"Rilascio riuscito","wallet.mocRelease":"Rilascio MTC","wallet.history":"Cronologia delle transazioni","wallet.all":"Tutto","fundType":"Tipi di transazioni","recharge":"Ricarica","rechargeProfit":"Rimborso deposito","withdraw":"Prelievo","commission":"Guadagni di Commissione","gift":"Regali della piattaforma","inviteProfit":"Rimborso di riferimento","staking":"Staking","stakingProfit":"Guadagni di Staking","unstaking":"Scambio di NFT","purchaseMtc":"Acquista token MTC","moc2Usdt":"MTC a USDT","usdt2Mtc":"USDT a MTC","recharge.tip":"Si prega di ricaricare USDT utilizzando la rete {walletType}. Dopo l\'invio, attendere pazientemente e verificare se la transazione è arrivata entro 1-2 minuti.","withdraw.address":"Indirizzo di prelievo del portafoglio {withdrawalType}","withdraw.tip":"Importo minimo di prelievo: <span class=\'uni-text-color\'>{min} USDT</span>, con una tassa del <span class=\'uni-text-color\'>{fee}%</span> per transazione.","withdraw.amount":"Importo USDT","withdraw.submit":"Prelievo","security.login":"Accesso","security.fund":"Fondo","security.setting":"Impostazioni","security.tip":"Il codice di verifica verrà inviato alla tua email <span class=\'uni-text-color\'>{account}</span>","invite.title":"【 Scansiona e Registrati 】","invite.code":"Codice di Invito","invite.copyCode":"Copia Codice","invite.copyLink":"Copia Link","invite.tip":"Invita gli amici a fare il loro primo deposito, la piattaforma ti darà il <span>{inviteProfit}%</span> dell\'importo del deposito e il <span>{levelProfit}%</span> dei loro futuri guadagni.","download.title":"【 Scansiona e Scarica 】","download.android":"APP Android","team.totalCommissions":"Commissioni Totali","team.todayCommissions":"Commissioni di Oggi","team.totalEarn":"Guadagni Totali della Squadra","team.nft":"Staking di squadra","team.member":"Membri del Team","team.staking":"NFT Completati dal Team","team.product":"Numero di Mining del Team","team.referralCode":"Codice di Riferimento","team.detail":"Visualizza Dettagli","team.myEarnings":"I Miei Guadagni","order.count":"Numero di NFT","order.stakedNft":"Importo in staking","order.unStakedNft":"Importo staking terminato","order.expectedEarnings":"Guadagni Previsti","order.releasedEarnings":"Guadagni Rilasciati","order.expected":"Previsto","order.investPeriod":"Periodo di Investimento","order.mining":"Mining","order.completed":"Completato","order.earnings":"Guadagni","order.autoReinvestment":"Rinvestimento Automatico","moc.center":"Centro MTC","moc.myMtc":"Il Mio MTC","moc.num":"Numero di Monete MTC","moc.currentPrice":"Prezzo Attuale MTC","moc.discountPrice":"Prezzo Scontato Mtc","moc.price":"Prezzo","moc.available":"Disponibile","moc.rule":"Regola","moc.rule1":"Per ogni NFT staked, riceverai token MTC equivalenti al {productPercent}% dei guadagni.","moc.rule2":"Per guadagnare interessi sulle token MTC, stakale prima. Dopo lo staking, non possono essere scambiate fino a quando non le stai unstakando.","moc.rule3":"Le token MTC possono essere scambiate con USDT basato sul valore di mercato in tempo reale delle token MTC.","moc.staking":"staking","moc.unstaking":"unStaking","moc.stakingProfit":"Guadagni di Staking MTC","moc.activity":"{percent}% Sconto MTC","moc.activity.holdings":"Possesso","moc.activity.buy":"Acquista MTC","moc.activity.ended":"L\'evento MTC è terminato","moc.activity.subscription":"Conferma abbonamento in corso, attendi pazientemente.","moc.activity.progress":"Conferma abbonamento in corso, attendi pazientemente.","moc.activity.rule1":"Periodo Promozionale: {start} - {end}","moc.activity.rule2":"Tutte le token MTC in questo evento sono disponibili per l\'abbonamento con uno sconto del {percent}%.","moc.activity.rule3":"Quanti NFT staked sono necessari per abbonarsi ai token moc di valore equivalente in USDT","moc.activity.rule4":"Il numero di token MTC è limitato, chi prima arriva meglio alloggia; l\'evento terminerà una volta completato l\'abbonamento.","moc.activity.noHoldings":"Nessuna detenzione","notice.title":"Mia Notifica","trans.notCredited":"Non accreditato?","trans.hash":"Hash della transazione {walletType}","trans.hashSuccess":"Richiesta di transazione {walletType} riuscita","trans.hashError":"Inserisci l\'hash della transazione {walletType}","message.amountMinimum":"Importo minimo di prelievo: {min} USDT","message.loging":"Accesso in corso","message.withdrawSucces":"Richiesta di prelievo inviata con successo.","withdrawFee":"Rifiuto di prelievo","message.cancelContinuity":"Sei sicuro di voler annullare la continuità?","withdrawTime":"L\'orario di prelievo è dalle {start} alle {end} giornalmente (UTC).","Token create error":"Errore nella creazione del token","Sending too frequently, please try again later":"Invio troppo frequente, riprova più tardi","Sys error, not email can send":"Errore di sistema, impossibile inviare l\'email","Sys error, email send error":"Errore di sistema, errore nell\'invio dell\'email","Error request":"Richiesta errata","You can\'t login":"Impossibile effettuare l\'accesso","Please input the email":"Inserisci l\'indirizzo email","Unsupported email suffix":"Suffisso dell\'email non supportato","Email is exist":"L\'email esiste già","Email is not exist":"L\'email non esiste","Not the correct email address":"Non è l\'indirizzo email corretto","Payment password must be greater than or equal to 6 digits":"La password di pagamento deve essere di almeno 6 caratteri","Password must be greater than or equal to 6 digits":"La password deve essere di almeno 6 caratteri","Please input the password":"Inserisci la password","Please input the Payment password":"Inserisci la password di pagamento","The original password is incorrect":"La password originale è errata","Please input the verification code":"Inserisci il codice di verifica","The verification code is incorrect or has expired. Please obtain it again":"Il codice di verifica è errato o scaduto. Ottienilo nuovamente","The verification code is incorrect":"Il codice di verifica è errato","Account or password error":"Errore di account o password","Payment password error":"Errore nella password di pagamento","Please input start time":"Inserisci l\'orario di inizio","Please input end time":"Inserisci l\'orario di fine","Please verify account":"Verifica l\'account","Product not exist":"Il prodotto non esiste","Product Suspend sales":"Sospensione delle vendite del prodotto","Insufficient balance":"Saldo insufficiente","Balance too little":"Saldo troppo basso","Product income":"Entrate del prodotto","Buy product":"Acquisto prodotto","Buy platform coin":"Acquisto token MTC","recharge back":"rimborso ricarica","error add":"errore aggiunta","coin exchange amount":"Importo di scambio token MTC","coin interest":"Interesse token MTC","coin is staking please cancel staking":"La token MTC è in staking, si prega di annullare lo staking","Platform change":"Cambio piattaforma","withdraw refuse":"rifiuto prelievo","Not meeting the minimum withdrawal amount":"Non si raggiunge l\'importo minimo di prelievo","Not yet due for withdrawal time":"Non è ancora il momento per il prelievo","Please verify email":"Verifica l\'email","Activity amount must greater in progress product total amount":"L\'importo dell\'attività deve essere maggiore dell\'importo totale attuale impegnato","Insufficient quantity":"I token MTC sono esauriti","Activity not exist":"L\'attività di sconto non esiste","Buy activity":"Acquisto token MTC scontate","Not Start":"L\'attività di sconto non è ancora iniziata","Is over":"L\'attività di sconto è terminata","Create address error":"Errore nella creazione dell\'indirizzo","Not a correct address":"Non è un indirizzo corretto","Processed":"Elaborato","Out wallet password is empty":"La password del portafoglio esterno è vuota","Trans error please check wallet":"Errore di transazione, controlla il portafoglio","Please input trans hash":"Inserisci l\'hash della transazione","Please input coin type":"Seleziona il tipo di rete","Not Find Trans":"Transazione non trovata","Transaction processed":"Transazione elaborata","Transaction does not belong to you":"La transazione non ti appartiene","Transaction does not USDT":"La transazione non è in USDT","Channel":"Canale","Consultation":"Consultazione","Consult":"Consultare","Group":"Gruppo","nonWithdrawAmount":"Importo non prelevabile","checkIn":"Check-in","checkInTip":"Check-in di oggi completato con successo!","Today Has Sign In":"Già effettuato il check-in oggi","todayChecked":"Già effettuato il check-in oggi","registerGift":"Regalo di registrazione","dailyCheckIn":"Check-in quotidiano","withdraw.addressSetting":"Impostare l\'indirizzo {withdrawalType}","trade.open":"Aperto","trade.noOpen":"Chiuso","trade.noOpen.message":"Prodotto non aperto","NFT Staking Mining":"Mining di NFT in staking","days":"Giorni","hours":"Ore","minutes":"Minuti","index.wallet":"Portafoglio","index.mtcCenter":"Centro MTC","index.myNft":"Il mio NFT","mata.title":"Introduzione a ATANFT","mata.intro1":"Il mining di ATANFT si basa sull\'ecosistema privato di Manta Network ed è progettato come un sistema di incentivi basato su token, incentrato sulla \'proprietà di NFT privati e sul contributo all\'ecosistema\'. L\'obiettivo principale è guidare gli utenti a partecipare alla circolazione, applicazione e costruzione dell\'ecosistema ATANFT attraverso il mining, aumentando al contempo l\'attività del sistema di asset privati di Manta. I partecipanti ottengono token MTC o ricompense NFT private esclusive tramite staking e interazioni.","mata.intro2":"Il modello di mining si concentra su \'Privacy + Interazione dell\'Ecosistema\' e si divide in due tipi principali:","mata.intro3":"<text class=\'bold\'>Mining tramite Staking</text>: Gli utenti depositano i loro ATANFT (inclusi collezionabili digitali comuni, credenziali di identità SBT, ecc.) in uno smart contract designato. I rendimenti sono calcolati in base alla rarità del ATANFT (ad esempio edizioni genesis o limitate), alla durata di detenzione e ai dati delle interazioni private. Ad esempio, lo staking di un \'ATANFT di identità privata\' genera un rendimento annuale di base, e se la funzione \'transazioni a prova di conoscenza zero\' è attivata (come trasferimenti privati tramite MantaPay), il coefficiente di ricompensa aumenta del 10%-20%. I guadagni vengono distribuiti quotidianamente in token MTC.","mata.intro4":"<text class=\'bold\'>Mining tramite Interazione dell\'Ecosistema</text>: Incoraggia gli utenti a utilizzare i ATANFT nell\'ecosistema Manta per completare attività specifiche, come integrare i ATANFT in giochi blockchain (come personaggi o oggetti), utilizzare i ATANFT come collaterale LP in moduli DeFi come MantaSwap o invitare nuovi utenti a coniare il loro primo ATANFT. Ogni attività assegna punti che, una volta raggiunta la soglia, possono essere scambiati per un \'ATANFT commemorativo di mining\' con rendimenti più elevati o direttamente per token MTC. Le attività più complesse (come i trasferimenti cross-chain di NFT privati) sbloccano diritti esclusivi limitati.","token.rule1":"Gli utenti devono depositare i ATANFT acquistati in uno smart contract designato. I rendimenti vengono calcolati in base alla rarità del ATANFT. Le ricompense di mining vengono liquidate in token MTC e accreditate automaticamente sull\'account dell\'utente ogni due ore.","token.rule2":"I token MTC possono essere scambiati con USDT in base al prezzo di mercato.","trade.pay":"Importo del pagamento","trade.pay.tip":"Ogni ATANFT costa {amount} USDT. L\'acquisto deve essere un multiplo intero di {amount} USDT (ad esempio {amount1} USDT, {amount2} USDT).","trade.intro":"Crazy Monkey NFT, con il suo design unico e l\'edizione limitata, è un asset di grande potenziale e una sorpresa ad ogni collezione.","investPeriod":"Periodo di staking","order.cumulativeIncome":"Reddito cumulativo","order.amount":"Importo","order.num":"Quantità","agencyRebate":"Rimborso agenzia","order.doing":"In corso","order.history":"Storico","registerTime":"Ora di registrazione","stakingBackProfit":"Ricompensa referral","exchange.fee":"Commissione","trade.sale":"In vendita","trade.sold":"Esaurito","trade.sold.message":"Esaurito oggi","order.staked":"In staking per {day} giorni","order.completed.time":"Orario di fine","order.completed.time1":"Orario di scadenza: {time}","team.totalRecharge":"Recarica totale","trade.numWarning":"Quantità di NFT insufficiente","Insufficient NFT quantity":"Quantità di NFT insufficiente","token.buy":"Acquistare","token.sell":"Vendere","token.noOpen":"Non ancora aperto","token.transaction":"Transazione","wallet.withdraw.tip":"Prelievo minimo: <span class=\'uni-text-color\'>{min} USDT</span>, viene addebitata una commissione del <span class=\'uni-text-color\'>{fee}%</span> per transazione.","wallet.withdraw.tipTwo":"Tempo di accredito: il prelievo sarà accreditato sul tuo portafoglio entro <span class=\'uni-text-color\'>{time}</span> ore.","wallet.withdraw.tipOne":"Orario di prelievo: ora di sistema dalle <span class=\'uni-text-color\'>{start}</span> alle <span class=\'uni-text-color\'>{end}</span>.","star.user":"Giocatore stellare"}')
    },
    db99: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            tag: {
                type: "primary",
                disabled: !1,
                size: "medium",
                shape: "square",
                text: "",
                bgColor: "",
                color: "",
                borderColor: "",
                closeColor: "#C6C7CB",
                name: "",
                plainFill: !1,
                plain: !1,
                closable: !1,
                show: !0,
                icon: ""
            }
        }
    },
    df58: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            swipeActionItem: {
                show: !1,
                name: "",
                disabled: !1,
                threshold: 20,
                autoClose: !0,
                options: [],
                duration: 300
            }
        }
    },
    df88: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            notify: {
                top: 0,
                type: "primary",
                color: "#ffffff",
                bgColor: "",
                message: "",
                duration: 3e3,
                fontSize: 15,
                safeAreaInsetTop: !1
            }
        }
    },
    e017: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            formItem: {
                label: "",
                prop: "",
                borderBottom: "",
                labelPosition: "",
                labelWidth: "",
                rightIcon: "",
                leftIcon: "",
                required: !1,
                leftIconStyle: ""
            }
        }
    },
    e01a: function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("9b1b"));
        t("bf0f"), t("2797");
        var o = n(t("f1e5")),
            r = n(t("b267")),
            s = n(t("5f4c")),
            d = t("47d6"),
            l = function(e, a) {
                var t = {};
                return e.forEach((function(e) {
                    (0, d.isUndefined)(a[e]) || (t[e] = a[e])
                })), t
            };
        a.default = function(e) {
            return new Promise((function(a, t) {
                var n, c = (0, o.default)((0, r.default)(e.baseURL, e.url), e.params),
                    u = {
                        url: c,
                        header: e.header,
                        complete: function(n) {
                            e.fullPath = c, n.config = e;
                            try {
                                "string" === typeof n.data && (n.data = JSON.parse(n.data))
                            } catch (i) {}(0, s.default)(a, t, n)
                        }
                    };
                if ("UPLOAD" === e.method) {
                    delete u.header["content-type"], delete u.header["Content-Type"];
                    var m = {
                        filePath: e.filePath,
                        name: e.name
                    };
                    n = uni.uploadFile((0, i.default)((0, i.default)((0, i.default)({}, u), m), l(["files", "file", "timeout", "formData"], e)))
                } else if ("DOWNLOAD" === e.method)(0, d.isUndefined)(e.timeout) || (u.timeout = e.timeout), n = uni.downloadFile(u);
                else {
                    n = uni.request((0, i.default)((0, i.default)({}, u), l(["data", "method", "timeout", "dataType", "responseType", "withCredentials"], e)))
                }
                e.getTask && e.getTask(n, e)
            }))
        }
    },
    e1e7: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            rate: {
                value: 1,
                count: 5,
                disabled: !1,
                size: 18,
                inactiveColor: "#b2b2b2",
                activeColor: "#FA3534",
                gutter: 4,
                minCount: 1,
                allowHalf: !1,
                activeIcon: "star-fill",
                inactiveIcon: "star",
                touchable: !0
            }
        }
    },
    e2fc: function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = n(t("7832")),
            o = i.default;
        a.default = o
    },
    e3b8: function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"الرئيسية","index.trade":"تجارة","index.my":"حسابي","userAuth.email":"البريد الإلكتروني","userAuth.password":"كلمة المرور","userAuth.forgetPassword":"نسيت كلمة المرور؟","userAuth.forget":"نسيت","userAuth.reset":"إعادة تعيين","userAuth.changePassword":"تغيير كلمة المرور","userAuth.newPassword":"كلمة المرور الجديدة","userAuth.confirmPassword":"تأكيد كلمة المرور","userAuth.loginTitle":"تسجيل الدخول إلى حسابك","userAuth.signin":"تسجيل الدخول","userAuth.signup":"التسجيل","userAuth.noAccount":"ليس لديك حساب؟","userAuth.haveAccount":"هل لديك حساب؟","userAuth.fundPassword":"كلمة مرور الصندوق","userAuth.verificationCode":"رمز التحقق","userAuth.referralCode":"رمز الإحالة","userAuth.send":"إرسال","userAuth.resend":"إعادة إرسال","userAuth.exipires":"تنتهي خلال <span class=\'time uni-text-color\'>10</span> دقائق.","userAuth.logging":"تسجيل الدخول","message.email":"الرجاء إدخال بريدك الإلكتروني","message.password":"الرجاء إدخال كلمة المرور","message.newPassword":"الرجاء إدخال كلمة المرور الجديدة","message.fundPassword":"الرجاء إدخال كلمة مرور الصندوق","message.confirmPassword":"الرجاء إدخال تأكيد كلمة المرور","message.confirmPasswordError":"خطأ في تأكيد كلمة المرور","message.imgCode":"الرجاء إدخال رمز التحقق من الصورة","message.verificationCode":"الرجاء إدخال رمز التحقق","message.bnbAddress":"الرجاء إدخال عنوان محفظتك BNB","message.trxAddress":"الرجاء إدخال عنوان محفظتك TRX","message.logout":"هل أنت متأكد أنك تريد الخروج؟","message.qty":"الرجاء إدخال الكمية","message.mocNum":"الرجاء إدخال عدد عملات MTC","message.buySuccess":"تهانينا، عملية الشراء ناجحة!","message.success":"نجاح","message.copySuccess":"نسخ ناجح","message.amount":"الرجاء إدخال المبلغ","todayearn":"أرباح اليوم","totalwarn":"إجمالي الأرباح","mymoc":"MTC الخاص بي","myteam":"فريقي","people":"الناس","tips":"نصائح","tip":"نصيحة","all":"الكل","amount":"المبلغ","record":"سجل","address":"العنوان","exchange":"تبادل","qty":"الكمية","buy":"شراء","buyNow":"شراء الآن","balance":"الرصيد","account":"الحساب","accountBalance":"رصيد الحساب","digitalToken":"رمز رقمي","convert":"تحويل","confirm":"تأكيد","error":"خطأ","ok":"موافق","home.mocmarket":"اتجاهات سوق MTC","home.market":"اتجاهات رئيسية","home.tip":"تداول العملات المشفرة بعقلانية، إدارة المخاطر من خلال تنويع الاستثمارات، إجراء البحوث الدقيقة قبل الشراء، النظر في الاحتفاظ طويل الأمد، التداول بحذر على منصات آمنة، والبقاء محدثًا باتجاهات السوق لاتخاذ قرارات مستنيرة.","trade.solo1":"تحقيق ربح منخفض المخاطر","trade.solo2":"من خلال","trade.solo3":"NFT الاستقرار.","trade.lowRisk":"مخاطر منخفضة","trade.shortTerm":"قصير الأجل","trade.highStable":"عوائد مستقرة عالية","trade.dailyYield":"عائد يومي","trade.investPeriod":"فترة الاستثمار","trade.buy":"شراء","trade.autoReinvestment":"إعادة استثمار تلقائي","trade.autoReinvestmentTip":"إعادة استثمار تلقائية: تساعدك في إعادة تدوير الأموال بسرعة لكسب المزيد من الأرباح","language.title":"اللغة","my.order":"تعدين التشغيل الخاص بي","my.team":"فريقي","my.invite":"دعوة صديق","my.security":"إعدادات الأمان","my.download":"تنزيل التطبيق","my.about":"معلومات عنا","my.appVersion":"إصدار التطبيق","my.logout":"تسجيل الخروج","customer.service":"خدمة العملاء","customer.group":"مجموعة","customer.person":"شخص","customer.tip":"تعذر فتح تطبيق {appName}. يرجى التأكد من تثبيت تطبيق {appName}.","wallet.title":"محفظتي","wallet.nftRelease":"إطلاق NFT","wallet.nftReleaseTip":"هل أنت متأكد من إطلاق الـ NFT؟","wallet.releaseSuccess":"نجاح الإطلاق","wallet.mocRelease":"إطلاق MTC","wallet.history":"سجل المعاملات","wallet.all":"الكل","fundType":"أنواع المعاملات","recharge":"شحن","rechargeProfit":"مكافأة الإيداع","withdraw":"سحب","commission":"أرباح العمولة","gift":"هدايا المنصة","inviteProfit":"عمولة الإحالة","staking":"تثبيت","stakingProfit":"أرباح التثبيت","unstaking":"إلغاء التثبيت","purchaseMtc":"شراء عملة MTC","moc2Usdt":"MTC إلى USDT","usdt2Mtc":"USDT إلى MTC","recharge.tip":"يرجى إعادة شحن USDT باستخدام شبكة {walletType}.","withdraw.address":"{withdrawalType} عنوان سحب المحفظة","withdraw.tip":"الحد الأدنى للسحب: <span class=\'uni-text-color\'>{min} USDT</span>، مع <span class=\'uni-text-color\'>{fee}%</span> رسوم لكل عملية سحب.","withdraw.amount":"مبلغ USDT","withdraw.submit":"سحب","security.login":"تسجيل الدخول","security.fund":"صندوق","security.setting":"الإعدادات","security.tip":"سيتم إرسال رمز التحقق إلى بريدك الإلكتروني <span class=\'uni-text-color\'>{account}</span>","invite.title":"【 مسح والتسجيل 】","invite.code":"رمز الدعوة","invite.copyCode":"نسخ الرمز","invite.copyLink":"نسخ الرابط","invite.tip":"قم بدعوة أصدقائك لإيداع أولى، سوف تمنحك المنصة <span>{inviteProfit}%</span> من قيمة الإيداع و <span>{levelProfit}%</span> من أرباحهم المستقبلية.","download.title":"【 مسح والتنزيل 】","download.android":"تطبيق Android","team.totalCommissions":"إجمالي العمولة","team.todayCommissions":"عمولة اليوم","team.performance":"أداء الفريق","team.nft":"رهن الفريق","team.member":"أعضاء الفريق","team.staking":"تعدين التثبيت الفريق","team.product":"رقم تعدين الفريق","team.referralCode":"رمز الإحالة","team.detail":"عرض التفاصيل","team.myEarnings":"أرباحي","order.count":"إجمالي عدد NFT","order.stakedNft":"المبلغ المرهون","order.unStakedNft":"المبلغ المرهون المنتهي","order.expectedEarnings":"الأرباح المتوقعة","order.releasedEarnings":"الأرباح المفرج عنها","order.expected":"متوقع","order.investPeriod":"فترة الاستثمار","order.mining":"تعدين","order.completed":"مكتمل","order.earnings":"الأرباح","order.autoReinvestment":"إعادة استثمار تلقائي","moc.center":"مركز MTC","moc.myMtc":"MTC الخاص بي","moc.num":"عدد عملات MTC","moc.currentPrice":"سعر MTC","moc.discountPrice":"سعر MTC المخفض","moc.price":"السعر","moc.available":"متاح","moc.rule":"قاعدة","moc.rule1":"لكل NFT معدني، ستتلقى عملات MTC تعادل {productPercent}% من الأرباح.","moc.rule2":"لكسب فائدة على عملات Mtc، يرجى تعدينها أولاً. بعد التعدين، لا يمكن تبديلها حتى تقوم بإلغاء التعدين.","moc.rule3":"يمكن تبديل عملات Mtc بـ USDT بناءً على القيمة السوقية الفعلية لعملات Mtc.","moc.staking":"تثبيت","moc.unstaking":"إلغاء التثبيت","moc.stakingProfit":"أرباح MTC من الستاكينغ","moc.activity":"{percent}% خصم على MTC","moc.activity.holdings":"الأرصدة","moc.activity.buy":"شراء MTC","moc.activity.ended":"انتهت فعالية MTC","moc.activity.subscription":"تأكيد الاشتراك قيد التقدم، يرجى الانتظار بصبر.","moc.activity.progress":"تأكيد الاشتراك قيد التقدم، يرجى الانتظار بصبر.","moc.activity.rule1":"فترة الترويج: {start} - {end}","moc.activity.rule2":"جميع عملات MTC في هذا الحدث متاحة للاشتراك بخصم {percent}%.","moc.activity.rule3":"كم عدد NFTs المعدنة الذي يتطلبه الاشتراك في رموز moc بقيمة مكافئة بـ USDT.","moc.activity.rule4":"عدد عملات MTC محدود، الأولوية لأولئك الذين يأتون أولاً؛ سينتهي الحدث بمجرد الانتهاء من الاشتراك.","moc.activity.noHoldings":"لا توجد ممتلكات","notice.title":"إشعاراتي","trans.notCredited":"لم يتم الإيداع؟","trans.hash":"تجزئة المعاملة {walletType}","trans.hashSuccess":"استعلام المعاملة {walletType} ناجح","trans.hashError":"يرجى إدخال تجزئة المعاملة {walletType}","message.amountMinimum":"الحد الأدنى لمبلغ السحب: {min} USDT","message.loging":"تسجيل الدخول","message.withdrawSucces":"تم تقديم طلب السحب بنجاح.","withdrawFee":"رفض السحب","message.cancelContinuity":"هل أنت متأكد من أنك تريد إلغاء الاستمرارية؟","withdrawTime":"ساعات السحب من {start} إلى {end} يوميًا.","Token create error":"خطأ في إنشاء الرمز","Sending too frequently, please try again later":"الإرسال متكرر جدًا، يرجى المحاولة لاحقًا","Sys error, not email can send":"خطأ في النظام، لا يمكن إرسال البريد الإلكتروني","Sys error, email send error":"خطأ في النظام، خطأ في إرسال البريد الإلكتروني","Error request":"طلب خاطئ","You can\'t login":"لا يمكنك تسجيل الدخول","Please input the email":"يرجى إدخال البريد الإلكتروني","Unsupported email suffix":"لا يدعم اللاحقة البريدية","Email is exist":"البريد الإلكتروني موجود بالفعل","Email is not exist":"البريد الإلكتروني غير موجود","Not the correct email address":"ليست عنوان البريد الإلكتروني الصحيح","Payment password must be greater than or equal to 6 digits":"يجب أن تكون كلمة مرور الدفع أكبر من أو تساوي 6 أرقام","Password must be greater than or equal to 6 digits":"يجب أن تكون كلمة المرور أكبر من أو تساوي 6 أرقام","Please input the password":"يرجى إدخال كلمة المرور","Please input the Payment password":"يرجى إدخال كلمة مرور الدفع","The original password is incorrect":"كلمة المرور الأصلية غير صحيحة","Please input the verification code":"يرجى إدخال رمز التحقق","The verification code is incorrect or has expired. Please obtain it again":"رمز التحقق غير صحيح أو انتهت صلاحيته. يرجى الحصول عليه مرة أخرى","The verification code is incorrect":"رمز التحقق غير صحيح","Account or password error":"خطأ في الحساب أو كلمة المرور","Payment password error":"خطأ في كلمة مرور الدفع","Please input start time":"يرجى إدخال وقت البدء","Please input end time":"يرجى إدخال وقت الانتهاء","Please verify account":"يرجى التحقق من الحساب","Product not exist":"المنتج غير موجود","Product Suspend sales":"تعليق بيع المنتج","Insufficient balance":"الرصيد غير كافٍ","Balance too little":"الرصيد قليل جدًا","Product income":"دخل المنتج","Buy product":"شراء المنتج","Buy platform coin":"شراء عملة MTC","recharge back":"استرداد الشحن","error add":"خطأ في الإضافة","coin exchange amount":"مبلغ تبادل عملة MTC","coin interest":"فائدة عملة MTC","coin is staking please cancel staking":"عملة MTC في وضع الرهن، يرجى إلغاء الرهن","Platform change":"تغيير المنصة","withdraw refuse":"رفض السحب","Not meeting the minimum withdrawal amount":"لا تلبي المبلغ الأدنى للسحب","Not yet due for withdrawal time":"لم يحن بعد وقت السحب","Please verify email":"يرجى التحقق من البريد الإلكتروني","Activity amount must greater in progress product total amount":"يجب أن يكون مبلغ النشاط أكبر من إجمالي المبلغ الحالي المتعهد","Insufficient quantity":"نفدت رموز MTC","Activity not exist":"النشاط التخفيضي غير موجود","Buy activity":"شراء عملات MTC مخفضة","Not Start":"النشاط التخفيضي لم يبدأ بعد","Is over":"انتهى النشاط التخفيضي","Create address error":"خطأ في إنشاء العنوان","Not a correct address":"ليس عنوانًا صحيحًا","Processed":"تم المعالجة","Out wallet password is empty":"كلمة مرور المحفظة الخارجية فارغة","Trans error please check wallet":"خطأ في النقل، يرجى التحقق من المحفظة","Please input trans hash":"يرجى إدخال هاش النقل","Please input coin type":"يرجى اختيار نوع الشبكة","Not Find Trans":"النقل غير موجود","Transaction processed":"تم معالجة النقل","Transaction does not belong to you":"النقل لا ينتمي إليك","Transaction does not USDT":"النقل ليس بالدولار التايد","Channel":"قناة","Consultation":"استشارة","Consult":"استشر","Group":"مجموعة","nonWithdrawAmount":"المبلغ غير القابل للسحب","checkIn":"تسجيل الدخول","checkInTip":"تم تسجيل الدخول اليوم بنجاح!","Today Has Sign In":"تم تسجيل الدخول اليوم بالفعل","todayChecked":"تم تسجيل الدخول اليوم بالفعل","registerGift":"هدية التسجيل","dailyCheckIn":"تسجيل الدخول اليومي","withdraw.addressSetting":"ضبط عنوان {withdrawalType}","trade.open":"مفتوح","trade.noOpen":"مغلق","trade.noOpen.message":"المنتج غير متاح","NFT Staking Mining":"تعدين NFT عبر التخزين","days":"أيام","hours":"ساعات","minutes":"دقائق","index.wallet":"المحفظة","index.mtcCenter":"مركز MTC","index.myNft":"NFT الخاص بي","mata.title":"مقدمة عن ATANFT","mata.intro1":"تعدين ATANFT يعتمد على نظام الخصوصية في Manta Network، وهو مصمم حول \'امتلاك NFT خاص والمساهمة في النظام البيئي\'. الهدف الأساسي هو تشجيع المستخدمين على المشاركة في تداول ATANFT وتطبيقه وبناء النظام البيئي من خلال التعدين، مع تعزيز نشاط نظام أصول الخصوصية في Manta. يربح المشاركون بشكل رئيسي رموز MTC أو NFTs خاصة عبر الرهن والتفاعلات.","mata.intro2":"يتميز نموذج التعدين بـ \'خصائص الخصوصية + تفاعل النظام البيئي\' وينقسم إلى نوعين رئيسيين:","mata.intro3":"<text class=\'bold\'>تعدين الرهن</text>: يقوم المستخدمون برهن ATANFT الخاصة بهم (بما في ذلك المقتنيات الرقمية العادية، وشهادات الهوية SBT، إلخ) في عقود ذكية محددة. يتم حساب الأرباح بناءً على ندرة ATANFT (مثل الإصدارات الأصلية أو المحدودة)، ومدة الحيازة، وسجلات التفاعل الخاص. على سبيل المثال، رهن \'ATANFT الخاص بالهوية\' يمنح عائدًا سنويًا أساسيًا، وتفعيل \'المعاملات بإثبات المعرفة الصفرية\' (مثل التحويلات الخاصة عبر MantaPay) يزيد معامل المكافأة بنسبة 10%-20%. يتم توزيع الأرباح يوميًا على شكل رموز MTC.","mata.intro4":"<text class=\'bold\'>تعدين تفاعل النظام البيئي</text>: يشجع المستخدمين على إكمال مهام محددة داخل نظام Manta باستخدام ATANFT، مثل دمجها في ألعاب البلوكشين كأدوات أو شخصيات، استخدامها كضمان LP في وحدات DeFi مثل MantaSwap، أو دعوة مستخدمين جدد لإنشاء أول ATANFT خاص بهم. تمنح المهام نقاطًا مختلفة، وعند الوصول إلى حد معين، يمكن استبدالها بـ \'ATANFT تذكاري للتعدين\' بعوائد أعلى أو استبدالها مباشرة برموز MTC. بعض المهام المتقدمة (مثل التحويلات الخاصة عبر السلاسل) تفتح مكافآت محدودة وحصرية.","token.rule1":"يقوم المستخدمون برهن ATANFT المشتراة في عقود ذكية محددة. يتم حساب الأرباح بناءً على ندرة ATANFT وتُضاف تلقائيًا إلى حساب المستخدم كل ساعتين.","token.rule2":"يمكن استبدال رموز MTC بـ USDT وفقًا للقيمة السوقية.","trade.pay":"مبلغ الدفع","trade.pay.tip":"سعر كل ATANFT هو {amount} USDT. يجب أن يكون مبلغ الشراء مضاعفًا صحيحًا لـ {amount} USDT (مثل {amount1} USDT، {amount2} USDT).","trade.intro":"يجمع Crazy Monkey NFT بين التصميم الفريد والندرة المحدودة، مما يجعل كل مجموعة أصلًا رقميًا ذا قيمة ومليئًا بالمفاجآت.","investPeriod":"مدة الرهن","order.cumulativeIncome":"الدخل التراكمي","order.amount":"المبلغ","order.num":"الكمية","agencyRebate":"عمولة الوكيل","order.doing":"قيد التنفيذ","order.history":"السجل","registerTime":"وقت التسجيل","stakingBackProfit":"مكافأة الإحالة","exchange.fee":"الرسوم","trade.sale":"للبيع","trade.sold":"تم البيع","trade.sold.message":"تم البيع بالكامل اليوم","order.staked":"تم الرهن لمدة {day} أيام","order.completed.time":"وقت الانتهاء","order.completed.time1":"وقت الاستحقاق: {time}","team.totalRecharge":"إجمالي إعادة الشحن","trade.numWarning":"كمية NFT غير كافية","Insufficient NFT quantity":"كمية NFT غير كافية","token.buy":"شراء","token.sell":"بيع","token.noOpen":"لم يتم فتحه بعد","token.transaction":"المعاملة","wallet.withdraw.tip":"الحد الأدنى للسحب: <span class=\'uni-text-color\'>{min} USDT</span>، يتم خصم رسوم بنسبة <span class=\'uni-text-color\'>{fee}%</span> لكل معاملة.","wallet.withdraw.tipTwo":"وقت الوصول: سيتم إيداع السحب في محفظتك خلال <span class=\'uni-text-color\'>{time}</span> ساعة.","wallet.withdraw.tipOne":"وقت السحب: من <span class=\'uni-text-color\'>{start}</span> إلى <span class=\'uni-text-color\'>{end}</span> حسب وقت النظام.","star.user":"لاعب النجوم"}')
    },
    e464: function(e, a, t) {
        "use strict";
        var n = t("f5bd").default,
            i = n(t("9b1b"));
        t("3dde"), t("a8b2"), t("1480"), t("6e4a"), t("e686"), t("d6b2");
        var o = n(t("8d34")),
            r = n(t("265f")),
            s = t("b167"),
            d = n(t("9b8e")),
            l = n(t("4d79")),
            c = n(t("18a5"));
        t("8244");
        n(t("0188"));
        var u = uni.getStorageSync("lang") || uni.getLocale();
        (0, s.setLangAttribute)(u);
        var m = {
            locale: u,
            messages: r.default
        };
        d.default.use(l.default);
        var p = new l.default(m);
        d.default.prototype.$store = c.default, d.default.config.productionTip = !1, o.default.mpType = "app";
        var g = new d.default((0, i.default)({
            i18n: p,
            store: c.default
        }, o.default));
        t("3cd6")(g), g.$mount()
    },
    e686: function(e, a, t) {
        "use strict";
        (function(e) {
            var a = t("f5bd").default;
            t("473f"), t("bf0f"), t("de6c"), t("5c47"), t("a1c1");
            var n = a(t("9b8e")),
                i = t("1583");
            e["____01BFB30____"] = !0, delete e["____01BFB30____"], e.__uniConfig = {
                preloadRule: {
                    "pages/index/index": {
                        network: "all",
                        packages: ["trade", "my"]
                    }
                },
                globalStyle: {
                    navigationBarTextStyle: "black",
                    navigationBarTitleText: "MTC",
                    navigationBarBackgroundColor: "#0f0f0f",
                    backgroundColor: "#0f0f0f"
                },
                uniIdRouter: {},
                tabBar: {
                    color: "#666666",
                    selectedColor: "#FF5924",
                    borderStyle: "black",
                    iconWidth: "80rpx",
                    height: "114rpx",
                    backgroundColor: "rgba(18, 18, 18, 1)",
                    list: [{
                        pagePath: "pages/index/index",
                        iconPath: "static/tabBar/icon-home-off@2x.png",
                        selectedIconPath: "static/tabBar/icon-home-on@2x.png",
                        text: "",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/trade/trade",
                        iconPath: "static/tabBar/icon-trade-off@2x.png",
                        selectedIconPath: "static/tabBar/icon-trade-on@2x.png",
                        text: "",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/my/my",
                        iconPath: "static/tabBar/icon-my-off@2x.png",
                        selectedIconPath: "static/tabBar/icon-my-on@2x.png",
                        text: "",
                        redDot: !1,
                        badge: ""
                    }]
                }
            }, e.__uniConfig.compilerVersion = "4.36", e.__uniConfig.darkmode = !1, e.__uniConfig.themeConfig = {}, e.__uniConfig.uniPlatform = "h5", e.__uniConfig.appId = "__UNI__01BFB30", e.__uniConfig.appName = "ATANFT", e.__uniConfig.appVersion = "1.0.3", e.__uniConfig.appVersionCode = "103", e.__uniConfig.router = {
                mode: "hash",
                base: "/"
            }, e.__uniConfig.publicPath = "/", e.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 1e4,
                timeout: 6e4
            }, e.__uniConfig.debug = !1, e.__uniConfig.networkTimeout = {
                request: 6e4,
                connectSocket: 6e4,
                uploadFile: 6e4,
                downloadFile: 6e4
            }, e.__uniConfig.sdkConfigs = {
                maps: {}
            }, e.__uniConfig.qqMapKey = void 0, e.__uniConfig.googleMapKey = void 0, e.__uniConfig.aMapKey = void 0, e.__uniConfig.aMapSecurityJsCode = void 0, e.__uniConfig.aMapServiceHost = void 0, e.__uniConfig.locale = "en", e.__uniConfig.fallbackLocale = "en", e.__uniConfig.locales = i.keys().reduce((function(e, a) {
                var t = a.replace(/\.\/(uni-app.)?(.*).json/, "$2"),
                    n = i(a);
                return Object.assign(e[t] || (e[t] = {}), n.common || n), e
            }), {}), e.__uniConfig.nvue = {
                "flex-direction": "column"
            }, e.__uniConfig.__webpack_chunk_load__ = t.e, n.default.component("pages-index-index", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade~pages-wallet-r~b6ec6dbe"), t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade"), t.e("pages-index-index~pages-my-my"), t.e("pages-index-index")]).then(function() {
                        return e(t("8c9c"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-trade-trade", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade~pages-wallet-r~b6ec6dbe"), t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade"), t.e("pages-trade-trade")]).then(function() {
                        return e(t("f51e"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-my-my", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade~pages-wallet-r~b6ec6dbe"), t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade"), t.e("pages-index-index~pages-my-my"), t.e("pages-my-my")]).then(function() {
                        return e(t("0fe3"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-login-login", (function(e) {
                var a = {
                    component: t.e("pages-login-login").then(function() {
                        return e(t("670d"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-login-register", (function(e) {
                var a = {
                    component: t.e("pages-login-register").then(function() {
                        return e(t("8cbe"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-login-forget", (function(e) {
                var a = {
                    component: t.e("pages-login-forget").then(function() {
                        return e(t("1fcd"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-out-link-out-link", (function(e) {
                var a = {
                    component: t.e("pages-out-link-out-link").then(function() {
                        return e(t("1a97"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-my-about", (function(e) {
                var a = {
                    component: t.e("pages-my-about").then(function() {
                        return e(t("92ca"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-language-language", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-language-language")]).then(function() {
                        return e(t("1a53"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-notice-notice", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-notice-notice")]).then(function() {
                        return e(t("3c5d1"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-wallet-wallet", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade~pages-wallet-r~b6ec6dbe"), t.e("pages-my-order~pages-wallet-wallet"), t.e("pages-wallet-transaction~pages-wallet-wallet"), t.e("pages-wallet-wallet")]).then(function() {
                        return e(t("4dd4"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-wallet-transaction", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade~pages-wallet-r~b6ec6dbe"), t.e("pages-wallet-transaction~pages-wallet-wallet"), t.e("pages-wallet-transaction")]).then(function() {
                        return e(t("c648"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-wallet-recharge", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade~pages-wallet-r~b6ec6dbe"), t.e("pages-my-download~pages-my-invite~pages-wallet-recharge~pages-wallet-withdraw"), t.e("pages-wallet-recharge")]).then(function() {
                        return e(t("4249"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-wallet-withdraw", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-my-download~pages-my-invite~pages-wallet-recharge~pages-wallet-withdraw"), t.e("pages-wallet-withdraw")]).then(function() {
                        return e(t("ca13"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-my-security", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-my-security")]).then(function() {
                        return e(t("bc3a"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-my-team", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-my-team")]).then(function() {
                        return e(t("7a51"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-my-invite", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-my-download~pages-my-invite~pages-wallet-recharge~pages-wallet-withdraw"), t.e("pages-my-invite")]).then(function() {
                        return e(t("f121"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-my-order", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-my-order~pages-wallet-wallet"), t.e("pages-my-order")]).then(function() {
                        return e(t("7549"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-team-staking", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-team-member~pages-team-staking"), t.e("pages-team-staking")]).then(function() {
                        return e(t("fbe6"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-team-member", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-team-member~pages-team-staking"), t.e("pages-team-member")]).then(function() {
                        return e(t("7c395"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-team-product", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-team-product")]).then(function() {
                        return e(t("56d8"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-moc-moc", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade~pages-wallet-r~b6ec6dbe"), t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade"), t.e("pages-moc-moc")]).then(function() {
                        return e(t("924d"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-activity-activity", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade~pages-wallet-r~b6ec6dbe"), t.e("pages-activity-activity~pages-index-index~pages-moc-moc~pages-my-my~pages-trade-trade"), t.e("pages-activity-activity")]).then(function() {
                        return e(t("5bf1"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), n.default.component("pages-my-download", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-activity-activity~pages-language-language~pages-moc-moc~pages-my-download~pages-my-invite~page~20692782"), t.e("pages-my-download~pages-my-invite~pages-wallet-recharge~pages-wallet-withdraw"), t.e("pages-my-download")]).then(function() {
                        return e(t("46f4"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), e.__uniRoutes = [{
                path: "/",
                alias: "/pages/index/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isEntry: !0,
                                isTabBar: !0,
                                tabBarIndex: 0
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: "%index.home%",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-index-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/index/index",
                    isQuit: !0,
                    isEntry: !0,
                    isTabBar: !0,
                    tabBarIndex: 0,
                    windowTop: 0
                }
            }, {
                path: "/pages/trade/trade",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 1
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: "%index.trade%",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-trade-trade", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 2,
                    name: "pages-trade-trade",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/trade/trade",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 1,
                    windowTop: 0
                }
            }, {
                path: "/pages/my/my",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 2
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: "%index.my%",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-my-my", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 3,
                    name: "pages-my-my",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/my/my",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 2,
                    windowTop: 0
                }
            }, {
                path: "/pages/login/login",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Login",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-login-login", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-login",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/login/login",
                    windowTop: 0
                }
            }, {
                path: "/pages/login/register",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Register",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-login-register", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-register",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/login/register",
                    windowTop: 0
                }
            }, {
                path: "/pages/login/forget",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Forget",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-login-forget", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-forget",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/login/forget",
                    windowTop: 0
                }
            }, {
                path: "/pages/out-link/out-link",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-out-link-out-link", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-out-link-out-link",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/out-link/out-link",
                    windowTop: 44
                }
            }, {
                path: "/pages/my/about",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "About Us",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-my-about", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-my-about",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/my/about",
                    windowTop: 0
                }
            }, {
                path: "/pages/language/language",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Language",
                                navigationStyle: "custom"
                            })
                        }, [e("pages-language-language", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-language-language",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/language/language",
                    windowTop: 0
                }
            }, {
                path: "/pages/notice/notice",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Notice",
                                enablePullDownRefresh: !0,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-notice-notice", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-notice-notice",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/notice/notice",
                    windowTop: 0
                }
            }, {
                path: "/pages/wallet/wallet",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Wallet",
                                navigationStyle: "custom"
                            })
                        }, [e("pages-wallet-wallet", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-wallet-wallet",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/wallet/wallet",
                    windowTop: 0
                }
            }, {
                path: "/pages/wallet/transaction",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Transaction History",
                                navigationStyle: "custom"
                            })
                        }, [e("pages-wallet-transaction", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-wallet-transaction",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/wallet/transaction",
                    windowTop: 0
                }
            }, {
                path: "/pages/wallet/recharge",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Recharge",
                                navigationStyle: "custom"
                            })
                        }, [e("pages-wallet-recharge", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-wallet-recharge",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/wallet/recharge",
                    windowTop: 0
                }
            }, {
                path: "/pages/wallet/withdraw",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "%withdraw%",
                                navigationStyle: "custom"
                            })
                        }, [e("pages-wallet-withdraw", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-wallet-withdraw",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/wallet/withdraw",
                    windowTop: 0
                }
            }, {
                path: "/pages/my/security",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Security Setting",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-my-security", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-my-security",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/my/security",
                    windowTop: 0
                }
            }, {
                path: "/pages/my/team",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "My Team",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-my-team", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-my-team",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/my/team",
                    windowTop: 0
                }
            }, {
                path: "/pages/my/invite",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Invite Friend",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-my-invite", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-my-invite",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/my/invite",
                    windowTop: 0
                }
            }, {
                path: "/pages/my/order",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "%my.order%",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-my-order", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-my-order",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/my/order",
                    windowTop: 0
                }
            }, {
                path: "/pages/team/staking",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Team Staking Mining",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-team-staking", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-team-staking",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/team/staking",
                    windowTop: 0
                }
            }, {
                path: "/pages/team/member",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Team Members",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-team-member", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-team-member",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/team/member",
                    windowTop: 0
                }
            }, {
                path: "/pages/team/product",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Team Mining Number",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-team-product", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-team-product",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/team/product",
                    windowTop: 0
                }
            }, {
                path: "/pages/moc/moc",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "MTC Center",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-moc-moc", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-moc-moc",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/moc/moc",
                    windowTop: 0
                }
            }, {
                path: "/pages/activity/activity",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "MTC Activity",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-activity-activity", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-activity-activity",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/activity/activity",
                    windowTop: 0
                }
            }, {
                path: "/pages/my/download",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Download APP",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-my-download", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-my-download",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/my/download",
                    windowTop: 0
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }], e.UniApp && new e.UniApp
        }).call(this, t("0ee4"))
    },
    e7c3: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            carKeyboard: {
                random: !1
            }
        }
    },
    e8cb: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            divider: {
                dashed: !1,
                hairline: !0,
                dot: !1,
                textPosition: "center",
                text: "",
                textSize: 14,
                textColor: "#909399",
                lineColor: "#dcdfe6"
            }
        }
    },
    e950: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            popup: {
                show: !1,
                overlay: !0,
                mode: "bottom",
                duration: 300,
                closeable: !1,
                overlayStyle: function() {},
                closeOnClickOverlay: !0,
                zIndex: 10075,
                safeAreaInsetBottom: !0,
                safeAreaInsetTop: !1,
                closeIconPos: "top-right",
                round: 0,
                zoom: !0,
                bgColor: "",
                overlayOpacity: .5
            }
        }
    },
    eb4f: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            codeInput: {
                adjustPosition: !0,
                maxlength: 6,
                dot: !1,
                mode: "box",
                hairline: !1,
                space: 10,
                value: "",
                focus: !1,
                bold: !1,
                color: "#606266",
                fontSize: 18,
                size: 35,
                disabledKeyboard: !1,
                borderColor: "#c9cacc",
                disabledDot: !0
            }
        }
    },
    ebc3: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            sticky: {
                offsetTop: 0,
                customNavHeight: 0,
                disabled: !1,
                bgColor: "transparent",
                zIndex: "",
                index: ""
            }
        }
    },
    ebf7: function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"Laman Utama","index.trade":"Perdagangan","index.my":"Saya","userAuth.email":"Emel","userAuth.password":"Kata Laluan","userAuth.forgetPassword":"Lupa Kata Laluan?","userAuth.forget":"Lupa","userAuth.reset":"Set Semula","userAuth.changePassword":"Tukar Kata Laluan","userAuth.newPassword":"Kata Laluan Baru","userAuth.confirmPassword":"Sahkan Kata Laluan","userAuth.loginTitle":"Log Masuk ke Akaun Anda","userAuth.signin":"Log Masuk","userAuth.signup":"Daftar","userAuth.noAccount":"Tiada akaun?","userAuth.haveAccount":"Sudah ada akaun?","userAuth.fundPassword":"Kata Laluan Dana","userAuth.verificationCode":"Kod Pengesahan","userAuth.referralCode":"Kod Rujukan","userAuth.send":"Hantar","userAuth.resend":"Mengirim Ulang","userAuth.exipires":"tamat tempoh dalam <span class=\'time uni-text-color\'>10</span> minit.","userAuth.logging":"sedang log masuk","message.email":"Sila masukkan emel anda","message.password":"Sila masukkan kata laluan anda","message.newPassword":"Sila masukkan kata laluan baru anda","message.fundPassword":"Sila masukkan kata laluan dana anda","message.confirmPassword":"Sila masukkan sahkan kata laluan anda","message.confirmPasswordError":"Kesalahan konfirmasi kata sandi","message.imgCode":"Sila masukkan kod pengesahan imej","message.verificationCode":"Sila masukkan kod pengesahan","message.bnbAddress":"Sila masukkan alamat dompet BNB anda","message.trxAddress":"Sila masukkan alamat dompet TRX anda","message.logout":"Adakah anda pasti ingin keluar?","message.qty":"Sila masukkan kuantiti","message.mocNum":"Sila masukkan bilangan token MTC","message.buySuccess":"Tahniah, pembelian berjaya!","message.success":"Berjaya","message.copySuccess":"Berjaya Disalin","message.amount":"Sila masukkan jumlah","todayearn":"Pendapatan Hari Ini","totalwarn":"Pendapatan Keseluruhan","mymoc":"MTC Saya","myteam":"Pasukan Saya","people":"Orang","tips":"Tip","tip":"Tip","all":"Semua","amount":"Jumlah","record":"Rekod","address":"Alamat","exchange":"Pertukaran","qty":"Kuantiti","buy":"Beli","buyNow":"Beli Sekarang","balance":"Baki","account":"Akaun","accountBalance":"Baki Akaun","digitalToken":"Token Digital","convert":"Tukar","confirm":"Sahkan","error":"Ralat","ok":"OK","home.mocmarket":"Trend Pasaran MTC","home.market":"Trend Utama","home.tip":"Berdagang dengan pemikiran yang rasional, urus risiko dengan pelaburan yang pelbagai, lakukan penyelidikan mendalam sebelum membeli, pertimbangkan pemegangan jangka panjang, berdagang dengan berhati-hati menggunakan platform yang selamat, dan sentiasa mengikuti trend pasaran untuk membuat keputusan yang berinformasi.","trade.solo1":"Mencapai risiko rendah","trade.solo2":"keuntungan melalui","trade.solo3":"stake NFT.","trade.lowRisk":"Risiko Rendah","trade.shortTerm":"Jangka Pendek","trade.highStable":"Pulangan Tinggi Stabil","trade.dailyYield":"Hasil Harian","trade.investPeriod":"Tempoh Pelaburan","trade.buy":"Beli","trade.autoReinvestment":"Pelan Pelaburan Semula Automatik","trade.autoReinvestmentTip":"Pelaburan Semula Automatik: Ia membantu anda mengitar semula dana untuk membantu anda mendapatkan lebih banyak keuntungan","language.title":"Bahasa","my.order":"Penambangan Staking Saya","my.team":"Pasukan Saya","my.invite":"Jemput Rakan","my.security":"Tetapan Keselamatan","my.download":"Muat Turun APP","my.about":"Tentang Kami","my.appVersion":"Versi Aplikasi","my.logout":"Log Keluar","customer.service":"Perkhidmatan Pelanggan","customer.group":"Kumpulan","customer.person":"Peribadi","customer.tip":"Tidak dapat membuka aplikasi {appName}. Pastikan bahawa {appName} dipasang.","wallet.title":"Dompet Saya","wallet.nftRelease":"Pelepasan NFT","wallet.nftReleaseTip":"Adakah anda pasti mahu melepaskan NFTs?","wallet.releaseSuccess":"Pelepasan Berjaya","wallet.mocRelease":"Pelepasan MTC","wallet.history":"Sejarah Transaksi","wallet.all":"Semua","fundType":"Jenis Transaksi","recharge":"Top Up","rechargeProfit":"Rebat Deposit","withdraw":"Tarik Balik","commission":"Pendapatan Komisen","gift":"Hadiah Platform","inviteProfit":"Rebat Rujukan","staking":"Staking","stakingProfit":"Pendapatan Staking","unstaking":"Pembatalan Staking","purchaseMtc":"Beli Koin MTC","moc2Usdt":"MTC ke USDT","usdt2Mtc":"USDT ke MTC","recharge.tip":"Sila tambah USDT menggunakan rangkaian {walletType}. Selepas penghantaran, sila tunggu dengan sabar dan semak sama ada transaksi telah tiba dalam masa 1-2 minit.","withdraw.address":"Alamat penarikan dompet {withdrawalType}","withdraw.tip":"Jumlah penarikan minimum: <span class=\'uni-text-color\'>{min} USDT</span>, dengan bayaran <span class=\'uni-text-color\'>{fee}%</span> setiap transaksi.","withdraw.amount":"Jumlah USDT","withdraw.submit":"Tarik Balik","security.login":"Log Masuk","security.fund":"Dana","security.setting":"Tetapan","security.tip":"Kod pengesahan akan dihantar ke emel anda <span class=\'uni-text-color\'>{account}</span>","invite.title":"【 Imbas dan Daftar 】","invite.code":"Kod Jemputan","invite.copyCode":"Salin Kod","invite.copyLink":"Salin Pautan","invite.tip":"Jemput rakan untuk membuat deposit pertama mereka, platform akan memberikan anda <span>{inviteProfit}%</span> daripada jumlah deposit dan <span>{levelProfit}%</span> dari pendapatan masa depan mereka.","download.title":"【 Imbas dan Muat Turun 】","download.android":"APP Android","team.totalCommissions":"Jumlah Komisen","team.todayCommissions":"Komisen Hari Ini","team.totalEarn":"Jumlah Pendapatan Pasukan","team.nft":"Staking pasukan","team.member":"Ahli Pasukan","team.staking":"NFT yang Disiapkan oleh Pasukan","team.product":"Nombor Penambangan Pasukan","team.referralCode":"Kod Rujukan","team.detail":"Lihat Perincian","team.myEarnings":"Pendapatan Saya","order.count":"Jumlah NFT","order.stakedNft":"Jumlah staking","order.unStakedNft":"Jumlah staking yang telah tamat","order.expectedEarnings":"Pendapatan Dijangka","order.releasedEarnings":"Pendapatan Dikeluarkan","order.expected":"Dijangka","order.investPeriod":"Tempoh Pelaburan","order.mining":"Penambangan","order.completed":"Selesai","order.earnings":"Pendapatan","order.autoReinvestment":"Pelaburan Semula Automatik","moc.center":"Pusat MTC","moc.myMtc":"MTC Saya","moc.num":"Bilangan Koin MTC","moc.currentPrice":"Harga Semasa MTC","moc.discountPrice":"Harga Diskaun Mtc","moc.price":"Harga","moc.available":"Tersedia","moc.rule":"Peraturan","moc.rule1":"Untuk setiap NFT yang dilaksanakan, anda akan menerima token MTC setara dengan {productPercent}% dari pendapatan.","moc.rule2":"Untuk mendapatkan faedah atas token MTC, sila stake dahulu. Selepas dilaksanakan, mereka tidak boleh ditukar sehingga anda mengeluarkan.","moc.rule3":"Koin MTC boleh ditukar dengan USDT berdasarkan nilai pasaran semasa token MTC.","moc.staking":"staking","moc.unstaking":"unStaking","moc.stakingProfit":"Pendapatan Staking MTC","moc.activity":"{percent}% Off MTC","moc.activity.holdings":"Pemegangan","moc.activity.buy":"Beli MTC","moc.activity.ended":"Acara MTC telah berakhir","moc.activity.subscription":"Pengesahan langganan sedang dalam proses, sila tunggu dengan sabar.","moc.activity.progress":"Pengesahan langganan sedang dalam proses, sila tunggu dengan sabar.","moc.activity.rule1":"Tempoh Promosi: {start} - {end}","moc.activity.rule2":"Semua token MTC dalam acara ini boleh disubskripsi dengan potongan {percent}%.","moc.activity.rule3":"Berapa banyak NFT yang dilaksanakan diperlukan untuk melanggan token moc bernilai setara dalam USDT","moc.activity.rule4":"Jumlah token MTC terhad, siapa cepat dia dapat; acara akan berakhir setelah langganan selesai.","moc.activity.noHoldings":"Tiada Pegangan","notice.title":"Notis Saya","trans.notCredited":"Belum dikreditkan?","trans.hash":"Hash Transaksi {walletType}","trans.hashSuccess":"Carian transaksi {walletType} berjaya","trans.hashError":"Sila masukkan hash transaksi {walletType}","message.amountMinimum":"Jumlah pengeluaran minimum: {min} USDT","message.loging":"Sedang log masuk","message.withdrawSucces":"Permintaan pengeluaran berjaya dihantar.","withdrawFee":"Pengeluaran ditolak","message.cancelContinuity":"Adakah anda pasti mahu membatalkan kesinambungan?","withdrawTime":"Waktu pengeluaran adalah dari {start} hingga {end} setiap hari (UTC).","Token create error":"Ralat pembuatan token","Sending too frequently, please try again later":"Menghantar terlalu kerap, sila cuba lagi nanti","Sys error, not email can send":"Ralat sistem, tidak dapat menghantar e-mel","Sys error, email send error":"Ralat sistem, ralat penghantaran e-mel","Error request":"Permintaan ralat","You can\'t login":"Anda tidak boleh log masuk","Please input the email":"Sila masukkan e-mel","Unsupported email suffix":"Imbasan e-mel tidak disokong","Email is exist":"E-mel telah wujud","Email is not exist":"E-mel tidak wujud","Not the correct email address":"Bukan alamat e-mel yang betul","Payment password must be greater than or equal to 6 digits":"Kata laluan pembayaran mesti lebih besar atau sama dengan 6 digit","Password must be greater than or equal to 6 digits":"Kata laluan mesti lebih besar atau sama dengan 6 digit","Please input the password":"Sila masukkan kata laluan","Please input the Payment password":"Sila masukkan kata laluan pembayaran","The original password is incorrect":"Kata laluan asal tidak betul","Please input the verification code":"Sila masukkan kod pengesahan","The verification code is incorrect or has expired. Please obtain it again":"Kod pengesahan tidak betul atau telah luput. Sila dapatkan semula","The verification code is incorrect":"Kod pengesahan tidak betul","Account or password error":"Ralat akaun atau kata laluan","Payment password error":"Ralat kata laluan pembayaran","Please input start time":"Sila masukkan masa mula","Please input end time":"Sila masukkan masa tamat","Please verify account":"Sila sahkan akaun","Product not exist":"Produk tidak wujud","Product Suspend sales":"Penjualan produk digantung","Insufficient balance":"Baki tidak mencukupi","Balance too little":"Baki terlalu sedikit","Product income":"Pendapatan produk","Buy product":"Staking NFT","Buy platform coin":"Beli token MTC","recharge back":"Rebat semula","error add":"Ralat tambah","coin exchange amount":"Jumlah pertukaran token MTC","coin interest":"Keuntungan token MTC","coin is staking please cancel staking":"Koin MTC sedang staking, sila batalkan staking","Platform change":"Perubahan platform","withdraw refuse":"Penolakan pengeluaran","Not meeting the minimum withdrawal amount":"Tidak memenuhi jumlah pengeluaran minimum","Not yet due for withdrawal time":"Belum tiba masanya untuk pengeluaran","Please verify email":"Sila sahkan e-mel","Activity amount must greater in progress product total amount":"Jumlah aktiviti mesti lebih besar daripada jumlah keseluruhan produk yang dijanjikan pada masa kini","Insufficient quantity":"Token MTC telah habis dijual","Activity not exist":"Aktiviti diskaun tidak wujud","Buy activity":"Beli token MTC yang didiskont","Not Start":"Aktiviti diskaun belum bermula","Is over":"Aktiviti diskaun telah berakhir","Create address error":"Ralat mencipta alamat","Not a correct address":"Bukan alamat yang betul","Processed":"Diproses","Out wallet password is empty":"Kata laluan dompet kosong","Trans error please check wallet":"Ralat transaksi, sila semak dompet","Please input trans hash":"Sila masukkan hash transaksi","Please input coin type":"Sila pilih jenis rangkaian","Not Find Trans":"Transaksi tidak ditemui","Transaction processed":"Transaksi diproses","Transaction does not belong to you":"Transaksi tidak milik anda","Transaction does not USDT":"Transaksi bukan USDT","Channel":"Saluran","Consultation":"Perundingan","Consult":"Berunding","Group":"Kumpulan","nonWithdrawAmount":"Jumlah yang tidak boleh dikeluarkan","checkIn":"Daftar Masuk","checkInTip":"Daftar masuk hari ini berjaya!","Today Has Sign In":"Sudah daftar masuk hari ini","todayChecked":"Sudah daftar masuk hari ini","registerGift":"Hadiah Pendaftaran","dailyCheckIn":"Daftar Masuk Harian","withdraw.addressSetting":"Tetapkan alamat {withdrawalType}","trade.open":"Dibuka","trade.noOpen":"Ditutup","trade.noOpen.message":"Produk belum dibuka","NFT Staking Mining":"Perlombongan NFT Staking","days":"Hari","hours":"Jam","minutes":"Minit","index.wallet":"Dompet","index.mtcCenter":"Pusat MTC","index.myNft":"NFT Saya","mata.title":"Pengenalan ATANFT","mata.intro1":"ATANFT Mining bergantung kepada ekosistem privasi Manta Network, direka dengan sistem insentif token berasaskan \'Pemilikan NFT Privasi dan Sumbangan Ekosistem\'. Matlamat utamanya ialah untuk menggalakkan pengguna menyertai peredaran, aplikasi, dan pembinaan ekosistem ATANFT melalui perlombongan, sambil meningkatkan aktiviti sistem aset privasi Manta. Peserta memperoleh token MTC atau NFT privasi eksklusif melalui kaedah seperti staking dan interaksi.","mata.intro2":"Model perlombongannya berpusat pada \'Ciri Privasi + Interaksi Ekosistem\', yang dibahagikan kepada dua jenis utama:","mata.intro3":"<text class=\'bold\'>Perlombongan Staking</text>: Pengguna meletakkan ATANFT mereka (termasuk koleksi digital biasa, bukti identiti SBT, dan lain-lain) ke dalam kontrak pintar yang ditetapkan. Pulangan dikira berdasarkan kelangkaan ATANFT (seperti edisi genesis, edisi terhad), tempoh pemilikan, dan rekod interaksi privasi. Sebagai contoh, staking \'ATANFT identiti privasi\' memberikan pulangan tahunan asas, dan jika fungsi \'Transaksi Bukti Tanpa Pengetahuan\' diaktifkan (seperti pindahan privasi melalui MantaPay), koefisien ganjaran meningkat sebanyak 10%-20%. Pulangan diagihkan setiap hari dalam bentuk token MTC.","mata.intro4":"<text class=\'bold\'>Perlombongan Interaksi Ekosistem</text>: Menggalakkan pengguna menggunakan ATANFT dalam ekosistem Manta untuk menyelesaikan tugas tertentu, seperti mengintegrasikan ATANFT dalam permainan blockchain (sebagai watak atau item), menggunakan ATANFT sebagai cagaran LP dalam modul DeFi seperti MantaSwap, atau menjemput pengguna baru untuk mencipta ATANFT pertama mereka. Setiap tugas memberikan mata tertentu. Mata terkumpul boleh ditukar dengan \'ATANFT Edisi Kenangan Perlombongan\' dengan hasil staking yang lebih tinggi atau terus ditukar dengan token MTC. Tugas yang lebih sukar (seperti aliran silang rantai NFT privasi) akan membuka faedah eksklusif yang terhad.","token.rule1":"Pengguna mesti meletakkan ATANFT yang dibeli ke dalam kontrak pintar yang ditetapkan. Pulangan dikira berdasarkan kelangkaan ATANFT. Ganjaran perlombongan diselesaikan dalam token MTC dan dikreditkan secara automatik ke akaun pengguna setiap dua jam.","token.rule2":"Token MTC boleh ditukar kepada USDT pada harga pasaran.","trade.pay":"Jumlah pembayaran","trade.pay.tip":"Setiap ATANFT berharga {amount} USDT. Pembelian mesti dalam gandaan bulat {amount} USDT (contohnya {amount1} USDT, {amount2} USDT).","trade.intro":"Crazy Monkey NFT mempunyai reka bentuk unik dan ciri edisi terhad, setiap koleksi adalah aset berpotensi yang mengejutkan.","investPeriod":"Tempoh staking","order.cumulativeIncome":"Pendapatan terkumpul","order.amount":"Jumlah","order.num":"Kuantiti","agencyRebate":"Rebat agensi","order.doing":"Sedang berjalan","order.history":"Sejarah","registerTime":"Masa pendaftaran","stakingBackProfit":"Rebat rujukan","exchange.fee":"Yuran transaksi","trade.sale":"Dalam jualan","trade.sold":"Terjual habis","trade.sold.message":"Terjual habis hari ini","order.staked":"Telah di-stake selama {day} hari","order.completed.time":"Masa tamat","order.completed.time1":"Masa matang: {time}","team.totalRecharge":"Jumlah caj semula","trade.numWarning":"Kuantiti NFT tidak mencukupi","Insufficient NFT quantity":"Kuantiti NFT tidak mencukupi","token.buy":"Beli","token.sell":"Jual","token.noOpen":"Belum dibuka","token.transaction":"Transaksi","wallet.withdraw.tip":"Pengeluaran minimum: <span class=\'uni-text-color\'>{min} USDT</span>, caj <span class=\'uni-text-color\'>{fee}%</span> akan dikenakan bagi setiap transaksi.","wallet.withdraw.tipTwo":"Masa tiba: Pengeluaran akan dikreditkan ke dompet anda dalam masa <span class=\'uni-text-color\'>{time}</span> jam.","wallet.withdraw.tipOne":"Masa pengeluaran: masa sistem dari <span class=\'uni-text-color\'>{start}</span> hingga <span class=\'uni-text-color\'>{end}</span>.","star.user":"Pemain bintang"}')
    },
    edb8: function(e, a, t) {
        "use strict";
        (function(e) {
            t("6a54");
            var n = t("f5bd").default;
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var i = n(t("9b1b")),
                o = t("8f59"),
                r = {
                    onLaunch: function() {},
                    onShow: function() {
                        e.log("App Show"), uni.hideLoading()
                    },
                    onHide: function() {
                        e.log("App Hide")
                    },
                    methods: (0, i.default)({}, (0, o.mapActions)(["setLang"]))
                };
            a.default = r
        }).call(this, t("ba7c")["default"])
    },
    f1e5: function(e, a, t) {
        "use strict";
        t("6a54");
        var n = t("3639").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = function(e, a) {
            if (!a) return e;
            var t;
            if (i.isURLSearchParams(a)) t = a.toString();
            else {
                var n = [];
                i.forEach(a, (function(e, a) {
                    null !== e && "undefined" !== typeof e && (i.isArray(e) ? a = "".concat(a, "[]") : e = [e], i.forEach(e, (function(e) {
                        i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), n.push("".concat(o(a), "=").concat(o(e)))
                    })))
                })), t = n.join("&")
            }
            if (t) {
                var r = e.indexOf("#"); - 1 !== r && (e = e.slice(0, r)), e += (-1 === e.indexOf("?") ? "?" : "&") + t
            }
            return e
        }, t("5c47"), t("a1c1"), t("c9b5"), t("bf0f"), t("ab80"), t("d4b5"), t("aa9c"), t("c223"), t("5ef2"), t("f7a5");
        var i = n(t("47d6"));

        function o(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
    },
    f5b0: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            avatarGroup: {
                urls: function() {
                    return []
                },
                maxCount: 5,
                shape: "circle",
                mode: "scaleToFill",
                showMore: !0,
                size: 40,
                keyName: "",
                gap: .5,
                extraValue: 0
            }
        }
    },
    fa07: function(e, a, t) {
        var n = t("b46c");
        n.__esModule && (n = n.default), "string" === typeof n && (n = [
            [e.i, n, ""]
        ]), n.locals && (e.exports = n.locals);
        var i = t("967d").default;
        i("190afc96", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    fb2d: function(e) {
        e.exports = JSON.parse('{"app.name":"ATANFT","index.home":"首頁","index.trade":"交易","index.my":"我的","userAuth.email":"電子郵件","userAuth.password":"密碼","userAuth.forgetPassword":"忘記密碼？","userAuth.forget":"忘記","userAuth.reset":"重置","userAuth.changePassword":"更改密碼","userAuth.newPassword":"新密碼","userAuth.confirmPassword":"確認密碼","userAuth.loginTitle":"登錄到您的帳戶","userAuth.signin":"登錄","userAuth.signup":"註冊","userAuth.noAccount":"沒有帳戶？","userAuth.haveAccount":"已經有帳戶？","userAuth.fundPassword":"資金密碼","userAuth.verificationCode":"驗證碼","userAuth.referralCode":"推薦碼","userAuth.send":"發送","userAuth.resend":"重發","userAuth.exipires":"在 <span class=\'time uni-text-color\'>10</span> 分鐘內過期。","userAuth.logging":"登錄中","message.email":"請輸入您的電子郵件","message.password":"請輸入您的密碼","message.newPassword":"請輸入您的新密碼","message.fundPassword":"請輸入您的資金密碼","message.confirmPassword":"請輸入並確認您的密碼","message.confirmPasswordError":"密碼確認錯誤","message.imgCode":"請輸入圖片驗證碼","message.verificationCode":"請輸入驗證碼","message.bnbAddress":"請輸入您的BNB錢包地址","message.trxAddress":"請輸入您的TRX錢包地址","message.logout":"您確定要退出嗎？","message.qty":"請輸入數量","message.mocNum":"請輸入MTC幣數量","message.buySuccess":"恭喜，購買成功！","message.success":"成功","message.copySuccess":"複製成功","message.amount":"請輸入金額","todayearn":"今日收益","totalwarn":"總收益","mymoc":"我的Mtc","myteam":"我的團隊","people":"人","tips":"提示","tip":"提示","all":"全部","amount":"數量","record":"記錄","address":"地址","exchange":"兌換","qty":"數量","buy":"購買","buyNow":"立即購買","balance":"餘額","account":"帳戶","accountBalance":"帳戶餘額","digitalToken":"數字代幣","convert":"轉換","confirm":"確認","error":"錯誤","ok":"確定","home.mocmarket":"MTC市場趨勢","home.market":"主流趨勢","home.tip":"用理性的心態交易加密貨幣，通過分散投資來管理風險，購買前進行徹底研究，考慮長期持有，謹慎交易使用安全平台，並保持對市場趨勢的關注，以做出明智的決策。","trade.solo1":"實現低風險","trade.solo2":"利潤通過","trade.solo3":"NFT質押。","trade.lowRisk":"低風險","trade.shortTerm":"短期","trade.highStable":"高穩定收益","trade.dailyYield":"每日收益","trade.investPeriod":"投資期","trade.buy":"購買","trade.autoReinvestment":"自動再投資","trade.autoReinvestmentTip":"自動再投資：幫助您快速回收資金以賺取更多利潤","language.title":"語言","my.order":"我的質押挖礦","my.team":"我的團隊","my.invite":"邀請朋友","my.security":"安全設置","my.download":"下載APP","my.about":"關於我們","my.appVersion":"應用版本","my.logout":"退出","customer.service":"客戶服務","customer.group":"群組","customer.person":"人員","customer.tip":"無法打開{appName}應用。請確保已安裝{appName}應用。","wallet.title":"我的錢包","wallet.nftRelease":"NFT釋放","wallet.nftReleaseTip":"您確定要釋放NFT嗎？","wallet.releaseSuccess":"釋放成功","wallet.mocRelease":"MTC釋放","wallet.history":"交易歷史","wallet.all":"全部","fundType":"交易類型","recharge":"充值","rechargeProfit":"存款返利","withdraw":"提款","commission":"佣金收入","gift":"平台禮物","inviteProfit":"推薦返利","staking":"質押","stakingProfit":"質押收益","unstaking":"NFT兌換","purchaseMtc":"購買MTC幣","moc2Usdt":"MTC轉USDT","usdt2Mtc":"USDT轉MTC","recharge.tip":"請使用{walletType}網絡充值USDT。提交後，請耐心等待1-2分鐘並檢查交易是否已到賬。","withdraw.address":"{withdrawalType}錢包提款地址","withdraw.amount":"USDT金額","withdraw.submit":"提款","security.login":"登錄","security.fund":"資金","security.setting":"設置","security.tip":"驗證碼將發送到您的電子郵件<span class=\'uni-text-color\'>{account}</span>","invite.title":"【掃描並註冊】","invite.code":"邀請碼","invite.copyCode":"複製代碼","invite.copyLink":"複製鏈接","invite.tip":"邀請朋友進行首次存款，平台將給您存款金額的<span>{inviteProfit}%</span>和他們未來收益的<span>{levelProfit}%</span>。","download.title":"【掃描並下載】","download.android":"安卓應用","team.totalCommissions":"總佣金","team.todayCommissions":"今日佣金","team.performance":"團隊業績","team.nft":"團隊質押","team.member":"團隊成員","team.staking":"團隊已完成的 NFT","team.product":"團隊挖礦數量","team.referralCode":"推薦碼","team.detail":"查看詳情","team.myEarnings":"我的收益","order.count":"總NFT","order.stakedNft":"質押金額","order.unStakedNft":"已結束質押金額","order.expectedEarnings":"預期收益","order.releasedEarnings":"已收益","order.expected":"預期","order.investPeriod":"投資期","order.mining":"挖礦","order.completed":"完成","order.earnings":"收益","order.autoReinvestment":"自動再投資","moc.center":"MTC中心","moc.myMtc":"我的MTC","moc.num":"MTC幣數量","moc.currentPrice":"MTC價格","moc.discountPrice":"MTC 折扣價格","moc.price":"價格","moc.available":"可用","moc.rule":"規則","moc.rule1":"每個質押的NFT將獲得相當於收益{productPercent}%的MTC幣。","moc.rule2":"要獲得MTC幣的利息，請先進行質押。質押後，直到解除質押才能進行兌換。","moc.rule3":"根據MTC幣的實時市場價值，可以將MTC幣兌換為USDT。","moc.staking":"質押","moc.unstaking":"取消質押","moc.stakingProfit":"MTC 質押收益","moc.activity":"MTC活動 {percent}% 折扣","moc.activity.holdings":"持有量","moc.activity.buy":"購買MTC","moc.activity.ended":"MTC活動已結束","moc.activity.subscription":"訂閱確認進行中，請耐心等候。","moc.activity.progress":"訂閱確認進行中，請耐心等候。","moc.activity.rule1":"促銷期間：{start} - {end}","moc.activity.rule2":"本次活動中的所有MTC幣均可享受 {percent}% 折扣。","moc.activity.rule3":"需質押的NFT數量，才能以等值的USDT訂閱MTC幣。","moc.activity.rule4":"MTC幣數量有限，先到先得；一旦訂閱完成，活動即結束。","moc.activity.noHoldings":"無持有","notice.title":"我的通知","trans.notCredited":"未記入？","trans.hash":"{walletType} 交易哈希","trans.hashSuccess":"{walletType} 交易查詢成功","trans.hashError":"請輸入 {walletType} 交易哈希","message.amountMinimum":"最低提款金額：{min} USDT","message.loging":"登入中","message.withdrawSucces":"提款申請成功提交。","withdrawFee":"提款拒絕","message.cancelContinuity":"您確定要取消持續訂閱嗎？","withdrawTime":"每日提現時間為 {start} 至 {end}（UTC）。","Token create error":"令牌創建錯誤","Sending too frequently, please try again later":"發送過於頻繁，請稍後重試","Sys error, not email can send":"系統錯誤，無法發送郵件","Sys error, email send error":"系統錯誤，郵件發送錯誤","Error request":"請求錯誤","You can\'t login":"無法登錄","Please input the email":"請輸入電子郵件","Unsupported email suffix":"不支持的電子郵件後綴","Email is exist":"郵件已存在","Email is not exist":"郵件不存在","Not the correct email address":"不是正確的郵件地址","Payment password must be greater than or equal to 6 digits":"支付密碼必須大於或等於6位數","Password must be greater than or equal to 6 digits":"密碼必須大於或等於6位數","Please input the password":"請輸入密碼","Please input the Payment password":"請輸入支付密碼","The original password is incorrect":"原密碼不正確","Please input the verification code":"請輸入驗證碼","The verification code is incorrect or has expired. Please obtain it again":"驗證碼不正確或已過期，請重新獲取","The verification code is incorrect":"驗證碼不正確","Account or password error":"帳號或密碼錯誤","Payment password error":"支付密碼錯誤","Please input start time":"請輸入開始時間","Please input end time":"請輸入結束時間","Please verify account":"請驗證帳戶","Product not exist":"產品不存在","Product Suspend sales":"產品暫停銷售","Insufficient balance":"餘額不足","Balance too little":"餘額不足","Product income":"產品收入","Buy product":"購買NFT","Buy platform coin":"購買MTC幣","recharge back":"充值返利","error add":"錯誤添加","coin exchange amount":"MTC幣兌換金額","coin interest":"MTC幣利息","coin is staking please cancel staking":"MTC幣正在進行貨幣鎖定，請取消貨幣鎖定","Platform change":"平台變更","withdraw refuse":"拒絕提款","Not meeting the minimum withdrawal amount":"未達到最低提款金額","Not yet due for withdrawal time":"尚未到達提款時間","Please verify email":"請驗證電子郵件","Activity amount must greater in progress product total amount":"活動金額必須大於當前持有的押注總金額","Insufficient quantity":"MTC幣已搶光","Activity not exist":"折扣活動不存在","Buy activity":"購買折扣MTC幣","Not Start":"折扣活動尚未開始","Is over":"折扣活動已結束","Create address error":"創建地址錯誤","Not a correct address":"不是正確的地址","Processed":"處理完成","Out wallet password is empty":"外部錢包密碼為空","Trans error please check wallet":"轉帳錯誤，請檢查錢包","Please input trans hash":"請輸入轉帳哈希","Please input coin type":"請選擇網絡類型","Not Find Trans":"未找到轉帳","Transaction processed":"交易已處理","Transaction does not belong to you":"該交易不屬於您","Transaction does not USDT":"該交易不是USDT","Channel":"頻道","Consultation":"諮詢","Consult":"諮詢","Group":"群組","nonWithdrawAmount":"不可提現金額","checkIn":"簽到","checkInTip":"今日簽到成功！","Today Has Sign In":"今日已簽到","todayChecked":"今日已簽到","registerGift":"註冊禮物","dailyCheckIn":"每日簽到","withdraw.addressSetting":"請設定 {withdrawalType} 提現地址","trade.open":"開放中","trade.noOpen":"暫未開放","trade.noOpen.message":"產品未開放","NFT Staking Mining":"NFT 質押挖礦","days":"天","hours":"時","minutes":"分","index.wallet":"錢包","index.mtcCenter":"MTC中心","index.myNft":"我的NFT","mata.title":"ATANFT簡介","mata.intro1":"ATANFT 挖礦依託 Manta Network 隱私生態，圍繞「隱私型 NFT 持有與生態貢獻」設計代幣激勵體系。核心目標是通過挖礦引導用戶參與 ATANFT 流通、應用及生態建設，同時強化 Manta 隱私資產體系的活躍度。參與者主要透過質押、互動等方式獲取 MTC 代幣或專屬隱私 NFT 獎勵。","mata.intro2":"挖礦模式以「隱私屬性 + 生態聯動」為核心特色，主要分為兩大類型：","mata.intro3":"<text class=\'bold\'>質押挖礦</text>：用戶將持有的 ATANFT（含普通數位藏品、SBT 身份憑證等類型）質押至指定智慧合約。收益根據 ATANFT 的稀缺度（如創世款、限定款）、持有時長及隱私互動記錄計算。例如，質押「隱私身份類 ATANFT」可獲得基礎年化收益，若同時開啟「零知識證明交易」功能（如透過 MantaPay 完成隱私轉帳），還可額外提升 10%-20% 的獎勵係數。收益每日以 MTC 代幣發放。","mata.intro4":"<text class=\'bold\'>生態互動挖礦</text>：鼓勵用戶在 Manta 生態中使用 ATANFT 完成特定任務，如將 ATANFT 集成至鏈遊場景（作為遊戲角色或道具參與對戰）、在 DeFi 模組（如 MantaSwap）中用作 LP 抵押、邀請新用戶鑄造首枚 ATANFT 等。不同任務對應不同積分，積分達標可兌換專屬「挖礦紀念款 ATANFT」（具更高質押收益），或直接兌換 MTC 代幣。部分高難度任務（如完成跨鏈隱私 NFT 流轉）還可解鎖限量權益。","token.rule1":"用戶將購買的 ATANFT 質押到指定的智慧合約中。收益根據 ATANFT 的稀缺性計算，每兩小時自動記入用戶賬戶。","token.rule2":"MTC 代幣可按市場價兌換 USDT。","trade.pay":"支付金額","trade.pay.tip":"每枚 ATANFT 售價 {amount} USDT，購買需為 {amount} USDT 的整數倍（如 {amount1} USDT、{amount2} USDT）。","trade.intro":"Crazy Monkey NFT 憑藉獨特設計與限量屬性，每次收藏都是驚喜的潛力資產。","investPeriod":"質押週期","order.cumulativeIncome":"累計收益","order.amount":"金額","order.num":"數量","agencyRebate":"代理返利","order.doing":"進行中","order.history":"歷史記錄","registerTime":"註冊時間","stakingBackProfit":"推薦返利","exchange.fee":"手續費","trade.sale":"在售","trade.sold":"售罄","trade.sold.message":"今日已售罄","order.staked":"已質押 {day} 天","order.completed.time":"結束時間","order.completed.time1":"到期時間：{time}","team.totalRecharge":"累計充值","trade.numWarning":"NFT數量不足","Insufficient NFT quantity":"NFT數量不足","token.buy":"買入","token.sell":"賣出","token.noOpen":"暫未開放","token.transaction":"交易","wallet.withdraw.tip":"最低提款：<span class=\'uni-text-color\'>{min} USDT</span>，每筆交易收取<span class=\'uni-text-color\'>{fee}%</span>的費用。","wallet.withdraw.tipTwo":"到帳時間：提款將在 <span class=\'uni-text-color\'>{time}</span> 小時內記入您的錢包.","wallet.withdraw.tipOne":"提款時間：系統時間 <span class=\'uni-text-color\'>{start}</span> 至 <span class=\'uni-text-color\'>{end}</span>","star.user":"星級玩家"}')
    },
    fb49: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0, t("64aa");
        var n = {
            upload: {
                accept: "image",
                capture: function() {
                    return ["album", "camera"]
                },
                compressed: !0,
                camera: "back",
                maxDuration: 60,
                uploadIcon: "camera-fill",
                uploadIconColor: "#D3D4D6",
                useBeforeRead: !1,
                previewFullImage: !0,
                maxCount: 52,
                disabled: !1,
                imageMode: "aspectFill",
                name: "",
                sizeType: function() {
                    return ["original", "compressed"]
                },
                multiple: !1,
                deletable: !0,
                maxSize: Number.MAX_VALUE,
                fileList: function() {
                    return []
                },
                uploadText: "",
                width: 80,
                height: 80,
                previewImage: !0
            }
        };
        a.default = n
    },
    fbef: function(e, a, t) {
        "use strict";
        t("6a54"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        a.default = {
            collapse: {
                value: null,
                accordion: !1,
                border: !0
            }
        }
    },
    fbfa: function(e, a, t) {
        "use strict";
        t.d(a, "b", (function() {
            return n
        })), t.d(a, "c", (function() {
            return i
        })), t.d(a, "a", (function() {}));
        var n = function() {
                var e = this.$createElement,
                    a = this._self._c || e;
                return a("App", {
                    attrs: {
                        keepAliveInclude: this.keepAliveInclude
                    }
                })
            },
            i = []
    }
});