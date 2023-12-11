function simulate(trials) {
    const A = 1
    const J = 11
    const Q = 12
    const K = 13
    const cards = [A,2,3,4,5,6,7,8,9,10,J,Q,K];
    console.log(cards[15] + 3);
    
    for (i=0; i<trials; i++) {
        let die = Math.round(Math.random()*6) + 1
        if (die === 7) die -= 1;
        
        let c1 = Math.round(Math.random()*cards.length);
        let card1 = c1 > 0 ? c1 : 1;

        let c2 = die%2 === 0 ? Math.round(Math.random()*cards.length) : 0;

        let total = (card1 + card2) - die;
        display(i,die,card1,card2,total);
    }
}

function display(i,d,c1,c2,t) {
    let trial = i+1;
    let die = d;
    let card1 = c1;
    let card2 = c2 === 0 ? "N/A" : c2;
    let total = t;

    let table = document.querySelector("#trials")
    let row = document.createElement("tr");
    row.setAttribute("id",`t${trial}`);

    let trialDOM = document.createElement("td");
    let dieDOM = document.createElement("td");
    let card1DOM = document.createElement("td");
    let card2DOM = document.createElement("td");
    let totalDOM = document.createElement("td");

    trialDOM.textContent = trial;
    dieDOM.textContent = die;
    card1DOM.textContent = card1;
    card2DOM.textContent = card2;
    totalDOM.textContent = total;

    row.appendChild(trialDOM);
    row.appendChild(dieDOM);
    row.appendChild(card1DOM);
    row.appendChild(card2DOM);
    row.appendChild(totalDOM);

    table.appendChild(row);
}