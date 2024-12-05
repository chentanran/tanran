// src/baseTrace.ts
import { onVitals } from "./core/webvitals";

export class BaseTrace implements BaseTraceInterface {
  // 初始化实例
  public static init(options: TraceOptions): BaseTrace {
    const traceSdk = new BaseTrace(options);

    // 监听页面性能
    onVitals(traceSdk.createPerfReport());

    window.traceSdk = traceSdk;
    return traceSdk;
  }
}
