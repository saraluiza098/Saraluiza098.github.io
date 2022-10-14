const nome = document.getElementById ('nome');
const nasc = document.getElementById ('nasc');
const cpf = document.getElementById ('cpf');
const tel = document.getElementById ('tel');
const email = document.getElementById ('email');
const senha = document.getElementById ('senha');
const gen = document.getElementById('gen');
const estado = document.getElementById ('estado');
const end = document.getElementById ('end');
const bair = document.getElementById ('bair');
const doenca = document.getElementById ('doenca');
const doen = document.getElementById ('doen');
const sintoma = document.getElementById ('sintoma');
const consdia = document.getElementById ('consdia');
const conshora = document.getElementById ('conshora');
const anot = document.getElementById ('anot');
const term = document.getElementById('termos');

function validate(item){
    item.setCustomValidity('');     
    item.checkValidity();              

    if(item == cpf){ 
        let numcpf = cpf.value.replace(/[^0-9]/g, ""); 
        if(validateCPF(numcpf)) {
            item.setCustomValidity(''); 
        }else{
            item.setCustomValidity('CPF inválido.');
        }
    }

    if (item == nasc){
        let hoje = new Date();      
        let dnasc = new Date(nasc.value);
        let idade = hoje.getFullYear() - dnasc.getFullYear();
        let m = hoje.getMonth() - dnasc.getMonth();
        
        if (m < 0 || (m == 0 && hoje.getDate() < dnasc.getDate() )){
            idade--;
        }
        if(idade >= 0){
            if(idade < 18){
                item.setCustomValidity('Você precisa ser de maior.');
            }else if(idade > 130){
                item.setCustomValidity('Você não deve exagerar na sua idade.');
            }
        }else{
            item.setCustomValidity('Você ainda não nasceu.');
        }

    }

    if (item == consdia){ 
        let hoje = new Date();
        let day = new Date(consdia.value);
        let limite = new Date().getFullYear() + 1;

        if(day < addDays(hoje,7)){
            item.setCustomValidity('Você precisa marcar sua consulta com uma semana de antecedência.');
        }else if(day.getFullYear() > limite){
            item.setCustomValidity('Você precisa marcar sua consulta no máximo para ano que vem.');
        }else{
            item.setCustomValidity('');
        }
    }

    if (item == conshora){
        let horaAbre = 6;
        let horaFecha = 17;
        
        if(conshora.value.substring(0,2) < horaAbre || conshora.value.substring(0,2) > horaFecha){
            item.setCustomValidity('Você deve marcar sua consulta dentro do horário liberado pela Cliníca CliniVille, das 06h às 18h.');
        }else{
            item.setCustomValidity('');
        }
    }

}

function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function validateCPF(cpf){  
    let number, digits, sum, i, result, equal_digits;
    equal_digits = 1;

    if (cpf.length < 11)
        return false;

    for (i = 0; i < cpf.length - 1; i++)

        if (cpf.charAt(i) != cpf.charAt(i + 1)){
            equal_digits = 0;
            break;
        }

    if (!equal_digits){
        number = cpf.substring(0,9);
        digits = cpf.substring(9);
        sum = 0;

        for (i = 10; i > 1; i--)
            sum += number.charAt(10 - i) * i;
            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
                                    
        if (result != digits.charAt(0))
            return false;
            number = cpf.substring(0,10);
            sum = 0;

        for (i = 11; i > 1; i--)
            sum += number.charAt(11 - i) * i;
            result = sum % 11 < 2 ? 0 : 11 - sum % 11;

        if (result != digits.charAt(1))
            return false;
        return true;
    }else
        return false;
}

function maskCPF(){
    let strCPF = cpf.value;
    if(strCPF.length == 3 || strCPF.length == 7) cpf.value += '.';
    if(strCPF.length == 11) cpf.value += '-';
    validate(cpf);
}

function maskTEL(){
    let strTEL = tel.value;
    if(strTEL.length == 2) tel.value = '(' + tel.value + ') ';
    if(strTEL.length == 9) tel.value += '-';
    if(strTEL.length == 15 && strTEL[9] == "-"){
        tel.value = strTEL.substring(0,9)+strTEL[10]+"-"+strTEL.substring(11);
}
}

nome.addEventListener   ('input', function(){validate(nome) });
nasc.addEventListener   ('input', function(){validate(nasc) }); 
consdia.addEventListener   ('input', function(){validate(consdia) }); 
conshora.addEventListener   ('input', function(){validate(conshora) }); 
term.addEventListener('load', function(){validate(term)});
senha.addEventListener('input', function(){validate(senha)});

cpf.addEventListener    ('input', maskCPF);
tel.addEventListener    ('input', maskTEL);

nome.addEventListener    ('invalid',  function(){
    if(nome.value === ''){
        nome.setCustomValidity("Seu nome não pode estar em branco.");
    }else{
        nome.setCustomValidity("Seu nome deve conter apenas letras e espaços.");  
    }
});

nasc.addEventListener('invalid', function(){
    if(nasc.value === ''){
        nasc.setCustomValidity('Insira sua data de nascimento.');
    }
});

cpf.addEventListener('invalid', function(){
    if(cpf.value === ''){
        cpf.setCustomValidity('Insira seu número de CPF.');
    }
});

tel.addEventListener    ('invalid', function(){
    if(tel.value === ''){
        tel.setCustomValidity("Insira seu número de telefone.");
    }else if(tel.value.length < 14){
        tel.setCustomValidity("Seu número de telefone deve conter pelo menos 10 dígitos com DDD.");
    }else{
        tel.setCustomValidity("");
    }
});

email.addEventListener('invalid', function(){
    if(email.value === ''){
        email.setCustomValidity("Insira seu endereço de email.");
    }else{
        email.setCustomValidity("");
    }
});

senha.addEventListener('invalid', function(){
    if(senha.value === ''){
        senha.setCustomValidity('Crie uma senha.');
    }else{
        senha.setCustomValidity('Sua senha deve conter no mínimo 8 caracteres, no máximo 12 caracteres, pelos menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (!@#$%^&*_=+-).');
    }
});

end.addEventListener    ('invalid', function(){
    if(end.value === ''){
        end.setCustomValidity("Insira seu endereço.");
    }else{
        end.setCustomValidity("");
    }
});

bair.addEventListener    ('invalid', function(){
    if(bair.value === ''){
        bair.setCustomValidity("Insira seu bairro.");
    }else{
        bair.setCustomValidity("");
    }
});

consdia.addEventListener    ('invalid', function(){
    if(consdia.value === ''){
        consdia.setCustomValidity("Insira uma data para sua consulta.");
    }
});

conshora.addEventListener    ('invalid', function(){
    if(conshora.value === ''){
        conshora.setCustomValidity("Insira uma hora para sua consulta.");
    }
});

term.addEventListener('invalid', function(){
    term.setCustomValidity('Aceite os termos para concluir o agendamento da sua consulta.');
});

term.addEventListener('click', function(){
    term.setCustomValidity('');
});