  // ATTENTION : N'oubliez pas d'importer les bibliothèque -- Le mieux serai d'utilisé 
  //la dernière version ou bien carrement le CDN
  
  // <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
  //  <script src="~/Scripts/jquery.validate.js"></script> 
  
  <form action="" method="post" id="account-creation" name="account-creation">
      ...
  </form>

  /* 'account-creation' c'est le Id de votre formulaire */
  $("#account-creation").validate({
      /* Ici, on definit le règles pour chaque champ de texte*/
        rules:
        {
            /* C'est le nom de votre input Nome (ex: <input type ="text" id ="Name" name = "Name" />) */
            Name:
            {
                /* Pour dire que le nom est obligatoire */
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            },
            confirmPassword:
            {
                required: true,
                equalTo: "#password"
            },
            Phone: {
                required: true,
                maxlength: 18,
                minlength:18
            }-+
        },
        /* Ici, on definit les messages pour chaque champ de texte*/
        messages:
        {
            Name:
            {
                required: "Le nom est un champ obligatoire"
            },
            email:
            {
                required: "L'adresse E-mail est un champs obligatoire",
                email: "Cette Adresse E-mail est invalide"
            },
            password: {
                required: "Le de mot de passe est obligatoire"
            },
            confirmPassword:
            {
                required: "La confirmation du mot de passe est obligatoire",
                equalTo : "Les deux mots de passe doivent être egaux" 
            },
            Phone: {
                required: "Le Numero de telephone est obligatoire",
                maxlength: "Le numero doit avoir 13 caractères",
                minlength: "Le numero de telephone doit contenir au moins 13 caractères"
            }
        }
    });

    /* Ici vous allez masqué le numero de Télephone en suivant un format preferer, je n'ai pris celui-ci que en titre d'exemple*/
    $("#Phone").mask("(999)-999-9999-999");