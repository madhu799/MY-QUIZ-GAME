class Question{
    constructor(){
        this.title = createElement("h1");
        this.input1 = createInput("Please enter your name!");
        this.input2 = createInput("Please enter correct option number");
        this.button = createButton('Submit');
        this.question = createElement('h3')
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
 }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();

    }

    
    display(){
        this.title.html("MY Quiz GAME");
        this.title.position(350 , 0);
        this.question.html("Question: What starts and ends with letter 'E', but has only one letter?  ")
        this.question.position(150,80);
        this.option1.html("1. EVERYONE")
        this.option1.position(150,100);
        this.option2.html("2. ENVELOPE")
        this.option2.position(150,120); 
        this.option3.html("3. ESTIMATE")
        this.option3.position(150,140);
        this.option4.html("4. EXAMPLE")
        this.option4.position(150,160);
        this.input1.position(150,230);
        this.input2.position(350,230);
        this.button.position(290,230);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.button.hide();
            this.input2.hide();

            contestant.name  = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount += 1
            contestant.index = contestantCount;
            contestant.update();
            contestant.unpdateCount(contestantCount);
        });

        }




















}





















