const mergeSort = () => {
  // Se o array for 0 ele esta ordernado e retorna!
  if (data.length <= 1) {
    return data;
  }

  // Utilziando a varriavel step para controlar o tamannho dos subarrays
  let step = 1;
  //Left, right irao manter os indices de inicio os subarrays
  let left, right;

  // Loop que ira continuar ate o step ser maior ou igual ao tamanho do array
  while (step < data.length) {
    left = 0;
    right = step;

    // loop para mesclar subarrays de tamanho step
    while (right + step <= data.length) {
      // funcao  para mesclar dois subarrays
      merge(data, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }

    // continuando mesclar ate que o right seja maior ou igual ao final do array
    if (right < data.length) {
      merge(data, left, left + step, right, data.length);
    }
    // dobrando a variavel para a proxima iteracao
    step *= 2;
  }

  return data;
};

// funcao para mescla dois subarrays ordenados em apenas um array ordenado
const merge = (data, leftStart, leftEnd, rightStart, rightEnd) => {
  // copia do subarray esquerdo
  let left = data.slice(leftStart, leftEnd);
  //   copia do subarray direito
  let right = data.slice(rightStart, rightEnd);

  //   variaveis usadas para percorrer as copias de subarrays declaradas acima
  let leftIndex = 0;
  let rightIndex = 0;
  let i = leftStart;

  while (leftIndex < left.length && rightIndex < right.length) {
    //Comparando elementos e colocando o menor no array original
    if (left[leftIndex] < right[rightIndex]) {
      data[i] = left[leftIndex];
      leftIndex++;
    } else {
      data[i] = right[rightIndex];
      rightIndex++;
    }
    i++;
  }

  //   Adicionando os elementos restantes da copia esquerda ao array original
  while (leftIndex < left.length) {
    data[i] = left[leftIndex];
    leftIndex++;
    i++;
  }

  //   Adicionando os elementos restantes da copia direita ao array original
  while (rightIndex < right.length) {
    data[i] = right[rightIndex];
    rightIndex++;
    i++;
  }
};

// Gerando array aleatorio.
const data = Array.from({ length: 2000 }, () =>
  Math.floor(Math.random() * 10000)
);

console.time("merge");

// executando a func
const sortedData = mergeSort(data);

console.timeEnd("merge");
console.log(sortedData);
