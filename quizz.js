document.getElementById("przyciskmenu").addEventListener("click", function(){
    var przyciskmenu = document.getElementById("przyciskmenu")
    var menu = document.getElementById("ramkaPrawanaglowek");
    var iks = document.getElementById("krzyzyk");
    przyciskmenu.style.display= "none";
    menu.style.display= "block";
    menu.style.border="2px solid rgb(96, 144, 177)";
    
    iks.style.display="block";
});

document.getElementById("krzyzyk").addEventListener("click", function(){

    var przyciskmenu = document.getElementById("przyciskmenu")
    var menu = document.getElementById("ramkaPrawanaglowek");
    var iks = document.getElementById("krzyzyk");
    przyciskmenu.style.display= "block";
    menu.style.display= "none";
    iks.style.display="none";
});

document.getElementById("rozpocznijquizz").addEventListener("click", function(){
    var rozpocznij = document.getElementById("rozpocznijquizzramka");
    var opis = document.querySelectorAll(".opisquizz");
    var pytanie1=document.querySelectorAll(".pytanie");
    rozpocznij.style.display="none";
    opis.forEach(function(napis){
        napis.style.display="none";
    })
    pytanie1[0].style.display="flex";
});

var ilosc_poprawnych_odp = 0;
var czyKliknietoOdpowiedz = false;
var odpowiedzi = document.querySelectorAll(".odp");
//1 pytanie
function zmianakoloru1(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 0) {
        odpowiedzi[0].style.background = "rgb(230, 43, 43)"; // czerwony
        odpowiedzi[1].style.background = "rgb(22, 223, 89)";//zielony
    }

    if (i === 1) {
        odpowiedzi[1].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
        
    }
    if (i === 2) {
        odpowiedzi[1].style.background = "rgb(22, 223, 89)";
        odpowiedzi[2].style.background = "rgb(230, 43, 43)";
    }
    if (i === 3) {
        odpowiedzi[1].style.background = "rgb(22, 223, 89)";
        odpowiedzi[3].style.background = "rgb(230, 43, 43)";
    }
}
}
var nextquestion=document.querySelectorAll(".nastepnepytanie");

