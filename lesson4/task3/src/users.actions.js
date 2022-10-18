export const NEXT_PAGE = "PAGINATION/NEXT";
export const PREV_PAGE = "PAGINATION/PREV";

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};
