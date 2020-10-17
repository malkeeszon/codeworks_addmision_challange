
let speakers = [{
    name: "Marlowe",
    color: "hsl(256, 26%, 75%)",
    quotes: ["Yes, Eve. It is.","I\'ve told you a thousand times to never, ever, call me that in a public place.","Well, well. Look what the cat dragged in.", "Illiterate!", "Eve, please...","Eve, stop. I beg you. Anyway, no one would believe me...not in...four hundred years.",
    "You look...like sh*t.","Oh, you know...Here and there over the centuries...","I think the world has more than enough chaos to contend with.","What? Oh. I\'m sorry, I... I drifted away for a moment. To Italy, actually. A few hundred years ago...","Alright, then. In any case, deliver my regards to that suicidally romantic scoundrel.",
    "Eve, I know I don\'t need to tell you this, but please be cautious. I couldn\'t bear it if anything happened to you.","God, I wish I\'d known Adam before writing Hamlet. He would have provided the most perfect casestudy imaginable.",
    "No more good French doctor. I...got some bad stuff. Contaminated. Avoid the hospital here.","I\'m aware of that, my dear.","Precisely.","Oh, god no. Traveling these last years, for me, is bordering on impossible. And why would I want to go anywhere else?",
    "I had a dream about your sister last night. Your infamous little sister...","Do you even know where she is these days?","It\'s the last of the good stuff. It\'s too late for me.","Do you even know where she is these days?", "Haha!"]
    },
    {name: "Eve",
    color: "hsl(0, 26%, 70%)",
    quotes: ["I still have the beautiful strand you gave me two hundred years ago. Anyway, right now I\'d prefer a nice scruffy albatross.", "You had a dream about Ava?","Hello, darling.","There\'s only an hour \'til sunrise.","Is it the really good stuff?",
    "From the French doctor?","I\'m so happy to see you Christopher Marlowe!", "Yes, I know, darling. But it\'s so difficult to continue hiding such a delicious secret.","The most outrageous scandal in literary history!", "Kit, have you really been wearing this frock since 1590?",
    "Perhaps you\'re right, Doctor Faustus.", "Ooh, the really good stuff! ","Here\'s to you, Adam, my love.", "Oh, what\'s the matter, baby? Miss me too much?",
    "Are you just being dramatic?", "Oh, Adam. You\'ve been deeply depressed before. Remember the 1820s? And your reaction to the first World War, that did scare the sh*t out of me, to say nothing of the Spanish Civil War. Then the 1950s...the \'70s...",
    "Seriously?", " But I can\'t believe you\'re doing this to me again. And tell me why again you\'re in, of all places on this planet, f***ing Detroit? ", "Was he painfully good looking?" ,"Ooh. But it was your idea, Adam, your \"I vont to be alone\" routine.", "Adam, I love your newest music.",
    "Come on Adam, if we\'re going to start cataloguing the atrocities of human history, those are probably very minor examples.",
    "We are fragile. Everything is. But how amazing it is to observe all the details of history flowing by!","I do wish we could let the world know one day. It would cause such thrilling chaos.", "Turn on your contraption so I can see you"]
    },
    {
    name: "Adam",
    color: "hsl(98, 26%, 75%)",
    quotes: ["Listen, Eve. I don\'t think you should come. Listen to me. Don\'t come. It\'s gotten way too weird out there. ", "Other than that, I guess it\'s an end of the world kind of thing... ","Sounds exciting.", "What do you want me to say? ","I\'m fine.", "No. ", "Eve...",
    "Just what the doctor ordered, as they say.","I wouldn\'t bother.", "Doctor f***ing Who...", "To you, Eve. I love you more than...all the tea in China.","Oww! S*it!","Ah, there you are, my love.", "Maybe...Yeah.", "Should I send pearls? Black pearls?",
    "Yeah, definitely all deeply depressing times.", "I seem to be writing a lot of funeral music.", "Suits my mood. I guess. I\'ll tell you one thing I love about Detroit - you can be whatever you want here.","Thanks. It\'s called \"I Drank Your Mother\'s Blood, and She Tasted Like a W*ore\".",
    "Yeah, look what they\'ve done to them. Look at Pythagoras. They slaughtered him and his commune. Galileo - imprisoned. Capernicus - ridiculed. Newton - pushed into secrecy and alchemy. Tesla - destroyed, and his beautiful possibilities ignored. And they\'re still b*tching about Darwin! Yeah, so much for the scientists.",
    "Easy for you. You have three thousand years of experience.","F***in\' hell...", "I wouldn\'t bother.", "I need a bullet. A very special bullet.", "A .32 caliber bullet, but made of wood.", "It\'s for a rather secret project. An \"art\" project.", "That would require pre-arrangement."]
    }];
function showMeTheMessage(name, color, text, isRight){
    let today = new Date();
    let time = today.getHours() + ":" + (today.getMinutes() < 10 ? '0':'') + today.getMinutes();
    let $time = $("<div>")
            .addClass("date")
            .html(time)
    let $userMessage = $("<div>").addClass("userText").html(text);
    let $name = $("<div>")
        .addClass("userName")
        .html(name);
    let $userBubble = $("<div>")
        .addClass("userBubble")
        .appendTo(".main")
        .append($userMessage)
        .prepend($name)
        .append($time)
        .animate({
            padding: 6
            }, 100)
        .css("clear", "both")
        .css("background-color", color);
    if (isRight) {
        $userBubble.css("float", "right");
    } else {
        $userBubble.css("float", "left");
    };
    $(".main").animate({ scrollTop: $(".main")[0].scrollHeight }, 1);
};
function createConversation() {
    let i = 0;
    setInterval(function(){
        if (i < speakers.length) {
            showMeTheMessage(speakers[i].name, speakers[i].color, speakers[i].quotes[Math.floor(Math.random() * speakers[i].quotes.length)], false);
        };
        i++;
        if (i == speakers.length) {
            createConversation();
        };
    }, 8000);
};
$("textarea").keydown(function(event) {
    let keyCode = (event.keyCode || event.which);
    if(keyCode == 13 && !event.shiftKey) {
        $("#textarea").parents("form").submit();
        event.preventDefault();
    }
  });

  $("#userInput").on("submit", function(event){
    event.preventDefault();
    showMeTheMessage("You", "hsl(40, 26%, 75%)", $("#textarea").val(), true);
    $("textarea").val('');
});
createConversation();

