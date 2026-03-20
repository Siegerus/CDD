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
  // debugger;
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
