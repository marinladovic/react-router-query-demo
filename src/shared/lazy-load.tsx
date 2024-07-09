import { ComponentProps, ComponentType, Suspense, lazy, useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- can be any type
type Props<T extends ComponentType<any>> = {
  loader: () => Promise<{
    default: T;
  }>;
} & ComponentProps<T>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- can be any type
function LazyLoad<T extends ComponentType<any>>({ loader, ...props }: Props<T>) {
  const LazyComponent = useMemo(() => lazy(loader), [loader]);

  return (
    <Suspense fallback={'Loading...'}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

export default LazyLoad;
