document.querySelectorAll("a").forEach((a)=>{
    // jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
       
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // mengambil element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan rendom untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan komputer == pilihan user (Draw)
    if(pilihanUser == pilihanKomputer){
        alert("DRAW")

    }

    // jika pilihan komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Komputer WIN");
    }else if(pilihanKomputer == "Paper" && pilihanUser =="Rock"){
        alert("Komputer WINN");
    }else if(pilihanKomputer == "Scissors" && pilihanUser =="Paper"){
        alert("Komputer WINN");
    }

    // jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("user WIN");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User WINN");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User WIN");
    }


}