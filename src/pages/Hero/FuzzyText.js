import { useEffect, useRef } from "react";

const FuzzyText = ({ children, fontSize = "clamp(2rem, 8vw, 8rem)", fontWeight = 900, fontFamily = "inherit", color = "#fff", enableHover = true, baseIntensity = .14, hoverIntensity = .38, fuzzRange = 9, fps = 30, direction = "horizontal", transitionDuration = 8, glitchMode = false, glitchInterval = 2200, glitchDuration = 180, className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext("2d");
    if (!context) return undefined;
    let frame;
    let cancelled = false;
    let hovering = false;
    let glitching = false;
    let intensity = baseIntensity;
    let lastFrame = 0;
    const text = String(children);
    const source = document.createElement("canvas");
    const sourceContext = source.getContext("2d");
    const computedFont = window.getComputedStyle(canvas);
    const size = typeof fontSize === "number" ? fontSize : parseFloat(computedFont.fontSize) || 78;
    const family = fontFamily === "inherit" ? computedFont.fontFamily : fontFamily;
    const font = `${fontWeight} ${size}px ${family}`;
    sourceContext.font = font;
    sourceContext.textBaseline = "top";
    const width = Math.ceil(sourceContext.measureText(text).width) + fuzzRange * 2 + 8;
    const height = Math.ceil(size * 1.2) + fuzzRange * 2;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    source.width = width * ratio;
    source.height = height * ratio;
    sourceContext.scale(ratio, ratio);
    sourceContext.font = font;
    sourceContext.textBaseline = "top";
    sourceContext.fillStyle = color;
    sourceContext.fillText(text, fuzzRange + 4, fuzzRange);
    context.scale(ratio, ratio);
    const draw = (time) => {
      if (cancelled) return;
      frame = requestAnimationFrame(draw);
      if (time - lastFrame < 1000 / fps) return;
      lastFrame = time;
      const target = glitching ? 1 : hovering ? hoverIntensity : baseIntensity;
      intensity += (target - intensity) / Math.max(1, transitionDuration);
      context.clearRect(0, 0, width, height);
      if (direction === "vertical") {
        for (let x = 0; x < width; x += 1) context.drawImage(source, x * ratio, 0, ratio, height * ratio, x + (Math.random() - .5) * fuzzRange * intensity, 0, 1, height);
      } else {
        for (let y = 0; y < height; y += 1) context.drawImage(source, 0, y * ratio, width * ratio, ratio, (Math.random() - .5) * fuzzRange * intensity, y, width, 1);
      }
    };
    let glitchIntervalTimer;
    let glitchTimeout;
    if (glitchMode) {
      const triggerGlitch = () => {
        glitching = true;
        glitchTimeout = window.setTimeout(() => { glitching = false; }, glitchDuration);
      };
      glitchIntervalTimer = window.setInterval(triggerGlitch, glitchInterval);
    }
    const onMove = (event) => { if (enableHover) hovering = event.offsetX >= 0 && event.offsetY >= 0; };
    const onLeave = () => { hovering = false; };
    if (enableHover) { canvas.addEventListener("mousemove", onMove); canvas.addEventListener("mouseleave", onLeave); }
    frame = requestAnimationFrame(draw);
    return () => { cancelled = true; cancelAnimationFrame(frame); window.clearInterval(glitchIntervalTimer); window.clearTimeout(glitchTimeout); if (enableHover) { canvas.removeEventListener("mousemove", onMove); canvas.removeEventListener("mouseleave", onLeave); } };
  }, [children, color, direction, enableHover, fontFamily, fontSize, fontWeight, fps, baseIntensity, hoverIntensity, fuzzRange, transitionDuration, glitchMode, glitchInterval, glitchDuration]);

  return <canvas ref={canvasRef} className={className} aria-label={String(children)} role="img" />;
};

export default FuzzyText;
