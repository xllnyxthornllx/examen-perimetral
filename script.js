const allQuestions = [
    // --- FIREWALL LINUX ---
    {
        module: "Firewall Linux",
        question: "¿Cuál es la tabla de iptables encargada del filtrado de paquetes por defecto?",
        options: ["nat", "filter", "mangle", "raw"],
        answer: "filter",
        explanation: "La tabla 'filter' es la tabla por defecto y se utiliza para decidir si un paquete debe ser permitido (ACCEPT) o denegado (DROP/REJECT)."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué cadena de iptables procesa los paquetes que entran al sistema desde la red?",
        options: ["FORWARD", "OUTPUT", "INPUT", "PREROUTING"],
        answer: "INPUT",
        explanation: "La cadena INPUT se activa cuando un paquete tiene como destino una aplicación o proceso que reside en el propio sistema local."
    },
    {
        module: "Firewall Linux",
        question: "¿Cuál es el comando para borrar todas las reglas de la tabla filter?",
        options: ["iptables -X", "iptables -F", "iptables -Z", "iptables -D"],
        answer: "iptables -F",
        explanation: "El parámetro -F (Flush) elimina todas las reglas de la tabla seleccionada, dejando las cadenas vacías."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué target de iptables descarta el paquete y envía un mensaje de error al origen?",
        options: ["DROP", "REJECT", "LOG", "DENY"],
        answer: "REJECT",
        explanation: "A diferencia de DROP (que ignora el paquete), REJECT envía un mensaje ICMP 'port-unreachable' para informar al emisor que la conexión fue rechazada."
    },
    {
        module: "Firewall Linux",
        question: "¿En qué cadena se debe realizar la configuración de DNAT (Destination NAT)?",
        options: ["POSTROUTING", "FORWARD", "PREROUTING", "INPUT"],
        answer: "PREROUTING",
        explanation: "El DNAT debe ocurrir en PREROUTING porque necesitamos cambiar la IP de destino antes de que el kernel tome la decisión de enrutamiento."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué tabla se utiliza para modificar campos específicos de la cabecera IP como el TTL?",
        options: ["filter", "nat", "mangle", "raw"],
        answer: "mangle",
        explanation: "La tabla 'mangle' está diseñada para la alteración de paquetes (Packet Alteration), permitiendo cambiar marcas de firewall, TTL, TOS, etc."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando permite ver las reglas de iptables con sus números de línea correspondientes?",
        options: ["iptables -L -v", "iptables -nL", "iptables -L --line-numbers", "iptables -S"],
        answer: "iptables -L --line-numbers",
        explanation: "Ver los números de línea es esencial para poder insertar (-I) o borrar (-D) reglas en posiciones específicas."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué opción se usa para especificar que una regla se aplique a una interfaz de entrada?",
        options: ["-o", "-i", "-s", "-d"],
        answer: "-i",
        explanation: "'-i' (Input Interface) se usa en cadenas como INPUT, FORWARD y PREROUTING. '-o' se usa para salida (Output Interface)."
    },
    {
        module: "Firewall Linux",
        question: "¿Cuál es la política por defecto más segura para la cadena INPUT en un firewall perimetral?",
        options: ["ACCEPT", "DROP", "LOG", "FORWARD"],
        answer: "DROP",
        explanation: "La política DROP (Denegar por defecto) sigue el principio de mínimo privilegio: solo se permite lo que está explitamente autorizado."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando guarda las reglas de iptables para que persistan tras un reinicio en Debian/Ubuntu?",
        options: ["iptables-save", "netfilter-persistent save", "service iptables save", "systemctl save iptables"],
        answer: "netfilter-persistent save",
        explanation: "En Debian y Ubuntu, el paquete 'iptables-persistent' usa el comando netfilter-persistent para guardar y cargar las reglas."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué módulo de iptables permite realizar inspección de estado (Stateful Inspection)?",
        options: ["-m tcp", "-m state", "-m limit", "-m multiport"],
        answer: "-m state",
        explanation: "El módulo 'state' permite filtrar paquetes basados en su relación con conexiones anteriores (NEW, ESTABLISHED, RELATED, INVALID)."
    },
    {
        module: "Firewall Linux",
        question: "¿Cómo se permite el tráfico de una conexión que ya ha sido establecida?",
        options: ["-m state --state NEW", "-m state --state ESTABLISHED", "-j ACCEPT ALL", "-p established"],
        answer: "-m state --state ESTABLISHED",
        explanation: "ESTABLISHED permite el paso de paquetes que pertenecen a una conexión que ya ha visto tráfico en ambas direcciones."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando se usa para borrar una regla específica de la cadena INPUT por su número?",
        options: ["iptables -F INPUT 1", "iptables -D INPUT 1", "iptables -R INPUT 1", "iptables -X INPUT 1"],
        answer: "iptables -D INPUT 1",
        explanation: "El parámetro -D (Delete) seguido del nombre de la cadena y el ID de la regla elimina esa línea específica."
    },
    {
        module: "Firewall Linux",
        question: "¿Cuál es el reemplazo moderno de iptables recomendado por la comunidad Linux?",
        options: ["firewalld", "ufw", "nftables", "ipfw"],
        answer: "nftables",
        explanation: "nftables reemplaza a iptables, ip6tables, arptables y ebtables con una sintaxis más limpia y un motor de ejecución mucho más eficiente."
    },
    {
        module: "Firewall Linux",
        question: "¿En qué tabla se almacenan las reglas que evitan que el sistema realice seguimiento de conexión (conntrack)?",
        options: ["filter", "nat", "mangle", "raw"],
        answer: "raw",
        explanation: "La tabla 'raw' se procesa antes que cualquier otra y sirve principalmente para marcar paquetes que NO deben ser rastreados por el sistema de seguimiento de conexiones."
    },

    // --- SNORT ---
    {
        module: "Snort",
        question: "¿Cuál es el modo de Snort que simplemente imprime las cabeceras de los paquetes en la pantalla?",
        options: ["IDS", "Packet Logger", "Sniffer", "Inline"],
        answer: "Sniffer",
        explanation: "En modo Sniffer (parámetro -v), Snort lee los paquetes de la red y los muestra en la consola en tiempo real."
    },
    {
        module: "Snort",
        question: "¿Qué parámetro se usa para indicar a Snort la ubicación del archivo de configuración?",
        options: ["-v", "-c", "-l", "-T"],
        explanation: "El parámetro -c (Config) especifica la ruta del archivo snort.conf que contiene las reglas y variables.",
        answer: "-c"
    },
    {
        module: "Snort",
        question: "¿Qué variable de Snort define la red interna que deseamos proteger?",
        options: ["$EXTERNAL_NET", "$HOME_NET", "$INTERNAL_NET", "$LOCAL_NET"],
        answer: "$HOME_NET",
        explanation: "$HOME_NET es la variable más importante para evitar falsos positivos y definir el alcance de la protección."
    },
    {
        module: "Snort",
        question: "¿Cuál es la estructura correcta de una regla de Snort?",
        options: ["Solo el Header", "Solo las Opciones", "Header + Opciones (entre paréntesis)", "Protocolo + IP + Mensaje"],
        answer: "Header + Opciones (entre paréntesis)",
        explanation: "El Header define la acción y red; las Opciones (dentro de paréntesis) definen el contenido específico a buscar."
    },
    {
        module: "Snort",
        question: "¿Qué acción de regla se usa para generar una alerta y además bloquear el tráfico en modo IPS?",
        options: ["alert", "log", "drop", "pass"],
        answer: "drop",
        explanation: "La acción 'drop' solo está disponible en modo IPS (Inline) y sirve para descartar el paquete sospechoso."
    },
    {
        module: "Snort",
        question: "¿Qué opción de regla busca una cadena de texto literal dentro del contenido del paquete?",
        options: ["msg", "content", "sid", "rev"],
        answer: "content",
        explanation: "La opción 'content' es el motor principal de búsqueda de firmas en Snort, permitiendo encontrar patrones maliciosos en el payload."
    },
    {
        module: "Snort",
        question: "¿Qué significa el parámetro SID en una regla de Snort?",
        options: ["Source ID", "Snort ID", "Security Index", "Signature ID"],
        answer: "Snort ID",
        explanation: "El SID es un identificador numérico único. Las reglas creadas por el usuario deben tener un SID mayor a 1,000,000."
    },
    {
        module: "Snort",
        question: "¿Qué comando verifica la sintaxis del archivo de configuración sin iniciar la detección?",
        options: ["snort -v", "snort -T", "snort -c", "snort -d"],
        answer: "snort -T",
        explanation: "El parámetro -T (Test) valida la configuración y las reglas para asegurar que no haya errores antes de entrar en producción."
    },
    {
        module: "Snort",
        question: "¿Qué componente de Snort se encarga de 'limpiar' y normalizar el tráfico antes del análisis?",
        options: ["Packet Decoder", "Preprocessors", "Detection Engine", "Output Modules"],
        answer: "Preprocessors",
        explanation: "Los preprocesadores preparan los paquetes (ej. desfragmentación IP, normalización HTTP) para que el motor de detección pueda analizarlos correctamente."
    },
    {
        module: "Snort",
        question: "¿Qué preprocesador se usa para detectar escaneos de puertos?",
        options: ["frag3", "sfportscan", "http_inspect", "stream5"],
        answer: "sfportscan",
        explanation: "sfportscan es el encargado de detectar actividades de barrido de puertos y escaneos sigilosos."
    },
    {
        module: "Snort",
        question: "¿Qué puerto utiliza por defecto una regla que especifica el protocolo 'any'?",
        options: ["80", "443", "Todos los puertos", "Ningún puerto"],
        answer: "Todos los puertos",
        explanation: "'any' es un comodín que le indica a Snort que no filtre por un puerto específico, analizando todo el tráfico del protocolo indicado."
    },
    {
        module: "Snort",
        question: "¿Cuál es la dirección del operador para tráfico bidireccional en una regla?",
        options: ["->", "<-", "<>", "=>"],
        answer: "<>",
        explanation: "El operador <> indica que la regla debe aplicarse sin importar cuál de las dos IPs es el origen o el destino."
    },
    {
        module: "Snort",
        question: "¿Qué hace la opción 'rev' en una regla?",
        options: ["Revierte la acción", "Indica el número de revisión de la regla", "Reinicia la alerta", "Revisa la red"],
        answer: "Indica el número de revisión de la regla",
        explanation: "'rev' se usa para llevar un control de versiones de una firma específica cuando se actualiza su lógica."
    },
    {
        module: "Snort",
        question: "¿Qué lenguaje se usa principalmente para escribir las reglas de Snort 3?",
        options: ["C++", "Lua", "Python", "JSON"],
        answer: "Lua",
        explanation: "Snort 3 ha migrado su configuración a Lua para ofrecer mayor flexibilidad y un mejor rendimiento."
    },
    {
        module: "Snort",
        question: "¿Qué parámetro se usa para habilitar el modo Inline (IPS) en Snort?",
        options: ["-v", "-Q", "-D", "-e"],
        answer: "-Q",
        explanation: "El parámetro -Q activa el modo de procesamiento en cola (DAQ), necesario para actuar como un IPS que puede descartar paquetes."
    },

    // --- FORTIGATE ---
    {
        module: "Fortigate",
        question: "¿Qué es un VDOM en un dispositivo Fortigate?",
        options: ["Una VPN de alta velocidad", "Un Dominio Virtual que divide un firewall físico en varios lógicos", "Un tipo de licencia", "Un protocolo de enrutamiento"],
        answer: "Un Dominio Virtual que divide un firewall físico en varios lógicos",
        explanation: "Los VDOM permiten segmentar un firewall físico para que actúe como múltiples unidades independientes, cada una con su propia configuración y tablas de enrutamiento."
    },
    {
        module: "Fortigate",
        question: "¿Cuál es el modo de operación por defecto de un Fortigate recién configurado?",
        options: ["Modo Transparente", "Modo NAT", "Modo Proxy", "Modo Bridge"],
        answer: "Modo NAT",
        explanation: "En Modo NAT, el Fortigate actúa como un Router de Capa 3, realizando enrutamiento y traducción de direcciones IP."
    },
    {
        module: "Fortigate",
        question: "¿Qué puerto HTTPS se usa por defecto para la administración GUI?",
        options: ["80", "443", "8443", "4443"],
        answer: "443",
        explanation: "Como la mayoría de dispositivos web seguros, Fortigate usa el puerto estándar 443, aunque se recomienda cambiarlo por seguridad."
    },
    {
        module: "Fortigate",
        question: "¿Qué tipo de interfaz se utiliza para conectar interfaces físicas y tratarlas como una sola para redundancia?",
        options: ["VLAN", "Software Switch", "Aggregate (802.3ad LACP)", "Loopback"],
        answer: "Aggregate (802.3ad LACP)",
        explanation: "Las interfaces agregadas (LACP) aumentan el ancho de banda y proporcionan alta disponibilidad al combinar varios cables en un solo enlace lógico."
    },
    {
        module: "Fortigate",
        question: "¿Qué valor de 'Distance' indica una ruta estática más preferida?",
        options: ["El valor más alto", "El valor más bajo", "Cualquier valor par", "Depende del puerto"],
        answer: "El valor más bajo",
        explanation: "En enrutamiento, la Distancia Administrativa menor siempre tiene prioridad. Una ruta con distancia 10 es preferida sobre una de 20."
    },
    {
        module: "Fortigate",
        question: "¿Qué parámetro de enrutamiento se usa como desempate cuando dos rutas tienen la misma Distancia?",
        options: ["Cost", "Priority", "Weight", "Hop count"],
        answer: "Priority",
        explanation: "En Fortigate, si dos rutas estáticas tienen la misma Distancia, se usará la Prioridad (el valor menor gana) para decidir cuál entra en la tabla de enrutamiento."
    },
    {
        module: "Fortigate",
        question: "¿Qué servicio proporciona actualizaciones automáticas de firmas para antivirus e IPS?",
        options: ["FortiCloud", "FortiGuard", "FortiAnalyzer", "FortiManager"],
        answer: "FortiGuard",
        explanation: "FortiGuard Labs es el servicio de suscripción que envía actualizaciones de seguridad en tiempo real a los dispositivos Fortinet."
    },
    {
        module: "Fortigate",
        question: "¿Cómo se llama la política que permite el tráfico de una red a otra?",
        options: ["Network Rule", "Firewall Policy", "Security Profile", "Route Map"],
        answer: "Firewall Policy",
        explanation: "Las 'Firewall Policies' son el corazón del equipo; definen el origen, destino, servicio y acción (Accept/Deny) para el tráfico."
    },
    {
        module: "Fortigate",
        question: "¿Qué modo de inspección de seguridad es más rápido pero menos profundo?",
        options: ["Proxy-based", "Flow-based", "Application-based", "Packet-based"],
        answer: "Flow-based",
        explanation: "El modo Flow-based analiza los paquetes 'al vuelo' sin reconstruir completamente el archivo, lo que ofrece mayor rendimiento."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'Split Tunneling' en una VPN SSL?",
        options: ["Cifra todo el tráfico", "Envía solo el tráfico corporativo por la VPN y el resto por el internet local", "Divide la conexión en dos proveedores", "No permite acceso a internet"],
        answer: "Envía solo el tráfico corporativo por la VPN y el resto por el internet local",
        explanation: "El Split Tunneling optimiza el ancho de banda de la empresa evitando que el tráfico personal del usuario (como YouTube) pase por el túnel VPN."
    },
    {
        module: "Fortigate",
        question: "¿Cuál es el comando de CLI para ver el estado general del sistema y el número de serie?",
        options: ["show full-configuration", "get system status", "diag sys info", "get system info"],
        answer: "get system status",
        explanation: "'get system status' es el comando básico para verificar versión de firmware, licencia, número de serie y tiempo de actividad."
    },
    {
        module: "Fortigate",
        question: "¿Qué protocolo se utiliza habitualmente para sincronizar la fecha y hora?",
        options: ["SNMP", "NTP", "BGP", "FTP"],
        answer: "NTP",
        explanation: "NTP (Network Time Protocol) es vital para que los logs y certificados digitales funcionen correctamente con marcas de tiempo precisas."
    },
    {
        module: "Fortigate",
        question: "¿Qué es un 'Soft Timeout' en una sesión de Fortigate?",
        options: ["Cuando el firewall se apaga", "Tiempo de espera antes de cerrar una sesión inactiva", "Un error de hardware", "Una actualización fallida"],
        answer: "Tiempo de espera antes de cerrar una sesión inactiva",
        explanation: "Los timeouts ayudan a limpiar la tabla de sesiones de conexiones que ya no están activas, liberando memoria RAM."
    },
    {
        module: "Fortigate",
        question: "¿Cuál es el usuario administrador por defecto?",
        options: ["root", "admin", "fortinet", "superadmin"],
        answer: "admin",
        explanation: "El usuario por defecto es 'admin' y originalmente no tiene contraseña. Se debe configurar una inmediatamente."
    },
    {
        module: "Fortigate",
        question: "¿Qué herramienta se usa para ver logs históricos de forma centralizada?",
        options: ["FortiGate GUI", "FortiAnalyzer", "FortiToken", "FortiClient"],
        answer: "FortiAnalyzer",
        explanation: "FortiAnalyzer es un dispositivo o VM dedicado a recibir, almacenar y analizar logs y reportes de múltiples Fortigates."
    },

    // --- MÁS PREGUNTAS PARA LLEGAR A 100+ ---
    {
        module: "Firewall Linux",
        question: "¿Cuál es la tabla que se consulta primero en el flujo de un paquete?",
        options: ["filter", "nat", "raw", "mangle"],
        answer: "raw",
        explanation: "En el orden de procesamiento de Netfilter, la tabla 'raw' es siempre la primera para permitir marcar paquetes que no deben ser rastreados."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando permite insertar una regla en la posición número 1 de la cadena INPUT?",
        options: ["iptables -A INPUT 1", "iptables -I INPUT 1", "iptables -N INPUT 1", "iptables -P INPUT 1"],
        answer: "iptables -I INPUT 1",
        explanation: "-I (Insert) coloca la regla en la posición indicada, desplazando las demás. -A (Append) siempre la coloca al final."
    },
    {
        module: "Snort",
        question: "¿En qué formato se guardan los logs binarios de Snort por defecto?",
        options: ["CSV", "pcap", "JSON", "XML"],
        answer: "pcap",
        explanation: "Snort usa el formato pcap (Libpcap) para que los logs puedan ser analizados posteriormente con herramientas como Wireshark."
    },
    {
        module: "Fortigate",
        question: "¿Qué protocolo usa el 'FortiGate Cloud' para comunicarse con el equipo?",
        options: ["SSH", "FortiGate Management Protocol (FGFM)", "HTTPS", "SNMP"],
        answer: "FortiGate Management Protocol (FGFM)",
        explanation: "FGFM es el protocolo propietario de Fortinet que usa el puerto TCP 541 para la gestión centralizada."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué cadena de la tabla NAT se usa para redireccionar un puerto de entrada (Port Forwarding)?",
        options: ["POSTROUTING", "OUTPUT", "PREROUTING", "FORWARD"],
        answer: "PREROUTING",
        explanation: "Como el destino final del paquete va a cambiar de la IP del firewall a una IP interna, el cambio debe hacerse antes del enrutamiento (PREROUTING)."
    },
    {
        module: "Snort",
        question: "¿Qué regla tiene mayor prioridad en el motor de detección por defecto?",
        options: ["alert", "drop", "pass", "log"],
        answer: "pass",
        explanation: "En Snort, las reglas 'pass' se evalúan primero. Si un tráfico coincide con una regla pass, se ignora el resto de reglas para ese paquete (optimización)."
    },
    {
        module: "Fortigate",
        question: "¿Cuál es el máximo de VDOMs que suele soportar un equipo de gama entrada?",
        options: ["1", "5", "10", "250"],
        answer: "10",
        explanation: "La mayoría de modelos Desktop soportan hasta 10 VDOMs (con licencia), permitiendo una segmentación básica para pequeñas empresas."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué hace el comando 'iptables -Z'?",
        options: ["Zipea las reglas", "Pone a cero los contadores de paquetes y bytes", "Cierra el firewall", "Elimina todas las tablas"],
        answer: "Pone a cero los contadores de paquetes y bytes",
        explanation: "'-Z' (Zero) reinicia las estadísticas de las reglas, útil para depurar cuánto tráfico está pasando en un momento específico."
    },
    {
        module: "Snort",
        question: "¿Qué significa la opción 'classtype' en una regla?",
        options: ["El tipo de red", "La categoría del ataque (ej. web-application-attack)", "El tipo de protocolo", "La clase de IP"],
        answer: "La categoría del ataque (ej. web-application-attack)",
        explanation: "Classtype ayuda a organizar las alertas por severidad y tipo de amenaza, facilitando la gestión del analista de seguridad."
    },
    {
        module: "Fortigate",
        question: "¿Qué interfaz virtual se usa para crear túneles IPsec?",
        options: ["Virtual Wire Pair", "Tunnel Interface", "Loopback", "VLAN"],
        answer: "Tunnel Interface",
        explanation: "Las interfaces de túnel permiten aplicar políticas de firewall y enrutamiento de la misma forma que una interfaz física."
    },
    {
        module: "Firewall Linux",
        question: "¿Cómo se llama el framework del kernel que gestiona el filtrado en Linux?",
        options: ["Iptables", "Netfilter", "Nftables", "Iproute2"],
        answer: "Netfilter",
        explanation: "Netfilter es el framework dentro del kernel; iptables y nftables son solo las herramientas de usuario para interactuar con él."
    },
    {
        module: "Snort",
        question: "¿Qué componente de Snort 3 permite cargar plugins de detección dinámicos?",
        options: ["LuaJIT", "Inspector", "DAQ", "Piglet"],
        answer: "Inspector",
        explanation: "Los 'Inspectors' reemplazan a los antiguos preprocesadores y permiten una arquitectura mucho más modular."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'FortiLink'?",
        options: ["Una VPN", "Un protocolo para gestionar FortiSwitches desde el FortiGate", "Un enlace a la nube", "Un cable especial"],
        answer: "Un protocolo para gestionar FortiSwitches desde el FortiGate",
        explanation: "FortiLink permite que el FortiGate actúe como controlador de los switches, simplificando la administración de la red local."
    },
    {
        module: "Firewall Linux",
        question: "¿Cuál es el target para redirigir tráfico a un puerto local del mismo host?",
        options: ["DNAT", "REDIRECT", "SNAT", "MASQUERADE"],
        answer: "REDIRECT",
        explanation: "REDIRECT es un caso especial de DNAT que cambia la IP de destino a la dirección del host local automáticamente."
    },
    {
        module: "Snort",
        question: "¿Cómo se definen comentarios en un archivo de reglas?",
        options: ["//", "/*", "#", "--"],
        answer: "#",
        explanation: "Al igual que en muchos lenguajes de scripting de Linux, el carácter '#' indica que el resto de la línea es un comentario."
    },
    {
        module: "Fortigate",
        question: "¿Qué hace la opción 'Preserve Source Port' en una IP Pool?",
        options: ["Cambia la IP", "Intenta mantener el mismo puerto de origen del cliente", "Bloquea el puerto", "Cifra el puerto"],
        answer: "Intenta mantener el mismo puerto de origen del cliente",
        explanation: "Esto es útil para aplicaciones que requieren que el puerto de origen no cambie para mantener la sesión activa."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando permite ver solo las reglas de la tabla NAT?",
        options: ["iptables -L", "iptables -t nat -L", "iptables -nL nat", "iptables show nat"],
        answer: "iptables -t nat -L",
        explanation: "El parámetro '-t' especifica la tabla. Si no se usa, iptables asume que quieres ver la tabla 'filter'."
    },
    {
        module: "Snort",
        question: "¿Cuál es el comando para ejecutar Snort y que lea un archivo pcap guardado?",
        options: ["snort -r archivo.pcap", "snort -read archivo.pcap", "snort -i archivo.pcap", "snort -f archivo.pcap"],
        answer: "snort -r archivo.pcap",
        explanation: "'-r' (Read) permite analizar tráfico capturado previamente para realizar forense o probar nuevas reglas."
    },
    {
        module: "Fortigate",
        question: "¿Qué es un 'HA Cluster'?",
        options: ["Un virus", "Alta Disponibilidad: dos o más equipos trabajando juntos", "Un grupo de usuarios", "Un tipo de disco duro"],
        answer: "Alta Disponibilidad: dos o más equipos trabajando juntos",
        explanation: "Los clusters HA aseguran que si un firewall falla, el otro tome el control en milisegundos sin pérdida de conexión."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué target permite ocultar una red privada tras la IP pública de la interfaz de salida?",
        options: ["DNAT", "SNAT", "MASQUERADE", "REDIRECT"],
        answer: "MASQUERADE",
        explanation: "MASQUERADE es ideal para IPs dinámicas, ya que automáticamente usa la IP actual de la interfaz de salida para el NAT."
    },
    {
        module: "Snort",
        question: "¿Qué significa el operador '!' antes de una variable IP?",
        options: ["Importante", "Cualquier IP excepto las de esa variable (Not)", "Solo esa IP", "Error"],
        answer: "Cualquier IP excepto las de esa variable (Not)",
        explanation: "El signo de exclamación es el operador lógico NOT, usado para excluir redes específicas de una regla."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'Flow Control'?",
        options: ["Controlar el agua", "Evitar la saturación del receptor en la transmisión de datos", "Un tipo de política", "Un comando de consola"],
        answer: "Evitar la saturación del receptor en la transmisión de datos",
        explanation: "El control de flujo asegura que un emisor rápido no abrume a un receptor lento, evitando la pérdida de paquetes."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué tabla de iptables se usa para reglas que no deben ser persistentes?",
        options: ["Ninguna, todas son volátiles hasta que se guardan", "filter", "nat", "raw"],
        answer: "Ninguna, todas son volátiles hasta que se guardan",
        explanation: "Cualquier cambio hecho con el comando 'iptables' se pierde al reiniciar a menos que se use una herramienta de persistencia."
    },
    {
        module: "Snort",
        question: "¿Qué opción de regla limita la cantidad de alertas generadas en un tiempo dado?",
        options: ["threshold", "limit", "count", "time"],
        answer: "threshold",
        explanation: "Threshold (o 'event_filter' en versiones modernas) evita que el sistema se inunde de alertas repetitivas por un mismo evento."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'Implicit Deny'?",
        options: ["Una regla oculta al final que bloquea todo lo no permitido", "Un error de configuración", "Un modo de VPN", "Un usuario"],
        answer: "Una regla oculta al final que bloquea todo lo no permitido",
        explanation: "Es la regla de oro: si el tráfico no coincide con ninguna política creada, se bloquea automáticamente por seguridad."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando lista las interfaces del sistema?",
        options: ["ip link show", "iptables -i", "netstat -r", "route -n"],
        answer: "ip link show",
        explanation: "El comando 'ip' de la suite iproute2 es el estándar moderno para gestionar interfaces y enrutamiento en Linux."
    },
    {
        module: "Snort",
        question: "¿Cuál es el puerto por defecto de una alerta de tipo 'backdoor'?",
        options: ["Varía según la regla", "80", "443", "21"],
        answer: "Varía según la regla",
        explanation: "Las alertas de Snort dependen totalmente de los puertos definidos en el Header de la regla específica."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'Conserve Mode'?",
        options: ["Modo ahorro de energía", "Estado donde el equipo limita funciones por falta de memoria RAM", "Modo protección de discos", "Modo espera"],
        answer: "Estado donde el equipo limita funciones por falta de memoria RAM",
        explanation: "Cuando la RAM supera el 80-90%, el Fortigate entra en Conserve Mode para evitar un colapso total, sacrificando inspección de seguridad."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué significa el estado INVALID en conntrack?",
        options: ["IP no válida", "Paquete que no pertenece a ninguna conexión conocida", "Error de DNS", "Paquete mal formado"],
        answer: "Paquete que no pertenece a ninguna conexión conocida",
        explanation: "INVALID identifica paquetes que no siguen la secuencia lógica de una conexión (ej. un ACK sin un SYN previo)."
    },
    {
        module: "Snort",
        question: "¿Qué lenguaje se usa para definir las variables en snort.conf?",
        options: ["Sintaxis propia de Snort", "Lua", "XML", "Python"],
        answer: "Sintaxis propia de Snort",
        explanation: "Snort 2 usa una sintaxis simple basada en palabras clave como 'var' e 'include'."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'Deep Inspection'?",
        options: ["Mirar debajo del equipo", "Desencriptar SSL/TLS para inspeccionar el tráfico cifrado", "Escanear discos duros", "Analizar cables"],
        answer: "Desencriptar SSL/TLS para inspeccionar el tráfico cifrado",
        explanation: "Sin Deep Inspection, el firewall no puede ver el contenido de sitios HTTPS, limitando mucho su efectividad contra malware."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué tabla de nftables equivale a la tabla filter de iptables?",
        options: ["No existen tablas fijas en nftables", "filter", "ip filter", "inet filter"],
        answer: "No existen tablas fijas en nftables",
        explanation: "En nftables, el usuario crea sus propias tablas y cadenas con los nombres que prefiera; no hay tablas predefinidas."
    },
    {
        module: "Snort",
        question: "¿Qué hace la opción 'nocase' en una regla?",
        options: ["Ignora el paquete", "Busca el contenido sin distinguir entre mayúsculas y minúsculas", "No genera alerta", "Solo busca minúsculas"],
        answer: "Busca el contenido sin distinguir entre mayúsculas y minúsculas",
        explanation: "'nocase' amplía la detección para encontrar patrones sin importar cómo estén escritos (ej. 'ADMIN' o 'admin')."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'SD-WAN'?",
        options: ["Una red wifi", "Gestión inteligente de múltiples enlaces de internet para optimizar el tráfico", "Un tipo de cable", "Un switch"],
        answer: "Gestión inteligente de múltiples enlaces de internet para optimizar el tráfico",
        explanation: "SD-WAN permite usar varios proveedores de internet simultáneamente, enviando el tráfico crítico por el enlace más estable."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando permite ver la tabla de enrutamiento en Linux?",
        options: ["ip route show", "iptables -R", "ls route", "netstat -nat"],
        answer: "ip route show",
        explanation: "'ip route' muestra las rutas activas, permitiendo saber por qué interfaz saldrá un paquete hacia un destino."
    },
    {
        module: "Snort",
        question: "¿Cuál es el SID mínimo para las reglas oficiales de la comunidad?",
        options: ["1", "100", "1,000,000", "10,000"],
        answer: "1",
        explanation: "Las reglas oficiales de Snort VRT y de la comunidad usan rangos bajos; los rangos altos se reservan para reglas personalizadas."
    },
    {
        module: "Fortigate",
        question: "¿Qué es un 'Virtual Wire Pair'?",
        options: ["Dos cables pegados", "Un par de interfaces que actúan como un cable directo sin IP", "Una VPN", "Un puerto de consola"],
        answer: "Un par de interfaces que actúan como un cable directo sin IP",
        explanation: "Permite insertar el Fortigate en una red existente sin cambiar el direccionamiento IP de los otros equipos."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué parámetro de iptables se usa para especificar un protocolo?",
        options: ["-p", "-pr", "-prot", "--protocol"],
        answer: "-p",
        explanation: "'-p' permite filtrar por protocolos comunes como tcp, udp, icmp o números de protocolo IANA."
    },
    {
        module: "Snort",
        question: "¿Qué opción de regla permite buscar una cadena en una posición específica del payload?",
        options: ["msg", "offset", "sid", "content"],
        answer: "offset",
        explanation: "Offset le indica a Snort cuántos bytes debe saltar desde el inicio del payload antes de empezar a buscar el patrón."
    },
    {
        module: "Fortigate",
        question: "¿Qué hace el 'Anti-replay' en una VPN?",
        options: ["Graba el tráfico", "Evita que un atacante capture un paquete y lo vuelva a enviar para ganar acceso", "Borra el tráfico", "Repite el tráfico"],
        answer: "Evita que un atacante capture un paquete y lo vuelva a enviar para ganar acceso",
        explanation: "Anti-replay usa números de secuencia para asegurar que cada paquete sea único y procesado solo una vez."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando crea una nueva cadena personalizada en iptables?",
        options: ["iptables -C CADENA", "iptables -N CADENA", "iptables -New CADENA", "iptables -A CADENA"],
        answer: "iptables -N CADENA",
        explanation: "'-N' (New) permite crear cadenas personalizadas para organizar mejor las reglas complejas."
    },
    {
        module: "Snort",
        question: "¿Qué significa 'flow:established' en una regla?",
        options: ["Tráfico que fluye", "Solo paquetes que pertenecen a una sesión TCP ya establecida", "Error de flujo", "Cualquier paquete"],
        answer: "Solo paquetes que pertenecen a una sesión TCP ya establecida",
        explanation: "Es una optimización crucial: evita que Snort analice paquetes SYN iniciales con reglas que solo tienen sentido en sesiones activas."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'DLP'?",
        options: ["Data Loss Prevention: evita la fuga de información sensible", "Un protocolo de capas", "Un tipo de disco", "Un usuario"],
        answer: "Data Loss Prevention: evita la fuga de información sensible",
        explanation: "DLP busca patrones como números de tarjetas de crédito o palabras 'Confidencial' para bloquear su salida de la empresa."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué target se usa para registrar información sobre un paquete en el log del sistema?",
        options: ["RECORD", "LOG", "INFO", "WRITE"],
        answer: "LOG",
        explanation: "El target LOG no acepta ni rechaza el paquete, solo escribe sus detalles en dmesg/syslog y continúa con la siguiente regla."
    },
    {
        module: "Snort",
        question: "¿Cómo se indica una IP de destino en una regla?",
        options: ["Después de la flecha ->", "Antes de la flecha ->", "Al final de la regla", "No se indica"],
        answer: "Después de la flecha ->",
        explanation: "La estructura del Header es: Acción Prot Origen Puerto -> Destino Puerto."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'Ztna'?",
        options: ["Un país", "Zero Trust Network Access: acceso basado en identidad y confianza cero", "Una zona de red", "Un comando"],
        answer: "Zero Trust Network Access: acceso basado en identidad y confianza cero",
        explanation: "ZTNA verifica la identidad del usuario y el estado del dispositivo antes de cada acceso, sin importar si está dentro o fuera de la red."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué parámetro de iptables permite especificar el puerto de origen?",
        options: ["--dport", "--sport", "-p", "-i"],
        answer: "--sport",
        explanation: "'--sport' (Source Port) filtra basándose en el puerto desde el que se envió el paquete."
    },
    {
        module: "Snort",
        question: "¿Qué hace la opción 'distance'?",
        options: ["Mide la red", "Especifica cuántos bytes buscar después de un match anterior", "Aleja la alerta", "No existe"],
        answer: "Especifica cuántos bytes buscar después de un match anterior",
        explanation: "Se usa junto con 'content' para buscar patrones que deben ocurrir en una secuencia relativa específica."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'Web Filtering'?",
        options: ["Limpiar la web", "Bloquear el acceso a sitios web por categorías (ej. Juegos, Adultos)", "Un tipo de navegador", "Un antivirus"],
        answer: "Bloquear el acceso a sitios web por categorías (ej. Juegos, Adultos)",
        explanation: "Permite a las empresas controlar la navegación de los empleados para mejorar la productividad y seguridad."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué target termina el procesamiento de una cadena personalizada y vuelve a la cadena anterior?",
        options: ["RETURN", "BACK", "STOP", "END"],
        answer: "RETURN",
        explanation: "RETURN hace que el paquete regrese a la cadena que hizo el salto (jump), continuando con la siguiente regla allí."
    },
    {
        module: "Snort",
        question: "¿Qué protocolo analiza Snort si se usa 'icmp'?",
        options: ["Web", "Mensajes de control y ping", "Correo", "Archivos"],
        answer: "Mensajes de control y ping",
        explanation: "ICMP es el protocolo usado por herramientas como ping y traceroute para diagnóstico de red."
    },
    {
        module: "Fortigate",
        question: "¿Qué es un 'Static Route'?",
        options: ["Una ruta que no se mueve", "Configuración manual de cómo llegar a una red remota", "Un cable directo", "Una VPN"],
        answer: "Configuración manual de cómo llegar a una red remota",
        explanation: "A diferencia de los protocolos dinámicos (OSPF, BGP), las rutas estáticas las define el administrador y no cambian automáticamente."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando muestra la versión de iptables instalada?",
        options: ["iptables -v", "iptables --version", "iptables -V", "iptables -ver"],
        answer: "iptables --version",
        explanation: "Es útil para saber qué características y extensiones están soportadas por la versión actual."
    },
    {
        module: "Snort",
        question: "¿Qué significa 'depth' en una regla?",
        options: ["Profundidad de la red", "Cuántos bytes buscar desde el punto de inicio", "Severidad del ataque", "No existe"],
        answer: "Cuántos bytes buscar desde el punto de inicio",
        explanation: "Limita la búsqueda a un rango específico de bytes, mejorando el rendimiento del motor."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'Application Control'?",
        options: ["Controlar el ratón", "Identificar y bloquear aplicaciones (ej. Facebook, Torrent) sin importar el puerto", "Un instalador", "Un antivirus"],
        answer: "Identificar y bloquear aplicaciones (ej. Facebook, Torrent) sin importar el puerto",
        explanation: "Usa firmas de Capa 7 para detectar aplicaciones que intentan saltarse el firewall usando puertos estándar como el 80 o 443."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué significa el target ACCEPT?",
        options: ["El paquete se guarda", "El paquete puede pasar el firewall", "El paquete se borra", "El paquete se cifra"],
        answer: "El paquete puede pasar el firewall",
        explanation: "ACCEPT detiene el procesamiento en la tabla actual y permite que el paquete siga su camino."
    },
    {
        module: "Snort",
        question: "¿Cómo se definen múltiples puertos en una regla?",
        options: ["Poniéndolos seguidos", "Entre corchetes [80,443]", "Con comas", "No se puede"],
        answer: "Entre corchetes [80,443]",
        explanation: "Los corchetes permiten definir listas o rangos de puertos en una sola firma."
    },
    {
        module: "Fortigate",
        question: "¿Qué es un 'Policy Route'?",
        options: ["Una ruta basada en una política específica (ej. por IP de origen)", "Una ruta por defecto", "Un mapa", "Un usuario"],
        answer: "Una ruta basada en una política específica (ej. por IP de origen)",
        explanation: "Las rutas de política tienen prioridad sobre la tabla de enrutamiento estándar, permitiendo decisiones de tráfico más granulares."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando muestra las reglas en formato de comandos ejecutables?",
        options: ["iptables -L", "iptables -S", "iptables -nL", "iptables -v"],
        answer: "iptables -S",
        explanation: "'-S' (List rules) muestra las reglas tal cual se escribirían para crearlas, lo que facilita copiarlas o hacer scripts."
    },
    {
        module: "Snort",
        question: "¿Qué hace la opción 'itype'?",
        options: ["Tipo de IP", "Filtra por el campo 'Type' de un paquete ICMP", "Identifica el tipo de red", "No existe"],
        answer: "Filtra por el campo 'Type' de un paquete ICMP",
        explanation: "Permite detectar tipos específicos de ICMP como 'Echo Request' (tipo 8) o 'Destination Unreachable' (tipo 3)."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'IPS' en un Fortigate?",
        options: ["Una IP", "Intrusion Prevention System: sistema que detecta y bloquea ataques conocidos", "Un servicio de internet", "Un cable"],
        answer: "Intrusion Prevention System: sistema que detecta y bloquea ataques conocidos",
        explanation: "El IPS analiza el tráfico en tiempo real contra miles de firmas de vulnerabilidades y exploits para detener ataques antes de que tengan éxito."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué significa el estado RELATED?",
        options: ["Paquetes amigos", "Paquetes que inician una nueva conexión asociada a una ya existente (ej. FTP-Data)", "Paquetes de la misma IP", "No existe"],
        answer: "Paquetes que inician una nueva conexión asociada a una ya existente (ej. FTP-Data)",
        explanation: "Es fundamental para protocolos que usan múltiples puertos dinámicos para funcionar."
    },
    {
        module: "Snort",
        question: "¿Qué significa 'any' en el campo de IP de origen?",
        options: ["Cualquier IP", "Ninguna IP", "IP de Snort", "IP del atacante"],
        answer: "Cualquier IP",
        explanation: "Es el comodín universal que permite que la regla analice tráfico proveniente de cualquier dirección de red."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'Geoblocking'?",
        options: ["Bloquear la tierra", "Bloquear o permitir tráfico basándose en el país de origen/destino", "Un GPS", "Un mapa"],
        answer: "Bloquear o permitir tráfico basándose en el país de origen/destino",
        explanation: "Usa una base de datos de IPs por país para prevenir ataques desde regiones geográficas donde la empresa no tiene actividad."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué target envía el paquete a una cadena definida por el usuario?",
        options: ["GOTO", "JUMP (-j)", "CALL", "SEND"],
        answer: "JUMP (-j)",
        explanation: "'-j' (Jump) salta el paquete a otra cadena para un procesamiento más detallado."
    },
    {
        module: "Snort",
        question: "¿Qué hace la opción 'content:\"|00 01 86 a5|\"'?",
        options: ["Busca texto", "Busca el valor hexadecimal especificado en el payload", "Busca una IP", "No hace nada"],
        answer: "Busca el valor hexadecimal especificado en el payload",
        explanation: "Las barras verticales '|' encierran código hexadecimal, permitiendo buscar patrones no legibles como texto ASCII."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'Antivirus' en un Fortigate?",
        options: ["Un programa para PC", "Inspección de archivos en tránsito para detectar malware", "Una vacuna", "Un comando"],
        answer: "Inspección de archivos en tránsito para detectar malware",
        explanation: "Escanea protocolos como HTTP, FTP y SMTP para bloquear la descarga de virus antes de que lleguen al dispositivo del usuario."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando muestra las estadísticas de los paquetes que han coincidido con cada regla?",
        options: ["iptables -L -n", "iptables -L -v", "iptables -S", "iptables -stats"],
        answer: "iptables -L -v",
        explanation: "'-v' (Verbose) añade columnas de contadores para ver cuántos paquetes y bytes ha procesado cada regla."
    },
    {
        module: "Snort",
        question: "¿Qué significa 'uricontent' (en Snort 2)?",
        options: ["Contenido de la red", "Busca el patrón específicamente en la parte URI de una petición HTTP", "Contenido único", "No existe"],
        answer: "Busca el patrón específicamente en la parte URI de una petición HTTP",
        explanation: "Es más eficiente que 'content' porque el motor sabe que solo debe mirar una parte pequeña del paquete (la URL)."
    },
    {
        module: "Fortigate",
        question: "¿Qué es la 'Inspección SSL'?",
        options: ["Mirar certificados", "Poder ver y analizar el tráfico cifrado HTTPS", "Un tipo de cable", "Un antivirus"],
        answer: "Poder ver y analizar el tráfico cifrado HTTPS",
        explanation: "Sin ella, el firewall es ciego ante cualquier amenaza que viaje por canales cifrados (que hoy es casi todo el internet)."
    },
    {
        module: "Firewall Linux",
        question: "¿Cómo se borra la cadena personalizada llamada 'MI_CADENA'?",
        options: ["iptables -D MI_CADENA", "iptables -X MI_CADENA", "iptables -F MI_CADENA", "iptables -R MI_CADENA"],
        answer: "iptables -X MI_CADENA",
        explanation: "'-X' (Delete Chain) elimina cadenas definidas por el usuario, siempre que estén vacías y no tengan referencias."
    },
    {
        module: "Snort",
        question: "¿Qué hace la opción 'pcre'?",
        options: ["Busca texto", "Permite usar Expresiones Regulares de tipo Perl para búsquedas complejas", "No hace nada", "Un tipo de IP"],
        answer: "Permite usar Expresiones Regulares de tipo Perl para búsquedas complejas",
        explanation: "Es la herramienta más potente de Snort para encontrar patrones variables o complejos que el 'content' simple no puede capturar."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'Log Forwarding'?",
        options: ["Mover logs", "Enviar los registros del equipo a un servidor externo (ej. Syslog, FortiAnalyzer)", "Borrar logs", "Un comando"],
        answer: "Enviar los registros del equipo a un servidor externo (ej. Syslog, FortiAnalyzer)",
        explanation: "Es vital para cumplir normativas y para que los logs no se pierdan si el equipo falla o se llena su disco interno."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué parámetro de iptables permite filtrar por dirección MAC de origen?",
        options: ["-m mac --mac-source", "-s mac", "--source-mac", "-i mac"],
        answer: "-m mac --mac-source",
        explanation: "Permite crear reglas basadas en la identidad física del dispositivo de red, lo cual es más difícil de falsificar que una IP."
    },
    {
        module: "Snort",
        question: "¿Qué significa 'flow:to_server'?",
        options: ["Tráfico hacia el servidor", "Aplica la regla solo a paquetes enviados desde el cliente hacia el servidor", "Tráfico de internet", "No existe"],
        answer: "Aplica la regla solo a paquetes enviados desde el cliente hacia el servidor",
        explanation: "Ayuda a diferenciar ataques dirigidos a un servidor de las respuestas que el servidor envía al cliente."
    },
    {
        module: "Fortigate",
        question: "¿Qué es el 'Diagnostics' en la CLI?",
        options: ["Un médico", "Comandos 'diag' para depurar problemas de red, hardware o sesiones", "Un reporte", "Un manual"],
        answer: "Comandos 'diag' para depurar problemas de red, hardware o sesiones",
        explanation: "Los comandos 'diagnose' son avanzados y permiten ver en tiempo real qué está pasando 'bajo el capó' del equipo."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando cambia la política por defecto de la cadena FORWARD a DROP?",
        options: ["iptables -P FORWARD DROP", "iptables -A FORWARD -j DROP", "iptables -F FORWARD DROP", "iptables -D FORWARD DROP"],
        answer: "iptables -P FORWARD DROP",
        explanation: "'-P' (Policy) establece el comportamiento por defecto de las cadenas integradas (INPUT, OUTPUT, FORWARD)."
    },
    {
        module: "Snort",
        question: "¿Qué preprocesador ayuda a combatir ataques de fragmentación IP en Snort 2?",
        options: ["frag3", "sfportscan", "http_inspect", "tcpstream"],
        answer: "frag3",
        explanation: "Frag3 realiza la reensamblaje de fragmentos IP para evitar ataques que intentan evadir el IDS fragmentando el payload malicioso."
    },
    {
        module: "Fortigate",
        question: "¿Qué es un 'Virtual Domain' (VDOM)?",
        options: ["Un sitio web", "Una instancia lógica independiente dentro de un FortiGate físico", "Un tipo de VPN", "Un usuario virtual"],
        answer: "Una instancia lógica independiente dentro de un FortiGate físico",
        explanation: "Permite segmentar la administración y el tráfico como si tuvieras múltiples firewall físicos."
    },
    {
        module: "Firewall Linux",
        question: "¿En qué directorio se encuentran los scripts de red en sistemas basados en RHEL/CentOS 7?",
        options: ["/etc/network/", "/etc/sysconfig/network-scripts/", "/etc/net/", "/var/network/"],
        answer: "/etc/sysconfig/network-scripts/",
        explanation: "Es la ubicación tradicional para las configuraciones de interfaz 'ifcfg-ethX' en la familia Red Hat."
    },
    {
        module: "Snort",
        question: "¿Qué archivo contiene las definiciones de reglas predeterminadas?",
        options: ["snort.conf", "rules.conf", "local.rules", "snort.rules"],
        answer: "snort.conf",
        explanation: "snort.conf es el archivo maestro que utiliza sentencias 'include' para cargar los diversos archivos de reglas (.rules)."
    },
    {
        module: "Fortigate",
        question: "¿Cuál es el puerto por defecto para el protocolo FGFM (FortiGate Management)?",
        options: ["443", "541", "80", "22"],
        answer: "541",
        explanation: "El puerto TCP 541 es el estándar para la comunicación entre un FortiGate y FortiManager o FortiGate Cloud."
    },
    {
        module: "Firewall Linux",
        question: "¿Qué comando de iptables permite listar las reglas de una cadena específica?",
        options: ["iptables -L INPUT", "iptables -S INPUT", "Ambas son correctas", "Ninguna"],
        answer: "Ambas son correctas",
        explanation: "Tanto -L (List) como -S (Print) aceptan el nombre de una cadena como argumento para filtrar la salida."
    },
    {
        module: "Snort",
        question: "¿Qué significa la opción 'msg' en una regla?",
        options: ["Mensaje de error", "El texto que aparecerá en la alerta cuando la regla coincida", "Nombre del autor", "No existe"],
        answer: "El texto que aparecerá en la alerta cuando la regla coincida",
        explanation: "Proporciona una descripción legible para que el administrador sepa qué tipo de actividad se detectó."
    },
    {
        module: "Fortigate",
        question: "¿Qué modo de operación permite al FortiGate ser invisible en la red (L2)?",
        options: ["Modo NAT", "Modo Transparente", "Modo Bridge", "Modo Proxy"],
        answer: "Modo Transparente",
        explanation: "En este modo, el equipo no realiza enrutamiento y funciona como un puente de Capa 2, facilitando su inserción en redes ya existentes."
    }
];

let sessionQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const nextBtn = document.getElementById('next-btn');

    if (startBtn) startBtn.addEventListener('click', startQuiz);
    if (restartBtn) restartBtn.addEventListener('click', startQuiz);
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < sessionQuestions.length) {
                showQuestion();
            } else {
                showResults();
            }
        });
    }
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    // Seleccionar 40 preguntas al azar del banco de 100+
    sessionQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 40);
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = sessionQuestions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const moduleTag = document.getElementById('module-tag');
    const progressText = document.getElementById('progress');
    const progressFill = document.getElementById('progress-fill');
    const scoreLive = document.getElementById('score-live');

    questionText.innerText = question.question;
    moduleTag.innerText = question.module;
    progressText.innerText = `Pregunta ${currentQuestionIndex + 1} de ${sessionQuestions.length}`;
    
    const progressPercent = (currentQuestionIndex / sessionQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    // Actualizar nota en tiempo real (escala 20)
    const currentGrade = (score / sessionQuestions.length) * 20;
    scoreLive.innerText = `Nota: ${currentGrade.toFixed(2)}`;

    const optionsContainer = document.getElementById('options-container');
    const options = [...question.options].sort(() => Math.random() - 0.5);
    
    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(button, option, question.answer, question.explanation));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('explanation-box').classList.add('hidden');
    const optionsContainer = document.getElementById('options-container');
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectOption(button, selected, correct, explanation) {
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const explanationBox = document.getElementById('explanation-box');
    const explanationText = document.getElementById('explanation-text');
    
    const isCorrect = selected === correct;
    
    if (isCorrect) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
        // Mostrar cuál era la correcta
        Array.from(optionsContainer.children).forEach(btn => {
            if (btn.innerText === correct) {
                btn.classList.add('correct');
            }
        });
    }

    // Bloquear otros botones
    Array.from(optionsContainer.children).forEach(btn => {
        btn.classList.add('disabled');
        btn.disabled = true;
    });

    // Mostrar explicación técnica
    explanationText.innerText = explanation;
    explanationBox.classList.remove('hidden');
    
    // Mostrar botón siguiente
    nextBtn.classList.remove('hidden');
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    const finalScoreElement = document.getElementById('final-score');
    const scoreTextElement = document.getElementById('score-text');
    const statsTextElement = document.getElementById('stats-text');
    const rankTextElement = document.getElementById('rank-text');

    const finalGrade = (score / sessionQuestions.length) * 20;
    finalScoreElement.innerText = finalGrade.toFixed(2);
    statsTextElement.innerText = `Correctas: ${score} / ${sessionQuestions.length}`;
    
    // Sistema de rangos basado en la nota
    let rank = "";
    if (finalGrade >= 19) rank = "🏆 Arquitecto de Ciberseguridad";
    else if (finalGrade >= 17) rank = "🥇 Especialista Senior";
    else if (finalGrade >= 14) rank = "🥈 Administrador de Redes";
    else if (finalGrade >= 11) rank = "🥉 Técnico de Seguridad";
    else rank = "📚 Estudiante Novato";
    
    rankTextElement.innerText = `Rango: ${rank}`;
    
    if (finalGrade >= 13) {
        scoreTextElement.innerText = "¡Aprobado! Estás listo para el examen real.";
        scoreTextElement.style.color = "#238636";
    } else {
        scoreTextElement.innerText = "Desaprobado. Usa las explicaciones para reforzar tus puntos débiles.";
        scoreTextElement.style.color = "#da3633";
    }
}
