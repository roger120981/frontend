import { Heading, HStack, Link, VStack } from '@chakra-ui/react';
import React from 'react';

import { Button } from 'toolkit/chakra/button';
import { useColorMode } from 'toolkit/chakra/color-mode';
import { ProgressCircleRing, ProgressCircleRoot } from 'toolkit/chakra/progress-circle';
import { Skeleton } from 'toolkit/chakra/skeleton';
import { Switch } from 'toolkit/chakra/switch';
import { Tooltip } from 'toolkit/chakra/tooltip';
import ContentLoader from 'ui/shared/ContentLoader';
import PageTitle from 'ui/shared/Page/PageTitle';

const ChakraShowcases = () => {
  const colorMode = useColorMode();

  return (
    <>
      <PageTitle title="Chakra UI Showcase"/>
      <Switch onCheckedChange={ colorMode.toggleColorMode } checked={ colorMode.colorMode === 'dark' } mb={ 4 }>
        Color mode: { colorMode.colorMode }
      </Switch>

      <VStack align="flex-start" gap={ 6 }>
        <section>
          <Heading textStyle="heading.md" mb={ 2 }>Buttons</Heading>
          <HStack gap={ 4 } flexWrap="wrap">
            <Button>Solid</Button>
            <Button visual="outline">Outline</Button>
            <Button visual="dropdown">Dropdown</Button>
            <Button visual="dropdown" selected>Dropdown selected</Button>
            <Button visual="header">Header</Button>
            <Button visual="header" selected>Header selected</Button>
            <Button visual="header" selected highlighted>Header highlighted</Button>
          </HStack>
        </section>

        <section>
          <Heading textStyle="heading.md" mb={ 2 }>Links</Heading>
          <HStack gap={ 4 }>
            <Link>Primary</Link>
            <Link visual="secondary">Secondary</Link>
            <Link visual="subtle">Subtle</Link>
          </HStack>
        </section>

        <section>
          <Heading textStyle="heading.md" mb={ 2 }>Tooltips</Heading>
          <HStack gap={ 4 }>
            <Tooltip content="Tooltip content">
              <span>Default</span>
            </Tooltip>
            <Tooltip content="Tooltip content" visual="navigation">
              <span>Navigation</span>
            </Tooltip>
          </HStack>
        </section>

        <section>
          <Heading textStyle="heading.md" mb={ 2 }>Progress Circle</Heading>
          <HStack gap={ 4 }>
            <ProgressCircleRoot
              value={ 45 }
              colorPalette="blue"
            >
              <ProgressCircleRing/>
            </ProgressCircleRoot>
          </HStack>
        </section>

        { /* TODO @tom2drum check skeleton styles */ }
        <section>
          <Heading textStyle="heading.md" mb={ 2 }>Skeleton & Loaders</Heading>
          <HStack gap={ 4 }>
            <Skeleton loading>
              <span>Skeleton</span>
            </Skeleton>
            <ContentLoader/>
          </HStack>
        </section>
      </VStack>
    </>
  );
};

export default React.memo(ChakraShowcases);
