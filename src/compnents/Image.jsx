import React from 'react';

export default function Image({
  src,
  alt = '',
  width,
  height,
  fill,
  style,
  className,
  ...rest
}) {
  const computedStyle = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: style?.objectFit || 'cover', ...style }
    : style;

  return (
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      style={computedStyle}
      {...rest}
    />
  );
}
