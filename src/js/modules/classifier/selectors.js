
import { createSelector } from 'reselect';

import { name } from './constants';

export const loading = state => state[name].loading;

const rawClassifyResult = state => state[name].classifyResult;

export const classifyResult = createSelector(
  rawClassifyResult,
  (raw) => {
    if (raw) {
      return raw.classes.map(
        e => ({
          label: e.label.print_name,
          probability: e.probability,
        })
      );
    }

    return null;
  }
);
