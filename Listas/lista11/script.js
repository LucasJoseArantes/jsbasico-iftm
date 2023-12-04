

document.addEventListener("DOMContentLoaded", function () {

    function isValidInput(input, regex) {
        return input.match(regex) !== null;
    }

    document.getElementById('validarDataNascimento').addEventListener('click', function () {
        var dataNascimento = document.getElementById('dataNascimento').value.trim();
        var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)?\d{2}$/;

        if (isValidInput(dataNascimento, regex)) {
            alert('Data de nascimento válida!');
        } else {
            alert('Formato de data de nascimento inválido. Use dd/mm/aaaa ou dd/mm/aa.');
        }
    });

    cpfInput = document.getElementById('cpf')
    cpfInput.addEventListener('input', function () {
        inserirMascara('cpf', 'xxx.xxx.xxx-xx.');
    });

    document.getElementById('validarCPF').addEventListener('click', function () {

        var cpf = cpfInput.value.trim();
        var regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

        if (isValidInput(cpf, regexCPF)) {
            alert('CPF válido!');
        } else {
            alert('Formato de CPF inválido. Use xxx.xxx.xxx-xx.');
        }


    });

    document.getElementById('validarMatricula').addEventListener('click', function () {
        var matriculaInput = document.getElementById('matricula');
        var matricula = matriculaInput.value.trim();

        var regexMatricula = /^(IFTM|iftm)-\d{3}\/\d{3}-\w{2}$/;

        if (isValidInput(matricula, regexMatricula)) {
            alert('Número de matrícula válido!');
        } else {
            alert('Formato de número de matrícula inválido. Use IFTM-xxx/xxx-yy ou iftm-xxx/xxx-yy.');
        }
    });

    // ****************************************************************************************
    //   Funcao: inserirMascara
    //   Input: codigoDisciplina(v1, v2 )

    document.getElementById('codigoDisciplina').addEventListener('input', function () {
        inserirMascara('codigoDisciplina', 'MT-12.123-IFTM.');
    });

    document.getElementById('codigoDisciplinaV1').addEventListener('input', function () {
        inserirMascara('codigoDisciplinaV1', 'MT-12.123-IFTM.');
    });


    // ***********************************************************************************************


    // versão 1:
    document.getElementById('validarCodigoDisciplina').addEventListener('click', function () {
        var codigoDisciplinaInput = document.getElementById('codigoDisciplina')
        var codigoDisciplina = codigoDisciplinaInput.value.trim();

        // Expressão regular para validar o formato do código de disciplina
        var regexCodigoDisciplina = /^mt-\d{2}\.[0-9]{3}-iftm$/i;


        if (isValidInput(codigoDisciplina, regexCodigoDisciplina)) {
            alert('Código de disciplina válido!');
        } else {
            alert('Formato de código de disciplina inválido. Use MT-xx.xxx-IFTM.');
        }
    });

    // versão 2:
    document.getElementById('validarCodigoDisciplinaV1').addEventListener('click', function () {
        var codigoDisciplinaV1Input = document.getElementById('codigoDisciplinaV1');
        var codigoDisciplinaV1 = codigoDisciplinaV1Input.value.trim();

        // Expressão regular para validar o formato do código de disciplina (versão 2)
        var regexCodigoDisciplinaV1 = /^MT-\d{2}\.[0-9]{3}-IFTM$/;

        if (regexCodigoDisciplinaV1.test(codigoDisciplinaV1)) {
            alert('Código de disciplina (versão 2) válido!');
        } else {
            alert('Formato de código de disciplina (versão 2) inválido. Use MT-xx.xxx-IFTM.');
        }
    });

    // versão 3:
    document.getElementById('validarCodigoDisciplinaV3').addEventListener('click', function () {
        var codigoDisciplinaV3Input = document.getElementById('codigoDisciplinaV3');
        var codigoDisciplinaV3 = codigoDisciplinaV3Input.value.trim();

        // Expressão regular para validar o formato do código de disciplina (versão 2)
        var regexcodigoDisciplinaV3 = /^MT *-\d{2}\.[0-9]{3}-IFTM$/i;

        if (regexcodigoDisciplinaV3.test(codigoDisciplinaV3)) {
            alert('Código de disciplina (versão 3) válido!');
        } else {
            alert('Formato de código de disciplina (versão 3) inválido. Use MT-xx.xxx-IFTM.');
        }
    });

    document.getElementById('validarNomeCampus').addEventListener('click', function () {
        var nomeCampusInput = document.getElementById('nomeCampus');
        var nomeCampus = nomeCampusInput.value.trim();

        // Expressão regular para validar o formato do nome do campus
        // (permitindo espaços opcionais)
        var regexNomeCampus = /^IFTM\s+campus\s+Uberlândia(\s+Centro)?$/i;

        if (regexNomeCampus.test(nomeCampus)) {
            alert('Nome do campus válido!');
        } else {
            alert('Formato do nome do campus inválido. Use "IFTM campus Uberlândia" ou "IFTM campus Uberlândia Centro".');
        }
    });

    document.getElementById('telefone').addEventListener('input', function () {
        inserirMascara('telefone', '+yy(xx)xxxxx-xxxx.');
    });

    document.getElementById('validarTelefone').addEventListener('click', function () {
        var telefoneInput = document.getElementById('telefone');
        var telefone = telefoneInput.value.trim();

        var regexTelefone = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;

        if (regexTelefone.test(telefone)) {
            alert('Telefone válido!');
        } else {
            alert('Formato do telefone inválido. Use "+yy(xx)xxxxx-xxxx".');
        }
    });

    document.getElementById('validarTelefoneV2').addEventListener('click', function () {
        var telefoneInputV2 = document.getElementById('telefoneV2');
        var telefoneV2 = telefoneInputV2.value.trim();

        var regexTelefoneV2 = /^\(\d{2,3}\)\s?\d{4,5}-\d{4}$/;

        if (regexTelefoneV2.test(telefoneV2)) {
            alert('Telefone válido!');
        } else {
            alert('Formato do telefone inválido. Use "(xx)zyyyyy-wwww".');
        }
    });

    document.getElementById('validarAltura').addEventListener('click', function () {
        var alturaInput = document.getElementById('altura');
        var altura = alturaInput.value.trim();
    
        // Expressão regular para validar o formato da altura
        var regexAltura = /^(1\.[3-9]\d*|1\.[0-9]{2}|2\.[0-4]\d*|2\.50)$/;
        
    
        altura = altura.replace(',', '.');
    
        if (regexAltura.test(altura)) {
            alert('Altura válida!');
        } else {
            alert('Formato da altura inválido. Use "x,xz" ou "x.xz". Intervalo permitido para a altura de uma pessoa: [1.3, 2.5]');
        }
    });
    


    cronometroInput = document.getElementById('cronometro')
    cronometroInput.addEventListener('input', function () {
        inserirMascara('cronometro', 'HH:MM:SS:CC.');
    });

    document.getElementById('validarFaturamento').addEventListener('click', function () {
        var faturamentoInput = document.getElementById('faturamento');
        var faturamento = faturamentoInput.value.trim();
    
        // Expressão regular para validar o formato do faturamento
        var regexFaturamento = /^R\$\d{1,3}(?:\.\d{3})*(?:,\d{1,2})?$/;
    
        if (isValidInput(faturamento, regexFaturamento )) {
            alert('Faturamento válido!');
        } else {
            alert('Formato de faturamento inválido. Use o formato R$0,00 até R$999.999.999.999,99.');
        }
    });

    document.getElementById('validarCronometro').addEventListener('click', function () {
        var cronometroInput = document.getElementById('cronometro');
        var cronometro = cronometroInput.value.trim();

        // Expressão regular para validar o formato do cronômetro
        var regexCronometro = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]:[0-9]{2}$/;

        if (regexCronometro.test(cronometro)) {
            alert('Cronômetro válido!');
        } else {
            alert('Formato de cronômetro inválido. Use HH:MM:SS:CC, onde HH está entre 00 e 23, MM e SS estão entre 00 e 59, e CC está entre 00 e 99.');
        }
    });
});
