// dicas
const dicas = [
    "Beba bastante água ao longo do dia.",
    "Faça pausas para alongar o corpo durante o trabalho.",
    "Mantenha uma alimentação balanceada com frutas e vegetais.",
    "Durma pelo menos 7 a 8 horas por noite.",
    "Pratique exercícios físicos diariamente, mesmo que por 15 minutos.",
    "Evite alimentos ultraprocessados e ricos em açúcar.",
    "Consuma proteínas magras e grãos integrais.",
    "Mantenha uma boa postura ao sentar e caminhar.",
    "Dedique alguns minutos para meditação ou técnicas de relaxamento.",
    "Realize check-ups médicos regulares.",
    "Use protetor solar diariamente, mesmo em dias nublados.",
    "Reduza o consumo de bebidas alcoólicas.",
    "Lave as mãos com frequência para evitar infecções.",
    "Cuide da saúde bucal, escovando os dentes pelo menos duas vezes ao dia.",
    "Inclua fibras na dieta para melhorar a digestão.",
    "Gerencie o estresse com atividades que você goste.",
    "Mantenha o ambiente de casa e trabalho limpo e organizado.",
    "Evite o tabaco e ambientes com fumaça.",
    "Pratique exercícios de respiração para aliviar a tensão.",
    "Coma devagar, saboreando cada mordida.",
    "Planeje suas refeições para evitar escolhas impulsivas.",
    "Reserve um tempo para um hobby que traga prazer.",
    "Controle o consumo de sal para manter a pressão arterial sob controle.",
    "Faça alongamentos logo pela manhã para despertar o corpo.",
    "Invista na qualidade do sono criando uma rotina noturna.",
    "Use cadeiras ergonômicas para evitar dores nas costas.",
    "Evite longos períodos sentado, levantando-se a cada hora.",
    "Prefira alimentos naturais e frescos sempre que possível.",
    "Faça caminhadas ao ar livre para aproveitar a luz natural.",
    "Mantenha um peso corporal saudável com equilíbrio entre dieta e exercícios.",
    "Beba chás relaxantes, como camomila, para ajudar a dormir.",
    "Desconecte-se dos dispositivos digitais para reduzir a fadiga ocular.",
    "Cuide da saúde mental, reservando momentos para você.",
    "Cultive relacionamentos positivos e um bom suporte social.",
    "Estabeleça metas realistas para alcançar uma vida mais saudável.",
    "Faça pausas para caminhar durante o trabalho ou estudo.",
    "Divida suas refeições em pequenas porções ao longo do dia.",
    "Lave bem frutas e vegetais antes de consumi-los.",
    "Evite gorduras trans presentes em muitos alimentos industrializados.",
    "Varie suas atividades físicas para trabalhar diferentes grupos musculares.",
    "Dedique um tempo diário para o autocuidado.",
    "Experimente práticas como yoga ou pilates para melhorar a flexibilidade.",
    "Comece o dia com um copo de água morna com limão.",
    "Prepare lanches saudáveis para evitar frituras e alimentos processados.",
    "Priorize alimentos ricos em antioxidantes, como frutas vermelhas e vegetais verdes.",
    "Mantenha um diário de saúde para acompanhar seus hábitos.",
    "Participe de atividades em grupo para socializar e se exercitar.",
    "Use as escadas sempre que possível para aumentar a atividade física.",
    "Reserve momentos para relaxamento e descanso sem interrupções.",
    "Lembre-se de fazer check-ups preventivos para monitorar sua saúde."
  ];
  
  // pegando os elementos da página
  const btnGerarDica = document.getElementById("btn-gerar-dica");
  const textoDica = document.getElementById("texto-dica");
  
  // gerando uma dica aleatória
  btnGerarDica.addEventListener("click", function() {
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    textoDica.textContent = dicas[indiceAleatorio];
  });
  