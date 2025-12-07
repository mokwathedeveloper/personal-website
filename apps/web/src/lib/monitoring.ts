type MetricType = 'counter' | 'histogram' | 'gauge';

interface Metric {
  name: string;
  type: MetricType;
  value: number;
  tags?: Record<string, string>;
  timestamp?: number;
}

class Monitoring {
  private metrics: Metric[] = [];
  private isProduction = process.env.NODE_ENV === 'production';

  track(
    name: string,
    type: MetricType,
    value: number,
    tags?: Record<string, string>
  ) {
    const metric: Metric = {
      name,
      type,
      value,
      tags,
      timestamp: Date.now(),
    };

    this.metrics.push(metric);

    if (this.isProduction) {
      this.sendToAnalytics(metric);
    } else {
      console.log('📊 Metric:', metric);
    }
  }

  trackPageView(page: string) {
    this.track('page_view', 'counter', 1, { page });
  }

  trackError(error: Error, context?: Record<string, unknown>) {
    this.track('error', 'counter', 1, {
      message: error.message,
      stack: error.stack ? error.stack.substring(0, 500) : '',
      ...context,
    });
  }

  trackPerformance(name: string, duration: number) {
    this.track('performance', 'histogram', duration, { metric: name });
  }

  trackUserAction(action: string, category: string) {
    this.track('user_action', 'counter', 1, { action, category });
  }

  private sendToAnalytics(metric: Metric) {
    // In production, send to your analytics service
    // Example: Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (
        window as unknown as {
          gtag: (
            event: string,
            name: string,
            params: Record<string, unknown>
          ) => void;
        }
      ).gtag('event', metric.name, {
        event_category: metric.type,
        value: metric.value,
        custom_map: metric.tags,
      });
    }
  }

  getMetrics() {
    return this.metrics;
  }

  clearMetrics() {
    this.metrics = [];
  }
}

export const monitoring = new Monitoring();
