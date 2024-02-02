const Utils = {
    isNegZero(n) {
      const num = Number(n);
      return num === 0 && 1 / num === -Infinity;
    },
    calculateNumber(type, a, b = 0) {
      let num_a = Number(a);
      let num_b = Number(b);
  
      if (Number.isNaN(num_a) || Number.isNaN(num_b))
        throw TypeError('Parameters must be numbers or able to coerce to number');
  
      num_a = Math.round(num_a);
      num_b = Math.round(num_b);
  
      let quotient;
  
      switch (type) {
        case 'SUM':
          return num_a + num_b;
        case 'SUBTRACT':
          return num_a - num_b;
        case 'DIVIDE':
          if (num_b === 0) return 'ERROR';
          quotient = num_a / num_b;
          return this.isNegZero(quotient) ? 0 : quotient;
        default:
          throw Error(
            'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
          );
      }
    }
  };
  
  module.exports = Utils;
