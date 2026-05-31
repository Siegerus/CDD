// Минммальный и максимальный элемент в массиве
// Линейный поиск

// const nums = [9, 1, 3, 5, 7, -2];
function findMin(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}

console.log(findMin(nums)); // {min: -2, max: 9}

// Бинарный поиск. Работает только с упорядоченным массивом
const nums2 = [12, 20, 44, 53, 130, 461, 286, 565, 721, 911];

// Суть в том, что если target > чем элемент(число) посередине, то target находится справа и начинать поиск можно с середины в правую сторону  
// else if (midElement < target) start = mid + 1;
// Если target < чем элемент(число) посередине меньше, то, соответственно, target - слева и можно двигаться от мида влево
// else end = mid - 1 (наинаем двигаться влево от энда, который будет равен mid, пока энд не станет равен start, т.е. 0)
function bynarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    const midElement = arr[mid];

    if (midElement === target) return midElement;
    else if (midElement < target) start = mid + 1;
    else end = mid - 1;
  }
}
console.log(bynarySearch(nums2, 44)); //

//Алгоритм сортировки
function toSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let firstIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[firstIndex]) {
        firstIndex = j;
      }
    }
    if (firstIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[firstIndex];
      arr[firstIndex] = temp;
    }
  }
  return arr;
}
console.log(toSort(nums));

// Пузырьковая сортировка
const numbs = [5, 12, 1, 8, 42, -3, 0];

function bubleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}
console.log(bubleSort(numbs)); // (7) [-3, 0, 1, 5, 8, 12, 42]

// Быстрая сортировка (сортировка Хоара) с созданием массивов
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const pivot = arr[mid];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === mid) continue;

    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
console.log(quickSort(numbs)); // (7) [-3, 0, 1, 5, 8, 12, 42]

// Быстрая сортировка (сортировка Хоара) с созданием указателей (более оптимален).
function partition(arr, left, right) {
  const mid = Math.floor((left + right) / 2);
  const pivot = arr[mid];
  let i = left - 1;
  let j = right + 1;

  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);

    if (i >= j) return j;

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function quickSortPointers(arr, left = 0, right = arr.length - 1) {
  // debugger;
  if (left >= right) return;

  const pivotIndex = partition(arr, left, right);
  quickSortPointers(arr, left, pivotIndex);
  quickSortPointers(arr, pivotIndex + 1, right);
  return arr;
}
console.log(quickSortPointers(numbs)); // [-3, 0, 1, 5, 8, 12, 42]

// Граф
const graf = {
  a: ["a", "c"],
  b: ["e"],
  c: ["d", "f"],
  d: ["e"],
  e: ["g"],
  f: ["e"],
  g: [],
};

