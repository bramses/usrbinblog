
class Reward {
    constructor (points_required = default_points_required, value = '', points_accrued = 0) {
        this.points_required = points_required;
        this.value = value;
        this.points_accrued = points_accrued;
    }

    reset_points () {
        this.points_accrued = 0;
    }

    add_points (points) {        
        this.points_accrued += points;
    }

    check_prize_status () {
        if (this.points_accrued >= this.points_required) {
            console.log(`YES! ${this.value}`);
        } else {
            console.log(`Reward: ${this.value} :: Points Needed: ${this.points_required - this.points_accrued}`)
        }
    }
    

    toString () {
        return '(' + this.points_required + ' : ' + this.value + ')';
    }
}
