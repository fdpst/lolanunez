<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    public function authorize(){
        return true;
    }

    public function rules()
    {
        return [
          'name' => 'required|max:80',
          'email' => 'required|max:120|email|unique:users,email,' . $this->id
        ];
    }

    public function messages()
    {
        return [
          'name.required' => 'Nombre es obligatorio',
          'email.email' => 'Email es obligatorio'
        ];
    }
}
