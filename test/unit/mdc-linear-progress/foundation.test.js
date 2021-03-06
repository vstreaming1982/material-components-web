/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {assert} from 'chai';
import td from 'testdouble';

import {setupFoundationTest} from '../helpers/setup';
import {verifyDefaultAdapter} from '../helpers/foundation';
import MDCLinearProgressFoundation from '../../../packages/mdc-linear-progress/foundation';

const {cssClasses} = MDCLinearProgressFoundation;

suite('MDCLinearProgressFoundation');

test('exports strings', () => {
  assert.isOk('strings' in MDCLinearProgressFoundation);
});

test('exports cssClasses', () => {
  assert.isOk('cssClasses' in MDCLinearProgressFoundation);
});

test('defaultAdapter returns a complete adapter implementation', () => {
  verifyDefaultAdapter(MDCLinearProgressFoundation, [
    'addClass', 'getPrimaryBar', 'getBuffer', 'hasClass', 'removeClass', 'setStyle',
  ]);
});

const setupTest = () => setupFoundationTest(MDCLinearProgressFoundation);

test('#set indeterminate adds class and resets transforms', () => {
  const {foundation, mockAdapter} = setupTest();
  td.when(mockAdapter.hasClass(cssClasses.INDETERMINATE_CLASS)).thenReturn(false);
  const primaryBar = {};
  td.when(mockAdapter.getPrimaryBar()).thenReturn(primaryBar);
  const buffer = {};
  td.when(mockAdapter.getBuffer()).thenReturn(buffer);
  foundation.init();
  foundation.determinate = false;
  td.verify(mockAdapter.addClass(cssClasses.INDETERMINATE_CLASS));
  td.verify(mockAdapter.setStyle(primaryBar, 'transform', 'scaleX(1)'));
  td.verify(mockAdapter.setStyle(buffer, 'transform', 'scaleX(1)'));
});

test('#set determinate removes class', () => {
  const {foundation, mockAdapter} = setupTest();
  td.when(mockAdapter.hasClass(cssClasses.INDETERMINATE_CLASS)).thenReturn(false);
  foundation.init();
  foundation.determinate = true;
  td.verify(mockAdapter.removeClass(cssClasses.INDETERMINATE_CLASS));
});

test('#set progress sets transform', () => {
  const {foundation, mockAdapter} = setupTest();
  td.when(mockAdapter.hasClass(cssClasses.INDETERMINATE_CLASS)).thenReturn(false);
  const primaryBar = {};
  td.when(mockAdapter.getPrimaryBar()).thenReturn(primaryBar);
  foundation.init();
  foundation.progress = 0.5;
  td.verify(mockAdapter.setStyle(primaryBar, 'transform', 'scaleX(0.5)'));
});

test('#set progress on indeterminate does nothing', () => {
  const {foundation, mockAdapter} = setupTest();
  td.when(mockAdapter.hasClass(cssClasses.INDETERMINATE_CLASS)).thenReturn(true);
  const primaryBar = {};
  td.when(mockAdapter.getPrimaryBar()).thenReturn(primaryBar);
  foundation.init();
  foundation.progress = 0.5;
  td.verify(mockAdapter.setStyle(), {times: 0, ignoreExtraArgs: true});
});

test('#set buffer sets transform', () => {
  const {foundation, mockAdapter} = setupTest();
  td.when(mockAdapter.hasClass(cssClasses.INDETERMINATE_CLASS)).thenReturn(false);
  const buffer = {};
  td.when(mockAdapter.getBuffer()).thenReturn(buffer);
  foundation.init();
  foundation.buffer = 0.5;
  td.verify(mockAdapter.setStyle(buffer, 'transform', 'scaleX(0.5)'));
});

test('#set buffer on indeterminate does nothing', () => {
  const {foundation, mockAdapter} = setupTest();
  td.when(mockAdapter.hasClass(cssClasses.INDETERMINATE_CLASS)).thenReturn(true);
  const buffer = {};
  td.when(mockAdapter.getBuffer()).thenReturn(buffer);
  foundation.init();
  foundation.buffer = 0.5;
  td.verify(mockAdapter.setStyle(), {times: 0, ignoreExtraArgs: true});
});

test('#set reverse adds class', () => {
  const {foundation, mockAdapter} = setupTest();
  td.when(mockAdapter.hasClass(cssClasses.REVERSED_CLASS)).thenReturn(false);
  foundation.init();
  foundation.reverse = true;
  td.verify(mockAdapter.addClass(cssClasses.REVERSED_CLASS));
});

test('#set not reverse removes class', () => {
  const {foundation, mockAdapter} = setupTest();
  td.when(mockAdapter.hasClass(cssClasses.REVERSED_CLASS)).thenReturn(true);
  foundation.init();
  foundation.reverse = false;
  td.verify(mockAdapter.removeClass(cssClasses.REVERSED_CLASS));
});

test('#open removes class', () => {
  const {foundation, mockAdapter} = setupTest();
  td.when(mockAdapter.hasClass(cssClasses.REVERSED_CLASS)).thenReturn(true);
  foundation.init();
  foundation.open();
  td.verify(mockAdapter.removeClass(cssClasses.CLOSED_CLASS));
});

test('#close adds class', () => {
  const {foundation, mockAdapter} = setupTest();
  td.when(mockAdapter.hasClass(cssClasses.REVERSED_CLASS)).thenReturn(true);
  foundation.init();
  foundation.close();
  td.verify(mockAdapter.addClass(cssClasses.CLOSED_CLASS));
});
