export const columnOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

export const comparisonOptions = ['maior que', 'menor que', 'igual a'];

export const INITIAL_NUM_FILTER = {
  column: 'population',
  comparison: 'maior que',
  value: 0 };

export function filterComparisonNumber(filter, planet) {
  const { name, ...rest } = planet;

  const nameContains = name.toLowerCase()
    .includes(filter.filterByName.name.toLowerCase());

  let comparisonValue = true;
  filter.filterByNumericValues.forEach((fil) => {
    const { column, comparison, value } = fil;
    const valuePlanet = rest[column];
    if (valuePlanet === 'unknown') comparisonValue = false;
    else if (comparison === 'igual a') {
      comparisonValue = comparisonValue && Number(valuePlanet) === Number(value);
    } else if (comparison === 'maior que') {
      comparisonValue = comparisonValue && Number(valuePlanet) > Number(value);
    } else if (comparison === 'menor que') {
      comparisonValue = comparisonValue && Number(valuePlanet) < Number(value);
    }
  });

  return comparisonValue && nameContains;
}
