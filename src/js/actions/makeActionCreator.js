// https://github.com/reactjs/redux/blob/master/docs/recipes/ReducingBoilerplate.md#generating-action-creators
export default function makeActionCreator(type, ...argNames) {
  return function(...args) {
    const action = {type};
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}
