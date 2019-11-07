function action_respostas(args) {
    if(args == 'one') {
        document.getElementById('resposta1').style.display = 'block';
        document.getElementById('resposta2').style.display = 'none';
        document.getElementById('resposta3').style.display = 'none';
        document.getElementById('resposta4').style.display = 'none';
        document.getElementById('resposta5').style.display = 'none';
    }
    else if(args == 'two') {
        document.getElementById('resposta1').style.display = 'none';
        document.getElementById('resposta2').style.display = 'block';
        document.getElementById('resposta3').style.display = 'none';
        document.getElementById('resposta4').style.display = 'none';
        document.getElementById('resposta5').style.display = 'none';
    }
    else if(args == 'three') {
        document.getElementById('resposta1').style.display = 'none';
        document.getElementById('resposta2').style.display = 'none';
        document.getElementById('resposta3').style.display = 'block';
        document.getElementById('resposta4').style.display = 'none';
        document.getElementById('resposta5').style.display = 'none';
    }
    else if(args == 'four') {
        document.getElementById('resposta1').style.display = 'none';
        document.getElementById('resposta2').style.display = 'none';
        document.getElementById('resposta3').style.display = 'none';
        document.getElementById('resposta4').style.display = 'block';
        document.getElementById('resposta5').style.display = 'none';
    }
    else if(args == 'five') {
        document.getElementById('resposta1').style.display = 'none';
        document.getElementById('resposta2').style.display = 'none';
        document.getElementById('resposta3').style.display = 'none';
        document.getElementById('resposta4').style.display = 'none';
        document.getElementById('resposta5').style.display = 'block';
    }
}