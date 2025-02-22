# @jofu/calendar

## Introduction

`@jofu/calendar` is a simple React component that provides a beautiful and easy-to-use date picker. Designed with Tailwind CSS, it offers a smooth user experience and flexible customization.

## Installation

You can install this package using npm or yarn:

```sh
npm install @jofu/calendar
```

or

```sh
yarn add @jofu/calendar
```

## Usage

Here’s how to use `JofuCalendar` in a React project:

```tsx
import React from 'react';
import { JofuCalendar } from '@jofu/calendar';
import '@jofu/calendar/style.css';

const App: React.FC = () => {
    return (
        <div>
            <h1>Select a Date</h1>
            <JofuCalendar />
        </div>
    );
};

export default App;
```
