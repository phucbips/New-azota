import React from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

const serializeError = (error: any) => {
  if (error instanceof Error) {
    return error.message + (error.stack ? '\n' + error.stack : '');
  }
  return JSON.stringify(error, null, 2);
};

function isDynamicImportError(error: any): boolean {
  const msg = error instanceof Error ? error.message : String(error ?? '');
  return (
    msg.includes('Failed to fetch dynamically imported module') ||
    msg.includes('Importing a module script failed') ||
    msg.includes('error loading dynamically imported module') ||
    msg.includes('Unable to preload CSS') ||
    msg.includes('Loading chunk')
  );
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: any }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any) {
    if (isDynamicImportError(error)) {
      try {
        const key = 'azota_eb_chunk_reload_ts';
        const lastReload = Number(sessionStorage.getItem(key) || '0');
        const now = Date.now();
        if (now - lastReload > 15000) {
          sessionStorage.setItem(key, String(now));
          window.location.reload();
        }
      } catch {
        // Ignore storage errors
      }
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const isChunkErr = isDynamicImportError(this.state.error);
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6 text-foreground">
          <div className="w-full max-w-md rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-destructive/10 text-destructive">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground">
                  {isChunkErr ? 'Hệ thống vừa được cập nhật phiên bản mới' : 'Đã xảy ra lỗi khi tải trang'}
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {isChunkErr
                    ? 'Trình duyệt đang giữ bản lưu cũ. Vui lòng tải lại trang để đồng bộ phiên bản mới nhất.'
                    : 'Một sự cố không mong muốn đã xảy ra. Vui lòng tải lại trang.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Tải lại trang ngay
              </button>
            </div>

            <details className="text-xs text-muted-foreground border-t border-border pt-3">
              <summary className="cursor-pointer select-none font-medium hover:text-foreground">
                Chi tiết kỹ thuật
              </summary>
              <pre className="mt-2 max-h-40 overflow-auto rounded bg-muted p-2.5 text-[11px] font-mono text-foreground whitespace-pre-wrap break-all">
                {serializeError(this.state.error)}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
