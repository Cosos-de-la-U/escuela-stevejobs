const db = firebase.firestore();
const formPerfilEstudiante = document.getElementById('frmPerfilEstudiante');
window.addEventListener("DOMContentLoaded", (e) => {
    //mostrar perfil
    MostrarDatosUsuario();
});


function MostrarDatosUsuario() {
    db.collection("estudiante").where("user", "==", GetLSSesionUser()).get()
        .then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                formPerfilEstudiante["nombreStudent"].value = doc.data().nombre;
                formPerfilEstudiante["gradoStudent"].value=doc.data().grado;
                document.getElementById("nombreEstResumen").innerText = doc.data().nombre;
                formPerfilEstudiante["fechanacStudent"].value = doc.data().fechNacimiento;
                formPerfilEstudiante["sexoStudent"].value = doc.data().sexo;
                //datos de grado
                formPerfilEstudiante["userStudent"].value = doc.data().user;
                formPerfilEstudiante["passStudent"].value = doc.data().password;


                document.querySelectorAll("#frmPerfilEstudiante .form-group").forEach(el => {
                    el.classList.add("is-filled");
                    el.classList.add("bmd-form-group");
                });
            });
        });
}