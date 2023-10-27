
    const questionBank = [
        {
            questionText : 'What is the full meaning of HTML ?',
            options : ['Hyper Markup Text Literal','Hyper Text Markup Language','High Mashedup Text liconcise','None of the above'],
            correctIndex : 1
        },
        {
            questionText : 'What command is used to change a directory in Linux',
            options : ['chmod','cd','CD','CHMOD'],
            correctIndex : 1
        },
        {
            questionText : 'What is the full meaning of JS',
            options : ['Javascript','join Script','Joined Script','All of the above'],
            correctIndex : 0
        },
        {
            questionText : 'The term "git init" in the terminal does what ?',
            options : ['Writes git init','Calls a function','Initialises a new git repository','Console the terminal'],
            correctIndex : 2
        },
        {
            questionText : 'Who is the president of "Nigeria" ?' ,
            options : ['Jagaban','Peter Obi','Atiku Abubaka','Bola Tinubu'],
            correctIndex : 3
        },
        {
            questionText : 'How many staes are in "Nigeria" ?',
            options : ['12','36','24','None of the above'],
            correctIndex : 1
        },
        {
            questionText : 'Who is the highest goal scorer in the world " ALL TIME" ?',
            options : ['Cristiano Ronaldo','Lionel Messi','Pele','Maradona'],
            correctIndex : 2
        },
        {
            questionText : "Who's our current tutor in kodecamp (3.0) Front-end-beginner ?",
            options : ['Simple Soul','Phemmy Blaze','David Edu','David Dozie'],
            correctIndex : 1
        },
        {
            questionText : 'When is the Kodecamp project phase ceremony starting ?',
            options : ['Sep 13th, 2023','Oct 13th, 2023','Nov 13th, 2023','Dec 13th, 2023'],
            correctIndex : 2
        },
        {
            questionText : 'Who is the current manager of KODE CAMP',
            options : ['Jesam','David Edu','David Dozie','Ikeys'],
            correctIndex : 3
        }

    ]
    
    const questionOut = document.getElementById('quest-txt');
    const progInd = document.getElementById('prog-ind');
    const allOptions = [document.getElementById('opt1'),document.getElementById('opt2'),document.getElementById('opt3'),document.getElementById('opt4')];
    const submitBtn = document.getElementById('btn-sub');

    let currentQuestion = 0, score = 0, currentSelection;

    const disableSubmitButton =()=>{
        submitBtn.disabled = true;
        submitBtn.style.color = '#d6d6d6';
    }
    const enableSubmitButton =()=>{
        submitBtn.disabled = false;
        submitBtn.style.color = '#fff';
    }

    const resetOption = ()=>{
        allOptions.forEach(e =>{
            e.setAttribute('class','no-select');
            document.getElementById('ans-info').innerHTML = "No option selected!";
        })
    }

    const selectOption = (_opt)=>{
        //setting all options unselected
        resetOption();
        allOptions[_opt].setAttribute('class','selected');
        document.getElementById('ans-info').innerHTML = "Sure!";
        enableSubmitButton();
    }

    

    const loadQuestion = (_indexNumber)=>{
        let questionData = questionBank[_indexNumber];
        progInd.innerHTML = `Question ${_indexNumber+1} of ${questionBank.length}`;
        questionOut.innerHTML = questionData.questionText;
        for (let i = 0; i < allOptions.length; i++) {
            allOptions[i].lastChild.innerHTML = questionData.options[i];
        }
    }

    const initApp = ()=>{
        disableSubmitButton();
        loadQuestion(currentQuestion);
    }
    const showResult = ()=>{
        document.getElementById('score').innerHTML = score;
        document.getElementById('total').innerHTML = questionBank.length;
        document.getElementById('result-container').style.display = 'block';
    }
    const restartApp = ()=>{
        score = 0;
        currentQuestion = 0;
        document.getElementById('result-container').style.display = 'none';
        initApp();

    }



    for(let i=0;i<allOptions.length;++i){
        console.log(i);
        allOptions[i].addEventListener('click',()=>{
            selectOption(i);
            currentSelection = i;
        });
    }


    submitBtn.addEventListener('click',()=>{
        allOptions[currentSelection].style.backgroundColor = "green";
        disableSubmitButton();
        if(currentSelection == questionBank[currentQuestion].correctIndex){
            score++;
            document.getElementById('ans-info').innerHTML = "Correct";
        }
        else{
            document.getElementById('ans-info').innerHTML = "Wrong";
            allOptions[questionBank[currentQuestion].correctIndex].style.backgroundColor = "red";
        }
        setTimeout(()=>{
            allOptions[currentSelection].style.backgroundColor = "#fff";
            allOptions[questionBank[currentQuestion].correctIndex].style.backgroundColor = "#fff";
            ++currentQuestion;
            console.log(currentQuestion+'---'+questionBank.length);
            if(currentQuestion >= questionBank.length){
                showResult();                
                return;
            }
            resetOption();
            loadQuestion(currentQuestion);
            
        },1000);
    })
    document.getElementById('retake').addEventListener('click',()=>{
        restartApp();
    })

    

    initApp();