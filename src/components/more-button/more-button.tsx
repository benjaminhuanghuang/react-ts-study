import { Button, Menu, Popover, Position } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import React from 'react';

export interface MoreButtonProps {
  children: React.ReactNode;
}

export const MoreButton = React.memo(function MoreButton(props: MoreButtonProps) {
  const { children } = props;

  let childCount = 0;
  // Sadly React.Children.count does not ignore nulls correctly
  React.Children.forEach(children, child => {
    if (child) childCount++;
  });

  return (
    <Popover
      className="more-button"
      content={<Menu>{children}</Menu>}
      position={Position.BOTTOM_LEFT}
    >
      <Button icon={IconNames.MORE} disabled={!childCount} />
    </Popover>
  );
});
