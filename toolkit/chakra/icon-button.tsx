import React from 'react';

import { Button, type ButtonProps } from './button';
import { Skeleton } from './skeleton';

export interface IconButtonProps extends ButtonProps {}

// TODO @tom2drum variants for icon buttons: prev-next, top-bar, copy-to-clipboard

export const IconButton = React.forwardRef<HTMLDivElement, IconButtonProps>(
  function IconButton(props, ref) {
    const { loading, size, variant = 'plain', ...rest } = props;

    return (
      <Skeleton loading={ loading } ref={ ref } asChild>
        <Button
          display="inline-flex"
          px="0"
          py="0"
          { ...(size ? { size } : { height: 'auto', minW: 'auto' }) }
          flexShrink="0"
          variant={ variant }
          { ...rest }
        />
      </Skeleton>
    );
  },
);
