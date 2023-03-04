let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75, 
});
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo proyectos mecatrónicos (electrónica, programación, control y automatización) y escribo artículos sobre tecnología y ciencia')
  .pauseFor(200)
  .deleteChars(10)
  .start();
