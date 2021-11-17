const Increase = (state = 0, action) => {


    switch (action.type) {


        case "changeIncrease":
            return state + 1;

        case "changedecrese":
            return state - 1;

        case "zero":
            return 0;
            
            
        default:
            return state;
    }

}

export default Increase;