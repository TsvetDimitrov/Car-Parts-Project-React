import { useNavigate } from "react-router-dom";
import { createPart } from '../../api/data.js';
import './Create.css';

function Create({ handleClickShowError }) {
    const navigate = useNavigate();
    let categoryItemsData = [
        ['Аудио, видео, навигации', 'CD Чейнджъри'],
        ['Аудио, видео, навигации', 'DVD и TV приемници'],
        ['Аудио, видео, навигации', 'GPS и навигации'],
        ['Аудио, видео, навигации', 'Hands Free и bluetooth микрофони'],
        ['Аудио, видео, навигации', 'Касетофони'],
        ['Аудио, видео, навигации', 'Високоговорители и тонколони'],
        ['Аудио, видео, навигации', 'Субуфери'],
        ['Аудио, видео, навигации', 'Усилватели'],
        ['Брави, дръжки, ключалки', 'Ръкохватки за таван'],
        ['Брави, дръжки, ключалки', 'Брави на вратите'],
        ['Брави, дръжки, ключалки', 'Брави на багажник'],
        ['Брави, дръжки, ключалки', 'Брави на капак'],
        ['Брави, дръжки, ключалки', 'Ключалки'],
        ['Вътрешно оборудване', 'AirBag'],
        ['Вътрешно оборудване', 'Седалки'],
        ['Вътрешно оборудване', 'Сенници'],
        ['Вътрешно оборудване', 'Пепелници'],
        ['Вътрешно оборудване', 'Светлини'],
        ['Вътрешно оборудване', 'Жабки'],
        ['Вътрешно оборудване', 'Педали'],
        ['Вътрешно оборудване', 'Парно'],
        ['Вътрешно оборудване', 'Бутони и копчета'],
        ['Вътрешно оборудване', 'Подлакътници'],
        ['Вътрешно оборудване', 'Лостове за ръчна спирачка'],
        ['Вътрешно оборудване', 'Волани'],
        ['Вътрешно оборудване', 'Километражи'],
        ['Вътрешно оборудване', 'Плафони'],
        ['Вътрешно оборудване', 'Стелки'],
        ['Горивна система', 'Бензинови Помпи'],
        ['Горивна система', 'Всмукателни клапани'],
        ['Горивна система', 'ГНП'],
        ['Горивна система', 'Горивни рейки'],
        ['Горивна система', 'Дюзи бензин'],
        ['Горивна система', 'Дюзи дизел'],
        ['Горивна система', 'Резервоари'],
        ['Горивна система', 'Нивомери'],
        ['Горивна система', 'Карбуратори'],
        ['Горивна система', 'Подревни свещи'],
        ['Гуми и джанти (2-ра употреба)', 'Алуминиеви джанти'],
        ['Гуми и джанти (2-ра употреба)', 'Железни джанти'],
        ['Гуми и джанти (2-ра употреба)', 'Секретни болтове за джанти'],
        ['Гуми и джанти (2-ра употреба)', 'Летни гуми'],
        ['Гуми и джанти (2-ра употреба)', 'Зимни гуми'],
        ['Гуми и джанти (2-ра употреба)', 'Всезонни гуми'],
        ['Гуми и джанти (2-ра употреба)', 'Капачки за джанти'],
        ['Гуми и джанти (2-ра употреба)', 'Фланци'],
        ['Гуми и джанти (2-ра употреба)', 'Резервни гуми'],
        ['Двигател и оборудване', 'Бутала, ризи, биели'],
        ['Двигател и оборудване', 'Колянови валове'],
        ['Двигател и оборудване', 'Вакуум помпи'],
        ['Двигател и оборудване', 'Глави'],
        ['Двигател и оборудване', 'Картери'],
        ['Двигател и оборудване', 'Маслени щеки'],
        ['Двигател и оборудване', 'Турбини'],
        ['Двигател и оборудване', 'Хидравлични помпи'],
        ['Двигател и оборудване', 'Цели двигатели'],
        ['Двигател и оборудване', 'Гарнитури, уплътнения'],
        ['Двигател и оборудване', 'Ролки и ремъци'],
        ['Двигател и оборудване', 'Маслени, горивни и въздушни филтри'],
        ['Двигател и оборудване', 'Маслени помпи'],
        ['Двигател и оборудване', 'Маслени охладители'],
        ['Ел. оборудване', 'Акумулатори'],
        ['Ел. оборудване', 'Алтернатори'],
        ['Ел. оборудване', 'Бобини'],
        ['Ел. оборудване', 'Бушонни табла/ Бушони'],
        ['Ел. оборудване', 'Вакуум машинки за централно'],
        ['Ел. оборудване', 'Датчици за колянов вал'],
        ['Ел. оборудване', 'Датчици, сензори и шалтери'],
        ['Ел. оборудване', 'Инсталации, окабеляване'],
        ['Ел. оборудване', 'Стартери'],
        ['Ел. оборудване', 'Потенциометър на педала'],
        ['Ел. оборудване', 'Темпомат/Автопилот'],
        ['Ел. оборудване', 'Лентови кабели'],
        ['Изпускателна система', 'Гърнета, генерации'],
        ['Изпускателна система', 'Изпускателни тръби'],
        ['Изпускателна система', 'Катализатори(нови)'],
        ['Изпускателна система', 'Ламбда сонди'],
        ['Изпускателна система', 'Меки връзки'],
        ['Изпускателна система', 'Пружини, държачи за гърнета'],
        ['Изпускателна система', 'Филтър за твърди частици'],
        ['Казанчета', 'Казанчета за антифриз'],
        ['Казанчета', 'Казанчета за спирачна течност'],
        ['Казанчета', 'Казанчета за хидравлична течност'],
        ['Казанчета', 'Казанчета за чистачки'],
        ['Компютри, модули и релета', 'Компютри за ABS'],
        ['Компютри, модули и релета', 'Компютри за окачване'],
        ['Компютри, модули и релета', 'Компютри за двигател'],
        ['Компютри, модули и релета', 'Компютри за скорости'],
        ['Компютри, модули и релета', 'Модули'],
        ['Компютри, модули и релета', 'Релета'],
        ['Маркучи, тръбички и колектори', 'Горивни маркучи и тръби'],
        ['Маркучи, тръбички и колектори', 'Гофрирани маркучи'],
        ['Маркучи, тръбички и колектори', 'Колектори всмукателни и изпускателни'],
        ['Маркучи, тръбички и колектори', 'Маркучи за климатик'],
        ['Маркучи, тръбички и колектори', 'Маркучи за турбо'],
        ['Маркучи, тръбички и колектори', 'Маркучи за масло и хидравлика'],
        ['Маркучи, тръбички и колектори', 'Маркучи за антифриз'],
        ['Кори, уплътнения и пластмаси', 'Духалки за парно'],
        ['Кори, уплътнения и пластмаси', 'Кори под двигател и под купето'],
        ['Кори, уплътнения и пластмаси', 'Кори багажник'],
        ['Кори, уплътнения и пластмаси', 'Кори на вратите'],
        ['Кори, уплътнения и пластмаси', 'Пласмасови кори и елементи'],
        ['Кори, уплътнения и пластмаси', 'Стелки'],
        ['Кори, уплътнения и пластмаси', 'Уплътнения за врати, багажници и други'],
        ['Кори, уплътнения и пластмаси', 'Уплътнения за стъкла'],
        ['Кори, уплътнения и пластмаси', 'Щори и механизми'],
        ['Моторчета, машинки и механизми', 'Вентилатори, моторчета за парно'],
        ['Моторчета, машинки и механизми', 'Стъклоповдигачи'],
        ['Моторчета, машинки и механизми', 'Жила за врати и капаци'],
        ['Моторчета, машинки и механизми', 'Жила за газ'],
        ['Моторчета, машинки и механизми', 'Стъклоповдигачи'],
        ['Моторчета, машинки и механизми', 'Моторчета за чистачки'],
        ['Моторчета, машинки и механизми', 'Моторчета за електрическа рейка'],
        ['Моторчета, машинки и механизми', 'Помпичка за чистачки'],
        ['Окачване и кормилна уредба', 'Амортисьори'],
        ['Окачване и кормилна уредба', 'Биалетки'],
        ['Окачване и кормилна уредба', 'Демпфер'],
        ['Окачване и кормилна уредба', 'Задни мостове'],
        ['Окачване и кормилна уредба', 'Карета'],
        ['Окачване и кормилна уредба', 'Полуоски'],
        ['Окачване и кормилна уредба', 'Комплект окачване'],
        ['Окачване и кормилна уредба', 'Комплект въздушно окачване'],
        ['Окачване и кормилна уредба', 'Носачи, щанги'],
        ['Окачване и кормилна уредба', 'Пружини'],
        ['Окачване и кормилна уредба', 'Предни мостове'],
        ['Окачване и кормилна уредба', 'Стабилизиращи шанги'],
        ['Окачване и кормилна уредба', 'Ресьори'],
        ['Окачване и кормилна уредба', 'Ресьори'],
        ['Охладителна и климатична система', 'Виско съединители'],
        ['Охладителна и климатична система', 'Водни помпи'],
        ['Охладителна и климатична система', 'Водни радиатори'],
        ['Охладителна и климатична система', 'Компресори за климатик'],
        ['Охладителна и климатична система', 'Интеркулери'],
        ['Охладителна и климатична система', 'Маслени радиатори'],
        ['Охладителна и климатична система', 'Термостати, конзоли, корпуси'],
        ['Охладителна и климатична система', 'Моторчета за клапи на парно'],
        ['Охладителна и климатична система', 'Перки за охлаждане'],
        ['Охладителна и климатична система', 'Печки'],
        ['Охладителна и климатична система', 'Радиатори за парно'],
        ['Охладителна и климатична система', 'Реостати'],
        ['Светлини', 'Ксенон крушки и баласти'],
        ['Светлини', 'Мигачи, габарити и светлоотразители'],
        ['Светлини', 'Рефлектори'],
        ['Светлини', 'Фарове за мъгла'],
        ['Светлини', 'Стопове и габарити'],
        ['Светлини', 'Фарове'],
        ['Скорости и трансмисия', 'Диференциали'],
        ['Скорости и трансмисия', 'Жила за съединители'],
        ['Скорости и трансмисия', 'Лагери и щанги за скорости'],
        ['Скорости и трансмисия', 'Кардани и карета'],
        ['Скорости и трансмисия', 'Маховици'],
        ['Скорости и трансмисия', 'Полуоски'],
        ['Скорости и трансмисия', 'Помпи за съединител и ремонтни комплекти'],
        ['Скорости и трансмисия', 'Раздатки'],
        ['Скорости и трансмисия', 'Скорости - автоматични'],
        ['Скорости и трансмисия', 'Скорости - ръчни'],
        ['Скорости и трансмисия', 'Съединители, феродови и притисквателни дискове'],
        ['Скорости и трансмисия', 'Хидротрансформатори'],
        ['Спирачна система', 'ABS, DSC, ASR'],
        ['Спирачна система', 'Дискове'],
        ['Спирачна система', 'Регулатор на спирачна сила'],
        ['Спирачна система', 'Серво'],
        ['Спирачна система', 'Спирачни апарати и комплекти'],
        ['Спирачна система', 'Спирачни барабани, феродо'],
        ['Спирачна система', 'Спирачни маркучи и елементи'],
        ['Спирачна система', 'Спирачни помпи и ремонтни комлекти'],
        ['Тампони, маншони, лапи и стойки', 'Лапи за двигател'],
        ['Тампони, маншони, лапи и стойки', 'Тампони за носачи'],
        ['Тампони, маншони, лапи и стойки', 'Тампони за двигател'],
        ['Тампони, маншони, лапи и стойки', 'Тампони на моста'],
        ['Части за купето - едрогабаритни', 'Багажници за таван, релси за багаж'],
        ['Части за купето - едрогабаритни', 'Брони - задни'],
        ['Части за купето - едрогабаритни', 'Брони - предни'],
        ['Части за купето - едрогабаритни', 'Буфери, държачи и основи за брони'],
        ['Части за купето - едрогабаритни', 'Врати'],
        ['Части за купето - едрогабаритни', 'Декоративни маски и решетки'],
        ['Части за купето - едрогабаритни', 'Калници'],
        ['Части за купето - едрогабаритни', 'Капаци - предни'],
        ['Части за купето - едрогабаритни', 'Капаци - задни'],
        ['Части за купето - едрогабаритни', 'Маски, греди и колони'],
        ['Части за купето - едрогабаритни', 'Подкалници и калобрани'],
        ['Части за купето - едрогабаритни', 'Ролбари'],
        ['Части за купето - едрогабаритни', 'Спойлери'],
        ['Части за купето - едрогабаритни', 'Стъкла задни'],
        ['Части за купето - едрогабаритни', 'Стъкла челни'],
        ['Части за купето - едрогабаритни', 'Стъкла странични'],
        ['Части за купето - едрогабаритни', 'Тегличи и оборудване'],
        ['Части за купето - едрогабаритни', 'Шибедах'],
        ['Части за купето - малогабаритни', 'Амортисьори за капаци, врати и жабки'],
        ['Части за купето - малогабаритни', 'Антени'],
        ['Части за купето - малогабаритни', 'Вратички за резервоар'],
        ['Части за купето - малогабаритни', 'Външни огледала'],
        ['Части за купето - малогабаритни', 'Елементи по каросерията'],
        ['Части за купето - малогабаритни', 'Клаксони, зумери и сирени'],
        ['Части за купето - малогабаритни', 'Куки за теглене'],
        ['Части за купето - малогабаритни', 'Лайсни, капачки и емблеми'],
        ['Части за купето - малогабаритни', 'Механизъм и аксесоари за резервна гума'],
        ['Части за купето - малогабаритни', 'Механизми и чистачки за фаровете'],
        ['Части за купето - малогабаритни', 'Панти'],
        ['Части за купето - малогабаритни', 'Паркторници'],
        ['Части за купето - малогабаритни', 'Паркторници'],
        ['Части за купето - малогабаритни', 'Прагове - външни'],
        ['Части за купето - малогабаритни', 'Пръскалки - фарове, стъкла'],
        ['Части за купето - малогабаритни', 'Чистачки и рамена за чистачки'],

    ];

    let brandsModelsData = [
        ['ABARTH', '124'],
        ['ABARTH', '500'],
        ['ABARTH', '500C'],
        ['ABARTH', 'GRANDE'],
        ['ABARTH', 'PUNTO'],
        ['ABARTH', 'RITMO'],
        ['ALFA-ROMEO', '4C'],
        ['ALFA-ROMEO', '4C Spider'],
        ['ALFA-ROMEO', 'Giulia'],
        ['ALFA-ROMEO', 'Giuletta'],
        ['ALFA-ROMEO', 'Stelvio'],
        ['ALFA-ROMEO', '145'],
        ['ALFA-ROMEO', '146'],
        ['ALFA-ROMEO', '147'],
        ['ALFA-ROMEO', '155'],
        ['ALFA-ROMEO', '156'],
        ['ALFA-ROMEO', '159'],
        ['ALFA-ROMEO', '164'],
        ['ALFA-ROMEO', '166'],
        ['AUDI', 'A1'],
        ['AUDI', 'A3'],
        ['AUDI', 'A4'],
        ['AUDI', 'A5'],
        ['AUDI', 'A6'],
        ['AUDI', 'A7'],
        ['AUDI', 'A8'],
        ['AUDI', 'TT'],
        ['AUDI', 'Q2'],
        ['AUDI', 'Q3'],
        ['AUDI', 'Q5'],
        ['AUDI', 'Q7'],
        ['AUDI', 'Q8'],
        ['BMW', '1'],
        ['BMW', '2'],
        ['BMW', '3'],
        ['BMW', '4'],
        ['BMW', '5'],
        ['BMW', '6'],
        ['BMW', '7'],
        ['BMW', '8'],
        ['BMW', 'I3'],
        ['BMW', 'I8'],
        ['BMW', 'M1'],
        ['BMW', 'X1'],
        ['BMW', 'X2'],
        ['BMW', 'X3'],
        ['BMW', 'X4'],
        ['BMW', 'X5'],
        ['BMW', 'X6'],
        ['BMW', 'X7'],
        ['BMW', 'Z1'],
        ['BMW', 'Z3'],
        ['BMW', 'Z4'],
        ['BMW', 'Z8'],
        ['CHEVROLET', 'ALERO'],
        ['CHEVROLET', 'ALTO'],
        ['CHEVROLET', 'ASTRA'],
        ['CHEVROLET', 'AVEO'],
        ['CHEVROLET', 'BLAZER'],
        ['CHEVROLET', 'CAMARO'],
        ['CHEVROLET', 'CAPRICE'],
        ['CHEVROLET', 'CAPTIVA'],
        ['CHEVROLET', 'CARAVAN'],
        ['CHEVROLET', 'CARGOVAN'],
        ['CHEVROLET', 'CORVETTE'],
        ['CHEVROLET', 'CRUZE'],
        ['CHEVROLET', 'EPICA'],
        ['CHEVROLET', 'FORESTER'],
        ['CHEVROLET', 'IMPALA'],
        ['CHEVROLET', 'LANOS'],
        ['CHEVROLET', 'MATIZ'],
        ['CHEVROLET', 'REZZO'],
        ['CHEVROLET', 'SWIFT'],
        ['CHEVROLET', 'TAHOE'],
        ['CHEVROLET', 'VOLT'],
        ['CHRYSLER', '300'],
        ['CHRYSLER', '300C'],
        ['CHRYSLER', 'CIRRUS'],
        ['CHRYSLER', 'CONCORDE'],
        ['CHRYSLER', 'CONQUEST'],
        ['CHRYSLER', 'CROSSFIRE'],
        ['CHRYSLER', 'DAYTONA'],
        ['CHRYSLER', 'GRAND'],
        ['CHRYSLER', 'LE'],
        ['CHRYSLER', 'NEON'],
        ['CHRYSLER', 'NEW'],
        ['CHRYSLER', 'PT'],
        ['CHRYSLER', 'SARATOGA'],
        ['CHRYSLER', 'SEBRING'],
        ['CHRYSLER', 'STRATUS'],
        ['CHRYSLER', 'VIPER'],
        ['CHRYSLER', 'VISION'],
        ['CHRYSLER', 'VOYAGER'],
        ['CITROËN', 'AX'],
        ['CITROËN', 'BERLINGO'],
        ['CITROËN', 'BX'],
        ['CITROËN', 'C-CROSSER'],
        ['CITROËN', 'C-ELYSEE'],
        ['CITROËN', 'C-ZERO'],
        ['CITROËN', 'C1'],
        ['CITROËN', 'C15'],
        ['CITROËN', 'C2'],
        ['CITROËN', 'C25'],
        ['CITROËN', 'C3'],
        ['CITROËN', 'C4'],
        ['CITROËN', 'C5'],
        ['CITROËN', 'C6'],
        ['CITROËN', 'C8'],
        ['CITROËN', 'CX'],
        ['CITROËN', 'DS'],
        ['CITROËN', 'DS3'],
        ['CITROËN', 'DS4'],
        ['CITROËN', 'DS5'],
        ['CITROËN', 'EVASION'],
        ['CITROËN', 'JUMPER'],
        ['CITROËN', 'JUMPY'],
        ['CITROËN', 'LNA'],
        ['CITROËN', 'MEHARI'],
        ['CITROËN', 'NEMO'],
        ['CITROËN', 'SAXO'],
        ['CITROËN', 'XANTIA'],
        ['CITROËN', 'XM'],
        ['CITROËN', 'XSARA'],
        ['CITROËN', 'ZX'],
        ['DACIA', 'DOKKER'],
        ['DACIA', 'DUSTER'],
        ['DACIA', 'LODGY'],
        ['DACIA', 'LOGAN'],
        ['DACIA', 'NOVA'],
        ['DACIA', 'PICK'],
        ['DACIA', 'SANDERO'],
        ['DACIA', 'SOLENZA'],
        ['DAEWOO', 'ESPERO'],
        ['DAEWOO', 'EVANDA'],
        ['DAEWOO', 'KALOS'],
        ['DAEWOO', 'KORANDO'],
        ['DAEWOO', 'LACETTI'],
        ['DAEWOO', 'LANOS'],
        ['DAEWOO', 'LEGANZA'],
        ['DAEWOO', 'MATIZ'],
        ['DAEWOO', 'MUSSO'],
        ['DAEWOO', 'NEXIA'],
        ['DAEWOO', 'NUBIRA'],
        ['DAEWOO', 'PRIMA'],
        ['DAEWOO', 'RACER'],
        ['DAEWOO', 'REXTON'],
        ['DAEWOO', 'REZZO'],
        ['DAEWOO', 'TICO'],
        ['DAIHATSU', 'APPLAUSE'],
        ['DAIHATSU', 'CHARADE'],
        ['DAIHATSU', 'CHARMANT'],
        ['DAIHATSU', 'COPEN'],
        ['DAIHATSU', 'CUORE'],
        ['DAIHATSU', 'EXTOL'],
        ['DAIHATSU', 'FEROZA'],
        ['DAIHATSU', 'GRAN'],
        ['DAIHATSU', 'HIJET'],
        ['DAIHATSU', 'MATERIA'],
        ['DAIHATSU', 'MIRA'],
        ['DAIHATSU', 'MOVE'],
        ['DAIHATSU', 'ROCKY'],
        ['DAIHATSU', 'SIRION'],
        ['DAIHATSU', 'TAFT'],
        ['DAIHATSU', 'TERIOS'],
        ['FIAT', '124'],
        ['FIAT', '125'],
        ['FIAT', '126'],
        ['FIAT', '127'],
        ['FIAT', '130'],
        ['FIAT', '131'],
        ['FIAT', '132'],
        ['FIAT', '133'],
        ['FIAT', '135'],
        ['FIAT', '147'],
        ['FIAT', '500'],
        ['FIAT', '500L'],
        ['FIAT', '500X'],
        ['FIAT', 'ALBEA'],
        ['FIAT', 'ARGENTA'],
        ['FIAT', 'BALILLA'],
        ['FIAT', 'BARCHETTA'],
        ['FIAT', 'BRAVA'],
        ['FIAT', 'BRAVO'],
        ['FIAT', 'CINQUECENTO'],
        ['FIAT', 'COUPE'],
        ['FIAT', 'CROMA'],
        ['FIAT', 'CRONOS'],
        ['FIAT', 'DINO'],
        ['FIAT', 'DOBLO'],
        ['FIAT', 'DUCATO'],
        ['FIAT', 'DUNA'],
        ['FIAT', 'FIORINO'],
        ['FIAT', 'FREEMONT'],
        ['FIAT', 'IDEA'],
        ['FIAT', 'JAGST'],
        ['FIAT', 'L'],
        ['FIAT', 'LINEA'],
        ['FIAT', 'MAREA'],
        ['FIAT', 'MULTIPLA'],
        ['FIAT', 'PANDA'],
        ['FIAT', 'PUNTO'],
        ['FIAT', 'QUBO'],
        ['FIAT', 'REGATA'],
        ['FIAT', 'RITMO'],
        ['FIAT', 'STILO'],
        ['FIAT', 'TALENTO'],
        ['FIAT', 'TEMPRA'],
        ['FIAT', 'TIPO'],
        ['FIAT', 'ULYSSE'],
        ['FIAT', 'UNO'],
        ['FIAT', 'X'],
        ['FORD', 'B-MAX'],
        ['FORD', 'C-MAX'],
        ['FORD', 'CAPRI'],
        ['FORD', 'COUGAR'],
        ['FORD', 'COURIER'],
        ['FORD', 'ESCORT'],
        ['FORD', 'F-100'],
        ['FORD', 'F-250'],
        ['FORD', 'F-MAX'],
        ['FORD', 'F-SERIES'],
        ['FORD', 'FIESTA'],
        ['FORD', 'FOCUS'],
        ['FORD', 'FUSION'],
        ['FORD', 'GALAXIE'],
        ['FORD', 'GALAXY'],
        ['FORD', 'GRANADA'],
        ['FORD', 'GRAND'],
        ['FORD', 'GT'],
        ['FORD', 'KA'],
        ['FORD', 'KUGA'],
        ['FORD', 'MAVERICK'],
        ['FORD', 'MONDEO'],
        ['FORD', 'ORION'],
        ['FORD', 'PUMA'],
        ['FORD', 'S-MAX'],
        ['FORD', 'SCORPIO'],
        ['FORD', 'SIERRA'],
        ['FORD', 'TRACER'],
        ['FORD', 'TOURNEO'],
        ['FORD', 'TRANSIT'],
        ['HONDA', 'ACCORD'],
        ['HONDA', 'CIVIC'],
        ['HONDA', 'CR-V'],
        ['HONDA', 'CR-Z'],
        ['HONDA', 'CRX'],
        ['HONDA', 'EV'],
        ['HONDA', 'FR-V'],
        ['HONDA', 'HR-V'],
        ['HONDA', 'JADE'],
        ['HONDA', 'JAZZ'],
        ['HONDA', 'SHUTTLE'],
        ['HONDA', 'TORNEO'],
        ['HONDA', 'VEZEL'],
        ['HYUNDAI', 'ACCENT'],
        ['HYUNDAI', 'ATOS'],
        ['HYUNDAI', 'COUPE'],
        ['HYUNDAI', 'ELANTRA'],
        ['HYUNDAI', 'EON'],
        ['HYUNDAI', 'EQUUS'],
        ['HYUNDAI', 'GALLOPER'],
        ['HYUNDAI', 'GENESIS'],
        ['HYUNDAI', 'GETZ'],
        ['HYUNDAI', 'GRAND'],
        ['HYUNDAI', 'H-1'],
        ['HYUNDAI', 'H100'],
        ['HYUNDAI', 'I30'],
        ['HYUNDAI', 'I40'],
        ['HYUNDAI', 'IONIQ'],
        ['HYUNDAI', 'IX20'],
        ['HYUNDAI', 'IX35'],
        ['HYUNDAI', 'IX55'],
        ['HYUNDAI', 'KONA'],
        ['HYUNDAI', 'LANTRA'],
        ['HYUNDAI', 'MATRIX'],
        ['HYUNDAI', 'PONY'],
        ['HYUNDAI', 'SANTA'],
        ['HYUNDAI', 'SONATA'],
        ['HYUNDAI', 'TERRACAN'],
        ['HYUNDAI', 'TIBURON'],
        ['HYUNDAI', 'TUCSON'],
        ['INFINITI', 'ESQ'],
        ['INFINITI', 'EX'],
        ['INFINITI', 'FX'],
        ['INFINITI', 'G'],
        ['INFINITI', 'G20'],
        ['INFINITI', 'I30'],
        ['INFINITI', 'I35'],
        ['INFINITI', 'J30'],
        ['INFINITI', 'JX'],
        ['INFINITI', 'M'],
        ['INFINITI', 'M30'],
        ['INFINITI', 'M35'],
        ['INFINITI', 'M37'],
        ['INFINITI', 'M45'],
        ['INFINITI', 'Q30'],
        ['INFINITI', 'Q40'],
        ['INFINITI', 'Q45'],
        ['INFINITI', 'Q50'],
        ['INFINITI', 'Q60'],
        ['INFINITI', 'Q70'],
        ['INFINITI', 'QX30'],
        ['INFINITI', 'QX4'],
        ['INFINITI', 'QX50'],
        ['INFINITI', 'QX56'],
        ['INFINITI', 'QX60'],
        ['INFINITI', 'QX70'],
        ['INFINITI', 'QX80'],
        ['IVECO', '370'],
        ['IVECO', 'CHASSI'],
        ['IVECO', 'CITY'],
        ['IVECO', 'CROSSWAY'],
        ['IVECO', 'CURSOR'],
        ['IVECO', 'DAILY'],
        ['IVECO', 'EUROCARGO'],
        ['IVECO', 'EUROFIRE'],
        ['IVECO', 'EUROSTAR'],
        ['IVECO', 'EUROTECH'],
        ['IVECO', 'EUROTRAKKER'],
        ['IVECO', 'M'],
        ['IVECO', 'MAGELYS'],
        ['IVECO', 'MASSIF'],
        ['IVECO', 'MK'],
        ['IVECO', 'POWERSTAR'],
        ['IVECO', 'STRALIS'],
        ['IVECO', 'TRAKKER'],
        ['IVECO', 'TURBOCITY'],
        ['IVECO', 'TURBOSTAR'],
        ['IVECO', 'TURBOTECH'],
        ['IVECO', 'URBANWAY'],
        ['IVECO', 'VERTIS'],
        ['IVECO', 'ZETA'],
        ['JEEP', 'CHEROKEE'],
        ['JEEP', 'CJ5'],
        ['JEEP', 'COMANCHE'],
        ['JEEP', 'COMMANDER'],
        ['JEEP', 'COMMANDO'],
        ['JEEP', 'COMPASS'],
        ['JEEP', 'DISPATCHER'],
        ['JEEP', 'FC150'],
        ['JEEP', 'GLADIATOR'],
        ['JEEP', 'GRAND'],
        ['JEEP', 'J10'],
        ['JEEP', 'J20'],
        ['JEEP', 'PATRIOT'],
        ['JEEP', 'RENEGADE'],
        ['JEEP', 'SCRAMBLER'],
        ['JEEP', 'WAGONEER'],
        ['JEEP', 'WILLYS'],
        ['JEEP', 'WRANGLER'],
        ['KIA', 'BESTA'],
        ['KIA', 'CARENS'],
        ['KIA', 'CARNIVAL'],
        ['KIA', 'CEED'],
        ['KIA', 'CERATO'],
        ['KIA', 'CLARUS'],
        ['KIA', 'MAGENTIS'],
        ['KIA', 'NIRO'],
        ['KIA', 'OPIRUS'],
        ['KIA', 'OPTIMA'],
        ['KIA', 'PICANTO'],
        ['KIA', 'PREGIO'],
        ['KIA', 'PRIDE'],
        ['KIA', 'RIO'],
        ['KIA', 'SORENTO'],
        ['KIA', 'SOUL'],
        ['KIA', 'SPORTAGE'],
        ['LANCIA', 'A'],
        ['LANCIA', 'APPIA'],
        ['LANCIA', 'ARDEA'],
        ['LANCIA', 'AURELIA'],
        ['LANCIA', 'BETA'],
        ['LANCIA', 'DEDRA'],
        ['LANCIA', 'DELTA'],
        ['LANCIA', 'FLAMINIA'],
        ['LANCIA', 'FLAVIA'],
        ['LANCIA', 'FULVIA'],
        ['LANCIA', 'GAMMA'],
        ['LANCIA', 'KAPPA'],
        ['LANCIA', 'LYBRA'],
        ['LANCIA', 'MUSA'],
        ['LANCIA', 'PHEDRA'],
        ['LANCIA', 'PRISMA'],
        ['LANCIA', 'THEMA'],
        ['LANCIA', 'THESIS'],
        ['LANCIA', 'TREVI'],
        ['LANCIA', 'VOYAGER'],
        ['LANCIA', 'Y'],
        ['LANCIA', 'Y10'],
        ['LANCIA', 'YPSILON'],
        ['LANCIA', 'ZAGATO'],
        ['LANCIA', 'ZETA'],
        ['LAND-ROVER', 'DEFENDER'],
        ['LAND-ROVER', 'DISCOVERY'],
        ['LAND-ROVER', 'FREELANDER'],
        ['LAND-ROVER', 'RANGE'],
        ['LEXUS', 'CT'],
        ['LEXUS', 'ES'],
        ['LEXUS', 'GS'],
        ['LEXUS', 'GX'],
        ['LEXUS', 'HS'],
        ['LEXUS', 'IS'],
        ['LEXUS', 'LC'],
        ['LEXUS', 'LFA'],
        ['LEXUS', 'LS'],
        ['LEXUS', 'LX'],
        ['LEXUS', 'NX'],
        ['LEXUS', 'RC'],
        ['LEXUS', 'RX'],
        ['LEXUS', 'SC'],
        ['LEXUS', 'UX'],
        ['MAZDA', '121'],
        ['MAZDA', '2'],
        ['MAZDA', '3'],
        ['MAZDA', '323'],
        ['MAZDA', '5'],
        ['MAZDA', '6'],
        ['MAZDA', '626'],
        ['MAZDA', '8'],
        ['MAZDA', 'B-SERIE'],
        ['MAZDA', 'BT-50'],
        ['MAZDA', 'CX-3'],
        ['MAZDA', 'CX-5'],
        ['MAZDA', 'CX-7'],
        ['MAZDA', 'CX-8'],
        ['MAZDA', 'CX-9'],
        ['MAZDA', 'E-SERIE'],
        ['MAZDA', 'MPV'],
        ['MAZDA', 'MX-3'],
        ['MAZDA', 'MX-5'],
        ['MAZDA', 'MX-6'],
        ['MAZDA', 'PREMACY'],
        ['MAZDA', 'RX-2'],
        ['MAZDA', 'RX-4'],
        ['MAZDA', 'RX-5'],
        ['MAZDA', 'RX-6'],
        ['MAZDA', 'RX-7'],
        ['MAZDA', 'RX-8'],
        ['MAZDA', 'TRIBUTE'],
        ['MAZDA', 'XEDOS'],
        ['MERCEDES-BENZ', '190'],
        ['MERCEDES-BENZ', 'A-CLASS'],
        ['MERCEDES-BENZ', 'AMG'],
        ['MERCEDES-BENZ', 'B-CLASS'],
        ['MERCEDES-BENZ', 'C-CLASS'],
        ['MERCEDES-BENZ', 'CABRIOLET'],
        ['MERCEDES-BENZ', 'CLA'],
        ['MERCEDES-BENZ', 'CLC-CLASS'],
        ['MERCEDES-BENZ', 'CLK'],
        ['MERCEDES-BENZ', 'CLS'],
        ['MERCEDES-BENZ', 'COUPE'],
        ['MERCEDES-BENZ', 'E-CLASS'],
        ['MERCEDES-BENZ', 'G-CLASS'],
        ['MERCEDES-BENZ', 'GLA-CLASS'],
        ['MERCEDES-BENZ', 'GLC'],
        ['MERCEDES-BENZ', 'GLE'],
        ['MERCEDES-BENZ', 'GLK-CLASS'],
        ['MERCEDES-BENZ', 'GLS'],
        ['MERCEDES-BENZ', 'M'],
        ['MERCEDES-BENZ', 'M-CLASS'],
        ['MERCEDES-BENZ', 'PULLMANN'],
        ['MERCEDES-BENZ', 'R'],
        ['MERCEDES-BENZ', 'R-CLASS'],
        ['MERCEDES-BENZ', 'S-CLASS'],
        ['MERCEDES-BENZ', 'SL'],
        ['MERCEDES-BENZ', 'SLC'],
        ['MERCEDES-BENZ', 'SLK'],
        ['MERCEDES-BENZ', 'SLR'],
        ['MERCEDES-BENZ', 'SLS'],
        ['MERCEDES-BENZ', 'SPRINTER'],
        ['MERCEDES-BENZ', 'V-CLASS'],
        ['MERCEDES-BENZ', 'VIANO'],
        ['MERCEDES-BENZ', 'VITO'],
        ['MERCEDES-BENZ', 'VITO'],
        ['MERCEDES-BENZ', 'X-CLASS'],
        ['MINI', 'MINI'],
        ['MITSUBISHI', '3000'],
        ['MITSUBISHI', '3000GT'],
        ['MITSUBISHI', '380'],
        ['MITSUBISHI', 'ASX'],
        ['MITSUBISHI', 'ATTRAGE'],
        ['MITSUBISHI', 'CANTER'],
        ['MITSUBISHI', 'CARISMA'],
        ['MITSUBISHI', 'CHALLENGER'],
        ['MITSUBISHI', 'COLT'],
        ['MITSUBISHI', 'CORDIA'],
        ['MITSUBISHI', 'D-SERIES'],
        ['MITSUBISHI', 'DEBONAIR'],
        ['MITSUBISHI', 'DELICA'],
        ['MITSUBISHI', 'DIAMANTE'],
        ['MITSUBISHI', 'DION'],
        ['MITSUBISHI', 'ECLIPSE'],
        ['MITSUBISHI', 'EK'],
        ['MITSUBISHI', 'ENDEAVOR'],
        ['MITSUBISHI', 'EXPO'],
        ['MITSUBISHI', 'F-SERIES'],
        ['MITSUBISHI', 'FIGHTER'],
        ['MITSUBISHI', 'FREECA'],
        ['MITSUBISHI', 'FTO'],
        ['MITSUBISHI', 'FUSO'],
        ['MITSUBISHI', 'GALANT'],
        ['MITSUBISHI', 'GALLOPER'],
        ['MITSUBISHI', 'GRANDIS'],
        ['MITSUBISHI', 'GTO'],
        ['MITSUBISHI', 'I'],
        ['MITSUBISHI', 'L'],
        ['MITSUBISHI', 'L100'],
        ['MITSUBISHI', 'LANCER'],
        ['MITSUBISHI', 'MAGNA'],
        ['MITSUBISHI', 'MAVEN'],
        ['MITSUBISHI', 'MINICA'],
        ['MITSUBISHI', 'MINICAB'],
        ['MITSUBISHI', 'MIRAGE'],
        ['MITSUBISHI', 'OUTLANDER'],
        ['MITSUBISHI', 'PAJERO'],
        ['MITSUBISHI', 'PRECIS'],
        ['MITSUBISHI', 'PROUDIA/DIGNITY'],
        ['MITSUBISHI', 'R-SERIES'],
        ['MITSUBISHI', 'RAIDER'],
        ['MITSUBISHI', 'ROSA'],
        ['MITSUBISHI', 'RVR'],
        ['MITSUBISHI', 'SANTAMO'],
        ['MITSUBISHI', 'SAPPORO'],
        ['MITSUBISHI', 'SAVRIN'],
        ['MITSUBISHI', 'SHOGUN'],
        ['MITSUBISHI', 'SIGMA'],
        ['MITSUBISHI', 'SPACE'],
        ['MITSUBISHI', 'STARION'],
        ['MITSUBISHI', 'TOPPO'],
        ['MITSUBISHI', 'TOWN'],
        ['MITSUBISHI', 'TREDIA'],
        ['MITSUBISHI', 'TRITON'],
        ['MITSUBISHI', 'VERADA'],
        ['MITSUBISHI', 'VERYCA'],
        ['MITSUBISHI', 'XPANDER'],
        ['MITSUBISHI', 'ZINGER'],
        ['NISSAN', 'ALMERA'],
        ['NISSAN', 'ALTIMA'],
        ['NISSAN', 'ALTRA'],
        ['NISSAN', 'APRIO'],
        ['NISSAN', 'DATSUN'],
        ['NISSAN', 'GT-R'],
        ['NISSAN', 'INFINITI'],
        ['NISSAN', 'JUKE'],
        ['NISSAN', 'LEAF'],
        ['NISSAN', 'LIVINA'],
        ['NISSAN', 'LUCINO'],
        ['NISSAN', 'MAXIMA'],
        ['NISSAN', 'MICRA'],
        ['NISSAN', 'PATHFINDER'],
        ['NISSAN', 'PATROL'],
        ['NISSAN', 'PINTARA'],
        ['NISSAN', 'PRESIDENT'],
        ['NISSAN', 'QASHQAI'],
        ['NISSAN', 'TERRANO'],
        ['NISSAN', 'TITAN'],
        ['NISSAN', 'WINGROAD'],
        ['NISSAN', 'XTERRA'],
        ['NISSAN', 'XFN'],
        ['NISSAN', 'X-TRAIL'],
        ['OPEL', 'ASTRA'],
        ['OPEL', 'CALIBRA'],
        ['OPEL', 'COMBO'],
        ['OPEL', 'CORSA'],
        ['OPEL', 'FRONTERA'],
        ['OPEL', 'INSIGNIA'],
        ['OPEL', 'KADETT'],
        ['OPEL', 'MANTA'],
        ['OPEL', 'MERIVA'],
        ['OPEL', 'OMEGA'],
        ['OPEL', 'SENATOR'],
        ['OPEL', 'TIGRA'],
        ['OPEL', 'VECTRA'],
        ['OPEL', 'VIVARO'],
        ['OPEL', 'ZAFIRA'],
        ['PEUGEOT', '1007'],
        ['PEUGEOT', '104'],
        ['PEUGEOT', '106'],
        ['PEUGEOT', '107'],
        ['PEUGEOT', '108'],
        ['PEUGEOT', '2008'],
        ['PEUGEOT', '204'],
        ['PEUGEOT', '205'],
        ['PEUGEOT', '206'],
        ['PEUGEOT', '206+'],
        ['PEUGEOT', '207'],
        ['PEUGEOT', '208'],
        ['PEUGEOT', '3008'],
        ['PEUGEOT', '301'],
        ['PEUGEOT', '304'],
        ['PEUGEOT', '305'],
        ['PEUGEOT', '306'],
        ['PEUGEOT', '307'],
        ['PEUGEOT', '308'],
        ['PEUGEOT', '309'],
        ['PEUGEOT', '4007'],
        ['PEUGEOT', '4008'],
        ['PEUGEOT', '404'],
        ['PEUGEOT', '405'],
        ['PEUGEOT', '406'],
        ['PEUGEOT', '407'],
        ['PEUGEOT', '408'],
        ['PEUGEOT', '5008'],
        ['PEUGEOT', '504'],
        ['PEUGEOT', '505'],
        ['PEUGEOT', '508'],
        ['PEUGEOT', '604'],
        ['PEUGEOT', '605'],
        ['PEUGEOT', '607'],
        ['PEUGEOT', '806'],
        ['PEUGEOT', '807'],
        ['PEUGEOT', 'BOXER'],
        ['PEUGEOT', 'PARTNER'],
        ['PEUGEOT', 'PICK'],
        ['PEUGEOT', 'RIFTER'],
        ['PEUGEOT', 'TRAVELLER'],
        ['PORSCHE', '356'],
        ['PORSCHE', '718'],
        ['PORSCHE', '911'],
        ['PORSCHE', '912'],
        ['PORSCHE', '912E'],
        ['PORSCHE', '914'],
        ['PORSCHE', '918'],
        ['PORSCHE', '924'],
        ['PORSCHE', '928'],
        ['PORSCHE', '944'],
        ['PORSCHE', '959'],
        ['PORSCHE', '968'],
        ['PORSCHE', 'BOXSTER'],
        ['PORSCHE', 'CARRERA'],
        ['PORSCHE', 'CAYENNE'],
        ['PORSCHE', 'CAYMAN'],
        ['PORSCHE', 'MACAN'],
        ['PORSCHE', 'PANAMERA'],
        ['RENAULT', '19'],
        ['RENAULT', 'CAPTUR'],
        ['RENAULT', 'CLIO'],
        ['RENAULT', 'DOKKER'],
        ['RENAULT', 'DUSTER'],
        ['RENAULT', 'ESPACE'],
        ['RENAULT', 'GRAND'],
        ['RENAULT', 'KADJAR'],
        ['RENAULT', 'KANGOO'],
        ['RENAULT', 'KAPTUR'],
        ['RENAULT', 'KOLEOS'],
        ['RENAULT', 'LAGUNA'],
        ['RENAULT', 'LODGY'],
        ['RENAULT', 'LOGAN'],
        ['RENAULT', 'LOGAN/STEPWAY'],
        ['RENAULT', 'MEGANE'],
        ['RENAULT', 'RAPID'],
        ['RENAULT', 'SANDERO/STEPWAY'],
        ['RENAULT', 'SCALA'],
        ['RENAULT', 'TALISMAN'],
        ['RENAULT', 'TWINGO'],
        ['ROVER', '100'],
        ['ROVER', '200'],
        ['ROVER', '2000-3500'],
        ['ROVER', '25'],
        ['ROVER', '3'],
        ['ROVER', '400'],
        ['ROVER', '416I'],
        ['ROVER', '45'],
        ['ROVER', '600'],
        ['ROVER', '75'],
        ['ROVER', '800'],
        ['ROVER', 'COUPE'],
        ['ROVER', 'MAESTRO'],
        ['ROVER', 'METRO'],
        ['ROVER', 'MINI'],
        ['ROVER', 'MINI-MOKE'],
        ['ROVER', 'MONTEGO'],
        ['ROVER', 'QUINTET'],
        ['ROVER', 'RV8'],
        ['ROVER', 'STREETWISE'],
        ['SAAB', '600'],
        ['SAAB', '9-2X'],
        ['SAAB', '9-3'],
        ['SAAB', '9-3X'],
        ['SAAB', '9-4X'],
        ['SAAB', '9-5'],
        ['SAAB', '9-7X'],
        ['SAAB', '90'],
        ['SAAB', '900'],
        ['SAAB', '9000'],
        ['SAAB', '95'],
        ['SAAB', '96'],
        ['SAAB', '99'],
        ['SAAB', 'MONTE'],
        ['SAAB', 'SONETT'],
        ['SEAT', 'ALHAMBRA'],
        ['SEAT', 'ALTEA'],
        ['SEAT', 'ARONA'],
        ['SEAT', 'AROSA'],
        ['SEAT', 'CORDOBA'],
        ['SEAT', 'IBIZA'],
        ['SEAT', 'LEON'],
        ['SEAT', 'PANDA'],
        ['SEAT', 'RITMO'],
        ['SEAT', 'TARRACO'],
        ['SEAT', 'TERRA'],
        ['SEAT', 'TOLEDO'],
        ['SKODA', 'CITIGO'],
        ['SKODA', 'FABIA'],
        ['SKODA', 'FAVORIT'],
        ['SKODA', 'FELICIA'],
        ['SKODA', 'KAROQ'],
        ['SKODA', 'KODIAQ'],
        ['SKODA', 'OCTAVIA'],
        ['SKODA', 'RAPID'],
        ['SKODA', 'ROOMSTER'],
        ['SKODA', 'SUPERB'],
        ['SKODA', 'YETI'],
        ['SMART', 'CABRIO'],
        ['SMART', 'CITY-COUPE'],
        ['SMART', 'CROSSBLADE'],
        ['SMART', 'FORFOUR'],
        ['SMART', 'FORTWO'],
        ['SMART', 'ROADSTER'],
        ['SUBARU', 'FORESTER'],
        ['SUBARU', 'IMPREZA'],
        ['SUBARU', 'JUSTY'],
        ['SUBARU', 'LEGACY'],
        ['SUBARU', 'LEONE'],
        ['SUBARU', 'OUTBACK'],
        ['SUBARU', 'STELLA'],
        ['SUZUKI', 'HUSTLER'],
        ['SUZUKI', 'JIMNY'],
        ['SUZUKI', 'LIANA'],
        ['SUZUKI', 'SAMURAI'],
        ['SUZUKI', 'SIERRA'],
        ['SUZUKI', 'SPACIA'],
        ['SUZUKI', 'SWIFT'],
        ['SUZUKI', 'SWIFT+'],
        ['SUZUKI', 'SX4'],
        ['SUZUKI', 'VITARA'],
        ['TOYOTA', 'AURIS'],
        ['TOYOTA', 'AVENSIS'],
        ['TOYOTA', 'AYGO'],
        ['TOYOTA', 'C-HR'],
        ['TOYOTA', 'CELICA'],
        ['TOYOTA', 'COROLLA'],
        ['TOYOTA', 'HIGHLANDER'],
        ['TOYOTA', 'HILUX'],
        ['TOYOTA', 'LAND'],
        ['TOYOTA', 'PRIUS'],
        ['TOYOTA', 'RAV'],
        ['TOYOTA', 'SEQUOIA'],
        ['TOYOTA', 'SUPRA'],
        ['TOYOTA', 'TUNDRA'],
        ['TOYOTA', 'URBAN'],
        ['TOYOTA', 'VERSO'],
        ['TOYOTA', 'YARIS'],
        ['VOLVO', 'C30'],
        ['VOLVO', 'C70'],
        ['VOLVO', 'S40'],
        ['VOLVO', 'S60'],
        ['VOLVO', 'S70'],
        ['VOLVO', 'S80'],
        ['VOLVO', 'S90'],
        ['VOLVO', 'V40'],
        ['VOLVO', 'V50'],
        ['VOLVO', 'V60'],
        ['VOLVO', 'V70'],
        ['VOLVO', 'V90'],
        ['VOLVO', 'XC40'],
        ['VOLVO', 'XC60'],
        ['VOLVO', 'XC70'],
        ['VOLVO', 'XC90'],
        ['VOLKSWAGEN', 'AMAROK'],
        ['VOLKSWAGEN', 'ARTEON'],
        ['VOLKSWAGEN', 'BEETLE'],
        ['VOLKSWAGEN', 'BORA'],
        ['VOLKSWAGEN', 'CADDY'],
        ['VOLKSWAGEN', 'CC'],
        ['VOLKSWAGEN', 'CITYGOLF'],
        ['VOLKSWAGEN', 'CORRADO'],
        ['VOLKSWAGEN', 'CRAFTER'],
        ['VOLKSWAGEN', 'FOX'],
        ['VOLKSWAGEN', 'GOLF'],
        ['VOLKSWAGEN', 'JETTA'],
        ['VOLKSWAGEN', 'LUPO'],
        ['VOLKSWAGEN', 'MULTIVAN'],
        ['VOLKSWAGEN', 'PASSAT'],
        ['VOLKSWAGEN', 'PHAETON'],
        ['VOLKSWAGEN', 'POLO'],
        ['VOLKSWAGEN', 'SCIROCCO'],
        ['VOLKSWAGEN', 'SHARAN'],
        ['VOLKSWAGEN', 'T-CROSS'],
        ['VOLKSWAGEN', 'T-ROC'],
        ['VOLKSWAGEN', 'TIGUAN'],
        ['VOLKSWAGEN', 'TIGUAN'],
        ['VOLKSWAGEN', 'TOUAREG'],
        ['VOLKSWAGEN', 'TOURAN'],
        ['VOLKSWAGEN', 'TRANSPORTER'],
        ['VOLKSWAGEN', 'UP'],
        ['VOLKSWAGEN', 'VENTO'],
    ];

    function makeDropDown(data, level1Filter, applyData) {
        const filteredArray = data.filter(r => r[0] === level1Filter);
        const uniqueOptions = new Set();
        filteredArray.forEach(r => uniqueOptions.add(r[1]));

        const uniqueList = [...uniqueOptions];
        const selectLevel2 = applyData;
        selectLevel2.innerHTML = '';
        uniqueList.forEach(item => {
            const option = document.createElement('option');
            option.textContent = item;
            selectLevel2.appendChild(option);
        });
    }

    function applyDropdown() {
        const selectCategoryValue = document.querySelector('[name="category"]').value;
        const applyTypesData = document.querySelector('[name="type"]');
        makeDropDown(categoryItemsData, selectCategoryValue, applyTypesData);

    }


    function applyBrandDropdown() {
        const selectedBrand = document.querySelector('[name="brand"]').value;
        const applyModelsData = document.querySelector('[name="model"]');

        makeDropDown(brandsModelsData, selectedBrand, applyModelsData);
    }

    const onCreateSubmitHandler = async (e) => {
        e.preventDefault();

        const category = e.target.category.value.trim();
        const type = e.target.type.value.trim();
        const brand = e.target.brand.value.trim();
        const model = e.target.model.value.trim();
        const yearFrom = e.target.yearFrom.value.trim();
        const yearTo = e.target.yearTo.value.trim();
        const engineType = e.target.engineType.value.trim();
        const partColor = e.target.partColor.value.trim();
        const imageUrl = e.target.imageUrl.value.trim();
        const condition = e.target.condition.value.trim();
        const title = e.target.title.value.trim();
        const price = e.target.price.value.trim();

        if (!category || !type || !brand || !model || !title || !price) {
            return handleClickShowError('Category, type, brand, model, title and price are required!');
        }

        await createPart(category, type, brand, model, yearFrom, yearTo, engineType, partColor, imageUrl, condition, title, price);
        navigate('/');
    }


    return (<div className="creatediv">
        <form onSubmit={onCreateSubmitHandler} name="buyoutForm" className="form-horiz">
            <div className="form-inputs">
                <div className="form-input">
                    <div className="category">
                        <span>Категория*</span>
                        <div className="select">
                            <select name="category" id="level11" onChange={applyDropdown}>
                                <option>Аудио, видео, навигации</option>
                                <option>Брави, дръжки, ключалки</option>
                                <option>Вътрешно оборудване</option>
                                <option>Горивна система</option>
                                <option>Гуми и джанти (2-ра употреба)</option>
                                <option>Двигател и оборудване</option>
                                <option>Ел. оборудване</option>
                                <option>Изпускателна система</option>
                                <option>Казанчета</option>
                                <option>Компютри, модули и релета</option>
                                <option>Маркучи, тръбички и колектори</option>
                                <option>Кори, уплътнения и пластмаси</option>
                                <option>Моторчета, машинки и механизми</option>
                                <option>Окачване и кормилна уредба</option>
                                <option>Охладителна и климатична система</option>
                                <option>Светлини</option>
                                <option>Скорости и трансмисия</option>
                                <option>Спирачна система</option>
                                <option>Тампони, маншони, лапи и стойки</option>
                                <option>Части за купето - едрогабаритни</option>
                                <option>Части за купето - малогабаритни</option>
                            </select>
                        </div>
                    </div>
                    <div className="type">
                        <span>Тип*</span>
                        <div className="select">
                            <select name="type" id="">
                            </select>
                        </div>
                    </div>
                    <div className="brand">
                        <span>Марка*</span>
                        <div className="select">
                            <select name="brand" id="" onChange={applyBrandDropdown}>
                                <optgroup label="A">
                                    <option>ABARTH</option>
                                    <option>ALFA ROMEO</option>
                                    <option>AUDI</option>
                                </optgroup>
                                <optgroup label="B">
                                    <option>BMW</option>
                                </optgroup>
                                <optgroup label="C">
                                    <option>CHEVROLET</option>
                                    <option>CHRYSLER</option>
                                    <option>CITROËN</option>
                                </optgroup>
                                <optgroup label="D">
                                    <option>DAEWOO</option>
                                    <option>DAIHATSU</option>
                                </optgroup>
                                <optgroup label="F">
                                    <option>FIAT</option>
                                    <option>FORD</option>
                                </optgroup>
                                <optgroup label="H">
                                    <option>HONDA</option>
                                    <option>HYUNDAI</option>
                                </optgroup>
                                <optgroup label="I">
                                    <option>INFINITI</option>
                                    <option>IVECO</option>
                                </optgroup>
                                <optgroup label="J">
                                    <option>JEEP</option>
                                </optgroup>
                                <optgroup label="K">
                                    <option>KIA</option>
                                </optgroup>
                                <optgroup label="L">
                                    <option>LANCIA</option>
                                    <option>LAND-ROVER</option>
                                    <option>LEXUS</option>
                                </optgroup>
                                <optgroup label="M">
                                    <option>MAZDA</option>
                                    <option>MERCEDES-BENZ</option>
                                    <option>MINI</option>
                                    <option>MITSUBISHI</option>
                                </optgroup>
                                <optgroup label="N">
                                    <option>NISSAN</option>
                                </optgroup>
                                <optgroup label="O">
                                    <option>OPEL</option>
                                </optgroup>
                                <optgroup label="P">
                                    <option>PEUGEOT</option>
                                    <option>PORSCHE</option>
                                </optgroup>
                                <optgroup label="R">
                                    <option>RENAULT</option>
                                    <option>ROVER</option>
                                </optgroup>
                                <optgroup label="S">
                                    <option>SAAB</option>
                                    <option>SEAT</option>
                                    <option>SKODA</option>
                                    <option>SMART</option>
                                    <option>SUBARU</option>
                                    <option>SUZUKI</option>
                                </optgroup>
                                <optgroup label="T">
                                    <option>TOYOTA</option>
                                </optgroup>
                                <optgroup label="V">
                                    <option>VOLVO</option>
                                    <option>VOLKSWAGEN</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="model">
                        <span>Модел*</span>
                        <div className="select">
                            <select name="model" id="">
                            </select>
                        </div>
                    </div>
                    <div className="year">
                        <span>Година на производство</span>
                        <div className="select">
                            <select name="yearFrom" id="">
                                <option></option>
                                <option value="2021">от 2021г.</option>
                                <option value="2021">от 2020г.</option>
                                <option value="2021">от 2019г.</option>
                                <option value="2021">от 2018г.</option>
                                <option value="2021">от 2017г.</option>
                                <option value="2021">от 2016г.</option>
                                <option value="2021">от 2015г.</option>
                                <option value="2021">от 2014г.</option>
                                <option value="2013">от 2013г.</option>
                                <option value="2012">от 2012г.</option>
                                <option value="2011">от 2011г.</option>
                                <option value="2010">от 2010г.</option>
                                <option value="2009">от 2009г.</option>
                                <option value="2008">от 2008г.</option>
                                <option value="2007">от 2007г.</option>
                                <option value="2006">от 2006г.</option>
                                <option value="2005">от 2005г.</option>
                                <option value="2004">от 2004г.</option>
                                <option value="2003">от 2003г.</option>
                                <option value="2002">от 2002г.</option>
                                <option value="2001">от 2001г.</option>
                                <option value="2000">от 2000г.</option>
                                <option value="1999">от 1999г.</option>
                                <option value="1998">от 1998г.</option>
                                <option value="1997">от 1997г.</option>
                                <option value="1996">от 1996г.</option>
                                <option value="1995">от 1995г.</option>
                                <option value="1994">от 1994г.</option>
                                <option value="1993">от 1993г.</option>
                                <option value="1992">от 1992г.</option>
                                <option value="1991">от 1991г.</option>
                                <option value="1990">от 1990г.</option>
                                <option value="1989">от 1989г.</option>
                                <option value="1988">от 1988г.</option>
                                <option value="1987">от 1987г.</option>
                                <option value="1986">от 1986г.</option>
                                <option value="1985">от 1985г.</option>
                                <option value="1984">от 1984г.</option>
                                <option value="1983">от 1983г.</option>
                                <option value="1982">от 1982г.</option>
                                <option value="1981">от 1981г.</option>
                                <option value="1980">от 1980г.</option>
                                <option value="1979">от 1979г.</option>
                                <option value="1978">от 1978г.</option>
                                <option value="1977">от 1977г.</option>
                                <option value="1976">от 1976г.</option>
                                <option value="1975">от 1975г.</option>
                            </select>
                            <select name="yearTo" id="">
                                <option></option>
                                <option value="2021">до 2021г.</option>
                                <option value="2021">до 2020г.</option>
                                <option value="2021">до 2019г.</option>
                                <option value="2021">до 2018г.</option>
                                <option value="2021">до 2017г.</option>
                                <option value="2021">до 2016г.</option>
                                <option value="2021">до 2015г.</option>
                                <option value="2021">до 2014г.</option>
                                <option value="2013">до 2013г.</option>
                                <option value="2012">до 2012г.</option>
                                <option value="2011">до 2011г.</option>
                                <option value="2010">до 2010г.</option>
                                <option value="2009">до 2009г.</option>
                                <option value="2008">до 2008г.</option>
                                <option value="2007">до 2007г.</option>
                                <option value="2006">до 2006г.</option>
                                <option value="2005">до 2005г.</option>
                                <option value="2004">до 2004г.</option>
                                <option value="2003">до 2003г.</option>
                                <option value="2002">до 2002г.</option>
                                <option value="2001">до 2001г.</option>
                                <option value="2000">до 2000г.</option>
                                <option value="1999">до 1999г.</option>
                                <option value="1998">до 1998г.</option>
                                <option value="1997">до 1997г.</option>
                                <option value="1996">до 1996г.</option>
                                <option value="1995">до 1995г.</option>
                                <option value="1994">до 1994г.</option>
                                <option value="1993">до 1993г.</option>
                                <option value="1992">до 1992г.</option>
                                <option value="1991">до 1991г.</option>
                                <option value="1990">до 1990г.</option>
                                <option value="1989">до 1989г.</option>
                                <option value="1988">до 1988г.</option>
                                <option value="1987">до 1987г.</option>
                                <option value="1986">до 1986г.</option>
                                <option value="1985">до 1985г.</option>
                                <option value="1984">до 1984г.</option>
                                <option value="1983">до 1983г.</option>
                                <option value="1982">до 1982г.</option>
                                <option value="1981">до 1981г.</option>
                                <option value="1980">до 1980г.</option>
                                <option value="1979">до 1979г.</option>
                                <option value="1978">до 1978г.</option>
                                <option value="1977">до 1977г.</option>
                                <option value="1976">до 1976г.</option>
                                <option value="1975">до 1975г.</option>
                            </select>
                        </div>
                    </div>
                    <div className="engine">
                        <span>Двигател</span>
                        <select name="engineType" id="">
                            <option></option>
                            <option>Бензинов</option>
                            <option>Дизелов</option>
                        </select>
                    </div>
                    <div className="color">
                        <span>Цвят</span>
                        <div className="select">
                            <select name="partColor" id="">
                                <option value=""></option>
                                <option value="Tъмно син">Tъмно син
                            </option>
                                <option value="Банан">Банан
                            </option>
                                <option value="Беата">Беата
                            </option>
                                <option value="Бежов">Бежов
                            </option>
                                <option value="Бордо">Бордо
                            </option>
                                <option value="Бронз">Бронз
                            </option>
                                <option value="Бял">Бял
                            </option>
                                <option value="Винен">Винен
                            </option>
                                <option value="Виолетов">Виолетов
                            </option>
                                <option value="Вишнев">Вишнев
                            </option>
                                <option value="Графит">Графит
                            </option>
                                <option value="Жълт">Жълт
                            </option>
                                <option value="Зелен">Зелен
                            </option>
                                <option value="Златист">Златист
                            </option>
                                <option value="Кафяв">Кафяв
                            </option>
                                <option value="Керемиден">Керемиден
                            </option>
                                <option value="Кремав">Кремав
                            </option>
                                <option value="Лилав">Лилав
                            </option>
                                <option value="Металик">Металик
                            </option>
                                <option value="Оранжев">Оранжев
                            </option>
                                <option value="Охра">Охра
                            </option>
                                <option value="Пепеляв">Пепеляв
                            </option>
                                <option value="Перла">Перла
                            </option>
                                <option value="Пясъчен">Пясъчен
                            </option>
                                <option value="Резидав">Резидав
                            </option>
                                <option value="Розов">Розов
                            </option>
                                <option value="Сахара">Сахара
                            </option>
                                <option value="Светло сив">Светло сив
                            </option>
                                <option value="Светло син">Светло син
                            </option>
                                <option value="Сив">Сив
                            </option>
                                <option value="Син">Син
                            </option>
                                <option value="Слонова кост">Слонова кост
                            </option>
                                <option value="Сребърен">Сребърен
                            </option>
                                <option value="Т.зелен">Тъмно зелен
                            </option>
                                <option value="Тъмно сив">Тъмно сив
                            </option>
                                <option value="Тъмно син мет.">Тъмно син мет.
                            </option>
                                <option value="Тъмно червен">Тъмно червен
                            </option>
                                <option value="Тютюн">Тютюн
                            </option>
                                <option value="Хамелеон">Хамелеон
                            </option>
                                <option value="Червен">Червен
                            </option>
                                <option value="Черен">Черен
                            </option>
                            </select>
                        </div>
                    </div>
                    <div className="image">
                        <span>Снимка</span>
                        <div className="select">
                            <input type="text" placeholder="" name="imageUrl" />
                        </div>
                    </div>
                    <div className="condition">
                        <span>Състояние</span>
                        <div className="select">
                            <select name="condition" id="">
                                <option value=""></option>
                                <option value="Ново">Ново</option>
                                <option value="Втора употреба">Втора употреба</option>
                            </select>
                        </div>
                    </div>
                    <div className="title">
                        <span>Заглавие *</span>
                        <div className="select">
                            <input type="text" placeholder="" name="title" />
                        </div>
                    </div>
                    <div className="price">
                        <span>Цена *</span>
                        <div className="select">
                            <input type="text" placeholder="" name="price" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-wrapper">
                <button type="submit" className="button-submit">
                    <span>Запиши</span>
                    <span className="icon"></span>

                </button>
                <div className="text-button">* Задължителни полета</div>
            </div>
        </form>
    </div >)
}

export default Create;