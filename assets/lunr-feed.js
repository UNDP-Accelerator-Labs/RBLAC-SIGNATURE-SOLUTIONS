// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('sdg')
  this.field('tags')
  this.field('rblac_priorities')
  this.field('signature_solutions')
  this.field('enablers')
  this.field('url')
  this.ref('id')
});

let tags = []
let sdg = []
let rblac_priorities = []
let signature_solutions = []
let enablers = []

// rblac_priorities, signature_solutions, enablers




index.add({
    title: "Background and purpose",
    content: "BACKGROUND AND PURPOSE\n\nToday’s development challenges are dynamic, interconnected puzzles of multidimensional risks that require systemic solutions. The United Nations Development Programme, through its Strategic Plan for 2022-2025, sets out to push towards the fulfillment of the Sustainable Development Goals (SDGs) as a path forward for overcoming these complex challenges.\n\nThe Plan is grounded in UNDP’s continued commitment to deliver integrated development solutions driven by country priorities. To this end, it is structured around a “3x6x3” framework that aim to support countries in 3 directions of change (structural transformation, leaving no-one behind, building resilience), through 6 signature solutions (poverty and inequality, governance, resilience, environment, energy, gender equality) enhanced by 3 enablers (strategic innovation, digitalization, development financing), that allow UNDP to deliver these solutions through a systemic approach.\n\n\n\nThis toolkit compiles the tested innovative and creative tools developed by the Accelerator Labs of RBLAC to achieve sustainable development. Organized according to the six UNDP signature solutions, it enables other country offices to easily navigate best practices, learn about them, and aim to utilize and replicate them in various contexts.\n\nAs the Accelerator Labs move to contribute more deliberately to UNDP’s R&amp;D function, we offer the experience accumulated by the network of labs in the Latin America and the Caribbean region in the form of this toolkit. It is meant to inspire and empower colleagues by offering ready-made resources that can be re-used after adapting then to a new context.\n\nThe toolkit aims to facilitate collective intelligence initiatives and is conceived as a “living” site, hoping to continuously expand the available tools.\n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/0.Getting_started/0.1%20Background.html",
    id: 0
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "The toolkit at a glace",
    content: "THE TOOLKIT AT A GLANCE\n\nGetting started. This section explains the rationale for the toolkit, and how to use it.\n\nInnovating to tackle poverty and inequality. This section describes tools that tackle inequality of opportunities and enhance people’s capabilities to move above the poverty line.\n\nInnovating for gender equality. This section describes tools that confront the structural obstacles to gender equality and strengthening women’s economic empowerment and leadership.\n\nInnovating for energy access and efficiency. This section describes tools that aim to increase energy access and accelerating the transition to renewable energy.\n\nInnovating for environment. This section describes tools that enables putting nature and the environment at the heart of national economies and planning; helping governments protect, manage and value their natural assets.\n\nInnovating for resilience. This section describes tools that support countries and communities in building resilience to diverse shocks and crises, including conflict, climate change, disasters, and epidemics.\n\nInnovating for governance. This section describes tools that help countries address emerging complexities by “future-proofing” governance systems through anticipatory approaches and better management of risk.\n\nContributors. This section enlists the contributors of the toolkit and provides their contact information for further inquiries in any of the tools.\n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/0.Getting_started/0.2%20Index.html",
    id: 1
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "How to use the toolkit",
    content: "HOW TO USE THE TOOLKIT\n\nArchitecture\n\nThis toolkit compiles tested tools that have been proven to achieve sustainable development, as part of one of the six signature solutions of UNDP’s Strategic Plan 2022 – 2025. The tools are organized in six sections, one for each signature solutions. You can find a description of each section in the segment “The toolkit at a glance”.\n\nHow to use this toolkit in four easy steps\n\n1. Decide what you want to do and browse the catalogue.\nThe tools in this kit are labelled according to function, with names like “Innovating to tackle poverty and inequality by digital inclusion through a network of nearby stores”. They are sorted into six main categories based on the UNDP’s signature solution they contribute to. The navigation bar and tag boxes on the left of the screen act as a catalog: browse them to navigate to any tool you like.\n\n2. Read the description from this website.\nEach tool’s website page contains information you can use to decide if that tool is helpful to you. Is it aligned with your goals? Is it compatible with the amount of time and money you have?\n\n3. Read and reuse the resources.\nIf the description of the tool looks interesting, you can move on to the resources itself. Because the tool was not written with your specific case in mind, you will need to adapt it to our context. Hopefully, this will be easier than starting from scratch.\n\n4. Ask for support.\nAll resources have a lead author, or “focal point”. The ethos of UNDP’s Accelerator Labs is one of sharing knowledge, so you can reach out to the focal point if you need more information and support.\n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/0.Getting_started/0.3%20How%20to.html",
    id: 2
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Further Details",
    content: "FURTHER DETAILS: TAGS &amp; RESOURCES\n\nTags\n\nThere are four main categories to tag tools: UNDP’s Strategic Plan signature solutions (1) and enablers (2), RBLAC priorities (3), and the Sustainable Development Goals (4) to which the tool contributes. Each tool in the toolkit is assigned to only one section of the six signature solutions. However, in practice, some of the solutions prototyped by the Accelerator Labs jointly address different dimensions of development. Therefore, this information is included through a list of tags at the end of the tool.\n\nTo use the tags, select the filters needed to explore the tools of your interest in any of the four tag boxes located at the end of the navigation bar on the left of the screen. Once the filters are selected, the main screen will show the list of tools that include the selected tags.\n\nPlease note that the tag boxes only display the categories included in at least one tool. Below is the complete list of categories that could be assigned for each tag.\n\n\n  \n    Signature solutions tag: Poverty and Inequality; Gender Equality; Energy; Environment; Resilience; Governance.\n  \n  \n    Enablers tag: Digitalization; Strategic Innovation; Development Financing.\n  \n  \n    RBLAC priorities tag: Inclusive and Sustainable Growth; Equity and Inclusion; Resilient Sustainable Development and Green Recovery; Effective Governance.\n  \n  \n    SGD tag: 1 No poverty; 2 Zero hunger; 3 Good health and well-being; 4 Quality education;  5 Gender equality;  6 Clean water and sanitation; 7 Affordable and clean energy; 8 Decent work and economic growth; 9 Industry, innovation and infrastructure; 10 Reduced inequalities; 12 Sustainable cities and communities; 12 Responsible consumption and production; 13 Climate action; 14 Life below water; 15 Life on land ; 16 Peace, justice, and strong institutions; 17 Partnerships for the goals.\n  \n\n\nResources\n\nThis toolkit compiles a set of tools and their resources to assist UNDP colleagues in delivering initiatives that support sustainable development. Below is a description of the types of resources found in the tools.\n\n\n  Blog: An online article from RBLAC Labbers where they share their thoughts, expertise, and insights regarding the implementation of the tool.\n  Report: A document presenting information about the process, methodology, results, and lessons learned from the design and execution of the tool.\n  Slideshow: A document in presentation format summarizing key information about the implementation of the tool.\n  Dashboard: A visual display of information, often presented in the form of charts, graphs, tables, and other visual elements, designed to provide users with a quick overview of key data relevant to the tool.\n  ToR (Terms of Reference): A document describing the terms under which a contract is made for the acquisition required for the implementation of the tool.\n  Manual: A document providing instructions, guidance, or information on how to perform a task, operate a system or device, or use a product, such as guides, concept notes, and data sheets.\n  Templates: Pre-designed layouts or formats that serve as a starting point for implementing the tool, such as canvases for collaborative exercises.\n  Access link: A web link or URL providing access to a specific resource, such as courses or apps developed as part of the tool.\n\n\nList of tools found in this toolkit.\n\n\n  Innovating to tackle poverty and inequality by collaborative and decentralized grassroot solution mapping with volunteers.\n  Innovating to tackle poverty and inequality by digital inclusion through a network of nearby stores.\n  Innovating to tackle poverty and inequality by training volunteers on participatory and analytical methodologies.\n  Innovating to tackle poverty and inequality through online user-center capacity building training.\n  Innovating for gender equality by using interactive and participatory discussions to change perspective.\n  Innovating for gender equality by building citizens’ digital security capacities.\n  Innovating for gender equality trough startups’ accelerators.\n  Innovating for environment through the co-creation and mapping of scientific solutions with citizens.\n  Innovating for environment through a crowdsourced app for environmental monitoring.\n  Innovating for environment by prioritizing environmental interventions through a dynamic map.\n  Innovating for resilience by addressing local challenges through community systems thinking.\n  Innovating for resilience through innovation opportunities workshop.\n  Innovating for governance by using design thinking to design public products or services.\n  Innovating for governance by mapping digital capacities for municipalities.\n  Innovating for governance by using Natural Language Processing Models for building consensus.\n  Innovating for governance through a methodology for exploring signals of change.\n  Innovating for governance by online and collaborative mapping of the national innovation ecosystem.\n  Innovating for governance by using a multistakeholder governance model for an innovation unit.\n  Innovating for governance through a MOOC on public and social innovation concepts and tools.\n  Innovating for governance by using text mining algorithms to analyze public programs performance.\n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/0.Getting_started/0.4%20Details.html",
    id: 3
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "by collaborative and decentralized grassroot solution mapping with volunteers",
    content: "Collaborative and decentralized grassroot solutions mapping with volunteers\n\nWhat it does.\nThis solution mapping approach allows you to collect data about grassroots solutions in a collaborative and decentralized manner, with minimal cost and short work cycles. The data is gathered by volunteer mappers through semi-structured interviews and surveys. Volunteer mappers are supported through induction sessions on specific topics, such as what a grassroots solution is, how to handle recollection instruments, and how to conduct an interview. Once the data collection is completed, a collective intelligence exercise is carried out to enable the community mappers to share their experiences and findings.\n\nValue proposition for the government/other partner.\nThis collaborative and decentralized mapping approach, in which volunteers from the communities play a key role, allows governments and other partners to achieve contextualized mapping in different geographical locations simultaneously. Such contextualization helps, for example, to gather information on how communities re-signify public policies or other initiatives. Furthermore, the approach enables real-time scalability of the mapping project. Additionally, it empowers partners to gain a deeper insight into the various forms and manifestations that those solutions can take.\n\nWhy and when to use it.\nThis approach proves most valuable when you need to map solutions from different places simultaneously, but you count with limited resources, since it relies on contributions from volunteer mappers. Moreover, it is a useful model when you want to carry out a solution mapping with broad territorial scale, but you have mobility restrictions, or do not have a budget for travelling. Additionally, the implementation of the tool will work best when you have resources and time available and the will to build spaces of support and interaction among all the stakeholders involved in the project. Experience in strategic alliance building is not a must, but it certainly is a factor that contributes to the success of implementing this approach.\n\nKnown issues and troubleshooting.\nIf it is not possible to engage volunteers with knowledge of the local circumstances of the community where the solutions mapping is to take place, this tool may result in gathering incomplete or inaccurate data. Also, if the community is affected by severe limitations in connectivity, conducting a remote mapping may not be feasible.\n\nContext.\nIn early 2020, the Argentina Acceleration Lab (AccLab) received an award from UN Volunteers and commenced work on a blueprint about models of volunteering. Simultaneously, the impact of COVID-19 intensified, leading to a nationwide quarantine in the country. The economic consequences of this measure had a significant impact on society, especially in sectors affected by multiple vulnerabilities. Consequently, the AccLab focused on mapping community-based solutions for financial inclusion and socioeconomic recovery with the assistance of volunteers. The Lab was not alone in this mission; it collaborated with Territorios en Acción (TeA), a joint initiative comprising different academic and scientific institutions, and partnered with national universities across the country.\n\nCost to implement.\nYou must consider a budget ranging from USD 9,000 to USD 14,000 to hire the team needed to implement the solution. Coordination costs may vary depending on the characteristics of your coordination partner. An academic or scientific organization might represent a more cost-efficient option, particularly if it is an ally with previous ties with your team.\n\nTime\nThe application of the model is cost-efficient and does not require extended periods of time. In the experience of the Lab, the mapping was done in two months.\n\nPeople.\nTo implement this solution mapping model, you will need a team with the following roles:\n\n  Volunteers: You need 1 volunteer for every 4 to 6 interviews you want carry out, as they are the ones that collect the information from direct sources.\n  Facilitators: You need 1 facilitator for every 2 to 4 volunteers, as they are who train volunteers on how to conduct the mapping.\n  Project coordinator: You need one person (an individual or organization) responsible for managing the project, coordinating the facilitators and volunteers, and reporting the results.  This person should work with facilitators and form a federal gender-equality group of volunteers, potential agents of change in their communities. The project coordinator should organize working subgroups. This space provides methodological technical assistance during the entire process. The coordination group holds meetings to monitor the solutions mapping progress, during which individual follow-up of each interviewer is reinforced to ensure compliance with the project’s objectives and deadlines.\n  Graphic designer: You need one person (or agency) to manage the visual aspects of the project, such as design the training materials for the volunteers and the final report.\n\n\nAs an example, consider that one mapping reaching 40 interviewees can be done with 10 volunteers, supported by 8 facilitators and overseen by a project coordinator.\n\nFocal point.\nMaría Verónica Moreno\n\nCountry, year, and language.\nArgentina, 2021, Spanish and English.\n\nResources.\n\n  Report (Spanish) - Búsqueda compartida: mapeo de soluciones CoLaborativo. Inclusión financiera y recuperación económica\n  Report (English) - Shared search: CoLlaborative solutions mapping. Financial inclusion and economic recovery\n  Blog (Spanish) - Estrategias Co-Lab(orativas): las soluciones y los mapeos con otros\n  Blog (English) - Co_Lab(orative) strategies: mapping solutions with others.\n\n",
    tags: null,
    sdg: ["10 Reduce Inequalities","16 Peace Justice And Strong Institutions"],
    enablers: ["Strategic innovation"],
    signature_solutions: ["Poverty & inequality","Resilience"],
    rblac_priorities: ["Inclusive and Sustainable Growth","Equity and inclusion"],
    url: "/1.Poverty/1.1%20VolunteerMapping.html",
    id: 4
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("10 Reduce Inequalities") < 0) {
        sdg.push("10 Reduce Inequalities")
    }

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Strategic innovation") < 0) {
        enablers.push("Strategic innovation")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Poverty & inequality") < 0) {
        signature_solutions.push("Poverty & inequality")
    }

    if(signature_solutions.indexOf("Resilience") < 0) {
        signature_solutions.push("Resilience")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Inclusive and Sustainable Growth") < 0) {
        rblac_priorities.push("Inclusive and Sustainable Growth")
    }

    if(rblac_priorities.indexOf("Equity and inclusion") < 0) {
        rblac_priorities.push("Equity and inclusion")
    }






index.add({
    title: "by digital inclusion through a network of nearby stores",
    content: "A nearby stores network for digital inclusion\n\nWhat it does.\nThis tool enables you to build a network of nearby stores (markets and shops located within neighborhoods), as a territorial solution, to enhance access to digital services within communities. Through the stores affiliated to the network, neighbors can conveniently conduct various online administrative procedures (such as payments or government requests) close to their homes with the support of shopkeepers. This allows citizens to save time, money, and distance; and benefits nearby stores by increasing their sales.\n\nValue proposition for the government/other partner.\nImplementing a network of nearby stores for digital inclusion enables local governments to promote throughout the territory access to digital public services, and to foster economic resilience and growth by boosting stores’ sales. Bringing nearby stores with computers and internet access into the network allows for a more efficient use of existing resources and a reduction of inequalities within the community.\n\nWhy and when to use it.\nThis tool is most useful when there is a digitized public administrative system with many procedures that must be carried out online or in central offices. It is particularly beneficial when access to both online and in-person procedures is problematic due to financial constraints, distance, and time restrictions.\n\nKnown issues and troubleshooting.\nThis tool may not be the most suitable choice for you if (1) nearby stores in the community lack technological devices and stable internet connectivity; (2) you do not have supportive partners to assist you.  Such partners include stores owners who should not only be willing to join the network but also be open to learn the necessary skills to assist neighbors with digital administrative procedures. Other key partners are government officials since they can be allies in mobilizing support from store owners and effectively communicating the project to the community. Additionally, governmental partners can help to have a better understanding of the priorities and needs each territory has regarding digital inclusion.\n\nContext.\nThe Con Vos Network was created to test one of the solutions identified with the potential to achieve higher levels of digital inclusion through the Solutions Mapping of the AccLab. The mapping focused on surveying innovative grassroots solutions, strategies, and tools implemented by people living in low-income neighborhoods during the pandemic to address their daily challenges. These elements served as evidence and/or models to expedite our understanding of various issues from a systemic or global perspective.\n\nAmong the solutions identified was the experience of a stationery store owner located in a low-income neighborhood in the Greater Buenos Aires area. She began offering an additional service: assisting her customers with their digital administrative procedures in exchange for a small fee. This case exemplifies the central role played by nearby stores in introducing simple technologies to their neighbors, as in the past was the case of photocopiers, call centers, or mobile phone card recharging. Consequently, these stores become both spaces for meeting the needs of their customers and avenues for them to adopt these new technologies.\n\nCost to implement.\nThe cost of implementing this tool can vary from relatively low to moderate, depending on the complexity of the network you intend to establish. A medium-scale implementation, comprehending a network of around 30 nearby stores and a timeframe of four months, could require an estimated budget of USD 60,000 to USD 75,000, which includes the cost of hiring the required team. In addition, you could consider implementing small incentives for shop owners, along with some fieldwork recruiters, all of which could add between USD 10,000 to USD 13,000 to your budget.\n\nTime\nThe tool is expected to be developed and implemented within a four-month timeframe. The first two months will be devoted to project planning, followed by a two-month on-site implementation phase. Once installed, the network is designed to be self-sustaining.\n\nPeople.\nTo implement this tool, you will need a team of three members:\n\n  One project coordinator responsible for planning, developing, and implementing all aspects of the project.\n  One fieldwork coordinator responsible for overseeing the activities related to the implementation of the project within the territory.\n  One communicator dedicated to managing the communicational and design aspects of the project, such as promotional videos or the signage materials for identifying the shops of the network.\n\n\nSome additional roles can contribute to better results, such as local promoters or field recruiters. They can play a vital role in encouraging both neighbors and shopkeepers to join the network.\n\nFocal point.\nLorena Moscovich\n\nCountry, year, and language.\nArgentina, 2020-ongoing, Spanish and English.\n\nResources.\n\n  Report (Spanish) - Con Vos Fray. Una iniciativa que promueve los mercados comunitarios y la inclusion digital.\n  Report (English) - Con Vos Fray. An initiative that promotes community markets and digital inclusion.\n  Report (Spanish) - Con un poco de ayuda de mis vecinos. Red Con Vos, un piloto que conecta a mercados comunitarios con inclusión digital.\n  Report (English) - With a little help from my neighbors. The Con Vos Network, a pilot test connecting community markets with digital inclusion.\n  Blog (Spanish) - La Red Con Vos, el piloto que conecta a mercados comunitarios con inclusión digital.\n  Blog (English) - The Con Vos Network, the pilot that connects community markets with digital inclusion.\n  Blog (Spanish) - Mercados comunitarios para promover la inclusión digital en la digitalización de las ciudades\n  Blog (English) - Community markets to promote digital inclusion in digitalization of cities\n  Blog (Spanish) - ¿Puede una solución improvisada resolver un problema persistente?\n  Blog (English) - Can an impromptu solution solve a complex problem?\n\n",
    tags: null,
    sdg: ["10 Reduce Inequalities","11 Sustainable Cities And Communities"],
    enablers: ["Strategic innovation","Digitalization"],
    signature_solutions: ["Poverty & inequality","Resilience","Governance"],
    rblac_priorities: ["Equity and inclusion"],
    url: "/1.Poverty/1.2%20DigitalInclusionStores.html",
    id: 5
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("10 Reduce Inequalities") < 0) {
        sdg.push("10 Reduce Inequalities")
    }

    if(sdg.indexOf("11 Sustainable Cities And Communities") < 0) {
        sdg.push("11 Sustainable Cities And Communities")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Strategic innovation") < 0) {
        enablers.push("Strategic innovation")
    }

    if(enablers.indexOf("Digitalization") < 0) {
        enablers.push("Digitalization")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Poverty & inequality") < 0) {
        signature_solutions.push("Poverty & inequality")
    }

    if(signature_solutions.indexOf("Resilience") < 0) {
        signature_solutions.push("Resilience")
    }

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Equity and inclusion") < 0) {
        rblac_priorities.push("Equity and inclusion")
    }






index.add({
    title: "by training volunteers on participatory and analitical methodologies",
    content: "Volunteers’ training guide on participatory and analytical methodologies.\n\nWhat it does.\nThis guide allows you to build the capacities of volunteers for conducting solution mapping, exploring data sources, engaging in future scanning, and carrying out experimentation activities. These skills can be quickly implemented to address the needs of people in the field.\n\nValue proposition for the government/other partner.\nBy using the volunteer’s guide, social organizations and international cooperation can involve their members in activities that collectively address development challenges, document their learnings, and broaden the scope of their impact.\n\nWhy and when to use it.\nThis tool is valuable when organizations involve volunteers in the field, aiming to swiftly understand the needs of the people. Volunteers serve as the eyes and hands that facilitate rapid learning and action in response to those needs.\n\nKnown issues and troubleshooting.\nIt is not yet the best moment to make use of this tool if:\n\n  the partner does not have the intention of addressing the problem through a collaborative approach with volunteers participating in field activities;\n  the partner does not plan to implement the solutions obtain from the field experiences;\n  the volunteers can’t commit to the full program’s length (including implementing the solution);\n  the is no need to explore alternative solutions, as there are proven efficient solutions for the problem being address;\n  there are no resources to facilitate the exchange of learnings.\n\n\nContext.\nThis tool came into existence through a partnership between UNDP and Centro de Voluntariado Guatemalteco (CVG). We recognized that volunteers had a unique opportunity to contribute to development due to their proximity to the conditions of people in need. Their eyes and hands on the ground provide an invaluable resource for mapping solutions, exploring information sources, anticipating futures, and experimenting with innovations. We discovered that the profound personal experiences and learnings from volunteers had untapped potential when integrated into collective learning experiences. Through this integration, we can build our understanding and explore possibilities for action.\n\nCost to implement.\nYou will need a budged around USD 15.000 to hire the team needed and to carry out the workshops. While the tool can be adapted to various conditions, having access to a venue, the capability to share visual materials, an internet connection, materials for co-designing, and provisions for participants, including food, can be beneficial.\n\nTime\nYou will need around four months to plan, carry out the workshops, process and communicate learnings. The work whops can range from as short as half a day when using specific sections of the volunteer guide to a full program extending over three months, which may include field visits.\n\nPeople.\nTo use this tool, the following team members will be required:\n\n  One facilitator familiar with the volunteer guide to conduct workshops.\n  One person responsible of coordinating logistics for gathering participants, securing a venue, and ensuring participant engagement.\n\n\nFocal point.\nJavier Brolo\n\nCountry, year, and language.\nGuatemala, 2022, Spanish\n\nResources.\n\n  Manual (Spanish) Contribuyendo a la Aceleración del Desarrollo Sostenible desde el Voluntariado\n\n",
    tags: null,
    sdg: ["17 Partnerships For The Goals"],
    enablers: ["Strategic innovation","Digitalization"],
    signature_solutions: ["Poverty & inequality","Governance","Resilience","Environment","Energy","Gender equality"],
    rblac_priorities: ["Inclusive and Sustainable Growth","Equity and inclusion"],
    url: "/1.Poverty/1.3%20VolunteersGuide.html",
    id: 6
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("17 Partnerships For The Goals") < 0) {
        sdg.push("17 Partnerships For The Goals")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Strategic innovation") < 0) {
        enablers.push("Strategic innovation")
    }

    if(enablers.indexOf("Digitalization") < 0) {
        enablers.push("Digitalization")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Poverty & inequality") < 0) {
        signature_solutions.push("Poverty & inequality")
    }

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }

    if(signature_solutions.indexOf("Resilience") < 0) {
        signature_solutions.push("Resilience")
    }

    if(signature_solutions.indexOf("Environment") < 0) {
        signature_solutions.push("Environment")
    }

    if(signature_solutions.indexOf("Energy") < 0) {
        signature_solutions.push("Energy")
    }

    if(signature_solutions.indexOf("Gender equality") < 0) {
        signature_solutions.push("Gender equality")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Inclusive and Sustainable Growth") < 0) {
        rblac_priorities.push("Inclusive and Sustainable Growth")
    }

    if(rblac_priorities.indexOf("Equity and inclusion") < 0) {
        rblac_priorities.push("Equity and inclusion")
    }






index.add({
    title: "through online user-center capacity-building training",
    content: "Online user-center capacity-building training\n\nWhat it does.\nThis online user-center capacity-building training allows you to:\n\n  Strengthen and boost refugees, migrants and the host population’s entrepreneurship skills and resilience.\n  Promote social cohesion among migrants and the host population.\n  Build a learning community.\n\n\nValue proposition for the government/other partner.\nBy having an online user-center capacity-building training you allow local governments, international cooperation and grassroot organizations to boost entrepreneurship and social cohesion through an energetic and motivational learning journey, actionable and easy to follow, focused on resilience and networking opportunities.\n\nWhy and when to use it.\nThis tool is useful to build a learning community among specific vulnerable populations that require business skills to strengthen their enterprises, either for profit or not. It is especially helpful when there is fragmentation among the host population and migrants/refugees’ population.\n\nKnown issues and troubleshooting.\nIt is not yet the best moment to make use of this tool if:\n\n  there is a digital gap in terms of kills or connectivity among the beneficiaries; in this case consider offering previous learning sessions for Zoom and the digital platform before the start of the learning journey, as well as short tutorials and dedicated ‘office hours’ for troubleshooting;\n  the partner is not considering reaching to the grassroot organizations that already work with the target population to ensure that expected participants are aware and register;\n  the partner can’t provide a repository for all resources (and video of the online sessions).\n\n\nContext.\nCREANDO was launched in 2021 with a small grant from the Swiss Development Cooperation to pilot projects on digitally enabled livelihoods among migrants. UNDP Peru had prior experience in deploying capacity-building initiatives for migrants, but with limited success (only 17 registered participants). The Peru Lab suggested using an ethnographic approach to design a project that considered entrepreneurs’ specific needs, time availability, and even their concerns regarding their migrant status (compared to Peruvian entrepreneurs). This user-centric approach yielded the expected results: over 600 registered participants in CREANDO’s first edition in 2021 and over 2100 registered participants in 2022. During the program, the beneficiaries attend and participate in a three-week training including business tools sessions, inspiration sessions, business clinics and networking sessions. CREANDO’s next steps include a festival scheduled for April 2024 and local innovation labs that address issues related to migration through a co-creation process between authorities and citizens.\n\nThe Peru Lab has used the CREANDO learning journey with Venezuelan entrepreneurs based in Peru, but it can also be adapted for young changemakers, social entrepreneurs, etc.\n\nCost to implement.\nTo carry out the online capacity-building training you will need an online meeting application subscription, such us Zoom/Typeform/Vimeo.\n\nTime\nYou will need around three months to plan and organized the training. Consider at least two months in advance to contact all potential experts and panelists, prepare materials (such as canvas) and to convene participants. It is recommended that the call for participants should be at least two weeks long, preferably relying on existing grassroots organizations, and should be sent at least 2 weeks before the start of the training if not more. The complete learning journey takes six weeks, with three 1.5-hour-long sessions per week.\n\nPeople.\nTo carry out the online capacity-building training, you will need a team of four people:\n\n  One person to lead the online class and a second one to cover the chat and address technical issues (open mics for example) at the online class. Depending on the thematic of the online class, it could be led by the Lab’s team, by academic experts or by consultants.\n  One person to oversee online reminders to ensure participants join the sessions.\n  One person to plan and coordinate with partners the call for participants and other logistics.\n\n\nFocal point.\nMariana Olcese\n\nCountry, year, and language.\nPeru, 2022, Spanish.\n\nResources.\n\n  Access link (Spanish) - Plataforma en línea del Laboratorio de Aceleración de Perú\n  Blog (English) - Migrant talent, pa’lante talent\n  Blog (English) - Creating Creando (Part 1): A learning community for migrant entrepreneurs is born\n  Blog (English) - Creating Creando (Part 2): The learning journey\n  Blog (English) - Creating Creando (Part 3): The results of our 2022 learning journey\n  Blog (Spanish) - Creando la nueva generación de talentos pa’lante\n  Template (Spanish) - Canvas Propósito\n  Template (Spanish) - Canvas Creando Valor: Diseña tu propuesta\n  Template (Spanish) - Canvas Creando tu modelo de negocio\n  Template (Spanish) - Canvas Creando conexión: Perfil de tus usuarios\n  Template (Spanish) - Canvas Creando una marca\n\n",
    tags: null,
    sdg: ["8 Decent Work And Economic Growth"],
    enablers: ["Digitalization"],
    signature_solutions: ["Poverty & inequality","Gender equality","Resilience"],
    rblac_priorities: ["Inclusive and Sustainable Growth","Resilient Sustainable Development and Green Recovery"],
    url: "/1.Poverty/1.4%20CapacitiesBuilding.html",
    id: 7
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("8 Decent Work And Economic Growth") < 0) {
        sdg.push("8 Decent Work And Economic Growth")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Digitalization") < 0) {
        enablers.push("Digitalization")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Poverty & inequality") < 0) {
        signature_solutions.push("Poverty & inequality")
    }

    if(signature_solutions.indexOf("Gender equality") < 0) {
        signature_solutions.push("Gender equality")
    }

    if(signature_solutions.indexOf("Resilience") < 0) {
        signature_solutions.push("Resilience")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Inclusive and Sustainable Growth") < 0) {
        rblac_priorities.push("Inclusive and Sustainable Growth")
    }

    if(rblac_priorities.indexOf("Resilient Sustainable Development and Green Recovery") < 0) {
        rblac_priorities.push("Resilient Sustainable Development and Green Recovery")
    }






index.add({
    title: "by using interactive and participatory discussions to change perspective",
    content: "Using interactive and participatory discussions to change perspective\n\nWhat it does.\nThis tool enables you to facilitate interactive and participatory discussions, an activity that invites participants to collaboratively construct knowledge around a specific topic. The goal is to provide information - based on the reading - generate reflection, change perspectives, and potentially influence behavior. The organizers of these gatherings choose the topic to discuss, and participants select what they want to read from a list of optional readings. The gatherings promote horizontal dialogue, fostering an equal and safe space for everyone to participate and reflect.\n\nValue proposition for the government/other partner.\nApplying interactive and participatory discussions enables stakeholders to:\n\n  Increase awareness involves exposing participants to different experiences and viewpoints, prompting them to reconsider their own perspectives and behaviors.\n  Develop empathy through open dialogue, participants have the chance to empathize with other´s viewpoints, experiencing a deeper understanding of the impact of their own actions.\n  Ownership of change is more likely when participants actively contribute to discussions, as they feel responsible for and committed to altering their perspectives and behaviors.\n  Participatory discussions promote a cultural shift when groups collectively agree on the need for change and actively discuss strategies, fostering a shared sense of purpose.\n\n\nWhy and when to use it.\nThis tool empowers stakeholders to reshape participants’ perspectives on a specific topic, potentially prompting behavioral changes when the process is sustained over time, coupled with a strategic approach to acting. The tool is user-friendly, cost-effective, and yields results in the short term, making it applicable for any stakeholders. The guidelines for this tool are currently in Spanish and require translation.\n\nKnown issues and troubleshooting.\nTo use interactive and participatory discussions might not be the best approach if:\n\n  Stakeholders and participants can’t commit to sustaining a weekly discussions;\n  Stakeholders don’t have a broader strategy to raise awareness for the topic of their interest of and promote a change in perspective among the participants.\n\n\nContext.\nIn the framework of “Spotlight Initiative” which is a joint program of the European Union and the United Nations, with the goal of eliminating all forms of violence against women and girls in Member States by the year 2030. The execution of this initiative is coordinated by United Nations agencies: UN Women, the United Nations Population Fund (UNFPA), and UNDP, in collaboration with a few public institutions. As part of this initiative, we are implementing an intervention called “Brave Schools” in the educational system. The aim is to assess whether interactive and participatory discussions can lead to changes in perspective and, subsequently, in behavior regarding gender-based violence and discrimination among students.\n\nWe created a safe space for dialogue and reflection on gender-based violence and discrimination within schools as a crucial mechanism to address this issue. Every week, adolescents gathered with their peers and a facilitator to share thoughts and reflections on gender roles and stereotypes based on a selected reading for the week. The exercise of engaging in collective dialogue and reflection resulted in a shift in perspective among students, as gender social norms were critically analyzed and challenged.\n\nCost to implement.\nTo hire a person responsible for organizing, convening, and implementing interactive and participatory discussions, a budget ranging from USD 4,800 to 7,200 will be required, depending on the timeframe.\n\nTime.\nTo convene and implement interactive and participatory discussions, it is recommended that the interactions with the participants last for a period of 4 to 6 months.\nPeople.\nTo use this tool the following team members will be required:\n\n  A person who pitches the methodology to stakeholders, emphasizing the transformative power of dialogue and discussions as tools to instigate a change in perspective and foster awareness. (UNDP in-kind contribution);\n  A person responsible for managing all logistics and coordinating the implementation of the innovation process.\n\n\nFocal point.\nAna M. Grijalva\n\nCountry, year, and language.\nEcuador, 2022-2023, Spanish\n\nResources.\n\n  Report (Spanish) – Informe de resultados\n  Report (Spanish) – Nota Metodológica\n  Report (Spanish) – Estrategia de sostenibilidad y escalamiento\n  Manual (Spanish) – Guía práctica de implementación\n\n",
    tags: null,
    sdg: ["5 Gender Equality","10 Reduce Inequalities","16 Peace Justice And Strong Institutions"],
    enablers: null,
    signature_solutions: ["Governance","Resilience","Gender equality"],
    rblac_priorities: ["Equity and inclusion"],
    url: "/2.Gender/2.1%20ParticipatoryPerspective.html",
    id: 8
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("5 Gender Equality") < 0) {
        sdg.push("5 Gender Equality")
    }

    if(sdg.indexOf("10 Reduce Inequalities") < 0) {
        sdg.push("10 Reduce Inequalities")
    }

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }


//Iterate through the Enablers


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }

    if(signature_solutions.indexOf("Resilience") < 0) {
        signature_solutions.push("Resilience")
    }

    if(signature_solutions.indexOf("Gender equality") < 0) {
        signature_solutions.push("Gender equality")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Equity and inclusion") < 0) {
        rblac_priorities.push("Equity and inclusion")
    }






