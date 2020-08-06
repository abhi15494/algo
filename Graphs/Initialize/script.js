//  Graph can be build via 2 ways 
// Adjency Matrix: It easy to vusialize but take more space as it  i.e. 2D Array or MATRIX
// Adjency List: Collection of nodes and each node have info of its neighbours

// DFS(Recursion) and BFS(LOOPING)
// Directed(Uncyclic) and Undirected(Cyclic)
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(' ');
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
];
const adjacencyList = new Map();

function addNode(airport) {
    adjacencyList.set(airport, [])
}

// Add edge, Undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacencyList)
// GREAT WE HAVE A GRAPH

// Now all we have to do is to understand Garph Search and Traversal
// Lets do DFS
console.log("%cLets do DFS", "font-size: 1rem; color: green;")
let stepsdfs = 0;
function dfs(start, end, visited = new Set()) {
    stepsdfs++;
    visited.add(start);

    if(start === "PHX") {
        console.log(start, "<--- JOURNEY STARTED FROM HERE");
    } else {
        console.log(start)
    }

    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {
        if(destination === end) {
            console.log(end, `<--- JOURNEY ENDED FROM HERE IN ${stepsdfs} steps`);
            return;
        }
        if(!visited.has(destination)) {
            dfs(destination, end, visited);
        }
    }

}

dfs("PHX", "BKK")
console.log("%cDFS DONE ", "font-size: 1rem; color: red;")

// Lets do BFS

console.log("%cLets do BFS", "font-size: 1rem; color: green;")
let stepsbfs = 0;
function bfs(start, end) {
    const queue = [start];
    const visited = new Set();
    visited.add(start);
    stepsbfs++;
    console.log(start, "<--- JOURNEY STARTED FROM HERE");

    while (queue.length > 0) {
        const airport = queue.shift(); // Mutates the queue by taking first element from array;
        const destinations = adjacencyList.get(airport);
        visited.add(start);
        for (const destination of destinations) {
            if (destination === end) {
                console.log(end, `<--- JOURNEY ENDED FROM HERE IN ${stepsdfs} steps`);
                break;
            }
            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
                if (destination !== end) {
                    console.log(destination);
                }
            }

        }
    }
};
bfs("PHX", "BKK");
console.log("%cBFS DONE", "font-size: 1rem; color: red;")
