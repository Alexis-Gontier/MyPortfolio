// FOOTER
let date = document.querySelector('footer p span');
let now = new Date();
date.textContent += now.getFullYear();


var spansToClone = document.querySelectorAll('.banner .container span');

        // Parcourez chaque élément à cloner
        spansToClone.forEach(function(span) {
            // Clonez l'élément
            for (var i = 0; i < 10; i++) { // Clonez deux fois
                var clone = span.cloneNode(true); // true pour cloner les enfants

                // Ajoutez le clone à son parent
                span.parentNode.appendChild(clone);
            }
        });