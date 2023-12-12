const detalhesSection = document.querySelector('.detalhes');
const overlay = document.getElementById('overlay');

// Função para mostrar os detalhes do livro
function exibirDetalhesLivro(index) {
    // Dados dos livros
    const livros = [
        {
            imagem: 'img/Imagens acervo - Copia/1.jpeg',
            titulo: 'Titulo: Cantigas de Adolescer',
            autor: '<strong>Autor:</strong> Elias José',
            sinopse: '<strong>Sinopse:</strong> O livro retrata a riqueza do universo adolescente: os amores, os desejos, os medos, as dúvidas, os conflitos familiares, as mudanças do corpo. A linguagem e a beleza dos poemas fazem com que todo leitor jovem se identifique com eles, despertando-lhe a sensibilidade.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/2.jpeg',
            titulo: 'Título: O Sítio no Descobrimento',
            autor: '<strong>Autor:</strong> Monteiro Lobato',
            sinopse: '<strong>Sinopse:</strong> A história começa quando Pedrinho chega ao Sítio do Picapau Amarelo para passar as férias escolares. Mas o menino parece um tanto esquisito. Em vez de se aventurar pela mata de bodoque na mão, o garoto passa os dias estudando na biblioteca da avó. Instigado pelo que aprendeu na escola, mas confuso com as informações desencontradas que pesquisou nos livros, Pedrinho está cismado: afinal, qual é a verdadeira história do descobrimento do Brasil? Cabral veio parar aqui por acaso ou de propósito? Se já havia índios vivendo nestas terras, então por que se fala em "descobrimento" e não em "invasão"? Para obter todas as respostas, Emília propõe um jeito: usar o pó de pirlimpimpim para voltar ao passado e participar da expedição portuguesa que chegou primeiro às praias brasileiras. Assim, Emília, Visconde de Sabugosa, Narizinho, Pedrinho e outros personagens se aventuram em uma viagem no tempo para a época do Descobrimento do Brasil',
        },
        {
            imagem: 'img/Imagens acervo - Copia/3.jpeg',
            titulo: 'Título: O Dia em que a Minha Vida Mudou',
            autor: '<strong>Autor:</strong> Keka Reis',
            sinopse: '<strong>Sinopse:</strong> Parecia um dia comum. Bom, pelo menos um dia comum do sexto ano. Até que, no meio da aula de ciências, Mia recebeu um embrulho inesperado. Um chocolate Pura Magia! Aquele chocolate trazia as melhores lembranças de seu pai, e há anos ela não encontrava mais pra vender. Junto com o chocolate, um bilhete: “Quer sentar do meu lado hoje na perua?”, com a letra do Bereba! E agora? Eles não eram só amigos? Por que tudo estava ficando estranho de repente? O pessoal tinha começado a passar o dia inteiro no celular e a chamar o recreio de intervalo, os adultos só queriam ter conversas sérias, não dava mais para comprar roupa na seção infantil… Como sobreviver a tudo isso e ainda decidir como responder o bilhete?',
        },
        {
            imagem: 'img/Imagens acervo - Copia/4.jpeg',
            titulo: 'Título: Júnior e os Biscoitos Zumbis',
            autor: '<strong>Autor:</strong> Pires',
            sinopse: '<strong>Sinopse:</strong> Júnior é um menino comum que gosta de brincar na porta de casa no fim do dia. O autor sempre via Júnior e Pedro brincando na porta de casa no fim do dia. Num desses fins de tarde, ele resolveu colocar essas histórias no papel. "Júnior e os biscoitos de zumbis" é a primeira dessas histórias. Elas são baseadas em fatos reais... Com exceção do que foi inventado.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/5.jpeg',
            titulo: 'Título: Chá das Cinco',
            autor: '<strong>Autor:</strong> Gilberto Mendonça Teles',
            sinopse: '<strong>Sinopse:</strong> Após viver e desvendar grandes mistérios na Casa da Neblina, na Serra das Lianas e na Ilha do Tempo Perdido, desta vez os alunos de dona Dolores são guiados apenas pelo motorista Gumercindo até o Jardim das Margaridas, enquanto a diretora participa de um “chá das cinco” no Raríssimo Antiquário. Porém, crisântemos negros, margaridas, castelos, lebres e tartarugas parecem misteriosamente ligar o encontro da diretora ao passeio de seus alunos. Em mais uma história bem-humorada e misteriosa, Lino de Albergaria mistura imaginação e realidade de maneira ágil e fluida, criando um cenário perfeito para ser desvendado pela animada turma de dona Dolores e por todos os seus leitores.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/6.jpeg',
            titulo: 'Título: Cantigas para Entender o Tempo',
            autor: '<strong>Autor:</strong> Elias José.',
            sinopse: '<strong>Sinopse:</strong> "Cantigas Para Entender o Tempo" é uma obra poética concebida por Elias José. Este livro engloba uma série de poemas que exploram temas como amor, sonhos e a passagem do tempo, sendo especialmente direcionado ao público adolescente. Publicado em 5 de abril de 2015 pela editora Dimensão, a obra compreende 64 páginas, oferecendo uma jornada lírica e reflexiva aos leitores.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/7.jpeg',
            titulo: 'Título: Mensagem para Você',
            autor: '<strong>Autor:</strong> Cecelia Ahern',
            sinopse: '<strong>Sinopse:</strong> "Mensagem para Você" é um romance escrito por Cecelia Ahern, narrando a história de dois indivíduos que se comunicam por e-mail sem conhecer a verdadeira identidade um do outro. Publicado em 2004, o livro posteriormente ganhou uma adaptação cinematográfica em 1998.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/8.jpeg',
            titulo: 'Título: Confissões de um Amigo Imaginário',
            autor: '<strong>Autor:</strong> Michelle Cuevas',
            sinopse: '<strong>Sinopse:</strong> A história gira em torno de Jacques Papier, um garoto que se sente invisível e decide criar um amigo imaginário para si mesmo. No entanto, quando a família de sua irmã, Fleur, começa a questionar a presença do amigo imaginário de Jacques, ele descobre a verdade surpreendente: ele é o amigo imaginário de Fleur. Determinado a encontrar seu próprio propósito, Jacques pede a Fleur para libertá-lo, apenas para descobrir que ele acaba se tornando o amigo imaginário de outra pessoa em vez de encontrar sua própria existência independente. A narrativa explora a busca de Jacques pelo verdadeiro significado de sua existência e seu desejo de ser mais do que apenas um amigo imaginário.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/9.jpeg',
            titulo: 'Título: Antes do Depois',
            autor: '<strong>Autor:</strong> Henrique Schneider',
            sinopse: '<strong>Sinopse:</strong> Bartolomeu reinventa a vida por meio da escrita e se entrega à filosofia, proporcionando ao leitor o deleite do espanto com a beleza que ele constrói habilmente com palavras. Seus escritos evocam suspiros, risos e a nostalgia dos afetos. Guardo com quase certeza a sensação de ter estado presente em meu próprio batizado, algo que me pertencia sem esforço. Mesmo se a lembrança escapa, não desejo esquecê-la. Em suas conversas, ele envolve o leitor ao fantasiar sobre a vida, entrelaçando os fios da memória, entre o que lembra e o que inventa, na prosa poética que caracteriza sua escrita. Fascinado pelas palavras, Bartolomeu manipula magistralmente seus diferentes significados, revelando poesia no cotidiano.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/10.jpeg',
            titulo: 'Título: Romeu e Julieta',
            autor: '<strong>Autor:</strong> William Shakespeare',
            sinopse: '<strong>Sinopse:</strong>  A trama desenrola-se em Verona, Itália, aproximadamente no ano de 1500. Romeu e Julieta, únicos filhos das famílias inimigas Montecchios e Capuletos, apaixonam-se durante um baile de máscaras e decidem se casar em segredo. Contudo, a hostilidade entre suas famílias, questões econômicas e a presença de violência acabam por obstaculizar o curso do seu amor.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/11.jpeg',
            titulo: 'Título: Estrelas Tortas',
            autor: '<strong>Autor:</strong> Walcyr Carrasco',
            sinopse: '<strong>Sinopse:</strong> O livro narra a história de Isabel, uma jovem que enfrenta uma condição de saúde rara, resultando em uma locomoção desajeitada e deformidade facial. Sofrendo com o preconceito e rejeição, inclusive por parte de sua própria família, a narrativa explora temas de amizade, superação e inclusão social.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/12.jpeg',
            titulo: 'Título: Era uma vez Dom Quixote',
            autor: '<strong>Autor:</strong> Angela Lago',
            sinopse: '<strong>Sinopse:</strong> “Era uma vez Dom Quixote” é um livro clássico de Miguel de Cervantes que conta a história de um senhor rural que adorava ler livros de cavalaria e acreditava, de verdade, nas aventuras escritas. Ele decide tornar-se um cavaleiro andante e passa a viver como se estivesse na Idade Média. Para ele, cavaleiros armados, damas em apuros, gigantes, monstros e moinhos de vento - frutos de sua imaginação - eram seres vivos. A história apresenta um mundo de fantasia com o aventureiro cavaleiro, seu fiel escudeiro Sancho Pancha, seu cavalo Rocinante e sua amada - a princesa Dulcineia.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/13.jpeg',
            titulo: 'Título: O Gato Xadrez',
            autor: '<strong>Autor:</strong> Marcelo Duarte',
            sinopse: '<strong>Sinopse:</strong> É um livro infantil escrito por Isa Mara Lando e Tatiana Paiva, que explora diferentes possibilidades de identidade para o personagem, um gato, se assumir e se revelar ao mundo, transportando as crianças para o campo da imaginação.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/14.jpeg',
            titulo: 'Título: Biblioteca do Sr. Lemoncello',
            autor: '<strong>Autor:</strong> Chris Grabenstein',
            sinopse: '<strong>Sinopse:</strong> "Biblioteca do Sr. Lemoncello" é um livro infantil escrito por Chris Grabenstein, centrado em Kyle, um entusiasta de jogos que vive à sombra de seus irmãos mais talentosos. Seu ídolo, o excêntrico criador de jogos Sr. Lemoncello, convida doze crianças para passarem uma noite na nova biblioteca da cidade. No entanto, ao amanhecer, todas as portas estão trancadas, desencadeando uma aventura em que Kyle e os outros participantes devem resolver pistas e decifrar charadas para encontrar a saída secreta. O enredo destaca não apenas a emoção de participar, mas principalmente a desafiadora jornada de escapar da biblioteca.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/15.jpeg',
            titulo: 'Título: A Sorveteria - Histórias para Refrescar a Alma',
            autor: '<strong>Autor:</strong> Tadeu Pereira',
            sinopse: '<strong>Sinopse:</strong> O livro desvenda a trama de uma sorveteria em Ipê D’Oeste, onde diversas histórias se entrelaçam, começam, terminam ou se desdobram. Sob a gestão do cativante Seu Atílio, um habilidoso contador de histórias, a narrativa revela relatos comoventes, engraçados e intrigantes. Os personagens incluem desde um ladrão de joias que rouba para presentear a amada, até histórias de amor reacendido com sorvetes especiais. Entre os frequentadores estão pessoas como o Sr. Nicanor, que troca remédios por sorvetes, a cantora italiana Veneza Pieromonti, que redescobre a alegria e a música com um sorvete especial, e outros personagens cativantes, cujas vidas se entrelaçam ao redor da sorveteria, repletas de lembranças, risos e travessuras da infância.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/16.jpeg',
            titulo: 'Título: Quase Caio',
            autor: '<strong>Autor:</strong> Andrea Del Fuego',
            sinopse: '<strong>Sinopse:</strong> A obra é uma coletânea de crônicas que ilustram experiências do cotidiano, explorando temas como inseguranças, medos, a vivência da leitura, crenças e construções sociais. Caio, o narrador, é um jovem residente em uma pequena cidade no interior de São Paulo, cuja paixão por Lena é central na narrativa. O livro se divide em três partes, cada uma retratando um momento específico da vida de Caio.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/17.jpeg',
            titulo: 'Título: Lola e Ervilha',
            autor: '<strong>Autor:</strong> Annette Mierswa',
            sinopse: '<strong>Sinopse:</strong> Este livro infantil gira em torno de Lola, uma menina curiosa e vibrante que reside em um pequeno apartamento na cidade com seus pais e seu gato Ervilha. Desde o desaparecimento de seu pai, Lola se recusa a crescer, refugiando-se em um mundo de fantasia. A chegada de Kurt, o novo namorado de sua mãe, a deixa contrariada, até que ela conhece Pelle, um garoto misterioso que muda completamente a situação. A história explora a jornada de Lola entre a realidade e a imaginação, proporcionando uma narrativa envolvente para o público infantil.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/18.jpeg',
            titulo: 'Título: Oxente! A Mulher Enterrada Viva',
            autor: '<strong>Autor:</strong> Toni Brandão',
            sinopse: '<strong>Sinopse:</strong> Este romance infanto-juvenil desenrola-se em torno do desaparecimento misterioso de Didi, enquanto Léo e Ana são implacavelmente perseguidos por homens vestidos com ternos cinza metálico. As perguntas fundamentais permeiam a trama: Onde está Didi? Qual é a intenção dos homens metálicos? E qual é a conexão com a música do repentista que menciona uma mulher enterrada viva? O enredo promete uma narrativa cheia de suspense e mistério, destinada a capturar a imaginação dos leitores jovens.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/19.jpeg',
            titulo: 'Título: Filho de Peixe',
            autor: '<strong>Autor:</strong> Marcelo Carneiro da Cunha.',
            sinopse: '<strong>Sinopse:</strong> Este livro juvenil segue a vida de Nino, um jovem que reside com sua família em uma pequena comunidade de pescadores em Pernambuco. Narrada por Nino, a história começa com uma descrição de sua rotina cotidiana e seus sonhos juvenis. No entanto, a trama toma um rumo drástico quando a única fonte de renda de sua família, vinculada à saúde do coral, enfrenta ameaças de degradação irreversível. Determinado a salvar sua comunidade e seu modo de vida, Nino se lança em uma aventura para enfrentar os desafios e preservar seu ambiente.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/20.jpeg',
            titulo: 'Título: Pra Ficar com Ela',
            autor: '<strong>Autor:</strong> Juliana Parrini',
            sinopse: '<strong>Sinopse:</strong> A narrativa explora temas de relacionamentos, segundas chances e autodescoberta, centrando-se na vida de Nina. Ela está em um relacionamento estável com seu namorado de longa data, Felipe.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/21.jpeg',
            titulo: 'Título: A Caravana do Oriente',
            autor: '<strong>Autor:</strong> Folia-De-Reis',
            sinopse: '<strong>Sinopse:</strong> Este livro, escrito por Fábio Sombra, centra-se na história de Rinaldo, um menino de origem humilde que sonha em receber a visita dos três Reis Magos em sua simples casinha de pau-a-pique. A trama oferece uma imersão na magia do folclore brasileiro, destacando-se por sua poesia e pelas tradições da cultura popular, prometendo encantar o público infanto-juvenil.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/22.jpeg',
            titulo: 'Título: Confissões de um Vira-lata',
            autor: '<strong>Autor:</strong> Orígenes Lessa',
            sinopse: '<strong>Sinopse:</strong> A história é contada em primeira pessoa por um cachorro inteligente, crítico e perspicaz, que cresceu nas ruas sem nome e sem dono. Este livro oferece uma crítica bem-humorada ao comportamento humano, explorando a perspectiva única de um cachorro. A narrativa é uma reflexão sobre a vida, as atitudes humanas, a lealdade e o afeto, sendo direcionada ao público infanto-juvenil e prometendo tocar o coração dos leitores.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/23.jpeg',
            titulo: 'Título: Cuidado Gato Apaixonado',
            autor: '<strong>Autor:</strong> Toni Brandão',
            sinopse: '<strong>Sinopse:</strong> A trama centraliza-se em Tui e seu melhor amigo Alê, que conhecem uma garota no primeiro dia de aula. O livro explora temas como o primeiro amor, descobertas e sentimentos conflitantes, oferecendo uma reflexão sobre a adolescência e as emoções que a permeiam. Direcionada ao público juvenil, a obra promete cativar os leitores.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/24.jpeg',
            titulo: 'Título: A Cara da Rua',
            autor: '<strong>Autor:</strong> Marcelo Moreira Xavier',
            sinopse: '<strong>Sinopse:</strong> O livro é uma coletânea de crônicas que revela a essência da rua por meio de uma sinfonia de cores, sob a perspectiva das ervas daninhas, das emoções públicas, da vida dos objetos e das diversas metamorfoses que experimentamos ao longo do dia e da vida. Explora também os insetos que habitam a guerrilha estética, despojada e precária que encontramos nas ruas.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/25.jpeg',
            titulo: 'Título: O Menino que Caiu no Buraco',
            autor: '<strong>Autor:</strong> Ivan Jaf',
            sinopse: '<strong>Sinopse:</strong> A história conta a vida de um garoto cuja família está passando por graves dificuldades econômicas, pois seu pai, marceneiro, há um ano não consegue levantar da cama. Desde então, a família sobrevive graças ao esforço da mãe. Certo dia, a caminho da escola, o garoto desvia de seu trajeto e, distraído, cai em um profundo buraco. Apavorado, tenta descobrir uma maneira de sair do poço. Seus temores aumentam durante a noite, quando sombras e ruídos tomam conta do local. Para sair dessa situação, só mesmo com muita força de vontade.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/26.jpeg',
            titulo: 'Título: Informe do Planeta Azul e Outras Histórias',
            autor: '<strong>Autor:</strong>  Luis Fernando Verissimo',
            sinopse: '<strong>Sinopse:</strong>  A obra reúne textos de diversas fases da trajetória do escritor, alguns deles publicados nos anos 1980 e 1990 e, em alguns casos, nunca mais republicados. As temáticas e personagens dos textos são muito variadas, passando pelas cenas mais cotidianas, até situações que beiram o absurdo, como a da mulher que, na sala de espera do consultório do dentista, lê sobre sua própria vida numa revista.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/27.jpeg',
            titulo: 'Título: O Menino Nelson Mandela',
            autor: '<strong>Autor:</strong> Viviane Mazza',
            sinopse: '<strong>Sinopse:</strong> O livro O Menino Nelson Mandela é uma biografia romanceada que aborda com leveza assuntos como opressão, racismo e segregação e narra a trajetória da figura mítica do primeiro presidente negro da África do Sul, entremeada pela visão de mundo do homem cuja luta pôs fim ao apartheid e devolveu a esperança e a liberdade a toda uma nação. Infelizmente, não consegui encontrar informações sobre o número de páginas do livro.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/28.jpeg',
            titulo: 'Título: Fuja Coelhinho Fuja',
            autor: '<strong>Autor:</strong> Barbara Mitchelhill',
            sinopse: '<strong>Sinopse:</strong>  é um livro infantil que narra a jornada de um pequeno coelhinho que sai da toca para explorar a floresta. Ao longo de sua aventura, o coelhinho encontra um lobo perigoso e faminto, que começa a caçar o animal indefeso.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/29.jpeg',
            titulo: 'Título: Histórias de Antigamente',
            autor: '<strong>Autor:</strong> Patricia Auerbach',
            sinopse: '<strong>Sinopse:</strong>  A obra é uma antologia com mais de quarenta textos de leitura fácil e divertida, que abordam situações triviais de nosso dia a dia com o inigualável humor da autora. A obra reúne textos de diversas fases da trajetória da escritora, alguns deles publicados nos anos 1980 e 1990 e, em alguns casos, nunca mais republicados. As temáticas e personagens dos textos são muito variadas, passando pelas cenas mais cotidianas, até situações que beiram o absurdo, como a da mulher que, na sala de espera do consultório do dentista, lê sobre sua própria vida numa revista.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/30.jpeg',
            titulo: 'Título: Minha Vida Não é Cor-de-Rosa',
            autor: '<strong>Autor:</strong> Penélope Martins',
            sinopse: '<strong>Sinopse:</strong> A história narra a vida de uma garota chamada Olívia, que passa por situações bastante complicadas, o que faz com que ela mude sua forma de ser e de pensar. Com o decorrer da história, ela passa por conflitos que fazem parte da adolescência de todos. Há uma dissertação sobre namoro, amizades e responsabilidades, coisas típicas que passam a surgir na adolescência. A protagonista, com todos esses problemas, passa a ser alguém que tenta fazer a diferença na vida de todos.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/31.jpeg',
            titulo: 'Título: Cinco Crianças e um Segredo',
            autor: '<strong>Autor:</strong> Edith Nesbit',
            sinopse: '<strong>Sinopse:</strong> A história narra as aventuras de cinco irmãos ingleses que, durante as férias, encontram um duende-da-areia. Essa criatura estranha e peluda passa a realizar um desejo das crianças a cada dia. Mas, uma vez realizados, os desejos colocam os meninos em grandes e divertidos apuros',
        },
        {
            imagem: 'img/Imagens acervo - Copia/32.jpeg',
            titulo: 'Título: Borboletas na Chuva',
            autor: '<strong>Autor:</strong> Neusa Sorrenti',
            sinopse: '<strong>Sinopse:</strong> A história narra a vida de uma família que vive em uma cidade do interior. A protagonista, Stela, é a filha mais nova da família e passa seus dias observando o jardim, admirando as borboletas e brincando com seu gato. O livro trata de relações de amizade, de sentimentos e da vida simples, mas cheia de surpresas e imprevistos, capaz de ensinar muito às pessoas.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/33.jpeg',
            titulo: 'Título: Minha Querida Assombração',
            autor: '<strong>Autor:</strong> Reginaldo Prandi',
            sinopse: '<strong>Sinopse:</strong> publicado pela primeira vez em 2003. O livro conta a história de uma família que passa férias em uma fazenda antiga do interior. Na fazenda, as crianças ouvem histórias de arrepiar contadas à noite pela proprietária, Dona Santa. De repente, coisas estranhas começam a acontecer, envolvendo a todos numa trama do outro mundo.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/34.jpeg',
            titulo: 'Título: Pedro Bandeira Os Karas a Droga do Amor',
            autor: '<strong>Autor:</strong> Pedro Bandeira',
            sinopse: '<strong>Sinopse:</strong> A história começa com um cientista americano que havia criado a cura para a praga do século, o mal que transforma o amor em morte, sendo sequestrado no Brasil. Magrí e Chumbinho tentam reunir a turma secreta dos Karas para investigar esse crime tão tremendo para a humanidade. Mas Miguel, Calu e Crânio, por não querer disputar entre si o amor por Magrí, decidem terminar com os Karas. Para agravar a situação, o Doutor Q.I., o rei dos criminosos, foge da Penitenciária de Segurança Máxima.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/35.jpeg',
            titulo: 'Título: Esperos, Espertinhos, Espertalhões',
            autor: '<strong>Autor:</strong> Ernani Ssó',
            sinopse: '<strong>Sinopse:</strong> O livro é uma coletânea de nove histórias que exploram situações em que pessoas espertas, astutas ou ardilosas buscam tirar vantagens de diferentes maneiras. As histórias são representativas de diferentes países, como a Mongólia, a Espanha, a Rússia e o Brasil. Entre os personagens, há um juiz de ratos na velha Arábia, um rei gozador na Mongólia, um padre guloso e um sujeito que finge de morto na Espanha.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/36.jpeg',
            titulo: 'Título: As Palavras Voam',
            autor: '<strong>Autor:</strong> Cecília Meireles',
            sinopse: '<strong>Sinopse:</strong> O livro foi publicado pela primeira vez em 2013 pela Editora Global. Os poemas foram selecionados por Queirós, que também escreveu o prefácio do livro. Em suas palavras, “os poemas deste livro foram selecionados e organizados por Bartolomeu Campos de Queirós, escritor, que como Cecília Meireles, também conhecia o encantamento que as palavras produzem. Movida, assim, me parece, pelo afeto e respeito que promovem a dignidade do sujeito, ela não se esqueceu do tamanho do tempo. Cecília Meireles se expressou de maneira sofisticadamente simples. Daí sua poesia se tornar propícia a todos, inaugurando vários níveis de leitura, como convém à literatura. (…) soube como ninguém, que o homem é o verbo e sua vida conjugável: é passado, é presente, é futuro.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/37.jpeg',
            titulo: 'Título: Rita Varwel à Procura do Rusdimepe',
            autor: '<strong>Autor:</strong> Gisele Joras',
            sinopse: '<strong>Sinopse:</strong> O livro conta a história de Rita Varmel, uma menina que está cansada de passar as férias em casa. Um dia, ela vê um menino voando no céu e seu mundo vira de cabeça para baixo. Bruno Átimo, o garoto voador, a leva para o Vale Secreto, um lugar habitado por criaturas fantásticas. Lá, Rita conhece um orfanato de super-heróis, faz amizade com um pégaso cintilante e é acolhida por uma misteriosa família de vampiros que mora no meio da floresta. No entanto, nem tudo no Vale Secreto é feliz e encantador. Litúni, uma sombria figura de identidade desconhecida, há alguns anos utilizou um raro metal chamado rusdimepe para exterminar todos os super-heróis, inclusive os pais de Bruno. O problema é que Litúni parece estar de volta, e tudo indica que deseja terminar o que começou. Será que o suspeito está mais perto do que Rita imagina? Em quem ela pode realmente confiar? Enquanto procura resolver essas charadas, o perigo se aproxima a cada dia e, ao tentar proteger os heróis órfãos, Rita vai viver grandes aventuras e descobrir o valor da verdadeira amizade.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/38.jpeg',
            titulo: 'Título: A Esperança é uma Torta de Maçã',
            autor: '<strong>Autor:</strong> Sarah Moore Fitzgerald',
            sinopse: '<strong>Sinopse:</strong> O livro conta a história de Oscar, um jovem talentoso na arte da culinária, e sua inseparável amiga Meg. Oscar tem o incrível dom de consertar qualquer problema assando tortas de maçã perfeitas. Mas nem suas renomadas tortas conseguem aplacar a tristeza de seu pai, ainda de luto pela morte da esposa. Quando Meg recebe a notícia de que irá se mudar para a Nova Zelândia por seis meses, ela fica devastada com a ideia de ficar tanto tempo longe do amigo. Para piorar tudo, a casa de Meg é alugada pela família da terrível Paloma Killealy, que inventa todo tipo de mentiras sobre o garoto na escola. De repente, Oscar desaparece. Sua bicicleta e suas roupas são encontradas no litoral, e todos acreditam que o pior aconteceu e ele cometeu suicídio. Com a ajuda do irmãozinho de Oscar, Meg decide investigar o paradeiro dele, e por mais difícil que seja, nunca abrir mão da esperança.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/39.jpeg',
            titulo: 'Título: Berimbau e Outros Poemas',
            autor: '<strong>Autor:</strong> Manuel Bandeira',
            sinopse: '<strong>Sinopse:</strong> Os poemas abrangem temas simples e cotidianos, como animais de estimação, brincadeiras de rua e situações divertidas do dia a dia. A musicalidade dos versos evidencia que a criação de sentidos também pode emergir da combinação de sons.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/40.jpeg',
            titulo: 'Título: Uma Mulher Chamada Guitarra',
            autor: '<strong>Autor:</strong> Vinicius de Moraes.',
            sinopse: '<strong>Sinopse:</strong> A obra, publicada pela editora Boa Companhia em 2013, compila algumas das crônicas escritas pelo poeta Vinicius de Moraes. O livro destaca a infância e as memórias do Rio de Janeiro, oferecendo uma visão menos conhecida, mas igualmente sedutora, do poeta.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/41.jpeg',
            titulo: 'Título: Nas Pernas da Mentira',
            autor: '<strong>Autor:</strong> Cecilia Vasconcellos',
            sinopse: '<strong>Sinopse:</strong> A trama centraliza-se em Carolina, uma jovem que, temendo perder seus amigos, recorre à mentira para aliviar a dor do abandono paterno. O livro proporciona uma reflexão sobre a adolescência e as complexas emoções que a permeiam.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/42.jpeg',
            titulo: 'Título: Sabino o Menino no Espelho',
            autor: '<strong>Autor:</strong> Fernando Sabino',
            sinopse: '<strong>Sinopse:</strong> O livro relata as aventuras e fantasias da infância do autor em Belo Horizonte. Com oito anos, o garoto vive as típicas experiências de uma criança levada, sonhadora e extremamente astuta. Publicado pela primeira vez em 1982, a obra é reconhecida como um clássico da literatura nacional.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/43.jpeg',
            titulo: 'Título: Macapacarana',
            autor: '<strong>Autor:</strong> Giselda Laporta Nicolelis',
            sinopse: '<strong>Sinopse:</strong> O livro conta a história de Gerson, um garoto que sai de São Paulo para morar com o pai no Amapá. Lá, ele descobre um mundo novo, cheio de mistérios e aventuras, e conhece José, um cozinheiro índio, e Tocha, com quem aprende a desvendar os segredos da Amazônia.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/44.jpeg',
            titulo: 'Título: Dani das Nuvens',
            autor: '<strong>Autor:</strong> Jane Tutikian',
            sinopse: '<strong>Sinopse:</strong> A narrativa gira em torno de Dani, um garoto de 12 anos, cujas aventuras começam quando uma amiga empresta livros para ele. Durante o tratamento do Transtorno do Déficit de Atenção (TDA), Dani enfrenta desafios, se envolve com a prática do hipismo e desenvolve uma bela amizade com Eclipse, um cavalo. Ao longo da história, Dani explora novos interesses e, entre eles, precisa discernir seus sentimentos por Esther ou Telma, uma amiga especial com quem compartilha ideais sobre a vida e leituras. Além disso, o livro aborda o tema do TDA, uma preocupação para professores, famílias e alunos nas escolas.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/45.jpeg',
            titulo: 'Título: O Menino Negro',
            autor: '<strong>Autor:</strong> Camara Laye',
            sinopse: '<strong>Sinopse:</strong> "Lançado originalmente em 1953, "O Menino Negro" é um relato de memória que narra passagens significativas da vida do aclamado escritor guineano Camara Laye. A obra aborda episódios de sua infância e adolescência na Guiné Francesa (atualmente, República da Guiné), culminando com sua partida para a França em 1946 para cursar a faculdade de engenharia mecânica. Apesar de não seguir uma ordem cronológica estrita e não focar em eventos diários, o livro destaca momentos marcantes da vida do autor, como a entrada na escola, as férias na casa da avó, o ritual de circuncisão e a mudança para a capital, Conacri, onde cursou o Ensino Técnico. A narrativa sensível aborda temas como amadurecimento, relações familiares e, principalmente, a riqueza da cultura africana, repleta de símbolos e misticismo."',
        },
        {
            imagem: 'img/Imagens acervo - Copia/46.jpeg',
            titulo: 'Título: Malasartes Histórias de um Camarada Chamado Pedro',
            autor: '<strong>Autor:</strong> Augosto Pessôa',
            sinopse: '<strong>Sinopse:</strong> A narrativa gira em torno de Pedro Malasartes, um caipira astuto e arteiro, tipicamente brasileiro, conhecido por suas artimanhas. Em 12 histórias divertidas, misturando verso e prosa, o autor explora as peripécias do lendário Pedro Malasartes. Este anti-herói nacional, de fala mansa e sabedoria peculiar, ludibria os poderosos não para tomar-lhes o lugar ou a fortuna, mas sim para garantir sua diversão imediata. Após gastar seus ganhos, parte em busca de novas aventuras, proporcionando uma narrativa ao sabor da tradição popular.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/47.jpeg',
            titulo: 'Título: O Mistério do 5 Estrelas',
            autor: '<strong>Autor:</strong> Marcos Rey',
            sinopse: '<strong>Sinopse:</strong> A trama se desenrola no Hotel Excelsior, situado em São Paulo, Brasil, e segue a história de Hugo, filho do gerente do hotel. Durante as férias escolares, Hugo e seu amigo, o detetive amador Maneco, embarcam em uma missão para desvendar um grande mistério: a morte de um hóspede famoso apelidado de 5 Estrelas, encontrado morto em seu quarto. A obra combina elementos de mistério, suspense e aventura, transmitindo uma valiosa lição sobre amizade e perseverança na busca pela verdade, mesmo quando enfrentando obstáculos e perigos.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/48.jpeg',
            titulo: 'Título: Caixa de Desejos',
            autor: '<strong>Autor:</strong> Ana Cristina Melo ',
            sinopse: '<strong>Sinopse:</strong> A trama gira em torno de Marília, uma menina de 11 anos que reside com seus pais, avós maternos e tio paterno. Introvertida e sem amigos, ela mantém uma ligação especial com sua avó materna, que vive em outra cidade. Após a morte da avó, esta deixa para Marília uma caixa "mágica" onde a menina deve guardar seus desejos para nunca esquecê-los. Utilizando esse recurso, Marília aprende a lidar positivamente com os conflitos, superando problemas de relacionamento na escola e experimentando seu primeiro amor. O livro aborda de maneira sensível a tumultuada entrada na adolescência, entrelaçando as dores e dúvidas do crescimento com a alegria de descobrir o amor como uma vocação.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/49.jpeg',
            titulo: 'Título: A Árvore que Dava Dinheiro',
            autor: '<strong>Autor:</strong> Domingos Pellegrini',
            sinopse: '<strong>Sinopse:</strong> A história se desenrola em Felicidade, um pequeno município no interior do Brasil, onde a pacífica vida dos habitantes é transformada por uma herança inusitada deixada por um velho avarento: uma árvore que produz dinheiro. A inicial euforia consumista é seguida pela decepção quando as notas, perfeitas e novinhas, se desintegram além da ponte que delimita o município. A descoberta atrai a atenção da mídia, trazendo turistas que, ao contrário das notas anteriores, injetam dinheiro real na cidade. No entanto, a bonança é efêmera, levando a cidade à dívida, poluição e desastres econômicos. Somente mais tarde, as árvores dão frutos deliciosos, ensinando à população a apreciar as coisas simples após tantos revezes.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/50.jpeg',
            titulo: 'Título: Vento, Areia e Amoras Bravas',
            autor: '<strong>Autor:</strong> Agustina Bessa-Luís ',
            sinopse: '<strong>Sinopse:</strong> O livro conta a história de Lourença, uma personagem que se descobre escritora da pré-adolescência à juventude. O enredo do livro se passa no ambiente familiar e é iluminado pela personalidade forte, engraçada e vigorosa de Lourença, um espírito livre de condicionamentos, alegre e cheio de imaginação.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/51.jpeg',
            titulo: 'Título: Urbano Imaginário ',
            autor: '<strong>Autor:</strong> Ricardo Soares',
            sinopse: '<strong>Sinopse:</strong> Por onde caminham seu olhar? Onde você busca sentido para imagens impossíveis? A simetria brinca com o olhar, mas somos únicos e temos nosso próprio modo de ver e interpretar essa pequena jornada pelo imaginário. Este livro reúne cartemas que mostram imagens urbanas brasileiras inusitadas e provocativas. Cartema é uma forma de composição visual, uma montagem feita a partir de uma mesma imagem (ou partes dela). É a busca de um ritmo por meio da repetição cujo resultado é uma nova unidade visual.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/52.jpeg',
            titulo: 'Título: As Grandes Mulheres da História Africana: Wangari Maathai',
            autor: '<strong>Autor:</strong> Wangari Maathai',
            sinopse: '<strong>Sinopse:</strong> "Wangari Maathai: The Woman Who Planted Millions of Trees" é uma biografia que conta a história de Wangari Maathai, uma ativista queniana. Ela fundou o Movimento Cinturão Verde, promovendo o plantio de árvores e a igualdade de gênero. Lutou contra a degradação ambiental, enfrentando prisões e adversidades políticas. Seu trabalho restaurou paisagens e empoderou comunidades, especialmente mulheres. Wangari Maathai ganhou o Prêmio Nobel da Paz em 2004, tornando-se um ícone global da sustentabilidade e dos direitos das mulheres. Esta biografia destaca sua notável contribuição para a proteção do meio ambiente e a promoção da justiça social.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/53.jpeg',
            titulo: 'Título: Navio das Cores ',
            autor: '<strong>Autor:</strong> Moacyr Scliar',
            sinopse: '<strong>Sinopse:</strong> "Navio das Cores" apresenta a história de Lasar Segall, um pintor lituano que migrou para o Brasil. A narrativa começa com a fascinação de uma criança pelas letras da caligrafia de seu pai, copista da Torá em Vilna, Lituânia, e se desenvolve para revelar a descoberta da habilidade única do menino com traços, cores e criação de imagens. O livro explora o impacto transformador do encontro entre a cultura e a tradição judaicas de Segall e as pessoas, paisagens, frutas e animais do Brasil nos primeiros anos do século XX. Publicada em 2003 pela editora Berlendis & Vertecchia, a obra destaca a jornada artística e cultural do renomado pintor.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/54.jpeg',
            titulo: 'Título: No Mundo das Nuvens ',
            autor: '<strong>Autor:</strong> Alberto Goldin',
            sinopse: '<strong>Sinopse:</strong> "No Mundo das Nuvens" narra a história de um menino peculiar que, por sua singularidade, se torna alvo de brincadeiras cruéis por parte dos amigos e motivo de constrangimento para o pai. Esse menino, que se comunica com o mundo ao seu redor, incluindo plantas e o céu, recebe do pai objetos relacionados à pintura e desenho, revelando que sua linguagem especial é a da arte. O enredo destaca a incompreensão inicial do menino, que, na verdade, fala um idioma único, o da pintura. A narrativa, contextualizada pelo talento de Alberto Goldin, serve como pano de fundo para as magníficas reproduções das obras de Arcangelo Ianelli.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/55.jpeg',
            titulo: 'Título: Memorias de um Sarjento de Milícias ',
            autor: '<strong>Autor:</strong> Manuel Antônio de Almeida ',
            sinopse: '<strong>Sinopse:</strong> O romance segue a vida de Leonardo, um menino travesso que eventualmente se torna um sargento de milícias na cidade do Rio de Janeiro. Criado pelos padrinhos após o abandono dos pais, Leonardo é destinado a uma formação religiosa, mas sua natureza travessa e sua dificuldade de aprendizado o afastam da escola. Envolvido em intrigas amorosas, especialmente com Luizinha, e confrontando a ganância de José Manuel, ele passa por desafios familiares e, após herdar uma fortuna, é convidado a viver com seu pai, Leonardo-Pataca. As tensões na nova família resultam na expulsão de Leonardo, levando-o a uma vida boêmia na Rua Vala. Seu envolvimento com Vidinha desencadeia ciúmes e conflitos com primos dela, culminando em sua prisão pelo Major Vidigal e sua recusa em se alistar no exército.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/56.jpeg',
            titulo: 'Título: Fogo Morto ',
            autor: '<strong>Autor:</strong>  José Lins do Rego',
            sinopse: '<strong>Sinopse:</strong> "Fogo Morto" é a obra-prima de José Lins do Rego, caracterizada por uma linguagem forte e poética que retrata a decadência dos engenhos de cana-de-açúcar. Inserido na segunda fase do modernismo brasileiro, o livro, publicado em 1943, representa o ponto culminante do ciclo do autor centrado na cana-de-açúcar. Através da narrativa, José Lins do Rego aborda de maneira profunda e reflexiva a transformação e o declínio das antigas propriedades rurais, oferecendo uma visão crítica e rica da sociedade da época.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/57.jpeg',
            titulo: 'Título: O Primo Basilio',
            autor: '<strong>Autor:</strong> Eça de Queirós ',
            sinopse: '<strong>Sinopse:</strong> "O Primo Basílio" é um romance realista ambientado na Lisboa do século XIX, que retrata um triângulo amoroso entre Jorge, Luísa e Basílio, membros da burguesia. Com um narrador onisciente em terceira pessoa, a trama se desenrola quando o retorno de Basílio da França coincide com uma viagem de Jorge, desencadeando um reencontro amoroso entre Luísa e o primo. O relacionamento clandestino é descoberto pela empregada Juliana, que, ao encontrar cartas apaixonadas, passa a chantagear Luísa. A história explora os dilemas morais e as consequências de uma traição, mergulhando nos dramas e nas complexidades das relações sociais da época.',
        },
        {
            imagem: 'img/Imagens acervo - Copia/58.jpeg',
            titulo: 'Título: O Arteiro e o Tempo',
            autor: '<strong>Autor:</strong> Luis Fernando Verissimo',
            sinopse: '<strong>Sinopse:</strong> O livro aborda o tema do tempo e seu poder, destacando as mudanças que ele provoca. A narrativa explora a percepção de que o tempo parece passar mais rápido à medida que envelhecemos, enquanto na juventude, especialmente durante o ano escolar, sua marcha parece mais lenta, tornando as férias distantes e os dias intermináveis. Luís Fernando Verissimo, com seu humor sempre impregnado de ironia e significados sutis, utiliza uma linguagem sincera e clara que ressoa com as crianças. As ilustrações de Glauco Rodrigues complementam a obra, também carregando humor, ironia e uma multiplicidade de significados.',
        }
    ];

    const imagemLivro = document.getElementById('imagemLivro');
    const tituloLivro = document.getElementById('tituloLivro');
    const autorLivro = document.getElementById('autorLivro');
    const sinopseLivro = document.getElementById('sinopseLivro');

    imagemLivro.src = livros[index].imagem;
    tituloLivro.innerHTML = livros[index].titulo;
    autorLivro.innerHTML = livros[index].autor;
    sinopseLivro.innerHTML = livros[index].sinopse;

    // Adicione uma classe ao elemento body para impedir a rolagem
    document.body.classList.add('noscroll');
    overlay.style.display = 'block';
    detalhesSection.style.display = 'block';
}

// Adicione um evento de clique a cada elemento da lista de livros
const listaLivros = document.querySelectorAll('.card-livro');
listaLivros.forEach((livro, index) => {
    livro.addEventListener('click', () => {
        exibirDetalhesLivro(index);
    });
});

const fecharDetalhesBotao = document.querySelector('#fecharDetalhes');
fecharDetalhesBotao.addEventListener('click', () => {
    detalhesSection.style.display = 'none';

    // Remova a classe do elemento body para permitir a rolagem novamente
    document.body.classList.remove('noscroll');
    overlay.style.display = 'none';
});     