function nextQuestion(i){
    if(czyKliknietoOdpowiedz===true){
        if(i < 4){
        nextquestion[0].style.display="flex";  
        }
        if(i > 3 && i<8){
        nextquestion[1].style.display="flex";  
        }
        if(i > 7  && i<12){
        nextquestion[2].style.display="flex";  
        }
        if(i >11 && i<16){
            nextquestion[3].style.display="flex";
        }
        if(i >15 && i<20){
            nextquestion[4].style.display="flex";
        }
        if(i>19 && i<24){
            nextquestion[5].style.display="flex";
        }
        if(i>23 && i<28){
            nextquestion[6].style.display="flex";
        }
        if(i>27 && i<32){
            nextquestion[7].style.display="flex";
        }
        if(i>31 && i<36){
            nextquestion[8].style.display="flex";
        }
        if(i>35 && i<40){
            nextquestion[9].style.display="flex";
        }
        if(i>39 && i<44){
            nextquestion[10].style.display="flex";
        }
        ///////////////////////////////////////////////
        if(i>43 && i<48){
            nextquestion[11].style.display="flex";
        }
        if(i>47 && i<52){
            nextquestion[12].style.display="flex";
        }
        if(i>51 && i<56){
            nextquestion[13].style.display="flex";
        }
        if(i>55 && i<60){
            nextquestion[14].style.display="flex";
        }
        if(i>59 && i<64){
            nextquestion[15].style.display="flex";
        }
        if(i>63 && i<68){
            nextquestion[16].style.display="flex";
        }
        if(i>67 && i<72){
            nextquestion[17].style.display="flex";
        }
        if(i>71 && i<76){
            nextquestion[18].style.display="flex";
        }
        if(i>75 && i<80){
            nextquestion[19].style.display="flex";
            nextquestion[19].innerHTML="Koniec!"
        }

    };
    };

    odpowiedzi.forEach(function (odp, i) {
        odp.addEventListener("click", function () {
            if(i < 4) {
                zmianakoloru1(i);  
            } 
            if(i > 3 && i<8){
                zmianakoloru2(i);
            }
            if(i > 7 && i<12){
                zmianakoloru3(i);
            }
            if(i >11 && i<16){
                zmianakoloru4(i);
            }
            if(i >15 && i<20){
                zmianakoloru5(i);
            }
            if(i>19 && i<24){
                zmianakoloru6(i);
            }
            if(i>23 && i<28){
                zmianakoloru7(i);
            }
            if(i>27 && i<32){
                zmianakoloru8(i);
            }
            if(i>31 && i<36){
                zmianakoloru9(i);
            }
            if(i>35 && i<40){
                zmianakoloru10(i);
            }
            if(i>39 && i<44){
                zmianakoloru11(i);
            }
            if(i>43 && i<48){
                zmianakoloru12(i);
            }
            if(i>47 && i<52){
                zmianakoloru13(i);
            }
            if(i>51 && i<56){
                zmianakoloru14(i);
            }
            if(i>55 && i<60){
                zmianakoloru15(i);
            }
            if(i>59 && i<64){
                zmianakoloru16(i);
            }
            if(i>63 && i<68){
                zmianakoloru17(i);
            }
            if(i>67 && i<72){
                zmianakoloru18(i);
            }
            if(i>71 && i<76){
                zmianakoloru19(i);
            }
            if(i>75 && i<80){
                zmianakoloru20(i);
            }
        
            nextQuestion(i);
            console.log(ilosc_poprawnych_odp);
        });
    });
    for (let i = 0; i < 20; i++) {
        nextquestion[i].addEventListener("click", function() {
            const pytanie1 = document.querySelectorAll(".pytanie");
            const koniec=document.getElementById("koniec");
            const wynikzmienna=document.getElementById("wynikzmienna");
            const wynikprocentzmienna=document.getElementById("wynikprocentzmienna");
            var pasek=document.getElementById("procent");
            if(i<19){
            pytanie1[i].style.display = "none";
            pytanie1[i + 1].style.display = "flex";
            czyKliknietoOdpowiedz = false;
            nextquestion[i].style.display = "none";
            }
            else{
            var tekst1=document.getElementById("tekst1");
            var tekst2=document.getElementById("tekst2");
            var tekst3=document.getElementById("tekst3");
            var tekst4=document.getElementById("tekst4");
            var tekst5=document.getElementById("tekst4");
            pytanie1[i].style.display = "none";
            koniec.style.display="flex";
            wynikzmienna.innerHTML=ilosc_poprawnych_odp;
            let procent=(ilosc_poprawnych_odp/20)*100;
            let procentzaokr=Math.round(procent);
            
            pasek.style.width=procentzaokr+"%";
            let width=0;
            let liczbaprocentow=0;
            function animacja(){
            if(width<procentzaokr){
                width++;
                pasek.style.width=width + "%";
                if(liczbaprocentow<procentzaokr){
                    liczbaprocentow++;
                    pasek.innerHTML=liczbaprocentow + "%";
                }
                requestAnimationFrame(animacja);
            }
        }
        requestAnimationFrame(animacja);
            if(procentzaokr>29 && procentzaokr < 50){
                pasek.style.background="rgb(245, 123, 9)";
                tekst1.style.display="none";
                tekst2.style.display="block";
                //pomaranczowy
            }
            if(procentzaokr>49 && procentzaokr <80){
                pasek.style.background="rgb(236, 213, 6)";
                tekst1.style.display="none";
                tekst3.style.display="block";
                //zolty
            }
            if(procentzaokr>79 && procentzaokr <90){
                pasek.style.background="rgb(155, 236, 6)";
                tekst1.style.display="none";
                tekst4.style.display="block";
                //jasno zielony
            }
            if(procentzaokr>89){
                pasek.style.background="rgba(35, 184, 6, 0.897)";
                tekst1.style.display="none";
                tekst5.style.display="block";
                //ciemniejszy zielony niz poprzedni
            }
            }
        });
    }
    
