const typeMap = {
    'cd-cheindjyri': 'CD Чейнджъри',
    'dvd-tv-priemnici': 'DVD и TV приемници',
    'gps-i-navigacii': 'GPS и навигации',
    'hangsfree-i-bluetooth-mikrofoni': 'Hands Free и bluetooth микрофони',
    'kasetofoni': 'Касетофони',
    'visokogovoriteli-i-tonkoloni': 'Високоговорители и тонколони',
    'subuferi': 'Субуфери',
    'usilvateli': 'Усилватели',
    'rukohvatki-za-tavan': 'Ръкохватки за таван',
    'bravi-na-vratite': 'Брави на вратите',
    'bravi-na-bagajnik': 'Брави на багажник',
    'bravi-na-kapak': 'Брави на капак',
    'kluchalki': 'Ключалки',
    'airbag': 'AirBag',
    'sedalki': 'Седалки',
    'sennici': 'Сенници',
    'pepelnici': 'Пепелници',
    'svetlini': 'Светлини',
    'jabki': 'Жабки',
    'pedali': 'Педали',
    'parno': 'Парно',
    'butoni-i-kopcheta': 'Бутони и копчета',
    'podlakatnici': 'Подлакътници',
    'lostove-za-ruchna-spirachka': 'Лостове за ръчна спирачка',
    'volani': 'Волани',
    'kilometraji': 'Километражи',
    'plafoni': 'Плафони',
    'stelki': 'Стелки',
    'benzinovi-pompi': 'Бензинови Помпи',
    'vsmukaltelni-klapani': 'Всмукателни клапани',
    'GNP': 'ГНП',
    'gorivni-reiki': 'Горивни рейки',
    'duzi-benzin': 'Дюзи бензин',
    'duzi-dizel': 'Дюзи дизел',
    'rezervoari': 'Резервоари',
    'nivomeri': 'Нивомери',
    'karburatori': 'Карбуратори',
    'podgrevni-sveshti': 'Подгревни свещи',
    'aluminievi-djanti': 'Алуминиеви джанти',
    'jelezni-djanti': 'Железни джанти',
    'boltove-za-djanti': 'Болтове за джанти',
    'sekretni-boltove-za-djanti': 'Секретни болтове за джанти',
    'letni-gumi': 'Летни гуми',
    'zimni-gumi': 'Зимни гуми',
    'vsesezonni-gumi': 'Всесезонни гуми',
    'kapachki-za-djanti': 'Капачки за джанти',
    'flanci': 'Фланци',
    'rezervni-gumi': 'Резервни гуми',
    'butala-rizi-bieli': 'Бутала, ризи, биели',
    'kolqnovi-valove': 'Колянови валове',
    'vakuum-pompi': 'Вакуум помпи',
    'glavi': 'Глави',
    'karteri': 'Картери',
    'masleni-shteki': 'Маслени щеки',
    'turbini': 'Турбини',
    'hidravlichni-pompi': 'Хидравлични помпи',
    'celi-dvigateli': 'Цели двигатели',
    'garnituri-uplatneniq': 'Гарнитури, уплътнения',
    'rolki-i-remaci': 'Ролки и ремъци',
    'masleni-gorivni-i-vyzdushni-filtri': 'Маслени, горивни и въздушни филтри',
    'masleni-pompi': 'Маслени помпи',
    'masleni-ohladiteli': 'Маслени охладители',
    'akumulatori': 'Акумулатори',
    'alternatori': 'Алтернатори',
    'bobini': 'Бобини',
    'bushonni-tabla-i-bushoni': 'Бушонни табла/ Бушони',
    'vakuum-mashinki-za-centralno': 'Вакуум машинки за централно',
    'datchici-za-kolqnov-val': 'Датчици за колянов вал',
    'datchici-senzori-i-shalteri': 'Датчици, сензори и шалтери',
    'instalacii-okabelqvane': 'Инсталации, окабеляване',
    'starteri': 'Стартери',
    'potenciometyr-na-pedala': 'Потенциометър на педала',
    'tempomat-avtopilot': 'Темпомат/Автопилот',
    'lentovi-kabeli': 'Лентови кабели',
    'gurneta-generacii': 'Гърнета, генерации',
    'izpuskatelni-trybi': 'Изпускателни тръби',
    'katalizatori-novi': 'Катализатори(нови)',
    'lamda-sondi': 'Ламбда сонди',
    'meki-vrazki': 'Меки връзки',
    'prujini-darjachi-za-garneta': 'Пружини, държачи за гърнета',
    'filtar-za-tvardi-chastici': 'Филтър за твърди частици',
    'kazancheta-za-antifriz': 'Казанчета за антифриз',
    'kazancheta-za-spirachna-technost': 'Казанчета за спирачна течност',
    'kazancheta-za-hidravlichna-technost': 'Казанчета за хидравлична течност',
    'kazancheta-za-chistachki': 'Казанчета за чистачки',
    'komputri-za-ABS': 'Компютри за ABS',
    'komputri-za-okachvane': 'Компютри за окачване',
    'komputri-za-dvigatel': 'Компютри за двигател',
    'komputri-za-skorosti': 'Компютри за скорости',
    'moduli': 'Модули',
    'releta': 'Релета',
    'gorivni-markuchi-i-trabi': 'Горивни маркучи и тръби',
    'gofrirani-markuchi': 'Гофрирани маркучи',
    'kolektori-vsmukatelni-i-izpuskatelni': 'Колектори всмукателни и изпускателни',
    'markuchi-za-klimatik': 'Маркучи за климатик',
    'markuchi-za-turbo': 'Маркучи за турбо',
    'markuchi-za-maslo-i-hidravlika': 'Маркучи за масло и хидравлика',
    'markuchi-za-antifriz': 'Маркучи за антифриз',
    'duhalki-za-parno': 'Духалки за парно',
    'kori-pod-dvigatel-i-pod-kupeto': 'Кори под двигател и под купето',
    'kori-bagajnik': 'Кори багажник',
    'kori-na-vratite': 'Кори на вратите',
    'plastmasovi-kori-i-elementi': 'Пласмасови кори и елементи',
    'stelki': 'Стелки',
    'uplatneniq-za-vrati-bagajnici-i-drugi': 'Уплътнения за врати, багажници и други',
    'uplatneniq-za-stykla': 'Уплътнения за стъкла',
    'shtori-i-mehanizmi': 'Щори и механизми',
    'ventilatori-motorcheta-za-parno': 'Вентилатори, моторчета за парно',
    'styklopovdigachi': 'Стъклоповдигачи',
    'jila-za-vrati-i-kapaci': 'Жила за врати и капаци',
    'jila-za-gaz': 'Жила за газ',
    'motorcheta-za-chistachki': 'Моторчета за чистачки',
    'motorcheta-za-elektricheska-reika': 'Моторчета за електрическа рейка',
    'pompichka-za-chistachki': 'Помпичка за чистачки',
    'amortisiori': 'Амортисьори',
    'bialetki': 'Биалетки',
    'dempfer': 'Демпфер',
    'zadni-mostove': 'Задни мостове',
    'kareta': 'Карета',
    'poluoski': 'Полуоски',
    'komplekt-okachvane': 'Комплект окачване',
    'komplekt-vyzdushno-okachvane': 'Комплект въздушно окачване',
    'nosachi-shtangi': 'Носачи, щанги',
    'prujini': 'Пружини',
    'predni-mostove': 'Предни мостове',
    'stabilizirashti-shtangi': 'Стабилизиращи шанги',
    'resiori': 'Ресьори',
    'visko-syediniteli': 'Виско съединители',
    'vodni-pompi': 'Водни помпи',
    'vodni-radiatori': 'Водни радиатори',
    'kompresori-za-klimatik': 'Компресори за климатик',
    'interkuleri': 'Интеркулери',
    'masleni-radiatori': 'Маслени радиатори',
    'termostati-konzoli-korpusi': 'Термостати, конзоли, корпуси',
    'motorcheta-za-klapi-na-parno': 'Моторчета за клапи на парно',
    'perki-za-ohlajdane': 'Перки за охлаждане',
    'pechki': 'Печки',
    'radiatori-za-parno': 'Радиатори за парно',
    'reostati': 'Реостати',
    'ksenon-krushki-i-balasti': 'Ксенон крушки и баласти',
    'migachi-gabariti-i-svetlootraziteli': 'Мигачи, габарити и светлоотразители',
    'reflektori': 'Рефлектори',
    'farove-za-magla': 'Фарове за мъгла',
    'stopove-i-gabariti': 'Стопове и габарити',
    'farove': 'Фарове',
    'diferenciali': 'Диференциали',
    'jila-za-syediniteli': 'Жила за съединители',
    'lageri-i-shtangi-za-skorosti': 'Лагери и щанги за скорости',
    'kardani-i-kareta': 'Кардани и карета',
    'mahovici': 'Маховици',
    'poluoski': 'Полуоски',
    'pompi-za-suedinitel-i-remontni-komplekti': 'Помпи за съединител и ремонтни комплекти',
    'razdatki': 'Раздатки',
    'skorosti-avtomatichni': 'Скорости - автоматични',
    'skorosti-rychni': 'Скорости - ръчни',
    'syediniteli-ferodovi-i-pritiskvatelni-diskove': 'Съединители, феродови и притисквателни дискове',
    'hidrotransformatori': 'Хидротрансформатори',
    'ABS-DSC-ASR': 'ABS, DSC, ASR',
    'diskove': 'Дискове',
    'regulator-na-spirachna-sila': 'Регулатор на спирачна сила',
    'servo': 'Серво',
    'spirachni-aparati-i-komplekti': 'Спирачни апарати и комплекти',
    'spirachni-barabani-ferodo': 'Спирачни барабани, феродо',
    'spirachni-markuchi-i-elementi': 'Спирачни маркучи и елементи',
    'spirachni-pompi-i-remontni-komplekti': 'Спирачни помпи и ремонтни комлекти',
    'spirachni-cilindri-i-remontni-komplekti': 'Спирачни цилиндри и ремонтни комлекти',
    'lapi-za-dvigatel': 'Лапи за двигател',
    'tamponi-za-dvigatel': 'Тампони за двигател',
    'tamponi-za-nosachi': 'Тампони за носачи',
    'tamponi-za-mosta': 'Тампони на моста',
    'bagajnici-za-tavan-relsi-za-bagaj': 'Багажници за таван, релси за багаж',
    'broni-zadni': 'Брони - задни',
    'broni-predni': 'Брони - предни',
    'buferi-dyrjachi-i-osnovi-za-broni': 'Буфери, държачи и основи за брони',
    'vrati': 'Врати',
    'dekorativni-maski-i-reshetki': 'Декоративни маски и решетки',
    'kalnici': 'Калници',
    'kapaci-predni': 'Капаци - предни',
    'kapaci-zadni': 'Капаци - задни',
    'maski-gredi-i-koloni': 'Маски, греди и колони',
    'podkalnici-i-kalobrani': 'Подкалници и калобрани',
    'rolbari': 'Ролбари',
    'spoileri': 'Спойлери',
    'stykla-zadni': 'Стъкла задни',
    'stykla-chelni': 'Стъкла челни',
    'stykla-stranichni': 'Стъкла странични',
    'teglichi-i-oborudvane': 'Тегличи и оборудване',
    'shibedah': 'Шибедах',
    'amortisiori-za-kapaci-vrati-i-jabki': 'Амортисьори за капаци, врати и жабки',
    'anteni': 'Антени',
    'vratichki-za-rezervoar': 'Вратички за резервоар',
    'vynshni-ogledala': 'Външни огледала',
    'elementi-po-karoseriqta': 'Елементи по каросерията',
    'klaksoni-zumeri-i-sireni': 'Клаксони, зумери и сирени',
    'kuki-za-teglene': 'Куки за теглене',
    'laisni-kapachki-i-emblemi': 'Лайсни, капачки и емблеми',
    'mehanizym-i-aksesoari-za-rezervna-guma': 'Механизъм и аксесоари за резервна гума',
    'mehanizmi-i-chistachki-za-farovete': 'Механизми и чистачки за фаровете',
    'panti': 'Панти',
    'parktronici': 'Паркторници',
    'pragove-vynshni': 'Прагове - външни',
    'pryskalki-farove-stykla': 'Пръскалки - фарове, стъкла',
    'chistachki-i-ramena-za-chistachki': 'Чистачки и рамена за чистачки',
};

module.exports = {
    typeMap
}