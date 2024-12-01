function darkmode() {
    var darkmode = document.body;
    darkmode.classList.toggle("dark-mode");
  }


  let form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

  let email = document.querySelector('#email')
  let mdp = document.querySelector('#mdp')
  let mdp2 = document.querySelector('#mdp2')
  let pseudo = document.querySelector('#pseudo')
  let age = document.querySelector('#age')
  let errorContainer = document.querySelector('#errorContainer');
  let mdpcontainer = document.querySelector('#mdpcontainer');
  let successcontainer = document.querySelector('#successcontainer')

  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*.,?_]).+$"
  );

  successcontainer.classList.remove('visible');

if (
  pseudo.classList.contains('confirmation') &&
  email.classList.contains('confirmation') &&
  mdp.classList.contains('confirmation') &&
  mdp2.classList.contains('confirmation')&&
  age.classList.contains('confirmation')&&
  radio.classList.contains('confirmation')
) {
  console.log("tout est rempli")
  successcontainer.classList.add('visible');
}
  if (pseudo.value == ''){
    pseudo.classList.add('erreur')
    console.log("--------------------")
    console.log("pseudo invalide")
    errorContainer.classList.add('visible')
    pseudo.classList.remove('confirmation')
    successcontainer.classList.remove('visible');



  }
    

    else if (pseudo.value.length < 6 || passCheck.test(pseudo.value) == false){
      pseudo.classList.remove('confirmation')
      successcontainer.classList.remove('visible');

      console.log("le pseudo doit comporter une majuscule + un caractère spécial+ une minuscule + un chiffre + plus de 6 caractères")

    }
   else{
    errorContainer.classList.remove('visible')
    pseudo.classList.add('confirmation')
    console.log("--------------------")
    console.log("PSEUDO VALIDE")


  }
  
  
  if (email.value == ''){
    console.log("email invalide")
    email.classList.add('erreur')
    email.classList.remove('confirmation');


  } else{ 
    email.classList.add('confirmation')
    console.log("EMAIL VALIDE")

  }

  if (mdp.value == '' || mdp.value.length < 8 ){
    mdp.classList.add('erreur')
    console.log("mdp invalide, il doit comporter au moins 8 caractères")
    mdpcontainer.classList.add('visible')
    mdp.classList.remove('confirmation');

  } else{
    mdpcontainer.classList.remove('visible')
    mdp.classList.add('confirmation')
    console.log("MDP VALIDE")
  }


  if (mdp2.value == mdp.value && mdp2.value != ''){
    mdp2.classList.add('confirmation')
    console.log("MDP CONFIRME")
  }
  else{
    mdp2.classList.add('erreur')
    console.log("mdp non confirmé")
    mdp2.classList.remove('confirmation');


  }

  if (age.value == ""){
    age.classList.add('erreur')
    console.log("age non valide")
    age.classList.remove('confirmation');

  }
  else{
    age.classList.add('confirmation')
    console.log("AGE VALIDE")

  }

  if (radio.value == ""){
    radio.classList.add('erreur')
    console.log("texte non valide")
    radio.classList.remove('confirmation');

  }
  else{
    radio.classList.add('confirmation')
    console.log("TEXTE VALIDE")

  }

});
