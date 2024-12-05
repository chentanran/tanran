// src/core/webvitals.ts

export function mapMetric(metric) {
  const isWebVital =
    ["FCP", "TTFB", "LCP", "CLS", "FID"].indexOf(metric.name) !== -1;
  return {
    [metric.name]: isWebVital
      ? round(metric.value, metric.name === "CLS" ? 4 : 0)
      : metric.value,
    [`${metric.name}Rating`]: metric.rating,
  };
}

export const onVitals = (saveMetric) => {
  onLCP(saveMetric)
  onFID(saveMetric)
  onCLS(saveMetric)
  onTTFB(saveMetric)
  onINP(saveMetric)
  onFCP(saveMetric)
}