// Алгоритм обхода графа в ширину
function bfsInWidh(graf, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();

    for (let neighbour of graf[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
  return visited;
}
console.log(bfsInWidh(graf, "a")); // Set(6) {'a', 'c', 'd', 'f', 'e', …}

// Алгоритм обхода графа в глубину
function bfsInDeep(graf, start) {
  debugger;
  const visited = new Set();
  const stack = [start];

  while (stack.length > 0) {
    const node = stack.pop();
    if (visited.has(node)) return;
    visited.add(node);

    for (let neighbour of graf[node]) {
      if (!visited.has(neighbour)) {
        stack.push(neighbour);
      }
    }
  }
  return visited;
}
console.log(bfsInDeep(graf, "a")); // Set(6) {'a', 'c', 'f', 'e', 'g', …}

// Алгоритм обхода графа в глубину рекурсией
function bfsInDeepRecourse(graf, start, visited = new Set()) {
  if (visited.has(start)) return;

  visited.add(start);

  for (let neighbour of graf[start]) {
    bfsRecourse(graf, neighbour, visited);
  }
  return visited;
}
console.log(bfsInDeepRecourse(graf, "a")); // Set(6) {'a', 'c', 'f', 'e', 'g', …}

// Кратчайший путь в графе. Алгоритм Дейкстры
const weightGraf = {
  a: { b: 3, c: 1 },
  b: { e: 6 },
  c: { d: 2, f: 9 },
  d: { e: 3 },
  e: { g: 4 },
  f: { e: 12 },
  g: {},
};

function dijkstra(graf, start) {
  // debugger;
  const distances = {};
  const visited = new Set();
  const prev = {};

  for (const vertex in graf) {
    distances[vertex] = Infinity;
    prev[vertex] = null;
  }

  distances[start] = 0;

  while (visited.size < Object.keys(weightGraf).length) {
    let closesTVertex = null;
    let smallestDist = Infinity;

    for (let vertex in distances) {
      if (!visited.has(vertex) && distances[vertex] < smallestDist) {
        smallestDist = distances[vertex];
        closesTVertex = vertex;
      }
    }
    if (closesTVertex === null) break;
    visited.add(closesTVertex);

    for (let neighbour in graf[closesTVertex]) {
      const weight = graf[closesTVertex][neighbour];
      const newWeight = distances[closesTVertex] + weight;

      if (newWeight < distances[neighbour]) {
        distances[neighbour] = newWeight;
        prev[neighbour] = closesTVertex;
      }
    }
  }
  return { distances, prev };
}
console.log(dijkstra(weightGraf, "a")); // distances: {a: 0, b: 3, c: 1, d: 3, e: 6, …} prev:  {a: null, b: 'a', c: 'a', d: 'c', e: 'd', …}

// Бинарное дерево
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  printVisual(node = this.root, prefix = "", isLeft = true) {
    if (!node) return;

    // Правое поддерево печатаем первым (чтобы в консоли дерево выглядело "вертикально")
    if (node.right) {
      this.printVisual(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }

    // Текущий узел
    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

    // Левое поддерево
    if (node.left) {
      this.printVisual(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(11);
tree.insert(4);
tree.search(3);
tree.printVisual();

//  Дерево N размера. Обход
const expectedSum = 59;
const treee = [
  {
    value: 5,
    children: [
      {
        value: 4,
        children: [
          { value: 7, children: [] },
          { value: 11, children: [{ value: 5, children: [] }] },
        ],
      },
      {
        value: 3,
        children: [{ value: 4, children: [] }],
      },
      {
        value: 7,
        children: [
          { value: 1, children: [] },
          { value: 12, children: [] },
        ],
      },
    ],
  },
];

// Рекурсия
function recursive(tree) {
  let sum = 0;
  if (!tree.length) {
    return sum;
  }

  for (const node of tree) {
    sum += node.value;
    sum += recursive(node.children);
  }

  return sum;
}

// Итерация
function iterative(tree) {
  // debugger;
  let sum = 0;
  const stack = [...tree];

  while (stack.length) {
    const node = stack.pop();
    sum += node.value;
    stack.push(...node.children);
  }

  return sum;
}

console.log(iterative(tree));
console.log(recursive(tree));

// Хэш таблицы
// Дан массив чисел nums и целевое значение target.
// Нужно найти индексы двух чисел, которые в сумме дают target.
const nums = [9, 1, 3, 5, 7, 2];

// o(n^2) - 1000 эл - 1 000 000 итераций
function numsSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}

// O(n) - 1000 - 1000 итераций
function numsSumToo(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    // 1. Каждую итерацию находим, что останется от target, если отнять от неё элемент массива.
    const diff = target - arr[i];

    if (map.has(diff)) {
      // 3. Если среди коллекции есть diff, то останется к нему добавить и сам элемент arr[i].
      // Суммой этих 2х чисел и есть наш target. Возвращаем индексы этих двух чисел
      return [map.get(diff), i];
    }
    // 2. Записываем индекс каждого элемента массива в коллекцию. Эелемент - ключ, индекс - значение.
    map.set(arr[i], i);
  }
}

console.log(numsSumToo(nums, 11)); // [0, 5]

// Алгоритим перестановки
function permutations(arr) {
  const result = [];

  function backtrack(start = 0) {
    if (start === arr.length - 1) {
      result.push([...arr]);
      return;
    }

    // start - фиксируем позицию. (a,b,c - элемент а фиксируем, остальные перебираем. Потом b фиксируем и т.д)
    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]]; // обмен местами
      backtrack(start + 1); // рекурсивно работаем со следующей позицией
      [arr[start], arr[i]] = [arr[i], arr[start]]; // возвращаем назад, чтобы не было наложений перестановок
    }
  }

  backtrack();
  return result;
}
// console.log(permutations(['a', 'b', 'c', 'd']));
// 0: (4) ['a', 'b', 'c', 'd']
// 1: (4) ['a', 'b', 'd', 'c']
// 2: (4) ['a', 'c', 'b', 'd']
// 3: (4) ['a', 'c', 'd', 'b']
// 4: (4) ['a', 'd', 'c', 'b']
// ...............

// Алгоритим сочитания
function combinations(arr, k) {
  const result = [];

  function backtrack(start = 0, current = []) {
    if (current.length === k) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack();
  return result;
}

// console.log(combinations(['a', 'b', 'c', 'd'], 2));
// 0: (2) ['a', 'b']
// 1: (2) ['a', 'c']
// 2: (2) ['a', 'd']
// 3: (2) ['b', 'c']
// 4: (2) ['b', 'd']
// 5: (2) ['c', 'd']

// Размещения
// Ф-ция нахождения факториала
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
// Сама ф-ция размещения
function arrangements(n, k) {
  debugger;
  return factorial(n) / factorial(n - k);
}

const permutationsCount = factorial(5);
console.log(arrangements(5, 3)); // 60
