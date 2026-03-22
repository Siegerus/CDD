//Алгоритм сортировки
function toSort(arr) {
  // debugger;
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
