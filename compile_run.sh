#!/bin/bash
echo "Compilando o codigo"
for NAME in *.kt ; do 
   echo "Compilando $NAME  --> ${NAME/.kt/.js}"
   kotlinc-js $NAME -output ${NAME/.kt/.js}
   if [ $? -ne 0 ] 
   then
      echo "Erro de compilacao"
	  exit
   fi

done
echo "Executando o servidor web"
#python -m http.server 8000
php -S 0.0.0.0:8000