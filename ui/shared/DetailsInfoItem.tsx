import { chakra, GridItem, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { Skeleton } from 'toolkit/chakra/skeleton';
import * as ContainerWithScrollY from 'ui/shared/ContainerWithScrollY';
import Hint from 'ui/shared/Hint';

const LabelScrollText = () => (
  <Text fontWeight={ 500 } color="text.secondary" fontSize="xs" className="note" textAlign="right">
    Scroll to see more
  </Text>
);

interface LabelProps {
  hint?: React.ReactNode;
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  id?: string;
  hasScroll?: boolean;
}

const Label = chakra(({ hint, children, isLoading, id, className, hasScroll }: LabelProps) => {
  return (
    <GridItem
      id={ id }
      className={ className }
      py={ 1 }
      textStyle="md"
      _notFirst={{ mt: { base: 3, lg: 0 } }}
    >
      <Flex columnGap={ 2 } alignItems="flex-start">
        { hint && <Hint label={ hint } isLoading={ isLoading } my={{ lg: '2px' }}/> }
        <Skeleton loading={ isLoading } fontWeight={{ base: 700, lg: 500 }}>
          { children }
          { hasScroll && <LabelScrollText/> }
        </Skeleton>
      </Flex>
    </GridItem>
  );
});

interface ValueProps {
  children: React.ReactNode;
  className?: string;
}

const Value = chakra(({ children, className }: ValueProps) => {
  return (
    <GridItem
      className={ className }
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      rowGap={ 3 }
      pl={{ base: 7, lg: 0 }}
      py={ 1 }
      textStyle="md"
      whiteSpace="nowrap"
    >
      { children }
    </GridItem>
  );
});

const ValueWithScroll = chakra(({ children, gradientHeight, onScrollVisibilityChange, className }: ContainerWithScrollY.Props) => {
  return (
    <Value position="relative">
      <ContainerWithScrollY.default
        className={ className }
        gradientHeight={ gradientHeight }
        onScrollVisibilityChange={ onScrollVisibilityChange }
      >
        { children }
      </ContainerWithScrollY.default>
    </Value>
  );
});

export {
  Label,
  Value,
  ValueWithScroll,
};
