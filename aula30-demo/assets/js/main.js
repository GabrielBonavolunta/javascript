const h1 = document.querySelector(".container h1");

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
  
    switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'Segunda';
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = 'Terça';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
      return diaSemanaTexto;
    }
  }

function getNomeMes(numeroMes) {
    let mesTexto;
  
    switch (numeroMes) {
      case 0:
        mesTexto = 'Janeiro';
        return mesTexto;
      case 1:
        mesTexto = 'Fevereiro';
        return mesTexto;
      case 2:
        mesTexto = 'Março';
        return mesTexto;
      case 3:
        mesTexto = 'Abril';
        return mesTexto;
      case 4:
        mesTexto = 'Maio';
        return mesTexto;
      case 5:
        mesTexto = 'Junho';
        return mesTexto;
      case 6:
        mesTexto = 'Julho';
        return mesTexto;
      case 7:
        mesTexto = 'Agosto';
        return mesTexto;
      case 8:
        mesTexto = 'Setembro';
        return mesTexto;
      case 9:
        mesTexto = 'Outubro'; 
        return mesTexto;
      case 10:
        mesTexto = 'Novembro';
        return mesTexto;
      case 11:
        mesTexto = 'Dezembro';
        return mesTexto;

    }
}

function criaData(){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const resultadoDia = getDiaSemanaTexto(diaSemana);
    const resultadoMes = getNomeMes(numeroMes);

    console.log(diaSemana, numeroMes);

    return `${resultadoDia}, ${data.getDate()} de ${resultadoMes} de ${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
}

const data = new Date();
h1.innerHTML = criaData();