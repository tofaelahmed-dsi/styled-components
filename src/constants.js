// @flow

declare var __DEV__: ?string;

export const SC_ATTR = (typeof process !== 'undefined' && process.env.SC_ATTR) || 'data-styled';

export const SC_VERSION_ATTR = 'data-styled-version';

export const SC_STREAM_ATTR = 'data-styled-streamed';

export const IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

export const DISABLE_SPEEDY =
  (typeof __DEV__ === 'boolean' && __DEV__) || process.env.NODE_ENV !== 'production';

// Shared empty execution context when generating static styles
export const STATIC_EXECUTION_CONTEXT = {};
