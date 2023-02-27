Proyecto final de backend numen


Jugadores:

1. GET:
   
 A) Lista de jugadores: 
 
 http://localhost:8080/player/listPlayers/ - Para ver una lista completa de todos los jugadores que se encuentran agregados a la base de datos.
   
 B) Buscar un jugador por id: 
 
 http://localhost:8080/player/searchPlayer/ - Para buscar un jugador se necesita agregar un parametro un parametro id
 
 Ejemplo: 
 
 http://localhost:8080/player/searchPlayer/63f672317a14b98c86b70c71
 
2. POST: 

  A) Crear un jugador: 
  
  http//localhost:8080/player/newplayer - para crear un jugador se necesita los siguientes datos enviados a través de body:
  
  Para crear un jugador, verificar si el DNI ingresado no exista en la DB previamente.
  
  "name": String,
  "age" : Number,
  "birthdate": String,
  "nacionality": String,
  "club": String,
  "dni", String (Tuve que poner en string ya que hay jugadores extranjeros donde el dni tiene letras y numeros combinados).
   
  
3. PUT:

  A) Editar un jugador:
  
  localhost:8080/player/editPlayer/ - Para editar un jugador se necesita los siguientes datos enviados por body y cumplir ciertas condiciones:
  
  Enviar por parametro el ID del jugador a editar.
  
  Para poder editar un jugador lo primero que hay que tener en cuenta es que no se puede modificar el club donde esta actualmente el jugador si es que la fecha actual en la que se modifica el jugador es menor a la fecha de cierre del libro de pases, salvo que el jugador pase de ser de un club a estar libre, en ese caso se puede modificar sin respetar la fecha del libro de pases. Si el jugador a ser editado no presenta cambios en su club, se puede modificar sin problemas.
  
  Ejemplo: 
  
  http://localhost:8080/player/searchPlayer/63f672317a14b98c86b70c71
  
  "name": String,
  "age" : Number,
  "birthdate": String,
  "nacionality": String,
  "club": String,
  "dni", String
  
4. DELETE: 

  A) Borrar un jugador: 
  
  http://localhost:8080/player/deletePlayer/ - Para poder borrar un jugador se necesita mandar un ID por parametro.
  
  Ejemplo: http://localhost:8080/player/searchPlayer/63f672317a14b98c86b70c71
  
  
  
  
  
Torneo: 

1. GET: 

  A) http://localhost:8080/tournament/positions - Esta ruta proporciona a traves de una API externa, las posiciones actuales del torneo argentino de futbol.
  
  La api externa tiene un limite de uso de 80 consultas maximas. 
  
