/*! For license information please see main.js.LICENSE.txt */
(() => {
    var t = {
            398: () => {
                const t = document.querySelectorAll('.faq__accordion');
                let e = null;
                t.forEach((t) => {
                    t.addEventListener('click', (t) => {
                        const r = t.currentTarget,
                            i = r.querySelector('.faq__control'),
                            n = r.querySelector('.faq__content');
                        if (null !== e) {
                            let t = e.querySelector('.faq__control'),
                                r = e.querySelector('.faq__content');
                            e.classList.remove('faq__accordion-open'), t.setAttribute('aria-expanded', !1), t.setAttribute('aria-hidden', !0), (r.style.maxHeight = null);
                        }
                        r.classList.toggle('faq__accordion-open'), r.classList.contains('faq__accordion-open') ? (i.setAttribute('aria-expanded', !0), n.setAttribute('aria-hidden', !1), (n.style.maxHeight = n.scrollHeight + 'px')) : (i.setAttribute('aria-expanded', !1), n.setAttribute('aria-hidden', !0), (n.style.maxHeight = null)), (e = r);
                    });
                });
            },
            449: () => {
                const t = document.querySelectorAll('.steps__accordion');
                let e = null;
                t.forEach((t) => {
                    t.addEventListener('click', (t) => {
                        const r = t.currentTarget,
                            i = r.querySelector('.steps__control'),
                            n = r.querySelector('.steps__content');
                        if (null !== e) {
                            let t = e.querySelector('.steps__control'),
                                r = e.querySelector('.steps__content');
                            e.classList.remove('steps__accordion-open'), t.setAttribute('aria-expanded', !1), t.setAttribute('aria-hidden', !0), (r.style.maxHeight = null);
                        }
                        r.classList.toggle('steps__accordion-open'), r.classList.contains('steps__accordion-open') ? (i.setAttribute('aria-expanded', !0), n.setAttribute('aria-hidden', !1), (n.style.maxHeight = n.scrollHeight + 'px')) : (i.setAttribute('aria-expanded', !1), n.setAttribute('aria-hidden', !0), (n.style.maxHeight = null)), (e = r);
                    });
                });
            },
            125: () => {
                VANTA.GLOBE({ el: '.hero', mouseControls: !0, touchControls: !0, gyroControls: !1, minHeight: 445, minWidth: 750, scale: 1, scaleMobile: 1, color: 887001, color2: 13193958, backgroundColor: 16777215, spacing: 15 });
            },
            732: () => {
                const t = document.querySelector('.burger');
                null !== t &&
                    t.addEventListener('click', () => {
                        t.classList.toggle('burger-active');
                    });
            },
            758: () => {
                function t(t) {
                    const e = ['Байт', 'Кбайт', 'Мбайт', 'Гбайт', 'Тбайт'];
                    if (0 === t) return 'n/a';
                    const r = parseInt(Math.floor(Math.log(t) / Math.log(1024)), 10);
                    return 0 === r ? `${t} ${e[r]}` : `${(t / 1024 ** r).toFixed(1)} ${e[r]}`;
                }
                document.querySelectorAll('.file-input__container').forEach((e) => {
                    const r = e.closest('section').classList[0];
                    dt = new DataTransfer();
                    const i = e.querySelector(`.${r}__input-file`);
                    let n = e.querySelector(`.${r}__list-file`);
                    i.addEventListener('change', () => {
                        console.log(n);
                        for (let e = 0; e < i.files.length; e++) {
                            let o = `<div class="${r}__item-file">\n\t\t\t\t\t\t\t\t\t<div class="${r}__container-doc">\n\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\tloading="lazy"\n\t\t\t\t\t\t\t\t\t\t\tsrc="./img/doc.svg"\n\t\t\t\t\t\t\t\t\t\t\tclass="image ${r}__icon-doc"\n\t\t\t\t\t\t\t\t\t\t\twidth="44"\n\t\t\t\t\t\t\t\t\t\t\theight="44"\n\t\t\t\t\t\t\t\t\t\t\talt="Иконка документ"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t<div class="${r}__container-text">\n\t\t\t\t\t\t\t\t\t\t\t<span class="title__h6">${
                                i.files.item(e).name
                            }</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class="title__h6 title__h6-grey">${t(
                                i.files.item(e).size
                            )}</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class="${r}__button-remove">\n\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\tloading="lazy"\n\t\t\t\t\t\t\t\t\t\t\tsrc="./img/close.svg"\n\t\t\t\t\t\t\t\t\t\t\tclass="image ${r}__icon-close"\n\t\t\t\t\t\t\t\t\t\t\twidth="24"\n\t\t\t\t\t\t\t\t\t\t\theight="24"\n\t\t\t\t\t\t\t\t\t\t\talt="Иконка закрыть"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>`;
                            n.insertAdjacentHTML('beforeend', o), dt.items.add(i.files.item(e));
                        }
                        e.querySelectorAll(`.${r}__button-remove`).forEach((t) => {
                            t.addEventListener('click', () => {
                                !(function (t, e, r) {
                                    let i = t.previousElementSibling.innerHTML;
                                    t.parentNode.remove();
                                    for (let t = 0; t < r.items.length; t++) i === r.items[t].getAsFile().name && r.items.remove(t);
                                    e.files = r.files;
                                })(t, i, dt);
                            });
                        }),
                            (i.files = dt.files);
                    });
                });
            },
            770: () => {
                const t = document.querySelector('.cases__button-more'),
                    e = document.querySelectorAll('.cases__item-hidden');
                null !== t &&
                    t.addEventListener('click', () => {
                        e.forEach((t) => {
                            t.classList.remove('cases__item-hidden');
                        }),
                            (t.style.display = 'none');
                    });
            },
            963: () => {
                const t = document.querySelectorAll('.input-name'),
                    e = document.querySelectorAll('.input-tel'),
                    r = document.querySelectorAll('.input-link');
                function i(t, e) {
                    t.forEach((t) => {
                        t.setAttribute('placeholder', e);
                    });
                }
                window.matchMedia('(max-width: 768px)').matches && (i(t, 'Имя*'), i(e, 'Номер телефона*'), i(r, 'Ссылка на ТЗ в figma'));
            },
            229: function (t) {
                var e;
                'undefined' != typeof self && self,
                    (e = () =>
                        (() => {
                            'use strict';
                            var t = {
                                    d: (e, r) => {
                                        for (var i in r) t.o(r, i) && !t.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: r[i] });
                                    },
                                    o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
                                    r: (t) => {
                                        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 });
                                    },
                                },
                                e = {};
                            function r(t, e) {
                                return null == t && (t = 0), null == e && (e = 1), t + Math.random() * (e - t);
                            }
                            t.r(e),
                                t.d(e, { default: () => d }),
                                (Number.prototype.clamp = function (t, e) {
                                    return Math.min(Math.max(this, t), e);
                                });
                            const i = (t) => 0.299 * t.r + 0.587 * t.g + 0.114 * t.b;
                            function n(t) {
                                for (; t.children && t.children.length > 0; ) n(t.children[0]), t.remove(t.children[0]);
                                t.geometry && t.geometry.dispose(),
                                    t.material &&
                                        (Object.keys(t.material).forEach((e) => {
                                            t.material[e] && null !== t.material[e] && 'function' == typeof t.material[e].dispose && t.material[e].dispose();
                                        }),
                                        t.material.dispose());
                            }
                            const o = 'object' == typeof window;
                            let s = (o && window.THREE) || {};
                            o && !window.VANTA && (window.VANTA = {});
                            const a = (o && window.VANTA) || {};
                            (a.register = (t, e) => (a[t] = (t) => new e(t))), (a.version = '0.5.24');
                            const l = function () {
                                return Array.prototype.unshift.call(arguments, '[VANTA]'), console.error.apply(this, arguments);
                            };
                            a.VantaBase = class {
                                constructor() {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    if (!o) return !1;
                                    (a.current = this), (this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this)), (this.windowTouchWrapper = this.windowTouchWrapper.bind(this)), (this.windowGyroWrapper = this.windowGyroWrapper.bind(this)), (this.resize = this.resize.bind(this)), (this.animationLoop = this.animationLoop.bind(this)), (this.restart = this.restart.bind(this));
                                    const e = 'function' == typeof this.getDefaultOptions ? this.getDefaultOptions() : this.defaultOptions;
                                    if (((this.options = Object.assign({ mouseControls: !0, touchControls: !0, gyroControls: !1, minHeight: 200, minWidth: 200, scale: 1, scaleMobile: 1 }, e)), (t instanceof HTMLElement || 'string' == typeof t) && (t = { el: t }), Object.assign(this.options, t), this.options.THREE && (s = this.options.THREE), (this.el = this.options.el), null == this.el))
                                        l('Instance needs "el" param!');
                                    else if (!(this.options.el instanceof HTMLElement)) {
                                        const t = this.el;
                                        if (((this.el = ((r = t), document.querySelector(r))), !this.el)) return void l('Cannot find element', t);
                                    }
                                    var r, i;
                                    this.prepareEl(), this.initThree(), this.setSize();
                                    try {
                                        this.init();
                                    } catch (t) {
                                        return l('Init error', t), this.renderer && this.renderer.domElement && this.el.removeChild(this.renderer.domElement), void (this.options.backgroundColor && (console.log('[VANTA] Falling back to backgroundColor'), (this.el.style.background = ((i = this.options.backgroundColor), 'number' == typeof i ? '#' + ('00000' + i.toString(16)).slice(-6) : i))));
                                    }
                                    this.initMouse(), this.resize(), this.animationLoop();
                                    const n = window.addEventListener;
                                    n('resize', this.resize),
                                        window.requestAnimationFrame(this.resize),
                                        this.options.mouseControls && (n('scroll', this.windowMouseMoveWrapper), n('mousemove', this.windowMouseMoveWrapper)),
                                        this.options.touchControls && (n('touchstart', this.windowTouchWrapper), n('touchmove', this.windowTouchWrapper)),
                                        this.options.gyroControls && n('deviceorientation', this.windowGyroWrapper);
                                }
                                setOptions() {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    Object.assign(this.options, t), this.triggerMouseMove();
                                }
                                prepareEl() {
                                    let t, e;
                                    if ('undefined' != typeof Node && Node.TEXT_NODE)
                                        for (t = 0; t < this.el.childNodes.length; t++) {
                                            const e = this.el.childNodes[t];
                                            if (e.nodeType === Node.TEXT_NODE) {
                                                const t = document.createElement('span');
                                                (t.textContent = e.textContent), e.parentElement.insertBefore(t, e), e.remove();
                                            }
                                        }
                                    for (t = 0; t < this.el.children.length; t++) (e = this.el.children[t]), 'static' === getComputedStyle(e).position && (e.style.position = 'relative'), 'auto' === getComputedStyle(e).zIndex && (e.style.zIndex = 1);
                                    'static' === getComputedStyle(this.el).position && (this.el.style.position = 'relative');
                                }
                                applyCanvasStyles(t) {
                                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    Object.assign(t.style, { position: 'absolute', zIndex: 0, top: 0, left: 0, background: '' }), Object.assign(t.style, e), t.classList.add('vanta-canvas');
                                }
                                initThree() {
                                    s.WebGLRenderer ? ((this.renderer = new s.WebGLRenderer({ alpha: !0, antialias: !0 })), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), (this.scene = new s.Scene())) : console.warn('[VANTA] No THREE defined on window');
                                }
                                getCanvasElement() {
                                    return this.renderer ? this.renderer.domElement : this.p5renderer ? this.p5renderer.canvas : void 0;
                                }
                                getCanvasRect() {
                                    const t = this.getCanvasElement();
                                    return !!t && t.getBoundingClientRect();
                                }
                                windowMouseMoveWrapper(t) {
                                    const e = this.getCanvasRect();
                                    if (!e) return !1;
                                    const r = t.clientX - e.left,
                                        i = t.clientY - e.top;
                                    r >= 0 && i >= 0 && r <= e.width && i <= e.height && ((this.mouseX = r), (this.mouseY = i), this.options.mouseEase || this.triggerMouseMove(r, i));
                                }
                                windowTouchWrapper(t) {
                                    const e = this.getCanvasRect();
                                    if (!e) return !1;
                                    if (1 === t.touches.length) {
                                        const r = t.touches[0].clientX - e.left,
                                            i = t.touches[0].clientY - e.top;
                                        r >= 0 && i >= 0 && r <= e.width && i <= e.height && ((this.mouseX = r), (this.mouseY = i), this.options.mouseEase || this.triggerMouseMove(r, i));
                                    }
                                }
                                windowGyroWrapper(t) {
                                    const e = this.getCanvasRect();
                                    if (!e) return !1;
                                    const r = Math.round(2 * t.alpha) - e.left,
                                        i = Math.round(2 * t.beta) - e.top;
                                    r >= 0 && i >= 0 && r <= e.width && i <= e.height && ((this.mouseX = r), (this.mouseY = i), this.options.mouseEase || this.triggerMouseMove(r, i));
                                }
                                triggerMouseMove(t, e) {
                                    void 0 === t && void 0 === e && (this.options.mouseEase ? ((t = this.mouseEaseX), (e = this.mouseEaseY)) : ((t = this.mouseX), (e = this.mouseY))), this.uniforms && ((this.uniforms.iMouse.value.x = t / this.scale), (this.uniforms.iMouse.value.y = e / this.scale));
                                    const r = t / this.width,
                                        i = e / this.height;
                                    'function' == typeof this.onMouseMove && this.onMouseMove(r, i);
                                }
                                setSize() {
                                    this.scale || (this.scale = 1),
                                        'undefined' != typeof navigator && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600) && this.options.scaleMobile ? (this.scale = this.options.scaleMobile) : this.options.scale && (this.scale = this.options.scale),
                                        (this.width = Math.max(this.el.offsetWidth, this.options.minWidth)),
                                        (this.height = Math.max(this.el.offsetHeight, this.options.minHeight));
                                }
                                initMouse() {
                                    ((!this.mouseX && !this.mouseY) || (this.mouseX === this.options.minWidth / 2 && this.mouseY === this.options.minHeight / 2)) && ((this.mouseX = this.width / 2), (this.mouseY = this.height / 2), this.triggerMouseMove(this.mouseX, this.mouseY));
                                }
                                resize() {
                                    this.setSize(),
                                        this.camera && ((this.camera.aspect = this.width / this.height), 'function' == typeof this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix()),
                                        this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)),
                                        'function' == typeof this.onResize && this.onResize();
                                }
                                isOnScreen() {
                                    const t = this.el.offsetHeight,
                                        e = this.el.getBoundingClientRect(),
                                        r = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop,
                                        i = e.top + r;
                                    return i - window.innerHeight <= r && r <= i + t;
                                }
                                animationLoop() {
                                    this.t || (this.t = 0), this.t2 || (this.t2 = 0);
                                    const t = performance.now();
                                    if (this.prevNow) {
                                        let e = (t - this.prevNow) / (1e3 / 60);
                                        (e = Math.max(0.2, Math.min(e, 5))), (this.t += e), (this.t2 += (this.options.speed || 1) * e), this.uniforms && (this.uniforms.iTime.value = 0.016667 * this.t2);
                                    }
                                    return (
                                        (this.prevNow = t),
                                        this.options.mouseEase &&
                                            ((this.mouseEaseX = this.mouseEaseX || this.mouseX || 0),
                                            (this.mouseEaseY = this.mouseEaseY || this.mouseY || 0),
                                            Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > 0.1 && ((this.mouseEaseX += 0.05 * (this.mouseX - this.mouseEaseX)), (this.mouseEaseY += 0.05 * (this.mouseY - this.mouseEaseY)), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))),
                                        (this.isOnScreen() || this.options.forceAnimate) &&
                                            ('function' == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update(), 'function' == typeof this.afterRender && this.afterRender()),
                                        (this.req = window.requestAnimationFrame(this.animationLoop))
                                    );
                                }
                                restart() {
                                    if (this.scene) for (; this.scene.children.length; ) this.scene.remove(this.scene.children[0]);
                                    'function' == typeof this.onRestart && this.onRestart(), this.init();
                                }
                                init() {
                                    'function' == typeof this.onInit && this.onInit();
                                }
                                destroy() {
                                    'function' == typeof this.onDestroy && this.onDestroy();
                                    const t = window.removeEventListener;
                                    t('touchstart', this.windowTouchWrapper), t('touchmove', this.windowTouchWrapper), t('scroll', this.windowMouseMoveWrapper), t('mousemove', this.windowMouseMoveWrapper), t('deviceorientation', this.windowGyroWrapper), t('resize', this.resize), window.cancelAnimationFrame(this.req);
                                    const e = this.scene;
                                    e && e.children && n(e), this.renderer && (this.renderer.domElement && this.el.removeChild(this.renderer.domElement), (this.renderer = null), (this.scene = null)), a.current === this && (a.current = null);
                                }
                            };
                            const u = a.VantaBase,
                                c = 'object' == typeof window;
                            let h = c && window.THREE;
                            class f extends u {
                                static initClass() {
                                    this.prototype.defaultOptions = { color: 16727937, color2: 16777215, size: 1, backgroundColor: 2299196, points: 10, maxDistance: 20, spacing: 15, showDots: !0 };
                                }
                                constructor(t) {
                                    (h = t.THREE || h), super(t);
                                }
                                genPoint(t, e, r) {
                                    let i;
                                    if ((this.points || (this.points = []), this.options.showDots)) {
                                        const t = new h.SphereGeometry(0.25, 12, 12),
                                            e = new h.MeshLambertMaterial({ color: this.options.color });
                                        i = new h.Mesh(t, e);
                                    } else i = new h.Object3D();
                                    return this.cont.add(i), (i.ox = t), (i.oy = e), (i.oz = r), i.position.set(t, e, r), (i.r = 0), this.points.push(i);
                                }
                                onInit() {
                                    (this.cont = new h.Group()), this.cont.position.set(-50, -20, 0), this.scene.add(this.cont);
                                    let t = this.options.points,
                                        { spacing: e } = this.options;
                                    const n = t * t * 2;
                                    (this.linePositions = new Float32Array(n * n * 3)), (this.lineColors = new Float32Array(n * n * 3));
                                    const o = i(new h.Color(this.options.color)),
                                        s = i(new h.Color(this.options.backgroundColor));
                                    this.blending = o > s ? 'additive' : 'subtractive';
                                    const a = new h.BufferGeometry();
                                    a.setAttribute('position', new h.BufferAttribute(this.linePositions, 3).setUsage(h.DynamicDrawUsage)),
                                        a.setAttribute('color', new h.BufferAttribute(this.lineColors, 3).setUsage(h.DynamicDrawUsage)),
                                        a.computeBoundingSphere(),
                                        a.setDrawRange(0, 0),
                                        new h.LineBasicMaterial({ vertexColors: h.VertexColors, blending: 'additive' === this.blending ? h.AdditiveBlending : null, transparent: !0 });
                                    for (let r = 0; r <= t; r++)
                                        for (let i = 0; i <= t; i++) {
                                            const n = 0,
                                                o = (r - t / 2) * e;
                                            let s = (i - t / 2) * e;
                                            this.genPoint(o, n, s);
                                        }
                                    (this.camera = new h.PerspectiveCamera(20, this.width / this.height, 0.01, 1e4)), this.camera.position.set(50, 100, 150), this.scene.add(this.camera);
                                    const l = new h.AmbientLight(16777215, 0.75);
                                    this.scene.add(l), (this.spot = new h.SpotLight(16777215, 1)), this.spot.position.set(0, 200, 0), (this.spot.distance = 400), (this.spot.target = this.cont), this.scene.add(this.spot), (this.cont2 = new h.Group()), this.cont2.position.set(0, 15, 0), this.scene.add(this.cont2);
                                    const u = new h.LineBasicMaterial({ color: this.options.color2 }),
                                        c = [];
                                    for (let t = 0; t < 80; t++) {
                                        const t = r(18, 24),
                                            e = t + r(1, 6),
                                            i = r(-1, 1),
                                            n = Math.sqrt(1 - i * i),
                                            o = r(0, 2 * Math.PI),
                                            s = Math.sin(o) * n,
                                            a = Math.cos(o) * n;
                                        c.push(new h.Vector3(a * t, s * t, i * t)), c.push(new h.Vector3(a * e, s * e, i * e));
                                    }
                                    const f = new h.BufferGeometry().setFromPoints(c);
                                    (this.linesMesh2 = new h.LineSegments(f, u)), this.linesMesh2.position.set(0, 0, 0), this.cont2.add(this.linesMesh2);
                                    const d = new h.LineBasicMaterial({ color: this.options.color2, linewidth: 2 }),
                                        p = [];
                                    p.push(new h.Vector3(0, 30, 0)), p.push(new h.Vector3(0, -30, 0));
                                    for (let t = 0; t < 4; t++) {
                                        let e = 0.15 * Math.cos((t / 4) * Math.PI * 2),
                                            r = 0.15 * Math.sin((t / 4) * Math.PI * 2),
                                            i = [17.9, 12, 8, 5, 3, 2, 1.5, 1.1, 0.8, 0.6, 0.45, 0.3, 0.2, 0.1, 0.05, 0.03, 0.02, 0.01];
                                        for (let t = 0; t < i.length; t++) {
                                            let n = i[t],
                                                o = 6 * (t + 1);
                                            p.push(new h.Vector3(e * o, n, r * o)), p.push(new h.Vector3(e * o, -n, r * o));
                                        }
                                    }
                                    const m = new h.BufferGeometry().setFromPoints(p);
                                    (this.linesMesh3 = new h.LineSegments(m, d)), this.linesMesh3.position.set(0, 0, 0), this.cont2.add(this.linesMesh3);
                                    const g = new h.LineBasicMaterial({ color: this.options.color }),
                                        _ = new h.SphereGeometry(18 * this.options.size, 18, 14),
                                        v = new h.EdgesGeometry(_);
                                    (this.sphere = new h.LineSegments(v, g)), this.sphere.position.set(0, 0, 0), this.cont2.add(this.sphere), (this.cont2.rotation.x = -0.25);
                                }
                                onUpdate() {
                                    let t;
                                    null != this.helper && this.helper.update(), null != this.controls && this.controls.update();
                                    const e = this.camera;
                                    Math.abs(e.tx - e.position.x) > 0.01 && ((t = e.tx - e.position.x), (e.position.x += 0.02 * t)),
                                        Math.abs(e.ty - e.position.y) > 0.01 && ((t = e.ty - e.position.y), (e.position.y += 0.02 * t)),
                                        c && window.innerWidth < 480 ? e.lookAt(new h.Vector3(-10, 0, 0)) : c && window.innerWidth < 720 ? e.lookAt(new h.Vector3(-20, 0, 0)) : e.lookAt(new h.Vector3(-40, 0, 0));
                                    let r = 0,
                                        i = 0;
                                    const n = new h.Color(this.options.backgroundColor),
                                        o = new h.Color(this.options.color),
                                        s = new h.Color(this.options.color2),
                                        a = o.clone().sub(n);
                                    this.rayCaster && this.rayCaster.setFromCamera(new h.Vector2(this.rcMouseX, this.rcMouseY), this.camera), this.linesMesh2 && ((this.linesMesh2.rotation.z += 0.002), (this.linesMesh2.rotation.x += 8e-4), (this.linesMesh2.rotation.y += 5e-4)), this.sphere && ((this.sphere.rotation.y += 0.002), (this.linesMesh3.rotation.y -= 0.004));
                                    for (let t = 0; t < this.points.length; t++) {
                                        let e, s;
                                        const l = this.points[t];
                                        s = this.rayCaster ? this.rayCaster.ray.distanceToPoint(l.position) : 1e3;
                                        const u = s.clamp(5, 15);
                                        (l.scale.z = (0.25 * (15 - u)).clamp(1, 100)), (l.scale.x = l.scale.y = l.scale.z), (l.position.y = 2 * Math.sin(l.position.x / 10 + 0.01 * this.t + (l.position.z / 10) * 0.5));
                                        for (let s = t; s < this.points.length; s++) {
                                            const t = this.points[s],
                                                u = l.position.x - t.position.x,
                                                c = l.position.y - t.position.y,
                                                f = l.position.z - t.position.z;
                                            if (((e = Math.sqrt(u * u + c * c + f * f)), e < this.options.maxDistance)) {
                                                let s,
                                                    u = 2 * (1 - e / this.options.maxDistance);
                                                (u = u.clamp(0, 1)),
                                                    (s = 'additive' === this.blending ? new h.Color(0).lerp(a, u) : n.clone().lerp(o, u)),
                                                    (this.linePositions[r++] = l.position.x),
                                                    (this.linePositions[r++] = l.position.y),
                                                    (this.linePositions[r++] = l.position.z),
                                                    (this.linePositions[r++] = t.position.x),
                                                    (this.linePositions[r++] = t.position.y),
                                                    (this.linePositions[r++] = t.position.z),
                                                    (this.lineColors[i++] = s.r),
                                                    (this.lineColors[i++] = s.g),
                                                    (this.lineColors[i++] = s.b),
                                                    (this.lineColors[i++] = s.r),
                                                    (this.lineColors[i++] = s.g),
                                                    (this.lineColors[i++] = s.b);
                                            }
                                        }
                                    }
                                    return this.sphere.material.color.set(o), this.linesMesh2.material.color.set(s), this.linesMesh3.material.color.set(s), 0.001 * this.t;
                                }
                                onMouseMove(t, e) {
                                    const r = this.camera;
                                    r.oy || ((r.oy = r.position.y), (r.ox = r.position.x), (r.oz = r.position.z));
                                    const i = Math.atan2(r.oz, r.ox),
                                        n = Math.sqrt(r.oz * r.oz + r.ox * r.ox),
                                        o = i + 1.5 * (t - 0.5) * (this.options.mouseCoeffX || 1);
                                    (r.tz = n * Math.sin(o)), (r.tx = n * Math.cos(o)), (r.ty = r.oy + 80 * (e - 0.5) * (this.options.mouseCoeffY || 1)), this.rayCaster, (this.rcMouseX = 2 * t - 1), (this.rcMouseY = 2 * -t + 1);
                                }
                                onRestart() {
                                    this.scene.remove(this.linesMesh), (this.points = []);
                                }
                            }
                            f.initClass();
                            const d = a.register('GLOBE', f);
                            return e;
                        })()),
                    (t.exports = e());
            },
        },
        e = {};
    function r(i) {
        var n = e[i];
        if (void 0 !== n) return n.exports;
        var o = (e[i] = { exports: {} });
        return t[i].call(o.exports, o, o.exports, r), o.exports;
    }
    (() => {
        'use strict';
        const t = { windowEl: window, documentEl: document, htmlEl: document.documentElement, bodyEl: document.body };
        function e(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        function i(t, e) {
            (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
        }
        var n,
            o,
            s,
            a,
            l,
            u,
            c,
            h,
            f,
            d,
            p,
            m,
            g,
            _,
            v,
            y = { autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' } },
            w = { duration: 0.5, overwrite: !1, delay: 0 },
            b = 1e8,
            x = 1e-8,
            T = 2 * Math.PI,
            M = T / 4,
            A = 0,
            E = Math.sqrt,
            S = Math.cos,
            k = Math.sin,
            C = function (t) {
                return 'string' == typeof t;
            },
            O = function (t) {
                return 'function' == typeof t;
            },
            P = function (t) {
                return 'number' == typeof t;
            },
            q = function (t) {
                return void 0 === t;
            },
            z = function (t) {
                return 'object' == typeof t;
            },
            D = function (t) {
                return !1 !== t;
            },
            R = function () {
                return 'undefined' != typeof window;
            },
            L = function (t) {
                return O(t) || C(t);
            },
            B = ('function' == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
            F = Array.isArray,
            Y = /(?:-?\.?\d|\.)+/gi,
            I = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            X = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            N = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            W = /[+-]=-?[.\d]+/,
            H = /[^,'"\[\]\s]+/gi,
            V = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
            U = {},
            j = {},
            G = function (t) {
                return (j = Tt(t, U)) && xr;
            },
            $ = function (t, e) {
                return console.warn('Invalid property', t, 'set to', e, 'Missing plugin? gsap.registerPlugin()');
            },
            Q = function (t, e) {
                return !e && console.warn(t);
            },
            Z = function (t, e) {
                return (t && (U[t] = e) && j && (j[t] = e)) || U;
            },
            K = function () {
                return 0;
            },
            J = { suppressEvents: !0, isStart: !0, kill: !1 },
            tt = { suppressEvents: !0, kill: !1 },
            et = { suppressEvents: !0 },
            rt = {},
            it = [],
            nt = {},
            ot = {},
            st = {},
            at = 30,
            lt = [],
            ut = '',
            ct = function (t) {
                var e,
                    r,
                    i = t[0];
                if ((z(i) || O(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
                    for (r = lt.length; r-- && !lt[r].targetTest(i); );
                    e = lt[r];
                }
                for (r = t.length; r--; ) (t[r] && (t[r]._gsap || (t[r]._gsap = new Be(t[r], e)))) || t.splice(r, 1);
                return t;
            },
            ht = function (t) {
                return t._gsap || ct(te(t))[0]._gsap;
            },
            ft = function (t, e, r) {
                return (r = t[e]) && O(r) ? t[e]() : (q(r) && t.getAttribute && t.getAttribute(e)) || r;
            },
            dt = function (t, e) {
                return (t = t.split(',')).forEach(e) || t;
            },
            pt = function (t) {
                return Math.round(1e5 * t) / 1e5 || 0;
            },
            mt = function (t) {
                return Math.round(1e7 * t) / 1e7 || 0;
            },
            gt = function (t, e) {
                var r = e.charAt(0),
                    i = parseFloat(e.substr(2));
                return (t = parseFloat(t)), '+' === r ? t + i : '-' === r ? t - i : '*' === r ? t * i : t / i;
            },
            _t = function (t, e) {
                for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
                return i < r;
            },
            vt = function () {
                var t,
                    e,
                    r = it.length,
                    i = it.slice(0);
                for (nt = {}, it.length = 0, t = 0; t < r; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
            },
            yt = function (t, e, r, i) {
                it.length && !o && vt(), t.render(e, r, i || (o && e < 0 && (t._initted || t._startAt))), it.length && !o && vt();
            },
            wt = function (t) {
                var e = parseFloat(t);
                return (e || 0 === e) && (t + '').match(H).length < 2 ? e : C(t) ? t.trim() : t;
            },
            bt = function (t) {
                return t;
            },
            xt = function (t, e) {
                for (var r in e) r in t || (t[r] = e[r]);
                return t;
            },
            Tt = function (t, e) {
                for (var r in e) t[r] = e[r];
                return t;
            },
            Mt = function t(e, r) {
                for (var i in r) '__proto__' !== i && 'constructor' !== i && 'prototype' !== i && (e[i] = z(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
                return e;
            },
            At = function (t, e) {
                var r,
                    i = {};
                for (r in t) r in e || (i[r] = t[r]);
                return i;
            },
            Et = function (t) {
                var e,
                    r = t.parent || a,
                    i = t.keyframes
                        ? ((e = F(t.keyframes)),
                          function (t, r) {
                              for (var i in r) i in t || ('duration' === i && e) || 'ease' === i || (t[i] = r[i]);
                          })
                        : xt;
                if (D(t.inherit)) for (; r; ) i(t, r.vars.defaults), (r = r.parent || r._dp);
                return t;
            },
            St = function (t, e, r, i, n) {
                void 0 === r && (r = '_first'), void 0 === i && (i = '_last');
                var o,
                    s = t[i];
                if (n) for (o = e[n]; s && s[n] > o; ) s = s._prev;
                return s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[r]), (t[r] = e)), e._next ? (e._next._prev = e) : (t[i] = e), (e._prev = s), (e.parent = e._dp = t), e;
            },
            kt = function (t, e, r, i) {
                void 0 === r && (r = '_first'), void 0 === i && (i = '_last');
                var n = e._prev,
                    o = e._next;
                n ? (n._next = o) : t[r] === e && (t[r] = o), o ? (o._prev = n) : t[i] === e && (t[i] = n), (e._next = e._prev = e.parent = null);
            },
            Ct = function (t, e) {
                t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
            },
            Ot = function (t, e) {
                if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
                return t;
            },
            Pt = function (t, e, r, i) {
                return t._startAt && (o ? t._startAt.revert(tt) : (t.vars.immediateRender && !t.vars.autoRevert) || t._startAt.render(e, !0, i));
            },
            qt = function t(e) {
                return !e || (e._ts && t(e.parent));
            },
            zt = function (t) {
                return t._repeat ? Dt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
            },
            Dt = function (t, e) {
                var r = Math.floor((t /= e));
                return t && r === t ? r - 1 : r;
            },
            Rt = function (t, e) {
                return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
            },
            Lt = function (t) {
                return (t._end = mt(t._start + (t._tDur / Math.abs(t._ts || t._rts || x) || 0)));
            },
            Bt = function (t, e) {
                var r = t._dp;
                return r && r.smoothChildTiming && t._ts && ((t._start = mt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Lt(t), r._dirty || Ot(r, t)), t;
            },
            Ft = function (t, e) {
                var r;
                if (((e._time || (e._initted && !e._dur)) && ((r = Rt(t.rawTime(), e)), (!e._dur || Qt(0, e.totalDuration(), r) - e._tTime > x) && e.render(r, !0)), Ot(t, e)._dp && t._initted && t._time >= t._dur && t._ts)) {
                    if (t._dur < t.duration()) for (r = t; r._dp; ) r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
                    t._zTime = -1e-8;
                }
            },
            Yt = function (t, e, r, i) {
                return e.parent && Ct(e), (e._start = mt((P(r) ? r : r || t !== a ? jt(t, r, e) : t._time) + e._delay)), (e._end = mt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))), St(t, e, '_first', '_last', t._sort ? '_start' : 0), Wt(e) || (t._recent = e), i || Ft(t, e), t._ts < 0 && Bt(t, t._tTime), t;
            },
            It = function (t, e) {
                return (U.ScrollTrigger || $('scrollTrigger', e)) && U.ScrollTrigger.create(e, t);
            },
            Xt = function (t, e, r, i, n) {
                return Ve(t, e, n), t._initted ? (!r && t._pt && !o && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && f !== Me.frame ? (it.push(t), (t._lazy = [n, i]), 1) : void 0) : 1;
            },
            Nt = function t(e) {
                var r = e.parent;
                return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
            },
            Wt = function (t) {
                var e = t.data;
                return 'isFromStart' === e || 'isStart' === e;
            },
            Ht = function (t, e, r, i) {
                var n = t._repeat,
                    o = mt(e) || 0,
                    s = t._tTime / t._tDur;
                return s && !i && (t._time *= o / t._dur), (t._dur = o), (t._tDur = n ? (n < 0 ? 1e10 : mt(o * (n + 1) + t._rDelay * n)) : o), s > 0 && !i && Bt(t, (t._tTime = t._tDur * s)), t.parent && Lt(t), r || Ot(t.parent, t), t;
            },
            Vt = function (t) {
                return t instanceof Ye ? Ot(t) : Ht(t, t._dur);
            },
            Ut = { _start: 0, endTime: K, totalDuration: K },
            jt = function t(e, r, i) {
                var n,
                    o,
                    s,
                    a = e.labels,
                    l = e._recent || Ut,
                    u = e.duration() >= b ? l.endTime(!1) : e._dur;
                return C(r) && (isNaN(r) || r in a)
                    ? ((o = r.charAt(0)),
                      (s = '%' === r.substr(-1)),
                      (n = r.indexOf('=')),
                      '<' === o || '>' === o
                          ? (n >= 0 && (r = r.replace(/=/, '')), ('<' === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (n < 0 ? l : i).totalDuration() / 100 : 1))
                          : n < 0
                          ? (r in a || (a[r] = u), a[r])
                          : ((o = parseFloat(r.charAt(n - 1) + r.substr(n + 1))), s && i && (o = (o / 100) * (F(i) ? i[0] : i).totalDuration()), n > 1 ? t(e, r.substr(0, n - 1), i) + o : u + o))
                    : null == r
                    ? u
                    : +r;
            },
            Gt = function (t, e, r) {
                var i,
                    n,
                    o = P(e[1]),
                    s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
                    a = e[s];
                if ((o && (a.duration = e[1]), (a.parent = r), t)) {
                    for (i = a, n = r; n && !('immediateRender' in i); ) (i = n.vars.defaults || {}), (n = D(n.vars.inherit) && n.parent);
                    (a.immediateRender = D(i.immediateRender)), t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
                }
                return new Qe(e[0], a, e[s + 1]);
            },
            $t = function (t, e) {
                return t || 0 === t ? e(t) : e;
            },
            Qt = function (t, e, r) {
                return r < t ? t : r > e ? e : r;
            },
            Zt = function (t, e) {
                return C(t) && (e = V.exec(t)) ? e[1] : '';
            },
            Kt = [].slice,
            Jt = function (t, e) {
                return t && z(t) && 'length' in t && ((!e && !t.length) || (t.length - 1 in t && z(t[0]))) && !t.nodeType && t !== l;
            },
            te = function (t, e, r) {
                return s && !e && s.selector
                    ? s.selector(t)
                    : !C(t) || r || (!u && Ae())
                    ? F(t)
                        ? (function (t, e, r) {
                              return (
                                  void 0 === r && (r = []),
                                  t.forEach(function (t) {
                                      var i;
                                      return (C(t) && !e) || Jt(t, 1) ? (i = r).push.apply(i, te(t)) : r.push(t);
                                  }) || r
                              );
                          })(t, r)
                        : Jt(t)
                        ? Kt.call(t, 0)
                        : t
                        ? [t]
                        : []
                    : Kt.call((e || c).querySelectorAll(t), 0);
            },
            ee = function (t) {
                return (
                    (t = te(t)[0] || Q('Invalid scope') || {}),
                    function (e) {
                        var r = t.current || t.nativeElement || t;
                        return te(e, r.querySelectorAll ? r : r === t ? Q('Invalid scope') || c.createElement('div') : t);
                    }
                );
            },
            re = function (t) {
                return t.sort(function () {
                    return 0.5 - Math.random();
                });
            },
            ie = function (t) {
                if (O(t)) return t;
                var e = z(t) ? t : { each: t },
                    r = qe(e.ease),
                    i = e.from || 0,
                    n = parseFloat(e.base) || 0,
                    o = {},
                    s = i > 0 && i < 1,
                    a = isNaN(i) || s,
                    l = e.axis,
                    u = i,
                    c = i;
                return (
                    C(i) ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[i] || 0) : !s && a && ((u = i[0]), (c = i[1])),
                    function (t, s, h) {
                        var f,
                            d,
                            p,
                            m,
                            g,
                            _,
                            v,
                            y,
                            w,
                            x = (h || e).length,
                            T = o[x];
                        if (!T) {
                            if (!(w = 'auto' === e.grid ? 0 : (e.grid || [1, b])[1])) {
                                for (v = -b; v < (v = h[w++].getBoundingClientRect().left) && w < x; );
                                w--;
                            }
                            for (T = o[x] = [], f = a ? Math.min(w, x) * u - 0.5 : i % w, d = w === b ? 0 : a ? (x * c) / w - 0.5 : (i / w) | 0, v = 0, y = b, _ = 0; _ < x; _++) (p = (_ % w) - f), (m = d - ((_ / w) | 0)), (T[_] = g = l ? Math.abs('y' === l ? m : p) : E(p * p + m * m)), g > v && (v = g), g < y && (y = g);
                            'random' === i && re(T), (T.max = v - y), (T.min = y), (T.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (w > x ? x - 1 : l ? ('y' === l ? x / w : w) : Math.max(w, x / w)) || 0) * ('edges' === i ? -1 : 1)), (T.b = x < 0 ? n - x : n), (T.u = Zt(e.amount || e.each) || 0), (r = r && x < 0 ? Oe(r) : r);
                        }
                        return (x = (T[t] - T.min) / T.max || 0), mt(T.b + (r ? r(x) : x) * T.v) + T.u;
                    }
                );
            },
            ne = function (t) {
                var e = Math.pow(10, ((t + '').split('.')[1] || '').length);
                return function (r) {
                    var i = mt(Math.round(parseFloat(r) / t) * t * e);
                    return (i - (i % 1)) / e + (P(r) ? 0 : Zt(r));
                };
            },
            oe = function (t, e) {
                var r,
                    i,
                    n = F(t);
                return (
                    !n && z(t) && ((r = n = t.radius || b), t.values ? ((t = te(t.values)), (i = !P(t[0])) && (r *= r)) : (t = ne(t.increment))),
                    $t(
                        e,
                        n
                            ? O(t)
                                ? function (e) {
                                      return (i = t(e)), Math.abs(i - e) <= r ? i : e;
                                  }
                                : function (e) {
                                      for (var n, o, s = parseFloat(i ? e.x : e), a = parseFloat(i ? e.y : 0), l = b, u = 0, c = t.length; c--; ) (n = i ? (n = t[c].x - s) * n + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < l && ((l = n), (u = c));
                                      return (u = !r || l <= r ? t[u] : e), i || u === e || P(e) ? u : u + Zt(e);
                                  }
                            : ne(t)
                    )
                );
            },
            se = function (t, e, r, i) {
                return $t(F(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
                    return F(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) * r * i) / i;
                });
            },
            ae = function (t, e, r) {
                return $t(r, function (r) {
                    return t[~~e(r)];
                });
            },
            le = function (t) {
                for (var e, r, i, n, o = 0, s = ''; ~(e = t.indexOf('random(', o)); ) (i = t.indexOf(')', e)), (n = '[' === t.charAt(e + 7)), (r = t.substr(e + 7, i - e - 7).match(n ? H : Y)), (s += t.substr(o, e - o) + se(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)), (o = i + 1);
                return s + t.substr(o, t.length - o);
            },
            ue = function (t, e, r, i, n) {
                var o = e - t,
                    s = i - r;
                return $t(n, function (e) {
                    return r + (((e - t) / o) * s || 0);
                });
            },
            ce = function (t, e, r) {
                var i,
                    n,
                    o,
                    s = t.labels,
                    a = b;
                for (i in s) (n = s[i] - e) < 0 == !!r && n && a > (n = Math.abs(n)) && ((o = i), (a = n));
                return o;
            },
            he = function (t, e, r) {
                var i,
                    n,
                    o,
                    a = t.vars,
                    l = a[e],
                    u = s,
                    c = t._ctx;
                if (l) return (i = a[e + 'Params']), (n = a.callbackScope || t), r && it.length && vt(), c && (s = c), (o = i ? l.apply(n, i) : l.call(n)), (s = u), o;
            },
            fe = function (t) {
                return Ct(t), t.scrollTrigger && t.scrollTrigger.kill(!!o), t.progress() < 1 && he(t, 'onInterrupt'), t;
            },
            de = [],
            pe = function (t) {
                if (R()) {
                    var e = (t = (!t.name && t.default) || t).name,
                        r = O(t),
                        i =
                            e && !r && t.init
                                ? function () {
                                      this._props = [];
                                  }
                                : t,
                        n = { init: K, render: or, add: We, kill: ar, modifier: sr, rawVars: 0 },
                        o = { targetTest: 0, get: 0, getSetter: er, aliases: {}, register: 0 };
                    if ((Ae(), t !== i)) {
                        if (ot[e]) return;
                        xt(i, xt(At(t, n), o)), Tt(i.prototype, Tt(n, At(t, o))), (ot[(i.prop = e)] = i), t.targetTest && (lt.push(i), (rt[e] = 1)), (e = ('css' === e ? 'CSS' : e.charAt(0).toUpperCase() + e.substr(1)) + 'Plugin');
                    }
                    Z(e, i), t.register && t.register(xr, i, cr);
                } else de.push(t);
            },
            me = 255,
            ge = {
                aqua: [0, me, me],
                lime: [0, me, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, me],
                navy: [0, 0, 128],
                white: [me, me, me],
                olive: [128, 128, 0],
                yellow: [me, me, 0],
                orange: [me, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [me, 0, 0],
                pink: [me, 192, 203],
                cyan: [0, me, me],
                transparent: [me, me, me, 0],
            },
            _e = function (t, e, r) {
                return ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * me + 0.5) | 0;
            },
            ve = function (t, e, r) {
                var i,
                    n,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c,
                    h,
                    f,
                    d = t ? (P(t) ? [t >> 16, (t >> 8) & me, t & me] : 0) : ge.black;
                if (!d) {
                    if ((',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), ge[t])) d = ge[t];
                    else if ('#' === t.charAt(0)) {
                        if ((t.length < 6 && ((i = t.charAt(1)), (n = t.charAt(2)), (o = t.charAt(3)), (t = '#' + i + i + n + n + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : ''))), 9 === t.length)) return [(d = parseInt(t.substr(1, 6), 16)) >> 16, (d >> 8) & me, d & me, parseInt(t.substr(7), 16) / 255];
                        d = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & me, t & me];
                    } else if ('hsl' === t.substr(0, 3))
                        if (((d = f = t.match(Y)), e)) {
                            if (~t.indexOf('=')) return (d = t.match(I)), r && d.length < 4 && (d[3] = 1), d;
                        } else (s = (+d[0] % 360) / 360), (a = +d[1] / 100), (i = 2 * (l = +d[2] / 100) - (n = l <= 0.5 ? l * (a + 1) : l + a - l * a)), d.length > 3 && (d[3] *= 1), (d[0] = _e(s + 1 / 3, i, n)), (d[1] = _e(s, i, n)), (d[2] = _e(s - 1 / 3, i, n));
                    else d = t.match(Y) || ge.transparent;
                    d = d.map(Number);
                }
                return (
                    e &&
                        !f &&
                        ((i = d[0] / me),
                        (n = d[1] / me),
                        (o = d[2] / me),
                        (l = ((u = Math.max(i, n, o)) + (c = Math.min(i, n, o))) / 2),
                        u === c ? (s = a = 0) : ((h = u - c), (a = l > 0.5 ? h / (2 - u - c) : h / (u + c)), (s = u === i ? (n - o) / h + (n < o ? 6 : 0) : u === n ? (o - i) / h + 2 : (i - n) / h + 4), (s *= 60)),
                        (d[0] = ~~(s + 0.5)),
                        (d[1] = ~~(100 * a + 0.5)),
                        (d[2] = ~~(100 * l + 0.5))),
                    r && d.length < 4 && (d[3] = 1),
                    d
                );
            },
            ye = function (t) {
                var e = [],
                    r = [],
                    i = -1;
                return (
                    t.split(be).forEach(function (t) {
                        var n = t.match(X) || [];
                        e.push.apply(e, n), r.push((i += n.length + 1));
                    }),
                    (e.c = r),
                    e
                );
            },
            we = function (t, e, r) {
                var i,
                    n,
                    o,
                    s,
                    a = '',
                    l = (t + a).match(be),
                    u = e ? 'hsla(' : 'rgba(',
                    c = 0;
                if (!l) return t;
                if (
                    ((l = l.map(function (t) {
                        return (t = ve(t, e, 1)) && u + (e ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3] : t.join(',')) + ')';
                    })),
                    r && ((o = ye(t)), (i = r.c).join(a) !== o.c.join(a)))
                )
                    for (s = (n = t.replace(be, '1').split(X)).length - 1; c < s; c++) a += n[c] + (~i.indexOf(c) ? l.shift() || u + '0,0,0,0)' : (o.length ? o : l.length ? l : r).shift());
                if (!n) for (s = (n = t.split(be)).length - 1; c < s; c++) a += n[c] + l[c];
                return a + n[s];
            },
            be = (function () {
                var t,
                    e = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
                for (t in ge) e += '|' + t + '\\b';
                return new RegExp(e + ')', 'gi');
            })(),
            xe = /hsl[a]?\(/,
            Te = function (t) {
                var e,
                    r = t.join(' ');
                if (((be.lastIndex = 0), be.test(r))) return (e = xe.test(r)), (t[1] = we(t[1], e)), (t[0] = we(t[0], e, ye(t[1]))), !0;
            },
            Me = (function () {
                var t,
                    e,
                    r,
                    i,
                    n,
                    o,
                    s = Date.now,
                    a = 500,
                    f = 33,
                    d = s(),
                    m = d,
                    g = 1e3 / 240,
                    _ = g,
                    v = [],
                    y = function r(l) {
                        var u,
                            c,
                            h,
                            p,
                            y = s() - m,
                            w = !0 === l;
                        if ((y > a && (d += y - f), ((u = (h = (m += y) - d) - _) > 0 || w) && ((p = ++i.frame), (n = h - 1e3 * i.time), (i.time = h /= 1e3), (_ += u + (u >= g ? 4 : g - u)), (c = 1)), w || (t = e(r)), c)) for (o = 0; o < v.length; o++) v[o](h, n, p, l);
                    };
                return (i = {
                    time: 0,
                    frame: 0,
                    tick: function () {
                        y(!0);
                    },
                    deltaRatio: function (t) {
                        return n / (1e3 / (t || 60));
                    },
                    wake: function () {
                        h &&
                            (!u && R() && ((l = u = window), (c = l.document || {}), (U.gsap = xr), (l.gsapVersions || (l.gsapVersions = [])).push(xr.version), G(j || l.GreenSockGlobals || (!l.gsap && l) || {}), (r = l.requestAnimationFrame), de.forEach(pe)),
                            t && i.sleep(),
                            (e =
                                r ||
                                function (t) {
                                    return setTimeout(t, (_ - 1e3 * i.time + 1) | 0);
                                }),
                            (p = 1),
                            y(2));
                    },
                    sleep: function () {
                        (r ? l.cancelAnimationFrame : clearTimeout)(t), (p = 0), (e = K);
                    },
                    lagSmoothing: function (t, e) {
                        (a = t || 1 / 0), (f = Math.min(e || 33, a));
                    },
                    fps: function (t) {
                        (g = 1e3 / (t || 240)), (_ = 1e3 * i.time + g);
                    },
                    add: function (t, e, r) {
                        var n = e
                            ? function (e, r, o, s) {
                                  t(e, r, o, s), i.remove(n);
                              }
                            : t;
                        return i.remove(t), v[r ? 'unshift' : 'push'](n), Ae(), n;
                    },
                    remove: function (t, e) {
                        ~(e = v.indexOf(t)) && v.splice(e, 1) && o >= e && o--;
                    },
                    _listeners: v,
                });
            })(),
            Ae = function () {
                return !p && Me.wake();
            },
            Ee = {},
            Se = /^[\d.\-M][\d.\-,\s]/,
            ke = /["']/g,
            Ce = function (t) {
                for (var e, r, i, n = {}, o = t.substr(1, t.length - 3).split(':'), s = o[0], a = 1, l = o.length; a < l; a++) (r = o[a]), (e = a !== l - 1 ? r.lastIndexOf(',') : r.length), (i = r.substr(0, e)), (n[s] = isNaN(i) ? i.replace(ke, '').trim() : +i), (s = r.substr(e + 1).trim());
                return n;
            },
            Oe = function (t) {
                return function (e) {
                    return 1 - t(1 - e);
                };
            },
            Pe = function t(e, r) {
                for (var i, n = e._first; n; ) n instanceof Ye ? t(n, r) : !n.vars.yoyoEase || (n._yoyo && n._repeat) || n._yoyo === r || (n.timeline ? t(n.timeline, r) : ((i = n._ease), (n._ease = n._yEase), (n._yEase = i), (n._yoyo = r))), (n = n._next);
            },
            qe = function (t, e) {
                return (
                    (t &&
                        (O(t)
                            ? t
                            : Ee[t] ||
                              (function (t) {
                                  var e,
                                      r,
                                      i,
                                      n,
                                      o = (t + '').split('('),
                                      s = Ee[o[0]];
                                  return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf('{') ? [Ce(o[1])] : ((e = t), (r = e.indexOf('(') + 1), (i = e.indexOf(')')), (n = e.indexOf('(', r)), e.substring(r, ~n && n < i ? e.indexOf(')', i + 1) : i)).split(',').map(wt)) : Ee._CE && Se.test(t) ? Ee._CE('', t) : s;
                              })(t))) ||
                    e
                );
            },
            ze = function (t, e, r, i) {
                void 0 === r &&
                    (r = function (t) {
                        return 1 - e(1 - t);
                    }),
                    void 0 === i &&
                        (i = function (t) {
                            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                        });
                var n,
                    o = { easeIn: e, easeOut: r, easeInOut: i };
                return (
                    dt(t, function (t) {
                        for (var e in ((Ee[t] = U[t] = o), (Ee[(n = t.toLowerCase())] = r), o)) Ee[n + ('easeIn' === e ? '.in' : 'easeOut' === e ? '.out' : '.inOut')] = Ee[t + '.' + e] = o[e];
                    }),
                    o
                );
            },
            De = function (t) {
                return function (e) {
                    return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
                };
            },
            Re = function t(e, r, i) {
                var n = r >= 1 ? r : 1,
                    o = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
                    s = (o / T) * (Math.asin(1 / n) || 0),
                    a = function (t) {
                        return 1 === t ? 1 : n * Math.pow(2, -10 * t) * k((t - s) * o) + 1;
                    },
                    l =
                        'out' === e
                            ? a
                            : 'in' === e
                            ? function (t) {
                                  return 1 - a(1 - t);
                              }
                            : De(a);
                return (
                    (o = T / o),
                    (l.config = function (r, i) {
                        return t(e, r, i);
                    }),
                    l
                );
            },
            Le = function t(e, r) {
                void 0 === r && (r = 1.70158);
                var i = function (t) {
                        return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
                    },
                    n =
                        'out' === e
                            ? i
                            : 'in' === e
                            ? function (t) {
                                  return 1 - i(1 - t);
                              }
                            : De(i);
                return (
                    (n.config = function (r) {
                        return t(e, r);
                    }),
                    n
                );
            };
        dt('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
            var r = e < 5 ? e + 1 : e;
            ze(
                t + ',Power' + (r - 1),
                e
                    ? function (t) {
                          return Math.pow(t, r);
                      }
                    : function (t) {
                          return t;
                      },
                function (t) {
                    return 1 - Math.pow(1 - t, r);
                },
                function (t) {
                    return t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
                }
            );
        }),
            (Ee.Linear.easeNone = Ee.none = Ee.Linear.easeIn),
            ze('Elastic', Re('in'), Re('out'), Re()),
            (m = 7.5625),
            (_ = 1 / (g = 2.75)),
            ze(
                'Bounce',
                function (t) {
                    return 1 - v(1 - t);
                },
                (v = function (t) {
                    return t < _ ? m * t * t : t < 0.7272727272727273 ? m * Math.pow(t - 1.5 / g, 2) + 0.75 : t < 0.9090909090909092 ? m * (t -= 2.25 / g) * t + 0.9375 : m * Math.pow(t - 2.625 / g, 2) + 0.984375;
                })
            ),
            ze('Expo', function (t) {
                return t ? Math.pow(2, 10 * (t - 1)) : 0;
            }),
            ze('Circ', function (t) {
                return -(E(1 - t * t) - 1);
            }),
            ze('Sine', function (t) {
                return 1 === t ? 1 : 1 - S(t * M);
            }),
            ze('Back', Le('in'), Le('out'), Le()),
            (Ee.SteppedEase =
                Ee.steps =
                U.SteppedEase =
                    {
                        config: function (t, e) {
                            void 0 === t && (t = 1);
                            var r = 1 / t,
                                i = t + (e ? 0 : 1),
                                n = e ? 1 : 0;
                            return function (t) {
                                return (((i * Qt(0, 0.99999999, t)) | 0) + n) * r;
                            };
                        },
                    }),
            (w.ease = Ee['quad.out']),
            dt('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (t) {
                return (ut += t + ',' + t + 'Params,');
            });
        var Be = function (t, e) {
                (this.id = A++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : ft), (this.set = e ? e.getSetter : er);
            },
            Fe = (function () {
                function t(t) {
                    (this.vars = t), (this._delay = +t.delay || 0), (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)), (this._ts = 1), Ht(this, +t.duration, 1, 1), (this.data = t.data), s && ((this._ctx = s), s.data.push(this)), p || Me.wake();
                }
                var e = t.prototype;
                return (
                    (e.delay = function (t) {
                        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
                    }),
                    (e.duration = function (t) {
                        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
                    }),
                    (e.totalDuration = function (t) {
                        return arguments.length ? ((this._dirty = 0), Ht(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
                    }),
                    (e.totalTime = function (t, e) {
                        if ((Ae(), !arguments.length)) return this._tTime;
                        var r = this._dp;
                        if (r && r.smoothChildTiming && this._ts) {
                            for (Bt(this, t), !r._dp || r.parent || Ft(r, this); r && r.parent; ) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), (r = r.parent);
                            !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && Yt(this._dp, this, this._start - this._delay);
                        }
                        return (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === x) || (!t && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = t), yt(this, t, e)), this;
                    }),
                    (e.time = function (t, e) {
                        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + zt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
                    }),
                    (e.totalProgress = function (t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                    }),
                    (e.progress = function (t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + zt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                    }),
                    (e.iteration = function (t, e) {
                        var r = this.duration() + this._rDelay;
                        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Dt(this._tTime, r) + 1 : 1;
                    }),
                    (e.timeScale = function (t) {
                        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                        if (this._rts === t) return this;
                        var e = this.parent && this._ts ? Rt(this.parent._time, this) : this._tTime;
                        return (
                            (this._rts = +t || 0),
                            (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                            this.totalTime(Qt(-Math.abs(this._delay), this._tDur, e), !0),
                            Lt(this),
                            (function (t) {
                                for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
                                return t;
                            })(this)
                        );
                    }),
                    (e.paused = function (t) {
                        return arguments.length
                            ? (this._ps !== t && ((this._ps = t), t ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0)) : (Ae(), (this._ts = this._rts), this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== x && (this._tTime -= x)))), this)
                            : this._ps;
                    }),
                    (e.startTime = function (t) {
                        if (arguments.length) {
                            this._start = t;
                            var e = this.parent || this._dp;
                            return e && (e._sort || !this.parent) && Yt(e, this, t - this._delay), this;
                        }
                        return this._start;
                    }),
                    (e.endTime = function (t) {
                        return this._start + (D(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
                    }),
                    (e.rawTime = function (t) {
                        var e = this.parent || this._dp;
                        return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Rt(e.rawTime(t), this) : this._tTime) : this._tTime;
                    }),
                    (e.revert = function (t) {
                        void 0 === t && (t = et);
                        var e = o;
                        return (o = t), (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)), 'nested' !== this.data && !1 !== t.kill && this.kill(), (o = e), this;
                    }),
                    (e.globalTime = function (t) {
                        for (var e = this, r = arguments.length ? t : e.rawTime(); e; ) (r = e._start + r / (e._ts || 1)), (e = e._dp);
                        return !this.parent && this._sat ? (this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t)) : r;
                    }),
                    (e.repeat = function (t) {
                        return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), Vt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
                    }),
                    (e.repeatDelay = function (t) {
                        if (arguments.length) {
                            var e = this._time;
                            return (this._rDelay = t), Vt(this), e ? this.time(e) : this;
                        }
                        return this._rDelay;
                    }),
                    (e.yoyo = function (t) {
                        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                    }),
                    (e.seek = function (t, e) {
                        return this.totalTime(jt(this, t), D(e));
                    }),
                    (e.restart = function (t, e) {
                        return this.play().totalTime(t ? -this._delay : 0, D(e));
                    }),
                    (e.play = function (t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                    }),
                    (e.reverse = function (t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                    }),
                    (e.pause = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!0);
                    }),
                    (e.resume = function () {
                        return this.paused(!1);
                    }),
                    (e.reversed = function (t) {
                        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
                    }),
                    (e.invalidate = function () {
                        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
                    }),
                    (e.isActive = function () {
                        var t,
                            e = this.parent || this._dp,
                            r = this._start;
                        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - x));
                    }),
                    (e.eventCallback = function (t, e, r) {
                        var i = this.vars;
                        return arguments.length > 1 ? (e ? ((i[t] = e), r && (i[t + 'Params'] = r), 'onUpdate' === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
                    }),
                    (e.then = function (t) {
                        var e = this;
                        return new Promise(function (r) {
                            var i = O(t) ? t : bt,
                                n = function () {
                                    var t = e.then;
                                    (e.then = null), O(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), r(i), (e.then = t);
                                };
                            (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? n() : (e._prom = n);
                        });
                    }),
                    (e.kill = function () {
                        fe(this);
                    }),
                    t
                );
            })();
        xt(Fe.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
        var Ye = (function (t) {
            function r(r, i) {
                var n;
                return void 0 === r && (r = {}), ((n = t.call(this, r) || this).labels = {}), (n.smoothChildTiming = !!r.smoothChildTiming), (n.autoRemoveChildren = !!r.autoRemoveChildren), (n._sort = D(r.sortChildren)), a && Yt(r.parent || a, e(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && It(e(n), r.scrollTrigger), n;
            }
            i(r, t);
            var n = r.prototype;
            return (
                (n.to = function (t, e, r) {
                    return Gt(0, arguments, this), this;
                }),
                (n.from = function (t, e, r) {
                    return Gt(1, arguments, this), this;
                }),
                (n.fromTo = function (t, e, r, i) {
                    return Gt(2, arguments, this), this;
                }),
                (n.set = function (t, e, r) {
                    return (e.duration = 0), (e.parent = this), Et(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new Qe(t, e, jt(this, r), 1), this;
                }),
                (n.call = function (t, e, r) {
                    return Yt(this, Qe.delayedCall(0, t, e), r);
                }),
                (n.staggerTo = function (t, e, r, i, n, o, s) {
                    return (r.duration = e), (r.stagger = r.stagger || i), (r.onComplete = o), (r.onCompleteParams = s), (r.parent = this), new Qe(t, r, jt(this, n)), this;
                }),
                (n.staggerFrom = function (t, e, r, i, n, o, s) {
                    return (r.runBackwards = 1), (Et(r).immediateRender = D(r.immediateRender)), this.staggerTo(t, e, r, i, n, o, s);
                }),
                (n.staggerFromTo = function (t, e, r, i, n, o, s, a) {
                    return (i.startAt = r), (Et(i).immediateRender = D(i.immediateRender)), this.staggerTo(t, e, i, n, o, s, a);
                }),
                (n.render = function (t, e, r) {
                    var i,
                        n,
                        s,
                        l,
                        u,
                        c,
                        h,
                        f,
                        d,
                        p,
                        m,
                        g,
                        _ = this._time,
                        v = this._dirty ? this.totalDuration() : this._tDur,
                        y = this._dur,
                        w = t <= 0 ? 0 : mt(t),
                        b = this._zTime < 0 != t < 0 && (this._initted || !y);
                    if ((this !== a && w > v && t >= 0 && (w = v), w !== this._tTime || r || b)) {
                        if ((_ !== this._time && y && ((w += this._time - _), (t += this._time - _)), (i = w), (d = this._start), (c = !(f = this._ts)), b && (y || (_ = this._zTime), (t || !e) && (this._zTime = t)), this._repeat)) {
                            if (((m = this._yoyo), (u = y + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * u + t, e, r);
                            if (((i = mt(w % u)), w === v ? ((l = this._repeat), (i = y)) : ((l = ~~(w / u)) && l === w / u && ((i = y), l--), i > y && (i = y)), (p = Dt(this._tTime, u)), !_ && this._tTime && p !== l && this._tTime - p * u - this._dur <= 0 && (p = l), m && 1 & l && ((i = y - i), (g = 1)), l !== p && !this._lock)) {
                                var T = m && 1 & p,
                                    M = T === (m && 1 & l);
                                if ((l < p && (T = !T), (_ = T ? 0 : y), (this._lock = 1), (this.render(_ || (g ? 0 : mt(l * u)), e, !y)._lock = 0), (this._tTime = w), !e && this.parent && he(this, 'onRepeat'), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), (_ && _ !== this._time) || c !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))) return this;
                                if (((y = this._dur), (v = this._tDur), M && ((this._lock = 2), (_ = T ? y : -1e-4), this.render(_, !0), this.vars.repeatRefresh && !g && this.invalidate()), (this._lock = 0), !this._ts && !c)) return this;
                                Pe(this, g);
                            }
                        }
                        if (
                            (this._hasPause &&
                                !this._forcing &&
                                this._lock < 2 &&
                                ((h = (function (t, e, r) {
                                    var i;
                                    if (r > e)
                                        for (i = t._first; i && i._start <= r; ) {
                                            if ('isPause' === i.data && i._start > e) return i;
                                            i = i._next;
                                        }
                                    else
                                        for (i = t._last; i && i._start >= r; ) {
                                            if ('isPause' === i.data && i._start < e) return i;
                                            i = i._prev;
                                        }
                                })(this, mt(_), mt(i))),
                                h && (w -= i - (i = h._start))),
                            (this._tTime = w),
                            (this._time = i),
                            (this._act = !f),
                            this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (_ = 0)),
                            !_ && i && !e && !l && (he(this, 'onStart'), this._tTime !== w))
                        )
                            return this;
                        if (i >= _ && t >= 0)
                            for (n = this._first; n; ) {
                                if (((s = n._next), (n._act || i >= n._start) && n._ts && h !== n)) {
                                    if (n.parent !== this) return this.render(t, e, r);
                                    if ((n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || (!this._ts && !c))) {
                                        (h = 0), s && (w += this._zTime = -1e-8);
                                        break;
                                    }
                                }
                                n = s;
                            }
                        else {
                            n = this._last;
                            for (var A = t < 0 ? t : i; n; ) {
                                if (((s = n._prev), (n._act || A <= n._end) && n._ts && h !== n)) {
                                    if (n.parent !== this) return this.render(t, e, r);
                                    if ((n.render(n._ts > 0 ? (A - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (A - n._start) * n._ts, e, r || (o && (n._initted || n._startAt))), i !== this._time || (!this._ts && !c))) {
                                        (h = 0), s && (w += this._zTime = A ? -1e-8 : x);
                                        break;
                                    }
                                }
                                n = s;
                            }
                        }
                        if (h && !e && (this.pause(), (h.render(i >= _ ? 0 : -1e-8)._zTime = i >= _ ? 1 : -1), this._ts)) return (this._start = d), Lt(this), this.render(t, e, r);
                        this._onUpdate && !e && he(this, 'onUpdate', !0),
                            ((w === v && this._tTime >= this.totalDuration()) || (!w && _)) &&
                                ((d !== this._start && Math.abs(f) === Math.abs(this._ts)) || this._lock || ((t || !y) && ((w === v && this._ts > 0) || (!w && this._ts < 0)) && Ct(this, 1), e || (t < 0 && !_) || (!w && !_ && v) || (he(this, w === v && t >= 0 ? 'onComplete' : 'onReverseComplete', !0), this._prom && !(w < v && this.timeScale() > 0) && this._prom())));
                    }
                    return this;
                }),
                (n.add = function (t, e) {
                    var r = this;
                    if ((P(e) || (e = jt(this, e, t)), !(t instanceof Fe))) {
                        if (F(t))
                            return (
                                t.forEach(function (t) {
                                    return r.add(t, e);
                                }),
                                this
                            );
                        if (C(t)) return this.addLabel(t, e);
                        if (!O(t)) return this;
                        t = Qe.delayedCall(0, t);
                    }
                    return this !== t ? Yt(this, t, e) : this;
                }),
                (n.getChildren = function (t, e, r, i) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -b);
                    for (var n = [], o = this._first; o; ) o._start >= i && (o instanceof Qe ? e && n.push(o) : (r && n.push(o), t && n.push.apply(n, o.getChildren(!0, e, r)))), (o = o._next);
                    return n;
                }),
                (n.getById = function (t) {
                    for (var e = this.getChildren(1, 1, 1), r = e.length; r--; ) if (e[r].vars.id === t) return e[r];
                }),
                (n.remove = function (t) {
                    return C(t) ? this.removeLabel(t) : O(t) ? this.killTweensOf(t) : (kt(this, t), t === this._recent && (this._recent = this._last), Ot(this));
                }),
                (n.totalTime = function (e, r) {
                    return arguments.length ? ((this._forcing = 1), !this._dp && this._ts && (this._start = mt(Me.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), (this._forcing = 0), this) : this._tTime;
                }),
                (n.addLabel = function (t, e) {
                    return (this.labels[t] = jt(this, e)), this;
                }),
                (n.removeLabel = function (t) {
                    return delete this.labels[t], this;
                }),
                (n.addPause = function (t, e, r) {
                    var i = Qe.delayedCall(0, e || K, r);
                    return (i.data = 'isPause'), (this._hasPause = 1), Yt(this, i, jt(this, t));
                }),
                (n.removePause = function (t) {
                    var e = this._first;
                    for (t = jt(this, t); e; ) e._start === t && 'isPause' === e.data && Ct(e), (e = e._next);
                }),
                (n.killTweensOf = function (t, e, r) {
                    for (var i = this.getTweensOf(t, r), n = i.length; n--; ) Ie !== i[n] && i[n].kill(t, e);
                    return this;
                }),
                (n.getTweensOf = function (t, e) {
                    for (var r, i = [], n = te(t), o = this._first, s = P(e); o; ) o instanceof Qe ? _t(o._targets, n) && (s ? (!Ie || (o._initted && o._ts)) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && i.push(o) : (r = o.getTweensOf(n, e)).length && i.push.apply(i, r), (o = o._next);
                    return i;
                }),
                (n.tweenTo = function (t, e) {
                    e = e || {};
                    var r,
                        i = this,
                        n = jt(i, t),
                        o = e,
                        s = o.startAt,
                        a = o.onStart,
                        l = o.onStartParams,
                        u = o.immediateRender,
                        c = Qe.to(
                            i,
                            xt(
                                {
                                    ease: e.ease || 'none',
                                    lazy: !1,
                                    immediateRender: !1,
                                    time: n,
                                    overwrite: 'auto',
                                    duration: e.duration || Math.abs((n - (s && 'time' in s ? s.time : i._time)) / i.timeScale()) || x,
                                    onStart: function () {
                                        if ((i.pause(), !r)) {
                                            var t = e.duration || Math.abs((n - (s && 'time' in s ? s.time : i._time)) / i.timeScale());
                                            c._dur !== t && Ht(c, t, 0, 1).render(c._time, !0, !0), (r = 1);
                                        }
                                        a && a.apply(c, l || []);
                                    },
                                },
                                e
                            )
                        );
                    return u ? c.render(0) : c;
                }),
                (n.tweenFromTo = function (t, e, r) {
                    return this.tweenTo(e, xt({ startAt: { time: jt(this, t) } }, r));
                }),
                (n.recent = function () {
                    return this._recent;
                }),
                (n.nextLabel = function (t) {
                    return void 0 === t && (t = this._time), ce(this, jt(this, t));
                }),
                (n.previousLabel = function (t) {
                    return void 0 === t && (t = this._time), ce(this, jt(this, t), 1);
                }),
                (n.currentLabel = function (t) {
                    return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + x);
                }),
                (n.shiftChildren = function (t, e, r) {
                    void 0 === r && (r = 0);
                    for (var i, n = this._first, o = this.labels; n; ) n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
                    if (e) for (i in o) o[i] >= r && (o[i] += t);
                    return Ot(this);
                }),
                (n.invalidate = function (e) {
                    var r = this._first;
                    for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
                    return t.prototype.invalidate.call(this, e);
                }),
                (n.clear = function (t) {
                    void 0 === t && (t = !0);
                    for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e);
                    return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ot(this);
                }),
                (n.totalDuration = function (t) {
                    var e,
                        r,
                        i,
                        n = 0,
                        o = this,
                        s = o._last,
                        l = b;
                    if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
                    if (o._dirty) {
                        for (i = o.parent; s; )
                            (e = s._prev),
                                s._dirty && s.totalDuration(),
                                (r = s._start) > l && o._sort && s._ts && !o._lock ? ((o._lock = 1), (Yt(o, s, r - s._delay, 1)._lock = 0)) : (l = r),
                                r < 0 && s._ts && ((n -= r), ((!i && !o._dp) || (i && i.smoothChildTiming)) && ((o._start += r / o._ts), (o._time -= r), (o._tTime -= r)), o.shiftChildren(-r, !1, -Infinity), (l = 0)),
                                s._end > n && s._ts && (n = s._end),
                                (s = e);
                        Ht(o, o === a && o._time > n ? o._time : n, 1, 1), (o._dirty = 0);
                    }
                    return o._tDur;
                }),
                (r.updateRoot = function (t) {
                    if ((a._ts && (yt(a, Rt(t, a)), (f = Me.frame)), Me.frame >= at)) {
                        at += y.autoSleep || 120;
                        var e = a._first;
                        if ((!e || !e._ts) && y.autoSleep && Me._listeners.length < 2) {
                            for (; e && !e._ts; ) e = e._next;
                            e || Me.sleep();
                        }
                    }
                }),
                r
            );
        })(Fe);
        xt(Ye.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var Ie,
            Xe,
            Ne = function (t, e, r, i, n, o, s) {
                var a,
                    l,
                    u,
                    c,
                    h,
                    f,
                    d,
                    p,
                    m = new cr(this._pt, t, e, 0, 1, nr, null, n),
                    g = 0,
                    _ = 0;
                for (m.b = r, m.e = i, r += '', (d = ~(i += '').indexOf('random(')) && (i = le(i)), o && (o((p = [r, i]), t, e), (r = p[0]), (i = p[1])), l = r.match(N) || []; (a = N.exec(i)); )
                    (c = a[0]), (h = i.substring(g, a.index)), u ? (u = (u + 1) % 5) : 'rgba(' === h.substr(-5) && (u = 1), c !== l[_++] && ((f = parseFloat(l[_ - 1]) || 0), (m._pt = { _next: m._pt, p: h || 1 === _ ? h : ',', s: f, c: '=' === c.charAt(1) ? gt(f, c) - f : parseFloat(c) - f, m: u && u < 4 ? Math.round : 0 }), (g = N.lastIndex));
                return (m.c = g < i.length ? i.substring(g, i.length) : ''), (m.fp = s), (W.test(i) || d) && (m.e = 0), (this._pt = m), m;
            },
            We = function (t, e, r, i, n, o, s, a, l, u) {
                O(i) && (i = i(n || 0, t, o));
                var c,
                    h = t[e],
                    f = 'get' !== r ? r : O(h) ? (l ? t[e.indexOf('set') || !O(t['get' + e.substr(3)]) ? e : 'get' + e.substr(3)](l) : t[e]()) : h,
                    d = O(h) ? (l ? Je : Ke) : Ze;
                if ((C(i) && (~i.indexOf('random(') && (i = le(i)), '=' === i.charAt(1) && ((c = gt(f, i) + (Zt(f) || 0)) || 0 === c) && (i = c)), !u || f !== i || Xe))
                    return isNaN(f * i) || '' === i ? (!h && !(e in t) && $(e, i), Ne.call(this, t, e, f, i, d, a || y.stringFilter, l)) : ((c = new cr(this._pt, t, e, +f || 0, i - (f || 0), 'boolean' == typeof h ? ir : rr, 0, d)), l && (c.fp = l), s && c.modifier(s, this, t), (this._pt = c));
            },
            He = function (t, e, r, i, n, o) {
                var s, a, l, u;
                if (
                    ot[t] &&
                    !1 !==
                        (s = new ot[t]()).init(
                            n,
                            s.rawVars
                                ? e[t]
                                : (function (t, e, r, i, n) {
                                      if ((O(t) && (t = je(t, n, e, r, i)), !z(t) || (t.style && t.nodeType) || F(t) || B(t))) return C(t) ? je(t, n, e, r, i) : t;
                                      var o,
                                          s = {};
                                      for (o in t) s[o] = je(t[o], n, e, r, i);
                                      return s;
                                  })(e[t], i, n, o, r),
                            r,
                            i,
                            o
                        ) &&
                    ((r._pt = a = new cr(r._pt, n, t, 0, 1, s.render, s, 0, s.priority)), r !== d)
                )
                    for (l = r._ptLookup[r._targets.indexOf(n)], u = s._props.length; u--; ) l[s._props[u]] = a;
                return s;
            },
            Ve = function t(e, r, i) {
                var s,
                    l,
                    u,
                    c,
                    h,
                    f,
                    d,
                    p,
                    m,
                    g,
                    _,
                    v,
                    y,
                    T = e.vars,
                    M = T.ease,
                    A = T.startAt,
                    E = T.immediateRender,
                    S = T.lazy,
                    k = T.onUpdate,
                    C = T.onUpdateParams,
                    O = T.callbackScope,
                    P = T.runBackwards,
                    q = T.yoyoEase,
                    z = T.keyframes,
                    R = T.autoRevert,
                    L = e._dur,
                    B = e._startAt,
                    F = e._targets,
                    Y = e.parent,
                    I = Y && 'nested' === Y.data ? Y.vars.targets : F,
                    X = 'auto' === e._overwrite && !n,
                    N = e.timeline;
                if ((N && (!z || !M) && (M = 'none'), (e._ease = qe(M, w.ease)), (e._yEase = q ? Oe(qe(!0 === q ? M : q, w.ease)) : 0), q && e._yoyo && !e._repeat && ((q = e._yEase), (e._yEase = e._ease), (e._ease = q)), (e._from = !N && !!T.runBackwards), !N || (z && !T.stagger))) {
                    if (((v = (p = F[0] ? ht(F[0]).harness : 0) && T[p.prop]), (s = At(T, rt)), B && (B._zTime < 0 && B.progress(1), r < 0 && P && E && !R ? B.render(-1, !0) : B.revert(P && L ? tt : J), (B._lazy = 0)), A)) {
                        if ((Ct((e._startAt = Qe.set(F, xt({ data: 'isStart', overwrite: !1, parent: Y, immediateRender: !0, lazy: !B && D(S), startAt: null, delay: 0, onUpdate: k, onUpdateParams: C, callbackScope: O, stagger: 0 }, A)))), (e._startAt._dp = 0), (e._startAt._sat = e), r < 0 && (o || (!E && !R)) && e._startAt.revert(tt), E && L && r <= 0 && i <= 0)) return void (r && (e._zTime = r));
                    } else if (P && L && !B)
                        if ((r && (E = !1), (u = xt({ overwrite: !1, data: 'isFromStart', lazy: E && !B && D(S), immediateRender: E, stagger: 0, parent: Y }, s)), v && (u[p.prop] = v), Ct((e._startAt = Qe.set(F, u))), (e._startAt._dp = 0), (e._startAt._sat = e), r < 0 && (o ? e._startAt.revert(tt) : e._startAt.render(-1, !0)), (e._zTime = r), E)) {
                            if (!r) return;
                        } else t(e._startAt, x, x);
                    for (e._pt = e._ptCache = 0, S = (L && D(S)) || (S && !L), l = 0; l < F.length; l++) {
                        if (
                            ((d = (h = F[l])._gsap || ct(F)[l]._gsap),
                            (e._ptLookup[l] = g = {}),
                            nt[d.id] && it.length && vt(),
                            (_ = I === F ? l : I.indexOf(h)),
                            p &&
                                !1 !== (m = new p()).init(h, v || s, e, _, I) &&
                                ((e._pt = c = new cr(e._pt, h, m.name, 0, 1, m.render, m, 0, m.priority)),
                                m._props.forEach(function (t) {
                                    g[t] = c;
                                }),
                                m.priority && (f = 1)),
                            !p || v)
                        )
                            for (u in s) ot[u] && (m = He(u, s, e, _, h, I)) ? m.priority && (f = 1) : (g[u] = c = We.call(e, h, u, 'get', s[u], _, I, 0, T.stringFilter));
                        e._op && e._op[l] && e.kill(h, e._op[l]), X && e._pt && ((Ie = e), a.killTweensOf(h, g, e.globalTime(r)), (y = !e.parent), (Ie = 0)), e._pt && S && (nt[d.id] = 1);
                    }
                    f && ur(e), e._onInit && e._onInit(e);
                }
                (e._onUpdate = k), (e._initted = (!e._op || e._pt) && !y), z && r <= 0 && N.render(b, !0, !0);
            },
            Ue = function (t, e, r, i) {
                var n,
                    o,
                    s = e.ease || i || 'power1.inOut';
                if (F(e))
                    (o = r[t] || (r[t] = [])),
                        e.forEach(function (t, r) {
                            return o.push({ t: (r / (e.length - 1)) * 100, v: t, e: s });
                        });
                else for (n in e) (o = r[n] || (r[n] = [])), 'ease' === n || o.push({ t: parseFloat(t), v: e[n], e: s });
            },
            je = function (t, e, r, i, n) {
                return O(t) ? t.call(e, r, i, n) : C(t) && ~t.indexOf('random(') ? le(t) : t;
            },
            Ge = ut + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
            $e = {};
        dt(Ge + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
            return ($e[t] = 1);
        });
        var Qe = (function (t) {
            function r(r, i, o, s) {
                var l;
                'number' == typeof i && ((o.duration = i), (i = o), (o = null));
                var u,
                    c,
                    h,
                    f,
                    d,
                    p,
                    m,
                    g,
                    _ = (l = t.call(this, s ? i : Et(i)) || this).vars,
                    v = _.duration,
                    w = _.delay,
                    b = _.immediateRender,
                    x = _.stagger,
                    T = _.overwrite,
                    M = _.keyframes,
                    A = _.defaults,
                    E = _.scrollTrigger,
                    S = _.yoyoEase,
                    k = i.parent || a,
                    C = (F(r) || B(r) ? P(r[0]) : 'length' in i) ? [r] : te(r);
                if (((l._targets = C.length ? ct(C) : Q('GSAP target ' + r + ' not found. https://greensock.com', !y.nullTargetWarn) || []), (l._ptLookup = []), (l._overwrite = T), M || x || L(v) || L(w))) {
                    if (((i = l.vars), (u = l.timeline = new Ye({ data: 'nested', defaults: A || {}, targets: k && 'nested' === k.data ? k.vars.targets : C })).kill(), (u.parent = u._dp = e(l)), (u._start = 0), x || L(v) || L(w))) {
                        if (((f = C.length), (m = x && ie(x)), z(x))) for (d in x) ~Ge.indexOf(d) && (g || (g = {}), (g[d] = x[d]));
                        for (c = 0; c < f; c++) ((h = At(i, $e)).stagger = 0), S && (h.yoyoEase = S), g && Tt(h, g), (p = C[c]), (h.duration = +je(v, e(l), c, p, C)), (h.delay = (+je(w, e(l), c, p, C) || 0) - l._delay), !x && 1 === f && h.delay && ((l._delay = w = h.delay), (l._start += w), (h.delay = 0)), u.to(p, h, m ? m(c, p, C) : 0), (u._ease = Ee.none);
                        u.duration() ? (v = w = 0) : (l.timeline = 0);
                    } else if (M) {
                        Et(xt(u.vars.defaults, { ease: 'none' })), (u._ease = qe(M.ease || i.ease || 'none'));
                        var O,
                            q,
                            R,
                            Y = 0;
                        if (F(M))
                            M.forEach(function (t) {
                                return u.to(C, t, '>');
                            }),
                                u.duration();
                        else {
                            for (d in ((h = {}), M)) 'ease' === d || 'easeEach' === d || Ue(d, M[d], h, M.easeEach);
                            for (d in h)
                                for (
                                    O = h[d].sort(function (t, e) {
                                        return t.t - e.t;
                                    }),
                                        Y = 0,
                                        c = 0;
                                    c < O.length;
                                    c++
                                )
                                    ((R = { ease: (q = O[c]).e, duration: ((q.t - (c ? O[c - 1].t : 0)) / 100) * v })[d] = q.v), u.to(C, R, Y), (Y += R.duration);
                            u.duration() < v && u.to({}, { duration: v - u.duration() });
                        }
                    }
                    v || l.duration((v = u.duration()));
                } else l.timeline = 0;
                return !0 !== T || n || ((Ie = e(l)), a.killTweensOf(C), (Ie = 0)), Yt(k, e(l), o), i.reversed && l.reverse(), i.paused && l.paused(!0), (b || (!v && !M && l._start === mt(k._time) && D(b) && qt(e(l)) && 'nested' !== k.data)) && ((l._tTime = -1e-8), l.render(Math.max(0, -w) || 0)), E && It(e(l), E), l;
            }
            i(r, t);
            var s = r.prototype;
            return (
                (s.render = function (t, e, r) {
                    var i,
                        n,
                        s,
                        a,
                        l,
                        u,
                        c,
                        h,
                        f,
                        d = this._time,
                        p = this._tDur,
                        m = this._dur,
                        g = t < 0,
                        _ = t > p - x && !g ? p : t < x ? 0 : t;
                    if (m) {
                        if (_ !== this._tTime || !t || r || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 !== g)) {
                            if (((i = _), (h = this.timeline), this._repeat)) {
                                if (((a = m + this._rDelay), this._repeat < -1 && g)) return this.totalTime(100 * a + t, e, r);
                                if (((i = mt(_ % a)), _ === p ? ((s = this._repeat), (i = m)) : ((s = ~~(_ / a)) && s === _ / a && ((i = m), s--), i > m && (i = m)), (u = this._yoyo && 1 & s) && ((f = this._yEase), (i = m - i)), (l = Dt(this._tTime, a)), i === d && !r && this._initted)) return (this._tTime = _), this;
                                s !== l && (h && this._yEase && Pe(h, u), !this.vars.repeatRefresh || u || this._lock || ((this._lock = r = 1), (this.render(mt(a * s), !0).invalidate()._lock = 0)));
                            }
                            if (!this._initted) {
                                if (Xt(this, g ? t : i, r, e, _)) return (this._tTime = 0), this;
                                if (d !== this._time) return this;
                                if (m !== this._dur) return this.render(t, e, r);
                            }
                            if (((this._tTime = _), (this._time = i), !this._act && this._ts && ((this._act = 1), (this._lazy = 0)), (this.ratio = c = (f || this._ease)(i / m)), this._from && (this.ratio = c = 1 - c), i && !d && !e && !s && (he(this, 'onStart'), this._tTime !== _))) return this;
                            for (n = this._pt; n; ) n.r(c, n.d), (n = n._next);
                            (h && h.render(t < 0 ? t : !i && u ? -1e-8 : h._dur * h._ease(i / this._dur), e, r)) || (this._startAt && (this._zTime = t)),
                                this._onUpdate && !e && (g && Pt(this, t, 0, r), he(this, 'onUpdate')),
                                this._repeat && s !== l && this.vars.onRepeat && !e && this.parent && he(this, 'onRepeat'),
                                (_ !== this._tDur && _) || this._tTime !== _ || (g && !this._onUpdate && Pt(this, t, 0, !0), (t || !m) && ((_ === this._tDur && this._ts > 0) || (!_ && this._ts < 0)) && Ct(this, 1), e || (g && !d) || !(_ || d || u) || (he(this, _ === p ? 'onComplete' : 'onReverseComplete', !0), this._prom && !(_ < p && this.timeScale() > 0) && this._prom()));
                        }
                    } else
                        !(function (t, e, r, i) {
                            var n,
                                s,
                                a,
                                l = t.ratio,
                                u = e < 0 || (!e && ((!t._start && Nt(t) && (t._initted || !Wt(t))) || ((t._ts < 0 || t._dp._ts < 0) && !Wt(t)))) ? 0 : 1,
                                c = t._rDelay,
                                h = 0;
                            if ((c && t._repeat && ((h = Qt(0, t._tDur, e)), (s = Dt(h, c)), t._yoyo && 1 & s && (u = 1 - u), s !== Dt(t._tTime, c) && ((l = 1 - u), t.vars.repeatRefresh && t._initted && t.invalidate())), u !== l || o || i || t._zTime === x || (!e && t._zTime))) {
                                if (!t._initted && Xt(t, e, i, r, h)) return;
                                for (a = t._zTime, t._zTime = e || (r ? x : 0), r || (r = e && !a), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = h, n = t._pt; n; ) n.r(u, n.d), (n = n._next);
                                e < 0 && Pt(t, e, 0, !0), t._onUpdate && !r && he(t, 'onUpdate'), h && t._repeat && !r && t.parent && he(t, 'onRepeat'), (e >= t._tDur || e < 0) && t.ratio === u && (u && Ct(t, 1), r || o || (he(t, u ? 'onComplete' : 'onReverseComplete', !0), t._prom && t._prom()));
                            } else t._zTime || (t._zTime = e);
                        })(this, t, e, r);
                    return this;
                }),
                (s.targets = function () {
                    return this._targets;
                }),
                (s.invalidate = function (e) {
                    return (!e || !this.vars.runBackwards) && (this._startAt = 0), (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e);
                }),
                (s.resetTo = function (t, e, r, i) {
                    p || Me.wake(), this._ts || this.play();
                    var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                    return (
                        this._initted || Ve(this, n),
                        (function (t, e, r, i, n, o, s) {
                            var a,
                                l,
                                u,
                                c,
                                h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                            if (!h)
                                for (h = t._ptCache[e] = [], u = t._ptLookup, c = t._targets.length; c--; ) {
                                    if ((a = u[c][e]) && a.d && a.d._pt) for (a = a.d._pt; a && a.p !== e && a.fp !== e; ) a = a._next;
                                    if (!a) return (Xe = 1), (t.vars[e] = '+=0'), Ve(t, s), (Xe = 0), 1;
                                    h.push(a);
                                }
                            for (c = h.length; c--; ) ((a = (l = h[c])._pt || l).s = (!i && 0 !== i) || n ? a.s + (i || 0) + o * a.c : i), (a.c = r - a.s), l.e && (l.e = pt(r) + Zt(l.e)), l.b && (l.b = a.s + Zt(l.b));
                        })(this, t, e, r, i, this._ease(n / this._dur), n)
                            ? this.resetTo(t, e, r, i)
                            : (Bt(this, 0), this.parent || St(this._dp, this, '_first', '_last', this._dp._sort ? '_start' : 0), this.render(0))
                    );
                }),
                (s.kill = function (t, e) {
                    if ((void 0 === e && (e = 'all'), !(t || (e && 'all' !== e)))) return (this._lazy = this._pt = 0), this.parent ? fe(this) : this;
                    if (this.timeline) {
                        var r = this.timeline.totalDuration();
                        return this.timeline.killTweensOf(t, e, Ie && !0 !== Ie.vars.overwrite)._first || fe(this), this.parent && r !== this.timeline.totalDuration() && Ht(this, (this._dur * this.timeline._tDur) / r, 0, 1), this;
                    }
                    var i,
                        n,
                        o,
                        s,
                        a,
                        l,
                        u,
                        c = this._targets,
                        h = t ? te(t) : c,
                        f = this._ptLookup,
                        d = this._pt;
                    if (
                        (!e || 'all' === e) &&
                        (function (t, e) {
                            for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; );
                            return r < 0;
                        })(c, h)
                    )
                        return 'all' === e && (this._pt = 0), fe(this);
                    for (
                        i = this._op = this._op || [],
                            'all' !== e &&
                                (C(e) &&
                                    ((a = {}),
                                    dt(e, function (t) {
                                        return (a[t] = 1);
                                    }),
                                    (e = a)),
                                (e = (function (t, e) {
                                    var r,
                                        i,
                                        n,
                                        o,
                                        s = t[0] ? ht(t[0]).harness : 0,
                                        a = s && s.aliases;
                                    if (!a) return e;
                                    for (i in ((r = Tt({}, e)), a)) if ((i in r)) for (n = (o = a[i].split(',')).length; n--; ) r[o[n]] = r[i];
                                    return r;
                                })(c, e))),
                            u = c.length;
                        u--;

                    )
                        if (~h.indexOf(c[u])) for (a in ((n = f[u]), 'all' === e ? ((i[u] = e), (s = n), (o = {})) : ((o = i[u] = i[u] || {}), (s = e)), s)) (l = n && n[a]) && (('kill' in l.d && !0 !== l.d.kill(a)) || kt(this, l, '_pt'), delete n[a]), 'all' !== o && (o[a] = 1);
                    return this._initted && !this._pt && d && fe(this), this;
                }),
                (r.to = function (t, e) {
                    return new r(t, e, arguments[2]);
                }),
                (r.from = function (t, e) {
                    return Gt(1, arguments);
                }),
                (r.delayedCall = function (t, e, i, n) {
                    return new r(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: i, onReverseCompleteParams: i, callbackScope: n });
                }),
                (r.fromTo = function (t, e, r) {
                    return Gt(2, arguments);
                }),
                (r.set = function (t, e) {
                    return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new r(t, e);
                }),
                (r.killTweensOf = function (t, e, r) {
                    return a.killTweensOf(t, e, r);
                }),
                r
            );
        })(Fe);
        xt(Qe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
            dt('staggerTo,staggerFrom,staggerFromTo', function (t) {
                Qe[t] = function () {
                    var e = new Ye(),
                        r = Kt.call(arguments, 0);
                    return r.splice('staggerFromTo' === t ? 5 : 4, 0, 0), e[t].apply(e, r);
                };
            });
        var Ze = function (t, e, r) {
                return (t[e] = r);
            },
            Ke = function (t, e, r) {
                return t[e](r);
            },
            Je = function (t, e, r, i) {
                return t[e](i.fp, r);
            },
            tr = function (t, e, r) {
                return t.setAttribute(e, r);
            },
            er = function (t, e) {
                return O(t[e]) ? Ke : q(t[e]) && t.setAttribute ? tr : Ze;
            },
            rr = function (t, e) {
                return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
            },
            ir = function (t, e) {
                return e.set(e.t, e.p, !!(e.s + e.c * t), e);
            },
            nr = function (t, e) {
                var r = e._pt,
                    i = '';
                if (!t && e.b) i = e.b;
                else if (1 === t && e.e) i = e.e;
                else {
                    for (; r; ) (i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i), (r = r._next);
                    i += e.c;
                }
                e.set(e.t, e.p, i, e);
            },
            or = function (t, e) {
                for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
            },
            sr = function (t, e, r, i) {
                for (var n, o = this._pt; o; ) (n = o._next), o.p === i && o.modifier(t, e, r), (o = n);
            },
            ar = function (t) {
                for (var e, r, i = this._pt; i; ) (r = i._next), (i.p === t && !i.op) || i.op === t ? kt(this, i, '_pt') : i.dep || (e = 1), (i = r);
                return !e;
            },
            lr = function (t, e, r, i) {
                i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
            },
            ur = function (t) {
                for (var e, r, i, n, o = t._pt; o; ) {
                    for (e = o._next, r = i; r && r.pr > o.pr; ) r = r._next;
                    (o._prev = r ? r._prev : n) ? (o._prev._next = o) : (i = o), (o._next = r) ? (r._prev = o) : (n = o), (o = e);
                }
                t._pt = i;
            },
            cr = (function () {
                function t(t, e, r, i, n, o, s, a, l) {
                    (this.t = e), (this.s = i), (this.c = n), (this.p = r), (this.r = o || rr), (this.d = s || this), (this.set = a || Ze), (this.pr = l || 0), (this._next = t), t && (t._prev = this);
                }
                return (
                    (t.prototype.modifier = function (t, e, r) {
                        (this.mSet = this.mSet || this.set), (this.set = lr), (this.m = t), (this.mt = r), (this.tween = e);
                    }),
                    t
                );
            })();
        dt(ut + 'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger', function (t) {
            return (rt[t] = 1);
        }),
            (U.TweenMax = U.TweenLite = Qe),
            (U.TimelineLite = U.TimelineMax = Ye),
            (a = new Ye({ sortChildren: !1, defaults: w, autoRemoveChildren: !0, id: 'root', smoothChildTiming: !0 })),
            (y.stringFilter = Te);
        var hr = [],
            fr = {},
            dr = [],
            pr = 0,
            mr = function (t) {
                return (fr[t] || dr).map(function (t) {
                    return t();
                });
            },
            gr = function () {
                var t = Date.now(),
                    e = [];
                t - pr > 2 &&
                    (mr('matchMediaInit'),
                    hr.forEach(function (t) {
                        var r,
                            i,
                            n,
                            o,
                            s = t.queries,
                            a = t.conditions;
                        for (i in s) (r = l.matchMedia(s[i]).matches) && (n = 1), r !== a[i] && ((a[i] = r), (o = 1));
                        o && (t.revert(), n && e.push(t));
                    }),
                    mr('matchMediaRevert'),
                    e.forEach(function (t) {
                        return t.onMatch(t);
                    }),
                    (pr = t),
                    mr('matchMedia'));
            },
            _r = (function () {
                function t(t, e) {
                    (this.selector = e && ee(e)), (this.data = []), (this._r = []), (this.isReverted = !1), t && this.add(t);
                }
                var e = t.prototype;
                return (
                    (e.add = function (t, e, r) {
                        O(t) && ((r = e), (e = t), (t = O));
                        var i = this,
                            n = function () {
                                var t,
                                    n = s,
                                    o = i.selector;
                                return n && n !== i && n.data.push(i), r && (i.selector = ee(r)), (s = i), (t = e.apply(i, arguments)), O(t) && i._r.push(t), (s = n), (i.selector = o), (i.isReverted = !1), t;
                            };
                        return (i.last = n), t === O ? n(i) : t ? (i[t] = n) : n;
                    }),
                    (e.ignore = function (t) {
                        var e = s;
                        (s = null), t(this), (s = e);
                    }),
                    (e.getTweens = function () {
                        var e = [];
                        return (
                            this.data.forEach(function (r) {
                                return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof Qe && !(r.parent && 'nested' === r.parent.data) && e.push(r);
                            }),
                            e
                        );
                    }),
                    (e.clear = function () {
                        this._r.length = this.data.length = 0;
                    }),
                    (e.kill = function (t, e) {
                        var r = this;
                        if (t) {
                            var i = this.getTweens();
                            this.data.forEach(function (t) {
                                'isFlip' === t.data &&
                                    (t.revert(),
                                    t.getChildren(!0, !0, !1).forEach(function (t) {
                                        return i.splice(i.indexOf(t), 1);
                                    }));
                            }),
                                i
                                    .map(function (t) {
                                        return { g: t.globalTime(0), t };
                                    })
                                    .sort(function (t, e) {
                                        return e.g - t.g || -1;
                                    })
                                    .forEach(function (e) {
                                        return e.t.revert(t);
                                    }),
                                this.data.forEach(function (e) {
                                    return !(e instanceof Fe) && e.revert && e.revert(t);
                                }),
                                this._r.forEach(function (e) {
                                    return e(t, r);
                                }),
                                (this.isReverted = !0);
                        } else
                            this.data.forEach(function (t) {
                                return t.kill && t.kill();
                            });
                        if ((this.clear(), e)) {
                            var n = hr.indexOf(this);
                            ~n && hr.splice(n, 1);
                        }
                    }),
                    (e.revert = function (t) {
                        this.kill(t || {});
                    }),
                    t
                );
            })(),
            vr = (function () {
                function t(t) {
                    (this.contexts = []), (this.scope = t);
                }
                var e = t.prototype;
                return (
                    (e.add = function (t, e, r) {
                        z(t) || (t = { matches: t });
                        var i,
                            n,
                            o,
                            s = new _r(0, r || this.scope),
                            a = (s.conditions = {});
                        for (n in (this.contexts.push(s), (e = s.add('onMatch', e)), (s.queries = t), t)) 'all' === n ? (o = 1) : (i = l.matchMedia(t[n])) && (hr.indexOf(s) < 0 && hr.push(s), (a[n] = i.matches) && (o = 1), i.addListener ? i.addListener(gr) : i.addEventListener('change', gr));
                        return o && e(s), this;
                    }),
                    (e.revert = function (t) {
                        this.kill(t || {});
                    }),
                    (e.kill = function (t) {
                        this.contexts.forEach(function (e) {
                            return e.kill(t, !0);
                        });
                    }),
                    t
                );
            })(),
            yr = {
                registerPlugin: function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    e.forEach(function (t) {
                        return pe(t);
                    });
                },
                timeline: function (t) {
                    return new Ye(t);
                },
                getTweensOf: function (t, e) {
                    return a.getTweensOf(t, e);
                },
                getProperty: function (t, e, r, i) {
                    C(t) && (t = te(t)[0]);
                    var n = ht(t || {}).get,
                        o = r ? bt : wt;
                    return (
                        'native' === r && (r = ''),
                        t
                            ? e
                                ? o(((ot[e] && ot[e].get) || n)(t, e, r, i))
                                : function (e, r, i) {
                                      return o(((ot[e] && ot[e].get) || n)(t, e, r, i));
                                  }
                            : t
                    );
                },
                quickSetter: function (t, e, r) {
                    if ((t = te(t)).length > 1) {
                        var i = t.map(function (t) {
                                return xr.quickSetter(t, e, r);
                            }),
                            n = i.length;
                        return function (t) {
                            for (var e = n; e--; ) i[e](t);
                        };
                    }
                    t = t[0] || {};
                    var o = ot[e],
                        s = ht(t),
                        a = (s.harness && (s.harness.aliases || {})[e]) || e,
                        l = o
                            ? function (e) {
                                  var i = new o();
                                  (d._pt = 0), i.init(t, r ? e + r : e, d, 0, [t]), i.render(1, i), d._pt && or(1, d);
                              }
                            : s.set(t, a);
                    return o
                        ? l
                        : function (e) {
                              return l(t, a, r ? e + r : e, s, 1);
                          };
                },
                quickTo: function (t, e, r) {
                    var i,
                        n = xr.to(t, Tt((((i = {})[e] = '+=0.1'), (i.paused = !0), i), r || {})),
                        o = function (t, r, i) {
                            return n.resetTo(e, t, r, i);
                        };
                    return (o.tween = n), o;
                },
                isTweening: function (t) {
                    return a.getTweensOf(t, !0).length > 0;
                },
                defaults: function (t) {
                    return t && t.ease && (t.ease = qe(t.ease, w.ease)), Mt(w, t || {});
                },
                config: function (t) {
                    return Mt(y, t || {});
                },
                registerEffect: function (t) {
                    var e = t.name,
                        r = t.effect,
                        i = t.plugins,
                        n = t.defaults,
                        o = t.extendTimeline;
                    (i || '').split(',').forEach(function (t) {
                        return t && !ot[t] && !U[t] && Q(e + ' effect requires ' + t + ' plugin.');
                    }),
                        (st[e] = function (t, e, i) {
                            return r(te(t), xt(e || {}, n), i);
                        }),
                        o &&
                            (Ye.prototype[e] = function (t, r, i) {
                                return this.add(st[e](t, z(r) ? r : (i = r) && {}, this), i);
                            });
                },
                registerEase: function (t, e) {
                    Ee[t] = qe(e);
                },
                parseEase: function (t, e) {
                    return arguments.length ? qe(t, e) : Ee;
                },
                getById: function (t) {
                    return a.getById(t);
                },
                exportRoot: function (t, e) {
                    void 0 === t && (t = {});
                    var r,
                        i,
                        n = new Ye(t);
                    for (n.smoothChildTiming = D(t.smoothChildTiming), a.remove(n), n._dp = 0, n._time = n._tTime = a._time, r = a._first; r; ) (i = r._next), (!e && !r._dur && r instanceof Qe && r.vars.onComplete === r._targets[0]) || Yt(n, r, r._start - r._delay), (r = i);
                    return Yt(a, n, 0), n;
                },
                context: function (t, e) {
                    return t ? new _r(t, e) : s;
                },
                matchMedia: function (t) {
                    return new vr(t);
                },
                matchMediaRefresh: function () {
                    return (
                        hr.forEach(function (t) {
                            var e,
                                r,
                                i = t.conditions;
                            for (r in i) i[r] && ((i[r] = !1), (e = 1));
                            e && t.revert();
                        }) || gr()
                    );
                },
                addEventListener: function (t, e) {
                    var r = fr[t] || (fr[t] = []);
                    ~r.indexOf(e) || r.push(e);
                },
                removeEventListener: function (t, e) {
                    var r = fr[t],
                        i = r && r.indexOf(e);
                    i >= 0 && r.splice(i, 1);
                },
                utils: {
                    wrap: function t(e, r, i) {
                        var n = r - e;
                        return F(e)
                            ? ae(e, t(0, e.length), r)
                            : $t(i, function (t) {
                                  return ((n + ((t - e) % n)) % n) + e;
                              });
                    },
                    wrapYoyo: function t(e, r, i) {
                        var n = r - e,
                            o = 2 * n;
                        return F(e)
                            ? ae(e, t(0, e.length - 1), r)
                            : $t(i, function (t) {
                                  return e + ((t = (o + ((t - e) % o)) % o || 0) > n ? o - t : t);
                              });
                    },
                    distribute: ie,
                    random: se,
                    snap: oe,
                    normalize: function (t, e, r) {
                        return ue(t, e, 0, 1, r);
                    },
                    getUnit: Zt,
                    clamp: function (t, e, r) {
                        return $t(r, function (r) {
                            return Qt(t, e, r);
                        });
                    },
                    splitColor: ve,
                    toArray: te,
                    selector: ee,
                    mapRange: ue,
                    pipe: function () {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        return function (t) {
                            return e.reduce(function (t, e) {
                                return e(t);
                            }, t);
                        };
                    },
                    unitize: function (t, e) {
                        return function (r) {
                            return t(parseFloat(r)) + (e || Zt(r));
                        };
                    },
                    interpolate: function t(e, r, i, n) {
                        var o = isNaN(e + r)
                            ? 0
                            : function (t) {
                                  return (1 - t) * e + t * r;
                              };
                        if (!o) {
                            var s,
                                a,
                                l,
                                u,
                                c,
                                h = C(e),
                                f = {};
                            if ((!0 === i && (n = 1) && (i = null), h)) (e = { p: e }), (r = { p: r });
                            else if (F(e) && !F(r)) {
                                for (l = [], u = e.length, c = u - 2, a = 1; a < u; a++) l.push(t(e[a - 1], e[a]));
                                u--,
                                    (o = function (t) {
                                        t *= u;
                                        var e = Math.min(c, ~~t);
                                        return l[e](t - e);
                                    }),
                                    (i = r);
                            } else n || (e = Tt(F(e) ? [] : {}, e));
                            if (!l) {
                                for (s in r) We.call(f, e, s, 'get', r[s]);
                                o = function (t) {
                                    return or(t, f) || (h ? e.p : e);
                                };
                            }
                        }
                        return $t(i, o);
                    },
                    shuffle: re,
                },
                install: G,
                effects: st,
                ticker: Me,
                updateRoot: Ye.updateRoot,
                plugins: ot,
                globalTimeline: a,
                core: {
                    PropTween: cr,
                    globals: Z,
                    Tween: Qe,
                    Timeline: Ye,
                    Animation: Fe,
                    getCache: ht,
                    _removeLinkedListItem: kt,
                    reverting: function () {
                        return o;
                    },
                    context: function (t) {
                        return t && s && (s.data.push(t), (t._ctx = s)), s;
                    },
                    suppressOverwrites: function (t) {
                        return (n = t);
                    },
                },
            };
        dt('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
            return (yr[t] = Qe[t]);
        }),
            Me.add(Ye.updateRoot),
            (d = yr.to({}, { duration: 0 }));
        var wr = function (t, e) {
                for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next;
                return r;
            },
            br = function (t, e) {
                return {
                    name: t,
                    rawVars: 1,
                    init: function (t, r, i) {
                        i._onInit = function (t) {
                            var i, n;
                            if (
                                (C(r) &&
                                    ((i = {}),
                                    dt(r, function (t) {
                                        return (i[t] = 1);
                                    }),
                                    (r = i)),
                                e)
                            ) {
                                for (n in ((i = {}), r)) i[n] = e(r[n]);
                                r = i;
                            }
                            !(function (t, e) {
                                var r,
                                    i,
                                    n,
                                    o = t._targets;
                                for (r in e) for (i = o.length; i--; ) (n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = wr(n, r)), n && n.modifier && n.modifier(e[r], t, o[i], r));
                            })(t, r);
                        };
                    },
                };
            },
            xr =
                yr.registerPlugin(
                    {
                        name: 'attr',
                        init: function (t, e, r, i, n) {
                            var o, s, a;
                            for (o in ((this.tween = r), e)) (a = t.getAttribute(o) || ''), ((s = this.add(t, 'setAttribute', (a || 0) + '', e[o], i, n, 0, 0, o)).op = o), (s.b = a), this._props.push(o);
                        },
                        render: function (t, e) {
                            for (var r = e._pt; r; ) o ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
                        },
                    },
                    {
                        name: 'endArray',
                        init: function (t, e) {
                            for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
                        },
                    },
                    br('roundProps', ne),
                    br('modifiers'),
                    br('snap', oe)
                ) || yr;
        (Qe.version = Ye.version = xr.version = '3.11.5'), (h = 1), R() && Ae(), Ee.Power0, Ee.Power1, Ee.Power2, Ee.Power3, Ee.Power4, Ee.Linear, Ee.Quad, Ee.Cubic, Ee.Quart, Ee.Quint, Ee.Strong, Ee.Elastic, Ee.Back, Ee.SteppedEase, Ee.Bounce, Ee.Sine, Ee.Expo, Ee.Circ;
        var Tr,
            Mr,
            Ar,
            Er,
            Sr,
            kr,
            Cr,
            Or,
            Pr = {},
            qr = 180 / Math.PI,
            zr = Math.PI / 180,
            Dr = Math.atan2,
            Rr = /([A-Z])/g,
            Lr = /(left|right|width|margin|padding|x)/i,
            Br = /[\s,\(]\S/,
            Fr = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' },
            Yr = function (t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
            },
            Ir = function (t, e) {
                return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
            },
            Xr = function (t, e) {
                return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
            },
            Nr = function (t, e) {
                var r = e.s + e.c * t;
                e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
            },
            Wr = function (t, e) {
                return e.set(e.t, e.p, t ? e.e : e.b, e);
            },
            Hr = function (t, e) {
                return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
            },
            Vr = function (t, e, r) {
                return (t.style[e] = r);
            },
            Ur = function (t, e, r) {
                return t.style.setProperty(e, r);
            },
            jr = function (t, e, r) {
                return (t._gsap[e] = r);
            },
            Gr = function (t, e, r) {
                return (t._gsap.scaleX = t._gsap.scaleY = r);
            },
            $r = function (t, e, r, i, n) {
                var o = t._gsap;
                (o.scaleX = o.scaleY = r), o.renderTransform(n, o);
            },
            Qr = function (t, e, r, i, n) {
                var o = t._gsap;
                (o[e] = r), o.renderTransform(n, o);
            },
            Zr = 'transform',
            Kr = Zr + 'Origin',
            Jr = function t(e, r) {
                var i = this,
                    n = this.target,
                    o = n.style;
                if (e in Pr) {
                    if (((this.tfm = this.tfm || {}), 'transform' === e))
                        return Fr.transform.split(',').forEach(function (e) {
                            return t.call(i, e, r);
                        });
                    if (
                        (~(e = Fr[e] || e).indexOf(',')
                            ? e.split(',').forEach(function (t) {
                                  return (i.tfm[t] = _i(n, t));
                              })
                            : (this.tfm[e] = n._gsap.x ? n._gsap[e] : _i(n, e)),
                        this.props.indexOf(Zr) >= 0)
                    )
                        return;
                    n._gsap.svg && ((this.svgo = n.getAttribute('data-svg-origin')), this.props.push(Kr, r, '')), (e = Zr);
                }
                (o || r) && this.props.push(e, r, o[e]);
            },
            ti = function (t) {
                t.translate && (t.removeProperty('translate'), t.removeProperty('scale'), t.removeProperty('rotate'));
            },
            ei = function () {
                var t,
                    e,
                    r = this.props,
                    i = this.target,
                    n = i.style,
                    o = i._gsap;
                for (t = 0; t < r.length; t += 3) r[t + 1] ? (i[r[t]] = r[t + 2]) : r[t + 2] ? (n[r[t]] = r[t + 2]) : n.removeProperty('--' === r[t].substr(0, 2) ? r[t] : r[t].replace(Rr, '-$1').toLowerCase());
                if (this.tfm) {
                    for (e in this.tfm) o[e] = this.tfm[e];
                    o.svg && (o.renderTransform(), i.setAttribute('data-svg-origin', this.svgo || '')), ((t = Cr()) && t.isStart) || n[Zr] || (ti(n), (o.uncache = 1));
                }
            },
            ri = function (t, e) {
                var r = { target: t, props: [], revert: ei, save: Jr };
                return (
                    t._gsap || xr.core.getCache(t),
                    e &&
                        e.split(',').forEach(function (t) {
                            return r.save(t);
                        }),
                    r
                );
            },
            ii = function (t, e) {
                var r = Mr.createElementNS ? Mr.createElementNS((e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), t) : Mr.createElement(t);
                return r.style ? r : Mr.createElement(t);
            },
            ni = function t(e, r, i) {
                var n = getComputedStyle(e);
                return n[r] || n.getPropertyValue(r.replace(Rr, '-$1').toLowerCase()) || n.getPropertyValue(r) || (!i && t(e, si(r) || r, 1)) || '';
            },
            oi = 'O,Moz,ms,Ms,Webkit'.split(','),
            si = function (t, e, r) {
                var i = (e || Sr).style,
                    n = 5;
                if (t in i && !r) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(oi[n] + t in i); );
                return n < 0 ? null : (3 === n ? 'ms' : n >= 0 ? oi[n] : '') + t;
            },
            ai = function () {
                'undefined' != typeof window && window.document && ((Tr = window), (Mr = Tr.document), (Ar = Mr.documentElement), (Sr = ii('div') || { style: {} }), ii('div'), (Zr = si(Zr)), (Kr = Zr + 'Origin'), (Sr.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'), (Or = !!si('perspective')), (Cr = xr.core.reverting), (Er = 1));
            },
            li = function t(e) {
                var r,
                    i = ii('svg', (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) || 'http://www.w3.org/2000/svg'),
                    n = this.parentNode,
                    o = this.nextSibling,
                    s = this.style.cssText;
                if ((Ar.appendChild(i), i.appendChild(this), (this.style.display = 'block'), e))
                    try {
                        (r = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
                    } catch (t) {}
                else this._gsapBBox && (r = this._gsapBBox());
                return n && (o ? n.insertBefore(this, o) : n.appendChild(this)), Ar.removeChild(i), (this.style.cssText = s), r;
            },
            ui = function (t, e) {
                for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
            },
            ci = function (t) {
                var e;
                try {
                    e = t.getBBox();
                } catch (r) {
                    e = li.call(t, !0);
                }
                return (e && (e.width || e.height)) || t.getBBox === li || (e = li.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +ui(t, ['x', 'cx', 'x1']) || 0, y: +ui(t, ['y', 'cy', 'y1']) || 0, width: 0, height: 0 };
            },
            hi = function (t) {
                return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !ci(t));
            },
            fi = function (t, e) {
                if (e) {
                    var r = t.style;
                    e in Pr && e !== Kr && (e = Zr), r.removeProperty ? (('ms' !== e.substr(0, 2) && 'webkit' !== e.substr(0, 6)) || (e = '-' + e), r.removeProperty(e.replace(Rr, '-$1').toLowerCase())) : r.removeAttribute(e);
                }
            },
            di = function (t, e, r, i, n, o) {
                var s = new cr(t._pt, e, r, 0, 1, o ? Hr : Wr);
                return (t._pt = s), (s.b = i), (s.e = n), t._props.push(r), s;
            },
            pi = { deg: 1, rad: 1, turn: 1 },
            mi = { grid: 1, flex: 1 },
            gi = function t(e, r, i, n) {
                var o,
                    s,
                    a,
                    l,
                    u = parseFloat(i) || 0,
                    c = (i + '').trim().substr((u + '').length) || 'px',
                    h = Sr.style,
                    f = Lr.test(r),
                    d = 'svg' === e.tagName.toLowerCase(),
                    p = (d ? 'client' : 'offset') + (f ? 'Width' : 'Height'),
                    m = 100,
                    g = 'px' === n,
                    _ = '%' === n;
                return n === c || !u || pi[n] || pi[c]
                    ? u
                    : ('px' !== c && !g && (u = t(e, r, i, 'px')),
                      (l = e.getCTM && hi(e)),
                      (!_ && '%' !== c) || (!Pr[r] && !~r.indexOf('adius'))
                          ? ((h[f ? 'width' : 'height'] = m + (g ? c : n)),
                            (s = ~r.indexOf('adius') || ('em' === n && e.appendChild && !d) ? e : e.parentNode),
                            l && (s = (e.ownerSVGElement || {}).parentNode),
                            (s && s !== Mr && s.appendChild) || (s = Mr.body),
                            (a = s._gsap) && _ && a.width && f && a.time === Me.time && !a.uncache
                                ? pt((u / a.width) * m)
                                : ((_ || '%' === c) && !mi[ni(s, 'display')] && (h.position = ni(e, 'position')), s === e && (h.position = 'static'), s.appendChild(Sr), (o = Sr[p]), s.removeChild(Sr), (h.position = 'absolute'), f && _ && (((a = ht(s)).time = Me.time), (a.width = s[p])), pt(g ? (o * u) / m : o && u ? (m / o) * u : 0)))
                          : ((o = l ? e.getBBox()[f ? 'width' : 'height'] : e[p]), pt(_ ? (u / o) * m : (u / 100) * o)));
            },
            _i = function (t, e, r, i) {
                var n;
                return (
                    Er || ai(),
                    e in Fr && 'transform' !== e && ~(e = Fr[e]).indexOf(',') && (e = e.split(',')[0]),
                    Pr[e] && 'transform' !== e ? ((n = ki(t, i)), (n = 'transformOrigin' !== e ? n[e] : n.svg ? n.origin : Ci(ni(t, Kr)) + ' ' + n.zOrigin + 'px')) : (!(n = t.style[e]) || 'auto' === n || i || ~(n + '').indexOf('calc(')) && (n = (bi[e] && bi[e](t, e, r)) || ni(t, e) || ft(t, e) || ('opacity' === e ? 1 : 0)),
                    r && !~(n + '').trim().indexOf(' ') ? gi(t, e, n, r) + r : n
                );
            },
            vi = function (t, e, r, i) {
                if (!r || 'none' === r) {
                    var n = si(e, t, 1),
                        o = n && ni(t, n, 1);
                    o && o !== r ? ((e = n), (r = o)) : 'borderColor' === e && (r = ni(t, 'borderTopColor'));
                }
                var s,
                    a,
                    l,
                    u,
                    c,
                    h,
                    f,
                    d,
                    p,
                    m,
                    g,
                    _ = new cr(this._pt, t.style, e, 0, 1, nr),
                    v = 0,
                    w = 0;
                if (((_.b = r), (_.e = i), (r += ''), 'auto' == (i += '') && ((t.style[e] = i), (i = ni(t, e) || i), (t.style[e] = r)), Te((s = [r, i])), (i = s[1]), (l = (r = s[0]).match(X) || []), (i.match(X) || []).length)) {
                    for (; (a = X.exec(i)); )
                        (f = a[0]),
                            (p = i.substring(v, a.index)),
                            c ? (c = (c + 1) % 5) : ('rgba(' !== p.substr(-5) && 'hsla(' !== p.substr(-5)) || (c = 1),
                            f !== (h = l[w++] || '') &&
                                ((u = parseFloat(h) || 0),
                                (g = h.substr((u + '').length)),
                                '=' === f.charAt(1) && (f = gt(u, f) + g),
                                (d = parseFloat(f)),
                                (m = f.substr((d + '').length)),
                                (v = X.lastIndex - m.length),
                                m || ((m = m || y.units[e] || g), v === i.length && ((i += m), (_.e += m))),
                                g !== m && (u = gi(t, e, h, m) || 0),
                                (_._pt = { _next: _._pt, p: p || 1 === w ? p : ',', s: u, c: d - u, m: (c && c < 4) || 'zIndex' === e ? Math.round : 0 }));
                    _.c = v < i.length ? i.substring(v, i.length) : '';
                } else _.r = 'display' === e && 'none' === i ? Hr : Wr;
                return W.test(i) && (_.e = 0), (this._pt = _), _;
            },
            yi = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
            wi = function (t, e) {
                if (e.tween && e.tween._time === e.tween._dur) {
                    var r,
                        i,
                        n,
                        o = e.t,
                        s = o.style,
                        a = e.u,
                        l = o._gsap;
                    if ('all' === a || !0 === a) (s.cssText = ''), (i = 1);
                    else for (n = (a = a.split(',')).length; --n > -1; ) (r = a[n]), Pr[r] && ((i = 1), (r = 'transformOrigin' === r ? Kr : Zr)), fi(o, r);
                    i && (fi(o, Zr), l && (l.svg && o.removeAttribute('transform'), ki(o, 1), (l.uncache = 1), ti(s)));
                }
            },
            bi = {
                clearProps: function (t, e, r, i, n) {
                    if ('isFromStart' !== n.data) {
                        var o = (t._pt = new cr(t._pt, e, r, 0, 0, wi));
                        return (o.u = i), (o.pr = -10), (o.tween = n), t._props.push(r), 1;
                    }
                },
            },
            xi = [1, 0, 0, 1, 0, 0],
            Ti = {},
            Mi = function (t) {
                return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t;
            },
            Ai = function (t) {
                var e = ni(t, Zr);
                return Mi(e) ? xi : e.substr(7).match(I).map(pt);
            },
            Ei = function (t, e) {
                var r,
                    i,
                    n,
                    o,
                    s = t._gsap || ht(t),
                    a = t.style,
                    l = Ai(t);
                return s.svg && t.getAttribute('transform')
                    ? '1,0,0,1,0,0' === (l = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(',')
                        ? xi
                        : l
                    : (l !== xi || t.offsetParent || t === Ar || s.svg || ((n = a.display), (a.display = 'block'), ((r = t.parentNode) && t.offsetParent) || ((o = 1), (i = t.nextElementSibling), Ar.appendChild(t)), (l = Ai(t)), n ? (a.display = n) : fi(t, 'display'), o && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Ar.removeChild(t))),
                      e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
            },
            Si = function (t, e, r, i, n, o) {
                var s,
                    a,
                    l,
                    u = t._gsap,
                    c = n || Ei(t, !0),
                    h = u.xOrigin || 0,
                    f = u.yOrigin || 0,
                    d = u.xOffset || 0,
                    p = u.yOffset || 0,
                    m = c[0],
                    g = c[1],
                    _ = c[2],
                    v = c[3],
                    y = c[4],
                    w = c[5],
                    b = e.split(' '),
                    x = parseFloat(b[0]) || 0,
                    T = parseFloat(b[1]) || 0;
                r ? c !== xi && (a = m * v - g * _) && ((l = x * (-g / a) + T * (m / a) - (m * w - g * y) / a), (x = x * (v / a) + T * (-_ / a) + (_ * w - v * y) / a), (T = l)) : ((x = (s = ci(t)).x + (~b[0].indexOf('%') ? (x / 100) * s.width : x)), (T = s.y + (~(b[1] || b[0]).indexOf('%') ? (T / 100) * s.height : T))),
                    i || (!1 !== i && u.smooth) ? ((y = x - h), (w = T - f), (u.xOffset = d + (y * m + w * _) - y), (u.yOffset = p + (y * g + w * v) - w)) : (u.xOffset = u.yOffset = 0),
                    (u.xOrigin = x),
                    (u.yOrigin = T),
                    (u.smooth = !!i),
                    (u.origin = e),
                    (u.originIsAbsolute = !!r),
                    (t.style[Kr] = '0px 0px'),
                    o && (di(o, u, 'xOrigin', h, x), di(o, u, 'yOrigin', f, T), di(o, u, 'xOffset', d, u.xOffset), di(o, u, 'yOffset', p, u.yOffset)),
                    t.setAttribute('data-svg-origin', x + ' ' + T);
            },
            ki = function (t, e) {
                var r = t._gsap || new Be(t);
                if ('x' in r && !e && !r.uncache) return r;
                var i,
                    n,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c,
                    h,
                    f,
                    d,
                    p,
                    m,
                    g,
                    _,
                    v,
                    w,
                    b,
                    x,
                    T,
                    M,
                    A,
                    E,
                    S,
                    k,
                    C,
                    O,
                    P,
                    q,
                    z,
                    D,
                    R,
                    L = t.style,
                    B = r.scaleX < 0,
                    F = 'px',
                    Y = 'deg',
                    I = getComputedStyle(t),
                    X = ni(t, Kr) || '0';
                return (
                    (i = n = o = l = u = c = h = f = d = 0),
                    (s = a = 1),
                    (r.svg = !(!t.getCTM || !hi(t))),
                    I.translate &&
                        (('none' === I.translate && 'none' === I.scale && 'none' === I.rotate) || (L[Zr] = ('none' !== I.translate ? 'translate3d(' + (I.translate + ' 0 0').split(' ').slice(0, 3).join(', ') + ') ' : '') + ('none' !== I.rotate ? 'rotate(' + I.rotate + ') ' : '') + ('none' !== I.scale ? 'scale(' + I.scale.split(' ').join(',') + ') ' : '') + ('none' !== I[Zr] ? I[Zr] : '')),
                        (L.scale = L.rotate = L.translate = 'none')),
                    (g = Ei(t, r.svg)),
                    r.svg && (r.uncache ? ((k = t.getBBox()), (X = r.xOrigin - k.x + 'px ' + (r.yOrigin - k.y) + 'px'), (S = '')) : (S = !e && t.getAttribute('data-svg-origin')), Si(t, S || X, !!S || r.originIsAbsolute, !1 !== r.smooth, g)),
                    (p = r.xOrigin || 0),
                    (m = r.yOrigin || 0),
                    g !== xi &&
                        ((b = g[0]),
                        (x = g[1]),
                        (T = g[2]),
                        (M = g[3]),
                        (i = A = g[4]),
                        (n = E = g[5]),
                        6 === g.length
                            ? ((s = Math.sqrt(b * b + x * x)), (a = Math.sqrt(M * M + T * T)), (l = b || x ? Dr(x, b) * qr : 0), (h = T || M ? Dr(T, M) * qr + l : 0) && (a *= Math.abs(Math.cos(h * zr))), r.svg && ((i -= p - (p * b + m * T)), (n -= m - (p * x + m * M))))
                            : ((R = g[6]),
                              (z = g[7]),
                              (O = g[8]),
                              (P = g[9]),
                              (q = g[10]),
                              (D = g[11]),
                              (i = g[12]),
                              (n = g[13]),
                              (o = g[14]),
                              (u = (_ = Dr(R, q)) * qr),
                              _ && ((S = A * (v = Math.cos(-_)) + O * (w = Math.sin(-_))), (k = E * v + P * w), (C = R * v + q * w), (O = A * -w + O * v), (P = E * -w + P * v), (q = R * -w + q * v), (D = z * -w + D * v), (A = S), (E = k), (R = C)),
                              (c = (_ = Dr(-T, q)) * qr),
                              _ && ((v = Math.cos(-_)), (D = M * (w = Math.sin(-_)) + D * v), (b = S = b * v - O * w), (x = k = x * v - P * w), (T = C = T * v - q * w)),
                              (l = (_ = Dr(x, b)) * qr),
                              _ && ((S = b * (v = Math.cos(_)) + x * (w = Math.sin(_))), (k = A * v + E * w), (x = x * v - b * w), (E = E * v - A * w), (b = S), (A = k)),
                              u && Math.abs(u) + Math.abs(l) > 359.9 && ((u = l = 0), (c = 180 - c)),
                              (s = pt(Math.sqrt(b * b + x * x + T * T))),
                              (a = pt(Math.sqrt(E * E + R * R))),
                              (_ = Dr(A, E)),
                              (h = Math.abs(_) > 2e-4 ? _ * qr : 0),
                              (d = D ? 1 / (D < 0 ? -D : D) : 0)),
                        r.svg && ((S = t.getAttribute('transform')), (r.forceCSS = t.setAttribute('transform', '') || !Mi(ni(t, Zr))), S && t.setAttribute('transform', S))),
                    Math.abs(h) > 90 && Math.abs(h) < 270 && (B ? ((s *= -1), (h += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((a *= -1), (h += h <= 0 ? 180 : -180))),
                    (e = e || r.uncache),
                    (r.x = i - ((r.xPercent = i && ((!e && r.xPercent) || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? (t.offsetWidth * r.xPercent) / 100 : 0) + F),
                    (r.y = n - ((r.yPercent = n && ((!e && r.yPercent) || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? (t.offsetHeight * r.yPercent) / 100 : 0) + F),
                    (r.z = o + F),
                    (r.scaleX = pt(s)),
                    (r.scaleY = pt(a)),
                    (r.rotation = pt(l) + Y),
                    (r.rotationX = pt(u) + Y),
                    (r.rotationY = pt(c) + Y),
                    (r.skewX = h + Y),
                    (r.skewY = f + Y),
                    (r.transformPerspective = d + F),
                    (r.zOrigin = parseFloat(X.split(' ')[2]) || 0) && (L[Kr] = Ci(X)),
                    (r.xOffset = r.yOffset = 0),
                    (r.force3D = y.force3D),
                    (r.renderTransform = r.svg ? Li : Or ? Ri : Pi),
                    (r.uncache = 0),
                    r
                );
            },
            Ci = function (t) {
                return (t = t.split(' '))[0] + ' ' + t[1];
            },
            Oi = function (t, e, r) {
                var i = Zt(e);
                return pt(parseFloat(e) + parseFloat(gi(t, 'x', r + 'px', i))) + i;
            },
            Pi = function (t, e) {
                (e.z = '0px'), (e.rotationY = e.rotationX = '0deg'), (e.force3D = 0), Ri(t, e);
            },
            qi = '0deg',
            zi = '0px',
            Di = ') ',
            Ri = function (t, e) {
                var r = e || this,
                    i = r.xPercent,
                    n = r.yPercent,
                    o = r.x,
                    s = r.y,
                    a = r.z,
                    l = r.rotation,
                    u = r.rotationY,
                    c = r.rotationX,
                    h = r.skewX,
                    f = r.skewY,
                    d = r.scaleX,
                    p = r.scaleY,
                    m = r.transformPerspective,
                    g = r.force3D,
                    _ = r.target,
                    v = r.zOrigin,
                    y = '',
                    w = ('auto' === g && t && 1 !== t) || !0 === g;
                if (v && (c !== qi || u !== qi)) {
                    var b,
                        x = parseFloat(u) * zr,
                        T = Math.sin(x),
                        M = Math.cos(x);
                    (x = parseFloat(c) * zr), (b = Math.cos(x)), (o = Oi(_, o, T * b * -v)), (s = Oi(_, s, -Math.sin(x) * -v)), (a = Oi(_, a, M * b * -v + v));
                }
                m !== zi && (y += 'perspective(' + m + Di),
                    (i || n) && (y += 'translate(' + i + '%, ' + n + '%) '),
                    (w || o !== zi || s !== zi || a !== zi) && (y += a !== zi || w ? 'translate3d(' + o + ', ' + s + ', ' + a + ') ' : 'translate(' + o + ', ' + s + Di),
                    l !== qi && (y += 'rotate(' + l + Di),
                    u !== qi && (y += 'rotateY(' + u + Di),
                    c !== qi && (y += 'rotateX(' + c + Di),
                    (h === qi && f === qi) || (y += 'skew(' + h + ', ' + f + Di),
                    (1 === d && 1 === p) || (y += 'scale(' + d + ', ' + p + Di),
                    (_.style[Zr] = y || 'translate(0, 0)');
            },
            Li = function (t, e) {
                var r,
                    i,
                    n,
                    o,
                    s,
                    a = e || this,
                    l = a.xPercent,
                    u = a.yPercent,
                    c = a.x,
                    h = a.y,
                    f = a.rotation,
                    d = a.skewX,
                    p = a.skewY,
                    m = a.scaleX,
                    g = a.scaleY,
                    _ = a.target,
                    v = a.xOrigin,
                    y = a.yOrigin,
                    w = a.xOffset,
                    b = a.yOffset,
                    x = a.forceCSS,
                    T = parseFloat(c),
                    M = parseFloat(h);
                (f = parseFloat(f)),
                    (d = parseFloat(d)),
                    (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
                    f || d ? ((f *= zr), (d *= zr), (r = Math.cos(f) * m), (i = Math.sin(f) * m), (n = Math.sin(f - d) * -g), (o = Math.cos(f - d) * g), d && ((p *= zr), (s = Math.tan(d - p)), (n *= s = Math.sqrt(1 + s * s)), (o *= s), p && ((s = Math.tan(p)), (r *= s = Math.sqrt(1 + s * s)), (i *= s))), (r = pt(r)), (i = pt(i)), (n = pt(n)), (o = pt(o))) : ((r = m), (o = g), (i = n = 0)),
                    ((T && !~(c + '').indexOf('px')) || (M && !~(h + '').indexOf('px'))) && ((T = gi(_, 'x', c, 'px')), (M = gi(_, 'y', h, 'px'))),
                    (v || y || w || b) && ((T = pt(T + v - (v * r + y * n) + w)), (M = pt(M + y - (v * i + y * o) + b))),
                    (l || u) && ((s = _.getBBox()), (T = pt(T + (l / 100) * s.width)), (M = pt(M + (u / 100) * s.height))),
                    (s = 'matrix(' + r + ',' + i + ',' + n + ',' + o + ',' + T + ',' + M + ')'),
                    _.setAttribute('transform', s),
                    x && (_.style[Zr] = s);
            },
            Bi = function (t, e, r, i, n) {
                var o,
                    s,
                    a = 360,
                    l = C(n),
                    u = parseFloat(n) * (l && ~n.indexOf('rad') ? qr : 1) - i,
                    c = i + u + 'deg';
                return l && ('short' === (o = n.split('_')[1]) && (u %= a) != u % 180 && (u += u < 0 ? a : -360), 'cw' === o && u < 0 ? (u = ((u + 36e9) % a) - ~~(u / a) * a) : 'ccw' === o && u > 0 && (u = ((u - 36e9) % a) - ~~(u / a) * a)), (t._pt = s = new cr(t._pt, e, r, i, u, Ir)), (s.e = c), (s.u = 'deg'), t._props.push(r), s;
            },
            Fi = function (t, e) {
                for (var r in e) t[r] = e[r];
                return t;
            },
            Yi = function (t, e, r) {
                var i,
                    n,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c = Fi({}, r._gsap),
                    h = r.style;
                for (n in (c.svg ? ((o = r.getAttribute('transform')), r.setAttribute('transform', ''), (h[Zr] = e), (i = ki(r, 1)), fi(r, Zr), r.setAttribute('transform', o)) : ((o = getComputedStyle(r)[Zr]), (h[Zr] = e), (i = ki(r, 1)), (h[Zr] = o)), Pr))
                    (o = c[n]) !== (s = i[n]) && 'perspective,force3D,transformOrigin,svgOrigin'.indexOf(n) < 0 && ((a = Zt(o) !== (u = Zt(s)) ? gi(r, n, o, u) : parseFloat(o)), (l = parseFloat(s)), (t._pt = new cr(t._pt, i, n, a, l - a, Yr)), (t._pt.u = u || 0), t._props.push(n));
                Fi(i, c);
            };
        dt('padding,margin,Width,Radius', function (t, e) {
            var r = 'Top',
                i = 'Right',
                n = 'Bottom',
                o = 'Left',
                s = (e < 3 ? [r, i, n, o] : [r + o, r + i, n + i, n + o]).map(function (r) {
                    return e < 2 ? t + r : 'border' + r + t;
                });
            bi[e > 1 ? 'border' + t : t] = function (t, e, r, i, n) {
                var o, a;
                if (arguments.length < 4)
                    return (
                        (o = s.map(function (e) {
                            return _i(t, e, r);
                        })),
                        5 === (a = o.join(' ')).split(o[0]).length ? o[0] : a
                    );
                (o = (i + '').split(' ')),
                    (a = {}),
                    s.forEach(function (t, e) {
                        return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
                    }),
                    t.init(e, a, n);
            };
        });
        var Ii,
            Xi,
            Ni = {
                name: 'css',
                register: ai,
                targetTest: function (t) {
                    return t.style && t.nodeType;
                },
                init: function (t, e, r, i, n) {
                    var o,
                        s,
                        a,
                        l,
                        u,
                        c,
                        h,
                        f,
                        d,
                        p,
                        m,
                        g,
                        _,
                        v,
                        w,
                        b,
                        x,
                        T,
                        M,
                        A,
                        E = this._props,
                        S = t.style,
                        k = r.vars.startAt;
                    for (h in (Er || ai(), (this.styles = this.styles || ri(t)), (b = this.styles.props), (this.tween = r), e))
                        if ('autoRound' !== h && ((s = e[h]), !ot[h] || !He(h, e, r, i, t, n)))
                            if (((u = typeof s), (c = bi[h]), 'function' === u && (u = typeof (s = s.call(r, i, t, n))), 'string' === u && ~s.indexOf('random(') && (s = le(s)), c)) c(this, t, h, s, r) && (w = 1);
                            else if ('--' === h.substr(0, 2)) (o = (getComputedStyle(t).getPropertyValue(h) + '').trim()), (s += ''), (be.lastIndex = 0), be.test(o) || ((f = Zt(o)), (d = Zt(s))), d ? f !== d && (o = gi(t, h, o, d) + d) : f && (s += f), this.add(S, 'setProperty', o, s, i, n, 0, 0, h), E.push(h), b.push(h, 0, S[h]);
                            else if ('undefined' !== u) {
                                if (
                                    (k && h in k ? ((o = 'function' == typeof k[h] ? k[h].call(r, i, t, n) : k[h]), C(o) && ~o.indexOf('random(') && (o = le(o)), Zt(o + '') || (o += y.units[h] || Zt(_i(t, h)) || ''), '=' === (o + '').charAt(1) && (o = _i(t, h))) : (o = _i(t, h)),
                                    (l = parseFloat(o)),
                                    (p = 'string' === u && '=' === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)),
                                    (a = parseFloat(s)),
                                    h in Fr && ('autoAlpha' === h && (1 === l && 'hidden' === _i(t, 'visibility') && a && (l = 0), b.push('visibility', 0, S.visibility), di(this, S, 'visibility', l ? 'inherit' : 'hidden', a ? 'inherit' : 'hidden', !a)), 'scale' !== h && 'transform' !== h && ~(h = Fr[h]).indexOf(',') && (h = h.split(',')[0])),
                                    (m = h in Pr))
                                )
                                    if ((this.styles.save(h), g || (((_ = t._gsap).renderTransform && !e.parseTransform) || ki(t, e.parseTransform), (v = !1 !== e.smoothOrigin && _.smooth), ((g = this._pt = new cr(this._pt, S, Zr, 0, 1, _.renderTransform, _, 0, -1)).dep = 1)), 'scale' === h))
                                        (this._pt = new cr(this._pt, _, 'scaleY', _.scaleY, (p ? gt(_.scaleY, p + a) : a) - _.scaleY || 0, Yr)), (this._pt.u = 0), E.push('scaleY', h), (h += 'X');
                                    else {
                                        if ('transformOrigin' === h) {
                                            b.push(Kr, 0, S[Kr]),
                                                (T = void 0),
                                                (M = void 0),
                                                (A = void 0),
                                                (M = (T = (x = s).split(' '))[0]),
                                                (A = T[1] || '50%'),
                                                ('top' !== M && 'bottom' !== M && 'left' !== A && 'right' !== A) || ((x = M), (M = A), (A = x)),
                                                (T[0] = yi[M] || M),
                                                (T[1] = yi[A] || A),
                                                (s = T.join(' ')),
                                                _.svg ? Si(t, s, 0, v, 0, this) : ((d = parseFloat(s.split(' ')[2]) || 0) !== _.zOrigin && di(this, _, 'zOrigin', _.zOrigin, d), di(this, S, h, Ci(o), Ci(s)));
                                            continue;
                                        }
                                        if ('svgOrigin' === h) {
                                            Si(t, s, 1, v, 0, this);
                                            continue;
                                        }
                                        if (h in Ti) {
                                            Bi(this, _, h, l, p ? gt(l, p + s) : s);
                                            continue;
                                        }
                                        if ('smoothOrigin' === h) {
                                            di(this, _, 'smooth', _.smooth, s);
                                            continue;
                                        }
                                        if ('force3D' === h) {
                                            _[h] = s;
                                            continue;
                                        }
                                        if ('transform' === h) {
                                            Yi(this, s, t);
                                            continue;
                                        }
                                    }
                                else h in S || (h = si(h) || h);
                                if (m || ((a || 0 === a) && (l || 0 === l) && !Br.test(s) && h in S))
                                    a || (a = 0), (f = (o + '').substr((l + '').length)) !== (d = Zt(s) || (h in y.units ? y.units[h] : f)) && (l = gi(t, h, o, d)), (this._pt = new cr(this._pt, m ? _ : S, h, l, (p ? gt(l, p + a) : a) - l, m || ('px' !== d && 'zIndex' !== h) || !1 === e.autoRound ? Yr : Nr)), (this._pt.u = d || 0), f !== d && '%' !== d && ((this._pt.b = o), (this._pt.r = Xr));
                                else if (h in S) vi.call(this, t, h, o, p ? p + s : s);
                                else if (h in t) this.add(t, h, o || t[h], p ? p + s : s, i, n);
                                else if ('parseTransform' !== h) {
                                    $(h, s);
                                    continue;
                                }
                                m || (h in S ? b.push(h, 0, S[h]) : b.push(h, 1, o || t[h])), E.push(h);
                            }
                    w && ur(this);
                },
                render: function (t, e) {
                    if (e.tween._time || !Cr()) for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
                    else e.styles.revert();
                },
                get: _i,
                aliases: Fr,
                getSetter: function (t, e, r) {
                    var i = Fr[e];
                    return i && i.indexOf(',') < 0 && (e = i), e in Pr && e !== Kr && (t._gsap.x || _i(t, 'x')) ? (r && kr === r ? ('scale' === e ? Gr : jr) : (kr = r || {}) && ('scale' === e ? $r : Qr)) : t.style && !q(t.style[e]) ? Vr : ~e.indexOf('-') ? Ur : er(t, e);
                },
                core: { _removeProperty: fi, _getMatrix: Ei },
            };
        (xr.utils.checkPrefix = si),
            (xr.core.getStyleSaver = ri),
            (Xi = dt('x,y,z,scale,scaleX,scaleY,xPercent,yPercent' + ',' + (Ii = 'rotation,rotationX,rotationY,skewX,skewY') + ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective', function (t) {
                Pr[t] = 1;
            })),
            dt(Ii, function (t) {
                (y.units[t] = 'deg'), (Ti[t] = 1);
            }),
            (Fr[Xi[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + Ii),
            dt('0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY', function (t) {
                var e = t.split(':');
                Fr[e[1]] = Xi[e[0]];
            }),
            dt('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective', function (t) {
                y.units[t] = 'px';
            }),
            xr.registerPlugin(Ni);
        var Wi = xr.registerPlugin(Ni) || xr;
        function Hi(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        Wi.core.Tween;
        var Vi,
            Ui,
            ji,
            Gi,
            $i,
            Qi,
            Zi,
            Ki,
            Ji,
            tn,
            en,
            rn,
            nn,
            on = function () {
                return Vi || ('undefined' != typeof window && (Vi = window.gsap) && Vi.registerPlugin && Vi);
            },
            sn = 1,
            an = [],
            ln = [],
            un = [],
            cn = Date.now,
            hn = function (t, e) {
                return e;
            },
            fn = function (t, e) {
                return ~un.indexOf(t) && un[un.indexOf(t) + 1][e];
            },
            dn = function (t) {
                return !!~tn.indexOf(t);
            },
            pn = function (t, e, r, i, n) {
                return t.addEventListener(e, r, { passive: !i, capture: !!n });
            },
            mn = function (t, e, r, i) {
                return t.removeEventListener(e, r, !!i);
            },
            gn = 'scrollLeft',
            _n = 'scrollTop',
            vn = function () {
                return (en && en.isPressed) || ln.cache++;
            },
            yn = function (t, e) {
                var r = function r(i) {
                    if (i || 0 === i) {
                        sn && (ji.history.scrollRestoration = 'manual');
                        var n = en && en.isPressed;
                        (i = r.v = Math.round(i) || (en && en.iOS ? 1 : 0)), t(i), (r.cacheID = ln.cache), n && hn('ss', i);
                    } else (e || ln.cache !== r.cacheID || hn('ref')) && ((r.cacheID = ln.cache), (r.v = t()));
                    return r.v + r.offset;
                };
                return (r.offset = 0), t && r;
            },
            wn = {
                s: gn,
                p: 'left',
                p2: 'Left',
                os: 'right',
                os2: 'Right',
                d: 'width',
                d2: 'Width',
                a: 'x',
                sc: yn(function (t) {
                    return arguments.length ? ji.scrollTo(t, bn.sc()) : ji.pageXOffset || Gi[gn] || $i[gn] || Qi[gn] || 0;
                }),
            },
            bn = {
                s: _n,
                p: 'top',
                p2: 'Top',
                os: 'bottom',
                os2: 'Bottom',
                d: 'height',
                d2: 'Height',
                a: 'y',
                op: wn,
                sc: yn(function (t) {
                    return arguments.length ? ji.scrollTo(wn.sc(), t) : ji.pageYOffset || Gi[_n] || $i[_n] || Qi[_n] || 0;
                }),
            },
            xn = function (t) {
                return Vi.utils.toArray(t)[0] || ('string' == typeof t && !1 !== Vi.config().nullTargetWarn ? console.warn('Element not found:', t) : null);
            },
            Tn = function (t, e) {
                var r = e.s,
                    i = e.sc;
                dn(t) && (t = Gi.scrollingElement || $i);
                var n = ln.indexOf(t),
                    o = i === bn.sc ? 1 : 2;
                !~n && (n = ln.push(t) - 1), ln[n + o] || t.addEventListener('scroll', vn);
                var s = ln[n + o],
                    a =
                        s ||
                        (ln[n + o] =
                            yn(fn(t, r), !0) ||
                            (dn(t)
                                ? i
                                : yn(function (e) {
                                      return arguments.length ? (t[r] = e) : t[r];
                                  })));
                return (a.target = t), s || (a.smooth = 'smooth' === Vi.getProperty(t, 'scrollBehavior')), a;
            },
            Mn = function (t, e, r) {
                var i = t,
                    n = t,
                    o = cn(),
                    s = o,
                    a = e || 50,
                    l = Math.max(500, 3 * a),
                    u = function (t, e) {
                        var l = cn();
                        e || l - o > a ? ((n = i), (i = t), (s = o), (o = l)) : r ? (i += t) : (i = n + ((t - n) / (l - s)) * (o - s));
                    };
                return {
                    update: u,
                    reset: function () {
                        (n = i = r ? 0 : i), (s = o = 0);
                    },
                    getVelocity: function (t) {
                        var e = s,
                            a = n,
                            c = cn();
                        return (t || 0 === t) && t !== i && u(t), o === s || c - s > l ? 0 : ((i + (r ? a : -a)) / ((r ? c : o) - e)) * 1e3;
                    },
                };
            },
            An = function (t, e) {
                return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
            },
            En = function (t) {
                var e = Math.max.apply(Math, t),
                    r = Math.min.apply(Math, t);
                return Math.abs(e) >= Math.abs(r) ? e : r;
            },
            Sn = function () {
                var t, e, r, i;
                (Ji = Vi.core.globals().ScrollTrigger) &&
                    Ji.core &&
                    ((t = Ji.core),
                    (e = t.bridge || {}),
                    (r = t._scrollers),
                    (i = t._proxies),
                    r.push.apply(r, ln),
                    i.push.apply(i, un),
                    (ln = r),
                    (un = i),
                    (hn = function (t, r) {
                        return e[t](r);
                    }));
            },
            kn = function (t) {
                return (
                    (Vi = t || on()) &&
                        'undefined' != typeof document &&
                        document.body &&
                        ((ji = window),
                        (Gi = document),
                        ($i = Gi.documentElement),
                        (Qi = Gi.body),
                        (tn = [ji, Gi, $i, Qi]),
                        Vi.utils.clamp,
                        (nn = Vi.core.context || function () {}),
                        (Ki = 'onpointerenter' in Qi ? 'pointer' : 'mouse'),
                        (Zi = Cn.isTouch = ji.matchMedia && ji.matchMedia('(hover: none), (pointer: coarse)').matches ? 1 : 'ontouchstart' in ji || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0),
                        (rn = Cn.eventTypes = ('ontouchstart' in $i ? 'touchstart,touchmove,touchcancel,touchend' : 'onpointerdown' in $i ? 'pointerdown,pointermove,pointercancel,pointerup' : 'mousedown,mousemove,mouseup,mouseup').split(',')),
                        setTimeout(function () {
                            return (sn = 0);
                        }, 500),
                        Sn(),
                        (Ui = 1)),
                    Ui
                );
            };
        (wn.op = bn), (ln.cache = 0);
        var Cn = (function () {
            function t(t) {
                this.init(t);
            }
            var e, r;
            return (
                (t.prototype.init = function (t) {
                    Ui || kn(Vi) || console.warn('Please gsap.registerPlugin(Observer)'), Ji || Sn();
                    var e = t.tolerance,
                        r = t.dragMinimum,
                        i = t.type,
                        n = t.target,
                        o = t.lineHeight,
                        s = t.debounce,
                        a = t.preventDefault,
                        l = t.onStop,
                        u = t.onStopDelay,
                        c = t.ignore,
                        h = t.wheelSpeed,
                        f = t.event,
                        d = t.onDragStart,
                        p = t.onDragEnd,
                        m = t.onDrag,
                        g = t.onPress,
                        _ = t.onRelease,
                        v = t.onRight,
                        y = t.onLeft,
                        w = t.onUp,
                        b = t.onDown,
                        x = t.onChangeX,
                        T = t.onChangeY,
                        M = t.onChange,
                        A = t.onToggleX,
                        E = t.onToggleY,
                        S = t.onHover,
                        k = t.onHoverEnd,
                        C = t.onMove,
                        O = t.ignoreCheck,
                        P = t.isNormalizer,
                        q = t.onGestureStart,
                        z = t.onGestureEnd,
                        D = t.onWheel,
                        R = t.onEnable,
                        L = t.onDisable,
                        B = t.onClick,
                        F = t.scrollSpeed,
                        Y = t.capture,
                        I = t.allowClicks,
                        X = t.lockAxis,
                        N = t.onLockAxis;
                    (this.target = n = xn(n) || $i), (this.vars = t), c && (c = Vi.utils.toArray(c)), (e = e || 1e-9), (r = r || 0), (h = h || 1), (F = F || 1), (i = i || 'wheel,touch,pointer'), (s = !1 !== s), o || (o = parseFloat(ji.getComputedStyle(Qi).lineHeight) || 22);
                    var W,
                        H,
                        V,
                        U,
                        j,
                        G,
                        $,
                        Q = this,
                        Z = 0,
                        K = 0,
                        J = Tn(n, wn),
                        tt = Tn(n, bn),
                        et = J(),
                        rt = tt(),
                        it = ~i.indexOf('touch') && !~i.indexOf('pointer') && 'pointerdown' === rn[0],
                        nt = dn(n),
                        ot = n.ownerDocument || Gi,
                        st = [0, 0, 0],
                        at = [0, 0, 0],
                        lt = 0,
                        ut = function () {
                            return (lt = cn());
                        },
                        ct = function (t, e) {
                            return ((Q.event = t) && c && ~c.indexOf(t.target)) || (e && it && 'touch' !== t.pointerType) || (O && O(t, e));
                        },
                        ht = function () {
                            var t = (Q.deltaX = En(st)),
                                r = (Q.deltaY = En(at)),
                                i = Math.abs(t) >= e,
                                n = Math.abs(r) >= e;
                            M && (i || n) && M(Q, t, r, st, at),
                                i && (v && Q.deltaX > 0 && v(Q), y && Q.deltaX < 0 && y(Q), x && x(Q), A && Q.deltaX < 0 != Z < 0 && A(Q), (Z = Q.deltaX), (st[0] = st[1] = st[2] = 0)),
                                n && (b && Q.deltaY > 0 && b(Q), w && Q.deltaY < 0 && w(Q), T && T(Q), E && Q.deltaY < 0 != K < 0 && E(Q), (K = Q.deltaY), (at[0] = at[1] = at[2] = 0)),
                                (U || V) && (C && C(Q), V && (m(Q), (V = !1)), (U = !1)),
                                G && !(G = !1) && N && N(Q),
                                j && (D(Q), (j = !1)),
                                (W = 0);
                        },
                        ft = function (t, e, r) {
                            (st[r] += t), (at[r] += e), Q._vx.update(t), Q._vy.update(e), s ? W || (W = requestAnimationFrame(ht)) : ht();
                        },
                        dt = function (t, e) {
                            X && !$ && ((Q.axis = $ = Math.abs(t) > Math.abs(e) ? 'x' : 'y'), (G = !0)), 'y' !== $ && ((st[2] += t), Q._vx.update(t, !0)), 'x' !== $ && ((at[2] += e), Q._vy.update(e, !0)), s ? W || (W = requestAnimationFrame(ht)) : ht();
                        },
                        pt = function (t) {
                            if (!ct(t, 1)) {
                                var e = (t = An(t, a)).clientX,
                                    i = t.clientY,
                                    n = e - Q.x,
                                    o = i - Q.y,
                                    s = Q.isDragging;
                                (Q.x = e), (Q.y = i), (s || Math.abs(Q.startX - e) >= r || Math.abs(Q.startY - i) >= r) && (m && (V = !0), s || (Q.isDragging = !0), dt(n, o), s || (d && d(Q)));
                            }
                        },
                        mt = (Q.onPress = function (t) {
                            ct(t, 1) || (t && t.button) || ((Q.axis = $ = null), H.pause(), (Q.isPressed = !0), (t = An(t)), (Z = K = 0), (Q.startX = Q.x = t.clientX), (Q.startY = Q.y = t.clientY), Q._vx.reset(), Q._vy.reset(), pn(P ? n : ot, rn[1], pt, a, !0), (Q.deltaX = Q.deltaY = 0), g && g(Q));
                        }),
                        gt = (Q.onRelease = function (t) {
                            if (!ct(t, 1)) {
                                mn(P ? n : ot, rn[1], pt, !0);
                                var e = !isNaN(Q.y - Q.startY),
                                    r = Q.isDragging && (Math.abs(Q.x - Q.startX) > 3 || Math.abs(Q.y - Q.startY) > 3),
                                    i = An(t);
                                !r &&
                                    e &&
                                    (Q._vx.reset(),
                                    Q._vy.reset(),
                                    a &&
                                        I &&
                                        Vi.delayedCall(0.08, function () {
                                            if (cn() - lt > 300 && !t.defaultPrevented)
                                                if (t.target.click) t.target.click();
                                                else if (ot.createEvent) {
                                                    var e = ot.createEvent('MouseEvents');
                                                    e.initMouseEvent('click', !0, !0, ji, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e);
                                                }
                                        })),
                                    (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
                                    l && !P && H.restart(!0),
                                    p && r && p(Q),
                                    _ && _(Q, r);
                            }
                        }),
                        _t = function (t) {
                            return t.touches && t.touches.length > 1 && (Q.isGesturing = !0) && q(t, Q.isDragging);
                        },
                        vt = function () {
                            return (Q.isGesturing = !1) || z(Q);
                        },
                        yt = function (t) {
                            if (!ct(t)) {
                                var e = J(),
                                    r = tt();
                                ft((e - et) * F, (r - rt) * F, 1), (et = e), (rt = r), l && H.restart(!0);
                            }
                        },
                        wt = function (t) {
                            if (!ct(t)) {
                                (t = An(t, a)), D && (j = !0);
                                var e = (1 === t.deltaMode ? o : 2 === t.deltaMode ? ji.innerHeight : 1) * h;
                                ft(t.deltaX * e, t.deltaY * e, 0), l && !P && H.restart(!0);
                            }
                        },
                        bt = function (t) {
                            if (!ct(t)) {
                                var e = t.clientX,
                                    r = t.clientY,
                                    i = e - Q.x,
                                    n = r - Q.y;
                                (Q.x = e), (Q.y = r), (U = !0), (i || n) && dt(i, n);
                            }
                        },
                        xt = function (t) {
                            (Q.event = t), S(Q);
                        },
                        Tt = function (t) {
                            (Q.event = t), k(Q);
                        },
                        Mt = function (t) {
                            return ct(t) || (An(t, a) && B(Q));
                        };
                    (H = Q._dc =
                        Vi.delayedCall(u || 0.25, function () {
                            Q._vx.reset(), Q._vy.reset(), H.pause(), l && l(Q);
                        }).pause()),
                        (Q.deltaX = Q.deltaY = 0),
                        (Q._vx = Mn(0, 50, !0)),
                        (Q._vy = Mn(0, 50, !0)),
                        (Q.scrollX = J),
                        (Q.scrollY = tt),
                        (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
                        nn(this),
                        (Q.enable = function (t) {
                            return (
                                Q.isEnabled ||
                                    (pn(nt ? ot : n, 'scroll', vn),
                                    i.indexOf('scroll') >= 0 && pn(nt ? ot : n, 'scroll', yt, a, Y),
                                    i.indexOf('wheel') >= 0 && pn(n, 'wheel', wt, a, Y),
                                    ((i.indexOf('touch') >= 0 && Zi) || i.indexOf('pointer') >= 0) && (pn(n, rn[0], mt, a, Y), pn(ot, rn[2], gt), pn(ot, rn[3], gt), I && pn(n, 'click', ut, !1, !0), B && pn(n, 'click', Mt), q && pn(ot, 'gesturestart', _t), z && pn(ot, 'gestureend', vt), S && pn(n, Ki + 'enter', xt), k && pn(n, Ki + 'leave', Tt), C && pn(n, Ki + 'move', bt)),
                                    (Q.isEnabled = !0),
                                    t && t.type && mt(t),
                                    R && R(Q)),
                                Q
                            );
                        }),
                        (Q.disable = function () {
                            Q.isEnabled &&
                                (an.filter(function (t) {
                                    return t !== Q && dn(t.target);
                                }).length || mn(nt ? ot : n, 'scroll', vn),
                                Q.isPressed && (Q._vx.reset(), Q._vy.reset(), mn(P ? n : ot, rn[1], pt, !0)),
                                mn(nt ? ot : n, 'scroll', yt, Y),
                                mn(n, 'wheel', wt, Y),
                                mn(n, rn[0], mt, Y),
                                mn(ot, rn[2], gt),
                                mn(ot, rn[3], gt),
                                mn(n, 'click', ut, !0),
                                mn(n, 'click', Mt),
                                mn(ot, 'gesturestart', _t),
                                mn(ot, 'gestureend', vt),
                                mn(n, Ki + 'enter', xt),
                                mn(n, Ki + 'leave', Tt),
                                mn(n, Ki + 'move', bt),
                                (Q.isEnabled = Q.isPressed = Q.isDragging = !1),
                                L && L(Q));
                        }),
                        (Q.kill = Q.revert =
                            function () {
                                Q.disable();
                                var t = an.indexOf(Q);
                                t >= 0 && an.splice(t, 1), en === Q && (en = 0);
                            }),
                        an.push(Q),
                        P && dn(n) && (en = Q),
                        Q.enable(f);
                }),
                (e = t),
                (r = [
                    {
                        key: 'velocityX',
                        get: function () {
                            return this._vx.getVelocity();
                        },
                    },
                    {
                        key: 'velocityY',
                        get: function () {
                            return this._vy.getVelocity();
                        },
                    },
                ]) && Hi(e.prototype, r),
                t
            );
        })();
        (Cn.version = '3.11.5'),
            (Cn.create = function (t) {
                return new Cn(t);
            }),
            (Cn.register = kn),
            (Cn.getAll = function () {
                return an.slice();
            }),
            (Cn.getById = function (t) {
                return an.filter(function (e) {
                    return e.vars.id === t;
                })[0];
            }),
            on() && Vi.registerPlugin(Cn);
        var On,
            Pn,
            qn,
            zn,
            Dn,
            Rn,
            Ln,
            Bn,
            Fn,
            Yn,
            In,
            Xn,
            Nn,
            Wn,
            Hn,
            Vn,
            Un,
            jn,
            Gn,
            $n,
            Qn,
            Zn,
            Kn,
            Jn,
            to,
            eo,
            ro,
            io,
            no,
            oo,
            so,
            ao,
            lo,
            uo,
            co = 1,
            ho = Date.now,
            fo = ho(),
            po = 0,
            mo = 0,
            go = function t() {
                return mo && requestAnimationFrame(t);
            },
            _o = function () {
                return (Wn = 1);
            },
            vo = function () {
                return (Wn = 0);
            },
            yo = function (t) {
                return t;
            },
            wo = function (t) {
                return Math.round(1e5 * t) / 1e5 || 0;
            },
            bo = function () {
                return 'undefined' != typeof window;
            },
            xo = function () {
                return On || (bo() && (On = window.gsap) && On.registerPlugin && On);
            },
            To = function (t) {
                return !!~Ln.indexOf(t);
            },
            Mo = function (t) {
                return (
                    fn(t, 'getBoundingClientRect') ||
                    (To(t)
                        ? function () {
                              return (Rs.width = qn.innerWidth), (Rs.height = qn.innerHeight), Rs;
                          }
                        : function () {
                              return Qo(t);
                          })
                );
            },
            Ao = function (t, e) {
                var r = e.s,
                    i = e.d2,
                    n = e.d,
                    o = e.a;
                return Math.max(0, (r = 'scroll' + i) && (o = fn(t, r)) ? o() - Mo(t)()[n] : To(t) ? (Dn[r] || Rn[r]) - (qn['inner' + i] || Dn['client' + i] || Rn['client' + i]) : t[r] - t['offset' + i]);
            },
            Eo = function (t, e) {
                for (var r = 0; r < Gn.length; r += 3) (!e || ~e.indexOf(Gn[r + 1])) && t(Gn[r], Gn[r + 1], Gn[r + 2]);
            },
            So = function (t) {
                return 'string' == typeof t;
            },
            ko = function (t) {
                return 'function' == typeof t;
            },
            Co = function (t) {
                return 'number' == typeof t;
            },
            Oo = function (t) {
                return 'object' == typeof t;
            },
            Po = function (t, e, r) {
                return t && t.progress(e ? 0 : 1) && r && t.pause();
            },
            qo = function (t, e) {
                if (t.enabled) {
                    var r = e(t);
                    r && r.totalTime && (t.callbackAnimation = r);
                }
            },
            zo = Math.abs,
            Do = 'left',
            Ro = 'right',
            Lo = 'bottom',
            Bo = 'width',
            Fo = 'height',
            Yo = 'Right',
            Io = 'Left',
            Xo = 'Top',
            No = 'Bottom',
            Wo = 'padding',
            Ho = 'margin',
            Vo = 'Width',
            Uo = 'Height',
            jo = 'px',
            Go = function (t) {
                return qn.getComputedStyle(t);
            },
            $o = function (t, e) {
                for (var r in e) r in t || (t[r] = e[r]);
                return t;
            },
            Qo = function (t, e) {
                var r = e && 'matrix(1, 0, 0, 1, 0, 0)' !== Go(t)[Hn] && On.to(t, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
                    i = t.getBoundingClientRect();
                return r && r.progress(0).kill(), i;
            },
            Zo = function (t, e) {
                var r = e.d2;
                return t['offset' + r] || t['client' + r] || 0;
            },
            Ko = function (t) {
                var e,
                    r = [],
                    i = t.labels,
                    n = t.duration();
                for (e in i) r.push(i[e] / n);
                return r;
            },
            Jo = function (t) {
                var e = On.utils.snap(t),
                    r =
                        Array.isArray(t) &&
                        t.slice(0).sort(function (t, e) {
                            return t - e;
                        });
                return r
                    ? function (t, i, n) {
                          var o;
                          if ((void 0 === n && (n = 0.001), !i)) return e(t);
                          if (i > 0) {
                              for (t -= n, o = 0; o < r.length; o++) if (r[o] >= t) return r[o];
                              return r[o - 1];
                          }
                          for (o = r.length, t += n; o--; ) if (r[o] <= t) return r[o];
                          return r[0];
                      }
                    : function (r, i, n) {
                          void 0 === n && (n = 0.001);
                          var o = e(r);
                          return !i || Math.abs(o - r) < n || o - r < 0 == i < 0 ? o : e(i < 0 ? r - t : r + t);
                      };
            },
            ts = function (t, e, r, i) {
                return r.split(',').forEach(function (r) {
                    return t(e, r, i);
                });
            },
            es = function (t, e, r, i, n) {
                return t.addEventListener(e, r, { passive: !i, capture: !!n });
            },
            rs = function (t, e, r, i) {
                return t.removeEventListener(e, r, !!i);
            },
            is = function (t, e, r) {
                (r = r && r.wheelHandler) && (t(e, 'wheel', r), t(e, 'touchmove', r));
            },
            ns = { startColor: 'green', endColor: 'red', indent: 0, fontSize: '16px', fontWeight: 'normal' },
            os = { toggleActions: 'play', anticipatePin: 0 },
            ss = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
            as = function (t, e) {
                if (So(t)) {
                    var r = t.indexOf('='),
                        i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
                    ~r && (t.indexOf('%') > r && (i *= e / 100), (t = t.substr(0, r - 1))), (t = i + (t in ss ? ss[t] * e : ~t.indexOf('%') ? (parseFloat(t) * e) / 100 : parseFloat(t) || 0));
                }
                return t;
            },
            ls = function (t, e, r, i, n, o, s, a) {
                var l = n.startColor,
                    u = n.endColor,
                    c = n.fontSize,
                    h = n.indent,
                    f = n.fontWeight,
                    d = zn.createElement('div'),
                    p = To(r) || 'fixed' === fn(r, 'pinType'),
                    m = -1 !== t.indexOf('scroller'),
                    g = p ? Rn : r,
                    _ = -1 !== t.indexOf('start'),
                    v = _ ? l : u,
                    y = 'border-color:' + v + ';font-size:' + c + ';color:' + v + ';font-weight:' + f + ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
                return (
                    (y += 'position:' + ((m || a) && p ? 'fixed;' : 'absolute;')),
                    (m || a || !p) && (y += (i === bn ? Ro : Lo) + ':' + (o + parseFloat(h)) + 'px;'),
                    s && (y += 'box-sizing:border-box;text-align:left;width:' + s.offsetWidth + 'px;'),
                    (d._isStart = _),
                    d.setAttribute('class', 'gsap-marker-' + t + (e ? ' marker-' + e : '')),
                    (d.style.cssText = y),
                    (d.innerText = e || 0 === e ? t + '-' + e : t),
                    g.children[0] ? g.insertBefore(d, g.children[0]) : g.appendChild(d),
                    (d._offset = d['offset' + i.op.d2]),
                    us(d, 0, i, _),
                    d
                );
            },
            us = function (t, e, r, i) {
                var n = { display: 'block' },
                    o = r[i ? 'os2' : 'p2'],
                    s = r[i ? 'p2' : 'os2'];
                (t._isFlipped = i), (n[r.a + 'Percent'] = i ? -100 : 0), (n[r.a] = i ? '1px' : 0), (n['border' + o + Vo] = 1), (n['border' + s + Vo] = 0), (n[r.p] = e + 'px'), On.set(t, n);
            },
            cs = [],
            hs = {},
            fs = function () {
                return ho() - po > 34 && (so || (so = requestAnimationFrame(ks)));
            },
            ds = function () {
                (!Kn || !Kn.isPressed || Kn.startX > Rn.clientWidth) && (ln.cache++, Kn ? so || (so = requestAnimationFrame(ks)) : ks(), po || ys('scrollStart'), (po = ho()));
            },
            ps = function () {
                (eo = qn.innerWidth), (to = qn.innerHeight);
            },
            ms = function () {
                ln.cache++, !Nn && !Zn && !zn.fullscreenElement && !zn.webkitFullscreenElement && (!Jn || eo !== qn.innerWidth || Math.abs(qn.innerHeight - to) > 0.25 * qn.innerHeight) && Bn.restart(!0);
            },
            gs = {},
            _s = [],
            vs = function t() {
                return rs(Xs, 'scrollEnd', t) || As(!0);
            },
            ys = function (t) {
                return (
                    (gs[t] &&
                        gs[t].map(function (t) {
                            return t();
                        })) ||
                    _s
                );
            },
            ws = [],
            bs = function (t) {
                for (var e = 0; e < ws.length; e += 5) (!t || (ws[e + 4] && ws[e + 4].query === t)) && ((ws[e].style.cssText = ws[e + 1]), ws[e].getBBox && ws[e].setAttribute('transform', ws[e + 2] || ''), (ws[e + 3].uncache = 1));
            },
            xs = function (t, e) {
                var r;
                for (Vn = 0; Vn < cs.length; Vn++) !(r = cs[Vn]) || (e && r._ctx !== e) || (t ? r.kill(1) : r.revert(!0, !0));
                e && bs(e), e || ys('revert');
            },
            Ts = function (t, e) {
                ln.cache++,
                    (e || !ao) &&
                        ln.forEach(function (t) {
                            return ko(t) && t.cacheID++ && (t.rec = 0);
                        }),
                    So(t) && (qn.history.scrollRestoration = no = t);
            },
            Ms = 0,
            As = function (t, e) {
                if (!po || t) {
                    (ao = Xs.isRefreshing = !0),
                        ln.forEach(function (t) {
                            return ko(t) && t.cacheID++ && (t.rec = t());
                        });
                    var r = ys('refreshInit');
                    $n && Xs.sort(),
                        e || xs(),
                        ln.forEach(function (t) {
                            ko(t) && (t.smooth && (t.target.style.scrollBehavior = 'auto'), t(0));
                        }),
                        cs.slice(0).forEach(function (t) {
                            return t.refresh();
                        }),
                        cs.forEach(function (t, e) {
                            if (t._subPinOffset && t.pin) {
                                var r = t.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
                                    i = t.pin[r];
                                t.revert(!0, 1), t.adjustPinSpacing(t.pin[r] - i), t.refresh();
                            }
                        }),
                        cs.forEach(function (t) {
                            return 'max' === t.vars.end && t.setPositions(t.start, Math.max(t.start + 1, Ao(t.scroller, t._dir)));
                        }),
                        r.forEach(function (t) {
                            return t && t.render && t.render(-1);
                        }),
                        ln.forEach(function (t) {
                            ko(t) &&
                                (t.smooth &&
                                    requestAnimationFrame(function () {
                                        return (t.target.style.scrollBehavior = 'smooth');
                                    }),
                                t.rec && t(t.rec));
                        }),
                        Ts(no, 1),
                        Bn.pause(),
                        Ms++,
                        (ao = 2),
                        ks(2),
                        cs.forEach(function (t) {
                            return ko(t.vars.onRefresh) && t.vars.onRefresh(t);
                        }),
                        (ao = Xs.isRefreshing = !1),
                        ys('refresh');
                } else es(Xs, 'scrollEnd', vs);
            },
            Es = 0,
            Ss = 1,
            ks = function (t) {
                if (!ao || 2 === t) {
                    (Xs.isUpdating = !0), uo && uo.update(0);
                    var e = cs.length,
                        r = ho(),
                        i = r - fo >= 50,
                        n = e && cs[0].scroll();
                    if (((Ss = Es > n ? -1 : 1), ao || (Es = n), i && (po && !Wn && r - po > 200 && ((po = 0), ys('scrollEnd')), (In = fo), (fo = r)), Ss < 0)) {
                        for (Vn = e; Vn-- > 0; ) cs[Vn] && cs[Vn].update(0, i);
                        Ss = 1;
                    } else for (Vn = 0; Vn < e; Vn++) cs[Vn] && cs[Vn].update(0, i);
                    Xs.isUpdating = !1;
                }
                so = 0;
            },
            Cs = [Do, 'top', Lo, Ro, Ho + No, Ho + Yo, Ho + Xo, Ho + Io, 'display', 'flexShrink', 'float', 'zIndex', 'gridColumnStart', 'gridColumnEnd', 'gridRowStart', 'gridRowEnd', 'gridArea', 'justifySelf', 'alignSelf', 'placeSelf', 'order'],
            Os = Cs.concat([Bo, Fo, 'boxSizing', 'max' + Vo, 'max' + Uo, 'position', Ho, Wo, Wo + Xo, Wo + Yo, Wo + No, Wo + Io]),
            Ps = function (t, e, r, i) {
                if (!t._gsap.swappedIn) {
                    for (var n, o = Cs.length, s = e.style, a = t.style; o--; ) s[(n = Cs[o])] = r[n];
                    (s.position = 'absolute' === r.position ? 'absolute' : 'relative'),
                        'inline' === r.display && (s.display = 'inline-block'),
                        (a[Lo] = a[Ro] = 'auto'),
                        (s.flexBasis = r.flexBasis || 'auto'),
                        (s.overflow = 'visible'),
                        (s.boxSizing = 'border-box'),
                        (s[Bo] = Zo(t, wn) + jo),
                        (s[Fo] = Zo(t, bn) + jo),
                        (s[Wo] = a[Ho] = a.top = a[Do] = '0'),
                        zs(i),
                        (a[Bo] = a['max' + Vo] = r[Bo]),
                        (a[Fo] = a['max' + Uo] = r[Fo]),
                        (a[Wo] = r[Wo]),
                        t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)),
                        (t._gsap.swappedIn = !0);
                }
            },
            qs = /([A-Z])/g,
            zs = function (t) {
                if (t) {
                    var e,
                        r,
                        i = t.t.style,
                        n = t.length,
                        o = 0;
                    for ((t.t._gsap || On.core.getCache(t.t)).uncache = 1; o < n; o += 2) (r = t[o + 1]), (e = t[o]), r ? (i[e] = r) : i[e] && i.removeProperty(e.replace(qs, '-$1').toLowerCase());
                }
            },
            Ds = function (t) {
                for (var e = Os.length, r = t.style, i = [], n = 0; n < e; n++) i.push(Os[n], r[Os[n]]);
                return (i.t = t), i;
            },
            Rs = { left: 0, top: 0 },
            Ls = function (t, e, r, i, n, o, s, a, l, u, c, h, f) {
                ko(t) && (t = t(a)), So(t) && 'max' === t.substr(0, 3) && (t = h + ('=' === t.charAt(4) ? as('0' + t.substr(3), r) : 0));
                var d,
                    p,
                    m,
                    g = f ? f.time() : 0;
                if ((f && f.seek(0), Co(t))) f && (t = On.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, t)), s && us(s, r, i, !0);
                else {
                    ko(e) && (e = e(a));
                    var _,
                        v,
                        y,
                        w,
                        b = (t || '0').split(' ');
                    (m = xn(e) || Rn), ((_ = Qo(m) || {}) && (_.left || _.top)) || 'none' !== Go(m).display || ((w = m.style.display), (m.style.display = 'block'), (_ = Qo(m)), w ? (m.style.display = w) : m.style.removeProperty('display')), (v = as(b[0], _[i.d])), (y = as(b[1] || '0', r)), (t = _[i.p] - l[i.p] - u + v + n - y), s && us(s, y, i, r - y < 20 || (s._isStart && y > 20)), (r -= r - y);
                }
                if (o) {
                    var x = t + r,
                        T = o._isStart;
                    (d = 'scroll' + i.d2), us(o, x, i, (T && x > 20) || (!T && (c ? Math.max(Rn[d], Dn[d]) : o.parentNode[d]) <= x + 1)), c && ((l = Qo(s)), c && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + jo));
                }
                return f && m && ((d = Qo(m)), f.seek(h), (p = Qo(m)), (f._caScrollDist = d[i.p] - p[i.p]), (t = (t / f._caScrollDist) * h)), f && f.seek(g), f ? t : Math.round(t);
            },
            Bs = /(webkit|moz|length|cssText|inset)/i,
            Fs = function (t, e, r, i) {
                if (t.parentNode !== e) {
                    var n,
                        o,
                        s = t.style;
                    if (e === Rn) {
                        for (n in ((t._stOrig = s.cssText), (o = Go(t)))) +n || Bs.test(n) || !o[n] || 'string' != typeof s[n] || '0' === n || (s[n] = o[n]);
                        (s.top = r), (s.left = i);
                    } else s.cssText = t._stOrig;
                    (On.core.getCache(t).uncache = 1), e.appendChild(t);
                }
            },
            Ys = function (t, e, r) {
                var i = e,
                    n = i;
                return function (e) {
                    var o = Math.round(t());
                    return o !== i && o !== n && Math.abs(o - i) > 3 && Math.abs(o - n) > 3 && ((e = o), r && r()), (n = i), (i = e), e;
                };
            },
            Is = function (t, e) {
                var r = Tn(t, e),
                    i = '_scroll' + e.p2,
                    n = function e(n, o, s, a, l) {
                        var u = e.tween,
                            c = o.onComplete,
                            h = {};
                        s = s || r();
                        var f = Ys(r, s, function () {
                            u.kill(), (e.tween = 0);
                        });
                        return (
                            (l = (a && l) || 0),
                            (a = a || n - s),
                            u && u.kill(),
                            Math.round(s),
                            (o[i] = n),
                            (o.modifiers = h),
                            (h[i] = function () {
                                return f(s + a * u.ratio + l * u.ratio * u.ratio);
                            }),
                            (o.onUpdate = function () {
                                ln.cache++, ks();
                            }),
                            (o.onComplete = function () {
                                (e.tween = 0), c && c.call(u);
                            }),
                            (u = e.tween = On.to(t, o))
                        );
                    };
                return (
                    (t[i] = r),
                    (r.wheelHandler = function () {
                        return n.tween && n.tween.kill() && (n.tween = 0);
                    }),
                    es(t, 'wheel', r.wheelHandler),
                    Xs.isTouch && es(t, 'touchmove', r.wheelHandler),
                    n
                );
            },
            Xs = (function () {
                function t(e, r) {
                    Pn || t.register(On) || console.warn('Please gsap.registerPlugin(ScrollTrigger)'), this.init(e, r);
                }
                return (
                    (t.prototype.init = function (e, r) {
                        if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), mo)) {
                            var i,
                                n,
                                o,
                                s,
                                a,
                                l,
                                u,
                                c,
                                h,
                                f,
                                d,
                                p,
                                m,
                                g,
                                _,
                                v,
                                y,
                                w,
                                b,
                                x,
                                T,
                                M,
                                A,
                                E,
                                S,
                                k,
                                C,
                                O,
                                P,
                                q,
                                z,
                                D,
                                R,
                                L,
                                B,
                                F,
                                Y,
                                I,
                                X,
                                N,
                                W,
                                H,
                                V = (e = $o(So(e) || Co(e) || e.nodeType ? { trigger: e } : e, os)),
                                U = V.onUpdate,
                                j = V.toggleClass,
                                G = V.id,
                                $ = V.onToggle,
                                Q = V.onRefresh,
                                Z = V.scrub,
                                K = V.trigger,
                                J = V.pin,
                                tt = V.pinSpacing,
                                et = V.invalidateOnRefresh,
                                rt = V.anticipatePin,
                                it = V.onScrubComplete,
                                nt = V.onSnapComplete,
                                ot = V.once,
                                st = V.snap,
                                at = V.pinReparent,
                                lt = V.pinSpacer,
                                ut = V.containerAnimation,
                                ct = V.fastScrollEnd,
                                ht = V.preventOverlaps,
                                ft = e.horizontal || (e.containerAnimation && !1 !== e.horizontal) ? wn : bn,
                                dt = !Z && 0 !== Z,
                                pt = xn(e.scroller || qn),
                                mt = On.core.getCache(pt),
                                gt = To(pt),
                                _t = 'fixed' === ('pinType' in e ? e.pinType : fn(pt, 'pinType') || (gt && 'fixed')),
                                vt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                                yt = dt && e.toggleActions.split(' '),
                                wt = 'markers' in e ? e.markers : os.markers,
                                bt = gt ? 0 : parseFloat(Go(pt)['border' + ft.p2 + Vo]) || 0,
                                xt = this,
                                Tt =
                                    e.onRefreshInit &&
                                    function () {
                                        return e.onRefreshInit(xt);
                                    },
                                Mt = (function (t, e, r) {
                                    var i = r.d,
                                        n = r.d2,
                                        o = r.a;
                                    return (o = fn(t, 'getBoundingClientRect'))
                                        ? function () {
                                              return o()[i];
                                          }
                                        : function () {
                                              return (e ? qn['inner' + n] : t['client' + n]) || 0;
                                          };
                                })(pt, gt, ft),
                                At = (function (t, e) {
                                    return !e || ~un.indexOf(t)
                                        ? Mo(t)
                                        : function () {
                                              return Rs;
                                          };
                                })(pt, gt),
                                Et = 0,
                                St = 0,
                                kt = Tn(pt, ft);
                            if (
                                (io(xt),
                                (xt._dir = ft),
                                (rt *= 45),
                                (xt.scroller = pt),
                                (xt.scroll = ut ? ut.time.bind(ut) : kt),
                                (s = kt()),
                                (xt.vars = e),
                                (r = r || e.animation),
                                'refreshPriority' in e && (($n = 1), -9999 === e.refreshPriority && (uo = xt)),
                                (mt.tweenScroll = mt.tweenScroll || { top: Is(pt, bn), left: Is(pt, wn) }),
                                (xt.tweenTo = i = mt.tweenScroll[ft.p]),
                                (xt.scrubDuration = function (t) {
                                    (D = Co(t) && t)
                                        ? z
                                            ? z.duration(t)
                                            : (z = On.to(r, {
                                                  ease: 'expo',
                                                  totalProgress: '+=0.001',
                                                  duration: D,
                                                  paused: !0,
                                                  onComplete: function () {
                                                      return it && it(xt);
                                                  },
                                              }))
                                        : (z && z.progress(1).kill(), (z = 0));
                                }),
                                r && ((r.vars.lazy = !1), r._initted || (!1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0)), (xt.animation = r.pause()), (r.scrollTrigger = xt), xt.scrubDuration(Z), z && z.resetTo && z.resetTo('totalProgress', 0), (P = 0), G || (G = r.vars.id)),
                                cs.push(xt),
                                st &&
                                    ((Oo(st) && !st.push) || (st = { snapTo: st }),
                                    'scrollBehavior' in Rn.style && On.set(gt ? [Rn, Dn] : pt, { scrollBehavior: 'auto' }),
                                    ln.forEach(function (t) {
                                        return ko(t) && t.target === (gt ? zn.scrollingElement || Dn : pt) && (t.smooth = !1);
                                    }),
                                    (o = ko(st.snapTo)
                                        ? st.snapTo
                                        : 'labels' === st.snapTo
                                        ? (function (t) {
                                              return function (e) {
                                                  return On.utils.snap(Ko(t), e);
                                              };
                                          })(r)
                                        : 'labelsDirectional' === st.snapTo
                                        ? ((N = r),
                                          function (t, e) {
                                              return Jo(Ko(N))(t, e.direction);
                                          })
                                        : !1 !== st.directional
                                        ? function (t, e) {
                                              return Jo(st.snapTo)(t, ho() - St < 500 ? 0 : e.direction);
                                          }
                                        : On.utils.snap(st.snapTo)),
                                    (R = st.duration || { min: 0.1, max: 2 }),
                                    (R = Oo(R) ? Yn(R.min, R.max) : Yn(R, R)),
                                    (L = On.delayedCall(st.delay || D / 2 || 0.1, function () {
                                        var t = kt(),
                                            e = ho() - St < 500,
                                            n = i.tween;
                                        if (!(e || Math.abs(xt.getVelocity()) < 10) || n || Wn || Et === t) xt.isActive && Et !== t && L.restart(!0);
                                        else {
                                            var s = (t - l) / m,
                                                a = r && !dt ? r.totalProgress() : s,
                                                c = e ? 0 : ((a - q) / (ho() - In)) * 1e3 || 0,
                                                h = On.utils.clamp(-s, 1 - s, (zo(c / 2) * c) / 0.185),
                                                f = s + (!1 === st.inertia ? 0 : h),
                                                d = Yn(0, 1, o(f, xt)),
                                                p = Math.round(l + d * m),
                                                g = st,
                                                _ = g.onStart,
                                                v = g.onInterrupt,
                                                y = g.onComplete;
                                            if (t <= u && t >= l && p !== t) {
                                                if (n && !n._initted && n.data <= zo(p - t)) return;
                                                !1 === st.inertia && (h = d - s),
                                                    i(
                                                        p,
                                                        {
                                                            duration: R(zo((0.185 * Math.max(zo(f - a), zo(d - a))) / c / 0.05 || 0)),
                                                            ease: st.ease || 'power3',
                                                            data: zo(p - t),
                                                            onInterrupt: function () {
                                                                return L.restart(!0) && v && v(xt);
                                                            },
                                                            onComplete: function () {
                                                                xt.update(), (Et = kt()), (P = q = r && !dt ? r.totalProgress() : xt.progress), nt && nt(xt), y && y(xt);
                                                            },
                                                        },
                                                        t,
                                                        h * m,
                                                        p - t - h * m
                                                    ),
                                                    _ && _(xt, i.tween);
                                            }
                                        }
                                    }).pause())),
                                G && (hs[G] = xt),
                                (X = (K = xt.trigger = xn(K || J)) && K._gsap && K._gsap.stRevert) && (X = X(xt)),
                                (J = !0 === J ? K : xn(J)),
                                So(j) && (j = { targets: K, className: j }),
                                J &&
                                    (!1 === tt || tt === Ho || (tt = !(!tt && J.parentNode && J.parentNode.style && 'flex' === Go(J.parentNode).display) && Wo),
                                    (xt.pin = J),
                                    (n = On.core.getCache(J)).spacer ? (g = n.pinState) : (lt && ((lt = xn(lt)) && !lt.nodeType && (lt = lt.current || lt.nativeElement), (n.spacerIsNative = !!lt), lt && (n.spacerState = Ds(lt))), (n.spacer = y = lt || zn.createElement('div')), y.classList.add('pin-spacer'), G && y.classList.add('pin-spacer-' + G), (n.pinState = g = Ds(J))),
                                    !1 !== e.force3D && On.set(J, { force3D: !0 }),
                                    (xt.spacer = y = n.spacer),
                                    (O = Go(J)),
                                    (A = O[tt + ft.os2]),
                                    (b = On.getProperty(J)),
                                    (x = On.quickSetter(J, ft.a, jo)),
                                    Ps(J, y, O),
                                    (v = Ds(J))),
                                wt)
                            ) {
                                (p = Oo(wt) ? $o(wt, ns) : ns), (f = ls('scroller-start', G, pt, ft, p, 0)), (d = ls('scroller-end', G, pt, ft, p, 0, f)), (w = f['offset' + ft.op.d2]);
                                var Ct = xn(fn(pt, 'content') || pt);
                                (c = this.markerStart = ls('start', G, Ct, ft, p, w, 0, ut)),
                                    (h = this.markerEnd = ls('end', G, Ct, ft, p, w, 0, ut)),
                                    ut && (I = On.quickSetter([c, h], ft.a, jo)),
                                    _t || (un.length && !0 === fn(pt, 'fixedMarkers')) || ((H = Go((W = gt ? Rn : pt)).position), (W.style.position = 'absolute' === H || 'fixed' === H ? H : 'relative'), On.set([f, d], { force3D: !0 }), (S = On.quickSetter(f, ft.a, jo)), (C = On.quickSetter(d, ft.a, jo)));
                            }
                            if (ut) {
                                var Ot = ut.vars.onUpdate,
                                    Pt = ut.vars.onUpdateParams;
                                ut.eventCallback('onUpdate', function () {
                                    xt.update(0, 0, 1), Ot && Ot.apply(ut, Pt || []);
                                });
                            }
                            (xt.previous = function () {
                                return cs[cs.indexOf(xt) - 1];
                            }),
                                (xt.next = function () {
                                    return cs[cs.indexOf(xt) + 1];
                                }),
                                (xt.revert = function (t, e) {
                                    if (!e) return xt.kill(!0);
                                    var i = !1 !== t || !xt.enabled,
                                        n = Nn;
                                    i !== xt.isReverted &&
                                        (i && ((F = Math.max(kt(), xt.scroll.rec || 0)), (B = xt.progress), (Y = r && r.progress())),
                                        c &&
                                            [c, h, f, d].forEach(function (t) {
                                                return (t.style.display = i ? 'none' : 'block');
                                            }),
                                        i && ((Nn = xt), xt.update(i)),
                                        !J ||
                                            (at && xt.isActive) ||
                                            (i
                                                ? (function (t, e, r) {
                                                      zs(r);
                                                      var i = t._gsap;
                                                      if (i.spacerIsNative) zs(i.spacerState);
                                                      else if (t._gsap.swappedIn) {
                                                          var n = e.parentNode;
                                                          n && (n.insertBefore(t, e), n.removeChild(e));
                                                      }
                                                      t._gsap.swappedIn = !1;
                                                  })(J, y, g)
                                                : Ps(J, y, Go(J), E)),
                                        i || xt.update(i),
                                        (Nn = n),
                                        (xt.isReverted = i));
                                }),
                                (xt.refresh = function (n, o) {
                                    if ((!Nn && xt.enabled) || o)
                                        if (J && n && po) es(t, 'scrollEnd', vs);
                                        else {
                                            !ao && Tt && Tt(xt), (Nn = xt), (St = ho()), i.tween && (i.tween.kill(), (i.tween = 0)), z && z.pause(), et && r && r.revert({ kill: !1 }).invalidate(), xt.isReverted || xt.revert(!0, !0), (xt._subPinOffset = !1);
                                            for (
                                                var p, w, x, A, S, C, O, P, q, D, R, I = Mt(), X = At(), N = ut ? ut.duration() : Ao(pt, ft), W = m <= 0.01, H = 0, V = 0, U = e.end, j = e.endTrigger || K, G = e.start || (0 !== e.start && K ? (J ? '0 0' : '0 100%') : 0), $ = (xt.pinnedContainer = e.pinnedContainer && xn(e.pinnedContainer)), Z = (K && Math.max(0, cs.indexOf(xt))) || 0, rt = Z;
                                                rt--;

                                            )
                                                (C = cs[rt]).end || C.refresh(0, 1) || (Nn = xt), !(O = C.pin) || (O !== K && O !== J && O !== $) || C.isReverted || (D || (D = []), D.unshift(C), C.revert(!0, !0)), C !== cs[rt] && (Z--, rt--);
                                            for (
                                                ko(G) && (G = G(xt)),
                                                    l = Ls(G, K, I, ft, kt(), c, f, xt, X, bt, _t, N, ut) || (J ? -0.001 : 0),
                                                    ko(U) && (U = U(xt)),
                                                    So(U) && !U.indexOf('+=') && (~U.indexOf(' ') ? (U = (So(G) ? G.split(' ')[0] : '') + U) : ((H = as(U.substr(2), I)), (U = So(G) ? G : (ut ? On.utils.mapRange(0, ut.duration(), ut.scrollTrigger.start, ut.scrollTrigger.end, l) : l) + H), (j = K))),
                                                    u = Math.max(l, Ls(U || (j ? '100% 0' : N), j, I, ft, kt() + H, h, d, xt, X, bt, _t, N, ut)) || -0.001,
                                                    m = u - l || ((l -= 0.01) && 0.001),
                                                    H = 0,
                                                    rt = Z;
                                                rt--;

                                            )
                                                (O = (C = cs[rt]).pin) && C.start - C._pinPush <= l && !ut && C.end > 0 && ((p = C.end - C.start), ((O === K && C.start - C._pinPush < l) || O === $) && !Co(G) && (H += p * (1 - C.progress)), O === J && (V += p));
                                            if (((l += H), (u += H), W && (B = On.utils.clamp(0, 1, On.utils.normalize(l, u, F))), (xt._pinPush = V), c && H && (((p = {})[ft.a] = '+=' + H), $ && (p[ft.p] = '-=' + kt()), On.set([c, h], p)), J))
                                                (p = Go(J)),
                                                    (A = ft === bn),
                                                    (x = kt()),
                                                    (T = parseFloat(b(ft.a)) + V),
                                                    !N && u > 1 && ((R = { style: (R = (gt ? zn.scrollingElement || Dn : pt).style), value: R['overflow' + ft.a.toUpperCase()] }).style['overflow' + ft.a.toUpperCase()] = 'scroll'),
                                                    Ps(J, y, p),
                                                    (v = Ds(J)),
                                                    (w = Qo(J, !0)),
                                                    (P = _t && Tn(pt, A ? wn : bn)()),
                                                    tt &&
                                                        (((E = [tt + ft.os2, m + V + jo]).t = y),
                                                        (rt = tt === Wo ? Zo(J, ft) + m + V : 0) && E.push(ft.d, rt + jo),
                                                        zs(E),
                                                        $ &&
                                                            cs.forEach(function (t) {
                                                                t.pin === $ && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0);
                                                            }),
                                                        _t && kt(F)),
                                                    _t &&
                                                        (((S = { top: w.top + (A ? x - l : P) + jo, left: w.left + (A ? P : x - l) + jo, boxSizing: 'border-box', position: 'fixed' })[Bo] = S['max' + Vo] = Math.ceil(w.width) + jo),
                                                        (S[Fo] = S['max' + Uo] = Math.ceil(w.height) + jo),
                                                        (S[Ho] = S[Ho + Xo] = S[Ho + Yo] = S[Ho + No] = S[Ho + Io] = '0'),
                                                        (S[Wo] = p[Wo]),
                                                        (S[Wo + Xo] = p[Wo + Xo]),
                                                        (S[Wo + Yo] = p[Wo + Yo]),
                                                        (S[Wo + No] = p[Wo + No]),
                                                        (S[Wo + Io] = p[Wo + Io]),
                                                        (_ = (function (t, e, r) {
                                                            for (var i, n = [], o = t.length, s = r ? 8 : 0; s < o; s += 2) (i = t[s]), n.push(i, i in e ? e[i] : t[s + 1]);
                                                            return (n.t = t.t), n;
                                                        })(g, S, at)),
                                                        ao && kt(0)),
                                                    r ? ((q = r._initted), Qn(1), r.render(r.duration(), !0, !0), (M = b(ft.a) - T + m + V), (k = Math.abs(m - M) > 1), _t && k && _.splice(_.length - 2, 2), r.render(0, !0, !0), q || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), Qn(0)) : (M = m),
                                                    R && (R.value ? (R.style['overflow' + ft.a.toUpperCase()] = R.value) : R.style.removeProperty('overflow-' + ft.a));
                                            else if (K && kt() && !ut) for (w = K.parentNode; w && w !== Rn; ) w._pinOffset && ((l -= w._pinOffset), (u -= w._pinOffset)), (w = w.parentNode);
                                            D &&
                                                D.forEach(function (t) {
                                                    return t.revert(!1, !0);
                                                }),
                                                (xt.start = l),
                                                (xt.end = u),
                                                (s = a = ao ? F : kt()),
                                                ut || ao || (s < F && kt(F), (xt.scroll.rec = 0)),
                                                xt.revert(!1, !0),
                                                L && ((Et = -1), xt.isActive && kt(l + m * B), L.restart(!0)),
                                                (Nn = 0),
                                                r && dt && (r._initted || Y) && r.progress() !== Y && r.progress(Y, !0).render(r.time(), !0, !0),
                                                (W || B !== xt.progress || ut) && (r && !dt && r.totalProgress(ut && l < -0.001 && !B ? On.utils.normalize(l, u, 0) : B, !0), (xt.progress = (s - l) / m === B ? 0 : B)),
                                                J && tt && (y._pinOffset = Math.round(xt.progress * M)),
                                                z && z.invalidate(),
                                                Q && !ao && Q(xt);
                                        }
                                }),
                                (xt.getVelocity = function () {
                                    return ((kt() - a) / (ho() - In)) * 1e3 || 0;
                                }),
                                (xt.endAnimation = function () {
                                    Po(xt.callbackAnimation), r && (z ? z.progress(1) : r.paused() ? dt || Po(r, xt.direction < 0, 1) : Po(r, r.reversed()));
                                }),
                                (xt.labelToScroll = function (t) {
                                    return (r && r.labels && (l || xt.refresh() || l) + (r.labels[t] / r.duration()) * m) || 0;
                                }),
                                (xt.getTrailing = function (t) {
                                    var e = cs.indexOf(xt),
                                        r = xt.direction > 0 ? cs.slice(0, e).reverse() : cs.slice(e + 1);
                                    return (
                                        So(t)
                                            ? r.filter(function (e) {
                                                  return e.vars.preventOverlaps === t;
                                              })
                                            : r
                                    ).filter(function (t) {
                                        return xt.direction > 0 ? t.end <= l : t.start >= u;
                                    });
                                }),
                                (xt.update = function (t, e, n) {
                                    if (!ut || n || t) {
                                        var o,
                                            c,
                                            h,
                                            d,
                                            p,
                                            g,
                                            w,
                                            b = !0 === ao ? F : xt.scroll(),
                                            E = t ? 0 : (b - l) / m,
                                            O = E < 0 ? 0 : E > 1 ? 1 : E || 0,
                                            D = xt.progress;
                                        if ((e && ((a = s), (s = ut ? kt() : b), st && ((q = P), (P = r && !dt ? r.totalProgress() : O))), rt && !O && J && !Nn && !co && po && l < b + ((b - a) / (ho() - In)) * rt && (O = 1e-4), O !== D && xt.enabled)) {
                                            if (
                                                ((d = (p = (o = xt.isActive = !!O && O < 1) != (!!D && D < 1)) || !!O != !!D),
                                                (xt.direction = O > D ? 1 : -1),
                                                (xt.progress = O),
                                                d && !Nn && ((c = O && !D ? 0 : 1 === O ? 1 : 1 === D ? 2 : 3), dt && ((h = (!p && 'none' !== yt[c + 1] && yt[c + 1]) || yt[c]), (w = r && ('complete' === h || 'reset' === h || h in r)))),
                                                ht &&
                                                    (p || w) &&
                                                    (w || Z || !r) &&
                                                    (ko(ht)
                                                        ? ht(xt)
                                                        : xt.getTrailing(ht).forEach(function (t) {
                                                              return t.endAnimation();
                                                          })),
                                                dt || (!z || Nn || co ? r && r.totalProgress(O, !!Nn) : (z._dp._time - z._start !== z._time && z.render(z._dp._time - z._start), z.resetTo ? z.resetTo('totalProgress', O, r._tTime / r._tDur) : ((z.vars.totalProgress = O), z.invalidate().restart()))),
                                                J)
                                            )
                                                if ((t && tt && (y.style[tt + ft.os2] = A), _t)) {
                                                    if (d) {
                                                        if (((g = !t && O > D && u + 1 > b && b + 1 >= Ao(pt, ft)), at))
                                                            if (t || (!o && !g)) Fs(J, y);
                                                            else {
                                                                var R = Qo(J, !0),
                                                                    B = b - l;
                                                                Fs(J, Rn, R.top + (ft === bn ? B : 0) + jo, R.left + (ft === bn ? 0 : B) + jo);
                                                            }
                                                        zs(o || g ? _ : v), (k && O < 1 && o) || x(T + (1 !== O || g ? 0 : M));
                                                    }
                                                } else x(wo(T + M * O));
                                            st && !i.tween && !Nn && !co && L.restart(!0),
                                                j &&
                                                    (p || (ot && O && (O < 1 || !oo))) &&
                                                    Fn(j.targets).forEach(function (t) {
                                                        return t.classList[o || ot ? 'add' : 'remove'](j.className);
                                                    }),
                                                U && !dt && !t && U(xt),
                                                d && !Nn
                                                    ? (dt && (w && ('complete' === h ? r.pause().totalProgress(1) : 'reset' === h ? r.restart(!0).pause() : 'restart' === h ? r.restart(!0) : r[h]()), U && U(xt)),
                                                      (!p && oo) || ($ && p && qo(xt, $), vt[c] && qo(xt, vt[c]), ot && (1 === O ? xt.kill(!1, 1) : (vt[c] = 0)), p || (vt[(c = 1 === O ? 1 : 3)] && qo(xt, vt[c]))),
                                                      ct && !o && Math.abs(xt.getVelocity()) > (Co(ct) ? ct : 2500) && (Po(xt.callbackAnimation), z ? z.progress(1) : Po(r, 'reverse' === h ? 1 : !O, 1)))
                                                    : dt && U && !Nn && U(xt);
                                        }
                                        if (C) {
                                            var Y = ut ? (b / ut.duration()) * (ut._caScrollDist || 0) : b;
                                            S(Y + (f._isFlipped ? 1 : 0)), C(Y);
                                        }
                                        I && I((-b / ut.duration()) * (ut._caScrollDist || 0));
                                    }
                                }),
                                (xt.enable = function (e, r) {
                                    xt.enabled || ((xt.enabled = !0), es(pt, 'resize', ms), es(gt ? zn : pt, 'scroll', ds), Tt && es(t, 'refreshInit', Tt), !1 !== e && ((xt.progress = B = 0), (s = a = Et = kt())), !1 !== r && xt.refresh());
                                }),
                                (xt.getTween = function (t) {
                                    return t && i ? i.tween : z;
                                }),
                                (xt.setPositions = function (t, e) {
                                    J && ((T += t - l), (M += e - t - m), tt === Wo && xt.adjustPinSpacing(e - t - m)), (xt.start = l = t), (xt.end = u = e), (m = e - t), xt.update();
                                }),
                                (xt.adjustPinSpacing = function (t) {
                                    if (E && t) {
                                        var e = E.indexOf(ft.d) + 1;
                                        (E[e] = parseFloat(E[e]) + t + jo), (E[1] = parseFloat(E[1]) + t + jo), zs(E);
                                    }
                                }),
                                (xt.disable = function (e, r) {
                                    if (xt.enabled && (!1 !== e && xt.revert(!0, !0), (xt.enabled = xt.isActive = !1), r || (z && z.pause()), (F = 0), n && (n.uncache = 1), Tt && rs(t, 'refreshInit', Tt), L && (L.pause(), i.tween && i.tween.kill() && (i.tween = 0)), !gt)) {
                                        for (var o = cs.length; o--; ) if (cs[o].scroller === pt && cs[o] !== xt) return;
                                        rs(pt, 'resize', ms), rs(pt, 'scroll', ds);
                                    }
                                }),
                                (xt.kill = function (t, i) {
                                    xt.disable(t, i), z && !i && z.kill(), G && delete hs[G];
                                    var o = cs.indexOf(xt);
                                    o >= 0 && cs.splice(o, 1),
                                        o === Vn && Ss > 0 && Vn--,
                                        (o = 0),
                                        cs.forEach(function (t) {
                                            return t.scroller === xt.scroller && (o = 1);
                                        }),
                                        o || ao || (xt.scroll.rec = 0),
                                        r && ((r.scrollTrigger = null), t && r.revert({ kill: !1 }), i || r.kill()),
                                        c &&
                                            [c, h, f, d].forEach(function (t) {
                                                return t.parentNode && t.parentNode.removeChild(t);
                                            }),
                                        uo === xt && (uo = 0),
                                        J &&
                                            (n && (n.uncache = 1),
                                            (o = 0),
                                            cs.forEach(function (t) {
                                                return t.pin === J && o++;
                                            }),
                                            o || (n.spacer = 0)),
                                        e.onKill && e.onKill(xt);
                                }),
                                xt.enable(!1, !1),
                                X && X(xt),
                                r && r.add && !m
                                    ? On.delayedCall(0.01, function () {
                                          return l || u || xt.refresh();
                                      }) &&
                                      (m = 0.01) &&
                                      (l = u = 0)
                                    : xt.refresh(),
                                J &&
                                    (function () {
                                        if (lo !== Ms) {
                                            var t = (lo = Ms);
                                            requestAnimationFrame(function () {
                                                return t === Ms && As(!0);
                                            });
                                        }
                                    })();
                        } else this.update = this.refresh = this.kill = yo;
                    }),
                    (t.register = function (e) {
                        return Pn || ((On = e || xo()), bo() && window.document && t.enable(), (Pn = mo)), Pn;
                    }),
                    (t.defaults = function (t) {
                        if (t) for (var e in t) os[e] = t[e];
                        return os;
                    }),
                    (t.disable = function (t, e) {
                        (mo = 0),
                            cs.forEach(function (r) {
                                return r[e ? 'kill' : 'disable'](t);
                            }),
                            rs(qn, 'wheel', ds),
                            rs(zn, 'scroll', ds),
                            clearInterval(Xn),
                            rs(zn, 'touchcancel', yo),
                            rs(Rn, 'touchstart', yo),
                            ts(rs, zn, 'pointerdown,touchstart,mousedown', _o),
                            ts(rs, zn, 'pointerup,touchend,mouseup', vo),
                            Bn.kill(),
                            Eo(rs);
                        for (var r = 0; r < ln.length; r += 3) is(rs, ln[r], ln[r + 1]), is(rs, ln[r], ln[r + 2]);
                    }),
                    (t.enable = function () {
                        if (((qn = window), (zn = document), (Dn = zn.documentElement), (Rn = zn.body), On && ((Fn = On.utils.toArray), (Yn = On.utils.clamp), (io = On.core.context || yo), (Qn = On.core.suppressOverwrites || yo), (no = qn.history.scrollRestoration || 'auto'), (Es = qn.pageYOffset), On.core.globals('ScrollTrigger', t), Rn))) {
                            (mo = 1),
                                go(),
                                Cn.register(On),
                                (t.isTouch = Cn.isTouch),
                                (ro = Cn.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                                es(qn, 'wheel', ds),
                                (Ln = [qn, zn, Dn, Rn]),
                                On.matchMedia
                                    ? ((t.matchMedia = function (t) {
                                          var e,
                                              r = On.matchMedia();
                                          for (e in t) r.add(e, t[e]);
                                          return r;
                                      }),
                                      On.addEventListener('matchMediaInit', function () {
                                          return xs();
                                      }),
                                      On.addEventListener('matchMediaRevert', function () {
                                          return bs();
                                      }),
                                      On.addEventListener('matchMedia', function () {
                                          As(0, 1), ys('matchMedia');
                                      }),
                                      On.matchMedia('(orientation: portrait)', function () {
                                          return ps(), ps;
                                      }))
                                    : console.warn('Requires GSAP 3.11.0 or later'),
                                ps(),
                                es(zn, 'scroll', ds);
                            var e,
                                r,
                                i = Rn.style,
                                n = i.borderTopStyle,
                                o = On.core.Animation.prototype;
                            for (
                                o.revert ||
                                    Object.defineProperty(o, 'revert', {
                                        value: function () {
                                            return this.time(-0.01, !0);
                                        },
                                    }),
                                    i.borderTopStyle = 'solid',
                                    e = Qo(Rn),
                                    bn.m = Math.round(e.top + bn.sc()) || 0,
                                    wn.m = Math.round(e.left + wn.sc()) || 0,
                                    n ? (i.borderTopStyle = n) : i.removeProperty('border-top-style'),
                                    Xn = setInterval(fs, 250),
                                    On.delayedCall(0.5, function () {
                                        return (co = 0);
                                    }),
                                    es(zn, 'touchcancel', yo),
                                    es(Rn, 'touchstart', yo),
                                    ts(es, zn, 'pointerdown,touchstart,mousedown', _o),
                                    ts(es, zn, 'pointerup,touchend,mouseup', vo),
                                    Hn = On.utils.checkPrefix('transform'),
                                    Os.push(Hn),
                                    Pn = ho(),
                                    Bn = On.delayedCall(0.2, As).pause(),
                                    Gn = [
                                        zn,
                                        'visibilitychange',
                                        function () {
                                            var t = qn.innerWidth,
                                                e = qn.innerHeight;
                                            zn.hidden ? ((Un = t), (jn = e)) : (Un === t && jn === e) || ms();
                                        },
                                        zn,
                                        'DOMContentLoaded',
                                        As,
                                        qn,
                                        'load',
                                        As,
                                        qn,
                                        'resize',
                                        ms,
                                    ],
                                    Eo(es),
                                    cs.forEach(function (t) {
                                        return t.enable(0, 1);
                                    }),
                                    r = 0;
                                r < ln.length;
                                r += 3
                            )
                                is(rs, ln[r], ln[r + 1]), is(rs, ln[r], ln[r + 2]);
                        }
                    }),
                    (t.config = function (e) {
                        'limitCallbacks' in e && (oo = !!e.limitCallbacks);
                        var r = e.syncInterval;
                        (r && clearInterval(Xn)) || ((Xn = r) && setInterval(fs, r)), 'ignoreMobileResize' in e && (Jn = 1 === t.isTouch && e.ignoreMobileResize), 'autoRefreshEvents' in e && (Eo(rs) || Eo(es, e.autoRefreshEvents || 'none'), (Zn = -1 === (e.autoRefreshEvents + '').indexOf('resize')));
                    }),
                    (t.scrollerProxy = function (t, e) {
                        var r = xn(t),
                            i = ln.indexOf(r),
                            n = To(r);
                        ~i && ln.splice(i, n ? 6 : 2), e && (n ? un.unshift(qn, e, Rn, e, Dn, e) : un.unshift(r, e));
                    }),
                    (t.clearMatchMedia = function (t) {
                        cs.forEach(function (e) {
                            return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
                        });
                    }),
                    (t.isInViewport = function (t, e, r) {
                        var i = (So(t) ? xn(t) : t).getBoundingClientRect(),
                            n = i[r ? Bo : Fo] * e || 0;
                        return r ? i.right - n > 0 && i.left + n < qn.innerWidth : i.bottom - n > 0 && i.top + n < qn.innerHeight;
                    }),
                    (t.positionInViewport = function (t, e, r) {
                        So(t) && (t = xn(t));
                        var i = t.getBoundingClientRect(),
                            n = i[r ? Bo : Fo],
                            o = null == e ? n / 2 : e in ss ? ss[e] * n : ~e.indexOf('%') ? (parseFloat(e) * n) / 100 : parseFloat(e) || 0;
                        return r ? (i.left + o) / qn.innerWidth : (i.top + o) / qn.innerHeight;
                    }),
                    (t.killAll = function (t) {
                        if (
                            (cs.slice(0).forEach(function (t) {
                                return 'ScrollSmoother' !== t.vars.id && t.kill();
                            }),
                            !0 !== t)
                        ) {
                            var e = gs.killAll || [];
                            (gs = {}),
                                e.forEach(function (t) {
                                    return t();
                                });
                        }
                    }),
                    t
                );
            })();
        (Xs.version = '3.11.5'),
            (Xs.saveStyles = function (t) {
                return t
                    ? Fn(t).forEach(function (t) {
                          if (t && t.style) {
                              var e = ws.indexOf(t);
                              e >= 0 && ws.splice(e, 5), ws.push(t, t.style.cssText, t.getBBox && t.getAttribute('transform'), On.core.getCache(t), io());
                          }
                      })
                    : ws;
            }),
            (Xs.revert = function (t, e) {
                return xs(!t, e);
            }),
            (Xs.create = function (t, e) {
                return new Xs(t, e);
            }),
            (Xs.refresh = function (t) {
                return t ? ms() : (Pn || Xs.register()) && As(!0);
            }),
            (Xs.update = function (t) {
                return ++ln.cache && ks(!0 === t ? 2 : 0);
            }),
            (Xs.clearScrollMemory = Ts),
            (Xs.maxScroll = function (t, e) {
                return Ao(t, e ? wn : bn);
            }),
            (Xs.getScrollFunc = function (t, e) {
                return Tn(xn(t), e ? wn : bn);
            }),
            (Xs.getById = function (t) {
                return hs[t];
            }),
            (Xs.getAll = function () {
                return cs.filter(function (t) {
                    return 'ScrollSmoother' !== t.vars.id;
                });
            }),
            (Xs.isScrolling = function () {
                return !!po;
            }),
            (Xs.snapDirectional = Jo),
            (Xs.addEventListener = function (t, e) {
                var r = gs[t] || (gs[t] = []);
                ~r.indexOf(e) || r.push(e);
            }),
            (Xs.removeEventListener = function (t, e) {
                var r = gs[t],
                    i = r && r.indexOf(e);
                i >= 0 && r.splice(i, 1);
            }),
            (Xs.batch = function (t, e) {
                var r,
                    i = [],
                    n = {},
                    o = e.interval || 0.016,
                    s = e.batchMax || 1e9,
                    a = function (t, e) {
                        var r = [],
                            i = [],
                            n = On.delayedCall(o, function () {
                                e(r, i), (r = []), (i = []);
                            }).pause();
                        return function (t) {
                            r.length || n.restart(!0), r.push(t.trigger), i.push(t), s <= r.length && n.progress(1);
                        };
                    };
                for (r in e) n[r] = 'on' === r.substr(0, 2) && ko(e[r]) && 'onRefreshInit' !== r ? a(0, e[r]) : e[r];
                return (
                    ko(s) &&
                        ((s = s()),
                        es(Xs, 'refresh', function () {
                            return (s = e.batchMax());
                        })),
                    Fn(t).forEach(function (t) {
                        var e = {};
                        for (r in n) e[r] = n[r];
                        (e.trigger = t), i.push(Xs.create(e));
                    }),
                    i
                );
            });
        var Ns,
            Ws = function (t, e, r, i) {
                return e > i ? t(i) : e < 0 && t(0), r > i ? (i - e) / (r - e) : r < 0 ? e / (e - r) : 1;
            },
            Hs = function t(e, r) {
                !0 === r ? e.style.removeProperty('touch-action') : (e.style.touchAction = !0 === r ? 'auto' : r ? 'pan-' + r + (Cn.isTouch ? ' pinch-zoom' : '') : 'none'), e === Dn && t(Rn, r);
            },
            Vs = { auto: 1, scroll: 1 },
            Us = function (t) {
                var e,
                    r = t.event,
                    i = t.target,
                    n = t.axis,
                    o = (r.changedTouches ? r.changedTouches[0] : r).target,
                    s = o._gsap || On.core.getCache(o),
                    a = ho();
                if (!s._isScrollT || a - s._isScrollT > 2e3) {
                    for (; o && o !== Rn && ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) || (!Vs[(e = Go(o)).overflowY] && !Vs[e.overflowX])); ) o = o.parentNode;
                    (s._isScroll = o && o !== i && !To(o) && (Vs[(e = Go(o)).overflowY] || Vs[e.overflowX])), (s._isScrollT = a);
                }
                (s._isScroll || 'x' === n) && (r.stopPropagation(), (r._gsapAllow = !0));
            },
            js = function (t, e, r, i) {
                return Cn.create({
                    target: t,
                    capture: !0,
                    debounce: !1,
                    lockAxis: !0,
                    type: e,
                    onWheel: (i = i && Us),
                    onPress: i,
                    onDrag: i,
                    onScroll: i,
                    onEnable: function () {
                        return r && es(zn, Cn.eventTypes[0], $s, !1, !0);
                    },
                    onDisable: function () {
                        return rs(zn, Cn.eventTypes[0], $s, !0);
                    },
                });
            },
            Gs = /(input|label|select|textarea)/i,
            $s = function (t) {
                var e = Gs.test(t.target.tagName);
                (e || Ns) && ((t._gsapAllow = !0), (Ns = e));
            };
        function Qs(t) {
            return (
                (t.innerHTML = t.innerText.replace(/(\S*)/g, (t) => '<div style="display: inline-block" class="word">' + t.replace(/(-|#|@)?\S(-|#|@)?/g, "<div style='display: inline-block' class='letter'>$&</div>") + '</div>')),
                t.querySelectorAll('.word').forEach((t) => {
                    '' == t.innerHTML && t.remove();
                }),
                t
            );
        }
        if (
            ((Xs.sort = function (t) {
                return cs.sort(
                    t ||
                        function (t, e) {
                            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0));
                        }
                );
            }),
            (Xs.observe = function (t) {
                return new Cn(t);
            }),
            (Xs.normalizeScroll = function (t) {
                if (void 0 === t) return Kn;
                if (!0 === t && Kn) return Kn.enable();
                if (!1 === t) return Kn && Kn.kill();
                var e =
                    t instanceof Cn
                        ? t
                        : (function (t) {
                              Oo(t) || (t = {}), (t.preventDefault = t.isNormalizer = t.allowClicks = !0), t.type || (t.type = 'wheel,touch'), (t.debounce = !!t.debounce), (t.id = t.id || 'normalizer');
                              var e,
                                  r,
                                  i,
                                  n,
                                  o,
                                  s,
                                  a,
                                  l,
                                  u = t,
                                  c = u.normalizeScrollX,
                                  h = u.momentum,
                                  f = u.allowNestedScroll,
                                  d = u.onRelease,
                                  p = xn(t.target) || Dn,
                                  m = On.core.globals().ScrollSmoother,
                                  g = m && m.get(),
                                  _ = ro && ((t.content && xn(t.content)) || (g && !1 !== t.content && !g.smooth() && g.content())),
                                  v = Tn(p, bn),
                                  y = Tn(p, wn),
                                  w = 1,
                                  b = (Cn.isTouch && qn.visualViewport ? qn.visualViewport.scale * qn.visualViewport.width : qn.outerWidth) / qn.innerWidth,
                                  x = 0,
                                  T = ko(h)
                                      ? function () {
                                            return h(e);
                                        }
                                      : function () {
                                            return h || 2.8;
                                        },
                                  M = js(p, t.type, !0, f),
                                  A = function () {
                                      return (n = !1);
                                  },
                                  E = yo,
                                  S = yo,
                                  k = function () {
                                      (r = Ao(p, bn)), (S = Yn(ro ? 1 : 0, r)), c && (E = Yn(0, Ao(p, wn))), (i = Ms);
                                  },
                                  C = function () {
                                      (_._gsap.y = wo(parseFloat(_._gsap.y) + v.offset) + 'px'), (_.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + parseFloat(_._gsap.y) + ', 0, 1)'), (v.offset = v.cacheID = 0);
                                  },
                                  O = function () {
                                      k(), o.isActive() && o.vars.scrollY > r && (v() > r ? o.progress(1) && v(r) : o.resetTo('scrollY', r));
                                  };
                              return (
                                  _ && On.set(_, { y: '+=0' }),
                                  (t.ignoreCheck = function (t) {
                                      return (
                                          (ro &&
                                              'touchmove' === t.type &&
                                              (function () {
                                                  if (n) {
                                                      requestAnimationFrame(A);
                                                      var t = wo(e.deltaY / 2),
                                                          r = S(v.v - t);
                                                      if (_ && r !== v.v + v.offset) {
                                                          v.offset = r - v.v;
                                                          var i = wo((parseFloat(_ && _._gsap.y) || 0) - v.offset);
                                                          (_.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + i + ', 0, 1)'), (_._gsap.y = i + 'px'), (v.cacheID = ln.cache), ks();
                                                      }
                                                      return !0;
                                                  }
                                                  v.offset && C(), (n = !0);
                                              })()) ||
                                          (w > 1.05 && 'touchstart' !== t.type) ||
                                          e.isGesturing ||
                                          (t.touches && t.touches.length > 1)
                                      );
                                  }),
                                  (t.onPress = function () {
                                      n = !1;
                                      var t = w;
                                      (w = wo(((qn.visualViewport && qn.visualViewport.scale) || 1) / b)), o.pause(), t !== w && Hs(p, w > 1.01 || (!c && 'x')), (s = y()), (a = v()), k(), (i = Ms);
                                  }),
                                  (t.onRelease = t.onGestureStart =
                                      function (t, e) {
                                          if ((v.offset && C(), e)) {
                                              ln.cache++;
                                              var i,
                                                  n,
                                                  s = T();
                                              c && ((n = (i = y()) + (0.05 * s * -t.velocityX) / 0.227), (s *= Ws(y, i, n, Ao(p, wn))), (o.vars.scrollX = E(n))), (n = (i = v()) + (0.05 * s * -t.velocityY) / 0.227), (s *= Ws(v, i, n, Ao(p, bn))), (o.vars.scrollY = S(n)), o.invalidate().duration(s).play(0.01), ((ro && o.vars.scrollY >= r) || i >= r - 1) && On.to({}, { onUpdate: O, duration: s });
                                          } else l.restart(!0);
                                          d && d(t);
                                      }),
                                  (t.onWheel = function () {
                                      o._ts && o.pause(), ho() - x > 1e3 && ((i = 0), (x = ho()));
                                  }),
                                  (t.onChange = function (t, e, r, n, o) {
                                      if ((Ms !== i && k(), e && c && y(E(n[2] === e ? s + (t.startX - t.x) : y() + e - n[1])), r)) {
                                          v.offset && C();
                                          var l = o[2] === r,
                                              u = l ? a + t.startY - t.y : v() + r - o[1],
                                              h = S(u);
                                          l && u !== h && (a += h - u), v(h);
                                      }
                                      (r || e) && ks();
                                  }),
                                  (t.onEnable = function () {
                                      Hs(p, !c && 'x'), Xs.addEventListener('refresh', O), es(qn, 'resize', O), v.smooth && ((v.target.style.scrollBehavior = 'auto'), (v.smooth = y.smooth = !1)), M.enable();
                                  }),
                                  (t.onDisable = function () {
                                      Hs(p, !0), rs(qn, 'resize', O), Xs.removeEventListener('refresh', O), M.kill();
                                  }),
                                  (t.lockAxis = !1 !== t.lockAxis),
                                  ((e = new Cn(t)).iOS = ro),
                                  ro && !v() && v(1),
                                  ro && On.ticker.add(yo),
                                  (l = e._dc),
                                  (o = On.to(e, {
                                      ease: 'power4',
                                      paused: !0,
                                      scrollX: c ? '+=0.1' : '+=0',
                                      scrollY: '+=0.1',
                                      modifiers: {
                                          scrollY: Ys(v, v(), function () {
                                              return o.pause();
                                          }),
                                      },
                                      onUpdate: ks,
                                      onComplete: l.vars.onComplete,
                                  })),
                                  e
                              );
                          })(t);
                return Kn && Kn.target === e.target && Kn.kill(), To(e.target) && (Kn = e), e;
            }),
            (Xs.core = {
                _getVelocityProp: Mn,
                _inputObserver: js,
                _scrollers: ln,
                _proxies: un,
                bridge: {
                    ss: function () {
                        po || ys('scrollStart'), (po = ho());
                    },
                    ref: function () {
                        return Nn;
                    },
                },
            }),
            xo() && On.registerPlugin(Xs),
            Wi.registerPlugin(Xs),
            null !== document.querySelector('.hero'))
        ) {
            const t = Wi.timeline({}),
                e = document.querySelector('.hero__container'),
                r = document.querySelector('.hero__title');
            (r.style.opacity = '1'), (e.style.opacity = '1');
            let i = 0;
            const n = Array.from(Qs(r).querySelectorAll('.letter'));
            n.forEach((e) => {
                '1' == e.innerHTML && 0 == i && (e.closest('.word').insertAdjacentHTML('beforeBegin', '<br>'), i++), t.fromTo(e, { opacity: 0 }, { opacity: 1, duration: 1 / n.length });
            }),
                t.fromTo('.hero__text', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.5'),
                t.fromTo('.hero__button', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.3');
        }
        if (null !== document.querySelector('.why')) {
            const t = Wi.timeline({ scrollTrigger: { trigger: '.why', start: '-40% center', toggleActions: 'play pause resume play' } });
            let e = Array.from(Qs(document.querySelector('.why__title')).querySelectorAll('.letter'));
            e.forEach((r) => {
                t.fromTo(r, { opacity: 0 }, { opacity: 1, duration: 1 / e.length });
            }),
                t.fromTo('.why__item-1 .line-horizontal-top', { width: 0 }, { width: '100%', duration: 0.3 }),
                t.fromTo('.why__item-1 .line-vertical-right', { height: 0 }, { height: '100%', duration: 0.3 }, '-=0.3'),
                (e = Array.from(Qs(document.querySelector('.why__item-1 .why__subtitle')).querySelectorAll('.letter'))),
                e.forEach((r) => {
                    t.fromTo(r, { opacity: 0 }, { opacity: 1, duration: 0.5 / e.length });
                }),
                (e = Array.from(Qs(document.querySelector('.why__item-1 .why__text')).querySelectorAll('.letter'))),
                e.forEach((r) => {
                    t.fromTo(r, { opacity: 0 }, { opacity: 1, duration: 0.7 / e.length });
                }),
                t.fromTo('.why__item-2 .line-horizontal-top', { width: 0 }, { width: '100%', duration: 0.3 }, '-=0.5'),
                t.fromTo('.why__item-2 .line-vertical-right', { height: 0 }, { height: '100%', duration: 0.3 }, '-=0.5'),
                (e = Array.from(Qs(document.querySelector('.why__item-2 .why__subtitle')).querySelectorAll('.letter')));
            let r = Wi.timeline({ delay: -0.3 });
            e.forEach((t) => {
                r.fromTo(t, { opacity: 0 }, { opacity: 1, duration: 0.5 / e.length });
            }),
                t.add(r),
                (e = Array.from(Qs(document.querySelector('.why__item-2 .why__text')).querySelectorAll('.letter'))),
                (r = Wi.timeline({ delay: -0.3 })),
                e.forEach((t) => {
                    r.fromTo(t, { opacity: 0 }, { opacity: 1, duration: 0.7 / e.length });
                }),
                t.add(r),
                t.fromTo('.why__item-3 .line-horizontal-top', { width: 0 }, { width: '100%', duration: 0.5 }, '-=0.4'),
                (e = Array.from(Qs(document.querySelector('.why__item-3 .why__subtitle')).querySelectorAll('.letter'))),
                (r = Wi.timeline({ delay: -0.3 })),
                e.forEach((t) => {
                    r.fromTo(t, { opacity: 0 }, { opacity: 1, duration: 0.5 / e.length });
                }),
                t.add(r),
                (e = Array.from(Qs(document.querySelector('.why__item-3 .why__text')).querySelectorAll('.letter'))),
                (r = Wi.timeline({ delay: -0.5 })),
                e.forEach((t) => {
                    r.fromTo(t, { opacity: 0 }, { opacity: 1, duration: 1 / e.length });
                }),
                t.add(r);
        }
        if (null !== document.querySelector('.cool')) {
            const t = Wi.timeline({ scrollTrigger: { trigger: '.cool', start: 'top 80%', toggleActions: 'play pause resume play' } });
            t.fromTo('.cool__container-left .line-horizontal-top', { width: 0 }, { width: '100%', duration: 0.5 }),
                t.fromTo('.cool__container-left-overlay', { height: '100%' }, { height: 0, duration: 0.5 }),
                t.fromTo('.cool__container-left .line-horizontal-bottom', { width: 0 }, { width: '100%', duration: 0.5 }),
                t.fromTo('.cool__container-left .line-vertical-right', { height: 0 }, { height: '100%', duration: 0.5 }),
                t.fromTo('.cool__container-right .line-horizontal-top', { width: 0 }, { width: '100%', duration: 0.5 }, '-=0.5'),
                t.fromTo('.cool__container-right .line-horizontal-bottom', { width: 0 }, { width: '100%', duration: 0.5 }, '-=0.5');
            let e = Array.from(Qs(document.querySelector('.cool__title')).querySelectorAll('.letter'));
            e.forEach((r) => {
                t.fromTo(r, { opacity: 0 }, { opacity: 1, duration: 1 / e.length });
            }),
                t.fromTo('.cool__list', { opacity: 0 }, { opacity: 1, duration: 1 }),
                document.querySelectorAll('.cool__item').forEach((r, i) => {
                    let n = Wi.timeline({ delay: -1 });
                    (e = Array.from(Qs(r).querySelectorAll('.letter'))),
                        e.forEach((t) => {
                            n.fromTo(t, { opacity: 0 }, { opacity: 1, duration: 1 / e.length });
                        }),
                        t.add(n);
                }),
                t.fromTo('.cool__button', { opacity: 0 }, { opacity: 1, duration: 0.5 });
        }
        if (null !== document.querySelector('.cases')) {
            const t = Wi.timeline({ scrollTrigger: { trigger: '.cases', start: 'top 80%', toggleActions: 'play pause resume play' } });
            let e = Array.from(Qs(document.querySelector('.cases__title')).querySelectorAll('.letter'));
            e.forEach((r) => {
                t.fromTo(r, { opacity: 0 }, { opacity: 1, duration: 0.6 / e.length });
            });
            const r = Array.from(document.querySelectorAll('.cases__item')),
                i = Array.from(document.querySelectorAll('.cases__image')),
                n = Array.from(document.querySelectorAll('.cases__item .line-horizontal-top')),
                o = Array.from(document.querySelectorAll('.cases__item .line-horizontal-bottom')),
                s = Array.from(document.querySelectorAll('.cases__time')),
                a = Array.from(document.querySelectorAll('.cases__item .cases__title-article')),
                l = [],
                u = Array.from(document.querySelectorAll('.cases__item .cases__tags')),
                c = Array.from(document.querySelectorAll('.cases__item .line-vertical-right'));
            a.forEach((t) => {
                l.push(Array.from(Qs(t).querySelectorAll('.letter')));
            }),
                r.forEach((t, e) => {
                    let r = Wi.timeline();
                    Xs.create({
                        trigger: t,
                        start: 'top 80%',
                        toggleActions: 'play pause resume none',
                        animation: r
                            .from(i[e], { y: 50, duration: 0.5, ease: 'power2.in', opacity: 0 })
                            .fromTo(n[e], { width: 0 }, { width: '100%', duration: 0.3 })
                            .fromTo(c[e], { height: 0 }, { height: '100%', duration: 0.3 })
                            .fromTo(
                                o[e],
                                {
                                    width: 0,
                                    duration: 0.3,
                                    onComplete: function () {
                                        let i = l[e];
                                        i.forEach((t) => {
                                            r.to(t, { opacity: 1, duration: 0.6 / i.length });
                                        }),
                                            r.fromTo(s[e], { opacity: 0 }, { opacity: 1, duration: 0.3 }).fromTo(u[e], { opacity: 0 }, { opacity: 1, duration: 0.3 }).to(t, { pointerEvents: 'all' });
                                    },
                                },
                                { width: '100%' }
                            ),
                    });
                });
        }
        if (null !== document.querySelector('.steps')) {
            const t = Wi.timeline({ scrollTrigger: { trigger: '.steps', start: 'top 80%', toggleActions: 'play pause resume play' } });
            let e = Array.from(Qs(document.querySelector('.steps__title-main')).querySelectorAll('.letter'));
            e.forEach((r) => {
                t.fromTo(r, { opacity: 0 }, { opacity: 1, duration: 1 / e.length });
            });
            const r = Array.from(document.querySelectorAll('.steps__accordion')),
                i = Array.from(document.querySelectorAll('.steps__title-inner')),
                n = Array.from(document.querySelectorAll('.steps__accordion .line-horizontal-bottom')),
                o = [];
            i.forEach((t) => {
                o.push(Array.from(Qs(t).querySelectorAll('.letter')));
            }),
                r.forEach((t, e) => {
                    let r = Wi.timeline(),
                        s = o[e],
                        a = Wi.timeline({
                            onStart: () => {
                                i[e].parentNode.classList.add('steps__title-after-visible');
                            },
                        });
                    s.forEach((t) => {
                        a.fromTo(t, { opacity: 0 }, { opacity: 1, duration: 1 / s.length });
                    }),
                        r.add(a),
                        Xs.create({ trigger: t, start: 'top 80%', toggleActions: 'play pause resume none', animation: r.fromTo(n[e], { width: 0 }, { width: '100%', duration: 1 }) });
                });
        }
        if (null !== document.querySelector('.faq')) {
            const t = Wi.timeline({ scrollTrigger: { trigger: '.faq', start: 'top 80%', toggleActions: 'play pause resume play' } });
            let e = Array.from(Qs(document.querySelector('.faq__title-main')).querySelectorAll('.letter'));
            e.forEach((r) => {
                t.fromTo(r, { opacity: 0 }, { opacity: 1, duration: 1 / e.length });
            });
            const r = Array.from(document.querySelectorAll('.faq__accordion')),
                i = Array.from(document.querySelectorAll('.faq__title-inner')),
                n = Array.from(document.querySelectorAll('.faq__title-number')),
                o = Array.from(document.querySelectorAll('.faq__icon')),
                s = Array.from(document.querySelectorAll('.faq__accordion .line-horizontal-bottom')),
                a = [];
            i.forEach((t) => {
                a.push(Array.from(Qs(t).querySelectorAll('.letter')));
            }),
                r.forEach((t, e) => {
                    let r = Wi.timeline();
                    r.fromTo(n[e], { opacity: 0 }, { opacity: 1, duration: 0.5 }), r.fromTo(o[e], { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.5');
                    let i = a[e],
                        l = Wi.timeline({});
                    i.forEach((t) => {
                        l.fromTo(t, { opacity: 0 }, { opacity: 1, duration: 1 / i.length });
                    }),
                        r.add(l),
                        Xs.create({ trigger: t, start: 'top 90%', toggleActions: 'play pause resume none', animation: r.fromTo(s[e], { width: 0 }, { width: '100%', duration: 1 }) });
                });
        }
        if (null !== document.querySelector('.feedback')) {
            const t = Wi.timeline({ scrollTrigger: { trigger: '.feedback', start: 'top 80%', toggleActions: 'play pause resume play' } }),
                e = document.querySelector('.feedback__side-left .line-horizontal-top'),
                r = document.querySelector('.feedback__side-right .line-horizontal-top'),
                i = document.querySelector('.feedback__side-left .line-vertical-right'),
                n = document.querySelector('.feedback__form');
            t.fromTo(e, { width: 0 }, { width: '100%', duration: 0.5 }), t.fromTo(i, { height: 0 }, { height: '100%', duration: 0.5 }, '-=0.5');
            let o = Array.from(Qs(document.querySelector('.feedback__title')).querySelectorAll('.letter'));
            o.forEach((e) => {
                t.fromTo(e, { opacity: 0 }, { opacity: 1, duration: 1 / o.length });
            }),
                t.fromTo(r, { width: 0 }, { width: '100%', duration: 0.5 }, '-=0.5'),
                (o = Array.from(Qs(document.querySelector('.feedback__subtitle')).querySelectorAll('.letter'))),
                o.forEach((e) => {
                    t.fromTo(e, { opacity: 0 }, { opacity: 1, duration: 1 / o.length });
                }),
                t.fromTo(n, { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
        }
        r(229), r(125), r(770), r(449), r(398), r(758);
        const Zs = () => {
                const e = document?.querySelectorAll('.fixed-block'),
                    r = (document.body, parseInt(t.bodyEl.dataset.position, 10));
                e.forEach((t) => {
                    t.style.paddingRight = '0px';
                }),
                    (t.bodyEl.style.paddingRight = '0px'),
                    (t.bodyEl.style.top = 'auto'),
                    t.bodyEl.classList.remove('dis-scroll'),
                    window.scroll({ top: r, left: 0 }),
                    t.bodyEl.removeAttribute('data-position'),
                    (t.htmlEl.style.scrollBehavior = 'smooth');
            },
            Ks = document.querySelector('.order'),
            Js = document.querySelector('.order__form'),
            ta = document.querySelector('.order__container'),
            ea = document.querySelector('.order__overlay'),
            ra = document.getElementById('backOrderForm'),
            ia = document.getElementById('openOrderForm'),
            na = document.getElementById('closeOrderForm');
        document.querySelector('.header'),
            null !== ia &&
                ia.addEventListener('click', () => {
                    Ks.classList.toggle('order-active'),
                        (() => {
                            const e = document?.querySelectorAll('.fixed-block'),
                                r = window.scrollY,
                                i = window.innerWidth - t.bodyEl.offsetWidth + 'px';
                            (t.htmlEl.style.scrollBehavior = 'none'),
                                e.forEach((t) => {
                                    t.style.paddingRight = i;
                                }),
                                (t.bodyEl.style.paddingRight = i),
                                t.bodyEl.classList.add('dis-scroll'),
                                (t.bodyEl.dataset.position = r),
                                (t.bodyEl.style.top = `-${r}px`);
                        })();
                }),
            null !== na &&
                na.addEventListener('click', () => {
                    Ks.classList.toggle('order-active'), Zs();
                }),
            null !== Ks &&
                Ks.addEventListener('click', () => {
                    Ks.classList.toggle('order-active'), ea.classList.remove('order__overlay-active'), Zs();
                }),
            null !== ta &&
                ta.addEventListener('click', (t) => {
                    t.stopPropagation();
                }),
            null !== Js &&
                Js.addEventListener('submit', (t) => {
                    t.preventDefault(), ea.classList.toggle('order__overlay-active');
                }),
            null !== ra &&
                ra.addEventListener('click', () => {
                    ea.classList.toggle('order__overlay-active');
                }),
            r(732),
            r(963);
    })();
})();
