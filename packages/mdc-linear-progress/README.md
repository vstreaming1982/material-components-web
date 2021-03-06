<!--docs:
title: "Linear Progress"
layout: detail
section: components
excerpt: "Material Design-styled linear progress indicators."
iconId: linear-progress
path: /catalog/linear-progress/
-->

# Linear Progress

<!--<div class="article__asset">
  <a class="article__asset-link"
     href="https://material-components-web.appspot.com/linear-progress.html">
  </a>
</div>-->

The MDC Linear Progress component is a spec-aligned linear progress indicator component adhering to the
[Material Design progress & activity requirements](https://material.io/guidelines/components/progress-activity.html).

## Design & API Documentation

<div role="progressbar" class="mdc-linear-progress">
  <div class="mdc-linear-progress__buffering-dots"></div>
  <div class="mdc-linear-progress__buffer"></div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
</div>

## Installation

```
npm install --save @material/linear-progress
```

## Usage

### CSS Modifiers

The provided modifiers are:

| Class                 | Description                                             |
| --------------------- | ------------------------------------------------------- |
| `mdc-linear-progress--indeterminate`   | Puts the linear progress indicator in an indeterminate state. |
| `mdc-linear-progress--reversed`  | Reverses the direction of the linear progress indicator.   |
| `mdc-linear-progress--accent` | Colors the button with the accent color. |

### Using the Foundation Class

MDC Linear Progress ships with an `MDCLinearProgressFoundation` class that external frameworks and libraries can
use to integrate the component. As with all foundation classes, an adapter object must be provided.
The adapter for temporary drawers must provide the following functions, with correct signatures:

| Method Signature | Description |
| --- | --- |
| `addClass(className: string) => void` | Adds a class to the root element. |
| `removeClass(className: string) => void` | Removes a class from the root element. |
| `hasClass(className: string) => boolean` | Returns boolean indicating whether the root element has a given class. |
| `getPrimaryBar() => Element` | Returns the primary bar element. |
| `getBuffer() => Element` | Returns the buffer element. |
| `setTransform(el: Element, value: string) => void` | Sets the css transform property on the given element. |

### MDCLinearProgress API

MDC Linear Progress exposes the following methods:

| Method Signature | Description |
| --- | --- |
| `set determinate(value: boolean) => void` | Toggles the components between the determinate and indeterminate state. |
| `set progress(value: number) => void` | Sets the progress bar to this value. Value should be between [0, 1]. |
| `set buffer(value: number) => void` | Sets the buffer bar to this value. Value should be between [0, 1]. |
| `set reverse(value: boolean) => void` | Reverses the direction of the linear progress indicator. |
| `open() => void` | Puts the component in the open state. |
| `close() => void` | Puts the component in the closed state. |
