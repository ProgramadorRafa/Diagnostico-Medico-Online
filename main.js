let resultadoExame = document.querySelector('.result');

        let btnAnalisar = document.getElementById('analisar');
        let btnLimpar = document.getElementById('clean');

        btnAnalisar.addEventListener('click', (e) => {
            let  frm = document.querySelector('form');
            
            if(frm.dadosParaAnalise.value === "" || frm.dadosParaAnalise.value === "null"){
                alert("Você precisa informar um sintoma!");
            } else{
                console.log(frm.dadosParaAnalise.value);
                resultadoExame.innerText = `Infelizmente você tem ${frm.dadosParaAnalise.value}`;
            }
            e.preventDefault();
        });

        btnLimpar.addEventListener('click', () => {
            resultadoExame.innerText = "";
        })