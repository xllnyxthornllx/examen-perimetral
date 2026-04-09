const questions = [
    {
        module: "Firewall Linux",
        question: "¿Cuál es la tabla por defecto en iptables para el filtrado de paquetes?",
        options: ["nat", "mangle", "filter", "raw"],
        answer: "filter"
    },
    {
        module: "Firewall Linux",
        question: "¿Qué cadena se utiliza para filtrar paquetes que tienen como destino el propio firewall?",
        options: ["FORWARD", "INPUT", "OUTPUT", "PREROUTING"],
        answer: "INPUT"
    },
    {
        module: "Firewall Linux",
        question: "¿Cuál es la principal diferencia entre los targets DROP y REJECT?",
        options: [
            "DROP elimina el paquete silenciosamente, REJECT envía un error ICMP al origen",
            "REJECT elimina el paquete silenciosamente, DROP envía un error ICMP",
            "Ambos son idénticos",
            "DROP solo funciona en la tabla NAT"
        ],
        answer: "DROP elimina el paquete silenciosamente, REJECT envía un error ICMP al origen"
    },
    {
        module: "Firewall Linux",
        question: "¿Qué tabla de iptables se utiliza para el Enmascaramiento de Red (Source NAT)?",
        options: [\"filter\", \"mangle\", \"nat\", \"security\"],
        answer: "nat"
    },
    {
        module: "Firewall Linux",
        question: "¿En qué cadena se debe configurar una regla de DNAT (Destination NAT)?",
        options: ["POSTROUTING", "INPUT", "PREROUTING", "OUTPUT"],
        answer: "PREROUTING"
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando se utiliza para listar las reglas de iptables mostrando los números de línea?",
        options: ["iptables -L", "iptables -S", "iptables -L --line-numbers", "iptables -nvL"],
        answer: "iptables -L --line-numbers"
    },
    {
        module: "Firewall Linux",
        question: "¿Qué parámetro de iptables se utiliza para filtrar paquetes por estado (ej. ESTABLISHED)?",
        options: ["-p tcp", "-m state --state", "-j ACCEPT", "-i eth0"],
        answer: "-m state --state"
    },
    {
        module: "Firewall Linux",
        question: "¿Cuál es la herramienta que está reemplazando a iptables en las distribuciones modernas de Linux?",
        options: ["ufw", "firewalld", "nftables", "ipchains"],
        answer: "nftables"
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando borra (flush) todas las reglas de la tabla seleccionada?",
        options: ["iptables -X", "iptables -F", "iptables -D", "iptables -Z"],
        answer: "iptables -F"
    },
    {
        module: "Firewall Linux",
        question: "¿Para qué se utiliza la tabla 'mangle'?",
        options: [
            "Para cambiar el destino de los paquetes",
            "Para modificar campos de la cabecera IP como TTL o TOS",
            "Para filtrar paquetes ICMP únicamente",
            "Para registrar logs en el sistema"
        ],
        answer: "Para modificar campos de la cabecera IP como TTL o TOS"
    },
    {
        module: "Firewall Linux",
        question: "¿Cuál es el comando correcto para permitir tráfico entrante al puerto 80 (HTTP)?",
        options: [
            "iptables -A INPUT -p tcp --dport 80 -j ACCEPT",
            "iptables -A OUTPUT -p tcp --sport 80 -j ACCEPT",
            "iptables -A FORWARD -p tcp --dport 80 -j DROP",
            "iptables -I INPUT -p udp --dport 80 -j ACCEPT"
        ],
        answer: "iptables -A INPUT -p tcp --dport 80 -j ACCEPT"
    },
    {
        module: "Firewall Linux",
        question: "¿Qué cadena se encarga de los paquetes que solo atraviesan el firewall (no van dirigidos a él)?",
        options: ["INPUT", "OUTPUT", "FORWARD", "PREROUTING"],
        answer: "FORWARD"
    },
    {
        module: "Firewall Linux",
        question: "¿Cómo se define la política por defecto de la cadena INPUT a DROP?",
        options: [
            "iptables -A INPUT -j DROP",
            "iptables -P INPUT DROP",
            "iptables -F INPUT DROP",
            "iptables -D INPUT DROP"
        ],
        answer: "iptables -P INPUT DROP"
    },
    {
        module: "Snort",
        question: "¿Cuáles son los tres modos principales de operación de Snort?",
        options: ["Sniffer, Logger, IDS/IPS", "Firewall, Proxy, Antivirus", "Active, Passive, Stealth", "Kernel, User, Network"],
        answer: "Sniffer, Logger, IDS/IPS"
    },
    {
        module: "Snort",
        question: "¿En qué archivo se configuran las variables de red HOME_NET y EXTERNAL_NET?",
        options: ["rules.conf", "snort.conf", "network.cfg", "snort.lua"],
        answer: "snort.conf"
    },
    {
        module: "Snort",
        question: "En una regla de Snort: 'alert tcp $EXTERNAL_NET any -> $HOME_NET 80', ¿qué parte es el Header?",
        options: [
            "Toda la regla",
            "La parte que define la acción, protocolo, IPs y puertos",
            "Solo el mensaje dentro de los paréntesis",
            "El número de SID al final"
        ],
        answer: "La parte que define la acción, protocolo, IPs y puertos"
    },
    {
        module: "Snort",
        question: "¿Qué opción de regla se utiliza para buscar un patrón de texto específico en el payload del paquete?",
        options: ["msg", "sid", "content", "rev"],
        answer: "content"
    },
    {
        module: "Snort",
        question: "¿Qué significa el parámetro SID en una regla de Snort?",
        options: ["Security Identifier", "Snort ID (Identificador único de la regla)", "Sequence ID", "Source ID"],
        answer: "Snort ID (Identificador único de la regla)"
    },
    {
        module: "Snort",
        question: "¿Cuál es el rango de SIDs recomendado para reglas locales o personalizadas?",
        options: ["1 - 100", "1,000,000 en adelante", "500 - 1000", "Cualquier número"],
        answer: "1,000,000 en adelante"
    },
    {
        module: "Snort",
        question: "¿Qué comando se usa para verificar si el archivo de configuración de Snort no tiene errores sintácticos?",
        options: ["snort -v", "snort -T -c /etc/snort/snort.conf", "snort -i eth0", "snort -D"],
        answer: "snort -T -c /etc/snort/snort.conf"
    },
    {
        module: "Snort",
        question: "¿Qué diferencia hay entre Snort funcionando como IDS y como IPS?",
        options: [
            "El IDS bloquea, el IPS solo alerta",
            "El IDS solo detecta/alerta, el IPS puede bloquear el tráfico (inline)",
            "No hay ninguna diferencia",
            "IPS solo funciona en Windows"
        ],
        answer: "El IDS solo detecta/alerta, el IPS puede bloquear el tráfico (inline)"
    },
    {
        module: "Snort",
        question: "¿Qué hace la opción 'rev' en una regla de Snort?",
        options: ["Reversa el tráfico", "Indica la versión o revisión de la regla", "Reinicia el servicio Snort", "Revisa la sintaxis de la regla"],
        answer: "Indica la versión o revisión de la regla"
    },
    {
        module: "Snort",
        question: "¿Qué significa la opción 'msg' en las opciones de una regla?",
        options: ["Define el protocolo", "Es el texto descriptivo que aparecerá en la alerta", "Es el nombre del autor de la regla", "Es el comando de respuesta"],
        answer: "Es el texto descriptivo que aparecerá en la alerta"
    },
    {
        module: "Snort",
        question: "¿Cómo se ejecuta Snort para que solo muestre las cabeceras de los paquetes por consola (Modo Sniffer)?",
        options: ["snort -IDS", "snort -v", "snort -dev", "snort -A fast"],
        answer: "snort -v"
    },
    {
        module: "Snort",
        question: "¿Qué componente de Snort se encarga de normalizar el tráfico antes de ser analizado por el motor de detección?",
        options: ["Output modules", "Detection Engine", "Preprocessors (Preprocesadores)", "Packet Decoder"],
        answer: "Preprocessors (Preprocesadores)"
    },
    {
        module: "Snort",
        question: "¿Qué preprocesador se utiliza para detectar ataques de fragmentación IP?",
        options: ["frag3", "sfportscan", "http_inspect", "tcpstream"],
        answer: "frag3"
    },
    {
        module: "Fortigate",
        question: "¿Qué es un VDOM en Fortigate?",
        options: [
            "Una VPN de alta velocidad",
            "Virtual Domain: divide un firewall físico en varios lógicos",
            "Un tipo de Antivirus de Fortinet",
            "Un protocolo de enrutamiento propietario"
        ],
        answer: "Virtual Domain: divide un firewall físico en varios lógicos"
    },
    {
        module: "Fortigate",
        question: "¿Cuál es el puerto por defecto para la administración vía HTTPS de un Fortigate?",
        options: ["80", "22", "443", "541"],
        answer: "443"
    },
    {
        module: "Fortigate",
        question: "En el modo de operación 'Transparent', ¿cómo se comporta el Fortigate?",
        options: ["Como un Router de Capa 3", "Como un Bridge de Capa 2 (sin routing)", "Como un servidor DNS", "Como un punto de acceso WiFi"],
        answer: "Como un Bridge de Capa 2 (sin routing)"
    },
    {
        module: "Fortigate",
        question: "¿Qué tipo de interfaz permite agrupar varios enlaces físicos para aumentar el ancho de banda y dar redundancia?",
        options: ["VLAN", "Loopback", "Aggregate (802.3ad LACP)", "Software Switch"],
        answer: "Aggregate (802.3ad LACP)"
    },
    {
        module: "Fortigate",
        question: "¿Dónde se configuran los servidores DNS que utilizará el propio Fortigate para sus consultas?",
        options: ["System > Settings", "Network > DNS", "Policy & Objects > DNS Filter", "Network > Interfaces"],
        answer: "Network > DNS"
    },
    {
        module: "Fortigate",
        question: "¿Qué comando de CLI muestra la tabla de enrutamiento completa?",
        options: ["show router static", "get router info routing-table all", "diag netlink route list", "get system status"],
        answer: "get router info routing-table all"
    },
    {
        module: "Fortigate",
        question: "¿Qué representa el valor 'Distance' (Distancia Administrativa) en una ruta estática?",
        options: ["La métrica del protocolo", "La confiabilidad o preferencia de la fuente de la ruta", "La velocidad del enlace", "El número de saltos al destino"],
        answer: "La confiabilidad o preferencia de la fuente de la ruta"
    },
    {
        module: "Fortigate",
        question: "¿Cuál es el usuario administrador por defecto en un Fortigate nuevo?",
        options: ["root", "fortinet", "admin", "supervisor"],
        answer: "admin"
    },
    {
        module: "Fortigate",
        question: "¿Para qué sirve el servicio FortiGuard?",
        options: [
            "Para gestionar el hardware",
            "Para recibir actualizaciones de firmas (IPS, AV, Web Filter, etc.)",
            "Para configurar la red local",
            "Para hacer backups automáticos en la nube"
        ],
        answer: "Para recibir actualizaciones de firmas (IPS, AV, Web Filter, etc.)"
    },
    {
        module: "Fortigate",
        question: "En una VPN SSL, ¿qué significa 'Split Tunneling'?",
        options: [
            "Todo el tráfico del cliente va por la VPN",
            "Solo el tráfico hacia las redes internas va por la VPN, el resto va por su internet local",
            "La conexión se divide en dos túneles para mayor velocidad",
            "No permite el acceso a internet mientras se está conectado"
        ],
        answer: "Solo el tráfico hacia las redes internas va por la VPN, el resto va por su internet local"
    },
    {
        module: "Fortigate",
        question: "¿Qué protocolo se utiliza para sincronizar la fecha y hora del sistema?",
        options: ["SNMP", "NTP", "FTP", "BGP"],
        answer: "NTP"
    },
    {
        module: "Fortigate",
        question: "¿Qué comando muestra información general del sistema, incluyendo versión de firmware y número de serie?",
        options: ["get system status", "get system interface", "show system settings", "get hardware status"],
        answer: "get system status"
    },
    {
        module: "Fortigate",
        question: "¿Cómo se llama el perfil que define qué puede hacer un usuario administrador (Lectura/Escritura)?",
        options: ["User Groups", "Admin Profiles", "Security Profiles", "Access Lists"],
        answer: "Admin Profiles"
    },
    {
        module: "Fortigate",
        question: "¿Qué es la 'Priority' en una ruta estática de Fortigate?",
        options: [
            "Un valor para desempatar rutas con la misma Distancia Administrativa",
            "El tiempo que la ruta está activa",
            "La prioridad del tráfico ICMP",
            "Un campo que no existe en Fortigate"
        ],
        answer: "Un valor para desempatar rutas con la misma Distancia Administrativa"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressText = document.getElementById('progress');
const progressFill = document.getElementById('progress-fill');
const moduleTag = document.getElementById('module-tag');
const nextBtn = document.getElementById('next-btn');
const finalScoreElement = document.getElementById('final-score');
const scoreTextElement = document.getElementById('score-text');
const statsTextElement = document.getElementById('stats-text');

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('restart-btn').addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = shuffledQuestions[currentQuestionIndex];
    questionText.innerText = question.question;
    moduleTag.innerText = question.module;
    progressText.innerText = `Pregunta ${currentQuestionIndex + 1} de ${shuffledQuestions.length}`;
    
    const progressPercent = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    const options = [...question.options].sort(() => Math.random() - 0.5);
    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(button, option, question.answer));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hidden');
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectOption(button, selected, correct) {
    const isCorrect = selected === correct;
    if (isCorrect) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
        // Mostrar la correcta
        Array.from(optionsContainer.children).forEach(btn => {
            if (btn.innerText === correct) {
                btn.classList.add('correct');
            }
        });
    }

    Array.from(optionsContainer.children).forEach(btn => {
        btn.classList.add('disabled');
        btn.disabled = true;
    });

    nextBtn.classList.remove('hidden');
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    const finalGrade = (score / shuffledQuestions.length) * 20;
    finalScoreElement.innerText = finalGrade.toFixed(2);
    statsTextElement.innerText = `Correctas: ${score} / ${shuffledQuestions.length}`;
    
    if (finalGrade >= 13) {
        scoreTextElement.innerText = "¡Felicidades! Has aprobado el examen.";
        scoreTextElement.style.color = "#238636";
    } else {
        scoreTextElement.innerText = "No has alcanzado la nota mínima (13). ¡Sigue estudiando!";
        scoreTextElement.style.color = "#da3633";
    }
}
