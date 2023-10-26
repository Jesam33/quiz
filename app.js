const questionBank = [
    {
        questionText : ' diforf uibubuh 9huihu uihiuhq',
        options : ['jdjd','ejd','yye7','jjej'],
        correctIndex : 2
    },
    {
        questionText : 'In amet repellat voluptate quisquam accusantium enim quo placeat explicabo maxime voluptatum deleniti hic facilis commodi, vero sequi qui error architecto?',
        options : ['hkbfnkj','gvtyfweyuef','hehefhefhe','hyuguygwe'],
        correctIndex : 3
    },
    {
        questionText : 'In amet repellat voluptate quisquam accusantium enim quo placeat explicabo maxime voluptatum deleniti hic facilis commodi, vero sequi qui error architecto?',
        options : ['hkbfnkj','gvtyfweyuef','hehefhefhe','hyuguygwe'],
        correctIndex : 0
    },
    {
        questionText : 'In amet repellat voluptate quisquam accusantium enim quo placeat explicabo maxime voluptatum deleniti hic facilis commodi, vero sequi qui error architecto?',
        options : ['hkbfnkj','gvtyfweyuef','hehefhefhe','hyuguygwe'],
        correctIndex : 1
    },
    {
        questionText : 'In amet repellat voluptate quisquam accusantium enim quo placeat explicabo maxime voluptatum deleniti hic facilis commodi, vero sequi qui error architecto?',
        options : ['hkbfnkj','gvtyfweyuef','hehefhefhe','hyuguygwe'],
        correctIndex : 1
    },
    {
        questionText : 'In amet repellat voluptate quisquam accusantium enim quo placeat explicabo maxime voluptatum deleniti hic facilis commodi, vero sequi qui error architecto?',
        options : ['hkbfnkj','gvtyfweyuef','hehefhefhe','hyuguygwe'],
        correctIndex : 0
    },
    {
        questionText : 'In amet repellat voluptate quisquam accusantium enim quo placeat explicabo maxime voluptatum deleniti hic facilis commodi, vero sequi qui error architecto?',
        options : ['hkbfnkj','gvtyfweyuef','hehefhefhe','hyuguygwe'],
        correctIndex : 3
    },
    {
        questionText : 'In amet repellat voluptate quisquam accusantium enim quo placeat explicabo maxime voluptatum deleniti hic facilis commodi, vero sequi qui error architecto?',
        options : ['hkbfnkj','gvtyfweyuef','hehefhefhe','hyuguygwe'],
        correctIndex : 2
    },
    {
        questionText : 'In amet repellat voluptate quisquam accusantium enim quo placeat explicabo maxime voluptatum deleniti hic facilis commodi, vero sequi qui error architecto?',
        options : ['hkbfnkj','gvtyfweyuef','hehefhefhe','hyuguygwe'],
        correctIndex : 1
    },
    {
        questionText : 'In amet repellat voluptate quisquam accusantium enim quo placeat explicabo maxime voluptatum deleniti hic facilis commodi, vero sequi qui error architecto?',
        options : ['hkbfnkj','gvtyfweyuef','hehefhefhe','hyuguygwe'],
        correctIndex : 0
    }

]
const questionOut = document.getElementById('quest-txt');
const progInd = document.getElementById('prog-ind');
const allOptions = [document.getElementById('opt1'),document.getElementById('opt2'),document.getElementById('opt3'),document.getElementById('opt4')];
const submitBtn = document.getElementById('btn-sub');

let currentQuestion = 0, score = 0, currentSelection;

function disableSubmitButton(){
    submitBtn.disabled = true;
    submitBtn.style.color = '#d6d6d6';
}
function enableSubmitButton(){
    submitBtn.disabled = false;
    submitBtn.style.color = 'white';
}

function resetOption(){
    allOptions.forEach(e =>{
        e.setAttribute('class','no-selec');
        document.getElementById('ans-info').innerHTML = "No option selected!";
    })
}
function selectOption(_opt){
    //setting all options unselected
    resetOption();
    allOptions[_opt].setAttribute('class','selected');
    document.getElementById('ans-info').innerHTML = "Sure!";
    enableSubmitButton();
}



function loadQuestion(_indexNumber){
    let questionData = questionBank[_indexNumber];
    progInd.innerHTML = `Question ${_indexNumber+1} of ${questionBank.length}`;
    questionOut.innerHTML = questionData.questionText;
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].lastChild.innerHTML = questionData.options[i];
    }
}

function initApp(){
    disableSubmitButton();
    loadQuestion(currentQuestion);
}
function showResult (){
    document.getElementById('score').innerHTML = score;
    document.getElementById('total').innerHTML = questionBank.length;
    document.getElementById('result-container').style.display = 'block';
}
function restartApp(){
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
    disableSubmitButton();
    if(currentSelection == questionBank[currentQuestion].correctIndex){
        score++;
        document.getElementById('ans-info').innerHTML = "Correct";
    }
    else{
        document.getElementById('ans-info').innerHTML = "Wrong";
    }
    setTimeout(()=>{
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
