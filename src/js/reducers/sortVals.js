import * as actionConst from '../actions/action-constants';

function sortVals(state = 'HIGHEST_SCORE', action) {
  switch (action.type) {
    case actionConst.SORT_VALUES:
      return action.value;

    default:
      return state;
  }
}

export default sortVals;
