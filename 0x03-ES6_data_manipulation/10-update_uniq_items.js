// Function that returns an updated map for all items
// with initial quantity at 1.

export default function updateUniqueItems (_map) {
	if (!(_map instanceof Map)) throw Error('Cannot process');
	_map.forEach((x, y) => {
	  if (x === 1) _map.set(y, 100);
	});
  
	return _map;
  }
