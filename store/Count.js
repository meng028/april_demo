class Count{
    constructor(init){
        this.init = init;
    }
    increase(){
        this.init ++;
    }
    getCurrentCount(){
        return this.init;
    }
    reduce(){
        this.init --;
    }

}
module.exports.count = new Count(0);