const iniciar = () => {
  let usuario = document.getElementById("admin").value;
  let contraseña = document.getElementById("contraseña").value;

  if (usuario.length === 0 || contraseña.length === 0) {
    alert("Uno de los campos esta vacio");
  }
  if (usuario === "Admin" || usuario === "admín") {
    if (contraseña === "12345") {
      window.location.href = "html/bienvenido.html";
    }
  } else {
    alert("El usuario o la contraseña es incorrecto");
  }
};

const limpiar = () => {
  document.getElementById("admin").value = "";
  document.getElementById("contraseña").value = "";
};

const volver = () => {
  window.location.href = "../index.html";
};
