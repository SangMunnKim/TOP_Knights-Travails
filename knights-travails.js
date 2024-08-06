
//Uses breadth-first-search in order to find the nearest node (coordinate) that  matches the given desired end coordinate.

class KnightsTravails{
    constructor(start, end) {
        if (!this.validSquare(start) || !this.validSquare(end)) {
            throw new Error('Not valid starting or ending squares');
        };
        
        this.knightsMove(start, end);
    }

    knightsMove(start, end) {
        
    }

    validSquare(square) {
        const x = square[0];
        const y = square[1];
    
        if (x < 0 || x > 7) return false;
        if (y < 0 || y > 7) return false;
    
        return true;
    }

    arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }

    nextStep(square) {
        const steps = [
            [2, 1], [1, 2], [-1, 2], [-2, 1],
            [-2, -1], [-1, -2], [1, -2], [2, -1]
        ];

        let possibleNextSteps = [];

        for (let step in steps) {
            const nextStep = [square[0] + step[0], square[1] + step[1]];

            if (this.validSquare(nextStep)) {
                possibleNextSteps.push(nextStep);
            }
        }   
    }
}
    

    
