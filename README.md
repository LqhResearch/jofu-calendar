# @jofu/calendar

## Introduction

`@jofu/calendar` is a lightweight and customizable React component for selecting dates. Built with Tailwind CSS, it offers a seamless user experience with modern UI design and easy integration.

## Installation

Install the package using npm or yarn:

```sh
npm install @jofu/calendar@latest
```

or

```sh
yarn add @jofu/calendar@latest
```

## Usage

Here’s an example of how to use `JofuCalendar` in a React project:

```tsx
import React from 'react';
import JofuCalendar from '@jofu/calendar';
import '@jofu/calendar/style';

const App: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="mb-4 text-xl font-bold">Select a Date</h1>
            <JofuCalendar />
        </div>
    );
};

export default App;
```
