import { createSelector } from 'reselect';
import { selectRandom } from 'lib/resultMessages';

import { name } from './constants';

export const loading = state => state[name].loading;

const rawClassifyResult = state => state[name].classifyResult;

export const classifyResult = createSelector(
  rawClassifyResult,
  (raw) => {
    if (raw) {
      return raw.classes.map(
        e => ({
          label: e.label.print_name.replace('_', ' '),
          probability: e.probability,
        })
      ).sort(
        (a, b) => (a.probability - b.probability)
      ).reverse();
    }

    return null;
  }
);

export const confidenceSelector = createSelector(
  classifyResult,
  (res) => {
    if (!res) return null;

    const leadScore = res[0].probability * 100;
    const leadGap = ((res[0].probability * 100) - (res[1].probability * 100));
    const pairScore = ((res[0].probability * 100) + (res[1].probability * 100));

    if (leadGap < 10) {
      // 2 answeres
      if (pairScore > 30) {
        // indifferent2
        return {
          confidence: 'indifferent',
          response: selectRandom('indifferent2')
            .replace('#P0#', `<strong>${res[0].label}</strong>`)
            .replace('#P1#', `<strong>${res[1].label}</strong>`),
        };
      }
      // unsure2
      return {
        confidence: 'unsure',
        response: selectRandom('unsure2')
          .replace('#P0#', `<strong>${res[0].label}</strong>`)
          .replace('#P1#', `<strong>${res[1].label}</strong>`),
      };
    }

    // single answer
    if (leadScore > 50) {
      // confident
      return {
        confidence: 'confident',
        response: selectRandom('confident')
          .replace('#P0#', `<strong>${res[0].label}</strong>`),
      };
    }
    if (leadScore > 30) {
      // indifferent
      return {
        confidence: 'indifferent',
        response: selectRandom('indifferent')
          .replace('#P0#', `<strong>${res[0].label}</strong>`),
      };
    }
    // unsure
    return {
      confidence: 'unsure',
      response: selectRandom('unsure')
        .replace('#P0#', `<strong>${res[0].label}</strong>`),
    };
  }
);
