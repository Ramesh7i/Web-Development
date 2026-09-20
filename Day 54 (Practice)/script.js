let rand = Math.random()
        let first, sec, third;
        //first word
        if(rand<0.33){
            first = "Meow"
        }
        else if(rand<0.66 && rand>=0.33) {
            first= "Broo"
        }
        else{
            first = "Food"
        }
        //sec word
        rand = Math.random()
        if(rand<0.33){
            sec = "Nothing"
        }
        else if(rand<0.66 && rand>=0.33) {
            sec= "What that"
        }
        else{
            sec = "Its me"
        }

        //third word
        rand = Math.random()
        if(rand<0.33){
            third = "Nothing"
        }
        else if(rand<0.66 && rand>=0.33) {
            third= "What that"
        }
        else{
            third = "Its me"
        }

        console.log(`${first} ${sec} ${third}`)