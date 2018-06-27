/*
Links used:
https://stackoverflow.com/questions/33535879/how-to-run-typescript-files-from-command-line#33536053
https://stackoverflow.com/questions/18640153/typescript-default-parameters-on-class-with-interface#18640693
https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
https://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories-on-rebase
https://stackoverflow.com/questions/29820791/git-ignore-node-modules-folder-everywhere
https://medium.com/@chris_72272/migrating-to-typescript-write-a-declaration-file-for-a-third-party-npm-module-b1f75808ed2
https://github.com/Microsoft/TypeScript/issues/9539
https://stackoverflow.com/questions/48224858/import-require-nodejs-modules-without-types-in-typescript-in-2018
https://github.com/ananthakumaran/tide/issues/37

*/

import * as chalk from 'chalk';
import * as clear from 'clear';

interface _Problem {
    val: string; // value of the problem
    points: number; // how many points is the problem worth
    problems?: Problem[]; // class of problems
    solution?: string; // what can we do to solve this problem
    solved?: boolean; // has the problem been solved
}

interface _Reward {
    val: String;
    pointsNeeded: number;
}

class Reward {
    constructor () { }
}

class Problem {
    problem: _Problem;
    
    constructor (problem: _Problem) { 
        this.problem = problem;
        this.problem.solved = false;
        
    }


    solve () : number {
        this.problem.solved = true;
        return this.problem.points;
    }

    isSolved() : boolean {
        if (!this.problem.solved) { // shorthand for checking if the solved property exists on our problem
            return false;
        }
        return this.problem.solved;
    }

    addProblem(problem: Problem): boolean {
        if (!this.problem.problems) { // if problems arent defined init them into a list
            this.problem.problems = [];
        }
        this.problem.problems.push(problem);
        return true;
    }

    
}

const overallProblem = new Problem({val: 'Write this blog', points: 100});

console.log(JSON.stringify(overallProblem));