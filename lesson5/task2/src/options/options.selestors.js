export const optionsListSelector = (state) => {
  return state.options.optionsList;
};

export const selectedOptionsSelector = (state) => {
  const allOptionsList = state.options.optionsList;
  const selectedIds = state.options.seleted;
  return allOptionsList.filter((option) => selectedIds.includes(option.id));
};

export const availableOptionsSelector = (state) => {
  const allOptionsList = state.options.optionsList;
  const selectedIds = state.options.seleted;
  return allOptionsList.filter((option) => !selectedIds.includes(option.id));
};
