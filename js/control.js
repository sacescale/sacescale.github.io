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
    const tv = [
        [
            ["Facil SD", 0.5], ["Facil HD", 0.7], ["Light HD", 1.35], ["Mix HD", 3], ["Top HD", 5]
        ], [
            ["Compacto SD", 0], ["Plus HD", 0], ["Corp HD", 0], ["Corp HD Max", 0]
        ]
    ]
    const internet = [
        [
            ["5MB", 0.26], ["10MB", 2], ["30MB", 3], ["100MB", 4], ["240MB", 5]
        ], [
            ["10MB CNPJ", 2], ["30MB CNPJ", 3], ["10MB Ip Fixo", 3], ["40MB CNPJ", 3], ["60MB CNPJ", 3], ["70Mb CNPJ", 4], ["120MB CNPJ", 4], ["30MB Ip Fixo", 4], ["35MB Presença Web", 4], ["140MB CNPJ", 5], ["60MB Ip Fixo", 5], ["240MB CNPJ", 5],
        ]
    ]

    const telefone = [
        [
            ["Ilimitado Net", 0.04], ["Ilimitado Local", 0.5], ["Ilimitado Brasil 21", 0.75], ["Ilimitado Brasil Total 21", 1], ["Ilimitado Mundo Total 21", 2]
        ], [
            ["Local (1Linha)", 0.35], ["Brasil21 (1Linha)", 0.47], ["Brasil Total21 (1Linha)", 2], ["Local (2Linhas)", 2], ["Mundo Total21 (1Linha)", 3], ["Brasil21 (2Linhas)", 3], ["Local (4Linhas)", 5], ["Brasil Total21 (2Linhas)", 5], ["Mundo Total21 (2Linhas)", 7], ["Brasil21 (4Linhas)", 8], ["Local (8Linhas)", 11], ["Brasil21 (8Linhas)", 17]
        ],
    ]

    const multi = [
        ["Controle R$39,99", 3], ["Controle R$54,99", 4.84], ["Controle R$70,00", 7.09], ["6GB", 7.18], ["8GB", 7.28], ["10GB", 8.15], ["15GB", 10.73], ["25GB", 15.44], ["30GB", 18.22], ["50GB", 20.98]
    ]


    const newClient = 3

    const calculoPacotes = () => {
        /* Valores sobre o pacote de TV */
        let facilSd = document.getElementById('facilSd').value * tv[0][0][1]
        let facilHd = document.getElementById('facilHd').value * tv[0][1][1]
        let lightHd = document.getElementById('lightHd').value * tv[0][2][1]
        let mixHd = document.getElementById('mixHd').value * tv[0][3][1]
        let topHd = document.getElementById('topHd').value * tv[0][4][1]

        const valueTotalTv = facilSd + facilHd + lightHd + mixHd + topHd

        /* Valores sobre o pacote de Internet */

        let virtua5Mb = document.getElementById('virtua5').value * internet[0][0][1]
        let virtua10Mb = document.getElementById('virtua10').value * internet[0][1][1]
        let virtua20Mb = document.getElementById('virtua20').value * internet[0][1][1]
        let virtua35Mb = document.getElementById('virtua35').value * internet[0][1][1]
        let virtua30Mb = document.getElementById('virtua30').value * internet[0][2][1]
        let virtua60Mb = document.getElementById('virtua60').value * internet[0][2][1]
        let virtua70Mb = document.getElementById('virtua70').value * internet[0][2][1]
        let virtua100Mb = document.getElementById('virtua100').value * internet[0][3][1]
        let virtua120Mb = document.getElementById('virtua120').value * internet[0][3][1]
        let virtua240Mb = document.getElementById('virtua240').value * internet[0][4][1]
        /* Valores Empresarial*/
        let virtua10MbCnpj = document.getElementById('virtua10cnpj').value * internet[1][0][1]
        let virtua30MbCnpj = document.getElementById('virtua30cnpj').value * internet[1][1][1]
        let virtua10ipfixo = document.getElementById('virtua10ipfixo').value * internet[1][2][1]
        let virtua40cnpj = document.getElementById('virtua40cnpj').value * internet[1][3][1]
        let virtua60cnpj = document.getElementById('virtua60cnpj').value * internet[1][4][1]
        let virtua70cnpj = document.getElementById('virtua70cnpj').value * internet[1][5][1]
        let virtua120cnpj = document.getElementById('virtua120cnpj').value * internet[1][6][1]
        let virtua30ipfixo = document.getElementById('virtua30ipfixo').value * internet[1][7][1]
        let virtua30presenca = document.getElementById('virtua30presenca').value * internet[1][8][1]
        let virtua140cnpj = document.getElementById('virtua140cnpj').value * internet[1][9][1]
        let virtua60ipfixo = document.getElementById('virtua60ipfixo').value * internet[1][10][1]
        let virtua240cnpj = document.getElementById('virtua240cnpj').value * internet[1][11][1]


        const valueTotalVirtuaResid = virtua5Mb + virtua10Mb + virtua20Mb + virtua30Mb + virtua35Mb + virtua60Mb + virtua70Mb + virtua100Mb + virtua120Mb + virtua240Mb

        const valueTotalVirtuaEmpre = virtua10MbCnpj + virtua30MbCnpj + virtua10ipfixo + virtua40cnpj + virtua60cnpj + virtua70cnpj + virtua120cnpj + virtua30ipfixo + virtua30presenca + virtua140cnpj + virtua60ipfixo + virtua240cnpj

        /* Valores sobre o pacote de Telefone */

        let net = document.getElementById('net').value * telefone[0][0][1]
        let local = document.getElementById('local').value * telefone[0][1][1]
        let brasil21 = document.getElementById('brasil21').value * telefone[0][2][1]
        let brasilTt21 = document.getElementById('brasilTt21').value * telefone[0][3][1]
        let mundoTt21 = document.getElementById('mundoTt21').value * telefone[0][4][1]

        /*Planos Empresarial */

        let localOneLine = document.getElementById('localOneLine').value * telefone[1][0][1]
        let brasilOneLine = document.getElementById('brasilOneLine').value * telefone[1][1][1]
        let brasilTotalOneline = document.getElementById('brasilTotalOneline').value * telefone[1][2][1]
        let localTwoLine = document.getElementById('localTwoLine').value * telefone[1][3][1]
        let mundoTotalOneLine = document.getElementById('mundoTotalOneLine').value * telefone[1][4][1]
        let brasilTwoLine = document.getElementById('brasilTwoLine').value * telefone[1][5][1]
        let localFourLine = document.getElementById('localFourLine').value * telefone[1][6][1]
        let brasilTotalTwoline = document.getElementById('brasilTotalTwoline').value * telefone[1][7][1]
        let mundoTotalTwoLine = document.getElementById('mundoTotalTwoLine').value * telefone[1][8][1]
        let brasilFourLine = document.getElementById('brasilFourLine').value * telefone[1][9][1]
        let localEightLine = document.getElementById('localEightLine').value * telefone[1][10][1]
        let brasilEightLine = document.getElementById('brasilEightLine').value * telefone[1][11][1]

        const valueTotalTelefoneResid = net + local + brasil21 + brasilTt21 + mundoTt21
        const valueTotalTelefoneEmpres = localOneLine + brasilOneLine + brasilTotalOneline + localTwoLine + mundoTotalOneLine + brasilTwoLine + localFourLine + brasilTotalTwoline + mundoTotalTwoLine + brasilFourLine + localEightLine + brasilEightLine

        /* Valores sobre o pacote de Multi */

        let multiCtrl1 = document.getElementById('multiCtrl1').value * multi[0][1]
        let multiCtrl2 = document.getElementById('multiCtrl2').value * multi[1][1]
        let multiCtrl3 = document.getElementById('multiCtrl3').value * multi[2][1]
        let multi6 = document.getElementById('multi6').value * multi[3][1]
        let multi8 = document.getElementById('multi8').value * multi[4][1]
        let multi10 = document.getElementById('multi10').value * multi[5][1]
        let multi15 = document.getElementById('multi15').value * multi[6][1]
        let multi25 = document.getElementById('multi25').value * multi[7][1]
        let multi30 = document.getElementById('multi30').value * multi[8][1]
        let multi50 = document.getElementById('multi50').value * multi[9][1]
        const valueTotalMulti = multiCtrl1 + multiCtrl2 + multiCtrl3 + multi6 + multi8 + multi10 + multi15 + multi25 + multi30 + multi50

        /* valores sobre os novos domicilios */
        let novoClientes = document.getElementById('newClient').value * newClient



        function somaTotal() {
            return valueTotalTv + valueTotalVirtuaResid + valueTotalTelefoneResid + valueTotalMulti + valueTotalVirtuaEmpre + novoClientes + valueTotalTelefoneEmpres
        }
        document.getElementById('valorTotal').innerHTML = `Valor a Receber R$ ${somaTotal().toFixed(2).replace('.', ',')}`

    }

    calculoPacotes()


}

function clearAll() {
    document.getElementsByClassName("inputValue").value = 0

    document.getElementById('valorTotal').innerHTML = `Valor Total`
}


