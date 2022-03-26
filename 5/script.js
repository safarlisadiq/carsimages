let bmw =[ 'BMW3Series-1', 'bmw 5', 'bmw 7 '];
let audi =['audi a4', 'audi a6', 'audi a8'];
let mrc = ['mrc C', 'mrc E', 'mrc S']

let autos = [
    'BMW',
    'Mercedes',
    'Audi'
];
let models = [
    ['3-series','5-series','7-series'],
    ['C-class','E-class','S-class'],
    ['A4','A6','A8']
];

let autoss=document.getElementById('autos');
let modelss=document.getElementById('models');
let show=document.getElementById('show');
onload = function(){
    let data = '<option  selected disabled> Marka Secin </option>';
    for(let item in autos){
        data += `<option value="${item}">${autos[item]}</option>`
    }
    autoss.innerHTML = data;
}
autoss.onchange = function(){
    let data = '<option selected disabled> Model Secin </option>';
    let value = autoss.value;
        for(let i = 0; i<models[value].length; i++){
            data += `<option value="${i}">${models[value][i]}</option>`
        }
        modelss.innerHTML = data;
}
modelss.onchange = function(){

    let marka = autoss.value;
    let model = modelss.value;

    let img ='';
             if(marka == 0){
                          if(model==0){
                            img=`<img src='img/${bmw[0]}.jpg'>`
                          }else if(model==1){
                            img=`<img src='img/${bmw[1]}.jpg'>`
                          }else if(model==2){
                            img=`<img src='img/${bmw[2]}.jpg'>`
                          }

             }else if(marka==1){
                if(model==0) {
                    img=`<img src='img/${mrc[0]}.jpg'>`;
                }else if(model==1){
                    img=`<img src='img/${mrc[1]}.jpg'>`;
                 } else if(model==2){
                    img=`<img src='img/${mrc[2]}.jpg'>`;
                }
             }else if(marka == 2){
                if(model==0) {
                    img=`<img src='img/${audi[0]}.jpg'>`;
                }else if(model==1){
                    img=`<img src='img/${audi[1]}.jpg'>`;
                 } else if(model==2){
                    img=`<img src='img/${audi[2]}.jpg'>`;
                 }
                }
    show.innerHTML = img;
}