index.add({
    title: "by building citizens' digital security capacities",
    content: "Building citizens’ digital security capacities.\n\nWhat it does.\nThe Digital Security MOOC allows you to strengthen the capacities of citizens, as internet users, to identify digital risks related to privacy and security during job hunting. The course is free and consists of four modules, which take around 8 hours to complete.\n\nValue proposition for the government/other partner.\nBy having a digital security MOOC, national and local governments can increase digital rights awareness and promote basic privacy and security tools knowledge. This tool is an introduction, not only to navigation protection, but also opens the reflection around privacy and digital rights.\n\nWhy and when to use it.\nThe course is in Spanish and applicable to any Spanish-speaking country. It is targeted to all internet users, from teenagers to the elderly population; however, it has a gender approach, considering that women are specially targeted with malicious or fraudulent content.\n\nKnown issues and troubleshooting.\nIf citizens don’t have access to cellphones or computers and to internet, it is not yet the best moment to make use of this tool.\n\nContext.\nThese resources emerged in 2020, amid the pandemic, as internet and social network usage surged, particularly among individuals in the informal sector who rely on digital platforms for economic activities. Through workshops and dialogues with young people, it was observed that women encountered digital risks while seeking employment online or engaging in work-related activities, rendering them vulnerable to fraudulent clients or sexual exploitation.\n\nThe course is available on the La Libre Tecnologías Comunitarias website and can be accessed permanently. La Libre is a non-profit collective project that originated in 2014, aiming to provide accessible IT infrastructure for human and environmental rights defenders, as well as social justice and equality advocates. Their work is grounded in open-source technologies and primarily focuses on Ecuador, although they also offer software and assistance to numerous organizations across Latin America and the Caribbean.\n\nAlthough you can register for the course at any time, it’s advised that you periodically call for participants and monitor the results of the calls. To date, we have conducted two monitored cohorts of students, one in 2020 and another in 2023.\n\nCost to implement.\nTo launch a new monitored call for the course incurs no cost; however, you will need a budget ranging from USD 200 to USD 500 for advertising on social networks to reach the targeted audience. Additionally, if the monitoring activities of the course cannot be covered by the Lab’s team, then an additional USD 500 will be needed to hire a consultant.\n\nTime\nTo launch a new monitored call for the course, you need to allocate around one month for coordinating with La Liebre through Ecuador’s UNDP country office and inviting participants to sign up for the course. The call for participants should be made at least three weeks before the start of the course.\n\nPeople.\nTo launch a new call for the course, you need one person to monitor responses and to process the final survey results.\n\nFocal point.\nPaulina Jiménez\n\nCountry, year, and language.\nEcuador, 2023, Spanish.\n\nResources.\n\n  Access link (Spanish) – Herramientas para la seguridad digital en el uso de internet\n\n",
    tags: null,
    sdg: ["5 Gender Equality","10 Reduce Inequalities","16 Peace Justice And Strong Institutions"],
    enablers: ["Digitalization"],
    signature_solutions: ["Gender equality"],
    rblac_priorities: ["Equity and inclusion"],
    url: "/2.Gender/2.2%20DigSecurityMOOC.html",
    id: 9
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("5 Gender Equality") < 0) {
        sdg.push("5 Gender Equality")
    }

    if(sdg.indexOf("10 Reduce Inequalities") < 0) {
        sdg.push("10 Reduce Inequalities")
    }

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Digitalization") < 0) {
        enablers.push("Digitalization")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Gender equality") < 0) {
        signature_solutions.push("Gender equality")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Equity and inclusion") < 0) {
        rblac_priorities.push("Equity and inclusion")
    }






