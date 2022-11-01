// Stanley's version 
//====================== Week 5 D3: Save the Universe ==============================


// //Making a class for our ship
// class Ship {
//     constructor(name, hull, firepower, accuracy) {
//         this.name = name;
//         this.hull = hull;
//         this.firepower = firepower;
//         this.accuracy = accuracy;
//         this.alive = true;
//     }
// }


// // Making a Hero that takes everything from ship
// class Hero extends Ship {
//     constructor(name, hull, firepower, accuracy) {
//         super(name, hull, firepower, accuracy)
//     }

//     attack() {
//         if (uss.hull <= 0) {
//             uss.alive = false
//             console.log(uss.alive)
//             return ("We been defeated captain")
//         } else if (Math.random() < uss.accuracy) {
//             console.log('Oh, no we been hit');
//             alienShipArr[0].hull = alienShipArr[0].hull - uss.firepower
//             console.log(alienShipArr[0].hull)
//         } else {
//             console.log("We missed")
//         }

//     }
// }



// //Giving Hero values
// const uss = new Hero("USS", 20, 5, .7, true)

// console.log(uss)







// // Alien
// class Alien extends Ship {
//     constructor(name) {
//         super(name,)
//         this.hull = Math.floor(Math.random() * 4 + 3);
//         this.firepower= Math.floor(Math.random() * 3 + 2);
//         this.accuracy =  Math.random() * 0.2 + 0.6; 
//         this.alive = true
//     }

//     alienAttack() {
//         if (alienShipArr[0].hull <= 0) {
//             alienShipArr[0].alive = false
//             retreat()
//             console.log(alienShipArr[0].alive)
//             return ("YOU DEFEATED ALIEN SHIP!")
//         } else if (Math.random() < alienShipArr[0].accuracy) {
//             console.log('You have been hit!');
//             uss.hull = uss.hull - alienShipArr[0].firepower
//             console.log(uss.hull)
//         } else {
//             console.log("Alien missed it's target")
//         }
//     }
    
// }
//  Alien.alienAttack()
// //Making aline
// const alienShip = new Alien ("Alien Ship 1")
// console.log(alienShip)


// cyrus 's versison that works ===================================================================================================================================================



//--------------------------- Start of working block1
class Ship {
    constructor(hull, firepower, accuracy, alive) {
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
      this.alive = alive;
    }
  }
  
  
  const uss = new Ship(18, 5, 0.7, true);
  // const uss = new Ship(7, 5, 0.7, true);  // this was for test
  
  // console.log(uss);
  //--------------------------- End of working block1
  
  //--------------------------- Start of working block2
  let alienShipArr = [];
  function setAlienShip() {
    let hull = Math.floor(Math.random() * 4 + 3);
    let firepower = Math.floor(Math.random() * 3 + 2);
    let accuracy = Math.random() * 0.2 + 0.6; // is the logic we used to get the decimal let accuracy = Math.random() * (MAX - min) + min
    let alive = true;
    let alienShip = new Ship(hull, firepower, accuracy, alive);
    return alienShip;
  }
  // first thoughts on using a forloop
  for (let i = 1; i <= 6;i++){
      let newAlienShip = setAlienShip();
       alienShipArr.push(newAlienShip);
  }
  console.log(alienShipArr);
  // console.log("32")
  
  //--------------------------- End of working block2
  
  
  
  function ussAttack() {
    if (uss.hull <= 0  && alienShipArr.length !==0) {
      uss.alive = false;
      // console.log(uss.alive);// uncomment
      console.log("uss lost!");
      endTheGame("45")
      
  
    } else if (Math.random() < uss.accuracy) {
          console.log("uss has hit the alien ship!");
  
          alienShipArr[0].hull = alienShipArr[0].hull - uss.firepower; // it always attack first ship - element index zero
          // uss.hull--
  
          // console.log(alienShipArr[0].hull);
          if(alienShipArr[0].hull <= 0){
              alienShipArr = alienShipArr.slice(1); // Now we have one less alienship. It removes first element of array
              // console.log("45")
              // console.log(alienShipArr.length)
              if(alienShipArr.length === 0){
                  console.log("uss won")
                  uss.alive = true
                  endTheGame("62")
              } else {
                  ussAttack()  // assume after taking one ship out it attack the next alien ship immediately
              }            
          } else{
              alienAttack()
          }
    } else {
      console.log("uss have missed");  // uncomment
      // uss.hull--
      alienAttack()
    }
  }
  
  
  
  
  function alienAttack() {
      if(alienShipArr[0].hull <= 0){
          alienShipArr[0].alive = false
          // console.log(alienShipArr[0].alive);
          console.log("YOU DEFEATED ALIEN SHIP!");
          alienShipArr = alienShipArr.slice(1); // Now we have one less alienship. It removes first element of array
     
          if(alienShipArr.length === 0){
              console.log("uss won")
              uss.alive = true
              endTheGame("88")
          } else {
              ussAttack()  // assume after taking one ship out it attack the next alien ship immediately
          }            
      } else if (Math.random() < alienShipArr[0].accuracy) {
                  console.log("uss has been hit!");
                  // uss.live = false
  
  
                  uss.hull = uss.hull - alienShipArr[0].firepower;
                  console.log(uss.hull);


                 // ======================
                  // alienShipArr[0].hull--
             
                  if (uss.hull > 0  && alienShipArr.length !==0) { /// check the < , >
                      ussAttack()
                  }  // no else here since the checks happen in ussAtack function
                    else {
                          uss.alive = false
                          endTheGame("107")
                    }
                  // uss.alive = false
                  // endTheGame("106")
  
              } else {
                      console.log("Alien missed it's target");
                      // alienShipArr[0].hull--
                      if (uss.hull > 0  && alienShipArr.length !==0) {
                          ussAttack()
                      } // no else here since the checks happen in ussAtack function
               }
  }
  
  
  
  function endTheGame(myString){
      
      if(uss.alive === true){
          console.log("USS won the battle. Game is over. " + myString)
      } else{
          console.log("Alien won the battle. Earth will be desoyed. GAME OVER. " + myString)
  
      }
      alienShipArr = ""
  }
  
  
  setAlienShip();
  ussAttack();