function zmianakoloru2(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 4) {
        odpowiedzi[4].style.background = "rgb(230, 43, 43)"; // czerwony
        odpowiedzi[6].style.background = "rgb(22, 223, 89)";//zielony
    }

    if (i === 5) {
        odpowiedzi[6].style.background = "rgb(22, 223, 89)";
        odpowiedzi[5].style.background = "rgb(230, 43, 43)";
    }
    if (i === 6) {
        odpowiedzi[6].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }
    if (i === 7) {
        odpowiedzi[6].style.background = "rgb(22, 223, 89)";
        odpowiedzi[7].style.background = "rgb(230, 43, 43)";
    }
}
}
function zmianakoloru3(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 8) {
        odpowiedzi[8].style.background = "rgb(230, 43, 43)"; // czerwony
        odpowiedzi[10].style.background = "rgb(22, 223, 89)";//zielony
    }

    if (i === 9) {
        odpowiedzi[10].style.background = "rgb(22, 223, 89)";
        odpowiedzi[9].style.background = "rgb(230, 43, 43)";
    }
    if (i === 10) {
        odpowiedzi[10].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }
    if (i === 11) {
        odpowiedzi[10].style.background = "rgb(22, 223, 89)";
        odpowiedzi[11].style.background = "rgb(230, 43, 43)";
    }
}
}
function zmianakoloru4(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 12) {
        odpowiedzi[12].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }

    if (i === 13) {
        odpowiedzi[12].style.background = "rgb(22, 223, 89)";
        odpowiedzi[13].style.background = "rgb(230, 43, 43)";
    }
    if (i === 14) {
        odpowiedzi[12].style.background = "rgb(22, 223, 89)";
        odpowiedzi[14].style.background = "rgb(230, 43, 43)";
    }
    if (i === 15) {
        odpowiedzi[12].style.background = "rgb(22, 223, 89)";
        odpowiedzi[15].style.background = "rgb(230, 43, 43)";
    }
}
}
function zmianakoloru5(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 16) {
        odpowiedzi[16].style.background = "rgb(230, 43, 43)"; // czerwony
        odpowiedzi[19].style.background = "rgb(22, 223, 89)";//zielony
    }

    if (i === 17) {
        odpowiedzi[19].style.background = "rgb(22, 223, 89)";
        odpowiedzi[17].style.background = "rgb(230, 43, 43)";
    }
    if (i === 18) {
        odpowiedzi[19].style.background = "rgb(22, 223, 89)";
        odpowiedzi[18].style.background = "rgb(230, 43, 43)";
    }
    if (i === 19) {
        odpowiedzi[19].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }
}
}
function zmianakoloru6(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 20) {
        odpowiedzi[20].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }

    if (i === 21) {
        odpowiedzi[20].style.background = "rgb(22, 223, 89)";
        odpowiedzi[21].style.background = "rgb(230, 43, 43)";
    }
    if (i === 22) {
        odpowiedzi[20].style.background = "rgb(22, 223, 89)";
        odpowiedzi[22].style.background = "rgb(230, 43, 43)";
    }
    if (i === 23) {
        odpowiedzi[20].style.background = "rgb(22, 223, 89)";
        odpowiedzi[23].style.background = "rgb(230, 43, 43)";
    }
}
}

function zmianakoloru7(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 24) {
        odpowiedzi[26].style.background = "rgb(22, 223, 89)";
        odpowiedzi[24].style.background = "rgb(230, 43, 43)";
    }

    if (i === 25) {
        odpowiedzi[26].style.background = "rgb(22, 223, 89)";
        odpowiedzi[25].style.background = "rgb(230, 43, 43)";
    }
    if (i === 26) {
        odpowiedzi[26].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }
    if (i === 27) {
        odpowiedzi[26].style.background = "rgb(22, 223, 89)";
        odpowiedzi[27].style.background = "rgb(230, 43, 43)";
    }
}
}


