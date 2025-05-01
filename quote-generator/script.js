let btn =document.querySelector("#new-quote");
let quote=document.querySelector(".quote");
let person =document.querySelector(".person");

const quotes=[
    {quote:"Pain makes me grow. Growing is what I want. Therefore, for me pain is pleasure.",
    person:"Arnold Schwarzenegger"},
    {quote:"Remember this: your body is your slave; it works for you.",
    person:"Jack LaLanne, fitness pioneer"},
    {quote:"Strength does not come from winning. Your struggles develop your strengths.",
    person:"Arnold Schwarzenegger"},
    {quote:"When you feel like quitting, think about why you started.",
    person:"David Goggins"},
    {quote:"Exercise to stimulate, not to annihilate. The world wasn't formed in a day, and neither were we. Set small goals and build upon them.",
    person:"Lee Haney, former Mr. Olympia"},
    {quote:"I don't stop when I'm tired. I stop when I'm done.",
    person:"David Goggins"},
    {quote:"The clock is ticking. Are you becoming the person you want to be?",
    person:" Greg Plitt"},
    {quote:"The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to conquer.",
    person:" Arnold Schwarzenegger"},
    {quote:" Forget failure. Forget Mistakes. Forget Everything, except what you're going to do now. And do it.",
    person:"Lou Ferrigno"},
    {quote:"Winners do what they fear.",
    person:"Franco Columbu"},
    {quote:"Victory isn't defined by wins and losses, it's defined by effort.",
    person:"Kai Greene"},
    {quote:"If you want something you've never had before, you have to be willing to do something you've never done before.",
    person:"Phil Heath"},
    {quote:"The real workout starts when you want to stop.",
    person:"Ronnie Coleman"},
    {quote:"Don't let someone who gave up on their dreams talk you out of yours. ",
    person:"Flex Lewis"},
    {quote:"Hard work and training. There's no secret formula. I lift heavy, work hard and aim to be the best",
    person:"Ronnie Coleman"},
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
});