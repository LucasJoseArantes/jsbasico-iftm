/*
    Construa uma página web capaz de solicitar ao usuário uma frase, em seguida, a partir da frase lida, exibir:
    - o total de frutas contidas no texto e as frutas encontradas logo abaixo
    - o total de verdutas contidas no texto e as verduras encontradas logo abaixo

    Utilize somente prompt() e write()
    */

    const frutas = [
        "ABACATE", "ABACAXI", "ABIU", "ABRICÓ", "ABRUNHO", "AÇAÍ", "ACEROLA", "AKEE", "ALFARROBA", "AMEIXA", "AMÊNDOA", "AMORA", "ANANÁS", "ANONA", "ARAÇÁ", "ARANDO", "ARATICUM", "ATA","ATEMOIA", "AVELÃ","BABACO", "BABAÇU", "BACABA", "BACURI", "BACUPARI", "BANANA", "BARU", "BERGAMOTA", "BIRIBÁ", "BURITI", "BUTIÁ","CABELUDINHA", "CACAU", "CAGAITA", "CAIMITO", "CAJÁ", "CAJU", "CALABAÇA", "CALABURA", "CALAMONDIN", "CAMBUCÁ", "CAMBUCI", "CAMU-CAMU", "CAQUI", "CARAMBOLA", "CARNAÚBA", "CASTANHA", "CASTANHA-DO-PARÁ", "CEREJA", "CIRIGUELA", "CIRUELA", "COCO", "CRANBERRY", "CUPUAÇU","DAMASCO","DEKOPON","DENDÊ","DIÓSPIRO","DOVYALIS","DURIÃO","EMBAÚBA","EMBAUBARANA", "ENGKALA", "ESCROPARI", "ESFREGADINHA", "ESPORÃO-DE-GALO","FIGO", "FRAMBOESA", "FRUTA-DO-CONDE", "FRUTA-PÃO", "FEIJOA", "FIGO-DA-ÍNDIA", "FRUTA-DE-CEDRO", "FRUTA-DE-LOBO", "FRUTA-DO-MILAGRE", "FRUTA-DE-TATU","GABIROBA", "GLICOSMIS", "GOIABA", "GRANADILLA", "GRAVATÁ", "GRAVIOLA", "GROSELHA", "GRUMIXAMA", "GUABIJU", "GUABIROBA", "GUARANÁ","HAWTHORN", "HEISTERIA", "HILOCÉREO","IBACURUPARI", "ILAMA", "IMBE", "IMBU", "INAJÁ", "INGÁ", "INHARÉ", "JABUTICABA", "JACA", "JAMBO", "JAMBOLÃO", "JAMELÃO", "JARACATIÁ", "JATOBÁ", "JENIPAPO", "JERIVÁ", "JUÁ", "JUJUBA","KIWI", "KUMQUAT", "KINKAN", "KINO", "KIWANO", "KABOSU", "KARITÉ", "KORLAN","LARANJA", "LIMÃO", "LIMA", "LICHIA", "LONGAN", "LUCUMA", "LACUCHA", "LULO", "LOBEIRA", "LANGSAT", "LARANJA-DE-PACU","MABOLO", "MAÇÃ", "MACADÂMIA", "MACAÚBA", "MAMÃO", "MAMEY", "MAMONCILLO", "MANÁ-CUBIU", "MANGA","MANGABA", "MANGOSTÃO", "MARACUJÁ", "MARANG", "MARMELO","MAROLO","MARULA", "MASSALA", "MELANCIA", "MELÃO", "MELOA", "MEXERICA", "MIRTILO", "MORANGO", "MURICI","NARANJILLA", "NECTARINA", "NÊSPERA", "NONI", "NOZ", "NOZ-PECÃ", "NOZ-MACADÂMIA","OITI", "OXICOCO", "ORANGELO","PERA", "PÊSSEGO", "PITANGA", "PINHA", "PITAIA", "PITOMBA", "PITANGATUBA", "PINDAÍBA", "PEQUI", "PEQUIÁ", "PHYSALIS", "PULASAN", "POMELO", "PUPUNHA", "PUÇÁ", "PATAUÁ", "PAJURÁ", "PIXIRICA", "PISTACHE","QUINA", "QUIUÍ", "QUIXABEIRA","ROMÃ", "RAMBAI", "RAMBUTÃO", "RUKAM","SAGUARAJI", "SALAK", "SANTOL", "SAPOTA", "SAPOTI", "SAPUCAIA", "SAPUTÁ", "SERIGUELA", "SORVINHA","TANGERINA", "TAMARINDO", "TÂMARA", "TORANJA", "TUCUMÃ", "TAIUVA", "TAPIÁ", "TARUMÃ", "TANGOR", "TUCUJÁ", "UVA", "UMBU", "UVAIA", "UCHUVA", "UMÊ", "UXI", "UCUUBA", "VACÍNIO", "VELUDO", "VERGAMOTA", "VELUDO-BRANCO","WAMPI", "XIXÁ","YAMAMOMO", "YUZU","ZIMBRO"
    ]
    
    const verduras = [
        "ABÓBORA", "ABOBRINHA", "AIPIM", "ALHO", "AMARANTO", "AMÊNDOA", "AMENDOIM", "AMENDOIM-DA-MATA", "ANDU", "ARACHACHÁ", "ARROZ", "ARROZ-SELVAGEM", "AVEIA", "AVELÃ", "AZEITONA", "BAROA", "BATATA", "BATATA-DOCE", "BERDANA", "BERINJELA", "BETERRABA", "CABOTCHAN", "CARÁ", "CARÁ-DO-AR", "CARÁ-MOELA", "CASTANHA-DE-BARU", "CASTANHA-DE-CAJU", "CASTANHA-DE-MACACO", "CASTANHA-DO-MARANHÃO", "CASTANHA-DO-PARÁ", "CASTANHEIRO-DO-MATO", "CAXI", "CEBOLA", "CELÓSIA", "CENOURA", "CENTEIO", "CEVADA", "CHALOTA", "CHIA", "CHICHÁ", "CHICHÁ-DO-NORTE", "CHUCHU", "COUVE-NABO", "COUVE-RÁBANO", "CUMARU", "DENDÊ", "ERVILHA", "ERVILHA-DE-POMBO", "ESCORCIONEIRA", "FAVA", "FEIJÃO", "FEIJÃO-ANDU", "FEIJÃO-AZUKI", "FEIJÃO-BOER", "FRUTA-PÃO", "GENGIBRE", "GERGELIM", "GIRASSOL", "GOBÔ", "GOYA", "GRÃO-DE-BICO", "GRUMIXAMA", "GUANDU", "INAJÁ", "INHAME", "JACA VERDE", "JALAPEÑO", "JICAMA", "JILÓ", "KOHLRABI", "LABACA", "LENTILHA", "LINHAÇA", "LÍRIO-DO-BREJO", "MACASSÁ", "MALAGUETA", "MALTE", "MANDIOCA", "MANDIOQUINHA", "MAXIXE", "MENDUBIGUAÇU", "MILHO", "MITSUBÁ", "MOGANGO", "MONGUBA", "MORANGA", "NABO", "NABO-DA-SUÉCIA", "NABO-MEXICANO", "NABO-SUECO", "NOZ", "NOZES-DA-MACADÂMIA", "OLIVA", "PALMITO", "PARU", "PAU-REI", "PÉ-DE-ANTA", "PELEGA", "PEPINO", "PEPINO-JAPONÊS", "PEQUI", "PIMENTA", "PIMENTÃO", "PINHÃO", "PISTACHE", "QUIABO", "QUINOA", "RABANETE", "RÁBANO", "RÁBANO-SILVESTRE", "RAIZ-FORTE", "RUTABAGA", "SHISSÔ", "SOJA", "SORGO", "TAIOBA", "TARO", "TOMATE", "TOMATE-CEREJA", "TONKA", "TRIGO", "TUPINAMBO", "URUCUM", "VAGEM", "WASABI", "XIXÁ", "XOCONOSTLE", "ZIZÂNIA"]
    
    const texto = prompt("Digite um texto:");
    const frases = texto.split(".")
    const textoSemPontuacao = texto.replace(/[^\w\s]/gi, '');
    const palavras = textoSemPontuacao.toUpperCase().split(" ");
    
    console.log(palavras)
    
    let totalFrutas = 0;
    let frutasEncontradas = [];
    let totalVerduras = 0;
    let verdurasEncontradas = [];
    
    // for (const palavra of palavras) {
    //     const palavraMaiusculo = palavra.toUpperCase();
    //     if (frutas.includes(palavraMaiusculo)) {
    //     totalFrutas++;
    //     frutasEncontradas.push(palavraMaiusculo);
    //     }
    //     if (verduras.includes(palavraMaiusculo)) {
    //     totalVerduras++;
    //     verdurasEncontradas.push(palavraMaiusculo);
    //     }
    // }

    
