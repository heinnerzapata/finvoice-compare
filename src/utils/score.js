const getXs = (obj, getX) => Object.keys(obj).map((key) => getX(obj, key));

const getPctSameXs = (getX, filter) => (objA, objB) =>
  ((filter ? filter(getXs(objB, getX)) : getXs(objB, getX)).reduce(
    (numSame, x) => (getXs(objA, getX).indexOf(x) > -1 ? numSame + 1 : numSame),
    0
  ) /
    Object.keys(objA).length) *
  100;

export const pctSameProps = getPctSameXs((obj, key) =>
  JSON.stringify({ [key]: obj[key] })
);
