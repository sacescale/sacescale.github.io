function calcProAtivo(e) {

    let diasTrabalhados = document.getElementById('workedDays').value
    let quantidade = document.getElementById('amount').value
    //let objetivo = document.getElementById('goal').value
    let diasRestantes = document.getElementById('daysRemaining').value
    let mediaProdutividade = Math.floor(quantidade / diasTrabalhados)
    let projecao = mediaProdutividade * diasRestantes



    const calcTrabalho = () => {
        if (diasTrabalhados && quantidade >= 1) {
            document.getElementById('displayMedia').value = `${Math.floor(mediaProdutividade)} Acionamentos/Dia`
            document.getElementById('displayMeta').value = ` + ${Math.floor(projecao)} em ${diasRestantes} Dias `
        } else {
            document.getElementById('displayMedia').value = `Valores Inválidos`
            document.getElementById('displayMeta').value = `Valores Inválidos`
        }
    }

    calcTrabalho()

    const calcValor = () => {
        if (mediaProdutividade >= 40 && mediaProdutividade <= 44) {
            document.getElementById('faixaValor').value = `R$ 40,00`

        } else if (mediaProdutividade >= 45 && mediaProdutividade <= 49) {
            document.getElementById('faixaValor').value = `R$ 80,00`

        } else if (mediaProdutividade >= 50 && mediaProdutividade <= 55) {
            document.getElementById('faixaValor').value = `R$ 120,00`

        } else if (mediaProdutividade >= 56) {
            document.getElementById('faixaValor').value = `R$ 140,00`
        } else {
            document.getElementById('faixaValor').value = `R$ 00,00`
        }
    }
    calcValor()
}


// Calculo Form Receptivo

const calcReceptivo = () => {
    const tv = {
        "Facil SD": 0.5,
        "Facil HD": 0.7,
        "Light HD": 1.35,
        "Mix HD": 3,
        "Top HD": 5
    }

    const internet = {
        "5MB": 0.26,
        "10MB": 2, //Esse valor até o momente, refere-se as internet de 10MB, 20MB, 35MB
        "30MB": 3, //Esse valor até o momente, refere-se as internet de 30MB, 60MB, 70MB
        "100MB": 4, //Esse valor até o momente, refere-se as internet de 100MB e 120MB
        "240MB": 5
    }

    const telefone = {
        "Ilimitado Net": 0.04,
        "Ilimitado Local": 0.5,
        "Ilimitado Brasil 21": 0.75,
        "Ilimitado Brasil Total 21": 1,
        "Ilimitado Mundo Total 21": 2
    }

    const multi = {
        "Controle R$39,99": 3,
        "Controle R$54,99": 4.84,
        "Controle R$70,00": 7.09,
        "6GB": 7.18,
        "8GB": 7.28,
        "10GB": 8.15,
        "15GB": 10.73,
        "25GB": 15.44,
        "30GB": 18.22,
        "50GB": 20.98
    }

    const newClient = 3

    const calculoPacotes = () => {
        /* Valores sobre o pacote de TV */
        let facilSd = document.getElementById('facilSd').value * tv["Facil SD"]
        let facilHd = document.getElementById('facilHd').value * tv["Facil HD"]
        let lightHd = document.getElementById('lightHd').value * tv["Light HD"]
        let mixHd = document.getElementById('mixHd').value * tv["Mix HD"]
        let topHd = document.getElementById('topHd').value * tv["Top HD"]

        const valueTotalTv = facilSd + facilHd + lightHd + mixHd + topHd

        /* Valores sobre o pacote de Internet */

        let virtua5Mb = document.getElementById('virtua5').value * internet["5MB"]
        let virtua10Mb = document.getElementById('virtua10').value * internet["10MB"]
        let virtua20Mb = document.getElementById('virtua20').value * internet["10MB"]
        let virtua30Mb = document.getElementById('virtua30').value * internet["30MB"]
        let virtua35Mb = document.getElementById('virtua35').value * internet["10MB"]
        let virtua60Mb = document.getElementById('virtua60').value * internet["30MB"]
        let virtua70Mb = document.getElementById('virtua70').value * internet["30MB"]
        let virtua100Mb = document.getElementById('virtua100').value * internet["100MB"]
        let virtua120Mb = document.getElementById('virtua120').value * internet["100MB"]
        let virtua240Mb = document.getElementById('virtua240').value * internet["240MB"]

        const valueTotalVirtua = virtua5Mb + virtua10Mb + virtua20Mb + virtua30Mb + virtua35Mb + virtua60Mb + virtua70Mb + virtua100Mb + virtua120Mb + virtua240Mb


        /* Valores sobre o pacote de Telefone */

        let net = document.getElementById('net').value * telefone["Ilimitado Net"]
        let local = document.getElementById('local').value * telefone["Ilimitado Local"]
        let brasil21 = document.getElementById('brasil21').value * telefone["Ilimitado Brasil 21"]
        let brasilTt21 = document.getElementById('brasilTt21').value * telefone["Ilimitado Brasil Total 21"]
        let mundoTt21 = document.getElementById('mundoTt21').value * telefone["Ilimitado Mundo Total 21"]

        const valueTotalTelefone = net + local + brasil21 + brasilTt21 + mundoTt21

        /* Valores sobre o pacote de Multi */

        let multiCtrl1 = document.getElementById('multiCtrl1').value * multi["Controle R$39,99"]
        let multiCtrl2 = document.getElementById('multiCtrl2').value * multi["Controle R$54,99"]
        let multiCtrl3 = document.getElementById('multiCtrl3').value * multi["Controle R$70,00"]
        let multi6 = document.getElementById('multi6').value * multi["6GB"]
        let multi8 = document.getElementById('multi8').value * multi["8GB"]
        let multi10 = document.getElementById('multi10').value * multi["10GB"]
        let multi15 = document.getElementById('multi15').value * multi["15GB"]
        let multi25 = document.getElementById('multi25').value * multi["25GB"]
        let multi30 = document.getElementById('multi30').value * multi["30GB"]
        let multi50 = document.getElementById('multi50').value * multi["50GB"]

        const valueTotalMulti = multiCtrl1 + multiCtrl2 + multiCtrl3 + multi6 + multi8 + multi10 + multi15 + multi25 + multi30 + multi50

        /* valores sobre os novos domicilios */
        let novoClientes = document.getElementById('newClient').value * newClient



        function somaTotal() {
            return valueTotalTv + valueTotalVirtua + valueTotalTelefone + valueTotalMulti + novoClientes
        }
        document.getElementById('valorTotal').innerHTML = `Valor a Receber R$ ${somaTotal().toFixed(2).replace('.', ',')}`

    }

    calculoPacotes()

}