function zmianakoloru8(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 28) {
        odpowiedzi[28].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }

    if (i === 29) {
        odpowiedzi[28].style.background = "rgb(22, 223, 89)";
        odpowiedzi[29].style.background = "rgb(230, 43, 43)";
    }
    if (i === 30) {
        odpowiedzi[28].style.background = "rgb(22, 223, 89)";
        odpowiedzi[30].style.background = "rgb(230, 43, 43)";
    }
    if (i === 31) {
        odpowiedzi[28].style.background = "rgb(22, 223, 89)";
        odpowiedzi[31].style.background = "rgb(230, 43, 43)";
    }
}
}

function zmianakoloru9(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 32) {
        odpowiedzi[32].style.background = "rgb(230, 43, 43)"; // czerwony
        odpowiedzi[33].style.background = "rgb(22, 223, 89)";//zielony
    }

    if (i === 33) {
        odpowiedzi[33].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
        
    }
    if (i === 34) {
        odpowiedzi[33].style.background = "rgb(22, 223, 89)";
        odpowiedzi[34].style.background = "rgb(230, 43, 43)";
    }
    if (i === 35) {
        odpowiedzi[33].style.background = "rgb(22, 223, 89)";
        odpowiedzi[35].style.background = "rgb(230, 43, 43)";
    }
}
}

function zmianakoloru10(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 36) {
        odpowiedzi[36].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }

    if (i === 37) {
        odpowiedzi[36].style.background = "rgb(22, 223, 89)";
        odpowiedzi[37].style.background = "rgb(230, 43, 43)";
    }
    if (i === 38) {
        odpowiedzi[36].style.background = "rgb(22, 223, 89)";
        odpowiedzi[38].style.background = "rgb(230, 43, 43)";
    }
    if (i === 39) {
        odpowiedzi[36].style.background = "rgb(22, 223, 89)";
        odpowiedzi[39].style.background = "rgb(230, 43, 43)";
    }
}
}

function zmianakoloru11(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 40) {
        odpowiedzi[42].style.background = "rgb(22, 223, 89)";
        odpowiedzi[40].style.background = "rgb(230, 43, 43)";
    }

    if (i === 41) {
        odpowiedzi[42].style.background = "rgb(22, 223, 89)";
        odpowiedzi[41].style.background = "rgb(230, 43, 43)";
    }
    if (i === 42) {
        odpowiedzi[42].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }
    if (i === 43) {
        odpowiedzi[42].style.background = "rgb(22, 223, 89)";
        odpowiedzi[43].style.background = "rgb(230, 43, 43)";
    }
}
}


function zmianakoloru12(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 44) {
        odpowiedzi[44].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }

    if (i === 45) {
        odpowiedzi[44].style.background = "rgb(22, 223, 89)";
        odpowiedzi[45].style.background = "rgb(230, 43, 43)";
    }
    if (i === 46) {
        odpowiedzi[44].style.background = "rgb(22, 223, 89)";
        odpowiedzi[46].style.background = "rgb(230, 43, 43)";
    }
    if (i === 47) {
        odpowiedzi[44].style.background = "rgb(22, 223, 89)";
        odpowiedzi[47].style.background = "rgb(230, 43, 43)";
    }
}
}

function zmianakoloru13(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 48) {
        odpowiedzi[48].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }

    if (i === 49) {
        odpowiedzi[48].style.background = "rgb(22, 223, 89)";
        odpowiedzi[49].style.background = "rgb(230, 43, 43)";
    }
    if (i === 50) {
        odpowiedzi[48].style.background = "rgb(22, 223, 89)";
        odpowiedzi[50].style.background = "rgb(230, 43, 43)";
    }
    if (i === 51) {
        odpowiedzi[48].style.background = "rgb(22, 223, 89)";
        odpowiedzi[51].style.background = "rgb(230, 43, 43)";
    }
}
}

function zmianakoloru14(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 52) {
        odpowiedzi[53].style.background = "rgb(22, 223, 89)";
        odpowiedzi[52].style.background = "rgb(230, 43, 43)";
    }

    if (i === 53) {
        odpowiedzi[53].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }
    if (i === 54) {
        odpowiedzi[53].style.background = "rgb(22, 223, 89)";
        odpowiedzi[54].style.background = "rgb(230, 43, 43)";
    }
    if (i === 55) {
        odpowiedzi[53].style.background = "rgb(22, 223, 89)";
        odpowiedzi[55].style.background = "rgb(230, 43, 43)";
    }
}
}


