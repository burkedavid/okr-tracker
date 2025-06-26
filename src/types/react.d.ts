declare module 'react' {
  export * from 'react/index';
  
  // React Hooks
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: ReadonlyArray<any>): void;
  
  // Event types
  export interface FormEvent<T = Element> extends SyntheticEvent<T> {
    // Adding a dummy property to avoid empty interface ESLint error
    _reactFormEventBrand?: any;
  }
  export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: T & EventTarget;
  }
  export interface SyntheticEvent<T = Element, E = Event> {
    nativeEvent: E;
    currentTarget: T;
    target: EventTarget & T;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    preventDefault(): void;
    isDefaultPrevented(): boolean;
    stopPropagation(): void;
    isPropagationStopped(): boolean;
    persist(): void;
    timeStamp: number;
    type: string;
  }
}

// JSX namespace to fix JSX element errors
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
