import React from 'react';
import Portfolio from './Mainsection/portfolio';
import ContextProv from './Mainsection/hooks/Context';

export default function Main() {
  return (
    <ContextProv>
      <Portfolio />
    </ContextProv>
  );
}
