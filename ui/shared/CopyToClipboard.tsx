import { chakra } from '@chakra-ui/react';
import React from 'react';

import type { IconButtonProps } from 'toolkit/chakra/icon-button';
import { IconButton } from 'toolkit/chakra/icon-button';
import { Tooltip } from 'toolkit/chakra/tooltip';
import useClipboard from 'toolkit/hooks/useClipboard';
import IconSvg from 'ui/shared/IconSvg';

export interface Props extends Omit<IconButtonProps, 'type' | 'loading'> {
  text: string;
  type?: 'link' | 'text' | 'share';
  isLoading?: boolean;
}

const CopyToClipboard = (props: Props) => {
  const { text, type = 'text', isLoading, onClick, boxSize = 5, ...rest } = props;

  const { hasCopied, copy, disclosure } = useClipboard(text);

  const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    copy();
    onClick?.(event);
  }, [ onClick, copy ]);

  const tooltipContent = (() => {
    if (hasCopied) {
      return 'Copied';
    }

    if (type === 'link') {
      return 'Copy link to clipboard';
    }

    return 'Copy to clipboard';
  })();

  const iconName = (() => {
    switch (type) {
      case 'link':
        return 'link';
      case 'share':
        return 'share';
      default:
        return 'copy';
    }
  })();

  return (
    <Tooltip
      content={ tooltipContent }
      contentProps={{ zIndex: 'tooltip2' }}
      open={ disclosure.open }
      onOpenChange={ disclosure.onOpenChange }
    >
      <IconButton
        aria-label="copy"
        boxSize={ boxSize }
        onClick={ handleClick }
        ml={ 2 }
        borderRadius="sm"
        loading={ isLoading }
        color="icon.info"
        _hover={{ color: 'link.primary.hover' }}
        { ...rest }
      >
        <IconSvg name={ iconName } boxSize="full"/>
      </IconButton>
    </Tooltip>
  );
};

export default React.memo(chakra(CopyToClipboard));
