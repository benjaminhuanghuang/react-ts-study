import { AnchorButton, Button, Classes, Dialog, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import React from 'react';

import { ExternalLink } from '../../components';
import {
  COMMUNITY,
  DEVELOPER_GROUP,
  USER_GROUP,
  WEBSITE,
} from '../../variables';

export interface AboutDialogProps {
  onClose: () => void;
}

export const AboutDialog = React.memo(function AboutDialog(props: AboutDialogProps) {
  const { onClose } = props;

  return (
    <Dialog
      className="about-dialog"
      icon={IconNames.GRAPH}
      onClose={onClose}
      title="Apache Druid"
      isOpen
      canEscapeKeyClose
    >
      <div className={Classes.DIALOG_BODY}>
        <p>
          <strong>
            Apache Druid (incubating) is a high performance real-time analytics database.
          </strong>
        </p>
        <p>
          For help and support with Druid, please refer to the{' '}
          <ExternalLink href={COMMUNITY}>community page</ExternalLink> and the{' '}
          <ExternalLink href={USER_GROUP}>user groups</ExternalLink>.
        </p>
        <p>
          Druid is made with ❤️ by a community of passionate developers. To contribute, join in the
          discussion on the{' '}
          <ExternalLink href={DEVELOPER_GROUP}>developer group</ExternalLink>.
        </p>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button onClick={onClose}>Close</Button>
          <AnchorButton intent={Intent.PRIMARY} href={WEBSITE} target="_blank">
            Visit Druid
          </AnchorButton>
        </div>
      </div>
    </Dialog>
  );
});