const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

function runBFS() {
    let start = document.getElementById("start").value;
    let goal = document.getElementById("goal").value;

    let queue = [[start]];
    let visited = [];

    while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];

        if (!visited.includes(node)) {
            visited.push(node);

            if (node === goal) {
                document.getElementById("result").innerText =
                    "BFS Path: " + path.join(" → ") +
                    "\nNodes Explored: " + visited.join(", ");
                return;
            }

            for (let neighbor of graph[node]) {
                let newPath = [...path, neighbor];
                queue.push(newPath);
            }
        }
    }
}

function runDFS() {
    let start = document.getElementById("start").value;
    let goal = document.getElementById("goal").value;

    let stack = [[start]];
    let visited = [];

    while (stack.length > 0) {
        let path = stack.pop();
        let node = path[path.length - 1];

        if (!visited.includes(node)) {
            visited.push(node);

            if (node === goal) {
                document.getElementById("result").innerText =
                    "DFS Path: " + path.join(" → ") +
                    "\nNodes Explored: " + visited.join(", ");
                return;
            }

            for (let neighbor of graph[node]) {
                let newPath = [...path, neighbor];
                stack.push(newPath);
            }
        }
    }
}
