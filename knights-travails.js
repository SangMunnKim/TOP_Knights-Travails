class KnightsTravails {
    constructor(start, end) {
        if (!this.validSquare(start) || !this.validSquare(end)) {
            throw new Error('Not valid starting or ending squares');
        }
        
        this.path = this.knightsMove(start, end);
    }

    knightsMove(start, end) {
        const queue = [];
        const visited = new Set();
        visited.add(start.toString());

        queue.push({
            position: start,
            path: [start]
        });

        while (queue.length > 0) {
            const { position: currentPos, path: currentPath } = queue.shift();

            if (this.arraysEqual(currentPos, end)) {
                this.path = currentPath;
                return currentPath;
            }

            const nextSteps = this.nextStep(currentPos);

            for (let nextPos of nextSteps) {
                if (!visited.has(nextPos.toString())) {
                    visited.add(nextPos.toString());
                    queue.push({
                        position: nextPos,
                        path: currentPath.concat([nextPos])
                    });
                }
            }
        }
        this.path = null;
        return null;
    }

    validSquare(square) {
        const x = square[0];
        const y = square[1];
    
        return x >= 0 && x <= 7 && y >= 0 && y <= 7;
    }

    arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    nextStep(square) {
        const steps = [
            [2, 1], [1, 2], [-1, 2], [-2, 1],
            [-2, -1], [-1, -2], [1, -2], [2, -1]
        ];

        let possibleNextSteps = [];

        for (let step of steps) {
            const nextStep = [square[0] + step[0], square[1] + step[1]];

            if (this.validSquare(nextStep)) {
                possibleNextSteps.push(nextStep);
            }
        }

        return possibleNextSteps;
    }
}

// Example usage
const kt = new KnightsTravails([0, 0], [3, 3]);
console.log(kt.path);  

kt.knightsMove([0,0],[7,7]);
console.log(kt.path);  
