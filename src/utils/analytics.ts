/**
 * @file analytics.ts
 * @author Cerror
 * @description 百度统计工具类，根据环境变量动态加载
 * @created 2025-01-20
 * @updated 2025-01-20
 */

// 声明百度统计全局变量
declare global {
  interface Window {
    _hmt: any[];
    hm: HTMLScriptElement;
  }
}

/**
 * 百度统计配置接口
 */
interface BaiduAnalyticsConfig {
  id: string;
  enabled: boolean;
}

/**
 * 百度统计管理类
 * 提供统计代码的动态加载和事件跟踪功能
 */
class BaiduAnalytics {
  private config: BaiduAnalyticsConfig;
  private isLoaded: boolean = false;

  constructor(config: BaiduAnalyticsConfig) {
    this.config = config;
  }

  /**
   * 初始化百度统计
   * 根据配置决定是否加载统计代码
   */
  public init(): void {
    if (!this.config.enabled || !this.config.id || this.isLoaded) {
      return;
    }

    try {
      this.loadBaiduScript();
      this.isLoaded = true;
    } catch (error) {
      console.error('百度统计加载失败:', error);
    }
  }

  /**
   * 加载百度统计脚本
   * 动态插入统计代码到页面
   */
  private loadBaiduScript(): void {
    // 初始化_hmt数组
    window._hmt = window._hmt || [];
    
    // 创建script标签
    const hm = document.createElement('script');
    hm.src = `https://hm.baidu.com/hm.js?${this.config.id}`;
    hm.async = true;
    
    // 添加错误处理
    hm.onerror = () => {
      console.error('百度统计脚本加载失败');
    };
    
    // 插入到head标签
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(hm, firstScript);
    } else {
      document.head.appendChild(hm);
    }
  }

  /**
   * 跟踪页面访问
   * @param url - 页面URL，默认为当前页面
   */
  public trackPageView(url?: string): void {
    if (!this.isLoaded || !window._hmt) {
      return;
    }

    try {
      const trackUrl = url || window.location.pathname;
      window._hmt.push(['_trackPageview', trackUrl]);
    } catch (error) {
      console.error('页面访问跟踪失败:', error);
    }
  }

  /**
   * 跟踪自定义事件
   * @param category - 事件类别
   * @param action - 事件动作
   * @param label - 事件标签（可选）
   * @param value - 事件值（可选）
   */
  public trackEvent(category: string, action: string, label?: string, value?: number): void {
    if (!this.isLoaded || !window._hmt) {
      return;
    }

    try {
      const eventData: any[] = ['_trackEvent', category, action];
      if (label) eventData.push(label);
      if (value !== undefined) eventData.push(value.toString());
      
      window._hmt.push(eventData);
    } catch (error) {
      console.error('事件跟踪失败:', error);
    }
  }

  /**
   * 检查统计是否已启用
   */
  public isEnabled(): boolean {
    return this.config.enabled && this.isLoaded;
  }
}

// 获取环境变量配置
const getAnalyticsConfig = (): BaiduAnalyticsConfig => {
  const id = import.meta.env.VITE_BAIDU_ANALYTICS_ID || '';
  const enabled = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';
  const isDev = import.meta.env.DEV;
  
  return {
    id,
    enabled: enabled && !isDev && !!id, // 开发环境强制禁用
  };
};

// 创建全局实例
export const analytics = new BaiduAnalytics(getAnalyticsConfig());

// 导出类型和实用方法
export type { BaiduAnalyticsConfig };
export default analytics; 