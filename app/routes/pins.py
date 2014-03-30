from app import app
from flask import  render_template, request, jsonify
from app.models.pinmodel import PinModel
from app.gpio import duino

channel = { 0:'gpio0', 1:'gpio1', 2:'gpio2', 3:'gpio3', 4:'gpio4',
            5:'gpio5', 6:'gpio6', 7:'gpio7', 8:'gpio8', 9:'gpio9',
           10:'gpio10', 11:'gpio11', 12:'gpio12', 13:'gpio13'
          }
def is_odd(num):
   return num % 2 != 0


@app.route('/duinoflask/pins', methods = ['GET'])
def readPin():
    output = []
    try:
        for i in range(14):
            duino.pinMode(channel[int(i)],duino.INPUT)
            pin = PinModel(i,channel[int(i)],duino.digitalRead(channel[int(i)]))
            output.append(pin)
    except Exception:
        pass
    return jsonify(pins=[e.serialize() for e in output])


@app.route('/duinoflask/pins', methods = ['POST'])
def writePin():
    entity = PinModel(
            id = request.json['id']
            , pinName = request.json['pinName']
            , state = request.json['state']
        )


    duino.pinMode(channel[int(entity.id)],duino.OUTPUT)
    if entity.state == True :
        duino.digitalWrite(channel[int(entity.id)],1)
    else :
        duino.digitalWrite(channel[int(entity.id)],0)

    return jsonify(entity.serialize()), 200
