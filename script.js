
function mostrarImg(boton){
    const mob = boton.value;
    const wrapper = document.querySelector(".wrapper");
    const item = document.createElement("LI");
    item.innerHTML = `  <br>
                        <textarea name="" id="" cols="30" rows="1"></textarea>
                        <br>
                        <img src="img/${mob}.JPG" alt="">`
    wrapper.appendChild(item);
};