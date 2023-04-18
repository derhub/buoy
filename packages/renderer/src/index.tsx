import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import ElectronVersions from '@/features/ElectronVersions';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ElectronVersions />
  </React.StrictMode>,
);
