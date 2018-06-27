/* 
https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
https://www.w3schools.com/JS/js_object_constructors.asp
http://2ality.com/2015/02/es6-classes-final.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

*/

const default_points_required = 10
const default_points = 1

class Problem {
    constructor (value = '', points = default_points, { solved = false,  solution = '', problems = [] } = {}) {
        this.value = value;
        this.solved = solved;
        this.points = points;
        this.solution = solution;
        this.problems = problems;
    }

    add_problem (problem) {
        this.problems.push(problem);
    } 

    solve (rewards) {
        this.solved = true;
    }

    
}

const p1 = new Problem('a problem', 2, {solution: 'do it'});
p1.solve([]);

