/*
Links used:
https://stackoverflow.com/questions/33535879/how-to-run-typescript-files-from-command-line#33536053
https://stackoverflow.com/questions/18640153/typescript-default-parameters-on-class-with-interface#18640693

*/

interface _Problem {
    val: string;
    points: number;
    problems?: Problem[]; // class of problem
    solution?: string | undefined | null;
    solved?: boolean;
}

interface _Reward {
    val: String;
    pointsNeeded: number;
}

class Problem {
    problem: _Problem;

    constructor (problem: _Problem) { 
        this.problem = problem;
    }

    
}

const p = new Problem({val: 'Write this blog', points: 100, problems: [
    new Problem({
        val: 'Choose a title',
        points: 50,
    })
]});

console.log(JSON.stringify(p));