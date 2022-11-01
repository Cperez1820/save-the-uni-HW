class Ship {
   constructor(hull, firepower, accuracy, alive){
    this.hull =  hull;
    this.firepower =  firepower;
    this.accuracy = accuracy;
    this.alive = alive;
   }
    

}


const uss = new Ship   (20, 5, .7, true)
  console.log(uss)

// dont know if we should use it yet
// const game = {
    
// }

 
 let alienShipArr = [];



function setAlienShip() {
    let hull = Math.floor(Math.random() * 4 + 3);
    let firepower = Math.floor(Math.random() * 3 + 2);
    let accuracy = Math.random() * 0.2 + 0.6;  // is the logic we used to get the decimal let accuracy = Math.random() * (MAX - min) + min
    let alive = true
    let alienShip = new Ship (hull, firepower, accuracy, alive)
    return alienShip
}

// first thoughts on using a forloop 
for (let i = 1; i <= 6;i++){
    let newAlienShip = setAlienShip();
     alienShipArr.push(newAlienShip); 
}


 console.log(alienShipArr.length) // can take off the .length to see which ship the code stopped on 

function ussAttack(){
    if(uss.hull <= 0 && alienShipArr.length !==0){  // Will add the  "&& alienShipArr.length !== 0"  statement if first run doesnt work // added it  because it didnt b4 
        uss.alive = false
        // console.log(uss.alive)
         console.log("uss lost!")
            endTheGame("GGx1")


    } else if (Math.random() < uss.accuracy) {
         console.log('uss has hit the alien ship!');
        alienShipArr[0].hull = alienShipArr[0].hull - uss.firepower // this makes the ussShip attack first - element index zero
            // console.log(alienShipArr[0].hull)  // checking  work
            if(alienShipArr[0].hull <= 0){
                 alienShipArr = alienShipArr.slice(1);
                    if(alienShipArr.length === 0 ){
                        console.log("uss won");
                        uss.alive = true 
                        endTheGame("GGx2")
                    } else {
                        ussAttack() // aklsd;jnflaksdnflk  <--- shows how i feel spending a couple hours figuring out why the ship wouldnt go on to the next ship after winning 
                    }
            }else {
                alienAttack()
            }  
    }else {
        console.log("uss have missed");
        alienAttack()
    }
}
    

function alienAttack(){
    if(alienShipArr[0].hull <= 0 ){
        alienShipArr[0].alive = false
        // retreat()  // im find out where to add this function in the future 
        // console.log(alienShipArr[0].alive)
        console.log("YOU DEFEATED ALIEN SHIP!");
        alienShipArr = alienShipArr.slice(1);
            if(alienShipArr.length === 0){
                console.log("uss won")
                uss.alive = true
                endTheGame("GGx3")
            } else {
                ussAttack()  // assume after taking one ship out it attack the next alien ship immediately
            }    


    }else if (Math.random() < alienShipArr[0].accuracy) {
        console.log('You have been hit!');
        uss.hull = uss.hull - alienShipArr[0].firepower
        console.log(uss.hull)
            if(uss.hull > 0 && alienShipArr.length !== 0) {
                ussAttack()
            }else {
                uss.alive = false
                endTheGame("GGx4")
            }
    }else{
        console.log("Alien missed it's target");
            if(uss.hull > 0 && alienShipArr.length !== 0){
                ussAttack()
            }
        
    }
}


// ========================AGAIN havent got to this part yet going to figure it out ================
// function retreat(){
//     if (alien.hull <= 0) {
//         alien.alive = false;
//         console.log("alien is dead, Do you want to continue OR Retreat"); // player recieves option to continue or retreat
//         return ("you retreated! GAME OVER") // (USS SHIP) player clicked retreat button 
// }}

function endTheGame(myString){
      
    if(uss.alive === true){
        console.log("USS won the battle. Game over. " + myString)
    } else{
        console.log("Alien won the battle. Earth IS GONE FOREVER GAME OVER. " + myString)

    }
    alienShipArr = ""
}

//console.log(setAlienShip()) // incorrect way of writing it 
// alienAttack()  // happens within the function 
ussAttack()
setAlienShip()







//============================================================= example land ======================================================================================

// // this is for Accuracy (teo's example )
//  if (Math.random() < uss.accuracy) {
//     console.log('You have have hit!');
//  }




// // Betty's example 

// let alienHealth = alienShipArr[i].hull - uss.firepower * uss.accuracy;
// let ussHealth = uss.hull - alienShipArr[i].firepower * alienShipArr[i].accuracy


// for (let i = 0; i < alienShipArr.length; i++) {
   

// // uss 
//     if (alienHealth <= 0 && ussHealth > 0) {
//         alienShip[i].alive = false
//     } else if (alienHealth > 0 && ussHealth <= 0) {
//         alienAttack()
//     } else{
//         console.log('idk wtf just happened')
//     }

// // alien
//     if (alienHealth <= 0 && ussHealth > 0) {
//         alienShip[i].alive = false
//     } else if (alienHealth > 0 && ussHealth <= 0) {
//         alienAttack()
//     } else{
//         console.log('idk wtf just happened')
//     }
// }


// let accuracy = Math.random() * 0.2 + 0.6;  // is the logic we used to get the decimal let accuracy = Math.random() * (MAX - min) + min



// Class child (stanley's example)
// class Captain extends Ship{
//     constructor (hull, firepower, accuracy, alive);
//     super (hull, firepower, accuracy, alive);

// }