for (const palavra of palavras) {
    if (frutas.includes(palavra)) {
        totalFrutas++;
        if (!frutasEncontradas.includes(palavra)) {
            frutasEncontradas.push(palavra);
        }
    }
    if (verduras.includes(palavra)) {
        totalVerduras++;
        if (!verdurasEncontradas.includes(palavra)) {
            verdurasEncontradas.push(palavra);
        }
    }
}

    document.write("<h1>Texto: " + texto + "</h1>");

    document.write("<h2>Total (palavras analisadas): " + palavras.length + "</h2>")
    document.write("<p>Palavras analisadas: " + palavras.join(", ") + "</p>");

    document.write("<h2>Total (frases analisadas): " + frases.length + "</h2>")
    document.write("<p>Frases analisadas: </p> <ul>");
    
    for( i = 0; i < frases.length; i++){
        document.write("<li>" + frases[i] + "</li>");
    }

    document.write("</ul>");
    document.write("<hr>");

    document.write("<h2>Total de frutas: " + totalFrutas + "</h2>");
    document.write("<p>Frutas encontradas: " + frutasEncontradas.join(", ") + "</p>");

    document.write("<h2>Total de verduras: " + totalVerduras + "</h2>");
    document.write("<p>Verduras encontradas: " + verdurasEncontradas.join(", ") + "</p>");

 

    
    

