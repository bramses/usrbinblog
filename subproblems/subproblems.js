"use strict";
/*
Links used:
https://stackoverflow.com/questions/33535879/how-to-run-typescript-files-from-command-line#33536053
https://stackoverflow.com/questions/18640153/typescript-default-parameters-on-class-with-interface#18640693
https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
https://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories-on-rebase
https://stackoverflow.com/questions/29820791/git-ignore-node-modules-folder-everywhere
https://medium.com/@chris_72272/migrating-to-typescript-write-a-declaration-file-for-a-third-party-npm-module-b1f75808ed2
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Reward = /** @class */ (function () {
    function Reward() {
    }
    return Reward;
}());
var Problem = /** @class */ (function () {
    function Problem(problem) {
        this.problem = problem;
        this.problem.solved = false;
    }
    Problem.prototype.solve = function () {
        this.problem.solved = true;
        return this.problem.points;
    };
    Problem.prototype.isSolved = function () {
        if (!this.problem.solved) {
            return false;
        }
        return this.problem.solved;
    };
    Problem.prototype.addProblem = function (problem) {
        if (!this.problem.problems) {
            this.problem.problems = [];
        }
        this.problem.problems.push(problem);
        return true;
    };
    return Problem;
}());
var overallProblem = new Problem({ val: 'Write this blog', points: 100 });
console.log(JSON.stringify(overallProblem));
