(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/hero/background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.4_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.4_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$InertiaPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/InertiaPlugin.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$InertiaPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InertiaPlugin"]);
const throttle = (func, limit)=>{
    let lastCall = 0;
    return function(...args) {
        const now = performance.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
};
function hexToRgb(hex) {
    const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return {
        r: 0,
        g: 0,
        b: 0
    };
    return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16)
    };
}
const DotGrid = ({ dotSize = 16, gap = 32, baseColor = '#5227FF', activeColor = '#5227FF', proximity = 150, speedTrigger = 100, shockRadius = 250, shockStrength = 5, maxSpeed = 5000, resistance = 750, returnDuration = 1.5, className = '', style })=>{
    _s();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dotsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pointerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        speed: 0,
        lastTime: 0,
        lastX: 0,
        lastY: 0
    });
    const baseRgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DotGrid.useMemo[baseRgb]": ()=>hexToRgb(baseColor)
    }["DotGrid.useMemo[baseRgb]"], [
        baseColor
    ]);
    const activeRgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DotGrid.useMemo[activeRgb]": ()=>hexToRgb(activeColor)
    }["DotGrid.useMemo[activeRgb]"], [
        activeColor
    ]);
    const circlePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DotGrid.useMemo[circlePath]": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !window.Path2D) return null;
            const p = new Path2D();
            p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
            return p;
        }
    }["DotGrid.useMemo[circlePath]"], [
        dotSize
    ]);
    const buildGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DotGrid.useCallback[buildGrid]": ()=>{
            const wrap = wrapperRef.current;
            const canvas = canvasRef.current;
            if (!wrap || !canvas) return;
            const { width, height } = wrap.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            const ctx = canvas.getContext('2d');
            if (ctx) ctx.scale(dpr, dpr);
            const cols = Math.floor((width + gap) / (dotSize + gap));
            const rows = Math.floor((height + gap) / (dotSize + gap));
            const cell = dotSize + gap;
            const gridW = cell * cols - gap;
            const gridH = cell * rows - gap;
            const extraX = width - gridW;
            const extraY = height - gridH;
            const startX = extraX / 2 + dotSize / 2;
            const startY = extraY / 2 + dotSize / 2;
            const dots = [];
            for(let y = 0; y < rows; y++){
                for(let x = 0; x < cols; x++){
                    const cx = startX + x * cell;
                    const cy = startY + y * cell;
                    dots.push({
                        cx,
                        cy,
                        xOffset: 0,
                        yOffset: 0,
                        _inertiaApplied: false
                    });
                }
            }
            dotsRef.current = dots;
        }
    }["DotGrid.useCallback[buildGrid]"], [
        dotSize,
        gap
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DotGrid.useEffect": ()=>{
            if (!circlePath) return;
            let rafId;
            const proxSq = proximity * proximity;
            const draw = {
                "DotGrid.useEffect.draw": ()=>{
                    const canvas = canvasRef.current;
                    if (!canvas) return;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    const { x: px, y: py } = pointerRef.current;
                    for (const dot of dotsRef.current){
                        const ox = dot.cx + dot.xOffset;
                        const oy = dot.cy + dot.yOffset;
                        const dx = dot.cx - px;
                        const dy = dot.cy - py;
                        const dsq = dx * dx + dy * dy;
                        let style = baseColor;
                        if (dsq <= proxSq) {
                            const dist = Math.sqrt(dsq);
                            const t = 1 - dist / proximity;
                            const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
                            const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
                            const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
                            style = `rgb(${r},${g},${b})`;
                        }
                        ctx.save();
                        ctx.translate(ox, oy);
                        ctx.fillStyle = style;
                        ctx.fill(circlePath);
                        ctx.restore();
                    }
                    rafId = requestAnimationFrame(draw);
                }
            }["DotGrid.useEffect.draw"];
            draw();
            return ({
                "DotGrid.useEffect": ()=>cancelAnimationFrame(rafId)
            })["DotGrid.useEffect"];
        }
    }["DotGrid.useEffect"], [
        proximity,
        baseColor,
        activeRgb,
        baseRgb,
        circlePath
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DotGrid.useEffect": ()=>{
            buildGrid();
            let ro = null;
            if ('ResizeObserver' in window) {
                ro = new ResizeObserver(buildGrid);
                wrapperRef.current && ro.observe(wrapperRef.current);
            } else {
                window.addEventListener('resize', buildGrid);
            }
            return ({
                "DotGrid.useEffect": ()=>{
                    if (ro) ro.disconnect();
                    else window.removeEventListener('resize', buildGrid);
                }
            })["DotGrid.useEffect"];
        }
    }["DotGrid.useEffect"], [
        buildGrid
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DotGrid.useEffect": ()=>{
            const onMove = {
                "DotGrid.useEffect.onMove": (e)=>{
                    const now = performance.now();
                    const pr = pointerRef.current;
                    const dt = pr.lastTime ? now - pr.lastTime : 16;
                    const dx = e.clientX - pr.lastX;
                    const dy = e.clientY - pr.lastY;
                    let vx = dx / dt * 1000;
                    let vy = dy / dt * 1000;
                    let speed = Math.hypot(vx, vy);
                    if (speed > maxSpeed) {
                        const scale = maxSpeed / speed;
                        vx *= scale;
                        vy *= scale;
                        speed = maxSpeed;
                    }
                    pr.lastTime = now;
                    pr.lastX = e.clientX;
                    pr.lastY = e.clientY;
                    pr.vx = vx;
                    pr.vy = vy;
                    pr.speed = speed;
                    const rect = canvasRef.current.getBoundingClientRect();
                    pr.x = e.clientX - rect.left;
                    pr.y = e.clientY - rect.top;
                    for (const dot of dotsRef.current){
                        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
                        if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
                            dot._inertiaApplied = true;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(dot);
                            const pushX = dot.cx - pr.x + vx * 0.005;
                            const pushY = dot.cy - pr.y + vy * 0.005;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                                inertia: {
                                    xOffset: pushX,
                                    yOffset: pushY,
                                    resistance
                                },
                                onComplete: {
                                    "DotGrid.useEffect.onMove": ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                                            xOffset: 0,
                                            yOffset: 0,
                                            duration: returnDuration,
                                            ease: 'elastic.out(1,0.75)'
                                        });
                                        dot._inertiaApplied = false;
                                    }
                                }["DotGrid.useEffect.onMove"]
                            });
                        }
                    }
                }
            }["DotGrid.useEffect.onMove"];
            const onClick = {
                "DotGrid.useEffect.onClick": (e)=>{
                    const rect = canvasRef.current.getBoundingClientRect();
                    const cx = e.clientX - rect.left;
                    const cy = e.clientY - rect.top;
                    for (const dot of dotsRef.current){
                        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
                        if (dist < shockRadius && !dot._inertiaApplied) {
                            dot._inertiaApplied = true;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(dot);
                            const falloff = Math.max(0, 1 - dist / shockRadius);
                            const pushX = (dot.cx - cx) * shockStrength * falloff;
                            const pushY = (dot.cy - cy) * shockStrength * falloff;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                                inertia: {
                                    xOffset: pushX,
                                    yOffset: pushY,
                                    resistance
                                },
                                onComplete: {
                                    "DotGrid.useEffect.onClick": ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                                            xOffset: 0,
                                            yOffset: 0,
                                            duration: returnDuration,
                                            ease: 'elastic.out(1,0.75)'
                                        });
                                        dot._inertiaApplied = false;
                                    }
                                }["DotGrid.useEffect.onClick"]
                            });
                        }
                    }
                }
            }["DotGrid.useEffect.onClick"];
            const throttledMove = throttle(onMove, 50);
            window.addEventListener('mousemove', throttledMove, {
                passive: true
            });
            window.addEventListener('click', onClick);
            return ({
                "DotGrid.useEffect": ()=>{
                    window.removeEventListener('mousemove', throttledMove);
                    window.removeEventListener('click', onClick);
                }
            })["DotGrid.useEffect"];
        }
    }["DotGrid.useEffect"], [
        maxSpeed,
        speedTrigger,
        proximity,
        resistance,
        returnDuration,
        shockRadius,
        shockStrength
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `dot-grid ${className}`,
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: wrapperRef,
            className: "dot-grid__wrap",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$4_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "dot-grid__canvas"
            }, void 0, false, {
                fileName: "[project]/components/hero/background.tsx",
                lineNumber: 286,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/hero/background.tsx",
            lineNumber: 285,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/hero/background.tsx",
        lineNumber: 284,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DotGrid, "mFjE+zUQAMVe1ll5A3lc0VjRvtk=");
_c = DotGrid;
const __TURBOPACK__default__export__ = DotGrid;
var _c;
__turbopack_context__.k.register(_c, "DotGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_hero_background_tsx_0j68y1o._.js.map