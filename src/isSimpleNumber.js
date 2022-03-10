export function isSimpleNumber(n) {
  let result = false;
  let issimple = '';

  if (n <= 1 || n > 1000) {
      let invalid = 'Данные неверны';
      return invalid;
  }
  for (let i = 2; i <= n; i++) {
      if (i * i > n || result) {
          continue;
      }
      if (n % i !== 0) {
          continue;
      }
      result = true;
  }
  if (!result) {
    let simple = 'Число простое';
    issimple = simple;
  } else {
    let composite = 'Число составное';
    issimple = composite;
  }
  return issimple;
}