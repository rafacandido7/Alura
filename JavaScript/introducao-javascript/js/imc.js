export default function calculaImc (x) {
        let massa = x.querySelector(".info-peso").textContent;
        let altura = x.querySelector(".info-altura").textContent;
        let tdImc = x.querySelector(".info-imc");

        let imc = (massa/(altura**2));

        tdImc.textContent = imc.toFixed(2);
    };