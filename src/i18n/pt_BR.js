export default {
    app: {
        name: 'Multi Currency Quote',
        menu: {
            convert: 'Cotar',
            list:    'Todas as moedas',
        },
        language: {
            text: 'Idioma',
            options: {
                en: 'Inglês',
                ja: 'Japonês',
                pt_BR: 'Português (Brasil)',
            },
        },
        currency: {
            list: {
                title: 'Lista detalhada das moedas',
                code: 'Código',
                name: 'Nome',
                symbol: 'Símbolo',
            },
            convert: {
                title: 'Veja cotação em várias moedas',
                value: {
                    input: 'Valor para cotar',
                    placeholder: 'Valor',
                },
                from: {
                    input: 'Escolha a moeda base',
                },
                to: {
                    input: 'Escolha as moedas para cotar',
                },
                submit: 'Cotar',
                error: {
                    required: 'O campo "{field}" é obrigatório',
                },
            },
            result: {
                title: 'Cotação para {value}',
                back: 'Nova cotação',
            },
        }
    }
}
