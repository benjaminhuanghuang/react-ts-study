import React, { ReactNode } from 'react';

export interface ExternalLinkProps {
  href: string;
  children?: ReactNode;
}

export const ExternalLink = React.memo(function ExternalLink(props: ExternalLinkProps) {
  const { href, children } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
});
