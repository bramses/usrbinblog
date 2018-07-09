
/* 
https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
https://www.w3schools.com/JS/js_object_constructors.asp
http://2ality.com/2015/02/es6-classes-final.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

*/

const default_points_required = 10
const default_points = 1

class Problem {
    // a constructor is whats called after an object is made
    // here we used defaults to set our variables
    constructor (value = '', points = default_points, { solved = false,  solution = '', problems = [] } = {}) {
        this.value = value;
        this.solved = solved;
        this.points = points;
        this.solution = solution;
        this.problems = problems;
    }

    // append a problem to the list
    add_problem (problem) {
        this.problems.push(problem);
    } 

    // solve your problem!
    solve () {
        this.solved = true;
    }
  
    // is our problem solved?
    isSolved () {
        return this.solved;
    }
}

// list of our problems starting with the smallest first
const small_problem_1 = new Problem('ez mode', 25, {solution: 'Put on my left shoe'});
const small_problem_2 = new Problem('also ez', 25, {solution: 'Take a deep breath in'});
const medium_problem_1 = new Problem('This is still too hard', 50, {problems: [small_problem_1, small_problem_2]});
const medium_problem_2 = new Problem('I agree, I\'d rather not be solved', 50, {problems: [small_problem_1, small_problem_2]});
const big_problem = new Problem('WE\'VE GOT A BIG PROBLEM', 100, {problems: [medium_problem_1, medium_problem_2]});


// solve our problems from the bottom up!
small_problem_1.solve();
console.log(`Small problem 1 solved?: ${small_problem_1.isSolved()}`);


