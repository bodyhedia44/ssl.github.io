// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "Complete the conversation\nAli: What is her .............name?\nAhmed: Her last name is AL-Nari.",
        answer: "Last",
        options: [
            "Middle",
            "Last",
            "None"
        ]
    },
    {
        numb: 2,
        question: "She is married. Her husband is Tom Samuel. She is........... Samuel.",
        answer: "Mrs.",
        options: [
            "Miss",
            "Mr.",
            "Mrs."
        ]
    },
    {
        numb: 3,
        question: "She is not married. She is............ Emma Murray.",
        answer: "Miss. or Ms.",
        options: [
            "Mrs.",
            "Mr.",
            "Miss. or Ms."
        ]
    },
    {
        numb: 4,
        question: "Complete the conversation.\nJon: Are you Steven Carson?",
        answer: "No, I'm not.",
        options: [
            "Yes, you are.",
            "Yes, I am.",
            "No, I'm not."
        ]
    },
    {
        numb: 5,
        question: "It is my ....... Book.",
        answer: "none",
        options: [
            "а",
            "an",
            "none"
        ]
    },
    {
        numb: 6,
        question: "They are his ………..",
        answer: "books.",
        options: [
            "a book.",
            "books.",
            "book."
        ]
    },
    {
        numb: 7,
        question: "....... is the room.",
        answer: "This",
        options: [
            "This",
            "That",
            "These"
        ]
    },
    {
        numb: 8,
        question: "................ are the houses over there.",
        answer: "Those",
        options: [
            "That",
            "These",
            "Those"
        ]
    },
    {
        numb: 9,
        question: "What is this?\n ........ an earring.",
        answer: "It's",
        options: [
            "They're",
            "It's",
            "We're"
        ]
    },
    {
        numb: 10,
        question: "Where are you?\n I am ....... his room.",
        answer: "in",
        options: [
            "in",
            "on",
            "at"
        ]
    },
    {
        numb: 11,
        question: "The picture is.......... the wall.",
        answer: "on",
        options: [
            "in",
            "on",
            "at"
        ]
    },
    {
        numb: 12,
        question: "Who's that?",
        answer: "He's my brother.",
        options: [
            "It's your pen.",
            "They're my students.",
            "He's my brother."
        ]
    },
    {
        numb: 13,
        question: "What's your teacher like?",
        answer: "He's very nice.",
        options: [
            "He's very nice.",
            "She likes her brother.",
            "It's like your car."
        ]
    },
    {
        numb: 14,
        question: "When someone is overweight, he is ……..",
        answer: "Heavy.",
        options: [
            "Thin.",
            "Heavy.",
            "Good-looking."
        ]
    },
    {
        numb: 15,
        question: "Whose pen is it?",
        answer: "It is for me.",
        options: [
            "He is for me.",
            "It is for me.",
            "It is my brother."
        ]
    },
    {
        numb: 16,
        question: "These are .............. clothes.",
        answer: "Our",
        options: [
            "Our",
            "Ours",
            "We"
        ]
    },
    {
        numb: 17,
        question: "What are you doing?",
        answer: "I'm doing my homework.",
        options: [
            "You do your homework.",
            "I'm making my homework.",
            "I'm doing my homework."
        ]
    },
    {
        numb: 18,
        question: "Sara is ……….. her sunglasses.",
        answer: "Wearing",
        options: [
            "Putting",
            "Wearing",
            "Running"
        ]
    },
    {
        numb: 19,
        question: "It's twelve o'clock.\n It's …………",
        answer: "Noon.",
        options: [
            "Noon.",
            "Afternoon.",
            "In the evening."
        ]
    },
    {
        numb: 20,
        question: "Nora is ……….. right now.",
        answer: "Shopping",
        options: [
            "Shoping",
            "Shopping",
            "Shooping"
        ]
    },
    {
        numb: 21,
        question: "Omar and his brother are ................ outside.",
        answer: "Running",
        options: [
            "Running",
            "Runing",
            "Running"
        ]
    },
    {
        numb: 22,
        question: "What does ............ do?",
        answer: "Не",
        options: [
            "They",
            "Не",
            "We"
        ]
    },
    {
        numb: 23,
        question: "Does he ………. a car?",
        answer: "Have",
        options: [
            "Has",
            "His",
            "Have"
        ]
    },
    {
        numb: 24,
        question: "Asma ............. at night.",
        answer: "Studies",
        options: [
            "Studys",
            "Studies",
            "Study"
        ]
    },
    {
        numb: 25,
        question: "Omar ............... TV at the weekend.",
        answer: "Watches",
        options: [
            "Watches",
            "Watchs",
            "Watch"
        ]
    },
    {
        numb: 26,
        question: "There is no .…………… in the bedroom.",
        answer: "sofa",
        options: [
            "a sofa",
            "sofa",
            "an sofa"
        ]
    },
    {
        numb: 27,
        question: "Where do you work?",
        answer: "In a hospital.",
        options: [
            "I'm a doctor.",
            "In a hospital.",
            "I really like it."
        ]
    },
    {
        numb: 28,
        question: "There are ………… chairs in the kitchen.",
        answer: "Some",
        options: [
            "Some",
            "Any",
            "None"
        ]
    },
    {
        numb: 29,
        question: "You don't have ………… choice.",
        answer: "Any",
        options: [
            "Any",
            "None",
            "Some"
        ]
    },
    {
        numb: 30,
        question: "How does Ali like his job?",
        answer: "He really hates it.",
        options: [
            "He is good.",
            "It's very far.",
            "He really hates it."
        ]
    },
    {
        numb: 31,
        question: "Which sentence is correct?",
        answer: "A doctor has a stressful job.",
        options: [
            "A doctor has stressful job.",
            "A doctor has a stressful job.",
            "A doctor has stressful a job."
        ]
    },
    {
        numb: 32,
        question: "I hate my job, it's ...........",
        answer: "Boring.",
        options: [
            "Bored.",
            "Boring.",
            "Bore."
        ]
    },
    {
        numb: 33,
        question: "I am ........... I really like these games",
        answer: "Excited",
        options: [
            "Excited",
            "Exciting",
            "Excite"
        ]
    },
    {
        numb: 34,
        question: "I go to the gym every day so, I ............... go there.",
        answer: "Always",
        options: [
            "Usually",
            "Often",
            "Always"
        ]
    },
    {
        numb: 35,
        question: "This is my pen. It is …………",
        answer: "mine",
        options: [
            "my",
            "mine",
            "Ours"
        ]
    }
];
