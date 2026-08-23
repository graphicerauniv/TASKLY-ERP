interface TasklyWindow extends Window {
  __TASKLY_CONFIG__?: { apiBaseUrl?: string; appName?: string };
}
const runtime = (window as TasklyWindow).__TASKLY_CONFIG__;
export const API_BASE_URL = runtime?.apiBaseUrl || '/api/v1';
export const APP_NAME = runtime?.appName || 'Taskly ERP';