function zmianakoloru15(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 56) {
        odpowiedzi[59].style.background = "rgb(22, 223, 89)";
        odpowiedzi[56].style.background = "rgb(230, 43, 43)";
    }

    if (i === 57) {
        odpowiedzi[59].style.background = "rgb(22, 223, 89)";
        odpowiedzi[57].style.background = "rgb(230, 43, 43)";
    }
    if (i === 58) {
        odpowiedzi[59].style.background = "rgb(22, 223, 89)";
        odpowiedzi[58].style.background = "rgb(230, 43, 43)";
    }
    if (i === 59) {
        odpowiedzi[59].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }
}
}


function zmianakoloru16(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 60) {
        odpowiedzi[61].style.background = "rgb(22, 223, 89)";
        odpowiedzi[60].style.background = "rgb(230, 43, 43)";
    }

    if (i === 61) {
        odpowiedzi[61].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }
    if (i === 62) {
        odpowiedzi[61].style.background = "rgb(22, 223, 89)";
        odpowiedzi[62].style.background = "rgb(230, 43, 43)";
    }
    if (i === 63) {
        odpowiedzi[61].style.background = "rgb(22, 223, 89)";
        odpowiedzi[63].style.background = "rgb(230, 43, 43)";
    }
}
}



function zmianakoloru17(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 64) {
        odpowiedzi[64].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }

    if (i === 65) {
        odpowiedzi[64].style.background = "rgb(22, 223, 89)";
        odpowiedzi[65].style.background = "rgb(230, 43, 43)";
    }
    if (i === 66) {
        odpowiedzi[64].style.background = "rgb(22, 223, 89)";
        odpowiedzi[66].style.background = "rgb(230, 43, 43)";
    }
    if (i === 67) {
        odpowiedzi[64].style.background = "rgb(22, 223, 89)";
        odpowiedzi[67].style.background = "rgb(230, 43, 43)";
    }
}
}



function zmianakoloru18(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 68) {
        odpowiedzi[70].style.background = "rgb(22, 223, 89)";
        odpowiedzi[68].style.background = "rgb(230, 43, 43)";
    }

    if (i === 69) {
        odpowiedzi[70].style.background = "rgb(22, 223, 89)";
        odpowiedzi[69].style.background = "rgb(230, 43, 43)";
    }
    if (i === 70) {
        odpowiedzi[70].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }
    if (i === 71) {
        odpowiedzi[70].style.background = "rgb(22, 223, 89)";
        odpowiedzi[71].style.background = "rgb(230, 43, 43)";
    }
}
}


function zmianakoloru19(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 72) {
        odpowiedzi[75].style.background = "rgb(22, 223, 89)";
        odpowiedzi[72].style.background = "rgb(230, 43, 43)";
    }

    if (i === 73) {
        odpowiedzi[75].style.background = "rgb(22, 223, 89)";
        odpowiedzi[73].style.background = "rgb(230, 43, 43)";
    }
    if (i === 74) {
        odpowiedzi[75].style.background = "rgb(22, 223, 89)";
        odpowiedzi[74].style.background = "rgb(230, 43, 43)";
    }
    if (i === 75) {
        odpowiedzi[75].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }
}
}

function zmianakoloru20(i) {
    if(!czyKliknietoOdpowiedz){
        czyKliknietoOdpowiedz=true;
    if (i === 76) {
        odpowiedzi[78].style.background = "rgb(22, 223, 89)";
        odpowiedzi[76].style.background = "rgb(230, 43, 43)";
    }

    if (i === 77) {
        odpowiedzi[78].style.background = "rgb(22, 223, 89)";
        odpowiedzi[77].style.background = "rgb(230, 43, 43)";
    }
    if (i === 78) {
        odpowiedzi[78].style.background = "rgb(22, 223, 89)";
        ilosc_poprawnych_odp++;
    }
    if (i === 79) {
        odpowiedzi[78].style.background = "rgb(22, 223, 89)";
        odpowiedzi[79].style.background = "rgb(230, 43, 43)";
    }
}
}