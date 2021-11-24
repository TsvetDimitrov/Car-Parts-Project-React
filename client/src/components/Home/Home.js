import { Link } from "react-router-dom";
import Benefits from "../Benefits/Benefits";
import './Home.css'


function Home() {


    return (
        <div className="inner">
            <div className="homepage-font-picture"></div>

            <div className="homepage-wrapper">
                <div className="homepage-grid">
                    <div className="sidenav">
                        <div className="category-sidenav-header">
                            Категории
                </div>
                        <div className="category-sidenav-header">
                            <Link to="/products">
                                Последно добавени
                    </Link>
                        </div>
                        <div className="search">
                            <div className="search-field">
                                <input type="text" name="searchCategory" placeholder="Намерете категория" />
                            </div>
                        </div>
                        <div className="categories">
                            <div className="category">
                                <Link to="/products/audio-video-navigacii">
                                    <img src="/images/audio&Navigations.jpg" alt="Аудио, видео, навигации" />
                                    <span>Аудио, видео, навигации</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Аудио, видео, навигации</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/cd-cheindjyri" className="category-child" data-value="300">CD
                                        Чейнджъри</Link>
                                            <Link to="/products/dvd-tv-priemnici" className="category-child" data-value="300">DVD и TV приемници</Link>
                                            <Link to="/products/gps-i-navigacii" className="category-child" data-value="300">GPS и навигации</Link>
                                            <Link to="/products/hangsfree-i-bluetooth-mikrofoni" className="category-child" data-value="300">Hands Free и bluetooth
                                        микрофони</Link>
                                            <Link to="/products/kasetofoni" className="category-child" data-value="300">Касетофони</Link>
                                            <Link to="/products/visokogovoriteli-i-tonkoloni" className="category-child" data-value="300">Високоговорители и
                                        тонколони</Link>
                                            <Link to="/products/subuferi" className="category-child" data-value="300">Субуфери</Link>
                                            <Link to="/products/usilvateli" className="category-child" data-value="300">Усилватели</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/car-handles.jpg" alt="Брави, дръжки, ключалки" />
                                    <span>Брави, дръжки, ключалки</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Брави, дръжки, ключалки</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/rukohvatki-za-tavan" className="category-child" data-value="300">Ръкохватки за таван</Link>
                                            <Link to="/products/bravi-na-vratite" className="category-child" data-value="300">Брави на вратите</Link>
                                            <Link to="/products/bravi-na-bagajnik" className="category-child" data-value="300">Брави на багажник</Link>
                                            <Link to="/products/bravi-na-kapak" className="category-child" data-value="300">Брави на капак</Link>
                                            <Link to="/products/kluchalki" className="category-child" data-value="300">Ключалки</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/inside-items.jpg" alt="Вътрешно оборудване" />
                                    <span>Вътрешно оборудване</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Вътрешно оборудване</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/airbag" className="category-child" data-value="300">AirBag</Link>
                                            <Link to="/products/sedalki" className="category-child" data-value="300">Седалки</Link>
                                            <Link to="/products/sennici" className="category-child" data-value="300">Сенници</Link>
                                            <Link to="/products/pepelnici" className="category-child" data-value="300">Пепелници</Link>
                                            <Link to="/products/svetlini" className="category-child" data-value="300">Светлини</Link>
                                            <Link to="/products/jabki" className="category-child" data-value="300">Жабки</Link>
                                            <Link to="/products/pedali" className="category-child" data-value="300">Педали</Link>
                                            <Link to="/products/parno" className="category-child" data-value="300">Парно</Link>
                                        </div>

                                        <div className="separator"></div>
                                        <div className="column">
                                            <Link to="/products/butoni-i-kopcheta" className="category-child" data-value="300">Бутони и копчета</Link>
                                            <Link to="/products/podlakatnici" className="category-child" data-value="300">Подлакътници</Link>
                                            <Link to="/products/lostove-za-ruchna-spirachka" className="category-child" data-value="300">Лостове за ръчна
                                        спирачка</Link>
                                            <Link to="/products/volani" className="category-child" data-value="300">Волани</Link>
                                            <Link to="/products/kilometraji" className="category-child" data-value="300">Километражи</Link>
                                            <Link to="/products/plafoni" className="category-child" data-value="300">Плафони</Link>
                                            <Link to="/products/stelki" className="category-child" data-value="300">Стелки</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/fuel-system-img.png" alt="Горивна система" />
                                    <span>Горивна система</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Горивна система</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/benzinovi-pompi" className="category-child" data-value="300">Бензинови Помпи</Link>
                                            <Link to="/products/vsmukaltelni-klapani" className="category-child" data-value="300">Всмукателни клапани</Link>
                                            <Link to="/products/GNP" className="category-child" data-value="300">ГНП</Link>
                                            <Link to="/products/gorivni-reiki" className="category-child" data-value="300">Горивни рейки</Link>
                                            <Link to="/products/duzi-benzin" className="category-child" data-value="300">Дюзи бензин</Link>
                                            <Link to="/products/duzi-dizel" className="category-child" data-value="300">Дюзи дизел</Link>
                                            <Link to="/products/rezervoari" className="category-child" data-value="300">Резервоари</Link>
                                            <Link to="/products/nivomeri" className="category-child" data-value="300">Нивомери</Link>
                                        </div>
                                        <div className="separator"></div>

                                        <div className="column">
                                            <Link to="/products/karburatori" className="category-child" data-value="300">Карбуратори</Link>
                                            <Link to="/products/podgrevni-sveshti" className="category-child" data-value="300">Подгревни свещи</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/tires-jpg.jpg" alt="Гуми и джанти" />
                                    <span>Гуми и джанти (2-ра употреба)</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Гуми и джанти (2-ра употреба)</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/aluminievi-djanti" className="category-child" data-value="300">Алуминиеви джанти</Link>
                                            <Link to="/products/jelezni-djanti" className="category-child" data-value="300">Железни джанти</Link>
                                            <Link to="/products/boltove-za-djanti" className="category-child" data-value="300">Болтове за джанти</Link>
                                            <Link to="/products/sekretni-boltove-za-djanti" className="category-child" data-value="300">Секретни болтове за
                                        джанти</Link>
                                            <Link to="/products/letni-gumi" className="category-child" data-value="300">Летни гуми</Link>
                                            <Link to="/products/zimni-gumi" className="category-child" data-value="300">Зимни гуми</Link>
                                            <Link to="/products/vsesezonni-gumi" className="category-child" data-value="300">Всесезонни гуми</Link>
                                            <Link to="/products/kapachki-za-djanti" className="category-child" data-value="300">Капачки за джанти</Link>
                                        </div>
                                        <div className="separator"></div>
                                        <div className="column">
                                            <Link to="/products/flanci" className="category-child" data-value="300">Фланци</Link>
                                            <Link to="/products/rezervni-gumi" className="category-child" data-value="300">Резервни гуми</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/corvette-engine.jpg" alt="Двигател и оборудване" />
                                    <span>Двигател и оборудване</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Двигател и оборудване</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/butala-rizi-bieli" className="category-child" data-value="300">Бутала, ризи, биели</Link>
                                            <Link to="/products/kolqnovi-valove" className="category-child" data-value="300">Колянови валове</Link>
                                            <Link to="/products/vakuum-pompi" className="category-child" data-value="300">Вакуум помпи</Link>
                                            <Link to="/products/glavi" className="category-child" data-value="300">Глави</Link>
                                            <Link to="/products/karteri" className="category-child" data-value="300">Картери</Link>
                                            <Link to="/products/masleni-shteki" className="category-child" data-value="300">Маслени щеки</Link>
                                            <Link to="/products/turbini" className="category-child" data-value="300">Турбини</Link>

                                        </div>

                                        <div className="separator"></div>

                                        <div className="column">
                                            <Link to="/products/hidravlichni-pompi" className="category-child" data-value="300">Хидравлични помпи</Link>
                                            <Link to="/products/celi-dvigateli" className="category-child" data-value="300">Цели двигатели</Link>
                                            <Link to="/products/garnituri-uplatneniq" className="category-child" data-value="300">Гарнитури, уплътнения</Link>
                                            <Link to="/products/rolki-i-remaci" className="category-child" data-value="300">Ролки и ремъци</Link>
                                            <Link to="/products/masleni-gorivni-i-vyzdushni-filtri" className="category-child" data-value="300">Маслени, горивни и въздушни
                                        филтри</Link>
                                            <Link to="/products/masleni-pompi" className="category-child" data-value="300">Маслени помпи</Link>
                                            <Link to="/products/masleni-ohladiteli" className="category-child" data-value="300">Маслени охладители</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/car-battery.jpg" alt="Ел. оборудване" />
                                    <span>Ел. оборудване</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Ел. оборудване</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/akumulatori" className="category-child" data-value="300">Акумулатори</Link>
                                            <Link to="/products/alternatori" className="category-child" data-value="300">Алтернатори</Link>
                                            <Link to="/products/bobini" className="category-child" data-value="300">Бобини</Link>
                                            <Link to="/products/bushonni-tabla-i-bushoni" className="category-child" data-value="300">Бушонни табла/ Бушони</Link>
                                            <Link to="/products/vakuum-mashinki-za-centralno" className="category-child" data-value="300">Вакуум машинки за
                                        централно</Link>
                                            <Link to="/products/datchici-za-kolqnov-val" className="category-child" data-value="300">Датчици за колянов вал</Link>

                                        </div>

                                        <div className="separator"></div>

                                        <div className="column">
                                            <Link to="/products/datchici-senzori-i-shalteri" className="category-child" data-value="300">Датчици, сензори и
                                        шалтери</Link>
                                            <Link to="/products/instalacii-okabelqvane" className="category-child" data-value="300">Инсталации, окабеляване</Link>
                                            <Link to="/products/starteri" className="category-child" data-value="300">Стартери</Link>
                                            <Link to="/products/potenciometyr-na-pedala" className="category-child" data-value="300">Потенциометър на педала</Link>
                                            <Link to="/products/tempomat-avtopilot" className="category-child" data-value="300">Темпомат/Автопилот</Link>
                                            <Link to="/products/lentovi-kabeli" className="category-child" data-value="300">Лентови кабели</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/muffler.jpg" alt="Изпускателна система" />
                                    <span>Изпускателна система</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Изпускателна система</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/gurneta-generacii" className="category-child" data-value="300">Гърнета, генерации</Link>
                                            <Link to="/products/izpuskatelni-trybi" className="category-child" data-value="300">Изпускателни тръби</Link>
                                            <Link to="/products/katalizatori-novi" className="category-child" data-value="300">Катализатори(нови)</Link>
                                            <Link to="/products/lamda-sondi" className="category-child" data-value="300">Ламбда сонди</Link>
                                            <Link to="/products/meki-vrazki" className="category-child" data-value="300">Меки връзки</Link>
                                            <Link to="/products/prujini-darjachi-za-garneta" className="category-child" data-value="300">Пружини, държачи за
                                        гърнета</Link>
                                            <Link to="/products/filtar-za-tvardi-chastici" className="category-child" data-value="300">Филтър за твърди частици</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/kazanche.jpg" alt="Казанчета" />
                                    <span>Казанчета</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Казанчета</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/kazancheta-za-antifriz" className="category-child" data-value="300">Казанчета за антифриз</Link>
                                            <Link to="/products/kazancheta-za-spirachna-technost" className="category-child" data-value="300">Казанчета за спирачна
                                        течност</Link>
                                            <Link to="/products/kazancheta-za-hidravlichna-technost" className="category-child" data-value="300">Казанчета за хидравлична
                                        течност</Link>
                                            <Link to="/products/kazancheta-za-chistachki" className="category-child" data-value="300">Казанчета за чистачки</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/engine-computer.jpg" alt="Компютри, модули и релета" />
                                    <span>Компютри, модули и релета</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Компютри, модули и релета</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/komputri-za-ABS" className="category-child" data-value="300">Компютри за ABS</Link>
                                            <Link to="/products/komputri-za-okachvane" className="category-child" data-value="300">Компютри за окачване</Link>
                                            <Link to="/products/komputri-za-dvigatel" className="category-child" data-value="300">Компютри за двигател</Link>
                                            <Link to="/products/komputri-za-skorosti" className="category-child" data-value="300">Компютри за скорости</Link>
                                            <Link to="/products/moduli" className="category-child" data-value="300">Модули</Link>
                                            <Link to="/products/releta" className="category-child" data-value="300">Релета</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/car-hose.jpg" alt="Маркучи, тръбички и колектори" />
                                    <span>Маркучи, тръбички и колектори</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Маркучи, тръбички и колектори</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/gorivni-markuchi-i-trabi" className="category-child" data-value="300">Горивни маркучи и тръби</Link>
                                            <Link to="/products/gofrirani-markuchi" className="category-child" data-value="300">Гофрирани маркучи</Link>
                                            <Link to="/products/kolektori-vsmukatelni-i-izpuskatelni" className="category-child" data-value="300">Колектори всмукателни и
                                        изпускателни</Link>
                                            <Link to="/products/markuchi-za-klimatik" className="category-child" data-value="300">Маркучи за климатик</Link>
                                            <Link to="/products/markuchi-za-turbo" className="category-child" data-value="300">Маркучи за турбо</Link>
                                            <Link to="/products/markuchi-za-maslo-i-hidravlika" className="category-child" data-value="300">Маркучи за масло и
                                        хидравлика</Link>
                                            <Link to="/products/markuchi-za-antifriz" className="category-child" data-value="300">Маркучи за антифриз</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/kori-uplatneniq.jpg" alt="Кори, уплътнения и пластмаси" />
                                    <span>Кори, уплътнения и пластмаси</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Кори, уплътнения и пластмаси</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/duhalki-za-parno" className="category-child" data-value="300">Духалки за парно</Link>
                                            <Link to="/products/kori-pod-dvigatel-i-pod-kupeto" className="category-child" data-value="300">Кори под двигател и под
                                        купето</Link>
                                            <Link to="/products/kori-bagajnik" className="category-child" data-value="300">Кори багажник</Link>
                                            <Link to="/products/kori-na-vratite" className="category-child" data-value="300">Кори на вратите</Link>
                                            <Link to="/products/plastmasovi-kori-i-elementi" className="category-child" data-value="300">Пласмасови кори и
                                        елементи</Link>
                                            <Link to="/products/stelki" className="category-child" data-value="300">Стелки</Link>
                                            <Link to="/products/uplatneniq-za-vrati-bagajnici-i-drugi" className="category-child" data-value="300">Уплътнения за врати,
                                            багажници и
                                        други</Link>
                                            <Link to="/products/uplatneniq-za-stykla" className="category-child" data-value="300">Уплътнения за стъкла</Link>
                                            <Link to="/products/shtori-i-mehanizmi" className="category-child" data-value="300">Щори и механизми</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/motorcheta.jpg" alt="Моторчета, машинки и механизми" />
                                    <span>Моторчета, машинки и механизми</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Моторчета, машинки и механизми</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/ventilatori-motorcheta-za-parno" className="category-child" data-value="300">Вентилатори, моторчета за
                                        парно</Link>
                                            <Link to="/products/styklopovdigachi" className="category-child" data-value="300">Стъклоповдигачи</Link>
                                            <Link to="/products/jila-za-vrati-i-kapaci" className="category-child" data-value="300">Жила за врати и капаци</Link>
                                            <Link to="/products/jila-za-gaz" className="category-child" data-value="300">Жила за газ</Link>
                                            <Link to="/products/motorcheta-za-chistachki" className="category-child" data-value="300">Моторчета за чистачки</Link>
                                            <Link to="/products/motorcheta-za-elektricheska-reika" className="category-child" data-value="300">Моторчета за електрическа
                                        рейка</Link>
                                            <Link to="/products/pompichka-za-chistachki" className="category-child" data-value="300">Помпичка за чистачки</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/shock-absorber.jpg" alt="Окачване и кормилна уредба" />
                                    <span>Окачване и кормилна уредба</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Окачване и кормилна уредба</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/amortisiori" className="category-child" data-value="300">Амортисьори</Link>
                                            <Link to="/products/bialetki" className="category-child" data-value="300">Биалетки</Link>
                                            <Link to="/products/dempfer" className="category-child" data-value="300">Демпфер</Link>
                                            <Link to="/products/zadni-mostove" className="category-child" data-value="300">Задни мостове</Link>
                                            <Link to="/products/kareta" className="category-child" data-value="300">Карета</Link>
                                            <Link to="/products/poluoski" className="category-child" data-value="300">Полуоски</Link>
                                            <Link to="/products/komplekt-okachvane" className="category-child" data-value="300">Комплект окачване</Link>

                                        </div>

                                        <div className="separator"></div>

                                        <div className="column"> <Link to="/products/komplekt-vyzdushno-okachvane" className="category-child" data-value="300">Комплект
                                        въздушно
                                        окачване</Link>
                                            <Link to="/products/nosachi-shtangi" className="category-child" data-value="300">Носачи, щанги</Link>
                                            <Link to="/products/prujini" className="category-child" data-value="300">Пружини</Link>
                                            <Link to="/products/predni-mostove" className="category-child" data-value="300">Предни мостове</Link>
                                            <Link to="/products/stabilizirashti-shtangi" className="category-child" data-value="300">Стабилизиращи шанги</Link>
                                            <Link to="/products/resiori" className="category-child" data-value="300">Ресьори</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/cooling.jpg" alt="Охладителна и климатична система" />
                                    <span>Охладителна и климатична система</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Охладителна и климатична система</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/visko-syediniteli" className="category-child" data-value="300">
                                                Виско съединители
                                    </Link>
                                            <Link to="/products/vodni-pompi" className="category-child" data-value="300">Водни помпи</Link>
                                            <Link to="/products/vodni-radiatori" className="category-child" data-value="300">Водни радиатори</Link>
                                            <Link to="/products/kompresori-za-klimatik" className="category-child" data-value="300">Компресори за климатик</Link>
                                            <Link to="/products/interkuleri" className="category-child" data-value="300">Интеркулери</Link>
                                            <Link to="/products/masleni-radiatori" className="category-child" data-value="300">Маслени радиатори</Link>
                                            <Link to="/products/termostati-konzoli-korpusi" className="category-child" data-value="300">Термостати, конзоли,
                                        корпуси</Link>

                                        </div>

                                        <div className="separator"></div>

                                        <div className="column"> <Link to="/products/motorcheta-za-klapi-na-parno" className="category-child" data-value="300">Моторчета
                                        за
                                        клапи
                                        на
                                        парно</Link>
                                            <Link to="/products/perki-za-ohlajdane" className="category-child" data-value="300">Перки за охлаждане</Link>
                                            <Link to="/products/pechki" className="category-child" data-value="300">Печки</Link>
                                            <Link to="/products/radiatori-za-parno" className="category-child" data-value="300">Радиатори за парно</Link>
                                            <Link to="/products/reostati" className="category-child" data-value="300">Реостати</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/svetlini.jpg" alt="Светлини" />
                                    <span>Светлини</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Светлини</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/ksenon-krushki-i-balasti" className="category-child" data-value="300">Ксенон крушки и баласти</Link>
                                            <Link to="/products/migachi-gabariti-i-svetlootraziteli" className="category-child" data-value="300">Мигачи, габарити и
                                        светлоотразители</Link>
                                            <Link to="/products/reflektori" className="category-child" data-value="300">Рефлектори</Link>
                                            <Link to="/products/farove-za-magla" className="category-child" data-value="300">Фарове за мъгла</Link>
                                            <Link to="/products/stopove-i-gabariti" className="category-child" data-value="300">Стопове и габарити</Link>
                                            <Link to="/products/farove" className="category-child" data-value="300">Фарове</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/skorosti-transmisiya.jpg" alt="Скорости и трансмисия" />
                                    <span>Скорости и трансмисия</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Скорости и трансмисия</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/diferenciali" className="category-child" data-value="300">Диференциали</Link>
                                            <Link to="/products/jila-za-syediniteli" className="category-child" data-value="300">Жила за съединители</Link>
                                            <Link to="/products/lageri-i-shtangi-za-skorosti" className="category-child" data-value="300">Лагери и щанги за
                                        скорости</Link>
                                            <Link to="/products/kardani-i-kareta" className="category-child" data-value="300">Кардани и карета</Link>
                                            <Link to="/products/mahovici" className="category-child" data-value="300">Маховици</Link>
                                            <Link to="/products/poluoski" className="category-child" data-value="300">Полуоски</Link>
                                            <Link to="/products/pompi-za-suedinitel-i-remontni-komplekti" className="category-child" data-value="300">Помпи за съединител и
                                            ремонтни
                                        комплекти</Link>
                                            <Link to="/products/razdatki" className="category-child" data-value="300">Раздатки</Link>
                                            <Link to="/products/skorosti-avtomatichni" className="category-child" data-value="300">Скорости - автоматични</Link>
                                        </div>
                                        <div className="separator"></div>
                                        <div className="column">
                                            <Link to="/products/skorosti-rychni" className="category-child" data-value="300">Скорости - ръчни</Link>
                                            <Link to="/products/syediniteli-ferodovi-i-pritiskvatelni-diskove" className="category-child" data-value="300">Съединители, феродови и
                                            притисквателни
                                        дискове</Link>
                                            <Link to="/products/hidrotransformatori" className="category-child" data-value="300">Хидротрансформатори</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/spirachna-sistema.jpg" alt="Спирачна система" />
                                    <span>Спирачна система</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Спирачна система</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/ABS-DSC-ASR" className="category-child" data-value="300">ABS, DSC, ASR</Link>
                                            <Link to="/products/diskove" className="category-child" data-value="300">Дискове</Link>
                                            <Link to="/products/regulator-na-spirachna-sila" className="category-child" data-value="300">Регулатор на спирачна
                                        сила</Link>
                                            <Link to="/products/servo" className="category-child" data-value="300">Серво</Link>
                                            <Link to="/products/spirachni-aparati-i-komplekti" className="category-child" data-value="300">Спирачни апарати и
                                        комплекти</Link>
                                            <Link to="/products/spirachni-barabani-ferodo" className="category-child" data-value="300">Спирачни барабани,
                                        феродо</Link>
                                            <Link to="/products/spirachni-markuchi-i-elementi" className="category-child" data-value="300">Спирачни маркучи и
                                        елементи</Link>
                                            <Link to="/products/spirachni-pompi-i-remontni-komplekti" className="category-child" data-value="300">Спирачни помпи и ремонтни
                                        комлекти</Link>
                                            <Link to="/products/spirachni-cilindri-i-remontni-komplekti" className="category-child" data-value="300">Спирачни цилиндри и ремонтни
                                        комлекти</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/tamponi-manshoni-lapi-stoyki.jpg" alt="Тампони, маншони, лапи и стойки" />
                                    <span>Тампони, маншони, лапи и стойки</span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Тампони, маншони, лапи и стойки</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/lapi-za-dvigatel" className="category-child" data-value="300">Лапи за двигател</Link>
                                            <Link to="/products/tamponi-za-dvigatel" className="category-child" data-value="300">Тампони за двигател</Link>
                                            <Link to="/products/tamponi-za-nosachi" className="category-child" data-value="300">Тампони за носачи</Link>
                                            <Link to="/products/tamponi-za-mosta" className="category-child" data-value="300">Тампони на моста</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/chasti-po-kupeto-edrogabaritni.jpg" alt="Части за купето - едрогабаритни" />
                                    <span>
                                        Части за купето - едрогабаритни
                            </span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Части за купето - едрогабаритни</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/bagajnici-za-tavan-relsi-za-bagaj" className="category-child" data-value="300">Багажници за таван, релси за
                                        багаж</Link>
                                            <Link to="/products/broni-zadni" className="category-child" data-value="300">Брони - задни</Link>
                                            <Link to="/products/broni-predni" className="category-child" data-value="300">Брони - предни</Link>
                                            <Link to="/products/buferi-dyrjachi-i-osnovi-za-broni" className="category-child" data-value="300">Буфери, държачи и основи за
                                        брони</Link>
                                            <Link to="/products/vrati" className="category-child" data-value="300">Врати</Link>
                                            <Link to="/products/dekorativni-maski-i-reshetki" className="category-child" data-value="300">Декоративни маски и
                                        решетки</Link>
                                            <Link to="/products/kalnici" className="category-child" data-value="300">Калници</Link>
                                            <Link to="/products/kapaci-predni" className="category-child" data-value="300">Капаци - предни</Link>
                                            <Link to="/products/kapaci-zadni" className="category-child" data-value="300">Капаци - задни</Link>
                                        </div>
                                        <div className="separator"></div>
                                        <div className="column">
                                            <Link to="/products/maski-gredi-i-koloni" className="category-child" data-value="300">Маски, греди и колони</Link>
                                            <Link to="/products/podkalnici-i-kalobrani" className="category-child" data-value="300">Подкалници и калобрани</Link>
                                            <Link to="/products/rolbari" className="category-child" data-value="300">Ролбари</Link>
                                            <Link to="/products/spoileri" className="category-child" data-value="300">Спойлери</Link>
                                            <Link to="/products/stykla-zadni" className="category-child" data-value="300">Стъкла задни</Link>
                                            <Link to="/products/stykla-chelni" className="category-child" data-value="300">Стъкла челни</Link>
                                            <Link to="/products/stykla-stranichni" className="category-child" data-value="300">Стъкла странични</Link>
                                            <Link to="/products/teglichi-i-oborudvane" className="category-child" data-value="300">Тегличи и оборудване</Link>
                                            <Link to="/products/shibedah" className="category-child" data-value="300">Шибедах</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <Link to="#">
                                    <img src="/images/chasti-po-kupeto-malogabaritni.jpg" alt="Части за купето - малогабаритни" />
                                    <span>
                                        Части за купето - малогабаритни
                            </span>
                                </Link>
                                <div className="dropdown">
                                    <div className="title title-small-dark-strong">Части за купето - малогабаритни</div>
                                    <div className="children">
                                        <div className="column">
                                            <Link to="/products/amortisiori-za-kapaci-vrati-i-jabki" className="category-child" data-value="300">Амортисьори за капаци, врати
                                            и
                                        жабки</Link>
                                            <Link to="/products/anteni" className="category-child" data-value="300">Антени</Link>
                                            <Link to="/products/vratichki-za-rezervoar" className="category-child" data-value="300">Вратички за резервоар</Link>
                                            <Link to="/products/vynshni-ogledala" className="category-child" data-value="300">Външни огледала</Link>
                                            <Link to="/products/elementi-po-karoseriqta" className="category-child" data-value="300">Елементи по каросерията</Link>
                                            <Link to="/products/klaksoni-zumeri-i-sireni" className="category-child" data-value="300">Клаксони, зумери и
                                        сирени</Link>
                                            <Link to="/products/kuki-za-teglene" className="category-child" data-value="300">Куки за теглене</Link>
                                            <Link to="/products/laisni-kapachki-i-emblemi" className="category-child" data-value="300">Лайсни, капачки и
                                        емблеми</Link>
                                            <Link to="/products/mehanizym-i-aksesoari-za-rezervna-guma" className="category-child" data-value="300">Механизъм и аксесоари за
                                            резервна
                                        гума</Link>
                                            <Link to="/products/mehanizmi-i-chistachki-za-farovete" className="category-child" data-value="300">Механизми и чистачки за
                                        фаровете</Link>
                                        </div>
                                        <div className="separator"></div>
                                        <div className="column">
                                            <Link to="/products/panti" className="category-child" data-value="300">Панти</Link>
                                            <Link to="/products/parktronici" className="category-child" data-value="300">Паркторници</Link>
                                            <Link to="/products/pragove-vynshni" className="category-child" data-value="300">Прагове - външни</Link>
                                            <Link to="/products/pryskalki-farove-stykla" className="category-child" data-value="300">Пръскалки - фарове,
                                        стъкла</Link>
                                            <Link to="/products/chistachki-i-ramena-za-chistachki" className="category-child" data-value="300">Чистачки и рамена за
                                        чистачки</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banners">
                            <img src="/images/reklamatuk.png" className="desktop" alt="" />
                        </div>
                    </div>


                    <div className="homePageModel">
                        <div className="content-data content-data-4-columns but-only-2">
                            <h1 className="headerModel">Търсене по марка и модел</h1>
                            <Link to="/products/brand/abarth" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }}
                                    data-src="../../../images/abarth.png" data-alt="ABARTH" width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="../../../images/abarth.png" />
                                    <source srcSet="../../../images/abarth.png" />
                                    <img alt="ABARTH" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                ABARTH
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/alfa-romeo" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }}
                                    data-src="/images/alfa-romeo.png" data-alt="alfa-romeo" width="130" height="130"
                                    data-loaded="true">
                                    <source type="image/webp" srcSet="../../../images/alfa-romeo.webp" />
                                    <source srcSet="../../../images/alfa-romeo.png" />
                                    <img alt="alfa-romeo" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                ALFA ROMEO
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/audi" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="audi"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/audi.webp" />
                                    <img alt="audi" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                AUDI
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/bmw" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="BMW"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet={"/images/bmw.webp"} />
                                    <img alt="BMW" src={"/images/bmw.webp"} />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                BMW
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/chevrolet" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="chevrolet"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/chevrolet.webp" />
                                    <img alt="chevrolet" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                CHEVROLET
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/chrysler" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="chrysler"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/chrysler.webp" />
                                    <img alt="chrysler" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                CHRYSLER
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/CITROËN" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="citroËn"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/citroËn.webp" />
                                    <img alt="citroËn" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                CITROËN
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/dacia" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', 'minHeight': '1rem' }} data-alt="dacia"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/dacia.webp" />
                                    <img alt="dacia" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                DACIA
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/daewoo" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="daewoo"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/daewoo.webp" />
                                    <img alt="daewoo" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                DAEWOO
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/daihatsu" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="daihatsu"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/daihatsu.webp" />
                                    <img alt="daihatsu" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                DAIHATSU
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/fiat" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="fiat"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/fiat.webp" />
                                    <img alt="fiat" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                FIAT
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/ford" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="FORD"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/ford.webp" />
                                    <img alt="FORD" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                FORD
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/honda" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="HONDA"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/honda.webp" />
                                    <img alt="HONDA" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                HONDA
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/hyundai" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="HYUNDAI"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/hyundai.webp" />
                                    <img alt="HYUNDAI" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                HYUNDAI
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/infiniti" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="INFINITI"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/infiniti.webp" />
                                    <img alt="INFINITI" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                INFINITI
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/iveco" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="IVECO"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/iveco.webp" />
                                    <img alt="IVECO" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                IVECO
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/jeep" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="JEEP"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/jeep.webp" />
                                    <img alt="JEEP" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                JEEP
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/kia" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="KIA"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/kia.webp" />
                                    <img alt="KIA" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                KIA
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/lancia" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="LANCIA"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/lancia.webp" />
                                    <img alt="LANCIA" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                LANCIA
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/land-rover" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="LAND-ROVER"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/land-rover.webp" />
                                    <img alt="LAND-ROVER" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                LAND-ROVER
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/lexus" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="LEXUS"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/lexus.webp" />
                                    <img alt="LEXUS" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                LEXUS
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/mazda" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="MAZDA"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/mazda.webp" />
                                    <img alt="MAZDA" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                MAZDA
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/mercedes-benz" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="MERCEDES-BENZ"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/mercedes-benz.webp" />
                                    <img alt="MERCEDES-BENZ" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                MERCEDES-BENZ
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/mini" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="MINI"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/mini.webp" />
                                    <img alt="MINI" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                MINI
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/mitsubishi" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="MITSUBISHI"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/mitsubishi.webp" />
                                    <img alt="MITSUBISHI" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                MITSUBISHI
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/nissan" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="NISSAN"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/nissan.webp" />
                                    <img alt="NISSAN" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                NISSAN
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/opel" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="OPEL"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/opel.webp" />
                                    <img alt="OPEL" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                OPEL
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/peugeot" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="PEUGEOT"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/peugeot.webp" />
                                    <img alt="PEUGEOT" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                PEUGEOT
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/porsche" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="PORSCHE"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/porsche.webp" />
                                    <img alt="PORSCHE" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                PORSCHE
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/renault" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="RENAULT"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/renault.webp" />
                                    <img alt="RENAULT" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                RENAULT
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/rover" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="ROVER"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/rover.webp" />
                                    <img alt="ROVER" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                ROVER
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/saab" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="SAAB"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/saab.webp" />
                                    <img alt="SAAB" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                SAAB
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/seat" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="SEAT"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/seat.webp" />
                                    <img alt="SEAT" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                SEAT
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/skoda" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="SKODA"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/skoda.webp" />
                                    <img alt="SKODA" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                SKODA
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/smart" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="SMART"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/smart.webp" />
                                    <img alt="SMART" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                SMART
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/subaru" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="SUBARU"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/subaru.webp" />
                                    <img alt="SUBARU" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                SUBARU
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/suzuki" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="SUZUKI"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/suzuki.webp" />
                                    <img alt="SUZUKI" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                SUZUKI
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/toyota" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="TOYOTA"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/toyota.webp" />
                                    <img alt="TOYOTA" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                TOYOTA
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/volvo" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="VOLVO"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/volvo.webp" />
                                    <img alt="VOLVO" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                VOLVO
                            </div>
                                </div>
                            </Link>
                            <Link to="/products/brand/volkswagen" className="content-data-item">
                                <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="VOLKSWAGEN"
                                    width="130" height="130" data-loaded="true">
                                    <source type="image/webp" srcSet="/images/vw.webp" />
                                    <img alt="VOLKSWAGEN" />
                                </picture>
                                <div className="content-data-description">
                                    <div className="content-data-title mt-3">
                                        Авточасти
                                <br />
                                VOLKSWAGEN
                            </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            <Benefits />
        </div>

    )
}

export default Home;
