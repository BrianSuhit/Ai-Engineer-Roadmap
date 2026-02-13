// --- DICCIONARIO DE CONTENIDO ---
// Aquí guardamos la info de cada subnodo para no ensuciar el HTML.
// La Clave (Key) debe coincidir con lo que pongas en el onclick.
const contentDatabase = {
    // NODO 1
    "what-is-ai-engineer": {
        title: "what is an Ai Engineer?",
        body: "<p>Un AI Engineer utiliza modelos preentrenados (foundation models) y herramientas de IA existentes para mejorar experiencias de usuario y resolver problemas prácticos. A diferencia de los investigadores, su foco no es construir modelos desde cero, sino aplicar la IA mediante técnicas como prompt engineering, construcción de contexto y evaluación de sistemas para integrar estas capacidades en aplicaciones reales.</p>"
    },
    "roles-responsibilities": {
        title: "Roles and Responsibilities",
        body: "<p>Sus responsabilidades principales se alejan del entrenamiento tradicional de modelos y se centran en la adaptación y aplicación. Esto incluye el desarrollo de la aplicación (diseño de interfaces de IA, prompt engineering), la construcción de contexto (como sistemas RAG), la evaluación rigurosa de los resultados del modelo y la optimización de la inferencia para reducir latencia y costos. También gestionan la ingeniería de datasets para adaptar modelos a tareas específicas.</p>"
    },
    "impact-product-dev": {
        title: "Impact on Product Development",
        body: "<p>Los modelos fundacionales reducen drásticamente la barrera de entrada para construir aplicaciones de IA, permitiendo iteraciones rápidas. Esto habilita un nuevo flujo de trabajo: en lugar de empezar recopilando datos y entrenando un modelo (costoso y lento), se puede construir el producto primero usando modelos existentes y, si tiene éxito, invertir luego en datos propios y optimización. Esto acelera significativamente el tiempo de lanzamiento al mercado.</p>"
    },
    "ai-vs-ml-engineer": {
        title: "AI Engineer vs ML Engineer",
        body: "<p>La diferencia clave radica en el enfoque: el ML Engineer tradicional se centra en seleccionar arquitecturas, recolectar datos y entrenar modelos desde cero (requiriendo profundo conocimiento matemático y de algoritmos). El AI Engineer se enfoca en adaptar modelos gigantes ya entrenados (como GPT-4 o Llama) mediante prompts, orquestación y finetuning, priorizando la integración del modelo en un producto funcional sobre la creación del modelo en sí.</p>"
    },
    "ai-vs-agi": {
        title: "AI vs AGI",
        body: "<p>La IA actual (incluyendo LLMs) es potente y generalista, pero carece de razonamiento profundo; realiza tareas basándose en patrones aprendidos de datos existentes. La AGI (Artificial General Intelligence) es un concepto futuro que refiere a una IA capaz de igualar o superar la cognición humana, asimilar conocimientos, razonar y resolver problemas novedosos en cualquier dominio de forma autónoma. Hoy existe un compromiso entre generalidad y potencia, pero aún no hemos alcanzado la AGI.</p>"
    },
    "llms": {
        title: "LLMs",
        body: "<p>Sigla de Large Language Models. Son redes neuronales basadas en la arquitectura Transformer entrenadas con volúmenes masivos de texto para predecir el siguiente token (palabra o fragmento). A través de este entrenamiento, adquieren la capacidad de entender, generar y \"razonar\" con el lenguaje humano, permitiéndoles realizar múltiples tareas (resumir, traducir, programar) sin haber sido programados explícitamente para cada una de ellas.</p>"
    },
    "inference": {
        title: "Inference",
        body: "<p>Es el proceso de ejecutar un modelo ya entrenado para procesar una entrada (prompt) y generar una salida (completion). En producción, implica gestionar cuellos de botella computacionales. Se divide en dos etapas: prefill (procesar el prompt inicial, intensivo en cálculo) y decode (generar la respuesta token por token de manera secuencial, limitado por el ancho de banda de la memoria).</p>"
    },
    "training": {
        title: "Training",
        body: "<p>Es el proceso de enseñanza del modelo. Para un LLM, consta de etapas:<br>1. Pre-entrenamiento: El modelo aprende la estructura del lenguaje de corpus masivos (extremadamente costoso).<br>2. Finetuning supervisado (SFT): Se entrena con ejemplos de instrucción-respuesta para que aprenda a seguir órdenes.<br>3. Finetuning de preferencia: Se alinea el modelo con el feedback humano (ej. RLHF) para que las respuestas sean útiles y seguras.</p>"
    },
    "embeddings": {
        title: "Embeddings",
        body: "<p>Son representaciones numéricas (listas de números o vectores) de datos como texto o imágenes. Su función es capturar el significado semántico: dos conceptos similares tendrán vectores que están \"cerca\" matemáticamente en el espacio vectorial. Son la pieza fundamental para que las computadoras entiendan la relación entre palabras y documentos, habilitando la búsqueda semántica.</p>"
    },
    "vector-database": {
        title: "Vector Database",
        body: "<p>Es una base de datos diseñada específicamente para almacenar, indexar y consultar embeddings (vectores). Actúa como la memoria a largo plazo para las aplicaciones de IA. Permite realizar búsquedas de similitud extremadamente rápidas (búsqueda de vecino más cercano) para encontrar la información más relevante para una consulta de usuario, siendo un componente crítico en sistemas RAG.</p>"
    },
    "ai-agents": {
        title: "Ai Agents",
        body: "<p>Un agente es un sistema autónomo donde el LLM actúa como el \"cerebro\". A diferencia de un chat pasivo que solo responde, un agente percibe su entorno, razona sobre un problema, planifica una secuencia de acciones y utiliza herramientas externas (como buscadores web o calculadoras) para lograr un objetivo. Puede corregirse a sí mismo y ejecutar tareas de varios pasos.</p>"
    },
    "rag": {
        title: "RAG",
        body: "<p>Siglas de Retrieval-Augmented Generation (Generación Aumentada por Recuperación). Es una técnica para dar al LLM acceso a datos que no vio durante su entrenamiento (como datos privados o noticias recientes). Funciona recuperando información relevante de una base de datos externa e inyectándola en el prompt como contexto antes de que el modelo genere la respuesta, mejorando la precisión y reduciendo alucinaciones.</p>"
    },
    "prompt-engineering": {
        title: "Prompt Engineering",
        body: "<p>Es el arte y la ciencia de diseñar las instrucciones (prompts) que se envían al modelo para obtener el resultado deseado. Va más allá de escribir una pregunta; implica estructurar la comunicación entre el usuario y el modelo, proporcionar ejemplos (few-shot), definir roles y formatos, y guiar el \"razonamiento\" del modelo para resolver tareas complejas de forma consistente.</p>"
    },

    // NODO 2
    "benefits-of-pre-trained-models": {
        title: "Benefits of Pre-trained Models",
        body: "<p>El beneficio principal radica en el Transfer Learning (aprendizaje por transferencia). Estos modelos ya han \"leído\" internet para aprender la estructura del lenguaje y conocimientos generales, permitiendo transferir ese conocimiento a tareas específicas,.</p><ul><li>Eficiencia de Muestras y Cómputo: Entrenar un modelo desde cero requiere datasets masivos y meses de cómputo. Los modelos preentrenados permiten obtener resultados de alto rendimiento (SOTA) en tareas específicas (como clasificación legal o análisis de sentimientos) usando muy pocos ejemplos (few-shot) o datasets pequeños para finetuning,.</li><li>Generalización: A diferencia de los modelos tradicionales de ML diseñados para una sola tarea, un modelo fundacional preentrenado es polivalente; puede resumir, traducir y escribir código \"out-of-the-box\" debido a la diversidad de sus datos de entrenamiento,.</li></ul>"
    },
    "limitations-and-considerations": {
        title: "Limitations and Considerations",
        body: "<p>Aunque poderosos, estos modelos no son bases de conocimiento fácticas ni herramientas deterministas.</p><ul><li>Naturaleza Probabilística y Alucinaciones: Los modelos no \"saben\" la verdad; simplemente predicen la siguiente palabra más probable. Esto lleva a alucinaciones (inventar hechos con confianza) e inconsistencia (dar respuestas diferentes a la misma pregunta),.</li><li>Conocimiento Estático: El modelo está \"congelado\" en el tiempo. No sabe qué pasó después de su fecha de corte de entrenamiento ni tiene acceso a datos privados o corporativos a menos que se inyecten mediante RAG,.</li><li>Sesgo y Seguridad: Al entrenarse con datos de internet sin filtrar, heredan estereotipos, sesgos raciales/género y pueden generar contenido tóxico si no se alinean (post-training) correctamente,.</li><li>Caja Negra: A menudo desconocemos los datos exactos de entrenamiento, lo que dificulta saber por qué el modelo falla en ciertos dominios o si está infringiendo derechos de autor,.</li></ul>"
    },
    "google-models": {
        title: "Google Models",
        body: "<p>Google ofrece una suite de modelos fundacionales, siendo Gemini su modelo insignia actual. Gemini es multimodal de forma nativa (entiende texto, imágenes, audio y video) y viene en diferentes tamaños y capacidades: Pro (balanceado para escalar), Flash (optimizado para baja latencia y costo) y Ultra (para tareas altamente complejas),. Además, Google desarrolla modelos abiertos llamados Gemma (basados en la misma investigación que Gemini pero más ligeros para uso local) y modelos especializados como Imagen (generación y edición visual), Veo (generación de video) y Lyria (generación de música),. Estos modelos se acceden principalmente a través de Vertex AI Model Garden.</p>"
    },
    "capabilities-context-length": {
        title: "Capabilities / Context Length",
        body: "<p>El context length (ventana de contexto) define la cantidad máxima de información (medida en tokens) que un modelo puede procesar en una sola interacción, incluyendo tanto la entrada (prompt) como la salida generada,.</p><ul><li>Evolución: La capacidad ha crecido exponencialmente, pasando de 1K tokens en modelos antiguos a ventanas masivas de 1M o 2M+ en modelos de frontera actuales, permitiendo procesar libros enteros o grandes bases de código en una sola consulta,.</li><li>Limitaciones: Un contexto más largo no siempre implica mejor comprensión. Existe el fenómeno \"Lost in the Middle\", donde los modelos tienden a olvidar o alucinar información que se encuentra en la mitad de un prompt muy largo, priorizando lo que está al principio o al final,. Además, a mayor contexto, mayor es la latencia y el costo computacional,.</li></ul>"
    },
    "cut-off-dates-knowledge": {
        title: "Cut-off Dates / Knowledge",
        body: "<p>Los LLMs tienen un conocimiento estático que se detiene en su fecha de corte (cut-off date), el momento en que finalizó su entrenamiento. El modelo \"congeló\" su conocimiento del mundo en ese punto,.</p><ul><li>Implicaciones: Un modelo no sabe qué pasó después de su fecha de corte (por ejemplo, quién ganó el último mundial o el precio actual de una acción) a menos que se le proporcione esa información externamente,.</li><li>Alucinaciones: Si se le pregunta por eventos posteriores a su fecha de corte sin herramientas externas, el modelo puede inventar respuestas plausibles pero falsas o negarse a responder,.</li><li>Solución: Para mitigar esto, no se reentrena el modelo constantemente (lo cual es inviable), sino que se utilizan herramientas como RAG (Retrieval-Augmented Generation) o acceso a la web para inyectar información fresca en el contexto,.</li></ul>"
    },
    "anthropics-claude": {
        title: "Anthropic's Claude",
        body: "<p>Una familia de LLMs desarrollados por Anthropic con un fuerte enfoque en la seguridad y la alineación con los valores humanos (conocido como alineación HHH: Helpful, Honest, Harmless). Sus modelos actuales (como Claude 3 y 3.5 Sonnet) destacan por tener ventanas de contexto masivas (200K+ tokens), lo que les permite procesar libros enteros o grandes bases de código en un solo prompt,. Se diferencian por ofrecer capacidades de \"Artifacts\" para generar contenido estructurado y autónomo en la interfaz de usuario.</p>"
    },
    "openai-gpt": {
        title: "OpenAi GPT",
        body: "<p>La serie Generative Pre-trained Transformer (GPT) de OpenAI impulsó la revolución actual de la IA. Comenzando como modelos de completado de texto, evolucionaron mediante Reinforcement Learning from Human Feedback (RLHF) hacia modelos de chat instruccionales (como GPT-3.5 y GPT-4),. GPT-4 es un modelo multimodal de gran escala (se rumorea que es una mezcla de expertos o MoE) que domina benchmarks en razonamiento, codificación y conocimientos generales, accesible principalmente vía API,.</p>"
    },
    "azure-ai": {
        title: "Azure Ai",
        body: "<p>Es la plataforma en la nube de Microsoft que ofrece acceso empresarial a modelos fundacionales. Su característica distintiva es la asociación exclusiva para alojar los modelos de OpenAI (como GPT-4), permitiendo a las empresas usarlos dentro de sus redes privadas con cumplimiento de normativas de seguridad y privacidad,. Además, ofrece servicios de traducción y herramientas de seguridad de contenido para filtrar outputs dañinos,.</p>"
    },
    "aws-sagemaker": {
        title: "AWS SageMaker",
        body: "<p>Es el servicio de machine learning completamente gestionado de Amazon. En el contexto de la ingeniería de IA, actúa como una plataforma agnóstica que permite alojar y desplegar modelos de código abierto (como Llama o Mistral) o propietarios a través de SageMaker JumpStart. Proporciona la infraestructura subyacente para entrenar, ajustar (finetune) y servir modelos a escala sin tener que gestionar servidores físicos.</p>"
    },
    "hugging-face-models": {
        title: "Hugging Face Models",
        body: "<p>Hugging Face es el \"hub\" central del ecosistema de IA de código abierto, alojando más de 800,000 modelos. No es un modelo en sí, sino la plataforma donde se comparten y descargan modelos abiertos (open weights) como Llama, BERT o Whisper. Su librería transformers es el estándar de la industria para cargar y utilizar estos modelos en código. También mantiene el Open LLM Leaderboard, una referencia clave para comparar el rendimiento de modelos abiertos en benchmarks públicos,.</p>"
    },
    "mistral-ai": {
        title: "Mistral AI",
        body: "<p>Una compañía francesa que se especializa en modelos abiertos de alta eficiencia. Sus modelos, como Mistral 7B y Mixtral 8x7B, utilizan arquitecturas avanzadas como Mixture of Experts (MoE) para superar en rendimiento a modelos mucho más grandes (como Llama 2 70B) utilizando menos recursos computacionales,. Ofrecen una alternativa potente y eficiente que se puede ejecutar localmente o desplegar en la nube.</p>"
    },
    "cohere": {
        title: "Cohere",
        body: "<p>Una empresa centrada en IA para el entorno empresarial (Enterprise AI). A diferencia de los modelos de chat generalistas, Cohere se especializa en modelos optimizados para tareas de NLP comercial como Rerank (reordenamiento de resultados de búsqueda) y Embed (generación de embeddings para búsqueda semántica),. Su modelo generativo, Command R+, está diseñado específicamente para sobresalir en tareas de RAG (Retrieval-Augmented Generation) y uso de herramientas, citando fuentes para reducir alucinaciones,.</p>"
    },
    "replicate": {
        title: "Replicate",
        body: "<p>Replicate AI es una plataforma en la nube diseñada para que desarrolladores e ingenieros puedan ejecutar, ajustar (fine-tune) y desplegar modelos de inteligencia artificial mediante una API, sin tener que preocuparse por gestionar servidores ni infraestructuras complejas.</p>"
    },
    "pre-trained-sentiment": {
        title: "pre-trained-sentiment",
        body: "<p>Implementación de un modelo de Deep Learning ya entrenado (Hugging Face) para detectar emociones en texto de forma automática. <br><br><a href=\"https://github.com/BrianSuhit/ai-engineering/tree/main/01-pretrained-sentiment\" target=\"_blank\"><strong style=\"color: #FFEE8C;\">link al proyecto</strong></a></p>"
    },

    // NODO 3
    "chat-completions-api": {
        title: "Chat Completions API",
        body: "<p>Es el estándar moderno para interactuar con modelos de lenguaje. A diferencia de las antiguas APIs de \"completar texto\" (que solo seguían una frase), este formato estructura la entrada como una lista de mensajes con roles específicos: system (define el comportamiento), user (la pregunta del usuario) y assistant (la respuesta del modelo). Esta estructura permite gestionar el historial de conversación y mantener el contexto en aplicaciones de chat.</p>"
    },
    "writing-prompts": {
        title: "Writing Prompts",
        body: "<p>Es el proceso de diseñar las entradas de texto para guiar al modelo hacia el resultado deseado. Un prompt efectivo generalmente contiene instrucciones claras, contexto relevante, ejemplos (few-shot) y, a veces, una estructura de formato de salida deseada (como JSON o Markdown). La calidad del prompt es el factor más determinante en el rendimiento del modelo sin necesidad de reentrenarlo.</p>"
    },
    "maximum-tokens": {
        title: "Maximum Tokens",
        body: "<p>Se refiere al límite máximo de información que un modelo puede procesar en una sola solicitud, conocido como \"ventana de contexto\". Este límite incluye la suma de los tokens del prompt (entrada) más los tokens de la completion (salida). Si la conversación excede este número, el modelo \"olvida\" la parte más antigua o corta la respuesta, lo que obliga a usar estrategias como resumir historiales o usar bases de datos vectoriales.</p>"
    },
    "token-counting": {
        title: "Token Counting",
        body: "<p>Los modelos no leen palabras o caracteres, sino \"tokens\" (fragmentos de texto que pueden ser palabras enteras o partes de ellas). El conteo de tokens es crítico por dos razones: técnica, para no exceder la ventana de contexto del modelo; y económica, ya que la mayoría de las APIs cobran por la cantidad de tokens procesados (tanto de entrada como de salida).</p>"
    },
    "pricing-considerations": {
        title: "Pricing Considerations",
        body: "<p>El costo de usar modelos fundacionales vía API suele basarse en un esquema de \"pago por uso\" medido en millones de tokens. Generalmente, los tokens de salida (generación) son más caros que los de entrada (lectura). Además del volumen, el precio varía drásticamente según el tamaño del modelo (modelos \"inteligentes\" vs. modelos \"rápidos\") y, en algunos casos, se cobra extra por el entrenamiento (fine-tuning) o el alojamiento de modelos dedicados.</p>"
    },
    "google-ai-studio": {
        title: "Google AI Studio",
        body: "<p>Es la herramienta de desarrollo específica de Google diseñada para prototipar rápidamente con modelos Gemini. Permite a los desarrolladores experimentar con prompts, ajustar parámetros de temperatura y seguridad, y probar entradas multimodales (texto, imágenes, video) en una interfaz web antes de escribir código. Facilita la exportación directa del prompt configurado a código (Python, JS) para su implementación.</p>"
    },
    "fine-tuning": {
        title: "Fine-tuning",
        body: "<p>Es el proceso de tomar un modelo preentrenado (que ya sabe hablar y razonar en general) y entrenarlo adicionalmente con un dataset más pequeño y específico de tu dominio. Esto sirve para adaptar el estilo, el tono o el formato de respuesta del modelo, o para enseñarle conocimientos muy específicos que no aprendió en su entrenamiento general, mejorando su rendimiento en tareas concretas.</p>"
    },
    "3-prompt-engineering": {
        title: "Prompt Engineering",
        body: "<p>Es la disciplina iterativa de optimizar los prompts para obtener respuestas precisas, consistentes y útiles. Va más allá de escribir una simple instrucción; implica técnicas avanzadas como Chain-of-Thought (pedirle al modelo que razone paso a paso), Few-Shot Prompting (dar ejemplos) y la estructuración sistemática del contexto para minimizar alucinaciones y mejorar la calidad de la salida.</p>"
    },
    "ai-resume-critiquer": {
        title: "AI Resume Critiquer",
        body: "<p>Implementación de critico de pdf, en este caso un cv, utilizando la API de Google para conectarse con el modelo Gemini 3 Flash. <br><br><a href=\"https://github.com/BrianSuhit/02-ai-resume-critiquer\" target=\"_blank\"><strong style=\"color: #FFEE8C;\">link al proyecto</strong></a></p>"
    },

    // NODO 4
    "open-vs-closed-source-models": {
        title: "Open vs Closed Source Models",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "popular-open-source-models": {
        title: "Popular Open Source Models",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "hugging-face-tasks": {
        title: "Hugging Face Tasks",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "hugging-face-hub": {
        title: "Hugging Face Hub",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "inference-sdk": {
        title: "Inference SDK",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "transformers-js": {
        title: "Transformers.js",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "ollama-models": {
        title: "Ollama Models",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "ollama-sdk": {
        title: "Ollama SDK",
        body: "<p>Contenido pendiente de redacción...</p>"
    },

    // NODO 5
    "prompt-injection-attacks": {
        title: "Prompt Injection Attacks",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "security-and-privacy-concerns": {
        title: "Security and Privacy Concerns",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "bias-and-fairness": {
        title: "Bias and Fairness",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "google-moderation-api": {
        title: "Google moderation api",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "adding-end-user-ids-in-prompts": {
        title: "Adding end-user IDs in prompts",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "conducting-adversarial-testing": {
        title: "Conducting adversarial testing",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "robust-prompt-engineering": {
        title: "Robust prompt engineering",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "know-your-customers-usecases": {
        title: "Know your Customers / Usecases",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "constraining-outputs-and-inputs": {
        title: "Constraining outputs and inputs",
        body: "<p>Contenido pendiente de redacción...</p>"
    },

    // NODO 6
    "semantic-search": {
        title: "Semantic Search",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "data-classification": {
        title: "Data Classification",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "recommendation-systems": {
        title: "Recommendation Systems",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "anomaly-detection": {
        title: "Anomaly Detection",
        body: "<p>Contenido pendiente de redacción...</p>"
    },

    // NODO 7
    "google-embedding-models": {
        title: "Google Embedding Models",
        body: "<p>Contenido pendiente de redacción...</p>"
    },

    // NODO 8
    "sentence-transformers": {
        title: "Sentence Transformers",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "models-on-hugging-face": {
        title: "Models on Hugging Face",
        body: "<p>Contenido pendiente de redacción...</p>"
    },

    // NODO 9
    "purpose-and-functionality": {
        title: "Purpose and Functionality",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "chroma": {
        title: "Chroma",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "indexing-embeddings": {
        title: "Indexing Embeddings",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "performing-similarity-search": {
        title: "Performing Similarity Search",
        body: "<p>Contenido pendiente de redacción...</p>"
    },

    // NODO 10
    "chunking": {
        title: "Chunking",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "embedding": {
        title: "Embedding",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "retrieval-process": {
        title: "Retrieval Process",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "generation": {
        title: "Generation",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "using-sdks-directly": {
        title: "Using SDKs Directly",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "langchain": {
        title: "Langchain",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "llama-index": {
        title: "Llama Index",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "haystack": {
        title: "Haystack",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "ragflow": {
        title: "RAGFlow",
        body: "<p>Contenido pendiente de redacción...</p>"
    },

    // NODO 12
    "ai-agent": {
        title: "AI Agent",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "agents-usecases": {
        title: "Agents Usecases",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "react-prompting": {
        title: "ReAct Prompting",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "manual-implementation": {
        title: "Manual Implementation",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "google-functions-tools": {
        title: "Google Functions / Tools",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "google-response-api": {
        title: "Google Response API",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "vertex-ai": {
        title: "Vertex AI",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "google-adk": {
        title: "Google ADK",
        body: "<p>Contenido pendiente de redacción...</p>"
    },

    // NODO 13
    "mcp-host": {
        title: "MCP Host",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "mcp-client": {
        title: "MCP Client",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "mcp-server": {
        title: "MCP Server",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "data-layer": {
        title: "Data Layer",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "transport-layer": {
        title: "Transport Layer",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "building-an-mcp-server": {
        title: "Building an MCP Server",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "building-an-mcp-client": {
        title: "Building an MCP Client",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "connect-to-local-server": {
        title: "Connect to Local Server",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "connect-to-remote-server": {
        title: "Connect to Remote Server",
        body: "<p>Contenido pendiente de redacción...</p>"
    },

    // NODO 14
    "multimodal-ai-usecases": {
        title: "Multimodal AI Usecases",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "image-understanding": {
        title: "Image Understanding",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "image-generation": {
        title: "Image Generation",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "video-understanding": {
        title: "Video Understanding",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "audio-processing": {
        title: "Audio Processing",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "text-to-speech": {
        title: "Text-to-Speech",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "speech-to-text": {
        title: "Speech-to-Text",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "google-vision-api": {
        title: "Google vision api",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "dall-e-api": {
        title: "DALL-E API",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "whisper-api": {
        title: "Whisper API",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "14-hugging-face-models": {
        title: "Hugging Face Models",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "langchain-for-multimodal-apps": {
        title: "LangChain for Multimodal Apps",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "llamaindex-for-multi-modal-apps": {
        title: "LlamaIndex for Multi-modal Apps",
        body: "<p>Contenido pendiente de redacción...</p>"
    },

    // NODO 15
    "ai-code-editors": {
        title: "AI Code Editors",
        body: "<p>Contenido pendiente de redacción...</p>"
    },
    "code-completion-tools": {
        title: "Code Completion Tools",
        body: "<p>Contenido pendiente de redacción...</p>"
    },

    // Entradas adicionales
    "placegolder": {
        title: "lorem ipsum",
        body: "<p>lorem ipsum dolor sit amet</p>"
    },
    "default": {
        title: "Próximamente",
        body: "<p>Este contenido está en desarrollo.</p>"
    }
};

// --- LÓGICA DEL MODAL ---

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// Función que llama el HTML
function openModal(key) {
    // Buscamos en la base de datos, si no existe, usamos default
    const data = contentDatabase[key] || contentDatabase["default"];

    modalTitle.innerText = data.title;
    modalBody.innerHTML = data.body; // innerHTML para que funcionen los <p> y <a>
    
    modal.style.display = 'flex'; // Mostrar
}

function closeModal() {
    modal.style.display = 'none'; // Ocultar
}

// Cerrar si clic afuera
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});