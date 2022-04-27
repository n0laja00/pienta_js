

let ac = document.getElementById('ac');
let mod = document.getElementById('mod');
let dice = document.getElementById('dice');
let attacks = document.getElementById('number_attacks');
let hitTable = document.getElementById('hitTable')

function calculateToHit() {
    hitTable.innerHTML = '';
    let probability;
    let attack_number = Number(attacks.value);
    let toHit = ac.value - mod.value;
    toHit = 21 - toHit;
    probability = (toHit/20)
    toHit = Math.floor(toHit/20*100);
    
    hitTable.innerHTML += '<tr>' + '<th>' + 'Attack #' + '</th>' + '<th>' + 'Change to hit/pass (%) ' + '</th>' + '</tr>';

    if(document.getElementById('yes').checked){
        if (toHit > 100) {
            toHit = 95;
            probability = 0.95;
        } else if (toHit < 0) {
            toHit = 0.05;
            probability = 0.05;
        }  
    } else {
        if (toHit > 100) {
            toHit = 100;
            probability = 1;
        } else if (toHit < 0) {
            toHit = 0;
            probability = 0;
        }   
    };


    for ( let i = 1; i <= attack_number; i++){
        if ( i <= 1) {
            hitTable.innerHTML += '<tr>' + '<td>' + i + '</td>' + '<td>' + toHit + '</td>' + '</tr>';
        };
        
        if ( i > 1) {
            hitTable.innerHTML += '<tr>' + '<td>' + i + '</td>' + '<td>' + Math.floor(Math.pow(probability,i)*100) + '</td>' + '</tr>';
        };
    }
    
};

function rollDice() {
    let dice = document.getElementById('dice').value;
    let sum = [];
    let dieValue= 0;
    let amount = '';
    let sides = '';
    let operator = '+';
    let index = 0;
    let dDimension = 1;
	for(let i = 0; i <= dice.length; i++) {

        //Searches for first bracket if it exists
        if (dice[i] === '(' ) {
            sum.push(dice[i]);
            dice=dice.slice(0,[i]) + dice.slice(i+1, dice.length);

        } 
        //Upon finding an operator or when at the end of the string, perform the following
		else if (dice[i] == '+' || dice[i] == '-' || dice[i] == '*' || dice[i] == '/' || dice[i] === ')' || i == dice.length) {
            //Find the string before the operator. if "D", change dDimension: dDimension 1 = in front of D, dDimension 2 = after D
            for (let y = index; y <= i-1; y++){
                
                if (dice[y] === 'd' || dice[y]==='D'){
                    dDimension = 2
                } else if (dDimension == 2) {
                    sides += dice[y];
                } else {
                    amount += dice[y];
                };
                index = y+2; 
            };
            //If D dimension is 1 after last operation, it means that it's a modifier, not a die. If dDimension is 2, it means it's a die. Throw, sum, push. 
            if (dDimension == 2) {
                results = mathRandom(Number(amount), Number(sides));
                results = results.reduce(getSum, 0)
                sum.push(Number(results));
                    
               
            } else {
                sum.push(amount);
            };
            

            //reset

            amount = '';
            sides = '';
            dDimension = 1;
            
		}
        //Assign operator if it finds the following (More operators needed!!) 
        if (dice[i] === ')') {  
            sum.push(dice[i]);
            dice=dice.slice(0,[i]) + dice.slice(i+1, dice.length)
            index-i;
        }
        if (dice[i] == '+' || dice[i] == '-' || dice[i] == '*' || dice[i] == '/' ) {
            operator = dice[i];
            sum.push(operator);
        }  
        
	};
    let eq = String(sum.join(''));
    alert(eq);
    function iHateHowSimpleThisIs(fn) {
        return new Function ('return ' + fn) ();
    }
    let eqResult = iHateHowSimpleThisIs(eq)
    alert(eqResult);
};


function mathRandom(a,b){
    let results = [];
    b = b;
    for (i = 1; i <= a; i++) {
        let die = Math.floor(Math.random() * b)+1;
        results.push(die);
    }  
    return results;
};

function getSum(total, num) {
    return total + num;
  };
function getSub(total, num) {
    return total - num;
}
