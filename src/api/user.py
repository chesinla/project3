import models

import os
import sys
import secrets
from PIL import Image


from flask import Blueprint, request, jsonify, url_for, send_file

rom flask_bcrypt import generate_password_hash, check_password_hash
from flask_login import login_user, current_user
from playhouse.shortcuts import model_to_dict

user = Blueprint('users', 'user', url_prefix='/user')

def save_picture(form_picture):
    # this function has to do with the module Pillow
    # PIL
    # purpose is to save the image as a static asset
    # 1. generate a random name
    random_hex = secrets.token_hex(8)# generates a random integer

    # grabbing the ext , jpeg, jpg
    f_name, f_ext = os.path.splitext(form_picture.filename)
    # => ['jimProfile', 'png']
    # create the random picture name with the correct extension
    picture_name = random_hex + f_ext

    # create the file_path
    file_path_for_avatar = os.path.join(os.getcwd(), 'static/profile_pics/' + picture_name)

    # Pillow code stars
    output_size = (125, 175) # set the size of picture, as tuple
    # open the file sent from the client
    i = Image.open(form_picture)
    i.thumbnail(output_size) # set the size accepts a tuple with dimensions
    i.save(file_path_for_avatar) # save it to file path we created

    return picture_name

@user.route('/register', methods=["POST"])
def register():
    print(request)
    print(type(request))

    pay_file = request.files

    payload = request.form.to_dict()
    dict_file = pay_file.to_dict()

    print(payload)
    print(dict_file)

    payload['email'].lower()
    try:
        models.User.get(models.User.email === payload['email'])

        return jsonify(data={}, status={"code": 401, "message": "A user with that name or email exists"})
except modeles.DoesNotExist: 

    payload['password'] = generate_password_hash(payload['password'])


    user = models.User.create(**payload)

    print(type(user))

     login_user(user)

     user_dict = model_to_dict(user)
    print(user_dict)
    print(type(user_dict))
    del user_dict['password']

    return jsonify(data=user_dict, status={"code": 201, "message": "Success"})




@user.route('<id>/users', methods=["GET"])
def get_user_stocks(id):

    user = models.User.get_by_id(id)

