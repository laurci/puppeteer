/**
 * Copyright 2020 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Connection as BiDiConnection} from '../common/bidi/Connection.js';
import {Connection} from '../common/Connection.js';
import {Product} from '../common/Product.js';
import {BrowserWebSocketTransport} from '../puppeteer-core.js';
import {LaunchOptions} from './LaunchOptions.js';

/**
 * @internal
 */
export class BrowserRunner {
  proc?: any;
  connection?: Connection;

  constructor(
    _product: Product,
    _executablePath: string,
    _processArguments: string[],
    _userDataDir: string,
    _isTempUserDataDir?: boolean
  ) {
    // do nothing
  }

  start(_options: LaunchOptions): void {
    // do nothing
  }

  async close(): Promise<void> {
    // do nothing
  }

  kill(): void {
    // do nothing
  }

  async setupWebDriverBiDiConnection(options: {
    timeout: number;
    slowMo: number;
    preferredRevision: string;
  }): Promise<BiDiConnection> {
    const {slowMo} = options;
    let browserWSEndpoint = 'ws://';

    browserWSEndpoint += '/session';
    const transport = await BrowserWebSocketTransport.create(browserWSEndpoint);
    return new BiDiConnection(transport, slowMo);
  }

  async setupConnection(_options: {
    usePipe?: boolean;
    timeout: number;
    slowMo: number;
    preferredRevision: string;
  }): Promise<Connection> {
    return this.connection!;
  }
}
