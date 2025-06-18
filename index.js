        const words = [
            "FROM", "THAT", "THIS", "WITH", "YOUR", "HAVE", "MORE", "WILL", "HOME", "PAGE",
            "FREE", "TIME", "THEY", "SITE", "WHAT", "NEWS", "ONLY", "WHEN", "HERE", "ALSO",
            "HELP", "VIEW", "BEEN", "WERE", "SOME", "LIKE", "THAN", "FIND", "DATE", "BACK",
            "LIST", "NAME", "JUST", "OVER", "YEAR", "INTO", "NEXT", "USED", "WORK", "LAST",
            "MOST", "DATA", "MAKE", "THEM", "POST", "CITY", "SUCH", "BEST", "THEN", "GOOD",
            "INFO", "HIGH", "EACH", "VERY", "BOOK", "READ", "NEED", "MANY", "USER", "SAID",
            "DOES", "MAIL", "FULL", "LIFE", "KNOW", "DAYS", "PART", "REAL", "ITEM", "MUST",
            "MADE", "LINE", "SEND", "TYPE", "TAKE", "AREA", "WANT", "LONG", "CODE", "SHOW",
            "EVEN", "MUCH", "SIGN", "FILE", "LINK", "OPEN", "CASE", "SAME", "BOTH", "GAME",
            "CARE", "DOWN", "SIZE", "SHOP", "TEXT", "RATE", "FORM", "LOVE", "MAIN", "ABOUT", 
            "ALERT", "ARGUE", "BEACH", "ABOVE", "ALIKE", "ARISE", "BEGAN", "ABUSE", "ALIVE", "ARRAY", "BEGIN",
            "ACTOR", "ALLOW", "ASIDE", "BEGUN", "ACUTE", "ALONE", "ASSET", "BEING", "ADMIT", "ALONG", "AUDIO", "BELOW",
            "ADOPT", "ALTER", "AUDIT", "BENCH", "ADULT", "AMONG", "AVOID", "BILLY", "AFTER", "ANGER", "AWARD", "BIRTH",
            "AGAIN", "ANGLE", "AWARE", "BLACK", "AGENT", "ANGRY", "BADLY", "BLAME", "AGREE", "APART", "BAKER", "BLIND",
            "AHEAD", "APPLE", "BASES", "BLOCK", "ALARM", "APPLY", "BASIC", "BLOOD", "ALBUM", "ARENA", "BASIS", "BOARD",
            "BOOST", "BUYER", "CHINA", "COVER", "BOOTH", "CABLE", "CHOSE", "CRAFT", "BOUND", "CALIF", "CIVIL", "CRASH",
            "BRAIN", "CARRY", "CLAIM", "CREAM", "BRAND", "CATCH", "CLASS", "CRIME", "BREAD", "CAUSE", "CLEAN", "CROSS",
            "BREAK", "CHAIN", "CLEAR", "CROWD", "BREED", "CHAIR", "CLICK", "CROWN", "BRIEF", "CHART", "CLOCK", "CURVE",
            "BRING", "CHASE", "CLOSE", "CYCLE", "BROAD", "CHEAP", "COACH", "DAILY", "BROKE", "CHECK", "COAST", "DANCE",
            "BROWN", "CHEST", "COULD", "DATED", "BUILD", "CHIEF", "COUNT", "DEALT", "BUILT", "CHILD", "COURT", "DEATH",
            "DEBUT", "ENTRY", "FORTH", "GROUP", "DELAY", "EQUAL", "FORTY", "GROWN", "DEPTH", "ERROR", "FORUM", "GUARD",
            "DOING", "EVENT", "FOUND", "GUESS", "DOUBT", "EVERY", "FRAME", "GUEST", "DOZEN", "EXACT", "FRANK", "GUIDE",
            "DRAFT", "EXIST", "FRAUD", "HAPPY", "DRAMA", "EXTRA", "FRESH", "HARRY", "DRAWN", "FAITH", "FRONT", "HEART",
            "DREAM", "FALSE", "FRUIT", "HEAVY", "DRESS", "FAULT", "FULLY", "HENCE", "DRILL", "FIBRE", "FUNNY", "NIGHT",
            "DRINK", "FIELD", "GIANT", "HORSE", "DRIVE", "FIFTH", "GIVEN", "HOTEL", "DROVE", "FIFTY", "GLASS", "HOUSE",
            "DYING", "FIGHT", "GLOBE", "HUMAN", "EAGER", "FINAL", "GOING", "IDEAL", "EARLY", "FIRST", "GRACE", "IMAGE",
            "EARTH", "FIXED", "GRADE", "INDEX", "EIGHT", "FLASH", "GRAND", "INNER", "ELITE", "FLEET", "GRANT", "INPUT",
            "EMPTY", "FLOOR", "GRASS", "ISSUE", "ENEMY", "FLUID", "GREAT", "IRONY", "ENJOY", "FOCUS", "GREEN", "JUICE",
            "ENTER", "FORCE", "GROSS", "JOINT", "JUDGE", "METAL", "MEDIA", "NEWLY", "KNOWN", "LOCAL", "MIGHT", "NOISE",
            "LABEL", "LOGIC", "MINOR", "NORTH", "LARGE", "LOOSE", "MINUS", "NOTED", "LASER", "LOWER", "MIXED", "NOVEL",
            "LATER", "LUCKY", "MODEL", "NURSE", "LAUGH", "LUNCH", "MONEY", "OCCUR", "LAYER", "LYING", "MONTH", "OCEAN",
            "LEARN", "MAGIC", "MORAL", "OFFER", "LEASE", "MAJOR", "MOTOR", "OFTEN", "LEAST", "MAKER", "MOUNT", "ORDER",
            "LEAVE", "MARCH", "MOUSE", "OTHER", "LEGAL", "MUSIC", "MOUTH", "OUGHT", "LEVEL", "MATCH", "MOVIE", "PAINT",
            "LIGHT", "MAYOR", "NEEDS", "PAPER", "LIMIT", "MEANT", "NEVER", "PARTY", "PEACE", "POWER", "RADIO", "ROUND",
            "PANEL", "PRESS", "RAISE", "ROUTE", "PHASE", "PRICE", "RANGE", "ROYAL", "PHONE", "PRIDE", "RAPID", "RURAL",
            "PHOTO", "PRIME", "RATIO", "SCALE", "PIECE", "PRINT", "REACH", "SCENE", "PILOT", "PRIOR", "READY", "SCOPE",
            "PITCH", "PRIZE", "REFER", "SCORE", "PLACE", "PROOF", "RIGHT", "SENSE", "PLAIN", "PROUD", "RIVAL", "SERVE",
            "PLANE", "PROVE", "RIVER", "SEVEN", "PLANT", "QUEEN", "QUICK", "SHALL", "PLATE", "SIXTH", "STAND", "SHAPE",
            "POINT", "QUIET", "ROMAN", "SHARE", "POUND", "QUITE", "ROUGH", "SHARP", "SHEET", "SPARE", "STYLE", "TIMES",
            "SHELF", "SPEAK", "SUGAR", "TIRED", "SHELL", "SPEED", "SUITE", "TITLE", "SHIFT", "SPEND", "SUPER", "TODAY",
            "SHIRT", "SPENT", "SWEET", "TOPIC", "SHOCK", "SPLIT", "TABLE", "TOTAL", "SHOOT", "SPOKE", "TAKEN", "TOUCH",
            "SHORT", "SPORT", "TASTE", "TOUGH", "SHOWN", "STAFF", "TAXES", "TOWER", "SIGHT", "STAGE", "TEACH", "TRACK",
            "SINCE", "STAKE", "TEETH", "TRADE", "SIXTY", "START", "TEXAS", "TREAT", "SIZED", "STATE", "THANK", "TREND",
            "SKILL", "STEAM", "THEFT", "TRIAL", "SLEEP", "STEEL", "THEIR", "TRIED", "SLIDE", "STICK", "THEME", "TRIES",
            "SMALL", "STILL", "THERE", "TRUCK", "SMART", "STOCK", "THESE", "TRULY", "SMILE", "STONE", "THICK", "TRUST",
            "SMITH", "STOOD", "THING", "TRUTH", "SMOKE", "STORE", "THINK", "TWICE", "SOLID", "STORM", "THIRD", "UNDER",
            "SOLVE", "STORY", "THOSE", "UNDUE", "SORRY", "STRIP", "THREE", "UNION", "SOUND", "STUCK", "THREW", "UNITY",
            "SOUTH", "STUDY", "THROW", "UNTIL", "SPACE", "STUFF", "TIGHT", "UPPER", "UPSET", "WHOLE", "WASTE", "WOUND",
            "URBAN", "WHOSE", "WATCH", "WRITE", "USAGE", "WOMAN", "WATER", "WRONG", "USUAL", "TRAIN", "WHEEL", "WROTE",
            "VALID", "WORLD", "WHERE", "YIELD", "VALUE", "WORRY", "WHICH", "YOUNG", "VIDEO", "WORSE", "WHILE", "YOUTH",
            "VIRUS", "WORST", "WHITE", "WORTH", "VISIT", "WOULD", "VITAL", "VOICE",
            "SEARCH", "ONLINE", "PEOPLE", "HEALTH", "SHOULD", "SYSTEM", "POLICY", "NUMBER",
            "PLEASE", "RIGHTS", "PUBLIC", "SCHOOL", "REVIEW", "UNITED", "CENTER", "TRAVEL",
            "REPORT", "MEMBER", "BEFORE", "HOTELS", "OFFICE", "DESIGN", "POSTED", "WITHIN",
            "STATES", "FAMILY", "PRICES", "SPORTS", "COUNTY", "ACCESS", "CHANGE", "RATING",
            "DURING", "RETURN", "EVENTS", "LITTLE", "MOVIES", "SOURCE", "AUTHOR", "AROUND",
            "COURSE", "CANADA", "CREDIT", "ESTATE", "SELECT", "PHOTOS", "THREAD", "MARKET",
            "REALLY", "ACTION", "SERIES", "SECOND", "FORUMS", "BETTER", "FRIEND", "SERVER",
            "ISSUES", "STREET", "THINGS", "PERSON", "MOBILE", "OFFERS", "RECENT", "STORES",
            "MEMORY", "SOCIAL", "AUGUST", "CREATE", "SINGLE", "LATEST", "STATUS", "BROWSE",
            "SELLER", "ALWAYS", "RESULT", "GROUPS", "MAKING", "FUTURE", "LONDON", "BECOME",
            "GARDEN", "LISTED", "ENERGY", "IMAGES", "NOTICE", "OTHERS", "FORMAT", "MONTHS",
            "SAFETY", "HAVING", "COMMON", "LIVING", "CALLED", "PERIOD", "WINDOW", "FRANCE",
            "REGION", "ISLAND", "RECORD", "DIRECT"
        ];
        let answer;
        let OGAnswer;
        let html = [];
        let keyBtns;
        let letters;
        let langs;
        let displayKey;
        let winLose;
        let newGame;

        function getWord(){
            displayKey = document.querySelector(".displayKey");
            let number = Math.floor(Math.random() * words.length);
            answer = words[number];
            OGAnswer = words[number];
            for(let i = 1; i <= answer.length; i++){
                html.push('<div class="letter"></div>')
            }
            displayKey.innerHTML = html.join("");

            keyBtns = document.querySelectorAll(".key");
            letters = document.querySelectorAll(".letter");
            langs = document.querySelectorAll(".lang");
            winLose = document.querySelector(".winLose");
            newGame = document.querySelector(".newGame");
        }
        function removeLetters(word, letter){
            return word.split("").filter(char => char !== letter).join("");
        }
        let winCount = 0;
        let count = 0;
        let index;

        getWord();

        keyBtns.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                if (answer.includes(event.target.value)){
                    btn.style.backgroundColor = "#12ec12";
                    winLose.style.visibility = "hidden";
                    for (let i = 0; i < OGAnswer.length; i++){
                        if (OGAnswer[i] === event.target.value){
                            letters[i].textContent = event.target.value;
                            winCount++;
                        }
                    }
                    answer = removeLetters(answer, event.target.value);
                    if (winCount === OGAnswer.length){
                        winLose.style.backgroundColor = "#12ec12";
                        winLose.innerHTML = `<h2 style="margin: 5px;">You Win!</h2>
                                            <p style="margin: 5px;">Well Done!🎊</p>`;
                        winLose.style.visibility = "visible";
                        newGame.style.display = "block";
                    }
                }
                else{
                    btn.style.backgroundColor = "#FE0707";
                    winLose.style.backgroundColor = "#BD9DDD";
                    winLose.innerHTML = `<p>You have lost <strong>${langs[count].textContent}<strong></p>`;
                    winLose.style.visibility = "visible";
                    langs[count].classList.add("dead");
                    count++;
                    if (count === 8){
                        winLose.style.backgroundColor = "#FE0707";
                        winLose.innerHTML = `<h2 style="margin: 5px;">Game Over!</h2>
                                            <p style="margin: 5px;">You Lose! The Answer was: ${OGAnswer}. Better start learning Assembly😏</p>`;
                        winLose.style.visibility = "visible";
                        newGame.style.display = "block";
                    }
                }
            })
        });

        newGame.addEventListener('click', () => {
            winLose.style.visibility = "hidden";
            letters.forEach(letter => {
                letter.textContent = "";
            })
            langs.forEach(lang => {
                lang.classList.remove("dead");
            })
            keyBtns.forEach(btn => {
                btn.style.backgroundColor = "gold";
            })
            winCount = 0;
            count = 0;
            newGame.style.display = "none";
            html = [];
            getWord();
        });
