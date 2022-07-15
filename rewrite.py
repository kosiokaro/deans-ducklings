import pyfirmata
import time
import keyboard
import js2py

result, queuefile = js2py.run_file("Queue.js");

board = pyfirmata.Arduino('COM3')

it = pyfirmata.util.Iterator(board)
it.start()

board.digital[10].mode = pyfirmata.INPUT

f = open("index.html", "r")
content = f.read()
f.close()

start = content.find('document.getElementById("isIn?").innerHTML')
fragment = content[start:]
in_fragment = fragment[0:fragment.find("=")]+'= "The Dean is IN!"'+fragment[fragment.find(";"):]
in_content = content[0:start]+in_fragment

out_fragment = fragment[0:fragment.find("=")]+'= "The Dean is OUT!"'+fragment[fragment.find(";"):]
out_content = content[0:start]+out_fragment

isIn = True
button_pressed = False
on = False

f = open("index.html", "w")
f.write(out_content)
f.close()

while True:
    result = queuefile.get_num_in_queue()
    print(result)

    sw = board.digital[10].read()
    if sw:
        button_pressed = True
    else:
        if button_pressed:
            on = not on
            button_pressed = False
    
    if not isIn:
        board.digital[13].write(1)
    else:
        board.digital[13].write(0)
    time.sleep(0.1)

    if on:
    # keyboard.wait('esc')
        f = open("index.html", "w")
        if isIn:
            f.write(in_content)
        else:
            f.write(out_content)
        f.close()
        isIn = not isIn
        keyboard.press_and_release('ctrl + r')
        on = not on