index.add({
    title: "through startups' accelerators",
    content: "Startup accelerator program for women’s financial inclusion\n\nWhat it does.\nThis program enables you to identify startups for women’s financial inclusion through a national call, and subsequently rank and select them to strengthen their business models, thus allowing them to scale up their solutions and enhance their impact. As part of the strengthening process, selected startups are connected with technical support and potential investors. Additionally, relevant stakeholders from the financial ecosystem participate in the selection process to become acquainted with the new startups proposals.\n\nValue proposition for the government/other partner.\nBy having a startup accelerator program for women’s financial inclusion, you will enable the financial ecosystem to grow, and more women will have access to alternative financial services. It would be beneficial to ally with a national (public or private) partner focused on women’s empowerment to align the call for startups with the demands of the ecosystem and to enhance the reach of the program.\n\nWhy and when to use it.\nThis tool is most useful when a significant number of startups (a critical mass) offer solutions for women’s financial inclusion, and when there exists a supportive ecosystem for the growth of such startups, in other words the ecosystem provides the services and infrastructure needed for the development of startups, including specialized incubators, investors, funds, and other resources. This ecosystem includes investors who are keen on backing digital gender-based solutions and a private sector that is interested in integrating these solutions into their businesses.\n\nKnown issues and troubleshooting.\nIf a gender-focused approach is not a government priority, or if there have been very few activities or interventions focused on women’s financial inclusion, it may not be the right time to implement this methodology. For the sustainability and scalability of strengthened startups, it is crucial that government and other key ecosystem stakeholders have a genuine interest in working on financial inclusion. If these conditions are not met, a preliminary stage is necessary to raise awareness about the importance of a gender-focused approach for sustainable and inclusive development and to identify key stakeholders for developing the ecosystem.\n\nContext\nIn early 2022, we identified certain conditions within the ecosystem that prompted us to consider how to support startups with digital solutions for women’s financial inclusion. On one hand, UN Women presented some studies on the financial inclusion of women in Bolivia. Additionally, the Chamber of Fintech had recently been established, along with an initial startup map. Furthermore, a group of angel investors had spent several years identifying startups with significant investment potential. With these circumstances in mind, our Lab, in partnership with UN Women, launched a national initiative called the “Women’s Financial Inclusion Lab,” aimed at startups offering innovative digital solutions. The selection of the most promising startups was carried out by a committee comprising representatives from financial institutions, NGOs, donors, and investors, serving as a mechanism to connect startups with the broader ecosystem.\n\nAs a result, the business models of two startups were strengthened through the expertise of both international and national experts. These two startups have since successfully implemented their models, thereby enhancing their impact on the financial inclusion of women.\n\nCost to implement.\nTo implement a startup accelerator program for women’s financial inclusion, you will need a budget between USD 2.000 and 3.000, which will be used to hire a person to be responsible for the implementation of the call and to design communication materials about the call and the results. You will need and extra budget ranging from USD 7.000 to USD 10.000 per startup to provide technical support to strengthen their business model.\n\nTime\nPlanning the process, identifying key stakeholders, launching the national call, selecting the startups, hiring, and providing the technical support will require approximately 6 to 9 months. From this period, between 3 to 6 months correspond to the technical support provided to 1) strengthen the business model of the startup and 2) to prepare the startup to pitch to investors.\n\nPeople.\nTo implement this tool, the following team members will be needed:\n\n  A person to oversee logistical processes, which includes managing the call, coordinating the selection committee, facilitating startup pitches, and overseeing the selection process.\n  A person to define the Terms of Reference (ToRs) for strengthening the selected startups and to develop progress indicators aimed at enhancing their impact.\n\n\nFocal point.\nPatricia A. Choque\n\nCountry, year, and language.\nBolivia, 2022 - ongoing, Spanish\n\nResources.\n\n  Manual (Spanish) – Criterios de selección de startups\n  Template (Spanish) – Convocatoria para startups\n\n",
    tags: null,
    sdg: ["5 Gender Equality","10 Reduce Inequalities"],
    enablers: ["Digitalization"],
    signature_solutions: ["Gender equality","Poverty & inequality"],
    rblac_priorities: ["Equity and inclusion","Inclusive and Sustainable Growth"],
    url: "/2.Gender/2.3%20AcceleratorFI.html",
    id: 10
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("5 Gender Equality") < 0) {
        sdg.push("5 Gender Equality")
    }

    if(sdg.indexOf("10 Reduce Inequalities") < 0) {
        sdg.push("10 Reduce Inequalities")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Digitalization") < 0) {
        enablers.push("Digitalization")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Gender equality") < 0) {
        signature_solutions.push("Gender equality")
    }

    if(signature_solutions.indexOf("Poverty & inequality") < 0) {
        signature_solutions.push("Poverty & inequality")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Equity and inclusion") < 0) {
        rblac_priorities.push("Equity and inclusion")
    }

    if(rblac_priorities.indexOf("Inclusive and Sustainable Growth") < 0) {
        rblac_priorities.push("Inclusive and Sustainable Growth")
    }






index.add({
    title: "through the co-creation and mapping of scientific solutions with citizens",
    content: "A co-created citizen science solution mapping\n\nWhat it does.\nThis co-created citizen science solution mapping allows you to:\n\n  Acknowledge the social importance of participation in citizen science initiatives, covering a wide and heterogeneous range of stakeholders.\n  Identify, characterize, and make visible existing initiatives and shared patterns to produce inputs for public policies, promoting a bottom-up approach and new coordination possibilities.\n  Promote the production of evidence on the initiatives developed to create products for different purposes that may result in digital repositories of different types of information, collaborative maps, materials to work in the classroom, among others.\n\n\nThe data is collected through the leaders of each of the science initiatives by cards that include details of the solution organized by predefined categories, systematizing the information, and enabling comparisons.\n\nValue proposition for the government/other partner.\nThis methodology will allow your governmental partner to gain a clear view of the ecosystem of people-powered solutions that emerge in response to specific development challenges. This paves the way for better public policymaking. With this tool, your governmental partner gains the ability to pinpoint essential collaborators for tackling development issues. Additionally, it helps identify available resources, patterns, spot any gaps, and uncover success stories that are ready to be scaled.\n\nRegarding other partners, such as leaders of grassroots initiatives, this tool allows them to gain a better understanding of who else is working on the same issues. This tool facilitates the formation of alliances and networking opportunities, making it easier for them to connect and work together effectively.\n\nWhy and when to use it.\nThis tool is most useful when there is a gap in the information available regarding citizen science projects due to a lack of acknowledgement of people-powered initiatives. Moreover, since the mapping efforts involve establishing a direct contact with the citizen science initiatives, this model is most useful when you not only are interested in gathering data but also in fostering citizen participation and in creating community.\n\nKnown issues and troubleshooting.\nThis tool may not be the most suitable choice for you if: 1) your country, region, or community already has an initiative that documents people-powered solutions, 2) you do not have supportive partners to assist you with the co-design of the data gathering instruments, and later on, the co-systematization of the information, or 3) you have difficulties for, or no have the means to, bonding with the citizen science initiatives.\n\nContext.\nWithin its citizen science initiative, the Argentina Accelerator Lab collaborated with the national Ministry of Science, Technology, and Innovation (MINCYT, by its Spanish acronym), utilizing this tool to map citizen science initiatives. In 2021, the first edition of this solutions mapping effort was published, encompassing information from 30 projects. This number increased to 55 in the second edition of the mapping. The forthcoming edition, scheduled for publication at the end of 2023, will include information on 100 projects. Moreover, these solutions mapping efforts not only contributed to the development of a new national federal policy aimed at promoting citizen science initiatives but also had a transformative impact on the overall citizen science ecosystem.\n\nCost to implement.\nYou will need a budget between USD 4,000 and USD 6,000 to hire the team needed to plan, design the deliverables, and implement the project.  The AccLab has already created a visual identity to complement the methodology, and it’s accessible for anyone looking to replicate this tool. Thus, the design of the visual aspects for the project is an item you can leave out of your budget.\n\nTime\nThe time required to implement this tool can vary depending on several factors such as the desired scope of your solutions mapping, the accessibility of information, and the availability of the mapping team’s time. Possibly, the iteration process might be the most time-consuming aspect. The effort for mapping 30 to 50 grassroot solutions could take between 6 to 8 months.\n\nPeople.\nYour team may consist of 3 members with the following roles:\n\n  A project coordinator who advocates for the initiative with partners and in the best-case scenario forms a joint team with a public institution.\n  A collaborator for managing all logistics and coordinating the implementation process\n  A person responsible for style editing and English translation (if it is not the national language).\n\n\nFocal point.\nMaría Verónica Moreno\n\nCountry, year, and language.\nArgentina, 2021 – ongoing, Spanish and English.\n\nResources.\n\n  Report (English) – Citizen Science. Solutions Mapping. Second Edition\n  Report (Spanish) – Ciencia Ciudadana Mapeo de iniciativas nacionales. Segunda Edición\n  Report (English) – Lessons Learned from the First Edition of the Environmental Citizen Science Solutions Mapping\n  Report (Spanish) – Aprendizajes de la primera edición del mapeo en ciencia ciudadana ambiental\n  Blog (Spanish) – Ciencia Ciudadana Ambiental:  Mapeo de iniciativas nacionales.\n  Report (Spanish) – Ciencia Ciudadana Mapeo de iniciativas nacionales. Primera Edición\n  Blog (English) – Environmental citizen science in Argentina: mapping as an enhancement.\n  Blog (Spanish) – Ciencia ciudadana ambiental en Argentina: el mapeo como puesta en valor.\n  Blog (English) – People are not datasets. Citizen science and collective intelligence.\n  Blog (Spanish) – Las personas no son bases de datos. Ciencia ciudadana e inteligencia colectiva.\n\n",
    tags: null,
    sdg: ["13 Climate Action","14 Life Below Water","15 Life On Land"],
    enablers: ["Strategic innovation"],
    signature_solutions: ["Environment","Resilience"],
    rblac_priorities: ["Resilient Sustainable Development and Green Recovery"],
    url: "/4.Environment/4.1%20ScienceMap.html",
    id: 11
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("13 Climate Action") < 0) {
        sdg.push("13 Climate Action")
    }

    if(sdg.indexOf("14 Life Below Water") < 0) {
        sdg.push("14 Life Below Water")
    }

    if(sdg.indexOf("15 Life On Land") < 0) {
        sdg.push("15 Life On Land")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Strategic innovation") < 0) {
        enablers.push("Strategic innovation")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Environment") < 0) {
        signature_solutions.push("Environment")
    }

    if(signature_solutions.indexOf("Resilience") < 0) {
        signature_solutions.push("Resilience")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Resilient Sustainable Development and Green Recovery") < 0) {
        rblac_priorities.push("Resilient Sustainable Development and Green Recovery")
    }






index.add({
    title: "throught a crowdsourced app for environmental monitoring",
    content: "A crowdsourced app for environmental monitoring\n\nWhat it does.\nThis crowdsourced app to monitor the general situation of aquatic ecosystems allows you to collaboratively generate data and create a space where citizens can express their concerns and opinions about the environmental situation. The app is aimed at evaluating the ecosystem making users answer prompts like “Do you see any of these animals?”, “Is there garbage on the riverbank?”, “Is there garbage in the water?”, “Does the water smell bad?”. Based on the responses, the app calculates an environmental index (with values between 0 and 100).\n\nValue proposition for the government/other partner.\nBy having a crowdsourcing app for environmental monitoring, you will enable the government to generate data collaboratively, allowing it to reach remote areas and foster its understanding on the ecosystems with the participation of citizens who have first-hand knowledge. The creation and continuous enhancement of this data allows the government to engage in evidence-based policymaking and policy innovation, generating valuable solutions for the participative conservation and protection of water bodies.\n\nWhy and when to use it.\nThis tool is most useful when there is a lack of systematic information on the aquatic ecosystems in your country, which results in poor environmental management, and there is a limited government presence in the targeted area.\n\nKnown issues and troubleshooting.\nIf there is a lack of 1) internet connectivity and/or lack of technological devices for citizens to use the app regularly or 2) lack of collaboration from government officials and volunteers to participate in the gathering of data and for fostering the use of the app, it would not be the best moment to make use of this tool yet.\n\nGovernment partners are also needed to better understand the needs and current situation of the aquatic ecosystems under monitoring, which helps you to evaluate any adjustments needed for creating the most suitable app possible. Work meetings and collective intelligence exercises can be conducted to engage government officials. Therefore, when governments do not have the means to actively participate in such activities, it might not be possible to reach the most successful implementation of this app.\n\nContext.\nIn the context of our solutions mapping initiative conducted in partnership with the Ministry of Science and Technology in 2022, we identified citizen science initiatives aimed at generating valuable evidence in areas such as flooding, bodies of water, and rainfall. Drawing inspiration from these initiatives, we developed (and tested) a collective monitoring app, enabling citizens, scientists, and the government to collaborate in monitoring aquatic ecosystems. Collaborating with three local governments in Buenos Aires—San Antonio de Areco, Mercedes, and Balcarce, Argentina—we initiated a small-scale experiment involving the development and implementation of the app. While visiting local lagoons or rivers, users can follow the app’s instructions, answering questions about their environment and providing photos of what they observe.\n\nCost to implement.\nThe development of the app will require hiring specialized technical services, which could amount to between USD 4,000 to USD 6,000. Additionally, you might consider adding a person responsible for the general direction of the project, including its reporting, which could add between USD 6,000 to USD 8,000 to your budget.\n\nTime\nThe design, planning and implementation of this tool could take from 6 to 8 months. The development of the app will not be time-consuming since it uses open-source code. There is no need to start from scratch. Besides the development of the app, the process might include meetings and collective intelligence activities, as well as interviews with key informants and government officials.\n\nPeople.\nA basic team for the implementation of this solution could include: 1) a person responsible for the general direction of the project, 2) and a person, or agency, in charge of the technical aspects of developing the app. Additionally, the collaboration with local governments officials and volunteers is fundamental.\n\nFocal point.\nLorena Moscovich\n\nCountry, year, and language.\nArgentina, 2022 – ongoing, Spanish and English.\n\nResources.\n\n  Report [English] - Environmental Citizen Science and its Effects on Participants, Governance, and Innovation. Evidence of Two Small-Scale Experiments.\n  Report [Spanish] – Los efectos de la ciencia ciudadana ambiental para los participantes, la gobernabilidad y la innovación. Evidencia de dos experimentos a pequeña escala.\n  Blog [English] – A simple solution for a complex problem: Citizen science, environmental policies and awareness.\n  Blog [Spanish] Una solución simple para un problema complejo: Ciencia ciudadana, conciencia y políticas ambientales.\n\n\n",
    tags: null,
    sdg: ["6 Clean Water And Sanitation","13 Climate Action","14 Life Below Water"],
    enablers: ["Strategic innovation","Digitalization"],
    signature_solutions: ["Environment","Governance"],
    rblac_priorities: ["Resilient Sustainable Development and Green Recovery"],
    url: "/4.Environment/4.2%20EnviromentMonitoringApp.html",
    id: 12
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("6 Clean Water And Sanitation") < 0) {
        sdg.push("6 Clean Water And Sanitation")
    }

    if(sdg.indexOf("13 Climate Action") < 0) {
        sdg.push("13 Climate Action")
    }

    if(sdg.indexOf("14 Life Below Water") < 0) {
        sdg.push("14 Life Below Water")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Strategic innovation") < 0) {
        enablers.push("Strategic innovation")
    }

    if(enablers.indexOf("Digitalization") < 0) {
        enablers.push("Digitalization")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Environment") < 0) {
        signature_solutions.push("Environment")
    }

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Resilient Sustainable Development and Green Recovery") < 0) {
        rblac_priorities.push("Resilient Sustainable Development and Green Recovery")
    }






index.add({
    title: "by prioritizing environmental interventions through a dynamic map",
    content: "Dynamic map for municipal environmental interventions’ prioritization\n\nWhat it does.\nThe dynamic map for environmental interventions allows you to 1) combine multiple geolocated municipal-level data layers using a suitability modeler and 2) prioritize municipal environmental interventions.\n\nValue proposition for the government/other partner.\nBy having a dynamic map of municipal environmental interventions, you will enable the Ministry of Environment and local government authorities to improve their data-driven decision-making capacities for monitoring and designing environmental practices and policies.\n\nWhy and when to use it.\nThis tool is most useful when (1) there is a commitment from central and local authorities to adopt an evidence-based approach into their decision-making processes and (2) there are municipal-level statistics available for a region of interest, including at least a municipal boundaries data layer, human development and multidimensional poverty indexes, populated areas estimates, rivers and micro rivers location, and illegal dumpsite locations (for a waste management focus).\n\nKnown issues and troubleshooting.\nIt is not yet the best moment to make use of the tool if:\n-(1) there aren’t enough municipal statistics available and/or their quality isn’t consistent;\n-(2) the government does not have a designated team that can partake on the design and implementation of the methodology;\n-and (3) the governmental team involved does not have the expertise to utilize GIS open or licensed software used to implement the methodology.\n\nContext.\nThe tool was developed through collaborative efforts involving the Ministry of Environment, UNDP Environment Program, and UNDP Accelerator Lab in Guatemala. The focus was on incorporating evidence-based decision-making methods to guide solid waste management efforts in a specific region. Following a needs assessment stage, and with the support of UNDP HQ GIS specialists, data layers, GIS software, and analysis methods were identified and tested. The outcome was a suitability modeler implemented in ArcGIS, utilizing municipal-level data layers. Currently, the data layers and analyses are in the process of being integrated into the National Information System for Climate Change.\n\nIn the latest version of the tool, the combined municipal-level data layers include the UNDP human development index, UNDP multidimensional poverty index, illegal dumpsites reported by the Ministry of Environment, populated areas estimations, rivers, and administrative boundaries.\n\nCost to implement.\nA budget between USD 3.000 and 4.000 will be required to implement the tool with open-source GIS software, and a budget between USD 5.000 and 6.000will be required to implement the tool with licensed GIS software.\n\nTime\nIt will take from 3 to 4 months to collect the information, design, and implement the tool.\n\nPeople.\nTo use this tool the following team members will be required:\n-One developer to prepare data layers and configure the suitability modeler in GIS open or licensed software.\n-One coordinator to interact with stakeholders, get insights such as the weights for each data layer to be used and user testing experience for improvements.\n\nFocal point.\nCarlos Mazariegos\n\nCountry, year, and language.\nGuatemala, 2023 - ongoing, Spanish\n\nResources\n-Report (Spanish) - UNDP HQ ITM &amp; Guatemala_Work Plan.\n\n-Dashboard (Spanish) - Prueba de concepto: Mapa Dinámico de Residuos y Desechos Sólidos en la Cuenca del Río Motagua.\n\n-Manual (English) - ArcGIS Pro, Suitability Modeler documentation.\n\n",
    tags: null,
    sdg: ["11 Sustainable Cities And Communities","12 Responsible Consumption And Production","13 Climate Action"],
    enablers: ["Digitalization"],
    signature_solutions: ["Environment","Resilience"],
    rblac_priorities: ["Resilient Sustainable Development and Green Recovery","Inclusive and Sustainable Growth"],
    url: "/4.Environment/4.3%20InterventionMap.html",
    id: 13
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("11 Sustainable Cities And Communities") < 0) {
        sdg.push("11 Sustainable Cities And Communities")
    }

    if(sdg.indexOf("12 Responsible Consumption And Production") < 0) {
        sdg.push("12 Responsible Consumption And Production")
    }

    if(sdg.indexOf("13 Climate Action") < 0) {
        sdg.push("13 Climate Action")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Digitalization") < 0) {
        enablers.push("Digitalization")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Environment") < 0) {
        signature_solutions.push("Environment")
    }

    if(signature_solutions.indexOf("Resilience") < 0) {
        signature_solutions.push("Resilience")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Resilient Sustainable Development and Green Recovery") < 0) {
        rblac_priorities.push("Resilient Sustainable Development and Green Recovery")
    }

    if(rblac_priorities.indexOf("Inclusive and Sustainable Growth") < 0) {
        rblac_priorities.push("Inclusive and Sustainable Growth")
    }






index.add({
    title: "by addressing local challenges through community systems thinking",
    content: "Community systems thinking for addressing local challenges.\n\nWhat it does.\nThis tool is designed for local governments to trigger sustained social change, with a focus on community systemic thinking. It utilizes different forms and scopes of systemic thinking applied at the local level to:\n\n  Provide new knowledge about municipal challenges from a systemic perspective through participatory processes with diverse groups of people, including the perspective of those in vulnerable situations or distant from government.\n  Identify existing efforts and leverage points to prioritize intervention areas.\n  Identify local actors linked to areas of opportunity for promoting development and building shared interests that incentivize collaboration.\n\n\nValue proposition for the government/other partner.\nBy having a community-led systems thinking tool for addressing Human Development Report (HDR) challenges, you will enable participants with a structured and holistic approach to understanding, analyzing, and solving complex problems associated with local challenges, supporting a civic space for effective, inclusive, and participatory governance. The value proposition of such a tool lies in its ability to enhance decision-making, problem-solving, and overall effectiveness in addressing complex challenges, aligning with UNDP’s governance signature solution and SDG 16: building effective, accountable, and inclusive institutions at all levels.\n\nWhy and when to use it.\nThis tool is most useful when local governments face development challenges with little clarity on how to address them or where to start, when existing efforts seem ineffective, and when opposed perspectives stall policy design or implementation.\n\nKnown issues and troubleshooting.\nIf there is a lack of community engagement, open interest from authorities, and commitment to follow up on agreements derived from a participatory exercise, it’s probably not the best time to make use of this tool. In such cases, teams should work towards promoting the value of participatory governance with local authorities and the community.\n\nContext.\nUNDP Mexico has been publishing Human Development Reports periodically since 2003. These publications have enriched public discourse on topics such as gender gaps in human development, inequality, and social mobility in the country, as well as equity in the exercise of public spending.\n\nIn 2022, UNDP in Mexico released the Municipal Human Development Report 2010-2020, aiming to update data on the Municipal Human Development Index (HDI) and the Municipal Functional Capabilities Index (ICMF). The report includes an analysis that serves as a diagnosis of the human development situation in the country’s municipalities, identifying trends and providing recommendations to strengthen policies and public programs at all three levels of government.\n\nIn the Accelerator Lab, we seized this opportunity to visit some municipalities in the country. The goal was to learn more about the local experience and perspectives regarding the development challenges faced by communities, as well as the views of public servants in addressing these challenges. This was done with the aim of strengthening networks of local actors interested in promoting the Agenda2030 and creating opportunities for social change at the local level.\n\nCost to implement.\nThis is a very cost-effective solution that, without considering travel costs, can be funded with less than USD 10.000.\n\nTime\nWhile the community workshop is designed to happen in 3 days, considering two months to implement the solution fully, including a month before hand to connect to local actors and prepare the ground and a month afterwards to systematize information and create products to return to the community.\n\nPeople.\nThe implementation of this tool involves the participation of the following groups:\n\n  Facilitating team: A group of 3-5 individuals with skills to moderate conversations and create a safe, dynamic, and inclusive participatory space.\n  Local connection: Individuals identified as local leaders with a good understanding of the context, territory, and its people. This group is particularly crucial when facilitators are not from the community. They assist in identifying and inviting a diverse and gender-balanced group of participants.\n  Core participants: Initially formed by representatives from various community groups to trigger systemic change, the core group is perhaps the most crucial, as most activities are designed to take place within this group. The group should be intersectoral, diverse, and inclusive of all voices within the human collective being addressed. A manageable size for the facilitation team (20-30 people are recommended) is ideal, with representation from all groups related to the issue to be addressed. This ensures a richer understanding of the problem and the development of more suitable pathways for change. It is advisable to include community leaders, local and state governments, civil society, academia, and other sectors present in the locality. Additionally, individuals who may not reside in the community but have an impact within it, such as representatives from state or federal governments or members of NGOs operating in the area, can be integrated. Moreover, it is important to strive for a gender-balanced composition from an inclusive perspective.\n  Extended community: This refers to the total population of the community that is not part of the core group. Some activities are designed for open participation by anyone within the community to inform about the process and offer extra insights and feedback. For example, to include those who couldn’t participate in the core group due to other obligations or other groups like young people and children.\n\n\nFocal point.\nJorge Munguia\n\nCountry, year, and language.\nMexico, 2022, Spanish\n\nResources.\n\n  Blog (Spanish) – De mochilazo con PNUD: en búsqueda de nuevas rutas de soluciones colaborativas para el desarrollo humano\n  Report (Spanish) – Informe de Desarrollo Humano Municipal 2010-2020: una década de transformaciones locales en México\n  Report (Spanish) – De mochilazo con PNUD\n\n",
    tags: null,
    sdg: ["16 Peace Justice And Strong Institutions"],
    enablers: ["Strategic innovation"],
    signature_solutions: ["Governance","Resilience"],
    rblac_priorities: ["Equity and inclusion","Effective Governance"],
    url: "/5.Resilience/5.1%20CommunitySysThinking.html",
    id: 14
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Strategic innovation") < 0) {
        enablers.push("Strategic innovation")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }

    if(signature_solutions.indexOf("Resilience") < 0) {
        signature_solutions.push("Resilience")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Equity and inclusion") < 0) {
        rblac_priorities.push("Equity and inclusion")
    }

    if(rblac_priorities.indexOf("Effective Governance") < 0) {
        rblac_priorities.push("Effective Governance")
    }






index.add({
    title: "through innovation opportunities workshop",
    content: "Innovation opportunities workshop\n\nWhat it does.\nThis innovation opportunities workshop allows you to:\n\n  build a community among people who don’t know each other but have a common role/interest related to innovation;\n  identify main expectations and challenges on a specific subject related to innovation;\n  identify next steps for the team in charge of the project to promote innovation.\n\n\nValue proposition for the government/other partner.\nBy having an innovation opportunities workshop, you will enable the national and local government, academia and private sector to 1) articulate actors who don’t know each other or might not be working together yet; 2) brainstorm and prioritize their main aspirations, opportunities and obstacles.\n\nWhy and when to use it.\nThis tool is most useful for the initial stages of community building when actors don’t know each other and/or when you need to understand whether actors within an ecosystem are agreeing or disagreeing on the main priorities and obstacles to development.\n\nKnown issues and troubleshooting.\nThe tool works for in-person meetings in rooms with enough space to move around but does not work well with hybrid groups. Location with enough space to move around and set a table for each group might be needed.\n\nContext.\nSome parts of this tool were developed during the RBLAC Accelerator Labs retreat, particularly the icebreaker section, and the Innovation Week organized by the National Council on Science and Technology, where the Lab conducted a workshop to bring together the innovation ecosystem. Later, it was used and perfected with the coffee producers’ ecosystem in two separate moments (in Lima and outside of Lima) and with local authorities participating in the ‘Innova tu Mercado’ project designed and implemented by UNDP Peru.\n\nCost to implement.\nTo implement the tool, you will need a budget around USD 150 to buy the materials needed for the workshop such as post-its, sharpies, flipcharts, etc. Additionally, if the activities required to prepare and execute the workshop can’t be carried out by the Lab’s members, then you will need an extra budget between USD 800 and UD 1500 to hire a consultant.\n\nTime\nTo implement this tool, you will need around three weeks. Consider at least two weeks for planning and to send out the call for participants. The workshop can be put together in a day or two in advance if actors have been convened for at least 3 hours for an in-person meeting. Systematizing results takes an additional day.\n\nPeople.\nTo carry out the innovation opportunities workshop you will need three people:\n\n  one person to plan, prepare and lead the dynamics at the workshop;\n  one person to set up the materials for the workshop and helps around the tables during the sessions;\n  one person to advocate and coordinate with partners the call of participants.\n\n\nFocal point.\nGabriel Lama\n\nCountry, year, and language.\nPeru, 2023, Spanish.\n\nResources.\n\n  Report (Spanish) - Identificación de oportunidades de innovación: Cafés del Perú\n  Report (Spanish) - Identificación de oportunidades de innovación: Mercados innova\n  Report (Spanish) - Identificación de oportunidades y próximos pasos en el ecosistema local de cuidados\n\n",
    tags: null,
    sdg: ["16 Peace Justice And Strong Institutions"],
    enablers: ["Strategic innovation"],
    signature_solutions: ["Governance","Resilience"],
    rblac_priorities: ["Equity and inclusion","Effective Governance"],
    url: "/5.Resilience/5.2%20InnovationWorkshop.html",
    id: 15
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Strategic innovation") < 0) {
        enablers.push("Strategic innovation")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }

    if(signature_solutions.indexOf("Resilience") < 0) {
        signature_solutions.push("Resilience")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Equity and inclusion") < 0) {
        rblac_priorities.push("Equity and inclusion")
    }

    if(rblac_priorities.indexOf("Effective Governance") < 0) {
        rblac_priorities.push("Effective Governance")
    }






index.add({
    title: "by using design thinking to design public products or services",
    content: "Using design thinking to design public products or services\n\nWhat it does.\nThis tool enables you to apply design thinking, one of the most used methods for public innovation, to design or improve public products or services in collaboration with users, particularly those from vulnerable contexts. Design thinking is a user-centered approach that prioritizes placing the user at the center of the design process. This is because the individuals who will ultimately use the product or service are the ones who best understand the necessary features to meet their needs, desires, and expectations.\n\nValue proposition for the government/other partner.\nApplying design thinking enables national and local governments to:\n\n  strengthen their capacities in public innovation through hands-on experience;\n  ensure that the responses are genuinely relevant and effective by gaining a deep understanding of the specific needs of users;\n  design cost-effective solutions;\n  and foster closer citizen-government relationships by establishing a collaborative and co-creative work routine.\n\n\nWhy and when to use it.\nTo use design thinking is always beneficial to promote public innovation and effective public services and products. Whether the government is new to public innovation or has extensive experience, including users in the design process is always valuable. The design thinking guidance for public products or services needs translation in the official language from Spanish.\n\nKnown issues and troubleshooting.\nTo use design thinking for designing public products or services might not be the best approach if:\n\n  the government does not have a designated team or other resources to implement the solutions obtained from the design thinking method and sustain these solutions over time;\n  the governmental team involved in the process does not have the means to include users as part of the team and foster a working relationship based on trust, commitment, and respect.\n\n\nContext.\nAs a member of the Open Government Partnership (OGP), Ecuador is committed to have a more open and participatory government. In this line, as part of the OGP Action Plan 2019-2022 it aimed to have an Innovation Citizen Lab for the first time in the country. UNDP´s Acc Lab played a key role offering in 2022 technical assistance to design, implement and operate the Citizen Lab called Thinkia. The Secretariat of Higher Education and Innovation of Ecuador has the lead of this Lab and runs it along with other 7 actors from the academia (2), civil society organizations (2), other public institutions (2), and cooperation sector (UNDP). The government uses a shared and decentralized governance model for Thinkia: citizen lab to include other actors as part of the management team and decision-making process.\n\nOne of the activities in Thinkia: Citizen Lab’s work plan for 2023 is to support local governments and other public institutions in implementing public innovation processes. In this regard, the Municipal Unit San José of Quito decided to strengthen its services for individuals experiencing homelessness, with a focus on finding solutions through public innovation processes. The UNDP Accelerator Lab, as part of Thinkia’s management team, provided support to the Municipality of Quito in enhancing the capacities and knowledge of its officials in public innovation and in implementing a pilot project aimed at improving services for people experiencing homelessness.\n\nCost to implement.\nTo hire a person responsible for managing all logistics and coordination, a budget of between USD 4,500 and 6,500 will be required.\n\nTime\nTo design a public product or service using design thinking alongside public counterparts and including the end-user, it will take 6 to 8 months.\n\nPeople.\nTo use this tool the following team members will be required:\n\n  A person who pitches key ideas to local governments or other public institutions, promoting the implementation of public innovation processes and persuading counterparts to seek Thinkia Citizen Lab’s support and guidance. (UNDP in-kind contribution).\n  A person responsible for managing all logistics and coordinating the implementation of the innovation process.\n\n\nFocal point.\nAna M. Grijalva\n\nCountry, year, and language.\nEcuador, 2022-2023, Spanish\n\nResources.\n\n  Manual (Spanish) – Guía practica para el diseño de productos y servicios públicos a través del Pensamiento de Diseño\n  Blog (English) – Leaving no one behind: redesigning municipal services\n  Slideshow (Spanish) – Guía Paso a Paso de la Implementación de Pensamiento de Diseño\n\n\n",
    tags: null,
    sdg: ["8 Decent Work And Economic Growth","16 Peace Justice And Strong Institutions"],
    enablers: ["Strategic innovation"],
    signature_solutions: ["Governance","Poverty & inequality"],
    rblac_priorities: ["Effective Governance","Equity and inclusion"],
    url: "/6.Governance/6.1%20PublicServicesDT.html",
    id: 16
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("8 Decent Work And Economic Growth") < 0) {
        sdg.push("8 Decent Work And Economic Growth")
    }

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Strategic innovation") < 0) {
        enablers.push("Strategic innovation")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }

    if(signature_solutions.indexOf("Poverty & inequality") < 0) {
        signature_solutions.push("Poverty & inequality")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Effective Governance") < 0) {
        rblac_priorities.push("Effective Governance")
    }

    if(rblac_priorities.indexOf("Equity and inclusion") < 0) {
        rblac_priorities.push("Equity and inclusion")
    }






index.add({
    title: "by mapping digital capacities for municipalities",
    content: "Mapping digital capacities of municipalities\n\nWhat it does.\nThis tool enables you to identify municipalities that are well-prepared to adopt new technologies, including digital tools, online platforms, and software systems, as well as those categorized as early adopters, followers, and those lagging. The methodology involves assessing compliance with fundamental requirements for the successful implementation of new technologies through cluster analysis, using information collected from municipalities via an online survey. Decision-makers can then use the visualized results in a dashboard to implement various strategies aimed at enhancing digital transformation in municipalities based on their readiness.\n\nValue proposition for the government/other partner.\nBy assessing the readiness of municipalities to adopt new technology, the government will be able to develop effective digital strategies to enhance the success of implementation.\n\nWhy and when to use it.\nThis tool is most useful when the government is in the initial stages of planning the implementation of new technology across a large group of institutions, such as municipalities. It offers the opportunity to create customized strategies for each identified group of municipalities based on their readiness levels to adopt new technology. Utilizing this methodology necessitates a comprehensive understanding that any significant improvement in the capabilities of municipalities through technology implementation requires an assessment of their current capabilities and the development of customized strategies to ensure genuine access and utilization of new technology, thus maximizing the benefits of its implementation.\n\nKnown issues and troubleshooting.\nIt is better not to implement the initiative if: a) there is no full agreement from the representation of public institutions to participate in the survey; this will ensure full participation; 2) if the government does not have a designated team or other resources to implement the survey and analyze the results (for example, someone in the government team responsible for monitoring institutions for form completion, data cleaning, analysis, and dashboard design); 3) if there is no specific digital system or tool that can be implemented with differentiated strategies based on capabilities to apply the results of this exercise.\n\nContext.\nThe Bolivian Municipalities Associations Federation (FAM, abbreviated in Spanish) in collaboration with UNDP Country Office, had planned to implement a website tool aimed at providing detailed information to all municipalities to enhance their planning processes. Recognizing that the effective implementation of this tool depended on various requirements, including both technical prerequisites and the competencies of municipal staff, we realized that the tool might not yield the same benefits for all municipalities. There was a particular concern about its usage in rural areas. Consequently, we proposed an assessment of the capabilities of municipalities to tailor strategies accordingly.\n\nAs a result, FAM conducted survey with municipalities, followed by a cluster analysis. This analysis identified four distinct clusters, each representing different readiness levels. Factors considered included stable internet access, the availability of required computer equipment, the presence of staff with expertise in statistics, and their ability to utilize this information effectively in the planning processes.\n\nCost to implement.\nTo implement this tool, you would need a budget of between USD 2.000 and USD 4.000, which will be used to hire a person to implement the methodology, which involves analyzing the results and designing the dashboard.\n\nTime\nGathering information from municipalities, analyzing it, and developing a dashboard will take 2 to 3 months, depending on the quantity of responses and the response time.\n\nPeople.\nTo implement this tool, the following team members will be needed:\n\n  A person responsible for identifying the necessary information to collect from municipalities, designing the form, analyzing the gathered information, and designing the dashboard.\n  A person responsible for distributing the forms to the municipalities and monitoring their progress.\n\n\nFocal point.\nPatricia A. Choque\n\nCountry, year, and language.\nBolivia, 2023, Spanish\n\nResources.\n\n  Manual (Spanish)- Nota de concepto\n  Manual (Spanish) – Ficha técnica\n  Blog (Spanish) – Mapeo de capacidades digitales para el desarrollo municipal\n  Dashboard (Spanish) – Infografía mapeo de capacidades municipales para adoptar soluciones digitales\n\n",
    tags: null,
    sdg: ["16 Peace Justice And Strong Institutions"],
    enablers: ["Digitalization"],
    signature_solutions: ["Governance"],
    rblac_priorities: ["Effective Governance"],
    url: "/6.Governance/6.2%20DigitalMunicipalMap.html",
    id: 17
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Digitalization") < 0) {
        enablers.push("Digitalization")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Effective Governance") < 0) {
        rblac_priorities.push("Effective Governance")
    }






index.add({
    title: "by using Natural Languague Processing Models for building consensus",
    content: "A Natural Language Processing Model for building consensus\n\nWhat it does.\nThis tool uses ChatGPT to build a Natural Language Processing (NLP) model useful for analyzing and highlighting common elements between different political speeches. For example, it can identify the frequency and correlation of themes across various political ideological options. Furthermore, the tool can generate artificial speeches that emphasize the factors of consensus within a society’s political landscape.\n\nValue proposition for the government/other partner.\nThis tool empowers governments and other stakeholders to generate evidence in support of initiatives aimed at achieving political consensus. Thus, the tool has potential for decreasing expressions of political violence within societies and for strengthening good governance.\n\nWhy and when to use it.\nThis tool is suitable for organizations concerned about the levels of increasing polarization in their societies and wishes to explore how technology can be an ally in tackling social and political divisions. Moreover, this tool would be most beneficial when the organization is interested in discovering vectors of consensus across different political views. Additionally, this tool is most useful when there is good-quality, easily available, and trustworthy data regarding political speeches. These conditions not only guarantee the technical success of the model but can also enhance its legitimacy. In addition, the tool is most useful when you can gather a multidisciplinary team.\n\nKnown issues and troubleshooting.\nThe tool won’t be the best option if there is a lack of sufficient and reliable data. If the data is not easily available, you may end up consuming much of the time and resources of the project in collecting the required data and even fail to obtain the necessary data. Furthermore, if there is no reliable data from official or socially accepted sources you may end up losing the legitimacy and credibility of the project and being targeted of bias accusations.\n\nAlso, if your team lacks the necessary skills and you can’t bring in an external expert, then this tool is also not your best fit. Building and implementing the tool requires computing skills, as well as knowledge in discourse analysis, political science, and history, among others. The richer the skill set of your team, the better the model will turn out to be.\n\nFinally, keep in mind that ChatGPT offers an AI-based model with limitations in its explicability regarding the outputs obtained. This means that you will reach points where you will not be able to explain how the algorithms have operated. In political contexts marked by a high level of distrust between parties, the limitations regarding the explicability of the model can become a major issue.\n\nContext.\nThe development of this tool has been part of the Argentina Lab portfolio of actions regarding AI, which we have named ‘AI: Argentine Intelligence.’ All these actions are aimed at promoting public debate on AI in our country.  In relation to this tool, we utilized ChatGPT 3.5 to train an AI model for analyzing speeches delivered during presidential inaugurations and legislative session openings. We studied a total of 52 speeches and conducted three analyses. The first involved a descriptive analysis of the speeches, evaluating their length and the frequency of keywords. The second analysis aimed to determine if the speeches addressed some specific public policy issues and how they approached these topics. Lastly, we concentrated on generating a unified discourse by processing all the speeches.\n\nCost to implement.\nThe cost of hiring the required team to plan, coordinate and implement the project ranges between USD 15,000 and USD 25,000.\n\nTime\nBetween planning, building, implementing, and evaluating the tool, you can expect to spend a minimum of two to three months.\n\nPeople.\nTo implement a Natural Language Processing Model to build political consensus, you will need a team of 4 members with the following roles:\n\n  One person responsible for the general direction of the project.\n  One computing specialist to set up the algorithm.\n  One project assistant to support on data collection.\n  One designer for managing all the visual aspects of the project.\n\n\nFocal point.\nLorena Moscovich\n\nCountry, year, and language.\nArgentina, 2023-ongoing; Spanish and English.\n\nResources.\n\n  Blog (English) – A Conversation about Artificial Intelligence: What do Argentines talk about when we talk about AI?\n  Blog (Spanish) – Una conversación sobre la inteligencia artificial:¿De qué hablamos los argentinos cuando hablamos de IA?\n  Blog (English) – A Conversation about Artificial Intelligence: Anyone Can Cook and Use AI!\n  Blog (Spanish) – Una conversación sobre la inteligencia artificial: Todos pueden cocinar ¡y usar IA!\n\n\n",
    tags: null,
    sdg: ["16 Peace Justice And Strong Institutions"],
    enablers: ["Digitalization","Strategic innovation"],
    signature_solutions: ["Governance"],
    rblac_priorities: ["Effective Governance"],
    url: "/6.Governance/6.3%20NLPForConsensus.html",
    id: 18
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Digitalization") < 0) {
        enablers.push("Digitalization")
    }

    if(enablers.indexOf("Strategic innovation") < 0) {
        enablers.push("Strategic innovation")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Effective Governance") < 0) {
        rblac_priorities.push("Effective Governance")
    }






index.add({
    title: "through a methodology for exploring signals of change",
    content: "Methodology for exploring signals of change for future foresight\n\nWhat it does.\nThis comprehensive methodological tool is a practical guide to explore and foresee early signals of change for future foresight. The guide provides various tools and techniques for identifying early signals and exploring future scenarios, which allow the user to delve into prospective analysis, collective intelligence, and horizon scanning.\n\nValue proposition for the government/other partner.\nBy employing a comprehensive methodological toolkit for exploration, both the public and private sectors can gain insights into trends that may impact their long-term operations. This enables them to adapt, react, and anticipate changes, ultimately enhancing organizational functioning and evolution.\n\nWhy and when to use it.\nThis tool proves most valuable in navigating environments characterized by volatility, uncertainty, complexity, and ambiguity (VUCA). It is effective when dealing with sudden, unforeseen changes, in situations where anticipation or prediction becomes increasingly challenging, amidst a multitude of interconnected elements at various levels, and when events or issues defy simplistic or binary categorization.\n\nKnown issues and troubleshooting.\nTo implement this tool, you must dedicate a certain amount of time and effort to generating a comprehensive analysis of the signals of change. If there is a lack of human resources available at the organization for conducting this analysis, it may not yet be the best moment to use this tool.\n\nAdditionally, this tool might not be the best approach when dealing with organizations with little interest, or willingness, to integrate future foresight into its decision-making processes. Without the presence of such interest and willingness, particularly at the managerial levels, the effort put into implementing this tool might end up being wasted. In situations like this, consider first dedicating efforts to foster a future mindset within the organization.\n\nContext.\nThis tool was created in the context of the work of the Argentina Lab’s Exploration area. The building of this Exploration Guide was aimed at developing an orderly and clear methodology for carrying out prospective analysis that would serve the area, as well as others interested in foreseeing possible changes and trends. \nFor the development of this tool, we recollected lessons derived from our very own foresight practice, together with insights gathered from specialized literature. Furthermore, based on this tool, the AccLab conducted a futures exploration. For our foresight exercise, we set a 10-year time frame and focus on signals of change that could significantly impact Argentina and its development. When searching for signals, we looked at the social, economic, technological, environmental, and health environments. For example, we found signals of change associated with deepfakes as evidence, universal basic income in blockchain, insects as a source of protein, and sleeping disorders as a public health issue, among others.\n\nCost to implement.\nThe cost varies depending on the scope you set for the exploration exercise. The cost of hiring the required team could require a budget of between USD 2,000 and USD 6,000 per professional. Additionally, you might consider assigning resources for printing materials useful to support the exploration exercise, such as visual tools like future wheels, or signals cards. This could add USD 1000 to your budget, depending on the amount.\n\nTime\nThe work of identifying signals of change, conducting their analysis and visualization, including the implementation of collective intelligence activities, can take two to four months. However, the time of implementation can vary depending on the scope you set for the exploration exercise.\n\nPeople.\nThe team responsible for designing and conducting the exploration can be relatively small, comprising:\n\n  One person responsible for the management of the futures exploration.\n  One collaborator to assist in the implementation.\n  One designer or professional in graphic facilitation to conduct the visual exploration of signals and develop visual tools for the collective intelligence activities.\n\n\nDepending on the exploration’s scope, additional collaborators may be necessary. Furthermore, you can enhance the exploration process by incorporating collective intelligence activities. Therefore, when planning your people strategy, consider the audience you wish to engage in these collective intelligence exercises as well. In doing so, you will need to consider if you need to incorporate further collaborators to conduct these collective intelligence activities.\n\nFocal point.\nMaría Eugenia López\n\nCountry, year, and language.\nArgentina, 2022 - ongoing; Spanish and English.\n\nResources.\n\n  Manual (Spanish) – Explorando futuros: guía para impulsar el cambio, anticipándose a tendencias\n  Manual (English) – Exploring futures: A guide to driving change, foreseeing trends\n  Blog (Spanish) – ¿Cómo anticiparnos a tendencias? Una breve reseña sobre prospectiva.\n  Blog (English) – How can we anticipate trends? Foresight analysis to the rescue!\n  Blog (Spanish) – Escenarios futuros e inteligencia colectiva.\n  Blog (English) – Future Scenarios and Collective Intelligence.\n\n",
    tags: null,
    sdg: ["9 Industry Innovation And Infraestructure","16 Peace Justice And Strong Institutions","17 Partnerships For The Goals"],
    enablers: ["Strategic innovation"],
    signature_solutions: ["Governance"],
    rblac_priorities: ["Effective Governance"],
    url: "/6.Governance/6.4%20ExploringMethology.html",
    id: 19
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("9 Industry Innovation And Infraestructure") < 0) {
        sdg.push("9 Industry Innovation And Infraestructure")
    }

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }

    if(sdg.indexOf("17 Partnerships For The Goals") < 0) {
        sdg.push("17 Partnerships For The Goals")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Strategic innovation") < 0) {
        enablers.push("Strategic innovation")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Effective Governance") < 0) {
        rblac_priorities.push("Effective Governance")
    }






index.add({
    title: "by online and collaborative mapping of the national innovation ecosystem",
    content: "Online and collaborative mapping of the national innovation ecosystem\n\nWhat it does.\nThis online collaborative mapping of the national innovation ecosystem (NIE) serves two main purposes. Firstly, it provides a tool for identifying and tracking actors involved in sustainable development issues with a social or public innovation approach, based on their geographical location. Secondly, it facilitates the strengthening of synergies among NIE actors by enabling them to learn about each other’s work and explore potential collaborations based on shared interests. Additionally, this tool generates open data by collecting information about initiatives and actors.\n\nValue proposition for the government/other partner.\nBy having an online and collaborative mapping of the national innovation ecosystem, you will enable the community of such ecosystem to address social, cultural, environmental, and economic challenges efficiently and effectively, as they identify common interests, exchange experiences, tap on collective knowledge, collaborate, and create synergies. This tool contributes to SDG 17 “Partnerships for the goals” and target 17.7 “encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships”.\n\nWhy and when to use it.\nThis tool is most useful when there is an existing long-term strategy, either from the local or national innovation public sector, aimed at fostering trust among actors within the national innovation ecosystem and facilitating the development of a shared agenda focused on a specific SDG. Promoting collaborative work should involve utilizing participatory and co-creation methods, complemented by an effective communication strategy to engage actors effectively.\n\nKnown issues and troubleshooting.\n\n  If there are only a few well-known actors within the national innovation ecosystem, this tool may not be as effective since its purpose is to facilitate coordination and collaboration among a diverse group of actors.\n  Without a strategy to convene and promote collaborative work among actors in the innovation ecosystem, the online mapping tool alone may not be sufficient to foster synergies within the ecosystem.\n  Limited access to connectivity, low digital skills, and a scarcity of digital devices may render an online and collaborative mapping tool less suitable.\n  In the absence of a long-term vision and strategy for mapping collaborative initiatives, the data may quickly become outdated.\n\n\nContext.\nAs a member of the Open Government Partnership (OGP), Ecuador is committed to having a more open and participatory government. As part of the OGP Action Plan 2019-2022, it aimed to establish an Innovation Citizen Lab for the first time in the country. UNDP’s Accelerator Lab played a key role by offering technical assistance in 2022 to design, implement, and operate the Citizen Lab called Thinkia. The Secretariat of Higher Education and Innovation of Ecuador leads this Lab and collaborates with seven other actors from academia (2), civil society organizations (2), other public institutions (2), and the cooperation sector (UNDP). The government employs a shared and decentralized governance model for Thinkia: Citizen Lab to include other actors as part of the management team and decision-making process. Additionally, the government uses an online platform as a mechanism to promote citizen engagement in public innovation work. UNDP’s Accelerator Lab not only elaborated the governance model proposal and supported its implementation but also designed, developed, and transferred an online platform for Thinkia: Citizen Lab.\n\nCost to implement\nUSD 18,000 - 20,000\n\nTime.\nTo design and develop an online platform 6 months are required. To transfer the e-tool to a government counterpart 4 moths are needed. To transfer the platform should be consider and plan from the design phase of it.\n\nPeople.\nTo design, develop, and implement a similar tool the following team members will be required:\n\n  A software development firm with experience in open code and collaborative platforms.\n  An ally institution within the public innovation sector that aims to contribute to the NIE, and within that institution two focal points an IT person and program officer person.\n\n\nFocal Point.\n[Ana M. Grijalva] (https://undp-accelerator-labs.github.io/Innovation-Toolkit-for-UNDP-Signature-Solutions/contributors/Ana%20M.%20Grijalva.html)\n\nCountry, year, and language.\nEcuador, 2023, Spanish\n\nResources\n\n  Access link (Spanish) – Mapa del ecosistema de innovación nacional\n  Manual (Spanish) – Manual sobre como utilizar la herramienta de mapeo\n  Access link (Spanish) – Directorio de actores registrados en el ecosistema de innovación\n  Dashboard (Spanish) – Estadísticas de los actores e iniciativas registradas\n\n",
    tags: null,
    sdg: ["16 Peace Justice And Strong Institutions","17 Partnerships For The Goals"],
    enablers: ["Digitalization"],
    signature_solutions: ["Governance"],
    rblac_priorities: ["Effective Governance"],
    url: "/6.Governance/6.5.%20CollaborativeMapping.html",
    id: 20
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }

    if(sdg.indexOf("17 Partnerships For The Goals") < 0) {
        sdg.push("17 Partnerships For The Goals")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Digitalization") < 0) {
        enablers.push("Digitalization")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Effective Governance") < 0) {
        rblac_priorities.push("Effective Governance")
    }






index.add({
    title: "by using a multistakeholder governance model for an innovation unit",
    content: "A governance model for an innovation unit run by diverse actors\n\nWhat it does.\nThis tool enables the establishment of a governance model for an innovation unit led by the government, where decision-making processes and action implementation involve a diverse group of actors from academia, the private sector, civil society organizations, and the cooperation sector. The governance model delineates the organization’s structure and dynamics among the actors, specifies the responsibilities of each member, and outlines the financing methods for sustaining the innovation unit.\n\nValue proposition for the government/other partner and SDG alignment.\nWith a decentralized and multi-actor governance model, the government can achieve greater transparency and participatory public management. This model also establishes a framework for the government to engage effectively with the broader national innovation ecosystem in social and public affairs by providing guidance on sharing governance with other stakeholders and forming coalitions. This tool contributes to SDG 16 “Peace, Justice, and Strong Institutions” and target 16.7 “ensure responsive, inclusive, participatory and representative decision-making at all levels”.\n\nWhy and when to use it.\nThis tool is most useful when the government has an established framework that promotes accountability, transparency, and openness in public management. This framework could be established through legislation, international agreements, or the creation of a new public innovation unit. Once the framework is identified, it’s important to map the involved actors and their agendas to facilitate the convening of these stakeholders. Additionally, the governance model should be translated into the official language from Spanish.\n\nKnown issues and troubleshooting.\nIf the government counterpart has recently shown interest in understanding and working on citizen participation and public innovation, this tool may not be as effective since it requires a higher level of comprehension and commitment from civil servants. It’s efficient to adopt and adjust an existing governance model rather than creating a new one; however, this should not hinder the initiation of a participatory process with local government counterparts and actors.\n\nContext.\nAs a member of the Open Government Partnership (OGP), Ecuador is committed to fostering a more open and participatory government. As part of the OGP Action Plan 2019-2022, the country aimed to establish an Innovation Citizen Lab for the first time. In 2022, UNDP’s Accelerator Lab played a pivotal role by providing technical assistance to design, implement, and operate the Citizen Lab, known as Thinkia. The Secretariat of Higher Education and Innovation of Ecuador leads this initiative, collaborating with seven other actors, including academia (2), civil society organizations (2), other public institutions (2), and the cooperation sector (UNDP). The government employs a shared and decentralized governance model for Thinkia: Citizen Lab, involving various actors in the management team and decision-making processes. UNDP’s Accelerator Lab developed the governance model proposal and facilitated its implementation.\n\nCost to implement\nUSD 3,000 - 6,000\n\nTime\nTo identify actors, convene, and coordinate their collaboration on a common agenda it will take 3 to 4 months.\n\nPeople\nTo use this tool the following team members will be required:\n\n  A person to pitch key ideas to the government to have multi-actor governance model. Also, to convene and coordinate joint work between actors and set a common agenda.\n  A person to support all the logistics of the coordination work and set first drafts on a common agenda.\n\n\nFocal Point.\n[Ana M. Grijalva] (https://undp-accelerator-labs.github.io/Innovation-Toolkit-for-UNDP-Signature-Solutions/contributors/Ana%20M.%20Grijalva.html)\n\nCountry, year, and language\nEcuador, 2022, Spanish\n\nResources\n\n  Manual (Spanish) – Modelo de gestión Thinkia\n  Blog (English) – Moving at the speed of trust: the juicy fruits of collaboration and persistence\n  Template (English) Flyer\n  TORs (Spanish) Voluntario/a para generación de procesos de innovación abierta\n\n",
    tags: null,
    sdg: ["8 Decent Work And Economic Growth","16 Peace Justice And Strong Institutions"],
    enablers: null,
    signature_solutions: ["Governance"],
    rblac_priorities: ["Effective Governance"],
    url: "/6.Governance/6.6.%20GovModel.html",
    id: 21
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("8 Decent Work And Economic Growth") < 0) {
        sdg.push("8 Decent Work And Economic Growth")
    }

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }


//Iterate through the Enablers


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Effective Governance") < 0) {
        rblac_priorities.push("Effective Governance")
    }






index.add({
    title: "through a MOOC on public and social innovation concepts and tools",
    content: "Mooc on public and social innovation concepts and tools\n\nWhat it does.\nThis massive open online course (MOOC) enables participants to develop competencies in the main concepts of public and social innovation, as well as to enhance practical skills by learning methodologies and tools. The MOOC caters to various types of profiles, including civil servants, civil society organizations, academia, and private sector counterparts. The course is hosted on Moodle, self-paced, and features short, explanatory videos, supplemented with readings, interactive quizzes, and a final assignment. Participants who complete all modules and assignments receive a certificate of completion for 22 hours of learning. The course covers the following topics: (1) Citizen Labs, (2) Open Culture, (3) Public Innovation Hexagon, (4) Behavioral Approaches for Public Interventions, (5) Design Thinking, (6) Participatory Methodologies, and (7) Social Innovation and Future Thinking.\n\nValue proposition for the government/other partner.\nBy utilizing this MOOC, you will empower potential allies and counterparts to grasp the concepts of public and social innovation, providing them with clarity on implementation methods. This will enable actors to advocate for and commit to utilizing public and social innovation as a novel mechanism for public governance and citizen participation. Moreover, enhancing capacities and practices will enable local governments to incorporate an innovative approach in the design, development, and enhancement of public services, ultimately leading to more effective and transparent processes. This tool contributes to SDG 16 “Peace, Justice, and Strong Institutions” and target 16.7 “ensure responsive, inclusive, participatory and representative decision-making at all levels”.\n\nWhy and when to use it.\nThis tool is most useful when there is an engaged government counterpart actively seeking to adopt a public and social innovation approach in its operations and delivery of public services. It is cost-effective to train many civil servants simultaneously, especially those located in diverse geographical areas. Additionally, it is recommended that senior management, as well as analysts, participate in this learning journey. With clear commitment from the government, the inclusion of social and innovation processes can be expected to become integrated into the institution’s workflow, leading to institutionalization of the process.\n\nKnown issues and troubleshooting.\n\n  If there is a lack of commitment and engagement from participants, the results will be partial and not fully satisfactory for the MOOC organizer.\n  The course content is introductory. Participants who wish to deepen their knowledge on the topics covered are recommended to take additional courses.\n\n\nContext.\nAs a member of the Open Government Partnership (OGP), Ecuador is committed to having a more open and participatory government. As part of the OGP Action Plan 2019-2022, it aimed to establish an Innovation Citizen Lab for the first time in the country. UNDP’s Accelerator Lab played a key role in offering technical assistance in 2022 to design, implement, and operate the Citizen Lab called Thinkia. The Secretariat of Higher Education and Innovation of Ecuador leads this Lab and collaborates with seven other actors from academia (2), civil society organizations (2), other public institutions (2), and the cooperation sector (UNDP). The government employs a shared and decentralized governance model for Thinkia: Citizen Lab to include other actors as part of the management team and decision-making process. UNDP’s Accelerator Lab developed the governance model proposal and supported its implementation.\n\nOne of the first outcomes of the collaboration among the various actors running Thinkia was the creation of a massive open online course on public and social innovation, leveraging the expertise of each member. Thus, each member was responsible for creating the content of one of the modules. UNDP’s Accelerator Lab structured the course by generating and organizing the learning materials and managed the course on Moodle.\n\nCost to implement\nUSD 4,000 – 4,500 (to build the MOOC from zero)\n\nTime.\nTo organizing the launch of the course 1 moths is required. To hold the course and receive feedback 1 month and a half is needed.\n\nPeople.\nTo run this course and make it available to the public the following team members will be required:\n\n  A course leader who strategizes the use of the course and generates the needed partnerships.\n  A course administrator in charge of solving all enquiries related to the platform and managing the registration process.\n\n\nFocal Point.\n[Ana M. Grijalva] (https://undp-accelerator-labs.github.io/Innovation-Toolkit-for-UNDP-Signature-Solutions/contributors/Ana%20M.%20Grijalva.html)\n\nCountry, year, and language.\nEcuador, 2022, Spanish\n\nResources.\n-Access link (Spanish) Moodle Platform of UNDP Ecuador\n\nPlease contact the focal point if you want to make use of the course.\n",
    tags: null,
    sdg: ["16 Peace Justice And Strong Institutions","17 Partnerships For The Goals"],
    enablers: null,
    signature_solutions: ["Governance"],
    rblac_priorities: ["Effective Governance"],
    url: "/6.Governance/6.7%20InnovationMOOC.html",
    id: 22
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }

    if(sdg.indexOf("17 Partnerships For The Goals") < 0) {
        sdg.push("17 Partnerships For The Goals")
    }


//Iterate through the Enablers


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Effective Governance") < 0) {
        rblac_priorities.push("Effective Governance")
    }






index.add({
    title: "by using text mining algorithms to analyze public programs performance",
    content: "Using text mining algorithms to analyze public programs performance\n\nWhat it does.\nThis tool allows you to use a text mining algorithm to analyze the justifications, given by public officials that oversee the implementation of public programs, regarding the results of the performance indicators of the program, uncover common issues across programs and rank (for based on relevance) the root causes behind the underperformance of government-funded programs.\n\nValue proposition for the government/other partner.\nBy using a text mining algorithms to analyze public programs performance, you enable the Ministry of Finance to gain a deeper understanding of the root causes behind the underperformance of public spending and aim to make public spending more efficient. This understanding provides crucial insights into the support required by different government branches to enhance the impact of their programs. Such efforts align with UNDP’s governance signature solution and SDG 16, which focuses on building effective, accountable, and inclusive institutions at all levels.\n\nWhy and when to use it.\nThis tool is most effective when governments have already initiated a journey toward results-based budgeting, aiming to enhance the efficiency and effectiveness of public spending and the delivery of services. It’s essential to acknowledge that implementing a results-based budget can be challenging, requiring changes in organizational culture, data collection and analysis capabilities, and reporting systems.\n\nKnown issues and troubleshooting.\nIf there is a lack of transparency, accountability, and aggregation of data, it’s probably not the best time to make use of this tool. In such a case, teams should work towards fostering changes in organizational culture within the government, improving data collection and analysis capabilities, and enhancing reporting systems to ensure that the relevant datasets are available.\n\nContext.\nUNDP Mexico and the Performance Evaluation Unit of the Ministry of Finance opened an active line of collaboration to explore ways to improve Mexico’s Performance Evaluation Systems and Results-Based Budgeting—its structure, processes, the information it generates, its usability, and any element that could help make it more relevant to better serve its purpose. The aim of this system is to ensure that the government delivers better public goods and services, improves the quality of expenditure, and promotes accountability and transparency. In this context, the Accelerator Lab Mexico was invited to participate in these discussions. A complex element to be addressed during the process was identified: How does the human dimension affect what people report and the quality of the information generated? Because, although the objectives of the Performance Evaluation Systems are clearly stated in the laws and decrees that support it, those who ultimately interact are people with different motivations and incentives. So, it should not be taken for granted that everything will be perfectly aligned. Instead, the Lab set out to analyze the system and learn from people’s experience what improvements can be proposed to increase the capacity to incorporate learnings at scale.\n\nIn the case of Mexico, implementing a results-based budget approach involved establishing a common framework for evaluating public spending performance, extending beyond expenditure tracking to assess the social and environmental impacts of government spending on key dimensions of sustainable development. All programs reliant on public spending are required to define a set of performance indicators and goals set by government officials, establishing a clear causal relationship between program activities and their purpose. This progress is regularly monitored, and the reported information, including text entries justifying why officials believe an indicator did not meet its intended goal, is made available as open data.\n\nFor the tool implemented in Mexico, the information is sourced directly from individuals working within the government who oversee the implementation of public programs. This process involves creating a text mining algorithm and feeding it thousands of text entries written by public officials. These officials are asked to provide justifications, in their own words, for why a performance indicator in the program’s logical framework did not reach the established goal for the budget cycle. As individuals on the frontlines of state budget execution, they consistently arrive at conclusions that can be transformed into lessons to enhance public spending. By exploring patterns in this unique dataset of individual explanations, we uncover issues common across all branches of government, aiming to make public spending more efficient.\n\nCost to implement.\nThis is a very cost-effective solution that can be funded with less that USD 100.000.\n\nTime\nA minimum of six months is needed to implement the solution fully.\n\nPeople.\nYou will need to collaborate with the office in charge of the evaluation of public programs in your country. This is typically a unit within the Ministry of Finance. Buy-in from a high-ranking official is a must, and a team of experts within the unit who know the structure of the systems is also necessary (this team must include two people from the public institution’s technology department who will verify the model developed by the consultant). Additionally, you will need a consultant who can write complex Machine Learning (ML) and Natural Language Processing (NLP) model algorithms to help you navigate the code and adjust it to your needs. Additionally, you will need one person to coordinate the project.\n\nFocal point.\nLuis Fernando Cervantes\n\nCountry, year, and language.\nMexico, 2023, Spanish\n\nResources.\n\n  Blog (English) – How text mining can help us learn about public spending performance\n  Blog (English) – A lab experiment that can help identify and address potential gaps in public speding performance\n  Blog (English) – From algorithm to collective intelligence. An experiment with the potential to help the continuous improvement of public programs\n  Report  (Spanish) – Minería de Texto en el Sistema de Evaluación del Desempeño\n  Templates (English) GitHub code repository\n\n",
    tags: null,
    sdg: ["16 Peace Justice And Strong Institutions"],
    enablers: ["Digitalization"],
    signature_solutions: ["Governance"],
    rblac_priorities: ["Effective Governance"],
    url: "/6.Governance/6.8%20TextMiningPerformance.html",
    id: 23
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("16 Peace Justice And Strong Institutions") < 0) {
        sdg.push("16 Peace Justice And Strong Institutions")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Digitalization") < 0) {
        enablers.push("Digitalization")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Effective Governance") < 0) {
        rblac_priorities.push("Effective Governance")
    }






index.add({
    title: "Contributors",
    content: "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Adedapo Aderemi\n        \n        UNDP Accelerator Labs - Software Developer\n        \n      \n    \n    Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web, mobile, IoT, and cloud engineering solutions. He is proficient in a variety of frameworks and programming languages, specializing in developing scalable and resilient applications. He utilizes cutting-edge technologies to address intricate challenges, propel digital revolutionization, and generate memorable user experiences.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ana Carolina Diaz\n        \n        UNDP’s Regional Bureau for Latin America and the Caribbean - Innovation Analyst\n        \n      \n    \n    Ana supports the implementation of the Bureau’s innovation strategy, including direct support to regional and country initiatives. She will also support the implementation of other strategic regional initiatives. Ana has nine years of experience working in the fields of international development and social impact. She has gained extensive expertise in spearheading innovative projects dedicated to poverty eradication, implementing the Sustainable Development Goals, and fostering the growth of the fourth sector of the economy. She holds a Master of Public Administration in Development Practice from Columbia University.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ana M. Grijalva\n        \n        UNDP Ecuador Accelerator Lab - Head of Exploration\n        \n      \n    \n    Ana M. Grijalva is an economist, social innovator, and digital advocate with 10 years of experience. She has vast experience in development contexts in program management, implementation, advocacy, partnership building, resource mobilization, monitoring, and evaluation in social projects. She has expertise on key issues related to education, governance, digitalization, labor market, and gender. She has worked for different agencies of the United Nations (International Institute for Educational Planning and Economic Commission for Latin America and the Caribbean) and for international organizations such as University of Oxford, Inter-American Development Bank, and World Bank. Also, she has experience in Ecuador's public sector and has worked for academia in the United Kingdom and Ecuador. She is excited to collaborate in changing the status quo through public and social innovation, digital transformation, technology, and civic engagement in her current role as Head of Exploration at the UNDP Accelerator Lab.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Bethsabe Moreno\n        \n        UNDP Ecuador Accelerator Lab - Innovation consultor\n        \n      \n    \n    Bethsabé is an economist, social innovator, and data scientist with 10 years of experience. She has experience in program management, partnership building and implementation of social projects. She is an advocate for local development, entrepreneurship, financial inclusion, and open government. She has worked in various public institutions in Ecuador and non-profit foundations. She is excited contribute reduce poverty and inequality through innovation, digital transformation, collective intelligence, and microfinance.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Carlos Mazariegos\n        \n        UNDP Guatemala Accelerator Lab - Head of Exploration\n        \n      \n    \n    Carlos experience and interests comprise data and social analytics, information and communication technologies (ICT) and socio-economic development in underserved communities. At UNDP Accelerator Labs, he leads the discovery and sense-making of emerging trends and their potential for accelerating progress toward SDGs, including fostering data-driven methodologies, establishing strategic data partnerships, and deploying scalable digital solutions. Carlos has collaborated in data initiatives in the United States, Europe, Africa, and Latin America for the Inter-American Development Bank, United Nations Foundation, MIT Media Lab, and Data-Pop Alliance, and deployed digital solutions for US-based startups and telecommunications providers. Carlos is currently an MIT Connection Science Fellow, holds an M.S. Data Analytics, Management and Policy from Carnegie Mellon University and a B.S. in Electronic Engineering from Universidad de San Carlos de Guatemala.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Gabriel Lama\n        \n        UNDP Peru Accelerator Lab - Head of Solutions Mapping\n        \n      \n    \n    Gabriel is a specialist in research for innovation and Cultural Designer, he is passionate about the experiences and formats developed to nurture and strengthen creativity and human bonds. With extensive experience in creative industries and social innovation, he has developed projects with and for public and private institutions and agents of change in Lima, Sao Paulo and Barcelona. As Head of Solution Mapping, he leads the co-creation processes, learning, identification, strengthening and scaling processes of citizen solutions in connection with the global network of Accelerator Labs.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Gabriela Rios\n        \n        UNDP Mexico Accelerator Lab - Head of Exploration\n        \n      \n    \n    Gabriela Ríos Landa is the Head of Exploration at the Accelerator Lab of the United Nations Development Programme (UNDP) in Mexico. She is part of a global network of professionals working to reimagine development and accelerate learning to achieve more sustainable futures. Before joining UNDP, she worked at the Laboratory for the City, the experimental arm of the government of Mexico City, developing innovative strategies to address public issues. She holds a master's degree in Future Studies from the Free University of Berlin and a bachelor's degree in Industrial Design from the Iberoamerican University in Mexico City.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Javier Brolo\n        \n        UNDP Guatemala Accelerator Lab - Head of Experimentation\n        \n      \n    \n    Javier Brolo is a social scientist specialized in quantitative and qualitative research methods. His academic training is in Philosophy, Mathematics, and Political Science. He has worked as the lead researcher in different Think Tanks and as a university professor. His interest in crude developing solutions to complex social problems, strengthening democratic institutions, attitude and behavior changes, and conducting impact evaluations with diverse and committed teams.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jorge Munguia\n        \n        UNDP Mexico Accelerator Lab - Head of Solutions Mapping\n        \n      \n    \n    Jorge is the Head of Solutions Mapping at the Accelerator Lab of UNDP in Mexico. He seeks to generate learning for complex development challenges through close ties with communities facing these challenges. In the context of complex development challenges, he advocates for innovative methodologies to strengthen collaborations and collective intelligence with a systemic perspective, as well as the strengthening of grassroots solutions. With 15 years of experience, he has worked on promoting people-centered strategies for public institutions and international organizations.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lorena Moscovich\n        \n        UNDP Argetina Accelerator Lab - Head of Experimentation\n        \n      \n    \n    Lorena Moscovich is head of experimentation at the UNDP Argentina accelerator. Her academic background includes a bachelor's degree in political science, a Master's, and a PhD in Social Sciences from the University of Buenos Aires. In addition, she is an affiliated researcher at the University of San Andrés, where she has worked as a professor and led governance programs. She has published in scientific journals in various countries and participated in academic meetings and given talks at universities in her country and abroad, including Harvard, Berkeley, Oxford, and Brown. She was also a visiting scholar at Columbia University, with the support of a Fulbright Commission and a visiting researcher at Brown University. Currently, she co-leads a project on the history of decentralization in Argentina.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Luis Fernando Cervantes\n        \n        UNDP Mexico Accelerator Lab - Head of Experimentation\n        \n      \n    \n    Luis is an economist with extensive experience in the field of sustainable development. Currently serving as the Head of Experimentation at the UNDP Accelerator Lab in Mexico, he has built a professional trajectory with 11 years of experience in designing and implementing public policies, applied social research, capacity-building program development, policy impact evaluation, resource mobilization strategy design, and team mentoring through change processes. He is passionate about development economics and designing new paradigms that enable us to transition towards a more inclusive and sustainable world.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          María Eugenia López\n        \n        UNDP Argentina Accelerator Lab - Head of Exploration\n        \n      \n    \n    María Eugenia López is the Head of Exploration for the Argentina Accelerator Lab. She studied Biology at the University of Buenos Aires and earned a master's degree in Neuroscience and Education from Columbia University in New York. During her time there, she worked in the Department of Epidemiology, conducting a meta-analysis of primary interventions on the leading causes of death worldwide. Upon returning to Buenos Aires, Eugenia focused on science communication through various mediums such as museums, exhibitions, camps, social media, and audiovisual productions. She taught at the Faculty of Exact and Natural Sciences at the University of Buenos Aires and served as a professor at the Favaloro University and the University of San Andrés.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          María Verónica Moreno\n        \n        UNDP Argentina Accelerator Lab - Head of Solutions Mapping\n        \n      \n    \n    María Verónica is the Head of Solutions Mapping for the Argentina Accelerator Lab since 2019. She has experience in international organizations, academia, and the public and private sector. She has worked as an undergraduate and graduate professor and researcher at the University of Buenos Aires (UBA, by its Spanish acronym). She has a Doctorate in Social Sciences (UBA), a Master's Degree in Public Policy from the Torcuato Di Tella University and a Bachelor's Degree in Sociology from the University of Salvador.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Mariana Olcese\n        \n        UNDP Peru Accelerator Lab - Head of Exploration\n        \n      \n    \n    Connector between the public and private sectors, motivated to navigate uncertainty and identify emerging opportunities to translate them to different actors in the system. Her experience includes working as a consultant at the Inter-American Development Bank and the World Bank, an advisor to the Peruvian government, and as a public affairs manager for startups and corporations.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Patricia Choque\n        \n        UNDP Bolivia Accelerator Lab - Head of Solutions Mapping\n        \n      \n    \n    Since 2021, Patricia has served as the Head of Solutions Mapping at the UNDP Accelerator Lab Bolivia. In this role, she endeavors to drive innovation for development by utilizing new sources of information to make informed decisions, applying collective intelligence methods, and implementing a systems transformation approach across diverse fields such as gender, environment, and digital inclusion. She holds a bachelor’s degree in system approaches, an MBA, and has completed post-graduate studies in statistics, gender, and micro-economy of competitiveness.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Paulina Jiménez\n        \n        UNDP Ecuador Accelerator Lab - Head of Solutions Mapping\n        \n      \n    \n    Paulina es socióloga con una maestría en Género y Salud. Dedicó 8 años a la investigación acción en Madrid, España, con énfasis en precariedad femenina. En Ecuador, fue Directora Nacional de Salud Intercultural, puesto que le permitió diseñar y adaptar políticas públicas para reducir las barreras de acceso a la salud. Fue coordinadora del proyecto de Fortalecimiento de la Atención Primaria en Salud en la Organización Panamericana de la Salud (OPS/OMS). Actualmente ocupa el rol de Mapeo de Soluciones en el Laboratorio de Aceleración del Programa de Naciones Unidas para el Desarrollo, aportando soluciones para el desarrollo a través de la innovación comunitaria.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n  \n\n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/Team.html",
    id: 24
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Innovating for governance",
    content: "\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/6.Governance/",
    id: 25
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Innovating for energy access and efficiency",
    content: "\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/3.Energy/",
    id: 26
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Getting started",
    content: "\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/0.Getting_started/",
    id: 27
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Innovating for resilience",
    content: "\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/5.Resilience/",
    id: 28
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Innovating for gender equality",
    content: "\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/2.Gender/",
    id: 29
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Innovating for environment",
    content: "\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/4.Environment/",
    id: 30
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Innovating to tackle poverty and inequality",
    content: "\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/1.Poverty/",
    id: 31
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Getting Started",
    content: "WELCOME TO THE SIGNATURE SOLUTION TOOLKIT\n\nThis toolkit compiles some of the innovative and creative tools developed by the Accelerator Labs of RBLAC —until the end of 2023— to achieve sustainable development. Organized according to the six signature solutions of UNDP’s Strategic Plan 2022-2025, the toolkit enables other country offices to easily navigate best practices, learn about them, and utilize and replicate them in various contexts.\n\nBig thanks to everyone who contributed to creating this prototype. All contributors and curators are part of the  UNDP Accelerator Labs, unless otherwise indicated. A full list, along with each person’s contact information, is available on the Contributors page.\n\nTechnical leadership: Ana M. Grijalva (Accelerator Lab Ecuador)\n\nTechnical support: Gabriela Ríos (Accelerator Lab Mexico) &amp; Ana Carolina Díaz (RBLAC)\n\nCuration: Bethsabe Moreno (Accelerator Lab Ecuador)\n\nSoftware development: Adedapo Aderemi &amp; Jeremy Boy (Accelerator Labs Global Team)\n\nThe content of this site is property of the United Nations Development Programme (UNDP) and published under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International.\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/",
    id: 32
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities









index.add({
    title: "Adedapo Aderemi",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Adedapo Aderemi\n            \n            UNDP Accelerator Labs - Software Developer\n            \n          \n        \n        \n          Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web, mobile, IoT, and cloud engineering solutions. He is proficient in a variety of frameworks and programming languages, specializing in developing scalable and resilient applications. He utilizes cutting-edge technologies to address intricate challenges, propel digital revolutionization, and generate memorable user experiences.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Adedapo%20Aderemi.html",
    id: 34
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Ana Carolina Diaz",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ana Carolina Diaz\n            \n            UNDP’s Regional Bureau for Latin America and the Caribbean - Innovation Analyst\n            \n          \n        \n        \n          Ana supports the implementation of the Bureau’s innovation strategy, including direct support to regional and country initiatives. She will also support the implementation of other strategic regional initiatives. Ana has nine years of experience working in the fields of international development and social impact. She has gained extensive expertise in spearheading innovative projects dedicated to poverty eradication, implementing the Sustainable Development Goals, and fostering the growth of the fourth sector of the economy. She holds a Master of Public Administration in Development Practice from Columbia University.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Ana%20Carolina%20Diaz.html",
    id: 35
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Ana M. Grijalva",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ana M. Grijalva\n            \n            UNDP Ecuador Accelerator Lab - Head of Exploration\n            \n          \n        \n        \n          Ana M. Grijalva is an economist, social innovator, and digital advocate with 10 years of experience. She has vast experience in development contexts in program management, implementation, advocacy, partnership building, resource mobilization, monitoring, and evaluation in social projects. She has expertise on key issues related to education, governance, digitalization, labor market, and gender. She has worked for different agencies of the United Nations (International Institute for Educational Planning and Economic Commission for Latin America and the Caribbean) and for international organizations such as University of Oxford, Inter-American Development Bank, and World Bank. Also, she has experience in Ecuador's public sector and has worked for academia in the United Kingdom and Ecuador. She is excited to collaborate in changing the status quo through public and social innovation, digital transformation, technology, and civic engagement in her current role as Head of Exploration at the UNDP Accelerator Lab.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Ana%20M.%20Grijalva.html",
    id: 36
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Bethsabe Moreno",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Bethsabe Moreno\n            \n            UNDP Ecuador Accelerator Lab - Innovation consultor\n            \n          \n        \n        \n          Bethsabé is an economist, social innovator, and data scientist with 10 years of experience. She has experience in program management, partnership building and implementation of social projects. She is an advocate for local development, entrepreneurship, financial inclusion, and open government. She has worked in various public institutions in Ecuador and non-profit foundations. She is excited contribute reduce poverty and inequality through innovation, digital transformation, collective intelligence, and microfinance.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Bethsabe%20Moreno.html",
    id: 37
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Carlos Mazariegos",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Carlos Mazariegos\n            \n            UNDP Guatemala Accelerator Lab - Head of Exploration\n            \n          \n        \n        \n          Carlos experience and interests comprise data and social analytics, information and communication technologies (ICT) and socio-economic development in underserved communities. At UNDP Accelerator Labs, he leads the discovery and sense-making of emerging trends and their potential for accelerating progress toward SDGs, including fostering data-driven methodologies, establishing strategic data partnerships, and deploying scalable digital solutions. Carlos has collaborated in data initiatives in the United States, Europe, Africa, and Latin America for the Inter-American Development Bank, United Nations Foundation, MIT Media Lab, and Data-Pop Alliance, and deployed digital solutions for US-based startups and telecommunications providers. Carlos is currently an MIT Connection Science Fellow, holds an M.S. Data Analytics, Management and Policy from Carnegie Mellon University and a B.S. in Electronic Engineering from Universidad de San Carlos de Guatemala.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Carlos%20Mazariegos.html",
    id: 38
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Gabriel Lama",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Gabriel Lama\n            \n            UNDP Peru Accelerator Lab - Head of Solutions Mapping\n            \n          \n        \n        \n          Gabriel is a specialist in research for innovation and Cultural Designer, he is passionate about the experiences and formats developed to nurture and strengthen creativity and human bonds. With extensive experience in creative industries and social innovation, he has developed projects with and for public and private institutions and agents of change in Lima, Sao Paulo and Barcelona. As Head of Solution Mapping, he leads the co-creation processes, learning, identification, strengthening and scaling processes of citizen solutions in connection with the global network of Accelerator Labs.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Gabriel%20Lama.html",
    id: 39
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Gabriela Rios",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Gabriela Rios\n            \n            UNDP Mexico Accelerator Lab - Head of Exploration\n            \n          \n        \n        \n          Gabriela Ríos Landa is the Head of Exploration at the Accelerator Lab of the United Nations Development Programme (UNDP) in Mexico. She is part of a global network of professionals working to reimagine development and accelerate learning to achieve more sustainable futures. Before joining UNDP, she worked at the Laboratory for the City, the experimental arm of the government of Mexico City, developing innovative strategies to address public issues. She holds a master's degree in Future Studies from the Free University of Berlin and a bachelor's degree in Industrial Design from the Iberoamerican University in Mexico City.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Gabriela%20Rios.html",
    id: 40
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Javier Brolo",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Javier Brolo\n            \n            UNDP Guatemala Accelerator Lab - Head of Experimentation\n            \n          \n        \n        \n          Javier Brolo is a social scientist specialized in quantitative and qualitative research methods. His academic training is in Philosophy, Mathematics, and Political Science. He has worked as the lead researcher in different Think Tanks and as a university professor. His interest in crude developing solutions to complex social problems, strengthening democratic institutions, attitude and behavior changes, and conducting impact evaluations with diverse and committed teams.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Javier%20Brolo.html",
    id: 41
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Jorge Munguia",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jorge Munguia\n            \n            UNDP Mexico Accelerator Lab - Head of Solutions Mapping\n            \n          \n        \n        \n          Jorge is the Head of Solutions Mapping at the Accelerator Lab of UNDP in Mexico. He seeks to generate learning for complex development challenges through close ties with communities facing these challenges. In the context of complex development challenges, he advocates for innovative methodologies to strengthen collaborations and collective intelligence with a systemic perspective, as well as the strengthening of grassroots solutions. With 15 years of experience, he has worked on promoting people-centered strategies for public institutions and international organizations.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Jorge%20Munguia.html",
    id: 42
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Lorena Moscovich",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lorena Moscovich\n            \n            UNDP Argetina Accelerator Lab - Head of Experimentation\n            \n          \n        \n        \n          Lorena Moscovich is head of experimentation at the UNDP Argentina accelerator. Her academic background includes a bachelor's degree in political science, a Master's, and a PhD in Social Sciences from the University of Buenos Aires. In addition, she is an affiliated researcher at the University of San Andrés, where she has worked as a professor and led governance programs. She has published in scientific journals in various countries and participated in academic meetings and given talks at universities in her country and abroad, including Harvard, Berkeley, Oxford, and Brown. She was also a visiting scholar at Columbia University, with the support of a Fulbright Commission and a visiting researcher at Brown University. Currently, she co-leads a project on the history of decentralization in Argentina.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Lorena%20Moscovich.html",
    id: 43
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Luis Fernando Cervantes",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Luis Fernando Cervantes\n            \n            UNDP Mexico Accelerator Lab - Head of Experimentation\n            \n          \n        \n        \n          Luis is an economist with extensive experience in the field of sustainable development. Currently serving as the Head of Experimentation at the UNDP Accelerator Lab in Mexico, he has built a professional trajectory with 11 years of experience in designing and implementing public policies, applied social research, capacity-building program development, policy impact evaluation, resource mobilization strategy design, and team mentoring through change processes. He is passionate about development economics and designing new paradigms that enable us to transition towards a more inclusive and sustainable world.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Luis%20Fernando%20Cervantes.html",
    id: 44
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "María Eugenia López",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              María Eugenia López\n            \n            UNDP Argentina Accelerator Lab - Head of Exploration\n            \n          \n        \n        \n          María Eugenia López is the Head of Exploration for the Argentina Accelerator Lab. She studied Biology at the University of Buenos Aires and earned a master's degree in Neuroscience and Education from Columbia University in New York. During her time there, she worked in the Department of Epidemiology, conducting a meta-analysis of primary interventions on the leading causes of death worldwide. Upon returning to Buenos Aires, Eugenia focused on science communication through various mediums such as museums, exhibitions, camps, social media, and audiovisual productions. She taught at the Faculty of Exact and Natural Sciences at the University of Buenos Aires and served as a professor at the Favaloro University and the University of San Andrés.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Mar%C3%ADa%20Eugenia%20L%C3%B3pez.html",
    id: 45
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "María Verónica Moreno",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              María Verónica Moreno\n            \n            UNDP Argentina Accelerator Lab - Head of Solutions Mapping\n            \n          \n        \n        \n          María Verónica is the Head of Solutions Mapping for the Argentina Accelerator Lab since 2019. She has experience in international organizations, academia, and the public and private sector. She has worked as an undergraduate and graduate professor and researcher at the University of Buenos Aires (UBA, by its Spanish acronym). She has a Doctorate in Social Sciences (UBA), a Master's Degree in Public Policy from the Torcuato Di Tella University and a Bachelor's Degree in Sociology from the University of Salvador.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Mar%C3%ADa%20Ver%C3%B3nica%20Moreno.html",
    id: 46
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Mariana Olcese",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Mariana Olcese\n            \n            UNDP Peru Accelerator Lab - Head of Exploration\n            \n          \n        \n        \n          Connector between the public and private sectors, motivated to navigate uncertainty and identify emerging opportunities to translate them to different actors in the system. Her experience includes working as a consultant at the Inter-American Development Bank and the World Bank, an advisor to the Peruvian government, and as a public affairs manager for startups and corporations.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Mariana%20Olcese.html",
    id: 47
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Patricia Choque",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Patricia Choque\n            \n            UNDP Bolivia Accelerator Lab - Head of Solutions Mapping\n            \n          \n        \n        \n          Since 2021, Patricia has served as the Head of Solutions Mapping at the UNDP Accelerator Lab Bolivia. In this role, she endeavors to drive innovation for development by utilizing new sources of information to make informed decisions, applying collective intelligence methods, and implementing a systems transformation approach across diverse fields such as gender, environment, and digital inclusion. She holds a bachelor’s degree in system approaches, an MBA, and has completed post-graduate studies in statistics, gender, and micro-economy of competitiveness.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Patricia%20Choque.html",
    id: 48
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Paulina Jiménez",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Paulina Jiménez\n            \n            UNDP Ecuador Accelerator Lab - Head of Solutions Mapping\n            \n          \n        \n        \n          Paulina es socióloga con una maestría en Género y Salud. Dedicó 8 años a la investigación acción en Madrid, España, con énfasis en precariedad femenina. En Ecuador, fue Directora Nacional de Salud Intercultural, puesto que le permitió diseñar y adaptar políticas públicas para reducir las barreras de acceso a la salud. Fue coordinadora del proyecto de Fortalecimiento de la Atención Primaria en Salud en la Organización Panamericana de la Salud (OPS/OMS). Actualmente ocupa el rol de Mapeo de Soluciones en el Laboratorio de Aceleración del Programa de Naciones Unidas para el Desarrollo, aportando soluciones para el desarrollo a través de la innovación comunitaria.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Paulina%20Jimenez.html",
    id: 49
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities







// builds reference data
var store = [{
  "title": "Background and purpose",
  "url": "/0.Getting_started/0.1%20Background.html",
  "content": "BACKGROUND AND PURPOSE\n\nToday’s development challenges are dynamic, interconnected puzzles of multidimensional risks that require systemic solutions. The United Nations Development Programme, through its Strategic Plan for 2022-2025, sets out to push towards the fulfillment of the Sustainable Development Goals (SDGs) as a path forward for overcoming these complex challenges.\n\nThe Plan is grounded in UNDP’s continued commitment to deliver integrated development solutions driven by country priorities. To this end, it is structured around a “3x6x3” framework that aim to support countries in 3 directions of change (structural transformation, leaving no-one behind, building resilience), through 6 signature solutions (poverty and inequality, governance, resilience, environment, energy, gender equality) enhanced by 3 enablers (strategic innovation, digitalization, development financing), that allow UNDP to deliver these solutions through a systemic approach.\n\n\n\nThis toolkit compiles the tested innovative and creative tools developed by the Accelerator Labs of RBLAC to achieve sustainable development. Organized according to the six UNDP signature solutions, it enables other country offices to easily navigate best practices, learn about them, and aim to utilize and replicate them in various contexts.\n\nAs the Accelerator Labs move to contribute more deliberately to UNDP’s R&amp;D function, we offer the experience accumulated by the network of labs in the Latin America and the Caribbean region in the form of this toolkit. It is meant to inspire and empower colleagues by offering ready-made resources that can be re-used after adapting then to a new context.\n\nThe toolkit aims to facilitate collective intelligence initiatives and is conceived as a “living” site, hoping to continuously expand the available tools.\n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "BACKGROUND AND PURPOSE Today’s development challenges are dynamic, interconnected puzzles of multidimensional risks that require systemic solutions. The United Nations...",
  "id": 50
},{
  "title": "The toolkit at a glace",
  "url": "/0.Getting_started/0.2%20Index.html",
  "content": "THE TOOLKIT AT A GLANCE\n\nGetting started. This section explains the rationale for the toolkit, and how to use it.\n\nInnovating to tackle poverty and inequality. This section describes tools that tackle inequality of opportunities and enhance people’s capabilities to move above the poverty line.\n\nInnovating for gender equality. This section describes tools that confront the structural obstacles to gender equality and strengthening women’s economic empowerment and leadership.\n\nInnovating for energy access and efficiency. This section describes tools that aim to increase energy access and accelerating the transition to renewable energy.\n\nInnovating for environment. This section describes tools that enables putting nature and the environment at the heart of national economies and planning; helping governments protect, manage and value their natural assets.\n\nInnovating for resilience. This section describes tools that support countries and communities in building resilience to diverse shocks and crises, including conflict, climate change, disasters, and epidemics.\n\nInnovating for governance. This section describes tools that help countries address emerging complexities by “future-proofing” governance systems through anticipatory approaches and better management of risk.\n\nContributors. This section enlists the contributors of the toolkit and provides their contact information for further inquiries in any of the tools.\n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "THE TOOLKIT AT A GLANCE Getting started. This section explains the rationale for the toolkit, and how to use it....",
  "id": 50
},{
  "title": "How to use the toolkit",
  "url": "/0.Getting_started/0.3%20How%20to.html",
  "content": "HOW TO USE THE TOOLKIT\n\nArchitecture\n\nThis toolkit compiles tested tools that have been proven to achieve sustainable development, as part of one of the six signature solutions of UNDP’s Strategic Plan 2022 – 2025. The tools are organized in six sections, one for each signature solutions. You can find a description of each section in the segment “The toolkit at a glance”.\n\nHow to use this toolkit in four easy steps\n\n1. Decide what you want to do and browse the catalogue.\nThe tools in this kit are labelled according to function, with names like “Innovating to tackle poverty and inequality by digital inclusion through a network of nearby stores”. They are sorted into six main categories based on the UNDP’s signature solution they contribute to. The navigation bar and tag boxes on the left of the screen act as a catalog: browse them to navigate to any tool you like.\n\n2. Read the description from this website.\nEach tool’s website page contains information you can use to decide if that tool is helpful to you. Is it aligned with your goals? Is it compatible with the amount of time and money you have?\n\n3. Read and reuse the resources.\nIf the description of the tool looks interesting, you can move on to the resources itself. Because the tool was not written with your specific case in mind, you will need to adapt it to our context. Hopefully, this will be easier than starting from scratch.\n\n4. Ask for support.\nAll resources have a lead author, or “focal point”. The ethos of UNDP’s Accelerator Labs is one of sharing knowledge, so you can reach out to the focal point if you need more information and support.\n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "HOW TO USE THE TOOLKIT Architecture This toolkit compiles tested tools that have been proven to achieve sustainable development, as...",
  "id": 50
},{
  "title": "Further Details",
  "url": "/0.Getting_started/0.4%20Details.html",
  "content": "FURTHER DETAILS: TAGS &amp; RESOURCES\n\nTags\n\nThere are four main categories to tag tools: UNDP’s Strategic Plan signature solutions (1) and enablers (2), RBLAC priorities (3), and the Sustainable Development Goals (4) to which the tool contributes. Each tool in the toolkit is assigned to only one section of the six signature solutions. However, in practice, some of the solutions prototyped by the Accelerator Labs jointly address different dimensions of development. Therefore, this information is included through a list of tags at the end of the tool.\n\nTo use the tags, select the filters needed to explore the tools of your interest in any of the four tag boxes located at the end of the navigation bar on the left of the screen. Once the filters are selected, the main screen will show the list of tools that include the selected tags.\n\nPlease note that the tag boxes only display the categories included in at least one tool. Below is the complete list of categories that could be assigned for each tag.\n\n\n  \n    Signature solutions tag: Poverty and Inequality; Gender Equality; Energy; Environment; Resilience; Governance.\n  \n  \n    Enablers tag: Digitalization; Strategic Innovation; Development Financing.\n  \n  \n    RBLAC priorities tag: Inclusive and Sustainable Growth; Equity and Inclusion; Resilient Sustainable Development and Green Recovery; Effective Governance.\n  \n  \n    SGD tag: 1 No poverty; 2 Zero hunger; 3 Good health and well-being; 4 Quality education;  5 Gender equality;  6 Clean water and sanitation; 7 Affordable and clean energy; 8 Decent work and economic growth; 9 Industry, innovation and infrastructure; 10 Reduced inequalities; 12 Sustainable cities and communities; 12 Responsible consumption and production; 13 Climate action; 14 Life below water; 15 Life on land ; 16 Peace, justice, and strong institutions; 17 Partnerships for the goals.\n  \n\n\nResources\n\nThis toolkit compiles a set of tools and their resources to assist UNDP colleagues in delivering initiatives that support sustainable development. Below is a description of the types of resources found in the tools.\n\n\n  Blog: An online article from RBLAC Labbers where they share their thoughts, expertise, and insights regarding the implementation of the tool.\n  Report: A document presenting information about the process, methodology, results, and lessons learned from the design and execution of the tool.\n  Slideshow: A document in presentation format summarizing key information about the implementation of the tool.\n  Dashboard: A visual display of information, often presented in the form of charts, graphs, tables, and other visual elements, designed to provide users with a quick overview of key data relevant to the tool.\n  ToR (Terms of Reference): A document describing the terms under which a contract is made for the acquisition required for the implementation of the tool.\n  Manual: A document providing instructions, guidance, or information on how to perform a task, operate a system or device, or use a product, such as guides, concept notes, and data sheets.\n  Templates: Pre-designed layouts or formats that serve as a starting point for implementing the tool, such as canvases for collaborative exercises.\n  Access link: A web link or URL providing access to a specific resource, such as courses or apps developed as part of the tool.\n\n\nList of tools found in this toolkit.\n\n\n  Innovating to tackle poverty and inequality by collaborative and decentralized grassroot solution mapping with volunteers.\n  Innovating to tackle poverty and inequality by digital inclusion through a network of nearby stores.\n  Innovating to tackle poverty and inequality by training volunteers on participatory and analytical methodologies.\n  Innovating to tackle poverty and inequality through online user-center capacity building training.\n  Innovating for gender equality by using interactive and participatory discussions to change perspective.\n  Innovating for gender equality by building citizens’ digital security capacities.\n  Innovating for gender equality trough startups’ accelerators.\n  Innovating for environment through the co-creation and mapping of scientific solutions with citizens.\n  Innovating for environment through a crowdsourced app for environmental monitoring.\n  Innovating for environment by prioritizing environmental interventions through a dynamic map.\n  Innovating for resilience by addressing local challenges through community systems thinking.\n  Innovating for resilience through innovation opportunities workshop.\n  Innovating for governance by using design thinking to design public products or services.\n  Innovating for governance by mapping digital capacities for municipalities.\n  Innovating for governance by using Natural Language Processing Models for building consensus.\n  Innovating for governance through a methodology for exploring signals of change.\n  Innovating for governance by online and collaborative mapping of the national innovation ecosystem.\n  Innovating for governance by using a multistakeholder governance model for an innovation unit.\n  Innovating for governance through a MOOC on public and social innovation concepts and tools.\n  Innovating for governance by using text mining algorithms to analyze public programs performance.\n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "FURTHER DETAILS: TAGS &amp; RESOURCES Tags There are four main categories to tag tools: UNDP’s Strategic Plan signature solutions (1)...",
  "id": 50
},{
  "title": "by collaborative and decentralized grassroot solution mapping with volunteers",
  "url": "/1.Poverty/1.1%20VolunteerMapping.html",
  "content": "Collaborative and decentralized grassroot solutions mapping with volunteers\n\nWhat it does.\nThis solution mapping approach allows you to collect data about grassroots solutions in a collaborative and decentralized manner, with minimal cost and short work cycles. The data is gathered by volunteer mappers through semi-structured interviews and surveys. Volunteer mappers are supported through induction sessions on specific topics, such as what a grassroots solution is, how to handle recollection instruments, and how to conduct an interview. Once the data collection is completed, a collective intelligence exercise is carried out to enable the community mappers to share their experiences and findings.\n\nValue proposition for the government/other partner.\nThis collaborative and decentralized mapping approach, in which volunteers from the communities play a key role, allows governments and other partners to achieve contextualized mapping in different geographical locations simultaneously. Such contextualization helps, for example, to gather information on how communities re-signify public policies or other initiatives. Furthermore, the approach enables real-time scalability of the mapping project. Additionally, it empowers partners to gain a deeper insight into the various forms and manifestations that those solutions can take.\n\nWhy and when to use it.\nThis approach proves most valuable when you need to map solutions from different places simultaneously, but you count with limited resources, since it relies on contributions from volunteer mappers. Moreover, it is a useful model when you want to carry out a solution mapping with broad territorial scale, but you have mobility restrictions, or do not have a budget for travelling. Additionally, the implementation of the tool will work best when you have resources and time available and the will to build spaces of support and interaction among all the stakeholders involved in the project. Experience in strategic alliance building is not a must, but it certainly is a factor that contributes to the success of implementing this approach.\n\nKnown issues and troubleshooting.\nIf it is not possible to engage volunteers with knowledge of the local circumstances of the community where the solutions mapping is to take place, this tool may result in gathering incomplete or inaccurate data. Also, if the community is affected by severe limitations in connectivity, conducting a remote mapping may not be feasible.\n\nContext.\nIn early 2020, the Argentina Acceleration Lab (AccLab) received an award from UN Volunteers and commenced work on a blueprint about models of volunteering. Simultaneously, the impact of COVID-19 intensified, leading to a nationwide quarantine in the country. The economic consequences of this measure had a significant impact on society, especially in sectors affected by multiple vulnerabilities. Consequently, the AccLab focused on mapping community-based solutions for financial inclusion and socioeconomic recovery with the assistance of volunteers. The Lab was not alone in this mission; it collaborated with Territorios en Acción (TeA), a joint initiative comprising different academic and scientific institutions, and partnered with national universities across the country.\n\nCost to implement.\nYou must consider a budget ranging from USD 9,000 to USD 14,000 to hire the team needed to implement the solution. Coordination costs may vary depending on the characteristics of your coordination partner. An academic or scientific organization might represent a more cost-efficient option, particularly if it is an ally with previous ties with your team.\n\nTime\nThe application of the model is cost-efficient and does not require extended periods of time. In the experience of the Lab, the mapping was done in two months.\n\nPeople.\nTo implement this solution mapping model, you will need a team with the following roles:\n\n  Volunteers: You need 1 volunteer for every 4 to 6 interviews you want carry out, as they are the ones that collect the information from direct sources.\n  Facilitators: You need 1 facilitator for every 2 to 4 volunteers, as they are who train volunteers on how to conduct the mapping.\n  Project coordinator: You need one person (an individual or organization) responsible for managing the project, coordinating the facilitators and volunteers, and reporting the results.  This person should work with facilitators and form a federal gender-equality group of volunteers, potential agents of change in their communities. The project coordinator should organize working subgroups. This space provides methodological technical assistance during the entire process. The coordination group holds meetings to monitor the solutions mapping progress, during which individual follow-up of each interviewer is reinforced to ensure compliance with the project’s objectives and deadlines.\n  Graphic designer: You need one person (or agency) to manage the visual aspects of the project, such as design the training materials for the volunteers and the final report.\n\n\nAs an example, consider that one mapping reaching 40 interviewees can be done with 10 volunteers, supported by 8 facilitators and overseen by a project coordinator.\n\nFocal point.\nMaría Verónica Moreno\n\nCountry, year, and language.\nArgentina, 2021, Spanish and English.\n\nResources.\n\n  Report (Spanish) - Búsqueda compartida: mapeo de soluciones CoLaborativo. Inclusión financiera y recuperación económica\n  Report (English) - Shared search: CoLlaborative solutions mapping. Financial inclusion and economic recovery\n  Blog (Spanish) - Estrategias Co-Lab(orativas): las soluciones y los mapeos con otros\n  Blog (English) - Co_Lab(orative) strategies: mapping solutions with others.\n\n",
  "tags": null,
  "sdg": ["10 Reduce Inequalities","16 Peace Justice And Strong Institutions"],
  "enablers": ["Strategic innovation"],
  "signature_solutions": ["Poverty & inequality","Resilience"],
  "rblac_priorities": ["Inclusive and Sustainable Growth","Equity and inclusion"],
  "excerpt": "Collaborative and decentralized grassroot solutions mapping with volunteers What it does. This solution mapping approach allows you to collect data...",
  "id": 50
},{
  "title": "by digital inclusion through a network of nearby stores",
  "url": "/1.Poverty/1.2%20DigitalInclusionStores.html",
  "content": "A nearby stores network for digital inclusion\n\nWhat it does.\nThis tool enables you to build a network of nearby stores (markets and shops located within neighborhoods), as a territorial solution, to enhance access to digital services within communities. Through the stores affiliated to the network, neighbors can conveniently conduct various online administrative procedures (such as payments or government requests) close to their homes with the support of shopkeepers. This allows citizens to save time, money, and distance; and benefits nearby stores by increasing their sales.\n\nValue proposition for the government/other partner.\nImplementing a network of nearby stores for digital inclusion enables local governments to promote throughout the territory access to digital public services, and to foster economic resilience and growth by boosting stores’ sales. Bringing nearby stores with computers and internet access into the network allows for a more efficient use of existing resources and a reduction of inequalities within the community.\n\nWhy and when to use it.\nThis tool is most useful when there is a digitized public administrative system with many procedures that must be carried out online or in central offices. It is particularly beneficial when access to both online and in-person procedures is problematic due to financial constraints, distance, and time restrictions.\n\nKnown issues and troubleshooting.\nThis tool may not be the most suitable choice for you if (1) nearby stores in the community lack technological devices and stable internet connectivity; (2) you do not have supportive partners to assist you.  Such partners include stores owners who should not only be willing to join the network but also be open to learn the necessary skills to assist neighbors with digital administrative procedures. Other key partners are government officials since they can be allies in mobilizing support from store owners and effectively communicating the project to the community. Additionally, governmental partners can help to have a better understanding of the priorities and needs each territory has regarding digital inclusion.\n\nContext.\nThe Con Vos Network was created to test one of the solutions identified with the potential to achieve higher levels of digital inclusion through the Solutions Mapping of the AccLab. The mapping focused on surveying innovative grassroots solutions, strategies, and tools implemented by people living in low-income neighborhoods during the pandemic to address their daily challenges. These elements served as evidence and/or models to expedite our understanding of various issues from a systemic or global perspective.\n\nAmong the solutions identified was the experience of a stationery store owner located in a low-income neighborhood in the Greater Buenos Aires area. She began offering an additional service: assisting her customers with their digital administrative procedures in exchange for a small fee. This case exemplifies the central role played by nearby stores in introducing simple technologies to their neighbors, as in the past was the case of photocopiers, call centers, or mobile phone card recharging. Consequently, these stores become both spaces for meeting the needs of their customers and avenues for them to adopt these new technologies.\n\nCost to implement.\nThe cost of implementing this tool can vary from relatively low to moderate, depending on the complexity of the network you intend to establish. A medium-scale implementation, comprehending a network of around 30 nearby stores and a timeframe of four months, could require an estimated budget of USD 60,000 to USD 75,000, which includes the cost of hiring the required team. In addition, you could consider implementing small incentives for shop owners, along with some fieldwork recruiters, all of which could add between USD 10,000 to USD 13,000 to your budget.\n\nTime\nThe tool is expected to be developed and implemented within a four-month timeframe. The first two months will be devoted to project planning, followed by a two-month on-site implementation phase. Once installed, the network is designed to be self-sustaining.\n\nPeople.\nTo implement this tool, you will need a team of three members:\n\n  One project coordinator responsible for planning, developing, and implementing all aspects of the project.\n  One fieldwork coordinator responsible for overseeing the activities related to the implementation of the project within the territory.\n  One communicator dedicated to managing the communicational and design aspects of the project, such as promotional videos or the signage materials for identifying the shops of the network.\n\n\nSome additional roles can contribute to better results, such as local promoters or field recruiters. They can play a vital role in encouraging both neighbors and shopkeepers to join the network.\n\nFocal point.\nLorena Moscovich\n\nCountry, year, and language.\nArgentina, 2020-ongoing, Spanish and English.\n\nResources.\n\n  Report (Spanish) - Con Vos Fray. Una iniciativa que promueve los mercados comunitarios y la inclusion digital.\n  Report (English) - Con Vos Fray. An initiative that promotes community markets and digital inclusion.\n  Report (Spanish) - Con un poco de ayuda de mis vecinos. Red Con Vos, un piloto que conecta a mercados comunitarios con inclusión digital.\n  Report (English) - With a little help from my neighbors. The Con Vos Network, a pilot test connecting community markets with digital inclusion.\n  Blog (Spanish) - La Red Con Vos, el piloto que conecta a mercados comunitarios con inclusión digital.\n  Blog (English) - The Con Vos Network, the pilot that connects community markets with digital inclusion.\n  Blog (Spanish) - Mercados comunitarios para promover la inclusión digital en la digitalización de las ciudades\n  Blog (English) - Community markets to promote digital inclusion in digitalization of cities\n  Blog (Spanish) - ¿Puede una solución improvisada resolver un problema persistente?\n  Blog (English) - Can an impromptu solution solve a complex problem?\n\n",
  "tags": null,
  "sdg": ["10 Reduce Inequalities","11 Sustainable Cities And Communities"],
  "enablers": ["Strategic innovation","Digitalization"],
  "signature_solutions": ["Poverty & inequality","Resilience","Governance"],
  "rblac_priorities": ["Equity and inclusion"],
  "excerpt": "A nearby stores network for digital inclusion What it does. This tool enables you to build a network of nearby...",
  "id": 50
},{
  "title": "by training volunteers on participatory and analitical methodologies",
  "url": "/1.Poverty/1.3%20VolunteersGuide.html",
  "content": "Volunteers’ training guide on participatory and analytical methodologies.\n\nWhat it does.\nThis guide allows you to build the capacities of volunteers for conducting solution mapping, exploring data sources, engaging in future scanning, and carrying out experimentation activities. These skills can be quickly implemented to address the needs of people in the field.\n\nValue proposition for the government/other partner.\nBy using the volunteer’s guide, social organizations and international cooperation can involve their members in activities that collectively address development challenges, document their learnings, and broaden the scope of their impact.\n\nWhy and when to use it.\nThis tool is valuable when organizations involve volunteers in the field, aiming to swiftly understand the needs of the people. Volunteers serve as the eyes and hands that facilitate rapid learning and action in response to those needs.\n\nKnown issues and troubleshooting.\nIt is not yet the best moment to make use of this tool if:\n\n  the partner does not have the intention of addressing the problem through a collaborative approach with volunteers participating in field activities;\n  the partner does not plan to implement the solutions obtain from the field experiences;\n  the volunteers can’t commit to the full program’s length (including implementing the solution);\n  the is no need to explore alternative solutions, as there are proven efficient solutions for the problem being address;\n  there are no resources to facilitate the exchange of learnings.\n\n\nContext.\nThis tool came into existence through a partnership between UNDP and Centro de Voluntariado Guatemalteco (CVG). We recognized that volunteers had a unique opportunity to contribute to development due to their proximity to the conditions of people in need. Their eyes and hands on the ground provide an invaluable resource for mapping solutions, exploring information sources, anticipating futures, and experimenting with innovations. We discovered that the profound personal experiences and learnings from volunteers had untapped potential when integrated into collective learning experiences. Through this integration, we can build our understanding and explore possibilities for action.\n\nCost to implement.\nYou will need a budged around USD 15.000 to hire the team needed and to carry out the workshops. While the tool can be adapted to various conditions, having access to a venue, the capability to share visual materials, an internet connection, materials for co-designing, and provisions for participants, including food, can be beneficial.\n\nTime\nYou will need around four months to plan, carry out the workshops, process and communicate learnings. The work whops can range from as short as half a day when using specific sections of the volunteer guide to a full program extending over three months, which may include field visits.\n\nPeople.\nTo use this tool, the following team members will be required:\n\n  One facilitator familiar with the volunteer guide to conduct workshops.\n  One person responsible of coordinating logistics for gathering participants, securing a venue, and ensuring participant engagement.\n\n\nFocal point.\nJavier Brolo\n\nCountry, year, and language.\nGuatemala, 2022, Spanish\n\nResources.\n\n  Manual (Spanish) Contribuyendo a la Aceleración del Desarrollo Sostenible desde el Voluntariado\n\n",
  "tags": null,
  "sdg": ["17 Partnerships For The Goals"],
  "enablers": ["Strategic innovation","Digitalization"],
  "signature_solutions": ["Poverty & inequality","Governance","Resilience","Environment","Energy","Gender equality"],
  "rblac_priorities": ["Inclusive and Sustainable Growth","Equity and inclusion"],
  "excerpt": "Volunteers’ training guide on participatory and analytical methodologies. What it does. This guide allows you to build the capacities of...",
  "id": 50
},{
  "title": "through online user-center capacity-building training",
  "url": "/1.Poverty/1.4%20CapacitiesBuilding.html",
  "content": "Online user-center capacity-building training\n\nWhat it does.\nThis online user-center capacity-building training allows you to:\n\n  Strengthen and boost refugees, migrants and the host population’s entrepreneurship skills and resilience.\n  Promote social cohesion among migrants and the host population.\n  Build a learning community.\n\n\nValue proposition for the government/other partner.\nBy having an online user-center capacity-building training you allow local governments, international cooperation and grassroot organizations to boost entrepreneurship and social cohesion through an energetic and motivational learning journey, actionable and easy to follow, focused on resilience and networking opportunities.\n\nWhy and when to use it.\nThis tool is useful to build a learning community among specific vulnerable populations that require business skills to strengthen their enterprises, either for profit or not. It is especially helpful when there is fragmentation among the host population and migrants/refugees’ population.\n\nKnown issues and troubleshooting.\nIt is not yet the best moment to make use of this tool if:\n\n  there is a digital gap in terms of kills or connectivity among the beneficiaries; in this case consider offering previous learning sessions for Zoom and the digital platform before the start of the learning journey, as well as short tutorials and dedicated ‘office hours’ for troubleshooting;\n  the partner is not considering reaching to the grassroot organizations that already work with the target population to ensure that expected participants are aware and register;\n  the partner can’t provide a repository for all resources (and video of the online sessions).\n\n\nContext.\nCREANDO was launched in 2021 with a small grant from the Swiss Development Cooperation to pilot projects on digitally enabled livelihoods among migrants. UNDP Peru had prior experience in deploying capacity-building initiatives for migrants, but with limited success (only 17 registered participants). The Peru Lab suggested using an ethnographic approach to design a project that considered entrepreneurs’ specific needs, time availability, and even their concerns regarding their migrant status (compared to Peruvian entrepreneurs). This user-centric approach yielded the expected results: over 600 registered participants in CREANDO’s first edition in 2021 and over 2100 registered participants in 2022. During the program, the beneficiaries attend and participate in a three-week training including business tools sessions, inspiration sessions, business clinics and networking sessions. CREANDO’s next steps include a festival scheduled for April 2024 and local innovation labs that address issues related to migration through a co-creation process between authorities and citizens.\n\nThe Peru Lab has used the CREANDO learning journey with Venezuelan entrepreneurs based in Peru, but it can also be adapted for young changemakers, social entrepreneurs, etc.\n\nCost to implement.\nTo carry out the online capacity-building training you will need an online meeting application subscription, such us Zoom/Typeform/Vimeo.\n\nTime\nYou will need around three months to plan and organized the training. Consider at least two months in advance to contact all potential experts and panelists, prepare materials (such as canvas) and to convene participants. It is recommended that the call for participants should be at least two weeks long, preferably relying on existing grassroots organizations, and should be sent at least 2 weeks before the start of the training if not more. The complete learning journey takes six weeks, with three 1.5-hour-long sessions per week.\n\nPeople.\nTo carry out the online capacity-building training, you will need a team of four people:\n\n  One person to lead the online class and a second one to cover the chat and address technical issues (open mics for example) at the online class. Depending on the thematic of the online class, it could be led by the Lab’s team, by academic experts or by consultants.\n  One person to oversee online reminders to ensure participants join the sessions.\n  One person to plan and coordinate with partners the call for participants and other logistics.\n\n\nFocal point.\nMariana Olcese\n\nCountry, year, and language.\nPeru, 2022, Spanish.\n\nResources.\n\n  Access link (Spanish) - Plataforma en línea del Laboratorio de Aceleración de Perú\n  Blog (English) - Migrant talent, pa’lante talent\n  Blog (English) - Creating Creando (Part 1): A learning community for migrant entrepreneurs is born\n  Blog (English) - Creating Creando (Part 2): The learning journey\n  Blog (English) - Creating Creando (Part 3): The results of our 2022 learning journey\n  Blog (Spanish) - Creando la nueva generación de talentos pa’lante\n  Template (Spanish) - Canvas Propósito\n  Template (Spanish) - Canvas Creando Valor: Diseña tu propuesta\n  Template (Spanish) - Canvas Creando tu modelo de negocio\n  Template (Spanish) - Canvas Creando conexión: Perfil de tus usuarios\n  Template (Spanish) - Canvas Creando una marca\n\n",
  "tags": null,
  "sdg": ["8 Decent Work And Economic Growth"],
  "enablers": ["Digitalization"],
  "signature_solutions": ["Poverty & inequality","Gender equality","Resilience"],
  "rblac_priorities": ["Inclusive and Sustainable Growth","Resilient Sustainable Development and Green Recovery"],
  "excerpt": "Online user-center capacity-building training What it does. This online user-center capacity-building training allows you to: Strengthen and boost refugees, migrants...",
  "id": 50
},{
  "title": "by using interactive and participatory discussions to change perspective",
  "url": "/2.Gender/2.1%20ParticipatoryPerspective.html",
  "content": "Using interactive and participatory discussions to change perspective\n\nWhat it does.\nThis tool enables you to facilitate interactive and participatory discussions, an activity that invites participants to collaboratively construct knowledge around a specific topic. The goal is to provide information - based on the reading - generate reflection, change perspectives, and potentially influence behavior. The organizers of these gatherings choose the topic to discuss, and participants select what they want to read from a list of optional readings. The gatherings promote horizontal dialogue, fostering an equal and safe space for everyone to participate and reflect.\n\nValue proposition for the government/other partner.\nApplying interactive and participatory discussions enables stakeholders to:\n\n  Increase awareness involves exposing participants to different experiences and viewpoints, prompting them to reconsider their own perspectives and behaviors.\n  Develop empathy through open dialogue, participants have the chance to empathize with other´s viewpoints, experiencing a deeper understanding of the impact of their own actions.\n  Ownership of change is more likely when participants actively contribute to discussions, as they feel responsible for and committed to altering their perspectives and behaviors.\n  Participatory discussions promote a cultural shift when groups collectively agree on the need for change and actively discuss strategies, fostering a shared sense of purpose.\n\n\nWhy and when to use it.\nThis tool empowers stakeholders to reshape participants’ perspectives on a specific topic, potentially prompting behavioral changes when the process is sustained over time, coupled with a strategic approach to acting. The tool is user-friendly, cost-effective, and yields results in the short term, making it applicable for any stakeholders. The guidelines for this tool are currently in Spanish and require translation.\n\nKnown issues and troubleshooting.\nTo use interactive and participatory discussions might not be the best approach if:\n\n  Stakeholders and participants can’t commit to sustaining a weekly discussions;\n  Stakeholders don’t have a broader strategy to raise awareness for the topic of their interest of and promote a change in perspective among the participants.\n\n\nContext.\nIn the framework of “Spotlight Initiative” which is a joint program of the European Union and the United Nations, with the goal of eliminating all forms of violence against women and girls in Member States by the year 2030. The execution of this initiative is coordinated by United Nations agencies: UN Women, the United Nations Population Fund (UNFPA), and UNDP, in collaboration with a few public institutions. As part of this initiative, we are implementing an intervention called “Brave Schools” in the educational system. The aim is to assess whether interactive and participatory discussions can lead to changes in perspective and, subsequently, in behavior regarding gender-based violence and discrimination among students.\n\nWe created a safe space for dialogue and reflection on gender-based violence and discrimination within schools as a crucial mechanism to address this issue. Every week, adolescents gathered with their peers and a facilitator to share thoughts and reflections on gender roles and stereotypes based on a selected reading for the week. The exercise of engaging in collective dialogue and reflection resulted in a shift in perspective among students, as gender social norms were critically analyzed and challenged.\n\nCost to implement.\nTo hire a person responsible for organizing, convening, and implementing interactive and participatory discussions, a budget ranging from USD 4,800 to 7,200 will be required, depending on the timeframe.\n\nTime.\nTo convene and implement interactive and participatory discussions, it is recommended that the interactions with the participants last for a period of 4 to 6 months.\nPeople.\nTo use this tool the following team members will be required:\n\n  A person who pitches the methodology to stakeholders, emphasizing the transformative power of dialogue and discussions as tools to instigate a change in perspective and foster awareness. (UNDP in-kind contribution);\n  A person responsible for managing all logistics and coordinating the implementation of the innovation process.\n\n\nFocal point.\nAna M. Grijalva\n\nCountry, year, and language.\nEcuador, 2022-2023, Spanish\n\nResources.\n\n  Report (Spanish) – Informe de resultados\n  Report (Spanish) – Nota Metodológica\n  Report (Spanish) – Estrategia de sostenibilidad y escalamiento\n  Manual (Spanish) – Guía práctica de implementación\n\n",
  "tags": null,
  "sdg": ["5 Gender Equality","10 Reduce Inequalities","16 Peace Justice And Strong Institutions"],
  "enablers": null,
  "signature_solutions": ["Governance","Resilience","Gender equality"],
  "rblac_priorities": ["Equity and inclusion"],
  "excerpt": "Using interactive and participatory discussions to change perspective What it does. This tool enables you to facilitate interactive and participatory...",
  "id": 50
},{
  "title": "by building citizens' digital security capacities",
  "url": "/2.Gender/2.2%20DigSecurityMOOC.html",
  "content": "Building citizens’ digital security capacities.\n\nWhat it does.\nThe Digital Security MOOC allows you to strengthen the capacities of citizens, as internet users, to identify digital risks related to privacy and security during job hunting. The course is free and consists of four modules, which take around 8 hours to complete.\n\nValue proposition for the government/other partner.\nBy having a digital security MOOC, national and local governments can increase digital rights awareness and promote basic privacy and security tools knowledge. This tool is an introduction, not only to navigation protection, but also opens the reflection around privacy and digital rights.\n\nWhy and when to use it.\nThe course is in Spanish and applicable to any Spanish-speaking country. It is targeted to all internet users, from teenagers to the elderly population; however, it has a gender approach, considering that women are specially targeted with malicious or fraudulent content.\n\nKnown issues and troubleshooting.\nIf citizens don’t have access to cellphones or computers and to internet, it is not yet the best moment to make use of this tool.\n\nContext.\nThese resources emerged in 2020, amid the pandemic, as internet and social network usage surged, particularly among individuals in the informal sector who rely on digital platforms for economic activities. Through workshops and dialogues with young people, it was observed that women encountered digital risks while seeking employment online or engaging in work-related activities, rendering them vulnerable to fraudulent clients or sexual exploitation.\n\nThe course is available on the La Libre Tecnologías Comunitarias website and can be accessed permanently. La Libre is a non-profit collective project that originated in 2014, aiming to provide accessible IT infrastructure for human and environmental rights defenders, as well as social justice and equality advocates. Their work is grounded in open-source technologies and primarily focuses on Ecuador, although they also offer software and assistance to numerous organizations across Latin America and the Caribbean.\n\nAlthough you can register for the course at any time, it’s advised that you periodically call for participants and monitor the results of the calls. To date, we have conducted two monitored cohorts of students, one in 2020 and another in 2023.\n\nCost to implement.\nTo launch a new monitored call for the course incurs no cost; however, you will need a budget ranging from USD 200 to USD 500 for advertising on social networks to reach the targeted audience. Additionally, if the monitoring activities of the course cannot be covered by the Lab’s team, then an additional USD 500 will be needed to hire a consultant.\n\nTime\nTo launch a new monitored call for the course, you need to allocate around one month for coordinating with La Liebre through Ecuador’s UNDP country office and inviting participants to sign up for the course. The call for participants should be made at least three weeks before the start of the course.\n\nPeople.\nTo launch a new call for the course, you need one person to monitor responses and to process the final survey results.\n\nFocal point.\nPaulina Jiménez\n\nCountry, year, and language.\nEcuador, 2023, Spanish.\n\nResources.\n\n  Access link (Spanish) – Herramientas para la seguridad digital en el uso de internet\n\n",
  "tags": null,
  "sdg": ["5 Gender Equality","10 Reduce Inequalities","16 Peace Justice And Strong Institutions"],
  "enablers": ["Digitalization"],
  "signature_solutions": ["Gender equality"],
  "rblac_priorities": ["Equity and inclusion"],
  "excerpt": "Building citizens’ digital security capacities. What it does. The Digital Security MOOC allows you to strengthen the capacities of citizens,...",
  "id": 50
},{
  "title": "through startups' accelerators",
  "url": "/2.Gender/2.3%20AcceleratorFI.html",
  "content": "Startup accelerator program for women’s financial inclusion\n\nWhat it does.\nThis program enables you to identify startups for women’s financial inclusion through a national call, and subsequently rank and select them to strengthen their business models, thus allowing them to scale up their solutions and enhance their impact. As part of the strengthening process, selected startups are connected with technical support and potential investors. Additionally, relevant stakeholders from the financial ecosystem participate in the selection process to become acquainted with the new startups proposals.\n\nValue proposition for the government/other partner.\nBy having a startup accelerator program for women’s financial inclusion, you will enable the financial ecosystem to grow, and more women will have access to alternative financial services. It would be beneficial to ally with a national (public or private) partner focused on women’s empowerment to align the call for startups with the demands of the ecosystem and to enhance the reach of the program.\n\nWhy and when to use it.\nThis tool is most useful when a significant number of startups (a critical mass) offer solutions for women’s financial inclusion, and when there exists a supportive ecosystem for the growth of such startups, in other words the ecosystem provides the services and infrastructure needed for the development of startups, including specialized incubators, investors, funds, and other resources. This ecosystem includes investors who are keen on backing digital gender-based solutions and a private sector that is interested in integrating these solutions into their businesses.\n\nKnown issues and troubleshooting.\nIf a gender-focused approach is not a government priority, or if there have been very few activities or interventions focused on women’s financial inclusion, it may not be the right time to implement this methodology. For the sustainability and scalability of strengthened startups, it is crucial that government and other key ecosystem stakeholders have a genuine interest in working on financial inclusion. If these conditions are not met, a preliminary stage is necessary to raise awareness about the importance of a gender-focused approach for sustainable and inclusive development and to identify key stakeholders for developing the ecosystem.\n\nContext\nIn early 2022, we identified certain conditions within the ecosystem that prompted us to consider how to support startups with digital solutions for women’s financial inclusion. On one hand, UN Women presented some studies on the financial inclusion of women in Bolivia. Additionally, the Chamber of Fintech had recently been established, along with an initial startup map. Furthermore, a group of angel investors had spent several years identifying startups with significant investment potential. With these circumstances in mind, our Lab, in partnership with UN Women, launched a national initiative called the “Women’s Financial Inclusion Lab,” aimed at startups offering innovative digital solutions. The selection of the most promising startups was carried out by a committee comprising representatives from financial institutions, NGOs, donors, and investors, serving as a mechanism to connect startups with the broader ecosystem.\n\nAs a result, the business models of two startups were strengthened through the expertise of both international and national experts. These two startups have since successfully implemented their models, thereby enhancing their impact on the financial inclusion of women.\n\nCost to implement.\nTo implement a startup accelerator program for women’s financial inclusion, you will need a budget between USD 2.000 and 3.000, which will be used to hire a person to be responsible for the implementation of the call and to design communication materials about the call and the results. You will need and extra budget ranging from USD 7.000 to USD 10.000 per startup to provide technical support to strengthen their business model.\n\nTime\nPlanning the process, identifying key stakeholders, launching the national call, selecting the startups, hiring, and providing the technical support will require approximately 6 to 9 months. From this period, between 3 to 6 months correspond to the technical support provided to 1) strengthen the business model of the startup and 2) to prepare the startup to pitch to investors.\n\nPeople.\nTo implement this tool, the following team members will be needed:\n\n  A person to oversee logistical processes, which includes managing the call, coordinating the selection committee, facilitating startup pitches, and overseeing the selection process.\n  A person to define the Terms of Reference (ToRs) for strengthening the selected startups and to develop progress indicators aimed at enhancing their impact.\n\n\nFocal point.\nPatricia A. Choque\n\nCountry, year, and language.\nBolivia, 2022 - ongoing, Spanish\n\nResources.\n\n  Manual (Spanish) – Criterios de selección de startups\n  Template (Spanish) – Convocatoria para startups\n\n",
  "tags": null,
  "sdg": ["5 Gender Equality","10 Reduce Inequalities"],
  "enablers": ["Digitalization"],
  "signature_solutions": ["Gender equality","Poverty & inequality"],
  "rblac_priorities": ["Equity and inclusion","Inclusive and Sustainable Growth"],
  "excerpt": "Startup accelerator program for women’s financial inclusion What it does. This program enables you to identify startups for women’s financial...",
  "id": 50
},{
  "title": "through the co-creation and mapping of scientific solutions with citizens",
  "url": "/4.Environment/4.1%20ScienceMap.html",
  "content": "A co-created citizen science solution mapping\n\nWhat it does.\nThis co-created citizen science solution mapping allows you to:\n\n  Acknowledge the social importance of participation in citizen science initiatives, covering a wide and heterogeneous range of stakeholders.\n  Identify, characterize, and make visible existing initiatives and shared patterns to produce inputs for public policies, promoting a bottom-up approach and new coordination possibilities.\n  Promote the production of evidence on the initiatives developed to create products for different purposes that may result in digital repositories of different types of information, collaborative maps, materials to work in the classroom, among others.\n\n\nThe data is collected through the leaders of each of the science initiatives by cards that include details of the solution organized by predefined categories, systematizing the information, and enabling comparisons.\n\nValue proposition for the government/other partner.\nThis methodology will allow your governmental partner to gain a clear view of the ecosystem of people-powered solutions that emerge in response to specific development challenges. This paves the way for better public policymaking. With this tool, your governmental partner gains the ability to pinpoint essential collaborators for tackling development issues. Additionally, it helps identify available resources, patterns, spot any gaps, and uncover success stories that are ready to be scaled.\n\nRegarding other partners, such as leaders of grassroots initiatives, this tool allows them to gain a better understanding of who else is working on the same issues. This tool facilitates the formation of alliances and networking opportunities, making it easier for them to connect and work together effectively.\n\nWhy and when to use it.\nThis tool is most useful when there is a gap in the information available regarding citizen science projects due to a lack of acknowledgement of people-powered initiatives. Moreover, since the mapping efforts involve establishing a direct contact with the citizen science initiatives, this model is most useful when you not only are interested in gathering data but also in fostering citizen participation and in creating community.\n\nKnown issues and troubleshooting.\nThis tool may not be the most suitable choice for you if: 1) your country, region, or community already has an initiative that documents people-powered solutions, 2) you do not have supportive partners to assist you with the co-design of the data gathering instruments, and later on, the co-systematization of the information, or 3) you have difficulties for, or no have the means to, bonding with the citizen science initiatives.\n\nContext.\nWithin its citizen science initiative, the Argentina Accelerator Lab collaborated with the national Ministry of Science, Technology, and Innovation (MINCYT, by its Spanish acronym), utilizing this tool to map citizen science initiatives. In 2021, the first edition of this solutions mapping effort was published, encompassing information from 30 projects. This number increased to 55 in the second edition of the mapping. The forthcoming edition, scheduled for publication at the end of 2023, will include information on 100 projects. Moreover, these solutions mapping efforts not only contributed to the development of a new national federal policy aimed at promoting citizen science initiatives but also had a transformative impact on the overall citizen science ecosystem.\n\nCost to implement.\nYou will need a budget between USD 4,000 and USD 6,000 to hire the team needed to plan, design the deliverables, and implement the project.  The AccLab has already created a visual identity to complement the methodology, and it’s accessible for anyone looking to replicate this tool. Thus, the design of the visual aspects for the project is an item you can leave out of your budget.\n\nTime\nThe time required to implement this tool can vary depending on several factors such as the desired scope of your solutions mapping, the accessibility of information, and the availability of the mapping team’s time. Possibly, the iteration process might be the most time-consuming aspect. The effort for mapping 30 to 50 grassroot solutions could take between 6 to 8 months.\n\nPeople.\nYour team may consist of 3 members with the following roles:\n\n  A project coordinator who advocates for the initiative with partners and in the best-case scenario forms a joint team with a public institution.\n  A collaborator for managing all logistics and coordinating the implementation process\n  A person responsible for style editing and English translation (if it is not the national language).\n\n\nFocal point.\nMaría Verónica Moreno\n\nCountry, year, and language.\nArgentina, 2021 – ongoing, Spanish and English.\n\nResources.\n\n  Report (English) – Citizen Science. Solutions Mapping. Second Edition\n  Report (Spanish) – Ciencia Ciudadana Mapeo de iniciativas nacionales. Segunda Edición\n  Report (English) – Lessons Learned from the First Edition of the Environmental Citizen Science Solutions Mapping\n  Report (Spanish) – Aprendizajes de la primera edición del mapeo en ciencia ciudadana ambiental\n  Blog (Spanish) – Ciencia Ciudadana Ambiental:  Mapeo de iniciativas nacionales.\n  Report (Spanish) – Ciencia Ciudadana Mapeo de iniciativas nacionales. Primera Edición\n  Blog (English) – Environmental citizen science in Argentina: mapping as an enhancement.\n  Blog (Spanish) – Ciencia ciudadana ambiental en Argentina: el mapeo como puesta en valor.\n  Blog (English) – People are not datasets. Citizen science and collective intelligence.\n  Blog (Spanish) – Las personas no son bases de datos. Ciencia ciudadana e inteligencia colectiva.\n\n",
  "tags": null,
  "sdg": ["13 Climate Action","14 Life Below Water","15 Life On Land"],
  "enablers": ["Strategic innovation"],
  "signature_solutions": ["Environment","Resilience"],
  "rblac_priorities": ["Resilient Sustainable Development and Green Recovery"],
  "excerpt": "A co-created citizen science solution mapping What it does. This co-created citizen science solution mapping allows you to: Acknowledge the...",
  "id": 50
},{
  "title": "throught a crowdsourced app for environmental monitoring",
  "url": "/4.Environment/4.2%20EnviromentMonitoringApp.html",
  "content": "A crowdsourced app for environmental monitoring\n\nWhat it does.\nThis crowdsourced app to monitor the general situation of aquatic ecosystems allows you to collaboratively generate data and create a space where citizens can express their concerns and opinions about the environmental situation. The app is aimed at evaluating the ecosystem making users answer prompts like “Do you see any of these animals?”, “Is there garbage on the riverbank?”, “Is there garbage in the water?”, “Does the water smell bad?”. Based on the responses, the app calculates an environmental index (with values between 0 and 100).\n\nValue proposition for the government/other partner.\nBy having a crowdsourcing app for environmental monitoring, you will enable the government to generate data collaboratively, allowing it to reach remote areas and foster its understanding on the ecosystems with the participation of citizens who have first-hand knowledge. The creation and continuous enhancement of this data allows the government to engage in evidence-based policymaking and policy innovation, generating valuable solutions for the participative conservation and protection of water bodies.\n\nWhy and when to use it.\nThis tool is most useful when there is a lack of systematic information on the aquatic ecosystems in your country, which results in poor environmental management, and there is a limited government presence in the targeted area.\n\nKnown issues and troubleshooting.\nIf there is a lack of 1) internet connectivity and/or lack of technological devices for citizens to use the app regularly or 2) lack of collaboration from government officials and volunteers to participate in the gathering of data and for fostering the use of the app, it would not be the best moment to make use of this tool yet.\n\nGovernment partners are also needed to better understand the needs and current situation of the aquatic ecosystems under monitoring, which helps you to evaluate any adjustments needed for creating the most suitable app possible. Work meetings and collective intelligence exercises can be conducted to engage government officials. Therefore, when governments do not have the means to actively participate in such activities, it might not be possible to reach the most successful implementation of this app.\n\nContext.\nIn the context of our solutions mapping initiative conducted in partnership with the Ministry of Science and Technology in 2022, we identified citizen science initiatives aimed at generating valuable evidence in areas such as flooding, bodies of water, and rainfall. Drawing inspiration from these initiatives, we developed (and tested) a collective monitoring app, enabling citizens, scientists, and the government to collaborate in monitoring aquatic ecosystems. Collaborating with three local governments in Buenos Aires—San Antonio de Areco, Mercedes, and Balcarce, Argentina—we initiated a small-scale experiment involving the development and implementation of the app. While visiting local lagoons or rivers, users can follow the app’s instructions, answering questions about their environment and providing photos of what they observe.\n\nCost to implement.\nThe development of the app will require hiring specialized technical services, which could amount to between USD 4,000 to USD 6,000. Additionally, you might consider adding a person responsible for the general direction of the project, including its reporting, which could add between USD 6,000 to USD 8,000 to your budget.\n\nTime\nThe design, planning and implementation of this tool could take from 6 to 8 months. The development of the app will not be time-consuming since it uses open-source code. There is no need to start from scratch. Besides the development of the app, the process might include meetings and collective intelligence activities, as well as interviews with key informants and government officials.\n\nPeople.\nA basic team for the implementation of this solution could include: 1) a person responsible for the general direction of the project, 2) and a person, or agency, in charge of the technical aspects of developing the app. Additionally, the collaboration with local governments officials and volunteers is fundamental.\n\nFocal point.\nLorena Moscovich\n\nCountry, year, and language.\nArgentina, 2022 – ongoing, Spanish and English.\n\nResources.\n\n  Report [English] - Environmental Citizen Science and its Effects on Participants, Governance, and Innovation. Evidence of Two Small-Scale Experiments.\n  Report [Spanish] – Los efectos de la ciencia ciudadana ambiental para los participantes, la gobernabilidad y la innovación. Evidencia de dos experimentos a pequeña escala.\n  Blog [English] – A simple solution for a complex problem: Citizen science, environmental policies and awareness.\n  Blog [Spanish] Una solución simple para un problema complejo: Ciencia ciudadana, conciencia y políticas ambientales.\n\n\n",
  "tags": null,
  "sdg": ["6 Clean Water And Sanitation","13 Climate Action","14 Life Below Water"],
  "enablers": ["Strategic innovation","Digitalization"],
  "signature_solutions": ["Environment","Governance"],
  "rblac_priorities": ["Resilient Sustainable Development and Green Recovery"],
  "excerpt": "A crowdsourced app for environmental monitoring What it does. This crowdsourced app to monitor the general situation of aquatic ecosystems...",
  "id": 50
},{
  "title": "by prioritizing environmental interventions through a dynamic map",
  "url": "/4.Environment/4.3%20InterventionMap.html",
  "content": "Dynamic map for municipal environmental interventions’ prioritization\n\nWhat it does.\nThe dynamic map for environmental interventions allows you to 1) combine multiple geolocated municipal-level data layers using a suitability modeler and 2) prioritize municipal environmental interventions.\n\nValue proposition for the government/other partner.\nBy having a dynamic map of municipal environmental interventions, you will enable the Ministry of Environment and local government authorities to improve their data-driven decision-making capacities for monitoring and designing environmental practices and policies.\n\nWhy and when to use it.\nThis tool is most useful when (1) there is a commitment from central and local authorities to adopt an evidence-based approach into their decision-making processes and (2) there are municipal-level statistics available for a region of interest, including at least a municipal boundaries data layer, human development and multidimensional poverty indexes, populated areas estimates, rivers and micro rivers location, and illegal dumpsite locations (for a waste management focus).\n\nKnown issues and troubleshooting.\nIt is not yet the best moment to make use of the tool if:\n-(1) there aren’t enough municipal statistics available and/or their quality isn’t consistent;\n-(2) the government does not have a designated team that can partake on the design and implementation of the methodology;\n-and (3) the governmental team involved does not have the expertise to utilize GIS open or licensed software used to implement the methodology.\n\nContext.\nThe tool was developed through collaborative efforts involving the Ministry of Environment, UNDP Environment Program, and UNDP Accelerator Lab in Guatemala. The focus was on incorporating evidence-based decision-making methods to guide solid waste management efforts in a specific region. Following a needs assessment stage, and with the support of UNDP HQ GIS specialists, data layers, GIS software, and analysis methods were identified and tested. The outcome was a suitability modeler implemented in ArcGIS, utilizing municipal-level data layers. Currently, the data layers and analyses are in the process of being integrated into the National Information System for Climate Change.\n\nIn the latest version of the tool, the combined municipal-level data layers include the UNDP human development index, UNDP multidimensional poverty index, illegal dumpsites reported by the Ministry of Environment, populated areas estimations, rivers, and administrative boundaries.\n\nCost to implement.\nA budget between USD 3.000 and 4.000 will be required to implement the tool with open-source GIS software, and a budget between USD 5.000 and 6.000will be required to implement the tool with licensed GIS software.\n\nTime\nIt will take from 3 to 4 months to collect the information, design, and implement the tool.\n\nPeople.\nTo use this tool the following team members will be required:\n-One developer to prepare data layers and configure the suitability modeler in GIS open or licensed software.\n-One coordinator to interact with stakeholders, get insights such as the weights for each data layer to be used and user testing experience for improvements.\n\nFocal point.\nCarlos Mazariegos\n\nCountry, year, and language.\nGuatemala, 2023 - ongoing, Spanish\n\nResources\n-Report (Spanish) - UNDP HQ ITM &amp; Guatemala_Work Plan.\n\n-Dashboard (Spanish) - Prueba de concepto: Mapa Dinámico de Residuos y Desechos Sólidos en la Cuenca del Río Motagua.\n\n-Manual (English) - ArcGIS Pro, Suitability Modeler documentation.\n\n",
  "tags": null,
  "sdg": ["11 Sustainable Cities And Communities","12 Responsible Consumption And Production","13 Climate Action"],
  "enablers": ["Digitalization"],
  "signature_solutions": ["Environment","Resilience"],
  "rblac_priorities": ["Resilient Sustainable Development and Green Recovery","Inclusive and Sustainable Growth"],
  "excerpt": "Dynamic map for municipal environmental interventions’ prioritization What it does. The dynamic map for environmental interventions allows you to 1)...",
  "id": 50
},{
  "title": "by addressing local challenges through community systems thinking",
  "url": "/5.Resilience/5.1%20CommunitySysThinking.html",
  "content": "Community systems thinking for addressing local challenges.\n\nWhat it does.\nThis tool is designed for local governments to trigger sustained social change, with a focus on community systemic thinking. It utilizes different forms and scopes of systemic thinking applied at the local level to:\n\n  Provide new knowledge about municipal challenges from a systemic perspective through participatory processes with diverse groups of people, including the perspective of those in vulnerable situations or distant from government.\n  Identify existing efforts and leverage points to prioritize intervention areas.\n  Identify local actors linked to areas of opportunity for promoting development and building shared interests that incentivize collaboration.\n\n\nValue proposition for the government/other partner.\nBy having a community-led systems thinking tool for addressing Human Development Report (HDR) challenges, you will enable participants with a structured and holistic approach to understanding, analyzing, and solving complex problems associated with local challenges, supporting a civic space for effective, inclusive, and participatory governance. The value proposition of such a tool lies in its ability to enhance decision-making, problem-solving, and overall effectiveness in addressing complex challenges, aligning with UNDP’s governance signature solution and SDG 16: building effective, accountable, and inclusive institutions at all levels.\n\nWhy and when to use it.\nThis tool is most useful when local governments face development challenges with little clarity on how to address them or where to start, when existing efforts seem ineffective, and when opposed perspectives stall policy design or implementation.\n\nKnown issues and troubleshooting.\nIf there is a lack of community engagement, open interest from authorities, and commitment to follow up on agreements derived from a participatory exercise, it’s probably not the best time to make use of this tool. In such cases, teams should work towards promoting the value of participatory governance with local authorities and the community.\n\nContext.\nUNDP Mexico has been publishing Human Development Reports periodically since 2003. These publications have enriched public discourse on topics such as gender gaps in human development, inequality, and social mobility in the country, as well as equity in the exercise of public spending.\n\nIn 2022, UNDP in Mexico released the Municipal Human Development Report 2010-2020, aiming to update data on the Municipal Human Development Index (HDI) and the Municipal Functional Capabilities Index (ICMF). The report includes an analysis that serves as a diagnosis of the human development situation in the country’s municipalities, identifying trends and providing recommendations to strengthen policies and public programs at all three levels of government.\n\nIn the Accelerator Lab, we seized this opportunity to visit some municipalities in the country. The goal was to learn more about the local experience and perspectives regarding the development challenges faced by communities, as well as the views of public servants in addressing these challenges. This was done with the aim of strengthening networks of local actors interested in promoting the Agenda2030 and creating opportunities for social change at the local level.\n\nCost to implement.\nThis is a very cost-effective solution that, without considering travel costs, can be funded with less than USD 10.000.\n\nTime\nWhile the community workshop is designed to happen in 3 days, considering two months to implement the solution fully, including a month before hand to connect to local actors and prepare the ground and a month afterwards to systematize information and create products to return to the community.\n\nPeople.\nThe implementation of this tool involves the participation of the following groups:\n\n  Facilitating team: A group of 3-5 individuals with skills to moderate conversations and create a safe, dynamic, and inclusive participatory space.\n  Local connection: Individuals identified as local leaders with a good understanding of the context, territory, and its people. This group is particularly crucial when facilitators are not from the community. They assist in identifying and inviting a diverse and gender-balanced group of participants.\n  Core participants: Initially formed by representatives from various community groups to trigger systemic change, the core group is perhaps the most crucial, as most activities are designed to take place within this group. The group should be intersectoral, diverse, and inclusive of all voices within the human collective being addressed. A manageable size for the facilitation team (20-30 people are recommended) is ideal, with representation from all groups related to the issue to be addressed. This ensures a richer understanding of the problem and the development of more suitable pathways for change. It is advisable to include community leaders, local and state governments, civil society, academia, and other sectors present in the locality. Additionally, individuals who may not reside in the community but have an impact within it, such as representatives from state or federal governments or members of NGOs operating in the area, can be integrated. Moreover, it is important to strive for a gender-balanced composition from an inclusive perspective.\n  Extended community: This refers to the total population of the community that is not part of the core group. Some activities are designed for open participation by anyone within the community to inform about the process and offer extra insights and feedback. For example, to include those who couldn’t participate in the core group due to other obligations or other groups like young people and children.\n\n\nFocal point.\nJorge Munguia\n\nCountry, year, and language.\nMexico, 2022, Spanish\n\nResources.\n\n  Blog (Spanish) – De mochilazo con PNUD: en búsqueda de nuevas rutas de soluciones colaborativas para el desarrollo humano\n  Report (Spanish) – Informe de Desarrollo Humano Municipal 2010-2020: una década de transformaciones locales en México\n  Report (Spanish) – De mochilazo con PNUD\n\n",
  "tags": null,
  "sdg": ["16 Peace Justice And Strong Institutions"],
  "enablers": ["Strategic innovation"],
  "signature_solutions": ["Governance","Resilience"],
  "rblac_priorities": ["Equity and inclusion","Effective Governance"],
  "excerpt": "Community systems thinking for addressing local challenges. What it does. This tool is designed for local governments to trigger sustained...",
  "id": 50
},{
  "title": "through innovation opportunities workshop",
  "url": "/5.Resilience/5.2%20InnovationWorkshop.html",
  "content": "Innovation opportunities workshop\n\nWhat it does.\nThis innovation opportunities workshop allows you to:\n\n  build a community among people who don’t know each other but have a common role/interest related to innovation;\n  identify main expectations and challenges on a specific subject related to innovation;\n  identify next steps for the team in charge of the project to promote innovation.\n\n\nValue proposition for the government/other partner.\nBy having an innovation opportunities workshop, you will enable the national and local government, academia and private sector to 1) articulate actors who don’t know each other or might not be working together yet; 2) brainstorm and prioritize their main aspirations, opportunities and obstacles.\n\nWhy and when to use it.\nThis tool is most useful for the initial stages of community building when actors don’t know each other and/or when you need to understand whether actors within an ecosystem are agreeing or disagreeing on the main priorities and obstacles to development.\n\nKnown issues and troubleshooting.\nThe tool works for in-person meetings in rooms with enough space to move around but does not work well with hybrid groups. Location with enough space to move around and set a table for each group might be needed.\n\nContext.\nSome parts of this tool were developed during the RBLAC Accelerator Labs retreat, particularly the icebreaker section, and the Innovation Week organized by the National Council on Science and Technology, where the Lab conducted a workshop to bring together the innovation ecosystem. Later, it was used and perfected with the coffee producers’ ecosystem in two separate moments (in Lima and outside of Lima) and with local authorities participating in the ‘Innova tu Mercado’ project designed and implemented by UNDP Peru.\n\nCost to implement.\nTo implement the tool, you will need a budget around USD 150 to buy the materials needed for the workshop such as post-its, sharpies, flipcharts, etc. Additionally, if the activities required to prepare and execute the workshop can’t be carried out by the Lab’s members, then you will need an extra budget between USD 800 and UD 1500 to hire a consultant.\n\nTime\nTo implement this tool, you will need around three weeks. Consider at least two weeks for planning and to send out the call for participants. The workshop can be put together in a day or two in advance if actors have been convened for at least 3 hours for an in-person meeting. Systematizing results takes an additional day.\n\nPeople.\nTo carry out the innovation opportunities workshop you will need three people:\n\n  one person to plan, prepare and lead the dynamics at the workshop;\n  one person to set up the materials for the workshop and helps around the tables during the sessions;\n  one person to advocate and coordinate with partners the call of participants.\n\n\nFocal point.\nGabriel Lama\n\nCountry, year, and language.\nPeru, 2023, Spanish.\n\nResources.\n\n  Report (Spanish) - Identificación de oportunidades de innovación: Cafés del Perú\n  Report (Spanish) - Identificación de oportunidades de innovación: Mercados innova\n  Report (Spanish) - Identificación de oportunidades y próximos pasos en el ecosistema local de cuidados\n\n",
  "tags": null,
  "sdg": ["16 Peace Justice And Strong Institutions"],
  "enablers": ["Strategic innovation"],
  "signature_solutions": ["Governance","Resilience"],
  "rblac_priorities": ["Equity and inclusion","Effective Governance"],
  "excerpt": "Innovation opportunities workshop What it does. This innovation opportunities workshop allows you to: build a community among people who don’t...",
  "id": 50
},{
  "title": "by using design thinking to design public products or services",
  "url": "/6.Governance/6.1%20PublicServicesDT.html",
  "content": "Using design thinking to design public products or services\n\nWhat it does.\nThis tool enables you to apply design thinking, one of the most used methods for public innovation, to design or improve public products or services in collaboration with users, particularly those from vulnerable contexts. Design thinking is a user-centered approach that prioritizes placing the user at the center of the design process. This is because the individuals who will ultimately use the product or service are the ones who best understand the necessary features to meet their needs, desires, and expectations.\n\nValue proposition for the government/other partner.\nApplying design thinking enables national and local governments to:\n\n  strengthen their capacities in public innovation through hands-on experience;\n  ensure that the responses are genuinely relevant and effective by gaining a deep understanding of the specific needs of users;\n  design cost-effective solutions;\n  and foster closer citizen-government relationships by establishing a collaborative and co-creative work routine.\n\n\nWhy and when to use it.\nTo use design thinking is always beneficial to promote public innovation and effective public services and products. Whether the government is new to public innovation or has extensive experience, including users in the design process is always valuable. The design thinking guidance for public products or services needs translation in the official language from Spanish.\n\nKnown issues and troubleshooting.\nTo use design thinking for designing public products or services might not be the best approach if:\n\n  the government does not have a designated team or other resources to implement the solutions obtained from the design thinking method and sustain these solutions over time;\n  the governmental team involved in the process does not have the means to include users as part of the team and foster a working relationship based on trust, commitment, and respect.\n\n\nContext.\nAs a member of the Open Government Partnership (OGP), Ecuador is committed to have a more open and participatory government. In this line, as part of the OGP Action Plan 2019-2022 it aimed to have an Innovation Citizen Lab for the first time in the country. UNDP´s Acc Lab played a key role offering in 2022 technical assistance to design, implement and operate the Citizen Lab called Thinkia. The Secretariat of Higher Education and Innovation of Ecuador has the lead of this Lab and runs it along with other 7 actors from the academia (2), civil society organizations (2), other public institutions (2), and cooperation sector (UNDP). The government uses a shared and decentralized governance model for Thinkia: citizen lab to include other actors as part of the management team and decision-making process.\n\nOne of the activities in Thinkia: Citizen Lab’s work plan for 2023 is to support local governments and other public institutions in implementing public innovation processes. In this regard, the Municipal Unit San José of Quito decided to strengthen its services for individuals experiencing homelessness, with a focus on finding solutions through public innovation processes. The UNDP Accelerator Lab, as part of Thinkia’s management team, provided support to the Municipality of Quito in enhancing the capacities and knowledge of its officials in public innovation and in implementing a pilot project aimed at improving services for people experiencing homelessness.\n\nCost to implement.\nTo hire a person responsible for managing all logistics and coordination, a budget of between USD 4,500 and 6,500 will be required.\n\nTime\nTo design a public product or service using design thinking alongside public counterparts and including the end-user, it will take 6 to 8 months.\n\nPeople.\nTo use this tool the following team members will be required:\n\n  A person who pitches key ideas to local governments or other public institutions, promoting the implementation of public innovation processes and persuading counterparts to seek Thinkia Citizen Lab’s support and guidance. (UNDP in-kind contribution).\n  A person responsible for managing all logistics and coordinating the implementation of the innovation process.\n\n\nFocal point.\nAna M. Grijalva\n\nCountry, year, and language.\nEcuador, 2022-2023, Spanish\n\nResources.\n\n  Manual (Spanish) – Guía practica para el diseño de productos y servicios públicos a través del Pensamiento de Diseño\n  Blog (English) – Leaving no one behind: redesigning municipal services\n  Slideshow (Spanish) – Guía Paso a Paso de la Implementación de Pensamiento de Diseño\n\n\n",
  "tags": null,
  "sdg": ["8 Decent Work And Economic Growth","16 Peace Justice And Strong Institutions"],
  "enablers": ["Strategic innovation"],
  "signature_solutions": ["Governance","Poverty & inequality"],
  "rblac_priorities": ["Effective Governance","Equity and inclusion"],
  "excerpt": "Using design thinking to design public products or services What it does. This tool enables you to apply design thinking,...",
  "id": 50
},{
  "title": "by mapping digital capacities for municipalities",
  "url": "/6.Governance/6.2%20DigitalMunicipalMap.html",
  "content": "Mapping digital capacities of municipalities\n\nWhat it does.\nThis tool enables you to identify municipalities that are well-prepared to adopt new technologies, including digital tools, online platforms, and software systems, as well as those categorized as early adopters, followers, and those lagging. The methodology involves assessing compliance with fundamental requirements for the successful implementation of new technologies through cluster analysis, using information collected from municipalities via an online survey. Decision-makers can then use the visualized results in a dashboard to implement various strategies aimed at enhancing digital transformation in municipalities based on their readiness.\n\nValue proposition for the government/other partner.\nBy assessing the readiness of municipalities to adopt new technology, the government will be able to develop effective digital strategies to enhance the success of implementation.\n\nWhy and when to use it.\nThis tool is most useful when the government is in the initial stages of planning the implementation of new technology across a large group of institutions, such as municipalities. It offers the opportunity to create customized strategies for each identified group of municipalities based on their readiness levels to adopt new technology. Utilizing this methodology necessitates a comprehensive understanding that any significant improvement in the capabilities of municipalities through technology implementation requires an assessment of their current capabilities and the development of customized strategies to ensure genuine access and utilization of new technology, thus maximizing the benefits of its implementation.\n\nKnown issues and troubleshooting.\nIt is better not to implement the initiative if: a) there is no full agreement from the representation of public institutions to participate in the survey; this will ensure full participation; 2) if the government does not have a designated team or other resources to implement the survey and analyze the results (for example, someone in the government team responsible for monitoring institutions for form completion, data cleaning, analysis, and dashboard design); 3) if there is no specific digital system or tool that can be implemented with differentiated strategies based on capabilities to apply the results of this exercise.\n\nContext.\nThe Bolivian Municipalities Associations Federation (FAM, abbreviated in Spanish) in collaboration with UNDP Country Office, had planned to implement a website tool aimed at providing detailed information to all municipalities to enhance their planning processes. Recognizing that the effective implementation of this tool depended on various requirements, including both technical prerequisites and the competencies of municipal staff, we realized that the tool might not yield the same benefits for all municipalities. There was a particular concern about its usage in rural areas. Consequently, we proposed an assessment of the capabilities of municipalities to tailor strategies accordingly.\n\nAs a result, FAM conducted survey with municipalities, followed by a cluster analysis. This analysis identified four distinct clusters, each representing different readiness levels. Factors considered included stable internet access, the availability of required computer equipment, the presence of staff with expertise in statistics, and their ability to utilize this information effectively in the planning processes.\n\nCost to implement.\nTo implement this tool, you would need a budget of between USD 2.000 and USD 4.000, which will be used to hire a person to implement the methodology, which involves analyzing the results and designing the dashboard.\n\nTime\nGathering information from municipalities, analyzing it, and developing a dashboard will take 2 to 3 months, depending on the quantity of responses and the response time.\n\nPeople.\nTo implement this tool, the following team members will be needed:\n\n  A person responsible for identifying the necessary information to collect from municipalities, designing the form, analyzing the gathered information, and designing the dashboard.\n  A person responsible for distributing the forms to the municipalities and monitoring their progress.\n\n\nFocal point.\nPatricia A. Choque\n\nCountry, year, and language.\nBolivia, 2023, Spanish\n\nResources.\n\n  Manual (Spanish)- Nota de concepto\n  Manual (Spanish) – Ficha técnica\n  Blog (Spanish) – Mapeo de capacidades digitales para el desarrollo municipal\n  Dashboard (Spanish) – Infografía mapeo de capacidades municipales para adoptar soluciones digitales\n\n",
  "tags": null,
  "sdg": ["16 Peace Justice And Strong Institutions"],
  "enablers": ["Digitalization"],
  "signature_solutions": ["Governance"],
  "rblac_priorities": ["Effective Governance"],
  "excerpt": "Mapping digital capacities of municipalities What it does. This tool enables you to identify municipalities that are well-prepared to adopt...",
  "id": 50
},{
  "title": "by using Natural Languague Processing Models for building consensus",
  "url": "/6.Governance/6.3%20NLPForConsensus.html",
  "content": "A Natural Language Processing Model for building consensus\n\nWhat it does.\nThis tool uses ChatGPT to build a Natural Language Processing (NLP) model useful for analyzing and highlighting common elements between different political speeches. For example, it can identify the frequency and correlation of themes across various political ideological options. Furthermore, the tool can generate artificial speeches that emphasize the factors of consensus within a society’s political landscape.\n\nValue proposition for the government/other partner.\nThis tool empowers governments and other stakeholders to generate evidence in support of initiatives aimed at achieving political consensus. Thus, the tool has potential for decreasing expressions of political violence within societies and for strengthening good governance.\n\nWhy and when to use it.\nThis tool is suitable for organizations concerned about the levels of increasing polarization in their societies and wishes to explore how technology can be an ally in tackling social and political divisions. Moreover, this tool would be most beneficial when the organization is interested in discovering vectors of consensus across different political views. Additionally, this tool is most useful when there is good-quality, easily available, and trustworthy data regarding political speeches. These conditions not only guarantee the technical success of the model but can also enhance its legitimacy. In addition, the tool is most useful when you can gather a multidisciplinary team.\n\nKnown issues and troubleshooting.\nThe tool won’t be the best option if there is a lack of sufficient and reliable data. If the data is not easily available, you may end up consuming much of the time and resources of the project in collecting the required data and even fail to obtain the necessary data. Furthermore, if there is no reliable data from official or socially accepted sources you may end up losing the legitimacy and credibility of the project and being targeted of bias accusations.\n\nAlso, if your team lacks the necessary skills and you can’t bring in an external expert, then this tool is also not your best fit. Building and implementing the tool requires computing skills, as well as knowledge in discourse analysis, political science, and history, among others. The richer the skill set of your team, the better the model will turn out to be.\n\nFinally, keep in mind that ChatGPT offers an AI-based model with limitations in its explicability regarding the outputs obtained. This means that you will reach points where you will not be able to explain how the algorithms have operated. In political contexts marked by a high level of distrust between parties, the limitations regarding the explicability of the model can become a major issue.\n\nContext.\nThe development of this tool has been part of the Argentina Lab portfolio of actions regarding AI, which we have named ‘AI: Argentine Intelligence.’ All these actions are aimed at promoting public debate on AI in our country.  In relation to this tool, we utilized ChatGPT 3.5 to train an AI model for analyzing speeches delivered during presidential inaugurations and legislative session openings. We studied a total of 52 speeches and conducted three analyses. The first involved a descriptive analysis of the speeches, evaluating their length and the frequency of keywords. The second analysis aimed to determine if the speeches addressed some specific public policy issues and how they approached these topics. Lastly, we concentrated on generating a unified discourse by processing all the speeches.\n\nCost to implement.\nThe cost of hiring the required team to plan, coordinate and implement the project ranges between USD 15,000 and USD 25,000.\n\nTime\nBetween planning, building, implementing, and evaluating the tool, you can expect to spend a minimum of two to three months.\n\nPeople.\nTo implement a Natural Language Processing Model to build political consensus, you will need a team of 4 members with the following roles:\n\n  One person responsible for the general direction of the project.\n  One computing specialist to set up the algorithm.\n  One project assistant to support on data collection.\n  One designer for managing all the visual aspects of the project.\n\n\nFocal point.\nLorena Moscovich\n\nCountry, year, and language.\nArgentina, 2023-ongoing; Spanish and English.\n\nResources.\n\n  Blog (English) – A Conversation about Artificial Intelligence: What do Argentines talk about when we talk about AI?\n  Blog (Spanish) – Una conversación sobre la inteligencia artificial:¿De qué hablamos los argentinos cuando hablamos de IA?\n  Blog (English) – A Conversation about Artificial Intelligence: Anyone Can Cook and Use AI!\n  Blog (Spanish) – Una conversación sobre la inteligencia artificial: Todos pueden cocinar ¡y usar IA!\n\n\n",
  "tags": null,
  "sdg": ["16 Peace Justice And Strong Institutions"],
  "enablers": ["Digitalization","Strategic innovation"],
  "signature_solutions": ["Governance"],
  "rblac_priorities": ["Effective Governance"],
  "excerpt": "A Natural Language Processing Model for building consensus What it does. This tool uses ChatGPT to build a Natural Language...",
  "id": 50
},{
  "title": "through a methodology for exploring signals of change",
  "url": "/6.Governance/6.4%20ExploringMethology.html",
  "content": "Methodology for exploring signals of change for future foresight\n\nWhat it does.\nThis comprehensive methodological tool is a practical guide to explore and foresee early signals of change for future foresight. The guide provides various tools and techniques for identifying early signals and exploring future scenarios, which allow the user to delve into prospective analysis, collective intelligence, and horizon scanning.\n\nValue proposition for the government/other partner.\nBy employing a comprehensive methodological toolkit for exploration, both the public and private sectors can gain insights into trends that may impact their long-term operations. This enables them to adapt, react, and anticipate changes, ultimately enhancing organizational functioning and evolution.\n\nWhy and when to use it.\nThis tool proves most valuable in navigating environments characterized by volatility, uncertainty, complexity, and ambiguity (VUCA). It is effective when dealing with sudden, unforeseen changes, in situations where anticipation or prediction becomes increasingly challenging, amidst a multitude of interconnected elements at various levels, and when events or issues defy simplistic or binary categorization.\n\nKnown issues and troubleshooting.\nTo implement this tool, you must dedicate a certain amount of time and effort to generating a comprehensive analysis of the signals of change. If there is a lack of human resources available at the organization for conducting this analysis, it may not yet be the best moment to use this tool.\n\nAdditionally, this tool might not be the best approach when dealing with organizations with little interest, or willingness, to integrate future foresight into its decision-making processes. Without the presence of such interest and willingness, particularly at the managerial levels, the effort put into implementing this tool might end up being wasted. In situations like this, consider first dedicating efforts to foster a future mindset within the organization.\n\nContext.\nThis tool was created in the context of the work of the Argentina Lab’s Exploration area. The building of this Exploration Guide was aimed at developing an orderly and clear methodology for carrying out prospective analysis that would serve the area, as well as others interested in foreseeing possible changes and trends. \nFor the development of this tool, we recollected lessons derived from our very own foresight practice, together with insights gathered from specialized literature. Furthermore, based on this tool, the AccLab conducted a futures exploration. For our foresight exercise, we set a 10-year time frame and focus on signals of change that could significantly impact Argentina and its development. When searching for signals, we looked at the social, economic, technological, environmental, and health environments. For example, we found signals of change associated with deepfakes as evidence, universal basic income in blockchain, insects as a source of protein, and sleeping disorders as a public health issue, among others.\n\nCost to implement.\nThe cost varies depending on the scope you set for the exploration exercise. The cost of hiring the required team could require a budget of between USD 2,000 and USD 6,000 per professional. Additionally, you might consider assigning resources for printing materials useful to support the exploration exercise, such as visual tools like future wheels, or signals cards. This could add USD 1000 to your budget, depending on the amount.\n\nTime\nThe work of identifying signals of change, conducting their analysis and visualization, including the implementation of collective intelligence activities, can take two to four months. However, the time of implementation can vary depending on the scope you set for the exploration exercise.\n\nPeople.\nThe team responsible for designing and conducting the exploration can be relatively small, comprising:\n\n  One person responsible for the management of the futures exploration.\n  One collaborator to assist in the implementation.\n  One designer or professional in graphic facilitation to conduct the visual exploration of signals and develop visual tools for the collective intelligence activities.\n\n\nDepending on the exploration’s scope, additional collaborators may be necessary. Furthermore, you can enhance the exploration process by incorporating collective intelligence activities. Therefore, when planning your people strategy, consider the audience you wish to engage in these collective intelligence exercises as well. In doing so, you will need to consider if you need to incorporate further collaborators to conduct these collective intelligence activities.\n\nFocal point.\nMaría Eugenia López\n\nCountry, year, and language.\nArgentina, 2022 - ongoing; Spanish and English.\n\nResources.\n\n  Manual (Spanish) – Explorando futuros: guía para impulsar el cambio, anticipándose a tendencias\n  Manual (English) – Exploring futures: A guide to driving change, foreseeing trends\n  Blog (Spanish) – ¿Cómo anticiparnos a tendencias? Una breve reseña sobre prospectiva.\n  Blog (English) – How can we anticipate trends? Foresight analysis to the rescue!\n  Blog (Spanish) – Escenarios futuros e inteligencia colectiva.\n  Blog (English) – Future Scenarios and Collective Intelligence.\n\n",
  "tags": null,
  "sdg": ["9 Industry Innovation And Infraestructure","16 Peace Justice And Strong Institutions","17 Partnerships For The Goals"],
  "enablers": ["Strategic innovation"],
  "signature_solutions": ["Governance"],
  "rblac_priorities": ["Effective Governance"],
  "excerpt": "Methodology for exploring signals of change for future foresight What it does. This comprehensive methodological tool is a practical guide...",
  "id": 50
},{
  "title": "by online and collaborative mapping of the national innovation ecosystem",
  "url": "/6.Governance/6.5.%20CollaborativeMapping.html",
  "content": "Online and collaborative mapping of the national innovation ecosystem\n\nWhat it does.\nThis online collaborative mapping of the national innovation ecosystem (NIE) serves two main purposes. Firstly, it provides a tool for identifying and tracking actors involved in sustainable development issues with a social or public innovation approach, based on their geographical location. Secondly, it facilitates the strengthening of synergies among NIE actors by enabling them to learn about each other’s work and explore potential collaborations based on shared interests. Additionally, this tool generates open data by collecting information about initiatives and actors.\n\nValue proposition for the government/other partner.\nBy having an online and collaborative mapping of the national innovation ecosystem, you will enable the community of such ecosystem to address social, cultural, environmental, and economic challenges efficiently and effectively, as they identify common interests, exchange experiences, tap on collective knowledge, collaborate, and create synergies. This tool contributes to SDG 17 “Partnerships for the goals” and target 17.7 “encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships”.\n\nWhy and when to use it.\nThis tool is most useful when there is an existing long-term strategy, either from the local or national innovation public sector, aimed at fostering trust among actors within the national innovation ecosystem and facilitating the development of a shared agenda focused on a specific SDG. Promoting collaborative work should involve utilizing participatory and co-creation methods, complemented by an effective communication strategy to engage actors effectively.\n\nKnown issues and troubleshooting.\n\n  If there are only a few well-known actors within the national innovation ecosystem, this tool may not be as effective since its purpose is to facilitate coordination and collaboration among a diverse group of actors.\n  Without a strategy to convene and promote collaborative work among actors in the innovation ecosystem, the online mapping tool alone may not be sufficient to foster synergies within the ecosystem.\n  Limited access to connectivity, low digital skills, and a scarcity of digital devices may render an online and collaborative mapping tool less suitable.\n  In the absence of a long-term vision and strategy for mapping collaborative initiatives, the data may quickly become outdated.\n\n\nContext.\nAs a member of the Open Government Partnership (OGP), Ecuador is committed to having a more open and participatory government. As part of the OGP Action Plan 2019-2022, it aimed to establish an Innovation Citizen Lab for the first time in the country. UNDP’s Accelerator Lab played a key role by offering technical assistance in 2022 to design, implement, and operate the Citizen Lab called Thinkia. The Secretariat of Higher Education and Innovation of Ecuador leads this Lab and collaborates with seven other actors from academia (2), civil society organizations (2), other public institutions (2), and the cooperation sector (UNDP). The government employs a shared and decentralized governance model for Thinkia: Citizen Lab to include other actors as part of the management team and decision-making process. Additionally, the government uses an online platform as a mechanism to promote citizen engagement in public innovation work. UNDP’s Accelerator Lab not only elaborated the governance model proposal and supported its implementation but also designed, developed, and transferred an online platform for Thinkia: Citizen Lab.\n\nCost to implement\nUSD 18,000 - 20,000\n\nTime.\nTo design and develop an online platform 6 months are required. To transfer the e-tool to a government counterpart 4 moths are needed. To transfer the platform should be consider and plan from the design phase of it.\n\nPeople.\nTo design, develop, and implement a similar tool the following team members will be required:\n\n  A software development firm with experience in open code and collaborative platforms.\n  An ally institution within the public innovation sector that aims to contribute to the NIE, and within that institution two focal points an IT person and program officer person.\n\n\nFocal Point.\n[Ana M. Grijalva] (https://undp-accelerator-labs.github.io/Innovation-Toolkit-for-UNDP-Signature-Solutions/contributors/Ana%20M.%20Grijalva.html)\n\nCountry, year, and language.\nEcuador, 2023, Spanish\n\nResources\n\n  Access link (Spanish) – Mapa del ecosistema de innovación nacional\n  Manual (Spanish) – Manual sobre como utilizar la herramienta de mapeo\n  Access link (Spanish) – Directorio de actores registrados en el ecosistema de innovación\n  Dashboard (Spanish) – Estadísticas de los actores e iniciativas registradas\n\n",
  "tags": null,
  "sdg": ["16 Peace Justice And Strong Institutions","17 Partnerships For The Goals"],
  "enablers": ["Digitalization"],
  "signature_solutions": ["Governance"],
  "rblac_priorities": ["Effective Governance"],
  "excerpt": "Online and collaborative mapping of the national innovation ecosystem What it does. This online collaborative mapping of the national innovation...",
  "id": 50
},{
  "title": "by using a multistakeholder governance model for an innovation unit",
  "url": "/6.Governance/6.6.%20GovModel.html",
  "content": "A governance model for an innovation unit run by diverse actors\n\nWhat it does.\nThis tool enables the establishment of a governance model for an innovation unit led by the government, where decision-making processes and action implementation involve a diverse group of actors from academia, the private sector, civil society organizations, and the cooperation sector. The governance model delineates the organization’s structure and dynamics among the actors, specifies the responsibilities of each member, and outlines the financing methods for sustaining the innovation unit.\n\nValue proposition for the government/other partner and SDG alignment.\nWith a decentralized and multi-actor governance model, the government can achieve greater transparency and participatory public management. This model also establishes a framework for the government to engage effectively with the broader national innovation ecosystem in social and public affairs by providing guidance on sharing governance with other stakeholders and forming coalitions. This tool contributes to SDG 16 “Peace, Justice, and Strong Institutions” and target 16.7 “ensure responsive, inclusive, participatory and representative decision-making at all levels”.\n\nWhy and when to use it.\nThis tool is most useful when the government has an established framework that promotes accountability, transparency, and openness in public management. This framework could be established through legislation, international agreements, or the creation of a new public innovation unit. Once the framework is identified, it’s important to map the involved actors and their agendas to facilitate the convening of these stakeholders. Additionally, the governance model should be translated into the official language from Spanish.\n\nKnown issues and troubleshooting.\nIf the government counterpart has recently shown interest in understanding and working on citizen participation and public innovation, this tool may not be as effective since it requires a higher level of comprehension and commitment from civil servants. It’s efficient to adopt and adjust an existing governance model rather than creating a new one; however, this should not hinder the initiation of a participatory process with local government counterparts and actors.\n\nContext.\nAs a member of the Open Government Partnership (OGP), Ecuador is committed to fostering a more open and participatory government. As part of the OGP Action Plan 2019-2022, the country aimed to establish an Innovation Citizen Lab for the first time. In 2022, UNDP’s Accelerator Lab played a pivotal role by providing technical assistance to design, implement, and operate the Citizen Lab, known as Thinkia. The Secretariat of Higher Education and Innovation of Ecuador leads this initiative, collaborating with seven other actors, including academia (2), civil society organizations (2), other public institutions (2), and the cooperation sector (UNDP). The government employs a shared and decentralized governance model for Thinkia: Citizen Lab, involving various actors in the management team and decision-making processes. UNDP’s Accelerator Lab developed the governance model proposal and facilitated its implementation.\n\nCost to implement\nUSD 3,000 - 6,000\n\nTime\nTo identify actors, convene, and coordinate their collaboration on a common agenda it will take 3 to 4 months.\n\nPeople\nTo use this tool the following team members will be required:\n\n  A person to pitch key ideas to the government to have multi-actor governance model. Also, to convene and coordinate joint work between actors and set a common agenda.\n  A person to support all the logistics of the coordination work and set first drafts on a common agenda.\n\n\nFocal Point.\n[Ana M. Grijalva] (https://undp-accelerator-labs.github.io/Innovation-Toolkit-for-UNDP-Signature-Solutions/contributors/Ana%20M.%20Grijalva.html)\n\nCountry, year, and language\nEcuador, 2022, Spanish\n\nResources\n\n  Manual (Spanish) – Modelo de gestión Thinkia\n  Blog (English) – Moving at the speed of trust: the juicy fruits of collaboration and persistence\n  Template (English) Flyer\n  TORs (Spanish) Voluntario/a para generación de procesos de innovación abierta\n\n",
  "tags": null,
  "sdg": ["8 Decent Work And Economic Growth","16 Peace Justice And Strong Institutions"],
  "enablers": null,
  "signature_solutions": ["Governance"],
  "rblac_priorities": ["Effective Governance"],
  "excerpt": "A governance model for an innovation unit run by diverse actors What it does. This tool enables the establishment of...",
  "id": 50
},{
  "title": "through a MOOC on public and social innovation concepts and tools",
  "url": "/6.Governance/6.7%20InnovationMOOC.html",
  "content": "Mooc on public and social innovation concepts and tools\n\nWhat it does.\nThis massive open online course (MOOC) enables participants to develop competencies in the main concepts of public and social innovation, as well as to enhance practical skills by learning methodologies and tools. The MOOC caters to various types of profiles, including civil servants, civil society organizations, academia, and private sector counterparts. The course is hosted on Moodle, self-paced, and features short, explanatory videos, supplemented with readings, interactive quizzes, and a final assignment. Participants who complete all modules and assignments receive a certificate of completion for 22 hours of learning. The course covers the following topics: (1) Citizen Labs, (2) Open Culture, (3) Public Innovation Hexagon, (4) Behavioral Approaches for Public Interventions, (5) Design Thinking, (6) Participatory Methodologies, and (7) Social Innovation and Future Thinking.\n\nValue proposition for the government/other partner.\nBy utilizing this MOOC, you will empower potential allies and counterparts to grasp the concepts of public and social innovation, providing them with clarity on implementation methods. This will enable actors to advocate for and commit to utilizing public and social innovation as a novel mechanism for public governance and citizen participation. Moreover, enhancing capacities and practices will enable local governments to incorporate an innovative approach in the design, development, and enhancement of public services, ultimately leading to more effective and transparent processes. This tool contributes to SDG 16 “Peace, Justice, and Strong Institutions” and target 16.7 “ensure responsive, inclusive, participatory and representative decision-making at all levels”.\n\nWhy and when to use it.\nThis tool is most useful when there is an engaged government counterpart actively seeking to adopt a public and social innovation approach in its operations and delivery of public services. It is cost-effective to train many civil servants simultaneously, especially those located in diverse geographical areas. Additionally, it is recommended that senior management, as well as analysts, participate in this learning journey. With clear commitment from the government, the inclusion of social and innovation processes can be expected to become integrated into the institution’s workflow, leading to institutionalization of the process.\n\nKnown issues and troubleshooting.\n\n  If there is a lack of commitment and engagement from participants, the results will be partial and not fully satisfactory for the MOOC organizer.\n  The course content is introductory. Participants who wish to deepen their knowledge on the topics covered are recommended to take additional courses.\n\n\nContext.\nAs a member of the Open Government Partnership (OGP), Ecuador is committed to having a more open and participatory government. As part of the OGP Action Plan 2019-2022, it aimed to establish an Innovation Citizen Lab for the first time in the country. UNDP’s Accelerator Lab played a key role in offering technical assistance in 2022 to design, implement, and operate the Citizen Lab called Thinkia. The Secretariat of Higher Education and Innovation of Ecuador leads this Lab and collaborates with seven other actors from academia (2), civil society organizations (2), other public institutions (2), and the cooperation sector (UNDP). The government employs a shared and decentralized governance model for Thinkia: Citizen Lab to include other actors as part of the management team and decision-making process. UNDP’s Accelerator Lab developed the governance model proposal and supported its implementation.\n\nOne of the first outcomes of the collaboration among the various actors running Thinkia was the creation of a massive open online course on public and social innovation, leveraging the expertise of each member. Thus, each member was responsible for creating the content of one of the modules. UNDP’s Accelerator Lab structured the course by generating and organizing the learning materials and managed the course on Moodle.\n\nCost to implement\nUSD 4,000 – 4,500 (to build the MOOC from zero)\n\nTime.\nTo organizing the launch of the course 1 moths is required. To hold the course and receive feedback 1 month and a half is needed.\n\nPeople.\nTo run this course and make it available to the public the following team members will be required:\n\n  A course leader who strategizes the use of the course and generates the needed partnerships.\n  A course administrator in charge of solving all enquiries related to the platform and managing the registration process.\n\n\nFocal Point.\n[Ana M. Grijalva] (https://undp-accelerator-labs.github.io/Innovation-Toolkit-for-UNDP-Signature-Solutions/contributors/Ana%20M.%20Grijalva.html)\n\nCountry, year, and language.\nEcuador, 2022, Spanish\n\nResources.\n-Access link (Spanish) Moodle Platform of UNDP Ecuador\n\nPlease contact the focal point if you want to make use of the course.\n",
  "tags": null,
  "sdg": ["16 Peace Justice And Strong Institutions","17 Partnerships For The Goals"],
  "enablers": null,
  "signature_solutions": ["Governance"],
  "rblac_priorities": ["Effective Governance"],
  "excerpt": "Mooc on public and social innovation concepts and tools What it does. This massive open online course (MOOC) enables participants...",
  "id": 50
},{
  "title": "by using text mining algorithms to analyze public programs performance",
  "url": "/6.Governance/6.8%20TextMiningPerformance.html",
  "content": "Using text mining algorithms to analyze public programs performance\n\nWhat it does.\nThis tool allows you to use a text mining algorithm to analyze the justifications, given by public officials that oversee the implementation of public programs, regarding the results of the performance indicators of the program, uncover common issues across programs and rank (for based on relevance) the root causes behind the underperformance of government-funded programs.\n\nValue proposition for the government/other partner.\nBy using a text mining algorithms to analyze public programs performance, you enable the Ministry of Finance to gain a deeper understanding of the root causes behind the underperformance of public spending and aim to make public spending more efficient. This understanding provides crucial insights into the support required by different government branches to enhance the impact of their programs. Such efforts align with UNDP’s governance signature solution and SDG 16, which focuses on building effective, accountable, and inclusive institutions at all levels.\n\nWhy and when to use it.\nThis tool is most effective when governments have already initiated a journey toward results-based budgeting, aiming to enhance the efficiency and effectiveness of public spending and the delivery of services. It’s essential to acknowledge that implementing a results-based budget can be challenging, requiring changes in organizational culture, data collection and analysis capabilities, and reporting systems.\n\nKnown issues and troubleshooting.\nIf there is a lack of transparency, accountability, and aggregation of data, it’s probably not the best time to make use of this tool. In such a case, teams should work towards fostering changes in organizational culture within the government, improving data collection and analysis capabilities, and enhancing reporting systems to ensure that the relevant datasets are available.\n\nContext.\nUNDP Mexico and the Performance Evaluation Unit of the Ministry of Finance opened an active line of collaboration to explore ways to improve Mexico’s Performance Evaluation Systems and Results-Based Budgeting—its structure, processes, the information it generates, its usability, and any element that could help make it more relevant to better serve its purpose. The aim of this system is to ensure that the government delivers better public goods and services, improves the quality of expenditure, and promotes accountability and transparency. In this context, the Accelerator Lab Mexico was invited to participate in these discussions. A complex element to be addressed during the process was identified: How does the human dimension affect what people report and the quality of the information generated? Because, although the objectives of the Performance Evaluation Systems are clearly stated in the laws and decrees that support it, those who ultimately interact are people with different motivations and incentives. So, it should not be taken for granted that everything will be perfectly aligned. Instead, the Lab set out to analyze the system and learn from people’s experience what improvements can be proposed to increase the capacity to incorporate learnings at scale.\n\nIn the case of Mexico, implementing a results-based budget approach involved establishing a common framework for evaluating public spending performance, extending beyond expenditure tracking to assess the social and environmental impacts of government spending on key dimensions of sustainable development. All programs reliant on public spending are required to define a set of performance indicators and goals set by government officials, establishing a clear causal relationship between program activities and their purpose. This progress is regularly monitored, and the reported information, including text entries justifying why officials believe an indicator did not meet its intended goal, is made available as open data.\n\nFor the tool implemented in Mexico, the information is sourced directly from individuals working within the government who oversee the implementation of public programs. This process involves creating a text mining algorithm and feeding it thousands of text entries written by public officials. These officials are asked to provide justifications, in their own words, for why a performance indicator in the program’s logical framework did not reach the established goal for the budget cycle. As individuals on the frontlines of state budget execution, they consistently arrive at conclusions that can be transformed into lessons to enhance public spending. By exploring patterns in this unique dataset of individual explanations, we uncover issues common across all branches of government, aiming to make public spending more efficient.\n\nCost to implement.\nThis is a very cost-effective solution that can be funded with less that USD 100.000.\n\nTime\nA minimum of six months is needed to implement the solution fully.\n\nPeople.\nYou will need to collaborate with the office in charge of the evaluation of public programs in your country. This is typically a unit within the Ministry of Finance. Buy-in from a high-ranking official is a must, and a team of experts within the unit who know the structure of the systems is also necessary (this team must include two people from the public institution’s technology department who will verify the model developed by the consultant). Additionally, you will need a consultant who can write complex Machine Learning (ML) and Natural Language Processing (NLP) model algorithms to help you navigate the code and adjust it to your needs. Additionally, you will need one person to coordinate the project.\n\nFocal point.\nLuis Fernando Cervantes\n\nCountry, year, and language.\nMexico, 2023, Spanish\n\nResources.\n\n  Blog (English) – How text mining can help us learn about public spending performance\n  Blog (English) – A lab experiment that can help identify and address potential gaps in public speding performance\n  Blog (English) – From algorithm to collective intelligence. An experiment with the potential to help the continuous improvement of public programs\n  Report  (Spanish) – Minería de Texto en el Sistema de Evaluación del Desempeño\n  Templates (English) GitHub code repository\n\n",
  "tags": null,
  "sdg": ["16 Peace Justice And Strong Institutions"],
  "enablers": ["Digitalization"],
  "signature_solutions": ["Governance"],
  "rblac_priorities": ["Effective Governance"],
  "excerpt": "Using text mining algorithms to analyze public programs performance What it does. This tool allows you to use a text...",
  "id": 50
},{
  "title": "Contributors",
  "url": "/Team.html",
  "content": "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Adedapo Aderemi\n        \n        UNDP Accelerator Labs - Software Developer\n        \n      \n    \n    Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web, mobile, IoT, and cloud engineering solutions. He is proficient in a variety of frameworks and programming languages, specializing in developing scalable and resilient applications. He utilizes cutting-edge technologies to address intricate challenges, propel digital revolutionization, and generate memorable user experiences.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ana Carolina Diaz\n        \n        UNDP’s Regional Bureau for Latin America and the Caribbean - Innovation Analyst\n        \n      \n    \n    Ana supports the implementation of the Bureau’s innovation strategy, including direct support to regional and country initiatives. She will also support the implementation of other strategic regional initiatives. Ana has nine years of experience working in the fields of international development and social impact. She has gained extensive expertise in spearheading innovative projects dedicated to poverty eradication, implementing the Sustainable Development Goals, and fostering the growth of the fourth sector of the economy. She holds a Master of Public Administration in Development Practice from Columbia University.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ana M. Grijalva\n        \n        UNDP Ecuador Accelerator Lab - Head of Exploration\n        \n      \n    \n    Ana M. Grijalva is an economist, social innovator, and digital advocate with 10 years of experience. She has vast experience in development contexts in program management, implementation, advocacy, partnership building, resource mobilization, monitoring, and evaluation in social projects. She has expertise on key issues related to education, governance, digitalization, labor market, and gender. She has worked for different agencies of the United Nations (International Institute for Educational Planning and Economic Commission for Latin America and the Caribbean) and for international organizations such as University of Oxford, Inter-American Development Bank, and World Bank. Also, she has experience in Ecuador's public sector and has worked for academia in the United Kingdom and Ecuador. She is excited to collaborate in changing the status quo through public and social innovation, digital transformation, technology, and civic engagement in her current role as Head of Exploration at the UNDP Accelerator Lab.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Bethsabe Moreno\n        \n        UNDP Ecuador Accelerator Lab - Innovation consultor\n        \n      \n    \n    Bethsabé is an economist, social innovator, and data scientist with 10 years of experience. She has experience in program management, partnership building and implementation of social projects. She is an advocate for local development, entrepreneurship, financial inclusion, and open government. She has worked in various public institutions in Ecuador and non-profit foundations. She is excited contribute reduce poverty and inequality through innovation, digital transformation, collective intelligence, and microfinance.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Carlos Mazariegos\n        \n        UNDP Guatemala Accelerator Lab - Head of Exploration\n        \n      \n    \n    Carlos experience and interests comprise data and social analytics, information and communication technologies (ICT) and socio-economic development in underserved communities. At UNDP Accelerator Labs, he leads the discovery and sense-making of emerging trends and their potential for accelerating progress toward SDGs, including fostering data-driven methodologies, establishing strategic data partnerships, and deploying scalable digital solutions. Carlos has collaborated in data initiatives in the United States, Europe, Africa, and Latin America for the Inter-American Development Bank, United Nations Foundation, MIT Media Lab, and Data-Pop Alliance, and deployed digital solutions for US-based startups and telecommunications providers. Carlos is currently an MIT Connection Science Fellow, holds an M.S. Data Analytics, Management and Policy from Carnegie Mellon University and a B.S. in Electronic Engineering from Universidad de San Carlos de Guatemala.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Gabriel Lama\n        \n        UNDP Peru Accelerator Lab - Head of Solutions Mapping\n        \n      \n    \n    Gabriel is a specialist in research for innovation and Cultural Designer, he is passionate about the experiences and formats developed to nurture and strengthen creativity and human bonds. With extensive experience in creative industries and social innovation, he has developed projects with and for public and private institutions and agents of change in Lima, Sao Paulo and Barcelona. As Head of Solution Mapping, he leads the co-creation processes, learning, identification, strengthening and scaling processes of citizen solutions in connection with the global network of Accelerator Labs.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Gabriela Rios\n        \n        UNDP Mexico Accelerator Lab - Head of Exploration\n        \n      \n    \n    Gabriela Ríos Landa is the Head of Exploration at the Accelerator Lab of the United Nations Development Programme (UNDP) in Mexico. She is part of a global network of professionals working to reimagine development and accelerate learning to achieve more sustainable futures. Before joining UNDP, she worked at the Laboratory for the City, the experimental arm of the government of Mexico City, developing innovative strategies to address public issues. She holds a master's degree in Future Studies from the Free University of Berlin and a bachelor's degree in Industrial Design from the Iberoamerican University in Mexico City.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Javier Brolo\n        \n        UNDP Guatemala Accelerator Lab - Head of Experimentation\n        \n      \n    \n    Javier Brolo is a social scientist specialized in quantitative and qualitative research methods. His academic training is in Philosophy, Mathematics, and Political Science. He has worked as the lead researcher in different Think Tanks and as a university professor. His interest in crude developing solutions to complex social problems, strengthening democratic institutions, attitude and behavior changes, and conducting impact evaluations with diverse and committed teams.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jorge Munguia\n        \n        UNDP Mexico Accelerator Lab - Head of Solutions Mapping\n        \n      \n    \n    Jorge is the Head of Solutions Mapping at the Accelerator Lab of UNDP in Mexico. He seeks to generate learning for complex development challenges through close ties with communities facing these challenges. In the context of complex development challenges, he advocates for innovative methodologies to strengthen collaborations and collective intelligence with a systemic perspective, as well as the strengthening of grassroots solutions. With 15 years of experience, he has worked on promoting people-centered strategies for public institutions and international organizations.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lorena Moscovich\n        \n        UNDP Argetina Accelerator Lab - Head of Experimentation\n        \n      \n    \n    Lorena Moscovich is head of experimentation at the UNDP Argentina accelerator. Her academic background includes a bachelor's degree in political science, a Master's, and a PhD in Social Sciences from the University of Buenos Aires. In addition, she is an affiliated researcher at the University of San Andrés, where she has worked as a professor and led governance programs. She has published in scientific journals in various countries and participated in academic meetings and given talks at universities in her country and abroad, including Harvard, Berkeley, Oxford, and Brown. She was also a visiting scholar at Columbia University, with the support of a Fulbright Commission and a visiting researcher at Brown University. Currently, she co-leads a project on the history of decentralization in Argentina.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Luis Fernando Cervantes\n        \n        UNDP Mexico Accelerator Lab - Head of Experimentation\n        \n      \n    \n    Luis is an economist with extensive experience in the field of sustainable development. Currently serving as the Head of Experimentation at the UNDP Accelerator Lab in Mexico, he has built a professional trajectory with 11 years of experience in designing and implementing public policies, applied social research, capacity-building program development, policy impact evaluation, resource mobilization strategy design, and team mentoring through change processes. He is passionate about development economics and designing new paradigms that enable us to transition towards a more inclusive and sustainable world.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          María Eugenia López\n        \n        UNDP Argentina Accelerator Lab - Head of Exploration\n        \n      \n    \n    María Eugenia López is the Head of Exploration for the Argentina Accelerator Lab. She studied Biology at the University of Buenos Aires and earned a master's degree in Neuroscience and Education from Columbia University in New York. During her time there, she worked in the Department of Epidemiology, conducting a meta-analysis of primary interventions on the leading causes of death worldwide. Upon returning to Buenos Aires, Eugenia focused on science communication through various mediums such as museums, exhibitions, camps, social media, and audiovisual productions. She taught at the Faculty of Exact and Natural Sciences at the University of Buenos Aires and served as a professor at the Favaloro University and the University of San Andrés.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          María Verónica Moreno\n        \n        UNDP Argentina Accelerator Lab - Head of Solutions Mapping\n        \n      \n    \n    María Verónica is the Head of Solutions Mapping for the Argentina Accelerator Lab since 2019. She has experience in international organizations, academia, and the public and private sector. She has worked as an undergraduate and graduate professor and researcher at the University of Buenos Aires (UBA, by its Spanish acronym). She has a Doctorate in Social Sciences (UBA), a Master's Degree in Public Policy from the Torcuato Di Tella University and a Bachelor's Degree in Sociology from the University of Salvador.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Mariana Olcese\n        \n        UNDP Peru Accelerator Lab - Head of Exploration\n        \n      \n    \n    Connector between the public and private sectors, motivated to navigate uncertainty and identify emerging opportunities to translate them to different actors in the system. Her experience includes working as a consultant at the Inter-American Development Bank and the World Bank, an advisor to the Peruvian government, and as a public affairs manager for startups and corporations.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Patricia Choque\n        \n        UNDP Bolivia Accelerator Lab - Head of Solutions Mapping\n        \n      \n    \n    Since 2021, Patricia has served as the Head of Solutions Mapping at the UNDP Accelerator Lab Bolivia. In this role, she endeavors to drive innovation for development by utilizing new sources of information to make informed decisions, applying collective intelligence methods, and implementing a systems transformation approach across diverse fields such as gender, environment, and digital inclusion. She holds a bachelor’s degree in system approaches, an MBA, and has completed post-graduate studies in statistics, gender, and micro-economy of competitiveness.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Paulina Jiménez\n        \n        UNDP Ecuador Accelerator Lab - Head of Solutions Mapping\n        \n      \n    \n    Paulina es socióloga con una maestría en Género y Salud. Dedicó 8 años a la investigación acción en Madrid, España, con énfasis en precariedad femenina. En Ecuador, fue Directora Nacional de Salud Intercultural, puesto que le permitió diseñar y adaptar políticas públicas para reducir las barreras de acceso a la salud. Fue coordinadora del proyecto de Fortalecimiento de la Atención Primaria en Salud en la Organización Panamericana de la Salud (OPS/OMS). Actualmente ocupa el rol de Mapeo de Soluciones en el Laboratorio de Aceleración del Programa de Naciones Unidas para el Desarrollo, aportando soluciones para el desarrollo a través de la innovación comunitaria.\n    \n\n    \n      \n      Contact \n      \n\n      \n      \n      \n\n      \n      \n      \n\n      \n\n    \n  \n  \n\n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Meet the Contributors Adedapo Aderemi UNDP Accelerator Labs - Software Developer Adedapo is an inventive and dynamic software developer with...",
  "id": 50
},{
  "title": "Innovating for governance",
  "url": "/6.Governance/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "\n",
  "id": 50
},{
  "title": "Innovating for energy access and efficiency",
  "url": "/3.Energy/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "\n",
  "id": 50
},{
  "title": "Getting started",
  "url": "/0.Getting_started/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "\n",
  "id": 50
},{
  "title": "Innovating for resilience",
  "url": "/5.Resilience/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "\n",
  "id": 50
},{
  "title": "Innovating for gender equality",
  "url": "/2.Gender/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "\n",
  "id": 50
},{
  "title": "Innovating for environment",
  "url": "/4.Environment/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "\n",
  "id": 50
},{
  "title": "Innovating to tackle poverty and inequality",
  "url": "/1.Poverty/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "\n",
  "id": 50
},{
  "title": "Getting Started",
  "url": "/",
  "content": "WELCOME TO THE SIGNATURE SOLUTION TOOLKIT\n\nThis toolkit compiles some of the innovative and creative tools developed by the Accelerator Labs of RBLAC —until the end of 2023— to achieve sustainable development. Organized according to the six signature solutions of UNDP’s Strategic Plan 2022-2025, the toolkit enables other country offices to easily navigate best practices, learn about them, and utilize and replicate them in various contexts.\n\nBig thanks to everyone who contributed to creating this prototype. All contributors and curators are part of the  UNDP Accelerator Labs, unless otherwise indicated. A full list, along with each person’s contact information, is available on the Contributors page.\n\nTechnical leadership: Ana M. Grijalva (Accelerator Lab Ecuador)\n\nTechnical support: Gabriela Ríos (Accelerator Lab Mexico) &amp; Ana Carolina Díaz (RBLAC)\n\nCuration: Bethsabe Moreno (Accelerator Lab Ecuador)\n\nSoftware development: Adedapo Aderemi &amp; Jeremy Boy (Accelerator Labs Global Team)\n\nThe content of this site is property of the United Nations Development Programme (UNDP) and published under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International.\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "WELCOME TO THE SIGNATURE SOLUTION TOOLKIT This toolkit compiles some of the innovative and creative tools developed by the Accelerator...",
  "id": 50
},{
  "title": null,
  "url": "/assets/lunr-feed.js",
  "content": "// builds lunr\nvar index = lunr(function () {\n  this.field('title')\n  this.field('content', {boost: 10})\n  this.field('sdg')\n  this.field('tags')\n  this.field('rblac_priorities')\n  this.field('signature_solutions')\n  this.field('enablers')\n  this.field('url')\n  this.ref('id')\n});\n\nlet tags = []\nlet sdg = []\nlet rblac_priorities = []\nlet signature_solutions = []\nlet enablers = []\n\n// rblac_priorities, signature_solutions, enablers\n\n{% assign count = 0 %}\n{% for post in site.pages %}\n{% unless post.url contains 'assets/' %}\nindex.add({\n    title: {{post.title | jsonify}},\n    content: {{post.content | strip_html | jsonify}},\n    tags: {{ post.tags | jsonify }},\n    sdg: {{ post.sdg | jsonify }},\n    enablers: {{ post.enablers | jsonify }},\n    signature_solutions: {{ post.signature_solutions | jsonify }},\n    rblac_priorities: {{ post.rblac_priorities | jsonify }},\n    url: {{ post.url | jsonify }},\n    id: {{count}}\n});\n\n//Iterate through the tags\n{% for tg in post.tags %}\n    if(tags.indexOf({{ tg | jsonify }}) Found '+result.length+' result(s)');\n    // Loop through, match, and add results\n    for (var item in result) {\n      var ref = result[item].ref;\n      var searchitem = `\n      \n        \n        \n            ${store[ref]?.title}\n        \n        \n        \n            ${store[ref].excerpt}\n        \n    \n      `\n\n      resultdiv.append(searchitem);\n    }\n  });\n  \n\n//POPULATE TAGS AND SDG FILTER\nvar tagsdiv = $('#tag-div');\nvar sdgdiv = $('#sdg-div')\nvar rblac_priorities_div = $('#rblac_priorities_div')\nvar enablers_div = $('#enablers_div')\nvar signature_solutions_div = $('#signature_solutions_div')\n\nif(tags.length > 0){\n    tags = tags.sort(customSort);\n    let tg = `\n    \n        \n        Tags\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${tags[i]?.toUpperCase()}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    tagsdiv.append(tg)\n}\n\nif(sdg.length > 0){\n    sdg = sdg.sort(customSort);\n    let tg = `\n    \n        \n        SDG\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${sdg[i]}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    sdgdiv.append(tg)\n}\n\nif(enablers.length > 0){\n    enablers = enablers.sort(customSort);\n    let tg = `\n    \n        \n            Enablers\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${enablers[i]}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    enablers_div.append(tg)\n}\n\nif(signature_solutions.length > 0){\n    signature_solutions = signature_solutions.sort(customSort);\n    let tg = `\n    \n        \n            Signature Solutions\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${signature_solutions[i]}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    signature_solutions_div.append(tg)\n}\n\nif(rblac_priorities.length > 0){\n    rblac_priorities = rblac_priorities.sort(customSort);\n    let tg = `\n    \n        \n        RBLAC Priorities\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${rblac_priorities[i]}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    rblac_priorities_div.append(tg)\n}\n\nlet taglist = []\nlet sdglist = []\nlet enablerslist = []\nlet signature_solutionslist = []\nlet rblac_prioritieslist = []\n\nlet searchitemfn = post => `\n\n    \n    \n        ${post?.title}\n    \n    \n    \n        ${post.excerpt}\n    \n\n`\n\nlet resultdiv = $('#results');\nlet contentdiv = $('#content');\nlet contentCopy = $(\"#content\").html(); // Store the current content\n\nfunction customSort(a, b) {\n    // Check if strings start with a number\n    let startsWithNumberA = /^\\d+/.test(a);\n    let startsWithNumberB = /^\\d+/.test(b);\n    \n    // If both start with numbers, sort by number\n    if (startsWithNumberA && startsWithNumberB) {\n        let numA = parseInt(a.match(/^\\d+/)[0]);\n        let numB = parseInt(b.match(/^\\d+/)[0]);\n        return numA - numB;\n    } else if (startsWithNumberA) {\n        // If only a starts with a number, it comes first\n        return -1;\n    } else if (startsWithNumberB) {\n        // If only b starts with a number, it comes first\n        return 1;\n    } else {\n        // Otherwise, sort alphabetically\n        return a.localeCompare(b);\n    }\n}\n\nlet filterresult = () => {\n    resultdiv.empty()\n    resultdiv.prepend('Showing results for  ' + [ ...taglist, ...signature_solutionslist, ...enablerslist, ...sdglist, ...rblac_prioritieslist, ].toString() + '');\n    for(post of store){\n        if(post?.tags?.some(tg => taglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.enablers?.some(tg => enablerslist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.signature_solutions?.some(tg => signature_solutionslist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.rblac_priorities?.some(tg => rblac_prioritieslist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n    };\n}\n\n$(document).on('multiSelectInputToggle', (e) => {\n    let { value, checked, name } = e.target;\n    \n    if(checked && name === 'tags') taglist.push(value)\n    else if(checked && name === 'signature_solutions') signature_solutionslist.push(value)\n    else if(checked && name === 'enablers') enablerslist.push(value)\n    else if(checked && name === 'rblac_priorities') rblac_prioritieslist.push(value)\n    else if(checked && name === 'sdg') sdglist.push(value)\n\n    else if(!checked && name === 'signature_solutions' && signature_solutionslist.includes(value)) signature_solutionslist.splice(signature_solutionslist.indexOf(value), 1)\n    else if(!checked && name === 'enablers' && enablerslist.includes(value)) enablerslist.splice(enablerslist.indexOf(value), 1)\n    else if(!checked && name === 'rblac_priorities' && rblac_prioritieslist.includes(value)) rblac_prioritieslist.splice(rblac_prioritieslist.indexOf(value), 1)\n    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)\n    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)\n  \n    filterresult()\n\n});\n\n$(document).on('filterSearchChipRemoval', (e) => {\n    let textContent = e.target.getAttribute('option-name');\n    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)\n    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)\n\n    signature_solutionslist.includes(textContent) && signature_solutionslist.splice(signature_solutionslist.indexOf(textContent), 1)\n    enablerslist.includes(textContent) && enablerslist.splice(enablerslist.indexOf(textContent), 1)\n    rblac_prioritieslist.includes(textContent) && rblac_prioritieslist.splice(rblac_prioritieslist.indexOf(textContent), 1)\n    filterresult()\n});\n\n$(document).on('filterSearchClear', (e) => {\n    sdglist = [];\n    taglist =  [];\n    enablerslist = []\n    signature_solutionslist = []\n    rblac_prioritieslist = []\n    resultdiv.empty()\n    $(\"#content\").html(contentCopy);\n});\n\n//GET ELEMTENTS WITH ID TAGS AND SDG\n$('.tag-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    taglist = [ textContent ]\n    sdglist = []\n    enablerslist = []\n    signature_solutionslist = [ ]\n    rblac_prioritieslist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.sdg-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    sdglist = [textContent]\n    taglist = []\n    enablerslist = []\n    signature_solutionslist = [ ]\n    rblac_prioritieslist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.enablers-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    enablerslist = [textContent]\n    taglist = []\n    sdglist = []\n    signature_solutionslist = []\n    rblac_prioritieslist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.signature_solutions-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    enablerslist = []\n    taglist = []\n    sdglist = []\n    signature_solutionslist = [ textContent]\n    rblac_prioritieslist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.rblac_priorities-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    enablerslist = []\n    taglist = []\n    sdglist = []\n    signature_solutionslist = [ ]\n    rblac_prioritieslist = [textContent]\n    contentdiv.empty()\n    filterresult()\n} )\n\n})",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "// builds lunr var index = lunr(function () { this.field('title') this.field('content', {boost: 10}) this.field('sdg') this.field('tags') this.field('rblac_priorities') this.field('signature_solutions') this.field('enablers') this.field('url') this.ref('id')...",
  "id": 50
},{
  "title": "Adedapo Aderemi",
  "url": "/contributors/Adedapo%20Aderemi.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Adedapo Aderemi\n            \n            UNDP Accelerator Labs - Software Developer\n            \n          \n        \n        \n          Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web, mobile, IoT, and cloud engineering solutions. He is proficient in a variety of frameworks and programming languages, specializing in developing scalable and resilient applications. He utilizes cutting-edge technologies to address intricate challenges, propel digital revolutionization, and generate memorable user experiences.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Adedapo Aderemi UNDP Accelerator Labs - Software Developer Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art...",
  "id": 50
},{
  "title": "Ana Carolina Diaz",
  "url": "/contributors/Ana%20Carolina%20Diaz.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ana Carolina Diaz\n            \n            UNDP’s Regional Bureau for Latin America and the Caribbean - Innovation Analyst\n            \n          \n        \n        \n          Ana supports the implementation of the Bureau’s innovation strategy, including direct support to regional and country initiatives. She will also support the implementation of other strategic regional initiatives. Ana has nine years of experience working in the fields of international development and social impact. She has gained extensive expertise in spearheading innovative projects dedicated to poverty eradication, implementing the Sustainable Development Goals, and fostering the growth of the fourth sector of the economy. She holds a Master of Public Administration in Development Practice from Columbia University.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Ana Carolina Diaz UNDP’s Regional Bureau for Latin America and the Caribbean - Innovation Analyst Ana supports the implementation of...",
  "id": 50
},{
  "title": "Ana M. Grijalva",
  "url": "/contributors/Ana%20M.%20Grijalva.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ana M. Grijalva\n            \n            UNDP Ecuador Accelerator Lab - Head of Exploration\n            \n          \n        \n        \n          Ana M. Grijalva is an economist, social innovator, and digital advocate with 10 years of experience. She has vast experience in development contexts in program management, implementation, advocacy, partnership building, resource mobilization, monitoring, and evaluation in social projects. She has expertise on key issues related to education, governance, digitalization, labor market, and gender. She has worked for different agencies of the United Nations (International Institute for Educational Planning and Economic Commission for Latin America and the Caribbean) and for international organizations such as University of Oxford, Inter-American Development Bank, and World Bank. Also, she has experience in Ecuador's public sector and has worked for academia in the United Kingdom and Ecuador. She is excited to collaborate in changing the status quo through public and social innovation, digital transformation, technology, and civic engagement in her current role as Head of Exploration at the UNDP Accelerator Lab.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Ana M. Grijalva UNDP Ecuador Accelerator Lab - Head of Exploration Ana M. Grijalva is an economist, social innovator, and...",
  "id": 50
},{
  "title": "Bethsabe Moreno",
  "url": "/contributors/Bethsabe%20Moreno.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Bethsabe Moreno\n            \n            UNDP Ecuador Accelerator Lab - Innovation consultor\n            \n          \n        \n        \n          Bethsabé is an economist, social innovator, and data scientist with 10 years of experience. She has experience in program management, partnership building and implementation of social projects. She is an advocate for local development, entrepreneurship, financial inclusion, and open government. She has worked in various public institutions in Ecuador and non-profit foundations. She is excited contribute reduce poverty and inequality through innovation, digital transformation, collective intelligence, and microfinance.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Bethsabe Moreno UNDP Ecuador Accelerator Lab - Innovation consultor Bethsabé is an economist, social innovator, and data scientist with 10...",
  "id": 50
},{
  "title": "Carlos Mazariegos",
  "url": "/contributors/Carlos%20Mazariegos.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Carlos Mazariegos\n            \n            UNDP Guatemala Accelerator Lab - Head of Exploration\n            \n          \n        \n        \n          Carlos experience and interests comprise data and social analytics, information and communication technologies (ICT) and socio-economic development in underserved communities. At UNDP Accelerator Labs, he leads the discovery and sense-making of emerging trends and their potential for accelerating progress toward SDGs, including fostering data-driven methodologies, establishing strategic data partnerships, and deploying scalable digital solutions. Carlos has collaborated in data initiatives in the United States, Europe, Africa, and Latin America for the Inter-American Development Bank, United Nations Foundation, MIT Media Lab, and Data-Pop Alliance, and deployed digital solutions for US-based startups and telecommunications providers. Carlos is currently an MIT Connection Science Fellow, holds an M.S. Data Analytics, Management and Policy from Carnegie Mellon University and a B.S. in Electronic Engineering from Universidad de San Carlos de Guatemala.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Carlos Mazariegos UNDP Guatemala Accelerator Lab - Head of Exploration Carlos experience and interests comprise data and social analytics, information...",
  "id": 50
},{
  "title": "Gabriel Lama",
  "url": "/contributors/Gabriel%20Lama.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Gabriel Lama\n            \n            UNDP Peru Accelerator Lab - Head of Solutions Mapping\n            \n          \n        \n        \n          Gabriel is a specialist in research for innovation and Cultural Designer, he is passionate about the experiences and formats developed to nurture and strengthen creativity and human bonds. With extensive experience in creative industries and social innovation, he has developed projects with and for public and private institutions and agents of change in Lima, Sao Paulo and Barcelona. As Head of Solution Mapping, he leads the co-creation processes, learning, identification, strengthening and scaling processes of citizen solutions in connection with the global network of Accelerator Labs.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Gabriel Lama UNDP Peru Accelerator Lab - Head of Solutions Mapping Gabriel is a specialist in research for innovation and...",
  "id": 50
},{
  "title": "Gabriela Rios",
  "url": "/contributors/Gabriela%20Rios.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Gabriela Rios\n            \n            UNDP Mexico Accelerator Lab - Head of Exploration\n            \n          \n        \n        \n          Gabriela Ríos Landa is the Head of Exploration at the Accelerator Lab of the United Nations Development Programme (UNDP) in Mexico. She is part of a global network of professionals working to reimagine development and accelerate learning to achieve more sustainable futures. Before joining UNDP, she worked at the Laboratory for the City, the experimental arm of the government of Mexico City, developing innovative strategies to address public issues. She holds a master's degree in Future Studies from the Free University of Berlin and a bachelor's degree in Industrial Design from the Iberoamerican University in Mexico City.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Gabriela Rios UNDP Mexico Accelerator Lab - Head of Exploration Gabriela Ríos Landa is the Head of Exploration at the...",
  "id": 50
},{
  "title": "Javier Brolo",
  "url": "/contributors/Javier%20Brolo.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Javier Brolo\n            \n            UNDP Guatemala Accelerator Lab - Head of Experimentation\n            \n          \n        \n        \n          Javier Brolo is a social scientist specialized in quantitative and qualitative research methods. His academic training is in Philosophy, Mathematics, and Political Science. He has worked as the lead researcher in different Think Tanks and as a university professor. His interest in crude developing solutions to complex social problems, strengthening democratic institutions, attitude and behavior changes, and conducting impact evaluations with diverse and committed teams.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Javier Brolo UNDP Guatemala Accelerator Lab - Head of Experimentation Javier Brolo is a social scientist specialized in quantitative and...",
  "id": 50
},{
  "title": "Jorge Munguia",
  "url": "/contributors/Jorge%20Munguia.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jorge Munguia\n            \n            UNDP Mexico Accelerator Lab - Head of Solutions Mapping\n            \n          \n        \n        \n          Jorge is the Head of Solutions Mapping at the Accelerator Lab of UNDP in Mexico. He seeks to generate learning for complex development challenges through close ties with communities facing these challenges. In the context of complex development challenges, he advocates for innovative methodologies to strengthen collaborations and collective intelligence with a systemic perspective, as well as the strengthening of grassroots solutions. With 15 years of experience, he has worked on promoting people-centered strategies for public institutions and international organizations.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Jorge Munguia UNDP Mexico Accelerator Lab - Head of Solutions Mapping Jorge is the Head of Solutions Mapping at the...",
  "id": 50
},{
  "title": "Lorena Moscovich",
  "url": "/contributors/Lorena%20Moscovich.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lorena Moscovich\n            \n            UNDP Argetina Accelerator Lab - Head of Experimentation\n            \n          \n        \n        \n          Lorena Moscovich is head of experimentation at the UNDP Argentina accelerator. Her academic background includes a bachelor's degree in political science, a Master's, and a PhD in Social Sciences from the University of Buenos Aires. In addition, she is an affiliated researcher at the University of San Andrés, where she has worked as a professor and led governance programs. She has published in scientific journals in various countries and participated in academic meetings and given talks at universities in her country and abroad, including Harvard, Berkeley, Oxford, and Brown. She was also a visiting scholar at Columbia University, with the support of a Fulbright Commission and a visiting researcher at Brown University. Currently, she co-leads a project on the history of decentralization in Argentina.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Lorena Moscovich UNDP Argetina Accelerator Lab - Head of Experimentation Lorena Moscovich is head of experimentation at the UNDP Argentina...",
  "id": 50
},{
  "title": "Luis Fernando Cervantes",
  "url": "/contributors/Luis%20Fernando%20Cervantes.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Luis Fernando Cervantes\n            \n            UNDP Mexico Accelerator Lab - Head of Experimentation\n            \n          \n        \n        \n          Luis is an economist with extensive experience in the field of sustainable development. Currently serving as the Head of Experimentation at the UNDP Accelerator Lab in Mexico, he has built a professional trajectory with 11 years of experience in designing and implementing public policies, applied social research, capacity-building program development, policy impact evaluation, resource mobilization strategy design, and team mentoring through change processes. He is passionate about development economics and designing new paradigms that enable us to transition towards a more inclusive and sustainable world.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Luis Fernando Cervantes UNDP Mexico Accelerator Lab - Head of Experimentation Luis is an economist with extensive experience in the...",
  "id": 50
},{
  "title": "María Eugenia López",
  "url": "/contributors/Mar%C3%ADa%20Eugenia%20L%C3%B3pez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              María Eugenia López\n            \n            UNDP Argentina Accelerator Lab - Head of Exploration\n            \n          \n        \n        \n          María Eugenia López is the Head of Exploration for the Argentina Accelerator Lab. She studied Biology at the University of Buenos Aires and earned a master's degree in Neuroscience and Education from Columbia University in New York. During her time there, she worked in the Department of Epidemiology, conducting a meta-analysis of primary interventions on the leading causes of death worldwide. Upon returning to Buenos Aires, Eugenia focused on science communication through various mediums such as museums, exhibitions, camps, social media, and audiovisual productions. She taught at the Faculty of Exact and Natural Sciences at the University of Buenos Aires and served as a professor at the Favaloro University and the University of San Andrés.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "María Eugenia López UNDP Argentina Accelerator Lab - Head of Exploration María Eugenia López is the Head of Exploration for...",
  "id": 50
},{
  "title": "María Verónica Moreno",
  "url": "/contributors/Mar%C3%ADa%20Ver%C3%B3nica%20Moreno.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              María Verónica Moreno\n            \n            UNDP Argentina Accelerator Lab - Head of Solutions Mapping\n            \n          \n        \n        \n          María Verónica is the Head of Solutions Mapping for the Argentina Accelerator Lab since 2019. She has experience in international organizations, academia, and the public and private sector. She has worked as an undergraduate and graduate professor and researcher at the University of Buenos Aires (UBA, by its Spanish acronym). She has a Doctorate in Social Sciences (UBA), a Master's Degree in Public Policy from the Torcuato Di Tella University and a Bachelor's Degree in Sociology from the University of Salvador.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "María Verónica Moreno UNDP Argentina Accelerator Lab - Head of Solutions Mapping María Verónica is the Head of Solutions Mapping...",
  "id": 50
},{
  "title": "Mariana Olcese",
  "url": "/contributors/Mariana%20Olcese.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Mariana Olcese\n            \n            UNDP Peru Accelerator Lab - Head of Exploration\n            \n          \n        \n        \n          Connector between the public and private sectors, motivated to navigate uncertainty and identify emerging opportunities to translate them to different actors in the system. Her experience includes working as a consultant at the Inter-American Development Bank and the World Bank, an advisor to the Peruvian government, and as a public affairs manager for startups and corporations.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Mariana Olcese UNDP Peru Accelerator Lab - Head of Exploration Connector between the public and private sectors, motivated to navigate...",
  "id": 50
},{
  "title": "Patricia Choque",
  "url": "/contributors/Patricia%20Choque.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Patricia Choque\n            \n            UNDP Bolivia Accelerator Lab - Head of Solutions Mapping\n            \n          \n        \n        \n          Since 2021, Patricia has served as the Head of Solutions Mapping at the UNDP Accelerator Lab Bolivia. In this role, she endeavors to drive innovation for development by utilizing new sources of information to make informed decisions, applying collective intelligence methods, and implementing a systems transformation approach across diverse fields such as gender, environment, and digital inclusion. She holds a bachelor’s degree in system approaches, an MBA, and has completed post-graduate studies in statistics, gender, and micro-economy of competitiveness.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Patricia Choque UNDP Bolivia Accelerator Lab - Head of Solutions Mapping Since 2021, Patricia has served as the Head of...",
  "id": 50
},{
  "title": "Paulina Jiménez",
  "url": "/contributors/Paulina%20Jimenez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Paulina Jiménez\n            \n            UNDP Ecuador Accelerator Lab - Head of Solutions Mapping\n            \n          \n        \n        \n          Paulina es socióloga con una maestría en Género y Salud. Dedicó 8 años a la investigación acción en Madrid, España, con énfasis en precariedad femenina. En Ecuador, fue Directora Nacional de Salud Intercultural, puesto que le permitió diseñar y adaptar políticas públicas para reducir las barreras de acceso a la salud. Fue coordinadora del proyecto de Fortalecimiento de la Atención Primaria en Salud en la Organización Panamericana de la Salud (OPS/OMS). Actualmente ocupa el rol de Mapeo de Soluciones en el Laboratorio de Aceleración del Programa de Naciones Unidas para el Desarrollo, aportando soluciones para el desarrollo a través de la innovación comunitaria.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Paulina Jiménez UNDP Ecuador Accelerator Lab - Head of Solutions Mapping Paulina es socióloga con una maestría en Género y...",
  "id": 50
}]


// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var contentdiv = $('#content');

    var query = $(this).val();
    var result = index.search(query);
    resultdiv.empty();
    contentdiv.empty()
    
    // Add status
    resultdiv.prepend('<h6 class="">Found '+result.length+' result(s)</h6>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = `
      <div class="tertiary">
        <h5 class="" tabindex="0" data-viewport="false">
        <a href="/Innovation-Toolkit-for-UNDP-Signature-Solutions${store[ref]?.url}">
            ${store[ref]?.title}
        </a>
        </h5>
        <p>
            ${store[ref].excerpt}
        </p>
    </div>
      `

      resultdiv.append(searchitem);
    }
  });
  

//POPULATE TAGS AND SDG FILTER
var tagsdiv = $('#tag-div');
var sdgdiv = $('#sdg-div')
var rblac_priorities_div = $('#rblac_priorities_div')
var enablers_div = $('#enablers_div')
var signature_solutions_div = $('#signature_solutions_div')

if(tags.length > 0){
    tags = tags.sort(customSort);
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="tag">
        Tags
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < tags.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="tag${i+1}">${tags[i]?.toUpperCase()}</label>
                    <input
                        type="checkbox"
                        id="${tags[i]}"
                        name="tags"
                        value="${tags[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    tagsdiv.append(tg)
}

if(sdg.length > 0){
    sdg = sdg.sort(customSort);
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="sdg">
        SDG
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < sdg.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="sdg${i+1}">${sdg[i]}</label>
                    <input
                        type="checkbox"
                        id="${sdg[i]}"
                        name="sdg"
                        value="${sdg[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    sdgdiv.append(tg)
}

if(enablers.length > 0){
    enablers = enablers.sort(customSort);
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="enablers">
            Enablers
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < enablers.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="enablers${i+1}">${enablers[i]}</label>
                    <input
                        type="checkbox"
                        id="${enablers[i]}"
                        name="enablers"
                        value="${enablers[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    enablers_div.append(tg)
}

if(signature_solutions.length > 0){
    signature_solutions = signature_solutions.sort(customSort);
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="signature_solutions">
            Signature Solutions
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < signature_solutions.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="signature_solutions${i+1}">${signature_solutions[i]}</label>
                    <input
                        type="checkbox"
                        id="${signature_solutions[i]}"
                        name="signature_solutions"
                        value="${signature_solutions[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    signature_solutions_div.append(tg)
}

if(rblac_priorities.length > 0){
    rblac_priorities = rblac_priorities.sort(customSort);
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="rblac_priorities">
        RBLAC Priorities
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < rblac_priorities.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="rblac_priorities${i+1}">${rblac_priorities[i]}</label>
                    <input
                        type="checkbox"
                        id="${rblac_priorities[i]}"
                        name="rblac_priorities"
                        value="${rblac_priorities[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    rblac_priorities_div.append(tg)
}

let taglist = []
let sdglist = []
let enablerslist = []
let signature_solutionslist = []
let rblac_prioritieslist = []

let searchitemfn = post => `
<div class="tertiary">
    <h5 class="" tabindex="0" data-viewport="false">
    <a href="/Innovation-Toolkit-for-UNDP-Signature-Solutions${post?.url}">
        ${post?.title}
    </a>
    </h5>
    <p>
        ${post.excerpt}
    </p>
</div>
`

let resultdiv = $('#results');
let contentdiv = $('#content');
let contentCopy = $("#content").html(); // Store the current content

function customSort(a, b) {
    // Check if strings start with a number
    let startsWithNumberA = /^\d+/.test(a);
    let startsWithNumberB = /^\d+/.test(b);
    
    // If both start with numbers, sort by number
    if (startsWithNumberA && startsWithNumberB) {
        let numA = parseInt(a.match(/^\d+/)[0]);
        let numB = parseInt(b.match(/^\d+/)[0]);
        return numA - numB;
    } else if (startsWithNumberA) {
        // If only a starts with a number, it comes first
        return -1;
    } else if (startsWithNumberB) {
        // If only b starts with a number, it comes first
        return 1;
    } else {
        // Otherwise, sort alphabetically
        return a.localeCompare(b);
    }
}

let filterresult = () => {
    resultdiv.empty()
    resultdiv.prepend('<h6 class="">Showing results for  ' + [ ...taglist, ...signature_solutionslist, ...enablerslist, ...sdglist, ...rblac_prioritieslist, ].toString() + '</h6>');
    for(post of store){
        if(post?.tags?.some(tg => taglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.enablers?.some(tg => enablerslist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.signature_solutions?.some(tg => signature_solutionslist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.rblac_priorities?.some(tg => rblac_prioritieslist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
    };
}

$(document).on('multiSelectInputToggle', (e) => {
    let { value, checked, name } = e.target;
    
    if(checked && name === 'tags') taglist.push(value)
    else if(checked && name === 'signature_solutions') signature_solutionslist.push(value)
    else if(checked && name === 'enablers') enablerslist.push(value)
    else if(checked && name === 'rblac_priorities') rblac_prioritieslist.push(value)
    else if(checked && name === 'sdg') sdglist.push(value)

    else if(!checked && name === 'signature_solutions' && signature_solutionslist.includes(value)) signature_solutionslist.splice(signature_solutionslist.indexOf(value), 1)
    else if(!checked && name === 'enablers' && enablerslist.includes(value)) enablerslist.splice(enablerslist.indexOf(value), 1)
    else if(!checked && name === 'rblac_priorities' && rblac_prioritieslist.includes(value)) rblac_prioritieslist.splice(rblac_prioritieslist.indexOf(value), 1)
    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)
    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)
  
    filterresult()

});

$(document).on('filterSearchChipRemoval', (e) => {
    let textContent = e.target.getAttribute('option-name');
    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)
    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)

    signature_solutionslist.includes(textContent) && signature_solutionslist.splice(signature_solutionslist.indexOf(textContent), 1)
    enablerslist.includes(textContent) && enablerslist.splice(enablerslist.indexOf(textContent), 1)
    rblac_prioritieslist.includes(textContent) && rblac_prioritieslist.splice(rblac_prioritieslist.indexOf(textContent), 1)
    filterresult()
});

$(document).on('filterSearchClear', (e) => {
    sdglist = [];
    taglist =  [];
    enablerslist = []
    signature_solutionslist = []
    rblac_prioritieslist = []
    resultdiv.empty()
    $("#content").html(contentCopy);
});

//GET ELEMTENTS WITH ID TAGS AND SDG
$('.tag-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    taglist = [ textContent ]
    sdglist = []
    enablerslist = []
    signature_solutionslist = [ ]
    rblac_prioritieslist = []
    contentdiv.empty()
    filterresult()
} )

$('.sdg-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    sdglist = [textContent]
    taglist = []
    enablerslist = []
    signature_solutionslist = [ ]
    rblac_prioritieslist = []
    contentdiv.empty()
    filterresult()
} )

$('.enablers-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    enablerslist = [textContent]
    taglist = []
    sdglist = []
    signature_solutionslist = []
    rblac_prioritieslist = []
    contentdiv.empty()
    filterresult()
} )

$('.signature_solutions-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    enablerslist = []
    taglist = []
    sdglist = []
    signature_solutionslist = [ textContent]
    rblac_prioritieslist = []
    contentdiv.empty()
    filterresult()
} )

$('.rblac_priorities-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    enablerslist = []
    taglist = []
    sdglist = []
    signature_solutionslist = [ ]
    rblac_prioritieslist = [textContent]
    contentdiv.empty()
    filterresult()
} )

})