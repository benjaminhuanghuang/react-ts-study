import { Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { MoreButton, Loader, TextField, PokemonSearch} from './components';
import { AppToaster } from './singletons/toaster';

import { Capabilities } from './utils/capabilities';

export interface ConsoleApplicationProps {
  exampleManifestsUrl?: string;
}

export interface ConsoleApplicationState {
  capabilities: Capabilities;
  capabilitiesLoading: boolean;
}

export class App extends React.PureComponent<ConsoleApplicationProps, ConsoleApplicationState> {
  render(): JSX.Element {
    return (
      <div className="loading-capabilities">
        {/* <Loader loadingText="" loading /> */}
        {/* <TextField text='Hell' person={{firstName:'', lastName:''}}/> */}
        <PokemonSearch name="John" numberOfPokemons={5}/>
      </div>
    );
  }
}