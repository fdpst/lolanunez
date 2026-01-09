<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\CheckPassword;

class AppUsuarioRequest extends FormRequest
{
    public function authorize(){
        return true;
    }

    public function rules()
    {
      return [
        'email'    => 'required|unique:app_usuario,email,' . $this->id . ',id',
        'telefono' => 'required|unique:app_usuario,telefono,' . $this->id . ',id',
        'password' => [
            'required',
            'string',
            'min:6',                // minimo 6
            //'regex:/[a-z]/',      // al menos una minuscula
            //'regex:/[A-Z]/',      // al menos una mayuscula
            //'regex:/[0-9]/',      // un numero
            //'regex:/[@$!%*#?&]/', // un caracter especial
        ],
      ];
    }

    public function messages()
    {
        return [
          'email.required'    => 'Email es obligatorio',
          'telefono.required' => 'Telefono es obligatorio',
          'password.required' => 'Password es obligatorio',
          'email.unique'      => 'Email ya esta en uso',
          'telefono.unique'   => 'Telefono ya esta en uso',
          'password.checkpassword' => 'La contraseña debe ser entre 8 y 20 caracteres, contener letras y números.',
        ];
    }

    public function withValidator($validator){
      $validator->addExtension('checkpassword', function ($attribute, $value, $parameters, $validator) {
        return (strlen($value) < 8 || strlen($value) > 20 || !preg_match("#[0-9]+#", $value) || !preg_match("#[a-zA-Z]+#", $value));
      });
   }
}
