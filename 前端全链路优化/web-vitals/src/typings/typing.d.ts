// src/typings/typing.d.ts
type TracePerfRating = "good" | "needs improvement" | "poor";

type TracePerf = {
  id: string;
  LCP?: number;
  LCPRating?: TracePerfRating;
  FID?: number;
  FIDRating?: TracePerfRating;
  FCP?: number;
  FCPRating?: TracePerfRating;
  TTFB?: number;
  TTFBRating?: TracePerfRating;
  CLS?: number;
  CLSRating?: TracePerfRating;
  INP?: number;
  INPRating?: TracePerfRating;
};
