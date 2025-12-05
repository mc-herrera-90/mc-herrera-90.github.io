import bcrypt
from colorama import Fore, Style

def hashear_texto(texto)->str:
    # Generar una sal
    sal = bcrypt.gensalt()
    # Hashear el texto con la sal generada
    texto_hasheado = bcrypt.hashpw(texto.encode('utf-8'), sal)
    return texto_hasheado

def verificar_texto(texto, texto_hasheado)->bool:
    # Verificar si el texto coincide con el texto hasheado
    return bcrypt.checkpw(texto.encode('utf-8'), texto_hasheado)


# 1 Solicitamos al usuario que ingrese el texto a hashear
print(Fore.CYAN + Style.BRIGHT + "=== Hashing de Texto con bcrypt ===" + Style.RESET_ALL)
texto = input(Fore.GREEN + Style.BRIGHT + "Ingrese el texto a hashear: " + Style.RESET_ALL)

# 2 Hasheamos el texto ingresado
texto_hasheado = hashear_texto(texto)

# 3 Mostramos el texto hasheado
print("Texto hasheado:", texto_hasheado.decode('utf-8'))
print("Longitud del texto hasheado:", len(texto_hasheado))

# 4 Solicitamos al usuario que ingrese el texto nuevamente para verificar
segundo_texto = input(Fore.GREEN + Style.BRIGHT + "Ingrese el texto nuevamente para verificar: " + Style.RESET_ALL)

# 5 Verificamos si el texto ingresado coincide con el texto hasheado
if verificar_texto(segundo_texto, texto_hasheado):
    print(Fore.GREEN + Style.BRIGHT + f"¡El texto {texto} coincide con {segundo_texto}!" + Style.RESET_ALL)
else:
    print(Fore.RED + Style.BRIGHT + f"El texto {texto} NO coincide con {segundo_texto}." + Style.RESET_ALL)
