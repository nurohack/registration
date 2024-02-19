let user = prompt('Adinizi yazin :');
let password = prompt('Sifrenizi yazin :');



let netice;
switch (user, password) {
    case 'erlams' && '123456':
        netice = `Xos geldin, ${user}`;
        break;
    case 'admin' && '123':
        netice = `Admin, siz sayti redakte ede bilersiniz.`;
        break;

    default:
        netice = 'Istifadeci adi ve ya sifre yanlisdir';
        break;
}

document.getElementById('user').innerHTML = netice;