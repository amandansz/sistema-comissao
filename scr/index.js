function calcularComissao() {

    const vendedores = [
        {
            nome: "Erick",
            nivel: "Pleno",
            vendasDoMes: 50000,
            metaDoMes: 30000,
        },
        {
            nome: "Maria",
            nivel: "Senior",
            vendasDoMes: 70000,
            metaDoMes: 30000
        },
        {
            nome: "Gabriel",
            nivel: "Junior",
            vendasDoMes: 20000,
            metaDoMes: 30000
        }

    ]

    const niveis = {
        junior: 0.05,
        pleno: 0.10,
        senior: 0.15
    };

    for (let i = 0; i < vendedores.length; i++) {
        const vendedor = vendedores[i].nome;
        const nivel = vendedores[i].nivel;
        const vendasDoMes = vendedores[i].vendasDoMes;
        const metaDoMes = vendedores[i].metaDoMes;

        if (vendasDoMes >= metaDoMes) {
            let comissao = vendasDoMes * niveis[nivel.toLowerCase()];
            console.log("O vendedor(a) " + vendedor +
                " bateu a meta do mês com a venda de R$ " + vendasDoMes.toFixed(2) +
                " e recebrá uma comissão de R$ " + comissao.toFixed(2));
        } else {
            console.log("O vendedor(a) " + vendedor +
                " não bateu a meta do mês. Vendas realizadas: R$ " + vendasDoMes.toFixed(2) +
                ". Comissão: R$ 0.00");
        }

    }
}


calcularComissao();