import { versions } from '#preload';
import React from 'react';

function ElectronVersions() {
  return (
    <div>
      <hr />
      <table className="table-auto">
        <tbody>
          {Object.entries(versions).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <code>packages/renderer/src/features/ElectronVersions.tsx</code>
      <hr />
    </div>
  );
}

export default ElectronVersions;
